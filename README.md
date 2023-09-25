# Coders Monkey

## Initialisation du projet

1. Nettoyage du projet
2. Création des dossiers
3. Initialisation Tailwindcss
4. Initialisation de Firebase
5. Création des .env

## Création du composant Typography (Design-System)

1.

## Création du composant Button (Design-System)

"Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server" qui intervient lors du passage du composant icone dans le boutton.

1. Correction de l'erreur

- Passage d'un objet avec pour clé icon et la fonction comme valeur
- A l'heure actuelle , pas d'autre choix connus que de déporter l'icone afin que la page soit correctement rendu coté serveur. (A revoir si jamais)

## Création du composant Navigation

Le composant Link de next/navigation , n'apporte pas l'information du active-link, fait maison pour le coup.

A noter que l'utilisation de useMemo() est requis pour des calculs couteux dépassant 1ms, afin d'augmenter la performance de l'application

## Création du composant Footer (Array Data)
