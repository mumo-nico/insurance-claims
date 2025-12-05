'use client';

import { Star, TrendingUp, Clock, CheckCircle, Target, Award } from 'lucide-react';

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">My Performance</h2>
        <p className="text-gray-600">Track your metrics and achievements</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-6 h-6" fill="currentColor" />
            <span className="text-yellow-100 text-sm font-medium">Rating</span>
          </div>
          <p className="text-4xl font-bold">4.8</p>
          <p className="text-yellow-100 text-sm mt-1">out of 5.0</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-6 h-6" />
            <span className="text-green-100 text-sm font-medium">Completed</span>
          </div>
          <p className="text-4xl font-bold">45</p>
          <p className="text-green-100 text-sm mt-1">claims this month</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-6 h-6" />
            <span className="text-blue-100 text-sm font-medium">Avg. Time</span>
          </div>
          <p className="text-4xl font-bold">2.3</p>
          <p className="text-blue-100 text-sm mt-1">days per claim</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6" />
            <span className="text-purple-100 text-sm font-medium">Target</span>
          </div>
          <p className="text-4xl font-bold">92%</p>
          <p className="text-purple-100 text-sm mt-1">goal achieved</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Monthly Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Claims Completed</span>
                <span className="font-bold">45/50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Reports Submitted</span>
                <span className="font-bold">42/45</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">On-Time Completion</span>
                <span className="font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Customer Satisfaction</span>
                <span className="font-bold">4.8/5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Achievements</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Award className="w-10 h-10 text-yellow-500" />
              <div>
                <p className="font-bold text-gray-800">Top Performer</p>
                <p className="text-sm text-gray-600">Highest rating in December 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <div>
                <p className="font-bold text-gray-800">50 Claims Milestone</p>
                <p className="text-sm text-gray-600">Completed 50 claims in a month</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Clock className="w-10 h-10 text-blue-500" />
              <div>
                <p className="font-bold text-gray-800">Speed Champion</p>
                <p className="text-sm text-gray-600">Fastest average completion time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Trend */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Weekly Claims Trend</h3>
        <div className="flex items-end gap-4 h-48">
          {[8, 12, 10, 15, 11, 9, 14].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-sky-600 rounded-t" style={{ height: `${(value / 15) * 100}%` }}></div>
              <span className="text-xs text-gray-500 mt-2">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

