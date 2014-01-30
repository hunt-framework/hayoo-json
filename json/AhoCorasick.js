[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAho-Corasick string matching algorithm\n\u003c/p\u003e\u003cp\u003eSimplest example:\n\u003c/p\u003e\u003cpre\u003e\nexample1 = mapM_ print $ findAll simpleSM \"ushers\" where\n    simpleSM = makeSimpleStateMachine [\"he\",\"she\",\"his\",\"hers\"]\n\u003c/pre\u003e\u003cpre\u003e\nPosition {pIndex = 1, pLength = 3, pVal = \"she\"}\nPosition {pIndex = 2, pLength = 2, pVal = \"he\"}\nPosition {pIndex = 2, pLength = 4, pVal = \"hers\"}\n\u003c/pre\u003e\u003cp\u003eWith data:\n\u003c/p\u003e\u003cpre\u003e\nexample2 = mapM_ print $ findAll sm \"ushers\" where\n    sm = makeStateMachine [(\"he\",0),(\"she\",1),(\"his\",2),(\"hers\",3)]\n\u003c/pre\u003e\u003cpre\u003e\nPosition {pIndex = 1, pLength = 3, pVal = 1}\nPosition {pIndex = 2, pLength = 2, pVal = 0}\nPosition {pIndex = 2, pLength = 4, pVal = 3}\n\u003c/pre\u003e\u003cp\u003eStep-by-step state machine evaluation:\n\u003c/p\u003e\u003cpre\u003e\nexample3 = mapM_ print $ next sm \"ushers\" where\n    sm = makeSimpleStateMachine [\"he\",\"she\",\"his\",\"hers\"]\n    next _ [] = []\n    next sm (s:n) = let (SMStepRes match nextSM) = stateMachineStep sm s in\n        (s, match) : next nextSM n\n\u003c/pre\u003e\u003cpre\u003e\n('u',[])\n('s',[])\n('h',[])\n('e',[(3,\"she\"),(2,\"he\")])\n('r',[])\n('s',[(4,\"hers\")])\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "module",
        "fct-source": "src/Text-AhoCorasick.html",
        "fct-type": "module",
        "title": "AhoCorasick"
      },
      "index": {
        "description": "Aho-Corasick string matching algorithm Simplest example example1 mapM print findAll simpleSM ushers where simpleSM makeSimpleStateMachine he she his hers Position pIndex pLength pVal she Position pIndex pLength pVal he Position pIndex pLength pVal hers With data example2 mapM print findAll sm ushers where sm makeStateMachine he she his hers Position pIndex pLength pVal Position pIndex pLength pVal Position pIndex pLength pVal Step-by-step state machine evaluation example3 mapM print next sm ushers where sm makeSimpleStateMachine he she his hers next next sm let SMStepRes match nextSM stateMachineStep sm in match next nextSM she he hers",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "AhoCorasick",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Aho Corasick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:KeyLength",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "type",
        "fct-source": "src/Text-AhoCorasick.html#KeyLength",
        "fct-type": "type",
        "title": "KeyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "KeyLength",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Key Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:Position",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "data",
        "fct-source": "src/Text-AhoCorasick.html#Position",
        "fct-type": "data",
        "title": "Position"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "Position",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:SMStepRes",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "data",
        "fct-source": "src/Text-AhoCorasick.html#SMStepRes",
        "fct-type": "data",
        "title": "SMStepRes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "SMStepRes",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "SMStep Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#t:StateMachine",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "data",
        "fct-source": "src/Text-AhoCorasick.html#StateMachine",
        "fct-type": "data",
        "title": "StateMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "StateMachine",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "State Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:Position",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "Position",
        "fct-source": "src/Text-AhoCorasick.html#Position",
        "fct-type": "function",
        "title": "Position"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "Position",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:SMStepRes",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "SMStepRes",
        "fct-source": "src/Text-AhoCorasick.html#SMStepRes",
        "fct-type": "function",
        "title": "SMStepRes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "SMStepRes",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "SMStep Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:findAll",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "StateMachine keySymb val -\u003e [keySymb] -\u003e [Position val]",
        "fct-source": "src/Text-AhoCorasick.html#findAll",
        "fct-type": "function",
        "title": "findAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "findAll",
        "normalized": "StateMachine a b-\u003e[a]-\u003e[Position b]",
        "package": "AhoCorasick",
        "partial": "All",
        "signature": "StateMachine keySymb val-\u003e[keySymb]-\u003e[Position val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:makeSimpleStateMachine",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "[[keySymb]] -\u003e StateMachine keySymb [keySymb]",
        "fct-source": "src/Text-AhoCorasick.html#makeSimpleStateMachine",
        "fct-type": "function",
        "title": "makeSimpleStateMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "makeSimpleStateMachine",
        "normalized": "[[a]]-\u003eStateMachine a[a]",
        "package": "AhoCorasick",
        "partial": "Simple State Machine",
        "signature": "[[keySymb]]-\u003eStateMachine keySymb[keySymb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:makeStateMachine",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "[([keySymb], val)] -\u003e StateMachine keySymb val",
        "fct-source": "src/Text-AhoCorasick.html#makeStateMachine",
        "fct-type": "function",
        "title": "makeStateMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "makeStateMachine",
        "normalized": "[([a],b)]-\u003eStateMachine a b",
        "package": "AhoCorasick",
        "partial": "State Machine",
        "signature": "[([keySymb],val)]-\u003eStateMachine keySymb val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "Int",
        "fct-source": "src/Text-AhoCorasick.html#Position",
        "fct-type": "function",
        "title": "pIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "pIndex",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "Int",
        "fct-source": "src/Text-AhoCorasick.html#Position",
        "fct-type": "function",
        "title": "pLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "pLength",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:pVal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "val",
        "fct-source": "src/Text-AhoCorasick.html#Position",
        "fct-type": "function",
        "title": "pVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "pVal",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:resetStateMachine",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "StateMachine keySymb val -\u003e StateMachine keySymb val",
        "fct-source": "src/Text-AhoCorasick.html#resetStateMachine",
        "fct-type": "function",
        "title": "resetStateMachine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "resetStateMachine",
        "normalized": "StateMachine a b-\u003eStateMachine a b",
        "package": "AhoCorasick",
        "partial": "State Machine",
        "signature": "StateMachine keySymb val-\u003eStateMachine keySymb val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:smsrMatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "[(KeyLength, val)]",
        "fct-source": "src/Text-AhoCorasick.html#SMStepRes",
        "fct-type": "function",
        "title": "smsrMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "smsrMatch",
        "normalized": "[(KeyLength,a)]",
        "package": "AhoCorasick",
        "partial": "Match",
        "signature": "[(KeyLength,val)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:smsrNextSM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "StateMachine keySymb val",
        "fct-source": "src/Text-AhoCorasick.html#SMStepRes",
        "fct-type": "function",
        "title": "smsrNextSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "smsrNextSM",
        "normalized": "",
        "package": "AhoCorasick",
        "partial": "Next SM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AhoCorasick/docs/Text-AhoCorasick.html#v:stateMachineStep",
      "description": {
        "fct-module": "Text.AhoCorasick",
        "fct-package": "AhoCorasick",
        "fct-signature": "StateMachine keySymb val -\u003e keySymb -\u003e SMStepRes keySymb val",
        "fct-source": "src/Text-AhoCorasick.html#stateMachineStep",
        "fct-type": "function",
        "title": "stateMachineStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text AhoCorasick",
        "module": "Text.AhoCorasick",
        "name": "stateMachineStep",
        "normalized": "StateMachine a b-\u003ea-\u003eSMStepRes a b",
        "package": "AhoCorasick",
        "partial": "Machine Step",
        "signature": "StateMachine keySymb val-\u003ekeySymb-\u003eSMStepRes keySymb val"
      }
    }
  }
]