'use client';

import { FileText, Clock, CheckCircle, User, Phone, MapPin, Calendar, MessageSquare, Upload, AlertCircle } from 'lucide-react';

const claimProgress = [
  { step: 'Claim Submitted', status: 'completed', date: '2025-12-01' },
  { step: 'Under Review', status: 'completed', date: '2025-12-02' },
  { step: 'Adjuster Assigned', status: 'completed', date: '2025-12-03' },
  { step: 'Inspection Scheduled', status: 'current', date: '2025-12-07' },
  { step: 'Assessment Complete', status: 'pending', date: null },
  { step: 'Claim Approved', status: 'pending', date: null },
  { step: 'Payment Processed', status: 'pending', date: null },
];

export default function InsuredDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold">Welcome, Mary Wanjiku</h2>
        <p className="text-sky-100 mt-1">Track your claim status and communicate with your adjuster</p>
        <div className="mt-4 flex gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-xs text-sky-100">Policy Number</p>
            <p className="font-bold">KI-2024-001234</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <p className="text-xs text-sky-100">Claim Number</p>
            <p className="font-bold">CLM-2025-1002</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Claim Progress */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-6">Claim Progress</h3>
          <div className="relative">
            {claimProgress.map((step, index) => (
              <div key={index} className="flex gap-4 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === 'completed' ? 'bg-green-500 text-white' :
                    step.status === 'current' ? 'bg-sky-500 text-white' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  {index < claimProgress.length - 1 && (
                    <div className={`w-0.5 h-12 ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <p className={`font-semibold ${
                    step.status === 'current' ? 'text-sky-600' : 
                    step.status === 'completed' ? 'text-gray-800' : 'text-gray-400'
                  }`}>{step.step}</p>
                  {step.date && (
                    <p className="text-sm text-gray-500">{step.date}</p>
                  )}
                  {step.status === 'current' && (
                    <span className="inline-block mt-1 px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-semibold">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Adjuster Info & Next Steps */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Your Adjuster</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                JO
              </div>
              <div>
                <p className="font-bold text-gray-800">John Ochieng</p>
                <p className="text-sm text-gray-500">Loss Adjuster</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                  ★★★★★ <span className="text-gray-500">4.8</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Nairobi Region</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 btn-primary text-sm">
                <MessageSquare className="w-4 h-4 inline mr-1" /> Message
              </button>
              <button className="flex-1 btn-secondary text-sm">
                <Phone className="w-4 h-4 inline mr-1" /> Call
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Upcoming Appointment</h3>
            <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
              <div className="flex items-center gap-2 text-sky-700 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">December 7, 2025</span>
              </div>
              <p className="text-sm text-gray-600">10:00 AM - Property Inspection</p>
              <p className="text-sm text-gray-500 mt-1">Kilimani, Nairobi</p>
            </div>
            <button className="w-full btn-secondary mt-4 text-sm">Reschedule</button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-800">Action Required</p>
                <p className="text-sm text-yellow-700 mt-1">Please upload additional photos of the damage before the inspection.</p>
                <button className="mt-2 text-sm font-semibold text-yellow-800 hover:underline flex items-center gap-1">
                  <Upload className="w-4 h-4" /> Upload Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Details */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Claim Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500">Claim Type</p>
            <p className="font-semibold text-gray-800">Fire Damage</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date of Incident</p>
            <p className="font-semibold text-gray-800">November 28, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold text-gray-800">Kilimani, Nairobi</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Value</p>
            <p className="font-semibold text-gray-800">KES 1,250,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">Under Assessment</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Documents Uploaded</p>
            <p className="font-semibold text-gray-800">5 files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

