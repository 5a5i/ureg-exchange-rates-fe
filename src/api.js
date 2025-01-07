import axios from 'axios';

export const fetchExchangeRates = async (date) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/rates?date=${date}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    return [];
  }
};
