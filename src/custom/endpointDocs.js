export const endpointDocs = [
  {
    endpointName: "Characters",
    id: "characters-endpoint",
    usages: [
      {
        path: "/characters",
        url: "https://api.smashultimate.ca/characters",
        description:
          "When invoked without the 'ids' parameter, will return an array with every character.",
        queryParamKeys: [],
        responseFormat: {
          description: "An array of character objects",
          objectName: "Character Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the character"
            },
            {
              key: "displayName",
              valueType: "String",
              valueDescription: "The english display name of the character"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription: "The video game series the character is from"
            },
            {
              key: "images",
              valueType: "Array(String)",
              valueDescription:
                "The Array of URLs at which an image of the character is hosted"
            },
            {
              key: "attributes",
              valueType: "Character Attributes Object",
              valueDescription:
                "Object containing all character attribute info",
              linkTo: "character-attributes"
            }
          ]
        }
      },
      {
        path: "/characters?ids={ids}",
        url: "https://api.smashultimate.ca/characters?ids={ids}",
        description:
          "When passed a comma-separated list of ids, returns an array of the corresponding characters.",
        queryParamKeys: [
          {
            parameter: "ids",
            value: "A comma-separated list of character ids"
          }
        ],
        responseFormat: {
          description: "An array of character objects",
          objectName: "Character Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the character"
            },
            {
              key: "displayName",
              valueType: "String",
              valueDescription: "The english display name of the character"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription: "The video game series the character is from"
            },
            {
              key: "images",
              valueType: "Array(String)",
              valueDescription:
                "The Array of URLs at which an image of the character is hosted"
            },
            {
              key: "attributes",
              valueType: "Character Attributes Object",
              valueDescription:
                "Object containing all character attribute info",
              linkTo: "character-attributes"
            }
          ]
        }
      }
    ]
  },
  {
    endpointName: "Stages",
    id: "stages-endpoint",
    usages: [
      {
        path: "/stages",
        url: "https://api.smashultimate.ca/stages",
        description:
          "When invoked without the 'ids' parameter, will return an array with every stage.",
        queryParamKeys: [],
        responseFormat: {
          description: "An array of stage objects",
          objectName: "Stage Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the stage"
            },
            {
              key: "introducedIn",
              valueType: "String",
              valueDescription:
                "The name of the game this stage was introduced in"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription: "The video game series the stage is from"
            },
            {
              key: "isStarterStage",
              valueType: "Boolean",
              valueDescription:
                "True if the stage is unlocked from the start of the game, without DLC"
            },
            {
              key: "stageName",
              valueType: "String",
              valueDescription: "The english name of the stage"
            }
          ]
        }
      },
      {
        path: "/stages?ids={ids}",
        url: "https://api.smashultimate.ca/stages?ids={ids}",
        description:
          "When passed a comma-separated list of ids, returns an array of the corresponding stages.",
        queryParamKeys: [
          {
            parameter: "ids",
            value: "A comma-separated list of stage ids"
          }
        ],
        responseFormat: {
          description: "An array of stage objects",
          objectName: "Stage Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the stage"
            },
            {
              key: "introducedIn",
              valueType: "String",
              valueDescription:
                "The name of the game this stage was introduced in"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription: "The video game series the stage is from"
            },
            {
              key: "isStarterStage",
              valueType: "Boolean",
              valueDescription:
                "True if the stage is unlocked from the start of the game, without DLC"
            },
            {
              key: "stageName",
              valueType: "String",
              valueDescription: "The english name of the stage"
            }
          ]
        }
      }
    ]
  },
  {
    endpointName: "Items",
    id: "items-endpoint",
    usages: [
      {
        path: "/items",
        url: "https://api.smashultimate.ca/items",
        description:
          "When invoked without the 'ids' parameter, will return an array with every item.",
        queryParamKeys: [],
        responseFormat: {
          description: "An array of item objects",
          objectName: "Item Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the item"
            },
            {
              key: "description",
              valueType: "String",
              valueDescription: "A short description about what the item does"
            },
            {
              key: "itemName",
              valueType: "String",
              valueDescription: "The english name of the item"
            },
            {
              key: "duration",
              valueType: "Number",
              valueDescription:
                "(OPTIONAL) The amount of time in seconds the item's effects last"
            },
            {
              key: "itemClass",
              valueType: "String",
              valueDescription:
                "(OPTIONAL) The type of item (For example, 'Defending', 'Shooting', etc.)"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription:
                "(OPTIONAL) The video game series the item is from"
            },
            {
              key: "assistTrophy",
              valueType: "Assist Trophy Object",
              valueDescription:
                "(OPTIONAL) An array of assist trophy objects. Contains information on all assist trophies",
              linkTo: "assist-trophy"
            },
            {
              key: "foodItems",
              valueType: "Food Object",
              valueDescription:
                "(OPTIONAL) An array of food objects. Contains information on all food items",
              linkTo: "food"
            }
          ]
        }
      },
      {
        path: "/items?ids={ids}",
        url: "https://api.smashultimate.ca/items?ids={ids}",
        description:
          "When passed a comma-separated list of ids, returns an array of the corresponding items.",
        queryParamKeys: [
          {
            parameter: "ids",
            value: "A comma-separated list of item ids"
          }
        ],
        responseFormat: {
          description: "An array of item objects",
          objectName: "Item Object",
          responseObjectKeys: [
            {
              key: "id",
              valueType: "Number",
              valueDescription: "The unique id of the item"
            },
            {
              key: "description",
              valueType: "String",
              valueDescription: "A short description about what the item does"
            },
            {
              key: "itemName",
              valueType: "String",
              valueDescription: "The english name of the item"
            },
            {
              key: "duration",
              valueType: "Number",
              valueDescription:
                "(OPTIONAL) The amount of time in seconds the item's effects last"
            },
            {
              key: "itemClass",
              valueType: "String",
              valueDescription:
                "(OPTIONAL) The type of item (For example, 'Defending', 'Shooting', etc.)"
            },
            {
              key: "universe",
              valueType: "String",
              valueDescription:
                "(OPTIONAL) The video game series the item is from"
            },
            {
              key: "assistTrophy",
              valueType: "Assist Trophy Object",
              valueDescription:
                "(OPTIONAL) An array of assist trophy objects. Contains information on all assist trophies",
              linkTo: "assist-trophy"
            },
            {
              key: "foodItems",
              valueType: "Food Object",
              valueDescription:
                "(OPTIONAL) An array of food objects. Contains information on all food items",
              linkTo: "food"
            }
          ]
        }
      }
    ]
  },
  {
    endpointName: "Moves",
    id: "moves-endpoint",
    usages: [
      {
        path: "/moves",
        url: "https://api.smashultimate.ca/moves",
        description:
          "When invoked without the 'ids' parameter, will return an array with every character, along with their moves.",
        queryParamKeys: [],
        responseFormat: {
          description: "An array of character move objects",
          objectName: "Character Move Object",
          responseObjectKeys: [
            {
              key: "charID",
              valueType: "Number",
              valueDescription: "The unique id of the character"
            },
            {
              key: "name",
              valueType: "String",
              valueDescription: "The english display name of the character"
            },
            {
              key: "moves",
              valueType: "Move Object",
              valueDescription:
                "An array of maps, each map contains an array of move objects. The array of move objects is accessible by accessing the key of the map denoted by the move name (for example, 'Jab 1' or 'Neutral Air')",
              linkTo: "move"
            }
          ]
        }
      },
      {
        path: "/moves?ids={ids}",
        url: "https://api.smashultimate.ca/moves?ids={ids}",
        description:
          "When passed a comma-separated list of ids, returns an array of the corresponding characters, along with their moves.",
        queryParamKeys: [
          {
            parameter: "ids",
            value: "A comma-separated list of character ids"
          }
        ],
        responseFormat: {
          description: "An array of character move objects",
          objectName: "Character Move Object",
          responseObjectKeys: [
            {
              key: "charID",
              valueType: "Number",
              valueDescription: "The unique id of the character"
            },
            {
              key: "name",
              valueType: "String",
              valueDescription: "The english display name of the character"
            },
            {
              key: "moves",
              valueType: "Move Object",
              valueDescription:
                "An array of maps, each map contains an array of move objects. The array of move objects is accessible by accessing the key of the map denoted by the move name (for example, 'Jab 1' or 'Neutral Air')",
              linkTo: "move"
            }
          ]
        }
      }
    ]
  }
];
