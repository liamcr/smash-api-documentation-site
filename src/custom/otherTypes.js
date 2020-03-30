export const otherTypes = [
  {
    name: "Character Attributes",
    id: "character-attributes",
    keys: [
      {
        name: "speed",
        type: "Character Speed Object",
        description: "Object containing information about character speed",
        linkTo: "character-speed"
      },
      {
        name: "jump",
        type: "Character Jump Object",
        description: "Object containing information about character jump",
        linkTo: "character-jump"
      },
      {
        name: "dodge",
        type: "Character Dodge Object",
        description: "Object containing information about character dodges",
        linkTo: "character-dodge"
      },
      {
        name: "traction",
        type: "Number",
        description:
          "Coded measure of how long it takes for a character to stop moving from a sideways force when grounded"
      }
    ]
  },
  {
    name: "Character Speed",
    id: "character-speed",
    keys: [
      {
        name: "airSpeed",
        type: "Number",
        description: "Coded speed of the character in the air."
      },
      {
        name: "walkSpeed",
        type: "Number",
        description: "Coded speed of the character when walking."
      },
      {
        name: "fallingSpeed",
        type: "Number",
        description: "Coded speed of the character when falling."
      },
      {
        name: "fastFallingSpeed",
        type: "Number",
        description: "Coded speed of the character when fast-falling."
      },
      {
        name: "gravity",
        type: "Number",
        description:
          "The time it takes for a character to accelerate to their maximum falling speed."
      },
      {
        name: "airAcceleration",
        type: "Object",
        description:
          "Object containing keys for the characters 'base' and 'max' accelerations."
      },
      {
        name: "dash",
        type: "Object",
        description:
          "Object containing numerical data on a character's dash. Keys include 'initialDash', 'runSpeed', 'baseAcceleration', 'additionalAcceleration', 'dashFrames', and 'pivotDashFrames'."
      }
    ]
  },
  {
    name: "Character Dodge",
    id: "character-dodge",
    keys: [
      {
        name: "airDodge",
        type: "Object",
        description:
          "An object that includes Character Dodge Data Objects for a 'neutral', 'side', 'up', and 'down' air dodge."
      },
      {
        name: "spotDodge",
        type: "Character Dodge Data Object",
        description: "Frame data for a character's spot dodge.",
        linkTo: "character-dodge-data"
      },
      {
        name: "roll",
        type: "Object",
        description:
          "An object that includes Character Dodge Data Objects for a 'back' and 'forward' roll."
      }
    ]
  },
  {
    name: "Character Dodge Data",
    id: "character-dodge-data",
    keys: [
      {
        name: "intagibilityFrames",
        type: "Object",
        description:
          "Frames for which a character is intangible. Object includes keys for both a fresh and stale dodge (Keys 'fresh' and 'fullyStale'). Each has data for the frame at which the character starts being intangible (Key: 'start'), and the frame at which the character stops being intangible (Key: 'stop')."
      },
      {
        name: "totalFrames",
        type: "Object",
        description:
          "Total number of frames for which the character is in their dodge. This object has keys 'fresh' and 'fullyStale', representing the frames for when the character's dodge is fresh or fully stale, respectively."
      }
    ]
  },
  {
    name: "Character Jump",
    id: "character-jump",
    keys: [
      {
        name: "fullHop",
        type: "Number",
        description: "Coded height of a character's jump from the ground"
      },
      {
        name: "shortHop",
        type: "Number",
        description: "Coded height of a character's short hop"
      },
      {
        name: "airJump",
        type: "Number",
        description: "Coded height of a character's air jump"
      }
    ]
  },
  {
    name: "Assist Trophy",
    id: "assist-trophy",
    keys: [
      {
        name: "assistTrophy",
        type: "String",
        description: "English display name of the assist trophy"
      },
      {
        name: "description",
        type: "String",
        description: "Description of what the assist trophy does"
      },
      {
        name: "universe",
        type: "String",
        description: "The video game series the assist trophy is from"
      }
    ]
  },
  {
    name: "Food",
    id: "food",
    keys: [
      {
        name: "food",
        type: "String",
        description: "English display name of the food"
      },
      {
        name: "healingPower",
        type: "Number",
        description: "The number of percentage points the food replenishes"
      }
    ]
  },
  {
    name: "Move",
    id: "move",
    keys: [
      {
        name: "activeFrames",
        type: "String",
        description:
          "The range of frames that a user can be hit by the move (For example: '6--7')"
      },
      {
        name: "advantages",
        type: "String",
        description:
          "The +/- refers to who can act first after an attack hits a shield. Negative meaning the defender can act before the attacker. "
      },
      {
        name: "hitboxMap",
        type: "String",
        description:
          "If there is more than one hitbox on the move, it will be specified here (For example, 'Early/Late')"
      },
      {
        name: "landingLag",
        type: "String",
        description:
          "The lag incurred when an airborne character lands on the ground"
      },
      {
        name: "notes",
        type: "String",
        description: "Miscellaneous notes about the move"
      },
      {
        name: "percentBaseDamage",
        type: "String",
        description:
          "The amount of damage in percent done to the opponent when the move connects"
      },
      {
        name: "shieldLag",
        type: "String",
        description:
          "The amount of frames both characters (attacker and opponent) are frozen when move hits opponents shield"
      },
      {
        name: "shieldStun",
        type: "String",
        description:
          "The amount of frames the opponent is stunned when the move hits their shield"
      },
      {
        name: "startup",
        type: "String",
        description:
          "Number of frames between when the user inputs the move, and when the move's hitbox becomes active"
      },
      {
        name: "totalFrames",
        type: "String",
        description: "Total number of frames for the move"
      }
    ]
  }
];
