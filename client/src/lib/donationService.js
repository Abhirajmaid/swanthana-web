import { db } from './firebase';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    limit,
    where,
    getDoc,
    serverTimestamp
} from 'firebase/firestore';

const COLLECTION_NAME = 'donations';

/**
 * Create a new donation record
 * @param {Object} donationData - The donation data
 * @returns {Promise<string>} - The ID of the created donation
 */
export const createDonation = async (donationData) => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...donationData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            status: 'pending'
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating donation:', error);
        throw error;
    }
};

/**
 * Get all donations with optional filters
 * @param {Object} filters - Optional filters for donations
 * @returns {Promise<Array>} - Array of donation objects
 */
export const getAllDonations = async (filters = {}) => {
    try {
        let q = collection(db, COLLECTION_NAME);

        // Apply filters
        if (filters.status) {
            q = query(q, where('status', '==', filters.status));
        }

        if (filters.paymentMethod) {
            q = query(q, where('paymentMethod', '==', filters.paymentMethod));
        }

        if (filters.minAmount) {
            q = query(q, where('amount', '>=', filters.minAmount));
        }

        if (filters.maxAmount) {
            q = query(q, where('amount', '<=', filters.maxAmount));
        }

        // Order by creation date (newest first)
        q = query(q, orderBy('createdAt', 'desc'));

        // Apply limit if specified
        if (filters.limit) {
            q = query(q, limit(filters.limit));
        }

        const querySnapshot = await getDocs(q);
        const donations = [];

        querySnapshot.forEach((doc) => {
            donations.push({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate?.() || new Date(),
                updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
            });
        });

        return donations;
    } catch (error) {
        console.error('Error getting donations:', error);
        throw error;
    }
};

/**
 * Get a donation by ID
 * @param {string} donationId - The donation ID
 * @returns {Promise<Object>} - The donation object
 */
export const getDonationById = async (donationId) => {
    try {
        const docRef = doc(db, COLLECTION_NAME, donationId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.() || new Date(),
                updatedAt: docSnap.data().updatedAt?.toDate?.() || new Date()
            };
        } else {
            throw new Error('Donation not found');
        }
    } catch (error) {
        console.error('Error getting donation:', error);
        throw error;
    }
};

/**
 * Update donation status
 * @param {string} donationId - The donation ID
 * @param {string} status - The new status (pending, completed, failed, refunded)
 * @param {Object} additionalData - Additional data to update
 * @returns {Promise<void>}
 */
export const updateDonationStatus = async (donationId, status, additionalData = {}) => {
    try {
        const docRef = doc(db, COLLECTION_NAME, donationId);
        await updateDoc(docRef, {
            status,
            ...additionalData,
            updatedAt: serverTimestamp()
        });
    } catch (error) {
        console.error('Error updating donation status:', error);
        throw error;
    }
};

/**
 * Delete a donation
 * @param {string} donationId - The donation ID
 * @returns {Promise<void>}
 */
export const deleteDonation = async (donationId) => {
    try {
        const docRef = doc(db, COLLECTION_NAME, donationId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Error deleting donation:', error);
        throw error;
    }
};

/**
 * Get donation statistics
 * @returns {Promise<Object>} - Statistics object
 */
export const getDonationStats = async () => {
    try {
        const donations = await getAllDonations();

        const stats = {
            total: donations.length,
            totalAmount: donations.reduce((sum, donation) => sum + donation.amount, 0),
            completed: donations.filter(d => d.status === 'completed').length,
            pending: donations.filter(d => d.status === 'pending').length,
            failed: donations.filter(d => d.status === 'failed').length,
            averageAmount: 0,
            topDonors: [],
            monthlyStats: {}
        };

        // Calculate average amount
        if (stats.total > 0) {
            stats.averageAmount = stats.totalAmount / stats.total;
        }

        // Get top donors (non-anonymous)
        const namedDonors = donations.filter(d => d.donorInfo?.name && d.donorInfo.name !== 'Anonymous');
        const donorMap = {};

        namedDonors.forEach(donation => {
            const name = donation.donorInfo.name;
            if (!donorMap[name]) {
                donorMap[name] = {
                    name,
                    totalAmount: 0,
                    donationCount: 0,
                    email: donation.donorInfo.email
                };
            }
            donorMap[name].totalAmount += donation.amount;
            donorMap[name].donationCount += 1;
        });

        stats.topDonors = Object.values(donorMap)
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 10);

        // Calculate monthly stats for the last 12 months
        const now = new Date();
        const monthlyStats = {};

        for (let i = 0; i < 12; i++) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthKey = date.toISOString().slice(0, 7); // YYYY-MM format
            monthlyStats[monthKey] = {
                count: 0,
                amount: 0
            };
        }

        donations.forEach(donation => {
            const monthKey = donation.createdAt.toISOString().slice(0, 7);
            if (monthlyStats[monthKey]) {
                monthlyStats[monthKey].count += 1;
                monthlyStats[monthKey].amount += donation.amount;
            }
        });

        stats.monthlyStats = monthlyStats;

        return stats;
    } catch (error) {
        console.error('Error getting donation stats:', error);
        throw error;
    }
};

/**
 * Get recent donations for dashboard
 * @param {number} limit - Number of donations to retrieve
 * @returns {Promise<Array>} - Array of recent donations
 */
export const getRecentDonations = async (limit = 10) => {
    try {
        return await getAllDonations({ limit });
    } catch (error) {
        console.error('Error getting recent donations:', error);
        throw error;
    }
};

/**
 * Process payment (placeholder for actual payment integration)
 * @param {Object} donationData - The donation data
 * @param {string} paymentMethod - The payment method
 * @returns {Promise<Object>} - Payment result
 */
export const processPayment = async (donationData, paymentMethod) => {
    // This is a placeholder function
    // In a real application, you would integrate with payment gateways like:
    // - Razorpay
    // - Stripe
    // - PayPal
    // - UPI gateways

    try {
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Create donation record
        const donationId = await createDonation(donationData);

        // Simulate payment success/failure
        const isSuccess = Math.random() > 0.1; // 90% success rate for simulation

        if (isSuccess) {
            await updateDonationStatus(donationId, 'completed', {
                paymentTransactionId: `txn_${Date.now()}`,
                paymentProcessedAt: serverTimestamp()
            });

            return {
                success: true,
                donationId,
                transactionId: `txn_${Date.now()}`,
                message: 'Payment processed successfully'
            };
        } else {
            await updateDonationStatus(donationId, 'failed', {
                failureReason: 'Payment gateway error',
                paymentProcessedAt: serverTimestamp()
            });

            return {
                success: false,
                donationId,
                message: 'Payment failed. Please try again.'
            };
        }
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};

/**
 * Send donation receipt email (placeholder)
 * @param {string} donationId - The donation ID
 * @returns {Promise<void>}
 */
export const sendDonationReceipt = async (donationId) => {
    // This is a placeholder function
    // In a real application, you would integrate with email services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Firebase Cloud Functions with email service

    try {
        const donation = await getDonationById(donationId);

        // Simulate email sending
        console.log('Sending donation receipt to:', donation.donorInfo.email);

        // In real implementation, generate and send PDF receipt
        // with tax exemption details under Section 80G

    } catch (error) {
        console.error('Error sending donation receipt:', error);
        throw error;
    }
}; 