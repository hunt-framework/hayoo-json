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
        "word": "data-checked"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e that requires client code to provide\n   a non-bottom value of the property index type to use \u003ccode\u003etrust*\u003c/code\u003e\n   functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Checked.Strict",
          "name": "Strict",
          "package": "data-checked",
          "source": "src/Data-Checked-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "version of Checked that requires client code to provide non-bottom value of the property index type to use trust functions",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "Strict",
          "package": "data-checked",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper-evidence for property \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "Checked",
          "package": "data-checked",
          "source": "src/Data-Checked-Strict.html#Checked",
          "type": "data"
        },
        "index": {
          "description": "Wrapper-evidence for property",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "Checked",
          "package": "data-checked",
          "partial": "Checked",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#t:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked.Strict",
          "name": "Property",
          "package": "data-checked",
          "source": "src/Data-Checked.html#Property",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "Property",
          "package": "data-checked",
          "partial": "Property",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the value if the property holds.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "check",
          "package": "data-checked",
          "signature": "v -\u003e Maybe (Checked p v)",
          "source": "src/Data-Checked-Strict.html#check",
          "type": "function"
        },
        "index": {
          "description": "Wrap the value if the property holds",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "check",
          "normalized": "a-\u003eMaybe(Checked b a)",
          "package": "data-checked",
          "signature": "v-\u003eMaybe(Checked p v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the checked value.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "checked",
          "package": "data-checked",
          "signature": "Checked p v -\u003e v",
          "source": "src/Data-Checked-Strict.html#checked",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the checked value",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "checked",
          "normalized": "Checked a b-\u003eb",
          "package": "data-checked",
          "signature": "Checked p v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the property holds for the given value.\n   The first argument is supposed to be ignored.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "holds",
          "package": "data-checked",
          "signature": "p -\u003e v -\u003e Bool",
          "source": "src/Data-Checked.html#holds",
          "type": "method"
        },
        "index": {
          "description": "Test if the property holds for the given value The first argument is supposed to be ignored",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "holds",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "data-checked",
          "signature": "p-\u003ev-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:holds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003cem\u003ev\u003c/em\u003e if \u003cem\u003ep\u003c/em\u003e holds and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e overwise.\n\u003c/p\u003e",
          "module": "[\"Data.Checked.Strict\",\"Data.Checked\"]",
          "name": "maybeHolds",
          "package": "data-checked",
          "signature": "p -\u003e v -\u003e Maybe v",
          "source": "src/Data-Checked.html#maybeHolds",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:maybeHolds\",\"http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:maybeHolds\"]"
        },
        "index": {
          "description": "Return Just if holds and Nothing overwise",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "maybeHolds",
          "normalized": "a-\u003eb-\u003eMaybe b",
          "package": "data-checked",
          "partial": "Holds",
          "signature": "p-\u003ev-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:maybeHolds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrap a value into the less strict \u003ccode\u003e\u003ca\u003eChecked\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "relax",
          "package": "data-checked",
          "signature": "Checked p v -\u003e Checked p v",
          "source": "src/Data-Checked-Strict.html#relax",
          "type": "function"
        },
        "index": {
          "description": "Rewrap value into the less strict Checked type",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "relax",
          "normalized": "Checked a b-\u003eChecked a b",
          "package": "data-checked",
          "signature": "Checked p v-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:relax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a fuction that preserves the property to the checked value.\n   Note that \u003cem\u003ep\u003c/em\u003e is evaluated to WHNF, so you can't use \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "trustMap",
          "package": "data-checked",
          "signature": "p -\u003e (v -\u003e v) -\u003e Checked p v -\u003e Checked p v",
          "source": "src/Data-Checked-Strict.html#trustMap",
          "type": "function"
        },
        "index": {
          "description": "Apply fuction that preserves the property to the checked value Note that is evaluated to WHNF so you can use undefined",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "trustMap",
          "normalized": "a-\u003e(b-\u003eb)-\u003eChecked a b-\u003eChecked a b",
          "package": "data-checked",
          "partial": "Map",
          "signature": "p-\u003e(v-\u003ev)-\u003eChecked p v-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:trustMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse when the property can be deduced without a runtime check.\n   Note that \u003cem\u003ep\u003c/em\u003e is evaluated to WHNF, so you can't use \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Checked.Strict",
          "name": "trustThat",
          "package": "data-checked",
          "signature": "p -\u003e v -\u003e Checked p v",
          "source": "src/Data-Checked-Strict.html#trustThat",
          "type": "function"
        },
        "index": {
          "description": "Use when the property can be deduced without runtime check Note that is evaluated to WHNF so you can use undefined",
          "hierarchy": "Data Checked Strict",
          "module": "Data.Checked.Strict",
          "name": "trustThat",
          "normalized": "a-\u003eb-\u003eChecked a b",
          "package": "data-checked",
          "partial": "That",
          "signature": "p-\u003ev-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked-Strict.html#v:trustThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-indexed runtime-checked properties.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "data-checked",
          "source": "src/Data-Checked.html",
          "type": "module"
        },
        "index": {
          "description": "Type-indexed runtime-checked properties",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "data-checked",
          "partial": "Checked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper-evidence for property \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "data-checked",
          "source": "src/Data-Checked.html#Checked",
          "type": "data"
        },
        "index": {
          "description": "Wrapper-evidence for property",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Checked",
          "package": "data-checked",
          "partial": "Checked",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#t:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Checked",
          "name": "Property",
          "package": "data-checked",
          "source": "src/Data-Checked.html#Property",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "Property",
          "package": "data-checked",
          "partial": "Property",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the value if the property holds.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "check",
          "package": "data-checked",
          "signature": "v -\u003e Maybe (Checked p v)",
          "source": "src/Data-Checked.html#check",
          "type": "function"
        },
        "index": {
          "description": "Wrap the value if the property holds",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "check",
          "normalized": "a-\u003eMaybe(Checked b a)",
          "package": "data-checked",
          "signature": "v-\u003eMaybe(Checked p v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the checked value.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "checked",
          "package": "data-checked",
          "signature": "Checked p v -\u003e v",
          "source": "src/Data-Checked.html#checked",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the checked value",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "checked",
          "normalized": "Checked a b-\u003eb",
          "package": "data-checked",
          "signature": "Checked p v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the property holds for the given value.\n   The first argument is supposed to be ignored.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "holds",
          "package": "data-checked",
          "signature": "p -\u003e v -\u003e Bool",
          "source": "src/Data-Checked.html#holds",
          "type": "method"
        },
        "index": {
          "description": "Test if the property holds for the given value The first argument is supposed to be ignored",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "holds",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "data-checked",
          "signature": "p-\u003ev-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:holds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a fuction that preserves the property to the checked value.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "trustMap",
          "package": "data-checked",
          "signature": "(v -\u003e v) -\u003e Checked p v -\u003e Checked p v",
          "source": "src/Data-Checked.html#trustMap",
          "type": "function"
        },
        "index": {
          "description": "Apply fuction that preserves the property to the checked value",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "trustMap",
          "normalized": "(a-\u003ea)-\u003eChecked b a-\u003eChecked b a",
          "package": "data-checked",
          "partial": "Map",
          "signature": "(v-\u003ev)-\u003eChecked p v-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:trustMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse when the property can be deduced without a runtime check.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "trustMe",
          "package": "data-checked",
          "signature": "v -\u003e Checked p v",
          "source": "src/Data-Checked.html#trustMe",
          "type": "function"
        },
        "index": {
          "description": "Use when the property can be deduced without runtime check",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "trustMe",
          "normalized": "a-\u003eChecked b a",
          "package": "data-checked",
          "partial": "Me",
          "signature": "v-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:trustMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse when the property can be deduced without a runtime check.\n\u003c/p\u003e",
          "module": "Data.Checked",
          "name": "trustThat",
          "package": "data-checked",
          "signature": "p -\u003e v -\u003e Checked p v",
          "source": "src/Data-Checked.html#trustThat",
          "type": "function"
        },
        "index": {
          "description": "Use when the property can be deduced without runtime check",
          "hierarchy": "Data Checked",
          "module": "Data.Checked",
          "name": "trustThat",
          "normalized": "a-\u003eb-\u003eChecked a b",
          "package": "data-checked",
          "partial": "That",
          "signature": "p-\u003ev-\u003eChecked p v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-checked/docs/Data-Checked.html#v:trustThat"
      }
    }
  ]
]