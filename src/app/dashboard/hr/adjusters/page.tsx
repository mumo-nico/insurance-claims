'use client';

import { Users, UserPlus, Search, Filter, MapPin, Phone, Mail, Star, MoreVertical } from 'lucide-react';

const adjusters = [
  { id: 1, name: 'Mike Johnson', email: 'mike.johnson@claims.ke', phone: '+254 712 345 678', territory: 'Nairobi Central', status: 'active', rating: 4.8, claims: 42, expertise: ['Fire', 'Water Damage'] },
  { id: 2, name: 'Sarah Wanjiku', email: 'sarah.wanjiku@claims.ke', phone: '+254 723 456 789', territory: 'Westlands', status: 'active', rating: 4.9, claims: 38, expertise: ['Burglary', 'Motor'] },
  { id: 3, name: 'Peter Ochieng', email: 'peter.ochieng@claims.ke', phone: '+254 734 567 890', territory: 'Mombasa', status: 'on_leave', rating: 4.6, claims: 35, expertise: ['Marine', 'Commercial'] },
  { id: 4, name: 'Grace Muthoni', email: 'grace.muthoni@claims.ke', phone: '+254 745 678 901', territory: 'Kisumu', status: 'active', rating: 4.7, claims: 29, expertise: ['Agricultural', 'Fire'] },
  { id: 5, name: 'James Kamau', email: 'james.kamau@claims.ke', phone: '+254 756 789 012', territory: 'Nakuru', status: 'active', rating: 4.5, claims: 31, expertise: ['Motor', 'Personal Injury'] },
  { id: 6, name: 'Lucy Achieng', email: 'lucy.achieng@claims.ke', phone: '+254 767 890 123', territory: 'Eldoret', status: 'sick', rating: 4.4, claims: 27, expertise: ['Fire', 'Flood'] },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800';
    case 'on_leave': return 'bg-yellow-100 text-yellow-800';
    case 'sick': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function AdjusterManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Adjuster Management</h1>
          <p className="text-gray-500">Manage your team of loss adjusters</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add New Adjuster
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search adjusters..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2">
            <option>All Territories</option>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Sick</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-3xl font-bold text-gray-900">24</p>
          <p className="text-sm text-gray-500">Total Adjusters</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-3xl font-bold text-green-600">18</p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-3xl font-bold text-yellow-600">4</p>
          <p className="text-sm text-gray-500">On Leave</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-3xl font-bold text-red-600">2</p>
          <p className="text-sm text-gray-500">Sick</p>
        </div>
      </div>

      {/* Adjusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adjusters.map((adjuster) => (
          <div key={adjuster.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-purple-600">
                    {adjuster.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{adjuster.name}</h3>
                  <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${getStatusBadge(adjuster.status)}`}>
                    {adjuster.status.replace('_', ' ').charAt(0).toUpperCase() + adjuster.status.replace('_', ' ').slice(1)}
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" /> {adjuster.territory}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" /> {adjuster.email}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" /> {adjuster.phone}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{adjuster.rating}</span>
              </div>
              <div className="text-sm text-gray-500">{adjuster.claims} claims completed</div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {adjuster.expertise.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">
                View Profile
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

