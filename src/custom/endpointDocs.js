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
  }
];
