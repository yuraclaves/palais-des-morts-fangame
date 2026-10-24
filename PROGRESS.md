# Progression (branche next)

- v6.0c (d663f16) : acte II mieux dosé, petits écrans, zones tactiles, score borné. Live vérifié (pdm-next-03).
- v6.0d (3d81f4b) : placement des monstres sur petits écrans, titre Victoire finale. Live vérifié (pdm-next-04, index.html identique au commit).
- En cours : v6.0e, correctif de désynchronisation duo (renderCombat sauvegarde le héros courant avant affichage). Test duo local en cours.
- v6.0e : correctif désync duo (renderCombat/updateCombat sauvegardent le héros courant, try/finally). Tests duo locaux dnx3/dnx4 : 0 écart, 0 désync (floors 25 et 20), contre 11 à 29 désyncs avant (et 15 sur la stable). Bouton Sans compagnon grisé si aucun choisi.
