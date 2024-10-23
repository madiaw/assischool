import Database from '@better-sqlite3/better-sqlite3';

const db = new Database('school.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    role TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    niveau TEXT NOT NULL,
    annee_scolaire TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS eleves (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    matricule TEXT UNIQUE NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    date_naissance DATE NOT NULL,
    lieu_naissance TEXT NOT NULL,
    sexe TEXT NOT NULL,
    adresse TEXT NOT NULL,
    photo_url TEXT,
    classe_id INTEGER,
    FOREIGN KEY (classe_id) REFERENCES classes(id)
  );

  CREATE TABLE IF NOT EXISTS parents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eleve_id INTEGER NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    relation TEXT NOT NULL,
    telephone TEXT NOT NULL,
    email TEXT,
    profession TEXT,
    FOREIGN KEY (eleve_id) REFERENCES eleves(id)
  );

  CREATE TABLE IF NOT EXISTS paiements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eleve_id INTEGER NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    type TEXT NOT NULL,
    date_paiement DATE NOT NULL,
    mois TEXT,
    annee_scolaire TEXT NOT NULL,
    status TEXT NOT NULL,
    FOREIGN KEY (eleve_id) REFERENCES eleves(id)
  );

  -- Insert default admin if not exists
  INSERT OR IGNORE INTO users (email, password, nom, prenom, role)
  VALUES (
    'admin@school.com',
    'admin123',
    'Admin',
    'System',
    'admin'
  );

  -- Insert default classes
  INSERT OR IGNORE INTO classes (nom, niveau, annee_scolaire)
  VALUES 
    ('6ème A', 'Collège', '2023-2024'),
    ('5ème A', 'Collège', '2023-2024'),
    ('4ème A', 'Collège', '2023-2024'),
    ('3ème A', 'Collège', '2023-2024');
`);

export default db;