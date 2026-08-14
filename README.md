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
│   ├── 18-sand-houses.JPG
│   ├── 19-cat_sunset.JPG
│   └── 20-luderitz-lighthouse.JPG
├── costa-rica/
│   ├── 01-monkey-caribbean.jpg
│   ├── 02-crab-night.jpg
│   ├── 03-fisherman-ali.jpg
│   ├── 04-young-heron.jpg
│   ├── 05-cormorant-drying.jpg
│   ├── 06-cormorant-bee.jpg
│   ├── 07-secret-beach.jpg
│   ├── 08-green-frog.jpg
│   ├── 09-night-snake.JPG
│   ├── 10-frog-branch.jpg
│   ├── 11-river-cow.JPG
│   ├── 12-pink-spatula.jpg
│   ├── 13-bill-botted-heron.JPG
│   ├── 14-ara-manzanillo.jpg
│   ├── 15-yellow-viper.JPG
│   ├── 16-grey-viper.JPG
│   ├── 17-plumed-basilik.jpg
│   └── 18-night-butterfly.jpg
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

## 2. Vérifier les titres devinés

Les descriptions ont été retirées (à ta demande) : seul un titre s'affiche sous chaque photo. Pour les photos que tu n'avais pas décrites, j'ai deviné un titre simple à partir du nom de fichier — vérifie qu'ils correspondent bien, surtout ceux-ci qui étaient ambigus, et corrige-les dans `index.html` si besoin (cherche le titre en gras) :

| Fichier | Titre généré | Remarque |
|---|---|---|
| `namibia/03-three-red-dunes.JPG` | Three Red Dunes | |
| `namibia/16-moon.JPG` | Desert Moon | |
| `namibia/17-sand-corridor.JPG` | Sand Corridor | |
| `namibia/18-sand-houses.JPG` | Houses in the Sand | |
| `namibia/19-cat_sunset.JPG` | Cat at Sunset | |
| `namibia/20-luderitz-lighthouse.JPG` | Lighthouse at Lüderitz | |
| `costa-rica/08-green-frog.jpg` | Green Frog | |
| `costa-rica/09-night-snake.JPG` | Snake at Night | |
| `costa-rica/10-frog-branch.jpg` | Frog on a Branch | |
| `costa-rica/11-river-cow.JPG` | Manatee in the River | à confirmer — deviné à partir de "river-cow" |
| `costa-rica/12-pink-spatula.jpg` | Roseate Spoonbill | assez confiant — c'est l'oiseau rose au bec en spatule |
| `costa-rica/13-bill-botted-heron.JPG` | Boat-billed Heron | à confirmer — deviné à partir de "bill-botted" |
| `costa-rica/14-ara-manzanillo.jpg` | Macaw in Manzanillo | |
| `costa-rica/15-yellow-viper.JPG` | Yellow Viper | |
| `costa-rica/16-grey-viper.JPG` | Grey Viper | |
| `costa-rica/17-plumed-basilik.jpg` | Plumed Basilisk | assez confiant |
| `costa-rica/18-night-butterfly.jpg` | Night Butterfly | |
| `norway/02-aigle-rock.JPG` | Eagle on a Rock | |

Dis-moi simplement ce que montrent vraiment les photos marquées "à confirmer" et je corrige.

## 3. Personnaliser tes infos

Ouvre `index.html` avec un éditeur de texte simple (Bloc-notes, TextEdit, ou [VS Code](https://code.visualstudio.com/) qui est gratuit) et modifie :

- Ton email est déjà réglé sur `adrien.thomassin@gmail.com`
- Les liens `href="#"` d'Instagram / 500px → tes vrais liens
- Le texte de la section "À propos" si tu veux le modifier

## 4. Ajouter ou enlever des photos

Chaque photo est un bloc `<figure class="photo" ...>` dans `index.html`. Pour en ajouter une, copie un bloc existant (avec son `<img>` et sa `<figcaption>`), colle-le, et change le chemin de l'image + les textes. Pour en enlever une, supprime le bloc entier.

## 5. Voir combien de personnes visitent le site (et quelles photos)

Le code est déjà prêt pour ça, il te manque juste un compte gratuit :

1. Va sur **[goatcounter.com/signup](https://www.goatcounter.com/signup)** (gratuit, sans carte bancaire, respecte la vie privée des visiteurs — pas de bandeau cookies à ajouter).
2. Choisis un **code** de site, par exemple `adrienthomassin` (ça deviendra ton tableau de bord : `adrienthomassin.goatcounter.com`).
3. Confirme ton compte par email.
4. Ouvre `index.html` et remplace `TON-CODE` par le code choisi à l'étape 2, dans cette ligne (près du haut du fichier) :
   ```html
   <script data-goatcounter="https://TON-CODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
5. Envoie ce fichier modifié sur GitHub (édite-le directement en ligne comme vu plus haut, ou renvoie-le depuis "Upload files").

Une fois en place :
- Va sur `TON-CODE.goatcounter.com` pour voir le nombre de visiteurs, jour par jour.
- Dans l'onglet **"Pages"** de ce tableau de bord, tu verras chaque photo cliquée en plein écran listée séparément (ex : `photo-namibia-15-red-dune`) avec son nombre de vues — ça te dit directement quelles photos intéressent le plus les visiteurs.

## 6. Mettre le site en ligne gratuitement

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

## 7. Mettre à jour le site plus tard

- **GitHub Pages** : modifie tes fichiers localement, puis réupload-les dans **Add file → Upload files** (ça remplace les anciens).
- **Netlify** : refais un glisser-déposer du dossier mis à jour sur ton espace Netlify.

---

Structure du site : une page unique, organisée en "expéditions" par pays (Namibie, Costa Rica, Norvège), avec une galerie cliquable (plein écran) pour chaque photo.
