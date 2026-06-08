const DUNGEONS = [
  {
    id: 'rfc', name: 'Ragefire Chasm', abbr: 'RFC', levels: '9–15', faction: 'Horde',
    icon: '🔥', location: 'Orgrimmar, Barrens',
    quests: [
      {
        name: 'Slaying the Beast',
        prequest: '',
        startNpc: 'Neeru Fireblade', startLoc: 'Orgrimmar, The Drag',
        endNpc: 'Neeru Fireblade', endLoc: 'Orgrimmar, The Drag',
        levels: '9', xp: 1050,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1845/slaying-the-beast'
      },
      {
        name: 'The Power to Destroy...',
        prequest: '',
        startNpc: 'Varimathras', startLoc: 'Undercity, Royal Quarter',
        endNpc: 'Varimathras', endLoc: 'Undercity, Royal Quarter',
        levels: '9', xp: 1450,
        items: [],
        rewards: 'Cloth/Leather/Mail Legs',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1846/the-power-to-destroy'
      },
      {
        name: 'Testing an Enemy\'s Strength',
        prequest: '',
        startNpc: 'Rahauro', startLoc: 'Thunder Bluff, Elder Rise',
        endNpc: 'Rahauro', endLoc: 'Thunder Bluff, Elder Rise',
        levels: '9', xp: 1150,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1844/testing-an-enemys-strength'
      },
      {
        name: 'Searching for the Lost Satchel',
        prequest: '',
        startNpc: 'Grimtotem Satchel', startLoc: 'Inside RFC (drop)',
        endNpc: 'Grimtotem Satchel', endLoc: 'Inside RFC',
        levels: '9', xp: 880,
        items: [],
        rewards: '',
        notes: 'Drop quest from Maur Grimtotem',
        questLink: 'https://www.wowhead.com/classic/quest=2108/searching-for-the-lost-satchel'
      },
      {
        name: 'Hidden Enemies',
        prequest: 'Hidden Enemies prerequisite',
        startNpc: 'Thrall', startLoc: 'Orgrimmar, Valley of Wisdom',
        endNpc: 'Thrall', endLoc: 'Orgrimmar, Valley of Wisdom',
        levels: '9', xp: 1150,
        items: [],
        rewards: '',
        notes: 'Part of quest chain - requires 3 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=1898/hidden-enemies'
      }
    ]
  },
  {
    id: 'wc', name: 'Wailing Caverns', abbr: 'WC', levels: '15–24', faction: 'Horde',
    icon: '🐍', location: 'The Barrens',
    quests: [
      {
        name: 'Serpentbloom',
        prequest: '',
        startNpc: 'Apothecary Zamah', startLoc: 'Thunder Bluff, Pools of Vision',
        endNpc: 'Apothecary Zamah', endLoc: 'Thunder Bluff, Pools of Vision',
        levels: '14', xp: 1350,
        items: [],
        rewards: '',
        notes: 'Collect Serpentbloom flowers inside WC',
        questLink: 'https://www.wowhead.com/classic/quest=1485/serpentbloom'
      },
      {
        name: 'Smart Drinks',
        prequest: 'Raptor Horns',
        startNpc: 'Mebok Mizzyrix', startLoc: 'The Barrens, Ratchet',
        endNpc: 'Mebok Mizzyrix', endLoc: 'The Barrens, Ratchet',
        levels: '13', xp: 1050,
        items: [],
        rewards: '',
        notes: 'Requires Raptor Horns completion first',
        questLink: 'https://www.wowhead.com/classic/quest=1488/smart-drinks'
      },
      {
        name: 'Trouble at the Docks',
        prequest: '',
        startNpc: 'Crane Operator Bigglefuzz', startLoc: 'The Barrens, Ratchet',
        endNpc: 'Crane Operator Bigglefuzz', endLoc: 'The Barrens, Ratchet',
        levels: '14', xp: 1550,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1487/trouble-at-the-docks'
      },
      {
        name: 'Deviate Hides',
        prequest: '',
        startNpc: 'Nalpak', startLoc: 'The Barrens, Above WC entrance',
        endNpc: 'Nalpak', endLoc: 'The Barrens, Above WC entrance',
        levels: '13', xp: 1450,
        items: [],
        rewards: '',
        notes: 'Collect hides from Deviate creatures',
        questLink: 'https://www.wowhead.com/classic/quest=1489/deviate-hides'
      },
      {
        name: 'Deviate Eradication',
        prequest: '',
        startNpc: 'Ebru', startLoc: 'The Barrens, Above WC entrance',
        endNpc: 'Ebru', endLoc: 'The Barrens, Above WC entrance',
        levels: '15', xp: 1750,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1490/deviate-eradication'
      },
      {
        name: 'The Glowing Shard',
        prequest: '',
        startNpc: 'Mutanus the Devourer', startLoc: 'Inside WC (drop)',
        endNpc: 'Hamuul Runetotem', endLoc: 'Thunder Bluff, Elder Rise',
        levels: '10', xp: 1200,
        items: [],
        rewards: 'Glowing Shard',
        notes: 'Drop quest - drops from Mutanus the Devourer',
        questLink: 'https://www.wowhead.com/classic/quest=1491/the-glowing-shard'
      },
      {
        name: 'Leaders of the Fang',
        prequest: 'The Forgotten Pools quest chain',
        startNpc: 'Nara Wildmane', startLoc: 'Thunder Bluff, Elder Rise',
        endNpc: 'Nara Wildmane', endLoc: 'Thunder Bluff, Elder Rise',
        levels: '15', xp: 2550,
        items: ['Belt of the Fang', 'Robes of the Fang', 'Footpads of the Fang', 'Gloves of the Fang'],
        rewards: '',
        notes: 'Kill all 4 Fang leaders inside WC',
        questLink: 'https://www.wowhead.com/classic/quest=1495/leaders-of-the-fang'
      }
    ]
  },
  {
    id: 'deadmines', name: 'The Deadmines', abbr: 'DM', levels: '14–24', faction: 'Alliance',
    icon: '⚓', location: 'Westfall',
    quests: [
      {
        name: 'Collecting Memories',
        prequest: '',
        startNpc: 'Wilder Thistlenettle', startLoc: 'Stormwind, Dwarven District',
        endNpc: 'Wilder Thistlenettle', endLoc: 'Stormwind, Dwarven District',
        levels: '14', xp: 1350,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=168/collecting-memories'
      },
      {
        name: 'Oh Brother...',
        prequest: '',
        startNpc: 'Wilder Thistlenettle', startLoc: 'Stormwind, Dwarven District',
        endNpc: 'Wilder Thistlenettle', endLoc: 'Stormwind, Dwarven District',
        levels: '15', xp: 1650,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=169/oh-brother'
      },
      {
        name: 'Underground Assault',
        prequest: '',
        startNpc: 'Shoni the Shilent', startLoc: 'Stormwind, Dwarven District',
        endNpc: 'Shoni the Shilent', endLoc: 'Stormwind, Dwarven District',
        levels: '15', xp: 1650,
        items: ['Lavishly Jeweled Ring', 'Shoni\'s Disintegrator'],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=170/underground-assault'
      },
      {
        name: 'The Unsent Letter',
        prequest: '',
        startNpc: 'Edwin VanCleef', startLoc: 'Inside Deadmines (drop)',
        endNpc: 'Commander Springvale', endLoc: 'Westfall, Sentinel Hill',
        levels: '16', xp: 1950,
        items: [],
        rewards: 'The Unsent Letter',
        notes: 'Drop quest from Edwin VanCleef',
        questLink: 'https://www.wowhead.com/classic/quest=174/the-unsent-letter'
      },
      {
        name: 'Red Silk Bandanas',
        prequest: 'The Defias Brotherhood quest chain',
        startNpc: 'Scout Riell', startLoc: 'Westfall, Sentinel Hill',
        endNpc: 'Scout Riell', endLoc: 'Westfall, Sentinel Hill',
        levels: '14', xp: 2550,
        items: [],
        rewards: 'Red Silk Bandanas',
        notes: 'Requires 6 quests in chain starting with The Defias Brotherhood',
        questLink: 'https://www.wowhead.com/classic/quest=176/red-silk-bandanas'
      },
      {
        name: 'The Defias Brotherhood',
        prequest: 'Messenger to Stormwind',
        startNpc: 'Gryan Stoutmantle', startLoc: 'Westfall, Sentinel Hill',
        endNpc: 'Gryan Stoutmantle', endLoc: 'Westfall, Sentinel Hill',
        levels: '14', xp: 2550,
        items: [],
        rewards: '',
        notes: 'Part of long quest chain',
        questLink: 'https://www.wowhead.com/classic/quest=163/the-defias-brotherhood'
      },
      {
        name: 'The Test of Righteousness',
        prequest: 'Tome of Valor quest chain',
        startNpc: 'Jordan Stilwell', startLoc: 'Ironforge, inside Gates',
        endNpc: 'Jordan Stilwell', endLoc: 'Ironforge',
        levels: '20', xp: 3200,
        items: ['Paladin-specific reward'],
        rewards: '',
        notes: 'Paladin Only - Part of Tome of Valor chain',
        questLink: 'https://www.wowhead.com/classic/quest=1575/the-test-of-righteousness'
      }
    ]
  },
  {
    id: 'sfk', name: 'Shadowfang Keep', abbr: 'SFK', levels: '18–30', faction: 'Horde',
    icon: '🐺', location: 'Silverpine Forest',
    quests: [
      {
        name: 'The Book of Ur',
        prequest: '',
        startNpc: 'Keeper Bel\'dugur', startLoc: 'Undercity, Apothecarium',
        endNpc: 'Keeper Bel\'dugur', endLoc: 'Undercity, Apothecarium',
        levels: '16', xp: 1650,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=1640/the-book-of-ur'
      },
      {
        name: 'Deathstalkers in Shadowfang',
        prequest: '',
        startNpc: 'High Executor Hadrec', startLoc: 'Silverpine Forest, Sepulcher',
        endNpc: 'High Executor Hadrec', endLoc: 'Silverpine Forest, Sepulcher',
        levels: '18', xp: 1850,
        items: [],
        rewards: '',
        notes: 'Rescue Deathstalkers inside SFK',
        questLink: 'https://www.wowhead.com/classic/quest=1644/deathstalkers-in-shadowfang'
      },
      {
        name: 'Arugal Must Die',
        prequest: '',
        startNpc: 'Dalar Dawnweaver', startLoc: 'Silverpine Forest, Sepulcher',
        endNpc: 'Dalar Dawnweaver', endLoc: 'Silverpine Forest, Sepulcher',
        levels: '18', xp: 2300,
        items: [],
        rewards: 'Silverlaine\'s Family Seal, Commander\'s Crest',
        notes: 'Kill Archmage Arugal',
        questLink: 'https://www.wowhead.com/classic/quest=1641/arugal-must-die'
      },
      {
        name: 'The Orb of Soran\'ruk',
        prequest: '',
        startNpc: 'Doan Karhan', startLoc: 'The Barrens, Near Camp Taurajo',
        endNpc: 'Doan Karhan', endLoc: 'The Barrens',
        levels: '20', xp: 2100,
        items: [],
        rewards: '',
        notes: 'Warlock Only',
        questLink: 'https://www.wowhead.com/classic/quest=1656/the-orb-of-sorankruk'
      },
      {
        name: 'The Test of Righteousness',
        prequest: 'Tome of Valor quest chain',
        startNpc: 'Jordan Stilwell', startLoc: 'Ironforge, inside Gates',
        endNpc: 'Jordan Stilwell', endLoc: 'Ironforge',
        levels: '20', xp: 3200,
        items: [],
        rewards: '',
        notes: 'Paladin Only - Tome of Valor chain',
        questLink: 'https://www.wowhead.com/classic/quest=1575/the-test-of-righteousness'
      }
    ]
  },
  {
    id: 'bfd', name: 'Blackfathom Deeps', abbr: 'BFD', levels: '17–32', faction: 'Both',
    icon: '🌊', location: 'Ashenvale',
    quests: [
      {
        name: 'The Essence of Aku\'Mai',
        prequest: '',
        startNpc: 'Je\'neu Sancrea', startLoc: 'Ashenvale, Zoram\'gar Outpost',
        endNpc: 'Je\'neu Sancrea', endLoc: 'Ashenvale, Zoram\'gar Outpost',
        levels: '17', xp: 1950,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=1437/the-essence-of-akumai'
      },
      {
        name: 'Blackfathom Villainy',
        prequest: 'In Search of Thaelrid (Alliance) or direct (Horde)',
        startNpc: 'Argent Guard Thaelrid', startLoc: 'Inside BFD',
        endNpc: 'Argent Guard Thaelrid', endLoc: 'Inside BFD',
        levels: '18', xp: 2100,
        items: [],
        rewards: '',
        notes: 'Inside dungeon quest',
        questLink: 'https://www.wowhead.com/classic/quest=1435/blackfathom-villainy'
      },
      {
        name: 'Amongst the Ruins',
        prequest: '',
        startNpc: 'Je\'neu Sancrea', startLoc: 'Ashenvale, Zoram\'gar Outpost',
        endNpc: 'Je\'neu Sancrea', endLoc: 'Ashenvale, Zoram\'gar Outpost',
        levels: '21', xp: 2500,
        items: [],
        rewards: '',
        notes: 'Horde only. Summons Baron Aquanis when Fathom Core picked up',
        questLink: 'https://www.wowhead.com/classic/quest=1438/amongst-the-ruins'
      },
      {
        name: 'Baron Aquanis',
        prequest: 'Strange Water Globe drop',
        startNpc: 'Baron Aquanis', startLoc: 'Inside BFD (drop)',
        endNpc: 'Je\'neu Sancrea', endLoc: 'Ashenvale, Zoram\'gar Outpost',
        levels: '21', xp: 2800,
        items: [],
        rewards: '',
        notes: 'Drop quest - drops from Baron Aquanis',
        questLink: 'https://www.wowhead.com/classic/quest=1440/baron-aquanis'
      },
      {
        name: 'Knowledge in the Deeps',
        prequest: '',
        startNpc: 'Gerrig Bonegrip', startLoc: 'Ironforge, Forlorn Cave',
        endNpc: 'Gerrig Bonegrip', endLoc: 'Ironforge',
        levels: '10', xp: 1650,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=1441/knowledge-in-the-deeps'
      },
      {
        name: 'Researching the Corruption',
        prequest: '',
        startNpc: 'Gershala Nightwhisper', startLoc: 'Darkshore, Auberdine',
        endNpc: 'Gershala Nightwhisper', endLoc: 'Darkshore',
        levels: '18', xp: 1950,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=1443/researching-the-corruption'
      },
      {
        name: 'Twilight Falls',
        prequest: '',
        startNpc: 'Argent Guard Manados', startLoc: 'Darnassas, Craftsman\'s Terrace',
        endNpc: 'Argent Guard Manados', endLoc: 'Darnassas',
        levels: '20', xp: 2300,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=1444/twilight-falls'
      },
      {
        name: 'In Search of Thaelrid',
        prequest: '',
        startNpc: 'Dawnwatcher Shaedlass', startLoc: 'Darnassas, Craftsman\'s Terrace',
        endNpc: 'Dawnwatcher Shaedlass', endLoc: 'Darnassas',
        levels: '18', xp: 1850,
        items: [],
        rewards: '',
        notes: 'Alliance only - prerequisite to Blackfathom Villainy',
        questLink: 'https://www.wowhead.com/classic/quest=1433/in-search-of-thaelrid'
      },
      {
        name: 'The Orb of Soran\'ruk',
        prequest: '',
        startNpc: 'Doan Karhan', startLoc: 'The Barrens, Near Camp Taurajo',
        endNpc: 'Doan Karhan', endLoc: 'The Barrens',
        levels: '20', xp: 2100,
        items: [],
        rewards: '',
        notes: 'Warlock Only',
        questLink: 'https://www.wowhead.com/classic/quest=1656/the-orb-of-sorankruk'
      },
      {
        name: 'Allegiance to the Old Gods',
        prequest: 'Damp Note drop',
        startNpc: 'Damp Note', startLoc: 'Outside BFD (drop)',
        endNpc: 'Aqual Summoner', endLoc: 'Inside BFD',
        levels: '17', xp: 2000,
        items: [],
        rewards: '',
        notes: 'Drop quest - low drop rate from Blackfathom Tide Priestess',
        questLink: 'https://www.wowhead.com/classic/quest=1426/allegiance-to-the-old-gods'
      }
    ]
  },
  {
    id: 'stockades', name: 'The Stockades', abbr: 'Stocks', levels: '22–30', faction: 'Alliance',
    icon: '⛓', location: 'Stormwind City',
    quests: [
      {
        name: 'Quell The Uprising',
        prequest: '',
        startNpc: 'Warden Thelwater', startLoc: 'Stormwind, Outside Stockades',
        endNpc: 'Warden Thelwater', endLoc: 'Stormwind',
        levels: '22', xp: 2050,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=220/quell-the-uprising'
      },
      {
        name: 'The Color of Blood',
        prequest: '',
        startNpc: 'Nikova Raskol', startLoc: 'Inside Stockades (patrols)',
        endNpc: 'Warden Thelwater', endLoc: 'Stormwind',
        levels: '22', xp: 2200,
        items: ['Basalt Ring of Might', 'Seal of Wrynn'],
        rewards: '',
        notes: 'Pick up inside dungeon from patrolling NPC',
        questLink: 'https://www.wowhead.com/classic/quest=221/the-color-of-blood'
      },
      {
        name: 'Crime and Punishment',
        prequest: '',
        startNpc: 'Councilman Millstipe', startLoc: 'Duskwood, Darkshire',
        endNpc: 'Councilman Millstipe', endLoc: 'Duskwood',
        levels: '22', xp: 1900,
        items: [],
        rewards: 'Councilman\'s Cloak, Darkshire Mail Leggings',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=222/crime-and-punishment'
      },
      {
        name: 'What Comes Around...',
        prequest: '',
        startNpc: 'Guard Berton', startLoc: 'Redridge Mountains, Lakeshire',
        endNpc: 'Guard Berton', endLoc: 'Redridge Mountains',
        levels: '22', xp: 1950,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=224/what-comes-around'
      },
      {
        name: 'The Fury Runs Deep',
        prequest: 'The Dark Iron War',
        startNpc: 'Motley Garmason', startLoc: 'Wetlands, Dun Modr',
        endNpc: 'Motley Garmason', endLoc: 'Wetlands',
        levels: '25', xp: 2600,
        items: [],
        rewards: '',
        notes: 'Requires The Dark Iron War completion',
        questLink: 'https://www.wowhead.com/classic/quest=275/the-fury-runs-deep'
      },
      {
        name: 'The Stockade Riots',
        prequest: 'The Unsent Letter from Deadmines',
        startNpc: 'Warden Thelwater', startLoc: 'Stormwind, Outside Stockades',
        endNpc: 'Warden Thelwater', endLoc: 'Stormwind',
        levels: '16', xp: 1850,
        items: [],
        rewards: '',
        notes: 'Requires The Unsent Letter quest completion from Deadmines',
        questLink: 'https://www.wowhead.com/classic/quest=278/the-stockade-riots'
      }
    ]
  },
  {
    id: 'rfk', name: 'Razorfen Kraul', abbr: 'RFK', levels: '25–35', faction: 'Both',
    icon: '🐗', location: 'The Barrens',
    quests: [
      {
        name: 'A Vengeful Fate',
        prequest: '',
        startNpc: 'Auld Stonespire', startLoc: 'Thunder Bluff, Near Main Lift',
        endNpc: 'Auld Stonespire', endLoc: 'Thunder Bluff',
        levels: '29', xp: 2800,
        items: [],
        rewards: '',
        notes: 'Collect items from RFK',
        questLink: 'https://www.wowhead.com/classic/quest=1948/a-vengeful-fate'
      },
      {
        name: 'Going, Going, Guano!',
        prequest: '',
        startNpc: 'Master Apothecary Faranell', startLoc: 'Undercity, The Apothecarium',
        endNpc: 'Master Apothecary Faranell', endLoc: 'Undercity',
        levels: '30', xp: 3300,
        items: [],
        rewards: '',
        notes: 'Prerequisite for SM quest Hearts of Zeal',
        questLink: 'https://www.wowhead.com/classic/quest=1713/going-going-guano'
      },
      {
        name: 'An Unholy Alliance',
        prequest: '',
        startNpc: 'Small Scroll', startLoc: 'Inside RFK (drop)',
        endNpc: 'Small Scroll', endLoc: 'Inside RFK',
        levels: '28', xp: 2600,
        items: [],
        rewards: '',
        notes: 'Drop from Charlga Razorflank - prerequisite for RFD An Unholy Alliance',
        questLink: 'https://www.wowhead.com/classic/quest=1949/an-unholy-alliance'
      },
      {
        name: 'The Crone of the Kraul',
        prequest: 'Lonebrow\'s Journal',
        startNpc: 'Falfindel Waywarder', startLoc: 'Feralas, The Lower Wilds',
        endNpc: 'Falfindel Waywarder', endLoc: 'Feralas',
        levels: '29', xp: 2700,
        items: [],
        rewards: 'The Crone\'s Shawl',
        notes: 'Requires Lonebrow\'s Journal completion',
        questLink: 'https://www.wowhead.com/classic/quest=1950/the-crone-of-the-kraul'
      },
      {
        name: 'Mortality Wanes',
        prequest: '',
        startNpc: 'Heralath Fallowbrook', startLoc: 'Inside RFK',
        endNpc: 'Heralath Fallowbrook', endLoc: 'Inside RFK',
        levels: '25', xp: 2550,
        items: [],
        rewards: '',
        notes: 'Inside dungeon quest',
        questLink: 'https://www.wowhead.com/classic/quest=1951/mortality-wanes'
      },
      {
        name: 'Blueleaf Tubers',
        prequest: '',
        startNpc: 'Mebok Mizzyrix', startLoc: 'The Barrens, Ratchet',
        endNpc: 'Mebok Mizzyrix', endLoc: 'The Barrens',
        levels: '20', xp: 1850,
        items: [],
        rewards: '',
        notes: 'Horde only - collect items near Mizzyrix',
        questLink: 'https://www.wowhead.com/classic/quest=1952/blueleaf-tubers'
      },
      {
        name: 'Willix the Importer',
        prequest: '',
        startNpc: 'Willix the Importer', startLoc: 'Inside RFK (tent)',
        endNpc: 'Willix the Importer', endLoc: 'The Barrens, Ratchet',
        levels: '22', xp: 1700,
        items: [],
        rewards: '',
        notes: 'Escort quest - in-dungeon start',
        questLink: 'https://www.wowhead.com/classic/quest=1953/willix-the-importer'
      }
    ]
  },
  {
    id: 'gnomer', name: 'Gnomeregan', abbr: 'Gnomer', levels: '24–34', faction: 'Alliance',
    icon: '⚙️', location: 'Dun Morogh',
    quests: [
      {
        name: 'Rig Wars',
        prequest: '',
        startNpc: 'Nogg', startLoc: 'Orgrimmar, Valley of Honor',
        endNpc: 'Nogg', endLoc: 'Orgrimmar',
        levels: '25', xp: 2100,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=2283/rig-wars'
      },
      {
        name: 'Chief Engineer Scooty',
        prequest: 'Rig Wars',
        startNpc: 'Sovik', startLoc: 'Orgrimmar, Valley of Honor',
        endNpc: 'Sovik', endLoc: 'Orgrimmar',
        levels: '20', xp: 1850,
        items: [],
        rewards: '',
        notes: 'Must pick up Rig Wars first',
        questLink: 'https://www.wowhead.com/classic/quest=2284/chief-engineer-scooty'
      },
      {
        name: 'Gnomer-gooooone!',
        prequest: '',
        startNpc: 'Scooty', startLoc: 'Strangethorn Vale, Booty Bay',
        endNpc: 'Scooty', endLoc: 'Booty Bay',
        levels: '20', xp: 1900,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2285/gnomer-gooooone'
      },
      {
        name: 'Save Techbot\'s Brain!',
        prequest: '',
        startNpc: 'Tinkmaster Overspark', startLoc: 'Ironforge, Tinkertown',
        endNpc: 'Tinkmaster Overspark', endLoc: 'Ironforge',
        levels: '20', xp: 1850,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2286/save-techbots-brain'
      },
      {
        name: 'Gyrodrillmatic Excavationators',
        prequest: '',
        startNpc: 'Shoni the Shilent', startLoc: 'Stormwind, Dwarven Quarter',
        endNpc: 'Shoni the Shilent', endLoc: 'Stormwind',
        levels: '20', xp: 1850,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2287/gyrodrillmatic-excavationators'
      },
      {
        name: 'Essential Artificials',
        prequest: '',
        startNpc: 'Klockmort Spannerspan', startLoc: 'Ironforge, Tinkertown',
        endNpc: 'Klockmort Spannerspan', endLoc: 'Ironforge',
        levels: '24', xp: 2350,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2288/essential-artificials'
      },
      {
        name: 'Data Rescue',
        prequest: '',
        startNpc: 'Master Mechanic Castpipe', startLoc: 'Ironforge, Tinkertown',
        endNpc: 'Master Mechanic Castpipe', endLoc: 'Ironforge',
        levels: '25', xp: 2500,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2289/data-rescue'
      },
      {
        name: 'The Grand Betrayal',
        prequest: '',
        startNpc: 'High Tinker Mekkatorque', startLoc: 'Ironforge, Tinkertown',
        endNpc: 'High Tinker Mekkatorque', endLoc: 'Ironforge',
        levels: '25', xp: 2650,
        items: ['Mekgineer\'s Chopper', 'Crown of Endless Wisdom'],
        rewards: '',
        notes: 'Kill Mekgineer Thermaplugg',
        questLink: 'https://www.wowhead.com/classic/quest=2290/the-grand-betrayal'
      },
      {
        name: 'Gnogaine',
        prequest: '',
        startNpc: 'Ozzie Togglevolt', startLoc: 'Dun Morogh, Kharanos',
        endNpc: 'Ozzie Togglevolt', endLoc: 'Dun Morogh',
        levels: '20', xp: 1850,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2291/gnogaine'
      },
      {
        name: 'The Only Cure is More Green Glow',
        prequest: 'Gnogaine',
        startNpc: 'Ozzie Togglevolt', startLoc: 'Dun Morogh, Kharanos',
        endNpc: 'Ozzie Togglevolt', endLoc: 'Dun Morogh',
        levels: '20', xp: 2100,
        items: [],
        rewards: '',
        notes: 'Complete Gnogaine first',
        questLink: 'https://www.wowhead.com/classic/quest=2292/the-only-cure-is-more-green-glow'
      },
      {
        name: 'The Sparklematic 5200!',
        prequest: '',
        startNpc: 'Grime-Encrusted Object', startLoc: 'Inside Gnomeregan',
        endNpc: 'Grime-Encrusted Object', endLoc: 'Inside Gnomeregan',
        levels: '25', xp: 2300,
        items: [],
        rewards: '',
        notes: 'Horde only - need Grime-Encrusted Object',
        questLink: 'https://www.wowhead.com/classic/quest=2293/the-sparklematic-5200'
      },
      {
        name: 'A Fine Mess',
        prequest: '',
        startNpc: 'Kernobee', startLoc: 'Inside Gnomeregan',
        endNpc: 'Scooty', endLoc: 'Booty Bay',
        levels: '20', xp: 1700,
        items: [],
        rewards: '',
        notes: 'Escort quest - inside dungeon',
        questLink: 'https://www.wowhead.com/classic/quest=2294/a-fine-mess'
      },
      {
        name: 'Grime-Encrusted Ring',
        prequest: '',
        startNpc: 'Grime-Encrusted Ring', startLoc: 'Inside Gnomeregan (drop)',
        endNpc: 'Talvash del Kissel', endLoc: 'Ironforge, Mystic Ward',
        levels: '28', xp: 2650,
        items: ['Talvash\'s Enhancing Necklace', 'Talvash\'s Gold Ring'],
        rewards: '',
        notes: 'Drop quest - starts Return of the Ring chain',
        questLink: 'https://www.wowhead.com/classic/quest=2295/grime-encrusted-ring'
      }
    ]
  },
  {
    id: 'sm', name: 'Scarlet Monastery', abbr: 'SM', levels: '33–45', faction: 'Both',
    icon: '⛪', location: 'Tirisfal Glades',
    quests: [
      {
        name: 'Into The Scarlet Monastery',
        prequest: '',
        startNpc: 'Varimathras', startLoc: 'Undercity, Royal Quarter',
        endNpc: 'Varimathras', endLoc: 'Undercity',
        levels: '33', xp: 3100,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=1719/into-the-scarlet-monastery'
      },
      {
        name: 'In the Name of the Light',
        prequest: 'Brother Anton quest chain',
        startNpc: 'Raleigh the Devout', startLoc: 'Hillsbrad Foothills, Southshore',
        endNpc: 'Raleigh the Devout', endLoc: 'Hillsbrad Foothills',
        levels: '34', xp: 3600,
        items: ['Raleigh\'s Helm of Faith', 'The Pacifier', 'Mograine\'s Might'],
        rewards: '',
        notes: 'Alliance only - requires quest chain',
        questLink: 'https://www.wowhead.com/classic/quest=1720/in-the-name-of-the-light'
      },
      {
        name: 'Vorrel\'s Revenge',
        prequest: '',
        startNpc: 'Vorrel Sengutz', startLoc: 'Inside SM, Graveyard',
        endNpc: 'Vorrel Sengutz', endLoc: 'Inside SM',
        levels: '25', xp: 2750,
        items: ['Headmaster\'s Charge', 'Whitemane\'s Chapeau'],
        rewards: '',
        notes: 'Pick up inside dungeon',
        questLink: 'https://www.wowhead.com/classic/quest=1715/vorrels-revenge'
      },
      {
        name: 'Hearts of Zeal',
        prequest: 'Going, Going, Guano!',
        startNpc: 'Master Apothecary Faranell', startLoc: 'Undercity, The Apothecarium',
        endNpc: 'Master Apothecary Faranell', endLoc: 'Undercity',
        levels: '30', xp: 3300,
        items: [],
        rewards: '',
        notes: 'Horde only - requires RFK quest completion',
        questLink: 'https://www.wowhead.com/classic/quest=1716/hearts-of-zeal'
      },
      {
        name: 'Compendium of the Fallen',
        prequest: '',
        startNpc: 'Sage Truthseeker', startLoc: 'Thunder Bluff, First Rise',
        endNpc: 'Sage Truthseeker', endLoc: 'Thunder Bluff',
        levels: '28', xp: 2850,
        items: [],
        rewards: '',
        notes: 'Undead cannot pick up',
        questLink: 'https://www.wowhead.com/classic/quest=1717/compendium-of-the-fallen'
      },
      {
        name: 'Test of Lore',
        prequest: 'Test of Faith quest chain',
        startNpc: 'Parqual Fintallas', startLoc: 'Undercity, The Apothecarium',
        endNpc: 'Parqual Fintallas', endLoc: 'Undercity',
        levels: '25', xp: 2200,
        items: [],
        rewards: 'Wand of Vibrant Shards',
        notes: 'Requires 6 quests in chain',
        questLink: 'https://www.wowhead.com/classic/quest=1721/test-of-lore'
      },
      {
        name: 'Mythology of the Titans',
        prequest: '',
        startNpc: 'Librarian Mae Paledust', startLoc: 'Ironforge, Hall of Explorers',
        endNpc: 'Librarian Mae Paledust', endLoc: 'Ironforge',
        levels: '28', xp: 2650,
        items: [],
        rewards: '',
        notes: 'Alliance only - collect book from SM Library',
        questLink: 'https://www.wowhead.com/classic/quest=1718/mythology-of-the-titans'
      },
      {
        name: 'Rituals of Power',
        prequest: 'Journey to the Marsh chain',
        startNpc: 'Magus Tirth', startLoc: 'Thousand Needles, Shimmering Flats',
        endNpc: 'Magus Tirth', endLoc: 'Thousand Needles',
        levels: '30', xp: 3000,
        items: [],
        rewards: 'Plans: Demon Forged Breastplate',
        notes: 'Mage Only - requires 3 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=1722/rituals-of-power'
      }
    ]
  },
  {
    id: 'rfd', name: 'Razorfen Downs', abbr: 'RFD', levels: '35–46', faction: 'Both',
    icon: '💀', location: 'The Barrens',
    quests: [
      {
        name: 'Bring the End',
        prequest: '',
        startNpc: 'Andrew Brownell', startLoc: 'Undercity, Magic Quarter',
        endNpc: 'Andrew Brownell', endLoc: 'Undercity',
        levels: '37', xp: 3400,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2062/bring-the-end'
      },
      {
        name: 'An Unholy Alliance',
        prequest: 'An Unholy Alliance from RFK',
        startNpc: 'Varimathras', startLoc: 'Undercity, Royal Quarter',
        endNpc: 'Varimathras', endLoc: 'Undercity',
        levels: '28', xp: 2500,
        items: [],
        rewards: '',
        notes: 'Requires RFK quest completion',
        questLink: 'https://www.wowhead.com/classic/quest=2063/an-unholy-alliance'
      },
      {
        name: 'Bring the Light',
        prequest: '',
        startNpc: 'Archbishop Benedictus', startLoc: 'Stormwind, Cathedral',
        endNpc: 'Archbishop Benedictus', endLoc: 'Stormwind',
        levels: '39', xp: 3800,
        items: [],
        rewards: 'Sword of Omen, Paladin\'s Hammer',
        notes: 'Alliance only - kill Amnennar',
        questLink: 'https://www.wowhead.com/classic/quest=2064/bring-the-light'
      },
      {
        name: 'A Host of Evil',
        prequest: '',
        startNpc: 'Myriam Moonsinger', startLoc: 'The Barrens, Outside RFD',
        endNpc: 'Myriam Moonsinger', endLoc: 'The Barrens',
        levels: '28', xp: 3100,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=2065/a-host-of-evil'
      },
      {
        name: 'Scourge of the Downs',
        prequest: '',
        startNpc: 'Belnistrasz', startLoc: 'Inside RFD, Murder Pens',
        endNpc: 'Belnistrasz', endLoc: 'Inside RFD',
        levels: '32', xp: 3200,
        items: [],
        rewards: '',
        notes: 'Inside dungeon - entire party should complete before moving on',
        questLink: 'https://www.wowhead.com/classic/quest=2066/scourge-of-the-downs'
      },
      {
        name: 'Extinguishing the Idol',
        prequest: 'Scourge of the Downs',
        startNpc: 'Belnistrasz', startLoc: 'Inside RFD, Murder Pens',
        endNpc: 'Belnistrasz', endLoc: 'Inside RFD',
        levels: '32', xp: 2800,
        items: [],
        rewards: '',
        notes: 'Escort quest - entire party must complete Scourge first',
        questLink: 'https://www.wowhead.com/classic/quest=2067/extinguishing-the-idol'
      }
    ]
  },
  {
    id: 'uldaman', name: 'Uldaman', abbr: 'Ulda', levels: '37–52', faction: 'Both',
    icon: '🪨', location: 'Badlands',
    quests: [
      {
        name: 'Reclaimed Treasures',
        prequest: '',
        startNpc: 'Patrick Garrett', startLoc: 'Undercity, Center',
        endNpc: 'Patrick Garrett', endLoc: 'Undercity',
        levels: '33', xp: 3100,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=2322/reclaimed-treasures'
      },
      {
        name: 'Uldaman Reagent Run',
        prequest: 'Badlands Reagent Run',
        startNpc: 'Jarkal Mossmeld', startLoc: 'Badlands, Kargath',
        endNpc: 'Jarkal Mossmeld', endLoc: 'Badlands',
        levels: '36', xp: 2900,
        items: [],
        rewards: '',
        notes: 'Requires Badlands Reagent Run completion',
        questLink: 'https://www.wowhead.com/classic/quest=2323/uldaman-reagent-run'
      },
      {
        name: 'Necklace Recovery',
        prequest: '',
        startNpc: 'Shattered Necklace', startLoc: 'Badlands, Outside Uldaman',
        endNpc: 'Shattered Necklace', endLoc: 'Badlands',
        levels: '37', xp: 3300,
        items: [],
        rewards: '',
        notes: 'Drop quest from Shadowforge or Shadowvault mobs',
        questLink: 'https://www.wowhead.com/classic/quest=2324/necklace-recovery'
      },
      {
        name: 'Reclaimed Treasures',
        prequest: '',
        startNpc: 'Krom Stoutarm', startLoc: 'Ironforge, Hall of Explorers',
        endNpc: 'Krom Stoutarm', endLoc: 'Ironforge',
        levels: '33', xp: 3100,
        items: [],
        rewards: 'Lorekeeper\'s Ring, Prospector\'s Pads',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=2325/reclaimed-treasures'
      },
      {
        name: 'The Lost Dwarves',
        prequest: '',
        startNpc: 'Prospector Stormpike', startLoc: 'Ironforge, Hall of Explorers',
        endNpc: 'Prospector Stormpike', endLoc: 'Ironforge',
        levels: '35', xp: 3200,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=2326/the-lost-dwarves'
      },
      {
        name: 'The Hidden Chamber',
        prequest: 'The Lost Dwarves',
        startNpc: 'Baelog\'s Journal', startLoc: 'Inside Uldaman',
        endNpc: 'Baelog\'s Journal', endLoc: 'Inside Uldaman',
        levels: '35', xp: 2850,
        items: [],
        rewards: '',
        notes: 'Requires The Lost Dwarves completion',
        questLink: 'https://www.wowhead.com/classic/quest=2327/the-hidden-chamber'
      },
      {
        name: 'Uldaman Reagent Run',
        prequest: 'Badlands Reagent Run',
        startNpc: 'Ghak Healtouch', startLoc: 'Loch Modan, Thelsamar',
        endNpc: 'Ghak Healtouch', endLoc: 'Loch Modan',
        levels: '38', xp: 3100,
        items: [],
        rewards: '',
        notes: 'Alliance only - requires Badlands Reagent Run',
        questLink: 'https://www.wowhead.com/classic/quest=2328/uldaman-reagent-run'
      },
      {
        name: 'Agmond\'s Fate',
        prequest: 'Ironband Wants You! chain',
        startNpc: 'Prospector Ironband', startLoc: 'Loch Modan, Ironband\'s Excavation',
        endNpc: 'Prospector Ironband', endLoc: 'Loch Modan',
        levels: '33', xp: 2700,
        items: [],
        rewards: '',
        notes: 'Requires 3 prior quests starting with Ironband Wants You!',
        questLink: 'https://www.wowhead.com/classic/quest=2329/agmonds-fate'
      },
      {
        name: 'The Lost Tablets of Will',
        prequest: 'A Sign of Hope chain',
        startNpc: 'Advisor Belgrum', startLoc: 'Ironforge, Hall of Explorers',
        endNpc: 'Advisor Belgrum', endLoc: 'Ironforge',
        levels: '30', xp: 2400,
        items: [],
        rewards: '',
        notes: 'Requires 8 prior quests starting with A Sign of Hope',
        questLink: 'https://www.wowhead.com/classic/quest=2330/the-lost-tablets-of-will'
      },
      {
        name: 'The Shattered Necklace',
        prequest: '',
        startNpc: 'Shattered Necklace', startLoc: 'Badlands, Outside Uldaman',
        endNpc: 'Shattered Necklace', endLoc: 'Badlands',
        levels: '37', xp: 3300,
        items: [],
        rewards: '',
        notes: 'Drop quest from Shadowforge or Shadowvault mobs',
        questLink: 'https://www.wowhead.com/classic/quest=2331/the-shattered-necklace'
      },
      {
        name: 'Power Stones',
        prequest: '',
        startNpc: 'Rigglefuzz', startLoc: 'Badlands, Central',
        endNpc: 'Rigglefuzz', endLoc: 'Badlands',
        levels: '30', xp: 2850,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=2418/power-stones'
      },
      {
        name: 'Solution to Doom',
        prequest: '',
        startNpc: 'Theldurin the Lost', startLoc: 'Badlands, Southern',
        endNpc: 'Theldurin the Lost', endLoc: 'Badlands',
        levels: '30', xp: 2700,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=2419/solution-to-doom'
      },
      {
        name: 'The Platinum Discs',
        prequest: '',
        startNpc: 'Object in room after Archaedas', startLoc: 'Inside Uldaman',
        endNpc: 'Object', endLoc: 'Inside Uldaman',
        levels: '40', xp: 5100,
        items: [],
        rewards: '',
        notes: 'Pick up after defeating Archaedas',
        questLink: 'https://www.wowhead.com/classic/quest=2420/the-platinum-discs'
      },
      {
        name: 'Power in Uldaman',
        prequest: 'Return to the Marsh chain',
        startNpc: 'Tabetha', startLoc: 'Dustwallow Marsh, N. of Stonemaul',
        endNpc: 'Tabetha', endLoc: 'Dustwallow Marsh',
        levels: '35', xp: 3100,
        items: [],
        rewards: '',
        notes: 'Mage Only - requires 3 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=2421/power-in-uldaman'
      }
    ]
  },
  {
    id: 'zf', name: 'Zul\'Farrak', abbr: 'ZF', levels: '40–54', faction: 'Both',
    icon: '🏺', location: 'Tanaris',
    quests: [
      {
        name: 'The Spider God',
        prequest: 'Venom Bottles chain',
        startNpc: 'Master Gadrin', startLoc: 'Durotar, Sen\'jin Village',
        endNpc: 'Master Gadrin', endLoc: 'Durotar',
        levels: '40', xp: 4800,
        items: [],
        rewards: '',
        notes: 'Requires 3 prior quests starting with Venom Bottles',
        questLink: 'https://www.wowhead.com/classic/quest=2752/the-spider-god'
      },
      {
        name: 'Nekrum\'s Medallion',
        prequest: 'Witherbark Cages chain',
        startNpc: 'Thadius Grimshade', startLoc: 'Blasted Lands, Nethergarde Keep',
        endNpc: 'Thadius Grimshade', endLoc: 'Blasted Lands',
        levels: '40', xp: 5100,
        items: [],
        rewards: '',
        notes: 'Requires 3 prior quests starting with Witherbark Cages',
        questLink: 'https://www.wowhead.com/classic/quest=2753/nekrums-medallion'
      },
      {
        name: 'Divino-matic Rod',
        prequest: '',
        startNpc: 'Chief Engineer Bilgewhizzle', startLoc: 'Tanaris, Gadgetzan',
        endNpc: 'Chief Engineer Bilgewhizzle', endLoc: 'Tanaris',
        levels: '40', xp: 4600,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2754/divino-matic-rod'
      },
      {
        name: 'Scarab Shells',
        prequest: '',
        startNpc: 'Tran\'rek', startLoc: 'Tanaris, Gadgetzan',
        endNpc: 'Tran\'rek', endLoc: 'Tanaris',
        levels: '40', xp: 4800,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2755/scarab-shells'
      },
      {
        name: 'Troll Temper',
        prequest: '',
        startNpc: 'Trenton Lighthammer', startLoc: 'Tanaris, Gadgetzan',
        endNpc: 'Trenton Lighthammer', endLoc: 'Tanaris',
        levels: '40', xp: 5200,
        items: ['Sang\'thraze the Deflector', 'Jang\'thraze the Protector', 'Sul\'thraze the Lasher'],
        rewards: '',
        notes: 'Combine swords for legendary weapon',
        questLink: 'https://www.wowhead.com/classic/quest=2756/troll-temper'
      },
      {
        name: 'Tiara of the Deep',
        prequest: '',
        startNpc: 'Tabetha', startLoc: 'Dustwallow Marsh, N. of Stonemaul',
        endNpc: 'Tabetha', endLoc: 'Dustwallow Marsh',
        levels: '40', xp: 4900,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2757/tiara-of-the-deep'
      },
      {
        name: 'Gahz\'rilla',
        prequest: '',
        startNpc: 'Wizzle Brassbolts', startLoc: 'Thousand Needles, Shimmering Flats',
        endNpc: 'Wizzle Brassbolts', endLoc: 'Thousand Needles',
        levels: '40', xp: 5800,
        items: ['Gahz\'rilla Scale Armor', 'Gahz\'rilla Fang'],
        rewards: '',
        notes: 'Requires Mallet of Zul\'Farrak to summon boss',
        questLink: 'https://www.wowhead.com/classic/quest=2758/gahzrilla'
      },
      {
        name: 'The Prophecy of Mosh\'aru',
        prequest: 'Screecher Spirits',
        startNpc: 'Yeh\'kinya', startLoc: 'Tanaris, Steamwheedle Port',
        endNpc: 'Yeh\'kinya', endLoc: 'Tanaris',
        levels: '40', xp: 5000,
        items: [],
        rewards: '',
        notes: 'Requires Screecher Spirits completion',
        questLink: 'https://www.wowhead.com/classic/quest=2759/the-prophecy-of-mosaru'
      }
    ]
  },
  {
    id: 'mara', name: 'Maraudon', abbr: 'Mara', levels: '41–55', faction: 'Both',
    icon: '🌿', location: 'Desolace',
    quests: [
      {
        name: 'Shadowshard Fragments',
        prequest: '',
        startNpc: 'Uthel\'nay', startLoc: 'Orgrimmar, Valley of Spirits',
        endNpc: 'Uthel\'nay', endLoc: 'Orgrimmar',
        levels: '39', xp: 4100,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=2878/shadowshard-fragments'
      },
      {
        name: 'Vyletongue Corruption',
        prequest: '',
        startNpc: 'Vark Battlescar', startLoc: 'Desolace, Shadowprey Village',
        endNpc: 'Vark Battlescar', endLoc: 'Desolace',
        levels: '41', xp: 4600,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=2879/vyletongue-corruption'
      },
      {
        name: 'Corruption of Earth and Seed',
        prequest: '',
        startNpc: 'Selendra', startLoc: 'Desolace, S. of Shadowprey Village',
        endNpc: 'Selendra', endLoc: 'Desolace',
        levels: '45', xp: 5100,
        items: [],
        rewards: 'Ferocious Sting, Princess Theradras\' Scepter',
        notes: 'Kill Princess Theradras',
        questLink: 'https://www.wowhead.com/classic/quest=2880/corruption-of-earth-and-seed'
      },
      {
        name: 'Shadowshard Fragments',
        prequest: '',
        startNpc: 'Archmage Tervosh', startLoc: 'Dustwallow Marsh, Theramore',
        endNpc: 'Archmage Tervosh', endLoc: 'Dustwallow Marsh',
        levels: '39', xp: 4100,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=2881/shadowshard-fragments'
      },
      {
        name: 'Vyletongue Corruption',
        prequest: '',
        startNpc: 'Talendria', startLoc: 'Desolace, Nijel\'s Point',
        endNpc: 'Talendria', endLoc: 'Desolace',
        levels: '41', xp: 4600,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=2882/vyletongue-corruption'
      },
      {
        name: 'Corruption of Earth and Seed',
        prequest: '',
        startNpc: 'Keeper Marandis', startLoc: 'Desolace, Nijel\'s Point',
        endNpc: 'Keeper Marandis', endLoc: 'Desolace',
        levels: '45', xp: 5100,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=2883/corruption-of-earth-and-seed'
      },
      {
        name: 'Twisted Evils',
        prequest: '',
        startNpc: 'Willow', startLoc: 'Desolace, SE of Thunderaxe Fortress',
        endNpc: 'Willow', endLoc: 'Desolace',
        levels: '41', xp: 4200,
        items: [],
        rewards: '',
        notes: '',
        questLink: 'https://www.wowhead.com/classic/quest=2884/twisted-evils'
      },
      {
        name: 'Legends of Maraudon',
        prequest: '',
        startNpc: 'Cavindra', startLoc: 'Inside Maraudon, Orange side',
        endNpc: 'Cavindra', endLoc: 'Maraudon',
        levels: '41', xp: 4600,
        items: [],
        rewards: '',
        notes: 'Pick up inside dungeon',
        questLink: 'https://www.wowhead.com/classic/quest=2885/legends-of-maraudon'
      },
      {
        name: 'Seed of Life',
        prequest: '',
        startNpc: 'Zaetar\'s Spirit', startLoc: 'Inside Maraudon',
        endNpc: 'Zaetar\'s Spirit', endLoc: 'Maraudon',
        levels: '39', xp: 4100,
        items: [],
        rewards: '',
        notes: 'Inside dungeon after Princess Theradras',
        questLink: 'https://www.wowhead.com/classic/quest=2886/seed-of-life'
      },
      {
        name: 'The Pariah\'s Instructions',
        prequest: '',
        startNpc: 'Centaur Pariah', startLoc: 'Desolace, South of Mannoroc Coven',
        endNpc: 'Centaur Pariah', endLoc: 'Desolace',
        levels: '39', xp: 3800,
        items: [],
        rewards: '',
        notes: 'Patrols area',
        questLink: 'https://www.wowhead.com/classic/quest=2887/the-pariahs-instructions'
      },
      {
        name: 'The Scepter of Celebras',
        prequest: 'Legends of Maraudon',
        startNpc: 'Celebras the Redeemed', startLoc: 'Inside Maraudon, Purple side',
        endNpc: 'Celebras the Redeemed', endLoc: 'Maraudon',
        levels: '41', xp: 5400,
        items: ['Scepter of Celebras'],
        rewards: '',
        notes: 'Creates shortcut teleport in Mara',
        questLink: 'https://www.wowhead.com/classic/quest=2888/the-scepter-of-celebras'
      }
    ]
  },
  {
    id: 'st', name: 'Sunken Temple', abbr: 'ST', levels: '46–60', faction: 'Both',
    icon: '🐉', location: 'Swamp of Sorrows',
    quests: [
      {
        name: 'The Temple of Atal\'Hakkar',
        prequest: 'Pool of Tears chain',
        startNpc: 'Fel\'zerul', startLoc: 'Swamp of Sorrows, Stonard',
        endNpc: 'Fel\'zerul', endLoc: 'Swamp of Sorrows',
        levels: '38', xp: 4600,
        items: [],
        rewards: '',
        notes: 'Requires 3 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3001/the-temple-of-atalhakkar'
      },
      {
        name: 'Zapper Fuel',
        prequest: 'Larion and Muigin',
        startNpc: 'Liv Rizzlefix', startLoc: 'The Barrens, Ratchet',
        endNpc: 'Liv Rizzlefix', endLoc: 'The Barrens',
        levels: '47', xp: 5400,
        items: [],
        rewards: '',
        notes: 'Requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3002/zapper-fuel'
      },
      {
        name: 'Haze of Evil',
        prequest: 'Muigin and Larion',
        startNpc: 'Gregan Brewspewer', startLoc: 'Feralas, Twin Colossals',
        endNpc: 'Gregan Brewspewer', endLoc: 'Feralas',
        levels: '47', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3003/haze-of-evil'
      },
      {
        name: 'Into The Temple of Atal\'Hakkar',
        prequest: 'In Search of The Temple chain',
        startNpc: 'Brohann Caskbelly', startLoc: 'Stormwind, Dwarven District',
        endNpc: 'Brohann Caskbelly', endLoc: 'Stormwind',
        levels: '38', xp: 4800,
        items: [],
        rewards: '',
        notes: 'Alliance only - requires 6 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3004/into-the-temple-of-atalhakkar'
      },
      {
        name: 'Jammal\'an the Prophet',
        prequest: '',
        startNpc: 'Atal\'ai Exile', startLoc: 'Hinterlands, Spider area SW of Altar of Zul',
        endNpc: 'Atal\'ai Exile', endLoc: 'Hinterlands',
        levels: '38', xp: 4700,
        items: [],
        rewards: 'Blade of the New Moon, Sash of Mercy',
        notes: 'Inside dungeon - kill Jammal\'an',
        questLink: 'https://www.wowhead.com/classic/quest=3005/jammalans-the-prophet'
      },
      {
        name: 'The Essence of Eranikus',
        prequest: '',
        startNpc: 'Essence of Eranikus', startLoc: 'Inside ST (drop)',
        endNpc: 'Remulos', endLoc: 'Moonglade',
        levels: '48', xp: 8100,
        items: ['Ring of Infinite Wisdom', 'Ring of Eternal Justice', 'Band of Vigor'],
        rewards: '',
        notes: 'Drop quest - fantastic item',
        questLink: 'https://www.wowhead.com/classic/quest=3006/the-essence-of-eranikus'
      },
      {
        name: 'Into the Depths',
        prequest: 'The Sunken Temple',
        startNpc: 'Marvon Rivetseeker', startLoc: 'Tanaris, S. of Gadgetzan',
        endNpc: 'Marvon Rivetseeker', endLoc: 'Tanaris',
        levels: '46', xp: 5100,
        items: [],
        rewards: '',
        notes: 'Requires The Sunken Temple completion',
        questLink: 'https://www.wowhead.com/classic/quest=3007/into-the-depths'
      },
      {
        name: 'Secret of the Circle',
        prequest: 'The Sunken Temple',
        startNpc: 'Marvon Rivetseeker', startLoc: 'Tanaris, S. of Gadgetzan',
        endNpc: 'Marvon Rivetseeker', endLoc: 'Tanaris',
        levels: '46', xp: 4900,
        items: [],
        rewards: '',
        notes: 'Requires The Sunken Temple completion',
        questLink: 'https://www.wowhead.com/classic/quest=3008/secret-of-the-circle'
      },
      {
        name: 'The God Hakkar',
        prequest: 'Screecher Spirits chain',
        startNpc: 'Yeh\'kinya', startLoc: 'Tanaris, Steamwheedle Port',
        endNpc: 'Yeh\'kinya', endLoc: 'Tanaris',
        levels: '40', xp: 5600,
        items: [],
        rewards: '',
        notes: 'Requires 3 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3009/the-god-hakkar'
      }
    ]
  },
  {
    id: 'brd', name: 'Blackrock Depths', abbr: 'BRD', levels: '50–60', faction: 'Both',
    icon: '🌋', location: 'Blackrock Mountain',
    quests: [
      {
        name: 'KILL ON SIGHT: Dark Iron Dwarves',
        prequest: '',
        startNpc: 'WANTED poster', startLoc: 'Badlands, Kargath',
        endNpc: 'WANTED poster', endLoc: 'Badlands',
        levels: '48', xp: 4500,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=3124/kill-on-sight-dark-iron-dwarves'
      },
      {
        name: 'Lost Thunderbrew Recipe',
        prequest: '',
        startNpc: 'Shadowmage Vivian Lagrave', startLoc: 'Badlands, Kargath',
        endNpc: 'Shadowmage Vivian Lagrave', endLoc: 'Badlands',
        levels: '50', xp: 5600,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=3125/lost-thunderbrew-recipe'
      },
      {
        name: 'KILL ON SIGHT: High Ranking Dark Iron Officials',
        prequest: 'KILL ON SIGHT: Dark Iron Dwarves',
        startNpc: 'WANTED poster', startLoc: 'Badlands, Kargath',
        endNpc: 'WANTED poster', endLoc: 'Badlands',
        levels: '50', xp: 6200,
        items: [],
        rewards: '',
        notes: 'Horde only - prerequisite required',
        questLink: 'https://www.wowhead.com/classic/quest=3126/kill-on-sight-high-ranking-dark-iron-officials'
      },
      {
        name: 'The Rise of the Machines',
        prequest: 'The Rise of the Machines (first)',
        startNpc: 'Lotwil Veriatus', startLoc: 'Badlands, Eastern',
        endNpc: 'Lotwil Veriatus', endLoc: 'Badlands',
        levels: '52', xp: 6800,
        items: [],
        rewards: '',
        notes: 'Horde only - requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3127/the-rise-of-the-machines'
      },
      {
        name: 'Disharmony of Flame',
        prequest: '',
        startNpc: 'Thunderheart', startLoc: 'Badlands, Kargath',
        endNpc: 'Thunderheart', endLoc: 'Badlands',
        levels: '48', xp: 4800,
        items: [],
        rewards: '',
        notes: 'Horde only',
        questLink: 'https://www.wowhead.com/classic/quest=3128/disharmony-of-flame'
      },
      {
        name: 'Disharmony of Fire',
        prequest: 'Disharmony of Flame',
        startNpc: 'Thunderheart', startLoc: 'Badlands, Kargath',
        endNpc: 'Thunderheart', endLoc: 'Badlands',
        levels: '48', xp: 5400,
        items: [],
        rewards: '',
        notes: 'Horde only - unlocks after Disharmony of Flame',
        questLink: 'https://www.wowhead.com/classic/quest=3129/disharmony-of-fire'
      },
      {
        name: 'Commander Gor\'shak',
        prequest: 'Disharmony of Flame',
        startNpc: 'Galamav the Marksman', startLoc: 'Badlands, Kargath',
        endNpc: 'Galamav the Marksman', endLoc: 'Badlands',
        levels: '48', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Horde only - unlocks after Disharmony of Flame',
        questLink: 'https://www.wowhead.com/classic/quest=3130/commander-gorshak'
      },
      {
        name: 'The Last Element',
        prequest: 'Disharmony of Flame',
        startNpc: 'Shadowmage Vivian Lagrave', startLoc: 'Badlands, Kargath',
        endNpc: 'Shadowmage Vivian Lagrave', endLoc: 'Badlands',
        levels: '48', xp: 5100,
        items: [],
        rewards: '',
        notes: 'Horde only - unlocks after Disharmony of Flame',
        questLink: 'https://www.wowhead.com/classic/quest=3131/the-last-element'
      },
      {
        name: 'Operation: Death to Angerforge',
        prequest: 'KILL ON SIGHT: Dark Iron Dwarves',
        startNpc: 'Warlord Goretooth', startLoc: 'Badlands, Kargath',
        endNpc: 'Warlord Goretooth', endLoc: 'Badlands',
        levels: '52', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Horde only - requires 3 prior quests including long escort',
        questLink: 'https://www.wowhead.com/classic/quest=3132/operation-death-to-angerforge'
      },
      {
        name: 'The Royal Rescue',
        prequest: 'Commander Gor\'shak',
        startNpc: 'Thrall', startLoc: 'Orgrimmar, Valley of Wisdom',
        endNpc: 'Thrall', endLoc: 'Orgrimmar',
        levels: '48', xp: 5800,
        items: ['Warchief\'s Blessing'],
        rewards: '',
        notes: 'Horde only - requires 4 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3133/the-royal-rescue'
      },
      {
        name: 'Overmaster Pyron',
        prequest: '',
        startNpc: 'Jalinda Sprig', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Jalinda Sprig', endLoc: 'Burning Steppes',
        levels: '48', xp: 4900,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=3134/overmaster-pyron'
      },
      {
        name: 'Incendius!',
        prequest: 'Overmaster Pyron',
        startNpc: 'Jalinda Sprig', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Jalinda Sprig', endLoc: 'Burning Steppes',
        levels: '48', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Alliance only - requires Overmaster Pyron',
        questLink: 'https://www.wowhead.com/classic/quest=3135/incendius'
      },
      {
        name: 'The Good Stuff',
        prequest: '',
        startNpc: 'Oralius', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Oralius', endLoc: 'Burning Steppes',
        levels: '50', xp: 5600,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=3136/the-good-stuff'
      },
      {
        name: 'Hurley Blackbreath',
        prequest: '',
        startNpc: 'Ragnar Thunderbrew', startLoc: 'Dun Morogh, Kharanos',
        endNpc: 'Ragnar Thunderbrew', endLoc: 'Dun Morogh',
        levels: '50', xp: 5400,
        items: [],
        rewards: '',
        notes: 'Alliance only',
        questLink: 'https://www.wowhead.com/classic/quest=3137/hurley-blackbreath'
      },
      {
        name: 'Kharan Mighthammer',
        prequest: 'The Smoldering Ruins of Thaurissan',
        startNpc: 'King Magni Bronzebeard', startLoc: 'Ironforge, Throne Room',
        endNpc: 'King Magni Bronzebeard', endLoc: 'Ironforge',
        levels: '50', xp: 6200,
        items: [],
        rewards: '',
        notes: 'Alliance only - requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3138/kharan-mighthammer'
      },
      {
        name: 'The Fate of the Kingdom',
        prequest: 'Kharan Mighthammer',
        startNpc: 'King Magni Bronzebeard', startLoc: 'Ironforge, Throne Room',
        endNpc: 'King Magni Bronzebeard', endLoc: 'Ironforge',
        levels: '50', xp: 6600,
        items: [],
        rewards: 'Ring of Law, Famous Signet',
        notes: 'Alliance only - Onyxia attunement, requires Kharan',
        questLink: 'https://www.wowhead.com/classic/quest=3139/the-fate-of-the-kingdom'
      },
      {
        name: 'Marshal Windsor',
        prequest: 'Dragonkin Menace',
        startNpc: 'Marshal Maxwell', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Marshal Maxwell', endLoc: 'Burning Steppes',
        levels: '48', xp: 4800,
        items: [],
        rewards: '',
        notes: 'Alliance only - requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3140/marshal-windsor'
      },
      {
        name: 'Jail Break!',
        prequest: 'Dragonkin Menace -> Marshal Windsor',
        startNpc: 'Marshal Windsor', startLoc: 'Inside BRD, Prison Cell',
        endNpc: 'Marshal Windsor', endLoc: 'Inside BRD',
        levels: '50', xp: 6400,
        items: [],
        rewards: 'Jinxed Hoodoo Skin, Jinxed Hoodoo Kilt',
        notes: 'Alliance only - requires full quest chain',
        questLink: 'https://www.wowhead.com/classic/quest=3141/jail-break'
      },
      {
        name: 'Ribbly Screwspigot',
        prequest: '',
        startNpc: 'Yuka Screwspigot', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Yuka Screwspigot', endLoc: 'Burning Steppes',
        levels: '50', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3142/ribbly-screwspigot'
      },
      {
        name: 'The Heart of the Mountain',
        prequest: '',
        startNpc: 'Maxwort Uberglint', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Maxwort Uberglint', endLoc: 'Burning Steppes',
        levels: '50', xp: 5400,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3143/the-heart-of-the-mountain'
      },
      {
        name: 'Attunement to the Core',
        prequest: '',
        startNpc: 'Lothos Riftwaker', startLoc: 'Blackrock Mountain',
        endNpc: 'Lothos Riftwaker', endLoc: 'Blackrock Mountain',
        levels: '55', xp: 6600,
        items: [],
        rewards: 'Molten Core Attunement',
        notes: 'Both factions - REQUIRED for Molten Core raid',
        questLink: 'https://www.wowhead.com/classic/quest=3144/attunement-to-the-core'
      },
      {
        name: 'Dark Iron Legacy',
        prequest: 'Dark Iron Legacy (first)',
        startNpc: 'Franclorn Forgewright', startLoc: 'Inside BRD',
        endNpc: 'Franclorn Forgewright', endLoc: 'Inside BRD',
        levels: '48', xp: 7200,
        items: [],
        rewards: 'Shadowforge Key',
        notes: 'Both factions - NPC only visible if dead',
        questLink: 'https://www.wowhead.com/classic/quest=3145/dark-iron-legacy'
      },
      {
        name: 'The Love Potion',
        prequest: '',
        startNpc: 'Mistress Nagmara', startLoc: 'Inside BRD, Grim Guzzler',
        endNpc: 'Mistress Nagmara', endLoc: 'Inside BRD',
        levels: '50', xp: 4900,
        items: [],
        rewards: '',
        notes: 'Both factions - inside dungeon',
        questLink: 'https://www.wowhead.com/classic/quest=3146/the-love-potion'
      },
      {
        name: 'A Taste of Flame',
        prequest: 'Divine Retribution chain',
        startNpc: 'Cyrus Therepentous', startLoc: 'Burning Steppes, Cave in NE',
        endNpc: 'Cyrus Therepentous', endLoc: 'Burning Steppes',
        levels: '52', xp: 6800,
        items: [],
        rewards: 'Black Dragonscale Breastplate',
        notes: 'Both factions - requires 11 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3147/a-taste-of-flame'
      }
    ]
  },
  {
    id: 'lbrs', name: 'Lower Blackrock Spire', abbr: 'LBRS', levels: '54–60', faction: 'Both',
    icon: '🔥', location: 'Blackrock Mountain',
    quests: [
      {
        name: 'The Pack Mistress',
        prequest: '',
        startNpc: 'Galamav the Marksman', startLoc: 'Badlands, Kargath',
        endNpc: 'Galamav the Marksman', endLoc: 'Badlands',
        levels: '55', xp: 6800,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3148/the-pack-mistress'
      },
      {
        name: 'Operative Bijou',
        prequest: '',
        startNpc: 'Lexlort', startLoc: 'Badlands, Kargath',
        endNpc: 'Lexlort', endLoc: 'Badlands',
        levels: '55', xp: 6400,
        items: [],
        rewards: '',
        notes: 'Both factions - leads to Bijou\'s Belongings inside',
        questLink: 'https://www.wowhead.com/classic/quest=3149/operative-bijou'
      },
      {
        name: 'Warlord\'s Command',
        prequest: '',
        startNpc: 'Warlord Goretooth', startLoc: 'Badlands, Kargath',
        endNpc: 'Warlord Goretooth', endLoc: 'Badlands',
        levels: '55', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3150/warlords-command'
      },
      {
        name: 'Put Her Down',
        prequest: '',
        startNpc: 'Helendis Riverhorn', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Helendis Riverhorn', endLoc: 'Burning Steppes',
        levels: '55', xp: 6200,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3151/put-her-down'
      },
      {
        name: 'General Drakkisath\'s Command',
        prequest: '',
        startNpc: 'General Drakkisath', startLoc: 'Inside LBRS (drop)',
        endNpc: 'General Drakkisath', endLoc: 'Inside LBRS',
        levels: '55', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Drop quest from Overlord Wyrmthalak',
        questLink: 'https://www.wowhead.com/classic/quest=3152/general-drakkisaths-command'
      },
      {
        name: 'Bijou\'s Belongings',
        prequest: 'Operative Bijou',
        startNpc: 'Bijou', startLoc: 'Inside LBRS',
        endNpc: 'Bijou', endLoc: 'Inside LBRS',
        levels: '55', xp: 6400,
        items: [],
        rewards: 'Bijou\'s Belongings',
        notes: 'Inside dungeon - requires Operative Bijou',
        questLink: 'https://www.wowhead.com/classic/quest=3153/bijous-belongings'
      },
      {
        name: 'En-Ay-Es-Tee-Why',
        prequest: '',
        startNpc: 'Kibler', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Kibler', endLoc: 'Burning Steppes',
        levels: '55', xp: 6200,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3154/en-ay-es-tee-why'
      },
      {
        name: 'Kibler\'s Exotic Pets',
        prequest: '',
        startNpc: 'Kibler', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Kibler', endLoc: 'Burning Steppes',
        levels: '55', xp: 6600,
        items: [],
        rewards: 'Smolderweb Egg, Worg Pup',
        notes: 'Both factions - get cute pets!',
        questLink: 'https://www.wowhead.com/classic/quest=3155/kiblers-exotic-pets'
      },
      {
        name: 'Mother\'s Milk',
        prequest: '',
        startNpc: 'Ragged John', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Ragged John', endLoc: 'Burning Steppes',
        levels: '55', xp: 6400,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3156/mothers-milk'
      },
      {
        name: 'Seal of Ascension',
        prequest: '',
        startNpc: 'Various drops', startLoc: 'Inside LBRS',
        endNpc: 'Various drops', endLoc: 'Inside LBRS',
        levels: '57', xp: 7200,
        items: [],
        rewards: 'Seal of Ascension (various)',
        notes: 'Drop quest - multiple items needed for UBRS',
        questLink: 'https://www.wowhead.com/classic/quest=3157/seal-of-ascension'
      },
      {
        name: 'Urok Doomhowl',
        prequest: '',
        startNpc: 'Warosh', startLoc: 'Inside LBRS',
        endNpc: 'Warosh', endLoc: 'Inside LBRS',
        levels: '55', xp: 6800,
        items: [],
        rewards: '',
        notes: 'Inside dungeon - patrols near entrance',
        questLink: 'https://www.wowhead.com/classic/quest=3158/urok-doomhowl'
      },
      {
        name: 'The Final Tablets',
        prequest: 'Screecher Spirits chain',
        startNpc: 'Prospector Ironboot', startLoc: 'Tanaris, Steamwheedle Port',
        endNpc: 'Prospector Ironboot', endLoc: 'Tanaris',
        levels: '40', xp: 4200,
        items: [],
        rewards: '',
        notes: 'Requires 5 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3159/the-final-tablets'
      }
    ]
  },
  {
    id: 'scholo', name: 'Scholomance', abbr: 'Scholo', levels: '54–60', faction: 'Both',
    icon: '💀', location: 'Western Plaguelands',
    quests: [
      {
        name: 'Barov Family Fortune',
        prequest: '',
        startNpc: 'Alexi Barov', startLoc: 'Tirisfal Glades, The Bulwark',
        endNpc: 'Alexi Barov', endLoc: 'Tirisfal Glades',
        levels: '52', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Horde only - NPC may be dead',
        questLink: 'https://www.wowhead.com/classic/quest=3160/barov-family-fortune'
      },
      {
        name: 'The Darkreaver Menace',
        prequest: 'Material Assistance',
        startNpc: 'Sagorne Creststrider', startLoc: 'Orgrimmar, Valley of Wisdom',
        endNpc: 'Sagorne Creststrider', endLoc: 'Orgrimmar',
        levels: '58', xp: 7400,
        items: [],
        rewards: 'Shaman-specific items',
        notes: 'Shaman Only - requires Material Assistance',
        questLink: 'https://www.wowhead.com/classic/quest=3161/the-darkreaver-menace'
      },
      {
        name: 'Barov Family Fortune',
        prequest: '',
        startNpc: 'Weldon Barov', startLoc: 'Western Plaguelands, Chillwind Camp',
        endNpc: 'Weldon Barov', endLoc: 'Western Plaguelands',
        levels: '52', xp: 5200,
        items: [],
        rewards: '',
        notes: 'Alliance only - NPC may be dead',
        questLink: 'https://www.wowhead.com/classic/quest=3162/barov-family-fortune'
      },
      {
        name: 'Plagued Hatchlings',
        prequest: '',
        startNpc: 'Betina Bigglezink', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Betina Bigglezink', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6800,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3163/plagued-hatchlings'
      },
      {
        name: 'Healthy Dragon Scale',
        prequest: 'Plagued Hatchlings',
        startNpc: 'Plagued Hatchlings', startLoc: 'Inside Scholomance',
        endNpc: 'Plagued Hatchlings', endLoc: 'Inside Scholomance',
        levels: '55', xp: 5600,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - repeatable, requires Plagued Hatchlings',
        questLink: 'https://www.wowhead.com/classic/quest=3164/healthy-dragon-scale'
      },
      {
        name: 'Doctor Theolen Krastinov, the Butcher',
        prequest: '',
        startNpc: 'Eva Sarkhoff', startLoc: 'Western Plaguelands, Caer Darrow',
        endNpc: 'Eva Sarkhoff', endLoc: 'Western Plaguelands',
        levels: '55', xp: 6600,
        items: [],
        rewards: 'Dark Blessing, Devout Amulet',
        notes: 'Both factions - kill Krastinov',
        questLink: 'https://www.wowhead.com/classic/quest=3165/doctor-theolen-krastinov-the-butcher'
      },
      {
        name: 'Krastinov\'s Bag of Horrors',
        prequest: 'Doctor Theolen Krastinov',
        startNpc: 'Eva Sarkhoff', startLoc: 'Western Plaguelands, Caer Darrow',
        endNpc: 'Eva Sarkhoff', endLoc: 'Western Plaguelands',
        levels: '55', xp: 6200,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires Doctor Theolen Krastinov',
        questLink: 'https://www.wowhead.com/classic/quest=3166/krastinov-bag-of-horrors'
      },
      {
        name: 'Kirtonos the Herald',
        prequest: 'Krastinov\'s Bag of Horrors',
        startNpc: 'Eva Sarkhoff', startLoc: 'Western Plaguelands, Caer Darrow',
        endNpc: 'Eva Sarkhoff', endLoc: 'Western Plaguelands',
        levels: '55', xp: 6800,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - save Spectral Essence reward item',
        questLink: 'https://www.wowhead.com/classic/quest=3167/kirtonos-the-herald'
      },
      {
        name: 'Dawn\'s Gambit',
        prequest: 'Broodling Essence chain',
        startNpc: 'Betina Bigglezink', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Betina Bigglezink', endLoc: 'Eastern Plaguelands',
        levels: '57', xp: 7400,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires 9 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3168/dawns-gambit'
      },
      {
        name: 'The Lich, Ras Frostwhisper',
        prequest: 'Doctor Theolen Krastinov chain',
        startNpc: 'Magistrate Marduke', startLoc: 'Western Plaguelands, Caer Darrow',
        endNpc: 'Magistrate Marduke', endLoc: 'Western Plaguelands',
        levels: '57', xp: 7600,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires Spectral Essence equipped',
        questLink: 'https://www.wowhead.com/classic/quest=3169/the-lich-ras-frostwhisper'
      }
    ]
  },
  {
    id: 'strath', name: 'Stratholme', abbr: 'Strath', levels: '54–60', faction: 'Both',
    icon: '🏰', location: 'Eastern Plaguelands',
    quests: [
      {
        name: 'The Great Ezra Grimm',
        prequest: '',
        startNpc: 'Smokey LaRue', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Smokey LaRue', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6400,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3170/the-great-ezra-grimm'
      },
      {
        name: 'The Archivist',
        prequest: '',
        startNpc: 'Duke Nicholas Zverenhoff', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Duke Nicholas Zverenhoff', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6200,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3171/the-archivist'
      },
      {
        name: 'The Restless Souls',
        prequest: '',
        startNpc: 'Egan', startLoc: 'Eastern Plaguelands, Terrordale',
        endNpc: 'Egan', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3172/the-restless-souls'
      },
      {
        name: 'The Medallion of Faith',
        prequest: '',
        startNpc: 'Aurius', startLoc: 'Inside Stratholme, Undead side chapel',
        endNpc: 'Aurius', endLoc: 'Inside Stratholme',
        levels: '55', xp: 5800,
        items: [],
        rewards: '',
        notes: 'Both factions - inside dungeon',
        questLink: 'https://www.wowhead.com/classic/quest=3173/the-medallion-of-faith'
      },
      {
        name: 'The Truth Comes Crashing Down',
        prequest: 'The Archivist',
        startNpc: 'Head of Balnazzar', startLoc: 'Inside Stratholme (drop)',
        endNpc: 'Head of Balnazzar', endLoc: 'Inside Stratholme',
        levels: '55', xp: 6800,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - drop from Balnazzar',
        questLink: 'https://www.wowhead.com/classic/quest=3174/the-truth-comes-crashing-down'
      },
      {
        name: 'Of Love and Family',
        prequest: 'Blood Tinged Skies chain',
        startNpc: 'Artist Renfray', startLoc: 'Western Plaguelands, Caer Darrow',
        endNpc: 'Artist Renfray', endLoc: 'Western Plaguelands',
        levels: '52', xp: 5400,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires 7 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3175/of-love-and-family'
      },
      {
        name: 'Ramstein',
        prequest: 'The Ranger Lord\'s Behest chain',
        startNpc: 'Nathanos Blightcaller', startLoc: 'Eastern Plaguelands, Marris Stead',
        endNpc: 'Nathanos Blightcaller', endLoc: 'Eastern Plaguelands',
        levels: '56', xp: 7200,
        items: [],
        rewards: '',
        notes: 'Both factions - requires 4 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3176/ramstein'
      },
      {
        name: 'Houses of the Holy',
        prequest: '',
        startNpc: 'Leonid Barthalomew the Revered', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Leonid Barthalomew the Revered', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6400,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3177/houses-of-the-holy'
      },
      {
        name: 'The Flesh Does Not Lie',
        prequest: '',
        startNpc: 'Betina Bigglezink', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Betina Bigglezink', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6200,
        items: [],
        rewards: '',
        notes: 'Both factions',
        questLink: 'https://www.wowhead.com/classic/quest=3178/the-flesh-does-not-lie'
      },
      {
        name: 'The Active Agent',
        prequest: 'The Flesh Does Not Lie',
        startNpc: 'Betina Bigglezink', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Betina Bigglezink', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6600,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires The Flesh Does Not Lie',
        questLink: 'https://www.wowhead.com/classic/quest=3179/the-active-agent'
      },
      {
        name: 'Aurius\' Reckoning',
        prequest: 'The Medallion of Faith',
        startNpc: 'Aurius', startLoc: 'Inside Stratholme, Undead chapel',
        endNpc: 'Aurius', endLoc: 'Inside Stratholme',
        levels: '55', xp: 6400,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires The Medallion of Faith',
        questLink: 'https://www.wowhead.com/classic/quest=3180/aurius-reckoning'
      },
      {
        name: 'Above and Beyond',
        prequest: 'The Archivist',
        startNpc: 'Duke Nicholas Zverenhoff', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Duke Nicholas Zverenhoff', endLoc: 'Eastern Plaguelands',
        levels: '55', xp: 6800,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires The Archivist',
        questLink: 'https://www.wowhead.com/classic/quest=3181/above-and-beyond'
      },
      {
        name: 'Menethil\'s Gift',
        prequest: 'Doctor Theolen Krastinov chain',
        startNpc: 'Leonid Barthalomew the Revered', startLoc: 'Eastern Plaguelands, Light\'s Hope Chapel',
        endNpc: 'Leonid Barthalomew the Revered', endLoc: 'Eastern Plaguelands',
        levels: '57', xp: 7200,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires 5 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3182/menethils-gift'
      },
      {
        name: 'Dead Man\'s Plea',
        prequest: 'A Supernatural Device chain',
        startNpc: 'Anthion Harmon', startLoc: 'Eastern Plaguelands, Stratholme Main Entrance',
        endNpc: 'Anthion Harmon', endLoc: 'Eastern Plaguelands',
        levels: '58', xp: 7600,
        items: [],
        rewards: 'Argent Dawn Rep',
        notes: 'Both factions - requires Extra-Dimensional Ghost Revealer',
        questLink: 'https://www.wowhead.com/classic/quest=3183/dead-mans-plea'
      }
    ]
  },
  {
    id: 'ubrs', name: 'Upper Blackrock Spire', abbr: 'UBRS', levels: '56–60', faction: 'Both',
    icon: '👑', location: 'Blackrock Mountain',
    quests: [
      {
        name: 'The Darkstone Tablet',
        prequest: '',
        startNpc: 'Shadowmage Vivian Lagrave', startLoc: 'Badlands, Kargath',
        endNpc: 'Shadowmage Vivian Lagrave', endLoc: 'Badlands',
        levels: '57', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Horde only - pick up breadcrumb in Undercity',
        questLink: 'https://www.wowhead.com/classic/quest=3185/the-darkstone-tablet'
      },
      {
        name: 'For The Horde!',
        prequest: 'Warlord\'s Command',
        startNpc: 'Thrall', startLoc: 'Orgrimmar, Valley of Wisdom',
        endNpc: 'Thrall', endLoc: 'Orgrimmar',
        levels: '55', xp: 9800,
        items: ['Warchief\'s Blessing'],
        rewards: '1g 20s',
        notes: 'Horde only - requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3186/for-the-horde'
      },
      {
        name: 'Blood of the Black Dragon Champion',
        prequest: 'Warlord\'s Command chain',
        startNpc: 'Rexxar', startLoc: 'Desolace',
        endNpc: 'Rexxar', endLoc: 'Desolace',
        levels: '55', xp: 11200,
        items: [],
        rewards: '',
        notes: 'Horde only - requires 13 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3187/blood-of-the-black-dragon-champion'
      },
      {
        name: 'Doomrigger\'s Clasp',
        prequest: '',
        startNpc: 'Mayara Brightwing', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Mayara Brightwing', endLoc: 'Burning Steppes',
        levels: '57', xp: 6800,
        items: [],
        rewards: '',
        notes: 'Alliance only - pick up breadcrumb in Stormwind',
        questLink: 'https://www.wowhead.com/classic/quest=3188/doomriggers-clasp'
      },
      {
        name: 'General Drakkisath\'s Demise',
        prequest: 'General Drakkisath\'s Command',
        startNpc: 'Marshal Maxwell', startLoc: 'Burning Steppes, Morgan\'s Vigil',
        endNpc: 'Marshal Maxwell', endLoc: 'Burning Steppes',
        levels: '55', xp: 11200,
        items: ['Onyxia Attunement'],
        rewards: '1g 50s',
        notes: 'Alliance only - REQUIRED for Onyxia',
        questLink: 'https://www.wowhead.com/classic/quest=3189/general-drakkisaths-demise'
      },
      {
        name: 'Drakefire Amulet',
        prequest: 'Dragonkin Menace chain',
        startNpc: 'Haleh', startLoc: 'Winterspring, Mazthoril',
        endNpc: 'Haleh', endLoc: 'Winterspring',
        levels: '50', xp: 8400,
        items: [],
        rewards: 'Drakefire Amulet',
        notes: 'Both factions - requires 10 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3190/drakefire-amulet'
      },
      {
        name: 'Blackhand\'s Command',
        prequest: '',
        startNpc: 'Scarshield Quartermaster', startLoc: 'Inside UBRS (drop)',
        endNpc: 'Scarshield Quartermaster', endLoc: 'Inside UBRS',
        levels: '55', xp: 6400,
        items: [],
        rewards: '',
        notes: 'Both factions - drop from Scarshield Quartermaster',
        questLink: 'https://www.wowhead.com/classic/quest=3191/blackhands-command'
      },
      {
        name: 'The Matron Protectorate',
        prequest: '',
        startNpc: 'Awbee', startLoc: 'Inside UBRS',
        endNpc: 'Awbee', endLoc: 'Inside UBRS',
        levels: '57', xp: 7200,
        items: [],
        rewards: '',
        notes: 'Both factions - inside dungeon after Blackhand',
        questLink: 'https://www.wowhead.com/classic/quest=3192/the-matron-protectorate'
      },
      {
        name: 'Pip Quickwit, At Your Service!',
        prequest: 'Skinner 300+',
        startNpc: 'Pip Quickwit', startLoc: 'Inside UBRS',
        endNpc: 'Pip Quickwit', endLoc: 'Inside UBRS',
        levels: '57', xp: 6800,
        items: [],
        rewards: 'Pip\'s Reward',
        notes: 'Both factions - only spawns after Skinner skins The Beast',
        questLink: 'https://www.wowhead.com/classic/quest=3193/pip-quickwit-at-your-service'
      },
      {
        name: 'Egg Collection',
        prequest: 'Egg Freezing chain',
        startNpc: 'Tinkee Steamboil', startLoc: 'Burning Steppes, Flame Crest',
        endNpc: 'Tinkee Steamboil', endLoc: 'Burning Steppes',
        levels: '57', xp: 7600,
        items: [],
        rewards: 'Smolderweb Egg (rare), other items',
        notes: 'Both factions - requires 6 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3194/egg-collection'
      },
      {
        name: 'Eye of the Emberseer',
        prequest: 'Stormers and Rumblers chain',
        startNpc: 'Duke Hydraxis', startLoc: 'Azshara',
        endNpc: 'Duke Hydraxis', endLoc: 'Azshara',
        levels: '55', xp: 6400,
        items: [],
        rewards: 'Eye of the Emberseer',
        notes: 'Both factions - requires 2 prior quests',
        questLink: 'https://www.wowhead.com/classic/quest=3195/eye-of-the-emberseer'
      },
      {
        name: 'The Demon Forge',
        prequest: 'Lorax\'s Tale',
        startNpc: 'Lorax', startLoc: 'Winterspring, Southeast',
        endNpc: 'Lorax', endLoc: 'Winterspring',
        levels: '55', xp: 6800,
        items: ['Plans: Demon Forged Breastplate'],
        rewards: '',
        notes: 'Blacksmiths Only - requires Lorax\'s Tale',
        questLink: 'https://www.wowhead.com/classic/quest=3196/the-demon-forge'
      }
    ]
  },
  {
    id: 'dm', name: 'Dire Maul', abbr: 'DM', levels: '52–60', faction: 'Both',
    icon: '🌳', location: 'Feralas',
    quests: [
      {
        name: 'Lethtendris\'s Web',
        prequest: '',
        startNpc: 'Talo Thornhoof', startLoc: 'Feralas, Camp Mojache',
        endNpc: 'Talo Thornhoof', endLoc: 'Feralas',
        levels: '54', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Horde only - East wing',
        questLink: 'https://www.wowhead.com/classic/quest=3197/lethtendrisss-web'
      },
      {
        name: 'Lethtendris\'s Web',
        prequest: '',
        startNpc: 'Latronicus Moonspear', startLoc: 'Feralas, Feathermoon Stronghold',
        endNpc: 'Latronicus Moonspear', endLoc: 'Feralas',
        levels: '54', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Alliance only - East wing',
        questLink: 'https://www.wowhead.com/classic/quest=3198/lethtendrisss-web'
      },
      {
        name: 'Pusillin and the Elder Azj\'Tordin',
        prequest: '',
        startNpc: 'Azj\'Tordin', startLoc: 'Feralas, Lariss Pavilion',
        endNpc: 'Azj\'Tordin', endLoc: 'Feralas',
        levels: '54', xp: 6400,
        items: [],
        rewards: '',
        notes: 'Both factions - East wing',
        questLink: 'https://www.wowhead.com/classic/quest=3199/pusillin-and-the-elder-azj-tordin'
      },
      {
        name: 'Shards of the Felvine',
        prequest: 'A Reliquary of Purity',
        startNpc: 'Rabine Saturna', startLoc: 'Moonglade, Nighthaven',
        endNpc: 'Rabine Saturna', endLoc: 'Moonglade',
        levels: '56', xp: 7200,
        items: [],
        rewards: 'Shen\'dralar Rep',
        notes: 'Both factions - East wing, requires prior quest',
        questLink: 'https://www.wowhead.com/classic/quest=3200/shards-of-the-felvine'
      },
      {
        name: 'Arcane Refreshment',
        prequest: '',
        startNpc: 'Lorekeeper Lydros', startLoc: 'Inside DM, Library',
        endNpc: 'Lorekeeper Lydros', endLoc: 'Inside DM',
        levels: '60', xp: 7800,
        items: [],
        rewards: '',
        notes: 'Mage Only - West wing',
        questLink: 'https://www.wowhead.com/classic/quest=3201/arcane-refreshment'
      },
      {
        name: 'The Madness Within',
        prequest: '',
        startNpc: 'Shen\'dralar Ancient', startLoc: 'Inside DM West',
        endNpc: 'Shen\'dralar Ancient', endLoc: 'Inside DM',
        levels: '56', xp: 6800,
        items: [],
        rewards: '',
        notes: 'Both factions - West wing',
        questLink: 'https://www.wowhead.com/classic/quest=3202/the-madness-within'
      },
      {
        name: 'Nostro\'s Compendium',
        prequest: '',
        startNpc: 'Nostro\'s Compendium of Dragon Slaying', startLoc: 'Inside DM',
        endNpc: 'Nostro\'s Compendium of Dragon Slaying', endLoc: 'Inside DM',
        levels: '60', xp: 7600,
        items: [],
        rewards: 'Quel\'Serrar tanking sword recipe',
        notes: 'Both factions - West wing, rare drop',
        questLink: 'https://www.wowhead.com/classic/quest=3203/nostros-compendium'
      },
      {
        name: 'Elven Legends',
        prequest: '',
        startNpc: 'Sage Korolusk', startLoc: 'Feralas, Camp Mojache',
        endNpc: 'Sage Korolusk', endLoc: 'Feralas',
        levels: '54', xp: 6400,
        items: [],
        rewards: 'Libram eligibility (Horde)',
        notes: 'Horde only - North wing',
        questLink: 'https://www.wowhead.com/classic/quest=3204/elven-legends'
      },
      {
        name: 'Elven Legends',
        prequest: '',
        startNpc: 'Scholar Runethorn', startLoc: 'Feralas, Feathermoon Stronghold',
        endNpc: 'Scholar Runethorn', endLoc: 'Feralas',
        levels: '54', xp: 6400,
        items: [],
        rewards: 'Libram eligibility (Alliance)',
        notes: 'Alliance only - North wing',
        questLink: 'https://www.wowhead.com/classic/quest=3205/elven-legends'
      },
      {
        name: 'Free Knot!',
        prequest: '',
        startNpc: 'Knot Thimblejack', startLoc: 'Inside DM North',
        endNpc: 'Knot Thimblejack', endLoc: 'Inside DM',
        levels: '56', xp: 6600,
        items: [],
        rewards: '',
        notes: 'Both factions - North wing',
        questLink: 'https://www.wowhead.com/classic/quest=3206/free-knot'
      },
      {
        name: 'The Gordok Ogre Suit',
        prequest: '',
        startNpc: 'Knot Thimblejack', startLoc: 'Inside DM North',
        endNpc: 'Knot Thimblejack', endLoc: 'Inside DM',
        levels: '56', xp: 6800,
        items: [],
        rewards: 'Gordok Ogre Suit',
        notes: 'Both factions - North wing',
        questLink: 'https://www.wowhead.com/classic/quest=3207/the-gordok-ogre-suit'
      },
      {
        name: 'The Gordok Taste Test',
        prequest: 'Tribute Run',
        startNpc: 'Stomper Kreeg', startLoc: 'Inside DM North',
        endNpc: 'Stomper Kreeg', endLoc: 'Inside DM',
        levels: '56', xp: 6400,
        items: [],
        rewards: '',
        notes: 'Both factions - North wing, requires Tribute Run',
        questLink: 'https://www.wowhead.com/classic/quest=3208/the-gordok-taste-test'
      },
      {
        name: 'Unfinished Gordok Business',
        prequest: 'Tribute Run',
        startNpc: 'Captain Kromcrush', startLoc: 'Inside DM North',
        endNpc: 'Captain Kromcrush', endLoc: 'Inside DM',
        levels: '56', xp: 7200,
        items: [],
        rewards: '',
        notes: 'Both factions - North wing, requires 2 Tribute Runs',
        questLink: 'https://www.wowhead.com/classic/quest=3209/unfinished-gordok-business'
      }
    ]
  }
];
