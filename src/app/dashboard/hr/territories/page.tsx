'use client';

import dynamic from 'next/dynamic';
import { MapPin, Users, Edit, Plus, Target, BarChart3 } from 'lucide-react';
import type { MapClaim } from '@/components/maps/MapComponent';

const MapComponent = dynamic(() => import('@/components/maps/MapComponent'), { ssr: false });

// Territory center markers for the map
const territoryMarkers: MapClaim[] = [
  { id: 1, title: 'Nairobi Central', address: 'CBD, Kilimani, Lavington, Kileleshwa', lat: -1.2864, lng: 36.8172, priority: 'medium', status: '2 adjusters, 45 claims/mo' },
  { id: 2, title: 'Nairobi West', address: 'Karen, Langata, South C, South B', lat: -1.3180, lng: 36.7450, priority: 'low', status: '2 adjusters, 38 claims/mo' },
  { id: 3, title: 'Nairobi East', address: 'Eastlands, Buruburu, Umoja, Kayole', lat: -1.2750, lng: 36.8850, priority: 'high', status: '1 adjuster, 28 claims/mo' },
  { id: 4, title: 'Mombasa Region', address: 'CBD, Nyali, Bamburi, Likoni', lat: -4.0435, lng: 39.6682, priority: 'medium', status: '2 adjusters, 35 claims/mo' },
  { id: 5, title: 'Kisumu Region', address: 'CBD, Milimani, Nyalenda', lat: -0.0917, lng: 34.7680, priority: 'low', status: '1 adjuster, 22 claims/mo' },
  { id: 6, title: 'Nakuru Region', address: 'CBD, Milimani, Section 58', lat: -0.3031, lng: 36.0800, priority: 'low', status: '1 adjuster, 18 claims/mo' },
  { id: 7, title: 'Eldoret Region', address: 'CBD, Langas, Huruma', lat: 0.5143, lng: 35.2698, priority: 'low', status: '1 adjuster, 15 claims/mo' },
];

const territories = [
  { id: 1, name: 'Nairobi Central', color: 'blue', adjusters: ['Mike Johnson', 'Sarah Wanjiku'], claimsPerMonth: 45, coverage: 'CBD, Kilimani, Lavington, Kileleshwa' },
  { id: 2, name: 'Nairobi West', color: 'green', adjusters: ['James Kamau', 'Lucy Achieng'], claimsPerMonth: 38, coverage: 'Karen, Langata, South C, South B' },
  { id: 3, name: 'Nairobi East', color: 'yellow', adjusters: ['Grace Muthoni'], claimsPerMonth: 28, coverage: 'Eastlands, Buruburu, Umoja, Kayole' },
  { id: 4, name: 'Mombasa', color: 'orange', adjusters: ['Peter Ochieng', 'David Mwangi'], claimsPerMonth: 35, coverage: 'Mombasa CBD, Nyali, Bamburi, Likoni' },
  { id: 5, name: 'Kisumu', color: 'purple', adjusters: ['Janet Atieno'], claimsPerMonth: 22, coverage: 'Kisumu CBD, Milimani, Nyalenda' },
  { id: 6, name: 'Nakuru', color: 'red', adjusters: ['Paul Kiprop'], claimsPerMonth: 18, coverage: 'Nakuru CBD, Milimani, Section 58' },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 border-blue-500 text-blue-800',
    green: 'bg-green-100 border-green-500 text-green-800',
    yellow: 'bg-yellow-100 border-yellow-500 text-yellow-800',
    orange: 'bg-orange-100 border-orange-500 text-orange-800',
    purple: 'bg-purple-100 border-purple-500 text-purple-800',
    red: 'bg-red-100 border-red-500 text-red-800',
  };
  return colors[color] || colors.blue;
};

export default function TerritoryManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Territory Management</h1>
          <p className="text-gray-500">Define and manage adjuster coverage areas</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Territory
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">6</p>
            <p className="text-sm text-gray-500">Active Territories</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-500">Assigned Adjusters</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <BarChart3 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">186</p>
            <p className="text-sm text-gray-500">Claims/Month (Avg)</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">95%</p>
            <p className="text-sm text-gray-500">Kenya Coverage</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Territory Map</h2>
          <div className="h-[800px] rounded-lg overflow-hidden">
            <MapComponent claims={territoryMarkers} height="800px" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {territories.slice(0, 4).map((territory) => (
              <span key={territory.id} className={`px-3 py-1 text-xs rounded-full border-l-4 ${getColorClasses(territory.color)}`}>
                {territory.name}
              </span>
            ))}
          </div>
        </div>

        {/* Territory List */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Territory Details</h2>
          <div className="space-y-4">
            {territories.map((territory) => (
              <div key={territory.id} className={`border-l-4 rounded-lg p-4 ${getColorClasses(territory.color)}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{territory.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{territory.coverage}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {territory.adjusters.map((adj) => (
                        <span key={adj} className="px-2 py-0.5 bg-white/80 text-gray-700 text-xs rounded-full">
                          {adj}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{territory.claimsPerMonth}</p>
                    <p className="text-xs text-gray-500">claims/month</p>
                    <button className="mt-2 p-1 text-gray-500 hover:text-gray-700">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workload Distribution */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Workload Distribution by Territory</h2>
        <div className="space-y-4">
          {territories.map((territory) => (
            <div key={territory.id} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-gray-900">{territory.name}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${
                    territory.color === 'blue' ? 'bg-blue-500' :
                    territory.color === 'green' ? 'bg-green-500' :
                    territory.color === 'yellow' ? 'bg-yellow-500' :
                    territory.color === 'orange' ? 'bg-orange-500' :
                    territory.color === 'purple' ? 'bg-purple-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${(territory.claimsPerMonth / 50) * 100}%` }}
                ></div>
              </div>
              <div className="w-20 text-right text-sm text-gray-600">{territory.claimsPerMonth} claims</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

