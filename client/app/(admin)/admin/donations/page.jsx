"use client";
import { useState, useEffect } from "react";
import {
  getAllDonations,
  getDonationStats,
  updateDonationStatus,
  deleteDonation,
} from "@/src/lib/donationService";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminSidebar from "@/src/components/AdminSidebar";
import {
  Heart,
  DollarSign,
  TrendingUp,
  Users,
  Search,
  Filter,
  Download,
  Eye,
  Edit3,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchDonations();
    fetchStats();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const donationsData = await getAllDonations();
      setDonations(donationsData);
    } catch (error) {
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const statsData = await getDonationStats();
      setStats(statsData);
    } catch (error) {
      console.error("Error fetching donation stats:", error);
    }
  };

  const handleStatusUpdate = async (donationId, newStatus) => {
    try {
      await updateDonationStatus(donationId, newStatus);
      await fetchDonations(); // Refresh the list
      await fetchStats(); // Refresh stats
      alert(`Donation status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating donation status:", error);
      alert("Error updating donation status");
    }
  };

  const handleDelete = async (donationId) => {
    if (window.confirm("Are you sure you want to delete this donation?")) {
      try {
        await deleteDonation(donationId);
        await fetchDonations();
        await fetchStats();
        alert("Donation deleted successfully");
      } catch (error) {
        console.error("Error deleting donation:", error);
        alert("Error deleting donation");
      }
    }
  };

  const filteredDonations = donations
    .filter((donation) => {
      const matchesSearch =
        donation.donorInfo?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        donation.donorInfo?.email
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        donation.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || donation.status === statusFilter;
      const matchesPaymentMethod =
        paymentMethodFilter === "all" ||
        donation.paymentMethod === paymentMethodFilter;

      return matchesSearch && matchesStatus && matchesPaymentMethod;
    })
    .sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "amount":
          aValue = a.amount;
          bValue = b.amount;
          break;
        case "date":
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
        case "status":
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const exportDonations = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "ID,Donor Name,Email,Amount,Payment Method,Status,Date,Message\n" +
      filteredDonations
        .map(
          (donation) =>
            `${donation.id},"${donation.donorInfo?.name || "Anonymous"}","${
              donation.donorInfo?.email || ""
            }",${donation.amount},${donation.paymentMethod},${
              donation.status
            },"${donation.createdAt.toLocaleString()}","${
              donation.donorInfo?.message || ""
            }"`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `donations_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white shadow-sm border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Donations Management
                </h1>
                <p className="text-gray-600">Manage and track all donations</p>
              </div>
              <button
                onClick={exportDonations}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {/* Statistics Cards */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">
                        Total Amount
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{stats.totalAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">
                        Total Donations
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.total}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">
                        Average Amount
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{Math.round(stats.averageAmount).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">
                        Completed
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.completed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search donations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>

                <select
                  value={paymentMethodFilter}
                  onChange={(e) => setPaymentMethodFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Payment Methods</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                  <option value="netbanking">Net Banking</option>
                </select>

                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split("-");
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="amount-desc">Highest Amount</option>
                  <option value="amount-asc">Lowest Amount</option>
                  <option value="status-asc">Status A-Z</option>
                </select>
              </div>
            </div>

            {/* Donations Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Donor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="ml-2">Loading donations...</span>
                          </div>
                        </td>
                      </tr>
                    ) : filteredDonations.length === 0 ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-6 py-4 text-center text-gray-500"
                        >
                          No donations found
                        </td>
                      </tr>
                    ) : (
                      filteredDonations.map((donation) => (
                        <tr key={donation.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {donation.donorInfo?.name || "Anonymous"}
                              </div>
                              <div className="text-sm text-gray-500">
                                {donation.donorInfo?.email || "No email"}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              ₹{donation.amount.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 capitalize">
                              {donation.paymentMethod}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                donation.status
                              )}`}
                            >
                              {getStatusIcon(donation.status)}
                              <span className="ml-1 capitalize">
                                {donation.status}
                              </span>
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {donation.createdAt.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedDonation(donation);
                                  setShowDetails(true);
                                }}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              {donation.status === "pending" && (
                                <button
                                  onClick={() =>
                                    handleStatusUpdate(donation.id, "completed")
                                  }
                                  className="text-green-600 hover:text-green-900"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                              )}

                              <button
                                onClick={() => handleDelete(donation.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Details Modal */}
      {showDetails && selectedDonation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Donation Details</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Donation ID
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedDonation.id}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Amount
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      ₹{selectedDonation.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Payment Method
                    </label>
                    <p className="mt-1 text-sm text-gray-900 capitalize">
                      {selectedDonation.paymentMethod}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        selectedDonation.status
                      )}`}
                    >
                      {getStatusIcon(selectedDonation.status)}
                      <span className="ml-1 capitalize">
                        {selectedDonation.status}
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Donor Information
                  </label>
                  <div className="mt-2 bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Name:</strong>{" "}
                      {selectedDonation.donorInfo?.name || "Anonymous"}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      {selectedDonation.donorInfo?.email || "Not provided"}
                    </p>
                    <p>
                      <strong>Phone:</strong>{" "}
                      {selectedDonation.donorInfo?.phone || "Not provided"}
                    </p>
                    <p>
                      <strong>PAN Card:</strong>{" "}
                      {selectedDonation.donorInfo?.panCard || "Not provided"}
                    </p>
                    {selectedDonation.donorInfo?.address && (
                      <p>
                        <strong>Address:</strong>{" "}
                        {selectedDonation.donorInfo.address}
                      </p>
                    )}
                  </div>
                </div>

                {selectedDonation.donorInfo?.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">
                      {selectedDonation.donorInfo.message}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Created At
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedDonation.createdAt.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Updated At
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedDonation.updatedAt.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
