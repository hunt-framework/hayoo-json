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
        "word": "CSPM-Interpreter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions dealing with closure sets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-ClosureSet.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions dealing with closure sets",
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Closure Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "closureStateNext",
          "package": "CSPM-Interpreter",
          "signature": "ClosureState -\u003e Field -\u003e ClosureState",
          "source": "src/CSPM-Interpreter-ClosureSet.html#closureStateNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "closureStateNext",
          "normalized": "ClosureState-\u003eField-\u003eClosureState",
          "package": "CSPM-Interpreter",
          "partial": "State Next",
          "signature": "ClosureState-\u003eField-\u003eClosureState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:closureStateNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "closureToSet",
          "package": "CSPM-Interpreter",
          "signature": "ClosureSet -\u003e Set Value",
          "source": "src/CSPM-Interpreter-ClosureSet.html#closureToSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "closureToSet",
          "normalized": "ClosureSet-\u003eSet Value",
          "package": "CSPM-Interpreter",
          "partial": "To Set",
          "signature": "ClosureSet-\u003eSet Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:closureToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "fieldsToPT",
          "package": "CSPM-Interpreter",
          "signature": "[Value] -\u003e [FieldSet] -\u003e PrefixTrie",
          "source": "src/CSPM-Interpreter-ClosureSet.html#fieldsToPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "fieldsToPT",
          "normalized": "[Value]-\u003e[FieldSet]-\u003ePrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "To PT",
          "signature": "[Value]-\u003e[FieldSet]-\u003ePrefixTrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:fieldsToPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "hackValueToEvent",
          "package": "CSPM-Interpreter",
          "signature": "Value -\u003e Event",
          "source": "src/CSPM-Interpreter-ClosureSet.html#hackValueToEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "hackValueToEvent",
          "normalized": "Value-\u003eEvent",
          "package": "CSPM-Interpreter",
          "partial": "Value To Event",
          "signature": "Value-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:hackValueToEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "memberPrefixTrie",
          "package": "CSPM-Interpreter",
          "signature": "[Field] -\u003e PrefixTrie -\u003e Bool",
          "source": "src/CSPM-Interpreter-ClosureSet.html#memberPrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "memberPrefixTrie",
          "normalized": "[Field]-\u003ePrefixTrie-\u003eBool",
          "package": "CSPM-Interpreter",
          "partial": "Prefix Trie",
          "signature": "[Field]-\u003ePrefixTrie-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:memberPrefixTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "mkClosureSet",
          "package": "CSPM-Interpreter",
          "signature": "PrefixTrie -\u003e ClosureSet",
          "source": "src/CSPM-Interpreter-ClosureSet.html#mkClosureSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "mkClosureSet",
          "normalized": "PrefixTrie-\u003eClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Closure Set",
          "signature": "PrefixTrie-\u003eClosureSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:mkClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "mkEventClosure",
          "package": "CSPM-Interpreter",
          "signature": "[Value] -\u003e EM ClosureSet",
          "source": "src/CSPM-Interpreter-ClosureSet.html#mkEventClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "mkEventClosure",
          "normalized": "[Value]-\u003eEM ClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Event Closure",
          "signature": "[Value]-\u003eEM ClosureSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:mkEventClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "prefixTrieNext",
          "package": "CSPM-Interpreter",
          "signature": "PrefixTrie -\u003e Field -\u003e Maybe PrefixTrie",
          "source": "src/CSPM-Interpreter-ClosureSet.html#prefixTrieNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "prefixTrieNext",
          "normalized": "PrefixTrie-\u003eField-\u003eMaybe PrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "Trie Next",
          "signature": "PrefixTrie-\u003eField-\u003eMaybe PrefixTrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:prefixTrieNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "prefixTrieToSet",
          "package": "CSPM-Interpreter",
          "signature": "PrefixTrie -\u003e Set Value",
          "source": "src/CSPM-Interpreter-ClosureSet.html#prefixTrieToSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "prefixTrieToSet",
          "normalized": "PrefixTrie-\u003eSet Value",
          "package": "CSPM-Interpreter",
          "partial": "Trie To Set",
          "signature": "PrefixTrie-\u003eSet Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:prefixTrieToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "ptUnions",
          "package": "CSPM-Interpreter",
          "signature": "[PrefixTrie] -\u003e PrefixTrie",
          "source": "src/CSPM-Interpreter-ClosureSet.html#ptUnions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "ptUnions",
          "normalized": "[PrefixTrie]-\u003ePrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "Unions",
          "signature": "[PrefixTrie]-\u003ePrefixTrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:ptUnions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "setToClosure",
          "package": "CSPM-Interpreter",
          "signature": "Set Value -\u003e ClosureSet",
          "source": "src/CSPM-Interpreter-ClosureSet.html#setToClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "setToClosure",
          "normalized": "Set Value-\u003eClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "To Closure",
          "signature": "Set Value-\u003eClosureSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:setToClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "setToPrefixTrie",
          "package": "CSPM-Interpreter",
          "signature": "Set Value -\u003e PrefixTrie",
          "source": "src/CSPM-Interpreter-ClosureSet.html#setToPrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "setToPrefixTrie",
          "normalized": "Set Value-\u003ePrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "To Prefix Trie",
          "signature": "Set Value-\u003ePrefixTrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:setToPrefixTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "singleEventToClosureSet",
          "package": "CSPM-Interpreter",
          "signature": "Event -\u003e ClosureSet",
          "source": "src/CSPM-Interpreter-ClosureSet.html#singleEventToClosureSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "singleEventToClosureSet",
          "normalized": "Event-\u003eClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Event To Closure Set",
          "signature": "Event-\u003eClosureSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:singleEventToClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "valueToPT",
          "package": "CSPM-Interpreter",
          "signature": "Value -\u003e PrefixTrie",
          "source": "src/CSPM-Interpreter-ClosureSet.html#valueToPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter ClosureSet",
          "module": "CSPM.Interpreter.ClosureSet",
          "name": "valueToPT",
          "normalized": "Value-\u003ePrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "To PT",
          "signature": "Value-\u003ePrefixTrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-ClosureSet.html#v:valueToPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some class instances that make the interpreter\n an implementation of the interface defined in package CSPM-CoreLanguage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.CoreInstances",
          "name": "CoreInstances",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-CoreInstances.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines some class instances that make the interpreter an implementation of the interface defined in package CSPM-CoreLanguage",
          "hierarchy": "CSPM Interpreter CoreInstances",
          "module": "CSPM.Interpreter.CoreInstances",
          "name": "CoreInstances",
          "package": "CSPM-Interpreter",
          "partial": "Core Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-CoreInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main eval function of the Interpreter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.Eval",
          "name": "Eval",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "The main eval function of the Interpreter",
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "Eval",
          "package": "CSPM-Interpreter",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an expression in the \u003ccode\u003e\u003ca\u003eEM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "CSPM.Interpreter.Eval",
          "name": "eval",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e EM Value",
          "source": "src/CSPM-Interpreter-Eval.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an expression in the EM monad",
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "eval",
          "normalized": "LExp-\u003eEM Value",
          "package": "CSPM-Interpreter",
          "signature": "LExp-\u003eEM Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Eval",
          "name": "evalBool",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e EM Bool",
          "source": "src/CSPM-Interpreter-Eval.html#evalBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalBool",
          "normalized": "LExp-\u003eEM Bool",
          "package": "CSPM-Interpreter",
          "partial": "Bool",
          "signature": "LExp-\u003eEM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:evalBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Eval",
          "name": "evalFieldSet",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e EM FieldSet",
          "source": "src/CSPM-Interpreter-Eval.html#evalFieldSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalFieldSet",
          "normalized": "LExp-\u003eEM FieldSet",
          "package": "CSPM-Interpreter",
          "partial": "Field Set",
          "signature": "LExp-\u003eEM FieldSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:evalFieldSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a module and return the top-level envirionment.\n\u003c/p\u003e",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalModule",
          "package": "CSPM-Interpreter",
          "signature": "Module INT -\u003e Env",
          "source": "src/CSPM-Interpreter-Eval.html#evalModule",
          "type": "function"
        },
        "index": {
          "description": "Process module and return the top-level envirionment",
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalModule",
          "normalized": "Module INT-\u003eEnv",
          "package": "CSPM-Interpreter",
          "partial": "Module",
          "signature": "Module INT-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:evalModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Eval",
          "name": "evalOutField",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e EM Field",
          "source": "src/CSPM-Interpreter-Eval.html#evalOutField",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalOutField",
          "normalized": "LExp-\u003eEM Field",
          "package": "CSPM-Interpreter",
          "partial": "Out Field",
          "signature": "LExp-\u003eEM Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:evalOutField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Eval",
          "name": "evalProcess",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e EM Process",
          "source": "src/CSPM-Interpreter-Eval.html#evalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "evalProcess",
          "normalized": "LExp-\u003eEM Process",
          "package": "CSPM-Interpreter",
          "partial": "Process",
          "signature": "LExp-\u003eEM Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:evalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"CSPM.Interpreter.Eval\",\"CSPM.Interpreter\"]",
          "name": "getSigma",
          "package": "CSPM-Interpreter",
          "signature": "Env -\u003e Sigma",
          "source": "src/CSPM-Interpreter-Eval.html#getSigma",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:getSigma\",\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:getSigma\"]"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "getSigma",
          "normalized": "Env-\u003eSigma",
          "package": "CSPM-Interpreter",
          "partial": "Sigma",
          "signature": "Env-\u003eSigma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:getSigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEM\u003c/a\u003e\u003c/code\u003e monad with a given envirionment.\n\u003c/p\u003e",
          "module": "CSPM.Interpreter.Eval",
          "name": "runEM",
          "package": "CSPM-Interpreter",
          "signature": "EM x -\u003e Env -\u003e x",
          "source": "src/CSPM-Interpreter-Eval.html#runEM",
          "type": "function"
        },
        "index": {
          "description": "Run the EM monad with given envirionment",
          "hierarchy": "CSPM Interpreter Eval",
          "module": "CSPM.Interpreter.Eval",
          "name": "runEM",
          "normalized": "EM a-\u003eEnv-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "EM",
          "signature": "EM x-\u003eEnv-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Eval.html#v:runEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances of the Hash class for interpreter types and core language types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.Hash",
          "name": "Hash",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Hash.html",
          "type": "module"
        },
        "index": {
          "description": "Instances of the Hash class for interpreter types and core language types",
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "Hash",
          "package": "CSPM-Interpreter",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "Hash",
          "package": "CSPM-Interpreter",
          "source": "src/Data-Digest-Pure-HashMD5.html#Hash",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "Hash",
          "package": "CSPM-Interpreter",
          "partial": "Hash",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "MD5Digest",
          "package": "CSPM-Interpreter",
          "source": "src/Data-Digest-Pure-MD5.html#MD5Digest",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "MD5Digest",
          "package": "CSPM-Interpreter",
          "partial": "MD Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#t:MD5Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "MD5Digest",
          "package": "CSPM-Interpreter",
          "signature": "MD5Digest !Word32 !Word32 !Word32 !Word32",
          "source": "src/Data-Digest-Pure-MD5.html#MD5Digest",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "MD5Digest",
          "package": "CSPM-Interpreter",
          "partial": "MD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:MD5Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "closureDigest",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e Env -\u003e FreeNames -\u003e Digest",
          "source": "src/CSPM-Interpreter-Hash.html#closureDigest",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "closureDigest",
          "normalized": "LExp-\u003eEnv-\u003eFreeNames-\u003eDigest",
          "package": "CSPM-Interpreter",
          "partial": "Digest",
          "signature": "LExp-\u003eEnv-\u003eFreeNames-\u003eDigest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:closureDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "hash",
          "package": "CSPM-Interpreter",
          "signature": "a -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-HashMD5.html#hash",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "hash",
          "normalized": "a-\u003eMD Digest",
          "package": "CSPM-Interpreter",
          "signature": "a-\u003eMD Digest",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "hs",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Digest",
          "source": "src/CSPM-Interpreter-Hash.html#hs",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "hs",
          "normalized": "String-\u003eDigest",
          "package": "CSPM-Interpreter",
          "signature": "String-\u003eDigest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:hs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "mix",
          "package": "CSPM-Interpreter",
          "signature": "MD5Digest -\u003e MD5Digest -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-HashMD5.html#mix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "mix",
          "normalized": "MD Digest-\u003eMD Digest-\u003eMD Digest",
          "package": "CSPM-Interpreter",
          "signature": "MD Digest-\u003eMD Digest-\u003eMD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "mix3",
          "package": "CSPM-Interpreter",
          "signature": "MD5Digest -\u003e MD5Digest -\u003e MD5Digest -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-HashMD5.html#mix3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "mix3",
          "normalized": "MD Digest-\u003eMD Digest-\u003eMD Digest-\u003eMD Digest",
          "package": "CSPM-Interpreter",
          "signature": "MD Digest-\u003eMD Digest-\u003eMD Digest-\u003eMD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:mix3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Hash",
          "name": "mixInt",
          "package": "CSPM-Interpreter",
          "signature": "MD5Digest -\u003e Int -\u003e MD5Digest",
          "source": "src/Data-Digest-Pure-HashMD5.html#mixInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Hash",
          "module": "CSPM.Interpreter.Hash",
          "name": "mixInt",
          "normalized": "MD Digest-\u003eInt-\u003eMD Digest",
          "package": "CSPM-Interpreter",
          "partial": "Int",
          "signature": "MD Digest-\u003eInt-\u003eMD Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Hash.html#v:mixInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pretty-printer for values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.Pretty",
          "name": "Pretty",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "pretty-printer for values",
          "hierarchy": "CSPM Interpreter Pretty",
          "module": "CSPM.Interpreter.Pretty",
          "name": "Pretty",
          "package": "CSPM-Interpreter",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is mainly useful for testing the functional sub language.\n This module does not allow tracing of processes\n (tracing is implemented in an other package).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunFile\u003c/a\u003e\u003c/code\u003e loads a CSPM-specification from a file and evaluates an expression in\n the context of that specification.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunFile\u003c/a\u003e\u003c/code\u003e fib.csp fib(10)\n\u003c/p\u003e\u003cp\u003ewhere the file fib.csp contains:\n    fib(x)= if x \u003c2 then 1 else fib(x-1)+fib(x-2)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunFile\u003c/a\u003e\u003c/code\u003e writes to \u003ccode\u003estdout\u003c/code\u003e and handles some exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.Test.CLI",
          "name": "CLI",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Test-CLI.html",
          "type": "module"
        },
        "index": {
          "description": "This is mainly useful for testing the functional sub language This module does not allow tracing of processes tracing is implemented in an other package runFile loads CSPM-specification from file and evaluates an expression in the context of that specification Example runFile fib.csp fib where the file fib.csp contains fib if then else fib x-1 fib x-2 runFile writes to stdout and handles some exceptions",
          "hierarchy": "CSPM Interpreter Test CLI",
          "module": "CSPM.Interpreter.Test.CLI",
          "name": "CLI",
          "package": "CSPM-Interpreter",
          "partial": "CLI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an expression, optionall load a context from a file\n\u003c/p\u003e",
          "module": "[\"CSPM.Interpreter.Test.CLI\",\"CSPM.Interpreter\"]",
          "name": "evalFile",
          "package": "CSPM-Interpreter",
          "signature": "Bool-\u003e Maybe FilePath-\u003e String-\u003e IO (Value, Env)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:evalFile\",\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:evalFile\"]"
        },
        "index": {
          "description": "Evaluate an expression optionall load context from file",
          "hierarchy": "CSPM Interpreter Test CLI",
          "module": "CSPM.Interpreter.Test.CLI",
          "name": "evalFile",
          "normalized": "Bool-\u003eMaybe FilePath-\u003eString-\u003eIO(Value,Env)",
          "package": "CSPM-Interpreter",
          "partial": "File",
          "signature": "Bool-\u003eMaybe FilePath-\u003eString-\u003eIO(Value,Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:evalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an expression, optionall load a context from a string\n\u003c/p\u003e",
          "module": "[\"CSPM.Interpreter.Test.CLI\",\"CSPM.Interpreter\"]",
          "name": "evalString",
          "package": "CSPM-Interpreter",
          "signature": "Bool-\u003e String-\u003e String-\u003e String-\u003e IO (Value, Env)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:evalString\",\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:evalString\"]"
        },
        "index": {
          "description": "Evaluate an expression optionall load context from string",
          "hierarchy": "CSPM Interpreter Test CLI",
          "module": "CSPM.Interpreter.Test.CLI",
          "name": "evalString",
          "normalized": "Bool-\u003eString-\u003eString-\u003eString-\u003eIO(Value,Env)",
          "package": "CSPM-Interpreter",
          "partial": "String",
          "signature": "Bool-\u003eString-\u003eString-\u003eString-\u003eIO(Value,Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:evalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a specification from a file and evaluate an expression in the context.\n Print the result to \u003ccode\u003estdout\u003c/code\u003e and handle some exceptions.\n\u003c/p\u003e",
          "module": "[\"CSPM.Interpreter.Test.CLI\",\"CSPM.Interpreter\"]",
          "name": "runFile",
          "package": "CSPM-Interpreter",
          "signature": "FilePath-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:runFile\",\"http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:runFile\"]"
        },
        "index": {
          "description": "Load specification from file and evaluate an expression in the context Print the result to stdout and handle some exceptions",
          "hierarchy": "CSPM Interpreter Test CLI",
          "module": "CSPM.Interpreter.Test.CLI",
          "name": "runFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "CSPM-Interpreter",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Test-CLI.html#v:runFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of most of the types used in the interpreter.\n Also Instance declarations for the core language type families.\n \u003ccode\u003e\u003ca\u003eINT\u003c/a\u003e\u003c/code\u003e is the type (index) for the CSPM interpreter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter.Types",
          "name": "Types",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions of most of the types used in the interpreter Also Instance declarations for the core language type families INT is the type index for the CSPM interpreter",
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Types",
          "package": "CSPM-Interpreter",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Bindings",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Bindings",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Bindings",
          "package": "CSPM-Interpreter",
          "partial": "Bindings",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Bindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Channel",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Channel",
          "package": "CSPM-Interpreter",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#ClosureSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Closure Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:ClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureState",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureState",
          "package": "CSPM-Interpreter",
          "partial": "Closure State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:ClosureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Constructor",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Constructor",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Constructor",
          "package": "CSPM-Interpreter",
          "partial": "Constructor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Digest",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Digest",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Digest",
          "package": "CSPM-Interpreter",
          "partial": "Digest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "EM",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#EM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "EM",
          "package": "CSPM-Interpreter",
          "partial": "EM",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:EM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Env",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Env",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Env",
          "package": "CSPM-Interpreter",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Eval",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Eval",
          "type": "class"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Eval",
          "package": "CSPM-Interpreter",
          "partial": "Eval",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Event",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Event",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Event",
          "package": "CSPM-Interpreter",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Field",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Field",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Field",
          "package": "CSPM-Interpreter",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "FieldSet",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#FieldSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "FieldSet",
          "package": "CSPM-Interpreter",
          "partial": "Field Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:FieldSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "FunClosure",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "FunClosure",
          "package": "CSPM-Interpreter",
          "partial": "Fun Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:FunClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GenericBufferPrefix",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GenericBufferPrefix",
          "package": "CSPM-Interpreter",
          "partial": "Generic Buffer Prefix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:GenericBufferPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "INT",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#INT",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "INT",
          "package": "CSPM-Interpreter",
          "partial": "INT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:INT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "InterpreterError",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "InterpreterError",
          "package": "CSPM-Interpreter",
          "partial": "Interpreter Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:InterpreterError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixState",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixState",
          "package": "CSPM-Interpreter",
          "partial": "Prefix State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:PrefixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixTrie",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "Prefix Trie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:PrefixTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Process",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Process",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Process",
          "package": "CSPM-Interpreter",
          "partial": "Process",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "RenamingRelation",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "RenamingRelation",
          "package": "CSPM-Interpreter",
          "partial": "Renaming Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:RenamingRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Sigma",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Sigma",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Sigma",
          "package": "CSPM-Interpreter",
          "partial": "Sigma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Sigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "SwitchedOffProc",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#SwitchedOffProc",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "SwitchedOffProc",
          "package": "CSPM-Interpreter",
          "partial": "Switched Off Proc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:SwitchedOffProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Value",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Value",
          "package": "CSPM-Interpreter",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Channel",
          "package": "CSPM-Interpreter",
          "signature": "Channel",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Channel",
          "package": "CSPM-Interpreter",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "signature": "ClosureSet",
          "source": "src/CSPM-Interpreter-Types.html#ClosureSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Closure Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:ClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateFailed",
          "package": "CSPM-Interpreter",
          "signature": "ClosureStateFailed",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateFailed",
          "package": "CSPM-Interpreter",
          "partial": "Closure State Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:ClosureStateFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateNormal",
          "package": "CSPM-Interpreter",
          "signature": "ClosureStateNormal",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateNormal",
          "package": "CSPM-Interpreter",
          "partial": "Closure State Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:ClosureStateNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateSucc",
          "package": "CSPM-Interpreter",
          "signature": "ClosureStateSucc",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ClosureStateSucc",
          "package": "CSPM-Interpreter",
          "partial": "Closure State Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:ClosureStateSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Constructor",
          "package": "CSPM-Interpreter",
          "signature": "Constructor",
          "source": "src/CSPM-Interpreter-Types.html#Constructor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Constructor",
          "package": "CSPM-Interpreter",
          "partial": "Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "EM",
          "package": "CSPM-Interpreter",
          "signature": "EM",
          "source": "src/CSPM-Interpreter-Types.html#EM",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "EM",
          "package": "CSPM-Interpreter",
          "partial": "EM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:EM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "Env",
          "package": "CSPM-Interpreter",
          "signature": "Env",
          "source": "src/CSPM-Interpreter-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "Env",
          "package": "CSPM-Interpreter",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "FeatureNotImplemented",
          "package": "CSPM-Interpreter",
          "signature": "FeatureNotImplemented",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "FeatureNotImplemented",
          "package": "CSPM-Interpreter",
          "partial": "Feature Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:FeatureNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "FunClosure",
          "package": "CSPM-Interpreter",
          "signature": "FunClosure",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "FunClosure",
          "package": "CSPM-Interpreter",
          "partial": "Fun Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:FunClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GBFinished",
          "package": "CSPM-Interpreter",
          "signature": "GBFinished PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GBFinished",
          "package": "CSPM-Interpreter",
          "partial": "GBFinished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:GBFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GBInput",
          "package": "CSPM-Interpreter",
          "signature": "GBInput PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GBInput",
          "package": "CSPM-Interpreter",
          "partial": "GBInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:GBInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GBInputGeneric",
          "package": "CSPM-Interpreter",
          "signature": "GBInputGeneric [Value] PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GBInputGeneric",
          "normalized": "GBInputGeneric[Value]PrefixState",
          "package": "CSPM-Interpreter",
          "partial": "GBInput Generic",
          "signature": "GBInputGeneric[Value]PrefixState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:GBInputGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GBInputGuard",
          "package": "CSPM-Interpreter",
          "signature": "GBInputGuard FieldSet PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GBInputGuard",
          "package": "CSPM-Interpreter",
          "partial": "GBInput Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:GBInputGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "GBOut",
          "package": "CSPM-Interpreter",
          "signature": "GBOut [Value] PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#GenericBufferPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "GBOut",
          "normalized": "GBOut[Value]PrefixState",
          "package": "CSPM-Interpreter",
          "partial": "GBOut",
          "signature": "GBOut[Value]PrefixState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:GBOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "InternalError",
          "package": "CSPM-Interpreter",
          "signature": "InternalError",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "InternalError",
          "package": "CSPM-Interpreter",
          "partial": "Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:InternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTAny",
          "package": "CSPM-Interpreter",
          "signature": "PTAny PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTAny",
          "package": "CSPM-Interpreter",
          "partial": "PTAny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTClosure",
          "package": "CSPM-Interpreter",
          "signature": "PTClosure PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTClosure",
          "package": "CSPM-Interpreter",
          "partial": "PTClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTMap",
          "package": "CSPM-Interpreter",
          "signature": "PTMap (Map Value PrefixTrie)",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTMap",
          "package": "CSPM-Interpreter",
          "partial": "PTMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTNil",
          "package": "CSPM-Interpreter",
          "signature": "PTNil",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTNil",
          "package": "CSPM-Interpreter",
          "partial": "PTNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTRec",
          "package": "CSPM-Interpreter",
          "signature": "PTRec (Set Value) PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTRec",
          "package": "CSPM-Interpreter",
          "partial": "PTRec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PTSingle",
          "package": "CSPM-Interpreter",
          "signature": "PTSingle Value PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#PrefixTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PTSingle",
          "package": "CSPM-Interpreter",
          "partial": "PTSingle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PTSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PatternMatchError",
          "package": "CSPM-Interpreter",
          "signature": "PatternMatchError",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PatternMatchError",
          "package": "CSPM-Interpreter",
          "partial": "Pattern Match Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PatternMatchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixState",
          "package": "CSPM-Interpreter",
          "signature": "PrefixState",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "PrefixState",
          "package": "CSPM-Interpreter",
          "partial": "Prefix State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:PrefixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "RenamingRelation",
          "package": "CSPM-Interpreter",
          "signature": "RenamingRelation",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "RenamingRelation",
          "package": "CSPM-Interpreter",
          "partial": "Renaming Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:RenamingRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "ScriptError",
          "package": "CSPM-Interpreter",
          "signature": "ScriptError",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "ScriptError",
          "package": "CSPM-Interpreter",
          "partial": "Script Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:ScriptError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "SwitchedOffProc",
          "package": "CSPM-Interpreter",
          "signature": "SwitchedOffProc",
          "source": "src/CSPM-Interpreter-Types.html#SwitchedOffProc",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "SwitchedOffProc",
          "package": "CSPM-Interpreter",
          "partial": "Switched Off Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:SwitchedOffProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "TypingError",
          "package": "CSPM-Interpreter",
          "signature": "TypingError",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "TypingError",
          "package": "CSPM-Interpreter",
          "partial": "Typing Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:TypingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VAllInts",
          "package": "CSPM-Interpreter",
          "signature": "VAllInts",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VAllInts",
          "package": "CSPM-Interpreter",
          "partial": "VAll Ints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VAllInts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VAllSequences",
          "package": "CSPM-Interpreter",
          "signature": "VAllSequences (Set Value)",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VAllSequences",
          "package": "CSPM-Interpreter",
          "partial": "VAll Sequences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VAllSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VBool",
          "package": "CSPM-Interpreter",
          "signature": "VBool Bool",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VBool",
          "package": "CSPM-Interpreter",
          "partial": "VBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VChannel",
          "package": "CSPM-Interpreter",
          "signature": "VChannel Channel",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VChannel",
          "package": "CSPM-Interpreter",
          "partial": "VChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VClosure",
          "package": "CSPM-Interpreter",
          "signature": "VClosure ClosureSet",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VClosure",
          "package": "CSPM-Interpreter",
          "partial": "VClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VConstructor",
          "package": "CSPM-Interpreter",
          "signature": "VConstructor Constructor",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VConstructor",
          "package": "CSPM-Interpreter",
          "partial": "VConstructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VDataType",
          "package": "CSPM-Interpreter",
          "signature": "VDataType [Constructor]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VDataType",
          "normalized": "VDataType[Constructor]",
          "package": "CSPM-Interpreter",
          "partial": "VData Type",
          "signature": "VDataType[Constructor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VDataType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VDotTuple",
          "package": "CSPM-Interpreter",
          "signature": "VDotTuple [Value]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VDotTuple",
          "normalized": "VDotTuple[Value]",
          "package": "CSPM-Interpreter",
          "partial": "VDot Tuple",
          "signature": "VDotTuple[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VDotTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VFun",
          "package": "CSPM-Interpreter",
          "signature": "VFun FunClosure",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VFun",
          "package": "CSPM-Interpreter",
          "partial": "VFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VInt",
          "package": "CSPM-Interpreter",
          "signature": "VInt Integer",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VInt",
          "package": "CSPM-Interpreter",
          "partial": "VInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VList",
          "package": "CSPM-Interpreter",
          "signature": "VList [Value]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VList",
          "normalized": "VList[Value]",
          "package": "CSPM-Interpreter",
          "partial": "VList",
          "signature": "VList[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VNameType",
          "package": "CSPM-Interpreter",
          "signature": "VNameType [FieldSet]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VNameType",
          "normalized": "VNameType[FieldSet]",
          "package": "CSPM-Interpreter",
          "partial": "VName Type",
          "signature": "VNameType[FieldSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VNameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VPartialApplied",
          "package": "CSPM-Interpreter",
          "signature": "VPartialApplied FunClosure [Value]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VPartialApplied",
          "normalized": "VPartialApplied FunClosure[Value]",
          "package": "CSPM-Interpreter",
          "partial": "VPartial Applied",
          "signature": "VPartialApplied FunClosure[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VPartialApplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VProcess",
          "package": "CSPM-Interpreter",
          "signature": "VProcess Process",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VProcess",
          "package": "CSPM-Interpreter",
          "partial": "VProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VSet",
          "package": "CSPM-Interpreter",
          "signature": "VSet (Set Value)",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VSet",
          "package": "CSPM-Interpreter",
          "partial": "VSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VTuple",
          "package": "CSPM-Interpreter",
          "signature": "VTuple [Value]",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VTuple",
          "normalized": "VTuple[Value]",
          "package": "CSPM-Interpreter",
          "partial": "VTuple",
          "signature": "VTuple[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "VUnit",
          "package": "CSPM-Interpreter",
          "signature": "VUnit",
          "source": "src/CSPM-Interpreter-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "VUnit",
          "package": "CSPM-Interpreter",
          "partial": "VUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:VUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "argBindings",
          "package": "CSPM-Interpreter",
          "signature": "Bindings",
          "source": "src/CSPM-Interpreter-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "argBindings",
          "package": "CSPM-Interpreter",
          "partial": "Bindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:argBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "chanFields",
          "package": "CSPM-Interpreter",
          "signature": "[FieldSet]",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "chanFields",
          "normalized": "[FieldSet]",
          "package": "CSPM-Interpreter",
          "partial": "Fields",
          "signature": "[FieldSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:chanFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "chanId",
          "package": "CSPM-Interpreter",
          "signature": "Int",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "chanId",
          "package": "CSPM-Interpreter",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:chanId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "chanLen",
          "package": "CSPM-Interpreter",
          "signature": "Int",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "chanLen",
          "package": "CSPM-Interpreter",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:chanLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "chanName",
          "package": "CSPM-Interpreter",
          "signature": "String",
          "source": "src/CSPM-Interpreter-Types.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "chanName",
          "package": "CSPM-Interpreter",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:chanName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "closureSetDigest",
          "package": "CSPM-Interpreter",
          "signature": "Digest",
          "source": "src/CSPM-Interpreter-Types.html#ClosureSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "closureSetDigest",
          "package": "CSPM-Interpreter",
          "partial": "Set Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:closureSetDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "closureSetTrie",
          "package": "CSPM-Interpreter",
          "signature": "PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#ClosureSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "closureSetTrie",
          "package": "CSPM-Interpreter",
          "partial": "Set Trie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:closureSetTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "constrFields",
          "package": "CSPM-Interpreter",
          "signature": "[FieldSet]",
          "source": "src/CSPM-Interpreter-Types.html#Constructor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "constrFields",
          "normalized": "[FieldSet]",
          "package": "CSPM-Interpreter",
          "partial": "Fields",
          "signature": "[FieldSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:constrFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "constrId",
          "package": "CSPM-Interpreter",
          "signature": "Int",
          "source": "src/CSPM-Interpreter-Types.html#Constructor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "constrId",
          "package": "CSPM-Interpreter",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:constrId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "constrName",
          "package": "CSPM-Interpreter",
          "signature": "String",
          "source": "src/CSPM-Interpreter-Types.html#Constructor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "constrName",
          "package": "CSPM-Interpreter",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:constrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "currentPrefixTrie",
          "package": "CSPM-Interpreter",
          "signature": "PrefixTrie",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "currentPrefixTrie",
          "package": "CSPM-Interpreter",
          "partial": "Prefix Trie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:currentPrefixTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "emptyEnvirionment",
          "package": "CSPM-Interpreter",
          "signature": "Env",
          "source": "src/CSPM-Interpreter-Types.html#emptyEnvirionment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "emptyEnvirionment",
          "package": "CSPM-Interpreter",
          "partial": "Envirionment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:emptyEnvirionment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "errLoc",
          "package": "CSPM-Interpreter",
          "signature": "Maybe SrcLoc",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "errLoc",
          "package": "CSPM-Interpreter",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:errLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "errMsg",
          "package": "CSPM-Interpreter",
          "signature": "String",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "errMsg",
          "package": "CSPM-Interpreter",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:errMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "errVal",
          "package": "CSPM-Interpreter",
          "signature": "Maybe Value",
          "source": "src/CSPM-Interpreter-Types.html#InterpreterError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "errVal",
          "package": "CSPM-Interpreter",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:errVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "evalM",
          "package": "CSPM-Interpreter",
          "signature": "LExp -\u003e m Value",
          "source": "src/CSPM-Interpreter-Types.html#evalM",
          "type": "method"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "evalM",
          "normalized": "LExp-\u003ea Value",
          "package": "CSPM-Interpreter",
          "signature": "LExp-\u003em Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:evalM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getArgBindings",
          "package": "CSPM-Interpreter",
          "signature": "Env -\u003e Bindings",
          "source": "src/CSPM-Interpreter-Types.html#getArgBindings",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getArgBindings",
          "normalized": "Env-\u003eBindings",
          "package": "CSPM-Interpreter",
          "partial": "Arg Bindings",
          "signature": "Env-\u003eBindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getArgBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getChannel",
          "package": "CSPM-Interpreter",
          "signature": "Field -\u003e Channel",
          "source": "src/CSPM-Interpreter-Types.html#getChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getChannel",
          "normalized": "Field-\u003eChannel",
          "package": "CSPM-Interpreter",
          "partial": "Channel",
          "signature": "Field-\u003eChannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getEnv",
          "package": "CSPM-Interpreter",
          "signature": "EM Env",
          "source": "src/CSPM-Interpreter-Types.html#getEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getEnv",
          "package": "CSPM-Interpreter",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getFunArgNum",
          "package": "CSPM-Interpreter",
          "signature": "Int",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getFunArgNum",
          "package": "CSPM-Interpreter",
          "partial": "Fun Arg Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getFunArgNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getFunCases",
          "package": "CSPM-Interpreter",
          "signature": "[FunCase]",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getFunCases",
          "normalized": "[FunCase]",
          "package": "CSPM-Interpreter",
          "partial": "Fun Cases",
          "signature": "[FunCase]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getFunCases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getFunEnv",
          "package": "CSPM-Interpreter",
          "signature": "Env",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getFunEnv",
          "package": "CSPM-Interpreter",
          "partial": "Fun Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getFunEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getFunId",
          "package": "CSPM-Interpreter",
          "signature": "Digest",
          "source": "src/CSPM-Interpreter-Types.html#FunClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getFunId",
          "package": "CSPM-Interpreter",
          "partial": "Fun Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getFunId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "getLetBindings",
          "package": "CSPM-Interpreter",
          "signature": "Env -\u003e Bindings",
          "source": "src/CSPM-Interpreter-Types.html#getLetBindings",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "getLetBindings",
          "normalized": "Env-\u003eBindings",
          "package": "CSPM-Interpreter",
          "partial": "Let Bindings",
          "signature": "Env-\u003eBindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:getLetBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "isChannelField",
          "package": "CSPM-Interpreter",
          "signature": "Field -\u003e Bool",
          "source": "src/CSPM-Interpreter-Types.html#isChannelField",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "isChannelField",
          "normalized": "Field-\u003eBool",
          "package": "CSPM-Interpreter",
          "partial": "Channel Field",
          "signature": "Field-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:isChannelField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "letBindings",
          "package": "CSPM-Interpreter",
          "signature": "Bindings",
          "source": "src/CSPM-Interpreter-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "letBindings",
          "package": "CSPM-Interpreter",
          "partial": "Bindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:letBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "letDigests",
          "package": "CSPM-Interpreter",
          "signature": "IntMap Digest",
          "source": "src/CSPM-Interpreter-Types.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "letDigests",
          "package": "CSPM-Interpreter",
          "partial": "Digests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:letDigests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "origClosureSet",
          "package": "CSPM-Interpreter",
          "signature": "ClosureSet",
          "source": "src/CSPM-Interpreter-Types.html#ClosureState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "origClosureSet",
          "package": "CSPM-Interpreter",
          "partial": "Closure Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:origClosureSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixBody",
          "package": "CSPM-Interpreter",
          "signature": "LExp",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixBody",
          "package": "CSPM-Interpreter",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixDigest",
          "package": "CSPM-Interpreter",
          "signature": "Digest",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixDigest",
          "package": "CSPM-Interpreter",
          "partial": "Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixEnv",
          "package": "CSPM-Interpreter",
          "signature": "Env",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixEnv",
          "package": "CSPM-Interpreter",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixFields",
          "package": "CSPM-Interpreter",
          "signature": "[LCommField]",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixFields",
          "normalized": "[LCommField]",
          "package": "CSPM-Interpreter",
          "partial": "Fields",
          "signature": "[LCommField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixPatternFailed",
          "package": "CSPM-Interpreter",
          "signature": "Bool",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixPatternFailed",
          "package": "CSPM-Interpreter",
          "partial": "Pattern Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixPatternFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "prefixRHS",
          "package": "CSPM-Interpreter",
          "signature": "Process",
          "source": "src/CSPM-Interpreter-Types.html#PrefixState",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "prefixRHS",
          "package": "CSPM-Interpreter",
          "partial": "RHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:prefixRHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "renamingDigest",
          "package": "CSPM-Interpreter",
          "signature": "Digest",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "renamingDigest",
          "package": "CSPM-Interpreter",
          "partial": "Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:renamingDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "renamingDomain",
          "package": "CSPM-Interpreter",
          "signature": "Set Event",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "renamingDomain",
          "package": "CSPM-Interpreter",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:renamingDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "renamingPairs",
          "package": "CSPM-Interpreter",
          "signature": "Set (Event, Event)",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "renamingPairs",
          "normalized": "Set(Event,Event)",
          "package": "CSPM-Interpreter",
          "partial": "Pairs",
          "signature": "Set(Event,Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:renamingPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "renamingRange",
          "package": "CSPM-Interpreter",
          "signature": "Set Event",
          "source": "src/CSPM-Interpreter-Types.html#RenamingRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "renamingRange",
          "package": "CSPM-Interpreter",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:renamingRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "setArgBindings",
          "package": "CSPM-Interpreter",
          "signature": "Env -\u003e Bindings -\u003e Env",
          "source": "src/CSPM-Interpreter-Types.html#setArgBindings",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "setArgBindings",
          "normalized": "Env-\u003eBindings-\u003eEnv",
          "package": "CSPM-Interpreter",
          "partial": "Arg Bindings",
          "signature": "Env-\u003eBindings-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:setArgBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "setLetBindings",
          "package": "CSPM-Interpreter",
          "signature": "Env -\u003e Bindings -\u003e Env",
          "source": "src/CSPM-Interpreter-Types.html#setLetBindings",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "setLetBindings",
          "normalized": "Env-\u003eBindings-\u003eEnv",
          "package": "CSPM-Interpreter",
          "partial": "Let Bindings",
          "signature": "Env-\u003eBindings-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:setLetBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffDigest",
          "package": "CSPM-Interpreter",
          "signature": "Digest",
          "source": "src/CSPM-Interpreter-Types.html#SwitchedOffProc",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffDigest",
          "package": "CSPM-Interpreter",
          "partial": "Off Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:switchedOffDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffExpr",
          "package": "CSPM-Interpreter",
          "signature": "LExp",
          "source": "src/CSPM-Interpreter-Types.html#SwitchedOffProc",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffExpr",
          "package": "CSPM-Interpreter",
          "partial": "Off Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:switchedOffExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffProcess",
          "package": "CSPM-Interpreter",
          "signature": "Process",
          "source": "src/CSPM-Interpreter-Types.html#SwitchedOffProc",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "switchedOffProcess",
          "package": "CSPM-Interpreter",
          "partial": "Off Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:switchedOffProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "throwFeatureNotImplemented",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Maybe SrcLoc -\u003e a",
          "source": "src/CSPM-Interpreter-Types.html#throwFeatureNotImplemented",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "throwFeatureNotImplemented",
          "normalized": "String-\u003eMaybe SrcLoc-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "Feature Not Implemented",
          "signature": "String-\u003eMaybe SrcLoc-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:throwFeatureNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "throwInternalError",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Maybe SrcLoc -\u003e Maybe Value -\u003e a",
          "source": "src/CSPM-Interpreter-Types.html#throwInternalError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "throwInternalError",
          "normalized": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "Internal Error",
          "signature": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:throwInternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "throwPatternMatchError",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Maybe SrcLoc -\u003e a",
          "source": "src/CSPM-Interpreter-Types.html#throwPatternMatchError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "throwPatternMatchError",
          "normalized": "String-\u003eMaybe SrcLoc-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "Pattern Match Error",
          "signature": "String-\u003eMaybe SrcLoc-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:throwPatternMatchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "throwScriptError",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Maybe SrcLoc -\u003e Maybe Value -\u003e a",
          "source": "src/CSPM-Interpreter-Types.html#throwScriptError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "throwScriptError",
          "normalized": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "Script Error",
          "signature": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:throwScriptError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "throwTypingError",
          "package": "CSPM-Interpreter",
          "signature": "String -\u003e Maybe SrcLoc -\u003e Maybe Value -\u003e a",
          "source": "src/CSPM-Interpreter-Types.html#throwTypingError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "throwTypingError",
          "normalized": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "package": "CSPM-Interpreter",
          "partial": "Typing Error",
          "signature": "String-\u003eMaybe SrcLoc-\u003eMaybe Value-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:throwTypingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter.Types",
          "name": "unEM",
          "package": "CSPM-Interpreter",
          "signature": "Reader Env x",
          "source": "src/CSPM-Interpreter-Types.html#EM",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter Types",
          "module": "CSPM.Interpreter.Types",
          "name": "unEM",
          "package": "CSPM-Interpreter",
          "partial": "EM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter-Types.html#v:unEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn API for the Interpreter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Interpreter",
          "name": "Interpreter",
          "package": "CSPM-Interpreter",
          "source": "src/CSPM-Interpreter.html",
          "type": "module"
        },
        "index": {
          "description": "An API for the Interpreter",
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "Interpreter",
          "package": "CSPM-Interpreter",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter",
          "name": "bindIdent",
          "package": "CSPM-Interpreter",
          "signature": "LIdent -\u003e Value -\u003e Bindings -\u003e Bindings",
          "source": "src/CSPM-Interpreter-Bindings.html#bindIdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "bindIdent",
          "normalized": "LIdent-\u003eValue-\u003eBindings-\u003eBindings",
          "package": "CSPM-Interpreter",
          "partial": "Ident",
          "signature": "LIdent-\u003eValue-\u003eBindings-\u003eBindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:bindIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter",
          "name": "emptyBindings",
          "package": "CSPM-Interpreter",
          "signature": "Bindings",
          "source": "src/CSPM-Interpreter-Bindings.html#emptyBindings",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "emptyBindings",
          "package": "CSPM-Interpreter",
          "partial": "Bindings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:emptyBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the CSPM-Interpreter library\n\u003c/p\u003e",
          "module": "CSPM.Interpreter",
          "name": "interpreterVersion",
          "package": "CSPM-Interpreter",
          "signature": "Version",
          "source": "src/CSPM-Interpreter.html#interpreterVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of the CSPM-Interpreter library",
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "interpreterVersion",
          "package": "CSPM-Interpreter",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:interpreterVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter",
          "name": "lookupAllChannels",
          "package": "CSPM-Interpreter",
          "signature": "EM [Channel]",
          "source": "src/CSPM-Interpreter-Bindings.html#lookupAllChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "lookupAllChannels",
          "normalized": "EM[Channel]",
          "package": "CSPM-Interpreter",
          "partial": "All Channels",
          "signature": "EM[Channel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:lookupAllChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter",
          "name": "lookupIdent",
          "package": "CSPM-Interpreter",
          "signature": "LIdent -\u003e EM Value",
          "source": "src/CSPM-Interpreter-Bindings.html#lookupIdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "lookupIdent",
          "normalized": "LIdent-\u003eEM Value",
          "package": "CSPM-Interpreter",
          "partial": "Ident",
          "signature": "LIdent-\u003eEM Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:lookupIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Interpreter",
          "name": "prepareAST",
          "package": "CSPM-Interpreter",
          "signature": "ModuleFromRenaming -\u003e Module INT",
          "source": "src/CSPM-Interpreter-PrepareAST.html#prepareAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "prepareAST",
          "normalized": "ModuleFromRenaming-\u003eModule INT",
          "package": "CSPM-Interpreter",
          "partial": "AST",
          "signature": "ModuleFromRenaming-\u003eModule INT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:prepareAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the interpreter for a given module and top-level identifier.\n\u003c/p\u003e",
          "module": "CSPM.Interpreter",
          "name": "runInterpreter",
          "package": "CSPM-Interpreter",
          "signature": "Module INT -\u003e UniqueIdent -\u003e (Value, Env)",
          "source": "src/CSPM-Interpreter.html#runInterpreter",
          "type": "function"
        },
        "index": {
          "description": "Run the interpreter for given module and top-level identifier",
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "runInterpreter",
          "normalized": "Module INT-\u003eUniqueIdent-\u003e(Value,Env)",
          "package": "CSPM-Interpreter",
          "partial": "Interpreter",
          "signature": "Module INT-\u003eUniqueIdent-\u003e(Value,Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:runInterpreter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the interpreter for a given module and top-level identifier.\n Cast result to a process\n\u003c/p\u003e",
          "module": "CSPM.Interpreter",
          "name": "runInterpreterP",
          "package": "CSPM-Interpreter",
          "signature": "Module INT -\u003e UniqueIdent -\u003e (Process, Env)",
          "source": "src/CSPM-Interpreter.html#runInterpreterP",
          "type": "function"
        },
        "index": {
          "description": "Run the interpreter for given module and top-level identifier Cast result to process",
          "hierarchy": "CSPM Interpreter",
          "module": "CSPM.Interpreter",
          "name": "runInterpreterP",
          "normalized": "Module INT-\u003eUniqueIdent-\u003e(Process,Env)",
          "package": "CSPM-Interpreter",
          "partial": "Interpreter",
          "signature": "Module INT-\u003eUniqueIdent-\u003e(Process,Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-Interpreter/docs/CSPM-Interpreter.html#v:runInterpreterP"
      }
    }
  ]
]