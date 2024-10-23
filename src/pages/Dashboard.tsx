import React from 'react';
import { Layout } from '../components/layout/Layout';
import { BookOpen, Users, Calendar, Bell, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="mt-1 text-gray-500">Bienvenue dans votre espace administrateur</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
              Exporter
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-sm hover:from-indigo-700 hover:to-purple-700 transition">
              Nouveau rapport
            </button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Élèves"
            value="324"
            trend="+2.5%"
            icon={<Users className="h-6 w-6" />}
            color="from-blue-500 to-blue-600"
          />
          <DashboardCard
            title="Cours Actifs"
            value="42"
            trend="+1.2%"
            icon={<BookOpen className="h-6 w-6" />}
            color="from-emerald-500 to-emerald-600"
          />
          <DashboardCard
            title="Événements"
            value="12"
            trend="+4.3%"
            icon={<Calendar className="h-6 w-6" />}
            color="from-purple-500 to-purple-600"
          />
          <DashboardCard
            title="Notifications"
            value="8"
            trend="Nouveau"
            icon={<Bell className="h-6 w-6" />}
            color="from-amber-500 to-amber-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Activité récente</h3>
              <button className="text-gray-400 hover:text-gray-500">
                <Clock className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Nouvelle inscription</p>
                    <p className="text-sm text-gray-500">Il y a 2 heures</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Statistiques</h3>
              <button className="text-gray-400 hover:text-gray-500">
                <TrendingUp className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[200px] flex items-center justify-center text-gray-400">
              Graphique des statistiques
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, trend, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 bg-gradient-to-r ${color} rounded-lg p-3`}>
          <div className="text-white">{icon}</div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <span className="text-xs font-medium text-emerald-500">{trend}</span>
          </div>
        </div>
      </div>
    </div>
  );
};