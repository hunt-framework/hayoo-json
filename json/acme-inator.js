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
        "word": "acme-inator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruction and operation of evil inventions in the Tri-State area.\n Based on the pioneering work of Dr. Heinz Doofenschmirtz.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Inator",
          "name": "Inator",
          "package": "acme-inator",
          "source": "src/Acme-Inator.html",
          "type": "module"
        },
        "index": {
          "description": "Construction and operation of evil inventions in the Tri-State area Based on the pioneering work of Dr Heinz Doofenschmirtz",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "Inator",
          "package": "acme-inator",
          "partial": "Inator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAgents are secret, and distinguished only by their letter designations.\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "Agent",
          "package": "acme-inator",
          "source": "src/Acme-Inator.html#Agent",
          "type": "data"
        },
        "index": {
          "description": "Agents are secret and distinguished only by their letter designations",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "Agent",
          "package": "acme-inator",
          "partial": "Agent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#t:Agent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e is like a normal function \u003ccode\u003ea -\u003e b\u003c/code\u003e, only used in evil\n plans. It will only function in the context of a \u003ccode\u003e\u003ca\u003eTrappedAgent\u003c/a\u003e\u003c/code\u003e. See\n \u003ccode\u003e\u003ca\u003eactivate\u003c/a\u003e\u003c/code\u003e for how to turn one one.\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "EvilInvention",
          "package": "acme-inator",
          "source": "src/Acme-Inator.html#EvilInvention",
          "type": "type"
        },
        "index": {
          "description": "An EvilInvention is like normal function only used in evil plans It will only function in the context of TrappedAgent See activate for how to turn one one",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "EvilInvention",
          "package": "acme-inator",
          "partial": "Evil Invention",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#t:EvilInvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen trapped, an \u003ccode\u003e\u003ca\u003eAgent\u003c/a\u003e\u003c/code\u003e enables an \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e to be \u003ccode\u003e\u003ca\u003eactivate\u003c/a\u003e\u003c/code\u003ed and\n then used. The scope of trapping an \u003ccode\u003e\u003ca\u003eAgent\u003c/a\u003e\u003c/code\u003e is strictly delimited.\n See \u003ccode\u003e\u003ca\u003ewhileTrapping\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "TrappedAgent",
          "package": "acme-inator",
          "source": "src/Acme-Inator.html#TrappedAgent",
          "type": "data"
        },
        "index": {
          "description": "When trapped an Agent enables an EvilInvention to be activate and then used The scope of trapping an Agent is strictly delimited See whileTrapping",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "TrappedAgent",
          "package": "acme-inator",
          "partial": "Trapped Agent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#t:TrappedAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivation and operation of an \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e is strictly limited to the\n \u003ccode\u003e\u003ca\u003eTriStateArea\u003c/a\u003e\u003c/code\u003e. Plans executed in the \u003ccode\u003e\u003ca\u003eTriStateArea\u003c/a\u003e\u003c/code\u003e may \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, causing the\n whole plan to have no externally visible effect.\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "TriStateArea",
          "package": "acme-inator",
          "source": "src/Acme-Inator.html#TriStateArea",
          "type": "data"
        },
        "index": {
          "description": "Activation and operation of an EvilInvention is strictly limited to the TriStateArea Plans executed in the TriStateArea may fail causing the whole plan to have no externally visible effect",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "TriStateArea",
          "package": "acme-inator",
          "partial": "Tri State Area",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#t:TriStateArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Inator",
          "name": "Agent",
          "package": "acme-inator",
          "signature": "Agent Char",
          "source": "src/Acme-Inator.html#Agent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "Agent",
          "package": "acme-inator",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:Agent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003es must be activated before use. The activated machine can\n then be applied to suitable targets of scorn and dislike. \u003cem\u003eN.B.:\u003c/em\u003e Activation\n and subsequent operation of an \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e can only be performed in the\n \u003ccode\u003e\u003ca\u003eTriStateArea\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e evilPlan :: TriStateArea Int\n evilPlan = do\n    zap \u003c- activate incrementinator\n    as \u003c- mapM zap [1..37]\n    b \u003c- zap 38 -- I never really liked the number 38\n    selfDestruct incrementinator\n    cs \u003c- mapM zap [39..100]\n    return $ sum as + b + sum cs\n\u003c/pre\u003e",
          "module": "Acme.Inator",
          "name": "activate",
          "package": "acme-inator",
          "signature": "EvilInvention a b -\u003e TriStateArea (a -\u003e TriStateArea b)",
          "source": "src/Acme-Inator.html#activate",
          "type": "function"
        },
        "index": {
          "description": "EvilInvention must be activated before use The activated machine can then be applied to suitable targets of scorn and dislike N.B Activation and subsequent operation of an EvilInvention can only be performed in the TriStateArea evilPlan TriStateArea Int evilPlan do zap activate incrementinator as mapM zap zap never really liked the number selfDestruct incrementinator cs mapM zap return sum as sum cs",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "activate",
          "normalized": "EvilInvention a b-\u003eTriStateArea(a-\u003eTriStateArea b)",
          "package": "acme-inator",
          "signature": "EvilInvention a b-\u003eTriStateArea(a-\u003eTriStateArea b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:activate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator to turn a function into an \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e. Typically applied\n via the \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e operator, like so:\n\u003c/p\u003e\u003cpre\u003e    incrementinator :: EvilInvention Int Int\n    incrementinator = (+1) . inator\n\u003c/pre\u003e",
          "module": "Acme.Inator",
          "name": "inator",
          "package": "acme-inator",
          "signature": "(TrappedAgent, a) -\u003e a",
          "source": "src/Acme-Inator.html#inator",
          "type": "function"
        },
        "index": {
          "description": "Combinator to turn function into an EvilInvention Typically applied via the operator like so incrementinator EvilInvention Int Int incrementinator inator",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "inator",
          "normalized": "(TrappedAgent,a)-\u003ea",
          "package": "acme-inator",
          "signature": "(TrappedAgent,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:inator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAgent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e'P'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "perryThePlatypus",
          "package": "acme-inator",
          "signature": "Agent",
          "source": "src/Acme-Inator.html#perryThePlatypus",
          "type": "function"
        },
        "index": {
          "description": "Agent",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "perryThePlatypus",
          "package": "acme-inator",
          "partial": "The Platypus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:perryThePlatypus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eWarning:\u003c/em\u003e All \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003es have a \u003ccode\u003e\u003ca\u003eselfDestruct\u003c/a\u003e\u003c/code\u003e ability. When an\n \u003ccode\u003e\u003ca\u003eEvilInvention\u003c/a\u003e\u003c/code\u003e self-destructs, all effects of evil plans in the\n \u003ccode\u003e\u003ca\u003eTriStateArea\u003c/a\u003e\u003c/code\u003e are nullified, as if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e ever happened.\n\u003c/p\u003e",
          "module": "Acme.Inator",
          "name": "selfDestruct",
          "package": "acme-inator",
          "signature": "EvilInvention a b -\u003e TriStateArea ()",
          "source": "src/Acme-Inator.html#selfDestruct",
          "type": "function"
        },
        "index": {
          "description": "Warning All EvilInvention have selfDestruct ability When an EvilInvention self-destructs all effects of evil plans in the TriStateArea are nullified as if Nothing ever happened",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "selfDestruct",
          "normalized": "EvilInvention a b-\u003eTriStateArea()",
          "package": "acme-inator",
          "partial": "Destruct",
          "signature": "EvilInvention a b-\u003eTriStateArea()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:selfDestruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo execute any plan (evil or \u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e) in the \u003ccode\u003e\u003ca\u003eTriStateArea\u003c/a\u003e\u003c/code\u003e, an\n \u003ccode\u003e\u003ca\u003eAgent\u003c/a\u003e\u003c/code\u003e must be trapped with this function, and held for the duration of\n of the plan.\n\u003c/p\u003e\u003cpre\u003e executeEvilPlan = whileTrapping perryThePlatypus evilPlan\n\n main :: IO ()\n main = do\n     putStrLn $\n         case executeEvilPlan of\n             Nothing -\u003e \"Curse you, Perry the Platypus!\"\n             Just a -\u003e \"Ha ha! I have incremented the TriStateArea to \" ++ show a\n\u003c/pre\u003e",
          "module": "Acme.Inator",
          "name": "whileTrapping",
          "package": "acme-inator",
          "signature": "Agent -\u003e TriStateArea a -\u003e Maybe a",
          "source": "src/Acme-Inator.html#whileTrapping",
          "type": "function"
        },
        "index": {
          "description": "To execute any plan evil or otherwise in the TriStateArea an Agent must be trapped with this function and held for the duration of of the plan executeEvilPlan whileTrapping perryThePlatypus evilPlan main IO main do putStrLn case executeEvilPlan of Nothing Curse you Perry the Platypus Just Ha ha have incremented the TriStateArea to show",
          "hierarchy": "Acme Inator",
          "module": "Acme.Inator",
          "name": "whileTrapping",
          "normalized": "Agent-\u003eTriStateArea a-\u003eMaybe a",
          "package": "acme-inator",
          "partial": "Trapping",
          "signature": "Agent-\u003eTriStateArea a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-inator/docs/Acme-Inator.html#v:whileTrapping"
      }
    }
  ]
]