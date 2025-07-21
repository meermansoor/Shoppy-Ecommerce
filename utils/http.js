import axios from 'axios';
import { useState } from 'react';

export const BACKEND_URL ='https://expo-ecommercea-default-rtdb.firebaseio.com';


export async function getProducts() {
    try {
        const response = await axios.get(`${BACKEND_URL}/products.json`);
        const data = response.data;
        
        // If data is null or undefined, return empty array
        if (!data) {
            return [];
        }
        
        // If data is an object (Firebase format), convert to array
        if (typeof data === 'object' && !Array.isArray(data)) {
            return Object.values(data);
        }
        
        // If data is already an array, return as is
        return Array.isArray(data) ? data : [];
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getCategories() {
    try {
        const response = await axios.get(`${BACKEND_URL}/categories.json`);
        const data = response.data;
        
        // If data is null or undefined, return empty array
        if (!data) {
            return [];
        }
        
        // If data is an object (Firebase format), convert to array
        if (typeof data === 'object' && !Array.isArray(data)) {
            return Object.values(data);
        }
        
        // If data is already an array, return as is
        return Array.isArray(data) ? data : [];
        
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function Login(email, password) {
    try {
        // Get all users
        const response = await axios.get(`${BACKEND_URL}/users.json`);
        const data = response.data;

        if (!data) {
            throw new Error('Invalid email or password');
        }
        const user = Object.values(data).find(user => 
            user.email === email && user.password === password
        );

        if (!user) {
            throw new Error('Invalid email or password');
        }

        return user;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}

export async function Register(email, password, confirmPassword) {
    try {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Check if user already exists
        const existingUsers = await axios.get(`${BACKEND_URL}/users.json`);
        const users = existingUsers.data;

        if (users) {
            const userExists = Object.values(users).some(user => user.email === email);
            if (userExists) {
                throw new Error('User already exists');
            }
        }

        // Create new user
        const response = await axios.post(`${BACKEND_URL}/users.json`, {
            email,
            password,
            createdAt: new Date().toISOString()
        });

        if (!response.data) {
            throw new Error('Failed to register user');
        }

        return {
            email,
            id: response.data.name // Firebase returns the new ID in the "name" field
        };

    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
}


export async function getProductById(id){
    try{
        const response = await axios.get(`${BACKEND_URL}/products/${id}.json`);
        return response.data;
    }catch(error){
        console.error('Error fetching product by id:', error);
    }
}



export async function addToCart (productId, quantity){
    try{
        const response = await axios.post(`${BACKEND_URL}/cart.json`);
        
        if(!response){
            throw new Error('Failed to add to cart');
        }

        return response.data;
    }catch(error){
        console.error('Error adding to cart:', error);
        throw error;
    }
}


export async function getCart(){
    try{
        const response = await axios.get(`${BACKEND_URL}/cart.json`);
        return response.data;
    }catch(error){
        console.error('Error fetching cart:', error);
        throw error;
    }
}