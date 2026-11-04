import React, { useState, useEffect } from 'react';
import { Users, Shield, Terminal, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { DiscordUser, getDiscordAvatarUrl } from '../utils/discordAuth';

interface DevUserPanelProps {
  currentUser: DiscordUser | null;
}

export const DevUserPanel: React.FC<DevUserPanelProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [authorizedUsers, setAuthorizedUsers] = useState<DiscordUser[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('coin4sell_all_authorized_users');
      let users: DiscordUser[] = stored ? JSON.parse(stored) : [];

      if (currentUser) {
        // Add or update current user in list
        const exists = users.some((u) => u.id === currentUser.id);
        if (!exists) {
          users = [currentUser, ...users];
        } else {
          users = users.map((u) => (u.id === currentUser.id ? currentUser : u));
        }
        localStorage.setItem('coin4sell_all_authorized_users', JSON.stringify(users));
      } else if (users.length === 0) {
        // Default mock authorized dev testers
        users = [
          {
            id: '123456789012345678',
            username: 'SONHEI',
            discriminator: '0001',
            global_name: 'SONHEI 👑',
            avatar: null,
          },
          {
            id: '987654321098765432',
            username: 'MarwanElnaggar',
            discriminator: '0007',
            global_name: 'Marwan',
            avatar: null,
          },
        ];
        localStorage.setItem('coin4sell_all_authorized_users', JSON.stringify(users));
      }

      setAuthorizedUsers(users);
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  return (
    <div className="fixed top-24 right-4 z-[9999] flex items-start">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer flex items-center gap-2 px-3.5 py-2 bg-slate-900/95 border border-sky-500/50 hover:border-sky-400 text-sky-400 rounded-xl shadow-2xl backdrop-blur-md transition-all font-bold text-xs"
          title="Open Dev Authorized Users Panel"
        >
          <Terminal className="w-4 h-4 text-sky-400 animate-pulse" />
          <span>Dev Users ({authorizedUsers.length})</span>
        </button>
      ) : (
        <div className="w-80 rounded-2xl bg-[#080d1a]/95 border border-sky-500/40 shadow-2xl backdrop-blur-xl p-4 text-slate-100 space-y-4 animate-in slide-in-from-right duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Authorized Users (Dev)
                </h4>
                <p className="text-[10px] text-slate-400">Google AI Studio debug panel</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {authorizedUsers.map((user) => {
              const isCurrent = currentUser?.id === user.id;
              return (
                <div
                  key={user.id}
                  className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 transition-all ${
                    isCurrent
                      ? 'bg-sky-950/40 border-sky-500/60 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'bg-[#0c1222] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={getDiscordAvatarUrl(user, 48)}
                      alt={user.username}
                      className="w-8 h-8 rounded-full object-cover border border-sky-400/50 shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://cdn.discordapp.com/embed/avatars/0.png';
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">
                        {user.global_name || user.username}
                        {isCurrent && (
                          <span className="ml-1.5 px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 text-[9px] rounded font-semibold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">@{user.username}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 shrink-0">
                    {user.id.slice(0, 6)}...
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 text-center">
            Tracks all Discord sessions authorized in this browser.
          </div>
        </div>
      )}
    </div>
  );
};
