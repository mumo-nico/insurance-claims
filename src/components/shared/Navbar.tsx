'use client';

import { useState } from 'react';
import { Menu, Bell, Search, MapPin, User, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onMenuClick?: () => void;
  title?: string;
  subtitle?: string;
}

export default function Navbar({ onMenuClick, title = 'Dashboard', subtitle }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'New claim submitted in Nairobi', time: '5 min ago', unread: true },
    { id: 2, text: 'Adjuster John assigned to claim #1234', time: '1 hour ago', unread: true },
    { id: 3, text: 'Weather alert: Heavy rain in Mombasa', time: '2 hours ago', unread: false },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick} 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search claims..." 
              className="bg-transparent border-none outline-none text-sm w-40"
            />
          </div>

          {/* Location */}
          <div className="hidden sm:flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Kenya</span>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                <div className="p-3 border-b">
                  <h3 className="font-bold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-sky-50' : ''}`}
                    >
                      <p className="text-sm text-gray-800">{notif.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-sm text-sky-600 font-semibold hover:underline">
                    View All
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2">
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
          </div>
        </div>
      </div>
    </header>
  );
}

