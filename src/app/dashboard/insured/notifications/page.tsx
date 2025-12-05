'use client';

import type { ReactNode } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, Calendar, FileText, User, Settings } from 'lucide-react';

const notifications = [
  { id: 1, type: 'alert', title: 'Action Required', message: 'Please upload additional photos of the electrical damage before your inspection.', time: '2 hours ago', read: false },
  { id: 2, type: 'info', title: 'Inspection Scheduled', message: 'Your property inspection has been scheduled for December 7, 2025 at 10:00 AM.', time: '1 day ago', read: false },
  { id: 3, type: 'success', title: 'Adjuster Assigned', message: 'John Ochieng has been assigned as your loss adjuster.', time: '2 days ago', read: true },
  { id: 4, type: 'info', title: 'Claim Under Review', message: 'Your claim is now under initial review by our team.', time: '3 days ago', read: true },
  { id: 5, type: 'success', title: 'Claim Received', message: 'Your claim #CLM-2025-1002 has been successfully submitted.', time: '4 days ago', read: true },
  { id: 6, type: 'info', title: 'Welcome', message: 'Thank you for choosing Kenya Insurance. We are here to help you through the claims process.', time: '4 days ago', read: true },
];

const TypeIcon = ({ type }: { type: string }) => {
  const icons: Record<string, ReactNode> = {
    'alert': <AlertCircle className="w-5 h-5 text-yellow-500" />,
    'success': <CheckCircle className="w-5 h-5 text-green-500" />,
    'info': <Info className="w-5 h-5 text-blue-500" />,
  };
  return icons[type] || <Bell className="w-5 h-5 text-gray-500" />;
};

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
          <p className="text-gray-600">Stay updated on your claim progress</p>
        </div>
        <button className="text-sm text-sky-600 font-semibold hover:underline">Mark all as read</button>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-sm text-gray-600">Action Required</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">2</p>
            <p className="text-sm text-gray-600">Unread</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">6</p>
            <p className="text-sm text-gray-600">Total</p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">All Notifications</h3>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All</option>
            <option>Unread</option>
            <option>Action Required</option>
          </select>
        </div>
        <div className="divide-y">
          {notifications.map(notif => (
            <div key={notif.id} className={`p-4 hover:bg-gray-50 ${!notif.read ? 'bg-sky-50' : ''}`}>
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  notif.type === 'alert' ? 'bg-yellow-100' :
                  notif.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <TypeIcon type={notif.type} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`font-semibold ${!notif.read ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notif.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                    </div>
                    {!notif.read && (
                      <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{notif.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-5 h-5 text-gray-600" />
          <h3 className="font-bold text-lg">Notification Preferences</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">SMS Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

