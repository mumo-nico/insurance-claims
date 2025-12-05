'use client';

import { FileText, MapPin, Clock, DollarSign, Phone, Navigation, CheckCircle } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Fire Damage Inspection', insured: 'Mary Wanjiku', address: 'Kilimani, Nairobi', phone: '+254 723 456 789', value: 1250000, status: 'in-progress', priority: 'urgent', dueDate: '2025-12-07' },
  { id: 2, title: 'Theft Investigation', insured: 'Ali Hassan', address: 'Mombasa CBD', phone: '+254 712 345 678', value: 280000, status: 'assigned', priority: 'medium', dueDate: '2025-12-08' },
  { id: 3, title: 'Water Damage Assessment', insured: 'James Mwangi', address: 'Westlands, Nairobi', phone: '+254 734 567 890', value: 450000, status: 'assigned', priority: 'high', dueDate: '2025-12-08' },
  { id: 4, title: 'Vehicle Accident Report', insured: 'Peter Kamau', address: 'Thika Road', phone: '+254 745 678 901', value: 890000, status: 'pending', priority: 'urgent', dueDate: '2025-12-07' },
  { id: 5, title: 'Flood Damage Follow-up', insured: 'Sarah Chebet', address: 'Nakuru', phone: '+254 756 789 012', value: 520000, status: 'completed', priority: 'high', dueDate: '2025-12-05' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'assigned': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-purple-100 text-purple-800',
    'completed': 'bg-green-100 text-green-800'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status.toUpperCase()}</span>;
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles: Record<string, string> = {
    'medium': 'bg-orange-100 text-orange-700',
    'high': 'bg-red-100 text-red-700',
    'urgent': 'bg-red-600 text-white'
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[priority]}`}>{priority.toUpperCase()}</span>;
};

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
          <p className="text-gray-600">Manage your assigned claims and inspections</p>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Pending</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Priority</option>
            <option>Urgent</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Assigned</p>
          <p className="text-2xl font-bold text-blue-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <p className="text-sm text-gray-600">In Progress</p>
          <p className="text-2xl font-bold text-purple-600">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-green-600">1</p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-lg shadow">
        <div className="divide-y">
          {tasks.map(task => (
            <div key={task.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-gray-800">{task.title}</h4>
                    <StatusBadge status={task.status} />
                    <PriorityBadge priority={task.priority} />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {task.insured}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {task.address}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Due: {task.dueDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      KES {task.value.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200" title="Navigate">
                    <Navigation className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200" title="Call">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 text-sm font-semibold">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

