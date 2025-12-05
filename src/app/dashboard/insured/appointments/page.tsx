'use client';

import { Calendar, Clock, MapPin, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const appointments = [
  { 
    id: 1, 
    date: '2025-12-07', 
    time: '10:00 AM', 
    type: 'Property Inspection',
    adjuster: 'John Ochieng',
    phone: '+254 712 345 678',
    location: 'Your Property - Kilimani, Nairobi',
    status: 'upcoming',
    notes: 'Please ensure access to all damaged areas including kitchen and dining room.'
  },
  { 
    id: 2, 
    date: '2025-12-03', 
    time: '11:00 AM', 
    type: 'Initial Phone Consultation',
    adjuster: 'John Ochieng',
    phone: '+254 712 345 678',
    location: 'Phone Call',
    status: 'completed',
    notes: 'Discussed claim details and scheduled property inspection.'
  },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
        <p className="text-gray-600">View and manage your scheduled appointments</p>
      </div>

      {/* Upcoming Appointment Highlight */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5" />
          <span className="font-semibold">Upcoming Appointment</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">Property Inspection</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-200" />
            <span>December 7, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-200" />
            <span>10:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-sky-200" />
            <span>John Ochieng</span>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-white text-sky-600 rounded-lg font-semibold hover:bg-sky-50">
            Reschedule
          </button>
          <button className="px-4 py-2 bg-sky-400 text-white rounded-lg font-semibold hover:bg-sky-300">
            Add to Calendar
          </button>
        </div>
      </div>

      {/* All Appointments */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="font-bold text-lg">All Appointments</h3>
        </div>
        <div className="divide-y">
          {appointments.map(apt => (
            <div key={apt.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-lg text-gray-800">{apt.type}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      apt.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                      apt.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {apt.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{apt.adjuster}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{apt.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <MapPin className="w-4 h-4" />
                      <span>{apt.location}</span>
                    </div>
                  </div>
                </div>
                {apt.status === 'completed' && (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                )}
              </div>
              {apt.notes && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600"><strong>Notes:</strong> {apt.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Prepare for Your Inspection</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Ensure all damaged areas are accessible</li>
          <li>• Have your ID and policy documents ready</li>
          <li>• Prepare a list of damaged items with estimated values</li>
          <li>• Keep any receipts or proof of purchase available</li>
          <li>• Note any questions you want to ask the adjuster</li>
        </ul>
      </div>
    </div>
  );
}

