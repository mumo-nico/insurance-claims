'use client';

import dynamic from 'next/dynamic';
import { MapPin, Users, Navigation, Clock, AlertTriangle } from 'lucide-react';
import type { MapClaim } from '@/components/maps/MapComponent';

const MapComponent = dynamic(() => import('@/components/maps/MapComponent'), { ssr: false });

// All markers for the tracking map
const trackingMarkers: MapClaim[] = [
  // Adjusters
  { id: 1, title: 'Mike Johnson', address: 'Kilimani, Nairobi', lat: -1.2890, lng: 36.7850, priority: 'high', status: 'Busy' },
  { id: 2, title: 'Sarah Wanjiku', address: 'Westlands, Nairobi', lat: -1.2640, lng: 36.8030, priority: 'low', status: 'Available' },
  { id: 3, title: 'Grace Muthoni', address: 'En route to Parklands', lat: -1.2680, lng: 36.8120, priority: 'medium', status: 'On Route' },
  { id: 4, title: 'James Kamau', address: 'Karen, Nairobi', lat: -1.3210, lng: 36.7090, priority: 'low', status: 'Available' },
  { id: 5, title: 'David Mwangi', address: 'Upper Hill, Nairobi', lat: -1.2980, lng: 36.8170, priority: 'medium', status: 'At Site' },
  // Mombasa adjusters
  { id: 6, title: 'Peter Ochieng', address: 'Mombasa CBD', lat: -4.0500, lng: 39.6650, priority: 'low', status: 'Available' },
  { id: 7, title: 'Janet Atieno', address: 'Kisumu CBD', lat: -0.0917, lng: 34.7680, priority: 'medium', status: 'At Site' },
  // Unassigned Claims (urgent markers)
  { id: 101, title: 'CLM-127 Fire Damage', address: 'Kilimani - UNASSIGNED', lat: -1.2830, lng: 36.7750, priority: 'urgent', status: 'URGENT' },
  { id: 102, title: 'CLM-128 Water Damage', address: 'Lavington - UNASSIGNED', lat: -1.2750, lng: 36.7680, priority: 'high', status: 'UNASSIGNED' },
  { id: 103, title: 'CLM-129 Burglary', address: 'Kileleshwa - UNASSIGNED', lat: -1.2780, lng: 36.7880, priority: 'medium', status: 'UNASSIGNED' },
];

const adjustersOnMap = [
  { name: 'Mike Johnson', status: 'busy', location: 'Kilimani, Nairobi', currentClaim: 'CLM-121', eta: '15 mins' },
  { name: 'Sarah Wanjiku', status: 'available', location: 'Westlands, Nairobi', currentClaim: '-', eta: 'Ready' },
  { name: 'Grace Muthoni', status: 'on_route', location: 'En route to Parklands', currentClaim: 'CLM-124', eta: '20 mins' },
  { name: 'James Kamau', status: 'available', location: 'Karen, Nairobi', currentClaim: '-', eta: 'Ready' },
  { name: 'David Mwangi', status: 'at_site', location: 'Upper Hill, Nairobi', currentClaim: 'CLM-119', eta: 'On site' },
];

const unassignedClaims = [
  { id: 'CLM-127', type: 'Fire Damage', location: 'Kilimani', priority: 'URGENT' },
  { id: 'CLM-128', type: 'Water Damage', location: 'Lavington', priority: 'HIGH' },
  { id: 'CLM-129', type: 'Burglary', location: 'Kileleshwa', priority: 'MEDIUM' },
];

export default function LiveTrackingMap() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Live Tracking Map</h1>
          <p className="text-gray-500">Real-time adjuster locations and claim sites</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center gap-2">
            <Navigation className="w-4 h-4" />
            Optimize Routes
          </button>
          <button className="btn-primary flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Emergency Broadcast
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            Available
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            On Route
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            At Site
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-orange-500"></span>
            Busy
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-500"></span>
            Off Duty
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></span>
            Unassigned Claims
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="h-[1000px] rounded-lg overflow-hidden">
            <MapComponent claims={trackingMarkers} height="1000px" />
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Adjusters List */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Active Adjusters
            </h2>
            <div className="space-y-3">
              {adjustersOnMap.map((adjuster, index) => (
                <div key={index} className="border rounded-lg p-3 hover:border-purple-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${
                        adjuster.status === 'available' ? 'bg-green-500' :
                        adjuster.status === 'on_route' ? 'bg-blue-500' :
                        adjuster.status === 'at_site' ? 'bg-yellow-500' :
                        'bg-orange-500'
                      }`}></span>
                      <span className="font-medium text-gray-900">{adjuster.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{adjuster.eta}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {adjuster.location}
                  </p>
                  {adjuster.currentClaim !== '-' && (
                    <p className="text-xs text-purple-600 mt-1">Working on: {adjuster.currentClaim}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Unassigned Claims */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              Unassigned Claims
            </h2>
            <div className="space-y-3">
              {unassignedClaims.map((claim) => (
                <div key={claim.id} className="border border-red-200 bg-red-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{claim.id}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      claim.priority === 'URGENT' ? 'bg-red-100 text-red-800' :
                      claim.priority === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {claim.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{claim.type}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {claim.location}
                  </p>
                  <button className="mt-2 w-full px-3 py-1 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-700">
                    Assign Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

