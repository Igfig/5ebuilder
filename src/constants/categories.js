import { max, min } from "../util/misc";
import { OrderedDict } from "../classes/ordered_dict";
import { ArmorWeight } from "../classes/armor";

// XXX might move to stats.js? Doesn't matter all that much, just yknow
export const SIZES = new OrderedDict(
  {
    TINY: {
      label: "tiny",
      hd: 4,
      weaponDice: 1,
      reach: 5,
      speed: 10
    },
    SMALL: {
      label: "small",
      hd: 6,
      weaponDice: 1,
      reach: 5,
      speed: 20
    },
    MEDIUM: {
      label: "medium",
      hd: 8,
      weaponDice: 1,
      reach: 5,
      speed: 30
    },
    LARGE: {
      label: "large",
      hd: 10,
      weaponDice: 2,
      reach: 10,
      speed: 40
    },
    HUGE: {
      label: "huge",
      hd: 12,
      weaponDice: 3,
      reach: 10,
      speed: 50
    },
    GARGANTUAN: {
      label: "gargantuan",
      hd: 20,
      weaponDice: 4,
      reach: 15,
      speed: 60
    }
  },
  OrderedDict.compare("hd")
);

export const TYPES = new OrderedDict({
  ABERRATION: "aberration",
  BEAST: "beast",
  CELESTIAL: "celestial",
  CONSTRUCT: "construct", // typically immune to several conditions, and sometimes more
  DRAGON: "dragon",
  ELEMENTAL: "elemental",
  FEY: "fey", // typically immune to charm?
  FIEND: "fiend",
  GIANT: { label: "giant", require: { size: min(SIZES.LARGE, SIZES) } }, // TODO give this metadata an actual effect
  HUMANOID: { label: "humanoid", require: { size: max(SIZES.LARGE, SIZES) } }, // XXX even then that's a bit big... the only large humanoids in the books are sahuagin barons. Maybe we can have one threshold for warnings?
  MONSTROSITY: "monstrosity",
  OOZE: "ooze",
  PLANT: "plant",
  UNDEAD: "undead"
});

// XXX this probably wants to be more complex actually, since some of these come with specific stat effects. e.g. all devils are immune to fire and poison
export const SUBTYPES = new OrderedDict({
  ANY_RACE: "any race",
  AARAKOCRA: "aarakocra",
  AIR: "air",
  BULLYWUG: "bullywug",
  DEMON: "demon",
  DERRO: "derro",
  DEVIL: "devil",
  DINOSAUR: "dinosaur",
  DROW: "drow",
  DWARF: "dwarf",
  EARTH: "earth",
  ELF: "elf",
  FIRE: "fire",
  GENASI: "genasi",
  GENIE: "genie",
  GITH: "gith",
  GNOLL: "gnoll",
  GNOME: "gnome",
  GOBLINOID: "goblinoid",
  GRIMLOCK: "grimlock",
  GRUNG: "grung",
  HALF_DRAGON: "half-dragon",
  HALF_ORC: "half-orc",
  HALF_ELF: "half-elf",
  HALFLING: "halfling",
  HUMAN: "human",
  INEVITABLE: { label: "inevitable", require: { type: TYPES.CONSTRUCT } }, //TODO make require actually do something. (It should do a warning or something if you break the requirements)
  KENKU: "kenku",
  KOBOLD: "kobold",
  KUO_TOA: "kuo-toa",
  ORC: "orc",
  QUAGGOTH: "quaggoth",
  SAHUAGIN: "sahuagin",
  SHAPECHANGER: "shapechanger",
  SWARM: "swarm",
  TABAXI: "tabaxi",
  THRI_KREEN: "thri-kreen",
  TIEFLING: "tiefling",
  TITAN: { label: "titan", require: { size: min(SIZES.HUGE, SIZES) } },
  TORTLE: "tortle",
  YUAN_TI: "yuan-ti",
  WATER: "water",
  YUGOLOTH: "yugoloth"
});

export const ALIGNMENTS = new OrderedDict(
  {
    LG: { label: "LG", text: "lawful good", order: 1 },
    NG: { label: "NG", text: "neutral good", order: 2 },
    CG: { label: "CG", text: "chaotic good", order: 3 },
    LN: { label: "LN", text: "lawful neutral", order: 4 },
    N: { label: "N", text: "true neutral", order: 5 },
    CN: { label: "CN", text: "chaotic neutral", order: 6 },
    LE: { label: "LE", text: "lawful evil", order: 7 },
    NE: { label: "NE", text: "neutral evil", order: 8 },
    CE: { label: "CE", text: "chaotic evil", order: 9 },
    UNALIGNED: { label: "Unaligned", text: "unaligned", order: 10 },
    ANY: { label: "Any", text: "any alignment", order: 11 }
  },
  OrderedDict.compare("order")
);

export const ARMOR_WEIGHTS = new OrderedDict(
  {
    LIGHT: new ArmorWeight(0, "Light Armor"),
    MEDIUM: new ArmorWeight(1, "Medium Armor"),
    HEAVY: new ArmorWeight(2, "Heavy Armor")
    //UNARMORED_DEFENSE: new ArmorWeight(3, "Unarmored Defense") // not calling it UNARMORED because that might confuse with the NONE armor
  },
  OrderedDict.compare("order")
);
