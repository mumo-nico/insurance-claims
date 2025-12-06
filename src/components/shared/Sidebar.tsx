'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3, FileText, MapPin, Calendar, Camera, MessageSquare,
  Users, Settings, TrendingUp, DollarSign, Clock, AlertTriangle,
  Home, Navigation, Video, Star, Bell, Shield, Briefcase, UserPlus,
  Target, ClipboardList, Scale, Send
} from 'lucide-react';

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
};

const insurerItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard/insurer', icon: BarChart3 },
  { name: 'Claims', href: '/dashboard/insurer/claims', icon: FileText, badge: '24' },
  { name: 'Map View', href: '/dashboard/insurer/map', icon: MapPin },
  { name: 'Adjusters', href: '/dashboard/insurer/adjusters', icon: Users },
  { name: 'Analytics', href: '/dashboard/insurer/analytics', icon: TrendingUp },
  { name: 'Calendar', href: '/dashboard/insurer/calendar', icon: Calendar },
  { name: 'Fraud Alerts', href: '/dashboard/insurer/fraud', icon: AlertTriangle, badge: '3' },
  { name: 'Payments', href: '/dashboard/insurer/payments', icon: DollarSign },
  { name: 'Messages', href: '/dashboard/insurer/messages', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/insurer/settings', icon: Settings },
];

const adjusterItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard/adjuster', icon: BarChart3 },
  { name: 'My Tasks', href: '/dashboard/adjuster/tasks', icon: FileText, badge: '5' },
  { name: 'Schedule', href: '/dashboard/adjuster/schedule', icon: Calendar },
  { name: 'Route Map', href: '/dashboard/adjuster/map', icon: Navigation },
  { name: 'Field Tools', href: '/dashboard/adjuster/field-tools', icon: Camera },
  { name: 'Reports', href: '/dashboard/adjuster/reports', icon: TrendingUp },
  { name: 'Evidence', href: '/dashboard/adjuster/evidence', icon: Video },
  { name: 'Performance', href: '/dashboard/adjuster/performance', icon: Star },
  { name: 'Messages', href: '/dashboard/adjuster/messages', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/adjuster/settings', icon: Settings },
];

const insuredItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard/insured', icon: Home },
  { name: 'My Claim', href: '/dashboard/insured/claim', icon: FileText },
  { name: 'Upload Evidence', href: '/dashboard/insured/upload', icon: Camera },
  { name: 'Documents', href: '/dashboard/insured/documents', icon: FileText },
  { name: 'Appointments', href: '/dashboard/insured/appointments', icon: Calendar },
  { name: 'Messages', href: '/dashboard/insured/messages', icon: MessageSquare },
  { name: 'Notifications', href: '/dashboard/insured/notifications', icon: Bell },
  { name: 'Settings', href: '/dashboard/insured/settings', icon: Settings },
];

const hrItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard/hr', icon: BarChart3 },
  { name: 'Adjuster', href: '/dashboard/hr/adjusters', icon: Users },
  { name: 'Availability', href: '/dashboard/hr/availability', icon: Calendar },
  { name: 'Live Tracking', href: '/dashboard/hr/map', icon: MapPin },
  { name: 'Territory', href: '/dashboard/hr/territories', icon: Target },
  { name: 'Assignment', href: '/dashboard/hr/assignments', icon: ClipboardList, badge: '8' },
  { name: 'Analytics', href: '/dashboard/hr/performance', icon: TrendingUp },
  { name: 'Workload', href: '/dashboard/hr/workload', icon: Scale },
  { name: 'Attendance', href: '/dashboard/hr/attendance', icon: Clock },
  { name: 'Communications', href: '/dashboard/hr/communications', icon: Send },
  { name: 'Reports', href: '/dashboard/hr/reports', icon: FileText },
  { name: 'Settings', href: '/dashboard/hr/settings', icon: Settings },
];

interface SidebarProps {
  role: 'insurer' | 'adjuster' | 'insured' | 'hr';
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ role, isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  const getItems = () => {
    switch (role) {
      case 'insurer': return insurerItems;
      case 'adjuster': return adjusterItems;
      case 'insured': return insuredItems;
      case 'hr': return hrItems;
      default: return insurerItems;
    }
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'insurer': return 'Insurance Company';
      case 'adjuster': return 'Loss Adjuster';
      case 'insured': return 'Policyholder';
      case 'hr': return 'HR Management';
      default: return 'Dashboard';
    }
  };

  const items = getItems();
  const roleTitle = getRoleTitle();

  return (
    <aside className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 fixed top-0 left-0 w-64 h-screen bg-[#081527] shadow-xl z-30 transition-transform
    `}>
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-sky-500 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">ClaimsGIS</h1>
            <p className="text-xs text-sky-300">{roleTitle}</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-120px)]">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                sidebar-item
                ${isActive ? 'sidebar-item-active' : ''}
              `}
              onClick={onClose}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={`
                  px-2 py-0.5 text-xs font-bold rounded-full
                  ${isActive ? 'bg-white/20 text-white' : 'bg-sky-500/20 text-sky-400'}
                `}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

