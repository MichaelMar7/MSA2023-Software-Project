using Back_End.Models.CocModels;

namespace Back_End.Models
{
    public class CocPlayer
    {
        public string tag { get; set; }
        public string name { get; set; }
        public int townHallLevel { get; set; }
        public int townHallWeaponLevel { get; set; }
        public int expLevel { get; set; }
        public int trophies { get; set; }
        public int bestTrophies { get; set; }
        public int warStars { get; set; }
        public int attackWins { get; set; }
        public int defenseWins { get; set; }
        public int builderHallLevel { get; set; }
        public int builderBaseTrophies { get; set; }
        public int bestBuilderBaseTrophies { get; set; }
        public int versusBattleWins { get; set; }
        public string role { get; set; }
        public PlayerClan clan { get; set; }
        public League league { get; set; }
        public BuilderBaseLeague builderBaseLeague { get; set; }
        public PlayerLegendStatistics legendStatistics { get; set; }
        public List<PlayerItemLevel> troops { get; set; }
        public List<PlayerItemLevel> heroes { get; set; }
        public List<PlayerItemLevel> spells { get; set; }

        /* 
         * Coc troops, spells, and heroes have no id, and I want them to be sorted by unlock (when they are unlocked as you progress).
         * So I created a new proterty for each troop, spell, and heroes of their id and HARDCODED their new ids.
         */
        public void ItemSort()
        {
            foreach (PlayerItemLevel item in troops)
            {
                switch (item.name)
                {
                    case "Barbarian":
                        item.id = 1;
                        break;
                    case "Archer":
                        item.id = 2;
                        break;
                    case "Giant":
                        item.id = 3;
                        break;
                    case "Goblin":
                        item.id = 4;
                        break;
                    case "Wall Breaker":
                        item.id = 5;
                        break;
                    case "Balloon":
                        item.id = 6;
                        break;
                    case "Wizard":
                        item.id = 7;
                        break;
                    case "Healer":
                        item.id = 8;
                        break;
                    case "Dragon":
                        item.id = 9;
                        break;
                    case "P.E.K.K.A":
                        item.id = 10;
                        break;
                    case "Baby Dragon":
                        if (item.village == "home") item.id = 11; // Home Village
                        if (item.village == "builderBase") item.id = 1006; // Builder Base
                        break;
                    case "Miner":
                        item.id = 12;
                        break;
                    case "Electro Dragon":
                        item.id = 13;
                        break;
                    case "Yeti":
                        item.id = 14;
                        break;
                    case "Dragon Rider":
                        item.id = 15;
                        break;
                    case "Electro Titan":
                        item.id = 16;
                        break;
                    case "Minion":
                        item.id = 101;
                        break;
                    case "Hog Rider":
                        item.id = 102;
                        break;
                    case "Valkyrie":
                        item.id = 103;
                        break;
                    case "Golem":
                        item.id = 104;
                        break;
                    case "Witch":
                        item.id = 105;
                        break;
                    case "Lava Hound":
                        item.id = 106;
                        break;
                    case "Bowler":
                        item.id = 107;
                        break;
                    case "Ice Golem":
                        item.id = 108;
                        break;
                    case "Headhunter":
                        item.id = 109;
                        break;
                    case "Apprentice Warden":
                        item.id = 110;
                        break;
                    /*
                    case "Super Barbarian":
                        item.id = 401;
                        break;
                    case "Super Archer":
                        item.id = 402;
                        break;
                    case "Super Giant":
                        item.id = 403;
                        break;
                    case "Sneaky Goblin":
                        item.id = 404;
                        break;
                    case "Super Wall Breaker":
                        item.id = 405;
                        break;
                    case "Rocket Balloon":
                        item.id = 406;
                        break;
                    case "Super Wizard":
                        item.id = 407;
                        break;
                    case "Super Dragon":
                        item.id = 409;
                        break;
                    case "Inferno Dragon":
                        item.id = 411;
                        break;
                    case "Super Miner":
                        item.id = 412;
                        break;
                    case "Super Minion":
                        item.id = 451;
                        break;
                    case "Super Hog Rider":
                        item.id = 452;
                        break;
                    case "Super Valkyrie":
                        item.id = 453;
                        break;
                    case "Super Witch":
                        item.id = 455;
                        break;
                    case "Ice Hound":
                        item.id = 456;
                        break;
                    case "Super Bowler":
                        item.id = 457;
                        break;
                    */
                    case "Wall Wrecker":
                        item.id = 501;
                        break;
                    case "Battle Blimp":
                        item.id = 502;
                        break;
                    case "Stone Slammer":
                        item.id = 503;
                        break;
                    case "Siege Barracks":
                        item.id = 504;
                        break;
                    case "Log Launcher":
                        item.id = 505;
                        break;
                    case "Flame Flinger":
                        item.id = 506;
                        break;
                    case "Battle Drill":
                        item.id = 507;
                        break;
                    case "L.A.S.S.I":
                        item.id = 601;
                        break;
                    case "Electro Owl":
                        item.id = 602;
                        break;
                    case "Mighty Yak":
                        item.id = 603;
                        break;
                    case "Unicorn":
                        item.id = 604;
                        break;
                    case "Frosty":
                        item.id = 605;
                        break;
                    case "Diggy":
                        item.id = 606;
                        break;
                    case "Poison Lizard":
                        item.id = 607;
                        break;
                    case "Phoenix":
                        item.id = 608;
                        break;
                    case "Raged Barbarian":
                        item.id = 1001;
                        break;
                    case "Sneaky Archer":
                        item.id = 1002;
                        break;
                    case "Boxer Giant":
                        item.id = 1003;
                        break;
                    case "Beta Minion":
                        item.id = 1004;
                        break;
                    case "Bomber":
                        item.id = 1005;
                        break;
                    //case "Baby Dragon":
                    //    item.id = 1006;
                    //    break;
                    case "Cannon Cart":
                        item.id = 1007;
                        break;
                    case "Night Witch":
                        item.id = 1008;
                        break;
                    case "Drop Ship":
                        item.id = 1009;
                        break;
                    case "Power P.E.K.K.A":
                        item.id = 1010;
                        break;
                    case "Hog Glider":
                        item.id = 1011;
                        break;
                    case "Electrofire Wizard":
                        item.id = 1012;
                        break;
                    default:
                        item.id = 9999;
                        break;
                }
            }
            foreach (PlayerItemLevel item in spells)
            {
                switch (item.name)
                {
                    case "Lightning Spell":
                        item.id = 201;
                        break;
                    case "Healing Spell":
                        item.id = 202;
                        break;
                    case "Rage Spell":
                        item.id = 203;
                        break;
                    case "Jump Spell":
                        item.id = 204;
                        break;
                    case "Freeze Spell":
                        item.id = 205;
                        break;
                    case "Clone Spell":
                        item.id = 206;
                        break;
                    case "Invisibility Spell":
                        item.id = 207;
                        break;
                    case "Recall Spell":
                        item.id = 208;
                        break;
                    case "Poison Spell":
                        item.id = 251;
                        break;
                    case "Earthquake Spell":
                        item.id = 252;
                        break;
                    case "Haste Spell":
                        item.id = 253;
                        break;
                    case "Skeleton Spell":
                        item.id = 254;
                        break;
                    case "Bat Spell":
                        item.id = 255;
                        break;
                    default:
                        item.id = 9999;
                        break;
                }
            }
            foreach (PlayerItemLevel item in heroes)
            {
                switch (item.name)
                {
                    case "Barbarian King":
                        item.id = 301;
                        break;
                    case "Archer Queen":
                        item.id = 302;
                        break;
                    case "Grand Warden":
                        item.id = 303;
                        break;
                    case "Royal Champion":
                        item.id = 304;
                        break;
                    case "Battle Machine":
                        item.id = 321;
                        break;
                    case "Battle Copter":
                        item.id = 322;
                        break;
                    default:
                        item.id = 9999;
                        break;
                }
            }

            troops = troops.OrderBy(i => i.id).ToList();
            spells = spells.OrderBy(i => i.id).ToList();
            heroes = heroes.OrderBy(i => i.id).ToList();
        }
    }
}
