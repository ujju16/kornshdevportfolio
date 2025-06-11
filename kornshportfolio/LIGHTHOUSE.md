# Rapport Lighthouse : comment faire

1. **Lancer le site localement**
   ```bash
   npm run dev
   ```
   ou utiliser l’URL déployée sur Vercel.

2. **Ouvrir Chrome DevTools > Lighthouse**
   - Aller sur la page d’accueil du portfolio.
   - Ouvrir DevTools (F12), onglet "Lighthouse".
   - Sélectionner les catégories (Performance, Accessibilité, Best Practices, SEO, PWA).
   - Cliquer sur "Analyser la page".

3. **Exporter le rapport**
   - Télécharger le rapport HTML ou JSON pour archivage ou partage.

4. **En ligne de commande (optionnel)**
   ```bash
   npx lighthouse http://localhost:3000/ --output html --output-path=./lighthouse-report.html
   ```

---

## Exemple de rapport attendu
- **Performance** : >90
- **Accessibilité** : 100
- **Best Practices** : >95
- **SEO** : >90
- **PWA** : si activé

Corrige les points signalés par Lighthouse pour viser le 100/100 accessibilité et performance.
