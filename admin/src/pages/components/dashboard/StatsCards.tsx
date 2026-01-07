// src/components/dashboard/StatsCards.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  School,
  Users,
  UserCheck,
  Target,
  MapPin,
  Calendar,
  TrendingUp,
  FileText
} from "lucide-react";

interface StatsCardsProps {
  role: string;
  onCardClick?: (label: string) => void;
}

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  suffix?: string;
}

const StatsCards = ({ role, onCardClick }: StatsCardsProps) => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const getStatsForRole = (): StatCard[] => {
    switch (role) {
      case "admin":
        return [
          { label: "Total Schools", value: 12, icon: <School className="w-6 h-6" />, color: "bg-blue-500" },
          { label: "Total Students", value: 5237, icon: <Users className="w-6 h-6" />, color: "bg-green-500" },
          { label: "Total Coordinators", value: 15, icon: <UserCheck className="w-6 h-6" />, color: "bg-purple-500" },
          { label: "Ongoing Projects", value: 20, icon: <Target className="w-6 h-6" />, color: "bg-orange-500" }
        ];
      case "coordinator":
        return [
          { label: "Schools Assigned", value: 8, icon: <School className="w-6 h-6" />, color: "bg-blue-500" },
          { label: "Assigned Surveys", value: 12, icon: <FileText className="w-6 h-6" />, color: "bg-green-500" },
          { label: "Students in Region", value: 2450, icon: <Users className="w-6 h-6" />, color: "bg-purple-500" },
          { label: "Pending Reviews", value: 5, icon: <Target className="w-6 h-6" />, color: "bg-red-500" }
        ];
      case "facilitator":
        return [
          { label: "Clubs Assigned", value: 6, icon: <MapPin className="w-6 h-6" />, color: "bg-blue-500" },
          { label: "Sessions Completed", value: 48, icon: <Calendar className="w-6 h-6" />, color: "bg-green-500" },
          { label: "Students Engaged", value: 320, icon: <Users className="w-6 h-6" />, color: "bg-purple-500" },
          { label: "Upcoming Events", value: 3, icon: <TrendingUp className="w-6 h-6" />, color: "bg-orange-500" }
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  useEffect(() => {
    stats.forEach(stat => {
      const duration = 1500;
      const steps = 45;
      const stepValue = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(stepValue * currentStep), stat.value);

        setAnimatedValues(prev => ({
          ...prev,
          [stat.label]: currentValue
        }));

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [role]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            onClick={() => onCardClick?.(stat.label)}
            className="cursor-pointer bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-800">
                  {animatedValues[stat.label]?.toLocaleString() || '0'}
                  {stat.suffix}
                </p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-xl`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-slate-200 rounded-full h-2">
                <motion.div className={`h-2 rounded-full ${stat.color}`} initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, delay: index * 0.15 }} />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StatsCards;
