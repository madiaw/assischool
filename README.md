# Application de Gestion Scolaire

Une application web complète pour la gestion des établissements scolaires, développée avec React et Node.js.

## 🌟 Fonctionnalités

- **Gestion des Utilisateurs**
  - Authentification multi-rôles (Admin, Professeur, Élève, Parent)
  - Tableau de bord personnalisé selon le rôle

- **Gestion des Élèves**
  - Inscription et admission
  - Suivi des dossiers scolaires
  - Gestion des informations personnelles

- **Gestion de la Scolarité**
  - Suivi des présences
  - Système de notation
  - Génération des bulletins
  - Planning des cours

- **Communication**
  - Messagerie interne
  - Notifications
  - Annonces importantes

## 🚀 Installation Locale

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn
- Base de données MySQL/PostgreSQL

### Étapes d'installation

1. Cloner le dépôt
```bash
git clone [url-du-repo]
cd gestion-scolaire
```

2. Installer les dépendances
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Configurer les variables d'environnement
```bash
# Frontend
cp .env.example .env.local
# Modifier les variables selon votre configuration

# Backend
cp .env.example .env
# Modifier les variables selon votre configuration
```

4. Initialiser la base de données
```bash
npm run db:migrate
npm run db:seed
```

5. Lancer l'application
```bash
# Frontend
npm run dev

# Backend
npm run start
```

L'application sera accessible à l'adresse: `http://localhost:5173`

## 🌐 Déploiement en Production

### Hébergement Frontend (Netlify)

1. Créer un compte sur Netlify
2. Connecter votre dépôt Git
3. Configurer les variables d'environnement dans les paramètres du projet
4. Déployer avec les commandes:
```bash
cd frontend
npm run build
```

### Hébergement Backend (Railway/Heroku)

1. Créer un compte sur la plateforme choisie
2. Connecter votre dépôt Git
3. Configurer les variables d'environnement
4. Déployer avec:
```bash
cd backend
npm run build
```

### Base de données

- Utiliser un service de base de données managé (ex: Railway MySQL, AWS RDS)
- Configurer les variables d'environnement avec les nouvelles informations de connexion

## 📚 Documentation API

La documentation de l'API est disponible à l'adresse: `/api/docs`

## 🔐 Sécurité

- Toutes les requêtes API sont sécurisées avec JWT
- Les mots de passe sont hashés avec bcrypt
- Protection CSRF activée
- Headers de sécurité configurés

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Support

Pour toute question ou support:
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement à [email]

---
Développé avec ❤️ pour la communauté éducative