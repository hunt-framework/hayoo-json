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
        "word": "atom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Analysis",
          "name": "Analysis",
          "package": "atom",
          "source": "src/Language-Atom-Analysis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom Analysis",
          "module": "Language.Atom.Analysis",
          "name": "Analysis",
          "package": "atom",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of UE's computed in rule.\n\u003c/p\u003e",
          "module": "Language.Atom.Analysis",
          "name": "ruleComplexity",
          "package": "atom",
          "signature": "UeMap -\u003e Rule -\u003e Int",
          "source": "src/Language-Atom-Analysis.html#ruleComplexity",
          "type": "function"
        },
        "index": {
          "description": "Number of UE computed in rule",
          "hierarchy": "Language Atom Analysis",
          "module": "Language.Atom.Analysis",
          "name": "ruleComplexity",
          "normalized": "UeMap-\u003eRule-\u003eInt",
          "package": "atom",
          "partial": "Complexity",
          "signature": "UeMap-\u003eRule-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Analysis.html#v:ruleComplexity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopologically sorts a list of expressions and subexpressions.\n\u003c/p\u003e",
          "module": "Language.Atom.Analysis",
          "name": "topo",
          "package": "atom",
          "signature": "UeMap -\u003e [Hash] -\u003e [(Hash, String)]",
          "source": "src/Language-Atom-Analysis.html#topo",
          "type": "function"
        },
        "index": {
          "description": "Topologically sorts list of expressions and subexpressions",
          "hierarchy": "Language Atom Analysis",
          "module": "Language.Atom.Analysis",
          "name": "topo",
          "normalized": "UeMap-\u003e[Hash]-\u003e[(Hash,String)]",
          "package": "atom",
          "signature": "UeMap-\u003e[Hash]-\u003e[(Hash,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Analysis.html#v:topo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtom C code generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Code",
          "name": "Code",
          "package": "atom",
          "source": "src/Language-Atom-Code.html",
          "type": "module"
        },
        "index": {
          "description": "Atom code generation",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "Code",
          "package": "atom",
          "partial": "Code",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData associated with sampling a hardware clock.  For the clock to work\n correctly, you MUST assign \u003ccode\u003e__global_clock\u003c/code\u003e the current time (accoring to\n \u003ccode\u003eclockName\u003c/code\u003e) the first time you enter the main Atom-generated function\n calling your rules.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "Clock",
          "package": "atom",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "data"
        },
        "index": {
          "description": "Data associated with sampling hardware clock For the clock to work correctly you MUST assign global clock the current time accoring to clockName the first time you enter the main Atom-generated function calling your rules",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "Clock",
          "package": "atom",
          "partial": "Clock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#t:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC code configuration parameters.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "Config",
          "package": "atom",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "data"
        },
        "index": {
          "description": "code configuration parameters",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "Config",
          "package": "atom",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Code",
          "name": "RuleCoverage",
          "package": "atom",
          "source": "src/Language-Atom-Code.html#RuleCoverage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "RuleCoverage",
          "package": "atom",
          "partial": "Rule Coverage",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#t:RuleCoverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Code",
          "name": "Clock",
          "package": "atom",
          "signature": "Clock",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "Clock",
          "package": "atom",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Code",
          "name": "Config",
          "package": "atom",
          "signature": "Config",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "Config",
          "package": "atom",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable assertions and functional coverage.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cAssert",
          "package": "atom",
          "signature": "Bool",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Enable assertions and functional coverage",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cAssert",
          "package": "atom",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cAssert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of assertion function.  Type: void\n assert(int, bool, uint64_t);\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cAssertName",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Name of assertion function Type void assert int bool uint64",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cAssertName",
          "package": "atom",
          "partial": "Assert Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cAssertName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom C code to insert above\n and below the functions, given\n assertion names, coverage names,\n and probe names and types.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cCode",
          "package": "atom",
          "signature": "[Name] -\u003e [Name] -\u003e [(Name, Type)] -\u003e (String, String)",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Custom code to insert above and below the functions given assertion names coverage names and probe names and types",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cCode",
          "normalized": "[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003e(String,String)",
          "package": "atom",
          "partial": "Code",
          "signature": "[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of coverage function.  Type: void\n cover(int, bool, uint64_t);\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cCoverName",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Name of coverage function Type void cover int bool uint64",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cCoverName",
          "package": "atom",
          "partial": "Cover Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cCoverName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative primary function name.  Leave empty\n to use compile name.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cFuncName",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Alternative primary function name Leave empty to use compile name",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cFuncName",
          "package": "atom",
          "partial": "Func Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cFuncName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable rule coverage tracking.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cRuleCoverage",
          "package": "atom",
          "signature": "Bool",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Enable rule coverage tracking",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cRuleCoverage",
          "package": "atom",
          "partial": "Rule Coverage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cRuleCoverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of state variable structure.  Default: state\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cStateName",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Name of state variable structure Default state",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cStateName",
          "package": "atom",
          "partial": "State Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cStateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC99 type naming rules.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "cType",
          "package": "atom",
          "signature": "Type -\u003e String",
          "source": "src/Language-Atom-Code.html#cType",
          "type": "function"
        },
        "index": {
          "description": "C99 type naming rules",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "cType",
          "normalized": "Type-\u003eString",
          "package": "atom",
          "partial": "Type",
          "signature": "Type-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:cType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC function to sample the clock.  The\n funciton is assumed to have the prototype\n \u003ccode\u003eclockType clockName(void)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "clockName",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "function to sample the clock The funciton is assumed to have the prototype clockType clockName void",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "clockName",
          "package": "atom",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:clockName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClock type.  Assumed to be one of Word8,\n Word16, Word32, or Word64.  It is permissible\n for the clock to rollover.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "clockType",
          "package": "atom",
          "signature": "Type",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "Clock type Assumed to be one of Word8 Word16 Word32 or Word64 It is permissible for the clock to rollover",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "clockType",
          "package": "atom",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:clockType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Code",
          "name": "defaultClock",
          "package": "atom",
          "signature": "Clock",
          "source": "src/Language-Atom-Code.html#defaultClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "defaultClock",
          "package": "atom",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:defaultClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault C code configuration parameters (default function name, no pre/post code, ANSI C types).\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "defaults",
          "package": "atom",
          "signature": "Config",
          "source": "src/Language-Atom-Code.html#defaults",
          "type": "function"
        },
        "index": {
          "description": "Default code configuration parameters default function name no pre post code ANSI types",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "defaults",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:defaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC function to delay/sleep.  The function is\n assumed to have the prototype \u003ccode\u003evoid\n delay(clockType i)\u003c/code\u003e, where \u003ccode\u003ei\u003c/code\u003e is the\n duration of delay/sleep.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "delay",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "function to delay sleep The function is assumed to have the prototype void delay clockType where is the duration of delay sleep",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "delay",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of ticks in a phase.  Must be greater than 0.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "delta",
          "package": "atom",
          "signature": "Integer",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "Number of ticks in phase Must be greater than",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "delta",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing or a user-defined error-reporting\n function if the period duration is violated;\n e.g., the execution time was greater than\n \u003ccode\u003edelta\u003c/code\u003e.  Assumed to have prototype \u003ccode\u003evoid\n err(void)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "err",
          "package": "atom",
          "signature": "Maybe String",
          "source": "src/Language-Atom-Code.html#Clock",
          "type": "function"
        },
        "index": {
          "description": "Nothing or user-defined error-reporting function if the period duration is violated e.g the execution time was greater than delta Assumed to have prototype void err void",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "err",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom C code to insert above\n and below the state definition\n in the header file, given assertion\n names, coverage names, and probe names\n and types.\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "hCode",
          "package": "atom",
          "signature": "[Name] -\u003e [Name] -\u003e [(Name, Type)] -\u003e (String, String)",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Custom code to insert above and below the state definition in the header file given assertion names coverage names and probe names and types",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "hCode",
          "normalized": "[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003e(String,String)",
          "package": "atom",
          "partial": "Code",
          "signature": "[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:hCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we use a hardware counter to schedule\n rules?\n\u003c/p\u003e",
          "module": "Language.Atom.Code",
          "name": "hardwareClock",
          "package": "atom",
          "signature": "Maybe Clock",
          "source": "src/Language-Atom-Code.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Do we use hardware counter to schedule rules",
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "hardwareClock",
          "package": "atom",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:hardwareClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Code",
          "name": "writeC",
          "package": "atom",
          "signature": "Name -\u003e Config -\u003e StateHierarchy -\u003e [Rule] -\u003e Schedule -\u003e [Name] -\u003e [Name] -\u003e [(Name, Type)] -\u003e IO RuleCoverage",
          "source": "src/Language-Atom-Code.html#writeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Code",
          "module": "Language.Atom.Code",
          "name": "writeC",
          "normalized": "Name-\u003eConfig-\u003eStateHierarchy-\u003e[Rule]-\u003eSchedule-\u003e[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003eIO RuleCoverage",
          "package": "atom",
          "signature": "Name-\u003eConfig-\u003eStateHierarchy-\u003e[Rule]-\u003eSchedule-\u003e[Name]-\u003e[Name]-\u003e[(Name,Type)]-\u003eIO RuleCoverage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Code.html#v:writeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon Atom functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Common",
          "name": "Common",
          "package": "atom",
          "source": "src/Language-Atom-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Common Atom functions",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "Common",
          "package": "atom",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Timer.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "Timer",
          "package": "atom",
          "source": "src/Language-Atom-Common.html#Timer",
          "type": "data"
        },
        "index": {
          "description": "Timer",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "Timer",
          "package": "atom",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebounces a boolean given an on and off time (ticks) and an initial state.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "debounce",
          "package": "atom",
          "signature": "Name -\u003e E Word64 -\u003e E Word64 -\u003e Bool -\u003e E Bool -\u003e Atom (E Bool)",
          "source": "src/Language-Atom-Common.html#debounce",
          "type": "function"
        },
        "index": {
          "description": "Debounces boolean given an on and off time ticks and an initial state",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "debounce",
          "normalized": "Name-\u003eE Word-\u003eE Word-\u003eBool-\u003eE Bool-\u003eAtom(E Bool)",
          "package": "atom",
          "signature": "Name-\u003eE Word-\u003eE Word-\u003eBool-\u003eE Bool-\u003eAtom(E Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:debounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHysteresis returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when the input exceeds \u003ccode\u003emax\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e when\n   the input is less than \u003ccode\u003emin\u003c/code\u003e.  The state is held when the input is between\n   \u003ccode\u003emin\u003c/code\u003e and \u003ccode\u003emax\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e hysteresis name min max input\n\u003c/pre\u003e",
          "module": "Language.Atom.Common",
          "name": "hysteresis",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a -\u003e Atom (E Bool)",
          "source": "src/Language-Atom-Common.html#hysteresis",
          "type": "function"
        },
        "index": {
          "description": "Hysteresis returns True when the input exceeds max and False when the input is less than min The state is held when the input is between min and max hysteresis name min max input",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "hysteresis",
          "normalized": "E a-\u003eE a-\u003eE a-\u003eAtom(E Bool)",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a-\u003eAtom(E Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:hysteresis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear extrapolation and interpolation on a line with 2 points.\n   The two x points must be different to prevent a divide-by-zero.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "linear",
          "package": "atom",
          "signature": "(E a, E a) -\u003e (E a, E a) -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Common.html#linear",
          "type": "function"
        },
        "index": {
          "description": "Linear extrapolation and interpolation on line with points The two points must be different to prevent divide-by-zero",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "linear",
          "normalized": "(E a,E a)-\u003e(E a,E a)-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "(E a,E a)-\u003e(E a,E a)-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-D lookup table.  X values out of table range are clipped at end Y values.\n   Input table must be monotonically increasing in X.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "lookupTable",
          "package": "atom",
          "signature": "[(E a, E a)] -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Common.html#lookupTable",
          "type": "function"
        },
        "index": {
          "description": "lookup table values out of table range are clipped at end values Input table must be monotonically increasing in",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "lookupTable",
          "normalized": "[(E a,E a)]-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Table",
          "signature": "[(E a,E a)]-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:lookupTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-shot on a falling transition.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "oneShotFall",
          "package": "atom",
          "signature": "E Bool -\u003e Atom (E Bool)",
          "source": "src/Language-Atom-Common.html#oneShotFall",
          "type": "function"
        },
        "index": {
          "description": "One-shot on falling transition",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "oneShotFall",
          "normalized": "E Bool-\u003eAtom(E Bool)",
          "package": "atom",
          "partial": "Shot Fall",
          "signature": "E Bool-\u003eAtom(E Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:oneShotFall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-shot on a rising transition.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "oneShotRise",
          "package": "atom",
          "signature": "E Bool -\u003e Atom (E Bool)",
          "source": "src/Language-Atom-Common.html#oneShotRise",
          "type": "function"
        },
        "index": {
          "description": "One-shot on rising transition",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "oneShotRise",
          "normalized": "E Bool-\u003eAtom(E Bool)",
          "package": "atom",
          "partial": "Shot Rise",
          "signature": "E Bool-\u003eAtom(E Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:oneShotRise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a Timer.  A timer can be restarted at any time.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "startTimer",
          "package": "atom",
          "signature": "Timer -\u003e E Word64 -\u003e Atom ()",
          "source": "src/Language-Atom-Common.html#startTimer",
          "type": "function"
        },
        "index": {
          "description": "Starts Timer timer can be restarted at any time",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "startTimer",
          "normalized": "Timer-\u003eE Word-\u003eAtom()",
          "package": "atom",
          "partial": "Timer",
          "signature": "Timer-\u003eE Word-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:startTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally start a Timer.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "startTimerIf",
          "package": "atom",
          "signature": "Timer -\u003e E Bool -\u003e E Word64 -\u003e Atom ()",
          "source": "src/Language-Atom-Common.html#startTimerIf",
          "type": "function"
        },
        "index": {
          "description": "Conditionally start Timer",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "startTimerIf",
          "normalized": "Timer-\u003eE Bool-\u003eE Word-\u003eAtom()",
          "package": "atom",
          "partial": "Timer If",
          "signature": "Timer-\u003eE Bool-\u003eE Word-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:startTimerIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new timer.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "timer",
          "package": "atom",
          "signature": "Name -\u003e Atom Timer",
          "source": "src/Language-Atom-Common.html#timer",
          "type": "function"
        },
        "index": {
          "description": "Creates new timer",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "timer",
          "normalized": "Name-\u003eAtom Timer",
          "package": "atom",
          "signature": "Name-\u003eAtom Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a timer has completed.\n\u003c/p\u003e",
          "module": "Language.Atom.Common",
          "name": "timerDone",
          "package": "atom",
          "signature": "Timer -\u003e E Bool",
          "source": "src/Language-Atom-Common.html#timerDone",
          "type": "function"
        },
        "index": {
          "description": "True when timer has completed",
          "hierarchy": "Language Atom Common",
          "module": "Language.Atom.Common",
          "name": "timerDone",
          "normalized": "Timer-\u003eE Bool",
          "package": "atom",
          "partial": "Done",
          "signature": "Timer-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Common.html#v:timerDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtom compilation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Compile",
          "name": "Compile",
          "package": "atom",
          "source": "src/Language-Atom-Compile.html",
          "type": "module"
        },
        "index": {
          "description": "Atom compilation",
          "hierarchy": "Language Atom Compile",
          "module": "Language.Atom.Compile",
          "name": "Compile",
          "package": "atom",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Compile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Compile",
          "name": "Schedule",
          "package": "atom",
          "source": "src/Language-Atom-Scheduling.html#Schedule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Atom Compile",
          "module": "Language.Atom.Compile",
          "name": "Schedule",
          "package": "atom",
          "partial": "Schedule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Compile.html#t:Schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles an atom description to C.\n\u003c/p\u003e",
          "module": "Language.Atom.Compile",
          "name": "compile",
          "package": "atom",
          "signature": "Name -\u003e Config -\u003e Atom () -\u003e IO (Schedule, RuleCoverage, [Name], [Name], [(Name, Type)])",
          "source": "src/Language-Atom-Compile.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Compiles an atom description to",
          "hierarchy": "Language Atom Compile",
          "module": "Language.Atom.Compile",
          "name": "compile",
          "normalized": "Name-\u003eConfig-\u003eAtom()-\u003eIO(Schedule,RuleCoverage,[Name],[Name],[(Name,Type)])",
          "package": "atom",
          "signature": "Name-\u003eConfig-\u003eAtom()-\u003eIO(Schedule,RuleCoverage,[Name],[Name],[(Name,Type)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Compile.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Atom.Compile\",\"Language.Atom.Scheduling\"]",
          "name": "reportSchedule",
          "package": "atom",
          "signature": "Schedule -\u003e String",
          "source": "src/Language-Atom-Scheduling.html#reportSchedule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Compile.html#v:reportSchedule\",\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Scheduling.html#v:reportSchedule\"]"
        },
        "index": {
          "hierarchy": "Language Atom Compile",
          "module": "Language.Atom.Compile",
          "name": "reportSchedule",
          "normalized": "Schedule-\u003eString",
          "package": "atom",
          "partial": "Schedule",
          "signature": "Schedule-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Compile.html#v:reportSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Elaboration",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Elaboration",
          "package": "atom",
          "partial": "Elaboration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Atom monad holds variable and rule declarations.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "Atom",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "The Atom monad holds variable and rule declarations",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Atom",
          "package": "atom",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "AtomDB",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "AtomDB",
          "package": "atom",
          "partial": "Atom DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:AtomDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Global",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Global",
          "package": "atom",
          "partial": "Global",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "Name",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Name",
          "type": "type"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Name",
          "package": "atom",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hierarchical name.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "Path",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Path",
          "type": "type"
        },
        "index": {
          "description": "hierarchical name",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Path",
          "package": "atom",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA phase is either the minimum phase or the exact phase.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "Phase",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Phase",
          "type": "data"
        },
        "index": {
          "description": "phase is either the minimum phase or the exact phase",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Phase",
          "package": "atom",
          "partial": "Phase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Rule",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Rule",
          "package": "atom",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "StateHierarchy",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#StateHierarchy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "StateHierarchy",
          "package": "atom",
          "partial": "State Hierarchy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:StateHierarchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "UID",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#UID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "UID",
          "package": "atom",
          "partial": "UID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#t:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Assert",
          "package": "atom",
          "signature": "Assert",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Assert",
          "package": "atom",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "AtomDB",
          "package": "atom",
          "signature": "AtomDB",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "AtomDB",
          "package": "atom",
          "partial": "Atom DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:AtomDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Cover",
          "package": "atom",
          "signature": "Cover",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Cover",
          "package": "atom",
          "partial": "Cover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:Cover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ExactPhase",
          "package": "atom",
          "signature": "ExactPhase Int",
          "source": "src/Language-Atom-Elaboration.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ExactPhase",
          "package": "atom",
          "partial": "Exact Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ExactPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Global",
          "package": "atom",
          "signature": "Global",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Global",
          "package": "atom",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "MinPhase",
          "package": "atom",
          "signature": "MinPhase Int",
          "source": "src/Language-Atom-Elaboration.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "MinPhase",
          "package": "atom",
          "partial": "Min Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:MinPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "Rule",
          "package": "atom",
          "signature": "Rule",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "Rule",
          "package": "atom",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "StateArray",
          "package": "atom",
          "signature": "StateArray Name [Const]",
          "source": "src/Language-Atom-Elaboration.html#StateHierarchy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "StateArray",
          "normalized": "StateArray Name[Const]",
          "package": "atom",
          "partial": "State Array",
          "signature": "StateArray Name[Const]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:StateArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "StateHierarchy",
          "package": "atom",
          "signature": "StateHierarchy Name [StateHierarchy]",
          "source": "src/Language-Atom-Elaboration.html#StateHierarchy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "StateHierarchy",
          "normalized": "StateHierarchy Name[StateHierarchy]",
          "package": "atom",
          "partial": "State Hierarchy",
          "signature": "StateHierarchy Name[StateHierarchy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:StateHierarchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "StateVariable",
          "package": "atom",
          "signature": "StateVariable Name Const",
          "source": "src/Language-Atom-Elaboration.html#StateHierarchy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "StateVariable",
          "package": "atom",
          "partial": "State Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:StateVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "addName",
          "package": "atom",
          "signature": "Name -\u003e Atom Name",
          "source": "src/Language-Atom-Elaboration.html#addName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "addName",
          "normalized": "Name-\u003eAtom Name",
          "package": "atom",
          "partial": "Name",
          "signature": "Name-\u003eAtom Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:addName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll primary expressions used in a rule.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "allUEs",
          "package": "atom",
          "signature": "Rule -\u003e [Hash]",
          "source": "src/Language-Atom-Elaboration.html#allUEs",
          "type": "function"
        },
        "index": {
          "description": "All primary expressions used in rule",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "allUEs",
          "normalized": "Rule-\u003e[Hash]",
          "package": "atom",
          "partial": "UEs",
          "signature": "Rule-\u003e[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:allUEs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the variables that directly and indirectly control the value of an expression.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "allUVs",
          "package": "atom",
          "signature": "UeMap -\u003e [Rule] -\u003e Hash -\u003e [MUV]",
          "source": "src/Language-Atom-Elaboration.html#allUVs",
          "type": "function"
        },
        "index": {
          "description": "All the variables that directly and indirectly control the value of an expression",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "allUVs",
          "normalized": "UeMap-\u003e[Rule]-\u003eHash-\u003e[MUV]",
          "package": "atom",
          "partial": "UVs",
          "signature": "UeMap-\u003e[Rule]-\u003eHash-\u003e[MUV]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:allUVs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric array declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Atom.Elaboration\",\"Language.Atom.Language\"]",
          "name": "array",
          "package": "atom",
          "signature": "Name -\u003e [a] -\u003e Atom (A a)",
          "source": "src/Language-Atom-Elaboration.html#array",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:array\",\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:array\"]"
        },
        "index": {
          "description": "Generic array declaration",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "array",
          "normalized": "Name-\u003e[a]-\u003eAtom(A a)",
          "package": "atom",
          "signature": "Name-\u003e[a]-\u003eAtom(A a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric external array declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Atom.Elaboration\",\"Language.Atom.Language\"]",
          "name": "array'",
          "package": "atom",
          "signature": "Name -\u003e Type -\u003e A a",
          "source": "src/Language-Atom-Elaboration.html#array%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:array-39-\",\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:array-39-\"]"
        },
        "index": {
          "description": "Generic external array declaration",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "array'",
          "normalized": "Name-\u003eType-\u003eA a",
          "package": "atom",
          "signature": "Name-\u003eType-\u003eA a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:array-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomActions",
          "package": "atom",
          "signature": "[([String] -\u003e String, [Hash])]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomActions",
          "normalized": "[([String]-\u003eString,[Hash])]",
          "package": "atom",
          "partial": "Actions",
          "signature": "[([String]-\u003eString,[Hash])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomAsserts",
          "package": "atom",
          "signature": "[(Name, Hash)]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomAsserts",
          "normalized": "[(Name,Hash)]",
          "package": "atom",
          "partial": "Asserts",
          "signature": "[(Name,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomAsserts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomAssigns",
          "package": "atom",
          "signature": "[(MUV, Hash)]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomAssigns",
          "normalized": "[(MUV,Hash)]",
          "package": "atom",
          "partial": "Assigns",
          "signature": "[(MUV,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomAssigns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomCovers",
          "package": "atom",
          "signature": "[(Name, Hash)]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomCovers",
          "normalized": "[(Name,Hash)]",
          "package": "atom",
          "partial": "Covers",
          "signature": "[(Name,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomCovers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomEnable",
          "package": "atom",
          "signature": "Hash",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomEnable",
          "package": "atom",
          "partial": "Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomId",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomId",
          "package": "atom",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomName",
          "package": "atom",
          "signature": "Name",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomName",
          "package": "atom",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomNames",
          "package": "atom",
          "signature": "[Name]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomNames",
          "normalized": "[Name]",
          "package": "atom",
          "partial": "Names",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomPeriod",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomPeriod",
          "package": "atom",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomPhase",
          "package": "atom",
          "signature": "Phase",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomPhase",
          "package": "atom",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "atomSubs",
          "package": "atom",
          "signature": "[AtomDB]",
          "source": "src/Language-Atom-Elaboration.html#AtomDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "atomSubs",
          "normalized": "[AtomDB]",
          "package": "atom",
          "partial": "Subs",
          "signature": "[AtomDB]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:atomSubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "buildAtom",
          "package": "atom",
          "signature": "UeMap -\u003e Global -\u003e Name -\u003e Atom a -\u003e IO (a, AtomSt)",
          "source": "src/Language-Atom-Elaboration.html#buildAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "buildAtom",
          "normalized": "UeMap-\u003eGlobal-\u003eName-\u003eAtom a-\u003eIO(a,AtomSt)",
          "package": "atom",
          "partial": "Atom",
          "signature": "UeMap-\u003eGlobal-\u003eName-\u003eAtom a-\u003eIO(a,AtomSt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:buildAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Relation is used for relative performance constraints between \u003ccode\u003eAction\u003c/code\u003es.\n data Relation = Higher UID | Lower UID deriving (Show, Eq)\n\u003c/p\u003e\u003cp\u003eGiven a top level name and design, elaborates design and returns a design database.\n\u003c/p\u003e",
          "module": "Language.Atom.Elaboration",
          "name": "elaborate",
          "package": "atom",
          "signature": "UeMap -\u003e Name -\u003e Atom () -\u003e IO (Maybe (UeMap, (StateHierarchy, [Rule], [Name], [Name], [(Name, Type)])))",
          "source": "src/Language-Atom-Elaboration.html#elaborate",
          "type": "function"
        },
        "index": {
          "description": "Relation is used for relative performance constraints between Action data Relation Higher UID Lower UID deriving Show Eq Given top level name and design elaborates design and returns design database",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "elaborate",
          "normalized": "UeMap-\u003eName-\u003eAtom()-\u003eIO(Maybe(UeMap,(StateHierarchy,[Rule],[Name],[Name],[(Name,Type)])))",
          "package": "atom",
          "signature": "UeMap-\u003eName-\u003eAtom()-\u003eIO(Maybe(UeMap,(StateHierarchy,[Rule],[Name],[Name],[(Name,Type)])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:elaborate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gArrayId",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gArrayId",
          "package": "atom",
          "partial": "Array Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gArrayId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gPeriod",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gPeriod",
          "package": "atom",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gPhase",
          "package": "atom",
          "signature": "Phase",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gPhase",
          "package": "atom",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gProbes",
          "package": "atom",
          "signature": "[(String, Hash)]",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gProbes",
          "normalized": "[(String,Hash)]",
          "package": "atom",
          "partial": "Probes",
          "signature": "[(String,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gProbes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gRuleId",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gRuleId",
          "package": "atom",
          "partial": "Rule Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gRuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gState",
          "package": "atom",
          "signature": "[StateHierarchy]",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gState",
          "normalized": "[StateHierarchy]",
          "package": "atom",
          "partial": "State",
          "signature": "[StateHierarchy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "gVarId",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "gVarId",
          "package": "atom",
          "partial": "Var Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:gVarId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "get",
          "package": "atom",
          "signature": "Atom AtomSt",
          "source": "src/Language-Atom-Elaboration.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "get",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "put",
          "package": "atom",
          "signature": "AtomSt -\u003e Atom ()",
          "source": "src/Language-Atom-Elaboration.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "put",
          "normalized": "AtomSt-\u003eAtom()",
          "package": "atom",
          "signature": "AtomSt-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleActions",
          "package": "atom",
          "signature": "[([String] -\u003e String, [Hash])]",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleActions",
          "normalized": "[([String]-\u003eString,[Hash])]",
          "package": "atom",
          "partial": "Actions",
          "signature": "[([String]-\u003eString,[Hash])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleAssert",
          "package": "atom",
          "signature": "Hash",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleAssert",
          "package": "atom",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleAssert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleAssigns",
          "package": "atom",
          "signature": "[(MUV, Hash)]",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleAssigns",
          "normalized": "[(MUV,Hash)]",
          "package": "atom",
          "partial": "Assigns",
          "signature": "[(MUV,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleAssigns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleCover",
          "package": "atom",
          "signature": "Hash",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleCover",
          "package": "atom",
          "partial": "Cover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleCover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleEnable",
          "package": "atom",
          "signature": "Hash",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleEnable",
          "package": "atom",
          "partial": "Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleId",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleId",
          "package": "atom",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "ruleName",
          "package": "atom",
          "signature": "Name",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "ruleName",
          "package": "atom",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:ruleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "rulePeriod",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "rulePeriod",
          "package": "atom",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:rulePeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Elaboration",
          "name": "rulePhase",
          "package": "atom",
          "signature": "Phase",
          "source": "src/Language-Atom-Elaboration.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "rulePhase",
          "package": "atom",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:rulePhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric local variable declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Atom.Elaboration\",\"Language.Atom.Language\"]",
          "name": "var",
          "package": "atom",
          "signature": "Name -\u003e a -\u003e Atom (V a)",
          "source": "src/Language-Atom-Elaboration.html#var",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:var\",\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:var\"]"
        },
        "index": {
          "description": "Generic local variable declaration",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "var",
          "normalized": "Name-\u003ea-\u003eAtom(V a)",
          "package": "atom",
          "signature": "Name-\u003ea-\u003eAtom(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric external variable declaration.\n\u003c/p\u003e",
          "module": "[\"Language.Atom.Elaboration\",\"Language.Atom.Language\"]",
          "name": "var'",
          "package": "atom",
          "signature": "Name -\u003e Type -\u003e V a",
          "source": "src/Language-Atom-Elaboration.html#var%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:var-39-\",\"http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:var-39-\"]"
        },
        "index": {
          "description": "Generic external variable declaration",
          "hierarchy": "Language Atom Elaboration",
          "module": "Language.Atom.Elaboration",
          "name": "var'",
          "normalized": "Name-\u003eType-\u003eV a",
          "package": "atom",
          "signature": "Name-\u003eType-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Elaboration.html#v:var-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn example atom design.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Example",
          "name": "Example",
          "package": "atom",
          "source": "src/Language-Atom-Example.html",
          "type": "module"
        },
        "index": {
          "description": "An example atom design",
          "hierarchy": "Language Atom Example",
          "module": "Language.Atom.Example",
          "name": "Example",
          "package": "atom",
          "partial": "Example",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Example.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the atom compiler.\n\u003c/p\u003e",
          "module": "Language.Atom.Example",
          "name": "compileExample",
          "package": "atom",
          "signature": "IO ()",
          "source": "src/Language-Atom-Example.html#compileExample",
          "type": "function"
        },
        "index": {
          "description": "Invoke the atom compiler",
          "hierarchy": "Language Atom Example",
          "module": "Language.Atom.Example",
          "name": "compileExample",
          "normalized": "IO()",
          "package": "atom",
          "partial": "Example",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Example.html#v:compileExample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example design that computes the greatest common divisor.\n\u003c/p\u003e",
          "module": "Language.Atom.Example",
          "name": "example",
          "package": "atom",
          "signature": "Atom ()",
          "source": "src/Language-Atom-Example.html#example",
          "type": "function"
        },
        "index": {
          "description": "An example design that computes the greatest common divisor",
          "hierarchy": "Language Atom Example",
          "module": "Language.Atom.Example",
          "name": "example",
          "normalized": "Atom()",
          "package": "atom",
          "signature": "Atom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Example.html#v:example"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Expressions",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Expressions",
          "package": "atom",
          "partial": "Expressions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typed array.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "A",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#A",
          "type": "data"
        },
        "index": {
          "description": "typed array",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "A",
          "package": "atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Const",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Const",
          "package": "atom",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typed expression.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "E",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "data"
        },
        "index": {
          "description": "typed expression",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "E",
          "package": "atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EqE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#EqE",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EqE",
          "package": "atom",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:EqE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Expr",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Expr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Expr",
          "package": "atom",
          "partial": "Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Expression",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Expression",
          "package": "atom",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "FloatingE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#FloatingE",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "FloatingE",
          "package": "atom",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:FloatingE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "IntegralE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#IntegralE",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "IntegralE",
          "package": "atom",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:IntegralE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "NumE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#NumE",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "NumE",
          "package": "atom",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:NumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "OrdE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#OrdE",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "OrdE",
          "package": "atom",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:OrdE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a \u003ccode\u003e\u003ca\u003eE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "Type",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "data"
        },
        "index": {
          "description": "The type of",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Type",
          "package": "atom",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "TypeOf",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#TypeOf",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "TypeOf",
          "package": "atom",
          "partial": "Type Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:TypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn untyped array.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "UA",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#UA",
          "type": "data"
        },
        "index": {
          "description": "An untyped array",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UA",
          "package": "atom",
          "partial": "UA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:UA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn untyped term.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "UE",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "data"
        },
        "index": {
          "description": "An untyped term",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UE",
          "package": "atom",
          "partial": "UE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:UE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUntyped variables.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "UV",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#UV",
          "type": "data"
        },
        "index": {
          "description": "Untyped variables",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UV",
          "package": "atom",
          "partial": "UV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:UV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables updated by state transition rules.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "V",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#V",
          "type": "data"
        },
        "index": {
          "description": "Variables updated by state transition rules",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "V",
          "package": "atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Variable",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Variable",
          "package": "atom",
          "partial": "Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Width",
          "package": "atom",
          "source": "src/Language-Atom-Expressions.html#Width",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Width",
          "package": "atom",
          "partial": "Width",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical OR.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(||.)",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%7C%7C.",
          "type": "function"
        },
        "index": {
          "description": "Logical OR",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(||.) ||.",
          "normalized": "E Bool-\u003eE Bool-\u003eE Bool",
          "package": "atom",
          "signature": "E Bool-\u003eE Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray index to variable.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(!)",
          "package": "atom",
          "signature": "A a -\u003e E b -\u003e V a",
          "source": "src/Language-Atom-Expressions.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Array index to variable",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(!) !",
          "normalized": "A a-\u003eE b-\u003eV a",
          "package": "atom",
          "signature": "A a-\u003eE b-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray index to expression.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(!.)",
          "package": "atom",
          "signature": "A a -\u003e E b -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#%21.",
          "type": "function"
        },
        "index": {
          "description": "Array index to expression",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(!.) !.",
          "normalized": "A a-\u003eE b-\u003eE a",
          "package": "atom",
          "signature": "A a-\u003eE b-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-33-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical AND.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(&&.)",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%26%26.",
          "type": "function"
        },
        "index": {
          "description": "Logical AND",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(&&.) &&.",
          "normalized": "E Bool-\u003eE Bool-\u003eE Bool",
          "package": "atom",
          "signature": "E Bool-\u003eE Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot equal.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(/=.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%2F%3D.",
          "type": "function"
        },
        "index": {
          "description": "Not equal",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(/=.) /=.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-47--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than or equal.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(\u003c=.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%3C%3D.",
          "type": "function"
        },
        "index": {
          "description": "Less than or equal",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(\u003c=.) \u003c=.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(\u003c.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%3C.",
          "type": "function"
        },
        "index": {
          "description": "Less than",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(\u003c.) \u003c.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqual.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(==.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%3D%3D.",
          "type": "function"
        },
        "index": {
          "description": "Equal",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(==.) ==.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than or equal.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(\u003e=.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%3E%3D.",
          "type": "function"
        },
        "index": {
          "description": "Greater than or equal",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(\u003e=.) \u003e=.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(\u003e.)",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#%3E.",
          "type": "function"
        },
        "index": {
          "description": "Greater than",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(\u003e.) \u003e.",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"or\"\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(.|.)",
          "package": "atom",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Bitwise or",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(.|.) .|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "atom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"and\"\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(.&.)",
          "package": "atom",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Bitwise and",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(.&.) .&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "atom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise left-shifting.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(.\u003c\u003c.)",
          "package": "atom",
          "signature": "E a -\u003e E n -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#.%3C%3C.",
          "type": "function"
        },
        "index": {
          "description": "Bitwise left-shifting",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(.\u003c\u003c.) .\u003c\u003c.",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE n-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:.-60--60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise right-shifting.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "(.\u003e\u003e.)",
          "package": "atom",
          "signature": "E a -\u003e E n -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#.%3E%3E.",
          "type": "function"
        },
        "index": {
          "description": "Bitwise right-shifting",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "(.\u003e\u003e.) .\u003e\u003e.",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE n-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:.-62--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "A",
          "package": "atom",
          "signature": "A UA",
          "source": "src/Language-Atom-Expressions.html#A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "A",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Acos",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Acos",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Acos",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Acosh",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Acosh",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Acosh",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Add",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Add",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Add",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "And",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "And",
          "normalized": "E Bool-\u003eE Bool-\u003eE Bool",
          "package": "atom",
          "partial": "And",
          "signature": "E Bool-\u003eE Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Asin",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Asin",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Asin",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Asinh",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Asinh",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Asinh",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Atan",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Atan",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Atan",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Atanh",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Atanh",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Atanh",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "B2D",
          "package": "atom",
          "signature": "E Word64 -\u003e E Double",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "B2D",
          "normalized": "E Word-\u003eE Double",
          "package": "atom",
          "signature": "E Word-\u003eE Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:B2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "B2F",
          "package": "atom",
          "signature": "E Word32 -\u003e E Float",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "B2F",
          "normalized": "E Word-\u003eE Float",
          "package": "atom",
          "signature": "E Word-\u003eE Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:B2F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWAnd",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWAnd",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "BWAnd",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWNot",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWNot",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "BWNot",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWOr",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWOr",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "BWOr",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWShiftL",
          "package": "atom",
          "signature": "E a -\u003e E b -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWShiftL",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "partial": "BWShift",
          "signature": "E a-\u003eE b-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWShiftR",
          "package": "atom",
          "signature": "E a -\u003e E b -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWShiftR",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "partial": "BWShift",
          "signature": "E a-\u003eE b-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "BWXor",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "BWXor",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "BWXor",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:BWXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Bool",
          "package": "atom",
          "signature": "Bool",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Bool",
          "package": "atom",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CBool",
          "package": "atom",
          "signature": "CBool Bool",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CBool",
          "package": "atom",
          "partial": "CBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CDouble",
          "package": "atom",
          "signature": "CDouble Double",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CDouble",
          "package": "atom",
          "partial": "CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CFloat",
          "package": "atom",
          "signature": "CFloat Float",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CFloat",
          "package": "atom",
          "partial": "CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CInt16",
          "package": "atom",
          "signature": "CInt16 Int16",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CInt16",
          "package": "atom",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CInt32",
          "package": "atom",
          "signature": "CInt32 Int32",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CInt32",
          "package": "atom",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CInt64",
          "package": "atom",
          "signature": "CInt64 Int64",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CInt64",
          "package": "atom",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CInt8",
          "package": "atom",
          "signature": "CInt8 Int8",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CInt8",
          "package": "atom",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CWord16",
          "package": "atom",
          "signature": "CWord16 Word16",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CWord16",
          "package": "atom",
          "partial": "CWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CWord32",
          "package": "atom",
          "signature": "CWord32 Word32",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CWord32",
          "package": "atom",
          "partial": "CWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CWord64",
          "package": "atom",
          "signature": "CWord64 Word64",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CWord64",
          "package": "atom",
          "partial": "CWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "CWord8",
          "package": "atom",
          "signature": "CWord8 Word8",
          "source": "src/Language-Atom-Expressions.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "CWord8",
          "package": "atom",
          "partial": "CWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:CWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Cast",
          "package": "atom",
          "signature": "E a -\u003e E b",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Cast",
          "normalized": "E a-\u003eE b",
          "package": "atom",
          "partial": "Cast",
          "signature": "E a-\u003eE b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Const",
          "package": "atom",
          "signature": "a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Const",
          "normalized": "a-\u003eE a",
          "package": "atom",
          "partial": "Const",
          "signature": "a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Cos",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Cos",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Cos",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Cosh",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Cosh",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Cosh",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "D2B",
          "package": "atom",
          "signature": "E Double -\u003e E Word64",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "D2B",
          "normalized": "E Double-\u003eE Word",
          "package": "atom",
          "signature": "E Double-\u003eE Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:D2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Div",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Div",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Div",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Double",
          "package": "atom",
          "signature": "Double",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Double",
          "package": "atom",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EBool",
          "package": "atom",
          "signature": "EBool (E Bool)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EBool",
          "package": "atom",
          "partial": "EBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EDouble",
          "package": "atom",
          "signature": "EDouble (E Double)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EDouble",
          "package": "atom",
          "partial": "EDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EFloat",
          "package": "atom",
          "signature": "EFloat (E Float)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EFloat",
          "package": "atom",
          "partial": "EFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EInt16",
          "package": "atom",
          "signature": "EInt16 (E Int16)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EInt16",
          "package": "atom",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EInt32",
          "package": "atom",
          "signature": "EInt32 (E Int32)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EInt32",
          "package": "atom",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EInt64",
          "package": "atom",
          "signature": "EInt64 (E Int64)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EInt64",
          "package": "atom",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EInt8",
          "package": "atom",
          "signature": "EInt8 (E Int8)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EInt8",
          "package": "atom",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EWord16",
          "package": "atom",
          "signature": "EWord16 (E Word16)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EWord16",
          "package": "atom",
          "partial": "EWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EWord32",
          "package": "atom",
          "signature": "EWord32 (E Word32)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EWord32",
          "package": "atom",
          "partial": "EWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EWord64",
          "package": "atom",
          "signature": "EWord64 (E Word64)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EWord64",
          "package": "atom",
          "partial": "EWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "EWord8",
          "package": "atom",
          "signature": "EWord8 (E Word8)",
          "source": "src/Language-Atom-Expressions.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "EWord8",
          "package": "atom",
          "partial": "EWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:EWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Eq",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Eq",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "partial": "Eq",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Exp",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Exp",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Exp",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "F2B",
          "package": "atom",
          "signature": "E Float -\u003e E Word32",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "F2B",
          "normalized": "E Float-\u003eE Word",
          "package": "atom",
          "signature": "E Float-\u003eE Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:F2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Float",
          "package": "atom",
          "signature": "Float",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Float",
          "package": "atom",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Int16",
          "package": "atom",
          "signature": "Int16",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Int16",
          "package": "atom",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Int32",
          "package": "atom",
          "signature": "Int32",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Int32",
          "package": "atom",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Int64",
          "package": "atom",
          "signature": "Int64",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Int64",
          "package": "atom",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Int8",
          "package": "atom",
          "signature": "Int8",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Int8",
          "package": "atom",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Log",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Log",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Log",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Lt",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Lt",
          "normalized": "E a-\u003eE a-\u003eE Bool",
          "package": "atom",
          "partial": "Lt",
          "signature": "E a-\u003eE a-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Mod",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Mod",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Mod",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Mul",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Mul",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Mul",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Mux",
          "package": "atom",
          "signature": "E Bool -\u003e E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Mux",
          "normalized": "E Bool-\u003eE a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Mux",
          "signature": "E Bool-\u003eE a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Mux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Not",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Not",
          "normalized": "E Bool-\u003eE Bool",
          "package": "atom",
          "partial": "Not",
          "signature": "E Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Pi",
          "package": "atom",
          "signature": "E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Pi",
          "package": "atom",
          "partial": "Pi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Pow",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Pow",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Pow",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Retype",
          "package": "atom",
          "signature": "UE -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Retype",
          "normalized": "UE-\u003eE a",
          "package": "atom",
          "partial": "Retype",
          "signature": "UE-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Retype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Sin",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Sin",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Sin",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Sinh",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Sinh",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Sinh",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Sqrt",
          "package": "atom",
          "signature": "E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Sqrt",
          "normalized": "E a-\u003eE a",
          "package": "atom",
          "partial": "Sqrt",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Sub",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Sub",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "partial": "Sub",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UA",
          "package": "atom",
          "signature": "UA Int String [Const]",
          "source": "src/Language-Atom-Expressions.html#UA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UA",
          "normalized": "UA Int String[Const]",
          "package": "atom",
          "partial": "UA",
          "signature": "UA Int String[Const]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAExtern",
          "package": "atom",
          "signature": "UAExtern String Type",
          "source": "src/Language-Atom-Expressions.html#UA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAExtern",
          "package": "atom",
          "partial": "UAExtern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAcos",
          "package": "atom",
          "signature": "UAcos UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAcos",
          "package": "atom",
          "partial": "UAcos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAcosh",
          "package": "atom",
          "signature": "UAcosh UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAcosh",
          "package": "atom",
          "partial": "UAcosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAcosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAdd",
          "package": "atom",
          "signature": "UAdd UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAdd",
          "package": "atom",
          "partial": "UAdd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAnd",
          "package": "atom",
          "signature": "UAnd [UE]",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAnd",
          "normalized": "UAnd[UE]",
          "package": "atom",
          "partial": "UAnd",
          "signature": "UAnd[UE]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAsin",
          "package": "atom",
          "signature": "UAsin UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAsin",
          "package": "atom",
          "partial": "UAsin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAsinh",
          "package": "atom",
          "signature": "UAsinh UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAsinh",
          "package": "atom",
          "partial": "UAsinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAsinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAtan",
          "package": "atom",
          "signature": "UAtan UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAtan",
          "package": "atom",
          "partial": "UAtan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAtan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UAtanh",
          "package": "atom",
          "signature": "UAtanh UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UAtanh",
          "package": "atom",
          "partial": "UAtanh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UAtanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UB2D",
          "package": "atom",
          "signature": "UB2D UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UB2D",
          "package": "atom",
          "partial": "UB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UB2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UB2F",
          "package": "atom",
          "signature": "UB2F UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UB2F",
          "package": "atom",
          "partial": "UB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UB2F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWAnd",
          "package": "atom",
          "signature": "UBWAnd UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWAnd",
          "package": "atom",
          "partial": "UBWAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWNot",
          "package": "atom",
          "signature": "UBWNot UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWNot",
          "package": "atom",
          "partial": "UBWNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWOr",
          "package": "atom",
          "signature": "UBWOr UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWOr",
          "package": "atom",
          "partial": "UBWOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWShiftL",
          "package": "atom",
          "signature": "UBWShiftL UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWShiftL",
          "package": "atom",
          "partial": "UBWShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWShiftR",
          "package": "atom",
          "signature": "UBWShiftR UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWShiftR",
          "package": "atom",
          "partial": "UBWShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UBWXor",
          "package": "atom",
          "signature": "UBWXor UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UBWXor",
          "package": "atom",
          "partial": "UBWXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UBWXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UCast",
          "package": "atom",
          "signature": "UCast Type UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UCast",
          "package": "atom",
          "partial": "UCast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UConst",
          "package": "atom",
          "signature": "UConst Const",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UConst",
          "package": "atom",
          "partial": "UConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UCos",
          "package": "atom",
          "signature": "UCos UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UCos",
          "package": "atom",
          "partial": "UCos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UCos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UCosh",
          "package": "atom",
          "signature": "UCosh UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UCosh",
          "package": "atom",
          "partial": "UCosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UCosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UD2B",
          "package": "atom",
          "signature": "UD2B UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UD2B",
          "package": "atom",
          "partial": "UD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UD2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UDiv",
          "package": "atom",
          "signature": "UDiv UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UDiv",
          "package": "atom",
          "partial": "UDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UEq",
          "package": "atom",
          "signature": "UEq UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UEq",
          "package": "atom",
          "partial": "UEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UExp",
          "package": "atom",
          "signature": "UExp UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UExp",
          "package": "atom",
          "partial": "UExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UF2B",
          "package": "atom",
          "signature": "UF2B UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UF2B",
          "package": "atom",
          "partial": "UF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UF2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "ULog",
          "package": "atom",
          "signature": "ULog UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ULog",
          "package": "atom",
          "partial": "ULog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ULog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "ULt",
          "package": "atom",
          "signature": "ULt UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ULt",
          "package": "atom",
          "partial": "ULt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ULt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UMod",
          "package": "atom",
          "signature": "UMod UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UMod",
          "package": "atom",
          "partial": "UMod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UMul",
          "package": "atom",
          "signature": "UMul UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UMul",
          "package": "atom",
          "partial": "UMul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UMux",
          "package": "atom",
          "signature": "UMux UE UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UMux",
          "package": "atom",
          "partial": "UMux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UMux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UNot",
          "package": "atom",
          "signature": "UNot UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UNot",
          "package": "atom",
          "partial": "UNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UPi",
          "package": "atom",
          "signature": "UPi",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UPi",
          "package": "atom",
          "partial": "UPi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UPow",
          "package": "atom",
          "signature": "UPow UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UPow",
          "package": "atom",
          "partial": "UPow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "USin",
          "package": "atom",
          "signature": "USin UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "USin",
          "package": "atom",
          "partial": "USin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:USin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "USinh",
          "package": "atom",
          "signature": "USinh UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "USinh",
          "package": "atom",
          "partial": "USinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:USinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "USqrt",
          "package": "atom",
          "signature": "USqrt UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "USqrt",
          "package": "atom",
          "partial": "USqrt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:USqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "USub",
          "package": "atom",
          "signature": "USub UE UE",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "USub",
          "package": "atom",
          "partial": "USub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:USub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UV",
          "package": "atom",
          "signature": "UV Int String Const",
          "source": "src/Language-Atom-Expressions.html#UV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UV",
          "package": "atom",
          "partial": "UV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UVArray",
          "package": "atom",
          "signature": "UVArray UA UE",
          "source": "src/Language-Atom-Expressions.html#UV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UVArray",
          "package": "atom",
          "partial": "UVArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UVArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UVExtern",
          "package": "atom",
          "signature": "UVExtern String Type",
          "source": "src/Language-Atom-Expressions.html#UV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UVExtern",
          "package": "atom",
          "partial": "UVExtern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UVExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "UVRef",
          "package": "atom",
          "signature": "UVRef UV",
          "source": "src/Language-Atom-Expressions.html#UE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "UVRef",
          "package": "atom",
          "partial": "UVRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:UVRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "V",
          "package": "atom",
          "signature": "V UV",
          "source": "src/Language-Atom-Expressions.html#V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "V",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VBool",
          "package": "atom",
          "signature": "VBool (V Bool)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VBool",
          "package": "atom",
          "partial": "VBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VDouble",
          "package": "atom",
          "signature": "VDouble (V Double)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VDouble",
          "package": "atom",
          "partial": "VDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VFloat",
          "package": "atom",
          "signature": "VFloat (V Float)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VFloat",
          "package": "atom",
          "partial": "VFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VInt16",
          "package": "atom",
          "signature": "VInt16 (V Int16)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VInt16",
          "package": "atom",
          "partial": "VInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VInt32",
          "package": "atom",
          "signature": "VInt32 (V Int32)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VInt32",
          "package": "atom",
          "partial": "VInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VInt64",
          "package": "atom",
          "signature": "VInt64 (V Int64)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VInt64",
          "package": "atom",
          "partial": "VInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VInt8",
          "package": "atom",
          "signature": "VInt8 (V Int8)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VInt8",
          "package": "atom",
          "partial": "VInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VRef",
          "package": "atom",
          "signature": "V a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VRef",
          "normalized": "V a-\u003eE a",
          "package": "atom",
          "partial": "VRef",
          "signature": "V a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VWord16",
          "package": "atom",
          "signature": "VWord16 (V Word16)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VWord16",
          "package": "atom",
          "partial": "VWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VWord32",
          "package": "atom",
          "signature": "VWord32 (V Word32)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VWord32",
          "package": "atom",
          "partial": "VWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VWord64",
          "package": "atom",
          "signature": "VWord64 (V Word64)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VWord64",
          "package": "atom",
          "partial": "VWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "VWord8",
          "package": "atom",
          "signature": "VWord8 (V Word8)",
          "source": "src/Language-Atom-Expressions.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "VWord8",
          "package": "atom",
          "partial": "VWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:VWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Word16",
          "package": "atom",
          "signature": "Word16",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Word16",
          "package": "atom",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Word32",
          "package": "atom",
          "signature": "Word32",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Word32",
          "package": "atom",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Word64",
          "package": "atom",
          "signature": "Word64",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Word64",
          "package": "atom",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "Word8",
          "package": "atom",
          "signature": "Word8",
          "source": "src/Language-Atom-Expressions.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "Word8",
          "package": "atom",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the predicate is true for all elements.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "all_",
          "package": "atom",
          "signature": "(a -\u003e E Bool) -\u003e [a] -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#all_",
          "type": "function"
        },
        "index": {
          "description": "True iff the predicate is true for all elements",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "all_",
          "normalized": "(a-\u003eE Bool)-\u003e[a]-\u003eE Bool",
          "package": "atom",
          "signature": "(a-\u003eE Bool)-\u003e[a]-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:all_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjunction of a E Bool list.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "and_",
          "package": "atom",
          "signature": "[E Bool] -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#and_",
          "type": "function"
        },
        "index": {
          "description": "The conjunction of Bool list",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "and_",
          "normalized": "[E Bool]-\u003eE Bool",
          "package": "atom",
          "signature": "[E Bool]-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:and_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue iff the predicate is true for any element.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "any_",
          "package": "atom",
          "signature": "(a -\u003e E Bool) -\u003e [a] -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#any_",
          "type": "function"
        },
        "index": {
          "description": "True iff the predicate is true for any element",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "any_",
          "normalized": "(a-\u003eE Bool)-\u003e[a]-\u003eE Bool",
          "package": "atom",
          "signature": "(a-\u003eE Bool)-\u003e[a]-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:any_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of bits in the type of the argument.  The actual\n        value of the argument is ignored.  The function \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e is\n        undefined for types that do not have a fixed bitsize, like \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "bitSize",
          "package": "atom",
          "signature": "a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Return the number of bits in the type of the argument The actual value of the argument is ignored The function bitSize is undefined for types that do not have fixed bitsize like Integer",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "bitSize",
          "normalized": "a-\u003eInt",
          "package": "atom",
          "partial": "Size",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:bitSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "bytes",
          "package": "atom",
          "signature": "a -\u003e Int",
          "source": "src/Language-Atom-Expressions.html#bytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "bytes",
          "normalized": "a-\u003eInt",
          "package": "atom",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse all the bits in the argument \n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "complement",
          "package": "atom",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Reverse all the bits in the argument",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "complement",
          "normalized": "a-\u003ea",
          "package": "atom",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "constant",
          "package": "atom",
          "signature": "a -\u003e Const",
          "source": "src/Language-Atom-Expressions.html#constant",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "constant",
          "normalized": "a-\u003eConst",
          "package": "atom",
          "signature": "a-\u003eConst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision, where the C code is instrumented with a runtime check to ensure\n the divisor does not equal \u003ccode\u003e0\u003c/code\u003e.  If it is equal to \u003ccode\u003e0\u003c/code\u003e, the 3rd argument is a\n user-supplied non-zero divsor.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "div0_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#div0_",
          "type": "function"
        },
        "index": {
          "description": "Division where the code is instrumented with runtime check to ensure the divisor does not equal If it is equal to the rd argument is user-supplied non-zero divsor",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "div0_",
          "normalized": "E a-\u003eE a-\u003ea-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003ea-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:div0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision.  If both the dividend and divisor are constants, a compile-time\n check is made for divide-by-zero.  Otherwise, if the divisor ever evaluates\n to \u003ccode\u003e0\u003c/code\u003e, a runtime exception will occur, even if the division occurs within\n the scope of a \u003ccode\u003econd\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emux\u003c/a\u003e\u003c/code\u003e that tests for \u003ccode\u003e0\u003c/code\u003e (because Atom generates\n deterministic-time code, every branch of a \u003ccode\u003econd\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emux\u003c/a\u003e\u003c/code\u003e is executed).\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "div_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#div_",
          "type": "function"
        },
        "index": {
          "description": "Division If both the dividend and divisor are constants compile-time check is made for divide-by-zero Otherwise if the divisor ever evaluates to runtime exception will occur even if the division occurs within the scope of cond or mux that tests for because Atom generates deterministic-time code every branch of cond or mux is executed",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "div_",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:div_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "eType",
          "package": "atom",
          "signature": "E a -\u003e Type",
          "source": "src/Language-Atom-Expressions.html#eType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "eType",
          "normalized": "E a-\u003eType",
          "package": "atom",
          "partial": "Type",
          "signature": "E a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:eType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "expression",
          "package": "atom",
          "signature": "E a -\u003e Expression",
          "source": "src/Language-Atom-Expressions.html#expression",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "expression",
          "normalized": "E a-\u003eExpression",
          "package": "atom",
          "signature": "E a-\u003eExpression",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFalse term.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "false",
          "package": "atom",
          "signature": "E Bool",
          "source": "src/Language-Atom-Expressions.html#false",
          "type": "function"
        },
        "index": {
          "description": "False term",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "false",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "imply",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#imply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "imply",
          "normalized": "E Bool-\u003eE Bool-\u003eE Bool",
          "package": "atom",
          "signature": "E Bool-\u003eE Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:imply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is a signed type.  The actual\n        value of the argument is ignored \n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "isSigned",
          "package": "atom",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Return True if the argument is signed type The actual value of the argument is ignored",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "isSigned",
          "normalized": "a-\u003eBool",
          "package": "atom",
          "partial": "Signed",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:isSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimits between min and max.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "limit",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#limit",
          "type": "function"
        },
        "index": {
          "description": "Limits between min and max",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "limit",
          "normalized": "E a-\u003eE a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the maximum of two numbers.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "max_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#max_",
          "type": "function"
        },
        "index": {
          "description": "Returns the maximum of two numbers",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "max_",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:max_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the maximum of a list of numbers.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "maximum_",
          "package": "atom",
          "signature": "[E a] -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#maximum_",
          "type": "function"
        },
        "index": {
          "description": "Returns the maximum of list of numbers",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "maximum_",
          "normalized": "[E a]-\u003eE a",
          "package": "atom",
          "signature": "[E a]-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:maximum_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum of two numbers.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "min_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#min_",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum of two numbers",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "min_",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:min_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum of a list of numbers.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "minimum_",
          "package": "atom",
          "signature": "[E a] -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#minimum_",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum of list of numbers",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "minimum_",
          "normalized": "[E a]-\u003eE a",
          "package": "atom",
          "signature": "[E a]-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:minimum_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulus, where the C code is instrumented with a runtime check to ensure\n the modulus does not equal \u003ccode\u003e0\u003c/code\u003e.  If it is equal to \u003ccode\u003e0\u003c/code\u003e, the 3rd argument is\n a user-supplied non-zero divsor.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "mod0_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#mod0_",
          "type": "function"
        },
        "index": {
          "description": "Modulus where the code is instrumented with runtime check to ensure the modulus does not equal If it is equal to the rd argument is user-supplied non-zero divsor",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "mod0_",
          "normalized": "E a-\u003eE a-\u003ea-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003ea-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:mod0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulo.  If both the dividend and modulus are constants, a compile-time\n check is made for divide-by-zero.  Otherwise, if the modulus ever evaluates\n to \u003ccode\u003e0\u003c/code\u003e, a runtime exception will occur, even if the division occurs within\n the scope of a \u003ccode\u003econd\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emux\u003c/a\u003e\u003c/code\u003e that tests for \u003ccode\u003e0\u003c/code\u003e (because Atom generates\n deterministic-time code, every branch of a \u003ccode\u003econd\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emux\u003c/a\u003e\u003c/code\u003e is executed).\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "mod_",
          "package": "atom",
          "signature": "E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#mod_",
          "type": "function"
        },
        "index": {
          "description": "Modulo If both the dividend and modulus are constants compile-time check is made for divide-by-zero Otherwise if the modulus ever evaluates to runtime exception will occur even if the division occurs within the scope of cond or mux that tests for because Atom generates deterministic-time code every branch of cond or mux is executed",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "mod_",
          "normalized": "E a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:mod_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional expression.  Note, both branches are evaluated!\n\u003c/p\u003e\u003cpre\u003e mux test onTrue onFalse\n\u003c/pre\u003e",
          "module": "Language.Atom.Expressions",
          "name": "mux",
          "package": "atom",
          "signature": "E Bool -\u003e E a -\u003e E a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#mux",
          "type": "function"
        },
        "index": {
          "description": "Conditional expression Note both branches are evaluated mux test onTrue onFalse",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "mux",
          "normalized": "E Bool-\u003eE a-\u003eE a-\u003eE a",
          "package": "atom",
          "signature": "E Bool-\u003eE a-\u003eE a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:mux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical negation.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "not_",
          "package": "atom",
          "signature": "E Bool -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#not_",
          "type": "function"
        },
        "index": {
          "description": "Logical negation",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "not_",
          "normalized": "E Bool-\u003eE Bool",
          "package": "atom",
          "signature": "E Bool-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:not_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe disjunction of a E Bool list.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "or_",
          "package": "atom",
          "signature": "[E Bool] -\u003e E Bool",
          "source": "src/Language-Atom-Expressions.html#or_",
          "type": "function"
        },
        "index": {
          "description": "The disjunction of Bool list",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "or_",
          "normalized": "[E Bool]-\u003eE Bool",
          "package": "atom",
          "signature": "[E Bool]-\u003eE Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:or_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "rawBits",
          "package": "atom",
          "signature": "E a -\u003e E Word64",
          "source": "src/Language-Atom-Expressions.html#rawBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "rawBits",
          "normalized": "E a-\u003eE Word",
          "package": "atom",
          "partial": "Bits",
          "signature": "E a-\u003eE Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:rawBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise left-rotation.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "rol",
          "package": "atom",
          "signature": "E a -\u003e E n -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#rol",
          "type": "function"
        },
        "index": {
          "description": "Bitwise left-rotation",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "rol",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE n-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:rol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise right-rotation.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "ror",
          "package": "atom",
          "signature": "E a -\u003e E n -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#ror",
          "type": "function"
        },
        "index": {
          "description": "Bitwise right-rotation",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ror",
          "normalized": "E a-\u003eE b-\u003eE a",
          "package": "atom",
          "signature": "E a-\u003eE n-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue term.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "true",
          "package": "atom",
          "signature": "E Bool",
          "source": "src/Language-Atom-Expressions.html#true",
          "type": "function"
        },
        "index": {
          "description": "True term",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "true",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "typeOf",
          "package": "atom",
          "signature": "a -\u003e Type",
          "source": "src/Language-Atom-Expressions.html#typeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "typeOf",
          "normalized": "a-\u003eType",
          "package": "atom",
          "partial": "Of",
          "signature": "a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "uand",
          "package": "atom",
          "signature": "UE -\u003e UE -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#uand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "uand",
          "normalized": "UE-\u003eUE-\u003eUE",
          "package": "atom",
          "signature": "UE-\u003eUE-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:uand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "ubool",
          "package": "atom",
          "signature": "Bool -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#ubool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ubool",
          "normalized": "Bool-\u003eUE",
          "package": "atom",
          "signature": "Bool-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ubool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an typed expression (E a) to an untyped expression (UE).\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "ue",
          "package": "atom",
          "signature": "E a -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#ue",
          "type": "function"
        },
        "index": {
          "description": "Converts an typed expression to an untyped expression UE",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ue",
          "normalized": "E a-\u003eUE",
          "package": "atom",
          "signature": "E a-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "ueq",
          "package": "atom",
          "signature": "UE -\u003e UE -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#ueq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "ueq",
          "normalized": "UE-\u003eUE-\u003eUE",
          "package": "atom",
          "signature": "UE-\u003eUE-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:ueq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "umux",
          "package": "atom",
          "signature": "UE -\u003e UE -\u003e UE -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#umux",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "umux",
          "normalized": "UE-\u003eUE-\u003eUE-\u003eUE",
          "package": "atom",
          "signature": "UE-\u003eUE-\u003eUE-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:umux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "unot",
          "package": "atom",
          "signature": "UE -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#unot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "unot",
          "normalized": "UE-\u003eUE",
          "package": "atom",
          "signature": "UE-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:unot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "uor",
          "package": "atom",
          "signature": "UE -\u003e UE -\u003e UE",
          "source": "src/Language-Atom-Expressions.html#uor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "uor",
          "normalized": "UE-\u003eUE-\u003eUE",
          "package": "atom",
          "signature": "UE-\u003eUE-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:uor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "uv",
          "package": "atom",
          "signature": "V a -\u003e UV",
          "source": "src/Language-Atom-Expressions.html#uv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "uv",
          "normalized": "V a-\u003eUV",
          "package": "atom",
          "signature": "V a-\u003eUV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:uv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of a \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "value",
          "package": "atom",
          "signature": "V a -\u003e E a",
          "source": "src/Language-Atom-Expressions.html#value",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "value",
          "normalized": "V a-\u003eE a",
          "package": "atom",
          "signature": "V a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "variable",
          "package": "atom",
          "signature": "V a -\u003e Variable",
          "source": "src/Language-Atom-Expressions.html#variable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "variable",
          "normalized": "V a-\u003eVariable",
          "package": "atom",
          "signature": "V a-\u003eVariable",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Expressions",
          "name": "width",
          "package": "atom",
          "signature": "a -\u003e Int",
          "source": "src/Language-Atom-Expressions.html#width",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "width",
          "normalized": "a-\u003eInt",
          "package": "atom",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"xor\"\n\u003c/p\u003e",
          "module": "Language.Atom.Expressions",
          "name": "xor",
          "package": "atom",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Bitwise xor",
          "hierarchy": "Language Atom Expressions",
          "module": "Language.Atom.Expressions",
          "name": "xor",
          "normalized": "a-\u003ea-\u003ea",
          "package": "atom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Expressions.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Atom language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Language",
          "name": "Language",
          "package": "atom",
          "source": "src/Language-Atom-Language.html",
          "type": "module"
        },
        "index": {
          "description": "The Atom language",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "Language",
          "package": "atom",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Language",
          "name": "Assign",
          "package": "atom",
          "source": "src/Language-Atom-Language.html#Assign",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "Assign",
          "package": "atom",
          "partial": "Assign",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#t:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Atom monad captures variable and transition rule declarations.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "Atom",
          "package": "atom",
          "source": "src/Language-Atom-Language.html#Atom",
          "type": "type"
        },
        "index": {
          "description": "The Atom monad captures variable and transition rule declarations",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "Atom",
          "package": "atom",
          "partial": "Atom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "Name",
          "package": "atom",
          "source": "src/Language-Atom-Elaboration.html#Name",
          "type": "type"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "Name",
          "package": "atom",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign an \u003ccode\u003e\u003ca\u003eE\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "(\u003c==)",
          "package": "atom",
          "signature": "V a -\u003e E a -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#%3C%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "Assign an to",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "(\u003c==) \u003c==",
          "normalized": "V a-\u003eE a-\u003eAtom()",
          "package": "atom",
          "signature": "V a-\u003eE a-\u003eAtom()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:-60--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclares an action.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "action",
          "package": "atom",
          "signature": "([String] -\u003e String) -\u003e [UE] -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#action",
          "type": "function"
        },
        "index": {
          "description": "Declares an action",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "action",
          "normalized": "([String]-\u003eString)-\u003e[UE]-\u003eAtom()",
          "package": "atom",
          "signature": "([String]-\u003eString)-\u003e[UE]-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn assertions checks that an E Bool is true.  Assertions are checked\n between the execution of every rule.  Parent enabling conditions can\n disable assertions, but period and phase constraints do not.  Assertion\n names should be globally unique.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "assert",
          "package": "atom",
          "signature": "Name -\u003e E Bool -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#assert",
          "type": "function"
        },
        "index": {
          "description": "An assertions checks that an Bool is true Assertions are checked between the execution of every rule Parent enabling conditions can disable assertions but period and phase constraints do not Assertion names should be globally unique",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "assert",
          "normalized": "Name-\u003eE Bool-\u003eAtom()",
          "package": "atom",
          "signature": "Name-\u003eE Bool-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication assertions.  Creates an implicit coverage point for the precondition.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "assertImply",
          "package": "atom",
          "signature": "Name -\u003e E Bool -\u003e E Bool -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#assertImply",
          "type": "function"
        },
        "index": {
          "description": "Implication assertions Creates an implicit coverage point for the precondition",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "assertImply",
          "normalized": "Name-\u003eE Bool-\u003eE Bool-\u003eAtom()",
          "package": "atom",
          "partial": "Imply",
          "signature": "Name-\u003eE Bool-\u003eE Bool-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:assertImply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a hierarchical node, where each node could be a atomic rule.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "atom",
          "package": "atom",
          "signature": "Name -\u003e Atom a -\u003e Atom a",
          "source": "src/Language-Atom-Language.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Creates hierarchical node where each node could be atomic rule",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "atom",
          "normalized": "Name-\u003eAtom a-\u003eAtom a",
          "package": "atom",
          "signature": "Name-\u003eAtom a-\u003eAtom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal boolean variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "bool",
          "package": "atom",
          "signature": "Name -\u003e Bool -\u003e Atom (V Bool)",
          "source": "src/Language-Atom-Language.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Local boolean variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "bool",
          "normalized": "Name-\u003eBool-\u003eAtom(V Bool)",
          "package": "atom",
          "signature": "Name-\u003eBool-\u003eAtom(V Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal boolean variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "bool'",
          "package": "atom",
          "signature": "Name -\u003e V Bool",
          "source": "src/Language-Atom-Language.html#bool%27",
          "type": "function"
        },
        "index": {
          "description": "External boolean variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "bool'",
          "normalized": "Name-\u003eV Bool",
          "package": "atom",
          "signature": "Name-\u003eV Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:bool-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls an external C function of type 'void f(void)'.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "call",
          "package": "atom",
          "signature": "Name -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#call",
          "type": "function"
        },
        "index": {
          "description": "Calls an external function of type void void",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "call",
          "normalized": "Name-\u003eAtom()",
          "package": "atom",
          "signature": "Name-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to the 64-bit free running clock.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "clock",
          "package": "atom",
          "signature": "E Word64",
          "source": "src/Language-Atom-Language.html#clock",
          "type": "function"
        },
        "index": {
          "description": "Reference to the bit free running clock",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "clock",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an enabling condition to an atom subtree of rules.\n This condition must be true before any rules in hierarchy\n are allowed to execute.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "cond",
          "package": "atom",
          "signature": "E Bool -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#cond",
          "type": "function"
        },
        "index": {
          "description": "Adds an enabling condition to an atom subtree of rules This condition must be true before any rules in hierarchy are allowed to execute",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "cond",
          "normalized": "E Bool-\u003eAtom()",
          "package": "atom",
          "signature": "E Bool-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functional coverage point tracks if an event has occured (true).\n   Coverage points are checked at the same time as assertions.\n   Coverage names should be globally unique.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "cover",
          "package": "atom",
          "signature": "Name -\u003e E Bool -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#cover",
          "type": "function"
        },
        "index": {
          "description": "functional coverage point tracks if an event has occured true Coverage points are checked at the same time as assertions Coverage names should be globally unique",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "cover",
          "normalized": "Name-\u003eE Bool-\u003eAtom()",
          "package": "atom",
          "signature": "Name-\u003eE Bool-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:cover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrements a NumE \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "decr",
          "package": "atom",
          "signature": "V a -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#decr",
          "type": "function"
        },
        "index": {
          "description": "Decrements NumE",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "decr",
          "normalized": "V a-\u003eAtom()",
          "package": "atom",
          "signature": "V a-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal double variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "double",
          "package": "atom",
          "signature": "Name -\u003e Double -\u003e Atom (V Double)",
          "source": "src/Language-Atom-Language.html#double",
          "type": "function"
        },
        "index": {
          "description": "Local double variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "double",
          "normalized": "Name-\u003eDouble-\u003eAtom(V Double)",
          "package": "atom",
          "signature": "Name-\u003eDouble-\u003eAtom(V Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal double variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "double'",
          "package": "atom",
          "signature": "Name -\u003e V Double",
          "source": "src/Language-Atom-Language.html#double%27",
          "type": "function"
        },
        "index": {
          "description": "External double variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "double'",
          "normalized": "Name-\u003eV Double",
          "package": "atom",
          "signature": "Name-\u003eV Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:double-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures an atom is scheduled only at phase \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "exactPhase",
          "package": "atom",
          "signature": "Int -\u003e Atom a -\u003e Atom a",
          "source": "src/Language-Atom-Language.html#exactPhase",
          "type": "function"
        },
        "index": {
          "description": "Ensures an atom is scheduled only at phase",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "exactPhase",
          "normalized": "Int-\u003eAtom a-\u003eAtom a",
          "package": "atom",
          "partial": "Phase",
          "signature": "Int-\u003eAtom a-\u003eAtom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:exactPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal float variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "float",
          "package": "atom",
          "signature": "Name -\u003e Float -\u003e Atom (V Float)",
          "source": "src/Language-Atom-Language.html#float",
          "type": "function"
        },
        "index": {
          "description": "Local float variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "float",
          "normalized": "Name-\u003eFloat-\u003eAtom(V Float)",
          "package": "atom",
          "signature": "Name-\u003eFloat-\u003eAtom(V Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal float variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "float'",
          "package": "atom",
          "signature": "Name -\u003e V Float",
          "source": "src/Language-Atom-Language.html#float%27",
          "type": "function"
        },
        "index": {
          "description": "External float variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "float'",
          "normalized": "Name-\u003eV Float",
          "package": "atom",
          "signature": "Name-\u003eV Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:float-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the execution period of the current scope.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "getPeriod",
          "package": "atom",
          "signature": "Atom Int",
          "source": "src/Language-Atom-Language.html#getPeriod",
          "type": "function"
        },
        "index": {
          "description": "Returns the execution period of the current scope",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "getPeriod",
          "package": "atom",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:getPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the phase of the current scope.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "getPhase",
          "package": "atom",
          "signature": "Atom Int",
          "source": "src/Language-Atom-Language.html#getPhase",
          "type": "function"
        },
        "index": {
          "description": "Returns the phase of the current scope",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "getPhase",
          "package": "atom",
          "partial": "Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:getPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements a NumE \u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "incr",
          "package": "atom",
          "signature": "V a -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#incr",
          "type": "function"
        },
        "index": {
          "description": "Increments NumE",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "incr",
          "normalized": "V a-\u003eAtom()",
          "package": "atom",
          "signature": "V a-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal int16 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int16",
          "package": "atom",
          "signature": "Name -\u003e Int16 -\u003e Atom (V Int16)",
          "source": "src/Language-Atom-Language.html#int16",
          "type": "function"
        },
        "index": {
          "description": "Local int16 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int16",
          "normalized": "Name-\u003eInt-\u003eAtom(V Int)",
          "package": "atom",
          "signature": "Name-\u003eInt-\u003eAtom(V Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal int16 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int16'",
          "package": "atom",
          "signature": "Name -\u003e V Int16",
          "source": "src/Language-Atom-Language.html#int16%27",
          "type": "function"
        },
        "index": {
          "description": "External int16 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int16'",
          "normalized": "Name-\u003eV Int",
          "package": "atom",
          "signature": "Name-\u003eV Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int16-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal int32 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int32",
          "package": "atom",
          "signature": "Name -\u003e Int32 -\u003e Atom (V Int32)",
          "source": "src/Language-Atom-Language.html#int32",
          "type": "function"
        },
        "index": {
          "description": "Local int32 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int32",
          "normalized": "Name-\u003eInt-\u003eAtom(V Int)",
          "package": "atom",
          "signature": "Name-\u003eInt-\u003eAtom(V Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal int32 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int32'",
          "package": "atom",
          "signature": "Name -\u003e V Int32",
          "source": "src/Language-Atom-Language.html#int32%27",
          "type": "function"
        },
        "index": {
          "description": "External int32 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int32'",
          "normalized": "Name-\u003eV Int",
          "package": "atom",
          "signature": "Name-\u003eV Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int32-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal int64 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int64",
          "package": "atom",
          "signature": "Name -\u003e Int64 -\u003e Atom (V Int64)",
          "source": "src/Language-Atom-Language.html#int64",
          "type": "function"
        },
        "index": {
          "description": "Local int64 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int64",
          "normalized": "Name-\u003eInt-\u003eAtom(V Int)",
          "package": "atom",
          "signature": "Name-\u003eInt-\u003eAtom(V Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal int64 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int64'",
          "package": "atom",
          "signature": "Name -\u003e V Int64",
          "source": "src/Language-Atom-Language.html#int64%27",
          "type": "function"
        },
        "index": {
          "description": "External int64 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int64'",
          "normalized": "Name-\u003eV Int",
          "package": "atom",
          "signature": "Name-\u003eV Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int64-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal int8 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int8",
          "package": "atom",
          "signature": "Name -\u003e Int8 -\u003e Atom (V Int8)",
          "source": "src/Language-Atom-Language.html#int8",
          "type": "function"
        },
        "index": {
          "description": "Local int8 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int8",
          "normalized": "Name-\u003eInt-\u003eAtom(V Int)",
          "package": "atom",
          "signature": "Name-\u003eInt-\u003eAtom(V Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal int8 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "int8'",
          "package": "atom",
          "signature": "Name -\u003e V Int8",
          "source": "src/Language-Atom-Language.html#int8%27",
          "type": "function"
        },
        "index": {
          "description": "External int8 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "int8'",
          "normalized": "Name-\u003eV Int",
          "package": "atom",
          "signature": "Name-\u003eV Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:int8-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "liftIO",
          "package": "atom",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "atom",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule coverage information.  (current coverage index, coverage data)\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "nextCoverage",
          "package": "atom",
          "signature": "Atom (E Word32, E Word32)",
          "source": "src/Language-Atom-Language.html#nextCoverage",
          "type": "function"
        },
        "index": {
          "description": "Rule coverage information current coverage index coverage data",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "nextCoverage",
          "normalized": "Atom(E Word,E Word)",
          "package": "atom",
          "partial": "Coverage",
          "signature": "Atom(E Word,E Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:nextCoverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current atom hierarchical path.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "path",
          "package": "atom",
          "signature": "Atom String",
          "source": "src/Language-Atom-Language.html#path",
          "type": "function"
        },
        "index": {
          "description": "Returns the current atom hierarchical path",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "path",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the period of execution of sub rules as a factor of the base rate of the system.\n   Rule period is bound by the closest period assertion.  For example:\n\u003c/p\u003e\u003cpre\u003e period 10 $ period 2 a   -- Rules in 'a' have a period of 2, not 10.\n\u003c/pre\u003e",
          "module": "Language.Atom.Language",
          "name": "period",
          "package": "atom",
          "signature": "Int -\u003e Atom a -\u003e Atom a",
          "source": "src/Language-Atom-Language.html#period",
          "type": "function"
        },
        "index": {
          "description": "Defines the period of execution of sub rules as factor of the base rate of the system Rule period is bound by the closest period assertion For example period period Rules in have period of not",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "period",
          "normalized": "Int-\u003eAtom a-\u003eAtom a",
          "package": "atom",
          "signature": "Int-\u003eAtom a-\u003eAtom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the earliest phase within the period at which the rule should\n execute; the scheduler attempt to find an optimal phase from 0 \u003c= \u003ccode\u003en\u003c/code\u003e \u003c\n period (thus, the \u003ccode\u003e\u003ca\u003ephase\u003c/a\u003e\u003c/code\u003e must be at least zero and less than the current\n \u003ccode\u003e\u003ca\u003eperiod\u003c/a\u003e\u003c/code\u003e.).\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "phase",
          "package": "atom",
          "signature": "Int -\u003e Atom a -\u003e Atom a",
          "source": "src/Language-Atom-Language.html#phase",
          "type": "function"
        },
        "index": {
          "description": "Defines the earliest phase within the period at which the rule should execute the scheduler attempt to find an optimal phase from period thus the phase must be at least zero and less than the current period",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "phase",
          "normalized": "Int-\u003eAtom a-\u003eAtom a",
          "package": "atom",
          "signature": "Int-\u003eAtom a-\u003eAtom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclares a probe.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "probe",
          "package": "atom",
          "signature": "Name -\u003e E a -\u003e Atom ()",
          "source": "src/Language-Atom-Language.html#probe",
          "type": "function"
        },
        "index": {
          "description": "Declares probe",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "probe",
          "normalized": "Name-\u003eE a-\u003eAtom()",
          "package": "atom",
          "signature": "Name-\u003eE a-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:probe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches all declared probes to current design point.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "probes",
          "package": "atom",
          "signature": "Atom [(String, UE)]",
          "source": "src/Language-Atom-Language.html#probes",
          "type": "function"
        },
        "index": {
          "description": "Fetches all declared probes to current design point",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "probes",
          "normalized": "Atom[(String,UE)]",
          "package": "atom",
          "signature": "Atom[(String,UE)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:probes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal word16 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word16",
          "package": "atom",
          "signature": "Name -\u003e Word16 -\u003e Atom (V Word16)",
          "source": "src/Language-Atom-Language.html#word16",
          "type": "function"
        },
        "index": {
          "description": "Local word16 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word16",
          "normalized": "Name-\u003eWord-\u003eAtom(V Word)",
          "package": "atom",
          "signature": "Name-\u003eWord-\u003eAtom(V Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal word16 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word16'",
          "package": "atom",
          "signature": "Name -\u003e V Word16",
          "source": "src/Language-Atom-Language.html#word16%27",
          "type": "function"
        },
        "index": {
          "description": "External word16 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word16'",
          "normalized": "Name-\u003eV Word",
          "package": "atom",
          "signature": "Name-\u003eV Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word16-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal word32 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word32",
          "package": "atom",
          "signature": "Name -\u003e Word32 -\u003e Atom (V Word32)",
          "source": "src/Language-Atom-Language.html#word32",
          "type": "function"
        },
        "index": {
          "description": "Local word32 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word32",
          "normalized": "Name-\u003eWord-\u003eAtom(V Word)",
          "package": "atom",
          "signature": "Name-\u003eWord-\u003eAtom(V Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal word32 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word32'",
          "package": "atom",
          "signature": "Name -\u003e V Word32",
          "source": "src/Language-Atom-Language.html#word32%27",
          "type": "function"
        },
        "index": {
          "description": "External word32 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word32'",
          "normalized": "Name-\u003eV Word",
          "package": "atom",
          "signature": "Name-\u003eV Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word32-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal word64 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word64",
          "package": "atom",
          "signature": "Name -\u003e Word64 -\u003e Atom (V Word64)",
          "source": "src/Language-Atom-Language.html#word64",
          "type": "function"
        },
        "index": {
          "description": "Local word64 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word64",
          "normalized": "Name-\u003eWord-\u003eAtom(V Word)",
          "package": "atom",
          "signature": "Name-\u003eWord-\u003eAtom(V Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal word64 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word64'",
          "package": "atom",
          "signature": "Name -\u003e V Word64",
          "source": "src/Language-Atom-Language.html#word64%27",
          "type": "function"
        },
        "index": {
          "description": "External word64 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word64'",
          "normalized": "Name-\u003eV Word",
          "package": "atom",
          "signature": "Name-\u003eV Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word64-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal word8 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word8",
          "package": "atom",
          "signature": "Name -\u003e Word8 -\u003e Atom (V Word8)",
          "source": "src/Language-Atom-Language.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Local word8 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word8",
          "normalized": "Name-\u003eWord-\u003eAtom(V Word)",
          "package": "atom",
          "signature": "Name-\u003eWord-\u003eAtom(V Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal word8 variable declaration.\n\u003c/p\u003e",
          "module": "Language.Atom.Language",
          "name": "word8'",
          "package": "atom",
          "signature": "Name -\u003e V Word8",
          "source": "src/Language-Atom-Language.html#word8%27",
          "type": "function"
        },
        "index": {
          "description": "External word8 variable declaration",
          "hierarchy": "Language Atom Language",
          "module": "Language.Atom.Language",
          "name": "word8'",
          "normalized": "Name-\u003eV Word",
          "package": "atom",
          "signature": "Name-\u003eV Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Language.html#v:word8-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtom rule scheduling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.Scheduling",
          "name": "Scheduling",
          "package": "atom",
          "source": "src/Language-Atom-Scheduling.html",
          "type": "module"
        },
        "index": {
          "description": "Atom rule scheduling",
          "hierarchy": "Language Atom Scheduling",
          "module": "Language.Atom.Scheduling",
          "name": "Scheduling",
          "package": "atom",
          "partial": "Scheduling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Scheduling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Scheduling",
          "name": "Schedule",
          "package": "atom",
          "source": "src/Language-Atom-Scheduling.html#Schedule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Atom Scheduling",
          "module": "Language.Atom.Scheduling",
          "name": "Schedule",
          "package": "atom",
          "partial": "Schedule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Scheduling.html#t:Schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Scheduling",
          "name": "schedule",
          "package": "atom",
          "signature": "[Rule] -\u003e UeMap -\u003e Schedule",
          "source": "src/Language-Atom-Scheduling.html#schedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Scheduling",
          "module": "Language.Atom.Scheduling",
          "name": "schedule",
          "normalized": "[Rule]-\u003eUeMap-\u003eSchedule",
          "package": "atom",
          "signature": "[Rule]-\u003eUeMap-\u003eSchedule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Scheduling.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSharing for UEs, based on IntMaps.  The idea is to share subexpressions of \u003ccode\u003e\u003ca\u003eUE\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom.UeMap",
          "name": "UeMap",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html",
          "type": "module"
        },
        "index": {
          "description": "Sharing for UEs based on IntMaps The idea is to share subexpressions of UE",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "UeMap",
          "package": "atom",
          "partial": "Ue Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "Hash",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html#Hash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "Hash",
          "package": "atom",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUntyped variables map.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "MUV",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html#MUV",
          "type": "data"
        },
        "index": {
          "description": "Untyped variables map",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUV",
          "package": "atom",
          "partial": "MUV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#t:MUV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003e\u003ca\u003eUE\u003c/a\u003e\u003c/code\u003es --- the elements in the sharing structure.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "UeElem",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to UE the elements in the sharing structure",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "UeElem",
          "package": "atom",
          "partial": "Ue Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#t:UeElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entry in the Map.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "UeMap",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html#UeMap",
          "type": "type"
        },
        "index": {
          "description": "An entry in the Map",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "UeMap",
          "package": "atom",
          "partial": "Ue Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#t:UeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapped in the State Monad.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "UeState",
          "package": "atom",
          "source": "src/Language-Atom-UeMap.html#UeState",
          "type": "type"
        },
        "index": {
          "description": "Wrapped in the State Monad",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "UeState",
          "package": "atom",
          "partial": "Ue State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#t:UeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAcos",
          "package": "atom",
          "signature": "MUAcos !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAcos",
          "package": "atom",
          "partial": "MUAcos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAcosh",
          "package": "atom",
          "signature": "MUAcosh !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAcosh",
          "package": "atom",
          "partial": "MUAcosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAcosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAdd",
          "package": "atom",
          "signature": "MUAdd !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAdd",
          "package": "atom",
          "partial": "MUAdd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAnd",
          "package": "atom",
          "signature": "MUAnd [Hash]",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAnd",
          "normalized": "MUAnd[Hash]",
          "package": "atom",
          "partial": "MUAnd",
          "signature": "MUAnd[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAsin",
          "package": "atom",
          "signature": "MUAsin !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAsin",
          "package": "atom",
          "partial": "MUAsin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAsinh",
          "package": "atom",
          "signature": "MUAsinh !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAsinh",
          "package": "atom",
          "partial": "MUAsinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAsinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAtan",
          "package": "atom",
          "signature": "MUAtan !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAtan",
          "package": "atom",
          "partial": "MUAtan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAtan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUAtanh",
          "package": "atom",
          "signature": "MUAtanh !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUAtanh",
          "package": "atom",
          "partial": "MUAtanh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUAtanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUB2D",
          "package": "atom",
          "signature": "MUB2D !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUB2D",
          "package": "atom",
          "partial": "MUB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUB2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUB2F",
          "package": "atom",
          "signature": "MUB2F !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUB2F",
          "package": "atom",
          "partial": "MUB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUB2F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWAnd",
          "package": "atom",
          "signature": "MUBWAnd !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWAnd",
          "package": "atom",
          "partial": "MUBWAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWNot",
          "package": "atom",
          "signature": "MUBWNot !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWNot",
          "package": "atom",
          "partial": "MUBWNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWOr",
          "package": "atom",
          "signature": "MUBWOr !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWOr",
          "package": "atom",
          "partial": "MUBWOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWShiftL",
          "package": "atom",
          "signature": "MUBWShiftL !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWShiftL",
          "package": "atom",
          "partial": "MUBWShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWShiftR",
          "package": "atom",
          "signature": "MUBWShiftR !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWShiftR",
          "package": "atom",
          "partial": "MUBWShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUBWXor",
          "package": "atom",
          "signature": "MUBWXor !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUBWXor",
          "package": "atom",
          "partial": "MUBWXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUBWXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUCast",
          "package": "atom",
          "signature": "MUCast !Type !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUCast",
          "package": "atom",
          "partial": "MUCast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUConst",
          "package": "atom",
          "signature": "MUConst !Const",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUConst",
          "package": "atom",
          "partial": "MUConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUCos",
          "package": "atom",
          "signature": "MUCos !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUCos",
          "package": "atom",
          "partial": "MUCos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUCos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUCosh",
          "package": "atom",
          "signature": "MUCosh !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUCosh",
          "package": "atom",
          "partial": "MUCosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUCosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUD2B",
          "package": "atom",
          "signature": "MUD2B !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUD2B",
          "package": "atom",
          "partial": "MUD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUD2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUDiv",
          "package": "atom",
          "signature": "MUDiv !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUDiv",
          "package": "atom",
          "partial": "MUDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUEq",
          "package": "atom",
          "signature": "MUEq !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUEq",
          "package": "atom",
          "partial": "MUEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUExp",
          "package": "atom",
          "signature": "MUExp !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUExp",
          "package": "atom",
          "partial": "MUExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUF2B",
          "package": "atom",
          "signature": "MUF2B !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUF2B",
          "package": "atom",
          "partial": "MUF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUF2B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MULog",
          "package": "atom",
          "signature": "MULog !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MULog",
          "package": "atom",
          "partial": "MULog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MULog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MULt",
          "package": "atom",
          "signature": "MULt !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MULt",
          "package": "atom",
          "partial": "MULt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MULt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUMod",
          "package": "atom",
          "signature": "MUMod !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUMod",
          "package": "atom",
          "partial": "MUMod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUMul",
          "package": "atom",
          "signature": "MUMul !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUMul",
          "package": "atom",
          "partial": "MUMul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUMux",
          "package": "atom",
          "signature": "MUMux !Hash !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUMux",
          "package": "atom",
          "partial": "MUMux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUMux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUNot",
          "package": "atom",
          "signature": "MUNot !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUNot",
          "package": "atom",
          "partial": "MUNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUPi",
          "package": "atom",
          "signature": "MUPi",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUPi",
          "package": "atom",
          "partial": "MUPi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUPow",
          "package": "atom",
          "signature": "MUPow !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUPow",
          "package": "atom",
          "partial": "MUPow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUSin",
          "package": "atom",
          "signature": "MUSin !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUSin",
          "package": "atom",
          "partial": "MUSin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUSin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUSinh",
          "package": "atom",
          "signature": "MUSinh !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUSinh",
          "package": "atom",
          "partial": "MUSinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUSinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUSqrt",
          "package": "atom",
          "signature": "MUSqrt !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUSqrt",
          "package": "atom",
          "partial": "MUSqrt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUSub",
          "package": "atom",
          "signature": "MUSub !Hash !Hash",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUSub",
          "package": "atom",
          "partial": "MUSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUV",
          "package": "atom",
          "signature": "MUV Int String Const",
          "source": "src/Language-Atom-UeMap.html#MUV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUV",
          "package": "atom",
          "partial": "MUV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUVArray",
          "package": "atom",
          "signature": "MUVArray UA Hash",
          "source": "src/Language-Atom-UeMap.html#MUV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUVArray",
          "package": "atom",
          "partial": "MUVArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUVArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUVExtern",
          "package": "atom",
          "signature": "MUVExtern String Type",
          "source": "src/Language-Atom-UeMap.html#MUV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUVExtern",
          "package": "atom",
          "partial": "MUVExtern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUVExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "MUVRef",
          "package": "atom",
          "signature": "MUVRef !MUV",
          "source": "src/Language-Atom-UeMap.html#UeElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "MUVRef",
          "package": "atom",
          "partial": "MUVRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:MUVRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll array indexing subexpressions.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "arrayIndices",
          "package": "atom",
          "signature": "Hash -\u003e UeMap -\u003e [(UA, Hash)]",
          "source": "src/Language-Atom-UeMap.html#arrayIndices",
          "type": "function"
        },
        "index": {
          "description": "All array indexing subexpressions",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "arrayIndices",
          "normalized": "Hash-\u003eUeMap-\u003e[(UA,Hash)]",
          "package": "atom",
          "partial": "Indices",
          "signature": "Hash-\u003eUeMap-\u003e[(UA,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:arrayIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "emptyMap",
          "package": "atom",
          "signature": "UeMap",
          "source": "src/Language-Atom-UeMap.html#emptyMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "emptyMap",
          "package": "atom",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:emptyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the element associated with a \u003ccode\u003e\u003ca\u003eHash\u003c/a\u003e\u003c/code\u003e value.  It's an error if the\n element is not in the map.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "getUE",
          "package": "atom",
          "signature": "Hash -\u003e UeMap -\u003e UeElem",
          "source": "src/Language-Atom-UeMap.html#getUE",
          "type": "function"
        },
        "index": {
          "description": "Get the element associated with Hash value It an error if the element is not in the map",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "getUE",
          "normalized": "Hash-\u003eUeMap-\u003eUeElem",
          "package": "atom",
          "partial": "UE",
          "signature": "Hash-\u003eUeMap-\u003eUeElem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:getUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "isMathHCall",
          "package": "atom",
          "signature": "UeElem -\u003e Bool",
          "source": "src/Language-Atom-UeMap.html#isMathHCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "isMathHCall",
          "normalized": "UeElem-\u003eBool",
          "package": "atom",
          "partial": "Math HCall",
          "signature": "UeElem-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:isMathHCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an element in the map, and if it's in there, do nothing, but return\n its hash value.  Otherwise, update the map and return the new hash value\n for the inserted element.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "maybeUpdate",
          "package": "atom",
          "signature": "UeElem -\u003e UeState Hash",
          "source": "src/Language-Atom-UeMap.html#maybeUpdate",
          "type": "function"
        },
        "index": {
          "description": "Lookup an element in the map and if it in there do nothing but return its hash value Otherwise update the map and return the new hash value for the inserted element",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "maybeUpdate",
          "normalized": "UeElem-\u003eUeState Hash",
          "package": "atom",
          "partial": "Update",
          "signature": "UeElem-\u003eUeState Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:maybeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of all UVs that directly control the value of an expression.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "nearestUVs",
          "package": "atom",
          "signature": "Hash -\u003e UeMap -\u003e [MUV]",
          "source": "src/Language-Atom-UeMap.html#nearestUVs",
          "type": "function"
        },
        "index": {
          "description": "The list of all UVs that directly control the value of an expression",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "nearestUVs",
          "normalized": "Hash-\u003eUeMap-\u003e[MUV]",
          "package": "atom",
          "partial": "UVs",
          "signature": "Hash-\u003eUeMap-\u003e[MUV]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:nearestUVs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a new \u003ccode\u003e\u003ca\u003eUE\u003c/a\u003e\u003c/code\u003e in the map, unless it's already in there, and return the\n hash pointing to the \u003ccode\u003e\u003ca\u003eUE\u003c/a\u003e\u003c/code\u003e and a new map.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "newUE",
          "package": "atom",
          "signature": "UE -\u003e UeMap -\u003e (Hash, UeMap)",
          "source": "src/Language-Atom-UeMap.html#newUE",
          "type": "function"
        },
        "index": {
          "description": "Put new UE in the map unless it already in there and return the hash pointing to the UE and new map",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "newUE",
          "normalized": "UE-\u003eUeMap-\u003e(Hash,UeMap)",
          "package": "atom",
          "partial": "UE",
          "signature": "UE-\u003eUeMap-\u003e(Hash,UeMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:newUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a \u003ccode\u003e\u003ca\u003eUV\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMUV\u003c/a\u003e\u003c/code\u003e, returning the possibly updated map.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "newUV",
          "package": "atom",
          "signature": "UV -\u003e UeMap -\u003e (MUV, UeMap)",
          "source": "src/Language-Atom-UeMap.html#newUV",
          "type": "function"
        },
        "index": {
          "description": "Transforms UV into MUV returning the possibly updated map",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "newUV",
          "normalized": "UV-\u003eUeMap-\u003e(MUV,UeMap)",
          "package": "atom",
          "partial": "UV",
          "signature": "UV-\u003eUeMap-\u003e(MUV,UeMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:newUV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eUE\u003c/a\u003e\u003c/code\u003e back out of the \u003ccode\u003e\u003ca\u003eUeMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "recoverUE",
          "package": "atom",
          "signature": "UeMap -\u003e Hash -\u003e UE",
          "source": "src/Language-Atom-UeMap.html#recoverUE",
          "type": "function"
        },
        "index": {
          "description": "Get UE back out of the UeMap",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "recoverUE",
          "normalized": "UeMap-\u003eHash-\u003eUE",
          "package": "atom",
          "partial": "UE",
          "signature": "UeMap-\u003eHash-\u003eUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:recoverUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.UeMap",
          "name": "typeOf",
          "package": "atom",
          "signature": "Hash -\u003e UeMap -\u003e Type",
          "source": "src/Language-Atom-UeMap.html#typeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "typeOf",
          "normalized": "Hash-\u003eUeMap-\u003eType",
          "package": "atom",
          "partial": "Of",
          "signature": "Hash-\u003eUeMap-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of Hashes to adjacent upstream of a UE.\n\u003c/p\u003e",
          "module": "Language.Atom.UeMap",
          "name": "ueUpstream",
          "package": "atom",
          "signature": "Hash -\u003e UeMap -\u003e [Hash]",
          "source": "src/Language-Atom-UeMap.html#ueUpstream",
          "type": "function"
        },
        "index": {
          "description": "The list of Hashes to adjacent upstream of UE",
          "hierarchy": "Language Atom UeMap",
          "module": "Language.Atom.UeMap",
          "name": "ueUpstream",
          "normalized": "Hash-\u003eUeMap-\u003e[Hash]",
          "package": "atom",
          "partial": "Upstream",
          "signature": "Hash-\u003eUeMap-\u003e[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-UeMap.html#v:ueUpstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "Unit",
          "package": "atom",
          "source": "src/Language-Atom-Unit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "Unit",
          "package": "atom",
          "partial": "Unit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "Random",
          "package": "atom",
          "source": "src/Language-Atom-Unit.html#Random",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "Random",
          "package": "atom",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData constructor:Test\n\u003c/p\u003e",
          "module": "Language.Atom.Unit",
          "name": "Test",
          "package": "atom",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "data"
        },
        "index": {
          "description": "Data constructor Test",
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "Test",
          "package": "atom",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "Test",
          "package": "atom",
          "signature": "Test",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "Test",
          "package": "atom",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "cycles",
          "package": "atom",
          "signature": "Int",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "cycles",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:cycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "declCode",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "declCode",
          "package": "atom",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:declCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "defaultTest",
          "package": "atom",
          "signature": "Test",
          "source": "src/Language-Atom-Unit.html#defaultTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "defaultTest",
          "package": "atom",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:defaultTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "endCode",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "endCode",
          "package": "atom",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:endCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "includes",
          "package": "atom",
          "signature": "[FilePath]",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "includes",
          "normalized": "[FilePath]",
          "package": "atom",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:includes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "initCode",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "initCode",
          "package": "atom",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:initCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "loopCode",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "loopCode",
          "package": "atom",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:loopCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "modules",
          "package": "atom",
          "signature": "[FilePath]",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "modules",
          "normalized": "[FilePath]",
          "package": "atom",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "name",
          "package": "atom",
          "signature": "String",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "name",
          "package": "atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint floating point values.\n\u003c/p\u003e",
          "module": "Language.Atom.Unit",
          "name": "printFloatingE",
          "package": "atom",
          "signature": "String -\u003e E a -\u003e Atom ()",
          "source": "src/Language-Atom-Unit.html#printFloatingE",
          "type": "function"
        },
        "index": {
          "description": "Print floating point values",
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "printFloatingE",
          "normalized": "String-\u003eE a-\u003eAtom()",
          "package": "atom",
          "partial": "Floating",
          "signature": "String-\u003eE a-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:printFloatingE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint integral values.\n\u003c/p\u003e",
          "module": "Language.Atom.Unit",
          "name": "printIntegralE",
          "package": "atom",
          "signature": "String -\u003e E a -\u003e Atom ()",
          "source": "src/Language-Atom-Unit.html#printIntegralE",
          "type": "function"
        },
        "index": {
          "description": "Print integral values",
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "printIntegralE",
          "normalized": "String-\u003eE a-\u003eAtom()",
          "package": "atom",
          "partial": "Integral",
          "signature": "String-\u003eE a-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:printIntegralE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrinting strings in C using printf.\n\u003c/p\u003e",
          "module": "Language.Atom.Unit",
          "name": "printStrLn",
          "package": "atom",
          "signature": "String -\u003e Atom ()",
          "source": "src/Language-Atom-Unit.html#printStrLn",
          "type": "function"
        },
        "index": {
          "description": "Printing strings in using printf",
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "printStrLn",
          "normalized": "String-\u003eAtom()",
          "package": "atom",
          "partial": "Str Ln",
          "signature": "String-\u003eAtom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:printStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "random",
          "package": "atom",
          "signature": "E a",
          "source": "src/Language-Atom-Unit.html#random",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "random",
          "package": "atom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning TestList\n\u003c/p\u003e",
          "module": "Language.Atom.Unit",
          "name": "runTests",
          "package": "atom",
          "signature": "Int -\u003e [IO Test] -\u003e IO ()",
          "source": "src/Language-Atom-Unit.html#runTests",
          "type": "function"
        },
        "index": {
          "description": "Running TestList",
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "runTests",
          "normalized": "Int-\u003e[IO Test]-\u003eIO()",
          "package": "atom",
          "partial": "Tests",
          "signature": "Int-\u003e[IO Test]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:runTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.Unit",
          "name": "testbench",
          "package": "atom",
          "signature": "Atom ()",
          "source": "src/Language-Atom-Unit.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom Unit",
          "module": "Language.Atom.Unit",
          "name": "testbench",
          "normalized": "Atom()",
          "package": "atom",
          "signature": "Atom()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom-Unit.html#v:testbench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtom is a Haskell DSL for designing hard realtime embedded software.\n  Based on guarded atomic actions (similar to STM), Atom enables highly\n  concurrent programming without the need for mutex locking.\n  In addition, Atom performs compile-time task scheduling and generates code\n  with deterministic execution time and constant memory use, simplifying the\n  process of timing verification and memory consumption in hard realtime\n  applications. Without mutex locking and run-time task scheduling,\n  Atom eliminates the need and overhead of RTOSs for many embedded applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Atom",
          "name": "Atom",
          "package": "atom",
          "source": "src/Language-Atom.html",
          "type": "module"
        },
        "index": {
          "description": "Atom is Haskell DSL for designing hard realtime embedded software Based on guarded atomic actions similar to STM Atom enables highly concurrent programming without the need for mutex locking In addition Atom performs compile-time task scheduling and generates code with deterministic execution time and constant memory use simplifying the process of timing verification and memory consumption in hard realtime applications Without mutex locking and run-time task scheduling Atom eliminates the need and overhead of RTOSs for many embedded applications",
          "hierarchy": "Language Atom",
          "module": "Language.Atom",
          "name": "Atom",
          "package": "atom",
          "partial": "Atom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom/docs/Language-Atom.html#"
      }
    }
  ]
]