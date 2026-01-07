// src/components/dashboard/ActivityFeed.tsx
import { motion } from "framer-motion";
import {
  FileText,
  School,
  DollarSign,
  Target,
  Users,
  Activity,
  UserPlus,
  CheckCircle
} from "lucide-react";

interface ActivityFeedProps {
  role: string;
  onViewAll?: () => void;
  onItemClick?: (id: string) => void;
}

interface ActivityItem {
  id: string;
  type: string;
  message: string;
  timestamp: string;
  user: string;
  icon: React.ReactNode;
  color: string;
}

const ActivityFeed = ({ role, onViewAll, onItemClick }: ActivityFeedProps) => {
  const getActivitiesForRole = (): ActivityItem[] => {
    const baseActivities = {
      admin: [
        {
          id: "1",
          type: "report",
          message: "Coordinator submitted quarterly report",
          timestamp: "2 hours ago",
          user: "Alice Johnson",
          icon: <FileText className="w-4 h-4" />,
          color: "text-blue-500"
        },
        {
          id: "2",
          type: "school",
          message: "New school added to the program",
          timestamp: "4 hours ago",
          user: "System",
          icon: <School className="w-4 h-4" />,
          color: "text-green-500"
        },
        {
          id: "3",
          type: "donation",
          message: "Donation received from corporate partner",
          timestamp: "1 day ago",
          user: "Finance Team",
          icon: <DollarSign className="w-4 h-4" />,
          color: "text-yellow-500"
        },
        {
          id: "4",
          type: "milestone",
          message: "Project milestone completed ahead of schedule",
          timestamp: "2 days ago",
          user: "Project Team",
          icon: <Target className="w-4 h-4" />,
          color: "text-purple-500"
        }
      ],
      coordinator: [
        {
          id: "1",
          type: "session",
          message: "Facilitator submitted session data",
          timestamp: "1 hour ago",
          user: "Bob Wilson",
          icon: <FileText className="w-4 h-4" />,
          color: "text-blue-500"
        },
        {
          id: "2",
          type: "stats",
          message: "Student statistics updated for region",
          timestamp: "3 hours ago",
          user: "System",
          icon: <Users className="w-4 h-4" />,
          color: "text-green-500"
        },
        {
          id: "3",
          type: "activity",
          message: "New environmental activity logged",
          timestamp: "6 hours ago",
          user: "Sarah Miller",
          icon: <Activity className="w-4 h-4" />,
          color: "text-yellow-500"
        }
      ],
      facilitator: [
        {
          id: "1",
          type: "session",
          message: "Session submitted successfully",
          timestamp: "30 minutes ago",
          user: "You",
          icon: <CheckCircle className="w-4 h-4" />,
          color: "text-green-500"
        },
        {
          id: "2",
          type: "activity",
          message: "Club completed environmental activity",
          timestamp: "2 hours ago",
          user: "Green Club",
          icon: <Activity className="w-4 h-4" />,
          color: "text-blue-500"
        },
        {
          id: "3",
          type: "student",
          message: "New student joined the club",
          timestamp: "5 hours ago",
          user: "Registration",
          icon: <UserPlus className="w-4 h-4" />,
          color: "text-purple-500"
        }
      ]
    };

    return baseActivities[role as keyof typeof baseActivities] || baseActivities.facilitator;
  };

  const activities = getActivitiesForRole();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            onClick={() => onItemClick?.(activity.id)}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-100 cursor-pointer"
          >
            <div className={`p-2 rounded-lg ${activity.color} bg-opacity-10`}>
              {activity.icon}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800">{activity.message}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-slate-500">By {activity.user}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500">{activity.timestamp}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button onClick={() => onViewAll?.()} className="w-full mt-6 text-center py-3 text-sm font-medium text-blue-600 hover:text-blue-700 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors duration-200">
        View All Activity
      </button>
    </div>
  );
};

export default ActivityFeed;
