'use client';

import { FileText, Download, Eye, Calendar, CheckCircle, Clock } from 'lucide-react';

const documents = [
  { id: 1, name: 'Claim Acknowledgment Letter', type: 'letter', date: '2025-12-01', status: 'available' },
  { id: 2, name: 'Policy Document - KI-2024-001234', type: 'policy', date: '2024-01-15', status: 'available' },
  { id: 3, name: 'Fire Department Report', type: 'report', date: '2025-11-28', status: 'available' },
  { id: 4, name: 'Inspection Schedule Confirmation', type: 'letter', date: '2025-12-03', status: 'available' },
  { id: 5, name: 'Assessment Report', type: 'report', date: null, status: 'pending' },
  { id: 6, name: 'Claim Approval Letter', type: 'letter', date: null, status: 'pending' },
  { id: 7, name: 'Payment Confirmation', type: 'letter', date: null, status: 'pending' },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
        <p className="text-gray-600">View and download your claim documents</p>
      </div>

      {/* Document Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">4</p>
            <p className="text-sm text-gray-600">Available</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">3</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">7</p>
            <p className="text-sm text-gray-600">Total Documents</p>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="font-bold text-lg">All Documents</h3>
        </div>
        <div className="divide-y">
          {documents.map(doc => (
            <div key={doc.id} className={`p-4 flex items-center justify-between ${
              doc.status === 'pending' ? 'bg-gray-50' : 'hover:bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  doc.status === 'available' ? 'bg-blue-100' : 'bg-gray-200'
                }`}>
                  <FileText className={`w-5 h-5 ${
                    doc.status === 'available' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </div>
                <div>
                  <p className={`font-medium ${
                    doc.status === 'available' ? 'text-gray-800' : 'text-gray-400'
                  }`}>{doc.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="capitalize">{doc.type}</span>
                    {doc.date && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {doc.date}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {doc.status === 'available' ? (
                  <>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-xs font-semibold">
                    PENDING
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">About Your Documents</h4>
        <p className="text-sm text-blue-700">
          Documents will become available as your claim progresses. You will receive a notification 
          when new documents are ready for download. All documents are stored securely and can be 
          accessed anytime.
        </p>
      </div>
    </div>
  );
}

