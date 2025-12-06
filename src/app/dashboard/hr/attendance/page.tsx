'use client';

import { Clock, Calendar, Users, TrendingUp, MapPin, CheckCircle, XCircle } from 'lucide-react';

const todayAttendance = [
  { name: 'Mike Johnson', clockIn: '08:05 AM', clockOut: '-', hoursWorked: '4h 15m', status: 'working', location: 'Field - Kilimani' },
  { name: 'Sarah Wanjiku', clockIn: '07:55 AM', clockOut: '-', hoursWorked: '4h 25m', status: 'working', location: 'Field - Westlands' },
  { name: 'Grace Muthoni', clockIn: '08:30 AM', clockOut: '-', hoursWorked: '3h 50m', status: 'working', location: 'Office' },
  { name: 'James Kamau', clockIn: '08:00 AM', clockOut: '12:30 PM', hoursWorked: '4h 30m', status: 'on_break', location: 'Lunch' },
  { name: 'Peter Ochieng', clockIn: '-', clockOut: '-', hoursWorked: '0h', status: 'on_leave', location: '-' },
  { name: 'Lucy Achieng', clockIn: '-', clockOut: '-', hoursWorked: '0h', status: 'sick', location: '-' },
  { name: 'David Mwangi', clockIn: '08:15 AM', clockOut: '-', hoursWorked: '4h 05m', status: 'working', location: 'Field - Mombasa' },
];

const weeklyHours = [
  { name: 'Mike Johnson', mon: 8, tue: 9, wed: 8, thu: 7, fri: 4, total: 36, overtime: 0 },
  { name: 'Sarah Wanjiku', mon: 9, tue: 10, wed: 9, thu: 8, fri: 4, total: 40, overtime: 0 },
  { name: 'Grace Muthoni', mon: 10, tue: 10, wed: 9, thu: 10, fri: 4, total: 43, overtime: 3 },
  { name: 'James Kamau', mon: 8, tue: 8, wed: 8, thu: 8, fri: 4, total: 36, overtime: 0 },
];

const stats = {
  present: 5,
  onLeave: 1,
  sick: 1,
  totalHoursToday: 21,
  avgFieldTime: 65,
};

export default function TimeAttendance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Time & Attendance</h1>
          <p className="text-gray-500">Track adjuster hours and attendance</p>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-lg px-4 py-2">
            <option>Today - Dec 6, 2024</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button className="btn-primary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.present}</p>
            <p className="text-sm text-gray-500">Present Today</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.onLeave}</p>
            <p className="text-sm text-gray-500">On Leave</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <XCircle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.sick}</p>
            <p className="text-sm text-gray-500">Sick</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalHoursToday}h</p>
            <p className="text-sm text-gray-500">Total Hours</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.avgFieldTime}%</p>
            <p className="text-sm text-gray-500">Field Time</p>
          </div>
        </div>
      </div>

      {/* Today's Attendance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s Attendance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Adjuster</th>
                <th className="pb-3 font-medium">Clock In</th>
                <th className="pb-3 font-medium">Clock Out</th>
                <th className="pb-3 font-medium">Hours Worked</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Location</th>
              </tr>
            </thead>
            <tbody>
              {todayAttendance.map((record) => (
                <tr key={record.name} className="border-b last:border-0">
                  <td className="py-3 font-medium text-gray-900">{record.name}</td>
                  <td className="py-3 text-gray-600">{record.clockIn}</td>
                  <td className="py-3 text-gray-600">{record.clockOut}</td>
                  <td className="py-3 text-gray-600">{record.hoursWorked}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      record.status === 'working' ? 'bg-green-100 text-green-800' :
                      record.status === 'on_break' ? 'bg-yellow-100 text-yellow-800' :
                      record.status === 'on_leave' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {record.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {record.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Hours */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Hours Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Adjuster</th>
                <th className="pb-3 font-medium text-center">Mon</th>
                <th className="pb-3 font-medium text-center">Tue</th>
                <th className="pb-3 font-medium text-center">Wed</th>
                <th className="pb-3 font-medium text-center">Thu</th>
                <th className="pb-3 font-medium text-center">Fri</th>
                <th className="pb-3 font-medium text-center">Total</th>
                <th className="pb-3 font-medium text-center">Overtime</th>
              </tr>
            </thead>
            <tbody>
              {weeklyHours.map((record) => (
                <tr key={record.name} className="border-b last:border-0">
                  <td className="py-3 font-medium text-gray-900">{record.name}</td>
                  <td className="py-3 text-gray-600 text-center">{record.mon}h</td>
                  <td className="py-3 text-gray-600 text-center">{record.tue}h</td>
                  <td className="py-3 text-gray-600 text-center">{record.wed}h</td>
                  <td className="py-3 text-gray-600 text-center">{record.thu}h</td>
                  <td className="py-3 text-gray-600 text-center">{record.fri}h</td>
                  <td className="py-3 text-center font-medium text-gray-900">{record.total}h</td>
                  <td className="py-3 text-center">
                    {record.overtime > 0 ? (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        +{record.overtime}h
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
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

