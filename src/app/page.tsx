'use client';

import Link from 'next/link';
import { Building2, UserCheck, Users, MapPin, Shield, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navbar */}
      <nav className="bg-[#1e3a5f] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-sky-500 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ClaimsGIS Kenya</h1>
                <p className="text-xs text-sky-300">Insurance Claims Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm hidden md:block">
                <MapPin className="w-4 h-4 inline mr-1" />
                Kenya Region
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insurance Claims Management
          </h2>
          <p className="text-xl text-sky-200 max-w-2xl mx-auto">
            Comprehensive GIS-powered platform for insurers, adjusters, and policyholders across Kenya
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Insurer Card */}
          <Link href="/dashboard/insurer" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-blue-600">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Insurer</h3>
              <p className="text-gray-600 mb-4">
                Manage claims, assign adjusters, view analytics, and monitor fraud alerts across all Kenya regions.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <BarChart3 className="w-5 h-5" />
                <span>Full Dashboard Access</span>
              </div>
            </div>
          </Link>

          {/* Insured Card */}
          <Link href="/dashboard/insured" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-green-600">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Users className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Insured</h3>
              <p className="text-gray-600 mb-4">
                Track your claims, upload evidence, communicate with adjusters, and view appointment schedules.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Track Your Claim</span>
              </div>
            </div>
          </Link>

          {/* Adjuster Card */}
          <Link href="/dashboard/adjuster" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-orange-600">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <UserCheck className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Adjuster</h3>
              <p className="text-gray-600 mb-4">
                Field tools for site inspections, GPS check-in, photo capture, and optimized route planning.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Field Operations</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span>Interactive Maps</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-sky-400" />
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-400" />
              <span>Fraud Detection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

