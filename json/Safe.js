[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for safe functions, based on standard functions that may crash.\nFor more details see \u003ca\u003ehttp://www.cs.york.ac.uk/~ndm/projects/libraries.php\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIn general, each unsafe function has up to 4 forms.\nSince \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e has all the possible forms, it is fully documented.\nThe others all follow the same pattern.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eNote\u003c/code\u003e, takes an extra argument which supplements the error message, \u003ccode\u003e\u003ca\u003etailNote\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eDef\u003c/code\u003e, take an extra argument to give when a crash would otherwise happen, \u003ccode\u003e\u003ca\u003etailDef\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eMay\u003c/code\u003e, wraps the result in a Maybe, \u003ccode\u003e\u003ca\u003etailMay\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eSafe\u003c/code\u003e, returns a default type if possible, \u003ccode\u003e\u003ca\u003etailSafe\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis library also introduces three brand new functions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e - synonym for \u003ccode\u003e(!!)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elookupJust\u003c/a\u003e\u003c/code\u003e - defined as \u003ccode\u003elookupJust k = fromJust . lookup k\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e - same as \u003ccode\u003eerror\u003c/code\u003e, but different intended meaning\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "module",
        "fct-source": "src/Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "library for safe functions based on standard functions that may crash For more details see http www.cs.york.ac.uk ndm projects libraries.php In general each unsafe function has up to forms Since tail has all the possible forms it is fully documented The others all follow the same pattern Note takes an extra argument which supplements the error message tailNote Def take an extra argument to give when crash would otherwise happen tailDef May wraps the result in Maybe tailMay Safe returns default type if possible tailSafe This library also introduces three brand new functions at synonym for lookupJust defined as lookupJust fromJust lookup abort same as error but different intended meaning",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "Safe",
        "normalized": "",
        "package": "Safe",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eExactly the same as \u003ccode\u003eerror\u003c/code\u003e. Use this for instances where the program\n   has decided to exit because of invalid user input, or the user pressed\n   quit etc. This allows \u003ccode\u003eerror\u003c/code\u003e to be reserved for genuine coding mistakes.\n\u003c/p\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Safe.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "Exactly the same as error Use this for instances where the program has decided to exit because of invalid user input or the user pressed quit etc This allows error to be reserved for genuine coding mistakes",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "abort",
        "normalized": "String-\u003ea",
        "package": "Safe",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:assertNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e Bool -\u003e a -\u003e a",
        "fct-source": "src/Safe.html#assertNote",
        "fct-type": "function",
        "title": "assertNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "assertNote",
        "normalized": "String-\u003eBool-\u003ea-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003eBool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e(!!)\u003c/code\u003e, but better error message\n\u003c/p\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Int -\u003e a",
        "fct-source": "src/Safe.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Same as but better error message",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "at",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "Safe",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [a] -\u003e Int -\u003e a",
        "fct-source": "src/Safe.html#atDef",
        "fct-type": "function",
        "title": "atDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "atDef",
        "normalized": "a-\u003e[a]-\u003eInt-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Int -\u003e Maybe a",
        "fct-source": "src/Safe.html#atMay",
        "fct-type": "function",
        "title": "atMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "atMay",
        "normalized": "[a]-\u003eInt-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eInt-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e Int -\u003e a",
        "fct-source": "src/Safe.html#atNote",
        "fct-type": "function",
        "title": "atNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "atNote",
        "normalized": "String-\u003e[a]-\u003eInt-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1Def",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#foldl1Def",
        "fct-type": "function",
        "title": "foldl1Def"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldl1Def",
        "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1May",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#foldl1May",
        "fct-type": "function",
        "title": "foldl1May"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldl1May",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1Note",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#foldl1Note",
        "fct-type": "function",
        "title": "foldl1Note"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldl1Note",
        "normalized": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1Def",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#foldr1Def",
        "fct-type": "function",
        "title": "foldr1Def"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldr1Def",
        "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1May",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#foldr1May",
        "fct-type": "function",
        "title": "foldr1May"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldr1May",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1Note",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#foldr1Note",
        "fct-type": "function",
        "title": "foldr1Note"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "foldr1Note",
        "normalized": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:fromJustDef",
      "description": {
        "fct-descr": "\u003cp\u003eSee fromMaybe\n\u003c/p\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-source": "src/Safe.html#fromJustDef",
        "fct-type": "function",
        "title": "fromJustDef"
      },
      "index": {
        "description": "See fromMaybe",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "fromJustDef",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "Safe",
        "partial": "Just Def",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:fromJustNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e Maybe a -\u003e a",
        "fct-source": "src/Safe.html#fromJustNote",
        "fct-type": "function",
        "title": "fromJustNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "fromJustNote",
        "normalized": "String-\u003eMaybe a-\u003ea",
        "package": "Safe",
        "partial": "Just Note",
        "signature": "String-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#headDef",
        "fct-type": "function",
        "title": "headDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "headDef",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#headMay",
        "fct-type": "function",
        "title": "headMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "headMay",
        "normalized": "[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#headNote",
        "fct-type": "function",
        "title": "headNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "headNote",
        "normalized": "String-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Safe.html#initDef",
        "fct-type": "function",
        "title": "initDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "initDef",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Def",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/Safe.html#initMay",
        "fct-type": "function",
        "title": "initMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "initMay",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e [a]",
        "fct-source": "src/Safe.html#initNote",
        "fct-type": "function",
        "title": "initNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "initNote",
        "normalized": "String-\u003e[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initSafe",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Safe.html#initSafe",
        "fct-type": "function",
        "title": "initSafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "initSafe",
        "normalized": "[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Safe",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#lastDef",
        "fct-type": "function",
        "title": "lastDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lastDef",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#lastMay",
        "fct-type": "function",
        "title": "lastMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lastMay",
        "normalized": "[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#lastNote",
        "fct-type": "function",
        "title": "lastNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lastNote",
        "normalized": "String-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJust",
      "description": {
        "fct-descr": "\u003cpre\u003e lookupJust key = fromJust . lookup key\n\u003c/pre\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [(a, b)] -\u003e b",
        "fct-source": "src/Safe.html#lookupJust",
        "fct-type": "function",
        "title": "lookupJust"
      },
      "index": {
        "description": "lookupJust key fromJust lookup key",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lookupJust",
        "normalized": "a-\u003e[(a,b)]-\u003eb",
        "package": "Safe",
        "partial": "Just",
        "signature": "a-\u003e[(a,b)]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJustDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "b -\u003e a -\u003e [(a, b)] -\u003e b",
        "fct-source": "src/Safe.html#lookupJustDef",
        "fct-type": "function",
        "title": "lookupJustDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lookupJustDef",
        "normalized": "a-\u003eb-\u003e[(b,a)]-\u003ea",
        "package": "Safe",
        "partial": "Just Def",
        "signature": "b-\u003ea-\u003e[(a,b)]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJustNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e a -\u003e [(a, b)] -\u003e b",
        "fct-source": "src/Safe.html#lookupJustNote",
        "fct-type": "function",
        "title": "lookupJustNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "lookupJustNote",
        "normalized": "String-\u003ea-\u003e[(a,b)]-\u003eb",
        "package": "Safe",
        "partial": "Just Note",
        "signature": "String-\u003ea-\u003e[(a,b)]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#maximumDef",
        "fct-type": "function",
        "title": "maximumDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "maximumDef",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#maximumMay",
        "fct-type": "function",
        "title": "maximumMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "maximumMay",
        "normalized": "[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#maximumNote",
        "fct-type": "function",
        "title": "maximumNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "maximumNote",
        "normalized": "String-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#minimumDef",
        "fct-type": "function",
        "title": "minimumDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "minimumDef",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Safe.html#minimumMay",
        "fct-type": "function",
        "title": "minimumMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "minimumMay",
        "normalized": "[a]-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e a",
        "fct-source": "src/Safe.html#minimumNote",
        "fct-type": "function",
        "title": "minimumNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "minimumNote",
        "normalized": "String-\u003e[a]-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readDef",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "a -\u003e String -\u003e a",
        "fct-source": "src/Safe.html#readDef",
        "fct-type": "function",
        "title": "readDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "readDef",
        "normalized": "a-\u003eString-\u003ea",
        "package": "Safe",
        "partial": "Def",
        "signature": "a-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readMay",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Safe.html#readMay",
        "fct-type": "function",
        "title": "readMay"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "readMay",
        "normalized": "String-\u003eMaybe a",
        "package": "Safe",
        "partial": "May",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readNote",
      "description": {
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e String -\u003e a",
        "fct-source": "src/Safe.html#readNote",
        "fct-type": "function",
        "title": "readNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "readNote",
        "normalized": "String-\u003eString-\u003ea",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailDef",
      "description": {
        "fct-descr": "\u003cpre\u003e tailDef [12] [] = [12]\n tailDef [12] [1,3,4] = [3,4]\n\u003c/pre\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Safe.html#tailDef",
        "fct-type": "function",
        "title": "tailDef"
      },
      "index": {
        "description": "tailDef tailDef",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "tailDef",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Def",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailMay",
      "description": {
        "fct-descr": "\u003cpre\u003e tailMay [] = Nothing\n tailMay [1,3,4] = Just [3,4]\n\u003c/pre\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e Maybe [a]",
        "fct-source": "src/Safe.html#tailMay",
        "fct-type": "function",
        "title": "tailMay"
      },
      "index": {
        "description": "tailMay Nothing tailMay Just",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "tailMay",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "Safe",
        "partial": "May",
        "signature": "[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailNote",
      "description": {
        "fct-descr": "\u003cpre\u003e tail \"help me\" [] = error \"Pattern match failure, tail [], help me\"\n tail \"help me\" [1,3,4] = [3,4]\n\u003c/pre\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "String -\u003e [a] -\u003e [a]",
        "fct-source": "src/Safe.html#tailNote",
        "fct-type": "function",
        "title": "tailNote"
      },
      "index": {
        "description": "tail help me error Pattern match failure tail help me tail help me",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "tailNote",
        "normalized": "String-\u003e[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Note",
        "signature": "String-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailSafe",
      "description": {
        "fct-descr": "\u003cpre\u003e tailSafe [] = []\n tailSafe [1,3,4] = [3,4]\n\u003c/pre\u003e",
        "fct-module": "Safe",
        "fct-package": "Safe",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Safe.html#tailSafe",
        "fct-type": "function",
        "title": "tailSafe"
      },
      "index": {
        "description": "tailSafe tailSafe",
        "hierarchy": "Safe",
        "module": "Safe",
        "name": "tailSafe",
        "normalized": "[a]-\u003e[a]",
        "package": "Safe",
        "partial": "Safe",
        "signature": "[a]-\u003e[a]"
      }
    }
  }
]