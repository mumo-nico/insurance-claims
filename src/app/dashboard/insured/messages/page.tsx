'use client';

import { Send, Search } from 'lucide-react';
import { useState } from 'react';

const conversations = [
  { id: 1, name: 'John Ochieng', role: 'Adjuster', lastMessage: 'I will visit on December 7 at 10 AM', time: '10:30 AM', unread: 1 },
  { id: 2, name: 'Kenya Insurance Support', role: 'Support', lastMessage: 'Your claim has been acknowledged', time: 'Dec 1', unread: 0 },
];

const messages = [
  { id: 1, sender: 'John Ochieng', content: 'Good morning! I am John Ochieng, the adjuster assigned to your claim.', time: '9:00 AM', isMe: false },
  { id: 2, sender: 'Me', content: 'Good morning! Thank you for reaching out.', time: '9:15 AM', isMe: true },
  { id: 3, sender: 'John Ochieng', content: 'I would like to schedule an inspection of your property. Would December 7 at 10 AM work for you?', time: '9:20 AM', isMe: false },
  { id: 4, sender: 'Me', content: 'Yes, that works perfectly. I will be home.', time: '9:25 AM', isMe: true },
  { id: 5, sender: 'John Ochieng', content: 'Great! Please ensure access to all damaged areas. I will visit on December 7 at 10 AM.', time: '10:30 AM', isMe: false },
];

export default function InsuredMessagesPage() {
  const [selectedConvo, setSelectedConvo] = useState(conversations[0]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
        <p className="text-gray-600">Communicate with your adjuster and support team</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden" style={{ height: 'calc(100vh - 220px)' }}>
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r">
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search..." className="flex-1 bg-transparent border-none outline-none text-sm" />
              </div>
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 72px)' }}>
              {conversations.map(convo => (
                <div 
                  key={convo.id}
                  onClick={() => setSelectedConvo(convo)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedConvo.id === convo.id ? 'bg-sky-50 border-l-4 border-l-sky-500' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold">
                      {convo.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-800 truncate">{convo.name}</p>
                          <p className="text-xs text-gray-500">{convo.role}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-gray-500">{convo.time}</span>
                          {convo.unread > 0 && (
                            <span className="mt-1 w-5 h-5 bg-sky-500 text-white text-xs rounded-full flex items-center justify-center">
                              {convo.unread}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate mt-1">{convo.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold">
                {selectedConvo.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{selectedConvo.name}</p>
                <p className="text-xs text-gray-500">{selectedConvo.role} • Online</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isMe ? 'bg-sky-600 text-white' : 'bg-white border'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isMe ? 'text-sky-200' : 'text-gray-500'}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 border rounded-lg px-4 py-2 outline-none focus:border-sky-500"
                />
                <button className="btn-primary flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

