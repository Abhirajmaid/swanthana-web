"use client";
import { useEffect } from "react";
import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminRedirectPage() {
  const { user, isAdminUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || !isAdminUser) {
        // Not logged in or not an admin, redirect to login
        router.push("/admin/login");
      } else {
        // Logged in as admin, redirect to dashboard
        router.push("/admin/dashboard");
      }
    }
  }, [user, isAdminUser, loading, router]);

  // Show loading screen while determining redirect
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 bg-white shadow">
          <img
            src="/images/logo1.png"
            alt="Swanthana Logo"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
