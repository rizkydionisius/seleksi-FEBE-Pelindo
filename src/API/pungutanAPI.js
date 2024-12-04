import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/pungutan";

// Function to create or update pungutan data
export const savePungutan = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Return error message from backend
      return error.response.data;
    }
    throw error;
  }
};

// Function to fetch all pungutan data (if needed)
export const fetchPungutanData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching pungutan data:", error);
    throw error;
  }
};
