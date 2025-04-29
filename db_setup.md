# 📦 Mise en place de la base de données Kinepso

Ce guide explique comment créer la base de données MySQL et connecter le projet.

---

## 1. Création de la base de données

-   Se connecter à **phpMyAdmin** ou tout autre outil MySQL.
-   Créer une base de données vide (par exemple : `kinepso_db`).

---

## 2. Création des tables

Exécuter ce script SQL dans votre base :

```sql
-- Table catégories
CREATE TABLE categories_projets (
  id_categoriesprojets INT AUTO_INCREMENT PRIMARY KEY,
  nom_categoriesprojets VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- Table projets
CREATE TABLE projets (
  id_projets INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image_path VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories_projets(id_categoriesprojets)
) ENGINE=InnoDB;
```

---

## 3. Remplir les tables

Insérer quelques catégories pour commencer :

```sql
INSERT INTO categoryprojet (nom_categoriesprojets) VALUES
('Sites internet'),
('Applications mobiles'),
('Logiciels sur mesure');

INSERT INTO projets (title, description, image_path, slug, category_id)
VALUES
('Refonte site vitrine', 'Refonte complète du site d’un artisan avec design moderne.', '/images/projets/site1.png', 'refonte-site-vitrine', 1),
('Landing page produit', 'Page d’atterrissage marketing avec formulaire et tracking.', '/images/projets/site2.png', 'landing-page-produit', 1),
('App mobile fitness', 'Application iOS/Android pour suivi d’entraînement.', '/images/projets/app1.png', 'app-mobile-fitness', 2),
('Application de messagerie', 'App React Native de messagerie avec notifications.', '/images/projets/app2.png', 'app-messagerie', 2),
('Dashboard RH', 'Interface admin pour gestion des congés et validation RH.', '/images/projets/logiciel1.png', 'dashboard-rh', 3),
('Outil de facturation', 'Logiciel sur mesure pour devis et factures en ligne.', '/images/projets/logiciel2.png', 'outil-facturation', 3);

```

Vous pouvez ensuite ajouter vos projets manuellement via phpMyAdmin.

---

## 4. Configuration de l'environnement

Dans le fichier `.env` du projet, ajouter la bonne URL de connexion :

```env
DATABASE_URL="mysql://UTILISATEUR:PASSWORD@localhost:3306/kinepso_db"
```

**Exemple :**

```env
DATABASE_URL="mysql://root:@localhost:3306/kinepso_db"
```

---

## 5. Synchronisation Prisma

Après modification de la base :

```bash
npx prisma generate
```

(pas besoin de refaire de migrations si la base a été manuellement configurée)

---

## 📢 Remarques importantes :

-   Le champ `slug` est **obligatoire** pour chaque projet, car Next.js génère les URL dynamiques dessus.
-   Les images des projets doivent être stockées dans `/public/images/` et le chemin relatif utilisé dans `image_path` (ex: `/images/nomimage.jpg`).

---

Vous êtes prêt à faire fonctionner le projet localement !
