const API_URL =  'http://localhost:3001/api';

export const fetchMetrics = async (deviceId: string) => {
    try {
        const response = await fetch(`${API_URL}/metrics/${deviceId}`);
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};