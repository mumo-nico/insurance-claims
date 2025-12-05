'use client';

import type { ReactNode } from 'react';
import { Image, Video, FileText, Mic, MapPin, Download, Eye, Trash2, Upload, Filter } from 'lucide-react';

const evidence = [
  { id: 1, type: 'photo', name: 'fire_damage_01.jpg', claim: 1002, size: '2.4 MB', date: '2025-12-04', location: 'Kilimani, Nairobi' },
  { id: 2, type: 'photo', name: 'fire_damage_02.jpg', claim: 1002, size: '1.8 MB', date: '2025-12-04', location: 'Kilimani, Nairobi' },
  { id: 3, type: 'video', name: 'scene_walkthrough.mp4', claim: 1002, size: '45.2 MB', date: '2025-12-04', location: 'Kilimani, Nairobi' },
  { id: 4, type: 'audio', name: 'witness_statement.m4a', claim: 1003, size: '5.1 MB', date: '2025-12-03', location: 'Mombasa CBD' },
  { id: 5, type: 'document', name: 'police_report.pdf', claim: 1003, size: '1.2 MB', date: '2025-12-03', location: 'Mombasa CBD' },
  { id: 6, type: 'photo', name: 'theft_evidence_01.jpg', claim: 1003, size: '3.1 MB', date: '2025-12-03', location: 'Mombasa CBD' },
];

const TypeIcon = ({ type }: { type: string }) => {
  const icons: Record<string, ReactNode> = {
    'photo': <Image className="w-5 h-5 text-blue-500" />,
    'video': <Video className="w-5 h-5 text-green-500" />,
    'audio': <Mic className="w-5 h-5 text-purple-500" />,
    'document': <FileText className="w-5 h-5 text-orange-500" />,
  };
  return icons[type] || <FileText className="w-5 h-5 text-gray-500" />;
};

export default function EvidencePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Evidence Library</h2>
          <p className="text-gray-600">Manage all captured evidence and documents</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Upload className="w-4 h-4" /> Upload Evidence
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Image className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">24</p>
            <p className="text-sm text-gray-600">Photos</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Video className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-sm text-gray-600">Videos</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Mic className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">5</p>
            <p className="text-sm text-gray-600">Audio</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-600">Documents</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 flex gap-4 items-center">
        <Filter className="w-5 h-5 text-gray-500" />
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Types</option>
          <option>Photos</option>
          <option>Videos</option>
          <option>Audio</option>
          <option>Documents</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All Claims</option>
          <option>Claim #1002</option>
          <option>Claim #1003</option>
          <option>Claim #1004</option>
        </select>
        <input type="text" placeholder="Search files..." className="flex-1 border rounded-lg px-3 py-2 text-sm" />
      </div>

      {/* Evidence Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">File</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Claim</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {evidence.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <TypeIcon type={item.type} />
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">#{item.claim}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {item.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.size}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"><Download className="w-4 h-4" /></button>
                      <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><Trash2 className="w-4 h-4" /></button>
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

