"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Download, Calendar, Eye, ChevronRight } from "lucide-react";
import SectionHeader from "@/src/components/common/SectionHeader";

// Sample annual reports data - you can replace this with Firebase data later
const annualReports = [
  {
    id: 1,
    slug: "annual-report-2023",
    title: "Annual Report 2023",
    year: "2023",
    description:
      "A comprehensive overview of Swanthana's achievements, impact, and growth throughout 2023. Discover our journey of transforming lives and building stronger communities.",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    publishedDate: "2024-03-15",
    pages: 48,
    fileSize: "2.4 MB",
    downloadUrl: "/documents/swanthana-annual-report-2023.pdf",
    highlights: [
      "55+ Women Successfully Rehabilitated",
      "7 Different Conditions Treated",
      "100% Family Satisfaction Rate",
      "New Treatment Programs Launched",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "annual-report-2022",
    title: "Annual Report 2022",
    year: "2022",
    description:
      "Our inaugural year report showcasing the foundation of Swanthana and our early impact in women's mental health rehabilitation and de-addiction services.",
    coverImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    publishedDate: "2023-04-20",
    pages: 32,
    fileSize: "1.8 MB",
    downloadUrl: "/documents/swanthana-annual-report-2022.pdf",
    highlights: [
      "Center Establishment & Launch",
      "Initial Team Formation",
      "First Treatment Programs",
      "Community Partnerships",
    ],
    featured: false,
  },
];

export default function AnnualReportsPage() {
  const [selectedYear, setSelectedYear] = useState("All");

  // Get unique years for filtering
  const years = ["All", ...new Set(annualReports.map((report) => report.year))];

  // Filter reports by year
  const filteredReports =
    selectedYear === "All"
      ? annualReports
      : annualReports.filter((report) => report.year === selectedYear);

  const featuredReport = annualReports.find((report) => report.featured);
  const regularReports = filteredReports.filter((report) => !report.featured);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark bg-gradient-to-br from-brand-primary via-brand-primary/70 to-brand-secondary py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-secondary/20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 rounded-full blur-2xl animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
                Annual
              </span>
              <br />
              <span className="text-white/90">Reports</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transparency in our mission. Discover our yearly achievements,
              impact stories, and financial accountability.
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-white/80 font-medium">Filter by Year:</span>
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedYear === year
                        ? "bg-white text-brand-primary font-semibold"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badge={{ icon: <FileText />, text: "Annual Reports" }}
            title="Our"
            gradientText="Transparency"
            description="Comprehensive reports showcasing our annual achievements, impact, and accountability"
          />

          {/* Featured Report */}
          {featuredReport && selectedYear === "All" && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">
                Featured Report
              </h3>
              <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-8 border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={featuredReport.coverImage}
                        alt={featuredReport.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Latest Report
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-brand-dark mb-4">
                      {featuredReport.title}
                    </h4>
                    <p className="text-brand-gray mb-6 leading-relaxed">
                      {featuredReport.description}
                    </p>

                    {/* Report Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-brand-gray">
                        <Calendar className="w-4 h-4" />
                        Published:{" "}
                        {new Date(
                          featuredReport.publishedDate
                        ).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-brand-gray">
                        <FileText className="w-4 h-4" />
                        {featuredReport.pages} pages
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-8">
                      <h5 className="font-semibold text-brand-dark mb-3">
                        Key Highlights:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {featuredReport.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-brand-gray"
                          >
                            <ChevronRight className="w-3 h-3 text-brand-primary" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/annual-report/${featuredReport.slug}`}
                        className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Report
                      </Link>
                      <a
                        href={featuredReport.downloadUrl}
                        download
                        className="bg-white text-brand-primary border-2 border-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF ({featuredReport.fileSize})
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Reports Grid */}
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-8">
              {selectedYear === "All"
                ? "All Reports"
                : `Reports from ${selectedYear}`}
            </h3>

            {regularReports.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {regularReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={report.coverImage}
                        alt={report.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {report.year}
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                        {report.title}
                      </h4>
                      <p className="text-brand-gray mb-4 line-clamp-3 leading-relaxed">
                        {report.description}
                      </p>

                      {/* Report Details */}
                      <div className="flex items-center justify-between text-xs text-brand-gray mb-6 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(report.publishedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {report.pages} pages
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={`/annual-report/${report.slug}`}
                          className="flex-1 bg-brand-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors text-center text-sm flex items-center justify-center gap-2"
                        >
                          <Eye className="w-3 h-3" />
                          View
                        </Link>
                        <a
                          href={report.downloadUrl}
                          download
                          className="flex-1 bg-gray-100 text-brand-dark px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-center text-sm flex items-center justify-center gap-2"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  No reports found
                </h3>
                <p className="text-brand-gray mb-6">
                  No annual reports available for the selected year
                </p>
                <button
                  onClick={() => setSelectedYear("All")}
                  className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors"
                >
                  View All Reports
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Stay Informed
              </h3>
              <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified when new annual
                reports are published
              </p>
              <Link
                href="/contact-us"
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
