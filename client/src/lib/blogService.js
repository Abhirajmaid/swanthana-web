import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    where,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

const BLOGS_COLLECTION = 'blogs';

// Create a new blog
export const createBlog = async (blogData) => {
    try {
        const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
            ...blogData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

// Get all blogs
export const getAllBlogs = async () => {
    try {
        const q = query(collection(db, BLOGS_COLLECTION), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const blogs = [];
        querySnapshot.forEach((doc) => {
            blogs.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

// Get a single blog by ID
export const getBlogById = async (id) => {
    try {
        const docRef = doc(db, BLOGS_COLLECTION, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
            };
        } else {
            throw new Error('Blog not found');
        }
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
};

// Get a blog by slug
export const getBlogBySlug = async (slug) => {
    try {
        const q = query(collection(db, BLOGS_COLLECTION), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            return {
                id: doc.id,
                ...doc.data(),
            };
        } else {
            throw new Error('Blog not found');
        }
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        throw error;
    }
};

// Update a blog
export const updateBlog = async (id, updateData) => {
    try {
        const docRef = doc(db, BLOGS_COLLECTION, id);
        await updateDoc(docRef, {
            ...updateData,
            updatedAt: serverTimestamp(),
        });
        return true;
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

// Delete a blog
export const deleteBlog = async (id) => {
    try {
        const docRef = doc(db, BLOGS_COLLECTION, id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};

// Generate slug from title
export const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
}; 