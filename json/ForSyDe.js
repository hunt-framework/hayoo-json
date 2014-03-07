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
        "word": "ForSyDe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e is used to extend existing data types with the value\n  'absent', which models the absence of a value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "AbsentExt",
          "package": "ForSyDe",
          "source": "src/ForSyDe-AbsentExt.html",
          "type": "module"
        },
        "index": {
          "description": "The AbstExt is used to extend existing data types with the value absent which models the absence of value",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "AbsentExt",
          "package": "ForSyDe",
          "partial": "Absent Ext",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e has two constructors. The constructor \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e is used to model the absence of a value, while the constructor \u003ccode\u003e\u003ca\u003ePrst\u003c/a\u003e\u003c/code\u003e is used to model present values.\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "AbstExt",
          "package": "ForSyDe",
          "source": "src/ForSyDe-AbsentExt.html#AbstExt",
          "type": "data"
        },
        "index": {
          "description": "The data type AbstExt has two constructors The constructor Abst is used to model the absence of value while the constructor Prst is used to model present values",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "AbstExt",
          "package": "ForSyDe",
          "partial": "Abst Ext",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#t:AbstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.AbsentExt",
          "name": "Abst",
          "package": "ForSyDe",
          "signature": "Abst",
          "source": "src/ForSyDe-AbsentExt.html#AbstExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "Abst",
          "package": "ForSyDe",
          "partial": "Abst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:Abst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.AbsentExt",
          "name": "Prst",
          "package": "ForSyDe",
          "signature": "Prst a",
          "source": "src/ForSyDe-AbsentExt.html#AbstExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "Prst",
          "package": "ForSyDe",
          "partial": "Prst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:Prst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExt\u003c/a\u003e\u003c/code\u003e converts a usual value to a present value. \n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "abstExt",
          "package": "ForSyDe",
          "signature": "a -\u003e AbstExt a",
          "source": "src/ForSyDe-AbsentExt.html#abstExt",
          "type": "function"
        },
        "index": {
          "description": "The function abstExt converts usual value to present value",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "abstExt",
          "normalized": "a-\u003eAbstExt a",
          "package": "ForSyDe",
          "partial": "Ext",
          "signature": "a-\u003eAbstExt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:abstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e extends a function in order to process absent extended values. If the input is (\"bottom\"), the output will also be  (\"bottom\").\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "abstExtFunc",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
          "source": "src/ForSyDe-AbsentExt.html#abstExtFunc",
          "type": "function"
        },
        "index": {
          "description": "The function abstExtFunc extends function in order to process absent extended values If the input is bottom the output will also be bottom",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "abstExtFunc",
          "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "package": "ForSyDe",
          "partial": "Ext Func",
          "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:abstExtFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e extracts the inner value contained in \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "fromAbstExt",
          "package": "ForSyDe",
          "signature": "a-\u003e AbstExt a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The function fromAbstExt extracts the inner value contained in AbstExt",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "fromAbstExt",
          "normalized": "a-\u003eAbstExt a-\u003ea",
          "package": "ForSyDe",
          "partial": "Abst Ext",
          "signature": "a-\u003eAbstExt a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:fromAbstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisAbsent\u003c/a\u003e\u003c/code\u003e checks for the absence of a value.\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "isAbsent",
          "package": "ForSyDe",
          "signature": "AbstExt a -\u003e Bool",
          "source": "src/ForSyDe-AbsentExt.html#isAbsent",
          "type": "function"
        },
        "index": {
          "description": "The functions isAbsent checks for the absence of value",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "isAbsent",
          "normalized": "AbstExt a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Absent",
          "signature": "AbstExt a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:isAbsent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisPresent\u003c/a\u003e\u003c/code\u003e checks for the presence of a value.\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "isPresent",
          "package": "ForSyDe",
          "signature": "AbstExt a -\u003e Bool",
          "source": "src/ForSyDe-AbsentExt.html#isPresent",
          "type": "function"
        },
        "index": {
          "description": "The functions isPresent checks for the presence of value",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "isPresent",
          "normalized": "AbstExt a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Present",
          "signature": "AbstExt a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:isPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epsi\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e and should be used in future.\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "psi",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
          "source": "src/ForSyDe-AbsentExt.html#psi",
          "type": "function"
        },
        "index": {
          "description": "The function psi is identical to abstExtFunc and should be used in future",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "psi",
          "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "package": "ForSyDe",
          "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e, but without default value\n\u003c/p\u003e",
          "module": "ForSyDe.AbsentExt",
          "name": "unsafeFromAbstExt",
          "package": "ForSyDe",
          "signature": "AbstExt a -\u003e a",
          "source": "src/ForSyDe-AbsentExt.html#unsafeFromAbstExt",
          "type": "function"
        },
        "index": {
          "description": "Similar to fromAbstExt but without default value",
          "hierarchy": "ForSyDe AbsentExt",
          "module": "ForSyDe.AbsentExt",
          "name": "unsafeFromAbstExt",
          "normalized": "AbstExt a-\u003ea",
          "package": "ForSyDe",
          "partial": "From Abst Ext",
          "signature": "AbstExt a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:unsafeFromAbstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GraphML backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphML",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-GraphML.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the GraphML backend of ForSyDe embedded compiler",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphML",
          "package": "ForSyDe",
          "partial": "Graph ML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug level\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLDebugLevel",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
          "type": "data"
        },
        "index": {
          "description": "Debug level",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLDebugLevel",
          "package": "ForSyDe",
          "partial": "Graph MLDebug Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLDebugLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraphML Compilation options\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLOps",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
          "type": "data"
        },
        "index": {
          "description": "GraphML Compilation options",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLOps",
          "package": "ForSyDe",
          "partial": "Graph MLOps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursivity, should the parent systems of system instances be compiled as \n   well?\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLRecursivity",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
          "type": "data"
        },
        "index": {
          "description": "Recursivity should the parent systems of system instances be compiled as well",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLRecursivity",
          "package": "ForSyDe",
          "partial": "Graph MLRecursivity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLRecursivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLNonRecursive",
          "package": "ForSyDe",
          "signature": "GraphMLNonRecursive",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLNonRecursive",
          "package": "ForSyDe",
          "partial": "Graph MLNon Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLNonRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLNormal",
          "package": "ForSyDe",
          "signature": "GraphMLNormal",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLNormal",
          "package": "ForSyDe",
          "partial": "Graph MLNormal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLOps",
          "package": "ForSyDe",
          "signature": "GraphMLOps",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLOps",
          "package": "ForSyDe",
          "partial": "Graph MLOps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLRecursive",
          "package": "ForSyDe",
          "signature": "GraphMLRecursive",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLRecursive",
          "package": "ForSyDe",
          "partial": "Graph MLRecursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLVerbose",
          "package": "ForSyDe",
          "signature": "GraphMLVerbose",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "GraphMLVerbose",
          "package": "ForSyDe",
          "partial": "Graph MLVerbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "debugGraphML",
          "package": "ForSyDe",
          "signature": "GraphMLDebugLevel",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "debugGraphML",
          "package": "ForSyDe",
          "partial": "Graph ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:debugGraphML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault traversing options\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "defaultGraphMLOps",
          "package": "ForSyDe",
          "signature": "GraphMLOps",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#defaultGraphMLOps",
          "type": "function"
        },
        "index": {
          "description": "Default traversing options",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "defaultGraphMLOps",
          "package": "ForSyDe",
          "partial": "Graph MLOps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:defaultGraphMLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.GraphML",
          "name": "recursivityGraphML",
          "package": "ForSyDe",
          "signature": "GraphMLRecursivity",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "recursivityGraphML",
          "package": "ForSyDe",
          "partial": "Graph ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:recursivityGraphML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a System Definition whose name is A generate \u003ccode\u003eA.graphml\u003c/code\u003e in current \n   working directory using the default compilation options.\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "writeGraphML",
          "package": "ForSyDe",
          "signature": "SysDef a -\u003e IO ()",
          "source": "src/ForSyDe-Backend-GraphML.html#writeGraphML",
          "type": "function"
        },
        "index": {
          "description": "Given System Definition whose name is generate A.graphml in current working directory using the default compilation options",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "writeGraphML",
          "normalized": "SysDef a-\u003eIO()",
          "package": "ForSyDe",
          "partial": "Graph ML",
          "signature": "SysDef a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:writeGraphML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteGraphML\u003c/a\u003e\u003c/code\u003e-alternative which allows setting GraphML compilation \n   options.\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "writeGraphMLOps",
          "package": "ForSyDe",
          "signature": "GraphMLOps -\u003e SysDef a -\u003e IO ()",
          "source": "src/ForSyDe-Backend-GraphML.html#writeGraphMLOps",
          "type": "function"
        },
        "index": {
          "description": "writeGraphML alternative which allows setting GraphML compilation options",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "writeGraphMLOps",
          "normalized": "GraphMLOps-\u003eSysDef a-\u003eIO()",
          "package": "ForSyDe",
          "partial": "Graph MLOps",
          "signature": "GraphMLOps-\u003eSysDef a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:writeGraphMLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate yFiles markup? \n\u003c/p\u003e",
          "module": "ForSyDe.Backend.GraphML",
          "name": "yFilesMarkup",
          "package": "ForSyDe",
          "signature": "Bool",
          "source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
          "type": "function"
        },
        "index": {
          "description": "Generate yFiles markup",
          "hierarchy": "ForSyDe Backend GraphML",
          "module": "ForSyDe.Backend.GraphML",
          "name": "yFilesMarkup",
          "package": "ForSyDe",
          "partial": "Files Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:yFilesMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the simulation backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module is based on Lava2000\u003c/em\u003e: \u003ca\u003ehttp://www.cs.chalmers.se/~koen/Lava/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Backend.Simulate",
          "name": "Simulate",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-Simulate.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the simulation backend of ForSyDe embedded compiler This module is based on Lava2000 http www.cs.chalmers.se koen Lava",
          "hierarchy": "ForSyDe Backend Simulate",
          "module": "ForSyDe.Backend.Simulate",
          "name": "Simulate",
          "package": "ForSyDe",
          "partial": "Simulate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-Simulate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e takes a system definition and generates a function \n   able simulate a System using a list-based representation \n   of its signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.Simulate",
          "name": "simulate",
          "package": "ForSyDe",
          "signature": "SysDef sysFun -\u003e simFun",
          "source": "src/ForSyDe-Backend-Simulate.html#simulate",
          "type": "function"
        },
        "index": {
          "description": "simulate takes system definition and generates function able simulate System using list-based representation of its signals",
          "hierarchy": "ForSyDe Backend Simulate",
          "module": "ForSyDe.Backend.Simulate",
          "name": "simulate",
          "normalized": "SysDef a-\u003eb",
          "package": "ForSyDe",
          "signature": "SysDef sysFun-\u003esimFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-Simulate.html#v:simulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the VHDL backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDL",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the VHDL backend of ForSyDe embedded compiler",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDL",
          "package": "ForSyDe",
          "partial": "VHDL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to perform by Quartus\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusAction",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
          "type": "data"
        },
        "index": {
          "description": "Action to perform by Quartus",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusAction",
          "package": "ForSyDe",
          "partial": "Quartus Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:QuartusAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions passed to Quartus II by the VHDL Backend. Most of them are optional\n   and Quartus will use a default value.\n\u003c/p\u003e\u003cp\u003eIt contains:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e What action to perform\n\u003c/li\u003e\u003cli\u003e Optinally, the minimum acceptable clock frequency (fMax) expressed in MHz\n\u003c/li\u003e\u003cli\u003e FPGA family and specific device model (both are independently optional).\n\u003c/li\u003e\u003cli\u003e Pin assignments, in the form (VHDL Pin, FPGA Pin). Note\n       that Quartus will automatically split composite VHDL ports \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusOps",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "data"
        },
        "index": {
          "description": "Options passed to Quartus II by the VHDL Backend Most of them are optional and Quartus will use default value It contains What action to perform Optinally the minimum acceptable clock frequency fMax expressed in MHz FPGA family and specific device model both are independently optional Pin assignments in the form VHDL Pin FPGA Pin Note that Quartus will automatically split composite VHDL ports",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusOps",
          "package": "ForSyDe",
          "partial": "Quartus Ops",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:QuartusOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug level\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLDebugLevel",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
          "type": "data"
        },
        "index": {
          "description": "Debug level",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLDebugLevel",
          "package": "ForSyDe",
          "partial": "VHDLDebug Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLDebugLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVHDL Compilation options\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLOps",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "data"
        },
        "index": {
          "description": "VHDL Compilation options",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLOps",
          "package": "ForSyDe",
          "partial": "VHDLOps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursivity, should the parent systems of system instances be compiled as \n   well?\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLRecursivity",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
          "type": "data"
        },
        "index": {
          "description": "Recursivity should the parent systems of system instances be compiled as well",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLRecursivity",
          "package": "ForSyDe",
          "partial": "VHDLRecursivity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLRecursivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalysis and eleboration flow\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "AnalysisAndElaboration",
          "package": "ForSyDe",
          "signature": "AnalysisAndElaboration",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
          "type": "function"
        },
        "index": {
          "description": "Analysis and eleboration flow",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "AnalysisAndElaboration",
          "package": "ForSyDe",
          "partial": "Analysis And Elaboration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:AnalysisAndElaboration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall map executable \n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "AnalysisAndSynthesis",
          "package": "ForSyDe",
          "signature": "AnalysisAndSynthesis",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
          "type": "function"
        },
        "index": {
          "description": "Call map executable",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "AnalysisAndSynthesis",
          "package": "ForSyDe",
          "partial": "Analysis And Synthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:AnalysisAndSynthesis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile flow\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "FullCompilation",
          "package": "ForSyDe",
          "signature": "FullCompilation",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
          "type": "function"
        },
        "index": {
          "description": "Compile flow",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "FullCompilation",
          "package": "ForSyDe",
          "partial": "Full Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:FullCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusOps",
          "package": "ForSyDe",
          "signature": "QuartusOps",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "QuartusOps",
          "package": "ForSyDe",
          "partial": "Quartus Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:QuartusOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLNonRecursive",
          "package": "ForSyDe",
          "signature": "VHDLNonRecursive",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLNonRecursive",
          "package": "ForSyDe",
          "partial": "VHDLNon Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLNonRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLNormal",
          "package": "ForSyDe",
          "signature": "VHDLNormal",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLNormal",
          "package": "ForSyDe",
          "partial": "VHDLNormal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLOps",
          "package": "ForSyDe",
          "signature": "VHDLOps",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLOps",
          "package": "ForSyDe",
          "partial": "VHDLOps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLRecursive",
          "package": "ForSyDe",
          "signature": "VHDLRecursive",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLRecursive",
          "package": "ForSyDe",
          "partial": "VHDLRecursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLVerbose",
          "package": "ForSyDe",
          "signature": "VHDLVerbose",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "VHDLVerbose",
          "package": "ForSyDe",
          "partial": "VHDLVerbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "action",
          "package": "ForSyDe",
          "signature": "QuartusAction",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "action",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to check if the model is synthesizable, all options except\n   the action to take are set to default. \n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "checkSynthesisQuartus",
          "package": "ForSyDe",
          "signature": "QuartusOps",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#checkSynthesisQuartus",
          "type": "function"
        },
        "index": {
          "description": "Options to check if the model is synthesizable all options except the action to take are set to default",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "checkSynthesisQuartus",
          "package": "ForSyDe",
          "partial": "Synthesis Quartus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:checkSynthesisQuartus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the generated code with Modelsim\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "compileModelsim",
          "package": "ForSyDe",
          "signature": "Bool",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "function"
        },
        "index": {
          "description": "Compile the generated code with Modelsim",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "compileModelsim",
          "package": "ForSyDe",
          "partial": "Modelsim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:compileModelsim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug mode\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "debugVHDL",
          "package": "ForSyDe",
          "signature": "VHDLDebugLevel",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "function"
        },
        "index": {
          "description": "Debug mode",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "debugVHDL",
          "package": "ForSyDe",
          "partial": "VHDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:debugVHDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault traversing options\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "defaultVHDLOps",
          "package": "ForSyDe",
          "signature": "VHDLOps",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#defaultVHDLOps",
          "type": "function"
        },
        "index": {
          "description": "Default traversing options",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "defaultVHDLOps",
          "package": "ForSyDe",
          "partial": "VHDLOps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:defaultVHDLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalyze the generated code with Quartus\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "execQuartus",
          "package": "ForSyDe",
          "signature": "Maybe QuartusOps",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "function"
        },
        "index": {
          "description": "Analyze the generated code with Quartus",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "execQuartus",
          "package": "ForSyDe",
          "partial": "Quartus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:execQuartus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "fMax",
          "package": "ForSyDe",
          "signature": "Maybe Int",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "fMax",
          "package": "ForSyDe",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:fMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "fpgaFamiliyDevice",
          "package": "ForSyDe",
          "signature": "Maybe (String, Maybe String)",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "fpgaFamiliyDevice",
          "normalized": "Maybe(String,Maybe String)",
          "package": "ForSyDe",
          "partial": "Familiy Device",
          "signature": "Maybe(String,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:fpgaFamiliyDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "pinAssigs",
          "package": "ForSyDe",
          "signature": "[(String, String)]",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "pinAssigs",
          "normalized": "[(String,String)]",
          "package": "ForSyDe",
          "partial": "Assigs",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:pinAssigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Backend.VHDL",
          "name": "recursivityVHDL",
          "package": "ForSyDe",
          "signature": "VHDLRecursivity",
          "source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "recursivityVHDL",
          "package": "ForSyDe",
          "partial": "VHDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:recursivityVHDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a function which, given a system definition and some simulation\n   stimuli:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Writes a VHDL model of the system \n\u003c/li\u003e\u003cli\u003e Simulates the VHDL model with Modelsim getting the results back to Haskell\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeAndModelsimVHDL",
          "package": "ForSyDe",
          "signature": "Maybe Int-\u003e SysDef sysF-\u003e simF",
          "type": "function"
        },
        "index": {
          "description": "Generate function which given system definition and some simulation stimuli Writes VHDL model of the system Simulates the VHDL model with Modelsim getting the results back to Haskell",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeAndModelsimVHDL",
          "normalized": "Maybe Int-\u003eSysDef a-\u003eb",
          "package": "ForSyDe",
          "partial": "And Modelsim VHDL",
          "signature": "Maybe Int-\u003eSysDef sysF-\u003esimF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeAndModelsimVHDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVHDLOps\u003c/a\u003e\u003c/code\u003e-alternative of \u003ccode\u003e\u003ca\u003ewriteAndModelsimVHDL\u003c/a\u003e\u003c/code\u003e, note that\n   compileModelSim will implicitly be set to True\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeAndModelsimVHDLOps",
          "package": "ForSyDe",
          "signature": "VHDLOps -\u003e Maybe Int -\u003e SysDef sysF -\u003e simF",
          "source": "src/ForSyDe-Backend-VHDL.html#writeAndModelsimVHDLOps",
          "type": "function"
        },
        "index": {
          "description": "VHDLOps alternative of writeAndModelsimVHDL note that compileModelSim will implicitly be set to True",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeAndModelsimVHDLOps",
          "normalized": "VHDLOps-\u003eMaybe Int-\u003eSysDef a-\u003eb",
          "package": "ForSyDe",
          "partial": "And Modelsim VHDLOps",
          "signature": "VHDLOps-\u003eMaybe Int-\u003eSysDef sysF-\u003esimF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeAndModelsimVHDLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a System Definition whose name is a valid VHDL _basic_ identifier \n   (call it \"A\") generate \u003ccode\u003eA.vhd\u003c/code\u003e in current working directory using \n   default compilation options.\n   Imp: the input and output signal names of A must be valid VHDL identifiers\n        (basic or extended) and different to \u003ccode\u003eclk\u003c/code\u003e and \u003ccode\u003ereset\u003c/code\u003e\n        which are reserved for the main clock and reset signals\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeVHDL",
          "package": "ForSyDe",
          "signature": "SysDef a -\u003e IO ()",
          "source": "src/ForSyDe-Backend-VHDL.html#writeVHDL",
          "type": "function"
        },
        "index": {
          "description": "Given System Definition whose name is valid VHDL basic identifier call it generate A.vhd in current working directory using default compilation options Imp the input and output signal names of must be valid VHDL identifiers basic or extended and different to clk and reset which are reserved for the main clock and reset signals",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeVHDL",
          "normalized": "SysDef a-\u003eIO()",
          "package": "ForSyDe",
          "partial": "VHDL",
          "signature": "SysDef a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeVHDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteVHDL\u003c/a\u003e\u003c/code\u003e-alternative which allows setting VHDL compilation options.\n\u003c/p\u003e",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeVHDLOps",
          "package": "ForSyDe",
          "signature": "VHDLOps -\u003e SysDef a -\u003e IO ()",
          "source": "src/ForSyDe-Backend-VHDL.html#writeVHDLOps",
          "type": "function"
        },
        "index": {
          "description": "writeVHDL alternative which allows setting VHDL compilation options",
          "hierarchy": "ForSyDe Backend VHDL",
          "module": "ForSyDe.Backend.VHDL",
          "name": "writeVHDLOps",
          "normalized": "VHDLOps-\u003eSysDef a-\u003eIO()",
          "package": "ForSyDe",
          "partial": "VHDLOps",
          "signature": "VHDLOps-\u003eSysDef a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeVHDLOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapper module exporting all the backends\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Backend",
          "name": "Backend",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Backend.html",
          "type": "module"
        },
        "index": {
          "description": "Wrapper module exporting all the backends",
          "hierarchy": "ForSyDe Backend",
          "module": "ForSyDe.Backend",
          "name": "Backend",
          "package": "ForSyDe",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBit\u003c/a\u003e\u003c/code\u003e Datatype. Note that the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance is phony and shouldn't be used\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Bit",
          "name": "Bit",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Bit.html",
          "type": "module"
        },
        "index": {
          "description": "Bit Datatype Note that the Num instance is phony and shouldn be used",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "Bit",
          "package": "ForSyDe",
          "partial": "Bit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "Bit",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Bit.html#Bit",
          "type": "data"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "Bit",
          "package": "ForSyDe",
          "partial": "Bit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#t:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh value \n\u003c/p\u003e",
          "module": "ForSyDe.Bit",
          "name": "H",
          "package": "ForSyDe",
          "signature": "H",
          "source": "src/ForSyDe-Bit.html#Bit",
          "type": "function"
        },
        "index": {
          "description": "High value",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "H",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow value\n\u003c/p\u003e",
          "module": "ForSyDe.Bit",
          "name": "L",
          "package": "ForSyDe",
          "signature": "L",
          "source": "src/ForSyDe-Bit.html#Bit",
          "type": "function"
        },
        "index": {
          "description": "Low value",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "L",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a bit to a boolean\n\u003c/p\u003e",
          "module": "ForSyDe.Bit",
          "name": "bitToBool",
          "package": "ForSyDe",
          "signature": "Bit -\u003e Bool",
          "source": "src/ForSyDe-Bit.html#bitToBool",
          "type": "function"
        },
        "index": {
          "description": "Convert bit to boolean",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "bitToBool",
          "normalized": "Bit-\u003eBool",
          "package": "ForSyDe",
          "partial": "To Bool",
          "signature": "Bit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:bitToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boolean to a bit\n\u003c/p\u003e",
          "module": "ForSyDe.Bit",
          "name": "boolToBit",
          "package": "ForSyDe",
          "signature": "Bool -\u003e Bit",
          "source": "src/ForSyDe-Bit.html#boolToBit",
          "type": "function"
        },
        "index": {
          "description": "Convert boolean to bit",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "boolToBit",
          "normalized": "Bool-\u003eBit",
          "package": "ForSyDe",
          "partial": "To Bit",
          "signature": "Bool-\u003eBit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:boolToBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "fromBitVector16",
          "package": "ForSyDe",
          "signature": "FSVec D16 Bit -\u003e Int16",
          "source": "src/ForSyDe-Bit.html#fromBitVector16",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "fromBitVector16",
          "normalized": "FSVec D Bit-\u003eInt",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "FSVec D Bit-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "fromBitVector32",
          "package": "ForSyDe",
          "signature": "FSVec D32 Bit -\u003e Int32",
          "source": "src/ForSyDe-Bit.html#fromBitVector32",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "fromBitVector32",
          "normalized": "FSVec D Bit-\u003eInt",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "FSVec D Bit-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "fromBitVector64",
          "package": "ForSyDe",
          "signature": "FSVec D64 Bit -\u003e Int64",
          "source": "src/ForSyDe-Bit.html#fromBitVector64",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "fromBitVector64",
          "normalized": "FSVec D Bit-\u003eInt",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "FSVec D Bit-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "fromBitVector8",
          "package": "ForSyDe",
          "signature": "FSVec D8 Bit -\u003e Int8",
          "source": "src/ForSyDe-Bit.html#fromBitVector8",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "fromBitVector8",
          "normalized": "FSVec D Bit-\u003eInt",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "FSVec D Bit-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot operation over bits\n\u003c/p\u003e",
          "module": "ForSyDe.Bit",
          "name": "not",
          "package": "ForSyDe",
          "signature": "Bit -\u003e Bit",
          "source": "src/ForSyDe-Bit.html#not",
          "type": "function"
        },
        "index": {
          "description": "Not operation over bits",
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "not",
          "normalized": "Bit-\u003eBit",
          "package": "ForSyDe",
          "signature": "Bit-\u003eBit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "toBitVector16",
          "package": "ForSyDe",
          "signature": "Int16 -\u003e FSVec D16 Bit",
          "source": "src/ForSyDe-Bit.html#toBitVector16",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "toBitVector16",
          "normalized": "Int-\u003eFSVec D Bit",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "Int-\u003eFSVec D Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "toBitVector32",
          "package": "ForSyDe",
          "signature": "Int32 -\u003e FSVec D32 Bit",
          "source": "src/ForSyDe-Bit.html#toBitVector32",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "toBitVector32",
          "normalized": "Int-\u003eFSVec D Bit",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "Int-\u003eFSVec D Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "toBitVector64",
          "package": "ForSyDe",
          "signature": "Int64 -\u003e FSVec D64 Bit",
          "source": "src/ForSyDe-Bit.html#toBitVector64",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "toBitVector64",
          "normalized": "Int-\u003eFSVec D Bit",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "Int-\u003eFSVec D Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Bit",
          "name": "toBitVector8",
          "package": "ForSyDe",
          "signature": "Int8 -\u003e FSVec D8 Bit",
          "source": "src/ForSyDe-Bit.html#toBitVector8",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Bit",
          "module": "ForSyDe.Bit",
          "name": "toBitVector8",
          "normalized": "Int-\u003eFSVec D Bit",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "Int-\u003eFSVec D Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes the standard Discrete Fourier Transform (DFT)\n function, and a fast Fourier transform (FFT) algorithm, for\n computing the DFT, when the input vectors' length is a power of 2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.DFT",
          "name": "DFT",
          "package": "ForSyDe",
          "source": "src/ForSyDe-DFT.html",
          "type": "module"
        },
        "index": {
          "description": "This module includes the standard Discrete Fourier Transform DFT function and fast Fourier transform FFT algorithm for computing the DFT when the input vectors length is power of",
          "hierarchy": "ForSyDe DFT",
          "module": "ForSyDe.DFT",
          "name": "DFT",
          "package": "ForSyDe",
          "partial": "DFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e performs a standard Discrete Fourier Transformation\n\u003c/p\u003e",
          "module": "ForSyDe.DFT",
          "name": "dft",
          "package": "ForSyDe",
          "signature": "FSVec s (Complex Double) -\u003e FSVec s (Complex Double)",
          "source": "src/ForSyDe-DFT.html#dft",
          "type": "function"
        },
        "index": {
          "description": "The function dft performs standard Discrete Fourier Transformation",
          "hierarchy": "ForSyDe DFT",
          "module": "ForSyDe.DFT",
          "name": "dft",
          "normalized": "FSVec a(Complex Double)-\u003eFSVec a(Complex Double)",
          "package": "ForSyDe",
          "signature": "FSVec s(Complex Double)-\u003eFSVec s(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e implements a fast Fourier transform (FFT) algorithm, \n   for computing the DFT, when the size N is a power of 2.\n\u003c/p\u003e",
          "module": "ForSyDe.DFT",
          "name": "fft",
          "package": "ForSyDe",
          "signature": "FSVec s (Complex Double) -\u003e FSVec s (Complex Double)",
          "source": "src/ForSyDe-DFT.html#fft",
          "type": "function"
        },
        "index": {
          "description": "The function fft implements fast Fourier transform FFT algorithm for computing the DFT when the size is power of",
          "hierarchy": "ForSyDe DFT",
          "module": "ForSyDe.DFT",
          "name": "fft",
          "normalized": "FSVec a(Complex Double)-\u003eFSVec a(Complex Double)",
          "package": "ForSyDe",
          "signature": "FSVec s(Complex Double)-\u003eFSVec s(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements FIR filters for the synchronous computational model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.FIR",
          "name": "FIR",
          "package": "ForSyDe",
          "source": "src/ForSyDe-FIR.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements FIR filters for the synchronous computational model",
          "hierarchy": "ForSyDe FIR",
          "module": "ForSyDe.FIR",
          "name": "FIR",
          "package": "ForSyDe",
          "partial": "FIR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-FIR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll kinds of FIR-filters can now be modeled by means of \u003ccode\u003e\u003ca\u003efir\u003c/a\u003e\u003c/code\u003e. The\n only argument needed is the list of coefficients, which is given as\n a vector of any size. To illustrate this, an 8-th order band pass\n filter is modeled as follows.\n\u003c/p\u003e\u003cpre\u003e bp = fir \"fir Id\" $(vectorTH [0.06318761339784, 0.08131651217682, 0.09562326700432, \n                               0.10478344432968, 0.10793629404886, 0.10478344432968, \n                               0.09562326700432, 0.08131651217682, 0.06318761339784 ])\n\u003c/pre\u003e",
          "module": "ForSyDe.FIR",
          "name": "fir",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e FSVec s b -\u003e Signal b -\u003e Signal b",
          "source": "src/ForSyDe-FIR.html#fir",
          "type": "function"
        },
        "index": {
          "description": "All kinds of FIR-filters can now be modeled by means of fir The only argument needed is the list of coefficients which is given as vector of any size To illustrate this an th order band pass filter is modeled as follows bp fir fir Id vectorTH",
          "hierarchy": "ForSyDe FIR",
          "module": "ForSyDe.FIR",
          "name": "fir",
          "normalized": "ProcId-\u003eFSVec a b-\u003eSignal b-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "ProcId-\u003eFSVec s b-\u003eSignal b-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-FIR.html#v:fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForSyDe  identifier types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Ids",
          "name": "Ids",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Ids.html",
          "type": "module"
        },
        "index": {
          "description": "ForSyDe identifier types",
          "hierarchy": "ForSyDe Ids",
          "module": "ForSyDe.Ids",
          "name": "Ids",
          "package": "ForSyDe",
          "partial": "Ids",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Port identifier\n\u003c/p\u003e",
          "module": "ForSyDe.Ids",
          "name": "PortId",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Ids.html#PortId",
          "type": "type"
        },
        "index": {
          "description": "Port identifier",
          "hierarchy": "ForSyDe Ids",
          "module": "ForSyDe.Ids",
          "name": "PortId",
          "package": "ForSyDe",
          "partial": "Port Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:PortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process identifier\n\u003c/p\u003e",
          "module": "ForSyDe.Ids",
          "name": "ProcId",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Ids.html#ProcId",
          "type": "type"
        },
        "index": {
          "description": "process identifier",
          "hierarchy": "ForSyDe Ids",
          "module": "ForSyDe.Ids",
          "name": "ProcId",
          "package": "ForSyDe",
          "partial": "Proc Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:ProcId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA System identifier\n\u003c/p\u003e",
          "module": "ForSyDe.Ids",
          "name": "SysId",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Ids.html#SysId",
          "type": "type"
        },
        "index": {
          "description": "System identifier",
          "hierarchy": "ForSyDe Ids",
          "module": "ForSyDe.Ids",
          "name": "SysId",
          "package": "ForSyDe",
          "partial": "Sys Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:SysId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the synchronous process constructors of\n ForSyDe and some useful synchronous processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "SynchProc",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Process-SynchProc.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the synchronous process constructors of ForSyDe and some useful synchronous processes",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "SynchProc",
          "package": "ForSyDe",
          "partial": "Synch Proc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a constant process. A process which outputs the \n   same signal value in every clock cycle.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "constSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "Creates constant process process which outputs the same signal value in every clock cycle",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "constSY",
          "normalized": "ProcId-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:constSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e delays the signal one event cycle      \n   by introducing an initial value at the beginning of the output signal.   \n   Note, that this implies that there is one event (the first) at the       \n   output signal that has no corresponding event at the input signal.       \n   One could argue that input and output signals are not fully synchronized,\n   even though all input events are synchronous with a corresponding output \n   event. However, this is necessary to initialize feed-back loops.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "delaySY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e a-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor delaySY delays the signal one event cycle by introducing an initial value at the beginning of the output signal Note that this implies that there is one event the first at the output signal that has no corresponding event at the input signal One could argue that input and output signals are not fully synchronized even though all input events are synchronous with corresponding output event However this is necessary to initialize feed-back loops",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "delaySY",
          "normalized": "ProcId-\u003ea-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ea-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:delaySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaynSY\u003c/a\u003e\u003c/code\u003e delays the signal n events by \n   introducing n identical default values. It creates a chain of \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e\n   processes.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "delaynSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e a-\u003e Int-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor delaynSY delays the signal events by introducing identical default values It creates chain of delaySY processes",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "delaynSY",
          "normalized": "ProcId-\u003ea-\u003eInt-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ea-\u003eInt-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:delaynSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efillSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal \n   with present values by replacing absent values with a given value. The \n   output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.        \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "fillSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e a-\u003e Signal (AbstExt a)-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor fillSY creates process that fills signal with present values by replacing absent values with given value The output signal is not any more of the type AbstExt",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "fillSY",
          "normalized": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:fillSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efilterSY\u003c/a\u003e\u003c/code\u003e discards the values who do not fulfill a predicate given by a predicate function and replaces them with absent events.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "filterSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e Bool)-\u003e Signal a-\u003e Signal (AbstExt a)",
          "type": "function"
        },
        "index": {
          "description": "The process constructor filterSY discards the values who do not fulfill predicate given by predicate function and replaces them with absent events",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "filterSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:filterSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efstSY\u003c/a\u003e\u003c/code\u003e selects always the first value from a signal of pairs\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "fstSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b) -\u003e Signal a",
          "source": "src/ForSyDe-Process-SynchProc.html#fstSY",
          "type": "function"
        },
        "index": {
          "description": "The process fstSY selects always the first value from signal of pairs",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "fstSY",
          "normalized": "ProcId-\u003eSignal(a,b)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:fstSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupSY\u003c/a\u003e\u003c/code\u003e groups values into a vector of size n, which takes \n   n cycles. While the grouping takes place the output from this process \n   consists of absent values.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "groupSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e k -\u003e Signal a -\u003e Signal (AbstExt (FSVec k a))",
          "source": "src/ForSyDe-Process-SynchProc.html#groupSY",
          "type": "function"
        },
        "index": {
          "description": "The function groupSY groups values into vector of size which takes cycles While the grouping takes place the output from this process consists of absent values",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "groupSY",
          "normalized": "ProcId-\u003ea-\u003eSignal b-\u003eSignal(AbstExt(FSVec a b))",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ek-\u003eSignal a-\u003eSignal(AbstExt(FSVec k a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:groupSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003eholdSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal \n   with values by replacing absent values by the preceding present value. \n   Only in cases, where no preceding value exists, the absent value is \n   replaced by a default value. The output signal is not any more of the \n   type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "holdSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e a-\u003e Signal (AbstExt a)-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor holdSY creates process that fills signal with values by replacing absent values by the preceding present value Only in cases where no preceding value exists the absent value is replaced by default value The output signal is not any more of the type AbstExt",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "holdSY",
          "normalized": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:holdSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with one \n   input signal and one output signal.         \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mapSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b)-\u003e Signal a-\u003e Signal b",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mapSY takes an identifier and combinational function as arguments and returns process with one input signal and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mapSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mapSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapxSY\u003c/a\u003e\u003c/code\u003e creates a process network that maps a \n function onto all signals in a vector of signals. The identifier is used \n as the identifier prefix of the processes created (a number starting with 1\n will be appended to each identifier)\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mapxSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e ProcFun (a -\u003e b) -\u003e FSVec s (Signal a) -\u003e FSVec s (Signal b)",
          "source": "src/ForSyDe-Process-SynchProc.html#mapxSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mapxSY creates process network that maps function onto all signals in vector of signals The identifier is used as the identifier prefix of the processes created number starting with will be appended to each identifier",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mapxSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb)-\u003eFSVec c(Signal a)-\u003eFSVec c(Signal b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb)-\u003eFSVec s(Signal a)-\u003eFSVec s(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mapxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealy2SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealy2SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealy2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealy3SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealy3SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealy3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003emelaySY\u003c/code\u003e is used to model state machines of\n \"Mealy\" type, where the output only depends on the current state and\n the input values. The process constructor is based on the process\n constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in\n hardware, that the output operates on the current state and not on the\n next state. The process constructors takes a function to calculate the\n next state, another function to calculate the output and a value for the\n initial state.\n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \n \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e depends only on the state, but not on the input values.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealySY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "The process constructor melaySY is used to model state machines of Mealy type where the output only depends on the current state and the input values The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mooreSY depends only on the state but not on the input values",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mealySY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "moore2SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e ProcFun (a -\u003e d)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
          "type": "function"
        },
        "index": {
          "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "moore2SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:moore2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "moore3SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e ProcFun (a -\u003e e)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
          "type": "function"
        },
        "index": {
          "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "moore3SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:moore3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e is used to model state machines\n of \"Moore\" type, where the output only depends on the current\n state. The process constructor is based on the process constructor\n \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that\n the output operates on the current state and not on the next\n state. The process constructors takes a function to calculate the\n next state, another function to calculate the output and a value for\n the initial state.\n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor\n \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e depends not only on the state, but also on the input values.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mooreSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e ProcFun (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mooreSY is used to model state machines of Moore type where the output only depends on the current state The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mealySY depends not only on the state but also on the input values",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "mooreSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mooreSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanl2SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanl2SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanl2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanl3SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanl3SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanl3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state \n   machine process without output decoder. It takes an initial value and \n   a function for the next state decoder. The process constructor behaves \n   similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e and has the value of \n   the new state as its output value as illustrated by the \n   following example.  \n\u003c/p\u003e\u003cp\u003eThis is in contrast to the function \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, which has its current \n   state as its output value. \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanlSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanlSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY and has the value of the new state as its output value as illustrated by the following example This is in contrast to the function scanldSY which has its current state as its output value",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanlSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanlSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanld2SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanld2SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanld2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanld3SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanld3SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanld3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state\n  machine process without output decoder. It takes an initial value and a\n  function for the next state decoder. The process constructor behaves\n  similarly to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e. In contrast to the\n  process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e here the output value is the current state\n  and not the one of the next state.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanldSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanldSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similarly to the Haskell prelude function scanlSY In contrast to the process constructor scanlSY here the output value is the current state and not the one of the next state",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "scanldSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanldSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esndSY\u003c/a\u003e\u003c/code\u003e selects always the second value from a signal of pairs\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "sndSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b) -\u003e Signal b",
          "source": "src/ForSyDe-Process-SynchProc.html#sndSY",
          "type": "function"
        },
        "index": {
          "description": "The process sndSY selects always the second value from signal of pairs",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "sndSY",
          "normalized": "ProcId-\u003eSignal(a,b)-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b)-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:sndSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esourceSY\u003c/a\u003e\u003c/code\u003e takes a function and an initial state and generates\n   an infinite signal starting with the initial state as first output \n   followed by the recursive application of the function on the current \n   state. The state also serves as output value.             \n\u003c/p\u003e\u003cp\u003eThe process that has the infinite signal of natural numbers as output is \n con structed by                                                            \n\u003c/p\u003e\u003cp\u003esourceSY \"naturals\" (+1) 0\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "sourceSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e ProcFun (a -\u003e a) -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Process-SynchProc.html#sourceSY",
          "type": "function"
        },
        "index": {
          "description": "The process sourceSY takes function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state The state also serves as output value The process that has the infinite signal of natural numbers as output is con structed by sourceSY naturals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "sourceSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003ea)-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eProcFun(a-\u003ea)-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:sourceSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip3SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into three signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip3SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b, c) -\u003e (Signal a, Signal b, Signal c)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzip3SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip3SY unzips signal of tuples into three signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip3SY",
          "normalized": "ProcId-\u003eSignal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip4SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into four signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip4SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b, c, d) -\u003e (Signal a, Signal b, Signal c, Signal d)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzip4SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip4SY unzips signal of tuples into four signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip4SY",
          "normalized": "ProcId-\u003eSignal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip5SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into five signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip5SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b, c, d, e) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzip5SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip5SY unzips signal of tuples into five signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip5SY",
          "normalized": "ProcId-\u003eSignal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip5SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip6SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into six signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip6SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b, c, d, e, f) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e, Signal f)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzip6SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip6SY unzips signal of tuples into six signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzip6SY",
          "normalized": "ProcId-\u003eSignal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip6SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into two signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzipSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (a, b) -\u003e (Signal a, Signal b)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzipSY",
          "type": "function"
        },
        "index": {
          "description": "The process unzipSY unzips signal of tuples into two signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzipSY",
          "normalized": "ProcId-\u003eSignal(a,b)-\u003e(Signal a,Signal b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(a,b)-\u003e(Signal a,Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzipSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipxSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a vector of n signals into a signal of \n   vectors.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzipxSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (FSVec s a) -\u003e FSVec s (Signal a)",
          "source": "src/ForSyDe-Process-SynchProc.html#unzipxSY",
          "type": "function"
        },
        "index": {
          "description": "The process unzipxSY unzips vector of signals into signal of vectors",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "unzipxSY",
          "normalized": "ProcId-\u003eSignal(FSVec a b)-\u003eFSVec a(Signal b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(FSVec s a)-\u003eFSVec s(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzipxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ewhenSY\u003c/a\u003e\u003c/code\u003e creates a process that synchronizes a \n   signal of absent extended values with another signal of absent extended \n   values. The output signal has the value of the first signal whenever an \n   event has a present value and \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e when the event has an absent value.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "whenSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal (AbstExt a) -\u003e Signal (AbstExt b) -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Process-SynchProc.html#whenSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor whenSY creates process that synchronizes signal of absent extended values with another signal of absent extended values The output signal has the value of the first signal whenever an event has present value and Abst when the event has an absent value",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "whenSY",
          "normalized": "ProcId-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:whenSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip3SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal (a, b, c)",
          "source": "src/ForSyDe-Process-SynchProc.html#zip3SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip3SY works as zipSY but takes three input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip3SY",
          "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip4SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal (a, b, c, d)",
          "source": "src/ForSyDe-Process-SynchProc.html#zip4SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip4SY works as zipSY but takes four input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip4SY",
          "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes five input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip5SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal (a, b, c, d, e)",
          "source": "src/ForSyDe-Process-SynchProc.html#zip5SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip5SY works as zipSY but takes five input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip5SY",
          "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip5SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes six input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip6SY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal f -\u003e Signal (a, b, c, d, e, f)",
          "source": "src/ForSyDe-Process-SynchProc.html#zip6SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip6SY works as zipSY but takes six input signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zip6SY",
          "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip6SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e \"zips\" two incoming signals into one signal of \n   tuples.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal (a, b)",
          "source": "src/ForSyDe-Process-SynchProc.html#zipSY",
          "type": "function"
        },
        "index": {
          "description": "The process zipSY zips two incoming signals into one signal of tuples",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipSY",
          "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal(a,b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith3SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   three input signals and one output signal. \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith3SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith3SY takes an identifier and combinational function as arguments and returns process with three input signals and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith3SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith4SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   four input signals and one output signal. \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith4SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith4SY takes an identifier and combinational function as arguments and returns process with four input signals and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith4SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith5SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   five input signals and one output signal. \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith5SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e-\u003e Signal f",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith5SY takes an identifier and combinational function as arguments and returns process with five input signals and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith5SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith5SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith6SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   five input signals and one output signal. \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith6SY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e-\u003e Signal f-\u003e Signal g",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith6SY takes an identifier and combinational function as arguments and returns process with five input signals and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWith6SY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal g",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith6SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n  combinational function as arguments and returns a process with \n  two input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWithSY",
          "package": "ForSyDe",
          "signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c)-\u003e Signal a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWithSY takes an identifier and combinational function as arguments and returns process with two input signals and one output signal",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWithSY",
          "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWithSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithxSY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e, but takes a \n   vector of signals as input.                                             \n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWithxSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e ProcFun (FSVec s a -\u003e b) -\u003e FSVec s (Signal a) -\u003e Signal b",
          "source": "src/ForSyDe-Process-SynchProc.html#zipWithxSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWithxSY works as zipWithSY but takes vector of signals as input",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipWithxSY",
          "normalized": "ProcId-\u003eProcFun(FSVec a b-\u003ec)-\u003eFSVec a(Signal b)-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "Withx SY",
          "signature": "ProcId-\u003eProcFun(FSVec s a-\u003eb)-\u003eFSVec s(Signal a)-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWithxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipxSY\u003c/a\u003e\u003c/code\u003e \"zips\" a signal of vectors into a vector of signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipxSY",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e FSVec s (Signal a) -\u003e Signal (FSVec s a)",
          "source": "src/ForSyDe-Process-SynchProc.html#zipxSY",
          "type": "function"
        },
        "index": {
          "description": "The process zipxSY zips signal of vectors into vector of signals",
          "hierarchy": "ForSyDe Process SynchProc",
          "module": "ForSyDe.Process.SynchProc",
          "name": "zipxSY",
          "normalized": "ProcId-\u003eFSVec a(Signal b)-\u003eSignal(FSVec a b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "ProcId-\u003eFSVec s(Signal a)-\u003eSignal(FSVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePublicly usable functions to create primitive processes. (Reexports \n  \u003ca\u003eForSyDe.Process.SynchProc\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Process",
          "name": "Process",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Publicly usable functions to create primitive processes Reexports ForSyDe.Process.SynchProc",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "Process",
          "package": "ForSyDe",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Process Function \n\u003c/p\u003e",
          "module": "ForSyDe.Process",
          "name": "ProcFun",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Process-ProcFun.html#ProcFun",
          "type": "data"
        },
        "index": {
          "description": "Process Function",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "ProcFun",
          "package": "ForSyDe",
          "partial": "Proc Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#t:ProcFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass used to constrain the arguments (values and \u003ccode\u003eProcFun\u003c/code\u003es) taken by\n   process constructors\n\u003c/p\u003e",
          "module": "ForSyDe.Process",
          "name": "ProcType",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Process-ProcType.html#ProcType",
          "type": "class"
        },
        "index": {
          "description": "Class used to constrain the arguments values and ProcFun taken by process constructors",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "ProcType",
          "package": "ForSyDe",
          "partial": "Proc Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#t:ProcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a default value for an argument of the process function \n   when the argument is a process function itself\n\u003c/p\u003e",
          "module": "ForSyDe.Process",
          "name": "defArgPF",
          "package": "ForSyDe",
          "signature": "ProcFun (a -\u003e b) -\u003e ProcFun a -\u003e ProcFun b",
          "source": "src/ForSyDe-Process-ProcFun.html#defArgPF",
          "type": "function"
        },
        "index": {
          "description": "Sets default value for an argument of the process function when the argument is process function itself",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "defArgPF",
          "normalized": "ProcFun(a-\u003eb)-\u003eProcFun a-\u003eProcFun b",
          "package": "ForSyDe",
          "partial": "Arg PF",
          "signature": "ProcFun(a-\u003eb)-\u003eProcFun a-\u003eProcFun b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:defArgPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a default value for an argument of the process function\n\u003c/p\u003e",
          "module": "ForSyDe.Process",
          "name": "defArgVal",
          "package": "ForSyDe",
          "signature": "ProcFun (a -\u003e b) -\u003e a -\u003e ProcFun b",
          "source": "src/ForSyDe-Process-ProcFun.html#defArgVal",
          "type": "function"
        },
        "index": {
          "description": "Sets default value for an argument of the process function",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "defArgVal",
          "normalized": "ProcFun(a-\u003eb)-\u003ea-\u003eProcFun b",
          "package": "ForSyDe",
          "partial": "Arg Val",
          "signature": "ProcFun(a-\u003eb)-\u003ea-\u003eProcFun b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:defArgVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell constructor for \u003ccode\u003e\u003ca\u003eProcFun\u003c/a\u003e\u003c/code\u003e, here is an example on how to use it\n\u003c/p\u003e\u003cpre\u003e\n  plus1Fun :: ProcFun (Int -\u003e Int)\n  plus1Fun = $(newProcFun [d| plus1 :: Int -\u003e Int\n                              plus1 n = n + 1     |])\n\u003c/pre\u003e",
          "module": "ForSyDe.Process",
          "name": "newProcFun",
          "package": "ForSyDe",
          "signature": "Q [Dec] -\u003e ExpQ",
          "source": "src/ForSyDe-Process-ProcFun.html#newProcFun",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell constructor for ProcFun here is an example on how to use it plus1Fun ProcFun Int Int plus1Fun newProcFun plus1 Int Int plus1",
          "hierarchy": "ForSyDe Process",
          "module": "ForSyDe.Process",
          "name": "newProcFun",
          "normalized": "Q[Dec]-\u003eExpQ",
          "package": "ForSyDe",
          "partial": "Proc Fun",
          "signature": "Q[Dec]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:newProcFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e is used to extend existing data types with the value\n  'absent', which models the absence of a value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "AbsentExt",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-AbsentExt.html",
          "type": "module"
        },
        "index": {
          "description": "The AbstExt is used to extend existing data types with the value absent which models the absence of value",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "AbsentExt",
          "package": "ForSyDe",
          "partial": "Absent Ext",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e has two constructors. The constructor \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e is used to model the absence of a value, while the constructor \u003ccode\u003e\u003ca\u003ePrst\u003c/a\u003e\u003c/code\u003e is used to model present values.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "AbstExt",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
          "type": "data"
        },
        "index": {
          "description": "The data type AbstExt has two constructors The constructor Abst is used to model the absence of value while the constructor Prst is used to model present values",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "AbstExt",
          "package": "ForSyDe",
          "partial": "Abst Ext",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#t:AbstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "Abst",
          "package": "ForSyDe",
          "signature": "Abst",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "Abst",
          "package": "ForSyDe",
          "partial": "Abst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:Abst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "Prst",
          "package": "ForSyDe",
          "signature": "Prst a",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "Prst",
          "package": "ForSyDe",
          "partial": "Prst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:Prst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExt\u003c/a\u003e\u003c/code\u003e converts a usual value to a present value. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "abstExt",
          "package": "ForSyDe",
          "signature": "a -\u003e AbstExt a",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#abstExt",
          "type": "function"
        },
        "index": {
          "description": "The function abstExt converts usual value to present value",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "abstExt",
          "normalized": "a-\u003eAbstExt a",
          "package": "ForSyDe",
          "partial": "Ext",
          "signature": "a-\u003eAbstExt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:abstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e extends a function in order to process absent extended values. If the input is (\"bottom\"), the output will also be  (\"bottom\").\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "abstExtFunc",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#abstExtFunc",
          "type": "function"
        },
        "index": {
          "description": "The function abstExtFunc extends function in order to process absent extended values If the input is bottom the output will also be bottom",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "abstExtFunc",
          "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "package": "ForSyDe",
          "partial": "Ext Func",
          "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:abstExtFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e converts a value from a extended value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "fromAbstExt",
          "package": "ForSyDe",
          "signature": "a -\u003e AbstExt a -\u003e a",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#fromAbstExt",
          "type": "function"
        },
        "index": {
          "description": "The function fromAbstExt converts value from extended value",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "fromAbstExt",
          "normalized": "a-\u003eAbstExt a-\u003ea",
          "package": "ForSyDe",
          "partial": "Abst Ext",
          "signature": "a-\u003eAbstExt a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:fromAbstExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisAbsent\u003c/a\u003e\u003c/code\u003e checks for the absence of a value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "isAbsent",
          "package": "ForSyDe",
          "signature": "AbstExt a -\u003e Bool",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#isAbsent",
          "type": "function"
        },
        "index": {
          "description": "The functions isAbsent checks for the absence of value",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "isAbsent",
          "normalized": "AbstExt a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Absent",
          "signature": "AbstExt a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:isAbsent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisPresent\u003c/a\u003e\u003c/code\u003e checks for the presence of a value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "isPresent",
          "package": "ForSyDe",
          "signature": "AbstExt a -\u003e Bool",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#isPresent",
          "type": "function"
        },
        "index": {
          "description": "The functions isPresent checks for the presence of value",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "isPresent",
          "normalized": "AbstExt a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Present",
          "signature": "AbstExt a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:isPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epsi\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e and should be used in future.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "psi",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
          "source": "src/ForSyDe-Shallow-AbsentExt.html#psi",
          "type": "function"
        },
        "index": {
          "description": "The function psi is identical to abstExtFunc and should be used in future",
          "hierarchy": "ForSyDe Shallow AbsentExt",
          "module": "ForSyDe.Shallow.AbsentExt",
          "name": "psi",
          "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "package": "ForSyDe",
          "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdaptivity Library, yet to be completed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "AdaptivityLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-AdaptivityLib.html",
          "type": "module"
        },
        "index": {
          "description": "Adaptivity Library yet to be completed",
          "hierarchy": "ForSyDe Shallow AdaptivityLib",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "AdaptivityLib",
          "package": "ForSyDe",
          "partial": "Adaptivity Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyf2SY",
          "package": "ForSyDe",
          "signature": "Signal (a -\u003e c -\u003e d) -\u003e Signal a -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyf2SY",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AdaptivityLib",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyf2SY",
          "normalized": "Signal(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyf2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyf3SY",
          "package": "ForSyDe",
          "signature": "Signal (a -\u003e c -\u003e d -\u003e e) -\u003e Signal a -\u003e Signal c -\u003e Signal d -\u003e Signal e",
          "source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyf3SY",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AdaptivityLib",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyf3SY",
          "normalized": "Signal(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyf3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyfSY",
          "package": "ForSyDe",
          "signature": "Signal (a -\u003e b) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyfSY",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AdaptivityLib",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyfSY",
          "normalized": "Signal(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyfSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyfU",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyfU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow AdaptivityLib",
          "module": "ForSyDe.Shallow.AdaptivityLib",
          "name": "applyfU",
          "normalized": "Int-\u003eSignal([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "Int-\u003eSignal([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyfU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt defines the bit vector operations from/to integer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "BitVector",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-BitVector.html",
          "type": "module"
        },
        "index": {
          "description": "It defines the bit vector operations from to integer",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "BitVector",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.BitVector",
          "name": "BitVector",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-BitVector.html#BitVector",
          "type": "type"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "BitVector",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#t:BitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Parity",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-BitVector.html#Parity",
          "type": "data"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Parity",
          "package": "ForSyDe",
          "partial": "Parity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#t:Parity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Even",
          "package": "ForSyDe",
          "signature": "Even",
          "source": "src/ForSyDe-Shallow-BitVector.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Even",
          "package": "ForSyDe",
          "partial": "Even",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:Even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Odd",
          "package": "ForSyDe",
          "signature": "Odd",
          "source": "src/ForSyDe-Shallow-BitVector.html#Parity",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "Odd",
          "package": "ForSyDe",
          "partial": "Odd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:Odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo add even parity bit on the bit-vector in the tail.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addEvenParityBit",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-BitVector.html#addEvenParityBit",
          "type": "function"
        },
        "index": {
          "description": "To add even parity bit on the bit-vector in the tail",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addEvenParityBit",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "partial": "Even Parity Bit",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addEvenParityBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo add odd parity bit on the bit-vector in the tail.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addOddParityBit",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-BitVector.html#addOddParityBit",
          "type": "function"
        },
        "index": {
          "description": "To add odd parity bit on the bit-vector in the tail",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addOddParityBit",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "partial": "Odd Parity Bit",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addOddParityBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addParityBit",
          "package": "ForSyDe",
          "signature": "Parity -\u003e Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-BitVector.html#addParityBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "addParityBit",
          "normalized": "Parity-\u003eVector a-\u003eVector a",
          "package": "ForSyDe",
          "partial": "Parity Bit",
          "signature": "Parity-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addParityBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo transform the input bit-vecotr to an integer.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "bitVectorToInt",
          "package": "ForSyDe",
          "signature": "BitVector -\u003e Integer",
          "source": "src/ForSyDe-Shallow-BitVector.html#bitVectorToInt",
          "type": "function"
        },
        "index": {
          "description": "To transform the input bit-vecotr to an integer",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "bitVectorToInt",
          "normalized": "BitVector-\u003eInteger",
          "package": "ForSyDe",
          "partial": "Vector To Int",
          "signature": "BitVector-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:bitVectorToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo transform the input integer to a bit-vector with specified number of\n bits.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "intToBitVector",
          "package": "ForSyDe",
          "signature": "Int-\u003e Integer-\u003e BitVector",
          "type": "function"
        },
        "index": {
          "description": "To transform the input integer to bit-vector with specified number of bits",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "intToBitVector",
          "normalized": "Int-\u003eInteger-\u003eBitVector",
          "package": "ForSyDe",
          "partial": "To Bit Vector",
          "signature": "Int-\u003eInteger-\u003eBitVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:intToBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo judge whether the input bit-vector is in a proper form.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isBitVector",
          "package": "ForSyDe",
          "signature": "Vector t-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "To judge whether the input bit-vector is in proper form",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isBitVector",
          "normalized": "Vector a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Bit Vector",
          "signature": "Vector t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo check the even parity of the bit-vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isEvenParity",
          "package": "ForSyDe",
          "signature": "Vector t -\u003e Bool",
          "source": "src/ForSyDe-Shallow-BitVector.html#isEvenParity",
          "type": "function"
        },
        "index": {
          "description": "To check the even parity of the bit-vector",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isEvenParity",
          "normalized": "Vector a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Even Parity",
          "signature": "Vector t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isEvenParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo check the odd parity of the bit-vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isOddParity",
          "package": "ForSyDe",
          "signature": "Vector t -\u003e Bool",
          "source": "src/ForSyDe-Shallow-BitVector.html#isOddParity",
          "type": "function"
        },
        "index": {
          "description": "To check the odd parity of the bit-vector",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "isOddParity",
          "normalized": "Vector a-\u003eBool",
          "package": "ForSyDe",
          "partial": "Odd Parity",
          "signature": "Vector t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isOddParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo remove the parity bit in the tail.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "removeParityBit",
          "package": "ForSyDe",
          "signature": "Vector t -\u003e Vector t",
          "source": "src/ForSyDe-Shallow-BitVector.html#removeParityBit",
          "type": "function"
        },
        "index": {
          "description": "To remove the parity bit in the tail",
          "hierarchy": "ForSyDe Shallow BitVector",
          "module": "ForSyDe.Shallow.BitVector",
          "name": "removeParityBit",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "partial": "Parity Bit",
          "signature": "Vector t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:removeParityBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the ForSyDe library for continuous time MoC (CT-MoC).\n Revision: $Revision: 1.7 $\n Id: $Id: CTLib.hs,v 1.7 2007\u003cem\u003e07\u003c/em\u003e11 08:38:34 axel Exp $\n It is still experimental.\n Right now there are only constructors \u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecombCT2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eshiftCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emealyCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emooreCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emultCT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eabsCT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe main idea is to represent continuous time signals as functions\n \u003ccode\u003eReal --\u003e a\u003c/code\u003e with \u003ccode\u003ea\u003c/code\u003e being a numerical type. This allows us to represent a \n continuous time signal without loss of information because no sampling or \n ADC is required. The sampling occurs only when a signal is evaluated, \n for instance when it is plotted. \n\u003c/p\u003e\u003cp\u003eThus, a \u003cem\u003esignal\u003c/em\u003e is represented as a sequence of functions and intervals. For\n instance a signal \n\u003c/p\u003e\u003cpre\u003es = \u003c(sin,[0,100])\u003e\u003c/pre\u003e\u003cp\u003erepresents a sinus signal in the interval between 0 and 100. The signal \n\u003c/p\u003e\u003cpre\u003es2 = \u003c(f1(x)=2x, [0,2]), (f2(x)=3+x,[2,4])\u003e\u003c/pre\u003e\u003cp\u003edefines a signal that is defined by function \u003ccode\u003ef1\u003c/code\u003e in the interval \u003ccode\u003e[0,2]\u003c/code\u003e \n and by function \u003ccode\u003ef2\u003c/code\u003e in the interval \u003ccode\u003e[2,4]\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eA \u003cem\u003eprocess\u003c/em\u003e transforms the incoming functions into outgoing functions. \n The approach is described in more detail in the ANDRES deliverable D1.1a.\n Here we only briefly comment the main functions and constructors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "CTLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-CTLib.html",
          "type": "module"
        },
        "index": {
          "description": "This is the ForSyDe library for continuous time MoC CT-MoC Revision Revision Id Id CTLib.hs axel Exp It is still experimental Right now there are only constructors combCT combCT2 delayCT shiftCT mealyCT mooreCT scaleCT addCT multCT and absCT The main idea is to represent continuous time signals as functions Real with being numerical type This allows us to represent continuous time signal without loss of information because no sampling or ADC is required The sampling occurs only when signal is evaluated for instance when it is plotted Thus signal is represented as sequence of functions and intervals For instance signal sin represents sinus signal in the interval between and The signal s2 f1 f2 defines signal that is defined by function f1 in the interval and by function f2 in the interval process transforms the incoming functions into outgoing functions The approach is described in more detail in the ANDRES deliverable D1.1a Here we only briefly comment the main functions and constructors",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "CTLib",
          "package": "ForSyDe",
          "partial": "CTLib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the digital-analog conversion we have two different possibilities\n which is determined by this data type \u003ccode\u003e\u003ca\u003eDACMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DACMode",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
          "type": "data"
        },
        "index": {
          "description": "For the digital-analog conversion we have two different possibilities which is determined by this data type DACMode",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DACMode",
          "package": "ForSyDe",
          "partial": "DACMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#t:DACMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a sub-signal of a continuous signal. It consisits of the \n  function and the interval on which the function is defined.\n The continuous time signal is then defined as a sequence of SubsigCT \n elements: Signal SubsigCT\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "SubsigCT",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-CTLib.html#SubsigCT",
          "type": "data"
        },
        "index": {
          "description": "The type of sub-signal of continuous signal It consisits of the function and the interval on which the function is defined The continuous time signal is then defined as sequence of SubsigCT elements Signal SubsigCT",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "SubsigCT",
          "package": "ForSyDe",
          "partial": "Subsig CT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#t:SubsigCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe last digital value is frozen\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DAhold",
          "package": "ForSyDe",
          "signature": "DAhold",
          "source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
          "type": "function"
        },
        "index": {
          "description": "the last digital value is frozen",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DAhold",
          "package": "ForSyDe",
          "partial": "DAhold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:DAhold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinear interpolation\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DAlinear",
          "package": "ForSyDe",
          "signature": "DAlinear",
          "source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
          "type": "function"
        },
        "index": {
          "description": "linear interpolation",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "DAlinear",
          "package": "ForSyDe",
          "partial": "DAlinear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:DAlinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.CTLib",
          "name": "SubsigCT",
          "package": "ForSyDe",
          "signature": "SubsigCT (Rational -\u003e a, (Rational, Rational))",
          "source": "src/ForSyDe-Shallow-CTLib.html#SubsigCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "SubsigCT",
          "normalized": "SubsigCT(Rational-\u003ea,(Rational,Rational))",
          "package": "ForSyDe",
          "partial": "Subsig CT",
          "signature": "SubsigCT(Rational-\u003ea,(Rational,Rational))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:SubsigCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ea2dConverter\u003c/a\u003e\u003c/code\u003e converts a continuous time signal to\n   an untimed or synchronous signal. The first parameter gives the\n   sampling period of the converter.\n\u003c/p\u003e\u003cp\u003eNote, that the process \u003ccode\u003e\u003ca\u003ea2dConverter\u003c/a\u003e\u003c/code\u003e is an ideal component,\n   i.e. there are no losses due to a limited resolution due to a fixed\n   number of bits.  \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "a2dConverter",
          "package": "ForSyDe",
          "signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process a2dConverter converts continuous time signal to an untimed or synchronous signal The first parameter gives the sampling period of the converter Note that the process a2dConverter is an ideal component i.e there are no losses due to limited resolution due to fixed number of bits",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "a2dConverter",
          "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Converter",
          "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:a2dConverter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eabsCT\u003c/a\u003e\u003c/code\u003e takes the absolute value of a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "absCT",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "absCT takes the absolute value of signal",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "absCT",
          "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:absCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eaddCT\u003c/a\u003e\u003c/code\u003e adds two input signals together.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "addCT",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "addCT adds two input signals together",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "addCT",
          "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:addCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplyF1 applies a function on a sub-signal, which means the function of \n the subsignal is transformed to another function:\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyF1",
          "package": "ForSyDe",
          "signature": "((Rational -\u003e a) -\u003e Rational -\u003e b) -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT b)",
          "source": "src/ForSyDe-Shallow-CTLib.html#applyF1",
          "type": "function"
        },
        "index": {
          "description": "applyF1 applies function on sub-signal which means the function of the subsignal is transformed to another function",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyF1",
          "normalized": "((Rational-\u003ea)-\u003eRational-\u003eb)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)",
          "package": "ForSyDe",
          "signature": "((Rational-\u003ea)-\u003eRational-\u003eb)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplyF2 works just like applyF1 but operates on two incoming signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyF2",
          "package": "ForSyDe",
          "signature": "((Rational -\u003e a) -\u003e (Rational -\u003e b) -\u003e Rational -\u003e c) -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT b) -\u003e Signal (SubsigCT c)",
          "source": "src/ForSyDe-Shallow-CTLib.html#applyF2",
          "type": "function"
        },
        "index": {
          "description": "applyF2 works just like applyF1 but operates on two incoming signals",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyF2",
          "normalized": "((Rational-\u003ea)-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "package": "ForSyDe",
          "signature": "((Rational-\u003ea)-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplyG1 is used to apply a next-state function. A very interesting\n question is, what should be an argument to the next-state function: \n the incoming function, defining the value of the input signal?\n or the incoming function and the incoming interval?\n or the value of the incoming signal at a particular point, e.g. at the \n left most point of the interval?\n To give the next-state function the interval itself as argument, would mean\n that the process becomes time variant process, i.e. its behaviour is \n dependent on the absolute time values. This is not a good thing to have!\n Another possibility may be to give a sub-signal that is relative to the \n current evaluation, i.e. the left most point is always 0. Would that make\n sense?\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyG1",
          "package": "ForSyDe",
          "signature": "(a -\u003e (Rational -\u003e b) -\u003e a) -\u003e a -\u003e Signal (SubsigCT b) -\u003e a",
          "source": "src/ForSyDe-Shallow-CTLib.html#applyG1",
          "type": "function"
        },
        "index": {
          "description": "applyG1 is used to apply next-state function very interesting question is what should be an argument to the next-state function the incoming function defining the value of the input signal or the incoming function and the incoming interval or the value of the incoming signal at particular point e.g at the left most point of the interval To give the next-state function the interval itself as argument would mean that the process becomes time variant process i.e its behaviour is dependent on the absolute time values This is not good thing to have Another possibility may be to give sub-signal that is relative to the current evaluation i.e the left most point is always Would that make sense",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "applyG1",
          "normalized": "(a-\u003e(Rational-\u003eb)-\u003ea)-\u003ea-\u003eSignal(SubsigCT b)-\u003ea",
          "package": "ForSyDe",
          "signature": "(a-\u003e(Rational-\u003eb)-\u003ea)-\u003ea-\u003eSignal(SubsigCT b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyG1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e is a process constructor with one input and one output signal.\n It instantiates a combinatorial, stateless process.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "combCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e ((Rational -\u003e a) -\u003e Rational -\u003e a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "combCT is process constructor with one input and one output signal It instantiates combinatorial stateless process",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "combCT",
          "normalized": "Rational-\u003e((Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003e((Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:combCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombCT2\u003c/a\u003e\u003c/code\u003e is a process constructor just like \u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e but operates on\n two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "combCT2",
          "package": "ForSyDe",
          "signature": "Rational-\u003e ((Rational -\u003e a) -\u003e (Rational -\u003e a) -\u003e Rational -\u003e a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "combCT2 is process constructor just like combCT but operates on two input signals",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "combCT2",
          "normalized": "Rational-\u003e((Rational-\u003ea)-\u003e(Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003e((Rational-\u003ea)-\u003e(Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:combCT2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstCT generates a constant signal for a given time duration.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "constCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e a-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "constCT generates constant signal for given time duration",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "constCT",
          "normalized": "Rational-\u003ea-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003ea-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:constCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecutEq partitions the two signals such that the partitioning are identical\n in both result signals, but only up to the duration of the shorter of the \n two signals:\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "cutEq",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a) -\u003e Signal (SubsigCT b) -\u003e (Signal (SubsigCT a), Signal (SubsigCT b))",
          "source": "src/ForSyDe-Shallow-CTLib.html#cutEq",
          "type": "function"
        },
        "index": {
          "description": "cutEq partitions the two signals such that the partitioning are identical in both result signals but only up to the duration of the shorter of the two signals",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "cutEq",
          "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003e(Signal(SubsigCT a),Signal(SubsigCT b))",
          "package": "ForSyDe",
          "partial": "Eq",
          "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003e(Signal(SubsigCT a),Signal(SubsigCT b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:cutEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e converts an untimes or synchronous signal into a \n continuous time signal.\n The process \u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e converts a signal of the digital domain\n into a continuous time signal. There are two modes, \u003ccode\u003e\u003ca\u003eDAlinear\u003c/a\u003e\u003c/code\u003e,\n which makes a smooth transition between adjacent digital values and\n \u003ccode\u003e\u003ca\u003eDAhold\u003c/a\u003e\u003c/code\u003e, where the analog value directly follows the digital\n value. This means that in \u003ccode\u003e\u003ca\u003eDAhold\u003c/a\u003e\u003c/code\u003e-mode a staircase function\n remains a staircase function, while in \u003ccode\u003e\u003ca\u003eDAlinear\u003c/a\u003e\u003c/code\u003e the staircase\n function would resemble at least partially a \u003cem\u003esaw tooth\u003c/em\u003e-curve. \n\u003c/p\u003e\u003cp\u003eThe resolution of the converter is given by the parameter\n \u003ccode\u003e\u003ca\u003etimeStep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, that the process \u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e is an ideal component, i.e. there\n are no losses due to a limited resolution due to a fixed number of bits. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "d2aConverter",
          "package": "ForSyDe",
          "signature": "DACMode-\u003e Rational-\u003e Signal a-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "d2aConverter converts an untimes or synchronous signal into continuous time signal The process d2aConverter converts signal of the digital domain into continuous time signal There are two modes DAlinear which makes smooth transition between adjacent digital values and DAhold where the analog value directly follows the digital value This means that in DAhold mode staircase function remains staircase function while in DAlinear the staircase function would resemble at least partially saw tooth curve The resolution of the converter is given by the parameter timeStep Note that the process d2aConverter is an ideal component i.e there are no losses due to limited resolution due to fixed number of bits",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "d2aConverter",
          "normalized": "DACMode-\u003eRational-\u003eSignal a-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "Converter",
          "signature": "DACMode-\u003eRational-\u003eSignal a-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:d2aConverter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e is a delay process which simply delays the\n output but does not buffer it. The value at each time t is the same as \n for the input signal, after the initial delay.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "delayCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "delayCT is delay process which simply delays the output but does not buffer it The value at each time is the same as for the input signal after the initial delay",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "delayCT",
          "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:delayCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.CTLib",
          "name": "dropCT",
          "package": "ForSyDe",
          "signature": "Rational -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT a)",
          "source": "src/ForSyDe-Shallow-CTLib.html#dropCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "dropCT",
          "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:dropCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.CTLib",
          "name": "duration",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a) -\u003e Rational",
          "source": "src/ForSyDe-Shallow-CTLib.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "duration",
          "normalized": "Signal(SubsigCT a)-\u003eRational",
          "package": "ForSyDe",
          "signature": "Signal(SubsigCT a)-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitCT takes an initial signal, outputs it and then copies its second \n input signal, which is delayed by the duration of the initial signal.\n The delay is realized by \u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "initCT",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "initCT takes an initial signal outputs it and then copies its second input signal which is delayed by the duration of the initial signal The delay is realized by delayCT",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "initCT",
          "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:initCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state-full constructor \u003ccode\u003e\u003ca\u003emealyCT\u003c/a\u003e\u003c/code\u003e resembles a Mealy machine.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "mealyCT",
          "package": "ForSyDe",
          "signature": "(a -\u003e Rational)-\u003e (a -\u003e (Rational -\u003e b) -\u003e a)-\u003e (a -\u003e (Rational -\u003e b) -\u003e Rational -\u003e c)-\u003e a-\u003e Signal (SubsigCT b)-\u003e Signal (SubsigCT c)",
          "type": "function"
        },
        "index": {
          "description": "The state-full constructor mealyCT resembles Mealy machine",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "mealyCT",
          "normalized": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:mealyCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state-full constructor \u003ccode\u003e\u003ca\u003emooreCT\u003c/a\u003e\u003c/code\u003e resembles a Moore machine.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "mooreCT",
          "package": "ForSyDe",
          "signature": "(a -\u003e Rational)-\u003e (a -\u003e (Rational -\u003e b) -\u003e a)-\u003e (a -\u003e Rational -\u003e c)-\u003e a-\u003e Signal (SubsigCT b)-\u003e Signal (SubsigCT c)",
          "type": "function"
        },
        "index": {
          "description": "The state-full constructor mooreCT resembles Moore machine",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "mooreCT",
          "normalized": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:mooreCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emultCT\u003c/a\u003e\u003c/code\u003e multiplies two input signals together.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "multCT",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "multCT multiplies two input signals together",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "multCT",
          "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:multCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplot\u003c/a\u003e\u003c/code\u003e plots one signal in a graph with the default sampling period \n of 1/200 of the duration of the signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plot",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "plot plots one signal in graph with the default sampling period of of the duration of the signal",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plot",
          "normalized": "Signal(SubsigCT a)-\u003eIO String",
          "package": "ForSyDe",
          "signature": "Signal(SubsigCT a)-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT\u003c/a\u003e\u003c/code\u003e plots a list of signals in the same graph. The sampling period \n has to be given as argument. In the graph default label names are used\n to identify the signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plotCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e [Signal (SubsigCT a)]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "plotCT plots list of signals in the same graph The sampling period has to be given as argument In the graph default label names are used to identify the signals",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plotCT",
          "normalized": "Rational-\u003e[Signal(SubsigCT a)]-\u003eIO String",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003e[Signal(SubsigCT a)]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plotCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT'\u003c/a\u003e\u003c/code\u003e is the work horse for plotting and the functions \u003ccode\u003e\u003ca\u003eplot\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eplotCT\u003c/a\u003e\u003c/code\u003e use it with specialising arguments.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT'\u003c/a\u003e\u003c/code\u003e plots all the signals in the list in one graph. If a label is\n   given for a signal, this label appears in the graph. If the label string is \n   \"\", a default label like \"sig-1\"  is used.\n\u003c/p\u003e\u003cp\u003eIn addition to displaying the graph on the screen, the following files\n   are created in directory ./fig:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ect-moc-graph.eps\u003c/dt\u003e\u003cdd\u003e          an eps file of the complete graph\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph.pdf\u003c/dt\u003e\u003cdd\u003e          A pdf file of the complete graph\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph-latex.eps\u003c/dt\u003e\u003cdd\u003e    included by ct-moc-graph-latex.tex\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph-latex.tex\u003c/dt\u003e\u003cdd\u003e    This is the tex file that should be included\n                               by your latex document. It in turn includes\n \t\t\t       the file ct-moc-graph-latex.eps.\n\t\t\t       These two files have to be used together;\n \t\t\t       the .eps file contains only the graphics,\n\t\t\t       while the .tex file contains the labels and \n                               text.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plotCT'",
          "package": "ForSyDe",
          "signature": "Rational-\u003e [(Signal (SubsigCT a), String)]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "plotCT is the work horse for plotting and the functions plot and plotCT use it with specialising arguments plotCT plots all the signals in the list in one graph If label is given for signal this label appears in the graph If the label string is default label like sig-1 is used In addition to displaying the graph on the screen the following files are created in directory fig ct-moc-graph.eps an eps file of the complete graph ct-moc-graph.pdf pdf file of the complete graph ct-moc-graph-latex.eps included by ct-moc-graph-latex.tex ct-moc-graph-latex.tex This is the tex file that should be included by your latex document It in turn includes the file ct-moc-graph-latex.eps These two files have to be used together the eps file contains only the graphics while the tex file contains the labels and text",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "plotCT'",
          "normalized": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
          "package": "ForSyDe",
          "partial": "CT'",
          "signature": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plotCT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escaleCT\u003c/a\u003e\u003c/code\u003e amplifies an input by a constant factor:\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "scaleCT",
          "package": "ForSyDe",
          "signature": "a-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "scaleCT amplifies an input by constant factor",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "scaleCT",
          "normalized": "a-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "a-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:scaleCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshiftCT\u003c/a\u003e\u003c/code\u003e  shifts the shape of the input signal by delay \n to the right.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "shiftCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "shiftCT shifts the shape of the input signal by delay to the right",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "shiftCT",
          "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:shiftCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowParts\u003c/a\u003e\u003c/code\u003e allows to see how a signal is partitioned into sub-signals.\n It returns the sequence of intervals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "showParts",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a)-\u003e [(Double, Double)]",
          "type": "function"
        },
        "index": {
          "description": "showParts allows to see how signal is partitioned into sub-signals It returns the sequence of intervals",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "showParts",
          "normalized": "Signal(SubsigCT a)-\u003e[(Double,Double)]",
          "package": "ForSyDe",
          "partial": "Parts",
          "signature": "Signal(SubsigCT a)-\u003e[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:showParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esineWave\u003c/a\u003e\u003c/code\u003e generates a sinus signal with the given frequency defined\n over  a given period. The function is defined as \u003ccode\u003ef(x)=sin(2*pi*freq*x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "sineWave",
          "package": "ForSyDe",
          "signature": "Rational-\u003e (Rational, Rational)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "sineWave generates sinus signal with the given frequency defined over given period The function is defined as sin pi freq",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "sineWave",
          "normalized": "Rational-\u003e(Rational,Rational)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "Wave",
          "signature": "Rational-\u003e(Rational,Rational)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:sineWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.CTLib",
          "name": "startTime",
          "package": "ForSyDe",
          "signature": "Signal (SubsigCT a) -\u003e Rational",
          "source": "src/ForSyDe-Shallow-CTLib.html#startTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "startTime",
          "normalized": "Signal(SubsigCT a)-\u003eRational",
          "package": "ForSyDe",
          "partial": "Time",
          "signature": "Signal(SubsigCT a)-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:startTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.CTLib",
          "name": "takeCT",
          "package": "ForSyDe",
          "signature": "Rational -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT a)",
          "source": "src/ForSyDe-Shallow-CTLib.html#takeCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "takeCT",
          "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:takeCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constant gives the default time step for sampling and plotting.\n Its value is 10ns.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "timeStep",
          "package": "ForSyDe",
          "signature": "Rational",
          "source": "src/ForSyDe-Shallow-CTLib.html#timeStep",
          "type": "function"
        },
        "index": {
          "description": "This constant gives the default time step for sampling and plotting Its value is ns",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "timeStep",
          "package": "ForSyDe",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:timeStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evcdGen dumps the values of a list of signal in VCD (Value Change Dump) format \n(IEEE Std 1364-2001), which is part of the Verilog standard \n(\u003ca\u003ehttp://en.wikipedia.org/wiki/Value_change_dump\u003c/a\u003e).\nThere are public domain tools to view VCD files. For instance, \nGTKWave (\u003ca\u003ehttp://home.nc.rr.com/gtkwave/\u003c/a\u003e) is a popular viewer available for\nWindows and Linux.\n\u003c/p\u003e\u003cp\u003eThe values are written to the file .\u003cem\u003efig\u003c/em\u003ect-moc.vcd. If the file exists, it\nis overwritten. If the directory does not exist, it is created.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "vcdGen",
          "package": "ForSyDe",
          "signature": "Rational-\u003e [(Signal (SubsigCT a), String)]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "vcdGen dumps the values of list of signal in VCD Value Change Dump format IEEE Std which is part of the Verilog standard http en.wikipedia.org wiki Value change dump There are public domain tools to view VCD files For instance GTKWave http home.nc.rr.com gtkwave is popular viewer available for Windows and Linux The values are written to the file fig ct-moc.vcd If the file exists it is overwritten If the directory does not exist it is created",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "vcdGen",
          "normalized": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
          "package": "ForSyDe",
          "partial": "Gen",
          "signature": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:vcdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezeroCT generates a constant 0 signal for the given time duration.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "zeroCT",
          "package": "ForSyDe",
          "signature": "Rational-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "zeroCT generates constant signal for the given time duration",
          "hierarchy": "ForSyDe Shallow CTLib",
          "module": "ForSyDe.Shallow.CTLib",
          "name": "zeroCT",
          "normalized": "Rational-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "CT",
          "signature": "Rational-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:zeroCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CoreLib is the base for all MoC libraries and is a container\n that includes the following libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Signal\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Vector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.AbsentExt\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.CoreLib",
          "name": "CoreLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-CoreLib.html",
          "type": "module"
        },
        "index": {
          "description": "The CoreLib is the base for all MoC libraries and is container that includes the following libraries ForSyDe.Shallow.Signal ForSyDe.Shallow.Vector ForSyDe.Shallow.AbsentExt",
          "hierarchy": "ForSyDe Shallow CoreLib",
          "module": "ForSyDe.Shallow.CoreLib",
          "name": "CoreLib",
          "package": "ForSyDe",
          "partial": "Core Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CoreLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes the standard Discrete Fourier Transform (DFT)\n function, and a fast Fourier transform (FFT) algorithm, for\n computing the DFT, when the input vectors' length is a power of 2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.DFT",
          "name": "DFT",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-DFT.html",
          "type": "module"
        },
        "index": {
          "description": "This module includes the standard Discrete Fourier Transform DFT function and fast Fourier transform FFT algorithm for computing the DFT when the input vectors length is power of",
          "hierarchy": "ForSyDe Shallow DFT",
          "module": "ForSyDe.Shallow.DFT",
          "name": "DFT",
          "package": "ForSyDe",
          "partial": "DFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e performs a standard Discrete Fourier Transformation\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DFT",
          "name": "dft",
          "package": "ForSyDe",
          "signature": "Int -\u003e Vector (Complex Double) -\u003e Vector (Complex Double)",
          "source": "src/ForSyDe-Shallow-DFT.html#dft",
          "type": "function"
        },
        "index": {
          "description": "The function dft performs standard Discrete Fourier Transformation",
          "hierarchy": "ForSyDe Shallow DFT",
          "module": "ForSyDe.Shallow.DFT",
          "name": "dft",
          "normalized": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
          "package": "ForSyDe",
          "signature": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e implements a fast Fourier transform (FFT) algorithm, for computing the DFT, when the size N is a power of 2.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DFT",
          "name": "fft",
          "package": "ForSyDe",
          "signature": "Int -\u003e Vector (Complex Double) -\u003e Vector (Complex Double)",
          "source": "src/ForSyDe-Shallow-DFT.html#fft",
          "type": "function"
        },
        "index": {
          "description": "The function fft implements fast Fourier transform FFT algorithm for computing the DFT when the size is power of",
          "hierarchy": "ForSyDe Shallow DFT",
          "module": "ForSyDe.Shallow.DFT",
          "name": "fft",
          "normalized": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
          "package": "ForSyDe",
          "signature": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe dataflow library defines data types, process constructors and\n functions to model dataflow process networks, as described by Lee and\n Parks in Dataflow process networks, IEEE Proceedings, 1995 ([LeeParks95]).\n\u003c/p\u003e\u003cp\u003eEach process is defined by a set of firing rules and corresponding\n actions. A process fires, if the incoming signals match a firing\n rule. Then the process consumes the matched tokens and executes the\n action corresponding to the firing rule.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "DataflowLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-DataflowLib.html",
          "type": "module"
        },
        "index": {
          "description": "The dataflow library defines data types process constructors and functions to model dataflow process networks as described by Lee and Parks in Dataflow process networks IEEE Proceedings LeeParks95 Each process is defined by set of firing rules and corresponding actions process fires if the incoming signals match firing rule Then the process consumes the matched tokens and executes the action corresponding to the firing rule",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "DataflowLib",
          "package": "ForSyDe",
          "partial": "Dataflow Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "FiringToken",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "FiringToken",
          "package": "ForSyDe",
          "partial": "Firing Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#t:FiringToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "Value",
          "package": "ForSyDe",
          "signature": "Value a",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "Value",
          "package": "ForSyDe",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "Wild",
          "package": "ForSyDe",
          "signature": "Wild",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "Wild",
          "package": "ForSyDe",
          "partial": "Wild",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:Wild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003emapDF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions and generates a data flow process with one input and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mapDF",
          "package": "ForSyDe",
          "signature": "[[FiringToken a]] -\u003e (Signal a -\u003e [[b]]) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#mapDF",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mapDF takes list of firing rules list of corresponding output functions and generates data flow process with one input and one output signal",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mapDF",
          "normalized": "[[FiringToken a]]-\u003e(Signal a-\u003e[[b]])-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "DF",
          "signature": "[[FiringToken a]]-\u003e(Signal a-\u003e[[b]])-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mapDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003emealyDF\u003c/code\u003e implements the most general state machine in the ForSyDe methodology. It takes a set of firing rules, a set of corresponding next state functions and a set of output functions as argument. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state and output functions are executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mealyDF",
          "package": "ForSyDe",
          "signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e (b -\u003e Signal a -\u003e [[c]]) -\u003e b -\u003e Signal a -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#mealyDF",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealyDF implements the most general state machine in the ForSyDe methodology It takes set of firing rules set of corresponding next state functions and set of output functions as argument firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state and output functions are executed and the tokens matching the pattern are consumed",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mealyDF",
          "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003e(a-\u003eSignal b-\u003e[[c]])-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "DF",
          "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003e(b-\u003eSignal a-\u003e[[c]])-\u003eb-\u003eSignal a-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mealyDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003emooreDF\u003c/code\u003e implements a Moore finite state machine in the ForSyDe methodology. It takes a set of firing rules, a set of corresponding next state functions and a set of output functions as argument. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state and output functions are executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mooreDF",
          "package": "ForSyDe",
          "signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#mooreDF",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mooreDF implements Moore finite state machine in the ForSyDe methodology It takes set of firing rules set of corresponding next state functions and set of output functions as argument firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state and output functions are executed and the tokens matching the pattern are consumed",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "mooreDF",
          "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003e(a-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "DF",
          "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003e(b-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mooreDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003escanlDF\u003c/code\u003e implements a finite state machine without output decoder in the ForSyDe methodology. It takes a set of firing rules and a set of corresponding next state functions as arguments. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state is executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "scanlDF",
          "package": "ForSyDe",
          "signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e b -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#scanlDF",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanlDF implements finite state machine without output decoder in the ForSyDe methodology It takes set of firing rules and set of corresponding next state functions as arguments firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state is executed and the tokens matching the pattern are consumed",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "scanlDF",
          "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "DF",
          "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003eb-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:scanlDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructors \u003ccode\u003ezipWith3DF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions to generate a data flow process with three input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "zipWith3DF",
          "package": "ForSyDe",
          "signature": "[([FiringToken a], [FiringToken b], [FiringToken c])] -\u003e (Signal a -\u003e Signal b -\u003e Signal c -\u003e [[d]]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#zipWith3DF",
          "type": "function"
        },
        "index": {
          "description": "The process constructors zipWith3DF takes list of firing rules list of corresponding output functions to generate data flow process with three input signals and one output signal",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "zipWith3DF",
          "normalized": "[([FiringToken a],[FiringToken b],[FiringToken c])]-\u003e(Signal a-\u003eSignal b-\u003eSignal c-\u003e[[d]])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "With DF",
          "signature": "[([FiringToken a],[FiringToken b],[FiringToken c])]-\u003e(Signal a-\u003eSignal b-\u003eSignal c-\u003e[[d]])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:zipWith3DF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructors \u003ccode\u003ezipWithDF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions to generate a data flow process with two input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "zipWithDF",
          "package": "ForSyDe",
          "signature": "[([FiringToken b], [FiringToken a])] -\u003e (Signal b -\u003e Signal a -\u003e [[c]]) -\u003e Signal b -\u003e Signal a -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-DataflowLib.html#zipWithDF",
          "type": "function"
        },
        "index": {
          "description": "The process constructors zipWithDF takes list of firing rules list of corresponding output functions to generate data flow process with two input signals and one output signal",
          "hierarchy": "ForSyDe Shallow DataflowLib",
          "module": "ForSyDe.Shallow.DataflowLib",
          "name": "zipWithDF",
          "normalized": "[([FiringToken a],[FiringToken b])]-\u003e(Signal a-\u003eSignal b-\u003e[[c]])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "With DF",
          "signature": "[([FiringToken b],[FiringToken a])]-\u003e(Signal b-\u003eSignal a-\u003e[[c]])-\u003eSignal b-\u003eSignal a-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:zipWithDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines domain interface constructors for the multi-rate computational \n model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "DomainInterfaces",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines domain interface constructors for the multi-rate computational model",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "DomainInterfaces",
          "package": "ForSyDe",
          "partial": "Domain Interfaces",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003edownDI\u003c/a\u003e\u003c/code\u003e takes a parameter \u003ccode\u003ek\u003c/code\u003e and downsamples an input signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "downDI",
          "package": "ForSyDe",
          "signature": "a -\u003e Signal b -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#downDI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor downDI takes parameter and downsamples an input signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "downDI",
          "normalized": "a-\u003eSignal b-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "a-\u003eSignal b-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:downDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser2DI\u003c/a\u003e\u003c/code\u003e converts two parallel signals into one signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser2DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser2DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor par2ser2DI converts two parallel signals into one signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser2DI",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser2DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser3DI\u003c/a\u003e\u003c/code\u003e converts three parallel signals into one signal\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser3DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser3DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor par2ser3DI converts three parallel signals into one signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser3DI",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser3DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser4DI\u003c/a\u003e\u003c/code\u003e converts four parallel signals into one signal\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser4DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser4DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor par2ser4DI converts four parallel signals into one signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2ser4DI",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser4DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2serxDI\u003c/a\u003e\u003c/code\u003e converts n parallel signals into one signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2serxDI",
          "package": "ForSyDe",
          "signature": "Vector (Signal a) -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2serxDI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor par2serxDI converts parallel signals into one signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "par2serxDI",
          "normalized": "Vector(Signal a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Vector(Signal a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2serxDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par2DI\u003c/a\u003e\u003c/code\u003e converts one signal into two parallel signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par2DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a))",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par2DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor ser2par2DI converts one signal into two parallel signals",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par2DI",
          "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a))",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par2DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par3DI\u003c/a\u003e\u003c/code\u003e converts one signal into three parallel signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par3DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a))",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par3DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor ser2par3DI converts one signal into three parallel signals",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par3DI",
          "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par3DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par4DI\u003c/a\u003e\u003c/code\u003e converts one signal into four parallel signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par4DI",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a))",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par4DI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructor ser2par4DI converts one signal into four parallel signals",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2par4DI",
          "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par4DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructors \u003ccode\u003e\u003ca\u003eser2parxDI\u003c/a\u003e\u003c/code\u003e converts one signal into n parallel signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2parxDI",
          "package": "ForSyDe",
          "signature": "a -\u003e Signal (AbstExt b) -\u003e Vector (Signal (AbstExt b))",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2parxDI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructors ser2parxDI converts one signal into parallel signals",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "ser2parxDI",
          "normalized": "a-\u003eSignal(AbstExt b)-\u003eVector(Signal(AbstExt b))",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "a-\u003eSignal(AbstExt b)-\u003eVector(Signal(AbstExt b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2parxDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain interface constructors \u003ccode\u003e\u003ca\u003eupDI\u003c/a\u003e\u003c/code\u003e takes a parameter \u003ccode\u003ek\u003c/code\u003e and upsamples an input signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "upDI",
          "package": "ForSyDe",
          "signature": "a -\u003e Signal b -\u003e Signal (AbstExt b)",
          "source": "src/ForSyDe-Shallow-DomainInterfaces.html#upDI",
          "type": "function"
        },
        "index": {
          "description": "The domain interface constructors upDI takes parameter and upsamples an input signal",
          "hierarchy": "ForSyDe Shallow DomainInterfaces",
          "module": "ForSyDe.Shallow.DomainInterfaces",
          "name": "upDI",
          "normalized": "a-\u003eSignal b-\u003eSignal(AbstExt b)",
          "package": "ForSyDe",
          "partial": "DI",
          "signature": "a-\u003eSignal b-\u003eSignal(AbstExt b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:upDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a FIR filters for the synchronous computational model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.FIR",
          "name": "FIR",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-FIR.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements FIR filters for the synchronous computational model",
          "hierarchy": "ForSyDe Shallow FIR",
          "module": "ForSyDe.Shallow.FIR",
          "name": "FIR",
          "package": "ForSyDe",
          "partial": "FIR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FIR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function firSY implements a FIR-filter for the synchronous computational model. All kinds of FIR-filters can now be modeled by means of \u003ccode\u003e\u003ca\u003efirSY\u003c/a\u003e\u003c/code\u003e. The only argument needed is the list of coefficients, which is given as a vector of any size. To illustrate this, an 8-th order band pass filter is modeled as follows. \n\u003c/p\u003e\u003cpre\u003e bp = firSY (vector [0.06318761339784, 0.08131651217682, 0.09562326700432, \n                     0.10478344432968, 0.10793629404886, 0.10478344432968, \n                     0.09562326700432, 0.08131651217682, 0.06318761339784 ])\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.FIR",
          "name": "firSY",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-FIR.html#firSY",
          "type": "function"
        },
        "index": {
          "description": "The function firSY implements FIR-filter for the synchronous computational model All kinds of FIR-filters can now be modeled by means of firSY The only argument needed is the list of coefficients which is given as vector of any size To illustrate this an th order band pass filter is modeled as follows bp firSY vector",
          "hierarchy": "ForSyDe Shallow FIR",
          "module": "ForSyDe.Shallow.FIR",
          "name": "firSY",
          "normalized": "Vector a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Vector a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FIR.html#v:firSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the filter library for ForSyDe heterogeneous MoCs - CT-MoC, SR-MoC,\n and Untimed-MoC.\n\u003c/p\u003e\u003cp\u003eThe filters at CT-MoC are based on the filters implemented at SR-MoC and Untimed-MoC, \n which means a signal in CT-MoC is always digitalized by a A/D converter, processed by \n digital filters at SR or Untimed domain, and converted back into a CT domain signal by \n a D/A converter. A CT-filter is composed of one A/D converter, one digital filter, and \n one D/A converter.\n\u003c/p\u003e\u003cp\u003eThe implementation of the filters at untimed and synchronous domains follows the\n way in a paper /An introduction to Haskell with applications to digital signal processing, \n David M. Goblirsch, in Proceedings of the 1994 ACM symposium on Applied computing./,\n where the details of the FIR/IIR, AR, and ARMA filters are introduced. The ARMA filter\n is the kernel part of our general linear filter \u003ccode\u003e\u003ca\u003ezLinearFilter\u003c/a\u003e\u003c/code\u003e in Z-domain at SR/Untimed\n MoC, and is also the kernel digital filter for the linear filter \u003ccode\u003e\u003ca\u003esLinearFilter\u003c/a\u003e\u003c/code\u003e in \n S-domain at CT-MoC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "FilterLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-FilterLib.html",
          "type": "module"
        },
        "index": {
          "description": "This is the filter library for ForSyDe heterogeneous MoCs CT-MoC SR-MoC and Untimed-MoC The filters at CT-MoC are based on the filters implemented at SR-MoC and Untimed-MoC which means signal in CT-MoC is always digitalized by converter processed by digital filters at SR or Untimed domain and converted back into CT domain signal by converter CT-filter is composed of one converter one digital filter and one converter The implementation of the filters at untimed and synchronous domains follows the way in paper An introduction to Haskell with applications to digital signal processing David Goblirsch in Proceedings of the ACM symposium on Applied computing where the details of the FIR IIR AR and ARMA filters are introduced The ARMA filter is the kernel part of our general linear filter zLinearFilter in Z-domain at SR Untimed MoC and is also the kernel digital filter for the linear filter sLinearFilter in S-domain at CT-MoC",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "FilterLib",
          "package": "ForSyDe",
          "partial": "Filter Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe solver mode.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "SolverMode",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
          "type": "data"
        },
        "index": {
          "description": "The solver mode",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "SolverMode",
          "package": "ForSyDe",
          "partial": "Solver Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#t:SolverMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunge Kutta 4 with fixed simulation steps\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "RK4",
          "package": "ForSyDe",
          "signature": "RK4",
          "source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
          "type": "function"
        },
        "index": {
          "description": "Runge Kutta with fixed simulation steps",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "RK4",
          "package": "ForSyDe",
          "partial": "RK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:RK4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTustin tranfer from s-domain to z-domain\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "S2Z",
          "package": "ForSyDe",
          "signature": "S2Z",
          "source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
          "type": "function"
        },
        "index": {
          "description": "Tustin tranfer from s-domain to z-domain",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "S2Z",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:S2Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe autoregressive filter is the simplest IIR filter. It is characterized \n by a list of numbers '[a_1,a_2,...,a_M]' called the autoregression \n coefficients and a single number \u003ccode\u003eb\u003c/code\u003e called the gain. \u003ccode\u003eM\u003c/code\u003e is the order of \n the filter. Let '[x_n]' denote the input signal, '[y_n]' denote the ouput\n signal. The formula for '[y_n]' is  $sum_{k=1}^M {a_k*y_{n-k}+b*x_n}$. \n Although it is an IIR filter, here we only get the same length of ouput \n signal as the input signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "arFilterTrim",
          "package": "ForSyDe",
          "signature": "[a]-\u003e a-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The autoregressive filter is the simplest IIR filter It is characterized by list of numbers called the autoregression coefficients and single number called the gain is the order of the filter Let denote the input signal denote the ouput signal The formula for is sum n-k Although it is an IIR filter here we only get the same length of ouput signal as the input signal",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "arFilterTrim",
          "normalized": "[a]-\u003ea-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Filter Trim",
          "signature": "[a]-\u003ea-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:arFilterTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ARMA filter combines the FIR and AR filters. Let '[x_n]' denote the \n input signal, '[y_n]' denote the ouput signal. The formula for '[y_n]' is\n  $sum_{k=1}^M {a_k*y_{n-k}+b*x_n} + sum_{i=0}^{N-1} b_i*x_{n-i}$. The ARMA\n filter can be defined as the composition of an FIR filter having the impulse\n reponse '[b_0,b_1,...,b_N-1]' and an AR filter having the regression \n coefficients '[a_1,a_2,...,a_M]' and a gain of '1'. Although it is an IIR \n filter, here we only get the same length of ouput signal as the input signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "armaFilterTrim",
          "package": "ForSyDe",
          "signature": "[a]-\u003e [a]-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The ARMA filter combines the FIR and AR filters Let denote the input signal denote the ouput signal The formula for is sum n-k sum N-1 n-i The ARMA filter can be defined as the composition of an FIR filter having the impulse reponse N-1 and an AR filter having the regression coefficients and gain of Although it is an IIR filter here we only get the same length of ouput signal as the input signal",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "armaFilterTrim",
          "normalized": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Filter Trim",
          "signature": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:armaFilterTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe FIR filter. Let '[x_n]' denote the input signal, '[y_n]' denote the ouput\n signal, and '[h_n]' the impulse response of the filter. Suppose the length of\n the impulse responses is M samples. The formula for '[y_n]' is \n $sum_{k=0}^{M-1} h_k*x_{n-k}$.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "firFilter",
          "package": "ForSyDe",
          "signature": "[a]-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The FIR filter Let denote the input signal denote the ouput signal and the impulse response of the filter Suppose the length of the impulse responses is samples The formula for is sum M-1 n-k",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "firFilter",
          "normalized": "[a]-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Filter",
          "signature": "[a]-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:firFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Z-domain to ARMA coefficient tranformation. It is used on the \n Z-transfer function\n\u003c/p\u003e\u003cpre\u003e        b_0*z^m-n + b_1*z^m-n-1 + ... + b_m-1*z^1-n + b_m*z^-n\nH(z) = -----------------------------------------------------    (Eq 4)\n        a_0*z^0 + a_1*z^-1 + ... + a_n-1*z^1-n + a_n*z^-n\n\u003c/pre\u003e\u003cp\u003ewhich is normalized as\n\u003c/p\u003e\u003cpre\u003e        b_0/a_0*z^m-n + b_1/a_0*z^m-n-1 + ... + b_m/a_0*z^-n\nH(z) = -------------------------------------------------------  (Eq 5)\n        1 + a_1/a_0*z^-1 + ... + a_n-1/a_0*z^1-n + a_n/a_0*z^-n\n\u003c/pre\u003e\u003cp\u003eThe implementation coudl be\n\u003c/p\u003e\u003cpre\u003ey(k) = b_0/a_0*x_k+m-n + b_1/a_0*x_k+m-n-1 + ... + b_m/a_0*x_k-n\n                                                                (Eq 6)\n                       - a_1/a_0*y_k-1 - ... - a_n/a_0*y_k-n\n\u003c/pre\u003e\u003cp\u003eThen, we could get the coefficients of the ARMA filter.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "h2ARMACoef",
          "package": "ForSyDe",
          "signature": "([a], [a])-\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "The Z-domain to ARMA coefficient tranformation It is used on the Z-transfer function m-n m-n-1 m-1 Eq n-1 which is normalized as m-n m-n-1 Eq n-1 The implementation coudl be m-n m-n-1 k-n Eq k-1 k-n Then we could get the coefficients of the ARMA filter",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "h2ARMACoef",
          "normalized": "([a],[a])-\u003e([a],[a])",
          "package": "ForSyDe",
          "partial": "ARMACoef",
          "signature": "([a],[a])-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:h2ARMACoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003es2z domain coefficient tranformation with a specified sampling rate.\n The Tustin transformation is used for the transfer, with\n\u003c/p\u003e\u003cpre\u003e      2(z - 1)  \n s = ----------                                                 (Eq 3)\n      T(z + 1)\n\u003c/pre\u003e\u003cp\u003ein which, \u003ccode\u003eT\u003c/code\u003e is the sampling interval.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "s2zCoef",
          "package": "ForSyDe",
          "signature": "Rational-\u003e [a]-\u003e [a]-\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "s2z domain coefficient tranformation with specified sampling rate The Tustin transformation is used for the transfer with Eq in which is the sampling interval",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "s2zCoef",
          "normalized": "Rational-\u003e[a]-\u003e[a]-\u003e([a],[a])",
          "package": "ForSyDe",
          "partial": "Coef",
          "signature": "Rational-\u003e[a]-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:s2zCoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe general linear filter in S-domain at CT-MoC. As the kernel\n implementation is in Z-domain, the smapling rate should be specified. \n It is used on the S-transformation with the following forms, with \n coefficients for the descending powers of \u003ccode\u003es\u003c/code\u003e and m \u003c n.\n\u003c/p\u003e\u003cpre\u003e        b_0*s^m + b_1*s^m-1 + ... + b_m-1*s^1 + b_m*s^0\nH(s) = ------------------------------------------------         (Eq 1)\n        a_0*s^n + a_1*s^n-1 + ... + a_n-1*s^1 + a_n*s^0\n\u003c/pre\u003e\u003cp\u003eIf we multiply both the numerator and the denominator with s^-n, we get \n another equivelent canonical form\n\u003c/p\u003e\u003cpre\u003e        b_0*s^m-n + b_1*s^m-n-1 + ... + b_m-1*s^1-n + b_m*s^-n\nH(s) = -----------------------------------------------------    (Eq 2)\n        a_0*s^0 + a_1*s^-1 + ... + a_n-1*s^1-n + a_n*s^-n\n\u003c/pre\u003e\u003cp\u003eTo instantiate a filter, with sampling interval 'T ', we use\n\u003c/p\u003e\u003cpre\u003e filter1 = sLinearFilter T [1] [2,1]\n\u003c/pre\u003e\u003cp\u003eto get a filter  with the transfer function\n\u003c/p\u003e\u003cpre\u003e          1\nH(s) = --------\n       2*s + 1\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e filter2 = sLinearFilter T [2,1] [1,2,2]\n\u003c/pre\u003e\u003cp\u003eto get another filter with the transfer function\n\u003c/p\u003e\u003cpre\u003e           2*s +1\nH(s) = ----------------\n        s^2 + 2*s + 2\n\u003c/pre\u003e\u003cp\u003eThere are two solver modes, \u003ccode\u003e\u003ca\u003eS2Z\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRK4\u003c/a\u003e\u003c/code\u003e.\n Caused by the precision problem, the time interval in CT uses Rational data\n type and the digital data types in all the domains are Double.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "sLinearFilter",
          "package": "ForSyDe",
          "signature": "SolverMode-\u003e Rational-\u003e [a]-\u003e [a]-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
          "type": "function"
        },
        "index": {
          "description": "The general linear filter in S-domain at CT-MoC As the kernel implementation is in Z-domain the smapling rate should be specified It is used on the S-transformation with the following forms with coefficients for the descending powers of and m-1 m-1 Eq n-1 n-1 If we multiply both the numerator and the denominator with we get another equivelent canonical form m-n m-n-1 m-1 Eq n-1 To instantiate filter with sampling interval we use filter1 sLinearFilter to get filter with the transfer function and filter2 sLinearFilter to get another filter with the transfer function There are two solver modes S2Z and RK4 Caused by the precision problem the time interval in CT uses Rational data type and the digital data types in all the domains are Double",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "sLinearFilter",
          "normalized": "SolverMode-\u003eRational-\u003e[a]-\u003e[a]-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "package": "ForSyDe",
          "partial": "Linear Filter",
          "signature": "SolverMode-\u003eRational-\u003e[a]-\u003e[a]-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:sLinearFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe general linear filter in Z-domain.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "zLinearFilter",
          "package": "ForSyDe",
          "signature": "[a] -\u003e [a] -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-FilterLib.html#zLinearFilter",
          "type": "function"
        },
        "index": {
          "description": "The general linear filter in Z-domain",
          "hierarchy": "ForSyDe Shallow FilterLib",
          "module": "ForSyDe.Shallow.FilterLib",
          "name": "zLinearFilter",
          "normalized": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Linear Filter",
          "signature": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:zLinearFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe follow the Box-Muller method to generate white gaussian noise, \n described at: \u003ca\u003ehttp://www.dspguru.com/howto/tech/wgn.htm\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.Gaussian",
          "name": "Gaussian",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Gaussian.html",
          "type": "module"
        },
        "index": {
          "description": "We follow the Box-Muller method to generate white gaussian noise described at http www.dspguru.com howto tech wgn.htm",
          "hierarchy": "ForSyDe Shallow Gaussian",
          "module": "ForSyDe.Shallow.Gaussian",
          "name": "Gaussian",
          "package": "ForSyDe",
          "partial": "Gaussian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Gaussian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo generate an infinite Signal of Gaussian values\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Gaussian",
          "name": "pGaussianNoise",
          "package": "ForSyDe",
          "signature": "Double -\u003e Double -\u003e Int -\u003e Signal Double",
          "source": "src/ForSyDe-Shallow-Gaussian.html#pGaussianNoise",
          "type": "function"
        },
        "index": {
          "description": "To generate an infinite Signal of Gaussian values",
          "hierarchy": "ForSyDe Shallow Gaussian",
          "module": "ForSyDe.Shallow.Gaussian",
          "name": "pGaussianNoise",
          "normalized": "Double-\u003eDouble-\u003eInt-\u003eSignal Double",
          "package": "ForSyDe",
          "partial": "Gaussian Noise",
          "signature": "Double-\u003eDouble-\u003eInt-\u003eSignal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Gaussian.html#v:pGaussianNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the data structure and access\n functions for the memory model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Memory",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Memory.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the data structure and access functions for the memory model",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Memory",
          "package": "ForSyDe",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAccess\u003c/a\u003e\u003c/code\u003e defines two access patterns.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Access",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Memory.html#Access",
          "type": "data"
        },
        "index": {
          "description": "The data type Access defines two access patterns",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Access",
          "package": "ForSyDe",
          "partial": "Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Memory",
          "name": "Adr",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Memory.html#Adr",
          "type": "type"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Adr",
          "package": "ForSyDe",
          "partial": "Adr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Adr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Memory",
          "name": "MemSize",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Memory.html#MemSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "MemSize",
          "package": "ForSyDe",
          "partial": "Mem Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:MemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eMemory\u003c/a\u003e\u003c/code\u003e is modeled as a vector. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Memory",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Memory.html#Memory",
          "type": "data"
        },
        "index": {
          "description": "The data type Memory is modeled as vector",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Memory",
          "package": "ForSyDe",
          "partial": "Memory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Memory",
          "name": "Mem",
          "package": "ForSyDe",
          "signature": "Mem Adr (Vector (AbstExt a))",
          "source": "src/ForSyDe-Shallow-Memory.html#Memory",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Mem",
          "package": "ForSyDe",
          "partial": "Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Read adr' reads an address from the memory.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Read",
          "package": "ForSyDe",
          "signature": "Read Adr",
          "source": "src/ForSyDe-Shallow-Memory.html#Access",
          "type": "function"
        },
        "index": {
          "description": "Read adr reads an address from the memory",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Read",
          "package": "ForSyDe",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Write Adr a' writes a value into an address.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Write",
          "package": "ForSyDe",
          "signature": "Write Adr a",
          "source": "src/ForSyDe-Shallow-Memory.html#Access",
          "type": "function"
        },
        "index": {
          "description": "Write Adr writes value into an address",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "Write",
          "package": "ForSyDe",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ememOutput\u003c/a\u003e\u003c/code\u003e gives the output of the memory after an access to the memory. A \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e operation gives an absent value as output.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "memOutput",
          "package": "ForSyDe",
          "signature": "Memory a -\u003e Access a -\u003e AbstExt a",
          "source": "src/ForSyDe-Shallow-Memory.html#memOutput",
          "type": "function"
        },
        "index": {
          "description": "The function memOutput gives the output of the memory after an access to the memory Write operation gives an absent value as output",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "memOutput",
          "normalized": "Memory a-\u003eAccess a-\u003eAbstExt a",
          "package": "ForSyDe",
          "partial": "Output",
          "signature": "Memory a-\u003eAccess a-\u003eAbstExt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:memOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ememState\u003c/a\u003e\u003c/code\u003e gives the new state of the memory, after an access to a memory. A \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e operation leaves the memory unchanged.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "memState",
          "package": "ForSyDe",
          "signature": "Memory a -\u003e Access a -\u003e Memory a",
          "source": "src/ForSyDe-Shallow-Memory.html#memState",
          "type": "function"
        },
        "index": {
          "description": "The function memState gives the new state of the memory after an access to memory Read operation leaves the memory unchanged",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "memState",
          "normalized": "Memory a-\u003eAccess a-\u003eMemory a",
          "package": "ForSyDe",
          "partial": "State",
          "signature": "Memory a-\u003eAccess a-\u003eMemory a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:memState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enewMem\u003c/a\u003e\u003c/code\u003e creates a new memory, where the number of entries is given by a parameter.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Memory",
          "name": "newMem",
          "package": "ForSyDe",
          "signature": "MemSize -\u003e Memory a",
          "source": "src/ForSyDe-Shallow-Memory.html#newMem",
          "type": "function"
        },
        "index": {
          "description": "The function newMem creates new memory where the number of entries is given by parameter",
          "hierarchy": "ForSyDe Shallow Memory",
          "module": "ForSyDe.Shallow.Memory",
          "name": "newMem",
          "normalized": "MemSize-\u003eMemory a",
          "package": "ForSyDe",
          "partial": "Mem",
          "signature": "MemSize-\u003eMemory a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:newMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ForSyDeMoCLib is a container including all MoC libraries and\n their domain interfaces. It consists of the following libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The library for the synchronous MoC: \u003ca\u003eSynchronousLib\u003c/a\u003e. In this\n   version the synchronous library is divided into three libraries:\n   SynchronousLib, SynchronousProcessLib and StochasticLib.\n\u003c/li\u003e\u003cli\u003e The library for the untimed MoC: \u003ca\u003eForSyDe.Shallow.UntimedLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e The library for the continuous time MoC: \u003ca\u003eForSyDe.Shallow.CTLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e The library for the domain interfaces: \u003ca\u003eForSyDe.Shallow.DomainInterfaces\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.MoCLib",
          "name": "MoCLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-MoCLib.html",
          "type": "module"
        },
        "index": {
          "description": "The ForSyDeMoCLib is container including all MoC libraries and their domain interfaces It consists of the following libraries The library for the synchronous MoC SynchronousLib In this version the synchronous library is divided into three libraries SynchronousLib SynchronousProcessLib and StochasticLib The library for the untimed MoC ForSyDe.Shallow.UntimedLib The library for the continuous time MoC ForSyDe.Shallow.CTLib The library for the domain interfaces ForSyDe.Shallow.DomainInterfaces",
          "hierarchy": "ForSyDe Shallow MoCLib",
          "module": "ForSyDe.Shallow.MoCLib",
          "name": "MoCLib",
          "package": "ForSyDe",
          "partial": "Mo CLib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-MoCLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the polynomial arithematic library. The arithematic operations include \n addition, multiplication, division and power. However, the computation time is \n not optimized for multiplication and is O(n2), which could be considered to be \n optimized by FFT algorithms later on.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "PolyArith",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-PolyArith.html",
          "type": "module"
        },
        "index": {
          "description": "This is the polynomial arithematic library The arithematic operations include addition multiplication division and power However the computation time is not optimized for multiplication and is n2 which could be considered to be optimized by FFT algorithms later on",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "PolyArith",
          "package": "ForSyDe",
          "partial": "Poly Arith",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolynomial data type.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "Poly",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
          "type": "data"
        },
        "index": {
          "description": "Polynomial data type",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "Poly",
          "package": "ForSyDe",
          "partial": "Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#t:Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "Poly",
          "package": "ForSyDe",
          "signature": "Poly [a]",
          "source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "Poly",
          "normalized": "Poly[a]",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "Poly[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "PolyPair",
          "package": "ForSyDe",
          "signature": "PolyPair (Poly a, Poly a)",
          "source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "PolyPair",
          "normalized": "PolyPair(Poly a,Poly a)",
          "package": "ForSyDe",
          "partial": "Poly Pair",
          "signature": "PolyPair(Poly a,Poly a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:PolyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition operations of polynomials.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "addPoly",
          "package": "ForSyDe",
          "signature": "Poly a -\u003e Poly a -\u003e Poly a",
          "source": "src/ForSyDe-Shallow-PolyArith.html#addPoly",
          "type": "function"
        },
        "index": {
          "description": "Addition operations of polynomials",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "addPoly",
          "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "Poly a-\u003ePoly a-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:addPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "addPolyCoef",
          "package": "ForSyDe",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/ForSyDe-Shallow-PolyArith.html#addPolyCoef",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "addPolyCoef",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "ForSyDe",
          "partial": "Poly Coef",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:addPolyCoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision operation of polynomials.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "divPoly",
          "package": "ForSyDe",
          "signature": "Poly a -\u003e Poly a -\u003e Poly a",
          "source": "src/ForSyDe-Shallow-PolyArith.html#divPoly",
          "type": "function"
        },
        "index": {
          "description": "Division operation of polynomials",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "divPoly",
          "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "Poly a-\u003ePoly a-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:divPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome helper functions below.\n\u003c/p\u003e\u003cp\u003eTo get the coefficients of the polynomial.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "getCoef",
          "package": "ForSyDe",
          "signature": "Poly a -\u003e ([a], [a])",
          "source": "src/ForSyDe-Shallow-PolyArith.html#getCoef",
          "type": "function"
        },
        "index": {
          "description": "Some helper functions below To get the coefficients of the polynomial",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "getCoef",
          "normalized": "Poly a-\u003e([a],[a])",
          "package": "ForSyDe",
          "partial": "Coef",
          "signature": "Poly a-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:getCoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication operation of polynomials.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "mulPoly",
          "package": "ForSyDe",
          "signature": "Poly a -\u003e Poly a -\u003e Poly a",
          "source": "src/ForSyDe-Shallow-PolyArith.html#mulPoly",
          "type": "function"
        },
        "index": {
          "description": "Multiplication operation of polynomials",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "mulPoly",
          "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "Poly a-\u003ePoly a-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:mulPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower operation of polynomials.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "powerPoly",
          "package": "ForSyDe",
          "signature": "Poly a -\u003e Int -\u003e Poly a",
          "source": "src/ForSyDe-Shallow-PolyArith.html#powerPoly",
          "type": "function"
        },
        "index": {
          "description": "Power operation of polynomials",
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "powerPoly",
          "normalized": "Poly a-\u003eInt-\u003ePoly a",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "Poly a-\u003eInt-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:powerPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "scalePoly",
          "package": "ForSyDe",
          "signature": "a -\u003e Poly a -\u003e Poly a",
          "source": "src/ForSyDe-Shallow-PolyArith.html#scalePoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "scalePoly",
          "normalized": "a-\u003ePoly a-\u003ePoly a",
          "package": "ForSyDe",
          "partial": "Poly",
          "signature": "a-\u003ePoly a-\u003ePoly a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:scalePoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "scalePolyCoef",
          "package": "ForSyDe",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/ForSyDe-Shallow-PolyArith.html#scalePolyCoef",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "scalePolyCoef",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "ForSyDe",
          "partial": "Poly Coef",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:scalePolyCoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "subPolyCoef",
          "package": "ForSyDe",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/ForSyDe-Shallow-PolyArith.html#subPolyCoef",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow PolyArith",
          "module": "ForSyDe.Shallow.PolyArith",
          "name": "subPolyCoef",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "ForSyDe",
          "partial": "Poly Coef",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:subPolyCoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides two data types, that can be used to model queue\n structures, such as FIFOs. There is a data type for an queue of\n infinite size \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and one for finite size \u003ccode\u003e\u003ca\u003eFiniteQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "Queue",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Queue.html",
          "type": "module"
        },
        "index": {
          "description": "This provides two data types that can be used to model queue structures such as FIFOs There is data type for an queue of infinite size Queue and one for finite size FiniteQueue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "Queue",
          "package": "ForSyDe",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eFiniteQueue\u003c/a\u003e\u003c/code\u003e has an additional parameter, that determines the size of the queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "FiniteQueue",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Queue.html#FiniteQueue",
          "type": "data"
        },
        "index": {
          "description": "The data type FiniteQueue has an additional parameter that determines the size of the queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "FiniteQueue",
          "package": "ForSyDe",
          "partial": "Finite Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#t:FiniteQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA queue is modeled as a list. The data type \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e modelles an queue of infinite size.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "Queue",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "description": "queue is modeled as list The data type Queue modelles an queue of infinite size",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "Queue",
          "package": "ForSyDe",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Queue",
          "name": "FQ",
          "package": "ForSyDe",
          "signature": "FQ Int [a]",
          "source": "src/ForSyDe-Shallow-Queue.html#FiniteQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "FQ",
          "normalized": "FQ Int[a]",
          "package": "ForSyDe",
          "partial": "FQ",
          "signature": "FQ Int[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:FQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Queue",
          "name": "Q",
          "package": "ForSyDe",
          "signature": "Q [a]",
          "source": "src/ForSyDe-Shallow-Queue.html#Queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "Q",
          "normalized": "Q[a]",
          "package": "ForSyDe",
          "signature": "Q[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efiniteQueue\u003c/a\u003e\u003c/code\u003e transforms a list into an infinite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "finiteQueue",
          "package": "ForSyDe",
          "signature": "Int -\u003e [a] -\u003e FiniteQueue a",
          "source": "src/ForSyDe-Shallow-Queue.html#finiteQueue",
          "type": "function"
        },
        "index": {
          "description": "finiteQueue transforms list into an infinite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "finiteQueue",
          "normalized": "Int-\u003e[a]-\u003eFiniteQueue a",
          "package": "ForSyDe",
          "partial": "Queue",
          "signature": "Int-\u003e[a]-\u003eFiniteQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:finiteQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epopFQ\u003c/a\u003e\u003c/code\u003e pops one element from a finite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "popFQ",
          "package": "ForSyDe",
          "signature": "FiniteQueue a -\u003e (FiniteQueue a, AbstExt a)",
          "source": "src/ForSyDe-Shallow-Queue.html#popFQ",
          "type": "function"
        },
        "index": {
          "description": "popFQ pops one element from finite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "popFQ",
          "normalized": "FiniteQueue a-\u003e(FiniteQueue a,AbstExt a)",
          "package": "ForSyDe",
          "partial": "FQ",
          "signature": "FiniteQueue a-\u003e(FiniteQueue a,AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:popFQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epopQ\u003c/a\u003e\u003c/code\u003e pops one element from an infinite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "popQ",
          "package": "ForSyDe",
          "signature": "Queue a -\u003e (Queue a, AbstExt a)",
          "source": "src/ForSyDe-Shallow-Queue.html#popQ",
          "type": "function"
        },
        "index": {
          "description": "popQ pops one element from an infinite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "popQ",
          "normalized": "Queue a-\u003e(Queue a,AbstExt a)",
          "package": "ForSyDe",
          "signature": "Queue a-\u003e(Queue a,AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:popQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushFQ\u003c/a\u003e\u003c/code\u003e pushes one element into a finite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushFQ",
          "package": "ForSyDe",
          "signature": "FiniteQueue a -\u003e a -\u003e FiniteQueue a",
          "source": "src/ForSyDe-Shallow-Queue.html#pushFQ",
          "type": "function"
        },
        "index": {
          "description": "pushFQ pushes one element into finite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushFQ",
          "normalized": "FiniteQueue a-\u003ea-\u003eFiniteQueue a",
          "package": "ForSyDe",
          "partial": "FQ",
          "signature": "FiniteQueue a-\u003ea-\u003eFiniteQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushFQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushListFQ\u003c/a\u003e\u003c/code\u003e pushes a list of elements into a finite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushListFQ",
          "package": "ForSyDe",
          "signature": "FiniteQueue a -\u003e [a] -\u003e FiniteQueue a",
          "source": "src/ForSyDe-Shallow-Queue.html#pushListFQ",
          "type": "function"
        },
        "index": {
          "description": "pushListFQ pushes list of elements into finite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushListFQ",
          "normalized": "FiniteQueue a-\u003e[a]-\u003eFiniteQueue a",
          "package": "ForSyDe",
          "partial": "List FQ",
          "signature": "FiniteQueue a-\u003e[a]-\u003eFiniteQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushListFQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushListQ\u003c/a\u003e\u003c/code\u003e pushes a list of elements into an infinite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushListQ",
          "package": "ForSyDe",
          "signature": "Queue a -\u003e [a] -\u003e Queue a",
          "source": "src/ForSyDe-Shallow-Queue.html#pushListQ",
          "type": "function"
        },
        "index": {
          "description": "pushListQ pushes list of elements into an infinite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushListQ",
          "normalized": "Queue a-\u003e[a]-\u003eQueue a",
          "package": "ForSyDe",
          "partial": "List",
          "signature": "Queue a-\u003e[a]-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushListQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushQ\u003c/a\u003e\u003c/code\u003e pushes one element into an infinite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushQ",
          "package": "ForSyDe",
          "signature": "Queue a -\u003e a -\u003e Queue a",
          "source": "src/ForSyDe-Shallow-Queue.html#pushQ",
          "type": "function"
        },
        "index": {
          "description": "pushQ pushes one element into an infinite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "pushQ",
          "normalized": "Queue a-\u003ea-\u003eQueue a",
          "package": "ForSyDe",
          "signature": "Queue a-\u003ea-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equeue\u003c/a\u003e\u003c/code\u003e transforms a list into an infinite queue.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Queue",
          "name": "queue",
          "package": "ForSyDe",
          "signature": "[a] -\u003e Queue a",
          "source": "src/ForSyDe-Shallow-Queue.html#queue",
          "type": "function"
        },
        "index": {
          "description": "queue transforms list into an infinite queue",
          "hierarchy": "ForSyDe Shallow Queue",
          "module": "ForSyDe.Shallow.Queue",
          "name": "queue",
          "normalized": "[a]-\u003eQueue a",
          "package": "ForSyDe",
          "signature": "[a]-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the shallow-embedded \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e datatype and\n functions operating on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Signal.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the shallow-embedded Signal datatype and functions operating on it",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal is defined as a list of events. An event has a tag and a value. The tag of an event is defined by the position in the list. A signal is defined as an instance of the classes \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e. The signal 1 :- 2 :- NullS is represented as {1,2}.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal is defined as list of events An event has tag and value The tag of an event is defined by the position in the list signal is defined as an instance of the classes Read and Show The signal NullS is represented as",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Signal",
          "name": "(!-)",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Int -\u003e a",
          "source": "src/ForSyDe-Shallow-Signal.html#%21-",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "(!-) !-",
          "normalized": "Signal a-\u003eInt-\u003ea",
          "package": "ForSyDe",
          "signature": "Signal a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-33--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator \u003ccode\u003e\u003ca\u003e+-+\u003c/a\u003e\u003c/code\u003e concatinates two signals into one signal.  \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "(+-+)",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#%2B-%2B",
          "type": "function"
        },
        "index": {
          "description": "The operator concatinates two signals into one signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "(+-+) +-+",
          "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Signal a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-43--45--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e adds at an element to a signal at the tail.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "(-:)",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#-%3A",
          "type": "function"
        },
        "index": {
          "description": "The operator adds at an element to signal at the tail",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "(-:) -:",
          "normalized": "Signal a-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Signal a-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Signal",
          "name": ":-",
          "package": "ForSyDe",
          "signature": "a :- (Signal a)",
          "source": "src/ForSyDe-Shallow-Signal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": ":-",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Signal",
          "name": "NullS",
          "package": "ForSyDe",
          "signature": "NullS",
          "source": "src/ForSyDe-Shallow-Signal.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "NullS",
          "package": "ForSyDe",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:NullS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eatS\u003c/a\u003e\u003c/code\u003e  returns the n-th event in a signal. The numbering of events in a signal starts with 0. There is also an operator version of this function, '(!-)'.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "atS",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal a -\u003e a",
          "source": "src/ForSyDe-Shallow-Signal.html#atS",
          "type": "function"
        },
        "index": {
          "description": "The function atS returns the n-th event in signal The numbering of events in signal starts with There is also an operator version of this function",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "atS",
          "normalized": "Int-\u003eSignal a-\u003ea",
          "package": "ForSyDe",
          "signature": "Int-\u003eSignal a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:atS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecopyS\u003c/a\u003e\u003c/code\u003e creates a signal with n values \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "copyS",
          "package": "ForSyDe",
          "signature": "a -\u003e b -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-Signal.html#copyS",
          "type": "function"
        },
        "index": {
          "description": "The function copyS creates signal with values",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "copyS",
          "normalized": "a-\u003eb-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "a-\u003eb-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:copyS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edropS\u003c/a\u003e\u003c/code\u003e drops the first $n$ values from a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "dropS",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#dropS",
          "type": "function"
        },
        "index": {
          "description": "The function dropS drops the first values from signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "dropS",
          "normalized": "Int-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Int-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:dropS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003efanS\u003c/a\u003e\u003c/code\u003e takes two processes \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e and and generates a process network, where a signal is split and processed by the processes \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "fanS",
          "package": "ForSyDe",
          "signature": "(Signal a -\u003e Signal b) -\u003e (Signal a -\u003e Signal c) -\u003e Signal a -\u003e (Signal b, Signal c)",
          "source": "src/ForSyDe-Shallow-Signal.html#fanS",
          "type": "function"
        },
        "index": {
          "description": "The combinator fanS takes two processes p1 and p2 and and generates process network where signal is split and processed by the processes p1 and p2",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "fanS",
          "normalized": "(Signal a-\u003eSignal b)-\u003e(Signal a-\u003eSignal c)-\u003eSignal a-\u003e(Signal b,Signal c)",
          "package": "ForSyDe",
          "signature": "(Signal a-\u003eSignal b)-\u003e(Signal a-\u003eSignal c)-\u003eSignal a-\u003e(Signal b,Signal c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:fanS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromSignal\u003c/a\u003e\u003c/code\u003e converts a signal into a list.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "fromSignal",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e [a]",
          "source": "src/ForSyDe-Shallow-Signal.html#fromSignal",
          "type": "function"
        },
        "index": {
          "description": "The function fromSignal converts signal into list",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "fromSignal",
          "normalized": "Signal a-\u003e[a]",
          "package": "ForSyDe",
          "partial": "Signal",
          "signature": "Signal a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:fromSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eheadS\u003c/a\u003e\u003c/code\u003e gives the first value - the head -  of a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "headS",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e a",
          "source": "src/ForSyDe-Shallow-Signal.html#headS",
          "type": "function"
        },
        "index": {
          "description": "The function headS gives the first value the head of signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "headS",
          "normalized": "Signal a-\u003ea",
          "package": "ForSyDe",
          "signature": "Signal a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:headS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003einfiniteS\u003c/a\u003e\u003c/code\u003e creates an infinite signal. The first argument \u003ccode\u003ef\u003c/code\u003e is a function that is applied on the current value. The second argument \u003ccode\u003ex\u003c/code\u003e gives the first value of the signal.\n\u003c/p\u003e\u003cpre\u003e Signal\u003e takeS 5 (infiniteS (*3) 1)\n {1,3,9,27,81} :: Signal Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "infiniteS",
          "package": "ForSyDe",
          "signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#infiniteS",
          "type": "function"
        },
        "index": {
          "description": "The function infiniteS creates an infinite signal The first argument is function that is applied on the current value The second argument gives the first value of the signal Signal takeS infiniteS Signal Integer",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "infiniteS",
          "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:infiniteS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elengthS\u003c/a\u003e\u003c/code\u003e returns the length of a \u003ccode\u003efinite\u003c/code\u003e signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "lengthS",
          "package": "ForSyDe",
          "signature": "Signal b -\u003e Int",
          "source": "src/ForSyDe-Shallow-Signal.html#lengthS",
          "type": "function"
        },
        "index": {
          "description": "The function lengthS returns the length of finite signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "lengthS",
          "normalized": "Signal a-\u003eInt",
          "package": "ForSyDe",
          "signature": "Signal b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:lengthS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enullS\u003c/a\u003e\u003c/code\u003e checks if a signal is empty.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "nullS",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Bool",
          "source": "src/ForSyDe-Shallow-Signal.html#nullS",
          "type": "function"
        },
        "index": {
          "description": "The function nullS checks if signal is empty",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "nullS",
          "normalized": "Signal a-\u003eBool",
          "package": "ForSyDe",
          "signature": "Signal a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:nullS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereadS\u003c/a\u003e\u003c/code\u003e transforms a formatted string into a signal.\n\u003c/p\u003e\u003cpre\u003e\n Signal\u003e readS \u003ca\u003e1n2n3n4n5n\u003c/a\u003e :: Signal Int\n {1,2,3,4,5} :: Signal Int\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "readS",
          "package": "ForSyDe",
          "signature": "[Char] -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#readS",
          "type": "function"
        },
        "index": {
          "description": "The function readS transforms formatted string into signal Signal readS n2n3n4n5n Signal Int Signal Int",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "readS",
          "normalized": "[Char]-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "[Char]-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:readS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselectS\u003c/a\u003e\u003c/code\u003e takes three parameters, an offset, a stepsize and a signal and returns some elements of the signal such as in the following example:\n\u003c/p\u003e\u003cpre\u003e\n Signal\u003e selectS 2 3 (signal[1,2,3,4,5,6,7,8,9,10])\n {3,6,9} :: Signal Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "selectS",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#selectS",
          "type": "function"
        },
        "index": {
          "description": "The function selectS takes three parameters an offset stepsize and signal and returns some elements of the signal such as in the following example Signal selectS signal Signal Integer",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "selectS",
          "normalized": "Int-\u003eInt-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Int-\u003eInt-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:selectS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e converts a list into a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "signal",
          "package": "ForSyDe",
          "signature": "[a] -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#signal",
          "type": "function"
        },
        "index": {
          "description": "The function signal converts list into signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "signal",
          "normalized": "[a]-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "[a]-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etailS\u003c/a\u003e\u003c/code\u003e gives the rest of the signal - the tail.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "tailS",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#tailS",
          "type": "function"
        },
        "index": {
          "description": "The function tailS gives the rest of the signal the tail",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "tailS",
          "normalized": "Signal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Signal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:tailS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etakeS\u003c/a\u003e\u003c/code\u003e returns the first n values of a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "takeS",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#takeS",
          "type": "function"
        },
        "index": {
          "description": "The function takeS returns the first values of signal",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "takeS",
          "normalized": "Int-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "Int-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:takeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunitS\u003c/a\u003e\u003c/code\u003e creates a signal with one value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "unitS",
          "package": "ForSyDe",
          "signature": "a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-Signal.html#unitS",
          "type": "function"
        },
        "index": {
          "description": "The function unitS creates signal with one value",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "unitS",
          "normalized": "a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:unitS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ewriteS\u003c/a\u003e\u003c/code\u003e transforms a signal into a string of the following format:\n\u003c/p\u003e\u003cpre\u003e \n Signal\u003e writeS (signal[1,2,3,4,5])\n \u003ca\u003e1n2n3n4n5n\u003c/a\u003e :: [Char]\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Signal",
          "name": "writeS",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e [Char]",
          "source": "src/ForSyDe-Shallow-Signal.html#writeS",
          "type": "function"
        },
        "index": {
          "description": "The function writeS transforms signal into string of the following format Signal writeS signal n2n3n4n5n Char",
          "hierarchy": "ForSyDe Shallow Signal",
          "module": "ForSyDe.Shallow.Signal",
          "name": "writeS",
          "normalized": "Signal a-\u003e[Char]",
          "package": "ForSyDe",
          "signature": "Signal a-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:writeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe stochastic library provides a few stochastic skeletons, which are\n relatives to the skeletons of the synchronous library. These skeletons are\n based on two elementary functions, \u003ccode\u003e\u003ca\u003esigmaUn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e\n which provide stochastic signals. The background and motivation for this\n approach is described in the paper \n\u003c/p\u003e\u003cp\u003eAxel Jantsch, Ingo Sander, and Wenbiao Wu,\n \"The usage of stochastic processes in embedded system specifications\",\n In \u003cem\u003eProceedings of the Ninth International Symposium on Hardware and Software Codesign\u003c/em\u003e, \n April 2001 (\u003ca\u003ehttp://web.it.kth.se/~axel/papers/2001/codes-2001.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eUnfortunately, not all of the suggested skeletons are\n implemented. In particular, consolidation-based process\n constructors and all constructors for the untimed and the discrete\n timed MoCs are missing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "StochasticLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-StochasticLib.html",
          "type": "module"
        },
        "index": {
          "description": "The stochastic library provides few stochastic skeletons which are relatives to the skeletons of the synchronous library These skeletons are based on two elementary functions sigmaUn and sigmaGe which provide stochastic signals The background and motivation for this approach is described in the paper Axel Jantsch Ingo Sander and Wenbiao Wu The usage of stochastic processes in embedded system specifications In Proceedings of the Ninth International Symposium on Hardware and Software Codesign April http web.it.kth.se axel papers codes-2001.pdf Unfortunately not all of the suggested skeletons are implemented In particular consolidation-based process constructors and all constructors for the untimed and the discrete timed MoCs are missing",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "StochasticLib",
          "package": "ForSyDe",
          "partial": "Stochastic Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe skeleton \u003ccode\u003e\u003ca\u003eselMapSY\u003c/a\u003e\u003c/code\u003e is a stochastic variant of\n \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e. It has an internal stochastic process and selects one\n out of two combinatorial functions depending on the output of the\n stochastic process.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMapSY",
          "package": "ForSyDe",
          "signature": "Int-\u003e (a -\u003e b)-\u003e (a -\u003e b)-\u003e Signal a-\u003e Signal b",
          "type": "function"
        },
        "index": {
          "description": "The skeleton selMapSY is stochastic variant of mapSY It has an internal stochastic process and selects one out of two combinatorial functions depending on the output of the stochastic process",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMapSY",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "Map SY",
          "signature": "Int-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMapSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eselMealySY\u003c/a\u003e\u003c/code\u003e is the stochastic variant of mealySY. Both the \n   next-state and the output function is randomly selected based on a \n   uniform distribution.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMealySY",
          "package": "ForSyDe",
          "signature": "Int-\u003e Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e c)-\u003e (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "selMealySY is the stochastic variant of mealySY Both the next-state and the output function is randomly selected based on uniform distribution",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMealySY",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "Mealy SY",
          "signature": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMealySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eselMooreSY\u003c/a\u003e\u003c/code\u003e is the stochastic variant of mooreSY. Both the \n   next-state and the output function is randomly selected based on a \n   uniform distribution.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMooreSY",
          "package": "ForSyDe",
          "signature": "Int-\u003e Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e c)-\u003e (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "selMooreSY is the stochastic variant of mooreSY Both the next-state and the output function is randomly selected based on uniform distribution",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selMooreSY",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "Moore SY",
          "signature": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMooreSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe skeleton \u003ccode\u003e\u003ca\u003eselScanlSY\u003c/a\u003e\u003c/code\u003e is a stochastic variant of \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selScanlSY",
          "package": "ForSyDe",
          "signature": "Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The skeleton selScanlSY is stochastic variant of scanlSY",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "selScanlSY",
          "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "Scanl SY",
          "signature": "Int-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selScanlSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e is a more general stochastic process. The first argument is a\n function f which describes the distribution. For each value v in the\n given range (r1,r2), f(v) is the probability that v is generated.  \n\u003c/p\u003e\u003cp\u003eNote, that the user has to make sure that sum(f(v))=1 for v in (r1,r2).\n\u003c/p\u003e\u003cp\u003eFor illustration consider the following example.\n\u003c/p\u003e\u003cpre\u003e pdist :: Float -\u003e Float\n pdist d = 1\\/\\(2**d\\)\n pdistsum 1 = pdist 1\n pdistsum d = \\(pdist d\\) + \\(pdistsum \\(d-1\\)\\)\n\u003c/pre\u003e\u003cpre\u003e pdistnorm :: Float -\u003e Float -\u003e Float\n pdistnorm dmax d = 1\\/((pdistsum dmax) * (2**d))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003epdistnorm dmax d\u003c/code\u003e gives the probability of a value \u003c= d;\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epdistnorm dmax dmax\u003c/code\u003e is always 1.0\n\u003c/p\u003e\u003cp\u003eHence, using pdistnorm as a function in \u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e gives an exponantial\n distribution for values in the range [0, dmax].\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "sigmaGe",
          "package": "ForSyDe",
          "signature": "(Float -\u003e Float)-\u003e Int-\u003e (Int, Int)-\u003e Signal Int",
          "type": "function"
        },
        "index": {
          "description": "sigmaGe is more general stochastic process The first argument is function which describes the distribution For each value in the given range r1 r2 is the probability that is generated Note that the user has to make sure that sum for in r1 r2 For illustration consider the following example pdist Float Float pdist pdistsum pdist pdistsum pdist pdistsum d-1 pdistnorm Float Float Float pdistnorm dmax pdistsum dmax pdistnorm dmax gives the probability of value pdistnorm dmax dmax is always Hence using pdistnorm as function in sigmaGe gives an exponantial distribution for values in the range dmax",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "sigmaGe",
          "normalized": "(Float-\u003eFloat)-\u003eInt-\u003e(Int,Int)-\u003eSignal Int",
          "package": "ForSyDe",
          "partial": "Ge",
          "signature": "(Float-\u003eFloat)-\u003eInt-\u003e(Int,Int)-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:sigmaGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esigmaUn\u003c/a\u003e\u003c/code\u003e generates a signal list of uniformly distributed Int within\n the given range and with a given seed. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "sigmaUn",
          "package": "ForSyDe",
          "signature": "Int-\u003e (Int, Int)-\u003e Signal Int",
          "type": "function"
        },
        "index": {
          "description": "sigmaUn generates signal list of uniformly distributed Int within the given range and with given seed",
          "hierarchy": "ForSyDe Shallow StochasticLib",
          "module": "ForSyDe.Shallow.StochasticLib",
          "name": "sigmaUn",
          "normalized": "Int-\u003e(Int,Int)-\u003eSignal Int",
          "package": "ForSyDe",
          "partial": "Un",
          "signature": "Int-\u003e(Int,Int)-\u003eSignal Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:sigmaUn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe synchronuous library defines process constructors and processes\n for the synchronous computational model. A process constructor is a\n higher order function which together with combinational function(s)\n and values as arguments constructs a process.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "SynchronousLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html",
          "type": "module"
        },
        "index": {
          "description": "The synchronuous library defines process constructors and processes for the synchronous computational model process constructor is higher order function which together with combinational function and values as arguments constructs process",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "SynchronousLib",
          "package": "ForSyDe",
          "partial": "Synchronous Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e delays the signal one event cycle \n   by introducing an initial value at the beginning of the output signal. \n   Note, that this implies that there is one event (the first) at the \n   output signal that has no corresponding event at the input signal. \n   One could argue that input and output signals are not fully synchronized,\n   even though all input events are synchronous with a corresponding output \n   event. However, this is necessary to initialize feed-back loops.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "delaySY",
          "package": "ForSyDe",
          "signature": "a-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor delaySY delays the signal one event cycle by introducing an initial value at the beginning of the output signal Note that this implies that there is one event the first at the output signal that has no corresponding event at the input signal One could argue that input and output signals are not fully synchronized even though all input events are synchronous with corresponding output event However this is necessary to initialize feed-back loops",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "delaySY",
          "normalized": "a-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "a-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:delaySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaynSY\u003c/a\u003e\u003c/code\u003e delays the signal n events by introducing n identical default values.   \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "delaynSY",
          "package": "ForSyDe",
          "signature": "a-\u003e Int-\u003e Signal a-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor delaynSY delays the signal events by introducing identical default values",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "delaynSY",
          "normalized": "a-\u003eInt-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "a-\u003eInt-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:delaynSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efillSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal with present values by replacing absent values with a given value. The output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "fillSY",
          "package": "ForSyDe",
          "signature": "a-\u003e Signal (AbstExt a)-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor fillSY creates process that fills signal with present values by replacing absent values with given value The output signal is not any more of the type AbstExt",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "fillSY",
          "normalized": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:fillSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efilterSY\u003c/a\u003e\u003c/code\u003e discards the values who do not fulfill a predicate given by a predicate function and replaces them with absent events.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "filterSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e Bool) -\u003e Signal a -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#filterSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor filterSY discards the values who do not fulfill predicate given by predicate function and replaces them with absent events",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "filterSY",
          "normalized": "(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:filterSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efstSY\u003c/a\u003e\u003c/code\u003e selects always the first value from a signal of pairs.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "fstSY",
          "package": "ForSyDe",
          "signature": "Signal (a, b) -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#fstSY",
          "type": "function"
        },
        "index": {
          "description": "The process fstSY selects always the first value from signal of pairs",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "fstSY",
          "normalized": "Signal(a,b)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:fstSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003eholdSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal with values by replacing absent values by the preceding present value. Only in cases, where no preceding value exists, the absent value is replaced by a default value. The output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "holdSY",
          "package": "ForSyDe",
          "signature": "a-\u003e Signal (AbstExt a)-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor holdSY creates process that fills signal with values by replacing absent values by the preceding present value Only in cases where no preceding value exists the absent value is replaced by default value The output signal is not any more of the type AbstExt",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "holdSY",
          "normalized": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:holdSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with one input signal and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mapSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#mapSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mapSY takes combinational function as argument and returns process with one input signal and one output signal",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mapSY",
          "normalized": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mapSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapxSY\u003c/a\u003e\u003c/code\u003e creates a process network that maps a function onto all signals in a vector of signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mapxSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e Vector (Signal a) -\u003e Vector (Signal b)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#mapxSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mapxSY creates process network that maps function onto all signals in vector of signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mapxSY",
          "normalized": "(a-\u003eb)-\u003eVector(Signal a)-\u003eVector(Signal b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb)-\u003eVector(Signal a)-\u003eVector(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mapxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealy2SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#mealy2SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealy2SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealy2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealy3SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#mealy3SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealy3SY behaves like mealySY but has three input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealy3SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealy3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003emelaySY\u003c/code\u003e is used to model state machines of \"Mealy\" type, where the output only depends on the current state and the input values. The process constructor is based on the process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that the output operates on the current state and not on the next state. The process constructors takes a function to calculate the next state, another function to calculate the output and a value for the initial state. \n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e depends only on the state, but not on the input values.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealySY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "The process constructor melaySY is used to model state machines of Mealy type where the output only depends on the current state and the input values The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mooreSY depends only on the state but not on the input values",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mealySY",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "moore2SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e (a -\u003e d) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#moore2SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "moore2SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:moore2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "moore3SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e (a -\u003e e) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#moore3SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor moore3SY behaves like mooreSY but has three input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "moore3SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:moore3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e is used to model state machines of \"Moore\" type, where the output only depends on the current state. The process constructor is based on the process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that the output operates on the current state and not on the next state. The process constructors takes a function to calculate the next state, another function to calculate the output and a value for the initial state. \n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e depends not only on the state, but also on the input values.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mooreSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e a)-\u003e (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mooreSY is used to model state machines of Moore type where the output only depends on the current state The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mealySY depends not only on the state but also on the input values",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "mooreSY",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mooreSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanl2SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#scanl2SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanl2SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanl2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanl3SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#scanl3SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanl3SY behaves like scanlSY but has three input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanl3SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanl3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state machine process without output decoder. It takes an initial value and a function for the next state decoder. The process constructor behaves similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e and has the value of the new state as its output value as illustrated by the following example.  \n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e scanldSY (+) 0 (signal [1,2,3,4])\n\u003c/pre\u003e\u003cpre\u003e {1,3,6,10} :: Signal Integer\n\u003c/pre\u003e\u003cp\u003eThis is in contrast to the function \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, which has its current state as its output value. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanlSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanlSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY and has the value of the new state as its output value as illustrated by the following example SynchronousLib scanldSY signal Signal Integer This is in contrast to the function scanldSY which has its current state as its output value",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanlSY",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanlSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanld2SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#scanld2SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanld2SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanld2SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanld3SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#scanld3SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanld3SY behaves like scanldSY but has three input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanld3SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanld3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state machine process without output decoder. It takes an initial value and a function for the next state decoder. The process constructor behaves similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e. In contrast to the process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e here the output value is the current state and not the one of the next state.\n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e scanlSY (+) 0 (signal [1,2,3,4])\n\u003c/pre\u003e\u003cpre\u003e {0,1,3,6} :: Signal Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanldSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
          "type": "function"
        },
        "index": {
          "description": "The process constructor scanldSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY In contrast to the process constructor scanlSY here the output value is the current state and not the one of the next state SynchronousLib scanlSY signal Signal Integer",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "scanldSY",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanldSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esndSY\u003c/a\u003e\u003c/code\u003e selects always the second value from a signal of pairs.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "sndSY",
          "package": "ForSyDe",
          "signature": "Signal (a, b) -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#sndSY",
          "type": "function"
        },
        "index": {
          "description": "The process sndSY selects always the second value from signal of pairs",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "sndSY",
          "normalized": "Signal(a,b)-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b)-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:sndSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esourceSY\u003c/a\u003e\u003c/code\u003e takes a function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state. The state also serves as output value. \n\u003c/p\u003e\u003cp\u003eThe process that has the infinite signal of natural numbers as output is constructed by \n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e takeS 5 (sourceSY (+1) 0)\n\u003c/pre\u003e\u003cpre\u003e {0,1,2,3,4} :: Signal Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "sourceSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#sourceSY",
          "type": "function"
        },
        "index": {
          "description": "The process sourceSY takes function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state The state also serves as output value The process that has the infinite signal of natural numbers as output is constructed by SynchronousLib takeS sourceSY Signal Integer",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "sourceSY",
          "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:sourceSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has three output signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip3SY",
          "package": "ForSyDe",
          "signature": "Signal (a, b, c) -\u003e (Signal a, Signal b, Signal c)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip3SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip3SY works as unzipSY but has three output signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip3SY",
          "normalized": "Signal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip4SY",
          "package": "ForSyDe",
          "signature": "Signal (a, b, c, d) -\u003e (Signal a, Signal b, Signal c, Signal d)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip4SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip4SY works as unzipSY but has four output signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip4SY",
          "normalized": "Signal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip5SY",
          "package": "ForSyDe",
          "signature": "Signal (a, b, c, d, e) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip5SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip5SY works as unzipSY but has four output signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip5SY",
          "normalized": "Signal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip5SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip6SY",
          "package": "ForSyDe",
          "signature": "Signal (a, b, c, d, e, f) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e, Signal f)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip6SY",
          "type": "function"
        },
        "index": {
          "description": "The process unzip6SY works as unzipSY but has four output signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzip6SY",
          "normalized": "Signal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip6SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into two signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzipSY",
          "package": "ForSyDe",
          "signature": "Signal (a, b) -\u003e (Signal a, Signal b)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzipSY",
          "type": "function"
        },
        "index": {
          "description": "The process unzipSY unzips signal of tuples into two signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzipSY",
          "normalized": "Signal(a,b)-\u003e(Signal a,Signal b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(a,b)-\u003e(Signal a,Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzipSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipxSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a vector of signals into a signal of vectors.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzipxSY",
          "package": "ForSyDe",
          "signature": "Signal (Vector a) -\u003e Vector (Signal a)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#unzipxSY",
          "type": "function"
        },
        "index": {
          "description": "The process unzipxSY unzips vector of signals into signal of vectors",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "unzipxSY",
          "normalized": "Signal(Vector a)-\u003eVector(Signal a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(Vector a)-\u003eVector(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzipxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ewhenSY\u003c/a\u003e\u003c/code\u003e creates a process that synchronizes a signal of absent extended values with another signal of absent extended values. The output signal has the value of the first signal whenever an event has a present value and \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e when the event has an absent value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "whenSY",
          "package": "ForSyDe",
          "signature": "Signal (AbstExt a) -\u003e Signal (AbstExt b) -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#whenSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor whenSY creates process that synchronizes signal of absent extended values with another signal of absent extended values The output signal has the value of the first signal whenever an event has present value and Abst when the event has an absent value",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "whenSY",
          "normalized": "Signal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:whenSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes three input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip3SY",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal (a, b, c)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zip3SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip3SY works as zipSY but takes three input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip3SY",
          "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip4SY",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal (a, b, c, d)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zip4SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip4SY works as zipSY but takes four input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip4SY",
          "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip5SY",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal (a, b, c, d, e)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zip5SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip5SY works as zipSY but takes four input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip5SY",
          "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip5SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip6SY",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal f -\u003e Signal (a, b, c, d, e, f)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zip6SY",
          "type": "function"
        },
        "index": {
          "description": "The process zip6SY works as zipSY but takes four input signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zip6SY",
          "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip6SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e \"zips\" two incoming signals into one signal of tuples.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipSY",
          "package": "ForSyDe",
          "signature": "Signal a -\u003e Signal b -\u003e Signal (a, b)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipSY",
          "type": "function"
        },
        "index": {
          "description": "The process zipSY zips two incoming signals into one signal of tuples",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipSY",
          "normalized": "Signal a-\u003eSignal b-\u003eSignal(a,b)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal a-\u003eSignal b-\u003eSignal(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith3SY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with three input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWith3SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWith3SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith3SY takes combinational function as argument and returns process with three input signals and one output signal",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWith3SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWith3SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith4SY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with four input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWith4SY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWith4SY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWith4SY takes combinational function as argument and returns process with four input signals and one output signal",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWith4SY",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWith4SY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with two input signals and one output signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWithSY",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWithSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWithSY takes combinational function as argument and returns process with two input signals and one output signal",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWithSY",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "With SY",
          "signature": "(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWithSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithxSY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e, but takes a vector of signals as input.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWithxSY",
          "package": "ForSyDe",
          "signature": "(Vector a -\u003e b) -\u003e Vector (Signal a) -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWithxSY",
          "type": "function"
        },
        "index": {
          "description": "The process constructor zipWithxSY works as zipWithSY but takes vector of signals as input",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipWithxSY",
          "normalized": "(Vector a-\u003eb)-\u003eVector(Signal a)-\u003eSignal b",
          "package": "ForSyDe",
          "partial": "Withx SY",
          "signature": "(Vector a-\u003eb)-\u003eVector(Signal a)-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWithxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipxSY\u003c/a\u003e\u003c/code\u003e \"zips\" a signal of vectors into a vector of signals.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipxSY",
          "package": "ForSyDe",
          "signature": "Vector (Signal a) -\u003e Signal (Vector a)",
          "source": "src/ForSyDe-Shallow-SynchronousLib.html#zipxSY",
          "type": "function"
        },
        "index": {
          "description": "The process zipxSY zips signal of vectors into vector of signals",
          "hierarchy": "ForSyDe Shallow SynchronousLib",
          "module": "ForSyDe.Shallow.SynchronousLib",
          "name": "zipxSY",
          "normalized": "Vector(Signal a)-\u003eSignal(Vector a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Vector(Signal a)-\u003eSignal(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipxSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe synchronous process library defines processes for the\n synchronous computational model. It is based on the synchronous\n library \u003ca\u003eForSyDe.Shallow.SynchronousLib\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "SynchronousProcessLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html",
          "type": "module"
        },
        "index": {
          "description": "The synchronous process library defines processes for the synchronous computational model It is based on the synchronous library ForSyDe.Shallow.SynchronousLib",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "SynchronousProcessLib",
          "package": "ForSyDe",
          "partial": "Synchronous Process Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ecounterSY\u003c/a\u003e\u003c/code\u003e implements a counter, that counts from\n   min to max. The process \u003ccode\u003e\u003ca\u003ecounterSY\u003c/a\u003e\u003c/code\u003e has no input and its output is\n   an infinite signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "counterSY",
          "package": "ForSyDe",
          "signature": "a -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#counterSY",
          "type": "function"
        },
        "index": {
          "description": "The process counterSY implements counter that counts from min to max The process counterSY has no input and its output is an infinite signal",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "counterSY",
          "normalized": "a-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "a-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:counterSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efifoDelaySY\u003c/a\u003e\u003c/code\u003e implements a synchronous model of a\n FIFO with infinite size. The FIFOs take a list of values at each\n event cycle and output one value. There is a delay of one cycle.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "fifoDelaySY",
          "package": "ForSyDe",
          "signature": "Signal [a] -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#fifoDelaySY",
          "type": "function"
        },
        "index": {
          "description": "The process fifoDelaySY implements synchronous model of FIFO with infinite size The FIFOs take list of values at each event cycle and output one value There is delay of one cycle",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "fifoDelaySY",
          "normalized": "Signal[a]-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "Delay SY",
          "signature": "Signal[a]-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:fifoDelaySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efiniteFifoDelaySY\u003c/a\u003e\u003c/code\u003e implements a FIFO with finite\n size. The FIFOs take a list of values at each event cycle and\n output one value. There is a delay of one cycle.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "finiteFifoDelaySY",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal [a] -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#finiteFifoDelaySY",
          "type": "function"
        },
        "index": {
          "description": "The process finiteFifoDelaySY implements FIFO with finite size The FIFOs take list of values at each event cycle and output one value There is delay of one cycle",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "finiteFifoDelaySY",
          "normalized": "Int-\u003eSignal[a]-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "Fifo Delay SY",
          "signature": "Int-\u003eSignal[a]-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:finiteFifoDelaySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupSY\u003c/a\u003e\u003c/code\u003e groups values into a vector of size n,\n which takes n cycles. While the grouping takes place the output\n from this process consists of absent values.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "groupSY",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal a -\u003e Signal (AbstExt (Vector a))",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#groupSY",
          "type": "function"
        },
        "index": {
          "description": "The function groupSY groups values into vector of size which takes cycles While the grouping takes place the output from this process consists of absent values",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "groupSY",
          "normalized": "Int-\u003eSignal a-\u003eSignal(AbstExt(Vector a))",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Int-\u003eSignal a-\u003eSignal(AbstExt(Vector a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:groupSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ememorySY\u003c/a\u003e\u003c/code\u003e implements a synchronous memory. It uses\n access functions of the type 'Read adr' and 'Write adr value'.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "memorySY",
          "package": "ForSyDe",
          "signature": "Int -\u003e Signal (Access a) -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#memorySY",
          "type": "function"
        },
        "index": {
          "description": "The process memorySY implements synchronous memory It uses access functions of the type Read adr and Write adr value",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "memorySY",
          "normalized": "Int-\u003eSignal(Access a)-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Int-\u003eSignal(Access a)-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:memorySY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003emergeSY\u003c/a\u003e\u003c/code\u003e merges two input signals into a single\n signal. The process has an internal buffer in order to prevent loss\n of data. The process is deterministic and outputs events according\n to their time tag. If there are two valid values at on both\n signals. The value of the first signal is output first.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "mergeSY",
          "package": "ForSyDe",
          "signature": "Signal (AbstExt a) -\u003e Signal (AbstExt a) -\u003e Signal (AbstExt a)",
          "source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#mergeSY",
          "type": "function"
        },
        "index": {
          "description": "The process mergeSY merges two input signals into single signal The process has an internal buffer in order to prevent loss of data The process is deterministic and outputs events according to their time tag If there are two valid values at on both signals The value of the first signal is output first",
          "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
          "module": "ForSyDe.Shallow.SynchronousProcessLib",
          "name": "mergeSY",
          "normalized": "Signal(AbstExt a)-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt a)",
          "package": "ForSyDe",
          "partial": "SY",
          "signature": "Signal(AbstExt a)-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:mergeSY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe untimed library defines process constructors and processes for\n the untimed computational model. A process constructor is a higher\n order function which together with combinational function(s) and\n values as arguments constructs a process.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "UntimedLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-UntimedLib.html",
          "type": "module"
        },
        "index": {
          "description": "The untimed library defines process constructors and processes for the untimed computational model process constructor is higher order function which together with combinational function and values as arguments constructs process",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "UntimedLib",
          "package": "ForSyDe",
          "partial": "Untimed Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "comb2U",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#comb2U",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "comb2U",
          "normalized": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "signature": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:comb2U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "comb2UC",
          "package": "ForSyDe",
          "signature": "Int -\u003e (a -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#comb2UC",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "comb2UC",
          "normalized": "Int-\u003e(a-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "UC",
          "signature": "Int-\u003e(a-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:comb2UC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "combU",
          "package": "ForSyDe",
          "signature": "Int -\u003e ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#combU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "combU",
          "normalized": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:combU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einitU\u003c/a\u003e\u003c/code\u003e is used to initialise a signal. Its first argument is prepended to its second argument, a signal.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "initU",
          "package": "ForSyDe",
          "signature": "[a] -\u003e Signal a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#initU",
          "type": "function"
        },
        "index": {
          "description": "initU is used to initialise signal Its first argument is prepended to its second argument signal",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "initU",
          "normalized": "[a]-\u003eSignal a-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "[a]-\u003eSignal a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:initU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first parameter of \u003ccode\u003e\u003ca\u003emapU\u003c/a\u003e\u003c/code\u003e is a constant integer defining the number of tokens consumed in every evaluation cycle. The second argument is a function on lists of the input type and returning a list of the output type. For instance,\n\u003c/p\u003e\u003cpre\u003e r2 = mapU 1 f\n   where f :: [Int] -\u003e [Int]\n         f [x] = [2*x]\n\u003c/pre\u003e\u003cp\u003edefines a process r2 which consumes one token in each evaluation cycle and multiplies it by two.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mapU",
          "package": "ForSyDe",
          "signature": "Int -\u003e ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#mapU",
          "type": "function"
        },
        "index": {
          "description": "The first parameter of mapU is constant integer defining the number of tokens consumed in every evaluation cycle The second argument is function on lists of the input type and returning list of the output type For instance r2 mapU where Int Int defines process r2 which consumes one token in each evaluation cycle and multiplies it by two",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mapU",
          "normalized": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mapU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealyU\u003c/a\u003e\u003c/code\u003e creates a state machine of Moore type. In addition to the next state function they also have an output encoding function. The output depends directly on the internal state.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mealyU",
          "package": "ForSyDe",
          "signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e (b -\u003e [a] -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#mealyU",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mealyU creates state machine of Moore type In addition to the next state function they also have an output encoding function The output depends directly on the internal state",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mealyU",
          "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003e(a-\u003e[b]-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003e(b-\u003e[a]-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mealyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreU\u003c/a\u003e\u003c/code\u003e creates a state machine of Moore type. In addition to the next state function they also have an output encoding function. The output depends directly on the internal state.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mooreU",
          "package": "ForSyDe",
          "signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e (b -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#mooreU",
          "type": "function"
        },
        "index": {
          "description": "The process constructor mooreU creates state machine of Moore type In addition to the next state function they also have an output encoding function The output depends directly on the internal state",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "mooreU",
          "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003e(a-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003e(b-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mooreU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e has an internal state which is visible at the output. The first argument is a function 'gamma' which, given the state returns the number of tokens consumed next. The second argument is the next state function and the third is the initial state.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "scanU",
          "package": "ForSyDe",
          "signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e b -\u003e Signal a -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#scanU",
          "type": "function"
        },
        "index": {
          "description": "scanU has an internal state which is visible at the output The first argument is function gamma which given the state returns the number of tokens consumed next The second argument is the next state function and the third is the initial state",
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "scanU",
          "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003eb-\u003eSignal a-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:scanU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "sinkU",
          "package": "ForSyDe",
          "signature": "(a -\u003e Int) -\u003e (a -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal b",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#sinkU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "sinkU",
          "normalized": "(a-\u003eInt)-\u003e(a-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal b",
          "package": "ForSyDe",
          "signature": "(a-\u003eInt)-\u003e(a-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:sinkU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "sourceU",
          "package": "ForSyDe",
          "signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#sourceU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "sourceU",
          "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "package": "ForSyDe",
          "signature": "(a-\u003ea)-\u003ea-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:sourceU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "unzipU",
          "package": "ForSyDe",
          "signature": "Signal ([a], [b]) -\u003e (Signal a, Signal b)",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#unzipU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "unzipU",
          "normalized": "Signal([a],[b])-\u003e(Signal a,Signal b)",
          "package": "ForSyDe",
          "signature": "Signal([a],[b])-\u003e(Signal a,Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:unzipU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipU",
          "package": "ForSyDe",
          "signature": "Signal (Int, Int) -\u003e Signal a -\u003e Signal b -\u003e Signal ([a], [b])",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#zipU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipU",
          "normalized": "Signal(Int,Int)-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
          "package": "ForSyDe",
          "signature": "Signal(Int,Int)-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipUs",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e Signal a -\u003e Signal b -\u003e Signal ([a], [b])",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#zipUs",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipUs",
          "normalized": "Int-\u003eInt-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
          "package": "ForSyDe",
          "partial": "Us",
          "signature": "Int-\u003eInt-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipUs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWith3U",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c] -\u003e [d]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#zipWith3U",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWith3U",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "package": "ForSyDe",
          "partial": "With",
          "signature": "Int-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWith3U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWith4U",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#zipWith4U",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWith4U",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "package": "ForSyDe",
          "partial": "With",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWith4U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWithU",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
          "source": "src/ForSyDe-Shallow-UntimedLib.html#zipWithU",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow UntimedLib",
          "module": "ForSyDe.Shallow.UntimedLib",
          "name": "zipWithU",
          "normalized": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "package": "ForSyDe",
          "partial": "With",
          "signature": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWithU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ForSyDeUtilityLib is a container including all libraries that\n are related to the ForSyDe shallow-embedded implementation and\n either extend the ForSyDe MoC libraries or add additional\n functionality to ForSyDe.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.DFT\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Memory\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Queue\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.BitVector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.FilterLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Gaussian\u003c/a\u003e\t\t\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.PolyArith\u003c/a\u003e\t\t\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.StochasticLib\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.UtilityLib",
          "name": "UtilityLib",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-UtilityLib.html",
          "type": "module"
        },
        "index": {
          "description": "The ForSyDeUtilityLib is container including all libraries that are related to the ForSyDe shallow-embedded implementation and either extend the ForSyDe MoC libraries or add additional functionality to ForSyDe ForSyDe.Shallow.DFT ForSyDe.Shallow.Memory ForSyDe.Shallow.Queue ForSyDe.Shallow.BitVector ForSyDe.Shallow.FilterLib ForSyDe.Shallow.Gaussian ForSyDe.Shallow.PolyArith ForSyDe.Shallow.StochasticLib",
          "hierarchy": "ForSyDe Shallow UtilityLib",
          "module": "ForSyDe.Shallow.UtilityLib",
          "name": "UtilityLib",
          "package": "ForSyDe",
          "partial": "Utility Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UtilityLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the data type \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and the\n corresponding functions. It is a development of the module\n defined by Reekie.  Though the vector is modeled as a list, it\n should be viewed as an array, i.e. a vector has a fixed\n size. Unfortunately, it is not possible to have the size of the\n vector as a parameter of the vector data type, due to restrictions\n in Haskells type system. Still most operations are defined for\n vectors with the same size.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "Vector",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the data type Vector and the corresponding functions It is development of the module defined by Reekie Though the vector is modeled as list it should be viewed as an array i.e vector has fixed size Unfortunately it is not possible to have the size of the vector as parameter of the vector data type due to restrictions in Haskells type system Still most operations are defined for vectors with the same size",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "Vector",
          "package": "ForSyDe",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e is modeled similar to a list. It has two data type constructors. \u003ccode\u003e\u003ca\u003eNullV\u003c/a\u003e\u003c/code\u003e constructs the empty vector, while \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e constructsa vector by adding an value to an existing vector. Using the inheritance mechanism of Haskell we have declared \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e as an instance of the classes \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e| This means that the vector 1:\u003e2:\u003e3:\u003eNullV is shown as \u003ca\u003e1,2,3\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "Vector",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow-Vector.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "The data type Vector is modeled similar to list It has two data type constructors NullV constructs the empty vector while constructsa vector by adding an value to an existing vector Using the inheritance mechanism of Haskell we have declared Vector as an instance of the classes Read and Show This means that the vector NullV is shown as",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "Vector",
          "package": "ForSyDe",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator '(\u003ca\u003e+\u003c/a\u003e)' concatinates two vectors.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "(\u003c+\u003e)",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The operator concatinates two vectors",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator '(\u003c:)' adds an element at the end of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "(\u003c:)",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#%3C%3A",
          "type": "function"
        },
        "index": {
          "description": "The operator adds an element at the end of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "(\u003c:) \u003c:",
          "normalized": "Vector a-\u003ea-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Vector",
          "name": ":\u003e",
          "package": "ForSyDe",
          "signature": "a :\u003e (Vector a)",
          "source": "src/ForSyDe-Shallow-Vector.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": ":\u003e",
          "package": "ForSyDe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForSyDe.Shallow.Vector",
          "name": "NullV",
          "package": "ForSyDe",
          "signature": "NullV",
          "source": "src/ForSyDe-Shallow-Vector.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "NullV",
          "package": "ForSyDe",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:NullV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eatV\u003c/a\u003e\u003c/code\u003e returns the n-th element in a vector, starting from zero.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "atV",
          "package": "ForSyDe",
          "signature": "Vector b -\u003e a -\u003e b",
          "source": "src/ForSyDe-Shallow-Vector.html#atV",
          "type": "function"
        },
        "index": {
          "description": "The function atV returns the n-th element in vector starting from zero",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "atV",
          "normalized": "Vector a-\u003eb-\u003ea",
          "package": "ForSyDe",
          "signature": "Vector b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:atV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003econcatV\u003c/a\u003e\u003c/code\u003e transforms a vector of vectors to a single vector. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "concatV",
          "package": "ForSyDe",
          "signature": "Vector (Vector a) -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#concatV",
          "type": "function"
        },
        "index": {
          "description": "The function concatV transforms vector of vectors to single vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "concatV",
          "normalized": "Vector(Vector a)-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector(Vector a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:concatV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecopyV\u003c/a\u003e\u003c/code\u003e generates a vector with a given number of copies of the same element. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e copyV 7 5 \n\u003c/pre\u003e\u003cpre\u003e \u003c5,5,5,5,5,5,5\u003e :: Vector Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "copyV",
          "package": "ForSyDe",
          "signature": "a -\u003e b -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#copyV",
          "type": "function"
        },
        "index": {
          "description": "The function copyV generates vector with given number of copies of the same element Vector copyV Vector Integer",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "copyV",
          "normalized": "a-\u003eb-\u003eVector b",
          "package": "ForSyDe",
          "signature": "a-\u003eb-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:copyV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edropV\u003c/a\u003e\u003c/code\u003e drops the first n elements of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "dropV",
          "package": "ForSyDe",
          "signature": "a -\u003e Vector b -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#dropV",
          "type": "function"
        },
        "index": {
          "description": "The function dropV drops the first elements of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "dropV",
          "normalized": "a-\u003eVector b-\u003eVector b",
          "package": "ForSyDe",
          "signature": "a-\u003eVector b-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:dropV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher-function \u003ccode\u003e\u003ca\u003efilterV\u003c/a\u003e\u003c/code\u003e takes a predicate function and a vector and creates a new vector with the elements for which the predicate is true. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "filterV",
          "package": "ForSyDe",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#filterV",
          "type": "function"
        },
        "index": {
          "description": "The higher-function filterV takes predicate function and vector and creates new vector with the elements for which the predicate is true",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "filterV",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:filterV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher-order functions \u003ccode\u003e\u003ca\u003efoldlV\u003c/a\u003e\u003c/code\u003e folds a function from the right to the left  over a vector using an initial value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "foldlV",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/ForSyDe-Shallow-Vector.html#foldlV",
          "type": "function"
        },
        "index": {
          "description": "The higher-order functions foldlV folds function from the right to the left over vector using an initial value",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "foldlV",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "ForSyDe",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:foldlV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher-order functions \u003ccode\u003e\u003ca\u003efoldrV\u003c/a\u003e\u003c/code\u003e folds a function from the left to the right over a vector using an initial value.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "foldrV",
          "package": "ForSyDe",
          "signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/ForSyDe-Shallow-Vector.html#foldrV",
          "type": "function"
        },
        "index": {
          "description": "The higher-order functions foldrV folds function from the left to the right over vector using an initial value",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "foldrV",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "package": "ForSyDe",
          "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:foldrV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromVector\u003c/a\u003e\u003c/code\u003e converts a vector into a list.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "fromVector",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e [a]",
          "source": "src/ForSyDe-Shallow-Vector.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "The function fromVector converts vector into list",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "fromVector",
          "normalized": "Vector a-\u003e[a]",
          "package": "ForSyDe",
          "partial": "Vector",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egenerateV\u003c/a\u003e\u003c/code\u003e behaves in the same way, but starts with the application of the supplied function to the supplied value. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e generateV 5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c2,3,4,5,6\u003e :: Vector Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "generateV",
          "package": "ForSyDe",
          "signature": "a -\u003e (b -\u003e b) -\u003e b -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#generateV",
          "type": "function"
        },
        "index": {
          "description": "The function generateV behaves in the same way but starts with the application of the supplied function to the supplied value Vector generateV Vector Integer",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "generateV",
          "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
          "package": "ForSyDe",
          "signature": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:generateV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupV\u003c/a\u003e\u003c/code\u003e groups a vector into a vector of vectors of size n.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "groupV",
          "package": "ForSyDe",
          "signature": "Int -\u003e Vector a -\u003e Vector (Vector a)",
          "source": "src/ForSyDe-Shallow-Vector.html#groupV",
          "type": "function"
        },
        "index": {
          "description": "The function groupV groups vector into vector of vectors of size",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "groupV",
          "normalized": "Int-\u003eVector a-\u003eVector(Vector a)",
          "package": "ForSyDe",
          "signature": "Int-\u003eVector a-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:groupV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eheadV\u003c/a\u003e\u003c/code\u003e returns the first element of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "headV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e a",
          "source": "src/ForSyDe-Shallow-Vector.html#headV",
          "type": "function"
        },
        "index": {
          "description": "The functions headV returns the first element of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "headV",
          "normalized": "Vector a-\u003ea",
          "package": "ForSyDe",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:headV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003einitV\u003c/a\u003e\u003c/code\u003e returns all but the last elements of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "initV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#initV",
          "type": "function"
        },
        "index": {
          "description": "The function initV returns all but the last elements of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "initV",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:initV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eiterateV\u003c/a\u003e\u003c/code\u003e generates a vector with a given number of elements starting from an initial element using a supplied function for the generation of elements. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e iterateV 5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c1,2,3,4,5\u003e :: Vector Integer\n\u003c/pre\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "iterateV",
          "package": "ForSyDe",
          "signature": "a -\u003e (b -\u003e b) -\u003e b -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#iterateV",
          "type": "function"
        },
        "index": {
          "description": "The function iterateV generates vector with given number of elements starting from an initial element using supplied function for the generation of elements Vector iterateV Vector Integer",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "iterateV",
          "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
          "package": "ForSyDe",
          "signature": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:iterateV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elastV\u003c/a\u003e\u003c/code\u003e returns the last element of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "lastV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e a",
          "source": "src/ForSyDe-Shallow-Vector.html#lastV",
          "type": "function"
        },
        "index": {
          "description": "The function lastV returns the last element of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "lastV",
          "normalized": "Vector a-\u003ea",
          "package": "ForSyDe",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:lastV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elengthV\u003c/a\u003e\u003c/code\u003e returns the number of elements in a value. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "lengthV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Int",
          "source": "src/ForSyDe-Shallow-Vector.html#lengthV",
          "type": "function"
        },
        "index": {
          "description": "The function lengthV returns the number of elements in value",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "lengthV",
          "normalized": "Vector a-\u003eInt",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:lengthV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher-order function \u003ccode\u003e\u003ca\u003emapV\u003c/a\u003e\u003c/code\u003e applies a function on all elements of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "mapV",
          "package": "ForSyDe",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#mapV",
          "type": "function"
        },
        "index": {
          "description": "The higher-order function mapV applies function on all elements of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "mapV",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "ForSyDe",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:mapV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enullV\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if a vector is empty. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "nullV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Bool",
          "source": "src/ForSyDe-Shallow-Vector.html#nullV",
          "type": "function"
        },
        "index": {
          "description": "The function nullV returns True if vector is empty",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "nullV",
          "normalized": "Vector a-\u003eBool",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:nullV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereplaceV\u003c/a\u003e\u003c/code\u003e replaces an element in a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "replaceV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Int -\u003e a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#replaceV",
          "type": "function"
        },
        "index": {
          "description": "The function replaceV replaces an element in vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "replaceV",
          "normalized": "Vector a-\u003eInt-\u003ea-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eInt-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:replaceV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereverseV\u003c/a\u003e\u003c/code\u003e reverses the order of elements in a vector. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "reverseV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#reverseV",
          "type": "function"
        },
        "index": {
          "description": "The function reverseV reverses the order of elements in vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "reverseV",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:reverseV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erotlV\u003c/a\u003e\u003c/code\u003e rotates a vector to the left. Note that this fuctions does not change the size of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "rotlV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#rotlV",
          "type": "function"
        },
        "index": {
          "description": "The function rotlV rotates vector to the left Note that this fuctions does not change the size of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "rotlV",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:rotlV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erotrV\u003c/a\u003e\u003c/code\u003e rotates a vector to the right. Note that this fuction does not change the size of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "rotrV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#rotrV",
          "type": "function"
        },
        "index": {
          "description": "The function rotrV rotates vector to the right Note that this fuction does not change the size of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "rotrV",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:rotrV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselectV\u003c/a\u003e\u003c/code\u003e selects elements in the vector. The first argument gives the initial element, starting from zero, the second argument gives the stepsize between elements and the last argument gives the number of elements. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "selectV",
          "package": "ForSyDe",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#selectV",
          "type": "function"
        },
        "index": {
          "description": "The function selectV selects elements in the vector The first argument gives the initial element starting from zero the second argument gives the stepsize between elements and the last argument gives the number of elements",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "selectV",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Int-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:selectV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eshiftlV\u003c/a\u003e\u003c/code\u003e shifts a value from the left into a vector. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "shiftlV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#shiftlV",
          "type": "function"
        },
        "index": {
          "description": "The function shiftlV shifts value from the left into vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "shiftlV",
          "normalized": "Vector a-\u003ea-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:shiftlV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eshiftrV\u003c/a\u003e\u003c/code\u003e shifts a value from the right into a vector. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "shiftrV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#shiftrV",
          "type": "function"
        },
        "index": {
          "description": "The function shiftrV shifts value from the right into vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "shiftrV",
          "normalized": "Vector a-\u003ea-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:shiftrV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003etailV\u003c/a\u003e\u003c/code\u003e returns all, but the first element of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "tailV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#tailV",
          "type": "function"
        },
        "index": {
          "description": "The functions tailV returns all but the first element of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "tailV",
          "normalized": "Vector a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:tailV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etakeV\u003c/a\u003e\u003c/code\u003e returns the first n elements of a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "takeV",
          "package": "ForSyDe",
          "signature": "a -\u003e Vector b -\u003e Vector b",
          "source": "src/ForSyDe-Shallow-Vector.html#takeV",
          "type": "function"
        },
        "index": {
          "description": "The function takeV returns the first elements of vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "takeV",
          "normalized": "a-\u003eVector b-\u003eVector b",
          "package": "ForSyDe",
          "signature": "a-\u003eVector b-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:takeV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunitV\u003c/a\u003e\u003c/code\u003e creates a vector with one element. \n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "unitV",
          "package": "ForSyDe",
          "signature": "a -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#unitV",
          "type": "function"
        },
        "index": {
          "description": "The function unitV creates vector with one element",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "unitV",
          "normalized": "a-\u003eVector a",
          "package": "ForSyDe",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:unitV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunzipV\u003c/a\u003e\u003c/code\u003e unzips a vector of tuples into two vectors.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "unzipV",
          "package": "ForSyDe",
          "signature": "Vector (a, b) -\u003e (Vector a, Vector b)",
          "source": "src/ForSyDe-Shallow-Vector.html#unzipV",
          "type": "function"
        },
        "index": {
          "description": "The function unzipV unzips vector of tuples into two vectors",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "unzipV",
          "normalized": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "package": "ForSyDe",
          "signature": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:unzipV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003evector\u003c/a\u003e\u003c/code\u003e converts a list into a vector.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "vector",
          "package": "ForSyDe",
          "signature": "[a] -\u003e Vector a",
          "source": "src/ForSyDe-Shallow-Vector.html#vector",
          "type": "function"
        },
        "index": {
          "description": "The function vector converts list into vector",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "vector",
          "normalized": "[a]-\u003eVector a",
          "package": "ForSyDe",
          "signature": "[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ezipV\u003c/a\u003e\u003c/code\u003e zips two vectors into a vector of tuples.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "zipV",
          "package": "ForSyDe",
          "signature": "Vector a -\u003e Vector b -\u003e Vector (a, b)",
          "source": "src/ForSyDe-Shallow-Vector.html#zipV",
          "type": "function"
        },
        "index": {
          "description": "The function zipV zips two vectors into vector of tuples",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "zipV",
          "normalized": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "package": "ForSyDe",
          "signature": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:zipV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher-order function \u003ccode\u003e\u003ca\u003ezipWithV\u003c/a\u003e\u003c/code\u003e applies a function pairwise on to vectors.\n\u003c/p\u003e",
          "module": "ForSyDe.Shallow.Vector",
          "name": "zipWithV",
          "package": "ForSyDe",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/ForSyDe-Shallow-Vector.html#zipWithV",
          "type": "function"
        },
        "index": {
          "description": "The higher-order function zipWithV applies function pairwise on to vectors",
          "hierarchy": "ForSyDe Shallow Vector",
          "module": "ForSyDe.Shallow.Vector",
          "name": "zipWithV",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "ForSyDe",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:zipWithV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShallow-embedded implementation of ForSyDe (see \u003ca\u003eForSyDe.Shallow.Signal\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eUnlike systems built using the deep-embedded Signal type of ForSyDe\n (see \u003ccode\u003eForSyDe.Signal\u003c/code\u003e), systems built with \u003ccode\u003eForSyDe.Shallow.Signal\u003c/code\u003e\n can make use of new and experimental features such as multiple,\n heterogeneous MoCs (Models of Computation) other than the Synchronous\n MoC (the only Model of Computation currently supported by deep-embdded\n ForSyDe). However, as an important tradeoff, \u003ccode\u003eForSyDe.Shallow.Signal\u003c/code\u003e\n is unaware of the resulting system structure, only allowing simulation \n (i.e. a VHDL or GraphML backend is impossible to implement).\n\u003c/p\u003e\u003cp\u003eThe shallow implementation of ForSyDe consists of three main libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.CoreLib\u003c/a\u003e contains the basic definitions and\n   functions such as events and signals.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.MoCLib\u003c/a\u003e defines the models of computations\n   included in ForSyDe.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.UtilityLib\u003c/a\u003e provides several additional modules\n   that are useful and convenient in practice. Their status is\n   experimental.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "ForSyDe.Shallow",
          "name": "Shallow",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Shallow.html",
          "type": "module"
        },
        "index": {
          "description": "Shallow-embedded implementation of ForSyDe see ForSyDe.Shallow.Signal Unlike systems built using the deep-embedded Signal type of ForSyDe see ForSyDe.Signal systems built with ForSyDe.Shallow.Signal can make use of new and experimental features such as multiple heterogeneous MoCs Models of Computation other than the Synchronous MoC the only Model of Computation currently supported by deep-embdded ForSyDe However as an important tradeoff ForSyDe.Shallow.Signal is unaware of the resulting system structure only allowing simulation i.e VHDL or GraphML backend is impossible to implement The shallow implementation of ForSyDe consists of three main libraries ForSyDe.Shallow.CoreLib contains the basic definitions and functions such as events and signals ForSyDe.Shallow.MoCLib defines the models of computations included in ForSyDe ForSyDe.Shallow.UtilityLib provides several additional modules that are useful and convenient in practice Their status is experimental",
          "hierarchy": "ForSyDe Shallow",
          "module": "ForSyDe.Shallow",
          "name": "Shallow",
          "package": "ForSyDe",
          "partial": "Shallow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the fundamental data structure for deep-embedded \n ForSyDe models: \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Signal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the fundamental data structure for deep-embedded ForSyDe models Signal",
          "hierarchy": "ForSyDe Signal",
          "module": "ForSyDe.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal can be seen as wire which carries values of certain type \n   and which can be connected and processed by the two computational \n   entities of a ForSyDe system: processes and block instances.\n\u003c/p\u003e",
          "module": "ForSyDe.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "source": "src/ForSyDe-Netlist.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal can be seen as wire which carries values of certain type and which can be connected and processed by the two computational entities of ForSyDe system processes and block instances",
          "hierarchy": "ForSyDe Signal",
          "module": "ForSyDe.Signal",
          "name": "Signal",
          "package": "ForSyDe",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Signal.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides publicly usable functions to build a system definition\n and instantiate it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe.System",
          "name": "System",
          "package": "ForSyDe",
          "source": "src/ForSyDe-System.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides publicly usable functions to build system definition and instantiate it",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "System",
          "package": "ForSyDe",
          "partial": "System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe add a phantom parameter to indicate the type of the system \n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "SysDef",
          "package": "ForSyDe",
          "source": "src/ForSyDe-System-SysDef.html#SysDef",
          "type": "data"
        },
        "index": {
          "description": "We add phantom parameter to indicate the type of the system",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "SysDef",
          "package": "ForSyDe",
          "partial": "Sys Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass used to describe a System function. It uses the same trick\n   as \u003ccode\u003eText.Printf\u003c/code\u003e to implement the variable number of arguments.\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "SysFun",
          "package": "ForSyDe",
          "source": "src/ForSyDe-System-SysFun.html#SysFun",
          "type": "class"
        },
        "index": {
          "description": "Class used to describe System function It uses the same trick as Text.Printf to implement the variable number of arguments",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "SysFun",
          "package": "ForSyDe",
          "partial": "Sys Fun",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiparameter class to transform a System Function into an IO \n   Simulation Function, able to externally simulate a System using a \n   list-based representation of its signals.\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "SysFunToIOSimFun",
          "package": "ForSyDe",
          "source": "src/ForSyDe-System-SysFun.html#SysFunToIOSimFun",
          "type": "class"
        },
        "index": {
          "description": "Multiparameter class to transform System Function into an IO Simulation Function able to externally simulate System using list-based representation of its signals",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "SysFunToIOSimFun",
          "package": "ForSyDe",
          "partial": "Sys Fun To IOSim Fun",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFunToIOSimFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiparameter class to transform a System Function into a Simulation \n   Function, able to simulate a System using a list-based representation \n   of its signals.\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "SysFunToSimFun",
          "package": "ForSyDe",
          "source": "src/ForSyDe-System-SysFun.html#SysFunToSimFun",
          "type": "class"
        },
        "index": {
          "description": "Multiparameter class to transform System Function into Simulation Function able to simulate System using list-based representation of its signals",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "SysFunToSimFun",
          "package": "ForSyDe",
          "partial": "Sys Fun To Sim Fun",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFunToSimFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an instance of a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e in the form of  \n   function out of the name of a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e with the same type as its \n   system function. The resulting function can then be used to plug the \n   instance to the rest of the system.\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "instantiate",
          "package": "ForSyDe",
          "signature": "ProcId -\u003e SysDef f -\u003e f",
          "source": "src/ForSyDe-System-Instantiate.html#instantiate",
          "type": "function"
        },
        "index": {
          "description": "Generates an instance of SysDef in the form of function out of the name of SysDef with the same type as its system function The resulting function can then be used to plug the instance to the rest of the system",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "instantiate",
          "normalized": "ProcId-\u003eSysDef a-\u003ea",
          "package": "ForSyDe",
          "signature": "ProcId-\u003eSysDef f-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:instantiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e\u003cp\u003eBuilds a system definition out of a system function describing the system \n   and its port identifers.   \n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "newSysDef",
          "package": "ForSyDe",
          "signature": "f-\u003e SysId-\u003e [PortId]-\u003e [PortId]-\u003e SysDef f",
          "type": "function"
        },
        "index": {
          "description": "SysDef constructor Builds system definition out of system function describing the system and its port identifers",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "newSysDef",
          "normalized": "a-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eSysDef a",
          "package": "ForSyDe",
          "partial": "Sys Def",
          "signature": "f-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eSysDef f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCURRENTLY BROKEN, do not use!\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor, Template Haskell version\n\u003c/p\u003e\u003cp\u003eBuilds a system definition out of a system function, a system identifiers \n   and its port identifers.\n\u003c/p\u003e\u003cp\u003eFor example \u003ccode\u003e$(newSysDefTH mySysFun \"mysys\" [\"in1\"] [\"out1\"])\u003c/code\u003e creates a\n  system definition from system funcion \u003ccode\u003emySysFun\u003c/code\u003e which should have \n  one input and output signals.\n\u003c/p\u003e\u003cp\u003eThe advantage of \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003enewSysDef\u003c/a\u003e\u003c/code\u003e is that it \n  reports errors (e.g duplicated port and process identifiers) earlier, \n  at host-language (Haskell) compile-time. \n\u003c/p\u003e\u003cp\u003eIn addition, due to the use of Template Haskell, \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e is\n  aware of the source location at which it was called, making\n  further error reports friendlier to the user.\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "newSysDefTH",
          "package": "ForSyDe",
          "signature": "f-\u003e SysId-\u003e [PortId]-\u003e [PortId]-\u003e ExpQ",
          "type": "function"
        },
        "index": {
          "description": "CURRENTLY BROKEN do not use SysDef constructor Template Haskell version Builds system definition out of system function system identifiers and its port identifers For example newSysDefTH mySysFun mysys in1 out1 creates system definition from system funcion mySysFun which should have one input and output signals The advantage of newSysDefTH over newSysDef is that it reports errors e.g duplicated port and process identifiers earlier at host-language Haskell compile-time In addition due to the use of Template Haskell newSysDefTH is aware of the source location at which it was called making further error reports friendlier to the user",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "newSysDefTH",
          "normalized": "a-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
          "package": "ForSyDe",
          "partial": "Sys Def TH",
          "signature": "f-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDefTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor, Template Haskell \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e out of the name of a system function\n   and its port identifers.\n\u003c/p\u003e\u003cp\u003eThe system will later be identified by the basename \n   (i.e. unqualified name) of the function.\n\u003c/p\u003e\u003cp\u003eFor example \u003ccode\u003e$(newSysDefTHName 'mySysFun [\"in1\"] [\"out1\"])\u003c/code\u003e creates a\n  system definition from system funcion \u003ccode\u003emySysFun\u003c/code\u003e which has one input and\n  output signals.\n\u003c/p\u003e\u003cp\u003eThe advantage of \u003ccode\u003e\u003ca\u003enewSysDefTHName\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e is that it \n   doesn't suffer from the Template Haskell bug \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/1800\u003c/a\u003e, or in other words, it allows to declare the system \n   defintion and system function in the same module.\n\u003c/p\u003e\u003cp\u003eHowever, since it doesn't have acces to the system function itself,\n   it can only give early error reports related to incorrect port identifiers\n   (process identifier duplicate errors will be reported at runtime).\n\u003c/p\u003e",
          "module": "ForSyDe.System",
          "name": "newSysDefTHName",
          "package": "ForSyDe",
          "signature": "Name-\u003e [PortId]-\u003e [PortId]-\u003e ExpQ",
          "type": "function"
        },
        "index": {
          "description": "SysDef constructor Template Haskell Name version Builds SysDef out of the name of system function and its port identifers The system will later be identified by the basename i.e unqualified name of the function For example newSysDefTHName mySysFun in1 out1 creates system definition from system funcion mySysFun which has one input and output signals The advantage of newSysDefTHName over newSysDefTH is that it doesn suffer from the Template Haskell bug http hackage.haskell.org trac ghc ticket or in other words it allows to declare the system defintion and system function in the same module However since it doesn have acces to the system function itself it can only give early error reports related to incorrect port identifiers process identifier duplicate errors will be reported at runtime",
          "hierarchy": "ForSyDe System",
          "module": "ForSyDe.System",
          "name": "newSysDefTHName",
          "normalized": "Name-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
          "package": "ForSyDe",
          "partial": "Sys Def THName",
          "signature": "Name-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDefTHName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a wrapper for all the publicly usable types and\n functions of ForSyDe's deep-embedded Domain Specific Language\n (DSL). For the shallow-embedded DSL, please see \u003ca\u003eForSyDe.Shallow\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ForSyDe",
          "name": "ForSyDe",
          "package": "ForSyDe",
          "source": "src/ForSyDe.html",
          "type": "module"
        },
        "index": {
          "description": "This module is wrapper for all the publicly usable types and functions of ForSyDe deep-embedded Domain Specific Language DSL For the shallow-embedded DSL please see ForSyDe.Shallow",
          "hierarchy": "ForSyDe",
          "module": "ForSyDe",
          "name": "ForSyDe",
          "package": "ForSyDe",
          "partial": "For Sy De",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically derive Template Haskell's \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e class for datatypes\n using Template Haskell splices.\n\u003c/p\u003e\u003cp\u003eBased on Lynagh's th-lift package: \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/th-lift\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "ForSyDe",
          "source": "src/Language-Haskell-TH-Lift.html",
          "type": "module"
        },
        "index": {
          "description": "Automatically derive Template Haskell Lift class for datatypes using Template Haskell splices Based on Lynagh th-lift package http hackage.haskell.org cgi-bin hackage-scripts package th-lift",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "ForSyDe",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003ederiveLif1\u003c/code\u003e used to automatically generate instances\n   of Lift for multiple data types. For instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell #-}\nmodule Colour where\nimport Language.Haskell.TH.Lift\n\ndata RGB = Red | Green | Blue\n\ndata Num a =\u003e Pixel a = Pixel a a a\n\n-- Generate Lift instances for RGB and Pixel\n$(mapM deriveLift [''RGB, ''Pixel])\n\u003c/pre\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift",
          "package": "ForSyDe",
          "signature": "Name -\u003e Q Dec",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLift",
          "type": "function"
        },
        "index": {
          "description": "Version of deriveLif1 used to automatically generate instances of Lift for multiple data types For instance LANGUAGE TemplateHaskell module Colour where import Language.Haskell.TH.Lift data RGB Red Green Blue data Num Pixel Pixel Generate Lift instances for RGB and Pixel mapM deriveLift RGB Pixel",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift",
          "normalized": "Name-\u003eQ Dec",
          "package": "ForSyDe",
          "partial": "Lift",
          "signature": "Name-\u003eQ Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#v:deriveLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically generate an instance of \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e for one data type. For example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell #-}\nmodule Colour where\nimport Language.Haskell.TH.Lift\n\ndata RGB = Red | Green | Blue\n\n-- Generate the Lift instance of RGB\n$(deriveLift1 ''RGB)\n\u003c/pre\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift1",
          "package": "ForSyDe",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLift1",
          "type": "function"
        },
        "index": {
          "description": "Automatically generate an instance of Lift for one data type For example LANGUAGE TemplateHaskell module Colour where import Language.Haskell.TH.Lift data RGB Red Green Blue Generate the Lift instance of RGB deriveLift1 RGB",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift1",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "ForSyDe",
          "partial": "Lift",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#v:deriveLift1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides  \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instances for all the AST-types defined\n in \u003ca\u003eLanguage.Haskell.Syntax\u003c/a\u003e:\n \u003ccode\u003e\u003ca\u003eGuard\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eStrict\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCallconv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSafety\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunDep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eForeign\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStmt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFurthermore it provides a \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e,  \n (essential for some of the other instantiations) and a function (metaLift)\n which lifts an expression twice, obtaing its meta AST (the AST of the AST)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.LiftInstances",
          "name": "LiftInstances",
          "package": "ForSyDe",
          "source": "src/Language-Haskell-TH-LiftInstances.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Lift instances for all the AST-types defined in Language.Haskell.Syntax Guard Strict Callconv Safety Body Con FunDep Foreign Lit Pat Match Stmt Range Clause Type Dec Exp Furthermore it provides Lift instance of Ratio Int8 Int16 Int32 essential for some of the other instantiations and function metaLift which lifts an expression twice obtaing its meta AST the AST of the AST",
          "hierarchy": "Language Haskell TH LiftInstances",
          "module": "Language.Haskell.TH.LiftInstances",
          "name": "LiftInstances",
          "package": "ForSyDe",
          "partial": "Lift Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-LiftInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift twice, getting the meta AST (the AST of the AST)\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.LiftInstances",
          "name": "metaLift",
          "package": "ForSyDe",
          "signature": "a -\u003e Q Exp",
          "source": "src/Language-Haskell-TH-LiftInstances.html#metaLift",
          "type": "function"
        },
        "index": {
          "description": "lift twice getting the meta AST the AST of the AST",
          "hierarchy": "Language Haskell TH LiftInstances",
          "module": "Language.Haskell.TH.LiftInstances",
          "name": "metaLift",
          "normalized": "a-\u003eQ Exp",
          "package": "ForSyDe",
          "partial": "Lift",
          "signature": "a-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-LiftInstances.html#v:metaLift"
      }
    }
  ]
]