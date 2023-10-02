[Coders Monkey](https://coders-gynflo.web.app "Coders Gynflo")

### Initialisation du projet

1. Nettoyage du projet
2. Création des dossiers
3. Initialisation Tailwindcss
4. Initialisation de Firebase
5. Création des .env

### Création du composant Typography (Design-System)


### Création du composant Button (Design-System)

"Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server" qui intervient lors du passage du composant icone dans le boutton.

1. Correction de l'erreur

- Passage d'un objet avec pour clé icon et la fonction comme valeur
- A l'heure actuelle , pas d'autre choix connus que de déporter l'icone afin que la page soit correctement rendu coté serveur. (A revoir si jamais)

### Création du composant Navigation

Le composant Link de next/navigation , n'apporte pas l'information du active-link, fait maison pour le coup.

A noter que l'utilisation de useMemo() est requis pour des calculs couteux dépassant 1ms, afin d'augmenter la performance de l'application

### Création du composant Footer (Array Data)

### Creation de la landing page avec l'utilisation des composants (Typography, Button, Container ...)
/!\ L'importation des icons pour l'utilisation dans les boutons est à reprendre 

### Création du breadcrumbs ,des pages d'authentification (login, register, forgotPassord)

### Création des formulaires d'authentification , utilisation du package react-hook-form
Mise en place de la logique dans le .container puis props-drilling dans les composants plus bas (.view => .form).
Il est possible de revoir ce concept afin de reduire la partie cliente à son strict minimum, soit le formulaire.

- Erreur sur les routes handler avec pour code: 'NEXT_STATIC_GEN_BAILOUT' , résolu en désactivant dans next.config =>  output: "export" || dans route.ts => export const dynamic = "force-static";

### Création du composant Session 
Création du composant session afin d'éliminer l'effet highlight de l'application, je me sers du hook use-firebase-auth afin de jouer avec le retour booleen de authUserIsLoading