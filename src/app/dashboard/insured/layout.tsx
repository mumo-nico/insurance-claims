'use client';

import { useState } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Navbar from '@/components/shared/Navbar';

export default function InsuredLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        role="insured"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-64 min-h-screen">
        <Navbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          title="Policyholder Portal"
          subtitle="Track Your Claim"
        />

        <main className="p-6">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

