// src/components/dashboard/QuickActions.tsx
import { motion } from "framer-motion";
import {
  Plus,
  Users,
  FileText,
  Calendar,
  Upload,
  UserCheck,
  School,
  Target,
  MessageSquare
} from "lucide-react";

interface QuickActionsProps {
  role: string;
  onAction?: (actionKey: string) => void;
}

interface ActionItem {
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  actionKey: string;
}

const QuickActions = ({ role, onAction }: QuickActionsProps) => {
  const getActionsForRole = (): ActionItem[] => {
    switch (role) {
      case "admin":
        return [
          { label: "Add School", icon: <School className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-50 hover:bg-blue-100", actionKey: "addSchool" },
          { label: "Create Learning Theme", icon: <Target className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-50 hover:bg-green-100", actionKey: "createTheme" },
          { label: "Manage Users", icon: <UserCheck className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-50 hover:bg-purple-100", actionKey: "manageUsers" },
          { label: "Generate Reports", icon: <FileText className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-50 hover:bg-orange-100", actionKey: "generateReports" },
          { label: "Open Chat", icon: <MessageSquare className="w-6 h-6" />, color: "text-teal-600", bgColor: "bg-teal-50 hover:bg-teal-100", actionKey: "chat" }
        ];
      case "coordinator":
        return [
          { label: "Submit Region Report", icon: <FileText className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-50 hover:bg-blue-100", actionKey: "submitRegionReport" },
          { label: "Assign Facilitator", icon: <Users className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-50 hover:bg-green-100", actionKey: "assignFacilitator" },
          { label: "Create Survey Template", icon: <Plus className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-50 hover:bg-purple-100", actionKey: "createTemplate" },
          { label: "Schedule Event", icon: <Calendar className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-50 hover:bg-orange-100", actionKey: "createActivity" },
          { label: "Open Chat", icon: <MessageSquare className="w-6 h-6" />, color: "text-teal-600", bgColor: "bg-teal-50 hover:bg-teal-100", actionKey: "chat" }
        ];
      case "facilitator":
        return [
          { label: "Log Session", icon: <FileText className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-50 hover:bg-blue-100", actionKey: "logSession" },
          { label: "Mark Attendance", icon: <UserCheck className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-50 hover:bg-green-100", actionKey: "markAttendance" },
          { label: "Upload Photos", icon: <Upload className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-50 hover:bg-purple-100", actionKey: "uploadPhotos" },
          { label: "Plan Activity", icon: <Calendar className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-50 hover:bg-orange-100", actionKey: "planActivity" },
          { label: "Open Chat", icon: <MessageSquare className="w-6 h-6" />, color: "text-teal-600", bgColor: "bg-teal-50 hover:bg-teal-100", actionKey: "chat" }
        ];
      default:
        return [];
    }
  };

  const actions = getActionsForRole();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>

      <div className="grid grid-cols-1 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAction?.(action.actionKey)}
            className={`p-4 rounded-xl border border-slate-200 transition-all duration-200 flex items-center space-x-4 ${action.bgColor}`}
          >
            <div className={`p-2 rounded-lg ${action.color}`}>
              {action.icon}
            </div>
            <span className="font-medium text-slate-800">{action.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Need Help?</h3>
        <p className="text-sm text-slate-600 mb-3">
          Check our documentation or contact support for assistance.
        </p>
        <button onClick={() => onAction?.("chat")} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Ask for help → 
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
