import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase';

// Admin login
export const loginAdmin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// Admin logout
export const logoutAdmin = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};

// Check if user is admin (you can customize this logic)
export const isAdmin = (user) => {
    if (!user || !user.email) return false;

    // Check against admin emails (you can modify this list)
    const adminEmails = [
        'admin@swanthana.com',
        'manager@swanthana.com'
    ];

    return adminEmails.includes(user.email);
};

// Auth state listener
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
}; 