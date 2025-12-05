'use client';

import { useState } from 'react';
import { 
  FileText, Clock, TrendingUp, DollarSign, Filter, Navigation,
  CloudRain, Wind, AlertTriangle, Search, Sun, Cloud
} from 'lucide-react';
import MapComponent, { MapClaim } from '@/components/maps/MapComponent';

// Kenya-focused sample claims data
const claims: MapClaim[] = [
  { id: 1, title: 'Water Damage', address: 'Westlands, Nairobi', lat: -1.2673, lng: 36.8110, status: 'pending', priority: 'high', insured: 'James Mwangi', value: 450000 },
  { id: 2, title: 'Fire Damage', address: 'Kilimani, Nairobi', lat: -1.2892, lng: 36.7850, status: 'assigned', priority: 'urgent', insured: 'Mary Wanjiku', value: 1250000 },
  { id: 3, title: 'Theft', address: 'Mombasa CBD', lat: -4.0435, lng: 39.6682, status: 'in-progress', priority: 'medium', insured: 'Ali Hassan', value: 280000 },
  { id: 4, title: 'Storm Damage', address: 'Kisumu', lat: -0.1022, lng: 34.7617, status: 'completed', priority: 'high', insured: 'Grace Achieng', value: 680000 },
  { id: 5, title: 'Vehicle Accident', address: 'Thika Road, Nairobi', lat: -1.2194, lng: 36.8880, status: 'pending', priority: 'urgent', insured: 'Peter Kamau', value: 890000 },
  { id: 6, title: 'Flood Damage', address: 'Nakuru', lat: -0.3031, lng: 36.0800, status: 'assigned', priority: 'high', insured: 'Sarah Chebet', value: 520000 },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'assigned': 'bg-blue-100 text-blue-800 border-blue-300',
    'in-progress': 'bg-purple-100 text-purple-800 border-purple-300',
    'completed': 'bg-green-100 text-green-800 border-green-300'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles['pending']}`}>
      {status.replace('-', ' ').toUpperCase()}
    </span>
  );
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles: Record<string, string> = {
    'low': 'bg-gray-100 text-gray-700',
    'medium': 'bg-orange-100 text-orange-700',
    'high': 'bg-red-100 text-red-700',
    'urgent': 'bg-red-600 text-white'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[priority] || styles['medium']}`}>
      {priority.toUpperCase()}
    </span>
  );
};

export default function InsurerDashboard() {
  const [selectedClaim, setSelectedClaim] = useState<MapClaim | null>(null);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat-card border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Claims</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">24</h3>
              <p className="text-green-600 text-xs mt-2">↑ 12% from last month</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="stat-card border-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pending Review</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">8</h3>
              <p className="text-yellow-600 text-xs mt-2">Needs attention</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="stat-card border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm font-medium">In Progress</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">12</h3>
              <p className="text-purple-600 text-xs mt-2">6 due this week</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="stat-card border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Value</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">KES 4.2M</h3>
              <p className="text-gray-600 text-xs mt-2">Active claims</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Map and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-bold text-lg">Claims Map - Kenya</h3>
            <div className="flex gap-2">
              <button className="text-sm px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-1">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="text-sm px-3 py-1 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 flex items-center gap-1">
                <Navigation className="w-4 h-4" /> Locate
              </button>
            </div>
          </div>
          <div className="p-4">
            <MapComponent 
              claims={claims} 
              onClaimSelect={setSelectedClaim}
              height="350px"
            />
          </div>
        </div>

        {/* Weather & Fraud Alerts */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Weather Alerts - Kenya</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <CloudRain className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Heavy Rain Expected</p>
                  <p className="text-xs text-gray-600">Dec 7-8, Nairobi Region</p>
                  <p className="text-xs text-yellow-700 mt-1">Possible claim spike</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Wind className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Strong Winds</p>
                  <p className="text-xs text-gray-600">Dec 9, Coastal Region</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Fraud Alerts</h3>
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Claim #1847</p>
                <p className="text-xs text-gray-600">Multiple claims same location</p>
                <button className="text-xs text-red-700 font-semibold mt-1">Review →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Claims Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Claims</h3>
          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-1">
              <Search className="w-4 h-4" /> Search
            </button>
            <button className="text-sm px-3 py-1 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
              Export Report
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Claim ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Insured</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Value (KES)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {claims.map(claim => (
                <tr key={claim.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#{claim.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{claim.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{claim.insured}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{claim.address}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{claim.value?.toLocaleString()}</td>
                  <td className="px-6 py-4"><StatusBadge status={claim.status} /></td>
                  <td className="px-6 py-4"><PriorityBadge priority={claim.priority} /></td>
                  <td className="px-6 py-4">
                    <button className="text-sky-600 hover:text-sky-800 text-sm font-semibold">
                      View
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

