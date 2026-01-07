import { motion } from 'framer-motion';
import { Megaphone, AlertCircle, Info } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: '1',
      title: 'System Maintenance',
      message: 'Scheduled maintenance this Saturday from 2-4 AM',
      type: 'info',
      icon: <Info className="w-4 h-4" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: '2',
      title: 'New Features',
      message: 'Check out the new reporting dashboard features',
      type: 'announcement',
      icon: <Megaphone className="w-4 h-4" />,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: '3',
      title: 'Training Session',
      message: 'Monthly training session next Wednesday at 10 AM',
      type: 'alert',
      icon: <AlertCircle className="w-4 h-4" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Announcements</h2>
      
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${announcement.bgColor} border-slate-200`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${announcement.color} bg-white`}>
                {announcement.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  {announcement.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {announcement.message}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Showing 3 of 12 announcements</span>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcements;