[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "labyrinth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "Action",
          "package": "labyrinth",
          "source": "src/Labyrinth-Action.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "Action",
          "package": "labyrinth",
          "partial": "Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "ActionState",
          "package": "labyrinth",
          "source": "src/Labyrinth-Action.html#ActionState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "ActionState",
          "package": "labyrinth",
          "partial": "Action State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#t:ActionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "AmmoLocation",
          "package": "labyrinth",
          "source": "src/Labyrinth-Action.html#AmmoLocation",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "AmmoLocation",
          "package": "labyrinth",
          "partial": "Ammo Location",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#t:AmmoLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "advancePlayer",
          "package": "labyrinth",
          "signature": "ActionState (Maybe PlayerId)",
          "source": "src/Labyrinth-Action.html#advancePlayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "advancePlayer",
          "package": "labyrinth",
          "partial": "Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:advancePlayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "alivePlayers",
          "package": "labyrinth",
          "signature": "LabState m [PlayerId]",
          "source": "src/Labyrinth-Action.html#alivePlayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "alivePlayers",
          "normalized": "LabState a[PlayerId]",
          "package": "labyrinth",
          "partial": "Players",
          "signature": "LabState m[PlayerId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:alivePlayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "allPlayers",
          "package": "labyrinth",
          "signature": "LabState m [PlayerId]",
          "source": "src/Labyrinth-Action.html#allPlayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "allPlayers",
          "normalized": "LabState a[PlayerId]",
          "package": "labyrinth",
          "partial": "Players",
          "signature": "LabState m[PlayerId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:allPlayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "alwaysContinue",
          "package": "labyrinth",
          "signature": "[Action] -\u003e ActionState ActionResult -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#alwaysContinue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "alwaysContinue",
          "normalized": "[Action]-\u003eActionState ActionResult-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Continue",
          "signature": "[Action]-\u003eActionState ActionResult-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:alwaysContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "cellActions",
          "package": "labyrinth",
          "signature": "Bool -\u003e ActionState (CellTypeResult, CellEvents)",
          "source": "src/Labyrinth-Action.html#cellActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "cellActions",
          "normalized": "Bool-\u003eActionState(CellTypeResult,CellEvents)",
          "package": "labyrinth",
          "partial": "Actions",
          "signature": "Bool-\u003eActionState(CellTypeResult,CellEvents)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:cellActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "dropBullets",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#dropBullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "dropBullets",
          "normalized": "PlayerId-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Bullets",
          "signature": "PlayerId-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:dropBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "dropGrenades",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#dropGrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "dropGrenades",
          "normalized": "PlayerId-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Grenades",
          "signature": "PlayerId-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:dropGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "dropTreasure",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#dropTreasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "dropTreasure",
          "normalized": "PlayerId-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Treasure",
          "signature": "PlayerId-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:dropTreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "isFallen",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e LabState m Bool",
          "source": "src/Labyrinth-Action.html#isFallen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "isFallen",
          "normalized": "PlayerId-\u003eLabState a Bool",
          "package": "labyrinth",
          "partial": "Fallen",
          "signature": "PlayerId-\u003eLabState m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:isFallen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "isMovement",
          "package": "labyrinth",
          "signature": "Action -\u003e Bool",
          "source": "src/Labyrinth-Action.html#isMovement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "isMovement",
          "normalized": "Action-\u003eBool",
          "package": "labyrinth",
          "partial": "Movement",
          "signature": "Action-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:isMovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "matchResult",
          "package": "labyrinth",
          "signature": "String -\u003e ActionState Bool",
          "source": "src/Labyrinth-Action.html#matchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "matchResult",
          "normalized": "String-\u003eActionState Bool",
          "package": "labyrinth",
          "partial": "Result",
          "signature": "String-\u003eActionState Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:matchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "nextPit",
          "package": "labyrinth",
          "signature": "Int -\u003e LabState m Int",
          "source": "src/Labyrinth-Action.html#nextPit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "nextPit",
          "normalized": "Int-\u003eLabState a Int",
          "package": "labyrinth",
          "partial": "Pit",
          "signature": "Int-\u003eLabState m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:nextPit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "notFallen",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e LabState m Bool",
          "source": "src/Labyrinth-Action.html#notFallen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "notFallen",
          "normalized": "PlayerId-\u003eLabState a Bool",
          "package": "labyrinth",
          "partial": "Fallen",
          "signature": "PlayerId-\u003eLabState m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:notFallen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "onlyWhenChosen",
          "package": "labyrinth",
          "signature": "ActionState () -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#onlyWhenChosen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "onlyWhenChosen",
          "normalized": "ActionState()-\u003eActionState()",
          "package": "labyrinth",
          "partial": "When Chosen",
          "signature": "ActionState()-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:onlyWhenChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "onlyWhenCurrent",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e ActionState () -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#onlyWhenCurrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "onlyWhenCurrent",
          "normalized": "PlayerId-\u003eActionState()-\u003eActionState()",
          "package": "labyrinth",
          "partial": "When Current",
          "signature": "PlayerId-\u003eActionState()-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:onlyWhenCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performActions",
          "package": "labyrinth",
          "signature": "[Action] -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performActions",
          "normalized": "[Action]-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Actions",
          "signature": "[Action]-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performConditional",
          "package": "labyrinth",
          "signature": "Action -\u003e [Action] -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performConditional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performConditional",
          "normalized": "Action-\u003e[Action]-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Conditional",
          "signature": "Action-\u003e[Action]-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performConditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performGrenade",
          "package": "labyrinth",
          "signature": "Direction -\u003e ActionState ActionResult",
          "source": "src/Labyrinth-Action.html#performGrenade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performGrenade",
          "normalized": "Direction-\u003eActionState ActionResult",
          "package": "labyrinth",
          "partial": "Grenade",
          "signature": "Direction-\u003eActionState ActionResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performGrenade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Labyrinth.Action\",\"Labyrinth\"]",
          "name": "performMove",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e Move -\u003e State Labyrinth MoveResult",
          "source": "src/Labyrinth-Action.html#performMove",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performMove\",\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth.html#v:performMove\"]"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performMove",
          "normalized": "PlayerId-\u003eMove-\u003eState Labyrinth MoveResult",
          "package": "labyrinth",
          "partial": "Move",
          "signature": "PlayerId-\u003eMove-\u003eState Labyrinth MoveResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performMove'",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e Move -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performMove%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performMove'",
          "normalized": "PlayerId-\u003eMove-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Move'",
          "signature": "PlayerId-\u003eMove-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performMove-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performMovement",
          "package": "labyrinth",
          "signature": "MoveDirection -\u003e [Action] -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performMovement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performMovement",
          "normalized": "MoveDirection-\u003e[Action]-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Movement",
          "signature": "MoveDirection-\u003e[Action]-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performMovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performQueries",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e [QueryType] -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performQueries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performQueries",
          "normalized": "PlayerId-\u003e[QueryType]-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Queries",
          "signature": "PlayerId-\u003e[QueryType]-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performQuery",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e QueryType -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#performQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performQuery",
          "normalized": "PlayerId-\u003eQueryType-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Query",
          "signature": "PlayerId-\u003eQueryType-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performShoot",
          "package": "labyrinth",
          "signature": "Direction -\u003e ActionState ActionResult",
          "source": "src/Labyrinth-Action.html#performShoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performShoot",
          "normalized": "Direction-\u003eActionState ActionResult",
          "package": "labyrinth",
          "partial": "Shoot",
          "signature": "Direction-\u003eActionState ActionResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performShoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performShootFrom",
          "package": "labyrinth",
          "signature": "Position -\u003e Direction -\u003e ActionState ShootResult",
          "source": "src/Labyrinth-Action.html#performShootFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performShootFrom",
          "normalized": "Position-\u003eDirection-\u003eActionState ShootResult",
          "package": "labyrinth",
          "partial": "Shoot From",
          "signature": "Position-\u003eDirection-\u003eActionState ShootResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performShootFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "performSurrender",
          "package": "labyrinth",
          "signature": "ActionState ()",
          "source": "src/Labyrinth-Action.html#performSurrender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "performSurrender",
          "normalized": "ActionState()",
          "package": "labyrinth",
          "partial": "Surrender",
          "signature": "ActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:performSurrender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "pickBullets",
          "package": "labyrinth",
          "signature": "ActionState Int",
          "source": "src/Labyrinth-Action.html#pickBullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "pickBullets",
          "package": "labyrinth",
          "partial": "Bullets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:pickBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "pickGrenades",
          "package": "labyrinth",
          "signature": "ActionState Int",
          "source": "src/Labyrinth-Action.html#pickGrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "pickGrenades",
          "package": "labyrinth",
          "partial": "Grenades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:pickGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "pickInside",
          "package": "labyrinth",
          "signature": "ActionState Int -\u003e ActionState Int",
          "source": "src/Labyrinth-Action.html#pickInside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "pickInside",
          "normalized": "ActionState Int-\u003eActionState Int",
          "package": "labyrinth",
          "partial": "Inside",
          "signature": "ActionState Int-\u003eActionState Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:pickInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "pickTreasures",
          "package": "labyrinth",
          "signature": "ActionState Int",
          "source": "src/Labyrinth-Action.html#pickTreasures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "pickTreasures",
          "package": "labyrinth",
          "partial": "Treasures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:pickTreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "playerAlive",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e LabState m Bool",
          "source": "src/Labyrinth-Action.html#playerAlive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "playerAlive",
          "normalized": "PlayerId-\u003eLabState a Bool",
          "package": "labyrinth",
          "partial": "Alive",
          "signature": "PlayerId-\u003eLabState m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:playerAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "playerAt",
          "package": "labyrinth",
          "signature": "Position -\u003e PlayerId -\u003e LabState m Bool",
          "source": "src/Labyrinth-Action.html#playerAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "playerAt",
          "normalized": "Position-\u003ePlayerId-\u003eLabState a Bool",
          "package": "labyrinth",
          "partial": "At",
          "signature": "Position-\u003ePlayerId-\u003eLabState m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:playerAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "playersAliveAt",
          "package": "labyrinth",
          "signature": "Position -\u003e LabState m [PlayerId]",
          "source": "src/Labyrinth-Action.html#playersAliveAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "playersAliveAt",
          "normalized": "Position-\u003eLabState a[PlayerId]",
          "package": "labyrinth",
          "partial": "Alive At",
          "signature": "Position-\u003eLabState m[PlayerId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:playersAliveAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "putResult",
          "package": "labyrinth",
          "signature": "ActionResult -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#putResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "putResult",
          "normalized": "ActionResult-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Result",
          "signature": "ActionResult-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:putResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "returnContinue",
          "package": "labyrinth",
          "signature": "[Action] -\u003e ActionResult -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#returnContinue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "returnContinue",
          "normalized": "[Action]-\u003eActionResult-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Continue",
          "signature": "[Action]-\u003eActionResult-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:returnContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "transferAmmo",
          "package": "labyrinth",
          "signature": "Maybe Int -\u003e AmmoLocation -\u003e AmmoLocation -\u003e ActionState Int",
          "source": "src/Labyrinth-Action.html#transferAmmo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "transferAmmo",
          "normalized": "Maybe Int-\u003eAmmoLocation-\u003eAmmoLocation-\u003eActionState Int",
          "package": "labyrinth",
          "partial": "Ammo",
          "signature": "Maybe Int-\u003eAmmoLocation-\u003eAmmoLocation-\u003eActionState Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:transferAmmo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Action",
          "name": "transferAmmo_",
          "package": "labyrinth",
          "signature": "Maybe Int -\u003e AmmoLocation -\u003e AmmoLocation -\u003e ActionState ()",
          "source": "src/Labyrinth-Action.html#transferAmmo_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Action",
          "module": "Labyrinth.Action",
          "name": "transferAmmo_",
          "normalized": "Maybe Int-\u003eAmmoLocation-\u003eAmmoLocation-\u003eActionState()",
          "package": "labyrinth",
          "partial": "Ammo",
          "signature": "Maybe Int-\u003eAmmoLocation-\u003eAmmoLocation-\u003eActionState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Action.html#v:transferAmmo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Common",
          "name": "Common",
          "package": "labyrinth",
          "source": "src/Labyrinth-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Common",
          "module": "Labyrinth.Common",
          "name": "Common",
          "package": "labyrinth",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Common",
          "name": "LabState",
          "package": "labyrinth",
          "source": "src/Labyrinth-Common.html#LabState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Common",
          "module": "Labyrinth.Common",
          "name": "LabState",
          "package": "labyrinth",
          "partial": "Lab State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Common.html#t:LabState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "Generate",
          "package": "labyrinth",
          "source": "src/Labyrinth-Generate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "Generate",
          "package": "labyrinth",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "CellPredicate",
          "package": "labyrinth",
          "source": "src/Labyrinth-Generate.html#CellPredicate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "CellPredicate",
          "package": "labyrinth",
          "partial": "Cell Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#t:CellPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "CellPredicateR",
          "package": "labyrinth",
          "source": "src/Labyrinth-Generate.html#CellPredicateR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "CellPredicateR",
          "package": "labyrinth",
          "partial": "Cell Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#t:CellPredicateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "LabGen",
          "package": "labyrinth",
          "source": "src/Labyrinth-Generate.html#LabGen",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "LabGen",
          "package": "labyrinth",
          "partial": "Lab Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#t:LabGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "allNeighbors",
          "package": "labyrinth",
          "signature": "CellPredicate m -\u003e CellPredicate m",
          "source": "src/Labyrinth-Generate.html#allNeighbors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "allNeighbors",
          "normalized": "CellPredicate a-\u003eCellPredicate a",
          "package": "labyrinth",
          "partial": "Neighbors",
          "signature": "CellPredicate m-\u003eCellPredicate m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:allNeighbors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "allOf",
          "package": "labyrinth",
          "signature": "[a -\u003e m Bool] -\u003e a -\u003e m Bool",
          "source": "src/Labyrinth-Generate.html#allOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "allOf",
          "normalized": "[a-\u003eb Bool]-\u003ea-\u003eb Bool",
          "package": "labyrinth",
          "partial": "Of",
          "signature": "[a-\u003em Bool]-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:allOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "area",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int",
          "source": "src/Labyrinth-Generate.html#area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "area",
          "normalized": "Labyrinth-\u003eInt",
          "package": "labyrinth",
          "signature": "Labyrinth-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "cellIf",
          "package": "labyrinth",
          "signature": "CellPredicateR g -\u003e LabGen g Position",
          "source": "src/Labyrinth-Generate.html#cellIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "cellIf",
          "normalized": "CellPredicateR a-\u003eLabGen a Position",
          "package": "labyrinth",
          "partial": "If",
          "signature": "CellPredicateR g-\u003eLabGen g Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:cellIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "chooseRandomR",
          "package": "labyrinth",
          "signature": "[a] -\u003e LabGen g a",
          "source": "src/Labyrinth-Generate.html#chooseRandomR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "chooseRandomR",
          "normalized": "[a]-\u003eLabGen b a",
          "package": "labyrinth",
          "partial": "Random",
          "signature": "[a]-\u003eLabGen g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:chooseRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "foldTimes",
          "package": "labyrinth",
          "signature": "a -\u003e Int -\u003e (a -\u003e m a) -\u003e m a",
          "source": "src/Labyrinth-Generate.html#foldTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "foldTimes",
          "normalized": "a-\u003eInt-\u003e(a-\u003eb a)-\u003eb a",
          "package": "labyrinth",
          "partial": "Times",
          "signature": "a-\u003eInt-\u003e(a-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:foldTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "foldTimes_",
          "package": "labyrinth",
          "signature": "a -\u003e Int -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "src/Labyrinth-Generate.html#foldTimes_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "foldTimes_",
          "normalized": "a-\u003eInt-\u003e(a-\u003eb a)-\u003eb()",
          "package": "labyrinth",
          "partial": "Times",
          "signature": "a-\u003eInt-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:foldTimes_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "generate",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures -\u003e LabGen g ()",
          "source": "src/Labyrinth-Generate.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "generate",
          "normalized": "LabyrinthFeatures-\u003eLabGen a()",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures-\u003eLabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Labyrinth.Generate\",\"Labyrinth\"]",
          "name": "generateLabyrinth",
          "package": "labyrinth",
          "signature": "LabyrinthParams -\u003e g -\u003e (Labyrinth, g)",
          "source": "src/Labyrinth-Generate.html#generateLabyrinth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:generateLabyrinth\",\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth.html#v:generateLabyrinth\"]"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "generateLabyrinth",
          "normalized": "LabyrinthParams-\u003ea-\u003e(Labyrinth,a)",
          "package": "labyrinth",
          "partial": "Labyrinth",
          "signature": "LabyrinthParams-\u003eg-\u003e(Labyrinth,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:generateLabyrinth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "goodDistribution",
          "package": "labyrinth",
          "signature": "LabState m Bool",
          "source": "src/Labyrinth-Generate.html#goodDistribution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "goodDistribution",
          "package": "labyrinth",
          "partial": "Distribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:goodDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "goodReachability",
          "package": "labyrinth",
          "signature": "LabState m Bool",
          "source": "src/Labyrinth-Generate.html#goodReachability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "goodReachability",
          "package": "labyrinth",
          "partial": "Reachability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:goodReachability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "hasLandAround",
          "package": "labyrinth",
          "signature": "CellPredicate m",
          "source": "src/Labyrinth-Generate.html#hasLandAround",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "hasLandAround",
          "package": "labyrinth",
          "partial": "Land Around",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:hasLandAround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "hasWall",
          "package": "labyrinth",
          "signature": "Direction -\u003e CellPredicate m",
          "source": "src/Labyrinth-Generate.html#hasWall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "hasWall",
          "normalized": "Direction-\u003eCellPredicate a",
          "package": "labyrinth",
          "partial": "Wall",
          "signature": "Direction-\u003eCellPredicate m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:hasWall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "isArmoryHospital",
          "package": "labyrinth",
          "signature": "CellPredicate m",
          "source": "src/Labyrinth-Generate.html#isArmoryHospital",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "isArmoryHospital",
          "package": "labyrinth",
          "partial": "Armory Hospital",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:isArmoryHospital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "isLand",
          "package": "labyrinth",
          "signature": "CellPredicate m",
          "source": "src/Labyrinth-Generate.html#isLand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "isLand",
          "package": "labyrinth",
          "partial": "Land",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:isLand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "isType",
          "package": "labyrinth",
          "signature": "CellType -\u003e CellPredicate m",
          "source": "src/Labyrinth-Generate.html#isType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "isType",
          "normalized": "CellType-\u003eCellPredicate a",
          "package": "labyrinth",
          "partial": "Type",
          "signature": "CellType-\u003eCellPredicate m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:isType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "isTypeF",
          "package": "labyrinth",
          "signature": "(CellType -\u003e Bool) -\u003e CellPredicate m",
          "source": "src/Labyrinth-Generate.html#isTypeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "isTypeF",
          "normalized": "(CellType-\u003eBool)-\u003eCellPredicate a",
          "package": "labyrinth",
          "partial": "Type",
          "signature": "(CellType-\u003eBool)-\u003eCellPredicate m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:isTypeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "landCellThere",
          "package": "labyrinth",
          "signature": "Position -\u003e Direction -\u003e LabState m Bool",
          "source": "src/Labyrinth-Generate.html#landCellThere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "landCellThere",
          "normalized": "Position-\u003eDirection-\u003eLabState a Bool",
          "package": "labyrinth",
          "partial": "Cell There",
          "signature": "Position-\u003eDirection-\u003eLabState m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:landCellThere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "neighbors",
          "package": "labyrinth",
          "signature": "Position -\u003e LabState m [Position]",
          "source": "src/Labyrinth-Generate.html#neighbors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "neighbors",
          "normalized": "Position-\u003eLabState a[Position]",
          "package": "labyrinth",
          "signature": "Position-\u003eLabState m[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:neighbors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "noTreasures",
          "package": "labyrinth",
          "signature": "CellPredicate m",
          "source": "src/Labyrinth-Generate.html#noTreasures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "noTreasures",
          "package": "labyrinth",
          "partial": "Treasures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:noTreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "perimeter",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int",
          "source": "src/Labyrinth-Generate.html#perimeter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "perimeter",
          "normalized": "Labyrinth-\u003eInt",
          "package": "labyrinth",
          "signature": "Labyrinth-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:perimeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putAH",
          "package": "labyrinth",
          "signature": "CellType -\u003e LabGen g Position",
          "source": "src/Labyrinth-Generate.html#putAH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putAH",
          "normalized": "CellType-\u003eLabGen a Position",
          "package": "labyrinth",
          "partial": "AH",
          "signature": "CellType-\u003eLabGen g Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putAH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putArmories",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putArmories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putArmories",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Armories",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putArmories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putCell",
          "package": "labyrinth",
          "signature": "CellType -\u003e LabGen g Position",
          "source": "src/Labyrinth-Generate.html#putCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putCell",
          "normalized": "CellType-\u003eLabGen a Position",
          "package": "labyrinth",
          "partial": "Cell",
          "signature": "CellType-\u003eLabGen g Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putCellIf",
          "package": "labyrinth",
          "signature": "CellPredicateR g -\u003e CellType -\u003e LabGen g Position",
          "source": "src/Labyrinth-Generate.html#putCellIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putCellIf",
          "normalized": "CellPredicateR a-\u003eCellType-\u003eLabGen a Position",
          "package": "labyrinth",
          "partial": "Cell If",
          "signature": "CellPredicateR g-\u003eCellType-\u003eLabGen g Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putCellIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putExit",
          "package": "labyrinth",
          "signature": "Wall -\u003e LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putExit",
          "normalized": "Wall-\u003eLabGen a()",
          "package": "labyrinth",
          "partial": "Exit",
          "signature": "Wall-\u003eLabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putExits",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putExits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putExits",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Exits",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putExits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putHospitals",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putHospitals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putHospitals",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Hospitals",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putHospitals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putPits",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putPits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putPits",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Pits",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putPits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putRivers",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putRivers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putRivers",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Rivers",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putRivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putTreasure",
          "package": "labyrinth",
          "signature": "Treasure -\u003e LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putTreasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putTreasure",
          "normalized": "Treasure-\u003eLabGen a()",
          "package": "labyrinth",
          "partial": "Treasure",
          "signature": "Treasure-\u003eLabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putTreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putTreasures",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putTreasures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putTreasures",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Treasures",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putTreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "putWalls",
          "package": "labyrinth",
          "signature": "LabGen g ()",
          "source": "src/Labyrinth-Generate.html#putWalls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "putWalls",
          "normalized": "LabGen a()",
          "package": "labyrinth",
          "partial": "Walls",
          "signature": "LabGen g()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:putWalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "randomDirection",
          "package": "labyrinth",
          "signature": "LabGen g Direction",
          "source": "src/Labyrinth-Generate.html#randomDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "randomDirection",
          "package": "labyrinth",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:randomDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "untilR",
          "package": "labyrinth",
          "signature": "m Bool -\u003e m a -\u003e m ()",
          "source": "src/Labyrinth-Generate.html#untilR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "untilR",
          "normalized": "a Bool-\u003ea b-\u003ea()",
          "package": "labyrinth",
          "signature": "m Bool-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:untilR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Generate",
          "name": "untilRN",
          "package": "labyrinth",
          "signature": "Int -\u003e m Bool -\u003e m a -\u003e m Bool",
          "source": "src/Labyrinth-Generate.html#untilRN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Generate",
          "module": "Labyrinth.Generate",
          "name": "untilRN",
          "normalized": "Int-\u003ea Bool-\u003ea b-\u003ea Bool",
          "package": "labyrinth",
          "partial": "RN",
          "signature": "Int-\u003em Bool-\u003em a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Generate.html#v:untilRN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Map",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Map",
          "package": "labyrinth",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Cell",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Cell",
          "package": "labyrinth",
          "partial": "Cell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "CellType",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "CellType",
          "package": "labyrinth",
          "partial": "Cell Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:CellType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Direction",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Direction",
          "package": "labyrinth",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Health",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Health",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Health",
          "package": "labyrinth",
          "partial": "Health",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Health"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Labyrinth",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Labyrinth",
          "package": "labyrinth",
          "partial": "Labyrinth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Labyrinth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "LabyrinthFeatures",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#LabyrinthFeatures",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "LabyrinthFeatures",
          "package": "labyrinth",
          "partial": "Labyrinth Features",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:LabyrinthFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "LabyrinthParams",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "LabyrinthParams",
          "package": "labyrinth",
          "partial": "Labyrinth Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:LabyrinthParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Player",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Player",
          "package": "labyrinth",
          "partial": "Player",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "PlayerId",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#PlayerId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "PlayerId",
          "package": "labyrinth",
          "partial": "Player Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:PlayerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Position",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Position",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Position",
          "package": "labyrinth",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Treasure",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Treasure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Treasure",
          "package": "labyrinth",
          "partial": "Treasure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Treasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Wall",
          "package": "labyrinth",
          "source": "src/Labyrinth-Map.html#Wall",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Wall",
          "package": "labyrinth",
          "partial": "Wall",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#t:Wall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Armory",
          "package": "labyrinth",
          "signature": "Armory",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Armory",
          "package": "labyrinth",
          "partial": "Armory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Armory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Cell",
          "package": "labyrinth",
          "signature": "Cell",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Cell",
          "package": "labyrinth",
          "partial": "Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "D",
          "package": "labyrinth",
          "signature": "D",
          "source": "src/Labyrinth-Map.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "D",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Dead",
          "package": "labyrinth",
          "signature": "Dead",
          "source": "src/Labyrinth-Map.html#Health",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Dead",
          "package": "labyrinth",
          "partial": "Dead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Dead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "FakeTreasure",
          "package": "labyrinth",
          "signature": "FakeTreasure",
          "source": "src/Labyrinth-Map.html#Treasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "FakeTreasure",
          "package": "labyrinth",
          "partial": "Fake Treasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:FakeTreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "HardWall",
          "package": "labyrinth",
          "signature": "HardWall",
          "source": "src/Labyrinth-Map.html#Wall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "HardWall",
          "package": "labyrinth",
          "partial": "Hard Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:HardWall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Healthy",
          "package": "labyrinth",
          "signature": "Healthy",
          "source": "src/Labyrinth-Map.html#Health",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Healthy",
          "package": "labyrinth",
          "partial": "Healthy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Healthy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Hospital",
          "package": "labyrinth",
          "signature": "Hospital",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Hospital",
          "package": "labyrinth",
          "partial": "Hospital",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Hospital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "L",
          "package": "labyrinth",
          "signature": "L",
          "source": "src/Labyrinth-Map.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "L",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Labyrinth",
          "package": "labyrinth",
          "signature": "Labyrinth",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Labyrinth",
          "package": "labyrinth",
          "partial": "Labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Labyrinth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "LabyrinthFeatures",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures",
          "source": "src/Labyrinth-Map.html#LabyrinthFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "LabyrinthFeatures",
          "package": "labyrinth",
          "partial": "Labyrinth Features",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:LabyrinthFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "LabyrinthParams",
          "package": "labyrinth",
          "signature": "LabyrinthParams",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "LabyrinthParams",
          "package": "labyrinth",
          "partial": "Labyrinth Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:LabyrinthParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Land",
          "package": "labyrinth",
          "signature": "Land",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Land",
          "package": "labyrinth",
          "partial": "Land",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Land"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "NoWall",
          "package": "labyrinth",
          "signature": "NoWall",
          "source": "src/Labyrinth-Map.html#Wall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "NoWall",
          "package": "labyrinth",
          "partial": "No Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:NoWall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Pit",
          "package": "labyrinth",
          "signature": "Pit",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Pit",
          "package": "labyrinth",
          "partial": "Pit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Pit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Player",
          "package": "labyrinth",
          "signature": "Player",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Player",
          "package": "labyrinth",
          "partial": "Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Pos",
          "package": "labyrinth",
          "signature": "Pos",
          "source": "src/Labyrinth-Map.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Pos",
          "package": "labyrinth",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "R",
          "package": "labyrinth",
          "signature": "R",
          "source": "src/Labyrinth-Map.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "R",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "River",
          "package": "labyrinth",
          "signature": "River",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "River",
          "package": "labyrinth",
          "partial": "River",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:River"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "RiverDelta",
          "package": "labyrinth",
          "signature": "RiverDelta",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "RiverDelta",
          "package": "labyrinth",
          "partial": "River Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:RiverDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "TrueTreasure",
          "package": "labyrinth",
          "signature": "TrueTreasure",
          "source": "src/Labyrinth-Map.html#Treasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "TrueTreasure",
          "package": "labyrinth",
          "partial": "True Treasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:TrueTreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "U",
          "package": "labyrinth",
          "signature": "U",
          "source": "src/Labyrinth-Map.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "U",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Wall",
          "package": "labyrinth",
          "signature": "Wall",
          "source": "src/Labyrinth-Map.html#Wall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Wall",
          "package": "labyrinth",
          "partial": "Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Wall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "Wounded",
          "package": "labyrinth",
          "signature": "Wounded",
          "source": "src/Labyrinth-Map.html#Health",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "Wounded",
          "package": "labyrinth",
          "partial": "Wounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:Wounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_cbullets",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_cbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_cbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_cells",
          "package": "labyrinth",
          "signature": "Map Position Cell",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_cells",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_cells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_cgrenades",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_cgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_cgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_ctreasures",
          "package": "labyrinth",
          "signature": "[Treasure]",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_ctreasures",
          "normalized": "[Treasure]",
          "package": "labyrinth",
          "signature": "[Treasure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_ctreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_ctype",
          "package": "labyrinth",
          "signature": "CellType",
          "source": "src/Labyrinth-Map.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_ctype",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_ctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_currentTurn",
          "package": "labyrinth",
          "signature": "PlayerId",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_currentTurn",
          "package": "labyrinth",
          "partial": "Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_currentTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_gameEnded",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_gameEnded",
          "package": "labyrinth",
          "partial": "Ended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_gameEnded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_labHeight",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_labHeight",
          "package": "labyrinth",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_labHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_labWidth",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_labWidth",
          "package": "labyrinth",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_labWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lfpits",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Map.html#LabyrinthFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lfpits",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lfpits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lfrivers",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Map.html#LabyrinthFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lfrivers",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lfrivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lpfeatures",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lpfeatures",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lpfeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lpheight",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lpheight",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lpheight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lpplayers",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lpplayers",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lpplayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_lpwidth",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#LabyrinthParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_lpwidth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_lpwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_pbullets",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_pbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_pbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_pgrenades",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_pgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_pgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_phealth",
          "package": "labyrinth",
          "signature": "Health",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_phealth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_phealth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_pitNumber",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_pitNumber",
          "package": "labyrinth",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_pitNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_pjustShot",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_pjustShot",
          "package": "labyrinth",
          "partial": "Shot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_pjustShot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_players",
          "package": "labyrinth",
          "signature": "[Player]",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_players",
          "normalized": "[Player]",
          "package": "labyrinth",
          "signature": "[Player]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_players"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_position",
          "package": "labyrinth",
          "signature": "Position",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_position",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_positionsChosen",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_positionsChosen",
          "package": "labyrinth",
          "partial": "Chosen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_positionsChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_ptreasure",
          "package": "labyrinth",
          "signature": "Maybe Treasure",
          "source": "src/Labyrinth-Map.html#Player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_ptreasure",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_ptreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_riverDirection",
          "package": "labyrinth",
          "signature": "Direction",
          "source": "src/Labyrinth-Map.html#CellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_riverDirection",
          "package": "labyrinth",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_riverDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_wallsH",
          "package": "labyrinth",
          "signature": "Map Position Wall",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_wallsH",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_wallsH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "_wallsV",
          "package": "labyrinth",
          "signature": "Map Position Wall",
          "source": "src/Labyrinth-Map.html#Labyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "_wallsV",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:_wallsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "advance",
          "package": "labyrinth",
          "signature": "Position -\u003e Direction -\u003e Position",
          "source": "src/Labyrinth-Map.html#advance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "advance",
          "normalized": "Position-\u003eDirection-\u003ePosition",
          "package": "labyrinth",
          "signature": "Position-\u003eDirection-\u003ePosition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:advance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "allCells",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [Cell]",
          "source": "src/Labyrinth-Map.html#allCells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "allCells",
          "normalized": "Labyrinth-\u003e[Cell]",
          "package": "labyrinth",
          "partial": "Cells",
          "signature": "Labyrinth-\u003e[Cell]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:allCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "allDirections",
          "package": "labyrinth",
          "signature": "[Direction]",
          "source": "src/Labyrinth-Map.html#allDirections",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "allDirections",
          "normalized": "[Direction]",
          "package": "labyrinth",
          "partial": "Directions",
          "signature": "[Direction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:allDirections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "allPosCells",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [(Position, Cell)]",
          "source": "src/Labyrinth-Map.html#allPosCells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "allPosCells",
          "normalized": "Labyrinth-\u003e[(Position,Cell)]",
          "package": "labyrinth",
          "partial": "Pos Cells",
          "signature": "Labyrinth-\u003e[(Position,Cell)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:allPosCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "allPositions",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [Position]",
          "source": "src/Labyrinth-Map.html#allPositions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "allPositions",
          "normalized": "Labyrinth-\u003e[Position]",
          "package": "labyrinth",
          "partial": "Positions",
          "signature": "Labyrinth-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:allPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "armories",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [Position]",
          "source": "src/Labyrinth-Map.html#armories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "armories",
          "normalized": "Labyrinth-\u003e[Position]",
          "package": "labyrinth",
          "signature": "Labyrinth-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:armories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "cbullets",
          "package": "labyrinth",
          "signature": "Lens' Cell Int",
          "source": "src/Labyrinth-Map.html#cbullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "cbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:cbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "cell",
          "package": "labyrinth",
          "signature": "Position -\u003e Simple Lens Labyrinth Cell",
          "source": "src/Labyrinth-Map.html#cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "cell",
          "normalized": "Position-\u003eSimple Lens Labyrinth Cell",
          "package": "labyrinth",
          "signature": "Position-\u003eSimple Lens Labyrinth Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "cells",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth (Map Position Cell)",
          "source": "src/Labyrinth-Map.html#cells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "cells",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:cells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "cgrenades",
          "package": "labyrinth",
          "signature": "Lens' Cell Int",
          "source": "src/Labyrinth-Map.html#cgrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "cgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:cgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "ctreasures",
          "package": "labyrinth",
          "signature": "Lens' Cell [Treasure]",
          "source": "src/Labyrinth-Map.html#ctreasures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "ctreasures",
          "normalized": "Lens' Cell[Treasure]",
          "package": "labyrinth",
          "signature": "Lens' Cell[Treasure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:ctreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "ctype",
          "package": "labyrinth",
          "signature": "Lens' Cell CellType",
          "source": "src/Labyrinth-Map.html#ctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "ctype",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:ctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "currentPlayer",
          "package": "labyrinth",
          "signature": "Simple Lens Labyrinth Player",
          "source": "src/Labyrinth-Map.html#currentPlayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "currentPlayer",
          "package": "labyrinth",
          "partial": "Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:currentPlayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "currentTurn",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth PlayerId",
          "source": "src/Labyrinth-Map.html#currentTurn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "currentTurn",
          "package": "labyrinth",
          "partial": "Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:currentTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "defaultFeatures",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures",
          "source": "src/Labyrinth-Map.html#defaultFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "defaultFeatures",
          "package": "labyrinth",
          "partial": "Features",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:defaultFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "emptyCell",
          "package": "labyrinth",
          "signature": "CellType -\u003e Cell",
          "source": "src/Labyrinth-Map.html#emptyCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "emptyCell",
          "normalized": "CellType-\u003eCell",
          "package": "labyrinth",
          "partial": "Cell",
          "signature": "CellType-\u003eCell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:emptyCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "emptyLabyrinth",
          "package": "labyrinth",
          "signature": "LabyrinthParams -\u003e Labyrinth",
          "source": "src/Labyrinth-Map.html#emptyLabyrinth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "emptyLabyrinth",
          "normalized": "LabyrinthParams-\u003eLabyrinth",
          "package": "labyrinth",
          "partial": "Labyrinth",
          "signature": "LabyrinthParams-\u003eLabyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:emptyLabyrinth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "gameEnded",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth Bool",
          "source": "src/Labyrinth-Map.html#gameEnded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "gameEnded",
          "package": "labyrinth",
          "partial": "Ended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:gameEnded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "initialPlayer",
          "package": "labyrinth",
          "signature": "Position -\u003e Player",
          "source": "src/Labyrinth-Map.html#initialPlayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "initialPlayer",
          "normalized": "Position-\u003ePlayer",
          "package": "labyrinth",
          "partial": "Player",
          "signature": "Position-\u003ePlayer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:initialPlayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "isInside",
          "package": "labyrinth",
          "signature": "Position -\u003e Labyrinth -\u003e Bool",
          "source": "src/Labyrinth-Map.html#isInside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "isInside",
          "normalized": "Position-\u003eLabyrinth-\u003eBool",
          "package": "labyrinth",
          "partial": "Inside",
          "signature": "Position-\u003eLabyrinth-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:isInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "isOutside",
          "package": "labyrinth",
          "signature": "Position -\u003e Labyrinth -\u003e Bool",
          "source": "src/Labyrinth-Map.html#isOutside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "isOutside",
          "normalized": "Position-\u003eLabyrinth-\u003eBool",
          "package": "labyrinth",
          "partial": "Outside",
          "signature": "Position-\u003eLabyrinth-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:isOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "isPit",
          "package": "labyrinth",
          "signature": "CellType -\u003e Bool",
          "source": "src/Labyrinth-Map.html#isPit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "isPit",
          "normalized": "CellType-\u003eBool",
          "package": "labyrinth",
          "partial": "Pit",
          "signature": "CellType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:isPit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "ix'",
          "package": "labyrinth",
          "signature": "Index t -\u003e Over p f t t (IxValue t) (IxValue t)",
          "source": "src/Labyrinth-Map.html#ix%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "ix'",
          "normalized": "Index a-\u003eOver b c a a(IxValue a)(IxValue a)",
          "package": "labyrinth",
          "signature": "Index t-\u003eOver p f t t(IxValue t)(IxValue t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:ix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "labHeight",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth Int",
          "source": "src/Labyrinth-Map.html#labHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "labHeight",
          "package": "labyrinth",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:labHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "labWidth",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth Int",
          "source": "src/Labyrinth-Map.html#labWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "labWidth",
          "package": "labyrinth",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:labWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lfpits",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthFeatures Bool",
          "source": "src/Labyrinth-Map.html#lfpits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lfpits",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lfpits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lfrivers",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthFeatures Bool",
          "source": "src/Labyrinth-Map.html#lfrivers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lfrivers",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lfrivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lpfeatures",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthParams LabyrinthFeatures",
          "source": "src/Labyrinth-Map.html#lpfeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lpfeatures",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lpfeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lpheight",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthParams Int",
          "source": "src/Labyrinth-Map.html#lpheight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lpheight",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lpheight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lpplayers",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthParams Int",
          "source": "src/Labyrinth-Map.html#lpplayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lpplayers",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lpplayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "lpwidth",
          "package": "labyrinth",
          "signature": "Lens' LabyrinthParams Int",
          "source": "src/Labyrinth-Map.html#lpwidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "lpwidth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:lpwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "mapRectangle",
          "package": "labyrinth",
          "signature": "a -\u003e Int -\u003e Int -\u003e Map Position a",
          "source": "src/Labyrinth-Map.html#mapRectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "mapRectangle",
          "normalized": "a-\u003eInt-\u003eInt-\u003eMap Position a",
          "package": "labyrinth",
          "partial": "Rectangle",
          "signature": "a-\u003eInt-\u003eInt-\u003eMap Position a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:mapRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "maxBullets",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#maxBullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "maxBullets",
          "package": "labyrinth",
          "partial": "Bullets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:maxBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "maxGrenades",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#maxGrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "maxGrenades",
          "package": "labyrinth",
          "partial": "Grenades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:maxGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "opposite",
          "package": "labyrinth",
          "signature": "Direction -\u003e Direction",
          "source": "src/Labyrinth-Map.html#opposite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "opposite",
          "normalized": "Direction-\u003eDirection",
          "package": "labyrinth",
          "signature": "Direction-\u003eDirection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:opposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "outerPos",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [(Position, Direction)]",
          "source": "src/Labyrinth-Map.html#outerPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "outerPos",
          "normalized": "Labyrinth-\u003e[(Position,Direction)]",
          "package": "labyrinth",
          "partial": "Pos",
          "signature": "Labyrinth-\u003e[(Position,Direction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:outerPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pX",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pX",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pY",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Map.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pY",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pbullets",
          "package": "labyrinth",
          "signature": "Lens' Player Int",
          "source": "src/Labyrinth-Map.html#pbullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pgrenades",
          "package": "labyrinth",
          "signature": "Lens' Player Int",
          "source": "src/Labyrinth-Map.html#pgrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "phealth",
          "package": "labyrinth",
          "signature": "Lens' Player Health",
          "source": "src/Labyrinth-Map.html#phealth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "phealth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:phealth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pit",
          "package": "labyrinth",
          "signature": "Int -\u003e Labyrinth -\u003e Position",
          "source": "src/Labyrinth-Map.html#pit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pit",
          "normalized": "Int-\u003eLabyrinth-\u003ePosition",
          "package": "labyrinth",
          "signature": "Int-\u003eLabyrinth-\u003ePosition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pitCount",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int",
          "source": "src/Labyrinth-Map.html#pitCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pitCount",
          "normalized": "Labyrinth-\u003eInt",
          "package": "labyrinth",
          "partial": "Count",
          "signature": "Labyrinth-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pitNumber",
          "package": "labyrinth",
          "signature": "Traversal' CellType Int",
          "source": "src/Labyrinth-Map.html#pitNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pitNumber",
          "package": "labyrinth",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pitNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pits",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [Position]",
          "source": "src/Labyrinth-Map.html#pits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pits",
          "normalized": "Labyrinth-\u003e[Position]",
          "package": "labyrinth",
          "signature": "Labyrinth-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "pjustShot",
          "package": "labyrinth",
          "signature": "Lens' Player Bool",
          "source": "src/Labyrinth-Map.html#pjustShot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "pjustShot",
          "package": "labyrinth",
          "partial": "Shot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:pjustShot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "player",
          "package": "labyrinth",
          "signature": "PlayerId -\u003e Simple Lens Labyrinth Player",
          "source": "src/Labyrinth-Map.html#player",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "player",
          "normalized": "PlayerId-\u003eSimple Lens Labyrinth Player",
          "package": "labyrinth",
          "signature": "PlayerId-\u003eSimple Lens Labyrinth Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "playerCount",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int",
          "source": "src/Labyrinth-Map.html#playerCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "playerCount",
          "normalized": "Labyrinth-\u003eInt",
          "package": "labyrinth",
          "partial": "Count",
          "signature": "Labyrinth-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:playerCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "players",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth [Player]",
          "source": "src/Labyrinth-Map.html#players",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "players",
          "normalized": "Lens' Labyrinth[Player]",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth[Player]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:players"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "posRectangle",
          "package": "labyrinth",
          "signature": "Int -\u003e Int -\u003e [Position]",
          "source": "src/Labyrinth-Map.html#posRectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "posRectangle",
          "normalized": "Int-\u003eInt-\u003e[Position]",
          "package": "labyrinth",
          "partial": "Rectangle",
          "signature": "Int-\u003eInt-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:posRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "position",
          "package": "labyrinth",
          "signature": "Lens' Player Position",
          "source": "src/Labyrinth-Map.html#position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "position",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "positionsChosen",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth Bool",
          "source": "src/Labyrinth-Map.html#positionsChosen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "positionsChosen",
          "package": "labyrinth",
          "partial": "Chosen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:positionsChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "ptreasure",
          "package": "labyrinth",
          "signature": "Lens' Player (Maybe Treasure)",
          "source": "src/Labyrinth-Map.html#ptreasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "ptreasure",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:ptreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "riverDirection",
          "package": "labyrinth",
          "signature": "Traversal' CellType Direction",
          "source": "src/Labyrinth-Map.html#riverDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "riverDirection",
          "package": "labyrinth",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:riverDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "simpleFeatures",
          "package": "labyrinth",
          "signature": "LabyrinthFeatures",
          "source": "src/Labyrinth-Map.html#simpleFeatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "simpleFeatures",
          "package": "labyrinth",
          "partial": "Features",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:simpleFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wall",
          "package": "labyrinth",
          "signature": "Position -\u003e Direction -\u003e Simple Lens Labyrinth Wall",
          "source": "src/Labyrinth-Map.html#wall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wall",
          "normalized": "Position-\u003eDirection-\u003eSimple Lens Labyrinth Wall",
          "package": "labyrinth",
          "signature": "Position-\u003eDirection-\u003eSimple Lens Labyrinth Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wallH",
          "package": "labyrinth",
          "signature": "Position -\u003e Simple Lens Labyrinth Wall",
          "source": "src/Labyrinth-Map.html#wallH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wallH",
          "normalized": "Position-\u003eSimple Lens Labyrinth Wall",
          "package": "labyrinth",
          "signature": "Position-\u003eSimple Lens Labyrinth Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wallH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wallV",
          "package": "labyrinth",
          "signature": "Position -\u003e Simple Lens Labyrinth Wall",
          "source": "src/Labyrinth-Map.html#wallV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wallV",
          "normalized": "Position-\u003eSimple Lens Labyrinth Wall",
          "package": "labyrinth",
          "signature": "Position-\u003eSimple Lens Labyrinth Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wallV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wallsH",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth (Map Position Wall)",
          "source": "src/Labyrinth-Map.html#wallsH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wallsH",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wallsH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wallsV",
          "package": "labyrinth",
          "signature": "Lens' Labyrinth (Map Position Wall)",
          "source": "src/Labyrinth-Map.html#wallsV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wallsV",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wallsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Map",
          "name": "wayOutside",
          "package": "labyrinth",
          "signature": "Position -\u003e Labyrinth -\u003e Bool",
          "source": "src/Labyrinth-Map.html#wayOutside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Map",
          "module": "Labyrinth.Map",
          "name": "wayOutside",
          "normalized": "Position-\u003eLabyrinth-\u003eBool",
          "package": "labyrinth",
          "partial": "Outside",
          "signature": "Position-\u003eLabyrinth-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Map.html#v:wayOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "partial": "Move",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Action",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Action",
          "package": "labyrinth",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ActionCondition",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#ActionCondition",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ActionCondition",
          "package": "labyrinth",
          "partial": "Action Condition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:ActionCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ActionResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ActionResult",
          "package": "labyrinth",
          "partial": "Action Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:ActionResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "CellEvents",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "CellEvents",
          "package": "labyrinth",
          "partial": "Cell Events",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:CellEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "CellTypeResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "CellTypeResult",
          "package": "labyrinth",
          "partial": "Cell Type Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:CellTypeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ChoosePositionResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#ChoosePositionResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ChoosePositionResult",
          "package": "labyrinth",
          "partial": "Choose Position Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:ChoosePositionResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GoResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GoResult",
          "package": "labyrinth",
          "partial": "Go Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:GoResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GrenadeResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#GrenadeResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GrenadeResult",
          "package": "labyrinth",
          "partial": "Grenade Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:GrenadeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "partial": "Move",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "MoveDirection",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#MoveDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "MoveDirection",
          "package": "labyrinth",
          "partial": "Move Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:MoveDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "MoveResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#MoveResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "MoveResult",
          "package": "labyrinth",
          "partial": "Move Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:MoveResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "QueryResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "QueryResult",
          "package": "labyrinth",
          "partial": "Query Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:QueryResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "QueryType",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#QueryType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "QueryType",
          "package": "labyrinth",
          "partial": "Query Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:QueryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ReorderCellResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#ReorderCellResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ReorderCellResult",
          "package": "labyrinth",
          "partial": "Reorder Cell Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:ReorderCellResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ShootResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#ShootResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ShootResult",
          "package": "labyrinth",
          "partial": "Shoot Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:ShootResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "StartResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#StartResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "StartResult",
          "package": "labyrinth",
          "partial": "Start Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:StartResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "TreasureResult",
          "package": "labyrinth",
          "source": "src/Labyrinth-Move.html#TreasureResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "TreasureResult",
          "package": "labyrinth",
          "partial": "Treasure Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#t:TreasureResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ArmoryR",
          "package": "labyrinth",
          "signature": "ArmoryR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ArmoryR",
          "package": "labyrinth",
          "partial": "Armory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ArmoryR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "BulletCount",
          "package": "labyrinth",
          "signature": "BulletCount",
          "source": "src/Labyrinth-Move.html#QueryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "BulletCount",
          "package": "labyrinth",
          "partial": "Bullet Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:BulletCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "BulletCountR",
          "package": "labyrinth",
          "signature": "BulletCountR",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "BulletCountR",
          "package": "labyrinth",
          "partial": "Bullet Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:BulletCountR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "CellEvents",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "CellEvents",
          "package": "labyrinth",
          "partial": "Cell Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:CellEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ChooseAgain",
          "package": "labyrinth",
          "signature": "ChooseAgain",
          "source": "src/Labyrinth-Move.html#ChoosePositionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ChooseAgain",
          "package": "labyrinth",
          "partial": "Choose Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ChooseAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ChoosePosition",
          "package": "labyrinth",
          "signature": "ChoosePosition",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ChoosePosition",
          "package": "labyrinth",
          "partial": "Choose Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ChoosePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ChoosePositionR",
          "package": "labyrinth",
          "signature": "ChoosePositionR ChoosePositionResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ChoosePositionR",
          "package": "labyrinth",
          "partial": "Choose Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ChoosePositionR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ChosenOK",
          "package": "labyrinth",
          "signature": "ChosenOK",
          "source": "src/Labyrinth-Move.html#ChoosePositionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ChosenOK",
          "package": "labyrinth",
          "partial": "Chosen OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ChosenOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Conditional",
          "package": "labyrinth",
          "signature": "Conditional",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Conditional",
          "package": "labyrinth",
          "partial": "Conditional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Conditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Draw",
          "package": "labyrinth",
          "signature": "Draw",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Draw",
          "package": "labyrinth",
          "partial": "Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Forbidden",
          "package": "labyrinth",
          "signature": "Forbidden",
          "source": "src/Labyrinth-Move.html#ShootResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Forbidden",
          "package": "labyrinth",
          "partial": "Forbidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GameStarted",
          "package": "labyrinth",
          "signature": "GameStarted [StartResult]",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GameStarted",
          "normalized": "GameStarted[StartResult]",
          "package": "labyrinth",
          "partial": "Game Started",
          "signature": "GameStarted[StartResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GameStarted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Go",
          "package": "labyrinth",
          "signature": "Go",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Go",
          "package": "labyrinth",
          "partial": "Go",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Go"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GoR",
          "package": "labyrinth",
          "signature": "GoR GoResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GoR",
          "package": "labyrinth",
          "partial": "Go",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GoR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Grenade",
          "package": "labyrinth",
          "signature": "Grenade",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Grenade",
          "package": "labyrinth",
          "partial": "Grenade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Grenade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GrenadeCount",
          "package": "labyrinth",
          "signature": "GrenadeCount",
          "source": "src/Labyrinth-Move.html#QueryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GrenadeCount",
          "package": "labyrinth",
          "partial": "Grenade Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GrenadeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GrenadeCountR",
          "package": "labyrinth",
          "signature": "GrenadeCountR",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GrenadeCountR",
          "package": "labyrinth",
          "partial": "Grenade Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GrenadeCountR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GrenadeOK",
          "package": "labyrinth",
          "signature": "GrenadeOK",
          "source": "src/Labyrinth-Move.html#GrenadeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GrenadeOK",
          "package": "labyrinth",
          "partial": "Grenade OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GrenadeOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "GrenadeR",
          "package": "labyrinth",
          "signature": "GrenadeR GrenadeResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "GrenadeR",
          "package": "labyrinth",
          "partial": "Grenade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:GrenadeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "HealthR",
          "package": "labyrinth",
          "signature": "HealthR",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "HealthR",
          "package": "labyrinth",
          "partial": "Health",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:HealthR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "HitWall",
          "package": "labyrinth",
          "signature": "HitWall",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "HitWall",
          "package": "labyrinth",
          "partial": "Hit Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:HitWall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "HospitalR",
          "package": "labyrinth",
          "signature": "HospitalR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "HospitalR",
          "package": "labyrinth",
          "partial": "Hospital",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:HospitalR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "InvalidMove",
          "package": "labyrinth",
          "signature": "InvalidMove",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "InvalidMove",
          "package": "labyrinth",
          "partial": "Invalid Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:InvalidMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "InvalidMovement",
          "package": "labyrinth",
          "signature": "InvalidMovement",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "InvalidMovement",
          "package": "labyrinth",
          "partial": "Invalid Movement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:InvalidMovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "LandR",
          "package": "labyrinth",
          "signature": "LandR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "LandR",
          "package": "labyrinth",
          "partial": "Land",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:LandR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "LostOutside",
          "package": "labyrinth",
          "signature": "LostOutside",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "LostOutside",
          "package": "labyrinth",
          "partial": "Lost Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:LostOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "signature": "Move",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Move",
          "package": "labyrinth",
          "partial": "Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "MoveRes",
          "package": "labyrinth",
          "signature": "MoveRes [ActionResult]",
          "source": "src/Labyrinth-Move.html#MoveResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "MoveRes",
          "normalized": "MoveRes[ActionResult]",
          "package": "labyrinth",
          "partial": "Move Res",
          "signature": "MoveRes[ActionResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:MoveRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Next",
          "package": "labyrinth",
          "signature": "Next",
          "source": "src/Labyrinth-Move.html#MoveDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Next",
          "package": "labyrinth",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "NoBullets",
          "package": "labyrinth",
          "signature": "NoBullets",
          "source": "src/Labyrinth-Move.html#ShootResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "NoBullets",
          "package": "labyrinth",
          "partial": "No Bullets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:NoBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "NoGrenades",
          "package": "labyrinth",
          "signature": "NoGrenades",
          "source": "src/Labyrinth-Move.html#GrenadeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "NoGrenades",
          "package": "labyrinth",
          "partial": "No Grenades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:NoGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "PitR",
          "package": "labyrinth",
          "signature": "PitR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "PitR",
          "package": "labyrinth",
          "partial": "Pit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:PitR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "PlayerHealth",
          "package": "labyrinth",
          "signature": "PlayerHealth",
          "source": "src/Labyrinth-Move.html#QueryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "PlayerHealth",
          "package": "labyrinth",
          "partial": "Player Health",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:PlayerHealth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Query",
          "package": "labyrinth",
          "signature": "Query",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Query",
          "package": "labyrinth",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "QueryR",
          "package": "labyrinth",
          "signature": "QueryR QueryResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "QueryR",
          "package": "labyrinth",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:QueryR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ReorderCell",
          "package": "labyrinth",
          "signature": "ReorderCell",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ReorderCell",
          "package": "labyrinth",
          "partial": "Reorder Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ReorderCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ReorderCellR",
          "package": "labyrinth",
          "signature": "ReorderCellR ReorderCellResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ReorderCellR",
          "package": "labyrinth",
          "partial": "Reorder Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ReorderCellR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ReorderForbidden",
          "package": "labyrinth",
          "signature": "ReorderForbidden",
          "source": "src/Labyrinth-Move.html#ReorderCellResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ReorderForbidden",
          "package": "labyrinth",
          "partial": "Reorder Forbidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ReorderForbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ReorderOK",
          "package": "labyrinth",
          "signature": "ReorderOK",
          "source": "src/Labyrinth-Move.html#ReorderCellResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ReorderOK",
          "package": "labyrinth",
          "partial": "Reorder OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ReorderOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "RiverDeltaR",
          "package": "labyrinth",
          "signature": "RiverDeltaR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "RiverDeltaR",
          "package": "labyrinth",
          "partial": "River Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:RiverDeltaR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "RiverR",
          "package": "labyrinth",
          "signature": "RiverR",
          "source": "src/Labyrinth-Move.html#CellTypeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "RiverR",
          "package": "labyrinth",
          "partial": "River",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:RiverR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Say",
          "package": "labyrinth",
          "signature": "Say",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Say",
          "package": "labyrinth",
          "partial": "Say",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Scream",
          "package": "labyrinth",
          "signature": "Scream",
          "source": "src/Labyrinth-Move.html#ShootResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Scream",
          "package": "labyrinth",
          "partial": "Scream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Scream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Shoot",
          "package": "labyrinth",
          "signature": "Shoot",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Shoot",
          "package": "labyrinth",
          "partial": "Shoot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Shoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ShootOK",
          "package": "labyrinth",
          "signature": "ShootOK",
          "source": "src/Labyrinth-Move.html#ShootResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ShootOK",
          "package": "labyrinth",
          "partial": "Shoot OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ShootOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ShootR",
          "package": "labyrinth",
          "signature": "ShootR ShootResult",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ShootR",
          "package": "labyrinth",
          "partial": "Shoot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ShootR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "StartR",
          "package": "labyrinth",
          "signature": "StartR",
          "source": "src/Labyrinth-Move.html#StartResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "StartR",
          "package": "labyrinth",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:StartR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Surrender",
          "package": "labyrinth",
          "signature": "Surrender",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Surrender",
          "package": "labyrinth",
          "partial": "Surrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Surrender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Surrendered",
          "package": "labyrinth",
          "signature": "Surrendered",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Surrendered",
          "package": "labyrinth",
          "partial": "Surrendered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Surrendered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Towards",
          "package": "labyrinth",
          "signature": "Towards Direction",
          "source": "src/Labyrinth-Move.html#MoveDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Towards",
          "package": "labyrinth",
          "partial": "Towards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Towards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "TreasureCarried",
          "package": "labyrinth",
          "signature": "TreasureCarried",
          "source": "src/Labyrinth-Move.html#QueryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "TreasureCarried",
          "package": "labyrinth",
          "partial": "Treasure Carried",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:TreasureCarried"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "TreasureCarriedR",
          "package": "labyrinth",
          "signature": "TreasureCarriedR",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "TreasureCarriedR",
          "package": "labyrinth",
          "partial": "Treasure Carried",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:TreasureCarriedR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "TrueTreasureR",
          "package": "labyrinth",
          "signature": "TrueTreasureR",
          "source": "src/Labyrinth-Move.html#TreasureResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "TrueTreasureR",
          "package": "labyrinth",
          "partial": "True Treasure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:TrueTreasureR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "TurnedToAshesR",
          "package": "labyrinth",
          "signature": "TurnedToAshesR",
          "source": "src/Labyrinth-Move.html#TreasureResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "TurnedToAshesR",
          "package": "labyrinth",
          "partial": "Turned To Ashes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:TurnedToAshesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "Went",
          "package": "labyrinth",
          "signature": "Went",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "Went",
          "package": "labyrinth",
          "partial": "Went",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:Went"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "WentOutside",
          "package": "labyrinth",
          "signature": "WentOutside",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "WentOutside",
          "package": "labyrinth",
          "partial": "Went Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:WentOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "WoundedAlert",
          "package": "labyrinth",
          "signature": "WoundedAlert PlayerId Health",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "WoundedAlert",
          "package": "labyrinth",
          "partial": "Wounded Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:WoundedAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "WrongTurn",
          "package": "labyrinth",
          "signature": "WrongTurn",
          "source": "src/Labyrinth-Move.html#ActionResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "WrongTurn",
          "package": "labyrinth",
          "partial": "Wrong Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:WrongTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_acelse",
          "package": "labyrinth",
          "signature": "[Action]",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_acelse",
          "normalized": "[Action]",
          "package": "labyrinth",
          "signature": "[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_acelse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_acif",
          "package": "labyrinth",
          "signature": "ActionCondition",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_acif",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_acif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_acthen",
          "package": "labyrinth",
          "signature": "[Action]",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_acthen",
          "normalized": "[Action]",
          "package": "labyrinth",
          "signature": "[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_acthen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_agdirection",
          "package": "labyrinth",
          "signature": "Direction",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_agdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_agdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_amdirection",
          "package": "labyrinth",
          "signature": "MoveDirection",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_amdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_amdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_asdirection",
          "package": "labyrinth",
          "signature": "Direction",
          "source": "src/Labyrinth-Move.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_asdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_asdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_foundBullets",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_foundBullets",
          "package": "labyrinth",
          "partial": "Bullets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_foundBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_foundGrenades",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_foundGrenades",
          "package": "labyrinth",
          "partial": "Grenades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_foundGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_foundTreasures",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_foundTreasures",
          "package": "labyrinth",
          "partial": "Treasures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_foundTreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_hitr",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_hitr",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_hitr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_mactions",
          "package": "labyrinth",
          "signature": "[Action]",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_mactions",
          "normalized": "[Action]",
          "package": "labyrinth",
          "signature": "[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_mactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_mcposition",
          "package": "labyrinth",
          "signature": "Position",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_mcposition",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_mcposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_mqueries",
          "package": "labyrinth",
          "signature": "[QueryType]",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_mqueries",
          "normalized": "[QueryType]",
          "package": "labyrinth",
          "signature": "[QueryType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_mqueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_mrposition",
          "package": "labyrinth",
          "signature": "Position",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_mrposition",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_mrposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_msstext",
          "package": "labyrinth",
          "signature": "String",
          "source": "src/Labyrinth-Move.html#Move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_msstext",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_msstext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_onto",
          "package": "labyrinth",
          "signature": "CellTypeResult",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_onto",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_onto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_qrbullets",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_qrbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_qrbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_qrgrenades",
          "package": "labyrinth",
          "signature": "Int",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_qrgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_qrgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_qrhealth",
          "package": "labyrinth",
          "signature": "Health",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_qrhealth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_qrhealth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_qrtreasure",
          "package": "labyrinth",
          "signature": "Bool",
          "source": "src/Labyrinth-Move.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_qrtreasure",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_qrtreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_revents",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#ReorderCellResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_revents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_revents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_ronto",
          "package": "labyrinth",
          "signature": "CellTypeResult",
          "source": "src/Labyrinth-Move.html#ReorderCellResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_ronto",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_ronto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_scell",
          "package": "labyrinth",
          "signature": "CellTypeResult",
          "source": "src/Labyrinth-Move.html#StartResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_scell",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_scell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_sevents",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#StartResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_sevents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_sevents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_splayer",
          "package": "labyrinth",
          "signature": "PlayerId",
          "source": "src/Labyrinth-Move.html#StartResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_splayer",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_splayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_transportedTo",
          "package": "labyrinth",
          "signature": "Maybe CellTypeResult",
          "source": "src/Labyrinth-Move.html#CellEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_transportedTo",
          "package": "labyrinth",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_transportedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_treasureResult",
          "package": "labyrinth",
          "signature": "Maybe TreasureResult",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_treasureResult",
          "package": "labyrinth",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_treasureResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "_wevents",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#GoResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "_wevents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:_wevents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "acelse",
          "package": "labyrinth",
          "signature": "Traversal' Action [Action]",
          "source": "src/Labyrinth-Move.html#acelse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "acelse",
          "normalized": "Traversal' Action[Action]",
          "package": "labyrinth",
          "signature": "Traversal' Action[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:acelse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "acif",
          "package": "labyrinth",
          "signature": "Traversal' Action ActionCondition",
          "source": "src/Labyrinth-Move.html#acif",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "acif",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:acif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "acthen",
          "package": "labyrinth",
          "signature": "Traversal' Action [Action]",
          "source": "src/Labyrinth-Move.html#acthen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "acthen",
          "normalized": "Traversal' Action[Action]",
          "package": "labyrinth",
          "signature": "Traversal' Action[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:acthen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "agdirection",
          "package": "labyrinth",
          "signature": "Traversal' Action Direction",
          "source": "src/Labyrinth-Move.html#agdirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "agdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:agdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "amdirection",
          "package": "labyrinth",
          "signature": "Traversal' Action MoveDirection",
          "source": "src/Labyrinth-Move.html#amdirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "amdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:amdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "asdirection",
          "package": "labyrinth",
          "signature": "Traversal' Action Direction",
          "source": "src/Labyrinth-Move.html#asdirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "asdirection",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:asdirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ctResult",
          "package": "labyrinth",
          "signature": "CellType -\u003e CellTypeResult",
          "source": "src/Labyrinth-Move.html#ctResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ctResult",
          "normalized": "CellType-\u003eCellTypeResult",
          "package": "labyrinth",
          "partial": "Result",
          "signature": "CellType-\u003eCellTypeResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ctResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "foundBullets",
          "package": "labyrinth",
          "signature": "Lens' CellEvents Int",
          "source": "src/Labyrinth-Move.html#foundBullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "foundBullets",
          "package": "labyrinth",
          "partial": "Bullets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:foundBullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "foundGrenades",
          "package": "labyrinth",
          "signature": "Lens' CellEvents Int",
          "source": "src/Labyrinth-Move.html#foundGrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "foundGrenades",
          "package": "labyrinth",
          "partial": "Grenades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:foundGrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "foundTreasures",
          "package": "labyrinth",
          "signature": "Lens' CellEvents Int",
          "source": "src/Labyrinth-Move.html#foundTreasures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "foundTreasures",
          "package": "labyrinth",
          "partial": "Treasures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:foundTreasures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "goTowards",
          "package": "labyrinth",
          "signature": "Direction -\u003e Action",
          "source": "src/Labyrinth-Move.html#goTowards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "goTowards",
          "normalized": "Direction-\u003eAction",
          "package": "labyrinth",
          "partial": "Towards",
          "signature": "Direction-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:goTowards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "hitr",
          "package": "labyrinth",
          "signature": "Traversal' GoResult CellEvents",
          "source": "src/Labyrinth-Move.html#hitr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "hitr",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:hitr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "mactions",
          "package": "labyrinth",
          "signature": "Traversal' Move [Action]",
          "source": "src/Labyrinth-Move.html#mactions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "mactions",
          "normalized": "Traversal' Move[Action]",
          "package": "labyrinth",
          "signature": "Traversal' Move[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:mactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "mcposition",
          "package": "labyrinth",
          "signature": "Traversal' Move Position",
          "source": "src/Labyrinth-Move.html#mcposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "mcposition",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:mcposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "mqueries",
          "package": "labyrinth",
          "signature": "Traversal' Move [QueryType]",
          "source": "src/Labyrinth-Move.html#mqueries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "mqueries",
          "normalized": "Traversal' Move[QueryType]",
          "package": "labyrinth",
          "signature": "Traversal' Move[QueryType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:mqueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "mrposition",
          "package": "labyrinth",
          "signature": "Traversal' Move Position",
          "source": "src/Labyrinth-Move.html#mrposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "mrposition",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:mrposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "msstext",
          "package": "labyrinth",
          "signature": "Traversal' Move String",
          "source": "src/Labyrinth-Move.html#msstext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "msstext",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:msstext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "noEvents",
          "package": "labyrinth",
          "signature": "CellEvents",
          "source": "src/Labyrinth-Move.html#noEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "noEvents",
          "package": "labyrinth",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:noEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "onto",
          "package": "labyrinth",
          "signature": "Traversal' GoResult CellTypeResult",
          "source": "src/Labyrinth-Move.html#onto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "onto",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:onto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "qrbullets",
          "package": "labyrinth",
          "signature": "Traversal' QueryResult Int",
          "source": "src/Labyrinth-Move.html#qrbullets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "qrbullets",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:qrbullets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "qrgrenades",
          "package": "labyrinth",
          "signature": "Traversal' QueryResult Int",
          "source": "src/Labyrinth-Move.html#qrgrenades",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "qrgrenades",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:qrgrenades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "qrhealth",
          "package": "labyrinth",
          "signature": "Traversal' QueryResult Health",
          "source": "src/Labyrinth-Move.html#qrhealth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "qrhealth",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:qrhealth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "qrtreasure",
          "package": "labyrinth",
          "signature": "Traversal' QueryResult Bool",
          "source": "src/Labyrinth-Move.html#qrtreasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "qrtreasure",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:qrtreasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "revents",
          "package": "labyrinth",
          "signature": "Traversal' ReorderCellResult CellEvents",
          "source": "src/Labyrinth-Move.html#revents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "revents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:revents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "ronto",
          "package": "labyrinth",
          "signature": "Traversal' ReorderCellResult CellTypeResult",
          "source": "src/Labyrinth-Move.html#ronto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "ronto",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:ronto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "scell",
          "package": "labyrinth",
          "signature": "Lens' StartResult CellTypeResult",
          "source": "src/Labyrinth-Move.html#scell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "scell",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:scell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "sevents",
          "package": "labyrinth",
          "signature": "Lens' StartResult CellEvents",
          "source": "src/Labyrinth-Move.html#sevents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "sevents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:sevents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "splayer",
          "package": "labyrinth",
          "signature": "Lens' StartResult PlayerId",
          "source": "src/Labyrinth-Move.html#splayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "splayer",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:splayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "transportedTo",
          "package": "labyrinth",
          "signature": "Lens' CellEvents (Maybe CellTypeResult)",
          "source": "src/Labyrinth-Move.html#transportedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "transportedTo",
          "package": "labyrinth",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:transportedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "treasureResult",
          "package": "labyrinth",
          "signature": "Traversal' GoResult (Maybe TreasureResult)",
          "source": "src/Labyrinth-Move.html#treasureResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "treasureResult",
          "package": "labyrinth",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:treasureResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Move",
          "name": "wevents",
          "package": "labyrinth",
          "signature": "Traversal' GoResult CellEvents",
          "source": "src/Labyrinth-Move.html#wevents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Move",
          "module": "Labyrinth.Move",
          "name": "wevents",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Move.html#v:wevents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "Reachability",
          "package": "labyrinth",
          "source": "src/Labyrinth-Reachability.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "Reachability",
          "package": "labyrinth",
          "partial": "Reachability",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "Connectivity",
          "package": "labyrinth",
          "source": "src/Labyrinth-Reachability.html#Connectivity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "Connectivity",
          "package": "labyrinth",
          "partial": "Connectivity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#t:Connectivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "Distribution",
          "package": "labyrinth",
          "source": "src/Labyrinth-Reachability.html#Distribution",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "Distribution",
          "package": "labyrinth",
          "partial": "Distribution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "PositionMap",
          "package": "labyrinth",
          "source": "src/Labyrinth-Reachability.html#PositionMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "PositionMap",
          "package": "labyrinth",
          "partial": "Position Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#t:PositionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "Reachability",
          "package": "labyrinth",
          "source": "src/Labyrinth-Reachability.html#Reachability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "Reachability",
          "package": "labyrinth",
          "partial": "Reachability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#t:Reachability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "armoriesDist",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e PositionMap Any",
          "source": "src/Labyrinth-Reachability.html#armoriesDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "armoriesDist",
          "normalized": "Labyrinth-\u003ePositionMap Any",
          "package": "labyrinth",
          "partial": "Dist",
          "signature": "Labyrinth-\u003ePositionMap Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:armoriesDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "connectivity",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Connectivity",
          "source": "src/Labyrinth-Reachability.html#connectivity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "connectivity",
          "normalized": "Labyrinth-\u003eConnectivity",
          "package": "labyrinth",
          "signature": "Labyrinth-\u003eConnectivity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:connectivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "converge",
          "package": "labyrinth",
          "signature": "Int -\u003e Labyrinth -\u003e Distribution",
          "source": "src/Labyrinth-Reachability.html#converge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "converge",
          "normalized": "Int-\u003eLabyrinth-\u003eDistribution",
          "package": "labyrinth",
          "signature": "Int-\u003eLabyrinth-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:converge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "distribute",
          "package": "labyrinth",
          "signature": "Map k [k] -\u003e Map k v -\u003e Map k v",
          "source": "src/Labyrinth-Reachability.html#distribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "distribute",
          "normalized": "Map a[a]-\u003eMap a b-\u003eMap a b",
          "package": "labyrinth",
          "signature": "Map k[k]-\u003eMap k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "distributeN",
          "package": "labyrinth",
          "signature": "Int -\u003e Map k [k] -\u003e Map k v -\u003e Map k v",
          "source": "src/Labyrinth-Reachability.html#distributeN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "distributeN",
          "normalized": "Int-\u003eMap a[a]-\u003eMap a b-\u003eMap a b",
          "package": "labyrinth",
          "signature": "Int-\u003eMap k[k]-\u003eMap k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:distributeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "distributeU",
          "package": "labyrinth",
          "signature": "Map k [k] -\u003e Map k v -\u003e Map k v",
          "source": "src/Labyrinth-Reachability.html#distributeU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "distributeU",
          "normalized": "Map a[a]-\u003eMap a b-\u003eMap a b",
          "package": "labyrinth",
          "signature": "Map k[k]-\u003eMap k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:distributeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "foldConcat",
          "package": "labyrinth",
          "signature": "Map k [v] -\u003e Map k v",
          "source": "src/Labyrinth-Reachability.html#foldConcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "foldConcat",
          "normalized": "Map a[b]-\u003eMap a b",
          "package": "labyrinth",
          "partial": "Concat",
          "signature": "Map k[v]-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:foldConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "insertAppend",
          "package": "labyrinth",
          "signature": "k -\u003e v -\u003e Map k [v] -\u003e Map k [v]",
          "source": "src/Labyrinth-Reachability.html#insertAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "insertAppend",
          "normalized": "a-\u003eb-\u003eMap a[b]-\u003eMap a[b]",
          "package": "labyrinth",
          "partial": "Append",
          "signature": "k-\u003ev-\u003eMap k[v]-\u003eMap k[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:insertAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "inverse",
          "package": "labyrinth",
          "signature": "Map a [b] -\u003e Map b [a]",
          "source": "src/Labyrinth-Reachability.html#inverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "inverse",
          "normalized": "Map a[b]-\u003eMap b[a]",
          "package": "labyrinth",
          "signature": "Map a[b]-\u003eMap b[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "maxKeyBy",
          "package": "labyrinth",
          "signature": "(k -\u003e n) -\u003e Map k a -\u003e n",
          "source": "src/Labyrinth-Reachability.html#maxKeyBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "maxKeyBy",
          "normalized": "(a-\u003eb)-\u003eMap a c-\u003eb",
          "package": "labyrinth",
          "partial": "Key By",
          "signature": "(k-\u003en)-\u003eMap k a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:maxKeyBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "nextCell",
          "package": "labyrinth",
          "signature": "Position -\u003e Reader Labyrinth Position",
          "source": "src/Labyrinth-Reachability.html#nextCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "nextCell",
          "normalized": "Position-\u003eReader Labyrinth Position",
          "package": "labyrinth",
          "partial": "Cell",
          "signature": "Position-\u003eReader Labyrinth Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:nextCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "normalize",
          "package": "labyrinth",
          "signature": "Map k v -\u003e Map k v",
          "source": "src/Labyrinth-Reachability.html#normalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "normalize",
          "normalized": "Map a b-\u003eMap a b",
          "package": "labyrinth",
          "signature": "Map k v-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "pad",
          "package": "labyrinth",
          "signature": "Int -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Labyrinth-Reachability.html#pad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "pad",
          "normalized": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "package": "labyrinth",
          "signature": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "reachConverge",
          "package": "labyrinth",
          "signature": "Int -\u003e Labyrinth -\u003e Reachability",
          "source": "src/Labyrinth-Reachability.html#reachConverge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "reachConverge",
          "normalized": "Int-\u003eLabyrinth-\u003eReachability",
          "package": "labyrinth",
          "partial": "Converge",
          "signature": "Int-\u003eLabyrinth-\u003eReachability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:reachConverge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "reachConvergeU",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Reachability",
          "source": "src/Labyrinth-Reachability.html#reachConvergeU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "reachConvergeU",
          "normalized": "Labyrinth-\u003eReachability",
          "package": "labyrinth",
          "partial": "Converge",
          "signature": "Labyrinth-\u003eReachability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:reachConvergeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "reachable",
          "package": "labyrinth",
          "signature": "Position -\u003e Reader Labyrinth [Position]",
          "source": "src/Labyrinth-Reachability.html#reachable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "reachable",
          "normalized": "Position-\u003eReader Labyrinth[Position]",
          "package": "labyrinth",
          "signature": "Position-\u003eReader Labyrinth[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:reachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "showDist",
          "package": "labyrinth",
          "signature": "Distribution -\u003e String",
          "source": "src/Labyrinth-Reachability.html#showDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "showDist",
          "normalized": "Distribution-\u003eString",
          "package": "labyrinth",
          "partial": "Dist",
          "signature": "Distribution-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:showDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "showGrid",
          "package": "labyrinth",
          "signature": "(Maybe a -\u003e String) -\u003e PositionMap a -\u003e String",
          "source": "src/Labyrinth-Reachability.html#showGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "showGrid",
          "normalized": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eString",
          "package": "labyrinth",
          "partial": "Grid",
          "signature": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:showGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "showGridLine",
          "package": "labyrinth",
          "signature": "(Maybe a -\u003e String) -\u003e PositionMap a -\u003e Int -\u003e String",
          "source": "src/Labyrinth-Reachability.html#showGridLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "showGridLine",
          "normalized": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eInt-\u003eString",
          "package": "labyrinth",
          "partial": "Grid Line",
          "signature": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:showGridLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "showGridPos",
          "package": "labyrinth",
          "signature": "(Maybe a -\u003e String) -\u003e PositionMap a -\u003e Int -\u003e Int -\u003e String",
          "source": "src/Labyrinth-Reachability.html#showGridPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "showGridPos",
          "normalized": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eInt-\u003eInt-\u003eString",
          "package": "labyrinth",
          "partial": "Grid Pos",
          "signature": "(Maybe a-\u003eString)-\u003ePositionMap a-\u003eInt-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:showGridPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "showReach",
          "package": "labyrinth",
          "signature": "Reachability -\u003e String",
          "source": "src/Labyrinth-Reachability.html#showReach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "showReach",
          "normalized": "Reachability-\u003eString",
          "package": "labyrinth",
          "partial": "Reach",
          "signature": "Reachability-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:showReach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Reachability",
          "name": "uniformBetween",
          "package": "labyrinth",
          "signature": "a -\u003e [Position] -\u003e PositionMap a",
          "source": "src/Labyrinth-Reachability.html#uniformBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Reachability",
          "module": "Labyrinth.Reachability",
          "name": "uniformBetween",
          "normalized": "a-\u003e[Position]-\u003ePositionMap a",
          "package": "labyrinth",
          "partial": "Between",
          "signature": "a-\u003e[Position]-\u003ePositionMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Reachability.html#v:uniformBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "Read",
          "package": "labyrinth",
          "source": "src/Labyrinth-Read.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "Read",
          "package": "labyrinth",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "action",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "action",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "actions",
          "package": "labyrinth",
          "signature": "Parser [Action]",
          "source": "src/Labyrinth-Read.html#actions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "actions",
          "normalized": "Parser[Action]",
          "package": "labyrinth",
          "signature": "Parser[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:actions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "choosePosition",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#choosePosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "choosePosition",
          "package": "labyrinth",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:choosePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "commaSpaces",
          "package": "labyrinth",
          "signature": "Parser ()",
          "source": "src/Labyrinth-Read.html#commaSpaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "commaSpaces",
          "normalized": "Parser()",
          "package": "labyrinth",
          "partial": "Spaces",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:commaSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "conditionalAction",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#conditionalAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "conditionalAction",
          "package": "labyrinth",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:conditionalAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "conditionalPart",
          "package": "labyrinth",
          "signature": "Parser [Action]",
          "source": "src/Labyrinth-Read.html#conditionalPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "conditionalPart",
          "normalized": "Parser[Action]",
          "package": "labyrinth",
          "partial": "Part",
          "signature": "Parser[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:conditionalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "direction",
          "package": "labyrinth",
          "signature": "Parser Direction",
          "source": "src/Labyrinth-Read.html#direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "direction",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "emptyMove",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#emptyMove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "emptyMove",
          "package": "labyrinth",
          "partial": "Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:emptyMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "goAction",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#goAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "goAction",
          "package": "labyrinth",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:goAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "grenadeAction",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#grenadeAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "grenadeAction",
          "package": "labyrinth",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:grenadeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "integer",
          "package": "labyrinth",
          "signature": "Parser Int",
          "source": "src/Labyrinth-Read.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "integer",
          "package": "labyrinth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "moveParser",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#moveParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "moveParser",
          "package": "labyrinth",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:moveParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Labyrinth.Read\",\"Labyrinth\"]",
          "name": "parseMove",
          "package": "labyrinth",
          "signature": "String -\u003e Either String Move",
          "source": "src/Labyrinth-Read.html#parseMove",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:parseMove\",\"http://hackage.haskell.org/package/labyrinth/docs/Labyrinth.html#v:parseMove\"]"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "parseMove",
          "normalized": "String-\u003eEither String Move",
          "package": "labyrinth",
          "partial": "Move",
          "signature": "String-\u003eEither String Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:parseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "positionParser",
          "package": "labyrinth",
          "signature": "Parser Position",
          "source": "src/Labyrinth-Read.html#positionParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "positionParser",
          "package": "labyrinth",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:positionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "queriesParser",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#queriesParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "queriesParser",
          "package": "labyrinth",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:queriesParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "queryParser",
          "package": "labyrinth",
          "signature": "Parser QueryType",
          "source": "src/Labyrinth-Read.html#queryParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "queryParser",
          "package": "labyrinth",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:queryParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "reorderCell",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#reorderCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "reorderCell",
          "package": "labyrinth",
          "partial": "Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:reorderCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "sayParser",
          "package": "labyrinth",
          "signature": "Parser Move",
          "source": "src/Labyrinth-Read.html#sayParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "sayParser",
          "package": "labyrinth",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:sayParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "shootAction",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#shootAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "shootAction",
          "package": "labyrinth",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:shootAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "spaces1",
          "package": "labyrinth",
          "signature": "Parser ()",
          "source": "src/Labyrinth-Read.html#spaces1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "spaces1",
          "normalized": "Parser()",
          "package": "labyrinth",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:spaces1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "stringResult",
          "package": "labyrinth",
          "signature": "String -\u003e a -\u003e Parser a",
          "source": "src/Labyrinth-Read.html#stringResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "stringResult",
          "normalized": "String-\u003ea-\u003eParser a",
          "package": "labyrinth",
          "partial": "Result",
          "signature": "String-\u003ea-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:stringResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Read",
          "name": "surrenderAction",
          "package": "labyrinth",
          "signature": "Parser Action",
          "source": "src/Labyrinth-Read.html#surrenderAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Read",
          "module": "Labyrinth.Read",
          "name": "surrenderAction",
          "package": "labyrinth",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Read.html#v:surrenderAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "Show",
          "package": "labyrinth",
          "source": "src/Labyrinth-Show.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "Show",
          "package": "labyrinth",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "Definite",
          "package": "labyrinth",
          "source": "src/Labyrinth-Show.html#Definite",
          "type": "data"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "Definite",
          "package": "labyrinth",
          "partial": "Definite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#t:Definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "Definite",
          "package": "labyrinth",
          "signature": "Definite",
          "source": "src/Labyrinth-Show.html#Definite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "Definite",
          "package": "labyrinth",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:Definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "Indefinite",
          "package": "labyrinth",
          "signature": "Indefinite",
          "source": "src/Labyrinth-Show.html#Definite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "Indefinite",
          "package": "labyrinth",
          "partial": "Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:Indefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "commaSepShow",
          "package": "labyrinth",
          "signature": "[a] -\u003e String",
          "source": "src/Labyrinth-Show.html#commaSepShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "commaSepShow",
          "normalized": "[a]-\u003eString",
          "package": "labyrinth",
          "partial": "Sep Show",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:commaSepShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "pluralize",
          "package": "labyrinth",
          "signature": "Definite -\u003e a -\u003e String -\u003e String",
          "source": "src/Labyrinth-Show.html#pluralize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "pluralize",
          "normalized": "Definite-\u003ea-\u003eString-\u003eString",
          "package": "labyrinth",
          "signature": "Definite-\u003ea-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:pluralize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "sepShow",
          "package": "labyrinth",
          "signature": "Char -\u003e [a] -\u003e String",
          "source": "src/Labyrinth-Show.html#sepShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "sepShow",
          "normalized": "Char-\u003e[a]-\u003eString",
          "package": "labyrinth",
          "partial": "Show",
          "signature": "Char-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:sepShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showActResults",
          "package": "labyrinth",
          "signature": "[ActionResult] -\u003e String",
          "source": "src/Labyrinth-Show.html#showActResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showActResults",
          "normalized": "[ActionResult]-\u003eString",
          "package": "labyrinth",
          "partial": "Act Results",
          "signature": "[ActionResult]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showActResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showCellItems",
          "package": "labyrinth",
          "signature": "Cell -\u003e String",
          "source": "src/Labyrinth-Show.html#showCellItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showCellItems",
          "normalized": "Cell-\u003eString",
          "package": "labyrinth",
          "partial": "Cell Items",
          "signature": "Cell-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showCellItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showCellLine",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int -\u003e String",
          "source": "src/Labyrinth-Show.html#showCellLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showCellLine",
          "normalized": "Labyrinth-\u003eInt-\u003eString",
          "package": "labyrinth",
          "partial": "Cell Line",
          "signature": "Labyrinth-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showCellLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showCurrentPlayer",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [String]",
          "source": "src/Labyrinth-Show.html#showCurrentPlayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showCurrentPlayer",
          "normalized": "Labyrinth-\u003e[String]",
          "package": "labyrinth",
          "partial": "Current Player",
          "signature": "Labyrinth-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showCurrentPlayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showH",
          "package": "labyrinth",
          "signature": "Wall -\u003e String",
          "source": "src/Labyrinth-Show.html#showH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showH",
          "normalized": "Wall-\u003eString",
          "package": "labyrinth",
          "signature": "Wall-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showItems",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [String]",
          "source": "src/Labyrinth-Show.html#showItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showItems",
          "normalized": "Labyrinth-\u003e[String]",
          "package": "labyrinth",
          "partial": "Items",
          "signature": "Labyrinth-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showMap",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [String]",
          "source": "src/Labyrinth-Show.html#showMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showMap",
          "normalized": "Labyrinth-\u003e[String]",
          "package": "labyrinth",
          "partial": "Map",
          "signature": "Labyrinth-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showPlayers",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [String]",
          "source": "src/Labyrinth-Show.html#showPlayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showPlayers",
          "normalized": "Labyrinth-\u003e[String]",
          "package": "labyrinth",
          "partial": "Players",
          "signature": "Labyrinth-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showPlayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showStatus",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e [String]",
          "source": "src/Labyrinth-Show.html#showStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showStatus",
          "normalized": "Labyrinth-\u003e[String]",
          "package": "labyrinth",
          "partial": "Status",
          "signature": "Labyrinth-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showV",
          "package": "labyrinth",
          "signature": "Wall -\u003e String",
          "source": "src/Labyrinth-Show.html#showV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showV",
          "normalized": "Wall-\u003eString",
          "package": "labyrinth",
          "signature": "Wall-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth.Show",
          "name": "showWallLine",
          "package": "labyrinth",
          "signature": "Labyrinth -\u003e Int -\u003e String",
          "source": "src/Labyrinth-Show.html#showWallLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Labyrinth Show",
          "module": "Labyrinth.Show",
          "name": "showWallLine",
          "normalized": "Labyrinth-\u003eInt-\u003eString",
          "package": "labyrinth",
          "partial": "Wall Line",
          "signature": "Labyrinth-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth-Show.html#v:showWallLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Labyrinth",
          "name": "Labyrinth",
          "package": "labyrinth",
          "source": "src/Labyrinth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Labyrinth",
          "module": "Labyrinth",
          "name": "Labyrinth",
          "package": "labyrinth",
          "partial": "Labyrinth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/labyrinth/docs/Labyrinth.html#"
      }
    }
  ]
]