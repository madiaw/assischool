import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { ArrowLeft, Download, Edit } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export const StudentCard: React.FC = () => {
  const { id } = useParams();

  // Demo data
  const student = {
    id,
    matricule: 'MAT001',
    nom: 'Dubois',
    prenom: 'Jean',
    dateNaissance: '2012-05-15',
    lieuNaissance: 'Paris',
    classe: '6ème A',
    photo: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    parent: {
      nom: 'Dubois',
      prenom: 'Pierre',
      relation: 'Père',
      telephone: '0123456789',
      email: 'pierre.dubois@email.com',
      profession: 'Ingénieur'
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/students/list"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Carte d'Élève</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-5 w-5 mr-2 text-gray-400" />
              Imprimer
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Edit className="h-5 w-5 mr-2" />
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={student.photo}
                    alt={`${student.prenom} ${student.nom}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Informations de l'élève
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Matricule</p>
                      <p className="text-sm font-medium text-gray-900">{student.matricule}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Classe</p>
                      <p className="text-sm font-medium text-gray-900">{student.classe}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nom</p>
                      <p className="text-sm font-medium text-gray-900">{student.nom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prénom</p>
                      <p className="text-sm font-medium text-gray-900">{student.prenom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date de naissance</p>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(student.dateNaissance).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Lieu de naissance</p>
                      <p className="text-sm font-medium text-gray-900">{student.lieuNaissance}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Informations du parent
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Nom</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.nom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prénom</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.prenom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Relation</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.relation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.telephone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Profession</p>
                      <p className="text-sm font-medium text-gray-900">{student.parent.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};