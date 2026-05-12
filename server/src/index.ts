import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Роут для проверки связи
app.get('/ping', (req, res) => {
  res.send('pong');
});

/**
 * ПРИЕМ ДАННЫХ ОТ WEMOS (IoT Endpoint)
 * Wemos будет слать POST запрос с JSON: { deviceId: 'MAC', temp: 25.4, co2: 450, hum: 40 }
 */
app.post('/api/telemetry', async (req, res) => {
  const { deviceId, temp, co2, humidity } = req.body;

  try {
    // 1. Обновляем статус устройства (или создаем, если новое)
    await prisma.device.upsert({
      where: { id: deviceId },
      update: { lastOnline: new Date() },
      create: { id: deviceId, lastOnline: new Date() },
    });

    // 2. Записываем метрики в историю
    const log = await prisma.metric.create({
      data: {
        temp: parseFloat(temp),
        co2: parseFloat(co2),
        humidity: parseFloat(humidity),
        deviceId: deviceId
      }
    });

    console.log(`[IoT] Data received from ${deviceId}: ${temp}°C, ${co2}ppm`);
    res.status(201).json({ status: 'success', id: log.id });
  } catch (error) {
    console.error('Telemetry error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ ФРОНТЕНДА
 */
app.get('/api/metrics/:deviceId', async (req, res) => {
  const { deviceId } = req.params;
  
  const history = await prisma.metric.findMany({
    where: { deviceId },
    take: 50, // берем последние 50 записей для графика
    orderBy: { createdAt: 'desc' }
  });

  res.json(history.reverse()); // возвращаем в хронологическом порядке
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
