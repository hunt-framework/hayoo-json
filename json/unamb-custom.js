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
        "word": "unamb-custom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctional concurrency with unambiguous choice.  The primary\n export of this module is the \u003ccode\u003eunamb\u003c/code\u003e function, which has the\n following semantics:\n\u003c/p\u003e\u003cpre\u003e unamb x   _|_ = x\n unamb _|_ x   = x\n unamb x   x   = x\n\u003c/pre\u003e\u003cp\u003eThis function is only well-defined when the arguments are\n constrained to be either equal or \u003ccode\u003e_|_\u003c/code\u003e.  Using it in other\n capacities will break purity.\n\u003c/p\u003e\u003cp\u003eIn particular, it is always safe to use on the \u003ccode\u003e()\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThis is a reimplementation of the \u003ccode\u003eunamb\u003c/code\u003e package by Conal\n Elliott.  This package implements a custom thread scheduler,\n whose purpose is to make feasabile \"dense\" uses of \n \u003ccode\u003eunamb\u003c/code\u003e such as:\n\u003c/p\u003e\u003cpre\u003e foldr1 unamb [ if x == 100 then 100 else undefined | x \u003c- [0..] ] \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "UnambCustom.Unamb",
          "name": "Unamb",
          "package": "unamb-custom",
          "source": "src/UnambCustom-Unamb.html",
          "type": "module"
        },
        "index": {
          "description": "Functional concurrency with unambiguous choice The primary export of this module is the unamb function which has the following semantics unamb unamb unamb This function is only well-defined when the arguments are constrained to be either equal or Using it in other capacities will break purity In particular it is always safe to use on the type This is reimplementation of the unamb package by Conal Elliott This package implements custom thread scheduler whose purpose is to make feasabile dense uses of unamb such as foldr1 unamb if then else undefined",
          "hierarchy": "UnambCustom Unamb",
          "module": "UnambCustom.Unamb",
          "name": "Unamb",
          "package": "unamb-custom",
          "partial": "Unamb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unamb-custom/docs/UnambCustom-Unamb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRace two actions against each other, returning the value\n of the first one to finish.\n\u003c/p\u003e",
          "module": "UnambCustom.Unamb",
          "name": "race",
          "package": "unamb-custom",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/UnambCustom-Unamb.html#race",
          "type": "function"
        },
        "index": {
          "description": "Race two actions against each other returning the value of the first one to finish",
          "hierarchy": "UnambCustom Unamb",
          "module": "UnambCustom.Unamb",
          "name": "race",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "unamb-custom",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb-custom/docs/UnambCustom-Unamb.html#v:race"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all active threads managed by the custom scheduler.\n Useful for debugging in interactive sessions, but not \n recommended otherwise (it will cause all running \u003ccode\u003eunamb\u003c/code\u003es\n to block forever).\n\u003c/p\u003e",
          "module": "UnambCustom.Unamb",
          "name": "rebootScheduler",
          "package": "unamb-custom",
          "signature": "IO ()",
          "source": "src/UnambCustom-Unamb.html#rebootScheduler",
          "type": "function"
        },
        "index": {
          "description": "Kill all active threads managed by the custom scheduler Useful for debugging in interactive sessions but not recommended otherwise it will cause all running unamb to block forever",
          "hierarchy": "UnambCustom Unamb",
          "module": "UnambCustom.Unamb",
          "name": "rebootScheduler",
          "normalized": "IO()",
          "package": "unamb-custom",
          "partial": "Scheduler",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb-custom/docs/UnambCustom-Unamb.html#v:rebootScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnambiguous choice.  Calling \u003ccode\u003eunamb x y\u003c/code\u003e has a proof obligation\n that if \u003ccode\u003ex /= _|_\u003c/code\u003e and \u003ccode\u003ey /= _|_\u003c/code\u003e then \u003ccode\u003ex = y\u003c/code\u003e.  If this is satisfied,\n returns the more defined of the two.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunamb\u003c/code\u003e will treat any exception raised as \u003ccode\u003e_|_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "UnambCustom.Unamb",
          "name": "unamb",
          "package": "unamb-custom",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/UnambCustom-Unamb.html#unamb",
          "type": "function"
        },
        "index": {
          "description": "Unambiguous choice Calling unamb has proof obligation that if and then If this is satisfied returns the more defined of the two unamb will treat any exception raised as",
          "hierarchy": "UnambCustom Unamb",
          "module": "UnambCustom.Unamb",
          "name": "unamb",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb-custom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb-custom/docs/UnambCustom-Unamb.html#v:unamb"
      }
    }
  ]
]