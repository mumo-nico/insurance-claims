'use client';

import { FileText, Search, Filter, Download, Plus } from 'lucide-react';

const claims = [
  { id: 1, title: 'Water Damage', address: 'Westlands, Nairobi', status: 'pending', priority: 'high', insured: 'James Mwangi', value: 450000, date: '2025-12-01', adjuster: '-' },
  { id: 2, title: 'Fire Damage', address: 'Kilimani, Nairobi', status: 'assigned', priority: 'urgent', insured: 'Mary Wanjiku', value: 1250000, date: '2025-12-02', adjuster: 'John Ochieng' },
  { id: 3, title: 'Theft', address: 'Mombasa CBD', status: 'in-progress', priority: 'medium', insured: 'Ali Hassan', value: 280000, date: '2025-12-03', adjuster: 'John Ochieng' },
  { id: 4, title: 'Storm Damage', address: 'Kisumu', status: 'completed', priority: 'high', insured: 'Grace Achieng', value: 680000, date: '2025-11-28', adjuster: 'Sarah Wambui' },
  { id: 5, title: 'Vehicle Accident', address: 'Thika Road', status: 'pending', priority: 'urgent', insured: 'Peter Kamau', value: 890000, date: '2025-12-04', adjuster: '-' },
  { id: 6, title: 'Flood Damage', address: 'Nakuru', status: 'assigned', priority: 'high', insured: 'Sarah Chebet', value: 520000, date: '2025-12-05', adjuster: 'David Kimani' },
  { id: 7, title: 'Burglary', address: 'Karen, Nairobi', status: 'pending', priority: 'medium', insured: 'Joseph Mutua', value: 320000, date: '2025-12-05', adjuster: '-' },
  { id: 8, title: 'Fire Damage', address: 'Eldoret', status: 'in-progress', priority: 'high', insured: 'Emily Kosgei', value: 980000, date: '2025-12-01', adjuster: 'Sarah Wambui' },
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

export default function ClaimsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">All Claims</h2>
          <p className="text-gray-600">Manage and track all insurance claims across Kenya</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Claim
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search claims..." className="flex-1 border-none outline-none" />
        </div>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Status</option>
          <option>Pending</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Priority</option>
          <option>Urgent</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Regions</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Kisumu</option>
          <option>Nakuru</option>
          <option>Eldoret</option>
        </select>
        <button className="btn-secondary flex items-center gap-2">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      {/* Claims Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Insured</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Value</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Adjuster</th>
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
                <td className="px-6 py-4 text-sm text-gray-700">KES {claim.value.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{claim.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{claim.adjuster}</td>
                <td className="px-6 py-4"><StatusBadge status={claim.status} /></td>
                <td className="px-6 py-4"><PriorityBadge priority={claim.priority} /></td>
                <td className="px-6 py-4">
                  <button className="text-sky-600 hover:text-sky-800 text-sm font-semibold mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

