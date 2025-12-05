'use client';

import { Users, MapPin, Phone, Star, TrendingUp, Plus } from 'lucide-react';

const adjusters = [
  { id: 1, name: 'John Ochieng', phone: '+254 712 345 678', region: 'Nairobi', activeClaims: 5, completed: 45, rating: 4.8, status: 'active' },
  { id: 2, name: 'Sarah Wambui', phone: '+254 723 456 789', region: 'Central Kenya', activeClaims: 3, completed: 38, rating: 4.9, status: 'active' },
  { id: 3, name: 'David Kimani', phone: '+254 734 567 890', region: 'Rift Valley', activeClaims: 4, completed: 52, rating: 4.7, status: 'active' },
  { id: 4, name: 'Grace Njeri', phone: '+254 745 678 901', region: 'Coast', activeClaims: 2, completed: 29, rating: 4.6, status: 'on-leave' },
  { id: 5, name: 'Peter Muthoni', phone: '+254 756 789 012', region: 'Western Kenya', activeClaims: 6, completed: 41, rating: 4.5, status: 'active' },
  { id: 6, name: 'Mary Akinyi', phone: '+254 767 890 123', region: 'Nyanza', activeClaims: 3, completed: 35, rating: 4.8, status: 'active' },
];

export default function AdjustersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Loss Adjusters</h2>
          <p className="text-gray-600">Manage and monitor adjusters across Kenya regions</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Adjuster
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Total Adjusters</p>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Active Now</p>
          <p className="text-2xl font-bold text-green-600">10</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Claims This Month</p>
          <p className="text-2xl font-bold text-blue-600">89</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Avg Rating</p>
          <p className="text-2xl font-bold text-yellow-600">4.7 ★</p>
        </div>
      </div>

      {/* Adjusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adjusters.map((adjuster) => (
          <div key={adjuster.id} className="bg-white rounded-lg shadow p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {adjuster.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{adjuster.name}</h3>
                  <p className="text-sm text-gray-500">{adjuster.phone}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                adjuster.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {adjuster.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{adjuster.region}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{adjuster.rating} Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg mb-4">
              <div className="text-center">
                <p className="text-lg font-bold text-blue-600">{adjuster.activeClaims}</p>
                <p className="text-xs text-gray-500">Active Claims</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-green-600">{adjuster.completed}</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 btn-primary text-sm">View Profile</button>
              <button className="flex-1 btn-secondary text-sm">Assign Claim</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

