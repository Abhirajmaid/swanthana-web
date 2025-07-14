"use client";
import { useState } from "react";
import { migrateBlogsToFirebase } from "@/src/scripts/migrateBlogsToFirebase";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminSidebar from "@/src/components/AdminSidebar";
import { ArrowLeft, Database, Play, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function MigrationPage() {
  const [migrationStatus, setMigrationStatus] = useState("idle"); // idle, running, completed, error
  const [migrationResults, setMigrationResults] = useState(null);
  const [migrationLogs, setMigrationLogs] = useState([]);

  const startMigration = async () => {
    setMigrationStatus("running");
    setMigrationLogs([]);
    setMigrationResults(null);

    try {
      // Override console.log to capture logs
      const originalLog = console.log;
      const originalError = console.error;
      const logs = [];

      console.log = (...args) => {
        logs.push({
          type: "log",
          message: args.join(" "),
          timestamp: new Date(),
        });
        setMigrationLogs([...logs]);
        originalLog(...args);
      };

      console.error = (...args) => {
        logs.push({
          type: "error",
          message: args.join(" "),
          timestamp: new Date(),
        });
        setMigrationLogs([...logs]);
        originalError(...args);
      };

      const results = await migrateBlogsToFirebase();

      // Restore original console methods
      console.log = originalLog;
      console.error = originalError;

      setMigrationResults(results);
      setMigrationStatus("completed");
    } catch (error) {
      console.error("Migration failed:", error);
      setMigrationStatus("error");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 lg:ml-64 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mt-4">
                Blog Migration
              </h1>
              <p className="text-gray-600">
                Migrate existing blog data from static files to Firebase
              </p>
            </div>

            {/* Migration Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Database className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-blue-900 mb-2">
                    About Migration
                  </h3>
                  <p className="text-blue-800 mb-4">
                    This tool will transfer all existing blog posts from your
                    static data file to Firebase Firestore. This should only be
                    run once when setting up the admin dashboard for the first
                    time.
                  </p>
                  <div className="text-sm text-blue-700">
                    <p>
                      <strong>What happens:</strong>
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Reads all blogs from the static data file</li>
                      <li>
                        Creates corresponding documents in Firebase Firestore
                      </li>
                      <li>
                        Preserves all blog content, metadata, and formatting
                      </li>
                      <li>Generates timestamps for database tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration Control */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Run Migration
              </h3>

              {migrationStatus === "idle" && (
                <div>
                  <p className="text-gray-600 mb-4">
                    Click the button below to start migrating your blog data to
                    Firebase.
                  </p>
                  <button
                    onClick={startMigration}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Start Migration
                  </button>
                </div>
              )}

              {migrationStatus === "running" && (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Migration in progress...</p>
                </div>
              )}

              {migrationStatus === "completed" && migrationResults && (
                <div>
                  <div className="flex items-center text-green-600 mb-4">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="text-lg font-medium">
                      Migration Completed!
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-green-800 font-medium">
                        Successfully Migrated
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {migrationResults.success}
                      </div>
                    </div>

                    {migrationResults.failed > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="text-red-800 font-medium">Failed</div>
                        <div className="text-2xl font-bold text-red-600">
                          {migrationResults.failed}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/admin/blogs"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Migrated Blogs
                  </Link>
                </div>
              )}

              {migrationStatus === "error" && (
                <div className="flex items-center text-red-600">
                  <XCircle className="h-6 w-6 mr-2" />
                  <span className="text-lg font-medium">Migration Failed</span>
                </div>
              )}
            </div>

            {/* Migration Logs */}
            {migrationLogs.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-medium text-gray-900">
                    Migration Logs
                  </h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
                    {migrationLogs.map((log, index) => (
                      <div
                        key={index}
                        className={`mb-1 ${
                          log.type === "error"
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                      >
                        <span className="text-gray-400">
                          {log.timestamp.toLocaleTimeString()}
                        </span>{" "}
                        {log.message}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
