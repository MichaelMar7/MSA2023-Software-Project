export function getImgUrl(name: string | undefined) {
    var url = "";
    switch (name) {
        // TROOPS
        case "Barbarian":
            url = "https://coc.guide/static/imgs/troop/barbarian.png";
            break;
        case "Archer":
            url = "https://coc.guide/static/imgs/troop/archer.png";
            break;
        case "Giant":
            url = "https://coc.guide/static/imgs/troop/giant.png";
            break;
        case "Goblin":
            url = "https://coc.guide/static/imgs/troop/goblin.png";
            break;
        case "Wall Breaker":
            url = "https://coc.guide/static/imgs/troop/wall-breaker.png";
            break;
        case "Balloon":
            url = "https://coc.guide/static/imgs/troop/balloon.png";
            break;
        case "Wizard":
            url = "https://coc.guide/static/imgs/troop/wizard.png";
            break;
        case "Healer":
            url = "https://coc.guide/static/imgs/troop/healer.png";
            break;
        case "Dragon":
            url = "https://coc.guide/static/imgs/troop/dragon.png";
            break;
        case "P.E.K.K.A":
            url = "https://coc.guide/static/imgs/troop/pekka.png";
            break;
        case "Baby Dragon":
            url = "https://coc.guide/static/imgs/troop/babydragon.png";
            break;
        case "Miner":
            url = "https://coc.guide/static/imgs/troop/miner.png";
            break;
        case "Electro Dragon":
            url = "https://coc.guide/static/imgs/troop/electro-dragon.png";
            break;
        case "Yeti":
            url = "https://coc.guide/static/imgs/troop/yeti.png";
            break;
        case "Dragon Rider":
            url = "https://coc.guide/static/imgs/troop/dragon-rider.png";
            break;
        case "Electro Titan":
            url = "https://coc.guide/static/imgs/troop/electro-titan.png";
            break;
        case "Minion":
            url = "https://coc.guide/static/imgs/troop/gargoyle.png";
            break;
        case "Hog Rider":
            url = "https://coc.guide/static/imgs/troop/boar-rider.png";
            break;
        case "Valkyrie":
            url = "https://coc.guide/static/imgs/troop/warrior-girl.png";
            break;
        case "Golem":
            url = "https://coc.guide/static/imgs/troop/golem.png";
            break;
        case "Witch":
            url = "https://coc.guide/static/imgs/troop/warlock.png";
            break;
        case "Lava Hound":
            url = "https://coc.guide/static/imgs/troop/airdefenceseeker.png";
            break;
        case "Bowler":
            url = "https://coc.guide/static/imgs/troop/bowler.png";
            break;
        case "Ice Golem":
            url = "https://coc.guide/static/imgs/troop/ice-golem.png";
            break;
        case "Headhunter":
            url = "https://coc.guide/static/imgs/troop/headhunter.png";
            break;
        case "Apprentice Warden":
            url = "https://coc.guide/static/imgs/troop/apprentice-warden.png";
            break;
        case "Super Barbarian":
            url = "https://coc.guide/static/imgs/troop/elitebarbarian.png";
            break;
        case "Super Archer":
            url = "https://coc.guide/static/imgs/troop/elitearcher.png";
            break;
        case "Super Giant":
            url = "https://coc.guide/static/imgs/troop/elitegiant.png";
            break;
        case "Sneaky Goblin":
            url = "https://coc.guide/static/imgs/troop/elitegoblin.png";
            break;
        case "Super Wall Breaker":
            url = "https://coc.guide/static/imgs/troop/elitewallbreaker.png";
            break;
        case "Rocket Balloon":
            url = "https://coc.guide/static/imgs/troop/hastyballoon.png";
            break;
        case "Super Wizard":
            url = "https://coc.guide/static/imgs/troop/super-wizard.png";
            break;
        case "Super Dragon":
            url = "https://coc.guide/static/imgs/troop/super-dragon.png";
            break;
        case "Inferno Dragon":
            url = "https://coc.guide/static/imgs/troop/infernodragon.png";
            break;
        case "Super Miner":
            url = "https://coc.guide/static/imgs/troop/super-miner.png";
            break;
        case "Super Minion":
            url = "https://coc.guide/static/imgs/troop/super-minion.png";
            break;
        case "Super Hog Rider":
            url = "https://coc.guide/static/imgs/troop/super-hog-rider.png";
            break;
        case "Super Valkyrie":
            url = "https://coc.guide/static/imgs/troop/elitevalkyrie.png";
            break;
        case "Super Witch":
            url = "https://coc.guide/static/imgs/troop/head-witch.png";
            break;
        case "Ice Hound":
            url = "https://coc.guide/static/imgs/troop/ice-hound.png";
            break;
        case "Super Bowler":
            url = "https://coc.guide/static/imgs/troop/super-bowler.png";
            break;
        case "Wall Wrecker":
            url = "https://coc.guide/static/imgs/troop/siege-machine-ram.png";
            break;
        case "Battle Blimp":
            url = "https://coc.guide/static/imgs/troop/siege-machine-flyer.png";
            break;
        case "Stone Slammer":
            url = "https://coc.guide/static/imgs/troop/siege-bowler-balloon.png";
            break;
        case "Siege Barracks":
            url = "https://coc.guide/static/imgs/troop/siege-machine-carrier.png";
            break;
        case "Log Launcher":
            url = "https://coc.guide/static/imgs/troop/siege-log-launcher.png";
            break;
        case "Flame Flinger":
            url = "https://coc.guide/static/imgs/troop/siege-catapult.png";
            break;
        case "Battle Drill":
            url = "https://coc.guide/static/imgs/troop/battle-drill.png";
            break;
        case "L.A.S.S.I":
            url = "https://coc.guide/static/imgs/pet/barky.png";
            break;
        case "Electro Owl":
            url = "https://coc.guide/static/imgs/pet/electrowl.png";
            break;
        case "Mighty Yak":
            url = "https://coc.guide/static/imgs/pet/bulldozer.png";
            break;
        case "Unicorn":
            url = "https://coc.guide/static/imgs/pet/unipony.png";
            break;
        case "Frosty":
            url = "https://coc.guide/static/imgs/pet/frosty.png";
            break;
        case "Diggy":
            url = "https://coc.guide/static/imgs/pet/diggy.png";
            break;
        case "Poison Lizard":
            url = "https://coc.guide/static/imgs/pet/poison-lizard.png";
            break;
        case "Phoenix":
            url = "https://coc.guide/static/imgs/pet/phoenix.png";
            break;
        case "Raged Barbarian":
            url = "https://coc.guide/static/imgs/troop/barbarian2.png";
            break;
        case "Sneaky Archer":
            url = "https://coc.guide/static/imgs/troop/archer2.png";
            break;
        case "Boxer Giant":
            url = "https://coc.guide/static/imgs/troop/giant2.png";
            break;
        case "Beta Minion":
            url = "https://coc.guide/static/imgs/troop/gargoyle2.png";
            break;
        case "Bomber":
            url = "https://coc.guide/static/imgs/troop/bomber2.png";
            break;
        //case "Baby Dragon":
        //    url = "https://coc.guide/static/imgs/troop/babydragon2.png";
        //    break;
        case "Cannon Cart":
            url = "https://coc.guide/static/imgs/troop/moving-cannon.png";
            break;
        case "Night Witch":
            url = "https://coc.guide/static/imgs/troop/dark-witch.png";
            break;
        case "Drop Ship":
            url = "https://coc.guide/static/imgs/troop/balloon2.png";
            break;
        case "Power P.E.K.K.A":
            url = "https://coc.guide/static/imgs/troop/pekka2.png";
            break;
        case "Hog Glider":
            url = "https://coc.guide/static/imgs/troop/hog-glider.png";
            break;
        case "Electrofire Wizard":
            url = "https://coc.guide/static/imgs/troop/electrofire-wizard.png";
            break;
        
        // SPELLS
        case "Lightning Spell":
            url = "https://coc.guide/static/imgs/spell/lighningstorm.png";
            break;
        case "Healing Spell":
            url = "https://coc.guide/static/imgs/spell/healingwave.png";
            break;
        case "Rage Spell":
            url = "https://coc.guide/static/imgs/spell/haste.png";
            break;
        case "Jump Spell":
            url = "https://coc.guide/static/imgs/spell/jump.png";
            break;
        case "Freeze Spell":
            url = "https://coc.guide/static/imgs/spell/freeze.png";
            break;
        case "Clone Spell":
            url = "https://coc.guide/static/imgs/spell/duplicate.png";
            break;
        case "Invisibility Spell":
            url = "https://coc.guide/static/imgs/spell/invisibility.png";
            break;
        case "Recall Spell":
            url = "https://coc.guide/static/imgs/spell/recall.png";
            break;
        case "Poison Spell":
            url = "https://coc.guide/static/imgs/spell/poison.png";
            break;
        case "Earthquake Spell":
            url = "https://coc.guide/static/imgs/spell/earthquake.png";
            break;
        case "Haste Spell":
            url = "https://coc.guide/static/imgs/spell/speedup.png";
            break;
        case "Skeleton Spell":
            url = "https://coc.guide/static/imgs/spell/spawnskele.png";
            break;
        case "Bat Spell":
            url = "https://coc.guide/static/imgs/spell/spawnbats.png";
            break;
        
        // HEROesS
        case "Barbarian King":
            url = "https://coc.guide/static/imgs/hero/barbarian-king.png";
            break;
        case "Archer Queen":
            url = "https://coc.guide/static/imgs/hero/archer-queen.png";
            break;
        case "Grand Warden":
            url = "https://coc.guide/static/imgs/hero/grand-warden.png";
            break;
        case "Royal Champion":
            url = "https://coc.guide/static/imgs/hero/royal-champion.png";
            break;
        case "Battle Machine":
            url = "https://coc.guide/static/imgs/hero/warmachine.png";
            break;
        case "Battle Copter":
            url = "https://coc.guide/static/imgs/hero/battle-copter.png";
            break;
    }
    return url;
}