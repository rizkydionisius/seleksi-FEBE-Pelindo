import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/transaksi";

// Function to create or update transaksi data
export const saveTransaksi = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data; // Return error message from backend
    }
    throw error;
  }
};

// Function to fetch all transaksi data (optional)
export const fetchTransaksiData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaksi data:", error);
    throw error;
  }
};
