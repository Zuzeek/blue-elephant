import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchRandomName = async () => {
    try {
        const response = await axios.get(`${API_URL}/name`);
        return response.data.name;
    } catch (error) {
        console.error('Error fetching random name:', error);
        throw error;
    }
};

export const fetchRandomEmail = async () => {
    try {
        const response = await axios.get(`${API_URL}/email`);
        return response.data.email;
    } catch (error) {
        console.error('Error fetching random email:', error);
        throw error;
    }
};

export const fetchRandomAnimal = async () => {
    try {
        const response = await axios.get(`${API_URL}/animal`);
        return response.data.animal;
    } catch (error) {
        console.error('Error fetching random animal:', error);
        throw error;
    }
};

export const fetchRandomCombination = async () => {
    try {
        const response = await axios.get(`${API_URL}/combo`);
        return response.data.combination;
    } catch (error) {
        console.error('Error fetching random combo:', error);
        throw error;
    }
};