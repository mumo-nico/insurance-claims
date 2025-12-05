'use client';

import { Upload, Image, FileText, Video, X, CheckCircle, AlertCircle } from 'lucide-react';

const uploadedFiles = [
  { id: 1, name: 'kitchen_damage_01.jpg', type: 'image', size: '2.4 MB', date: '2025-12-01', status: 'approved' },
  { id: 2, name: 'kitchen_damage_02.jpg', type: 'image', size: '1.8 MB', date: '2025-12-01', status: 'approved' },
  { id: 3, name: 'fire_report.pdf', type: 'document', size: '1.2 MB', date: '2025-12-01', status: 'approved' },
  { id: 4, name: 'electrical_panel.jpg', type: 'image', size: '3.1 MB', date: '2025-12-04', status: 'pending' },
  { id: 5, name: 'damage_video.mp4', type: 'video', size: '45.2 MB', date: '2025-12-04', status: 'pending' },
];

const requiredDocs = [
  { name: 'Photos of Damage', required: true, uploaded: true },
  { name: 'Fire Department Report', required: true, uploaded: true },
  { name: 'Police Report (if applicable)', required: false, uploaded: false },
  { name: 'Electrical Inspection Report', required: true, uploaded: false },
  { name: 'Receipts/Invoices for Damaged Items', required: true, uploaded: false },
];

const TypeIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    'image': <Image className="w-5 h-5 text-blue-500" />,
    'video': <Video className="w-5 h-5 text-green-500" />,
    'document': <FileText className="w-5 h-5 text-orange-500" />,
  };
  return icons[type] || <FileText className="w-5 h-5 text-gray-500" />;
};

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Upload Evidence</h2>
        <p className="text-gray-600">Submit photos, videos, and documents for your claim</p>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-sky-500 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Drag and drop files here</p>
          <p className="text-sm text-gray-500 mt-1">or click to browse</p>
          <p className="text-xs text-gray-400 mt-2">Supports: JPG, PNG, PDF, MP4 (Max 50MB per file)</p>
          <button className="btn-primary mt-4">Select Files</button>
        </div>
      </div>

      {/* Required Documents Checklist */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Required Documents</h3>
        <div className="space-y-3">
          {requiredDocs.map((doc, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
              doc.uploaded ? 'bg-green-50' : doc.required ? 'bg-yellow-50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                {doc.uploaded ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : doc.required ? (
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                )}
                <span className={`font-medium ${doc.uploaded ? 'text-green-700' : 'text-gray-700'}`}>
                  {doc.name}
                </span>
                {doc.required && !doc.uploaded && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">Required</span>
                )}
              </div>
              {!doc.uploaded && (
                <button className="text-sm text-sky-600 font-semibold hover:underline">Upload</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Uploaded Files */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="font-bold text-lg">Uploaded Files</h3>
        </div>
        <div className="divide-y">
          {uploadedFiles.map(file => (
            <div key={file.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <TypeIcon type={file.type} />
                <div>
                  <p className="font-medium text-gray-800">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  file.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {file.status.toUpperCase()}
                </span>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Tips for Better Documentation</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Take photos in good lighting from multiple angles</li>
          <li>• Include wide shots and close-ups of damage</li>
          <li>• Ensure documents are clear and readable</li>
          <li>• Include date stamps when possible</li>
        </ul>
      </div>
    </div>
  );
}

