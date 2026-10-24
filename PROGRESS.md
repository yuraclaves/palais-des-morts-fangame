# Progression (branche next)

- v6.0c (d663f16) : acte II mieux dosé, petits écrans, zones tactiles, score borné. Live vérifié (pdm-next-03).
- v6.0d (3d81f4b) : placement des monstres sur petits écrans, titre Victoire finale. Live vérifié (pdm-next-04, index.html identique au commit).
- En cours : v6.0e, correctif de désynchronisation duo (renderCombat sauvegarde le héros courant avant affichage). Test duo local en cours.
- v6.0e : correctif désync duo (renderCombat/updateCombat sauvegardent le héros courant, try/finally). Tests duo locaux dnx3/dnx4 : 0 écart, 0 désync (floors 25 et 20), contre 11 à 29 désyncs avant (et 15 sur la stable). Bouton Sans compagnon grisé si aucun choisi.
- v6.0f : bouton Fermer collant en bas des fenêtres longues (aide des actions coupait le bouton sous le pli), 44 px. Test faux boutons : écrans titre, avant-poste, jobs, marchand, invocation, classement, paramètres, menu combat, objets : aucun bouton mort (sauf Sans compagnon, corrigé en v6.0e).
- Live ab08ae7 (pdm-next-06) : index.html identique au commit ; F55 Garuda et F100 Chaos forcés OK, 0 erreur. Duo et trio live lancés (dlive6, tlive6).
- REPORT.md écrit. Live duo dlive6 : 0 écart ; trio tlive6 : 1 désync rattrapée (étape 99).
