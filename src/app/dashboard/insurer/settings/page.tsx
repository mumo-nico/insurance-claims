'use client';

import { Settings, User, Bell, Shield, Globe, Database, Mail } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <p className="text-gray-600">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-lg">Company Profile</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input type="text" defaultValue="Kenya Insurance Ltd" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration No.</label>
                <input type="text" defaultValue="IRA/2024/001234" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="claims@kenyainsurance.co.ke" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="text" defaultValue="+254 20 123 4567" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" defaultValue="Kenyatta Avenue, Nairobi, Kenya" className="w-full border rounded-lg px-3 py-2" />
              </div>
            </div>
            <button className="btn-primary mt-4">Save Changes</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-lg">Notification Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email alerts for new claims</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">SMS Alerts</p>
                  <p className="text-sm text-gray-500">Urgent alerts via SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-sky-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Fraud Alerts</p>
                  <p className="text-sm text-gray-500">Immediate notification for fraud detection</p>
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
              <Globe className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold">Region Settings</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Default Region</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>All Kenya</option>
                  <option>Nairobi</option>
                  <option>Coast</option>
                  <option>Western</option>
                  <option>Rift Valley</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Currency</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>KES - Kenya Shilling</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Time Zone</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>EAT (UTC+3)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold">Security</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full btn-secondary text-sm">Change Password</button>
              <button className="w-full btn-secondary text-sm">Enable 2FA</button>
              <button className="w-full btn-secondary text-sm">View Login History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

