'use client';

import { Camera, Video, Mic, MapPin, FileText, Upload, Ruler, Compass, Sun, Cloud, Thermometer } from 'lucide-react';

export default function FieldToolsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Field Tools</h2>
        <p className="text-gray-600">Capture evidence and document claims on-site</p>
      </div>

      {/* Quick Capture */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Quick Capture</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-3 p-6 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border-2 border-blue-200">
            <Camera className="w-10 h-10 text-blue-600" />
            <span className="font-semibold text-gray-700">Take Photo</span>
            <span className="text-xs text-gray-500">Capture damage</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-6 bg-green-50 hover:bg-green-100 rounded-xl transition-colors border-2 border-green-200">
            <Video className="w-10 h-10 text-green-600" />
            <span className="font-semibold text-gray-700">Record Video</span>
            <span className="text-xs text-gray-500">Document scene</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-6 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors border-2 border-purple-200">
            <Mic className="w-10 h-10 text-purple-600" />
            <span className="font-semibold text-gray-700">Voice Note</span>
            <span className="text-xs text-gray-500">Record observations</span>
          </button>
          <button className="flex flex-col items-center gap-3 p-6 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors border-2 border-orange-200">
            <MapPin className="w-10 h-10 text-orange-600" />
            <span className="font-semibold text-gray-700">GPS Tag</span>
            <span className="text-xs text-gray-500">Mark location</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Measurement Tools */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Measurement Tools</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <Ruler className="w-8 h-8 text-sky-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Distance Measure</p>
                <p className="text-sm text-gray-500">Measure damage area using camera</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <Compass className="w-8 h-8 text-sky-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Compass</p>
                <p className="text-sm text-gray-500">Determine orientation</p>
              </div>
            </button>
          </div>
        </div>

        {/* Weather Conditions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Current Conditions - Nairobi</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">24°C</p>
              <p className="text-xs text-gray-500">Temperature</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Cloud className="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">65%</p>
              <p className="text-xs text-gray-500">Humidity</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">12 km/h</p>
              <p className="text-xs text-gray-500">Wind</p>
            </div>
          </div>
          <button className="w-full mt-4 btn-secondary">Log Weather Conditions</button>
        </div>
      </div>

      {/* Recent Captures */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Recent Captures</h3>
          <button className="text-sky-600 text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Upload Evidence</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-sky-500 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Drag and drop files here</p>
          <p className="text-sm text-gray-500 mt-1">or click to browse</p>
          <p className="text-xs text-gray-400 mt-2">Supports: JPG, PNG, MP4, PDF (Max 50MB)</p>
        </div>
      </div>
    </div>
  );
}

