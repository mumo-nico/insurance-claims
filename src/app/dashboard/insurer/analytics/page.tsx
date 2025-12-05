'use client';

import { TrendingUp, TrendingDown, DollarSign, FileText, Users, Clock } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
        <p className="text-gray-600">Comprehensive insights on claims performance across Kenya</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Claims Value</p>
              <p className="text-2xl font-bold mt-1">KES 12.5M</p>
              <div className="flex items-center gap-1 text-green-600 text-sm mt-2">
                <TrendingUp className="w-4 h-4" /> +15% vs last month
              </div>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Claims Processed</p>
              <p className="text-2xl font-bold mt-1">156</p>
              <div className="flex items-center gap-1 text-green-600 text-sm mt-2">
                <TrendingUp className="w-4 h-4" /> +8% vs last month
              </div>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Avg. Processing Time</p>
              <p className="text-2xl font-bold mt-1">4.2 days</p>
              <div className="flex items-center gap-1 text-red-600 text-sm mt-2">
                <TrendingDown className="w-4 h-4" /> +0.5 days vs target
              </div>
            </div>
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Adjusters</p>
              <p className="text-2xl font-bold mt-1">12</p>
              <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
                <Users className="w-4 h-4" /> 89% utilization
              </div>
            </div>
            <Users className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Claims by Region</h3>
          <div className="space-y-3">
            <div><div className="flex justify-between text-sm mb-1"><span>Nairobi</span><span>45%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-sky-600 h-3 rounded-full" style={{width: '45%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Mombasa</span><span>20%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-sky-600 h-3 rounded-full" style={{width: '20%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Kisumu</span><span>15%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-sky-600 h-3 rounded-full" style={{width: '15%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Nakuru</span><span>12%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-sky-600 h-3 rounded-full" style={{width: '12%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Others</span><span>8%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-sky-600 h-3 rounded-full" style={{width: '8%'}}></div></div></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Claims by Type</h3>
          <div className="space-y-3">
            <div><div className="flex justify-between text-sm mb-1"><span>Vehicle Accidents</span><span>35%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-orange-500 h-3 rounded-full" style={{width: '35%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Fire Damage</span><span>25%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-red-500 h-3 rounded-full" style={{width: '25%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Theft/Burglary</span><span>18%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-purple-500 h-3 rounded-full" style={{width: '18%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Water Damage</span><span>12%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-blue-500 h-3 rounded-full" style={{width: '12%'}}></div></div></div>
            <div><div className="flex justify-between text-sm mb-1"><span>Other</span><span>10%</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-gray-500 h-3 rounded-full" style={{width: '10%'}}></div></div></div>
          </div>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Monthly Claims Trend (2025)</h3>
        <div className="flex items-end gap-4 h-48">
          {[65, 78, 82, 70, 95, 88, 76, 92, 85, 90, 88, 94].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-sky-600 rounded-t" style={{height: `${value}%`}}></div>
              <span className="text-xs text-gray-500 mt-2">{['J','F','M','A','M','J','J','A','S','O','N','D'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

