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
        "word": "Tournament"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTournament construction and maintenance including competition based structures and helpers.\n\u003c/p\u003e\u003cp\u003eThis library is intended to be imported qualified as it exports functions that clash with\n Prelude.\n\u003c/p\u003e\u003cpre\u003e import Game.Tournament as T\n\u003c/pre\u003e\u003cp\u003eThe Tournament structure contain a Map of \u003ccode\u003e\u003ca\u003eGameId\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003eGame\u003c/code\u003e for its internal\n representation and the \u003ccode\u003e\u003ca\u003eGameId\u003c/a\u003e\u003c/code\u003e keys are the location in the Tournament.\n\u003c/p\u003e\u003cp\u003eDuel tournaments are based on the theory from \u003ca\u003ehttp://clux.org/entries/view/2407\u003c/a\u003e.\n By using the seeding definitions listed there, there is almost only one way to\n generate a tournament, and the ambivalence appears only in Double elimination.\n\u003c/p\u003e\u003cp\u003eWe have additionally chosen that brackets should converge by having the losers bracket move upwards.\n This is not necessary, but improves the visual layout when presented in a standard way.\n\u003c/p\u003e\u003cp\u003eFFA tournaments use a collection of sensible assumptions on how to\n optimally split n people into s groups while minimizing the sum of seeds difference\n between groups for fairness. At the end of each round, groups are recalculated from the scores\n of the winners, and new groups are created for the next round.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Game.Tournament",
          "name": "Tournament",
          "package": "Tournament",
          "source": "src/Game-Tournament.html",
          "type": "module"
        },
        "index": {
          "description": "Tournament construction and maintenance including competition based structures and helpers This library is intended to be imported qualified as it exports functions that clash with Prelude import Game.Tournament as The Tournament structure contain Map of GameId Game for its internal representation and the GameId keys are the location in the Tournament Duel tournaments are based on the theory from http clux.org entries view By using the seeding definitions listed there there is almost only one way to generate tournament and the ambivalence appears only in Double elimination We have additionally chosen that brackets should converge by having the losers bracket move upwards This is not necessary but improves the visual layout when presented in standard way FFA tournaments use collection of sensible assumptions on how to optimally split people into groups while minimizing the sum of seeds difference between groups for fairness At the end of each round groups are recalculated from the scores of the winners and new groups are created for the next round",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Tournament",
          "package": "Tournament",
          "partial": "Tournament",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Advancers",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Advancers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Advancers",
          "package": "Tournament",
          "partial": "Advancers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Advancers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bracket location of a game.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eDuel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFFA\u003c/a\u003e\u003c/code\u003e, most matches exist in  the winners bracket (\u003ccode\u003e\u003ca\u003eWB\u003c/a\u003e\u003c/code\u003e)\n , with the exception of the bronze final and possible crossover matches.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDuel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFFA\u003c/a\u003e\u003c/code\u003e with crossovers will have extra matches in the loser bracket (\u003ccode\u003e\u003ca\u003eLB\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "Bracket",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Bracket",
          "type": "data"
        },
        "index": {
          "description": "The bracket location of game For Duel Single or FFA most matches exist in the winners bracket WB with the exception of the bronze final and possible crossover matches Duel Double or FFA with crossovers will have extra matches in the loser bracket LB",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Bracket",
          "package": "Tournament",
          "partial": "Bracket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuel Tournament option.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e elimation is a standard power of 2 tournament tree,\n wheras \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e elimination grants each loser a second chance in the lower bracket.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "Elimination",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Elimination",
          "type": "data"
        },
        "index": {
          "description": "Duel Tournament option Single elimation is standard power of tournament tree wheras Double elimination grants each loser second chance in the lower bracket",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Elimination",
          "package": "Tournament",
          "partial": "Elimination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Elimination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of a game is written as to simulate the classical shorthand WBR2,\n but includes additionally the game number for complete positional uniqueness.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e elimination final will have the unique identifier\n\u003c/p\u003e\u003cpre\u003e let wbf = GameId WB p 1\n\u003c/pre\u003e\u003cp\u003ewhere 'p == count t WB'.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "GameId",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#GameId",
          "type": "data"
        },
        "index": {
          "description": "The location of game is written as to simulate the classical shorthand WBR2 but includes additionally the game number for complete positional uniqueness Single elimination final will have the unique identifier let wbf GameId WB where count WB",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "GameId",
          "package": "Tournament",
          "partial": "Game Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:GameId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "GroupSize",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#GroupSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "GroupSize",
          "package": "Tournament",
          "partial": "Group Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:GroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord of each player's accomplishments in the current tournament.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "Result",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Record of each player accomplishments in the current tournament",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Result",
          "package": "Tournament",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResults in descending order of placement.\n\u003c/p\u003e\u003cp\u003eOnly constructed by \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e once the last game was played.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "Results",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Results",
          "type": "type"
        },
        "index": {
          "description": "Results in descending order of placement Only constructed by score once the last game was played",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Results",
          "package": "Tournament",
          "partial": "Results",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Rules",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Rules",
          "type": "data"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Rules",
          "package": "Tournament",
          "partial": "Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Score",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Score",
          "type": "type"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Score",
          "package": "Tournament",
          "partial": "Score",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Size",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Size",
          "package": "Tournament",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Tournament",
          "package": "Tournament",
          "source": "src/Game-Tournament.html#Tournament",
          "type": "data"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Tournament",
          "package": "Tournament",
          "partial": "Tournament",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#t:Tournament"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Double",
          "package": "Tournament",
          "signature": "Double",
          "source": "src/Game-Tournament.html#Elimination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Double",
          "package": "Tournament",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Duel",
          "package": "Tournament",
          "signature": "Duel Elimination",
          "source": "src/Game-Tournament.html#Rules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Duel",
          "package": "Tournament",
          "partial": "Duel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:Duel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "FFA",
          "package": "Tournament",
          "signature": "FFA GroupSize Advancers",
          "source": "src/Game-Tournament.html#Rules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "FFA",
          "package": "Tournament",
          "partial": "FFA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:FFA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "GameId",
          "package": "Tournament",
          "signature": "GameId",
          "source": "src/Game-Tournament.html#GameId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "GameId",
          "package": "Tournament",
          "partial": "Game Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:GameId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "LB",
          "package": "Tournament",
          "signature": "LB",
          "source": "src/Game-Tournament.html#Bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "LB",
          "package": "Tournament",
          "partial": "LB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:LB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "Single",
          "package": "Tournament",
          "signature": "Single",
          "source": "src/Game-Tournament.html#Elimination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "Single",
          "package": "Tournament",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "WB",
          "package": "Tournament",
          "signature": "WB",
          "source": "src/Game-Tournament.html#Bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "WB",
          "package": "Tournament",
          "partial": "WB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:WB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "bracket",
          "package": "Tournament",
          "signature": "Bracket",
          "source": "src/Game-Tournament.html#GameId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "bracket",
          "package": "Tournament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of rounds in a given bracket in a Tournament.\n TODO: rename to length once it has been less awkwardly moved into an internal part\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "count",
          "package": "Tournament",
          "signature": "Tournament -\u003e Bracket -\u003e Int",
          "source": "src/Game-Tournament.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count the number of rounds in given bracket in Tournament TODO rename to length once it has been less awkwardly moved into an internal part",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "count",
          "normalized": "Tournament-\u003eBracket-\u003eInt",
          "package": "Tournament",
          "signature": "Tournament-\u003eBracket-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the 3 criteria for perfect seeding holds for the current\n power and seed pair arguments.\n This can be used to make a measure of how good the seeding was in retrospect\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "duelExpected",
          "package": "Tournament",
          "signature": "a -\u003e (a, a) -\u003e Bool",
          "source": "src/Game-Tournament.html#duelExpected",
          "type": "function"
        },
        "index": {
          "description": "Check if the criteria for perfect seeding holds for the current power and seed pair arguments This can be used to make measure of how good the seeding was in retrospect",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "duelExpected",
          "normalized": "a-\u003e(a,a)-\u003eBool",
          "package": "Tournament",
          "partial": "Expected",
          "signature": "a-\u003e(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:duelExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "game",
          "package": "Tournament",
          "signature": "Int",
          "source": "src/Game-Tournament.html#GameId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "game",
          "package": "Tournament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a numer of players into groups of as close to equal seeding sum\n as possible. When groupsize is even and s | n, the seed sum is constant.\n Fixes the number of groups as ceil $ n / s, but will reduce s when all groups not full.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "groups",
          "package": "Tournament",
          "signature": "Int -\u003e Int -\u003e [[Int]]",
          "source": "src/Game-Tournament.html#groups",
          "type": "function"
        },
        "index": {
          "description": "Splits numer of players into groups of as close to equal seeding sum as possible When groupsize is even and the seed sum is constant Fixes the number of groups as ceil but will reduce when all groups not full",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "groups",
          "normalized": "Int-\u003eInt-\u003e[[Int]]",
          "package": "Tournament",
          "signature": "Int-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of all GameIds in a Tournament.\n This list is also ordered by GameId's Ord, and in fact,\n if the corresponding games were scored in this order, the tournament would finish,\n and scorable would only return False for a few special walkover games.\n TODO: if introducing crossovers, this would not be true for LB crossovers\n =\u003e need to place them in WB in an 'interim round'\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "keys",
          "package": "Tournament",
          "signature": "Tournament -\u003e [GameId]",
          "source": "src/Game-Tournament.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Get the list of all GameIds in Tournament This list is also ordered by GameId Ord and in fact if the corresponding games were scored in this order the tournament would finish and scorable would only return False for few special walkover games TODO if introducing crossovers this would not be true for LB crossovers need to place them in WB in an interim round",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "keys",
          "normalized": "Tournament-\u003e[GameId]",
          "package": "Tournament",
          "signature": "Tournament-\u003e[GameId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlacement of the player associated with this record.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "placement",
          "package": "Tournament",
          "signature": "Result -\u003e Int",
          "source": "src/Game-Tournament.html#placement",
          "type": "function"
        },
        "index": {
          "description": "Placement of the player associated with this record",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "placement",
          "normalized": "Result-\u003eInt",
          "package": "Tournament",
          "signature": "Result-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:placement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlayer associated with the record.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "player",
          "package": "Tournament",
          "signature": "Result -\u003e Int",
          "source": "src/Game-Tournament.html#player",
          "type": "function"
        },
        "index": {
          "description": "Player associated with the record",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "player",
          "normalized": "Result-\u003eInt",
          "package": "Tournament",
          "signature": "Result-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "results",
          "package": "Tournament",
          "signature": "Tournament -\u003e Maybe Results",
          "source": "src/Game-Tournament.html#results",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "results",
          "normalized": "Tournament-\u003eMaybe Results",
          "package": "Tournament",
          "signature": "Tournament-\u003eMaybe Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound robin schedules a list of n players and returns\n a list of rounds (where a round is a list of pairs). Uses\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRound-robin_tournament#Scheduling_algorithm\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "robin",
          "package": "Tournament",
          "signature": "a -\u003e [[(a, a)]]",
          "source": "src/Game-Tournament.html#robin",
          "type": "function"
        },
        "index": {
          "description": "Round robin schedules list of players and returns list of rounds where round is list of pairs Uses http en.wikipedia.org wiki Round-robin tournament Scheduling algorithm",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "robin",
          "normalized": "a-\u003e[[(a,a)]]",
          "package": "Tournament",
          "signature": "a-\u003e[[(a,a)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:robin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "round",
          "package": "Tournament",
          "signature": "Int",
          "source": "src/Game-Tournament.html#GameId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "round",
          "package": "Tournament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a GameId exists and is ready to be scored through \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "scorable",
          "package": "Tournament",
          "signature": "GameId -\u003e Tournament -\u003e Bool",
          "source": "src/Game-Tournament.html#scorable",
          "type": "function"
        },
        "index": {
          "description": "Check if GameId exists and is ready to be scored through score",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "scorable",
          "normalized": "GameId-\u003eTournament-\u003eBool",
          "package": "Tournament",
          "signature": "GameId-\u003eTournament-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:scorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScore a match in a tournament and propagate winners/losers.\n If match is not \u003ccode\u003e\u003ca\u003escorable\u003c/a\u003e\u003c/code\u003e, the Tournament will pass through unchanged.\n\u003c/p\u003e\u003cp\u003eFor a Duel tournament, winners (and losers if Double) are propagated immediately,\n wheras FFA tournaments calculate winners at the end of the round (when all games played).\n\u003c/p\u003e\u003cp\u003eThere is no limitation on re-scoring old games, so care must be taken to not update too far\n back ones and leaving the tournament in an inconsistent state. When scoring games more than one\n round behind the corresponding active round, the locations to which these propagate must\n be updated manually.\n\u003c/p\u003e\u003cp\u003eTo prevent yourself from never scoring older matches, only score games for which\n \u003ccode\u003esafeScorable\u003c/code\u003e returns True. Though this has not been implemented yet.\n\u003c/p\u003e\u003cpre\u003e gid = (GameId WB 2 1)\n tUpdated = if safeScorable gid then score gid [1,0] t else t\n\u003c/pre\u003e\u003cp\u003eTODO: strictify this function\n TODO: better to do a scoreSafe? \u003cem/\u003e call this scoreUnsafe\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "score",
          "package": "Tournament",
          "signature": "GameId -\u003e [Score] -\u003e Tournament -\u003e Tournament",
          "source": "src/Game-Tournament.html#score",
          "type": "function"
        },
        "index": {
          "description": "Score match in tournament and propagate winners losers If match is not scorable the Tournament will pass through unchanged For Duel tournament winners and losers if Double are propagated immediately wheras FFA tournaments calculate winners at the end of the round when all games played There is no limitation on re-scoring old games so care must be taken to not update too far back ones and leaving the tournament in an inconsistent state When scoring games more than one round behind the corresponding active round the locations to which these propagate must be updated manually To prevent yourself from never scoring older matches only score games for which safeScorable returns True Though this has not been implemented yet gid GameId WB tUpdated if safeScorable gid then score gid else TODO strictify this function TODO better to do scoreSafe call this scoreUnsafe",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "score",
          "normalized": "GameId-\u003e[Score]-\u003eTournament-\u003eTournament",
          "package": "Tournament",
          "signature": "GameId-\u003e[Score]-\u003eTournament-\u003eTournament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower of a tournament.\n It's defined as 2^num_players rounded up to nearest power of 2.\ntype Power = Int\n\u003c/p\u003e\u003cp\u003eComputes both the upper and lower player seeds for a duel elimiation match.\n The first argument is the power of the tournament:\n\u003c/p\u003e\u003cp\u003ep :: 2^num_players rounding up to nearest power of 2\n\u003c/p\u003e\u003cp\u003eThe second parameter is the game number i (in round one).\n\u003c/p\u003e\u003cp\u003eThe pair (p,i) must obey\n\u003c/p\u003e\u003cpre\u003ep \u003e 0 && 0 \u003c i \u003c= 2^(p-1).\n\u003c/pre\u003e",
          "module": "Game.Tournament",
          "name": "seeds",
          "package": "Tournament",
          "signature": "Int -\u003e Int -\u003e (Int, Int)",
          "source": "src/Game-Tournament.html#seeds",
          "type": "function"
        },
        "index": {
          "description": "Power of tournament It defined as num players rounded up to nearest power of type Power Int Computes both the upper and lower player seeds for duel elimiation match The first argument is the power of the tournament num players rounding up to nearest power of The second parameter is the game number in round one The pair must obey p-1",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "seeds",
          "normalized": "Int-\u003eInt-\u003e(Int,Int)",
          "package": "Tournament",
          "signature": "Int-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:seeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Game.Tournament",
          "name": "testcase",
          "package": "Tournament",
          "signature": "IO ()",
          "source": "src/Game-Tournament.html#testcase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "testcase",
          "normalized": "IO()",
          "package": "Tournament",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:testcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of scores for the games the associated player played.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "total",
          "package": "Tournament",
          "signature": "Result -\u003e Int",
          "source": "src/Game-Tournament.html#total",
          "type": "function"
        },
        "index": {
          "description": "Sum of scores for the games the associated player played",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "total",
          "normalized": "Result-\u003eInt",
          "package": "Tournament",
          "signature": "Result-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate match shells for an FFA elimination tournament.\n Result comes pre-filled in with either top advancers or advancers \u003ccode\u003eintersect\u003c/code\u003e seedList.\n This means what the player numbers represent is only fixed per round.\n TODO: Either String Tournament as return for intelligent error handling\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "tournament",
          "package": "Tournament",
          "signature": "Rules -\u003e Size -\u003e Tournament",
          "source": "src/Game-Tournament.html#tournament",
          "type": "function"
        },
        "index": {
          "description": "Create match shells for an FFA elimination tournament Result comes pre-filled in with either top advancers or advancers intersect seedList This means what the player numbers represent is only fixed per round TODO Either String Tournament as return for intelligent error handling",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "tournament",
          "normalized": "Rules-\u003eSize-\u003eTournament",
          "package": "Tournament",
          "signature": "Rules-\u003eSize-\u003eTournament",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:tournament"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of games the player associated with this record won.\n\u003c/p\u003e",
          "module": "Game.Tournament",
          "name": "wins",
          "package": "Tournament",
          "signature": "Result -\u003e Int",
          "source": "src/Game-Tournament.html#wins",
          "type": "function"
        },
        "index": {
          "description": "Number of games the player associated with this record won",
          "hierarchy": "Game Tournament",
          "module": "Game.Tournament",
          "name": "wins",
          "normalized": "Result-\u003eInt",
          "package": "Tournament",
          "signature": "Result-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Tournament/docs/Game-Tournament.html#v:wins"
      }
    }
  ]
]