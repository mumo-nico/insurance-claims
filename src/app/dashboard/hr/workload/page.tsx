'use client';

import { Scale, AlertTriangle, Users, TrendingUp, ArrowRight, RefreshCw } from 'lucide-react';

const adjusterWorkloads = [
  { name: 'Mike Johnson', claims: 8, capacity: 5, status: 'overloaded', territory: 'Nairobi Central' },
  { name: 'Sarah Wanjiku', claims: 1, capacity: 5, status: 'underutilized', territory: 'Westlands' },
  { name: 'Grace Muthoni', claims: 7, capacity: 5, status: 'overloaded', territory: 'Parklands' },
  { name: 'James Kamau', claims: 2, capacity: 5, status: 'underutilized', territory: 'Karen' },
  { name: 'Peter Ochieng', claims: 4, capacity: 5, status: 'balanced', territory: 'Mombasa' },
  { name: 'Lucy Achieng', claims: 5, capacity: 5, status: 'balanced', territory: 'Eldoret' },
  { name: 'David Mwangi', claims: 3, capacity: 5, status: 'balanced', territory: 'Kisumu' },
  { name: 'Janet Atieno', claims: 4, capacity: 5, status: 'balanced', territory: 'Nakuru' },
];

const suggestedRebalances = [
  { from: 'Mike Johnson', to: 'Sarah Wanjiku', claims: 2, reason: 'Mike is overloaded, Sarah has capacity' },
  { from: 'Grace Muthoni', to: 'James Kamau', claims: 2, reason: 'Grace is overloaded, James has capacity' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'overloaded': return 'text-red-600 bg-red-100';
    case 'underutilized': return 'text-yellow-600 bg-yellow-100';
    case 'balanced': return 'text-green-600 bg-green-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const getBarColor = (claims: number, capacity: number) => {
  const ratio = claims / capacity;
  if (ratio > 1) return 'bg-red-500';
  if (ratio < 0.4) return 'bg-yellow-500';
  return 'bg-green-500';
};

export default function WorkloadBalancing() {
  const avgWorkload = adjusterWorkloads.reduce((acc, a) => acc + a.claims, 0) / adjusterWorkloads.length;
  const overloaded = adjusterWorkloads.filter(a => a.status === 'overloaded').length;
  const underutilized = adjusterWorkloads.filter(a => a.status === 'underutilized').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workload Balancing</h1>
          <p className="text-gray-500">Monitor and balance adjuster workloads</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Auto-Balance
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-500">Avg Workload</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{avgWorkload.toFixed(1)}</p>
          <p className="text-xs text-gray-500 mt-1">claims per adjuster</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-500">Overloaded</span>
          </div>
          <p className="text-3xl font-bold text-red-600">{overloaded}</p>
          <p className="text-xs text-gray-500 mt-1">adjusters need help</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-500">Underutilized</span>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{underutilized}</p>
          <p className="text-xs text-gray-500 mt-1">have capacity</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">Balanced</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{adjusterWorkloads.length - overloaded - underutilized}</p>
          <p className="text-xs text-gray-500 mt-1">optimal workload</p>
        </div>
      </div>

      {/* Suggested Rebalances */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">🤖 Suggested Rebalances</h2>
        <div className="space-y-4">
          {suggestedRebalances.map((suggestion, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{suggestion.from}</span>
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  <span className="font-medium text-gray-900">{suggestion.to}</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {suggestion.claims} claims
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{suggestion.reason}</p>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Workload Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Workload Distribution</h2>
        <div className="space-y-4">
          {adjusterWorkloads.map((adjuster) => (
            <div key={adjuster.name} className="flex items-center gap-4">
              <div className="w-36 text-sm font-medium text-gray-900">{adjuster.name}</div>
              <div className="flex-1">
                <div className="relative bg-gray-200 rounded-full h-6">
                  <div
                    className={`absolute left-0 top-0 h-6 rounded-full ${getBarColor(adjuster.claims, adjuster.capacity)}`}
                    style={{ width: `${Math.min((adjuster.claims / adjuster.capacity) * 100, 100)}%` }}
                  ></div>
                  <div className="absolute left-0 top-0 w-full h-6 flex items-center justify-center text-xs font-medium">
                    {adjuster.claims}/{adjuster.capacity} claims
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(adjuster.status)}`}>
                {adjuster.status}
              </span>
              <button className="text-purple-600 hover:text-purple-800 text-sm">
                Adjust
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded"></span> Overloaded</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-500 rounded"></span> Underutilized</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded"></span> Balanced</span>
        </div>
      </div>
    </div>
  );
}

