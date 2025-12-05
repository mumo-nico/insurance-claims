'use client';

import { useState } from 'react';
import { Filter, Navigation, X } from 'lucide-react';
import MapComponent, { MapClaim } from '@/components/maps/MapComponent';

const claims: MapClaim[] = [
  { id: 1, title: 'Water Damage', address: 'Westlands, Nairobi', lat: -1.2673, lng: 36.8110, status: 'pending', priority: 'high', insured: 'James Mwangi', value: 450000 },
  { id: 2, title: 'Fire Damage', address: 'Kilimani, Nairobi', lat: -1.2892, lng: 36.7850, status: 'assigned', priority: 'urgent', insured: 'Mary Wanjiku', value: 1250000 },
  { id: 3, title: 'Theft', address: 'Mombasa CBD', lat: -4.0435, lng: 39.6682, status: 'in-progress', priority: 'medium', insured: 'Ali Hassan', value: 280000 },
  { id: 4, title: 'Storm Damage', address: 'Kisumu', lat: -0.1022, lng: 34.7617, status: 'completed', priority: 'high', insured: 'Grace Achieng', value: 680000 },
  { id: 5, title: 'Vehicle Accident', address: 'Thika Road, Nairobi', lat: -1.2194, lng: 36.8880, status: 'pending', priority: 'urgent', insured: 'Peter Kamau', value: 890000 },
  { id: 6, title: 'Flood Damage', address: 'Nakuru', lat: -0.3031, lng: 36.0800, status: 'assigned', priority: 'high', insured: 'Sarah Chebet', value: 520000 },
  { id: 7, title: 'Burglary', address: 'Karen, Nairobi', lat: -1.3200, lng: 36.7100, status: 'pending', priority: 'medium', insured: 'Joseph Mutua', value: 320000 },
  { id: 8, title: 'Fire Damage', address: 'Eldoret', lat: 0.5143, lng: 35.2698, status: 'in-progress', priority: 'high', insured: 'Emily Kosgei', value: 980000 },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'assigned': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-purple-100 text-purple-800',
    'completed': 'bg-green-100 text-green-800'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase()}</span>;
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles: Record<string, string> = {
    'low': 'bg-gray-100 text-gray-700',
    'medium': 'bg-orange-100 text-orange-700',
    'high': 'bg-red-100 text-red-700',
    'urgent': 'bg-red-600 text-white'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[priority]}`}>{priority.toUpperCase()}</span>;
};

export default function MapPage() {
  const [selectedClaim, setSelectedClaim] = useState<MapClaim | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Claims Map View</h2>
          <p className="text-gray-600">Interactive map of all claims across Kenya</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Navigation className="w-4 h-4" /> My Location
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-wrap gap-4">
        <span className="text-sm font-semibold text-gray-700">Priority:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600"></div>
          <span className="text-sm">Urgent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span className="text-sm">High</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-600"></div>
          <span className="text-sm">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gray-500"></div>
          <span className="text-sm">Low</span>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-lg shadow">
        <MapComponent 
          claims={claims}
          onClaimSelect={setSelectedClaim}
          height="600px"
        />
      </div>

      {/* Selected Claim Panel */}
      {selectedClaim && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{selectedClaim.title}</h3>
              <p className="text-gray-600">{selectedClaim.address}</p>
            </div>
            <button onClick={() => setSelectedClaim(null)}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">Insured</p>
              <p className="font-semibold">{selectedClaim.insured}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Value</p>
              <p className="font-semibold">KES {selectedClaim.value?.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <StatusBadge status={selectedClaim.status} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Priority</p>
              <PriorityBadge priority={selectedClaim.priority} />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="btn-primary">View Details</button>
            <button className="btn-secondary">Assign Adjuster</button>
          </div>
        </div>
      )}
    </div>
  );
}

