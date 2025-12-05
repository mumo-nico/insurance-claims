'use client';

import { DollarSign, TrendingUp, Clock, CheckCircle, Download } from 'lucide-react';

const payments = [
  { id: 1, claimId: 1004, insured: 'Grace Achieng', amount: 680000, status: 'paid', date: '2025-12-03', method: 'Bank Transfer' },
  { id: 2, claimId: 1002, insured: 'Mary Wanjiku', amount: 1150000, status: 'processing', date: '2025-12-05', method: 'Bank Transfer' },
  { id: 3, claimId: 1006, insured: 'Sarah Chebet', amount: 520000, status: 'approved', date: '2025-12-04', method: 'M-Pesa' },
  { id: 4, claimId: 1001, insured: 'James Mwangi', amount: 450000, status: 'pending', date: '2025-12-05', method: 'Bank Transfer' },
  { id: 5, claimId: 1003, insured: 'Ali Hassan', amount: 280000, status: 'paid', date: '2025-12-01', method: 'M-Pesa' },
  { id: 6, claimId: 1008, insured: 'Emily Kosgei', amount: 850000, status: 'approved', date: '2025-12-05', method: 'Bank Transfer' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-700',
    'approved': 'bg-blue-100 text-blue-700',
    'processing': 'bg-purple-100 text-purple-700',
    'paid': 'bg-green-100 text-green-700',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase()}</span>;
};

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Payments & Settlements</h2>
          <p className="text-gray-600">Track and manage claim payments across Kenya</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-600">Total Paid (This Month)</p>
          <p className="text-2xl font-bold text-green-600">KES 4.2M</p>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <TrendingUp className="w-4 h-4" /> +8% vs last month
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Approved</p>
          <p className="text-2xl font-bold text-blue-600">KES 1.3M</p>
          <p className="text-xs text-gray-500 mt-1">4 claims</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <p className="text-sm text-gray-600">Processing</p>
          <p className="text-2xl font-bold text-purple-600">KES 1.1M</p>
          <p className="text-xs text-gray-500 mt-1">2 claims</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-600">KES 450K</p>
          <p className="text-xs text-gray-500 mt-1">1 claim</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Payments</h3>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Processing</option>
            <option>Paid</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Payment ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Claim</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Insured</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {payments.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">PAY-{payment.id.toString().padStart(4, '0')}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">#{payment.claimId}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.insured}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">KES {payment.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.date}</td>
                  <td className="px-6 py-4"><StatusBadge status={payment.status} /></td>
                  <td className="px-6 py-4">
                    <button className="text-sky-600 hover:text-sky-800 text-sm font-semibold">View</button>
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

