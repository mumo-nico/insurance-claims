'use client';

import { User, Bell, Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function InsuredSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <p className="text-gray-600">Manage your profile and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-lg">Personal Information</h3>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                MW
              </div>
              <button className="btn-secondary">Change Photo</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue="Mary Wanjiku" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Number</label>
                <input type="text" defaultValue="12345678" className="w-full border rounded-lg px-3 py-2" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="mary.wanjiku@email.com" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="text" defaultValue="+254 723 456 789" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" defaultValue="Kilimani, Nairobi, Kenya" className="w-full border rounded-lg px-3 py-2" />
              </div>
            </div>
            <button className="btn-primary mt-4">Save Changes</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-lg">Notification Preferences</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Claim Updates</p>
                  <p className="text-sm text-gray-500">Get notified about claim status changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Appointment Reminders</p>
                  <p className="text-sm text-gray-500">Reminders before scheduled appointments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">SMS Alerts</p>
                  <p className="text-sm text-gray-500">Receive important updates via SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold">Security</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full btn-secondary text-sm">Change Password</button>
              <button className="w-full btn-secondary text-sm">Enable 2FA</button>
              <button className="w-full btn-secondary text-sm">Login History</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-4">Policy Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Policy Number</span>
                <span className="font-semibold">KI-2024-001234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Policy Type</span>
                <span className="font-semibold">Home Insurance</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Valid Until</span>
                <span className="font-semibold">Jan 15, 2026</span>
              </div>
            </div>
            <button className="w-full btn-secondary text-sm mt-4">View Policy</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-4">Need Help?</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+254 20 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>support@kenyainsurance.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

