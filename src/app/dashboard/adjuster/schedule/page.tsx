'use client';

import { Calendar, Clock, MapPin, Phone, Navigation } from 'lucide-react';

const appointments = [
  { id: 1, date: '2025-12-07', time: '10:00 AM', title: 'Fire Damage Inspection', insured: 'Mary Wanjiku', location: 'Kilimani, Nairobi', phone: '+254 723 456 789', type: 'inspection' },
  { id: 2, date: '2025-12-07', time: '2:00 PM', title: 'Theft Investigation', insured: 'Ali Hassan', location: 'Mombasa CBD', phone: '+254 712 345 678', type: 'follow-up' },
  { id: 3, date: '2025-12-08', time: '9:00 AM', title: 'Water Damage Assessment', insured: 'James Mwangi', location: 'Westlands, Nairobi', phone: '+254 734 567 890', type: 'inspection' },
  { id: 4, date: '2025-12-08', time: '11:30 AM', title: 'Vehicle Accident Report', insured: 'Peter Kamau', location: 'Thika Road', phone: '+254 745 678 901', type: 'assessment' },
  { id: 5, date: '2025-12-09', time: '10:00 AM', title: 'Flood Damage Follow-up', insured: 'Sarah Chebet', location: 'Nakuru', phone: '+254 756 789 012', type: 'final-inspection' },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">My Schedule</h2>
        <p className="text-gray-600">View and manage your appointments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">December 2025</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">←</button>
              <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">→</button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-2">
            {days.map(day => (
              <div key={day} className="text-center font-semibold text-gray-700 py-2">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {[...Array(35)].map((_, i) => {
              const dayNum = i - 0;
              const isValid = dayNum >= 1 && dayNum <= 31;
              const hasAppt = dayNum === 7 || dayNum === 8 || dayNum === 9;
              const isToday = dayNum === 5;
              
              return (
                <div 
                  key={i} 
                  className={`
                    aspect-square border rounded-lg p-2 cursor-pointer transition-colors
                    ${!isValid ? 'bg-gray-50 border-gray-100' : 'hover:bg-sky-50 border-gray-200'}
                    ${hasAppt ? 'border-sky-500 bg-sky-50' : ''}
                    ${isToday ? 'border-2 border-sky-600' : ''}
                  `}
                >
                  {isValid && (
                    <>
                      <div className={`text-sm font-semibold ${isToday ? 'text-sky-600' : 'text-gray-700'}`}>{dayNum}</div>
                      {hasAppt && <div className="mt-1"><div className="w-2 h-2 bg-sky-600 rounded-full"></div></div>}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Today's Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Today's Overview</h3>
          <div className="space-y-4">
            <div className="p-4 bg-sky-50 rounded-lg">
              <p className="text-3xl font-bold text-sky-600">3</p>
              <p className="text-sm text-gray-600">Appointments Today</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">2</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="text-xl font-bold text-orange-600">45 mins</p>
              <p className="text-sm text-gray-600">Total Drive Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="font-bold text-lg">Upcoming Appointments</h3>
        </div>
        <div className="divide-y">
          {appointments.map(apt => (
            <div key={apt.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-sky-600">{apt.time}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">{apt.date}</span>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      apt.type === 'inspection' ? 'bg-blue-100 text-blue-700' :
                      apt.type === 'assessment' ? 'bg-purple-100 text-purple-700' :
                      apt.type === 'follow-up' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>{apt.type}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{apt.title}</p>
                  <p className="text-sm text-gray-600">{apt.insured}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{apt.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                    <Navigation className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

