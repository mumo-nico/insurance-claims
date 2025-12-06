// Updated Next.js Home UI with requested layout adjustments
'use client';

import Link from 'next/link';
import { Building2, UserCheck, Users, MapPin, Shield, BarChart3, Briefcase } from 'lucide-react';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#081527] shadow-lg h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-3">
              <div className="bg-sky-500 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Claims GIS Kenya</h1>
                <p className="text-xs text-sky-300">Insurance Claims Management</p>
              </div>
            </div>
            <span className="text-gray-300 text-sm hidden md:block">
              <MapPin className="w-4 h-4 inline mr-1" /> Kenya Region
            </span>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-8 flex flex-col justify-between">

        {/* HERO CARD */}
       
        <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600 mb-10 text-center w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Advanced Insurance Claims Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
            Comprehensive GIS-powered platform for human resource, insurers, adjusters, and policyholders across Kenya
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* HR */}
          <Link href="/dashboard/hr" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-purple-600 min-h-[300px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Briefcase className="w-10 h-10 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">HR Management</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Manage adjusters, assign territories, track performance, and balance workloads efficiently.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold text-lg mt-auto">
                <Users className="w-6 h-6" /> Workforce Management
              </div>
            </div>
          </Link>

          {/* Adjuster */}
          <Link href="/dashboard/adjuster" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-orange-600 min-h-[300px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <UserCheck className="w-10 h-10 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Adjuster</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Field tools for site inspections, GPS check-in, photo capture, and optimized route planning.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold text-lg mt-auto">
                <MapPin className="w-6 h-6" /> Field Operations
              </div>
            </div>
          </Link>

          {/* Insurer */}
          <Link href="/dashboard/insurer" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600 min-h-[300px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Building2 className="w-10 h-10 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Insurer</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Manage claims, assign adjusters, view analytics, and monitor fraud alerts across Kenya.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mt-auto">
                <BarChart3 className="w-6 h-6" /> Full Dashboard Access
              </div>
            </div>
          </Link>

          {/* Insured */}
          <Link href="/dashboard/insured" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-green-600 min-h-[300px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Users className="w-10 h-10 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Insured</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Track your claims, upload evidence, communicate with adjusters, and view appointment schedules.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold text-lg mt-auto">
                <MapPin className="w-6 h-6" /> Track Your Claim
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#081527] text-gray-300 py-10 mt-10">
        <div className="max-w-screen-xl mx-auto px-6">

          {/* Features Row */}
          <div className="flex justify-center gap-10 text-lg mb-6">
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Interactive Maps</div>
            <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Real-time Analytics</div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5" /> Fraud Detection</div>
          </div>

          {/* Copyright Row */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <p>© {year} Claims GIS Kenya. All rights reserved.</p>
            <p>Developed & Managed by <a href="https://www.damaninexus.com" target="_blank" className="underline text-sky-400 ml-1">Damani Nexus Limited</a></p>
          </div>

        </div>
      </footer>
    </div>
  );
}
