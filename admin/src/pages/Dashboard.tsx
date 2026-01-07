// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./components/dashboard/Header";
import StatsCards from "./components/dashboard/StatsCards";
import Charts from "./components/dashboard/Charts";
import ActivityFeed from "./components/dashboard/ActivityFeed";
import QuickActions from "./components/dashboard/QuickActions";
import Announcements from "./components/dashboard/Announcements";
import Footer from "./components/dashboard/Footer";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not loaded and no user, optional redirect to login handled by route-level protection.
    // If you want dashboard to redirect non-authenticated users to login, handle at router level.
  }, [user, loading]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center">Not authenticated</div>;

  // Handlers passed to child components so they can navigate
  const handlers = {
    goToCreateTemplate: () => navigate("/coordinator/templates/create"),
    goToManageTemplates: () => navigate("/coordinator/templates"),
    goToAssignedSurveys: () => navigate("/surveys"),
    goToFillSurvey: (surveyId?: string) => navigate(surveyId ? `/surveys/${surveyId}` : "/surveys"),
    goToReviewSubmissions: () => navigate("/coordinator/review"),
    goToCreateActivity: () => navigate("/coordinator/activity/create"),
    goToLogSession: () => navigate("/facilitator/sessions/log"),
    goToUploadPhotos: () => navigate("/facilitator/media/upload"),
    goToReports: () => navigate("/admin/reports"),
    goToChat: () => navigate("/chat"),
    goToSchools: () => navigate("/admin/schools"),
    goToDonate: () => navigate("/donate"),
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/30">
      <Header user={user} />

      <main className="container mx-auto px-4 py-6">
        {/* Top row: Stats + Donate CTA */}
        <section className="mb-6 flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1">
            <StatsCards role={user.role} onCardClick={(key) => {
              // map stat key to route
              if (key === "Total Schools") handlers.goToSchools();
              if (key === "Assigned Surveys") handlers.goToAssignedSurveys();
              if (key === "Sessions Completed") handlers.goToLogSession();
              if (key === "Pending Reports") handlers.goToReviewSubmissions();
            }} />
          </div>

          <aside className="w-full lg:w-80">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold mb-3">Support Evergreen</h3>
              <p className="text-sm text-slate-600 mb-4">Show your support for the environmental psychology program — donations fund classes, resources, and facilitator training.</p>
              <button onClick={handlers.goToDonate} className="w-full bg-green-600 text-white py-2 rounded-lg">Donate Now</button>
              <button onClick={handlers.goToChat} className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700">Open Team Chat</button>
            </div>

            <div className="mt-6">
              <Announcements />
            </div>
          </aside>
        </section>

        {/* Charts & Quick Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Charts role={user.role} />
          </div>

          <div className="lg:col-span-1">
            <QuickActions role={user.role} onAction={(action) => {
              // centralize action dispatch
              switch (action) {
                case "createTemplate": return handlers.goToCreateTemplate();
                case "manageTemplates": return handlers.goToManageTemplates();
                case "assignFacilitator": return handlers.goToManageTemplates(); // example
                case "createActivity": return handlers.goToCreateActivity();
                case "submitRegionReport": return handlers.goToReports();
                case "logSession": return handlers.goToLogSession();
                case "uploadPhotos": return handlers.goToUploadPhotos();
                case "viewSurveys": return handlers.goToAssignedSurveys();
                case "chat": return handlers.goToChat();
                default: return;
              }
            }} />
          </div>
        </section>

        {/* Activity Feed + Details */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ActivityFeed role={user.role} onViewAll={() => {
              // route to role-specific activity list
              if (user.role === "admin") navigate("/admin/activity");
              if (user.role === "coordinator") navigate("/coordinator/activity");
              if (user.role === "facilitator") navigate("/facilitator/activity");
            }} onItemClick={(id) => {
              // show activity details
              navigate(`/activity/${id}`);
            }} />
          </div>
          <div className="lg:col-span-1">
            {/* You can place a small recent reports or quick links card here */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate("/surveys")} className="text-left w-full text-slate-700 hover:underline">Assigned Surveys</button></li>
                <li><button onClick={() => navigate("/coordinator/review")} className="text-left w-full text-slate-700 hover:underline">Review Submissions</button></li>
                <li><button onClick={() => navigate("/chat")} className="text-left w-full text-slate-700 hover:underline">Team Chat</button></li>
                <li><button onClick={() => navigate("/donate")} className="text-left w-full text-slate-700 hover:underline">Donate</button></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
