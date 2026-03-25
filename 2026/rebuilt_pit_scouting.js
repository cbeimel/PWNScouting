var config_data = `
{
  "dataFormat": "tsv",
  "title": "5962 Interview Scouting 2026",
  "page_title": "5962 PIT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grasshopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "svr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue": "x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other"
      },
      "defaultValue": "x"
    },
    { "name": "Can drive under trench?",
      "code": "utr",
      "type": "bool"
    },
    { "name": "Can drive over bump?",
      "code": "obmp",
      "type": "bool"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (lbs)",
      "tooltip": "Approximate robot weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Fuel Capacity",
      "tooltip": "How many balls can the robot hold at once?",
      "code": "fcap",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Shooter Type",
      "code": "sht",
      "type": "radio",
      "choices": {
        "fw": "Flywheel<br>",
        "hl": "Hood/Lob<br>",
        "tu": "Turret<br>",
        "ot": "Other"
      },
      "defaultValue": "ot"
    },
    { "name": "Other Shooter Type",
      "code": "shto",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Approx Balls per Second",
      "tooltip": "Approximate shooting rate",
      "code": "bps",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Floor Pickup",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot Pickup",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost Pickup",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Can pass from middle?",
      "code": "pmid",
      "type": "bool"
    },
    { "name": "Climber",
      "tooltip": "Do they have a climber? If yes, what level?",
      "code": "clm",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "x": "No Climber"
      },
      "defaultValue": "x"
    },
    { "name": "Starting Position",
      "code": "spos",
      "type": "radio",
      "choices": {
        "lt": "Under Left Trench<br>",
        "rt": "Under Right Trench<br>",
        "fh": "In Front of Hub<br>",
        "ot": "Other"
      },
      "defaultValue": "ot"
    },
    { "name": "Other Starting Position",
      "code": "sposo",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Auto: Shoot Preload",
      "tooltip": "Select all autonomous capabilities",
      "code": "ausp",
      "type": "bool"
    },
    { "name": "Auto: Human Station Reload",
      "code": "auhsr",
      "type": "bool"
    },
    { "name": "Auto: Depot Reload",
      "code": "audr",
      "type": "bool"
    },
    { "name": "Auto: Middle Reload",
      "code": "aumr",
      "type": "bool"
    },
    { "name": "Auto: Shoot Reloaded Balls",
      "code": "ausr",
      "type": "bool"
    },
    { "name": "Auto: Climb",
      "code": "aucl",
      "type": "bool"
    },
    { "name": "Approx Cycles per Game",
      "tooltip": "How many full cycles do they expect to complete per match?",
      "code": "cyc",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Best Ice Cream Flavor",
      "tooltip": "The important questions",
      "code": "icf",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Autos (description)",
      "tooltip": "Describe their autonomous routines",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method / Program",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "tooltip": "Anything else noteworthy?",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
