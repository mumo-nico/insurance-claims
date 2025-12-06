'use client';

import { Send, Users, AlertTriangle, Bell, MessageSquare, Mail, Radio, Search } from 'lucide-react';

const recentMessages = [
  { id: 1, type: 'broadcast', subject: 'Weekly Team Update', recipients: 'All Adjusters', sentAt: '2 hours ago', status: 'delivered' },
  { id: 2, type: 'individual', subject: 'Assignment Update', recipients: 'Mike Johnson', sentAt: '4 hours ago', status: 'read' },
  { id: 3, type: 'broadcast', subject: 'System Maintenance Notice', recipients: 'All Adjusters', sentAt: 'Yesterday', status: 'delivered' },
  { id: 4, type: 'emergency', subject: 'Urgent: Flooding in Westlands', recipients: 'Nairobi Team', sentAt: 'Yesterday', status: 'delivered' },
  { id: 5, type: 'individual', subject: 'Performance Review Scheduled', recipients: 'Grace Muthoni', sentAt: '2 days ago', status: 'read' },
];

const teamGroups = [
  { name: 'All Adjusters', count: 24, icon: Users },
  { name: 'Nairobi Team', count: 12, icon: Users },
  { name: 'Mombasa Team', count: 4, icon: Users },
  { name: 'Upcountry Team', count: 8, icon: Users },
];

const adjusters = [
  { name: 'Mike Johnson', status: 'online' },
  { name: 'Sarah Wanjiku', status: 'online' },
  { name: 'Grace Muthoni', status: 'busy' },
  { name: 'James Kamau', status: 'offline' },
  { name: 'Peter Ochieng', status: 'offline' },
];

export default function Communications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communications</h1>
          <p className="text-gray-500">Send messages and announcements to adjusters</p>
        </div>
        <button className="btn-primary flex items-center gap-2 bg-red-600 hover:bg-red-700">
          <AlertTriangle className="w-4 h-4" />
          Emergency Alert
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compose Message */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Compose Message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message Type</label>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg border-2 border-purple-500">
                    <Radio className="w-4 h-4 inline mr-2" />
                    Broadcast
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border-2 border-transparent hover:border-gray-300">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Individual
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border-2 border-transparent hover:border-gray-300">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>All Adjusters (24)</option>
                  <option>Nairobi Team (12)</option>
                  <option>Mombasa Team (4)</option>
                  <option>Available Adjusters Only (12)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="Enter message subject..." className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} placeholder="Type your message here..." className="w-full border rounded-lg px-4 py-2"></textarea>
              </div>
              <div className="flex gap-2">
                <button className="btn-primary flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <button className="btn-secondary">Save as Draft</button>
              </div>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Messages</h2>
            <div className="space-y-3">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50">
                  <div className={`p-2 rounded-lg ${
                    msg.type === 'emergency' ? 'bg-red-100' :
                    msg.type === 'broadcast' ? 'bg-purple-100' : 'bg-blue-100'
                  }`}>
                    {msg.type === 'emergency' ? <AlertTriangle className="w-5 h-5 text-red-600" /> :
                     msg.type === 'broadcast' ? <Radio className="w-5 h-5 text-purple-600" /> :
                     <MessageSquare className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{msg.subject}</p>
                    <p className="text-sm text-gray-500">To: {msg.recipients}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">{msg.sentAt}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      msg.status === 'read' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team Groups */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Groups</h2>
            <div className="space-y-2">
              {teamGroups.map((group) => (
                <button key={group.name} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-left">
                  <group.icon className="w-5 h-5 text-gray-400" />
                  <span className="flex-1 text-gray-700">{group.name}</span>
                  <span className="text-sm text-gray-400">{group.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h2>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search adjusters..." className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" />
            </div>
            <div className="space-y-2">
              {adjusters.map((adj) => (
                <div key={adj.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className={`w-2 h-2 rounded-full ${
                    adj.status === 'online' ? 'bg-green-500' :
                    adj.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></span>
                  <span className="text-sm text-gray-700">{adj.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

