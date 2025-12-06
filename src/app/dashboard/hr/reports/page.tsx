'use client';

import { FileText, Download, Calendar, TrendingUp, Users, BarChart3, Filter } from 'lucide-react';

const reports = [
  { id: 1, name: 'Weekly Performance Report', type: 'Performance', period: 'Dec 1-7, 2024', status: 'ready', size: '2.4 MB' },
  { id: 2, name: 'Monthly Attendance Summary', type: 'Attendance', period: 'November 2024', status: 'ready', size: '1.8 MB' },
  { id: 3, name: 'Claims Distribution Report', type: 'Analytics', period: 'Q4 2024', status: 'processing', size: '-' },
  { id: 4, name: 'Adjuster Efficiency Analysis', type: 'Performance', period: 'November 2024', status: 'ready', size: '3.2 MB' },
  { id: 5, name: 'Territory Coverage Report', type: 'Operations', period: 'Q4 2024', status: 'ready', size: '1.5 MB' },
  { id: 6, name: 'Overtime & Leave Report', type: 'Attendance', period: 'November 2024', status: 'ready', size: '856 KB' },
];

const reportTemplates = [
  { name: 'Weekly Performance', icon: TrendingUp, description: 'Individual and team performance metrics' },
  { name: 'Monthly Statistics', icon: BarChart3, description: 'Comprehensive monthly statistics' },
  { name: 'Adjuster Efficiency', icon: Users, description: 'Detailed efficiency analysis per adjuster' },
  { name: 'Attendance Report', icon: Calendar, description: 'Time tracking and attendance data' },
];

const quickStats = [
  { label: 'Reports Generated', value: '24', period: 'This Month' },
  { label: 'Total Downloads', value: '156', period: 'This Month' },
  { label: 'Scheduled Reports', value: '8', period: 'Active' },
  { label: 'Data Exports', value: '12', period: 'This Week' },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">Generate and download HR reports</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Generate New Report
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xs text-gray-400">{stat.period}</p>
          </div>
        ))}
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Generate</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reportTemplates.map((template) => (
            <div key={template.name} className="p-4 border rounded-lg hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-colors">
              <template.icon className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <select className="border rounded-lg px-4 py-2">
            <option>All Report Types</option>
            <option>Performance</option>
            <option>Attendance</option>
            <option>Analytics</option>
            <option>Operations</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>All Time Periods</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Quarter</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Report Name</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Period</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Size</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">{report.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{report.period}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      report.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status === 'ready' ? 'Ready' : 'Processing...'}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{report.size}</td>
                  <td className="py-4">
                    {report.status === 'ready' ? (
                      <button className="flex items-center gap-1 text-purple-600 hover:text-purple-800">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    ) : (
                      <span className="text-gray-400">Pending...</span>
                    )}
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

