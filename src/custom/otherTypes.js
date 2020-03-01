export const otherTypes = [
  {
    name: "Character Attributes",
    keys: [
      {
        name: "speed",
        type: "Character Speed Object",
        description: "Object containing information about character speed"
      },
      {
        name: "jump",
        type: "Character Jump Object",
        description: "Object containing information about character jump"
      },
      {
        name: "dodge",
        type: "Character Dodge Object",
        description: "Object containing information about character dodges"
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
        description: "Frame data for a character's spot dodge."
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
  }
];
