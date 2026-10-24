# Rapport : A Godless Realm, branche next (v6.0a à v6.0f)

## Site
- Next (test) : https://a-godless-realm-next.onrender.com (Render static site srv-dbdv79ss728c738kpmpg, branche `next`, autodeploy).
- Live vérifié : commit ab08ae7 (v6.0f), sw `pdm-next-06`, index.html servi identique au commit (md5). Lobby en ligne séparé : `pdm-next-lobby`, salons `pdm-next-room-`.
- Stable : https://palais-des-morts.onrender.com, branche `main`, gelée à `stable-v5.5g2` (ad41a55). Rien poussé sur main.

## Stable et bascule
- Sauvegarde : tag `stable-v5.5g2` et branche `stable` (ad41a55).
- Passer next en prod : fusionner `next` dans `main` (le site stable déploie main). Avant : remettre `CFG.lobby`/`roomPrefix` aux valeurs stables, `CH_NEXT=false`, et un nom de cache SW non `pdm-next-*`.
- Revenir en arrière après une fusion : `git revert` du commit de fusion sur main (pas de force-push), ou pointer le service Render stable sur la branche `stable` (= tag `stable-v5.5g2`).
- Joueurs : le code de sauvegarde (Paramètres > Copier mon code / Coller un code) passe la progression d’un site à l’autre.

## Changelog
- v6.0a : éléments (8 + physique) sur toutes les attaques, faiblesse x1,5 / résistance x0,5, cristaux de faiblesse/résistance sous chaque ennemi, intentions au dessus des ennemis, rôles ennemis (Blindé, Lanceur, Soigneur, Soutien, Explosif), Affaibli si grosse attaque prise sans défense, difficulté et améliorations rééquilibrées, 3 nouvelles récompenses.
- v6.0b : acte II (étages 51 à 100) après Bahamut (choix rentrer / descendre), 10 boss, finale Chaos avec les 4 Démons, 10 nouveaux monstres, 13 décors officiels, récompenses Chaos, classement Néant/Victoire 100 (dans les contraintes pdm_ existantes), code de sauvegarde, zones tactiles, site de test séparé.
- v6.0c : acte II redosé (normaux 1 à 2 tours, morts sur élites/boss), Titan et Nuage moins longs, combat tient sur iPhone SE (568 px), zones tactiles du haut 44 px, score envoyé borné à 2 000 000.
- v6.0d : petits écrans : 2 ou 3 monstres côte à côte, intention d’un monstre seul ne sort plus du cadre ; titre Victoire finale ne se coupe plus en deux.
- v6.0e : correctif de désynchronisation duo (l’hôte reprenait l’ancien état poison/faiblesse au début d’un combat : renderCombat ne sauvegardait pas le héros courant). Bouton Sans compagnon grisé si aucun choisi.
- v6.0f : bouton Fermer collant en bas des fenêtres longues (l’aide des actions cachait Fermer sous le pli), 44 px.

## Simulations (bot intelligent sauf mention, 40 parties, local)
| Cas | F50 | Entrés acte II | F100 | Médianes tours |
|---|---|---|---|---|
| Acte I, 0 % améliorations (j6b) | 35 % | | | normal 2, boss 8, final 12 |
| Acte I, 100 % améliorations (j6u) | 70 % | | | |
| Bot spam (m6), 0 % | 0 % | | | normal 3, boss 7 ; morts 24 boss, 7 élites, 9 normaux |
| Acte II, 0 % (k4b) | 15/40 (38 %) | 15 | 4/40 (10 % ; 27 % des entrants) | 51-75 : normal 1, boss 11 ; 76-100 : normal 2, élite 4, boss 14 |
| Acte II, 100 % (k4u) | 28/40 (70 %) | 28 | 12/40 (30 % ; 43 % des entrants) | 51-75 : boss 10 ; 76-100 : normal 2, élite 4, boss 11 |
- Morts acte II (k4u) : boss 5 (55, 60x2, 70, 80), élites 7, normaux 4. Coup max reçu 0,61 à 0,73 des PV max : pas de one-shot.
- Duo/trio (sync) : avant v6.0e, duo local et live 11 à 29 désynchronisations (rattrapées par resync ; la stable v5.5g2 en a aussi 15 : bug ancien). Après v6.0e, duo local dnx3 et dnx4 : 0 écart, 0 désync (étages 25 et 20). Trio local tnx2 : 0 écart, étage 24. Live v6.0f (site next, vrai Supabase realtime) : duo dlive6 0 écart, 0 désync (étage 20) ; trio tlive6 étage 30, 1 désync (étape 99, l’hôte avait tiré un nombre aléatoire de plus, un héros KO), rattrapée par la resync, 7 contrôles en écart sur 268.

## Boss 55 à 100
| Étage | Boss | Rôle | Faible | Résiste |
|---|---|---|---|---|
| 55 | Garuda | gardien | glace | vent |
| 60 | Titan | boss | vent | terre |
| 65 | Odin | gardien | ténèbres | foudre |
| 70 | Ultimecia | boss | lumière | glace |
| 75 | Empereur | gardien | glace | feu, foudre |
| 80 | Nuage des ténèbres | boss | foudre | ténèbres |
| 85 | Necron | gardien | feu | lumière |
| 90 | Ardyn | boss | lumière | ténèbres |
| 95 | Garland | gardien | glace | feu |
| 100 | Chaos | final (phases 80/60/40/20 %, Big Bang sous 10 %) | aucune | ténèbres |
Chaos prend les affinités du Démon appelé : Marilith (faible glace, résiste feu), Kraken (foudre ; eau, glace), Liche (feu, lumière ; terre, ténèbres), Tiamat (terre ; vent, foudre).

## Éléments (résumé)
- Éléments : Physique, Feu, Glace, Foudre, Terre, Vent, Eau, Lumière, Ténèbres. Faiblesse x1,5 (+ bonus de perk), résistance x0,5, physique toujours neutre.
- Chaque action de job a un élément (SKILL_EL), chaque job en a au moins deux ; compagnons et attaques ennemies aussi (COMP_EL, EN_ATK_EL).
- Chaque ennemi a faiblesses/résistances (EN_EL) : cristaux verts = faiblesses, gris = résistances ; le cristal d’une action s’entoure de vert si la cible y est faible.
- Exemples : Flan faible feu ; Bombo faible glace/eau, résiste feu ; Squelette faible lumière/feu ; Bahamut faible glace, résiste feu.

## Supabase (ruuorgyqgtdgfpthanuq)
- Vérification en lecture seule des contraintes pdm_runs (étage 1-50, score <= 2 000 000, seed <= 80, party 1-3, mode solo/duo) et de pdm_submit_run. Next reste dedans : étage borné à 50, victoire acte II envoyée comme victoire 50, seed préfixée `F{étage}:`, score borné à 2M. Aucune modification de schéma, la stable n’est pas touchée.

## Captures (/workspace/ffxiv-roguelite/screens/)
- F100 : v6_f100_chaos_intro.png, v6_f100_chaos_combat.png, v6_f100_planche.png
- Acte II : v6_acte2_choix.png, v6_f55_garuda.png
- Éléments : v6_elements_ui.png
- Fin : v6_victoire_finale.png, v6_victoire_finale_se.png
- UX avant/après : ux_petit_ecran_avant_apres.png (stable à gauche, next à droite, iPhone SE), ux_petit_ecran_monstres_apres.png, ux_aide_avant.png / ux_aide_apres.png
- Autres : v6_parametres_code.png, v6_ux_menus.png, v6_ux_partie.png

## Pas fait / limites
- 100 % des améliorations donnent 70 % au F50 (cible 55-65 %).
- Chaos n’a tué aucun bot dans les sims (les morts acte II sont sur les élites et les boss 55-80).
- Aucune insertion réelle dans Supabase depuis next (vérification des contraintes en lecture seule uniquement).
- Trio : une désync rare reste (l’hôte consomme un tirage aléatoire de plus quand un héros est KO, étape 99 du test live) ; la resync la corrige, cause exacte non trouvée.
- Le correctif de désync (v6.0e) n’est que sur next ; la stable garde le bug ancien (rattrapé par resync).
- Avant-poste : la barre du bas (Registre, Classement, Paramètres, Écran titre) est en partie sous le pli sur iPhone 12 (on y accède en défilant).
