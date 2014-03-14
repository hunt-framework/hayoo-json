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
        "word": "Safe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for safe functions, based on standard functions that may crash.\nFor more details see \u003ca\u003ehttp://www.cs.york.ac.uk/~ndm/projects/libraries.php\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIn general, each unsafe function has up to 4 forms.\nSince \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e has all the possible forms, it is fully documented.\nThe others all follow the same pattern.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eNote\u003c/code\u003e, takes an extra argument which supplements the error message, \u003ccode\u003e\u003ca\u003etailNote\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eDef\u003c/code\u003e, take an extra argument to give when a crash would otherwise happen, \u003ccode\u003e\u003ca\u003etailDef\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eMay\u003c/code\u003e, wraps the result in a Maybe, \u003ccode\u003e\u003ca\u003etailMay\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eSafe\u003c/code\u003e, returns a default type if possible, \u003ccode\u003e\u003ca\u003etailSafe\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis library also introduces three brand new functions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e - synonym for \u003ccode\u003e(!!)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elookupJust\u003c/a\u003e\u003c/code\u003e - defined as \u003ccode\u003elookupJust k = fromJust . lookup k\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e - same as \u003ccode\u003eerror\u003c/code\u003e, but different intended meaning\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Safe",
          "name": "Safe",
          "package": "Safe",
          "source": "src/Safe.html",
          "type": "module"
        },
        "index": {
          "description": "library for safe functions based on standard functions that may crash For more details see http www.cs.york.ac.uk ndm projects libraries.php In general each unsafe function has up to forms Since tail has all the possible forms it is fully documented The others all follow the same pattern Note takes an extra argument which supplements the error message tailNote Def take an extra argument to give when crash would otherwise happen tailDef May wraps the result in Maybe tailMay Safe returns default type if possible tailSafe This library also introduces three brand new functions at synonym for lookupJust defined as lookupJust fromJust lookup abort same as error but different intended meaning",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "Safe",
          "package": "Safe",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly the same as \u003ccode\u003eerror\u003c/code\u003e. Use this for instances where the program\n   has decided to exit because of invalid user input, or the user pressed\n   quit etc. This allows \u003ccode\u003eerror\u003c/code\u003e to be reserved for genuine coding mistakes.\n\u003c/p\u003e",
          "module": "Safe",
          "name": "abort",
          "package": "Safe",
          "signature": "String -\u003e a",
          "source": "src/Safe.html#abort",
          "type": "function"
        },
        "index": {
          "description": "Exactly the same as error Use this for instances where the program has decided to exit because of invalid user input or the user pressed quit etc This allows error to be reserved for genuine coding mistakes",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "abort",
          "normalized": "String-\u003ea",
          "package": "Safe",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "assertNote",
          "package": "Safe",
          "signature": "String -\u003e Bool -\u003e a -\u003e a",
          "source": "src/Safe.html#assertNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "assertNote",
          "normalized": "String-\u003eBool-\u003ea-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003eBool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:assertNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e(!!)\u003c/code\u003e, but better error message\n\u003c/p\u003e",
          "module": "Safe",
          "name": "at",
          "package": "Safe",
          "signature": "[a] -\u003e Int -\u003e a",
          "source": "src/Safe.html#at",
          "type": "function"
        },
        "index": {
          "description": "Same as but better error message",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "at",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "Safe",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "atDef",
          "package": "Safe",
          "signature": "a -\u003e [a] -\u003e Int -\u003e a",
          "source": "src/Safe.html#atDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "atDef",
          "normalized": "a-\u003e[a]-\u003eInt-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "atMay",
          "package": "Safe",
          "signature": "[a] -\u003e Int -\u003e Maybe a",
          "source": "src/Safe.html#atMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "atMay",
          "normalized": "[a]-\u003eInt-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "atNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e Int -\u003e a",
          "source": "src/Safe.html#atNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "atNote",
          "normalized": "String-\u003e[a]-\u003eInt-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:atNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldl1Def",
          "package": "Safe",
          "signature": "a -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Safe.html#foldl1Def",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldl1Def",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1Def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldl1May",
          "package": "Safe",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
          "source": "src/Safe.html#foldl1May",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldl1May",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1May"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldl1Note",
          "package": "Safe",
          "signature": "String -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Safe.html#foldl1Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldl1Note",
          "normalized": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldl1Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldr1Def",
          "package": "Safe",
          "signature": "a -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Safe.html#foldr1Def",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldr1Def",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1Def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldr1May",
          "package": "Safe",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e Maybe a",
          "source": "src/Safe.html#foldr1May",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldr1May",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1May"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "foldr1Note",
          "package": "Safe",
          "signature": "String -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Safe.html#foldr1Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "foldr1Note",
          "normalized": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:foldr1Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee fromMaybe\n\u003c/p\u003e",
          "module": "Safe",
          "name": "fromJustDef",
          "package": "Safe",
          "signature": "a -\u003e Maybe a -\u003e a",
          "source": "src/Safe.html#fromJustDef",
          "type": "function"
        },
        "index": {
          "description": "See fromMaybe",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "fromJustDef",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "Safe",
          "partial": "Just Def",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:fromJustDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "fromJustNote",
          "package": "Safe",
          "signature": "String -\u003e Maybe a -\u003e a",
          "source": "src/Safe.html#fromJustNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "fromJustNote",
          "normalized": "String-\u003eMaybe a-\u003ea",
          "package": "Safe",
          "partial": "Just Note",
          "signature": "String-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:fromJustNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "headDef",
          "package": "Safe",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Safe.html#headDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "headDef",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "headMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Safe.html#headMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "headMay",
          "normalized": "[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "headNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Safe.html#headNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "headNote",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:headNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "initDef",
          "package": "Safe",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Safe.html#initDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "initDef",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Def",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "initMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/Safe.html#initMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "initMay",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "initNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e [a]",
          "source": "src/Safe.html#initNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "initNote",
          "normalized": "String-\u003e[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "initSafe",
          "package": "Safe",
          "signature": "[a] -\u003e [a]",
          "source": "src/Safe.html#initSafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "initSafe",
          "normalized": "[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Safe",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:initSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "lastDef",
          "package": "Safe",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Safe.html#lastDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lastDef",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "lastMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Safe.html#lastMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lastMay",
          "normalized": "[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "lastNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Safe.html#lastNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lastNote",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lastNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e lookupJust key = fromJust . lookup key\n\u003c/pre\u003e",
          "module": "Safe",
          "name": "lookupJust",
          "package": "Safe",
          "signature": "a -\u003e [(a, b)] -\u003e b",
          "source": "src/Safe.html#lookupJust",
          "type": "function"
        },
        "index": {
          "description": "lookupJust key fromJust lookup key",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lookupJust",
          "normalized": "a-\u003e[(a,b)]-\u003eb",
          "package": "Safe",
          "partial": "Just",
          "signature": "a-\u003e[(a,b)]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "lookupJustDef",
          "package": "Safe",
          "signature": "b -\u003e a -\u003e [(a, b)] -\u003e b",
          "source": "src/Safe.html#lookupJustDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lookupJustDef",
          "normalized": "a-\u003eb-\u003e[(b,a)]-\u003ea",
          "package": "Safe",
          "partial": "Just Def",
          "signature": "b-\u003ea-\u003e[(a,b)]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJustDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "lookupJustNote",
          "package": "Safe",
          "signature": "String -\u003e a -\u003e [(a, b)] -\u003e b",
          "source": "src/Safe.html#lookupJustNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "lookupJustNote",
          "normalized": "String-\u003ea-\u003e[(a,b)]-\u003eb",
          "package": "Safe",
          "partial": "Just Note",
          "signature": "String-\u003ea-\u003e[(a,b)]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:lookupJustNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "maximumDef",
          "package": "Safe",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Safe.html#maximumDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "maximumDef",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "maximumMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Safe.html#maximumMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "maximumMay",
          "normalized": "[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "maximumNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Safe.html#maximumNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "maximumNote",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:maximumNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "minimumDef",
          "package": "Safe",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Safe.html#minimumDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "minimumDef",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "minimumMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Safe.html#minimumMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "minimumMay",
          "normalized": "[a]-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "minimumNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Safe.html#minimumNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "minimumNote",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:minimumNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "readDef",
          "package": "Safe",
          "signature": "a -\u003e String -\u003e a",
          "source": "src/Safe.html#readDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "readDef",
          "normalized": "a-\u003eString-\u003ea",
          "package": "Safe",
          "partial": "Def",
          "signature": "a-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "readMay",
          "package": "Safe",
          "signature": "String -\u003e Maybe a",
          "source": "src/Safe.html#readMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "readMay",
          "normalized": "String-\u003eMaybe a",
          "package": "Safe",
          "partial": "May",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Safe",
          "name": "readNote",
          "package": "Safe",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Safe.html#readNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "readNote",
          "normalized": "String-\u003eString-\u003ea",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:readNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e tailDef [12] [] = [12]\n tailDef [12] [1,3,4] = [3,4]\n\u003c/pre\u003e",
          "module": "Safe",
          "name": "tailDef",
          "package": "Safe",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Safe.html#tailDef",
          "type": "function"
        },
        "index": {
          "description": "tailDef tailDef",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "tailDef",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Def",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e tailMay [] = Nothing\n tailMay [1,3,4] = Just [3,4]\n\u003c/pre\u003e",
          "module": "Safe",
          "name": "tailMay",
          "package": "Safe",
          "signature": "[a] -\u003e Maybe [a]",
          "source": "src/Safe.html#tailMay",
          "type": "function"
        },
        "index": {
          "description": "tailMay Nothing tailMay Just",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "tailMay",
          "normalized": "[a]-\u003eMaybe[a]",
          "package": "Safe",
          "partial": "May",
          "signature": "[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e tail \"help me\" [] = error \"Pattern match failure, tail [], help me\"\n tail \"help me\" [1,3,4] = [3,4]\n\u003c/pre\u003e",
          "module": "Safe",
          "name": "tailNote",
          "package": "Safe",
          "signature": "String -\u003e [a] -\u003e [a]",
          "source": "src/Safe.html#tailNote",
          "type": "function"
        },
        "index": {
          "description": "tail help me error Pattern match failure tail help me tail help me",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "tailNote",
          "normalized": "String-\u003e[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Note",
          "signature": "String-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e tailSafe [] = []\n tailSafe [1,3,4] = [3,4]\n\u003c/pre\u003e",
          "module": "Safe",
          "name": "tailSafe",
          "package": "Safe",
          "signature": "[a] -\u003e [a]",
          "source": "src/Safe.html#tailSafe",
          "type": "function"
        },
        "index": {
          "description": "tailSafe tailSafe",
          "hierarchy": "Safe",
          "module": "Safe",
          "name": "tailSafe",
          "normalized": "[a]-\u003e[a]",
          "package": "Safe",
          "partial": "Safe",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Safe/docs/Safe.html#v:tailSafe"
      }
    }
  ]
]