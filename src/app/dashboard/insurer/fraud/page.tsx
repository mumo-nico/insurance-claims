'use client';

import { AlertTriangle, Eye, CheckCircle, XCircle, MapPin, Clock, User } from 'lucide-react';

const fraudAlerts = [
  { id: 1, claimId: 1847, type: 'Multiple Claims', description: 'Same location reported 3 claims in 30 days', risk: 'high', status: 'pending', location: 'Westlands, Nairobi', date: '2025-12-04' },
  { id: 2, claimId: 2103, type: 'Photo Mismatch', description: 'GPS location differs from claim address by 15km', risk: 'high', status: 'investigating', location: 'Kilimani, Nairobi', date: '2025-12-03' },
  { id: 3, claimId: 1956, type: 'Value Inflation', description: 'Claimed value exceeds market rate by 45%', risk: 'medium', status: 'pending', location: 'Mombasa CBD', date: '2025-12-02' },
  { id: 4, claimId: 1834, type: 'Timing Anomaly', description: 'Claim filed before incident date', risk: 'high', status: 'resolved', location: 'Kisumu', date: '2025-11-28' },
  { id: 5, claimId: 2087, type: 'Document Forgery', description: 'Receipts appear to be digitally altered', risk: 'critical', status: 'investigating', location: 'Nakuru', date: '2025-12-01' },
];

const RiskBadge = ({ risk }: { risk: string }) => {
  const styles: Record<string, string> = {
    'low': 'bg-gray-100 text-gray-700',
    'medium': 'bg-yellow-100 text-yellow-700',
    'high': 'bg-orange-100 text-orange-700',
    'critical': 'bg-red-600 text-white',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[risk]}`}>{risk.toUpperCase()}</span>;
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-700',
    'investigating': 'bg-blue-100 text-blue-700',
    'resolved': 'bg-green-100 text-green-700',
    'dismissed': 'bg-gray-100 text-gray-700',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase()}</span>;
};

export default function FraudAlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Fraud Detection & Alerts</h2>
        <p className="text-gray-600">AI-powered fraud detection across all Kenya claims</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
          <p className="text-sm text-gray-600">Critical Alerts</p>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
          <p className="text-sm text-gray-600">High Risk</p>
          <p className="text-2xl font-bold text-orange-600">5</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Under Investigation</p>
          <p className="text-2xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-600">Resolved This Month</p>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Active Fraud Alerts</h3>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Risk Levels</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
        <div className="divide-y">
          {fraudAlerts.map(alert => (
            <div key={alert.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    alert.risk === 'critical' ? 'bg-red-100' : 
                    alert.risk === 'high' ? 'bg-orange-100' : 'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.risk === 'critical' ? 'text-red-600' : 
                      alert.risk === 'high' ? 'text-orange-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-gray-800">Claim #{alert.claimId}</span>
                      <span className="text-sm font-semibold text-gray-600">{alert.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{alert.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{alert.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-2">
                    <RiskBadge risk={alert.risk} />
                    <StatusBadge status={alert.status} />
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200" title="View Details">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200" title="Mark Resolved">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200" title="Dismiss">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

