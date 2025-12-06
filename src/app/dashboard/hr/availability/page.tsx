'use client';

import { Calendar, Clock, UserCheck, UserX, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const leaveRequests = [
  { id: 1, name: 'Mike Johnson', type: 'Vacation', startDate: '2024-12-20', endDate: '2024-12-27', days: 5, status: 'pending', reason: 'Family holiday' },
  { id: 2, name: 'Sarah Wanjiku', type: 'Sick Leave', startDate: '2024-12-15', endDate: '2024-12-16', days: 2, status: 'approved', reason: 'Medical appointment' },
  { id: 3, name: 'Peter Ochieng', type: 'Personal', startDate: '2024-12-18', endDate: '2024-12-18', days: 1, status: 'pending', reason: 'Personal matters' },
  { id: 4, name: 'Grace Muthoni', type: 'Vacation', startDate: '2025-01-05', endDate: '2025-01-12', days: 6, status: 'approved', reason: 'Annual leave' },
];

const availabilityStatus = [
  { name: 'Mike Johnson', status: 'available', currentTask: 'Field inspection', nextAvailable: 'Now' },
  { name: 'Sarah Wanjiku', status: 'busy', currentTask: 'Claim CLM-125', nextAvailable: '2:30 PM' },
  { name: 'Peter Ochieng', status: 'on_leave', currentTask: '-', nextAvailable: 'Dec 15' },
  { name: 'Grace Muthoni', status: 'busy', currentTask: 'Report writing', nextAvailable: '4:00 PM' },
  { name: 'James Kamau', status: 'available', currentTask: 'Standby', nextAvailable: 'Now' },
  { name: 'Lucy Achieng', status: 'sick', currentTask: '-', nextAvailable: 'Dec 12' },
];

const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
const onLeaveDays = [15, 16, 20, 21, 22, 23, 24, 25, 26, 27];

export default function AvailabilityLeave() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Availability & Leave</h1>
          <p className="text-gray-500">Manage adjuster schedules and leave requests</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Request Leave
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <UserCheck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-500">Available Today</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-500">Currently Busy</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">4</p>
            <p className="text-sm text-gray-500">On Leave</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <AlertCircle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-500">Pending Requests</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leave Calendar */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">December 2024 - Leave Calendar</h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-xs font-medium text-gray-500 py-2">{day}</div>
            ))}
            {calendarDays.map((day) => (
              <div
                key={day}
                className={`py-2 text-sm rounded-lg ${
                  onLeaveDays.includes(day)
                    ? 'bg-yellow-100 text-yellow-800 font-medium'
                    : day === 6
                    ? 'bg-purple-600 text-white font-bold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-100 rounded"></span> On Leave</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-purple-600 rounded"></span> Today</span>
          </div>
        </div>

        {/* Leave Requests */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Leave Requests</h2>
          <div className="space-y-3">
            {leaveRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{request.name}</h3>
                    <p className="text-sm text-gray-600">{request.type} • {request.days} days</p>
                    <p className="text-xs text-gray-400">{request.startDate} to {request.endDate}</p>
                    <p className="text-xs text-gray-500 mt-1">{request.reason}</p>
                  </div>
                  {request.status === 'pending' ? (
                    <div className="flex gap-2">
                      <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Approved
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Availability */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Availability Status</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Adjuster</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Current Task</th>
                <th className="pb-3 font-medium">Next Available</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {availabilityStatus.map((adjuster, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 font-medium text-gray-900">{adjuster.name}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      adjuster.status === 'available' ? 'bg-green-100 text-green-800' :
                      adjuster.status === 'busy' ? 'bg-yellow-100 text-yellow-800' :
                      adjuster.status === 'on_leave' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {adjuster.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 text-gray-600">{adjuster.currentTask}</td>
                  <td className="py-3 text-gray-600">{adjuster.nextAvailable}</td>
                  <td className="py-3">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Update Status
                    </button>
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

