# Ton site portfolio — guide rapide

Ce site est en HTML/CSS/JS pur : pas de logiciel à installer, pas d'abonnement, et il peut être hébergé **100% gratuitement**.

## 1. Ajouter tes photos

Le site cherche des photos avec des noms précis (majuscules/minuscules incluses) dans le dossier `images/`. Tant qu'une photo n'existe pas, un cadre "Photo manquante" s'affiche à sa place avec le nom de fichier attendu — donc tu ne peux pas te tromper.

⚠️ **Attention à la casse** : une fois le site en ligne, `.jpg` et `.JPG` sont deux noms différents. Respecte exactement les majuscules/minuscules ci-dessous.

```
images/
├── hero/
│   └── red-dune-namibia.JPG        ← photo d'ouverture (grand format, paysage)
├── namibia/
│   ├── 01-wildebeest.JPG
│   ├── 02-zebra.JPG
│   ├── 03-three-red-dunes.JPG
│   ├── 04-three-giraffes.JPG
│   ├── 05-lone-giraffe.JPG
│   ├── 06-elephant.JPG
│   ├── 07-oryx.jpg
│   ├── 08-kudu.JPG
│   ├── 09-antelope.JPG
│   ├── 10-antelopes-resting.JPG
│   ├── 11-farm-sunset.JPG
│   ├── 12-dunes-deadvlei.JPG
│   ├── 13-golden-light-dunes.JPG
│   ├── 14-light-shadow-deadvlei.JPG
│   ├── 15-red-dune.JPG
│   ├── 16-moon.JPG
│   ├── 17-sand-corridor.JPG
│   └── 18-sand-houses.JPG
├── costa-rica/
│   ├── 01-monkey-caribbean.jpg
│   ├── 02-crab-night.jpg
│   ├── 03-fisherman-ali.jpg
│   ├── 04-young-heron.jpg
│   ├── 05-cormorant-drying.jpg
│   ├── 06-cormorant-bee.jpg
│   ├── 07-secret-beach.jpg
│   └── 08-green-frog.jpg
├── norway/
│   ├── 01-red-house-fjord.JPG
│   ├── 02-aigle-rock.JPG
│   ├── 03-redshank-treetop.JPG
│   └── 04-sheep-sea.JPG
└── about/
    └── portrait.jpeg                 ← ta photo pour la section "À propos"
```

Conseils :
- Exporte tes photos plutôt entre 1500 et 2500 px de large (au-delà, le site sera juste plus lourd à charger, sans bénéfice visuel).
- Les photos de la galerie sont recadrées automatiquement en format portrait (4:5) — vérifie que le sujet principal reste bien cadré.

## 2. Vérifier les 4 nouvelles légendes

J'ai ajouté ces photos sans description de ta part, donc j'ai deviné un titre/texte simple à partir du nom de fichier. Vérifie qu'ils correspondent bien à tes photos, et corrige-les dans `index.html` si besoin (cherche le titre en gras ci-dessous) :

| Fichier | Titre généré |
|---|---|
| `namibia/03-three-red-dunes.JPG` | Three Red Dunes |
| `namibia/16-moon.JPG` | Desert Moon |
| `namibia/17-sand-corridor.JPG` | Sand Corridor |
| `namibia/18-sand-houses.JPG` | Houses in the Sand |
| `costa-rica/08-green-frog.jpg` | Green Frog |
| `norway/02-aigle-rock.JPG` | Eagle on a Rock |

Dis-moi simplement ce que montrent vraiment ces photos et je réécris les légendes.

## 3. Personnaliser tes infos

Ouvre `index.html` avec un éditeur de texte simple (Bloc-notes, TextEdit, ou [VS Code](https://code.visualstudio.com/) qui est gratuit) et modifie :

- Ton email est déjà réglé sur `adrien.thomassin@gmail.com`
- Les liens `href="#"` d'Instagram / 500px → tes vrais liens
- Le texte de la section "À propos" si tu veux le modifier

## 4. Ajouter ou enlever des photos

Chaque photo est un bloc `<figure class="photo" ...>` dans `index.html`. Pour en ajouter une, copie un bloc existant (avec son `<img>` et sa `<figcaption>`), colle-le, et change le chemin de l'image + les textes. Pour en enlever une, supprime le bloc entier.

## 5. Mettre le site en ligne gratuitement

### Option recommandée : GitHub Pages (gratuit, sans limite, ton propre lien web)

1. Crée un compte gratuit sur [github.com](https://github.com).
2. Crée un nouveau dépôt (bouton **New repository**), nomme-le par exemple `mon-portfolio-photo`, coche "Public".
3. Sur la page du dépôt, clique **Add file → Upload files**, puis glisse-dépose tout le contenu de ce dossier (`index.html`, `style.css`, `script.js`, `images/`).
4. Une fois envoyé, va dans **Settings → Pages**.
5. Sous "Branch", choisis `main` et clique **Save**.
6. Après 1–2 minutes, ton site est en ligne à une adresse du type :
   `https://tonpseudo.github.io/mon-portfolio-photo/`

Tu pourras plus tard relier un nom de domaine personnalisé (ex : `tonnom.com`) gratuitement depuis ce même écran si tu en achètes un.

### Alternative encore plus rapide : Netlify Drop

1. Va sur [app.netlify.com/drop](https://app.netlify.com/drop) (pas besoin de compte pour tester).
2. Glisse-dépose le dossier entier du site sur la page.
3. Ton site est en ligne immédiatement avec un lien `https://....netlify.app`.
4. Pour le garder en ligne durablement et pouvoir le mettre à jour, crée un compte gratuit Netlify.

## 6. Mettre à jour le site plus tard

- **GitHub Pages** : modifie tes fichiers localement, puis réupload-les dans **Add file → Upload files** (ça remplace les anciens).
- **Netlify** : refais un glisser-déposer du dossier mis à jour sur ton espace Netlify.

---

Structure du site : une page unique, organisée en "expéditions" par pays (Namibie, Costa Rica, Norvège), avec une galerie cliquable (plein écran) pour chaque photo.
