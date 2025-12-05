'use client';

import { Calendar, Clock, MapPin, User } from 'lucide-react';

const appointments = [
  { id: 1, date: '2025-12-07', time: '10:00 AM', claim: 'Fire Damage - Kilimani', insured: 'Mary Wanjiku', adjuster: 'John Ochieng', type: 'inspection' },
  { id: 2, date: '2025-12-07', time: '2:00 PM', claim: 'Vehicle Accident - Thika', insured: 'Peter Kamau', adjuster: 'Sarah Wambui', type: 'assessment' },
  { id: 3, date: '2025-12-08', time: '9:00 AM', claim: 'Water Damage - Westlands', insured: 'James Mwangi', adjuster: 'David Kimani', type: 'inspection' },
  { id: 4, date: '2025-12-08', time: '11:30 AM', claim: 'Theft - Mombasa', insured: 'Ali Hassan', adjuster: 'John Ochieng', type: 'follow-up' },
  { id: 5, date: '2025-12-09', time: '10:00 AM', claim: 'Storm Damage - Kisumu', insured: 'Grace Achieng', adjuster: 'Mary Akinyi', type: 'final-inspection' },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarPage() {
  const hasAppointment = (day: number) => day === 7 || day === 8 || day === 9;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Calendar & Appointments</h2>
        <p className="text-gray-600">Schedule and manage all appointments across Kenya</p>
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
              const dayNum = i - 0; // December starts on Monday (adjust as needed)
              const isValid = dayNum >= 1 && dayNum <= 31;
              const hasAppt = hasAppointment(dayNum);
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
                      <div className={`text-sm font-semibold ${isToday ? 'text-sky-600' : 'text-gray-700'}`}>
                        {dayNum}
                      </div>
                      {hasAppt && (
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Today's Appointments</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Week</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Scheduling</span>
                <span className="font-bold text-yellow-600">5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Appointment Types</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">Initial Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm">Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm">Follow-up</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Final Inspection</span>
              </div>
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
                    <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-semibold">{apt.date}</span>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      apt.type === 'inspection' ? 'bg-blue-100 text-blue-700' :
                      apt.type === 'assessment' ? 'bg-purple-100 text-purple-700' :
                      apt.type === 'follow-up' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>{apt.type}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{apt.claim}</p>
                  <div className="flex gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{apt.insured}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{apt.adjuster}</span>
                  </div>
                </div>
                <button className="btn-secondary text-sm">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

