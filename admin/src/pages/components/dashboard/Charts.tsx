import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface ChartsProps {
  role: string;
}

const Charts = ({ role }: ChartsProps) => {
  // Sample data - in real app, this would come from API
  const studentsPerSchoolData = [
    { name: 'School A', students: 400 },
    { name: 'School B', students: 300 },
    { name: 'School C', students: 500 },
    { name: 'School D', students: 200 },
    { name: 'School E', students: 600 },
  ];

  const projectCategoryData = [
    { name: 'Environmental', value: 35 },
    { name: 'Educational', value: 25 },
    { name: 'Community', value: 20 },
    { name: 'Health', value: 20 },
  ];

  const monthlyActivitiesData = [
    { month: 'Jan', activities: 12 },
    { month: 'Feb', activities: 19 },
    { month: 'Mar', activities: 14 },
    { month: 'Apr', activities: 23 },
    { month: 'May', activities: 18 },
    { month: 'Jun', activities: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const getChartTitle = () => {
    switch (role) {
      case 'admin':
        return 'Overview Analytics';
      case 'coordinator':
        return 'Regional Analytics';
      case 'facilitator':
        return 'Club Performance';
      default:
        return 'Analytics';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">{getChartTitle()}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Students per School */}
        <div className="h-80">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">Students per School</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={studentsPerSchoolData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Project Categories */}
        <div className="h-80">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">Project Category Distribution</h3>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={projectCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Monthly Activities */}
        <div className="lg:col-span-2 h-80">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">Monthly Activities Trend</h3>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={monthlyActivitiesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="activities" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;