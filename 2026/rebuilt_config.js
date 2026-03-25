var config_data = `
{
  "dataFormat": "tsv",
  "title": "5962 Match Review Scouting 2026",
  "page_title": "5962 REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Start Location",
      "tooltip": "Where did the robot start? Click on the map AND select the named zone below.",
      "code": "asl_zone",
      "type": "radio",
      "choices": {
        "lt": "Under Left Trench<br>",
        "rt": "Under Right Trench<br>",
        "fh": "In Front of Hub<br>",
        "ot": "Other"
      },
      "defaultValue": "ot"
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Shooting Location",
      "code": "ashl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 5,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Scored",
      "code": "afs",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "apn",
      "expectedMax": 60,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Shoot Preload",
      "tooltip": "Select all auto actions that apply",
      "code": "aasp",
      "type": "bool"
    },
    { "name": "Human Station Reload",
      "code": "aahsr",
      "type": "bool"
    },
    { "name": "Depot Reload",
      "code": "aadr",
      "type": "bool"
    },
    { "name": "Middle Reload",
      "code": "aamr",
      "type": "bool"
    },
    { "name": "Shoot Reload",
      "code": "aasr",
      "type": "bool"
    },
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "c": "Climbed<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
  ],
  "teleop": [
    { "name": "Shooting Locations",
      "code": "tsl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 25,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Scored",
      "code": "tfs",
      "expectedMax": 150,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Teleop Cycles",
      "tooltip": "How many full cycles (pickup + score) did this robot complete in teleop?",
      "code": "tcyc",
      "expectedMax": 20,
      "altInc1": 5,
      "altInc2": 1,
      "type": "counter"
    },
    { "name": "Passing Quality",
      "tooltip": "Overall quality of this robot's passing game",
      "code": "pmq",
      "type": "radio",
      "choices": {
        "vw": "Very Well<br>",
        "ok": "Okay<br>",
        "no": "No Passing"
      },
      "defaultValue": "no"
    },
    { "name": "Pickup from Depot",
      "code": "tfd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "tfo",
      "type": "bool"
    },
    { "name": "Pickup from Floor",
      "code": "tff",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "No Climb"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Played",
      "tooltip": "Did this robot play defense? If yes, how well?",
      "code": "dr",
      "type": "radio",
      "choices": {
        "g": "Yes (Good)<br>",
        "b": "Yes (Not Good)<br>",
        "n": "No Defense"
      },
      "defaultValue": "n"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue": "3"
    },
    { "name": "Crossed Trench",
      "tooltip": "Did the robot drive under the trench?",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Crossed Bump",
      "tooltip": "Did the robot drive over the bump?",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Fuel Percentage",
      "tooltip": "What percentage of the total fuel for this alliance did this robot score?",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 100
    },
    { "name": "Comments",
      "tooltip": "Anything else noteworthy about this robot?",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
