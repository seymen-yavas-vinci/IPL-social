# Projet IPL Social - Examen DevOps

## Informations Étudiant
- Nom : Yavas
- Prénom : Seymen
- Email : seymen.yavas@student.vinci.be
- URL : https://github.com/seymen-yavas-vinci/IPL-social

## Description
Ce projet est un validateur d'email (emailVerifier.ts) développé en TypeScript avec la méthode TDD.

Les règles validées sont :
1. L'email doit contenir un @.
2. Le domaine doit contenir un point (pas à la fin).
3. Aucun espace n'est autorisé.
4. Il doit y avoir du texte avant et après l'arobase.

## Intégration Continue
Une pipeline GitHub Actions est configurée pour installer le projet et lancer les tests automatiquement à chaque modification sur la branche main.

## Lancer les tests
npm test