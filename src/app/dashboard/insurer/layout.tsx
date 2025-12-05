'use client';

import { useState } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Navbar from '@/components/shared/Navbar';

export default function InsurerLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        role="insurer"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-64 min-h-screen">
        <Navbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          title="Insurance Claims Portal"
          subtitle="Comprehensive GIS Management System - Kenya"
        />

        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

