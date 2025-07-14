"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileText,
  Download,
  Calendar,
  Eye,
  Share2,
  ChevronLeft,
  BarChart3,
  Users,
  Heart,
  Award,
  ArrowRight,
} from "lucide-react";

// Sample annual reports data - replace with Firebase data later
const annualReportsData = {
  "annual-report-2023": {
    id: 1,
    slug: "annual-report-2023",
    title: "Annual Report 2023",
    subtitle: "Transforming Lives, Building Hope",
    year: "2023",
    publishedDate: "2024-03-15",
    pages: 48,
    fileSize: "2.4 MB",
    downloadUrl: "/documents/swanthana-annual-report-2023.pdf",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    executiveSummary:
      "2023 marked a transformative year for Swanthana as we expanded our reach and deepened our impact in women's mental health rehabilitation. With 55+ women successfully rehabilitated and a 100% family satisfaction rate, we've proven that compassionate, evidence-based care can truly transform lives.",
    keyStats: [
      {
        icon: <Users className="w-6 h-6" />,
        number: "55+",
        label: "Women Rehabilitated",
        description:
          "Successfully completed our comprehensive rehabilitation programs",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        number: "7",
        label: "Conditions Treated",
        description:
          "Different mental health and addiction conditions addressed",
      },
      {
        icon: <Award className="w-6 h-6" />,
        number: "100%",
        label: "Family Satisfaction",
        description:
          "Families completely satisfied with our care and treatment",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        number: "95%",
        label: "Recovery Rate",
        description:
          "Patients showing significant improvement in their condition",
      },
    ],
    sections: [
      {
        title: "Message from Leadership",
        content:
          "As we reflect on 2023, we are filled with gratitude for the trust families have placed in us and pride in the transformations we've witnessed. Every woman who walked through our doors brought her unique story, challenges, and hopes. Our dedicated team worked tirelessly to provide not just treatment, but a pathway to reclaiming their lives with dignity and strength.",
      },
      {
        title: "Our Impact in Numbers",
        content:
          "This year, we served 55+ women across various age groups and conditions. Our comprehensive approach, combining medical treatment, counseling, life skills training, and family support, has yielded remarkable results. The 100% family satisfaction rate speaks to our commitment to involving families in the healing process.",
      },
      {
        title: "Treatment Programs & Innovations",
        content:
          "We expanded our treatment offerings to include specialized programs for trauma recovery, addiction counseling, and cognitive rehabilitation. Our evidence-based therapies, combined with holistic wellness approaches, have proven effective in treating schizophrenia, bipolar disorder, dementia, and substance use disorders.",
      },
      {
        title: "Community Partnerships",
        content:
          "Building strong community partnerships has been crucial to our success. We've collaborated with local healthcare providers, social organizations, and government agencies to create a comprehensive support network for our patients and their families.",
      },
      {
        title: "Financial Transparency",
        content:
          "We maintain the highest standards of financial accountability. Detailed financial statements, program expenditures, and funding sources are available in the complete annual report. Your trust and donations directly impact the lives we serve.",
      },
      {
        title: "Looking Ahead: 2024 Goals",
        content:
          "As we move into 2024, we're committed to expanding our capacity, introducing new treatment modalities, and reaching more women in need. Our goals include launching outpatient programs, establishing follow-up care services, and enhancing our family support initiatives.",
      },
    ],
    testimonial: {
      quote:
        "Swanthana didn't just treat my daughter's condition - they gave our entire family hope again. The care, compassion, and professionalism of the team is unmatched.",
      author: "Mother of a recovered patient",
      relationship: "Family Member",
    },
  },
  "annual-report-2022": {
    id: 2,
    slug: "annual-report-2022",
    title: "Annual Report 2022",
    subtitle: "Foundation Year - Building Dreams",
    year: "2022",
    publishedDate: "2023-04-20",
    pages: 32,
    fileSize: "1.8 MB",
    downloadUrl: "/documents/swanthana-annual-report-2022.pdf",
    coverImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    executiveSummary:
      "2022 was our foundation year - a time of establishing our vision, building our team, and taking the first steps toward creating a specialized center for women's mental health rehabilitation. Despite being our inaugural year, we successfully launched our programs and began making a difference in the lives of women and their families.",
    keyStats: [
      {
        icon: <Users className="w-6 h-6" />,
        number: "1",
        label: "Center Established",
        description: "Successfully launched Swanthana in Hyderabad",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        number: "15+",
        label: "Initial Patients",
        description: "Served our first group of women seeking help",
      },
      {
        icon: <Award className="w-6 h-6" />,
        number: "3",
        label: "Core Programs",
        description: "Established fundamental treatment programs",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        number: "8",
        label: "Team Members",
        description: "Built our initial team of dedicated professionals",
      },
    ],
    sections: [
      {
        title: "The Beginning of Our Journey",
        content:
          "Founded in May 2023 by Ms. Manjula Mummula and Dr. Mamatha Raghuveer Achanta, Swanthana was born from a vision to address the critical gap in women-centered mental health services. Our founders recognized the unique challenges women face and the need for specialized, compassionate care.",
      },
      {
        title: "Establishing Our Foundation",
        content:
          "Our first year focused on creating the infrastructure, policies, and programs necessary to provide world-class care. We invested in staff training, facility development, and establishing partnerships with healthcare professionals and community organizations.",
      },
      {
        title: "Early Impact & Learning",
        content:
          "Even in our inaugural year, we began serving women in need. These early cases taught us invaluable lessons about the unique challenges our target population faces and helped us refine our approach to care.",
      },
      {
        title: "Building Our Team",
        content:
          "We carefully assembled a team of passionate professionals, including psychiatrists, psychologists, counselors, and support staff. Each member was selected not just for their expertise, but for their commitment to our mission of transforming lives.",
      },
      {
        title: "Community Recognition",
        content:
          "Despite being new, we quickly gained recognition in the community for our innovative approach and dedication to quality care. Word-of-mouth referrals from satisfied families became our primary source of new patients.",
      },
      {
        title: "Setting the Stage for Growth",
        content:
          "As 2022 came to a close, we had successfully established the foundation for what would become significant growth in 2023. Our systems, processes, and team were ready to serve more women and families in need.",
      },
    ],
    testimonial: {
      quote:
        "From day one, Swanthana felt different. The founders' vision and the team's dedication gave us hope when we thought there was none left.",
      author: "One of our first families",
      relationship: "Early Supporter",
    },
  },
};

export default function AnnualReportDetailPage({ params }) {
  const { slug } = params;
  const [activeSection, setActiveSection] = useState(0);

  const report = annualReportsData[slug];

  if (!report) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-dark to-brand-secondary py-[120px] md:py-[160px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={report.coverImage}
            alt={report.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-dark/70 to-brand-secondary/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">
                {report.year} Report
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              {report.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {report.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4" />
                Published: {new Date(report.publishedDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FileText className="w-4 h-4" />
                {report.pages} pages
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Download className="w-4 h-4" />
                {report.fileSize}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={report.downloadUrl}
                download
                className="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Full Report
              </a>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Executive Summary
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              {report.executiveSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Key Statistics for {report.year}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {report.keyStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brand-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-brand-dark mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-brand-gray">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-brand-dark mb-4">
                  Report Sections
                </h3>
                <nav className="space-y-2">
                  {report.sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === index
                          ? "bg-brand-primary text-white"
                          : "text-brand-gray hover:bg-white hover:text-brand-dark"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">
                  {report.sections[activeSection].title}
                </h2>
                <div className="prose max-w-none text-brand-gray text-lg leading-relaxed">
                  <p>{report.sections[activeSection].content}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-8 border-t border-gray-100">
                  <button
                    onClick={() =>
                      setActiveSection(Math.max(0, activeSection - 1))
                    }
                    disabled={activeSection === 0}
                    className="flex items-center gap-2 px-6 py-3 text-brand-gray hover:text-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="flex items-center gap-2 text-brand-gray">
                    {activeSection + 1} of {report.sections.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveSection(
                        Math.min(report.sections.length - 1, activeSection + 1)
                      )
                    }
                    disabled={activeSection === report.sections.length - 1}
                    className="flex items-center gap-2 px-6 py-3 text-brand-gray hover:text-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-brand-primary" />
            </div>
            <blockquote className="text-xl md:text-2xl text-brand-dark mb-6 italic leading-relaxed">
              "{report.testimonial.quote}"
            </blockquote>
            <div className="text-brand-gray">
              <div className="font-semibold">{report.testimonial.author}</div>
              <div className="text-sm">{report.testimonial.relationship}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">
            Continue Exploring Our Impact
          </h2>
          <p className="text-lg text-brand-gray mb-8">
            Discover more about our programs, team, and the lives we've
            transformed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/annual-report"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              All Annual Reports
            </Link>
            <Link
              href="/about-us"
              className="bg-white text-brand-primary border-2 border-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
