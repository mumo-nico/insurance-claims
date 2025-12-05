'use client';

import { useState } from 'react';
import { Camera, Video, MapPin, FileText, Calendar, Phone, Navigation, Sun, Star, Clock, Users, DollarSign } from 'lucide-react';
import MapComponent, { MapClaim } from '@/components/maps/MapComponent';

const todaysTasks: MapClaim[] = [
  { id: 1, title: 'Fire Damage', address: 'Kilimani, Nairobi', lat: -1.2892, lng: 36.7850, status: 'assigned', priority: 'urgent', insured: 'Mary Wanjiku', value: 1250000 },
  { id: 2, title: 'Theft Investigation', address: 'Mombasa CBD', lat: -4.0435, lng: 39.6682, status: 'in-progress', priority: 'medium', insured: 'Ali Hassan', value: 280000 },
];

const appointments = [
  { id: 1, time: '10:00 AM', insured: 'Mary Wanjiku', location: 'Kilimani, Nairobi', type: 'inspection', phone: '+254 723 456 789' },
  { id: 2, time: '2:00 PM', insured: 'Ali Hassan', location: 'Mombasa CBD', type: 'follow-up', phone: '+254 712 345 678' },
  { id: 3, time: '4:30 PM', insured: 'Peter Kamau', location: 'Thika Road', type: 'assessment', phone: '+254 734 567 890' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'assigned': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-purple-100 text-purple-800',
    'completed': 'bg-green-100 text-green-800'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase()}</span>;
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles: Record<string, string> = {
    'medium': 'bg-orange-100 text-orange-700',
    'high': 'bg-red-100 text-red-700',
    'urgent': 'bg-red-600 text-white'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[priority]}`}>{priority.toUpperCase()}</span>;
};

export default function AdjusterDashboard() {
  const [selectedClaim, setSelectedClaim] = useState<MapClaim | null>(null);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow p-6">
          <p className="text-blue-100 text-sm font-medium">Today's Tasks</p>
          <h3 className="text-4xl font-bold mt-1">5</h3>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow p-6">
          <p className="text-purple-100 text-sm font-medium">In Progress</p>
          <h3 className="text-4xl font-bold mt-1">3</h3>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow p-6">
          <p className="text-green-100 text-sm font-medium">Completed</p>
          <h3 className="text-4xl font-bold mt-1">12</h3>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg shadow p-6">
          <p className="text-orange-100 text-sm font-medium">Next Visit</p>
          <h3 className="text-2xl font-bold mt-1">10:00 AM</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Today's Schedule</h3>
              <button className="text-sm px-3 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> View Calendar
              </button>
            </div>
            <div className="p-4 space-y-3">
              {appointments.map(apt => (
                <div key={apt.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-lg text-sky-600">{apt.time}</span>
                        <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-semibold">{apt.type}</span>
                      </div>
                      <p className="font-semibold text-gray-800">{apt.insured}</p>
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

          {/* Route Map */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Today's Route</h3>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Total:</span> 45 mins drive
              </div>
            </div>
            <MapComponent claims={todaysTasks} onClaimSelect={setSelectedClaim} height="250px" />
          </div>
        </div>

        {/* Quick Actions & Weather */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <Camera className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-semibold text-gray-700">Take Photo</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <Video className="w-6 h-6 text-green-600" />
                <span className="text-xs font-semibold text-gray-700">Record</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <MapPin className="w-6 h-6 text-purple-600" />
                <span className="text-xs font-semibold text-gray-700">Check In</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <FileText className="w-6 h-6 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Report</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Weather - Nairobi</h3>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Sun className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-bold text-2xl">24°C</p>
                  <p className="text-xs text-gray-600">Partly cloudy</p>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-600 space-y-1 mt-3">
              <div className="flex justify-between"><span>Humidity:</span><span className="font-semibold">65%</span></div>
              <div className="flex justify-between"><span>Wind:</span><span className="font-semibold">12 km/h</span></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-bold text-gray-800">12/15 claims</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                <span className="font-bold text-lg">4.8</span>
                <span className="text-sm text-gray-600">Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

