# Rapport v6.2c (next)

## v6.2c (24/10/2026, branche next) : retour au look v6.2 + 12 couleurs

- Habillages A à D retirés ; le look v6.2 proposé avant est de nouveau celui par défaut (Or).
- Paramètres > Couleur du combat : 12 thèmes (Or, Cramoisi, Orange, Ambre, Citron vert, Émeraude, Sarcelle, Cyan, Azur, Indigo, Violet, Rose), ni noir ni blanc. Recolore bordures, reflets, surbrillances des cartes ; PV/PM et pastilles de faiblesse gardent leurs couleurs. Sauvegardé dans S.cuiTheme (appareil + sauvegarde en ligne).
- Scène de combat : dégradé sur les 4 bords ; la phrase « Des monstres surgissent » est supprimée ; le journal devient un bandeau fondu en haut de la scène, la scène gagne la place.
- Intentions au-dessus des monstres normaux supprimées. Restent : lueur orange (grosse attaque au prochain tour), lueur jaune pâle (interruptible), flash de zone. Les boss annoncent leurs gros sorts dans un bandeau en haut de la scène (nom + barre d'incantation + « interruptible »). Aide mise à jour.
- Pastilles : police unique (Source Sans 3), nowrap, hauteurs fixes, plus de double bordure ; noms d'ennemis et de sorts réduits automatiquement s'ils dépassent ; règles petit écran (< 390 px). Audit automatique : 0 problème sur iPhone 12, iPhone SE, Galaxy S8 (10 jobs, 3/4 monstres, boss 10 à 50).
- Captures : screens/v62c_*.png

---

# Rapport : quatre habillages pour l'interface de combat v6.2 (next)

Salim aime la disposition, les jauges, les plaques ennemies et les cartes, mais trouve l'or, la lueur et le verre trop "IA". Même structure, quatre peaux au choix, sans lueur dorée, sans néon, sans flou, sans dégradé arc-en-ciel.

Choix : ajoute `?skin=a`, `b`, `c` ou `d` à l'adresse (retenu ensuite sur l'appareil), ou Paramètres > Style du combat (test). `?skin=0` remet l'or v6.2 d'origine, `?cui=0` l'ancienne interface.

| Peau | Adresse | En une ligne |
|---|---|---|
| A FFXIV sobre | https://a-godless-realm-next.onrender.com/?skin=a | panneaux charbon, filets 1px gris bleuté, barre de raccourcis plate, jauges aux couleurs des jobs |
| B Épuré plat | https://a-godless-realm-next.onrender.com/?skin=b | aplats sombres arrondis, aucune bordure, typo grasse, une seule couleur vermillon |
| C Parchemin | https://a-godless-realm-next.onrender.com/?skin=c | papier et cuir, double filet gravé, serif, encre verte, bleue et rouge sang |
| D Cristal | https://a-godless-realm-next.onrender.com/?skin=d | monochrome, filets blancs fins, angles vifs, capitales espacées, beaucoup d'air |

Captures (iPhone 12, dans /workspace/ffxiv-roguelite/screens/) : v62_skin_[a-d]_combat.png, _sorts.png, _boss.png, _jauges.png ; planche comparative v62_skins_comparatif.png ; jauges des 4 peaux v62_skins_jauges.png ; réglage v62_skins_parametres.png.

---

# Rapport : bascule v6.1d en principal, v6.1e (textes des sorts), proposition v6.2 (next)

## Résumé pour Salim (24/10)
1. **Bascule faite.** https://palais-des-morts.onrender.com joue maintenant la nouvelle version (salons stables `pdm-lobby` / `pdm-room-`, pas de bandeau test, cache `pdm-assets-v61e` puis `v61f`). Sauvegarde de secours intacte : branche `stable` (ad41a55) et tag `stable-v5.5g2`.
2. **Textes des sorts corrigés** (v6.1e), sur main et sur next.
3. **Proposition d'interface de combat** (v6.2), uniquement sur https://a-godless-realm-next.onrender.com. Comparer avec l'ancienne en ajoutant `?cui=0` à l'adresse.

## Versions
| Branche | Commit | Contenu |
|---|---|---|
| main | 5c4bd18 | Bascule v6.1d (CH_NEXT=false, salons stables, cache pdm-assets-v61e) |
| main | 5c8772b | v6.1e textes des sorts, cache pdm-assets-v61f |
| next | 0003090 | v6.1e, cache pdm-next-14 |
| next | b257959 | v6.2 proposition, cache pdm-next-15 |

## Vérification en ligne (main, iPhone 12)
Menu principal, En ligne, combat, sauvegarde du compte (création zz, envoi, chargement sur un 2e appareil : 12345 Gils, 3 jobs), classement : OK. Une sauvegarde v5.5g (version figée) se charge sur le nouveau main : nom, Gils, jobs, exploration en cours, aucune erreur. md5 index.html en ligne = local. pdm-signup accepte déjà l'origine main (lecture seule, rien modifié).

## v6.1e : bugs de texte corrigés
- Pastille ×1,5 / ×0,5 déplacée sur le coin de l'icône (ne serre plus le coût ni le texte), police système pour que le × ne ressemble plus à un x.
- Une seule pastille à droite sur chaque bouton : coût (PM ou jauge), sinon gain de jauge (+1 Sen, +1 Mana, +1 Rage…), sinon gain de PM (Glace +20 PM), sinon recharge (horloge + tours), sinon « Libre ». Fini les boutons sans rien (Glace) à côté de boutons avec coût. Noms de jauge courts (Œil, Flux, Répert.).
- Sorts de poison (Vent, Foudre, Bactérie, Higanbana, Morsure, Démolition) : le bouton montre les dégâts par tour (« 22/tour · 5 t ») au lieu du petit coup de départ.
- Réconfort « +36 PV, bouclier » (avant : seulement Bouclier 19) ; Murmure « +13 PV/tour ».
- Polarité réécrite : « passe en Feu astral 3 : dégâts de feu +45 % », et le coût dit « 25 PM (dont +10 dus au Feu astral) ». Glace : PM rendus réels selon la Glace ombrale.
- Soin / Réconfort : « Coût 22 PM, ou 1 Lys (gratuit) » au lieu de la ligne redondante.
- Étourdissement : « étourdit 1 tour. Boss et gardiens : seulement pendant une attaque marquée (éclair) ».
- Élément : « Feu · Squelette est faible : ×1,5 » (plus de « faiblesse de Ahriman »).
- Descriptions alignées sur les vrais chiffres : Esprit saint 12 % (pas 8), VerBrasier 15 % (pas 10), soins de Chakra interdit 12 %, Pluie de flèches 10 %, Midare 10 %, Fendoir 6 % ; coûts/gains de jauge écrits (Rempart 2 Serment, Fendoir/Tourbillon 2 Rage, Plongeon 2 Œil, Saut +1 Œil, Murmure +2 Flux, Drain 1 Flux, Misère 3 Lys, Chakra 5…).
- Plaques ennemies : 2 monstres côte à côte, 3 en triangle, 4 en carré, sprites réduits quand ils sont 3 ou plus : plus de nom caché par les pastilles ni de badge d'intention sur un sprite.
- Audit complet des 10 jobs (ligne du bouton + infobulle) : /tmp/p57/audit_after.txt.

## v6.2 : proposition d'interface (next uniquement)
- Activée par `CUI = CH_NEXT` (classe `body.cui` en combat) : un build main (CH_NEXT=false) garde l'ancienne interface même avec les mêmes sources.
- Barre du haut sombre en dégradé, titre en Cinzel, filet doré, Aide / Menu en pilules.
- Panneau du héros vitré (comme le menu principal), barres PV/PM fines en dégradé, chiffres alignés.
- Plaques ennemies : nom en Cinzel sur bandeau sombre, flèches dorées sur la cible, barre fine, pastilles de faiblesse en capsule (verte qui brille), intentions en pilules sombres (rouge = grosse attaque, ambre = préparation).
- Sorts : cartes sombres en relief (ombre, filet doré, petite flèche, enfoncement au toucher), sorts indisponibles plats et gris.
- Jauges de job en SVG, une par job, avec animation quand une charge arrive (apparition) ou part (éclat), respiration quand la jauge est pleine :
  Paladin bouclier du serment qui se remplit + 3 épées ; Moine 5 orbes de chakra en arc ; Barde 3 notes sur une portée ; Mage blanc 3 pétales de lys ; Guerrier jauge de la bête inclinée en 5 segments (flamme quand pleine) ; Chevalier dragon 2 yeux du dragon qui s'ouvrent ; Mage noir orbe de polarité feu/glace avec anneau tournant et 3 losanges de chaque côté ; Érudit 3 gemmes d'éther sur un flux animé ; Samouraï 3 Sen 雪 月 花 ; Mage rouge cristaux blanc et noir qui se remplissent + 3 losanges de mana.
- Aucune image IA, aucun emoji : CSS/SVG seulement, sprites et icônes officiels déjà crédités.

## Captures (/workspace/ffxiv-roguelite/screens/)
- Textes avant/après : v61e_avant_sort.png, v61e_apres_sort.png, v61e_avant_4monstres.png, v61e_apres_4monstres.png, v61e_apres_3monstres.png, planche v61e_textes_avant_apres.png (avant d'origine de Salim : v61d_sort_detail_live.png).
- Main en ligne : live_main/ (main_hub, main_enligne_jouer, main_combat, main_enligne_compte_save, main_appareil2_charge, main_enligne_classement, main_migration_v55g, main_v61e_sort(_tip), main_v61e_4monstres).
- Proposition : v62_prop_combat.png, v62_prop_sorts.png, v62_prop_boss.png, v62_prop_4monstres.png, côte à côte v62_avant_apres.png, planche des jauges v62_jauges_planche.png, en ligne v62_*_live.png.

## Pas fait / limites
- Le combat en ligne (duo/trio) utilise le même écran de combat, donc reçoit aussi la proposition sur next ; à vérifier en partie réelle.
- Pas de note de patch pour la v6.2 : c'est une proposition, à écrire si Salim la valide (puis passer CUI à true sur main).

# Rapport précédent : branche next (v6.1a à v6.1d)

## Résumé pour Salim (retours du 24/10)
- Site test : https://a-godless-realm-next.onrender.com (v6.1d). Le site stable (main, v5.5g2) n'a pas bougé.
- Classement : jusqu'à l'étage 100, et un seul classement, dans En ligne (v6.1a).
- En ligne : un seul écran avec quatre onglets en bas (Jouer, Classement, Amis, Compte), plus de sous-menus (v6.1b).
- Sauvegarde : un seul bouton Sauvegarder dans Compte ou Paramètres, plus de code. Sur un autre téléphone, il suffit de se connecter (v6.1b).
- Menu principal : grand décor FFXIV, ton personnage au centre, liste claire (v6.1c).
- Faiblesses : pastille verte sous le monstre pour ses faiblesses, grise pour ses résistances, et un gros « Faiblesse ! » à l'impact (v6.1d).
- Sorts : boutons épurés avec icône, nom, une ligne d'effet et le coût. Anneau vert si la cible est faible. Appui long pour le détail (v6.1d).
- Chaque job a sa jauge et sa façon de jouer (Serment, Chakra, Répertoire, Lys, Rage, Œil du dragon, Feu astral et Glace ombrale, Flux d'éther, Sen, Mana). Les monstres ont 10 % de PV et d'attaque en plus (sauf Chaos) (v6.1d).
- Résultat des simulations (bot, 8 parties par job) : les jobs sont bien plus proches qu'avant (de 12 à 75 % de victoire contre Bahamut, avant de 0 à 100 %).
- Pas possible : transférer la progression du site stable vers le site test en un geste (le site stable est gelé et n'a pas de sauvegarde en ligne).

## v6.1 : détails
| Version | Commit | Contenu |
|---|---|---|
| v6.1a | 65e78a0 | Classement F1 à F100, un seul classement (En ligne) |
| v6.1b | 1c94c06 | En ligne à onglets, sauvegarde cloud en un bouton (table pdm_cloud_saves, RLS) |
| v6.1c | 315f007 | Nouveau menu principal (hub) |
| docs | f6f8ac4 | HUB_PREVIEW.txt, vérifications live |
| v6.1d | 9a780cd | Jauges de job, sorts épurés, faiblesses visibles, difficulté +10 % |

### Simulations v6.1d (bot « smart », 8 parties par job, % de victoire contre Bahamut F50)
Avant = build v6.1c (base gelée) avec le même bot ; après = v6.1d.

| Job | Avant | Après | Étage médian après | Tours combat normal / boss |
|---|---|---|---|---|
| Paladin | 38 % | 25 % | 30 | 4 / 10 |
| Moine | 25 % | 12 % | 28.5 | 4 / 6 |
| Barde | 25 % | 25 % | 29 | 4 / 7 |
| Mage blanc | 100 % | 75 % | 50 | 2 / 13 |
| Guerrier | 75 % | 50 % | 50 | 4 / 10 |
| Chevalier dragon | 62 % | 75 % | 50 | 3 / 6 |
| Mage noir | 38 % | 50 % | 50 | 1 / 6 |
| Érudit | 88 % | 38 % | 41.5 | 3 / 10 |
| Samouraï | 0 % | 50 % | 50 | 1 / 7 |
| Mage rouge | 25 % | 50 % | 39 | 2 / 6 |
| Moyenne | 48 % | 45 % | | |

Mécaniques : voir le tableau MECH dans game.js et la note de patch v6.1d.
Trio (barde, mage noir, moine, 3 clients, jusqu'à F20) : 69 vérifications, 0 écart, 0 désynchronisation.

Note : le bot n'exploite pas les jauges aussi bien qu'un joueur (Feu astral, Lys gardés pour Misère, etc.). Un joueur qui joue la mécanique fera mieux. Les loadouts par défaut changent ; les joueurs qui ont déjà choisi leurs 4 sorts les gardent.

### Captures iPhone 12 (390x844)
- Hub : /workspace/ffxiv-roguelite/screens/v61c_hub_live.png
- En ligne : /workspace/ffxiv-roguelite/screens/v61b_enligne_jouer_live.png, /workspace/ffxiv-roguelite/screens/v61b_enligne_classement_live.png, /workspace/ffxiv-roguelite/screens/v61b_enligne_compte_save_live.png
- Combat (faiblesses, jauge, boutons) : /workspace/ffxiv-roguelite/screens/v61d_combat_faiblesse_live.png
- Détail d'un sort (appui long) : /workspace/ffxiv-roguelite/screens/v61d_sort_detail_live.png
- Jauge Chakra : /workspace/ffxiv-roguelite/screens/v61d_jauge_moine_live.png

# Rapport précédent (v6.0a à v6.0i)

## Résumé pour Salim
- La version test est en ligne : https://a-godless-realm-next.onrender.com (v6.0i). La version stable n’a pas bougé (branche main, v5.5g2).
- L’avant-poste tient sur un écran d’iPhone 12 : la barre du bas se voit sans défiler.
- Les améliorations permanentes donnent un peu moins par niveau. Avec tout acheté, un bon joueur (bot) bat Bahamut environ 6 fois sur 10 (avant : 7 sur 10). Personne ne perd ce qu’il a acheté.
- Chaos (étage 100) est un vrai boss final : il bat environ 1 bon joueur sur 6 qui arrive jusqu’à lui, en 12 à 15 tours, avec ses gros coups toujours annoncés et jamais mortels d’un seul coup si on a toute sa vie.
- L’inscription depuis le site test ne marchait pas (le serveur refusait ce site). C’est réparé, sans toucher au site stable. Un vrai score a été envoyé puis effacé avec le compte de test.
- Trio : la petite désynchronisation vue une fois ne s’est pas reproduite en 3 nouveaux essais (dont un en ligne). Si elle revient, le jeu se resynchronise tout seul.


## Site
- Next (test) : https://a-godless-realm-next.onrender.com (Render static site srv-dbdv79ss728c738kpmpg, branche `next`, autodeploy).
- Live vérifié : commit 6f91636 (v6.0i), sw `pdm-next-09`, index.html servi identique au commit (md5). Lobby en ligne séparé : `pdm-next-lobby`, salons `pdm-next-room-`.
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
- v6.0g : avant-poste compacté, barre du bas visible sans défiler (iPhone 12 : fin à 636 px sur 664 ; iPhone SE : 527 sur 568).
- v6.0h : améliorations par rang réduites (Force/Intelligence 0,2 %, Affûtage 0,4 %, Précision 0,2 %, Vitalité 0,3 %, Esprit 1,5 %, Rempart 0,2 %, Voile 0,3 %, Récupération 0,15 %). Rangs et prix inchangés, donc aucune sauvegarde touchée. Chaos : PV et attaque revus, grosses attaques annoncées plafonnées à 55 % des PV max, phases 3 et 4 frappent fort tous les 3 tours.
- v6.0i : Chaos : coups normaux x1,3, grosses attaques annoncées plafonnées à 62 % des PV max (les autres boss restent à 40 %), hpK 2,7, atkK 2,0.

## Simulations (bot intelligent sauf mention, 40 parties, local)
| Cas | F50 | Entrés acte II | F100 | Médianes tours |
|---|---|---|---|---|
| Acte I, 0 % améliorations (j6b) | 35 % | | | normal 2, boss 8, final 12 |
| Acte I, 100 % améliorations (j6u, avant v6.0h) | 70 % | | | |
| Acte I, 0 % (ubase, v6.0h) | 40 % | | | normal 2, boss 8, final 12,5 |
| Acte I, 100 % améliorations (uf4a+uf4b, v6.0h, 80 parties) | 50/80 = 62 % | | | normal 2, boss 8, final 12 |
| Bot spam (m6), 0 % | 0 % | | | normal 3, boss 7 ; morts 24 boss, 7 élites, 9 normaux |
| Acte II, 0 % (k4b) | 15/40 (38 %) | 15 | 4/40 (10 % ; 27 % des entrants) | 51-75 : normal 1, boss 11 ; 76-100 : normal 2, élite 4, boss 14 |
| Acte II, 100 % (k4u) | 28/40 (70 %) | 28 | 12/40 (30 % ; 43 % des entrants) | 51-75 : boss 10 ; 76-100 : normal 2, élite 4, boss 11 |
- Morts acte II (k4u) : boss 5 (55, 60x2, 70, 80), élites 7, normaux 4. Coup max reçu 0,61 à 0,73 des PV max : pas de one-shot.
- Chaos (v6.0i), rejeu de 22 arrivées réelles au F100 (instantanés pris dans les sims acte II k5u et k5b, 104 combats) : bots améliorés à 100 % : 18 % tués, médiane 12 tours ; bots sans amélioration : 15 % tués, médiane 15 tours ; total 16 %. Plus gros coup reçu 0,60 des PV max (pas de one-shot). Avant : 0 mort sur Chaos, 5 à 15 tours.
- Analyse améliorations (40 parties chacune, avant le rabot) : stats Endurance seules 52 %, Puissance seules 42 %, Sacoche + Bénédiction seules 52 %, Bourse seule 38 %. Le gain venait du cumul, d’où un rabot de toutes les stats.
- Duo/trio (sync) : avant v6.0e, duo local et live 11 à 29 désynchronisations (rattrapées par resync ; la stable v5.5g2 en a aussi 15 : bug ancien). Après v6.0e, duo local dnx3 et dnx4 : 0 écart, 0 désync (étages 25 et 20). Trio local tnx2 : 0 écart, étage 24. Live v6.0f (site next, vrai Supabase realtime) : duo dlive6 0 écart, 0 désync (étage 20) ; trio tlive6 étage 30, 1 désync (étape 99, l’hôte avait tiré un nombre aléatoire de plus, un héros KO), rattrapée par la resync, 7 contrôles en écart sur 268.
- Trio, recherche du tirage en trop sur KO : relu tout le chemin (duoCombatTurn, enemyAct, enemyPhase, duoTick, duoCheckEnd/tryRevive, winCombat, duoVote, résolution des étapes en série dans Online.tryResolve) sans trouver de tirage dépendant du client. Trois nouveaux trios avec journal de chaque appel à rand() : local tr1 (paladin, mage blanc, mage noir) et tr2 jusqu’au F50, 250 et 381 contrôles, 0 écart, 0 désync ; live tlive8 sur le site next (vrai Supabase realtime) jusqu’au F50, 302 contrôles, 0 écart, 0 désync. Quatrième trio local tr3 (moine, barde, mage noir) jusqu’au F50 : 0 désync au contrôle d’empreinte du jeu, mais 6 relevés du test sur 338 différaient sur une page à l’étage 45 (PV d’un héros), écart passager disparu au contrôle suivant. Non reproduit, donc pas de correctif à l’aveugle. (Note : dans le relevé final du test, le héros 0 semble niveau 2 : c’est un artefact du test, qui lit R.party[0] alors que ce héros est chargé dans R ; l’état haché est correct.)

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
- Test réel depuis next (v6.0h, 24/10 02:49 UTC) : la première inscription depuis https://a-godless-realm-next.onrender.com échouait (« Pas de connexion au serveur ») car la fonction pdm-signup n’autorisait que l’origine stable (CORS). Correctif : pdm-signup redéployée (version 2) avec une seule origine ajoutée (a-godless-realm-next.onrender.com), le reste identique, origine stable toujours acceptée (vérifié). Ensuite : compte zztest_ins8 créé par l’inscription du jeu, Online.submitRun, ligne pdm_runs id 19 (étage 50, seed `F100:11-22-33-44`, score 265000, solo) visible dans le classement. Supprimé dans l’ordre pdm_friendships, pdm_runs, pdm_profiles, auth.users : 0 ligne restante pour ce compte, 7 parties au total dans pdm_runs.
- Vérification en lecture seule des contraintes pdm_runs (étage 1-50, score <= 2 000 000, seed <= 80, party 1-3, mode solo/duo) et de pdm_submit_run. Next reste dedans : étage borné à 50, victoire acte II envoyée comme victoire 50, seed préfixée `F{étage}:`, score borné à 2M. Aucune modification de schéma, la stable n’est pas touchée.

## Captures (/workspace/ffxiv-roguelite/screens/)
- F100 : v6_f100_chaos_intro.png, v6_f100_chaos_combat.png, v6_f100_planche.png
- Acte II : v6_acte2_choix.png, v6_f55_garuda.png
- Éléments : v6_elements_ui.png
- Fin : v6_victoire_finale.png, v6_victoire_finale_se.png
- UX avant/après : ux_petit_ecran_avant_apres.png (stable à gauche, next à droite, iPhone SE), ux_petit_ecran_monstres_apres.png, ux_aide_avant.png / ux_aide_apres.png
- Autres : v6_parametres_code.png, v6_ux_menus.png, v6_ux_partie.png

## Pas fait / limites
- Trio : la désync unique vue en live (tlive6, héros KO) n’a pas été reproduite (3 trios propres) ; cause non trouvée, pas de correctif. La resync la rattrape.
- Le correctif de désync duo (v6.0e) et les réglages v6.0h/v6.0i ne sont que sur next ; la stable garde l’ancien comportement.
- Les sims de Chaos utilisent des instantanés pris à l’entrée du F100 (bots à 100 % et à 0 %) ; une sim acte II complète avec v6.0i n’a pas été relancée.
- Améliorations : 62 % sur 80 parties (marge d’environ 5 points).
- La fonction pdm-signup accepte maintenant aussi l’origine du site next ; à garder si next devient la prod via un autre domaine, sinon la ligne peut rester sans risque.
