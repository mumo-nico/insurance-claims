'use client';

import { FileText, Download, Eye, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';

const reports = [
  { id: 1, claimId: 1002, title: 'Fire Damage Assessment', insured: 'Mary Wanjiku', status: 'submitted', date: '2025-12-04', type: 'inspection' },
  { id: 2, claimId: 1003, title: 'Theft Investigation Report', insured: 'Ali Hassan', status: 'draft', date: '2025-12-05', type: 'investigation' },
  { id: 3, claimId: 1004, title: 'Water Damage Final Report', insured: 'James Mwangi', status: 'approved', date: '2025-12-03', type: 'final' },
  { id: 4, claimId: 1005, title: 'Vehicle Accident Assessment', insured: 'Peter Kamau', status: 'pending-review', date: '2025-12-05', type: 'inspection' },
  { id: 5, claimId: 1006, title: 'Flood Damage Report', insured: 'Sarah Chebet', status: 'submitted', date: '2025-12-02', type: 'inspection' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'draft': 'bg-gray-100 text-gray-700',
    'submitted': 'bg-blue-100 text-blue-700',
    'pending-review': 'bg-yellow-100 text-yellow-700',
    'approved': 'bg-green-100 text-green-700',
    'rejected': 'bg-red-100 text-red-700',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase().replace('-', ' ')}</span>;
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
          <p className="text-gray-600">Create and manage your inspection reports</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-gray-400">
          <p className="text-sm text-gray-600">Drafts</p>
          <p className="text-2xl font-bold text-gray-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Submitted</p>
          <p className="text-2xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600">Pending Review</p>
          <p className="text-2xl font-bold text-yellow-600">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-600">Approved</p>
          <p className="text-2xl font-bold text-green-600">8</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">My Reports</h3>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Draft</option>
            <option>Submitted</option>
            <option>Pending Review</option>
            <option>Approved</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Report</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Claim</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Insured</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {reports.map(report => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span className="font-medium text-gray-900">{report.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">#{report.claimId}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.insured}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 capitalize">{report.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.date}</td>
                  <td className="px-6 py-4"><StatusBadge status={report.status} /></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
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

