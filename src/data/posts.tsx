import React from 'react';
import { Target, Clapperboard, Zap, Eye, Film, Shield, Lightbulb, BarChart3 } from 'lucide-react';

export interface PostSection {
  title: string;
  icon: React.ReactNode;
  content: string;
}

export interface PostContent {
  title: string;
  intro: string;
  sections: PostSection[];
  conclusion: string;
}

export interface BlogPostType {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  fullContent: PostContent;
}

export const posts: BlogPostType[] = [
  {
    id: 1,
    slug: 'comment-capturer-essence-equipe-matchday',
    title: 'Comment capturer l\'essence d\'une équipe en matchday',
    excerpt: 'Guide pratique pour immortaliser chaque moment clé d\'une journée de match, des préparatifs aux célébrations.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '15 Mars 2025',
    author: 'Bakar',
    category: 'Matchday Stories',
    fullContent: {
      title: "Comment capturer l'essence d'une équipe en matchday",
      intro: "Le matchday est le moment où l'émotion atteint son paroxysme. En tant que producteur visuel, savoir capturer ces instants authentiques demande préparation, réactivité et compréhension du jeu. Voici comment maximiser vos opportunités photo et vidéo lors d'un match.",
      sections: [
        {
          title: "Préparation et scouting avant le match",
          icon: <Target className="w-6 h-6" />,
          content: "Arrivez au moins une heure avant le coup d'envoi. Reconnaissez les lieux, testez votre équipement et identifiez les meilleures positions de prise de vue selon la luminosité et la position du soleil. Discutez avec l'entraîneur pour comprendre la tactique et prévoir les zones d'action. Vérifiez vos batteries, cartes SD et réglages ISO pour chaque conditions lumineuses possibles."
        },
        {
          title: "Les moments clés à ne pas manquer",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "1. Avant le match: échauffement, hymnes et poignées de main. 2. Premières minutes: intensité maximale et engagement physique. 3. Duels aériens et actions techniques: les moments visuellement les plus forts. 4. Buts et célébrations: émotions brutes et authentiques. 5. Remplaçants et banc: reaction des joueurs, tension. 6. Fin du match: victoire, déception et respect mutuel. Documentez chaque phase pour créer une narration complète."
        },
        {
          title: "Réglages techniques pour l'action",
          icon: <Zap className="w-6 h-6" />,
          content: "Vitesse d'obturation: minimum 1/1000s en conditions optimales, 1/500s en journée couverte. Ouverture: f/2.8 à f/5.6 selon la lumière. ISO: ajustez de 400 à 3200 selon les conditions. Mode autofocus continu (AI Servo) pour suivre les joueurs. Teleobjectif 70-200mm ou 100-400mm pour capturer l'action à distance. Mode rafale haute vitesse pour saisir le moment décisif des duels."
        },
        {
          title: "Storytelling visuel: raconter l'histoire du match",
          icon: <Eye className="w-6 h-6" />,
          content: "Ne vous contentez pas de photographier l'action. Capturez les regards concentrés, les encouragements entre joueurs, les réactions du coach, l'ambiance du public. Ces détails humains créent une connexion émotionnelle. Variez les cadrages: plans larges pour le contexte, gros plans pour les émotions, détails pour les éléments distinctifs du club."
        },
        {
          title: "Vidéo matchday: composition de sujets cinématiques",
          icon: <Film className="w-6 h-6" />,
          content: "Utilisez plusieurs caméras si possible pour des angles complémentaires. Capturez les mouvements fluides des joueurs, les transitions rapides. Enregistrez le son ambient (cris, célébrations, ambiance) pour riche post-production. Créez des plans de transition: public, logo club, banc de touche. Montage: commencez lentement avec les préparatifs, accélérez vers l'action, terminée avec émotions intensifies."
        }
      ],
      conclusion: "Le matchday parfait combine technique maîtrisée et instinct artistique. Plus vous couvrez de matches, plus vous apprendrez à anticiper et à raconter des histoires visuelles captivantes qui reflètent l'âme d'une équipe."
    }
  },
  {
    id: 2,
    slug: 'immersion-academie-developpement-jeunes-talents',
    title: 'Immersion en académie : filmer le développement des jeunes talents',
    excerpt: 'Les codes de la production vidéo dans un environnement d\'académie pour capturer croissance et passion.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '10 Mars 2025',
    author: 'Bakar',
    category: 'Behind the Scenes',
    fullContent: {
      title: "Immersion en académie : filmer le développement des jeunes talents",
      intro: "Les académies de football sont des espaces d'émotions brutes où de jeunes talents rêvent de carrière professionnelle. Filmer cette réalité demande discrétion, éthique et compréhension de l'environnement. Découvrez comment créer des contenus immersifs qui capturent cette énergie unique.",
      sections: [
        {
          title: "Accès et trust-building avec les joueurs",
          icon: <Shield className="w-6 h-6" />,
          content: "Le premier défi est d'établir la confiance. Les jeunes joueurs peuvent être timides face à la caméra. Commencez par des interactions informelles, laissez-les s'habituer à votre présence. Parlez football avec eux, montrez-leur les contenus que vous créez. Présentez-vous d'abord comme quelqu'un qui raconte leur histoire, pas comme quelqu'un qui les filme. Cette approche humaine transformera votre travail."
        },
        {
          title: "Moments importants à couvrir",
          icon: <Eye className="w-6 h-6" />,
          content: "Vestiaires: moments de détente, plaisanteries, focus avant match. Entraînements tactiques: concentration des joueurs, feedback des coachs. Duels amicaux: intensité de la compétition. Moments de doute et déception: caractère des joueurs. Réussites et buts: joie authentique. Interactions avec les coachs: mentorat et développement. Repas et vie de groupe: camaraderie et dynamique d'équipe."
        },
        {
          title: "Équipement adapté pour une mobilité maximale",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "Caméra compacte (GoPro, DJI Osmo) pour la mobilité en vestiaire. Drone pour des vues aériennes du terrain. Microphone directionnel pour capturer le son des entraînements. Batterie de rechange et stockage SD amplifié pour longues journées. Gilet de production pour rester discret et professionnel. Privilégiez la mobilité à la puissance brute."
        },
        {
          title: "Édition : créer une narrative de croissance",
          icon: <Film className="w-6 h-6" />,
          content: "Structurez vos vidéos autour d'une progression: introduction du joueur, ses défis, ses forces, les entraînements intenses, les matchs, les moments de réflexion. Utilisez des musiques qui amplifient les émotions. Les interviews courtes des joueurs et coachs ajoutent profondeur et authenticité. Les ralentis pour les actions brillantes. Les accélérés pour montrer l'intensité répétée des entraînements."
        },
        {
          title: "Respecter l'éthique et les permissions",
          icon: <Shield className="w-6 h-6" />,
          content: "Obtenez toujours les permissions parentales pour les mineurs. Respectez la confidentialité du club et des joueurs. Ne publiez pas de contenu sans accord. Parlez ouvertement de votre intention de partage du contenu. Créez un contrat simple expliquant les usages du contenu filmé. Cette rigueur protège toutes parties et renforce votre crédibilité professionnelle."
        }
      ],
      conclusion: "Filmer une académie n'est pas juste documenter; c'est honorer le rêve et la dedication de jeunes athlètes. Quand vous le faites avec respect et sensibilité, vos contenus deviennent des histoires inspirantes qui marquent les esprits."
    }
  },
  {
    id: 3,
    slug: '5-types-contenus-video-engagent-fans-football',
    title: '5 types de contenus vidéo qui engagent les fans de football',
    excerpt: 'Des reels au documentaires : les formats de contenu football qui performent sur les réseaux sociaux.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '5 Mars 2025',
    author: 'Bakar',
    category: 'Football Media',
    fullContent: {
      title: "5 types de contenus vidéo qui engagent les fans de football",
      intro: "À l'ère des réseaux sociaux, la durée du contenu n'est plus un critère d'engagement. Ce qui compte : l'émotion, l'authenticité et la narration. Voici 5 formats de contenu qui performent dans l'univers du football.",
      sections: [
        {
          title: "1. Les reels 15-30 secondes (Matchday Highlights)",
          icon: <Zap className="w-6 h-6" />,
          content: "Le format reines des réseaux sociaux. Montrez les meilleures actions en boucle, avec musique énergique. Commencez avec un moment fort, variez angles et vitesses. Ajoutez des textes courts: 'Golasso!', 'Quelle défense!'. Parfait pour partager immédiatement après les matchs. Publiez 2-3 reels par match sur Instagram et TikTok."
        },
        {
          title: "2. Les Player Spotlight (60-90 secondes)",
          icon: <Eye className="w-6 h-6" />,
          content: "Focus sur un joueur avec ses meilleures actions, personnalité et interview courte. Structure: introduction, highlights de jeu, citation du joueur, transition vers prochaine action. Humanisez le joueur avec ses rites pré-match ou ses encouragements aux coéquipiers. Idéal pour développer des personas et créer des connexions fan-joueur."
        },
        {
          title: "3. Les Documentary Shorts (5-15 minutes)",
          icon: <Film className="w-6 h-6" />,
          content: "Plongez dans la vie quotidienne d'un joueur, d'un coach ou d'un aspect du club. Couvrez: réveil, petit-déjeuner, entraînement, moments familiaux. Interviews intimes avec questions personnel. Montage lent et cinématographique. Musiques émotionnelles. Ces contenus créent de l'empathie profonde et changent la perception des fans sur le côté humain du sport."
        },
        {
          title: "4. Les Behind-the-Scenes de production (30-60 secondes)",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "Montrez votre processus: comment vous filmiez un match, les défis de la production, les équipements utilisés. Les fans de technologie et créateurs adorent ce contenu. 'Comment j'ai capturé ce goal?', 'Mon setup de production', 'Un jour dans la vie d'un content creator sportif'. Format plus niche mais très engageant pour une audience de créateurs."
        },
        {
          title: "5. Les Club Stories et célébrations (2-5 minutes)",
          icon: <BarChart3 className="w-6 h-6" />,
          content: "Récit du match du point de vue émotionnel: nervosité avant, intensité pendant, euphorie après. Incluez réactions authentiques, célébrations, larmes de frustration. Utilisez des transitions rapides, la musique monte progressivement. Terminé avec une vue d'ensemble de la victoire ou leçon apprises en cas de défaite. Cela crée du lien émotionnel et encourage le partage viral."
        }
      ],
      conclusion: "La clé du succès sur réseaux sociaux n'est pas la durée mais la pertinence et l'authenticité. Variez vos formats, testez, mesurez l'engagement et adaptez-vous. Les fans de football veulent se sentir partie de l'histoire, pas juste spectateurs."
    }
  },
  {
    id: 4,
    slug: 'techniques-composition-photo-portraits-joueurs',
    title: 'Techniques de composition photo pour des portraits de joueurs impactants',
    excerpt: 'Comment utiliser la lumière, le cadrage et le contexte pour des portraits authentiques et professionnels.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '28 Février 2025',
    author: 'Sophie',
    category: 'Creator Tips',
    fullContent: {
      title: "Techniques de composition photo pour des portraits de joueurs impactants",
      intro: "Le portrait d'athlète n'est pas qu'une photo technique: c'est un exercice de communication visuelle. Que ce soit en studio ou sur le terrain, certaines techniques transforment un simple portrait en image iconique qui capture l'essence du joueur.",
      sections: [
        {
          title: "Utiliser la lumière pour créer de la profondeur",
          icon: <Lightbulb className="w-6 h-6" />,
          content: "En lumière naturelle: positionnez le joueur de manière à créer des ombres intéressantes sur le visage (lumière Rembrandt: l'ombre d'un côté crée du drame). En studio: utilisez 3 sources lumière - clé (principale), fill (adoucit les ombres) et backlight (sépare du fond). L'éclairage latéral crée de la texture et du caractère. Évitez l'éclairage plat qui rend terne."
        },
        {
          title: "Règle de composition : au-delà des tiers",
          icon: <Target className="w-6 h-6" />,
          content: "Règle des tiers: placez le sujet sur les lignes ou intersections des tiers pour plus d'intérêt dynamique. Symétrie: parfois, centrer le joueur crée une puissance. Diagonales: les lignes diagonales guide l'oeil et créent du mouvement. Négatif space: laissez de l'espace au-dessus de la tête pour l'énergie et la croissance. Remplissez le cadre: éliminéz les distractions, focalisez sur le sujet."
        },
        {
          title: "Contexte vs neutralité",
          icon: <Eye className="w-6 h-6" />,
          content: "Portrait en studio: fond simple (noir, blanc, dégradé) pour maximum de focus. Fond flou (bokeh) avec stadion ou entraînement en arrière-plan: contexte subtle qui raconte qui est ce joueur. Environnement du club: stade, vestiaires, terrain - contexte fort mais doit restez secondaire. Le joueur reste le sujet principal, le contexte doit l'amplifier pas le distraire."
        },
        {
          title: "Direction du regard et émotion",
          icon: <Eye className="w-6 h-6" />,
          content: "Regard vers caméra: connexion directe avec spectateur, puissance et confiance. Regard vers côté: introspection, mystère. Regard vers le bas: contemplation, humilité. Yeux à la même hauteur que l'appareil ou légèrement en-dessous: flatteur. Demandez au joueur de penser à quelque chose de personnel (un but marqué, une famille) pour une émotion authentique dans les yeux, pas juste un sourire forcer."
        },
        {
          title: "Post-production subtile pour le portrait",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "Correction chromatique: rehaussez doucement les couleurs du maillot, peau. Netteté: augmentez légèrement la clarté des yeux. Vignettage subtle: assombrit légèrement les bords pour guider vers le centre. Désaturation sélective: si vous utilisez couleur, désaturez le fond pour plus de focus. Évitez les retouches excessives: la marque BKR Studio, c'est l'authenticité du joueur, pas une version sur-retouchée."
        }
      ],
      conclusion: "Un grand portrait d'athlète combine technique photographique solide avec understanding psychologique et émotionnel. C'est en repetant et en testant différentes approches que vous développerez votre style signature et capturerez des images qui deviennent des icônes pour les clubs."
    }
  },
  {
    id: 5,
    slug: 'production-video-match-equipement-workflow',
    title: 'Production vidéo match : équipement et workflow optimisé',
    excerpt: 'Du scouting à l\'export final, tous les étapes pour une production vidéo matchday sans faille.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '20 Février 2025',
    author: 'Bakar',
    category: 'Football Media',
    fullContent: {
      title: "Production vidéo match : équipement et workflow optimisé",
      intro: "Une couverture vidéo réussie d'un match est le résultat d'une préparation minutieuse, d'un équipement adapté et d'un workflow efficace. Voici comment organiser une production qui capture la totalité de l'événement sans stress logistique.",
      sections: [
        {
          title: "Configuration multi-caméra pour couverture complète",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "Caméra 1 (principal): position élevée côté terrain pour captures d'action générale. Caméra 2 (wide): couverture depuis le coin pour les mouvements de joueurs. Caméra 3 (détails): gros plans des réactions, interactions, détails d'équipement. Caméra 4 (drone optionnel): vues aériennes dynamiques (si autorisé). Chaque caméra doit avoir batterie et stockage suffisants indépendants pour ne pas dépendre des autres."
        },
        {
          title: "Préparation 48h avant le match",
          icon: <Target className="w-6 h-6" />,
          content: "Vérifiez les prévisions météo et adaptez réglages ISO/ouverture. Contactez le club pour permissions de filmer. Planifiez votre positionnement selon la position du terrain et du soleil. Rechargez batteries et testez équipement. Préparez feuille de coup avec spots clés à couvrir. Synchronisez horloges des caméras pour montage plus facile. Informez votre équipe (si vous en avez) de son rôle spécifique."
        },
        {
          title: "Capture du son : couche souvent oubliée",
          icon: <Zap className="w-6 h-6" />,
          content: "Microphone directionnel pour ambiance terrain (cris, sifflets, impact ballon). Microphone pour interview après match. Enregistreur portable pour prise son haute qualité en parallèle. Prise son du diffuseur si disponible. Montage sonore est 50% du ressenti final - ne négliger pas. Le contrôle du niveau sonore durant la capture sauve des heures de post-production."
        },
        {
          title: "Workflow de montage post-production",
          icon: <Film className="w-6 h-6" />,
          content: "Transfert rapide des fichiers sur disque dur haute capacité. Création de dossiers organisés par caméra et type de contenu. Prévoyé: rough cut en 2-3h (pour contenu social rapide). Edit haute qualité en 1-2 jours. Couleur grading: 4-6h (cohérence visuelle). Son design: 3-4h. Export final dans tous les formats nécessaire (Instagram, YouTube, etc). Utilisez proxies basse qualité durant le montage pour meilleure performance logicielle."
        },
        {
          title: "Liverable et distribution multi-plateforme",
          icon: <BarChart3 className="w-6 h-6" />,
          content: "Highlght 15-30s pour réseaux sociaux (jour du match). Résumé 3-5 min pour YouTube et site club. Documentaire complet 20-30 min pour archives et plateformes de streaming. Fichiers bruts pour le club (archivage). Différentes versions : avec et sans musique. Formats: 16:9 pour YouTube, 9:16 pour réels/TikTok, carré pour Instagram. Sous-titres français ET anglais pour maximum d'audience."
        }
      ],
      conclusion: "Une production vidéo de match bien exécutée devient un asset précieux : contenu social viral, archive historique pour le club, portfolio pour votre business. Investir en préparation sauve du temps en post-production et garantit la qualité finale."
    }
  },
  {
    id: 6,
    slug: 'strategie-contenu-clubs-que-filmer',
    title: 'Stratégie de contenu pour clubs : que filmer et pourquoi',
    excerpt: 'Comment définir une calendrier de contenu aligné sur les objectifs du club et les attentes des fans.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80',
    date: '15 Février 2025',
    author: 'Sophie',
    category: 'Creator Tips',
    fullContent: {
      title: "Stratégie de contenu pour clubs : que filmer et pourquoi",
      intro: "Créer du contenu sans stratégie est comme tirer sans direction. Pour un club de football, une stratégie de contenu cohérente augmente l'engagement fan, renforce la marque club et crée des connexions émotionnelles durables.",
      sections: [
        {
          title: "Définir les objectifs du contenu",
          icon: <Target className="w-6 h-6" />,
          content: "1. Engagement community: reels court, TikTok, Instagram stories pour divertir et engager quotidiennement. 2. Education: comment débuter au foot, techniques de jeu, règles pour nouveaux fans. 3. Storytelling: donner du contexte humain aux joueurs, raconter l'histoire du club. 4. Transmission: archive pour générations futures, documentation de moments clés. 5. Sponsorship activation: contenu de valeur pour sponsors, création d'assets personalisés. Chaque clip produit doit servir un objectif ou contribuer à plusieurs simultanément."
        },
        {
          title: "Calendrier éditorial saisonnier",
          icon: <BarChart3 className="w-6 h-6" />,
          content: "Pré-saison: préparation physique, arrivées de joueurs, ambition de saison. Matchs en cours: highlights quotidiens, interviews post-match, coulisses. Blessures: profil d'un joueur absent, historique de son parcours au club. Vacances hiver: contenu de nostalgie, best-of de la première moitié. Fin de saison: bilan, émotions, remerciements. Offseason: coulisses de préparation, mercato, vision pour prochaine saison. Ce cadre assure contenu cohérent et pertinent toute l'année."
        },
        {
          title: "Types de contenu à produire chaque mois",
          icon: <Clapperboard className="w-6 h-6" />,
          content: "4-6 matchday reels (30s). 2-3 player spotlights (60s). 1 documentary profond (5-10 min). 2-3 behind-the-scenes court (30-60s). 1-2 interviews de joueurs ou staff. Contenu educational si pertinent. Contenu nostalgique ou celebratory. Cela crée momentum constant sans burnout de production. Chaque semaine produit une diversité qui maintient intérêt des fans."
        },
        {
          title: "Engagement et feedback des fans",
          icon: <Eye className="w-6 h-6" />,
          content: "Lisez les commentaires et messages pour comprendre quel contenu résonne. Adaptez: si les portraits de joueurs performent, produisez-en plus. Si les behind-the-scenes engagent, priorisez l'accès. Créez des moments Q&A: 'Quel joueur voulez-vous voir en spotlight?', 'Proposez des idées de contenu'. Les fans qui co-créent deviennent des ambassadeurs. Utilisez les polls de réseaux sociaux pour diriger future production."
        },
        {
          title: "Mesure du succès et ROI du contenu",
          icon: <BarChart3 className="w-6 h-6" />,
          content: "Métriques: vues, partages, commentaires, nouveau followers, durée visionnage moyenne. Comparez format pour identifier meilleur performer. Connectez contenu aux objectifs club: plus de spectateurs à domicile? Plus de merch vendu? Membership augmentés? Tracks ces indicateurs. Budget de production justifié par résultats mesurables. Reportez mensuellement au club avec insights et recommandations."
        }
      ],
      conclusion: "Une stratégie de contenu n'est pas un plan rigide mais une direction avec flexibilité pour adapt aux réalités. Les meilleures productions football combinent planification solide avec opportunisme créatif pour capturer les moments imprévisibles qui rendent le foot magique."
    }
  }
];
