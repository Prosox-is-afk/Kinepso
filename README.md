# Kinepso – Projet vitrine avec base de données

Ce projet est une application web construite avec **Next.js 15**, **TypeScript**, **Tailwind CSS** et **Prisma**. Il s'agit d'un site vitrine dynamique permettant de présenter des projets, avec filtrage par catégorie, pages dédiées, formulaire de contact, et plus encore.

## Fonctionnalités

-   Filtrage des projets par catégorie (Sites, Apps, Logiciels)
-   Pages dynamiques pour chaque projet via `slug`
-   SEO dynamique (title + description)
-   Design responsive moderne
-   API interne pour récupérer les projets
-   Formulaire de contact (envoi d'email configurable)

## Technologies utilisées

-   [Next.js 15](https://nextjs.org/) (App Router, Server Components)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Prisma ORM](https://www.prisma.io/)
-   [Lucide React](https://lucide.dev/)

## Structure du projet

```
├── app/
│   ├── api/               # Routes API (ex: /api/projects)
│   ├── components/        # Composants React (client et server)
│   ├── contact/           # Page de contact
│   ├── projets/           # Page projets + slug dynamique
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── prisma/                # Fichier schema.prisma et client
├── public/                # Fichiers statiques (images, svg...)
├── styles/ (fusionné dans app/globals.css)
├── .env                   # Variables d'environnement (Prisma + config mail)
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── README.md
```

## Modèle de données (Prisma)

Voici le modèle utilisé dans `prisma/schema.prisma` :

```
model Projets {
  id_projets  Int      @id @default(autoincrement())
  title       String   @db.VarChar(50)
  description String
  image_path  String   @db.VarChar(255)
  slug        String   @unique
  created_at  DateTime @default(now())
  category_id Int
  category    CategoryProjet @relation(fields: [category_id], references: [id_categoriesprojets])
}

model CategoryProjet {
  id_categoriesprojets  Int      @id @default(autoincrement())
  nom_categoriesprojets String   @db.VarChar(50)
  projets               Projets[]
}

```

> Le champ category_id est une clé étrangère vers la table CategoryProjet. Les projets sont liés à une catégorie via une relation one-to-many

Pour initialiser la base :

`npx prisma migrate dev --name init`

## Installation

1. Clonez le repo :

```bash
git clone https://github.com/Prosox-is-afk/Kinepso.git

cd Kinepso
```

2. Installez les dépendances :

```bash
npm install
```

3. Configurez l'environnement :

Créez un fichier `.env` à la racine du projet :

```env
DATABASE_URL="mysql://utilisateur:motdepasse@localhost:3306/nom_de_la_base"
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=adresse@gmail.com
EMAIL_PASS=mot_de_passe_app
EMAIL_TO=adresse_de_destination
```

> Pour Gmail, créez un mot de passe d'application ici : https://myaccount.google.com/apppasswords
> Pour outlook : `EMAIL_HOST=smtp.office365.com`

4. Mettez en place la base de données :

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Lancez le projet en développement :

```bash
npm run dev
```

6. (Facultatif) Construisez le projet pour la production :

```bash
npm run build
npm start
```

## Notes pour l’équipe technique

-   Le formulaire de contact est entièrement fonctionnel avec nodemailer et une API POST côté serveur (/api/contact).
-   Les images des projets sont stockées dans le dossier /public/images/projets. Dans la base de données, on ne stocke que le chemin relatif (/images/projets/nom-image.jpg).
-   Les pages dynamiques comme `[slug]` utilisent `generateMetadata()` pour fournir les meta dynamiquement côté serveur.
-   Les SVG du logo sont en `fill` dur.
-   Le champ slug est une chaîne de texte unique utilisée pour créer des URLs lisibles et propres du type /projets/nom-du-projet. Il permet d'accéder dynamiquement à chaque projet via une page dédiée.
    Dans Next.js, les routes dynamiques comme [slug].tsx dépendent de cette valeur pour récupérer le bon contenu depuis la base.
    Plutôt que de générer le slug à la volée à chaque appel, on le stocke dans la base pour garantir : une cohérence de l’URL même si le titre du projet change, une recherche rapide par champ unique indexé (@unique), une compatibilité optimale avec les fonctions comme generateMetadata() ou le getStaticPaths() (si tu utilises le SSG plus tard).
    Cela respecte également les bonnes pratiques SEO en gardant des URLs stables, courtes et descriptives.

## Scripts disponibles

-   `npm run dev` – Lancement en mode développement
-   `npm run build` – Build de production (nécessite que tout compile correctement)
-   `npm start` – Lancement du serveur Node.js en production

## Déploiement

L'application peut être déployée sur :

-   Vercel (config automatique)
-   Serveur Node avec base de données MySQL (via Railway, PlanetScale, etc.)

## Auteur

Ce projet a été développé par un étudiant en BTS SIO passionné de développement web, dans le cadre d’un projet professionnel concret pour une agence.

Pour en savoir plus sur l’auteur, rendez-vous sur [https://pierreburnier.dev](https://pierreburnier.dev)
