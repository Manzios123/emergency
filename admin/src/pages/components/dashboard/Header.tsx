import { LogOut, User } from 'lucide-react';
import type { User as UserType } from '../../../types/user';

interface HeaderProps {
  user: UserType;
}

const Header = ({ user }: HeaderProps) => {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'coordinator':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'facilitator':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Evergreen Dashboard</h1>
              <p className="text-sm text-slate-600">Roots & Shoots Rwanda</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-slate-600">Welcome back,</p>
              <p className="font-semibold text-slate-800">{user.name}</p>
            </div>
            
            {/* Role Badge */}
            <div className={`px-3 py-1 rounded-full border text-sm font-medium capitalize ${getRoleBadgeColor(user.role)}`}>
              {user.role}
            </div>

            {/* User Avatar */}
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border">
              <User className="w-5 h-5 text-slate-600" />
            </div>

            {/* Logout Button */}
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
              <LogOut className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;