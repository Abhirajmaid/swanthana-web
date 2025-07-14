"use client";
import { useState } from "react";
import {
  Heart,
  Users,
  Shield,
  Award,
  CheckCircle,
  CreditCard,
  Smartphone,
  QrCode,
  Star,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/src/components/common/SectionHeader";
import { processPayment, sendDonationReceipt } from "@/src/lib/donationService";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    panCard: "",
    message: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

  const impactData = [
    {
      amount: 500,
      impact: "Supports one therapy session for a child",
      icon: <Heart className="w-6 h-6 text-brand-primary" />,
    },
    {
      amount: 1000,
      impact: "Provides speech therapy materials for a month",
      icon: <Users className="w-6 h-6 text-brand-primary" />,
    },
    {
      amount: 2500,
      impact: "Covers assessment and initial treatment plan",
      icon: <Shield className="w-6 h-6 text-brand-primary" />,
    },
    {
      amount: 5000,
      impact: "Sponsors a complete rehabilitation program",
      icon: <Award className="w-6 h-6 text-brand-primary" />,
    },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value));
    }
  };

  const handleDonorInfoChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare donation data
      const donationData = {
        amount: selectedAmount,
        paymentMethod,
        donorInfo: isAnonymous ? { name: "Anonymous" } : donorInfo,
        isAnonymous,
        currency: "INR",
      };

      // Process payment through donation service
      const result = await processPayment(donationData, paymentMethod);

      if (result.success) {
        // Send receipt email if donor provided email
        if (!isAnonymous && donorInfo.email) {
          try {
            await sendDonationReceipt(result.donationId);
          } catch (emailError) {
            console.error("Failed to send receipt email:", emailError);
            // Don't fail the whole process if email fails
          }
        }

        alert(
          `Thank you for your donation! Your transaction ID is: ${result.transactionId}`
        );

        // Reset form
        setSelectedAmount(500);
        setCustomAmount("");
        setPaymentMethod("card");
        setDonorInfo({
          name: "",
          email: "",
          phone: "",
          address: "",
          panCard: "",
          message: "",
        });
        setIsAnonymous(false);
      } else {
        alert(result.message || "Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Donation error:", error);
      alert("There was an error processing your donation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getImpactMessage = (amount) => {
    const impact = impactData.find((item) => item.amount <= amount);
    return impact
      ? impact.impact
      : "Your donation will make a significant impact";
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary py-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Lives Through Your Donation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your contribution helps us provide essential rehabilitation services
            to children with special needs and their families.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-brand-primary mb-2">
                  ₹{item.amount.toLocaleString()}
                </div>
                <p className="text-sm text-brand-gray">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Amount Selection */}
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-6">
                  Choose Your Donation Amount
                </h3>

                {/* Predefined Amounts */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === amount && !customAmount
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-brand-gray-light hover:border-brand-primary"
                      }`}
                    >
                      <div className="text-lg font-semibold">₹{amount}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray">
                    ₹
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-8 pr-4 py-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                {/* Impact Message */}
                <div className="mt-4 p-4 bg-brand-light/50 rounded-lg">
                  <div className="flex items-center text-brand-primary">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      {getImpactMessage(selectedAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  Payment Method
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-brand-primary bg-brand-primary/10"
                        : "border-brand-gray-light hover:border-brand-primary"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Credit/Debit Card</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "upi"
                        ? "border-brand-primary bg-brand-primary/10"
                        : "border-brand-gray-light hover:border-brand-primary"
                    }`}
                  >
                    <Smartphone className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">UPI</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("netbanking")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "netbanking"
                        ? "border-brand-primary bg-brand-primary/10"
                        : "border-brand-gray-light hover:border-brand-primary"
                    }`}
                  >
                    <QrCode className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Net Banking</div>
                  </button>
                </div>
              </div>

              {/* Donor Information */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-dark">
                    Donor Information
                  </h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-brand-gray">Donate anonymously</span>
                  </label>
                </div>

                {!isAnonymous && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={donorInfo.name}
                      onChange={handleDonorInfoChange}
                      required
                      className="p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange}
                      required
                      className="p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={donorInfo.phone}
                      onChange={handleDonorInfoChange}
                      className="p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <input
                      type="text"
                      name="panCard"
                      placeholder="PAN Card (for 80G receipt)"
                      value={donorInfo.panCard}
                      onChange={handleDonorInfoChange}
                      className="p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <textarea
                      name="address"
                      placeholder="Address"
                      value={donorInfo.address}
                      onChange={handleDonorInfoChange}
                      rows="3"
                      className="md:col-span-2 p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <textarea
                      name="message"
                      placeholder="Message (Optional)"
                      value={donorInfo.message}
                      onChange={handleDonorInfoChange}
                      rows="3"
                      className="md:col-span-2 p-3 border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                )}
              </div>

              {/* Tax Benefits */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Tax Benefits Available</span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Your donation is eligible for tax deduction under Section 80G
                  of the Income Tax Act.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !selectedAmount ||
                  (!isAnonymous && !donorInfo.name)
                }
                className="w-full bg-brand-primary text-white py-4 rounded-lg font-semibold text-lg transition-all hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Donate ₹{selectedAmount?.toLocaleString()} Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Why Your Donation Matters"
            subtitle="Every contribution directly impacts the lives of children and families in need"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Heart className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Direct Impact
              </h3>
              <p className="text-brand-gray">
                100% of your donation goes directly to providing therapy and
                rehabilitation services to children with special needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Transparency
              </h3>
              <p className="text-brand-gray">
                We provide detailed reports on how your donation is used and the
                impact it creates in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Award className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Trusted
              </h3>
              <p className="text-brand-gray">
                Registered NGO with proper certifications and a proven track
                record of serving the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
