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
        "word": "AhoCorasick"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAho-Corasick string matching algorithm\n\u003c/p\u003e\u003cp\u003eSimplest example:\n\u003c/p\u003e\u003cpre\u003e\nexample1 = mapM_ print $ findAll simpleSM \"ushers\" where\n    simpleSM = makeSimpleStateMachine [\"he\",\"she\",\"his\",\"hers\"]\n\u003c/pre\u003e\u003cpre\u003e\nPosition {pIndex = 1, pLength = 3, pVal = \"she\"}\nPosition {pIndex = 2, pLength = 2, pVal = \"he\"}\nPosition {pIndex = 2, pLength = 4, pVal = \"hers\"}\n\u003c/pre\u003e\u003cp\u003eWith data:\n\u003c/p\u003e\u003cpre\u003e\nexample2 = mapM_ print $ findAll sm \"ushers\" where\n    sm = makeStateMachine [(\"he\",0),(\"she\",1),(\"his\",2),(\"hers\",3)]\n\u003c/pre\u003e\u003cpre\u003e\nPosition {pIndex = 1, pLength = 3, pVal = 1}\nPosition {pIndex = 2, pLength = 2, pVal = 0}\nPosition {pIndex = 2, pLength = 4, pVal = 3}\n\u003c/pre\u003e\u003cp\u003eStep-by-step state machine evaluation:\n\u003c/p\u003e\u003cpre\u003e\nexample3 = mapM_ print $ next sm \"ushers\" where\n    sm = makeSimpleStateMachine [\"he\",\"she\",\"his\",\"hers\"]\n    next _ [] = []\n    next sm (s:n) = let (SMStepRes match nextSM) = stateMachineStep sm s in\n        (s, match) : next nextSM n\n\u003c/pre\u003e\u003cpre\u003e\n('u',[])\n('s',[])\n('h',[])\n('e',[(3,\"she\"),(2,\"he\")])\n('r',[])\n('s',[(4,\"hers\")])\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.AhoCorasick",
          "name": "AhoCorasick",
          "package": "AhoCorasick",
          "source": "src/Text-AhoCorasick.html",
          "type": "module"
        },
        "index": {
          "description": "Aho-Corasick string matching algorithm Simplest example example1 mapM print findAll simpleSM ushers where simpleSM makeSimpleStateMachine he she his hers Position pIndex pLength pVal she Position pIndex pLength pVal he Position pIndex pLength pVal hers With data example2 mapM print findAll sm ushers where sm makeStateMachine he she his hers Position pIndex pLength pVal Position pIndex pLength pVal Position pIndex pLength pVal Step-by-step state machine evaluation example3 mapM print next sm ushers where sm makeSimpleStateMachine he she his hers next next sm let SMStepRes match nextSM stateMachineStep sm in match next nextSM she he hers",
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "AhoCorasick",
          "package": "AhoCorasick",
          "partial": "Aho Corasick",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "KeyLength",
          "package": "AhoCorasick",
          "source": "src/Text-AhoCorasick.html#KeyLength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "KeyLength",
          "package": "AhoCorasick",
          "partial": "Key Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:KeyLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "Position",
          "package": "AhoCorasick",
          "source": "src/Text-AhoCorasick.html#Position",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "Position",
          "package": "AhoCorasick",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "SMStepRes",
          "package": "AhoCorasick",
          "source": "src/Text-AhoCorasick.html#SMStepRes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "SMStepRes",
          "package": "AhoCorasick",
          "partial": "SMStep Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:SMStepRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "StateMachine",
          "package": "AhoCorasick",
          "source": "src/Text-AhoCorasick.html#StateMachine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "StateMachine",
          "package": "AhoCorasick",
          "partial": "State Machine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:StateMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "Position",
          "package": "AhoCorasick",
          "signature": "Position",
          "source": "src/Text-AhoCorasick.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "Position",
          "package": "AhoCorasick",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "SMStepRes",
          "package": "AhoCorasick",
          "signature": "SMStepRes",
          "source": "src/Text-AhoCorasick.html#SMStepRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "SMStepRes",
          "package": "AhoCorasick",
          "partial": "SMStep Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:SMStepRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "findAll",
          "package": "AhoCorasick",
          "signature": "StateMachine keySymb val -\u003e [keySymb] -\u003e [Position val]",
          "source": "src/Text-AhoCorasick.html#findAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "findAll",
          "normalized": "StateMachine a b-\u003e[a]-\u003e[Position b]",
          "package": "AhoCorasick",
          "partial": "All",
          "signature": "StateMachine keySymb val-\u003e[keySymb]-\u003e[Position val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:findAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "makeSimpleStateMachine",
          "package": "AhoCorasick",
          "signature": "[[keySymb]] -\u003e StateMachine keySymb [keySymb]",
          "source": "src/Text-AhoCorasick.html#makeSimpleStateMachine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "makeSimpleStateMachine",
          "normalized": "[[a]]-\u003eStateMachine a[a]",
          "package": "AhoCorasick",
          "partial": "Simple State Machine",
          "signature": "[[keySymb]]-\u003eStateMachine keySymb[keySymb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:makeSimpleStateMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "makeStateMachine",
          "package": "AhoCorasick",
          "signature": "[([keySymb], val)] -\u003e StateMachine keySymb val",
          "source": "src/Text-AhoCorasick.html#makeStateMachine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "makeStateMachine",
          "normalized": "[([a],b)]-\u003eStateMachine a b",
          "package": "AhoCorasick",
          "partial": "State Machine",
          "signature": "[([keySymb],val)]-\u003eStateMachine keySymb val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:makeStateMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "pIndex",
          "package": "AhoCorasick",
          "signature": "Int",
          "source": "src/Text-AhoCorasick.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "pIndex",
          "package": "AhoCorasick",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "pLength",
          "package": "AhoCorasick",
          "signature": "Int",
          "source": "src/Text-AhoCorasick.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "pLength",
          "package": "AhoCorasick",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "pVal",
          "package": "AhoCorasick",
          "signature": "val",
          "source": "src/Text-AhoCorasick.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "pVal",
          "package": "AhoCorasick",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "resetStateMachine",
          "package": "AhoCorasick",
          "signature": "StateMachine keySymb val -\u003e StateMachine keySymb val",
          "source": "src/Text-AhoCorasick.html#resetStateMachine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "resetStateMachine",
          "normalized": "StateMachine a b-\u003eStateMachine a b",
          "package": "AhoCorasick",
          "partial": "State Machine",
          "signature": "StateMachine keySymb val-\u003eStateMachine keySymb val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:resetStateMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "smsrMatch",
          "package": "AhoCorasick",
          "signature": "[(KeyLength, val)]",
          "source": "src/Text-AhoCorasick.html#SMStepRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "smsrMatch",
          "normalized": "[(KeyLength,a)]",
          "package": "AhoCorasick",
          "partial": "Match",
          "signature": "[(KeyLength,val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:smsrMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "smsrNextSM",
          "package": "AhoCorasick",
          "signature": "StateMachine keySymb val",
          "source": "src/Text-AhoCorasick.html#SMStepRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "smsrNextSM",
          "package": "AhoCorasick",
          "partial": "Next SM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:smsrNextSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.AhoCorasick",
          "name": "stateMachineStep",
          "package": "AhoCorasick",
          "signature": "StateMachine keySymb val -\u003e keySymb -\u003e SMStepRes keySymb val",
          "source": "src/Text-AhoCorasick.html#stateMachineStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text AhoCorasick",
          "module": "Text.AhoCorasick",
          "name": "stateMachineStep",
          "normalized": "StateMachine a b-\u003ea-\u003eSMStepRes a b",
          "package": "AhoCorasick",
          "partial": "Machine Step",
          "signature": "StateMachine keySymb val-\u003ekeySymb-\u003eSMStepRes keySymb val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:stateMachineStep"
      }
    }
  ]
]