'use client';

import { TrendingUp, Star, Clock, Award, Users, Target, BarChart3 } from 'lucide-react';

const topPerformers = [
  { name: 'Mike Johnson', claims: 42, rating: 4.8, completionTime: 2.3, onTimeRate: 95, score: 92 },
  { name: 'Sarah Wanjiku', claims: 38, rating: 4.9, completionTime: 2.1, onTimeRate: 98, score: 94 },
  { name: 'Grace Muthoni', claims: 35, rating: 4.7, completionTime: 2.5, onTimeRate: 92, score: 89 },
  { name: 'James Kamau', claims: 31, rating: 4.5, completionTime: 2.8, onTimeRate: 88, score: 85 },
  { name: 'Peter Ochieng', claims: 29, rating: 4.6, completionTime: 2.6, onTimeRate: 90, score: 87 },
];

const teamMetrics = {
  totalClaims: 186,
  completed: 142,
  inProgress: 36,
  pending: 8,
  avgRating: 4.6,
  avgDays: 3.1,
  satisfaction: 89,
};

const monthlyTrend = [
  { month: 'Jul', claims: 145 },
  { month: 'Aug', claims: 162 },
  { month: 'Sep', claims: 158 },
  { month: 'Oct', claims: 175 },
  { month: 'Nov', claims: 186 },
  { month: 'Dec', claims: 142 },
];

export default function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-500">Track adjuster and team performance metrics</p>
        </div>
        <select className="border rounded-lg px-4 py-2">
          <option>December 2024</option>
          <option>November 2024</option>
          <option>October 2024</option>
        </select>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-500">Total Claims</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{teamMetrics.totalClaims}</p>
          <div className="mt-2 text-xs text-gray-500">
            <span className="text-green-600">✓ {teamMetrics.completed} completed</span> •
            <span className="text-yellow-600"> {teamMetrics.inProgress} in progress</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-500">Avg Rating</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{teamMetrics.avgRating}/5.0</p>
          <div className="flex mt-2">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-500">Avg Completion</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{teamMetrics.avgDays} days</p>
          <p className="mt-2 text-xs text-green-600">↓ 0.3 days from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">Satisfaction</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{teamMetrics.satisfaction}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${teamMetrics.satisfaction}%` }}></div>
          </div>
        </div>
      </div>

      {/* Claims Trend Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Claims Trend</h2>
        <div className="flex items-end gap-4 h-48">
          {monthlyTrend.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-purple-500 rounded-t-lg" style={{ height: `${(item.claims / 200) * 100}%` }}></div>
              <p className="text-xs text-gray-500 mt-2">{item.month}</p>
              <p className="text-xs font-medium text-gray-700">{item.claims}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Top Performers</h2>
          <Award className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3 font-medium">Rank</th>
                <th className="pb-3 font-medium">Adjuster</th>
                <th className="pb-3 font-medium">Claims</th>
                <th className="pb-3 font-medium">Rating</th>
                <th className="pb-3 font-medium">Avg Time</th>
                <th className="pb-3 font-medium">On-Time %</th>
                <th className="pb-3 font-medium">Score</th>
              </tr>
            </thead>
            <tbody>
              {topPerformers.map((performer, index) => (
                <tr key={performer.name} className="border-b last:border-0">
                  <td className="py-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-200 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 font-medium text-gray-900">{performer.name}</td>
                  <td className="py-4 text-gray-600">{performer.claims}</td>
                  <td className="py-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {performer.rating}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{performer.completionTime} days</td>
                  <td className="py-4 text-gray-600">{performer.onTimeRate}%</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      performer.score >= 90 ? 'bg-green-100 text-green-800' :
                      performer.score >= 80 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {performer.score}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

