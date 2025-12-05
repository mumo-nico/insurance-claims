'use client';

import { useState } from 'react';
import { MapPin, Navigation, Clock, DollarSign, Phone } from 'lucide-react';
import MapComponent, { MapClaim } from '@/components/maps/MapComponent';

const claims: MapClaim[] = [
  { id: 1, title: 'Fire Damage', address: 'Kilimani, Nairobi', lat: -1.2892, lng: 36.7850, status: 'in-progress', priority: 'urgent', insured: 'Mary Wanjiku', value: 1250000 },
  { id: 2, title: 'Theft Investigation', address: 'Mombasa CBD', lat: -4.0435, lng: 39.6682, status: 'assigned', priority: 'medium', insured: 'Ali Hassan', value: 280000 },
  { id: 3, title: 'Water Damage', address: 'Westlands, Nairobi', lat: -1.2673, lng: 36.8110, status: 'assigned', priority: 'high', insured: 'James Mwangi', value: 450000 },
  { id: 4, title: 'Vehicle Accident', address: 'Thika Road', lat: -1.2200, lng: 36.8800, status: 'pending', priority: 'urgent', insured: 'Peter Kamau', value: 890000 },
];

export default function AdjusterMapPage() {
  const [selectedClaim, setSelectedClaim] = useState<MapClaim | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Route Map</h2>
          <p className="text-gray-600">View and navigate to your assigned claims</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Navigation className="w-4 h-4" /> Optimize Route
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow overflow-hidden">
          <MapComponent 
            claims={claims} 
            onClaimSelect={setSelectedClaim} 
            height="500px"
          />
        </div>

        {/* Claims List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h3 className="font-bold text-lg">Today's Stops</h3>
            <p className="text-sm text-gray-600">4 locations • 45 min drive</p>
          </div>
          <div className="divide-y max-h-[420px] overflow-y-auto">
            {claims.map((claim, index) => (
              <div 
                key={claim.id} 
                className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedClaim?.id === claim.id ? 'bg-sky-50 border-l-4 border-l-sky-500' : ''}`}
                onClick={() => setSelectedClaim(claim)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{claim.title}</p>
                    <p className="text-sm text-gray-600">{claim.insured}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      {claim.address}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Claim Details */}
      {selectedClaim && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{selectedClaim.title}</h3>
              <p className="text-gray-600">{selectedClaim.insured}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{selectedClaim.address}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />KES {selectedClaim.value?.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Navigation className="w-4 h-4" /> Navigate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

