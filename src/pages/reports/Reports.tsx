import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Download, TrendingUp, Users, CreditCard, School } from 'lucide-react';

export const Reports: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Rapports Annuels</h1>
            <p className="mt-1 text-gray-500">Vue d'ensemble des performances de l'établissement</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="2024">2023-2024</option>
              <option value="2023">2022-2023</option>
            </select>

            <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Download className="h-5 w-5 mr-2" />
              Télécharger le rapport
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Élèves</h3>
                <p className="text-2xl font-bold text-gray-900">324</p>
                <p className="text-sm text-green-600">+12% vs 2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Revenus</h3>
                <p className="text-2xl font-bold text-gray-900">32.5M FCFA</p>
                <p className="text-sm text-green-600">+8% vs 2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <School className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Taux de réussite</h3>
                <p className="text-2xl font-bold text-gray-900">92%</p>
                <p className="text-sm text-green-600">+5% vs 2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Croissance</h3>
                <p className="text-2xl font-bold text-gray-900">15%</p>
                <p className="text-sm text-green-600">+3% vs 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Répartition par classe</h3>
            <div className="space-y-4">
              {[
                { classe: '6ème A', total: 45, filles: 24, garcons: 21 },{[
                { classe: '6ème A', total: 45, filles: 24, garcons: 21 },
                { classe: '5ème A', total: 42, filles: 22, garcons: 20 },
                { classe: '4ème A', total: 38, filles: 20, garcons: 18 },
                { classe: '3ème A', total: 35, filles: 18, garcons: 17 }
              ].map((classe) => (
                <div key={classe.classe} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{classe.classe}</p>
                    <p className="text-sm text-gray-500">
                      {classe.filles} filles, {classe.garcons} garçons
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600"
                        style={{ width: `${(classe.total / 45) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {classe.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Paiements mensuels</h3>
            <div className="space-y-4">
              {[
                { mois: 'Janvier', montant: 4500000, status: 'Complet' },
                { mois: 'Février', montant: 4200000, status: 'Complet' },
                { mois: 'Mars', montant: 3800000, status: 'En cours' }
              ].map((paiement) => (
                <div key={paiement.mois} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{paiement.mois}</p>
                    <p className="text-sm text-gray-500">{paiement.status}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {paiement.montant.toLocaleString()} FCFA
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Performance académique</h3>
            <div className="space-y-6">
              {[
                { matiere: 'Mathématiques', moyenne: 14.5, progression: '+0.8' },
                { matiere: 'Français', moyenne: 13.8, progression: '+0.5' },
                { matiere: 'Sciences', moyenne: 15.2, progression: '+1.2' },
                { matiere: 'Histoire-Géo', moyenne: 14.0, progression: '+0.3' }
              ].map((matiere) => (
                <div key={matiere.matiere}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{matiere.matiere}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {matiere.moyenne}/20
                      </span>
                      <span className="text-sm text-green-600">
                        {matiere.progression}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600"
                      style={{ width: `${(matiere.moyenne / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};