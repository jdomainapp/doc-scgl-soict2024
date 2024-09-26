import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchEntities = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const createEntity = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating entity:", error);
        throw error;
    }
};

export const updateEntity = async (endpoint, id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${endpoint}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating entity:", error);
        throw error;
    }
};

export const deleteEntity = async (endpoint, id) => {
    try {
        const response = await axios.delete(`${API_URL}/${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting entity:", error);
        throw error;
    }
};
