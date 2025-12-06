'use client';

import { ClipboardList, AlertTriangle, Clock, MapPin, User, CheckCircle, ArrowRight } from 'lucide-react';

const pendingClaims = [
  { 
    id: 'CLM-127', 
    type: 'Fire Damage', 
    location: 'Kilimani, Nairobi',
    address: '45 Ngong Road, Kilimani',
    priority: 'URGENT', 
    value: 'KES 4,500,000',
    insured: 'Acme Ltd',
    receivedAt: '10 mins ago',
    suggestions: [
      { name: 'Mike Johnson', score: 95, distance: '2.5 km', workload: 3, specialty: 'Fire Expert' },
      { name: 'Sarah Wanjiku', score: 82, distance: '8 km', workload: 1, specialty: 'General' },
      { name: 'Grace Muthoni', score: 65, distance: '5 km', workload: 4, specialty: 'General' },
    ]
  },
  { 
    id: 'CLM-128', 
    type: 'Water Damage', 
    location: 'Westlands, Nairobi',
    address: '12 Waiyaki Way, Westlands',
    priority: 'HIGH', 
    value: 'KES 850,000',
    insured: 'John Mwangi',
    receivedAt: '25 mins ago',
    suggestions: [
      { name: 'Sarah Wanjiku', score: 90, distance: '1.5 km', workload: 1, specialty: 'Water Damage' },
      { name: 'James Kamau', score: 78, distance: '6 km', workload: 2, specialty: 'General' },
    ]
  },
  { 
    id: 'CLM-129', 
    type: 'Burglary', 
    location: 'Mombasa CBD',
    address: 'Moi Avenue, Mombasa',
    priority: 'MEDIUM', 
    value: 'KES 1,200,000',
    insured: 'Coastal Traders',
    receivedAt: '1 hour ago',
    suggestions: [
      { name: 'Peter Ochieng', score: 92, distance: '3 km', workload: 2, specialty: 'Theft Expert' },
    ]
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'URGENT': return 'bg-red-100 text-red-800 border-red-300';
    case 'HIGH': return 'bg-orange-100 text-orange-800 border-orange-300';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export default function AssignmentQueue() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Assignment Queue</h1>
          <p className="text-gray-500">Assign pending claims to adjusters</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Auto-Assign All
          </button>
          <button className="btn-primary flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Urgent Broadcast
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center border-l-4 border-red-500">
          <p className="text-3xl font-bold text-red-600">3</p>
          <p className="text-sm text-gray-500">Urgent</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center border-l-4 border-orange-500">
          <p className="text-3xl font-bold text-orange-600">5</p>
          <p className="text-sm text-gray-500">High Priority</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center border-l-4 border-yellow-500">
          <p className="text-3xl font-bold text-yellow-600">8</p>
          <p className="text-sm text-gray-500">Medium</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center border-l-4 border-green-500">
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-500">Available Adjusters</p>
        </div>
      </div>

      {/* Assignment Cards */}
      <div className="space-y-6">
        {pendingClaims.map((claim) => (
          <div key={claim.id} className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${
            claim.priority === 'URGENT' ? 'border-red-500' :
            claim.priority === 'HIGH' ? 'border-orange-500' : 'border-yellow-500'
          }`}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{claim.id}</h3>
                    <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(claim.priority)}`}>
                      {claim.priority}
                    </span>
                    <span className="text-sm text-gray-500">{claim.receivedAt}</span>
                  </div>
                  <p className="text-lg text-gray-700 mt-1">{claim.type}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" /> {claim.address}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{claim.value}</p>
                  <p className="text-sm text-gray-500">Insured: {claim.insured}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">🤖 Recommended Adjusters:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {claim.suggestions.map((adj, idx) => (
                    <div key={adj.name} className={`p-4 rounded-lg border-2 ${idx === 0 ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{adj.name}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${idx === 0 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                          {adj.score}/100
                        </span>
                      </div>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>✅ {adj.distance} away</p>
                        <p>✅ {adj.workload} current claims</p>
                        <p>✅ {adj.specialty}</p>
                      </div>
                      <button className={`mt-3 w-full py-2 rounded-lg text-sm font-medium ${
                        idx === 0 ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>
                        {idx === 0 ? 'Assign (Best Match)' : 'Assign'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

