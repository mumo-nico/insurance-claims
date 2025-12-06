'use client';

import dynamic from 'next/dynamic';
import { Users, UserCheck, Clock, TrendingUp, MapPin, AlertTriangle } from 'lucide-react';
import type { MapClaim } from '@/components/maps/MapComponent';

const MapComponent = dynamic(() => import('@/components/maps/MapComponent'), { ssr: false });

// Adjuster locations as map markers
const adjusterMarkers: MapClaim[] = [
  { id: 1, title: 'Mike Johnson', address: 'Kilimani, Nairobi', lat: -1.2890, lng: 36.7850, priority: 'medium', status: 'Busy - 3 claims' },
  { id: 2, title: 'Sarah Wanjiku', address: 'Westlands, Nairobi', lat: -1.2640, lng: 36.8030, priority: 'low', status: 'Available' },
  { id: 3, title: 'Grace Muthoni', address: 'Parklands, Nairobi', lat: -1.2610, lng: 36.8180, priority: 'medium', status: 'Finishing - 1 left' },
  { id: 4, title: 'James Kamau', address: 'Karen, Nairobi', lat: -1.3210, lng: 36.7090, priority: 'low', status: 'Available' },
  { id: 5, title: 'David Mwangi', address: 'Upper Hill, Nairobi', lat: -1.2980, lng: 36.8170, priority: 'high', status: 'At Site' },
  // Urgent unassigned claims
  { id: 101, title: 'CLM-127 Fire Damage', address: 'Kilimani, Nairobi', lat: -1.2860, lng: 36.7790, priority: 'urgent', status: 'UNASSIGNED' },
  { id: 102, title: 'CLM-128 Water Damage', address: 'Westlands, Nairobi', lat: -1.2680, lng: 36.8100, priority: 'high', status: 'UNASSIGNED' },
  { id: 103, title: 'CLM-129 Burglary', address: 'Mombasa CBD', lat: -4.0435, lng: 39.6682, priority: 'medium', status: 'UNASSIGNED' },
];

const stats = [
  { label: 'Total Adjusters', value: '24', sublabel: '18 active, 4 on leave, 2 sick', icon: Users, color: 'bg-blue-500' },
  { label: 'Available Now', value: '12', sublabel: 'Ready to assign', icon: UserCheck, color: 'bg-green-500' },
  { label: 'Pending Assignments', value: '8', sublabel: '3 urgent claims waiting', icon: Clock, color: 'bg-orange-500' },
  { label: 'Average Workload', value: '3.2', sublabel: 'Claims per adjuster', icon: TrendingUp, color: 'bg-purple-500' },
];

const pendingAssignments = [
  { id: 'CLM-127', type: 'Fire Damage', location: 'Kilimani, Nairobi', priority: 'URGENT', value: 'KES 4,500,000', suggested: 'Mike Johnson' },
  { id: 'CLM-128', type: 'Water Damage', location: 'Westlands, Nairobi', priority: 'HIGH', value: 'KES 850,000', suggested: 'Sarah Wanjiku' },
  { id: 'CLM-129', type: 'Burglary', location: 'Mombasa CBD', priority: 'MEDIUM', value: 'KES 1,200,000', suggested: 'Peter Ochieng' },
  { id: 'CLM-130', type: 'Vehicle Accident', location: 'Thika Road', priority: 'HIGH', value: 'KES 2,100,000', suggested: 'Grace Muthoni' },
];

const adjusterStatus = [
  { name: 'Mike Johnson', status: 'busy', location: 'Kilimani', claims: 3, remaining: 2, availability: '2h free after' },
  { name: 'Sarah Wanjiku', status: 'available', location: 'Westlands', claims: 1, remaining: 1, availability: 'Ready now' },
  { name: 'Peter Ochieng', status: 'leave', location: '-', claims: 0, remaining: 0, availability: 'Back Dec 15' },
  { name: 'Grace Muthoni', status: 'finishing', location: 'Parklands', claims: 4, remaining: 1, availability: '30 mins' },
  { name: 'James Kamau', status: 'available', location: 'Karen', claims: 2, remaining: 0, availability: 'Ready now' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available': return 'bg-green-500';
    case 'busy': return 'bg-yellow-500';
    case 'finishing': return 'bg-orange-500';
    case 'leave': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'URGENT': return 'bg-red-100 text-red-800';
    case 'HIGH': return 'bg-orange-100 text-orange-800';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function HRDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">HR Dashboard</h1>
          <p className="text-gray-500">Manage adjuster workforce and assignments</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Urgent Assignment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.sublabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map and Assignment Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Map */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Live Adjuster Map</h2>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span> Available</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Busy</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Urgent</span>
            </div>
          </div>
          <div className="h-[700px] rounded-lg overflow-hidden">
            <MapComponent claims={adjusterMarkers} height="700px" />
          </div>
        </div>

        {/* Assignment Queue */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Assignments</h2>
          <div className="space-y-3">
            {pendingAssignments.map((claim) => (
              <div key={claim.id} className="border rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{claim.id}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getPriorityColor(claim.priority)}`}>
                        {claim.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{claim.type}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {claim.location}
                    </p>
                    <p className="text-sm font-medium text-gray-700 mt-1">{claim.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Suggested:</p>
                    <p className="text-sm font-medium text-purple-600">{claim.suggested}</p>
                    <button className="mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-700">
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adjuster Status Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Adjuster Status Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Adjuster Name</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Current Claims</th>
                <th className="pb-3 font-medium">Remaining</th>
                <th className="pb-3 font-medium">Availability</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adjusterStatus.map((adjuster, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 font-medium text-gray-900">{adjuster.name}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs text-white ${getStatusColor(adjuster.status)}`}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {adjuster.status.charAt(0).toUpperCase() + adjuster.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 text-gray-600">{adjuster.location}</td>
                  <td className="py-3 text-gray-600">{adjuster.claims} claims</td>
                  <td className="py-3 text-gray-600">{adjuster.remaining} left</td>
                  <td className="py-3 text-gray-600">{adjuster.availability}</td>
                  <td className="py-3">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

