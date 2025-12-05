'use client';

import { FileText, Clock, CheckCircle, MapPin, Calendar, DollarSign, AlertCircle } from 'lucide-react';

const timeline = [
  { date: '2025-12-01', time: '09:30 AM', event: 'Claim submitted online', type: 'submission' },
  { date: '2025-12-01', time: '10:15 AM', event: 'Claim received and acknowledged', type: 'system' },
  { date: '2025-12-02', time: '02:00 PM', event: 'Initial review completed', type: 'review' },
  { date: '2025-12-03', time: '09:00 AM', event: 'Adjuster John Ochieng assigned', type: 'assignment' },
  { date: '2025-12-03', time: '11:30 AM', event: 'Inspection scheduled for Dec 7', type: 'schedule' },
  { date: '2025-12-04', time: '03:45 PM', event: 'Additional documents requested', type: 'request' },
];

export default function ClaimPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">My Claim</h2>
        <p className="text-gray-600">Claim #CLM-2025-1002</p>
      </div>

      {/* Claim Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Fire Damage Claim</h3>
            <p className="text-gray-600">Residential Property</p>
          </div>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">Under Assessment</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Incident Date</span>
            </div>
            <p className="font-bold text-gray-800">Nov 28, 2025</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Location</span>
            </div>
            <p className="font-bold text-gray-800">Kilimani, Nairobi</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Estimated Value</span>
            </div>
            <p className="font-bold text-gray-800">KES 1,250,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Days Since Filed</span>
            </div>
            <p className="font-bold text-gray-800">4 days</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Incident Description</h3>
        <p className="text-gray-700 leading-relaxed">
          On November 28, 2025, at approximately 2:30 PM, a fire broke out in the kitchen area of my residence 
          located in Kilimani, Nairobi. The fire was caused by an electrical fault in the wiring. The fire 
          department was called and arrived within 15 minutes. The fire was contained but caused significant 
          damage to the kitchen, dining area, and some personal belongings. No injuries were reported.
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-6">Claim Timeline</h3>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                {index < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
                <p className="font-medium text-gray-800">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
        <h3 className="font-bold text-lg text-sky-800 mb-4">Next Steps</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <p className="font-semibold text-gray-800">Prepare for Inspection</p>
              <p className="text-sm text-gray-600">Ensure access to all damaged areas on December 7, 2025</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <p className="font-semibold text-gray-800">Upload Additional Photos</p>
              <p className="text-sm text-gray-600">Provide close-up photos of electrical damage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <p className="font-semibold text-gray-400">Await Assessment Report</p>
              <p className="text-sm text-gray-400">After inspection is complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

