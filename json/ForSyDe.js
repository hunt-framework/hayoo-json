[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e is used to extend existing data types with the value\n  'absent', which models the absence of a value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-AbsentExt.html",
        "fct-type": "module",
        "title": "AbsentExt"
      },
      "index": {
        "description": "The AbstExt is used to extend existing data types with the value absent which models the absence of value",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "AbsentExt",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Absent Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#t:AbstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e has two constructors. The constructor \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e is used to model the absence of a value, while the constructor \u003ccode\u003e\u003ca\u003ePrst\u003c/a\u003e\u003c/code\u003e is used to model present values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-AbsentExt.html#AbstExt",
        "fct-type": "data",
        "title": "AbstExt"
      },
      "index": {
        "description": "The data type AbstExt has two constructors The constructor Abst is used to model the absence of value while the constructor Prst is used to model present values",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "AbstExt",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Abst Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:Abst",
      "description": {
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "Abst",
        "fct-source": "src/ForSyDe-AbsentExt.html#AbstExt",
        "fct-type": "function",
        "title": "Abst"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "Abst",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Abst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:Prst",
      "description": {
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "Prst a",
        "fct-source": "src/ForSyDe-AbsentExt.html#AbstExt",
        "fct-type": "function",
        "title": "Prst"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "Prst",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Prst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:abstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExt\u003c/a\u003e\u003c/code\u003e converts a usual value to a present value. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e AbstExt a",
        "fct-source": "src/ForSyDe-AbsentExt.html#abstExt",
        "fct-type": "function",
        "title": "abstExt"
      },
      "index": {
        "description": "The function abstExt converts usual value to present value",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "abstExt",
        "normalized": "a-\u003eAbstExt a",
        "package": "ForSyDe",
        "partial": "Ext",
        "signature": "a-\u003eAbstExt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:abstExtFunc",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e extends a function in order to process absent extended values. If the input is (\"bottom\"), the output will also be  (\"bottom\").\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
        "fct-source": "src/ForSyDe-AbsentExt.html#abstExtFunc",
        "fct-type": "function",
        "title": "abstExtFunc"
      },
      "index": {
        "description": "The function abstExtFunc extends function in order to process absent extended values If the input is bottom the output will also be bottom",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "abstExtFunc",
        "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
        "package": "ForSyDe",
        "partial": "Ext Func",
        "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:fromAbstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e extracts the inner value contained in \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e AbstExt a-\u003e a",
        "fct-type": "function",
        "title": "fromAbstExt"
      },
      "index": {
        "description": "The function fromAbstExt extracts the inner value contained in AbstExt",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "fromAbstExt",
        "normalized": "a-\u003eAbstExt a-\u003ea",
        "package": "ForSyDe",
        "partial": "Abst Ext",
        "signature": "a-\u003eAbstExt a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:isAbsent",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisAbsent\u003c/a\u003e\u003c/code\u003e checks for the absence of a value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "AbstExt a -\u003e Bool",
        "fct-source": "src/ForSyDe-AbsentExt.html#isAbsent",
        "fct-type": "function",
        "title": "isAbsent"
      },
      "index": {
        "description": "The functions isAbsent checks for the absence of value",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "isAbsent",
        "normalized": "AbstExt a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Absent",
        "signature": "AbstExt a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:isPresent",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisPresent\u003c/a\u003e\u003c/code\u003e checks for the presence of a value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "AbstExt a -\u003e Bool",
        "fct-source": "src/ForSyDe-AbsentExt.html#isPresent",
        "fct-type": "function",
        "title": "isPresent"
      },
      "index": {
        "description": "The functions isPresent checks for the presence of value",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "isPresent",
        "normalized": "AbstExt a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Present",
        "signature": "AbstExt a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:psi",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epsi\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e and should be used in future.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
        "fct-source": "src/ForSyDe-AbsentExt.html#psi",
        "fct-type": "function",
        "title": "psi"
      },
      "index": {
        "description": "The function psi is identical to abstExtFunc and should be used in future",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "psi",
        "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-AbsentExt.html#v:unsafeFromAbstExt",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e, but without default value\n\u003c/p\u003e",
        "fct-module": "ForSyDe.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "AbstExt a -\u003e a",
        "fct-source": "src/ForSyDe-AbsentExt.html#unsafeFromAbstExt",
        "fct-type": "function",
        "title": "unsafeFromAbstExt"
      },
      "index": {
        "description": "Similar to fromAbstExt but without default value",
        "hierarchy": "ForSyDe AbsentExt",
        "module": "ForSyDe.AbsentExt",
        "name": "unsafeFromAbstExt",
        "normalized": "AbstExt a-\u003ea",
        "package": "ForSyDe",
        "partial": "From Abst Ext",
        "signature": "AbstExt a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the GraphML backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Backend-GraphML.html",
        "fct-type": "module",
        "title": "GraphML"
      },
      "index": {
        "description": "This module provides the GraphML backend of ForSyDe embedded compiler",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphML",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph ML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLDebugLevel",
      "description": {
        "fct-descr": "\u003cp\u003eDebug level\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
        "fct-type": "data",
        "title": "GraphMLDebugLevel"
      },
      "index": {
        "description": "Debug level",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLDebugLevel",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLDebug Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLOps",
      "description": {
        "fct-descr": "\u003cp\u003eGraphML Compilation options\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
        "fct-type": "data",
        "title": "GraphMLOps"
      },
      "index": {
        "description": "GraphML Compilation options",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#t:GraphMLRecursivity",
      "description": {
        "fct-descr": "\u003cp\u003eRecursivity, should the parent systems of system instances be compiled as \n   well?\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
        "fct-type": "data",
        "title": "GraphMLRecursivity"
      },
      "index": {
        "description": "Recursivity should the parent systems of system instances be compiled as well",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLRecursivity",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLRecursivity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLNonRecursive",
      "description": {
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLNonRecursive",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
        "fct-type": "function",
        "title": "GraphMLNonRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLNonRecursive",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLNon Recursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLNormal",
      "description": {
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLNormal",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
        "fct-type": "function",
        "title": "GraphMLNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLNormal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLNormal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLOps",
      "description": {
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLOps",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
        "fct-type": "function",
        "title": "GraphMLOps"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLRecursive",
      "description": {
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLRecursive",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLRecursivity",
        "fct-type": "function",
        "title": "GraphMLRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLRecursive",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLRecursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:GraphMLVerbose",
      "description": {
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLVerbose",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLDebugLevel",
        "fct-type": "function",
        "title": "GraphMLVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "GraphMLVerbose",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLVerbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:debugGraphML",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLDebugLevel",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
        "fct-type": "function",
        "title": "debugGraphML"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "debugGraphML",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph ML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:defaultGraphMLOps",
      "description": {
        "fct-descr": "\u003cp\u003eDefault traversing options\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLOps",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#defaultGraphMLOps",
        "fct-type": "function",
        "title": "defaultGraphMLOps"
      },
      "index": {
        "description": "Default traversing options",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "defaultGraphMLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph MLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:recursivityGraphML",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLRecursivity",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
        "fct-type": "function",
        "title": "recursivityGraphML"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "recursivityGraphML",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Graph ML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:writeGraphML",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a System Definition whose name is A generate \u003ccode\u003eA.graphml\u003c/code\u003e in current \n   working directory using the default compilation options.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "SysDef a -\u003e IO ()",
        "fct-source": "src/ForSyDe-Backend-GraphML.html#writeGraphML",
        "fct-type": "function",
        "title": "writeGraphML"
      },
      "index": {
        "description": "Given System Definition whose name is generate A.graphml in current working directory using the default compilation options",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "writeGraphML",
        "normalized": "SysDef a-\u003eIO()",
        "package": "ForSyDe",
        "partial": "Graph ML",
        "signature": "SysDef a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:writeGraphMLOps",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteGraphML\u003c/a\u003e\u003c/code\u003e-alternative which allows setting GraphML compilation \n   options.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "GraphMLOps -\u003e SysDef a -\u003e IO ()",
        "fct-source": "src/ForSyDe-Backend-GraphML.html#writeGraphMLOps",
        "fct-type": "function",
        "title": "writeGraphMLOps"
      },
      "index": {
        "description": "writeGraphML alternative which allows setting GraphML compilation options",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "writeGraphMLOps",
        "normalized": "GraphMLOps-\u003eSysDef a-\u003eIO()",
        "package": "ForSyDe",
        "partial": "Graph MLOps",
        "signature": "GraphMLOps-\u003eSysDef a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-GraphML.html#v:yFilesMarkup",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate yFiles markup? \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.GraphML",
        "fct-package": "ForSyDe",
        "fct-signature": "Bool",
        "fct-source": "src/ForSyDe-Backend-GraphML-Traverse-GraphMLM.html#GraphMLOps",
        "fct-type": "function",
        "title": "yFilesMarkup"
      },
      "index": {
        "description": "Generate yFiles markup",
        "hierarchy": "ForSyDe Backend GraphML",
        "module": "ForSyDe.Backend.GraphML",
        "name": "yFilesMarkup",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Files Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-Simulate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the simulation backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module is based on Lava2000\u003c/em\u003e: \u003ca\u003ehttp://www.cs.chalmers.se/~koen/Lava/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Backend.Simulate",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Backend-Simulate.html",
        "fct-type": "module",
        "title": "Simulate"
      },
      "index": {
        "description": "This module provides the simulation backend of ForSyDe embedded compiler This module is based on Lava2000 http www.cs.chalmers.se koen Lava",
        "hierarchy": "ForSyDe Backend Simulate",
        "module": "ForSyDe.Backend.Simulate",
        "name": "Simulate",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Simulate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-Simulate.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e takes a system definition and generates a function \n   able simulate a System using a list-based representation \n   of its signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.Simulate",
        "fct-package": "ForSyDe",
        "fct-signature": "SysDef sysFun -\u003e simFun",
        "fct-source": "src/ForSyDe-Backend-Simulate.html#simulate",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "simulate takes system definition and generates function able simulate System using list-based representation of its signals",
        "hierarchy": "ForSyDe Backend Simulate",
        "module": "ForSyDe.Backend.Simulate",
        "name": "simulate",
        "normalized": "SysDef a-\u003eb",
        "package": "ForSyDe",
        "partial": "",
        "signature": "SysDef sysFun-\u003esimFun"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the VHDL backend of ForSyDe's embedded compiler\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Backend-VHDL.html",
        "fct-type": "module",
        "title": "VHDL"
      },
      "index": {
        "description": "This module provides the VHDL backend of ForSyDe embedded compiler",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDL",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:QuartusAction",
      "description": {
        "fct-descr": "\u003cp\u003eAction to perform by Quartus\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
        "fct-type": "data",
        "title": "QuartusAction"
      },
      "index": {
        "description": "Action to perform by Quartus",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "QuartusAction",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Quartus Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:QuartusOps",
      "description": {
        "fct-descr": "\u003cp\u003eOptions passed to Quartus II by the VHDL Backend. Most of them are optional\n   and Quartus will use a default value.\n\u003c/p\u003e\u003cp\u003eIt contains:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e What action to perform\n\u003c/li\u003e\u003cli\u003e Optinally, the minimum acceptable clock frequency (fMax) expressed in MHz\n\u003c/li\u003e\u003cli\u003e FPGA family and specific device model (both are independently optional).\n\u003c/li\u003e\u003cli\u003e Pin assignments, in the form (VHDL Pin, FPGA Pin). Note\n       that Quartus will automatically split composite VHDL ports \n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "data",
        "title": "QuartusOps"
      },
      "index": {
        "description": "Options passed to Quartus II by the VHDL Backend Most of them are optional and Quartus will use default value It contains What action to perform Optinally the minimum acceptable clock frequency fMax expressed in MHz FPGA family and specific device model both are independently optional Pin assignments in the form VHDL Pin FPGA Pin Note that Quartus will automatically split composite VHDL ports",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "QuartusOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Quartus Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLDebugLevel",
      "description": {
        "fct-descr": "\u003cp\u003eDebug level\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
        "fct-type": "data",
        "title": "VHDLDebugLevel"
      },
      "index": {
        "description": "Debug level",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLDebugLevel",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLDebug Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLOps",
      "description": {
        "fct-descr": "\u003cp\u003eVHDL Compilation options\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "data",
        "title": "VHDLOps"
      },
      "index": {
        "description": "VHDL Compilation options",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#t:VHDLRecursivity",
      "description": {
        "fct-descr": "\u003cp\u003eRecursivity, should the parent systems of system instances be compiled as \n   well?\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
        "fct-type": "data",
        "title": "VHDLRecursivity"
      },
      "index": {
        "description": "Recursivity should the parent systems of system instances be compiled as well",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLRecursivity",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLRecursivity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:AnalysisAndElaboration",
      "description": {
        "fct-descr": "\u003cp\u003eAnalysis and eleboration flow\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "AnalysisAndElaboration",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
        "fct-type": "function",
        "title": "AnalysisAndElaboration"
      },
      "index": {
        "description": "Analysis and eleboration flow",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "AnalysisAndElaboration",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Analysis And Elaboration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:AnalysisAndSynthesis",
      "description": {
        "fct-descr": "\u003cp\u003eCall map executable \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "AnalysisAndSynthesis",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
        "fct-type": "function",
        "title": "AnalysisAndSynthesis"
      },
      "index": {
        "description": "Call map executable",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "AnalysisAndSynthesis",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Analysis And Synthesis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:FullCompilation",
      "description": {
        "fct-descr": "\u003cp\u003eCompile flow\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "FullCompilation",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusAction",
        "fct-type": "function",
        "title": "FullCompilation"
      },
      "index": {
        "description": "Compile flow",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "FullCompilation",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Full Compilation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:QuartusOps",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "QuartusOps",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "function",
        "title": "QuartusOps"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "QuartusOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Quartus Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLNonRecursive",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLNonRecursive",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
        "fct-type": "function",
        "title": "VHDLNonRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLNonRecursive",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLNon Recursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLNormal",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLNormal",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
        "fct-type": "function",
        "title": "VHDLNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLNormal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLNormal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLOps",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLOps",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "function",
        "title": "VHDLOps"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLRecursive",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLRecursive",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLRecursivity",
        "fct-type": "function",
        "title": "VHDLRecursive"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLRecursive",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLRecursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:VHDLVerbose",
      "description": {
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLVerbose",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLDebugLevel",
        "fct-type": "function",
        "title": "VHDLVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "VHDLVerbose",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLVerbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:action",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "QuartusAction",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "action",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:checkSynthesisQuartus",
      "description": {
        "fct-descr": "\u003cp\u003eOptions to check if the model is synthesizable, all options except\n   the action to take are set to default. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "QuartusOps",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#checkSynthesisQuartus",
        "fct-type": "function",
        "title": "checkSynthesisQuartus"
      },
      "index": {
        "description": "Options to check if the model is synthesizable all options except the action to take are set to default",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "checkSynthesisQuartus",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Synthesis Quartus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:compileModelsim",
      "description": {
        "fct-descr": "\u003cp\u003eCompile the generated code with Modelsim\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "Bool",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "function",
        "title": "compileModelsim"
      },
      "index": {
        "description": "Compile the generated code with Modelsim",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "compileModelsim",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Modelsim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:debugVHDL",
      "description": {
        "fct-descr": "\u003cp\u003eDebug mode\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLDebugLevel",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "function",
        "title": "debugVHDL"
      },
      "index": {
        "description": "Debug mode",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "debugVHDL",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:defaultVHDLOps",
      "description": {
        "fct-descr": "\u003cp\u003eDefault traversing options\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLOps",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#defaultVHDLOps",
        "fct-type": "function",
        "title": "defaultVHDLOps"
      },
      "index": {
        "description": "Default traversing options",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "defaultVHDLOps",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDLOps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:execQuartus",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyze the generated code with Quartus\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "Maybe QuartusOps",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "function",
        "title": "execQuartus"
      },
      "index": {
        "description": "Analyze the generated code with Quartus",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "execQuartus",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Quartus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:fMax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "Maybe Int",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "function",
        "title": "fMax"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "fMax",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:fpgaFamiliyDevice",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "Maybe (String, Maybe String)",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "function",
        "title": "fpgaFamiliyDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "fpgaFamiliyDevice",
        "normalized": "Maybe(String,Maybe String)",
        "package": "ForSyDe",
        "partial": "Familiy Device",
        "signature": "Maybe(String,Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:pinAssigs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#QuartusOps",
        "fct-type": "function",
        "title": "pinAssigs"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "pinAssigs",
        "normalized": "[(String,String)]",
        "package": "ForSyDe",
        "partial": "Assigs",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:recursivityVHDL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLRecursivity",
        "fct-source": "src/ForSyDe-Backend-VHDL-Traverse-VHDLM.html#VHDLOps",
        "fct-type": "function",
        "title": "recursivityVHDL"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "recursivityVHDL",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "VHDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeAndModelsimVHDL",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a function which, given a system definition and some simulation\n   stimuli:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Writes a VHDL model of the system \n\u003c/li\u003e\u003cli\u003e Simulates the VHDL model with Modelsim getting the results back to Haskell\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "Maybe Int-\u003e SysDef sysF-\u003e simF",
        "fct-type": "function",
        "title": "writeAndModelsimVHDL"
      },
      "index": {
        "description": "Generate function which given system definition and some simulation stimuli Writes VHDL model of the system Simulates the VHDL model with Modelsim getting the results back to Haskell",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "writeAndModelsimVHDL",
        "normalized": "Maybe Int-\u003eSysDef a-\u003eb",
        "package": "ForSyDe",
        "partial": "And Modelsim VHDL",
        "signature": "Maybe Int-\u003eSysDef sysF-\u003esimF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeAndModelsimVHDLOps",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVHDLOps\u003c/a\u003e\u003c/code\u003e-alternative of \u003ccode\u003e\u003ca\u003ewriteAndModelsimVHDL\u003c/a\u003e\u003c/code\u003e, note that\n   compileModelSim will implicitly be set to True\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLOps -\u003e Maybe Int -\u003e SysDef sysF -\u003e simF",
        "fct-source": "src/ForSyDe-Backend-VHDL.html#writeAndModelsimVHDLOps",
        "fct-type": "function",
        "title": "writeAndModelsimVHDLOps"
      },
      "index": {
        "description": "VHDLOps alternative of writeAndModelsimVHDL note that compileModelSim will implicitly be set to True",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "writeAndModelsimVHDLOps",
        "normalized": "VHDLOps-\u003eMaybe Int-\u003eSysDef a-\u003eb",
        "package": "ForSyDe",
        "partial": "And Modelsim VHDLOps",
        "signature": "VHDLOps-\u003eMaybe Int-\u003eSysDef sysF-\u003esimF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeVHDL",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a System Definition whose name is a valid VHDL _basic_ identifier \n   (call it \"A\") generate \u003ccode\u003eA.vhd\u003c/code\u003e in current working directory using \n   default compilation options.\n   Imp: the input and output signal names of A must be valid VHDL identifiers\n        (basic or extended) and different to \u003ccode\u003eclk\u003c/code\u003e and \u003ccode\u003ereset\u003c/code\u003e\n        which are reserved for the main clock and reset signals\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "SysDef a -\u003e IO ()",
        "fct-source": "src/ForSyDe-Backend-VHDL.html#writeVHDL",
        "fct-type": "function",
        "title": "writeVHDL"
      },
      "index": {
        "description": "Given System Definition whose name is valid VHDL basic identifier call it generate A.vhd in current working directory using default compilation options Imp the input and output signal names of must be valid VHDL identifiers basic or extended and different to clk and reset which are reserved for the main clock and reset signals",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "writeVHDL",
        "normalized": "SysDef a-\u003eIO()",
        "package": "ForSyDe",
        "partial": "VHDL",
        "signature": "SysDef a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend-VHDL.html#v:writeVHDLOps",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewriteVHDL\u003c/a\u003e\u003c/code\u003e-alternative which allows setting VHDL compilation options.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Backend.VHDL",
        "fct-package": "ForSyDe",
        "fct-signature": "VHDLOps -\u003e SysDef a -\u003e IO ()",
        "fct-source": "src/ForSyDe-Backend-VHDL.html#writeVHDLOps",
        "fct-type": "function",
        "title": "writeVHDLOps"
      },
      "index": {
        "description": "writeVHDL alternative which allows setting VHDL compilation options",
        "hierarchy": "ForSyDe Backend VHDL",
        "module": "ForSyDe.Backend.VHDL",
        "name": "writeVHDLOps",
        "normalized": "VHDLOps-\u003eSysDef a-\u003eIO()",
        "package": "ForSyDe",
        "partial": "VHDLOps",
        "signature": "VHDLOps-\u003eSysDef a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Backend.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapper module exporting all the backends\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Backend",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Backend.html",
        "fct-type": "module",
        "title": "Backend"
      },
      "index": {
        "description": "Wrapper module exporting all the backends",
        "hierarchy": "ForSyDe Backend",
        "module": "ForSyDe.Backend",
        "name": "Backend",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBit\u003c/a\u003e\u003c/code\u003e Datatype. Note that the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance is phony and shouldn't be used\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Bit.html",
        "fct-type": "module",
        "title": "Bit"
      },
      "index": {
        "description": "Bit Datatype Note that the Num instance is phony and shouldn be used",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "Bit",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#t:Bit",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Bit.html#Bit",
        "fct-type": "data",
        "title": "Bit"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "Bit",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:H",
      "description": {
        "fct-descr": "\u003cp\u003eHigh value \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "H",
        "fct-source": "src/ForSyDe-Bit.html#Bit",
        "fct-type": "function",
        "title": "H"
      },
      "index": {
        "description": "High value",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "H",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:L",
      "description": {
        "fct-descr": "\u003cp\u003eLow value\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "L",
        "fct-source": "src/ForSyDe-Bit.html#Bit",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "Low value",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "L",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:bitToBool",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a bit to a boolean\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Bit -\u003e Bool",
        "fct-source": "src/ForSyDe-Bit.html#bitToBool",
        "fct-type": "function",
        "title": "bitToBool"
      },
      "index": {
        "description": "Convert bit to boolean",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "bitToBool",
        "normalized": "Bit-\u003eBool",
        "package": "ForSyDe",
        "partial": "To Bool",
        "signature": "Bit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:boolToBit",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a boolean to a bit\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Bool -\u003e Bit",
        "fct-source": "src/ForSyDe-Bit.html#boolToBit",
        "fct-type": "function",
        "title": "boolToBit"
      },
      "index": {
        "description": "Convert boolean to bit",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "boolToBit",
        "normalized": "Bool-\u003eBit",
        "package": "ForSyDe",
        "partial": "To Bit",
        "signature": "Bool-\u003eBit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector16",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec D16 Bit -\u003e Int16",
        "fct-source": "src/ForSyDe-Bit.html#fromBitVector16",
        "fct-type": "function",
        "title": "fromBitVector16"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "fromBitVector16",
        "normalized": "FSVec D Bit-\u003eInt",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "FSVec D Bit-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector32",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec D32 Bit -\u003e Int32",
        "fct-source": "src/ForSyDe-Bit.html#fromBitVector32",
        "fct-type": "function",
        "title": "fromBitVector32"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "fromBitVector32",
        "normalized": "FSVec D Bit-\u003eInt",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "FSVec D Bit-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector64",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec D64 Bit -\u003e Int64",
        "fct-source": "src/ForSyDe-Bit.html#fromBitVector64",
        "fct-type": "function",
        "title": "fromBitVector64"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "fromBitVector64",
        "normalized": "FSVec D Bit-\u003eInt",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "FSVec D Bit-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:fromBitVector8",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec D8 Bit -\u003e Int8",
        "fct-source": "src/ForSyDe-Bit.html#fromBitVector8",
        "fct-type": "function",
        "title": "fromBitVector8"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "fromBitVector8",
        "normalized": "FSVec D Bit-\u003eInt",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "FSVec D Bit-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eNot operation over bits\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Bit -\u003e Bit",
        "fct-source": "src/ForSyDe-Bit.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Not operation over bits",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "not",
        "normalized": "Bit-\u003eBit",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Bit-\u003eBit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector16",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Int16 -\u003e FSVec D16 Bit",
        "fct-source": "src/ForSyDe-Bit.html#toBitVector16",
        "fct-type": "function",
        "title": "toBitVector16"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "toBitVector16",
        "normalized": "Int-\u003eFSVec D Bit",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "Int-\u003eFSVec D Bit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector32",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Int32 -\u003e FSVec D32 Bit",
        "fct-source": "src/ForSyDe-Bit.html#toBitVector32",
        "fct-type": "function",
        "title": "toBitVector32"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "toBitVector32",
        "normalized": "Int-\u003eFSVec D Bit",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "Int-\u003eFSVec D Bit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector64",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Int64 -\u003e FSVec D64 Bit",
        "fct-source": "src/ForSyDe-Bit.html#toBitVector64",
        "fct-type": "function",
        "title": "toBitVector64"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "toBitVector64",
        "normalized": "Int-\u003eFSVec D Bit",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "Int-\u003eFSVec D Bit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Bit.html#v:toBitVector8",
      "description": {
        "fct-module": "ForSyDe.Bit",
        "fct-package": "ForSyDe",
        "fct-signature": "Int8 -\u003e FSVec D8 Bit",
        "fct-source": "src/ForSyDe-Bit.html#toBitVector8",
        "fct-type": "function",
        "title": "toBitVector8"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Bit",
        "module": "ForSyDe.Bit",
        "name": "toBitVector8",
        "normalized": "Int-\u003eFSVec D Bit",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "Int-\u003eFSVec D Bit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes the standard Discrete Fourier Transform (DFT)\n function, and a fast Fourier transform (FFT) algorithm, for\n computing the DFT, when the input vectors' length is a power of 2.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-DFT.html",
        "fct-type": "module",
        "title": "DFT"
      },
      "index": {
        "description": "This module includes the standard Discrete Fourier Transform DFT function and fast Fourier transform FFT algorithm for computing the DFT when the input vectors length is power of",
        "hierarchy": "ForSyDe DFT",
        "module": "ForSyDe.DFT",
        "name": "DFT",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "DFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e performs a standard Discrete Fourier Transformation\n\u003c/p\u003e",
        "fct-module": "ForSyDe.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec s (Complex Double) -\u003e FSVec s (Complex Double)",
        "fct-source": "src/ForSyDe-DFT.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "The function dft performs standard Discrete Fourier Transformation",
        "hierarchy": "ForSyDe DFT",
        "module": "ForSyDe.DFT",
        "name": "dft",
        "normalized": "FSVec a(Complex Double)-\u003eFSVec a(Complex Double)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "FSVec s(Complex Double)-\u003eFSVec s(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-DFT.html#v:fft",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e implements a fast Fourier transform (FFT) algorithm, \n   for computing the DFT, when the size N is a power of 2.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "FSVec s (Complex Double) -\u003e FSVec s (Complex Double)",
        "fct-source": "src/ForSyDe-DFT.html#fft",
        "fct-type": "function",
        "title": "fft"
      },
      "index": {
        "description": "The function fft implements fast Fourier transform FFT algorithm for computing the DFT when the size is power of",
        "hierarchy": "ForSyDe DFT",
        "module": "ForSyDe.DFT",
        "name": "fft",
        "normalized": "FSVec a(Complex Double)-\u003eFSVec a(Complex Double)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "FSVec s(Complex Double)-\u003eFSVec s(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-FIR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements FIR filters for the synchronous computational model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.FIR",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-FIR.html",
        "fct-type": "module",
        "title": "FIR"
      },
      "index": {
        "description": "This module implements FIR filters for the synchronous computational model",
        "hierarchy": "ForSyDe FIR",
        "module": "ForSyDe.FIR",
        "name": "FIR",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "FIR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-FIR.html#v:fir",
      "description": {
        "fct-descr": "\u003cp\u003eAll kinds of FIR-filters can now be modeled by means of \u003ccode\u003e\u003ca\u003efir\u003c/a\u003e\u003c/code\u003e. The\n only argument needed is the list of coefficients, which is given as\n a vector of any size. To illustrate this, an 8-th order band pass\n filter is modeled as follows.\n\u003c/p\u003e\u003cpre\u003e bp = fir \"fir Id\" $(vectorTH [0.06318761339784, 0.08131651217682, 0.09562326700432, \n                               0.10478344432968, 0.10793629404886, 0.10478344432968, \n                               0.09562326700432, 0.08131651217682, 0.06318761339784 ])\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.FIR",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e FSVec s b -\u003e Signal b -\u003e Signal b",
        "fct-source": "src/ForSyDe-FIR.html#fir",
        "fct-type": "function",
        "title": "fir"
      },
      "index": {
        "description": "All kinds of FIR-filters can now be modeled by means of fir The only argument needed is the list of coefficients which is given as vector of any size To illustrate this an th order band pass filter is modeled as follows bp fir fir Id vectorTH",
        "hierarchy": "ForSyDe FIR",
        "module": "ForSyDe.FIR",
        "name": "fir",
        "normalized": "ProcId-\u003eFSVec a b-\u003eSignal b-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "ProcId-\u003eFSVec s b-\u003eSignal b-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForSyDe  identifier types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Ids",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Ids.html",
        "fct-type": "module",
        "title": "Ids"
      },
      "index": {
        "description": "ForSyDe identifier types",
        "hierarchy": "ForSyDe Ids",
        "module": "ForSyDe.Ids",
        "name": "Ids",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Ids",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:PortId",
      "description": {
        "fct-descr": "\u003cp\u003eA Port identifier\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Ids",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Ids.html#PortId",
        "fct-type": "type",
        "title": "PortId"
      },
      "index": {
        "description": "Port identifier",
        "hierarchy": "ForSyDe Ids",
        "module": "ForSyDe.Ids",
        "name": "PortId",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:ProcId",
      "description": {
        "fct-descr": "\u003cp\u003eA process identifier\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Ids",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Ids.html#ProcId",
        "fct-type": "type",
        "title": "ProcId"
      },
      "index": {
        "description": "process identifier",
        "hierarchy": "ForSyDe Ids",
        "module": "ForSyDe.Ids",
        "name": "ProcId",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Proc Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Ids.html#t:SysId",
      "description": {
        "fct-descr": "\u003cp\u003eA System identifier\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Ids",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Ids.html#SysId",
        "fct-type": "type",
        "title": "SysId"
      },
      "index": {
        "description": "System identifier",
        "hierarchy": "ForSyDe Ids",
        "module": "ForSyDe.Ids",
        "name": "SysId",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Sys Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the synchronous process constructors of\n ForSyDe and some useful synchronous processes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Process-SynchProc.html",
        "fct-type": "module",
        "title": "SynchProc"
      },
      "index": {
        "description": "This module provides the synchronous process constructors of ForSyDe and some useful synchronous processes",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "SynchProc",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Synch Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:constSY",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a constant process. A process which outputs the \n   same signal value in every clock cycle.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e a-\u003e Signal a",
        "fct-type": "function",
        "title": "constSY"
      },
      "index": {
        "description": "Creates constant process process which outputs the same signal value in every clock cycle",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "constSY",
        "normalized": "ProcId-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:delaySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e delays the signal one event cycle      \n   by introducing an initial value at the beginning of the output signal.   \n   Note, that this implies that there is one event (the first) at the       \n   output signal that has no corresponding event at the input signal.       \n   One could argue that input and output signals are not fully synchronized,\n   even though all input events are synchronous with a corresponding output \n   event. However, this is necessary to initialize feed-back loops.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e a-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "delaySY"
      },
      "index": {
        "description": "The process constructor delaySY delays the signal one event cycle by introducing an initial value at the beginning of the output signal Note that this implies that there is one event the first at the output signal that has no corresponding event at the input signal One could argue that input and output signals are not fully synchronized even though all input events are synchronous with corresponding output event However this is necessary to initialize feed-back loops",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "delaySY",
        "normalized": "ProcId-\u003ea-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ea-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:delaynSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaynSY\u003c/a\u003e\u003c/code\u003e delays the signal n events by \n   introducing n identical default values. It creates a chain of \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e\n   processes.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e a-\u003e Int-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "delaynSY"
      },
      "index": {
        "description": "The process constructor delaynSY delays the signal events by introducing identical default values It creates chain of delaySY processes",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "delaynSY",
        "normalized": "ProcId-\u003ea-\u003eInt-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ea-\u003eInt-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:fillSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efillSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal \n   with present values by replacing absent values with a given value. The \n   output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.        \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e a-\u003e Signal (AbstExt a)-\u003e Signal a",
        "fct-type": "function",
        "title": "fillSY"
      },
      "index": {
        "description": "The process constructor fillSY creates process that fills signal with present values by replacing absent values with given value The output signal is not any more of the type AbstExt",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "fillSY",
        "normalized": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:filterSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efilterSY\u003c/a\u003e\u003c/code\u003e discards the values who do not fulfill a predicate given by a predicate function and replaces them with absent events.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e Bool)-\u003e Signal a-\u003e Signal (AbstExt a)",
        "fct-type": "function",
        "title": "filterSY"
      },
      "index": {
        "description": "The process constructor filterSY discards the values who do not fulfill predicate given by predicate function and replaces them with absent events",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "filterSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:fstSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efstSY\u003c/a\u003e\u003c/code\u003e selects always the first value from a signal of pairs\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b) -\u003e Signal a",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#fstSY",
        "fct-type": "function",
        "title": "fstSY"
      },
      "index": {
        "description": "The process fstSY selects always the first value from signal of pairs",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "fstSY",
        "normalized": "ProcId-\u003eSignal(a,b)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:groupSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupSY\u003c/a\u003e\u003c/code\u003e groups values into a vector of size n, which takes \n   n cycles. While the grouping takes place the output from this process \n   consists of absent values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e k -\u003e Signal a -\u003e Signal (AbstExt (FSVec k a))",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#groupSY",
        "fct-type": "function",
        "title": "groupSY"
      },
      "index": {
        "description": "The function groupSY groups values into vector of size which takes cycles While the grouping takes place the output from this process consists of absent values",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "groupSY",
        "normalized": "ProcId-\u003ea-\u003eSignal b-\u003eSignal(AbstExt(FSVec a b))",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ek-\u003eSignal a-\u003eSignal(AbstExt(FSVec k a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:holdSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003eholdSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal \n   with values by replacing absent values by the preceding present value. \n   Only in cases, where no preceding value exists, the absent value is \n   replaced by a default value. The output signal is not any more of the \n   type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e a-\u003e Signal (AbstExt a)-\u003e Signal a",
        "fct-type": "function",
        "title": "holdSY"
      },
      "index": {
        "description": "The process constructor holdSY creates process that fills signal with values by replacing absent values by the preceding present value Only in cases where no preceding value exists the absent value is replaced by default value The output signal is not any more of the type AbstExt",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "holdSY",
        "normalized": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003ea-\u003eSignal(AbstExt a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mapSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with one \n   input signal and one output signal.         \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b)-\u003e Signal a-\u003e Signal b",
        "fct-type": "function",
        "title": "mapSY"
      },
      "index": {
        "description": "The process constructor mapSY takes an identifier and combinational function as arguments and returns process with one input signal and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mapSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mapxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapxSY\u003c/a\u003e\u003c/code\u003e creates a process network that maps a \n function onto all signals in a vector of signals. The identifier is used \n as the identifier prefix of the processes created (a number starting with 1\n will be appended to each identifier)\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e ProcFun (a -\u003e b) -\u003e FSVec s (Signal a) -\u003e FSVec s (Signal b)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#mapxSY",
        "fct-type": "function",
        "title": "mapxSY"
      },
      "index": {
        "description": "The process constructor mapxSY creates process network that maps function onto all signals in vector of signals The identifier is used as the identifier prefix of the processes created number starting with will be appended to each identifier",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mapxSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb)-\u003eFSVec c(Signal a)-\u003eFSVec c(Signal b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb)-\u003eFSVec s(Signal a)-\u003eFSVec s(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealy2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
        "fct-type": "function",
        "title": "mealy2SY"
      },
      "index": {
        "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mealy2SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealy3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
        "fct-type": "function",
        "title": "mealy3SY"
      },
      "index": {
        "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mealy3SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mealySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003emelaySY\u003c/code\u003e is used to model state machines of\n \"Mealy\" type, where the output only depends on the current state and\n the input values. The process constructor is based on the process\n constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in\n hardware, that the output operates on the current state and not on the\n next state. The process constructors takes a function to calculate the\n next state, another function to calculate the output and a value for the\n initial state.\n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \n \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e depends only on the state, but not on the input values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e ProcFun (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "mealySY"
      },
      "index": {
        "description": "The process constructor melaySY is used to model state machines of Mealy type where the output only depends on the current state and the input values The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mooreSY depends only on the state but not on the input values",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mealySY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:moore2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e ProcFun (a -\u003e d)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
        "fct-type": "function",
        "title": "moore2SY"
      },
      "index": {
        "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "moore2SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003eProcFun(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:moore3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e ProcFun (a -\u003e e)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
        "fct-type": "function",
        "title": "moore3SY"
      },
      "index": {
        "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "moore3SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003eProcFun(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:mooreSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e is used to model state machines\n of \"Moore\" type, where the output only depends on the current\n state. The process constructor is based on the process constructor\n \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that\n the output operates on the current state and not on the next\n state. The process constructors takes a function to calculate the\n next state, another function to calculate the output and a value for\n the initial state.\n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor\n \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e depends not only on the state, but also on the input values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e ProcFun (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "mooreSY"
      },
      "index": {
        "description": "The process constructor mooreSY is used to model state machines of Moore type where the output only depends on the current state The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mealySY depends not only on the state but also on the input values",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "mooreSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003eProcFun(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanl2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal a",
        "fct-type": "function",
        "title": "scanl2SY"
      },
      "index": {
        "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanl2SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanl3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two \n   input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal a",
        "fct-type": "function",
        "title": "scanl3SY"
      },
      "index": {
        "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanl3SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanlSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state \n   machine process without output decoder. It takes an initial value and \n   a function for the next state decoder. The process constructor behaves \n   similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e and has the value of \n   the new state as its output value as illustrated by the \n   following example.  \n\u003c/p\u003e\u003cp\u003eThis is in contrast to the function \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, which has its current \n   state as its output value. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
        "fct-type": "function",
        "title": "scanlSY"
      },
      "index": {
        "description": "The process constructor scanlSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY and has the value of the new state as its output value as illustrated by the following example This is in contrast to the function scanldSY which has its current state as its output value",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanlSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanld2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal a",
        "fct-type": "function",
        "title": "scanld2SY"
      },
      "index": {
        "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanld2SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanld3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has \n   two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal a",
        "fct-type": "function",
        "title": "scanld3SY"
      },
      "index": {
        "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanld3SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:scanldSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state\n  machine process without output decoder. It takes an initial value and a\n  function for the next state decoder. The process constructor behaves\n  similarly to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e. In contrast to the\n  process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e here the output value is the current state\n  and not the one of the next state.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
        "fct-type": "function",
        "title": "scanldSY"
      },
      "index": {
        "description": "The process constructor scanldSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similarly to the Haskell prelude function scanlSY In contrast to the process constructor scanlSY here the output value is the current state and not the one of the next state",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "scanldSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:sndSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esndSY\u003c/a\u003e\u003c/code\u003e selects always the second value from a signal of pairs\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b) -\u003e Signal b",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#sndSY",
        "fct-type": "function",
        "title": "sndSY"
      },
      "index": {
        "description": "The process sndSY selects always the second value from signal of pairs",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "sndSY",
        "normalized": "ProcId-\u003eSignal(a,b)-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b)-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:sourceSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esourceSY\u003c/a\u003e\u003c/code\u003e takes a function and an initial state and generates\n   an infinite signal starting with the initial state as first output \n   followed by the recursive application of the function on the current \n   state. The state also serves as output value.             \n\u003c/p\u003e\u003cp\u003eThe process that has the infinite signal of natural numbers as output is \n con structed by                                                            \n\u003c/p\u003e\u003cp\u003esourceSY \"naturals\" (+1) 0\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e ProcFun (a -\u003e a) -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#sourceSY",
        "fct-type": "function",
        "title": "sourceSY"
      },
      "index": {
        "description": "The process sourceSY takes function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state The state also serves as output value The process that has the infinite signal of natural numbers as output is con structed by sourceSY naturals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "sourceSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003ea)-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eProcFun(a-\u003ea)-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip3SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into three signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b, c) -\u003e (Signal a, Signal b, Signal c)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzip3SY",
        "fct-type": "function",
        "title": "unzip3SY"
      },
      "index": {
        "description": "The process unzip3SY unzips signal of tuples into three signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzip3SY",
        "normalized": "ProcId-\u003eSignal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b,c)-\u003e(Signal a,Signal b,Signal c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip4SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into four signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b, c, d) -\u003e (Signal a, Signal b, Signal c, Signal d)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzip4SY",
        "fct-type": "function",
        "title": "unzip4SY"
      },
      "index": {
        "description": "The process unzip4SY unzips signal of tuples into four signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzip4SY",
        "normalized": "ProcId-\u003eSignal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip5SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip5SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into five signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b, c, d, e) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzip5SY",
        "fct-type": "function",
        "title": "unzip5SY"
      },
      "index": {
        "description": "The process unzip5SY unzips signal of tuples into five signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzip5SY",
        "normalized": "ProcId-\u003eSignal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzip6SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip6SY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into six signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b, c, d, e, f) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e, Signal f)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzip6SY",
        "fct-type": "function",
        "title": "unzip6SY"
      },
      "index": {
        "description": "The process unzip6SY unzips signal of tuples into six signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzip6SY",
        "normalized": "ProcId-\u003eSignal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzipSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into two signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (a, b) -\u003e (Signal a, Signal b)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzipSY",
        "fct-type": "function",
        "title": "unzipSY"
      },
      "index": {
        "description": "The process unzipSY unzips signal of tuples into two signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzipSY",
        "normalized": "ProcId-\u003eSignal(a,b)-\u003e(Signal a,Signal b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(a,b)-\u003e(Signal a,Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:unzipxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipxSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a vector of n signals into a signal of \n   vectors.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (FSVec s a) -\u003e FSVec s (Signal a)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#unzipxSY",
        "fct-type": "function",
        "title": "unzipxSY"
      },
      "index": {
        "description": "The process unzipxSY unzips vector of signals into signal of vectors",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "unzipxSY",
        "normalized": "ProcId-\u003eSignal(FSVec a b)-\u003eFSVec a(Signal b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(FSVec s a)-\u003eFSVec s(Signal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:whenSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ewhenSY\u003c/a\u003e\u003c/code\u003e creates a process that synchronizes a \n   signal of absent extended values with another signal of absent extended \n   values. The output signal has the value of the first signal whenever an \n   event has a present value and \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e when the event has an absent value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal (AbstExt a) -\u003e Signal (AbstExt b) -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#whenSY",
        "fct-type": "function",
        "title": "whenSY"
      },
      "index": {
        "description": "The process constructor whenSY creates process that synchronizes signal of absent extended values with another signal of absent extended values The output signal has the value of the first signal whenever an event has present value and Abst when the event has an absent value",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "whenSY",
        "normalized": "ProcId-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal (a, b, c)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zip3SY",
        "fct-type": "function",
        "title": "zip3SY"
      },
      "index": {
        "description": "The process zip3SY works as zipSY but takes three input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zip3SY",
        "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal (a, b, c, d)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zip4SY",
        "fct-type": "function",
        "title": "zip4SY"
      },
      "index": {
        "description": "The process zip4SY works as zipSY but takes four input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zip4SY",
        "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip5SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes five input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal (a, b, c, d, e)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zip5SY",
        "fct-type": "function",
        "title": "zip5SY"
      },
      "index": {
        "description": "The process zip5SY works as zipSY but takes five input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zip5SY",
        "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zip6SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes six input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal f -\u003e Signal (a, b, c, d, e, f)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zip6SY",
        "fct-type": "function",
        "title": "zip6SY"
      },
      "index": {
        "description": "The process zip6SY works as zipSY but takes six input signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zip6SY",
        "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e \"zips\" two incoming signals into one signal of \n   tuples.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e Signal a -\u003e Signal b -\u003e Signal (a, b)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zipSY",
        "fct-type": "function",
        "title": "zipSY"
      },
      "index": {
        "description": "The process zipSY zips two incoming signals into one signal of tuples",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipSY",
        "normalized": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal(a,b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eSignal a-\u003eSignal b-\u003eSignal(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith3SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   three input signals and one output signal. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d",
        "fct-type": "function",
        "title": "zipWith3SY"
      },
      "index": {
        "description": "The process constructor zipWith3SY takes an identifier and combinational function as arguments and returns process with three input signals and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWith3SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith4SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   four input signals and one output signal. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e",
        "fct-type": "function",
        "title": "zipWith4SY"
      },
      "index": {
        "description": "The process constructor zipWith4SY takes an identifier and combinational function as arguments and returns process with four input signals and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWith4SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith5SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith5SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   five input signals and one output signal. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e-\u003e Signal f",
        "fct-type": "function",
        "title": "zipWith5SY"
      },
      "index": {
        "description": "The process constructor zipWith5SY takes an identifier and combinational function as arguments and returns process with five input signals and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWith5SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWith6SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith6SY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n   combinational function as arguments and returns a process with \n   five input signals and one output signal. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g)-\u003e Signal a-\u003e Signal b-\u003e Signal c-\u003e Signal d-\u003e Signal e-\u003e Signal f-\u003e Signal g",
        "fct-type": "function",
        "title": "zipWith6SY"
      },
      "index": {
        "description": "The process constructor zipWith6SY takes an identifier and combinational function as arguments and returns process with five input signals and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWith6SY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal g",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWithSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e takes an identifier and a \n  combinational function as arguments and returns a process with \n  two input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId-\u003e ProcFun (a -\u003e b -\u003e c)-\u003e Signal a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "zipWithSY"
      },
      "index": {
        "description": "The process constructor zipWithSY takes an identifier and combinational function as arguments and returns process with two input signals and one output signal",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWithSY",
        "normalized": "ProcId-\u003eProcFun(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "ProcId-\u003eProcFun(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipWithxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithxSY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e, but takes a \n   vector of signals as input.                                             \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e ProcFun (FSVec s a -\u003e b) -\u003e FSVec s (Signal a) -\u003e Signal b",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zipWithxSY",
        "fct-type": "function",
        "title": "zipWithxSY"
      },
      "index": {
        "description": "The process constructor zipWithxSY works as zipWithSY but takes vector of signals as input",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipWithxSY",
        "normalized": "ProcId-\u003eProcFun(FSVec a b-\u003ec)-\u003eFSVec a(Signal b)-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "Withx SY",
        "signature": "ProcId-\u003eProcFun(FSVec s a-\u003eb)-\u003eFSVec s(Signal a)-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process-SynchProc.html#v:zipxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipxSY\u003c/a\u003e\u003c/code\u003e \"zips\" a signal of vectors into a vector of signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process.SynchProc",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e FSVec s (Signal a) -\u003e Signal (FSVec s a)",
        "fct-source": "src/ForSyDe-Process-SynchProc.html#zipxSY",
        "fct-type": "function",
        "title": "zipxSY"
      },
      "index": {
        "description": "The process zipxSY zips signal of vectors into vector of signals",
        "hierarchy": "ForSyDe Process SynchProc",
        "module": "ForSyDe.Process.SynchProc",
        "name": "zipxSY",
        "normalized": "ProcId-\u003eFSVec a(Signal b)-\u003eSignal(FSVec a b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "ProcId-\u003eFSVec s(Signal a)-\u003eSignal(FSVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePublicly usable functions to create primitive processes. (Reexports \n  \u003ca\u003eForSyDe.Process.SynchProc\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Publicly usable functions to create primitive processes Reexports ForSyDe.Process.SynchProc",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "Process",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#t:ProcFun",
      "description": {
        "fct-descr": "\u003cp\u003eA Process Function \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Process-ProcFun.html#ProcFun",
        "fct-type": "data",
        "title": "ProcFun"
      },
      "index": {
        "description": "Process Function",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "ProcFun",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Proc Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#t:ProcType",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to constrain the arguments (values and \u003ccode\u003eProcFun\u003c/code\u003es) taken by\n   process constructors\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "class",
        "fct-source": "src/ForSyDe-Process-ProcType.html#ProcType",
        "fct-type": "class",
        "title": "ProcType"
      },
      "index": {
        "description": "Class used to constrain the arguments values and ProcFun taken by process constructors",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "ProcType",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Proc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:defArgPF",
      "description": {
        "fct-descr": "\u003cp\u003eSets a default value for an argument of the process function \n   when the argument is a process function itself\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcFun (a -\u003e b) -\u003e ProcFun a -\u003e ProcFun b",
        "fct-source": "src/ForSyDe-Process-ProcFun.html#defArgPF",
        "fct-type": "function",
        "title": "defArgPF"
      },
      "index": {
        "description": "Sets default value for an argument of the process function when the argument is process function itself",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "defArgPF",
        "normalized": "ProcFun(a-\u003eb)-\u003eProcFun a-\u003eProcFun b",
        "package": "ForSyDe",
        "partial": "Arg PF",
        "signature": "ProcFun(a-\u003eb)-\u003eProcFun a-\u003eProcFun b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:defArgVal",
      "description": {
        "fct-descr": "\u003cp\u003eSets a default value for an argument of the process function\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcFun (a -\u003e b) -\u003e a -\u003e ProcFun b",
        "fct-source": "src/ForSyDe-Process-ProcFun.html#defArgVal",
        "fct-type": "function",
        "title": "defArgVal"
      },
      "index": {
        "description": "Sets default value for an argument of the process function",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "defArgVal",
        "normalized": "ProcFun(a-\u003eb)-\u003ea-\u003eProcFun b",
        "package": "ForSyDe",
        "partial": "Arg Val",
        "signature": "ProcFun(a-\u003eb)-\u003ea-\u003eProcFun b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Process.html#v:newProcFun",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate Haskell constructor for \u003ccode\u003e\u003ca\u003eProcFun\u003c/a\u003e\u003c/code\u003e, here is an example on how to use it\n\u003c/p\u003e\u003cpre\u003e\n  plus1Fun :: ProcFun (Int -\u003e Int)\n  plus1Fun = $(newProcFun [d| plus1 :: Int -\u003e Int\n                              plus1 n = n + 1     |])\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Process",
        "fct-package": "ForSyDe",
        "fct-signature": "Q [Dec] -\u003e ExpQ",
        "fct-source": "src/ForSyDe-Process-ProcFun.html#newProcFun",
        "fct-type": "function",
        "title": "newProcFun"
      },
      "index": {
        "description": "Template Haskell constructor for ProcFun here is an example on how to use it plus1Fun ProcFun Int Int plus1Fun newProcFun plus1 Int Int plus1",
        "hierarchy": "ForSyDe Process",
        "module": "ForSyDe.Process",
        "name": "newProcFun",
        "normalized": "Q[Dec]-\u003eExpQ",
        "package": "ForSyDe",
        "partial": "Proc Fun",
        "signature": "Q[Dec]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e is used to extend existing data types with the value\n  'absent', which models the absence of a value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html",
        "fct-type": "module",
        "title": "AbsentExt"
      },
      "index": {
        "description": "The AbstExt is used to extend existing data types with the value absent which models the absence of value",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "AbsentExt",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Absent Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#t:AbstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e has two constructors. The constructor \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e is used to model the absence of a value, while the constructor \u003ccode\u003e\u003ca\u003ePrst\u003c/a\u003e\u003c/code\u003e is used to model present values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
        "fct-type": "data",
        "title": "AbstExt"
      },
      "index": {
        "description": "The data type AbstExt has two constructors The constructor Abst is used to model the absence of value while the constructor Prst is used to model present values",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "AbstExt",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Abst Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:Abst",
      "description": {
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "Abst",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
        "fct-type": "function",
        "title": "Abst"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "Abst",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Abst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:Prst",
      "description": {
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "Prst a",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#AbstExt",
        "fct-type": "function",
        "title": "Prst"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "Prst",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Prst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:abstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExt\u003c/a\u003e\u003c/code\u003e converts a usual value to a present value. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e AbstExt a",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#abstExt",
        "fct-type": "function",
        "title": "abstExt"
      },
      "index": {
        "description": "The function abstExt converts usual value to present value",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "abstExt",
        "normalized": "a-\u003eAbstExt a",
        "package": "ForSyDe",
        "partial": "Ext",
        "signature": "a-\u003eAbstExt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:abstExtFunc",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e extends a function in order to process absent extended values. If the input is (\"bottom\"), the output will also be  (\"bottom\").\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#abstExtFunc",
        "fct-type": "function",
        "title": "abstExtFunc"
      },
      "index": {
        "description": "The function abstExtFunc extends function in order to process absent extended values If the input is bottom the output will also be bottom",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "abstExtFunc",
        "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
        "package": "ForSyDe",
        "partial": "Ext Func",
        "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:fromAbstExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromAbstExt\u003c/a\u003e\u003c/code\u003e converts a value from a extended value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e AbstExt a -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#fromAbstExt",
        "fct-type": "function",
        "title": "fromAbstExt"
      },
      "index": {
        "description": "The function fromAbstExt converts value from extended value",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "fromAbstExt",
        "normalized": "a-\u003eAbstExt a-\u003ea",
        "package": "ForSyDe",
        "partial": "Abst Ext",
        "signature": "a-\u003eAbstExt a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:isAbsent",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisAbsent\u003c/a\u003e\u003c/code\u003e checks for the absence of a value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "AbstExt a -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#isAbsent",
        "fct-type": "function",
        "title": "isAbsent"
      },
      "index": {
        "description": "The functions isAbsent checks for the absence of value",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "isAbsent",
        "normalized": "AbstExt a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Absent",
        "signature": "AbstExt a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:isPresent",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eisPresent\u003c/a\u003e\u003c/code\u003e checks for the presence of a value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "AbstExt a -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#isPresent",
        "fct-type": "function",
        "title": "isPresent"
      },
      "index": {
        "description": "The functions isPresent checks for the presence of value",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "isPresent",
        "normalized": "AbstExt a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Present",
        "signature": "AbstExt a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AbsentExt.html#v:psi",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epsi\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003eabstExtFunc\u003c/a\u003e\u003c/code\u003e and should be used in future.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.AbsentExt",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e AbstExt a -\u003e AbstExt b",
        "fct-source": "src/ForSyDe-Shallow-AbsentExt.html#psi",
        "fct-type": "function",
        "title": "psi"
      },
      "index": {
        "description": "The function psi is identical to abstExtFunc and should be used in future",
        "hierarchy": "ForSyDe Shallow AbsentExt",
        "module": "ForSyDe.Shallow.AbsentExt",
        "name": "psi",
        "normalized": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eAbstExt a-\u003eAbstExt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdaptivity Library, yet to be completed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.AdaptivityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-AdaptivityLib.html",
        "fct-type": "module",
        "title": "AdaptivityLib"
      },
      "index": {
        "description": "Adaptivity Library yet to be completed",
        "hierarchy": "ForSyDe Shallow AdaptivityLib",
        "module": "ForSyDe.Shallow.AdaptivityLib",
        "name": "AdaptivityLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Adaptivity Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyf2SY",
      "description": {
        "fct-module": "ForSyDe.Shallow.AdaptivityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a -\u003e c -\u003e d) -\u003e Signal a -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyf2SY",
        "fct-type": "function",
        "title": "applyf2SY"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AdaptivityLib",
        "module": "ForSyDe.Shallow.AdaptivityLib",
        "name": "applyf2SY",
        "normalized": "Signal(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyf3SY",
      "description": {
        "fct-module": "ForSyDe.Shallow.AdaptivityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a -\u003e c -\u003e d -\u003e e) -\u003e Signal a -\u003e Signal c -\u003e Signal d -\u003e Signal e",
        "fct-source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyf3SY",
        "fct-type": "function",
        "title": "applyf3SY"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AdaptivityLib",
        "module": "ForSyDe.Shallow.AdaptivityLib",
        "name": "applyf3SY",
        "normalized": "Signal(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyfSY",
      "description": {
        "fct-module": "ForSyDe.Shallow.AdaptivityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a -\u003e b) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyfSY",
        "fct-type": "function",
        "title": "applyfSY"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AdaptivityLib",
        "module": "ForSyDe.Shallow.AdaptivityLib",
        "name": "applyfSY",
        "normalized": "Signal(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-AdaptivityLib.html#v:applyfU",
      "description": {
        "fct-module": "ForSyDe.Shallow.AdaptivityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-AdaptivityLib.html#applyfU",
        "fct-type": "function",
        "title": "applyfU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow AdaptivityLib",
        "module": "ForSyDe.Shallow.AdaptivityLib",
        "name": "applyfU",
        "normalized": "Int-\u003eSignal([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eSignal([a]-\u003e[b])-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt defines the bit vector operations from/to integer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html",
        "fct-type": "module",
        "title": "BitVector"
      },
      "index": {
        "description": "It defines the bit vector operations from to integer",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "BitVector",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#t:BitVector",
      "description": {
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#BitVector",
        "fct-type": "type",
        "title": "BitVector"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "BitVector",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#t:Parity",
      "description": {
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#Parity",
        "fct-type": "data",
        "title": "Parity"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "Parity",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Parity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:Even",
      "description": {
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Even",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#Parity",
        "fct-type": "function",
        "title": "Even"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "Even",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Even",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:Odd",
      "description": {
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Odd",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#Parity",
        "fct-type": "function",
        "title": "Odd"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "Odd",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Odd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addEvenParityBit",
      "description": {
        "fct-descr": "\u003cp\u003eTo add even parity bit on the bit-vector in the tail.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#addEvenParityBit",
        "fct-type": "function",
        "title": "addEvenParityBit"
      },
      "index": {
        "description": "To add even parity bit on the bit-vector in the tail",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "addEvenParityBit",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "Even Parity Bit",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addOddParityBit",
      "description": {
        "fct-descr": "\u003cp\u003eTo add odd parity bit on the bit-vector in the tail.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#addOddParityBit",
        "fct-type": "function",
        "title": "addOddParityBit"
      },
      "index": {
        "description": "To add odd parity bit on the bit-vector in the tail",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "addOddParityBit",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "Odd Parity Bit",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:addParityBit",
      "description": {
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Parity -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#addParityBit",
        "fct-type": "function",
        "title": "addParityBit"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "addParityBit",
        "normalized": "Parity-\u003eVector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "Parity Bit",
        "signature": "Parity-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:bitVectorToInt",
      "description": {
        "fct-descr": "\u003cp\u003eTo transform the input bit-vecotr to an integer.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "BitVector -\u003e Integer",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#bitVectorToInt",
        "fct-type": "function",
        "title": "bitVectorToInt"
      },
      "index": {
        "description": "To transform the input bit-vecotr to an integer",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "bitVectorToInt",
        "normalized": "BitVector-\u003eInteger",
        "package": "ForSyDe",
        "partial": "Vector To Int",
        "signature": "BitVector-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:intToBitVector",
      "description": {
        "fct-descr": "\u003cp\u003eTo transform the input integer to a bit-vector with specified number of\n bits.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e Integer-\u003e BitVector",
        "fct-type": "function",
        "title": "intToBitVector"
      },
      "index": {
        "description": "To transform the input integer to bit-vector with specified number of bits",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "intToBitVector",
        "normalized": "Int-\u003eInteger-\u003eBitVector",
        "package": "ForSyDe",
        "partial": "To Bit Vector",
        "signature": "Int-\u003eInteger-\u003eBitVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isBitVector",
      "description": {
        "fct-descr": "\u003cp\u003eTo judge whether the input bit-vector is in a proper form.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector t-\u003e Bool",
        "fct-type": "function",
        "title": "isBitVector"
      },
      "index": {
        "description": "To judge whether the input bit-vector is in proper form",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "isBitVector",
        "normalized": "Vector a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Bit Vector",
        "signature": "Vector t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isEvenParity",
      "description": {
        "fct-descr": "\u003cp\u003eTo check the even parity of the bit-vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector t -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#isEvenParity",
        "fct-type": "function",
        "title": "isEvenParity"
      },
      "index": {
        "description": "To check the even parity of the bit-vector",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "isEvenParity",
        "normalized": "Vector a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Even Parity",
        "signature": "Vector t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:isOddParity",
      "description": {
        "fct-descr": "\u003cp\u003eTo check the odd parity of the bit-vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector t -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#isOddParity",
        "fct-type": "function",
        "title": "isOddParity"
      },
      "index": {
        "description": "To check the odd parity of the bit-vector",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "isOddParity",
        "normalized": "Vector a-\u003eBool",
        "package": "ForSyDe",
        "partial": "Odd Parity",
        "signature": "Vector t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-BitVector.html#v:removeParityBit",
      "description": {
        "fct-descr": "\u003cp\u003eTo remove the parity bit in the tail.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.BitVector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector t -\u003e Vector t",
        "fct-source": "src/ForSyDe-Shallow-BitVector.html#removeParityBit",
        "fct-type": "function",
        "title": "removeParityBit"
      },
      "index": {
        "description": "To remove the parity bit in the tail",
        "hierarchy": "ForSyDe Shallow BitVector",
        "module": "ForSyDe.Shallow.BitVector",
        "name": "removeParityBit",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "Parity Bit",
        "signature": "Vector t-\u003eVector t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the ForSyDe library for continuous time MoC (CT-MoC).\n Revision: $Revision: 1.7 $\n Id: $Id: CTLib.hs,v 1.7 2007\u003cem\u003e07\u003c/em\u003e11 08:38:34 axel Exp $\n It is still experimental.\n Right now there are only constructors \u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecombCT2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eshiftCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emealyCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emooreCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddCT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emultCT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eabsCT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe main idea is to represent continuous time signals as functions\n \u003ccode\u003eReal --\u003e a\u003c/code\u003e with \u003ccode\u003ea\u003c/code\u003e being a numerical type. This allows us to represent a \n continuous time signal without loss of information because no sampling or \n ADC is required. The sampling occurs only when a signal is evaluated, \n for instance when it is plotted. \n\u003c/p\u003e\u003cp\u003eThus, a \u003cem\u003esignal\u003c/em\u003e is represented as a sequence of functions and intervals. For\n instance a signal \n\u003c/p\u003e\u003cpre\u003es = \u003c(sin,[0,100])\u003e\u003c/pre\u003e\u003cp\u003erepresents a sinus signal in the interval between 0 and 100. The signal \n\u003c/p\u003e\u003cpre\u003es2 = \u003c(f1(x)=2x, [0,2]), (f2(x)=3+x,[2,4])\u003e\u003c/pre\u003e\u003cp\u003edefines a signal that is defined by function \u003ccode\u003ef1\u003c/code\u003e in the interval \u003ccode\u003e[0,2]\u003c/code\u003e \n and by function \u003ccode\u003ef2\u003c/code\u003e in the interval \u003ccode\u003e[2,4]\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eA \u003cem\u003eprocess\u003c/em\u003e transforms the incoming functions into outgoing functions. \n The approach is described in more detail in the ANDRES deliverable D1.1a.\n Here we only briefly comment the main functions and constructors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html",
        "fct-type": "module",
        "title": "CTLib"
      },
      "index": {
        "description": "This is the ForSyDe library for continuous time MoC CT-MoC Revision Revision Id Id CTLib.hs axel Exp It is still experimental Right now there are only constructors combCT combCT2 delayCT shiftCT mealyCT mooreCT scaleCT addCT multCT and absCT The main idea is to represent continuous time signals as functions Real with being numerical type This allows us to represent continuous time signal without loss of information because no sampling or ADC is required The sampling occurs only when signal is evaluated for instance when it is plotted Thus signal is represented as sequence of functions and intervals For instance signal sin represents sinus signal in the interval between and The signal s2 f1 f2 defines signal that is defined by function f1 in the interval and by function f2 in the interval process transforms the incoming functions into outgoing functions The approach is described in more detail in the ANDRES deliverable D1.1a Here we only briefly comment the main functions and constructors",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "CTLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "CTLib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#t:DACMode",
      "description": {
        "fct-descr": "\u003cp\u003eFor the digital-analog conversion we have two different possibilities\n which is determined by this data type \u003ccode\u003e\u003ca\u003eDACMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
        "fct-type": "data",
        "title": "DACMode"
      },
      "index": {
        "description": "For the digital-analog conversion we have two different possibilities which is determined by this data type DACMode",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "DACMode",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "DACMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#t:SubsigCT",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a sub-signal of a continuous signal. It consisits of the \n  function and the interval on which the function is defined.\n The continuous time signal is then defined as a sequence of SubsigCT \n elements: Signal SubsigCT\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#SubsigCT",
        "fct-type": "data",
        "title": "SubsigCT"
      },
      "index": {
        "description": "The type of sub-signal of continuous signal It consisits of the function and the interval on which the function is defined The continuous time signal is then defined as sequence of SubsigCT elements Signal SubsigCT",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "SubsigCT",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Subsig CT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:DAhold",
      "description": {
        "fct-descr": "\u003cp\u003ethe last digital value is frozen\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "DAhold",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
        "fct-type": "function",
        "title": "DAhold"
      },
      "index": {
        "description": "the last digital value is frozen",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "DAhold",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "DAhold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:DAlinear",
      "description": {
        "fct-descr": "\u003cp\u003elinear interpolation\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "DAlinear",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#DACMode",
        "fct-type": "function",
        "title": "DAlinear"
      },
      "index": {
        "description": "linear interpolation",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "DAlinear",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "DAlinear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:SubsigCT",
      "description": {
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "SubsigCT (Rational -\u003e a, (Rational, Rational))",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#SubsigCT",
        "fct-type": "function",
        "title": "SubsigCT"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "SubsigCT",
        "normalized": "SubsigCT(Rational-\u003ea,(Rational,Rational))",
        "package": "ForSyDe",
        "partial": "Subsig CT",
        "signature": "SubsigCT(Rational-\u003ea,(Rational,Rational))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:a2dConverter",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ea2dConverter\u003c/a\u003e\u003c/code\u003e converts a continuous time signal to\n   an untimed or synchronous signal. The first parameter gives the\n   sampling period of the converter.\n\u003c/p\u003e\u003cp\u003eNote, that the process \u003ccode\u003e\u003ca\u003ea2dConverter\u003c/a\u003e\u003c/code\u003e is an ideal component,\n   i.e. there are no losses due to a limited resolution due to a fixed\n   number of bits.  \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal a",
        "fct-type": "function",
        "title": "a2dConverter"
      },
      "index": {
        "description": "The process a2dConverter converts continuous time signal to an untimed or synchronous signal The first parameter gives the sampling period of the converter Note that the process a2dConverter is an ideal component i.e there are no losses due to limited resolution due to fixed number of bits",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "a2dConverter",
        "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Converter",
        "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:absCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eabsCT\u003c/a\u003e\u003c/code\u003e takes the absolute value of a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "absCT"
      },
      "index": {
        "description": "absCT takes the absolute value of signal",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "absCT",
        "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:addCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eaddCT\u003c/a\u003e\u003c/code\u003e adds two input signals together.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "addCT"
      },
      "index": {
        "description": "addCT adds two input signals together",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "addCT",
        "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyF1",
      "description": {
        "fct-descr": "\u003cp\u003eapplyF1 applies a function on a sub-signal, which means the function of \n the subsignal is transformed to another function:\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "((Rational -\u003e a) -\u003e Rational -\u003e b) -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT b)",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#applyF1",
        "fct-type": "function",
        "title": "applyF1"
      },
      "index": {
        "description": "applyF1 applies function on sub-signal which means the function of the subsignal is transformed to another function",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "applyF1",
        "normalized": "((Rational-\u003ea)-\u003eRational-\u003eb)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "((Rational-\u003ea)-\u003eRational-\u003eb)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyF2",
      "description": {
        "fct-descr": "\u003cp\u003eapplyF2 works just like applyF1 but operates on two incoming signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "((Rational -\u003e a) -\u003e (Rational -\u003e b) -\u003e Rational -\u003e c) -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT b) -\u003e Signal (SubsigCT c)",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#applyF2",
        "fct-type": "function",
        "title": "applyF2"
      },
      "index": {
        "description": "applyF2 works just like applyF1 but operates on two incoming signals",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "applyF2",
        "normalized": "((Rational-\u003ea)-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "((Rational-\u003ea)-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:applyG1",
      "description": {
        "fct-descr": "\u003cp\u003eapplyG1 is used to apply a next-state function. A very interesting\n question is, what should be an argument to the next-state function: \n the incoming function, defining the value of the input signal?\n or the incoming function and the incoming interval?\n or the value of the incoming signal at a particular point, e.g. at the \n left most point of the interval?\n To give the next-state function the interval itself as argument, would mean\n that the process becomes time variant process, i.e. its behaviour is \n dependent on the absolute time values. This is not a good thing to have!\n Another possibility may be to give a sub-signal that is relative to the \n current evaluation, i.e. the left most point is always 0. Would that make\n sense?\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e (Rational -\u003e b) -\u003e a) -\u003e a -\u003e Signal (SubsigCT b) -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#applyG1",
        "fct-type": "function",
        "title": "applyG1"
      },
      "index": {
        "description": "applyG1 is used to apply next-state function very interesting question is what should be an argument to the next-state function the incoming function defining the value of the input signal or the incoming function and the incoming interval or the value of the incoming signal at particular point e.g at the left most point of the interval To give the next-state function the interval itself as argument would mean that the process becomes time variant process i.e its behaviour is dependent on the absolute time values This is not good thing to have Another possibility may be to give sub-signal that is relative to the current evaluation i.e the left most point is always Would that make sense",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "applyG1",
        "normalized": "(a-\u003e(Rational-\u003eb)-\u003ea)-\u003ea-\u003eSignal(SubsigCT b)-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003e(Rational-\u003eb)-\u003ea)-\u003ea-\u003eSignal(SubsigCT b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:combCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e is a process constructor with one input and one output signal.\n It instantiates a combinatorial, stateless process.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e ((Rational -\u003e a) -\u003e Rational -\u003e a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "combCT"
      },
      "index": {
        "description": "combCT is process constructor with one input and one output signal It instantiates combinatorial stateless process",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "combCT",
        "normalized": "Rational-\u003e((Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003e((Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:combCT2",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombCT2\u003c/a\u003e\u003c/code\u003e is a process constructor just like \u003ccode\u003e\u003ca\u003ecombCT\u003c/a\u003e\u003c/code\u003e but operates on\n two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e ((Rational -\u003e a) -\u003e (Rational -\u003e a) -\u003e Rational -\u003e a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "combCT2"
      },
      "index": {
        "description": "combCT2 is process constructor just like combCT but operates on two input signals",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "combCT2",
        "normalized": "Rational-\u003e((Rational-\u003ea)-\u003e(Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003e((Rational-\u003ea)-\u003e(Rational-\u003ea)-\u003eRational-\u003ea)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:constCT",
      "description": {
        "fct-descr": "\u003cp\u003econstCT generates a constant signal for a given time duration.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e a-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "constCT"
      },
      "index": {
        "description": "constCT generates constant signal for given time duration",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "constCT",
        "normalized": "Rational-\u003ea-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003ea-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:cutEq",
      "description": {
        "fct-descr": "\u003cp\u003ecutEq partitions the two signals such that the partitioning are identical\n in both result signals, but only up to the duration of the shorter of the \n two signals:\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a) -\u003e Signal (SubsigCT b) -\u003e (Signal (SubsigCT a), Signal (SubsigCT b))",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#cutEq",
        "fct-type": "function",
        "title": "cutEq"
      },
      "index": {
        "description": "cutEq partitions the two signals such that the partitioning are identical in both result signals but only up to the duration of the shorter of the two signals",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "cutEq",
        "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003e(Signal(SubsigCT a),Signal(SubsigCT b))",
        "package": "ForSyDe",
        "partial": "Eq",
        "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT b)-\u003e(Signal(SubsigCT a),Signal(SubsigCT b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:d2aConverter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e converts an untimes or synchronous signal into a \n continuous time signal.\n The process \u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e converts a signal of the digital domain\n into a continuous time signal. There are two modes, \u003ccode\u003e\u003ca\u003eDAlinear\u003c/a\u003e\u003c/code\u003e,\n which makes a smooth transition between adjacent digital values and\n \u003ccode\u003e\u003ca\u003eDAhold\u003c/a\u003e\u003c/code\u003e, where the analog value directly follows the digital\n value. This means that in \u003ccode\u003e\u003ca\u003eDAhold\u003c/a\u003e\u003c/code\u003e-mode a staircase function\n remains a staircase function, while in \u003ccode\u003e\u003ca\u003eDAlinear\u003c/a\u003e\u003c/code\u003e the staircase\n function would resemble at least partially a \u003cem\u003esaw tooth\u003c/em\u003e-curve. \n\u003c/p\u003e\u003cp\u003eThe resolution of the converter is given by the parameter\n \u003ccode\u003e\u003ca\u003etimeStep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, that the process \u003ccode\u003e\u003ca\u003ed2aConverter\u003c/a\u003e\u003c/code\u003e is an ideal component, i.e. there\n are no losses due to a limited resolution due to a fixed number of bits. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "DACMode-\u003e Rational-\u003e Signal a-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "d2aConverter"
      },
      "index": {
        "description": "d2aConverter converts an untimes or synchronous signal into continuous time signal The process d2aConverter converts signal of the digital domain into continuous time signal There are two modes DAlinear which makes smooth transition between adjacent digital values and DAhold where the analog value directly follows the digital value This means that in DAhold mode staircase function remains staircase function while in DAlinear the staircase function would resemble at least partially saw tooth curve The resolution of the converter is given by the parameter timeStep Note that the process d2aConverter is an ideal component i.e there are no losses due to limited resolution due to fixed number of bits",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "d2aConverter",
        "normalized": "DACMode-\u003eRational-\u003eSignal a-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "Converter",
        "signature": "DACMode-\u003eRational-\u003eSignal a-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:delayCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e is a delay process which simply delays the\n output but does not buffer it. The value at each time t is the same as \n for the input signal, after the initial delay.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "delayCT"
      },
      "index": {
        "description": "delayCT is delay process which simply delays the output but does not buffer it The value at each time is the same as for the input signal after the initial delay",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "delayCT",
        "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:dropCT",
      "description": {
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT a)",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#dropCT",
        "fct-type": "function",
        "title": "dropCT"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "dropCT",
        "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:duration",
      "description": {
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a) -\u003e Rational",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "duration",
        "normalized": "Signal(SubsigCT a)-\u003eRational",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal(SubsigCT a)-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:initCT",
      "description": {
        "fct-descr": "\u003cp\u003einitCT takes an initial signal, outputs it and then copies its second \n input signal, which is delayed by the duration of the initial signal.\n The delay is realized by \u003ccode\u003e\u003ca\u003edelayCT\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "initCT"
      },
      "index": {
        "description": "initCT takes an initial signal outputs it and then copies its second input signal which is delayed by the duration of the initial signal The delay is realized by delayCT",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "initCT",
        "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:mealyCT",
      "description": {
        "fct-descr": "\u003cp\u003eThe state-full constructor \u003ccode\u003e\u003ca\u003emealyCT\u003c/a\u003e\u003c/code\u003e resembles a Mealy machine.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e Rational)-\u003e (a -\u003e (Rational -\u003e b) -\u003e a)-\u003e (a -\u003e (Rational -\u003e b) -\u003e Rational -\u003e c)-\u003e a-\u003e Signal (SubsigCT b)-\u003e Signal (SubsigCT c)",
        "fct-type": "function",
        "title": "mealyCT"
      },
      "index": {
        "description": "The state-full constructor mealyCT resembles Mealy machine",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "mealyCT",
        "normalized": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003e(Rational-\u003eb)-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:mooreCT",
      "description": {
        "fct-descr": "\u003cp\u003eThe state-full constructor \u003ccode\u003e\u003ca\u003emooreCT\u003c/a\u003e\u003c/code\u003e resembles a Moore machine.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e Rational)-\u003e (a -\u003e (Rational -\u003e b) -\u003e a)-\u003e (a -\u003e Rational -\u003e c)-\u003e a-\u003e Signal (SubsigCT b)-\u003e Signal (SubsigCT c)",
        "fct-type": "function",
        "title": "mooreCT"
      },
      "index": {
        "description": "The state-full constructor mooreCT resembles Moore machine",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "mooreCT",
        "normalized": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "(a-\u003eRational)-\u003e(a-\u003e(Rational-\u003eb)-\u003ea)-\u003e(a-\u003eRational-\u003ec)-\u003ea-\u003eSignal(SubsigCT b)-\u003eSignal(SubsigCT c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:multCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emultCT\u003c/a\u003e\u003c/code\u003e multiplies two input signals together.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "multCT"
      },
      "index": {
        "description": "multCT multiplies two input signals together",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "multCT",
        "normalized": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Signal(SubsigCT a)-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plot",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplot\u003c/a\u003e\u003c/code\u003e plots one signal in a graph with the default sampling period \n of 1/200 of the duration of the signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e IO String",
        "fct-type": "function",
        "title": "plot"
      },
      "index": {
        "description": "plot plots one signal in graph with the default sampling period of of the duration of the signal",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "plot",
        "normalized": "Signal(SubsigCT a)-\u003eIO String",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal(SubsigCT a)-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plotCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT\u003c/a\u003e\u003c/code\u003e plots a list of signals in the same graph. The sampling period \n has to be given as argument. In the graph default label names are used\n to identify the signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e [Signal (SubsigCT a)]-\u003e IO String",
        "fct-type": "function",
        "title": "plotCT"
      },
      "index": {
        "description": "plotCT plots list of signals in the same graph The sampling period has to be given as argument In the graph default label names are used to identify the signals",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "plotCT",
        "normalized": "Rational-\u003e[Signal(SubsigCT a)]-\u003eIO String",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003e[Signal(SubsigCT a)]-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:plotCT-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT'\u003c/a\u003e\u003c/code\u003e is the work horse for plotting and the functions \u003ccode\u003e\u003ca\u003eplot\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eplotCT\u003c/a\u003e\u003c/code\u003e use it with specialising arguments.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eplotCT'\u003c/a\u003e\u003c/code\u003e plots all the signals in the list in one graph. If a label is\n   given for a signal, this label appears in the graph. If the label string is \n   \"\", a default label like \"sig-1\"  is used.\n\u003c/p\u003e\u003cp\u003eIn addition to displaying the graph on the screen, the following files\n   are created in directory ./fig:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ect-moc-graph.eps\u003c/dt\u003e\u003cdd\u003e          an eps file of the complete graph\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph.pdf\u003c/dt\u003e\u003cdd\u003e          A pdf file of the complete graph\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph-latex.eps\u003c/dt\u003e\u003cdd\u003e    included by ct-moc-graph-latex.tex\n\u003c/dd\u003e\u003cdt\u003ect-moc-graph-latex.tex\u003c/dt\u003e\u003cdd\u003e    This is the tex file that should be included\n                               by your latex document. It in turn includes\n \t\t\t       the file ct-moc-graph-latex.eps.\n\t\t\t       These two files have to be used together;\n \t\t\t       the .eps file contains only the graphics,\n\t\t\t       while the .tex file contains the labels and \n                               text.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e [(Signal (SubsigCT a), String)]-\u003e IO String",
        "fct-type": "function",
        "title": "plotCT'"
      },
      "index": {
        "description": "plotCT is the work horse for plotting and the functions plot and plotCT use it with specialising arguments plotCT plots all the signals in the list in one graph If label is given for signal this label appears in the graph If the label string is default label like sig-1 is used In addition to displaying the graph on the screen the following files are created in directory fig ct-moc-graph.eps an eps file of the complete graph ct-moc-graph.pdf pdf file of the complete graph ct-moc-graph-latex.eps included by ct-moc-graph-latex.tex ct-moc-graph-latex.tex This is the tex file that should be included by your latex document It in turn includes the file ct-moc-graph-latex.eps These two files have to be used together the eps file contains only the graphics while the tex file contains the labels and text",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "plotCT'",
        "normalized": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
        "package": "ForSyDe",
        "partial": "CT'",
        "signature": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:scaleCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escaleCT\u003c/a\u003e\u003c/code\u003e amplifies an input by a constant factor:\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "scaleCT"
      },
      "index": {
        "description": "scaleCT amplifies an input by constant factor",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "scaleCT",
        "normalized": "a-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "a-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:shiftCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshiftCT\u003c/a\u003e\u003c/code\u003e  shifts the shape of the input signal by delay \n to the right.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "shiftCT"
      },
      "index": {
        "description": "shiftCT shifts the shape of the input signal by delay to the right",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "shiftCT",
        "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:showParts",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowParts\u003c/a\u003e\u003c/code\u003e allows to see how a signal is partitioned into sub-signals.\n It returns the sequence of intervals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a)-\u003e [(Double, Double)]",
        "fct-type": "function",
        "title": "showParts"
      },
      "index": {
        "description": "showParts allows to see how signal is partitioned into sub-signals It returns the sequence of intervals",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "showParts",
        "normalized": "Signal(SubsigCT a)-\u003e[(Double,Double)]",
        "package": "ForSyDe",
        "partial": "Parts",
        "signature": "Signal(SubsigCT a)-\u003e[(Double,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:sineWave",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esineWave\u003c/a\u003e\u003c/code\u003e generates a sinus signal with the given frequency defined\n over  a given period. The function is defined as \u003ccode\u003ef(x)=sin(2*pi*freq*x)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e (Rational, Rational)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "sineWave"
      },
      "index": {
        "description": "sineWave generates sinus signal with the given frequency defined over given period The function is defined as sin pi freq",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "sineWave",
        "normalized": "Rational-\u003e(Rational,Rational)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "Wave",
        "signature": "Rational-\u003e(Rational,Rational)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:startTime",
      "description": {
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (SubsigCT a) -\u003e Rational",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#startTime",
        "fct-type": "function",
        "title": "startTime"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "startTime",
        "normalized": "Signal(SubsigCT a)-\u003eRational",
        "package": "ForSyDe",
        "partial": "Time",
        "signature": "Signal(SubsigCT a)-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:takeCT",
      "description": {
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational -\u003e Signal (SubsigCT a) -\u003e Signal (SubsigCT a)",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#takeCT",
        "fct-type": "function",
        "title": "takeCT"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "takeCT",
        "normalized": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:timeStep",
      "description": {
        "fct-descr": "\u003cp\u003eThis constant gives the default time step for sampling and plotting.\n Its value is 10ns.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational",
        "fct-source": "src/ForSyDe-Shallow-CTLib.html#timeStep",
        "fct-type": "function",
        "title": "timeStep"
      },
      "index": {
        "description": "This constant gives the default time step for sampling and plotting Its value is ns",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "timeStep",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:vcdGen",
      "description": {
        "fct-descr": "\u003cp\u003evcdGen dumps the values of a list of signal in VCD (Value Change Dump) format \n(IEEE Std 1364-2001), which is part of the Verilog standard \n(\u003ca\u003ehttp://en.wikipedia.org/wiki/Value_change_dump\u003c/a\u003e).\nThere are public domain tools to view VCD files. For instance, \nGTKWave (\u003ca\u003ehttp://home.nc.rr.com/gtkwave/\u003c/a\u003e) is a popular viewer available for\nWindows and Linux.\n\u003c/p\u003e\u003cp\u003eThe values are written to the file .\u003cem\u003efig\u003c/em\u003ect-moc.vcd. If the file exists, it\nis overwritten. If the directory does not exist, it is created.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e [(Signal (SubsigCT a), String)]-\u003e IO String",
        "fct-type": "function",
        "title": "vcdGen"
      },
      "index": {
        "description": "vcdGen dumps the values of list of signal in VCD Value Change Dump format IEEE Std which is part of the Verilog standard http en.wikipedia.org wiki Value change dump There are public domain tools to view VCD files For instance GTKWave http home.nc.rr.com gtkwave is popular viewer available for Windows and Linux The values are written to the file fig ct-moc.vcd If the file exists it is overwritten If the directory does not exist it is created",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "vcdGen",
        "normalized": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String",
        "package": "ForSyDe",
        "partial": "Gen",
        "signature": "Rational-\u003e[(Signal(SubsigCT a),String)]-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CTLib.html#v:zeroCT",
      "description": {
        "fct-descr": "\u003cp\u003ezeroCT generates a constant 0 signal for the given time duration.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.CTLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "zeroCT"
      },
      "index": {
        "description": "zeroCT generates constant signal for the given time duration",
        "hierarchy": "ForSyDe Shallow CTLib",
        "module": "ForSyDe.Shallow.CTLib",
        "name": "zeroCT",
        "normalized": "Rational-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "CT",
        "signature": "Rational-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-CoreLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CoreLib is the base for all MoC libraries and is a container\n that includes the following libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Signal\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Vector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.AbsentExt\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.CoreLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-CoreLib.html",
        "fct-type": "module",
        "title": "CoreLib"
      },
      "index": {
        "description": "The CoreLib is the base for all MoC libraries and is container that includes the following libraries ForSyDe.Shallow.Signal ForSyDe.Shallow.Vector ForSyDe.Shallow.AbsentExt",
        "hierarchy": "ForSyDe Shallow CoreLib",
        "module": "ForSyDe.Shallow.CoreLib",
        "name": "CoreLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Core Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes the standard Discrete Fourier Transform (DFT)\n function, and a fast Fourier transform (FFT) algorithm, for\n computing the DFT, when the input vectors' length is a power of 2.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-DFT.html",
        "fct-type": "module",
        "title": "DFT"
      },
      "index": {
        "description": "This module includes the standard Discrete Fourier Transform DFT function and fast Fourier transform FFT algorithm for computing the DFT when the input vectors length is power of",
        "hierarchy": "ForSyDe Shallow DFT",
        "module": "ForSyDe.Shallow.DFT",
        "name": "DFT",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "DFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e performs a standard Discrete Fourier Transformation\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Vector (Complex Double) -\u003e Vector (Complex Double)",
        "fct-source": "src/ForSyDe-Shallow-DFT.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "The function dft performs standard Discrete Fourier Transformation",
        "hierarchy": "ForSyDe Shallow DFT",
        "module": "ForSyDe.Shallow.DFT",
        "name": "dft",
        "normalized": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DFT.html#v:fft",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e implements a fast Fourier transform (FFT) algorithm, for computing the DFT, when the size N is a power of 2.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DFT",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Vector (Complex Double) -\u003e Vector (Complex Double)",
        "fct-source": "src/ForSyDe-Shallow-DFT.html#fft",
        "fct-type": "function",
        "title": "fft"
      },
      "index": {
        "description": "The function fft implements fast Fourier transform FFT algorithm for computing the DFT when the size is power of",
        "hierarchy": "ForSyDe Shallow DFT",
        "module": "ForSyDe.Shallow.DFT",
        "name": "fft",
        "normalized": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eVector(Complex Double)-\u003eVector(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe dataflow library defines data types, process constructors and\n functions to model dataflow process networks, as described by Lee and\n Parks in Dataflow process networks, IEEE Proceedings, 1995 ([LeeParks95]).\n\u003c/p\u003e\u003cp\u003eEach process is defined by a set of firing rules and corresponding\n actions. A process fires, if the incoming signals match a firing\n rule. Then the process consumes the matched tokens and executes the\n action corresponding to the firing rule.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html",
        "fct-type": "module",
        "title": "DataflowLib"
      },
      "index": {
        "description": "The dataflow library defines data types process constructors and functions to model dataflow process networks as described by Lee and Parks in Dataflow process networks IEEE Proceedings LeeParks95 Each process is defined by set of firing rules and corresponding actions process fires if the incoming signals match firing rule Then the process consumes the matched tokens and executes the action corresponding to the firing rule",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "DataflowLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Dataflow Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#t:FiringToken",
      "description": {
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
        "fct-type": "data",
        "title": "FiringToken"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "FiringToken",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Firing Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:Value",
      "description": {
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Value a",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "Value",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:Wild",
      "description": {
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Wild",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#FiringToken",
        "fct-type": "function",
        "title": "Wild"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "Wild",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Wild",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mapDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003emapDF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions and generates a data flow process with one input and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[[FiringToken a]] -\u003e (Signal a -\u003e [[b]]) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#mapDF",
        "fct-type": "function",
        "title": "mapDF"
      },
      "index": {
        "description": "The process constructor mapDF takes list of firing rules list of corresponding output functions and generates data flow process with one input and one output signal",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "mapDF",
        "normalized": "[[FiringToken a]]-\u003e(Signal a-\u003e[[b]])-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "DF",
        "signature": "[[FiringToken a]]-\u003e(Signal a-\u003e[[b]])-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mealyDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003emealyDF\u003c/code\u003e implements the most general state machine in the ForSyDe methodology. It takes a set of firing rules, a set of corresponding next state functions and a set of output functions as argument. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state and output functions are executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e (b -\u003e Signal a -\u003e [[c]]) -\u003e b -\u003e Signal a -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#mealyDF",
        "fct-type": "function",
        "title": "mealyDF"
      },
      "index": {
        "description": "The process constructor mealyDF implements the most general state machine in the ForSyDe methodology It takes set of firing rules set of corresponding next state functions and set of output functions as argument firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state and output functions are executed and the tokens matching the pattern are consumed",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "mealyDF",
        "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003e(a-\u003eSignal b-\u003e[[c]])-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "DF",
        "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003e(b-\u003eSignal a-\u003e[[c]])-\u003eb-\u003eSignal a-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:mooreDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003emooreDF\u003c/code\u003e implements a Moore finite state machine in the ForSyDe methodology. It takes a set of firing rules, a set of corresponding next state functions and a set of output functions as argument. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state and output functions are executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e (b -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#mooreDF",
        "fct-type": "function",
        "title": "mooreDF"
      },
      "index": {
        "description": "The process constructor mooreDF implements Moore finite state machine in the ForSyDe methodology It takes set of firing rules set of corresponding next state functions and set of output functions as argument firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state and output functions are executed and the tokens matching the pattern are consumed",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "mooreDF",
        "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003e(a-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "DF",
        "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003e(b-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:scanlDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003escanlDF\u003c/code\u003e implements a finite state machine without output decoder in the ForSyDe methodology. It takes a set of firing rules and a set of corresponding next state functions as arguments. A firing rule is a tuple. The first value is a pattern for the state, the second value corresponds to an input pattern. When a pattern matches, the process fires, the corresponding next state is executed, and the tokens matching the pattern are consumed.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[(FiringToken b, [FiringToken a])] -\u003e (b -\u003e Signal a -\u003e [b]) -\u003e b -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#scanlDF",
        "fct-type": "function",
        "title": "scanlDF"
      },
      "index": {
        "description": "The process constructor scanlDF implements finite state machine without output decoder in the ForSyDe methodology It takes set of firing rules and set of corresponding next state functions as arguments firing rule is tuple The first value is pattern for the state the second value corresponds to an input pattern When pattern matches the process fires the corresponding next state is executed and the tokens matching the pattern are consumed",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "scanlDF",
        "normalized": "[(FiringToken a,[FiringToken b])]-\u003e(a-\u003eSignal b-\u003e[a])-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "DF",
        "signature": "[(FiringToken b,[FiringToken a])]-\u003e(b-\u003eSignal a-\u003e[b])-\u003eb-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:zipWith3DF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructors \u003ccode\u003ezipWith3DF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions to generate a data flow process with three input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[([FiringToken a], [FiringToken b], [FiringToken c])] -\u003e (Signal a -\u003e Signal b -\u003e Signal c -\u003e [[d]]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#zipWith3DF",
        "fct-type": "function",
        "title": "zipWith3DF"
      },
      "index": {
        "description": "The process constructors zipWith3DF takes list of firing rules list of corresponding output functions to generate data flow process with three input signals and one output signal",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "zipWith3DF",
        "normalized": "[([FiringToken a],[FiringToken b],[FiringToken c])]-\u003e(Signal a-\u003eSignal b-\u003eSignal c-\u003e[[d]])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "With DF",
        "signature": "[([FiringToken a],[FiringToken b],[FiringToken c])]-\u003e(Signal a-\u003eSignal b-\u003eSignal c-\u003e[[d]])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DataflowLib.html#v:zipWithDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructors \u003ccode\u003ezipWithDF\u003c/code\u003e takes a list of firing rules, a list of corresponding output functions to generate a data flow process with two input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DataflowLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[([FiringToken b], [FiringToken a])] -\u003e (Signal b -\u003e Signal a -\u003e [[c]]) -\u003e Signal b -\u003e Signal a -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-DataflowLib.html#zipWithDF",
        "fct-type": "function",
        "title": "zipWithDF"
      },
      "index": {
        "description": "The process constructors zipWithDF takes list of firing rules list of corresponding output functions to generate data flow process with two input signals and one output signal",
        "hierarchy": "ForSyDe Shallow DataflowLib",
        "module": "ForSyDe.Shallow.DataflowLib",
        "name": "zipWithDF",
        "normalized": "[([FiringToken a],[FiringToken b])]-\u003e(Signal a-\u003eSignal b-\u003e[[c]])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "With DF",
        "signature": "[([FiringToken b],[FiringToken a])]-\u003e(Signal b-\u003eSignal a-\u003e[[c]])-\u003eSignal b-\u003eSignal a-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines domain interface constructors for the multi-rate computational \n model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html",
        "fct-type": "module",
        "title": "DomainInterfaces"
      },
      "index": {
        "description": "This module defines domain interface constructors for the multi-rate computational model",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "DomainInterfaces",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Domain Interfaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:downDI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003edownDI\u003c/a\u003e\u003c/code\u003e takes a parameter \u003ccode\u003ek\u003c/code\u003e and downsamples an input signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Signal b -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#downDI",
        "fct-type": "function",
        "title": "downDI"
      },
      "index": {
        "description": "The domain interface constructor downDI takes parameter and downsamples an input signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "downDI",
        "normalized": "a-\u003eSignal b-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "a-\u003eSignal b-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser2DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser2DI\u003c/a\u003e\u003c/code\u003e converts two parallel signals into one signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser2DI",
        "fct-type": "function",
        "title": "par2ser2DI"
      },
      "index": {
        "description": "The domain interface constructor par2ser2DI converts two parallel signals into one signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "par2ser2DI",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser3DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser3DI\u003c/a\u003e\u003c/code\u003e converts three parallel signals into one signal\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser3DI",
        "fct-type": "function",
        "title": "par2ser3DI"
      },
      "index": {
        "description": "The domain interface constructor par2ser3DI converts three parallel signals into one signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "par2ser3DI",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2ser4DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2ser4DI\u003c/a\u003e\u003c/code\u003e converts four parallel signals into one signal\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2ser4DI",
        "fct-type": "function",
        "title": "par2ser4DI"
      },
      "index": {
        "description": "The domain interface constructor par2ser4DI converts four parallel signals into one signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "par2ser4DI",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:par2serxDI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003epar2serxDI\u003c/a\u003e\u003c/code\u003e converts n parallel signals into one signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector (Signal a) -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#par2serxDI",
        "fct-type": "function",
        "title": "par2serxDI"
      },
      "index": {
        "description": "The domain interface constructor par2serxDI converts parallel signals into one signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "par2serxDI",
        "normalized": "Vector(Signal a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Vector(Signal a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par2DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par2DI\u003c/a\u003e\u003c/code\u003e converts one signal into two parallel signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a))",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par2DI",
        "fct-type": "function",
        "title": "ser2par2DI"
      },
      "index": {
        "description": "The domain interface constructor ser2par2DI converts one signal into two parallel signals",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "ser2par2DI",
        "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a))",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par3DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par3DI\u003c/a\u003e\u003c/code\u003e converts one signal into three parallel signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a))",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par3DI",
        "fct-type": "function",
        "title": "ser2par3DI"
      },
      "index": {
        "description": "The domain interface constructor ser2par3DI converts one signal into three parallel signals",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "ser2par3DI",
        "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2par4DI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructor \u003ccode\u003e\u003ca\u003eser2par4DI\u003c/a\u003e\u003c/code\u003e converts one signal into four parallel signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e (Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a), Signal (AbstExt a))",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2par4DI",
        "fct-type": "function",
        "title": "ser2par4DI"
      },
      "index": {
        "description": "The domain interface constructor ser2par4DI converts one signal into four parallel signals",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "ser2par4DI",
        "normalized": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "Signal a-\u003e(Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a),Signal(AbstExt a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:ser2parxDI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructors \u003ccode\u003e\u003ca\u003eser2parxDI\u003c/a\u003e\u003c/code\u003e converts one signal into n parallel signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Signal (AbstExt b) -\u003e Vector (Signal (AbstExt b))",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#ser2parxDI",
        "fct-type": "function",
        "title": "ser2parxDI"
      },
      "index": {
        "description": "The domain interface constructors ser2parxDI converts one signal into parallel signals",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "ser2parxDI",
        "normalized": "a-\u003eSignal(AbstExt b)-\u003eVector(Signal(AbstExt b))",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "a-\u003eSignal(AbstExt b)-\u003eVector(Signal(AbstExt b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-DomainInterfaces.html#v:upDI",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain interface constructors \u003ccode\u003e\u003ca\u003eupDI\u003c/a\u003e\u003c/code\u003e takes a parameter \u003ccode\u003ek\u003c/code\u003e and upsamples an input signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.DomainInterfaces",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Signal b -\u003e Signal (AbstExt b)",
        "fct-source": "src/ForSyDe-Shallow-DomainInterfaces.html#upDI",
        "fct-type": "function",
        "title": "upDI"
      },
      "index": {
        "description": "The domain interface constructors upDI takes parameter and upsamples an input signal",
        "hierarchy": "ForSyDe Shallow DomainInterfaces",
        "module": "ForSyDe.Shallow.DomainInterfaces",
        "name": "upDI",
        "normalized": "a-\u003eSignal b-\u003eSignal(AbstExt b)",
        "package": "ForSyDe",
        "partial": "DI",
        "signature": "a-\u003eSignal b-\u003eSignal(AbstExt b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FIR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a FIR filters for the synchronous computational model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.FIR",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-FIR.html",
        "fct-type": "module",
        "title": "FIR"
      },
      "index": {
        "description": "This module implements FIR filters for the synchronous computational model",
        "hierarchy": "ForSyDe Shallow FIR",
        "module": "ForSyDe.Shallow.FIR",
        "name": "FIR",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "FIR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FIR.html#v:firSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe function firSY implements a FIR-filter for the synchronous computational model. All kinds of FIR-filters can now be modeled by means of \u003ccode\u003e\u003ca\u003efirSY\u003c/a\u003e\u003c/code\u003e. The only argument needed is the list of coefficients, which is given as a vector of any size. To illustrate this, an 8-th order band pass filter is modeled as follows. \n\u003c/p\u003e\u003cpre\u003e bp = firSY (vector [0.06318761339784, 0.08131651217682, 0.09562326700432, \n                     0.10478344432968, 0.10793629404886, 0.10478344432968, \n                     0.09562326700432, 0.08131651217682, 0.06318761339784 ])\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.FIR",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-FIR.html#firSY",
        "fct-type": "function",
        "title": "firSY"
      },
      "index": {
        "description": "The function firSY implements FIR-filter for the synchronous computational model All kinds of FIR-filters can now be modeled by means of firSY The only argument needed is the list of coefficients which is given as vector of any size To illustrate this an th order band pass filter is modeled as follows bp firSY vector",
        "hierarchy": "ForSyDe Shallow FIR",
        "module": "ForSyDe.Shallow.FIR",
        "name": "firSY",
        "normalized": "Vector a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Vector a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the filter library for ForSyDe heterogeneous MoCs - CT-MoC, SR-MoC,\n and Untimed-MoC.\n\u003c/p\u003e\u003cp\u003eThe filters at CT-MoC are based on the filters implemented at SR-MoC and Untimed-MoC, \n which means a signal in CT-MoC is always digitalized by a A/D converter, processed by \n digital filters at SR or Untimed domain, and converted back into a CT domain signal by \n a D/A converter. A CT-filter is composed of one A/D converter, one digital filter, and \n one D/A converter.\n\u003c/p\u003e\u003cp\u003eThe implementation of the filters at untimed and synchronous domains follows the\n way in a paper /An introduction to Haskell with applications to digital signal processing, \n David M. Goblirsch, in Proceedings of the 1994 ACM symposium on Applied computing./,\n where the details of the FIR/IIR, AR, and ARMA filters are introduced. The ARMA filter\n is the kernel part of our general linear filter \u003ccode\u003e\u003ca\u003ezLinearFilter\u003c/a\u003e\u003c/code\u003e in Z-domain at SR/Untimed\n MoC, and is also the kernel digital filter for the linear filter \u003ccode\u003e\u003ca\u003esLinearFilter\u003c/a\u003e\u003c/code\u003e in \n S-domain at CT-MoC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-FilterLib.html",
        "fct-type": "module",
        "title": "FilterLib"
      },
      "index": {
        "description": "This is the filter library for ForSyDe heterogeneous MoCs CT-MoC SR-MoC and Untimed-MoC The filters at CT-MoC are based on the filters implemented at SR-MoC and Untimed-MoC which means signal in CT-MoC is always digitalized by converter processed by digital filters at SR or Untimed domain and converted back into CT domain signal by converter CT-filter is composed of one converter one digital filter and one converter The implementation of the filters at untimed and synchronous domains follows the way in paper An introduction to Haskell with applications to digital signal processing David Goblirsch in Proceedings of the ACM symposium on Applied computing where the details of the FIR IIR AR and ARMA filters are introduced The ARMA filter is the kernel part of our general linear filter zLinearFilter in Z-domain at SR Untimed MoC and is also the kernel digital filter for the linear filter sLinearFilter in S-domain at CT-MoC",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "FilterLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Filter Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#t:SolverMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe solver mode.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
        "fct-type": "data",
        "title": "SolverMode"
      },
      "index": {
        "description": "The solver mode",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "SolverMode",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Solver Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:RK4",
      "description": {
        "fct-descr": "\u003cp\u003eRunge Kutta 4 with fixed simulation steps\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "RK4",
        "fct-source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
        "fct-type": "function",
        "title": "RK4"
      },
      "index": {
        "description": "Runge Kutta with fixed simulation steps",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "RK4",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "RK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:S2Z",
      "description": {
        "fct-descr": "\u003cp\u003eTustin tranfer from s-domain to z-domain\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "S2Z",
        "fct-source": "src/ForSyDe-Shallow-FilterLib.html#SolverMode",
        "fct-type": "function",
        "title": "S2Z"
      },
      "index": {
        "description": "Tustin tranfer from s-domain to z-domain",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "S2Z",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:arFilterTrim",
      "description": {
        "fct-descr": "\u003cp\u003eThe autoregressive filter is the simplest IIR filter. It is characterized \n by a list of numbers '[a_1,a_2,...,a_M]' called the autoregression \n coefficients and a single number \u003ccode\u003eb\u003c/code\u003e called the gain. \u003ccode\u003eM\u003c/code\u003e is the order of \n the filter. Let '[x_n]' denote the input signal, '[y_n]' denote the ouput\n signal. The formula for '[y_n]' is  $sum_{k=1}^M {a_k*y_{n-k}+b*x_n}$. \n Although it is an IIR filter, here we only get the same length of ouput \n signal as the input signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[a]-\u003e a-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "arFilterTrim"
      },
      "index": {
        "description": "The autoregressive filter is the simplest IIR filter It is characterized by list of numbers called the autoregression coefficients and single number called the gain is the order of the filter Let denote the input signal denote the ouput signal The formula for is sum n-k Although it is an IIR filter here we only get the same length of ouput signal as the input signal",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "arFilterTrim",
        "normalized": "[a]-\u003ea-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Filter Trim",
        "signature": "[a]-\u003ea-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:armaFilterTrim",
      "description": {
        "fct-descr": "\u003cp\u003eThe ARMA filter combines the FIR and AR filters. Let '[x_n]' denote the \n input signal, '[y_n]' denote the ouput signal. The formula for '[y_n]' is\n  $sum_{k=1}^M {a_k*y_{n-k}+b*x_n} + sum_{i=0}^{N-1} b_i*x_{n-i}$. The ARMA\n filter can be defined as the composition of an FIR filter having the impulse\n reponse '[b_0,b_1,...,b_N-1]' and an AR filter having the regression \n coefficients '[a_1,a_2,...,a_M]' and a gain of '1'. Although it is an IIR \n filter, here we only get the same length of ouput signal as the input signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[a]-\u003e [a]-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "armaFilterTrim"
      },
      "index": {
        "description": "The ARMA filter combines the FIR and AR filters Let denote the input signal denote the ouput signal The formula for is sum n-k sum N-1 n-i The ARMA filter can be defined as the composition of an FIR filter having the impulse reponse N-1 and an AR filter having the regression coefficients and gain of Although it is an IIR filter here we only get the same length of ouput signal as the input signal",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "armaFilterTrim",
        "normalized": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Filter Trim",
        "signature": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:firFilter",
      "description": {
        "fct-descr": "\u003cp\u003eThe FIR filter. Let '[x_n]' denote the input signal, '[y_n]' denote the ouput\n signal, and '[h_n]' the impulse response of the filter. Suppose the length of\n the impulse responses is M samples. The formula for '[y_n]' is \n $sum_{k=0}^{M-1} h_k*x_{n-k}$.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[a]-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "firFilter"
      },
      "index": {
        "description": "The FIR filter Let denote the input signal denote the ouput signal and the impulse response of the filter Suppose the length of the impulse responses is samples The formula for is sum M-1 n-k",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "firFilter",
        "normalized": "[a]-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Filter",
        "signature": "[a]-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:h2ARMACoef",
      "description": {
        "fct-descr": "\u003cp\u003eThe Z-domain to ARMA coefficient tranformation. It is used on the \n Z-transfer function\n\u003c/p\u003e\u003cpre\u003e        b_0*z^m-n + b_1*z^m-n-1 + ... + b_m-1*z^1-n + b_m*z^-n\nH(z) = -----------------------------------------------------    (Eq 4)\n        a_0*z^0 + a_1*z^-1 + ... + a_n-1*z^1-n + a_n*z^-n\n\u003c/pre\u003e\u003cp\u003ewhich is normalized as\n\u003c/p\u003e\u003cpre\u003e        b_0/a_0*z^m-n + b_1/a_0*z^m-n-1 + ... + b_m/a_0*z^-n\nH(z) = -------------------------------------------------------  (Eq 5)\n        1 + a_1/a_0*z^-1 + ... + a_n-1/a_0*z^1-n + a_n/a_0*z^-n\n\u003c/pre\u003e\u003cp\u003eThe implementation coudl be\n\u003c/p\u003e\u003cpre\u003ey(k) = b_0/a_0*x_k+m-n + b_1/a_0*x_k+m-n-1 + ... + b_m/a_0*x_k-n\n                                                                (Eq 6)\n                       - a_1/a_0*y_k-1 - ... - a_n/a_0*y_k-n\n\u003c/pre\u003e\u003cp\u003eThen, we could get the coefficients of the ARMA filter.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "([a], [a])-\u003e ([a], [a])",
        "fct-type": "function",
        "title": "h2ARMACoef"
      },
      "index": {
        "description": "The Z-domain to ARMA coefficient tranformation It is used on the Z-transfer function m-n m-n-1 m-1 Eq n-1 which is normalized as m-n m-n-1 Eq n-1 The implementation coudl be m-n m-n-1 k-n Eq k-1 k-n Then we could get the coefficients of the ARMA filter",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "h2ARMACoef",
        "normalized": "([a],[a])-\u003e([a],[a])",
        "package": "ForSyDe",
        "partial": "ARMACoef",
        "signature": "([a],[a])-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:s2zCoef",
      "description": {
        "fct-descr": "\u003cp\u003es2z domain coefficient tranformation with a specified sampling rate.\n The Tustin transformation is used for the transfer, with\n\u003c/p\u003e\u003cpre\u003e      2(z - 1)  \n s = ----------                                                 (Eq 3)\n      T(z + 1)\n\u003c/pre\u003e\u003cp\u003ein which, \u003ccode\u003eT\u003c/code\u003e is the sampling interval.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Rational-\u003e [a]-\u003e [a]-\u003e ([a], [a])",
        "fct-type": "function",
        "title": "s2zCoef"
      },
      "index": {
        "description": "s2z domain coefficient tranformation with specified sampling rate The Tustin transformation is used for the transfer with Eq in which is the sampling interval",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "s2zCoef",
        "normalized": "Rational-\u003e[a]-\u003e[a]-\u003e([a],[a])",
        "package": "ForSyDe",
        "partial": "Coef",
        "signature": "Rational-\u003e[a]-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:sLinearFilter",
      "description": {
        "fct-descr": "\u003cp\u003eThe general linear filter in S-domain at CT-MoC. As the kernel\n implementation is in Z-domain, the smapling rate should be specified. \n It is used on the S-transformation with the following forms, with \n coefficients for the descending powers of \u003ccode\u003es\u003c/code\u003e and m \u003c n.\n\u003c/p\u003e\u003cpre\u003e        b_0*s^m + b_1*s^m-1 + ... + b_m-1*s^1 + b_m*s^0\nH(s) = ------------------------------------------------         (Eq 1)\n        a_0*s^n + a_1*s^n-1 + ... + a_n-1*s^1 + a_n*s^0\n\u003c/pre\u003e\u003cp\u003eIf we multiply both the numerator and the denominator with s^-n, we get \n another equivelent canonical form\n\u003c/p\u003e\u003cpre\u003e        b_0*s^m-n + b_1*s^m-n-1 + ... + b_m-1*s^1-n + b_m*s^-n\nH(s) = -----------------------------------------------------    (Eq 2)\n        a_0*s^0 + a_1*s^-1 + ... + a_n-1*s^1-n + a_n*s^-n\n\u003c/pre\u003e\u003cp\u003eTo instantiate a filter, with sampling interval 'T ', we use\n\u003c/p\u003e\u003cpre\u003e filter1 = sLinearFilter T [1] [2,1]\n\u003c/pre\u003e\u003cp\u003eto get a filter  with the transfer function\n\u003c/p\u003e\u003cpre\u003e          1\nH(s) = --------\n       2*s + 1\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e filter2 = sLinearFilter T [2,1] [1,2,2]\n\u003c/pre\u003e\u003cp\u003eto get another filter with the transfer function\n\u003c/p\u003e\u003cpre\u003e           2*s +1\nH(s) = ----------------\n        s^2 + 2*s + 2\n\u003c/pre\u003e\u003cp\u003eThere are two solver modes, \u003ccode\u003e\u003ca\u003eS2Z\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRK4\u003c/a\u003e\u003c/code\u003e.\n Caused by the precision problem, the time interval in CT uses Rational data\n type and the digital data types in all the domains are Double.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "SolverMode-\u003e Rational-\u003e [a]-\u003e [a]-\u003e Signal (SubsigCT a)-\u003e Signal (SubsigCT a)",
        "fct-type": "function",
        "title": "sLinearFilter"
      },
      "index": {
        "description": "The general linear filter in S-domain at CT-MoC As the kernel implementation is in Z-domain the smapling rate should be specified It is used on the S-transformation with the following forms with coefficients for the descending powers of and m-1 m-1 Eq n-1 n-1 If we multiply both the numerator and the denominator with we get another equivelent canonical form m-n m-n-1 m-1 Eq n-1 To instantiate filter with sampling interval we use filter1 sLinearFilter to get filter with the transfer function and filter2 sLinearFilter to get another filter with the transfer function There are two solver modes S2Z and RK4 Caused by the precision problem the time interval in CT uses Rational data type and the digital data types in all the domains are Double",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "sLinearFilter",
        "normalized": "SolverMode-\u003eRational-\u003e[a]-\u003e[a]-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)",
        "package": "ForSyDe",
        "partial": "Linear Filter",
        "signature": "SolverMode-\u003eRational-\u003e[a]-\u003e[a]-\u003eSignal(SubsigCT a)-\u003eSignal(SubsigCT a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-FilterLib.html#v:zLinearFilter",
      "description": {
        "fct-descr": "\u003cp\u003eThe general linear filter in Z-domain.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.FilterLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e [a] -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-FilterLib.html#zLinearFilter",
        "fct-type": "function",
        "title": "zLinearFilter"
      },
      "index": {
        "description": "The general linear filter in Z-domain",
        "hierarchy": "ForSyDe Shallow FilterLib",
        "module": "ForSyDe.Shallow.FilterLib",
        "name": "zLinearFilter",
        "normalized": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Linear Filter",
        "signature": "[a]-\u003e[a]-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Gaussian.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe follow the Box-Muller method to generate white gaussian noise, \n described at: \u003ca\u003ehttp://www.dspguru.com/howto/tech/wgn.htm\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.Gaussian",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-Gaussian.html",
        "fct-type": "module",
        "title": "Gaussian"
      },
      "index": {
        "description": "We follow the Box-Muller method to generate white gaussian noise described at http www.dspguru.com howto tech wgn.htm",
        "hierarchy": "ForSyDe Shallow Gaussian",
        "module": "ForSyDe.Shallow.Gaussian",
        "name": "Gaussian",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Gaussian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Gaussian.html#v:pGaussianNoise",
      "description": {
        "fct-descr": "\u003cp\u003eTo generate an infinite Signal of Gaussian values\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Gaussian",
        "fct-package": "ForSyDe",
        "fct-signature": "Double -\u003e Double -\u003e Int -\u003e Signal Double",
        "fct-source": "src/ForSyDe-Shallow-Gaussian.html#pGaussianNoise",
        "fct-type": "function",
        "title": "pGaussianNoise"
      },
      "index": {
        "description": "To generate an infinite Signal of Gaussian values",
        "hierarchy": "ForSyDe Shallow Gaussian",
        "module": "ForSyDe.Shallow.Gaussian",
        "name": "pGaussianNoise",
        "normalized": "Double-\u003eDouble-\u003eInt-\u003eSignal Double",
        "package": "ForSyDe",
        "partial": "Gaussian Noise",
        "signature": "Double-\u003eDouble-\u003eInt-\u003eSignal Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the data structure and access\n functions for the memory model.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-Memory.html",
        "fct-type": "module",
        "title": "Memory"
      },
      "index": {
        "description": "This module contains the data structure and access functions for the memory model",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Memory",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Access",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eAccess\u003c/a\u003e\u003c/code\u003e defines two access patterns.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Access",
        "fct-type": "data",
        "title": "Access"
      },
      "index": {
        "description": "The data type Access defines two access patterns",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Access",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Adr",
      "description": {
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Adr",
        "fct-type": "type",
        "title": "Adr"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Adr",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Adr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:MemSize",
      "description": {
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "type",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#MemSize",
        "fct-type": "type",
        "title": "MemSize"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "MemSize",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Mem Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#t:Memory",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eMemory\u003c/a\u003e\u003c/code\u003e is modeled as a vector. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Memory",
        "fct-type": "data",
        "title": "Memory"
      },
      "index": {
        "description": "The data type Memory is modeled as vector",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Memory",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Mem",
      "description": {
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "Mem Adr (Vector (AbstExt a))",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Memory",
        "fct-type": "function",
        "title": "Mem"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Mem",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Read",
      "description": {
        "fct-descr": "\u003cp\u003e'Read adr' reads an address from the memory.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "Read Adr",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Access",
        "fct-type": "function",
        "title": "Read"
      },
      "index": {
        "description": "Read adr reads an address from the memory",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Read",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:Write",
      "description": {
        "fct-descr": "\u003cp\u003e'Write Adr a' writes a value into an address.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "Write Adr a",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#Access",
        "fct-type": "function",
        "title": "Write"
      },
      "index": {
        "description": "Write Adr writes value into an address",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "Write",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:memOutput",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ememOutput\u003c/a\u003e\u003c/code\u003e gives the output of the memory after an access to the memory. A \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e operation gives an absent value as output.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "Memory a -\u003e Access a -\u003e AbstExt a",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#memOutput",
        "fct-type": "function",
        "title": "memOutput"
      },
      "index": {
        "description": "The function memOutput gives the output of the memory after an access to the memory Write operation gives an absent value as output",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "memOutput",
        "normalized": "Memory a-\u003eAccess a-\u003eAbstExt a",
        "package": "ForSyDe",
        "partial": "Output",
        "signature": "Memory a-\u003eAccess a-\u003eAbstExt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:memState",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ememState\u003c/a\u003e\u003c/code\u003e gives the new state of the memory, after an access to a memory. A \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e operation leaves the memory unchanged.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "Memory a -\u003e Access a -\u003e Memory a",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#memState",
        "fct-type": "function",
        "title": "memState"
      },
      "index": {
        "description": "The function memState gives the new state of the memory after an access to memory Read operation leaves the memory unchanged",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "memState",
        "normalized": "Memory a-\u003eAccess a-\u003eMemory a",
        "package": "ForSyDe",
        "partial": "State",
        "signature": "Memory a-\u003eAccess a-\u003eMemory a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Memory.html#v:newMem",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enewMem\u003c/a\u003e\u003c/code\u003e creates a new memory, where the number of entries is given by a parameter.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Memory",
        "fct-package": "ForSyDe",
        "fct-signature": "MemSize -\u003e Memory a",
        "fct-source": "src/ForSyDe-Shallow-Memory.html#newMem",
        "fct-type": "function",
        "title": "newMem"
      },
      "index": {
        "description": "The function newMem creates new memory where the number of entries is given by parameter",
        "hierarchy": "ForSyDe Shallow Memory",
        "module": "ForSyDe.Shallow.Memory",
        "name": "newMem",
        "normalized": "MemSize-\u003eMemory a",
        "package": "ForSyDe",
        "partial": "Mem",
        "signature": "MemSize-\u003eMemory a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-MoCLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ForSyDeMoCLib is a container including all MoC libraries and\n their domain interfaces. It consists of the following libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The library for the synchronous MoC: \u003ca\u003eSynchronousLib\u003c/a\u003e. In this\n   version the synchronous library is divided into three libraries:\n   SynchronousLib, SynchronousProcessLib and StochasticLib.\n\u003c/li\u003e\u003cli\u003e The library for the untimed MoC: \u003ca\u003eForSyDe.Shallow.UntimedLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e The library for the continuous time MoC: \u003ca\u003eForSyDe.Shallow.CTLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e The library for the domain interfaces: \u003ca\u003eForSyDe.Shallow.DomainInterfaces\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.MoCLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-MoCLib.html",
        "fct-type": "module",
        "title": "MoCLib"
      },
      "index": {
        "description": "The ForSyDeMoCLib is container including all MoC libraries and their domain interfaces It consists of the following libraries The library for the synchronous MoC SynchronousLib In this version the synchronous library is divided into three libraries SynchronousLib SynchronousProcessLib and StochasticLib The library for the untimed MoC ForSyDe.Shallow.UntimedLib The library for the continuous time MoC ForSyDe.Shallow.CTLib The library for the domain interfaces ForSyDe.Shallow.DomainInterfaces",
        "hierarchy": "ForSyDe Shallow MoCLib",
        "module": "ForSyDe.Shallow.MoCLib",
        "name": "MoCLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Mo CLib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the polynomial arithematic library. The arithematic operations include \n addition, multiplication, division and power. However, the computation time is \n not optimized for multiplication and is O(n2), which could be considered to be \n optimized by FFT algorithms later on.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html",
        "fct-type": "module",
        "title": "PolyArith"
      },
      "index": {
        "description": "This is the polynomial arithematic library The arithematic operations include addition multiplication division and power However the computation time is not optimized for multiplication and is n2 which could be considered to be optimized by FFT algorithms later on",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "PolyArith",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Poly Arith",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#t:Poly",
      "description": {
        "fct-descr": "\u003cp\u003ePolynomial data type.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
        "fct-type": "data",
        "title": "Poly"
      },
      "index": {
        "description": "Polynomial data type",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "Poly",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:Poly",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly [a]",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
        "fct-type": "function",
        "title": "Poly"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "Poly",
        "normalized": "Poly[a]",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "Poly[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:PolyPair",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "PolyPair (Poly a, Poly a)",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#Poly",
        "fct-type": "function",
        "title": "PolyPair"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "PolyPair",
        "normalized": "PolyPair(Poly a,Poly a)",
        "package": "ForSyDe",
        "partial": "Poly Pair",
        "signature": "PolyPair(Poly a,Poly a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:addPoly",
      "description": {
        "fct-descr": "\u003cp\u003eAddition operations of polynomials.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#addPoly",
        "fct-type": "function",
        "title": "addPoly"
      },
      "index": {
        "description": "Addition operations of polynomials",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "addPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:addPolyCoef",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#addPolyCoef",
        "fct-type": "function",
        "title": "addPolyCoef"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "addPolyCoef",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "ForSyDe",
        "partial": "Poly Coef",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:divPoly",
      "description": {
        "fct-descr": "\u003cp\u003eDivision operation of polynomials.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#divPoly",
        "fct-type": "function",
        "title": "divPoly"
      },
      "index": {
        "description": "Division operation of polynomials",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "divPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:getCoef",
      "description": {
        "fct-descr": "\u003cp\u003eSome helper functions below.\n\u003c/p\u003e\u003cp\u003eTo get the coefficients of the polynomial.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly a -\u003e ([a], [a])",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#getCoef",
        "fct-type": "function",
        "title": "getCoef"
      },
      "index": {
        "description": "Some helper functions below To get the coefficients of the polynomial",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "getCoef",
        "normalized": "Poly a-\u003e([a],[a])",
        "package": "ForSyDe",
        "partial": "Coef",
        "signature": "Poly a-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:mulPoly",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication operation of polynomials.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#mulPoly",
        "fct-type": "function",
        "title": "mulPoly"
      },
      "index": {
        "description": "Multiplication operation of polynomials",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "mulPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:powerPoly",
      "description": {
        "fct-descr": "\u003cp\u003ePower operation of polynomials.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "Poly a -\u003e Int -\u003e Poly a",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#powerPoly",
        "fct-type": "function",
        "title": "powerPoly"
      },
      "index": {
        "description": "Power operation of polynomials",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "powerPoly",
        "normalized": "Poly a-\u003eInt-\u003ePoly a",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "Poly a-\u003eInt-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:scalePoly",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#scalePoly",
        "fct-type": "function",
        "title": "scalePoly"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "scalePoly",
        "normalized": "a-\u003ePoly a-\u003ePoly a",
        "package": "ForSyDe",
        "partial": "Poly",
        "signature": "a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:scalePolyCoef",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#scalePolyCoef",
        "fct-type": "function",
        "title": "scalePolyCoef"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "scalePolyCoef",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "ForSyDe",
        "partial": "Poly Coef",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-PolyArith.html#v:subPolyCoef",
      "description": {
        "fct-module": "ForSyDe.Shallow.PolyArith",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/ForSyDe-Shallow-PolyArith.html#subPolyCoef",
        "fct-type": "function",
        "title": "subPolyCoef"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow PolyArith",
        "module": "ForSyDe.Shallow.PolyArith",
        "name": "subPolyCoef",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "ForSyDe",
        "partial": "Poly Coef",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides two data types, that can be used to model queue\n structures, such as FIFOs. There is a data type for an queue of\n infinite size \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e and one for finite size \u003ccode\u003e\u003ca\u003eFiniteQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-Queue.html",
        "fct-type": "module",
        "title": "Queue"
      },
      "index": {
        "description": "This provides two data types that can be used to model queue structures such as FIFOs There is data type for an queue of infinite size Queue and one for finite size FiniteQueue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#t:FiniteQueue",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eFiniteQueue\u003c/a\u003e\u003c/code\u003e has an additional parameter, that determines the size of the queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#FiniteQueue",
        "fct-type": "data",
        "title": "FiniteQueue"
      },
      "index": {
        "description": "The data type FiniteQueue has an additional parameter that determines the size of the queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "FiniteQueue",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Finite Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#t:Queue",
      "description": {
        "fct-descr": "\u003cp\u003eA queue is modeled as a list. The data type \u003ccode\u003e\u003ca\u003eQueue\u003c/a\u003e\u003c/code\u003e modelles an queue of infinite size.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#Queue",
        "fct-type": "data",
        "title": "Queue"
      },
      "index": {
        "description": "queue is modeled as list The data type Queue modelles an queue of infinite size",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "Queue",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:FQ",
      "description": {
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "FQ Int [a]",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#FiniteQueue",
        "fct-type": "function",
        "title": "FQ"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "FQ",
        "normalized": "FQ Int[a]",
        "package": "ForSyDe",
        "partial": "FQ",
        "signature": "FQ Int[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:Q",
      "description": {
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "Q [a]",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#Queue",
        "fct-type": "function",
        "title": "Q"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "Q",
        "normalized": "Q[a]",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Q[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:finiteQueue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efiniteQueue\u003c/a\u003e\u003c/code\u003e transforms a list into an infinite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e [a] -\u003e FiniteQueue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#finiteQueue",
        "fct-type": "function",
        "title": "finiteQueue"
      },
      "index": {
        "description": "finiteQueue transforms list into an infinite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "finiteQueue",
        "normalized": "Int-\u003e[a]-\u003eFiniteQueue a",
        "package": "ForSyDe",
        "partial": "Queue",
        "signature": "Int-\u003e[a]-\u003eFiniteQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:popFQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epopFQ\u003c/a\u003e\u003c/code\u003e pops one element from a finite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "FiniteQueue a -\u003e (FiniteQueue a, AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#popFQ",
        "fct-type": "function",
        "title": "popFQ"
      },
      "index": {
        "description": "popFQ pops one element from finite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "popFQ",
        "normalized": "FiniteQueue a-\u003e(FiniteQueue a,AbstExt a)",
        "package": "ForSyDe",
        "partial": "FQ",
        "signature": "FiniteQueue a-\u003e(FiniteQueue a,AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:popQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epopQ\u003c/a\u003e\u003c/code\u003e pops one element from an infinite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "Queue a -\u003e (Queue a, AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#popQ",
        "fct-type": "function",
        "title": "popQ"
      },
      "index": {
        "description": "popQ pops one element from an infinite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "popQ",
        "normalized": "Queue a-\u003e(Queue a,AbstExt a)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Queue a-\u003e(Queue a,AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushFQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushFQ\u003c/a\u003e\u003c/code\u003e pushes one element into a finite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "FiniteQueue a -\u003e a -\u003e FiniteQueue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#pushFQ",
        "fct-type": "function",
        "title": "pushFQ"
      },
      "index": {
        "description": "pushFQ pushes one element into finite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "pushFQ",
        "normalized": "FiniteQueue a-\u003ea-\u003eFiniteQueue a",
        "package": "ForSyDe",
        "partial": "FQ",
        "signature": "FiniteQueue a-\u003ea-\u003eFiniteQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushListFQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushListFQ\u003c/a\u003e\u003c/code\u003e pushes a list of elements into a finite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "FiniteQueue a -\u003e [a] -\u003e FiniteQueue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#pushListFQ",
        "fct-type": "function",
        "title": "pushListFQ"
      },
      "index": {
        "description": "pushListFQ pushes list of elements into finite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "pushListFQ",
        "normalized": "FiniteQueue a-\u003e[a]-\u003eFiniteQueue a",
        "package": "ForSyDe",
        "partial": "List FQ",
        "signature": "FiniteQueue a-\u003e[a]-\u003eFiniteQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushListQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushListQ\u003c/a\u003e\u003c/code\u003e pushes a list of elements into an infinite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "Queue a -\u003e [a] -\u003e Queue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#pushListQ",
        "fct-type": "function",
        "title": "pushListQ"
      },
      "index": {
        "description": "pushListQ pushes list of elements into an infinite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "pushListQ",
        "normalized": "Queue a-\u003e[a]-\u003eQueue a",
        "package": "ForSyDe",
        "partial": "List",
        "signature": "Queue a-\u003e[a]-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:pushQ",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epushQ\u003c/a\u003e\u003c/code\u003e pushes one element into an infinite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "Queue a -\u003e a -\u003e Queue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#pushQ",
        "fct-type": "function",
        "title": "pushQ"
      },
      "index": {
        "description": "pushQ pushes one element into an infinite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "pushQ",
        "normalized": "Queue a-\u003ea-\u003eQueue a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Queue a-\u003ea-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Queue.html#v:queue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equeue\u003c/a\u003e\u003c/code\u003e transforms a list into an infinite queue.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Queue",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e Queue a",
        "fct-source": "src/ForSyDe-Shallow-Queue.html#queue",
        "fct-type": "function",
        "title": "queue"
      },
      "index": {
        "description": "queue transforms list into an infinite queue",
        "hierarchy": "ForSyDe Shallow Queue",
        "module": "ForSyDe.Shallow.Queue",
        "name": "queue",
        "normalized": "[a]-\u003eQueue a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "[a]-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the shallow-embedded \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e datatype and\n functions operating on it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-Signal.html",
        "fct-type": "module",
        "title": "Signal"
      },
      "index": {
        "description": "This module defines the shallow-embedded Signal datatype and functions operating on it",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#t:Signal",
      "description": {
        "fct-descr": "\u003cp\u003eA signal is defined as a list of events. An event has a tag and a value. The tag of an event is defined by the position in the list. A signal is defined as an instance of the classes \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e. The signal 1 :- 2 :- NullS is represented as {1,2}.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#Signal",
        "fct-type": "data",
        "title": "Signal"
      },
      "index": {
        "description": "signal is defined as list of events An event has tag and value The tag of an event is defined by the position in the list signal is defined as an instance of the classes Read and Show The signal NullS is represented as",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-33--45-",
      "description": {
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Int -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#%21-",
        "fct-type": "function",
        "title": "(!-)"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "(!-) !-",
        "normalized": "Signal a-\u003eInt-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-43--45--43-",
      "description": {
        "fct-descr": "\u003cp\u003eThe operator \u003ccode\u003e\u003ca\u003e+-+\u003c/a\u003e\u003c/code\u003e concatinates two signals into one signal.  \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#%2B-%2B",
        "fct-type": "function",
        "title": "(+-+)"
      },
      "index": {
        "description": "The operator concatinates two signals into one signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "(+-+) +-+",
        "normalized": "Signal a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:-45-:",
      "description": {
        "fct-descr": "\u003cp\u003eThe operator \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e adds at an element to a signal at the tail.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#-%3A",
        "fct-type": "function",
        "title": "(-:)"
      },
      "index": {
        "description": "The operator adds at an element to signal at the tail",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "(-:) -:",
        "normalized": "Signal a-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v::-45-",
      "description": {
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "a :- (Signal a)",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#Signal",
        "fct-type": "function",
        "title": ":-"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": ":-",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:NullS",
      "description": {
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "NullS",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#Signal",
        "fct-type": "function",
        "title": "NullS"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "NullS",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:atS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eatS\u003c/a\u003e\u003c/code\u003e  returns the n-th event in a signal. The numbering of events in a signal starts with 0. There is also an operator version of this function, '(!-)'.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal a -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#atS",
        "fct-type": "function",
        "title": "atS"
      },
      "index": {
        "description": "The function atS returns the n-th event in signal The numbering of events in signal starts with There is also an operator version of this function",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "atS",
        "normalized": "Int-\u003eSignal a-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eSignal a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:copyS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecopyS\u003c/a\u003e\u003c/code\u003e creates a signal with n values \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e b -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#copyS",
        "fct-type": "function",
        "title": "copyS"
      },
      "index": {
        "description": "The function copyS creates signal with values",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "copyS",
        "normalized": "a-\u003eb-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eb-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:dropS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edropS\u003c/a\u003e\u003c/code\u003e drops the first $n$ values from a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#dropS",
        "fct-type": "function",
        "title": "dropS"
      },
      "index": {
        "description": "The function dropS drops the first values from signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "dropS",
        "normalized": "Int-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:fanS",
      "description": {
        "fct-descr": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003efanS\u003c/a\u003e\u003c/code\u003e takes two processes \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e and and generates a process network, where a signal is split and processed by the processes \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "(Signal a -\u003e Signal b) -\u003e (Signal a -\u003e Signal c) -\u003e Signal a -\u003e (Signal b, Signal c)",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#fanS",
        "fct-type": "function",
        "title": "fanS"
      },
      "index": {
        "description": "The combinator fanS takes two processes p1 and p2 and and generates process network where signal is split and processed by the processes p1 and p2",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "fanS",
        "normalized": "(Signal a-\u003eSignal b)-\u003e(Signal a-\u003eSignal c)-\u003eSignal a-\u003e(Signal b,Signal c)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(Signal a-\u003eSignal b)-\u003e(Signal a-\u003eSignal c)-\u003eSignal a-\u003e(Signal b,Signal c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:fromSignal",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromSignal\u003c/a\u003e\u003c/code\u003e converts a signal into a list.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e [a]",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#fromSignal",
        "fct-type": "function",
        "title": "fromSignal"
      },
      "index": {
        "description": "The function fromSignal converts signal into list",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "fromSignal",
        "normalized": "Signal a-\u003e[a]",
        "package": "ForSyDe",
        "partial": "Signal",
        "signature": "Signal a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:headS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eheadS\u003c/a\u003e\u003c/code\u003e gives the first value - the head -  of a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#headS",
        "fct-type": "function",
        "title": "headS"
      },
      "index": {
        "description": "The function headS gives the first value the head of signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "headS",
        "normalized": "Signal a-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:infiniteS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003einfiniteS\u003c/a\u003e\u003c/code\u003e creates an infinite signal. The first argument \u003ccode\u003ef\u003c/code\u003e is a function that is applied on the current value. The second argument \u003ccode\u003ex\u003c/code\u003e gives the first value of the signal.\n\u003c/p\u003e\u003cpre\u003e Signal\u003e takeS 5 (infiniteS (*3) 1)\n {1,3,9,27,81} :: Signal Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#infiniteS",
        "fct-type": "function",
        "title": "infiniteS"
      },
      "index": {
        "description": "The function infiniteS creates an infinite signal The first argument is function that is applied on the current value The second argument gives the first value of the signal Signal takeS infiniteS Signal Integer",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "infiniteS",
        "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:lengthS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elengthS\u003c/a\u003e\u003c/code\u003e returns the length of a \u003ccode\u003efinite\u003c/code\u003e signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal b -\u003e Int",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#lengthS",
        "fct-type": "function",
        "title": "lengthS"
      },
      "index": {
        "description": "The function lengthS returns the length of finite signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "lengthS",
        "normalized": "Signal a-\u003eInt",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:nullS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enullS\u003c/a\u003e\u003c/code\u003e checks if a signal is empty.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#nullS",
        "fct-type": "function",
        "title": "nullS"
      },
      "index": {
        "description": "The function nullS checks if signal is empty",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "nullS",
        "normalized": "Signal a-\u003eBool",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:readS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereadS\u003c/a\u003e\u003c/code\u003e transforms a formatted string into a signal.\n\u003c/p\u003e\u003cpre\u003e\n Signal\u003e readS \u003ca\u003e1n2n3n4n5n\u003c/a\u003e :: Signal Int\n {1,2,3,4,5} :: Signal Int\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "[Char] -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#readS",
        "fct-type": "function",
        "title": "readS"
      },
      "index": {
        "description": "The function readS transforms formatted string into signal Signal readS n2n3n4n5n Signal Int Signal Int",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "readS",
        "normalized": "[Char]-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "[Char]-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:selectS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselectS\u003c/a\u003e\u003c/code\u003e takes three parameters, an offset, a stepsize and a signal and returns some elements of the signal such as in the following example:\n\u003c/p\u003e\u003cpre\u003e\n Signal\u003e selectS 2 3 (signal[1,2,3,4,5,6,7,8,9,10])\n {3,6,9} :: Signal Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#selectS",
        "fct-type": "function",
        "title": "selectS"
      },
      "index": {
        "description": "The function selectS takes three parameters an offset stepsize and signal and returns some elements of the signal such as in the following example Signal selectS signal Signal Integer",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "selectS",
        "normalized": "Int-\u003eInt-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003esignal\u003c/a\u003e\u003c/code\u003e converts a list into a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "The function signal converts list into signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "signal",
        "normalized": "[a]-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "[a]-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:tailS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etailS\u003c/a\u003e\u003c/code\u003e gives the rest of the signal - the tail.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#tailS",
        "fct-type": "function",
        "title": "tailS"
      },
      "index": {
        "description": "The function tailS gives the rest of the signal the tail",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "tailS",
        "normalized": "Signal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:takeS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etakeS\u003c/a\u003e\u003c/code\u003e returns the first n values of a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#takeS",
        "fct-type": "function",
        "title": "takeS"
      },
      "index": {
        "description": "The function takeS returns the first values of signal",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "takeS",
        "normalized": "Int-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:unitS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunitS\u003c/a\u003e\u003c/code\u003e creates a signal with one value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#unitS",
        "fct-type": "function",
        "title": "unitS"
      },
      "index": {
        "description": "The function unitS creates signal with one value",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "unitS",
        "normalized": "a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Signal.html#v:writeS",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ewriteS\u003c/a\u003e\u003c/code\u003e transforms a signal into a string of the following format:\n\u003c/p\u003e\u003cpre\u003e \n Signal\u003e writeS (signal[1,2,3,4,5])\n \u003ca\u003e1n2n3n4n5n\u003c/a\u003e :: [Char]\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e [Char]",
        "fct-source": "src/ForSyDe-Shallow-Signal.html#writeS",
        "fct-type": "function",
        "title": "writeS"
      },
      "index": {
        "description": "The function writeS transforms signal into string of the following format Signal writeS signal n2n3n4n5n Char",
        "hierarchy": "ForSyDe Shallow Signal",
        "module": "ForSyDe.Shallow.Signal",
        "name": "writeS",
        "normalized": "Signal a-\u003e[Char]",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal a-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe stochastic library provides a few stochastic skeletons, which are\n relatives to the skeletons of the synchronous library. These skeletons are\n based on two elementary functions, \u003ccode\u003e\u003ca\u003esigmaUn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e\n which provide stochastic signals. The background and motivation for this\n approach is described in the paper \n\u003c/p\u003e\u003cp\u003eAxel Jantsch, Ingo Sander, and Wenbiao Wu,\n \"The usage of stochastic processes in embedded system specifications\",\n In \u003cem\u003eProceedings of the Ninth International Symposium on Hardware and Software Codesign\u003c/em\u003e, \n April 2001 (\u003ca\u003ehttp://web.it.kth.se/~axel/papers/2001/codes-2001.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eUnfortunately, not all of the suggested skeletons are\n implemented. In particular, consolidation-based process\n constructors and all constructors for the untimed and the discrete\n timed MoCs are missing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-StochasticLib.html",
        "fct-type": "module",
        "title": "StochasticLib"
      },
      "index": {
        "description": "The stochastic library provides few stochastic skeletons which are relatives to the skeletons of the synchronous library These skeletons are based on two elementary functions sigmaUn and sigmaGe which provide stochastic signals The background and motivation for this approach is described in the paper Axel Jantsch Ingo Sander and Wenbiao Wu The usage of stochastic processes in embedded system specifications In Proceedings of the Ninth International Symposium on Hardware and Software Codesign April http web.it.kth.se axel papers codes-2001.pdf Unfortunately not all of the suggested skeletons are implemented In particular consolidation-based process constructors and all constructors for the untimed and the discrete timed MoCs are missing",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "StochasticLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Stochastic Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMapSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe skeleton \u003ccode\u003e\u003ca\u003eselMapSY\u003c/a\u003e\u003c/code\u003e is a stochastic variant of\n \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e. It has an internal stochastic process and selects one\n out of two combinatorial functions depending on the output of the\n stochastic process.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e (a -\u003e b)-\u003e (a -\u003e b)-\u003e Signal a-\u003e Signal b",
        "fct-type": "function",
        "title": "selMapSY"
      },
      "index": {
        "description": "The skeleton selMapSY is stochastic variant of mapSY It has an internal stochastic process and selects one out of two combinatorial functions depending on the output of the stochastic process",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "selMapSY",
        "normalized": "Int-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "Map SY",
        "signature": "Int-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMealySY",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eselMealySY\u003c/a\u003e\u003c/code\u003e is the stochastic variant of mealySY. Both the \n   next-state and the output function is randomly selected based on a \n   uniform distribution.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e c)-\u003e (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "selMealySY"
      },
      "index": {
        "description": "selMealySY is the stochastic variant of mealySY Both the next-state and the output function is randomly selected based on uniform distribution",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "selMealySY",
        "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "Mealy SY",
        "signature": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selMooreSY",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eselMooreSY\u003c/a\u003e\u003c/code\u003e is the stochastic variant of mooreSY. Both the \n   next-state and the output function is randomly selected based on a \n   uniform distribution.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e c)-\u003e (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "selMooreSY"
      },
      "index": {
        "description": "selMooreSY is the stochastic variant of mooreSY Both the next-state and the output function is randomly selected based on uniform distribution",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "selMooreSY",
        "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "Moore SY",
        "signature": "Int-\u003eInt-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:selScanlSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe skeleton \u003ccode\u003e\u003ca\u003eselScanlSY\u003c/a\u003e\u003c/code\u003e is a stochastic variant of \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e (a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
        "fct-type": "function",
        "title": "selScanlSY"
      },
      "index": {
        "description": "The skeleton selScanlSY is stochastic variant of scanlSY",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "selScanlSY",
        "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "Scanl SY",
        "signature": "Int-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:sigmaGe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e is a more general stochastic process. The first argument is a\n function f which describes the distribution. For each value v in the\n given range (r1,r2), f(v) is the probability that v is generated.  \n\u003c/p\u003e\u003cp\u003eNote, that the user has to make sure that sum(f(v))=1 for v in (r1,r2).\n\u003c/p\u003e\u003cp\u003eFor illustration consider the following example.\n\u003c/p\u003e\u003cpre\u003e pdist :: Float -\u003e Float\n pdist d = 1\\/\\(2**d\\)\n pdistsum 1 = pdist 1\n pdistsum d = \\(pdist d\\) + \\(pdistsum \\(d-1\\)\\)\n\u003c/pre\u003e\u003cpre\u003e pdistnorm :: Float -\u003e Float -\u003e Float\n pdistnorm dmax d = 1\\/((pdistsum dmax) * (2**d))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003epdistnorm dmax d\u003c/code\u003e gives the probability of a value \u003c= d;\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epdistnorm dmax dmax\u003c/code\u003e is always 1.0\n\u003c/p\u003e\u003cp\u003eHence, using pdistnorm as a function in \u003ccode\u003e\u003ca\u003esigmaGe\u003c/a\u003e\u003c/code\u003e gives an exponantial\n distribution for values in the range [0, dmax].\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(Float -\u003e Float)-\u003e Int-\u003e (Int, Int)-\u003e Signal Int",
        "fct-type": "function",
        "title": "sigmaGe"
      },
      "index": {
        "description": "sigmaGe is more general stochastic process The first argument is function which describes the distribution For each value in the given range r1 r2 is the probability that is generated Note that the user has to make sure that sum for in r1 r2 For illustration consider the following example pdist Float Float pdist pdistsum pdist pdistsum pdist pdistsum d-1 pdistnorm Float Float Float pdistnorm dmax pdistsum dmax pdistnorm dmax gives the probability of value pdistnorm dmax dmax is always Hence using pdistnorm as function in sigmaGe gives an exponantial distribution for values in the range dmax",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "sigmaGe",
        "normalized": "(Float-\u003eFloat)-\u003eInt-\u003e(Int,Int)-\u003eSignal Int",
        "package": "ForSyDe",
        "partial": "Ge",
        "signature": "(Float-\u003eFloat)-\u003eInt-\u003e(Int,Int)-\u003eSignal Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-StochasticLib.html#v:sigmaUn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esigmaUn\u003c/a\u003e\u003c/code\u003e generates a signal list of uniformly distributed Int within\n the given range and with a given seed. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.StochasticLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int-\u003e (Int, Int)-\u003e Signal Int",
        "fct-type": "function",
        "title": "sigmaUn"
      },
      "index": {
        "description": "sigmaUn generates signal list of uniformly distributed Int within the given range and with given seed",
        "hierarchy": "ForSyDe Shallow StochasticLib",
        "module": "ForSyDe.Shallow.StochasticLib",
        "name": "sigmaUn",
        "normalized": "Int-\u003e(Int,Int)-\u003eSignal Int",
        "package": "ForSyDe",
        "partial": "Un",
        "signature": "Int-\u003e(Int,Int)-\u003eSignal Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe synchronuous library defines process constructors and processes\n for the synchronous computational model. A process constructor is a\n higher order function which together with combinational function(s)\n and values as arguments constructs a process.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html",
        "fct-type": "module",
        "title": "SynchronousLib"
      },
      "index": {
        "description": "The synchronuous library defines process constructors and processes for the synchronous computational model process constructor is higher order function which together with combinational function and values as arguments constructs process",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "SynchronousLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Synchronous Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:delaySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaySY\u003c/a\u003e\u003c/code\u003e delays the signal one event cycle \n   by introducing an initial value at the beginning of the output signal. \n   Note, that this implies that there is one event (the first) at the \n   output signal that has no corresponding event at the input signal. \n   One could argue that input and output signals are not fully synchronized,\n   even though all input events are synchronous with a corresponding output \n   event. However, this is necessary to initialize feed-back loops.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "delaySY"
      },
      "index": {
        "description": "The process constructor delaySY delays the signal one event cycle by introducing an initial value at the beginning of the output signal Note that this implies that there is one event the first at the output signal that has no corresponding event at the input signal One could argue that input and output signals are not fully synchronized even though all input events are synchronous with corresponding output event However this is necessary to initialize feed-back loops",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "delaySY",
        "normalized": "a-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "a-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:delaynSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003edelaynSY\u003c/a\u003e\u003c/code\u003e delays the signal n events by introducing n identical default values.   \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e Int-\u003e Signal a-\u003e Signal a",
        "fct-type": "function",
        "title": "delaynSY"
      },
      "index": {
        "description": "The process constructor delaynSY delays the signal events by introducing identical default values",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "delaynSY",
        "normalized": "a-\u003eInt-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "a-\u003eInt-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:fillSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efillSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal with present values by replacing absent values with a given value. The output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e Signal (AbstExt a)-\u003e Signal a",
        "fct-type": "function",
        "title": "fillSY"
      },
      "index": {
        "description": "The process constructor fillSY creates process that fills signal with present values by replacing absent values with given value The output signal is not any more of the type AbstExt",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "fillSY",
        "normalized": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "a-\u003eSignal(AbstExt a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:filterSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003efilterSY\u003c/a\u003e\u003c/code\u003e discards the values who do not fulfill a predicate given by a predicate function and replaces them with absent events.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e Bool) -\u003e Signal a -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#filterSY",
        "fct-type": "function",
        "title": "filterSY"
      },
      "index": {
        "description": "The process constructor filterSY discards the values who do not fulfill predicate given by predicate function and replaces them with absent events",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "filterSY",
        "normalized": "(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eBool)-\u003eSignal a-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:fstSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efstSY\u003c/a\u003e\u003c/code\u003e selects always the first value from a signal of pairs.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b) -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#fstSY",
        "fct-type": "function",
        "title": "fstSY"
      },
      "index": {
        "description": "The process fstSY selects always the first value from signal of pairs",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "fstSY",
        "normalized": "Signal(a,b)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:holdSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003eholdSY\u003c/a\u003e\u003c/code\u003e creates a process that \u003ccode\u003efills\u003c/code\u003e a signal with values by replacing absent values by the preceding present value. Only in cases, where no preceding value exists, the absent value is replaced by a default value. The output signal is not any more of the type \u003ccode\u003e\u003ca\u003eAbstExt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a-\u003e Signal (AbstExt a)-\u003e Signal a",
        "fct-type": "function",
        "title": "holdSY"
      },
      "index": {
        "description": "The process constructor holdSY creates process that fills signal with values by replacing absent values by the preceding present value Only in cases where no preceding value exists the absent value is replaced by default value The output signal is not any more of the type AbstExt",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "holdSY",
        "normalized": "a-\u003eSignal(AbstExt a)-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "a-\u003eSignal(AbstExt a)-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mapSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapSY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with one input signal and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#mapSY",
        "fct-type": "function",
        "title": "mapSY"
      },
      "index": {
        "description": "The process constructor mapSY takes combinational function as argument and returns process with one input signal and one output signal",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mapSY",
        "normalized": "(a-\u003eb)-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb)-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mapxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emapxSY\u003c/a\u003e\u003c/code\u003e creates a process network that maps a function onto all signals in a vector of signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e Vector (Signal a) -\u003e Vector (Signal b)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#mapxSY",
        "fct-type": "function",
        "title": "mapxSY"
      },
      "index": {
        "description": "The process constructor mapxSY creates process network that maps function onto all signals in vector of signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mapxSY",
        "normalized": "(a-\u003eb)-\u003eVector(Signal a)-\u003eVector(Signal b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb)-\u003eVector(Signal a)-\u003eVector(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealy2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#mealy2SY",
        "fct-type": "function",
        "title": "mealy2SY"
      },
      "index": {
        "description": "The process constructor mealy2SY behaves like mealySY but has two input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mealy2SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealy3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealy3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#mealy3SY",
        "fct-type": "function",
        "title": "mealy3SY"
      },
      "index": {
        "description": "The process constructor mealy3SY behaves like mealySY but has three input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mealy3SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mealySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003emelaySY\u003c/code\u003e is used to model state machines of \"Mealy\" type, where the output only depends on the current state and the input values. The process constructor is based on the process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that the output operates on the current state and not on the next state. The process constructors takes a function to calculate the next state, another function to calculate the output and a value for the initial state. \n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e depends only on the state, but not on the input values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e a)-\u003e (a -\u003e b -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "mealySY"
      },
      "index": {
        "description": "The process constructor melaySY is used to model state machines of Mealy type where the output only depends on the current state and the input values The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mooreSY depends only on the state but not on the input values",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mealySY",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:moore2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e (a -\u003e d) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#moore2SY",
        "fct-type": "function",
        "title": "moore2SY"
      },
      "index": {
        "description": "The process constructor moore2SY behaves like mooreSY but has two input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "moore2SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003e(a-\u003ed)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:moore3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emoore3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e (a -\u003e e) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#moore3SY",
        "fct-type": "function",
        "title": "moore3SY"
      },
      "index": {
        "description": "The process constructor moore3SY behaves like mooreSY but has three input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "moore3SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003e(a-\u003ee)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:mooreSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreSY\u003c/a\u003e\u003c/code\u003e is used to model state machines of \"Moore\" type, where the output only depends on the current state. The process constructor is based on the process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, since it is natural for state machines in hardware, that the output operates on the current state and not on the next state. The process constructors takes a function to calculate the next state, another function to calculate the output and a value for the initial state. \n\u003c/p\u003e\u003cp\u003eIn contrast the output of a process created by the process constructor \u003ccode\u003e\u003ca\u003emealySY\u003c/a\u003e\u003c/code\u003e depends not only on the state, but also on the input values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e a)-\u003e (a -\u003e c)-\u003e a-\u003e Signal b-\u003e Signal c",
        "fct-type": "function",
        "title": "mooreSY"
      },
      "index": {
        "description": "The process constructor mooreSY is used to model state machines of Moore type where the output only depends on the current state The process constructor is based on the process constructor scanldSY since it is natural for state machines in hardware that the output operates on the current state and not on the next state The process constructors takes function to calculate the next state another function to calculate the output and value for the initial state In contrast the output of process created by the process constructor mealySY depends not only on the state but also on the input values",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "mooreSY",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanl2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#scanl2SY",
        "fct-type": "function",
        "title": "scanl2SY"
      },
      "index": {
        "description": "The process constructor scanl2SY behaves like scanlSY but has two input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanl2SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanl3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanl3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#scanl3SY",
        "fct-type": "function",
        "title": "scanl3SY"
      },
      "index": {
        "description": "The process constructor scanl3SY behaves like scanlSY but has three input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanl3SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanlSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state machine process without output decoder. It takes an initial value and a function for the next state decoder. The process constructor behaves similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e and has the value of the new state as its output value as illustrated by the following example.  \n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e scanldSY (+) 0 (signal [1,2,3,4])\n\u003c/pre\u003e\u003cpre\u003e {1,3,6,10} :: Signal Integer\n\u003c/pre\u003e\u003cp\u003eThis is in contrast to the function \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, which has its current state as its output value. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
        "fct-type": "function",
        "title": "scanlSY"
      },
      "index": {
        "description": "The process constructor scanlSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY and has the value of the new state as its output value as illustrated by the following example SynchronousLib scanldSY signal Signal Integer This is in contrast to the function scanldSY which has its current state as its output value",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanlSY",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanld2SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld2SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has two input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#scanld2SY",
        "fct-type": "function",
        "title": "scanld2SY"
      },
      "index": {
        "description": "The process constructor scanld2SY behaves like scanldSY but has two input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanld2SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanld3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanld3SY\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e, but has three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#scanld3SY",
        "fct-type": "function",
        "title": "scanld3SY"
      },
      "index": {
        "description": "The process constructor scanld3SY behaves like scanldSY but has three input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanld3SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:scanldSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003escanldSY\u003c/a\u003e\u003c/code\u003e is used to construct a finite state machine process without output decoder. It takes an initial value and a function for the next state decoder. The process constructor behaves similar to the Haskell prelude function \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e. In contrast to the process constructor \u003ccode\u003e\u003ca\u003escanlSY\u003c/a\u003e\u003c/code\u003e here the output value is the current state and not the one of the next state.\n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e scanlSY (+) 0 (signal [1,2,3,4])\n\u003c/pre\u003e\u003cpre\u003e {0,1,3,6} :: Signal Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Signal b-\u003e Signal a",
        "fct-type": "function",
        "title": "scanldSY"
      },
      "index": {
        "description": "The process constructor scanldSY is used to construct finite state machine process without output decoder It takes an initial value and function for the next state decoder The process constructor behaves similar to the Haskell prelude function scanlSY In contrast to the process constructor scanlSY here the output value is the current state and not the one of the next state SynchronousLib scanlSY signal Signal Integer",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "scanldSY",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:sndSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esndSY\u003c/a\u003e\u003c/code\u003e selects always the second value from a signal of pairs.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b) -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#sndSY",
        "fct-type": "function",
        "title": "sndSY"
      },
      "index": {
        "description": "The process sndSY selects always the second value from signal of pairs",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "sndSY",
        "normalized": "Signal(a,b)-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b)-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:sourceSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003esourceSY\u003c/a\u003e\u003c/code\u003e takes a function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state. The state also serves as output value. \n\u003c/p\u003e\u003cp\u003eThe process that has the infinite signal of natural numbers as output is constructed by \n\u003c/p\u003e\u003cpre\u003e SynchronousLib\u003e takeS 5 (sourceSY (+1) 0)\n\u003c/pre\u003e\u003cpre\u003e {0,1,2,3,4} :: Signal Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#sourceSY",
        "fct-type": "function",
        "title": "sourceSY"
      },
      "index": {
        "description": "The process sourceSY takes function and an initial state and generates an infinite signal starting with the initial state as first output followed by the recursive application of the function on the current state The state also serves as output value The process that has the infinite signal of natural numbers as output is constructed by SynchronousLib takeS sourceSY Signal Integer",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "sourceSY",
        "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "(a-\u003ea)-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has three output signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b, c) -\u003e (Signal a, Signal b, Signal c)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip3SY",
        "fct-type": "function",
        "title": "unzip3SY"
      },
      "index": {
        "description": "The process unzip3SY works as unzipSY but has three output signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzip3SY",
        "normalized": "Signal(a,b,c)-\u003e(Signal a,Signal b,Signal c)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b,c)-\u003e(Signal a,Signal b,Signal c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b, c, d) -\u003e (Signal a, Signal b, Signal c, Signal d)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip4SY",
        "fct-type": "function",
        "title": "unzip4SY"
      },
      "index": {
        "description": "The process unzip4SY works as unzipSY but has four output signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzip4SY",
        "normalized": "Signal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b,c,d)-\u003e(Signal a,Signal b,Signal c,Signal d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip5SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b, c, d, e) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip5SY",
        "fct-type": "function",
        "title": "unzip5SY"
      },
      "index": {
        "description": "The process unzip5SY works as unzipSY but has four output signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzip5SY",
        "normalized": "Signal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b,c,d,e)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzip6SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e, but has four output signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b, c, d, e, f) -\u003e (Signal a, Signal b, Signal c, Signal d, Signal e, Signal f)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzip6SY",
        "fct-type": "function",
        "title": "unzip6SY"
      },
      "index": {
        "description": "The process unzip6SY works as unzipSY but has four output signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzip6SY",
        "normalized": "Signal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b,c,d,e,f)-\u003e(Signal a,Signal b,Signal c,Signal d,Signal e,Signal f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzipSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a signal of tuples into two signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (a, b) -\u003e (Signal a, Signal b)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzipSY",
        "fct-type": "function",
        "title": "unzipSY"
      },
      "index": {
        "description": "The process unzipSY unzips signal of tuples into two signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzipSY",
        "normalized": "Signal(a,b)-\u003e(Signal a,Signal b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(a,b)-\u003e(Signal a,Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:unzipxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003eunzipxSY\u003c/a\u003e\u003c/code\u003e \"unzips\" a vector of signals into a signal of vectors.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (Vector a) -\u003e Vector (Signal a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#unzipxSY",
        "fct-type": "function",
        "title": "unzipxSY"
      },
      "index": {
        "description": "The process unzipxSY unzips vector of signals into signal of vectors",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "unzipxSY",
        "normalized": "Signal(Vector a)-\u003eVector(Signal a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(Vector a)-\u003eVector(Signal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:whenSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ewhenSY\u003c/a\u003e\u003c/code\u003e creates a process that synchronizes a signal of absent extended values with another signal of absent extended values. The output signal has the value of the first signal whenever an event has a present value and \u003ccode\u003e\u003ca\u003eAbst\u003c/a\u003e\u003c/code\u003e when the event has an absent value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (AbstExt a) -\u003e Signal (AbstExt b) -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#whenSY",
        "fct-type": "function",
        "title": "whenSY"
      },
      "index": {
        "description": "The process constructor whenSY creates process that synchronizes signal of absent extended values with another signal of absent extended values The output signal has the value of the first signal whenever an event has present value and Abst when the event has an absent value",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "whenSY",
        "normalized": "Signal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(AbstExt a)-\u003eSignal(AbstExt b)-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip3SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes three input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal (a, b, c)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zip3SY",
        "fct-type": "function",
        "title": "zip3SY"
      },
      "index": {
        "description": "The process zip3SY works as zipSY but takes three input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zip3SY",
        "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip4SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal (a, b, c, d)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zip4SY",
        "fct-type": "function",
        "title": "zip4SY"
      },
      "index": {
        "description": "The process zip4SY works as zipSY but takes four input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zip4SY",
        "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip5SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip5SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal (a, b, c, d, e)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zip5SY",
        "fct-type": "function",
        "title": "zip5SY"
      },
      "index": {
        "description": "The process zip5SY works as zipSY but takes four input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zip5SY",
        "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal(a,b,c,d,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zip6SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezip6SY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e, but takes four input signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e -\u003e Signal f -\u003e Signal (a, b, c, d, e, f)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zip6SY",
        "fct-type": "function",
        "title": "zip6SY"
      },
      "index": {
        "description": "The process zip6SY works as zipSY but takes four input signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zip6SY",
        "normalized": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e-\u003eSignal f-\u003eSignal(a,b,c,d,e,f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipSY\u003c/a\u003e\u003c/code\u003e \"zips\" two incoming signals into one signal of tuples.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal a -\u003e Signal b -\u003e Signal (a, b)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipSY",
        "fct-type": "function",
        "title": "zipSY"
      },
      "index": {
        "description": "The process zipSY zips two incoming signals into one signal of tuples",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipSY",
        "normalized": "Signal a-\u003eSignal b-\u003eSignal(a,b)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal a-\u003eSignal b-\u003eSignal(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWith3SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith3SY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with three input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWith3SY",
        "fct-type": "function",
        "title": "zipWith3SY"
      },
      "index": {
        "description": "The process constructor zipWith3SY takes combinational function as argument and returns process with three input signals and one output signal",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipWith3SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWith4SY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWith4SY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with four input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWith4SY",
        "fct-type": "function",
        "title": "zipWith4SY"
      },
      "index": {
        "description": "The process constructor zipWith4SY takes combinational function as argument and returns process with four input signals and one output signal",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipWith4SY",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWithSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e takes a combinational function as argument and returns a process with two input signals and one output signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWithSY",
        "fct-type": "function",
        "title": "zipWithSY"
      },
      "index": {
        "description": "The process constructor zipWithSY takes combinational function as argument and returns process with two input signals and one output signal",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipWithSY",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "With SY",
        "signature": "(a-\u003eb-\u003ec)-\u003eSignal a-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipWithxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003ezipWithxSY\u003c/a\u003e\u003c/code\u003e works as \u003ccode\u003e\u003ca\u003ezipWithSY\u003c/a\u003e\u003c/code\u003e, but takes a vector of signals as input.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(Vector a -\u003e b) -\u003e Vector (Signal a) -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipWithxSY",
        "fct-type": "function",
        "title": "zipWithxSY"
      },
      "index": {
        "description": "The process constructor zipWithxSY works as zipWithSY but takes vector of signals as input",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipWithxSY",
        "normalized": "(Vector a-\u003eb)-\u003eVector(Signal a)-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "Withx SY",
        "signature": "(Vector a-\u003eb)-\u003eVector(Signal a)-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousLib.html#v:zipxSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ezipxSY\u003c/a\u003e\u003c/code\u003e \"zips\" a signal of vectors into a vector of signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector (Signal a) -\u003e Signal (Vector a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousLib.html#zipxSY",
        "fct-type": "function",
        "title": "zipxSY"
      },
      "index": {
        "description": "The process zipxSY zips signal of vectors into vector of signals",
        "hierarchy": "ForSyDe Shallow SynchronousLib",
        "module": "ForSyDe.Shallow.SynchronousLib",
        "name": "zipxSY",
        "normalized": "Vector(Signal a)-\u003eSignal(Vector a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Vector(Signal a)-\u003eSignal(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe synchronous process library defines processes for the\n synchronous computational model. It is based on the synchronous\n library \u003ca\u003eForSyDe.Shallow.SynchronousLib\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html",
        "fct-type": "module",
        "title": "SynchronousProcessLib"
      },
      "index": {
        "description": "The synchronous process library defines processes for the synchronous computational model It is based on the synchronous library ForSyDe.Shallow.SynchronousLib",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "SynchronousProcessLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Synchronous Process Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:counterSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ecounterSY\u003c/a\u003e\u003c/code\u003e implements a counter, that counts from\n   min to max. The process \u003ccode\u003e\u003ca\u003ecounterSY\u003c/a\u003e\u003c/code\u003e has no input and its output is\n   an infinite signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#counterSY",
        "fct-type": "function",
        "title": "counterSY"
      },
      "index": {
        "description": "The process counterSY implements counter that counts from min to max The process counterSY has no input and its output is an infinite signal",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "counterSY",
        "normalized": "a-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "a-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:fifoDelaySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efifoDelaySY\u003c/a\u003e\u003c/code\u003e implements a synchronous model of a\n FIFO with infinite size. The FIFOs take a list of values at each\n event cycle and output one value. There is a delay of one cycle.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal [a] -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#fifoDelaySY",
        "fct-type": "function",
        "title": "fifoDelaySY"
      },
      "index": {
        "description": "The process fifoDelaySY implements synchronous model of FIFO with infinite size The FIFOs take list of values at each event cycle and output one value There is delay of one cycle",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "fifoDelaySY",
        "normalized": "Signal[a]-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "Delay SY",
        "signature": "Signal[a]-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:finiteFifoDelaySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003efiniteFifoDelaySY\u003c/a\u003e\u003c/code\u003e implements a FIFO with finite\n size. The FIFOs take a list of values at each event cycle and\n output one value. There is a delay of one cycle.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal [a] -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#finiteFifoDelaySY",
        "fct-type": "function",
        "title": "finiteFifoDelaySY"
      },
      "index": {
        "description": "The process finiteFifoDelaySY implements FIFO with finite size The FIFOs take list of values at each event cycle and output one value There is delay of one cycle",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "finiteFifoDelaySY",
        "normalized": "Int-\u003eSignal[a]-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "Fifo Delay SY",
        "signature": "Int-\u003eSignal[a]-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:groupSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupSY\u003c/a\u003e\u003c/code\u003e groups values into a vector of size n,\n which takes n cycles. While the grouping takes place the output\n from this process consists of absent values.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal a -\u003e Signal (AbstExt (Vector a))",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#groupSY",
        "fct-type": "function",
        "title": "groupSY"
      },
      "index": {
        "description": "The function groupSY groups values into vector of size which takes cycles While the grouping takes place the output from this process consists of absent values",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "groupSY",
        "normalized": "Int-\u003eSignal a-\u003eSignal(AbstExt(Vector a))",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Int-\u003eSignal a-\u003eSignal(AbstExt(Vector a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:memorySY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003ememorySY\u003c/a\u003e\u003c/code\u003e implements a synchronous memory. It uses\n access functions of the type 'Read adr' and 'Write adr value'.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Signal (Access a) -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#memorySY",
        "fct-type": "function",
        "title": "memorySY"
      },
      "index": {
        "description": "The process memorySY implements synchronous memory It uses access functions of the type Read adr and Write adr value",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "memorySY",
        "normalized": "Int-\u003eSignal(Access a)-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Int-\u003eSignal(Access a)-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-SynchronousProcessLib.html#v:mergeSY",
      "description": {
        "fct-descr": "\u003cp\u003eThe process \u003ccode\u003e\u003ca\u003emergeSY\u003c/a\u003e\u003c/code\u003e merges two input signals into a single\n signal. The process has an internal buffer in order to prevent loss\n of data. The process is deterministic and outputs events according\n to their time tag. If there are two valid values at on both\n signals. The value of the first signal is output first.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.SynchronousProcessLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (AbstExt a) -\u003e Signal (AbstExt a) -\u003e Signal (AbstExt a)",
        "fct-source": "src/ForSyDe-Shallow-SynchronousProcessLib.html#mergeSY",
        "fct-type": "function",
        "title": "mergeSY"
      },
      "index": {
        "description": "The process mergeSY merges two input signals into single signal The process has an internal buffer in order to prevent loss of data The process is deterministic and outputs events according to their time tag If there are two valid values at on both signals The value of the first signal is output first",
        "hierarchy": "ForSyDe Shallow SynchronousProcessLib",
        "module": "ForSyDe.Shallow.SynchronousProcessLib",
        "name": "mergeSY",
        "normalized": "Signal(AbstExt a)-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt a)",
        "package": "ForSyDe",
        "partial": "SY",
        "signature": "Signal(AbstExt a)-\u003eSignal(AbstExt a)-\u003eSignal(AbstExt a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe untimed library defines process constructors and processes for\n the untimed computational model. A process constructor is a higher\n order function which together with combinational function(s) and\n values as arguments constructs a process.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html",
        "fct-type": "module",
        "title": "UntimedLib"
      },
      "index": {
        "description": "The untimed library defines process constructors and processes for the untimed computational model process constructor is higher order function which together with combinational function and values as arguments constructs process",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "UntimedLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Untimed Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:comb2U",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#comb2U",
        "fct-type": "function",
        "title": "comb2U"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "comb2U",
        "normalized": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:comb2UC",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e (a -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#comb2UC",
        "fct-type": "function",
        "title": "comb2UC"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "comb2UC",
        "normalized": "Int-\u003e(a-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "UC",
        "signature": "Int-\u003e(a-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:combU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#combU",
        "fct-type": "function",
        "title": "combU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "combU",
        "normalized": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:initU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einitU\u003c/a\u003e\u003c/code\u003e is used to initialise a signal. Its first argument is prepended to its second argument, a signal.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e Signal a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#initU",
        "fct-type": "function",
        "title": "initU"
      },
      "index": {
        "description": "initU is used to initialise signal Its first argument is prepended to its second argument signal",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "initU",
        "normalized": "[a]-\u003eSignal a-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "[a]-\u003eSignal a-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mapU",
      "description": {
        "fct-descr": "\u003cp\u003eThe first parameter of \u003ccode\u003e\u003ca\u003emapU\u003c/a\u003e\u003c/code\u003e is a constant integer defining the number of tokens consumed in every evaluation cycle. The second argument is a function on lists of the input type and returning a list of the output type. For instance,\n\u003c/p\u003e\u003cpre\u003e r2 = mapU 1 f\n   where f :: [Int] -\u003e [Int]\n         f [x] = [2*x]\n\u003c/pre\u003e\u003cp\u003edefines a process r2 which consumes one token in each evaluation cycle and multiplies it by two.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e ([a] -\u003e [b]) -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#mapU",
        "fct-type": "function",
        "title": "mapU"
      },
      "index": {
        "description": "The first parameter of mapU is constant integer defining the number of tokens consumed in every evaluation cycle The second argument is function on lists of the input type and returning list of the output type For instance r2 mapU where Int Int defines process r2 which consumes one token in each evaluation cycle and multiplies it by two",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "mapU",
        "normalized": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003e([a]-\u003e[b])-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mealyU",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emealyU\u003c/a\u003e\u003c/code\u003e creates a state machine of Moore type. In addition to the next state function they also have an output encoding function. The output depends directly on the internal state.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e (b -\u003e [a] -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#mealyU",
        "fct-type": "function",
        "title": "mealyU"
      },
      "index": {
        "description": "The process constructor mealyU creates state machine of Moore type In addition to the next state function they also have an output encoding function The output depends directly on the internal state",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "mealyU",
        "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003e(a-\u003e[b]-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003e(b-\u003e[a]-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:mooreU",
      "description": {
        "fct-descr": "\u003cp\u003eThe process constructor \u003ccode\u003e\u003ca\u003emooreU\u003c/a\u003e\u003c/code\u003e creates a state machine of Moore type. In addition to the next state function they also have an output encoding function. The output depends directly on the internal state.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e (b -\u003e [c]) -\u003e b -\u003e Signal a -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#mooreU",
        "fct-type": "function",
        "title": "mooreU"
      },
      "index": {
        "description": "The process constructor mooreU creates state machine of Moore type In addition to the next state function they also have an output encoding function The output depends directly on the internal state",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "mooreU",
        "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003e(a-\u003e[c])-\u003ea-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003e(b-\u003e[c])-\u003eb-\u003eSignal a-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:scanU",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanU\u003c/a\u003e\u003c/code\u003e has an internal state which is visible at the output. The first argument is a function 'gamma' which, given the state returns the number of tokens consumed next. The second argument is the next state function and the third is the initial state.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(b -\u003e Int) -\u003e (b -\u003e [a] -\u003e b) -\u003e b -\u003e Signal a -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#scanU",
        "fct-type": "function",
        "title": "scanU"
      },
      "index": {
        "description": "scanU has an internal state which is visible at the output The first argument is function gamma which given the state returns the number of tokens consumed next The second argument is the next state function and the third is the initial state",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "scanU",
        "normalized": "(a-\u003eInt)-\u003e(a-\u003e[b]-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(b-\u003eInt)-\u003e(b-\u003e[a]-\u003eb)-\u003eb-\u003eSignal a-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:sinkU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e Int) -\u003e (a -\u003e a) -\u003e a -\u003e Signal b -\u003e Signal b",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#sinkU",
        "fct-type": "function",
        "title": "sinkU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "sinkU",
        "normalized": "(a-\u003eInt)-\u003e(a-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eInt)-\u003e(a-\u003ea)-\u003ea-\u003eSignal b-\u003eSignal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:sourceU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Signal a",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#sourceU",
        "fct-type": "function",
        "title": "sourceU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "sourceU",
        "normalized": "(a-\u003ea)-\u003ea-\u003eSignal a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:unzipU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal ([a], [b]) -\u003e (Signal a, Signal b)",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#unzipU",
        "fct-type": "function",
        "title": "unzipU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "unzipU",
        "normalized": "Signal([a],[b])-\u003e(Signal a,Signal b)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal([a],[b])-\u003e(Signal a,Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Signal (Int, Int) -\u003e Signal a -\u003e Signal b -\u003e Signal ([a], [b])",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#zipU",
        "fct-type": "function",
        "title": "zipU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "zipU",
        "normalized": "Signal(Int,Int)-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Signal(Int,Int)-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipUs",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e Signal a -\u003e Signal b -\u003e Signal ([a], [b])",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#zipUs",
        "fct-type": "function",
        "title": "zipUs"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "zipUs",
        "normalized": "Int-\u003eInt-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])",
        "package": "ForSyDe",
        "partial": "Us",
        "signature": "Int-\u003eInt-\u003eSignal a-\u003eSignal b-\u003eSignal([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWith3U",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c] -\u003e [d]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#zipWith3U",
        "fct-type": "function",
        "title": "zipWith3U"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "zipWith3U",
        "normalized": "Int-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d",
        "package": "ForSyDe",
        "partial": "With",
        "signature": "Int-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWith4U",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]) -\u003e Signal a -\u003e Signal b -\u003e Signal c -\u003e Signal d -\u003e Signal e",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#zipWith4U",
        "fct-type": "function",
        "title": "zipWith4U"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "zipWith4U",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e",
        "package": "ForSyDe",
        "partial": "With",
        "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e])-\u003eSignal a-\u003eSignal b-\u003eSignal c-\u003eSignal d-\u003eSignal e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UntimedLib.html#v:zipWithU",
      "description": {
        "fct-module": "ForSyDe.Shallow.UntimedLib",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e ([a] -\u003e [b] -\u003e [c]) -\u003e Signal a -\u003e Signal b -\u003e Signal c",
        "fct-source": "src/ForSyDe-Shallow-UntimedLib.html#zipWithU",
        "fct-type": "function",
        "title": "zipWithU"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow UntimedLib",
        "module": "ForSyDe.Shallow.UntimedLib",
        "name": "zipWithU",
        "normalized": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c",
        "package": "ForSyDe",
        "partial": "With",
        "signature": "Int-\u003eInt-\u003e([a]-\u003e[b]-\u003e[c])-\u003eSignal a-\u003eSignal b-\u003eSignal c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-UtilityLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ForSyDeUtilityLib is a container including all libraries that\n are related to the ForSyDe shallow-embedded implementation and\n either extend the ForSyDe MoC libraries or add additional\n functionality to ForSyDe.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.DFT\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Memory\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Queue\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.BitVector\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.FilterLib\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.Gaussian\u003c/a\u003e\t\t\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.PolyArith\u003c/a\u003e\t\t\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.StochasticLib\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.UtilityLib",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-UtilityLib.html",
        "fct-type": "module",
        "title": "UtilityLib"
      },
      "index": {
        "description": "The ForSyDeUtilityLib is container including all libraries that are related to the ForSyDe shallow-embedded implementation and either extend the ForSyDe MoC libraries or add additional functionality to ForSyDe ForSyDe.Shallow.DFT ForSyDe.Shallow.Memory ForSyDe.Shallow.Queue ForSyDe.Shallow.BitVector ForSyDe.Shallow.FilterLib ForSyDe.Shallow.Gaussian ForSyDe.Shallow.PolyArith ForSyDe.Shallow.StochasticLib",
        "hierarchy": "ForSyDe Shallow UtilityLib",
        "module": "ForSyDe.Shallow.UtilityLib",
        "name": "UtilityLib",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Utility Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the data type \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and the\n corresponding functions. It is a development of the module\n defined by Reekie.  Though the vector is modeled as a list, it\n should be viewed as an array, i.e. a vector has a fixed\n size. Unfortunately, it is not possible to have the size of the\n vector as a parameter of the vector data type, due to restrictions\n in Haskells type system. Still most operations are defined for\n vectors with the same size.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "This module defines the data type Vector and the corresponding functions It is development of the module defined by Reekie Though the vector is modeled as list it should be viewed as an array i.e vector has fixed size Unfortunately it is not possible to have the size of the vector as parameter of the vector data type due to restrictions in Haskells type system Still most operations are defined for vectors with the same size",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e is modeled similar to a list. It has two data type constructors. \u003ccode\u003e\u003ca\u003eNullV\u003c/a\u003e\u003c/code\u003e constructs the empty vector, while \u003ccode\u003e\u003ca\u003e:\u003e\u003c/a\u003e\u003c/code\u003e constructsa vector by adding an value to an existing vector. Using the inheritance mechanism of Haskell we have declared \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e as an instance of the classes \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e| This means that the vector 1:\u003e2:\u003e3:\u003eNullV is shown as \u003ca\u003e1,2,3\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#Vector",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "The data type Vector is modeled similar to list It has two data type constructors NullV constructs the empty vector while constructsa vector by adding an value to an existing vector Using the inheritance mechanism of Haskell we have declared Vector as an instance of the classes Read and Show This means that the vector NullV is shown as",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe operator '(\u003ca\u003e+\u003c/a\u003e)' concatinates two vectors.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "The operator concatinates two vectors",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Vector a-\u003eVector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eThe operator '(\u003c:)' adds an element at the end of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "The operator adds an element at the end of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "(\u003c:) \u003c:",
        "normalized": "Vector a-\u003ea-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v::-62-",
      "description": {
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a :\u003e (Vector a)",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#Vector",
        "fct-type": "function",
        "title": ":\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": ":\u003e",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:NullV",
      "description": {
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "NullV",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#Vector",
        "fct-type": "function",
        "title": "NullV"
      },
      "index": {
        "description": "",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "NullV",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:atV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eatV\u003c/a\u003e\u003c/code\u003e returns the n-th element in a vector, starting from zero.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector b -\u003e a -\u003e b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#atV",
        "fct-type": "function",
        "title": "atV"
      },
      "index": {
        "description": "The function atV returns the n-th element in vector starting from zero",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "atV",
        "normalized": "Vector a-\u003eb-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:concatV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003econcatV\u003c/a\u003e\u003c/code\u003e transforms a vector of vectors to a single vector. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector (Vector a) -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#concatV",
        "fct-type": "function",
        "title": "concatV"
      },
      "index": {
        "description": "The function concatV transforms vector of vectors to single vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "concatV",
        "normalized": "Vector(Vector a)-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector(Vector a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:copyV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecopyV\u003c/a\u003e\u003c/code\u003e generates a vector with a given number of copies of the same element. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e copyV 7 5 \n\u003c/pre\u003e\u003cpre\u003e \u003c5,5,5,5,5,5,5\u003e :: Vector Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e b -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#copyV",
        "fct-type": "function",
        "title": "copyV"
      },
      "index": {
        "description": "The function copyV generates vector with given number of copies of the same element Vector copyV Vector Integer",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "copyV",
        "normalized": "a-\u003eb-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eb-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:dropV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edropV\u003c/a\u003e\u003c/code\u003e drops the first n elements of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Vector b -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#dropV",
        "fct-type": "function",
        "title": "dropV"
      },
      "index": {
        "description": "The function dropV drops the first elements of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "dropV",
        "normalized": "a-\u003eVector b-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eVector b-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:filterV",
      "description": {
        "fct-descr": "\u003cp\u003eThe higher-function \u003ccode\u003e\u003ca\u003efilterV\u003c/a\u003e\u003c/code\u003e takes a predicate function and a vector and creates a new vector with the elements for which the predicate is true. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#filterV",
        "fct-type": "function",
        "title": "filterV"
      },
      "index": {
        "description": "The higher-function filterV takes predicate function and vector and creates new vector with the elements for which the predicate is true",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "filterV",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:foldlV",
      "description": {
        "fct-descr": "\u003cp\u003eThe higher-order functions \u003ccode\u003e\u003ca\u003efoldlV\u003c/a\u003e\u003c/code\u003e folds a function from the right to the left  over a vector using an initial value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#foldlV",
        "fct-type": "function",
        "title": "foldlV"
      },
      "index": {
        "description": "The higher-order functions foldlV folds function from the right to the left over vector using an initial value",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "foldlV",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:foldrV",
      "description": {
        "fct-descr": "\u003cp\u003eThe higher-order functions \u003ccode\u003e\u003ca\u003efoldrV\u003c/a\u003e\u003c/code\u003e folds a function from the left to the right over a vector using an initial value.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#foldrV",
        "fct-type": "function",
        "title": "foldrV"
      },
      "index": {
        "description": "The higher-order functions foldrV folds function from the left to the right over vector using an initial value",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "foldrV",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eVector b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003efromVector\u003c/a\u003e\u003c/code\u003e converts a vector into a list.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e [a]",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "The function fromVector converts vector into list",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "fromVector",
        "normalized": "Vector a-\u003e[a]",
        "package": "ForSyDe",
        "partial": "Vector",
        "signature": "Vector a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:generateV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egenerateV\u003c/a\u003e\u003c/code\u003e behaves in the same way, but starts with the application of the supplied function to the supplied value. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e generateV 5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c2,3,4,5,6\u003e :: Vector Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e (b -\u003e b) -\u003e b -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#generateV",
        "fct-type": "function",
        "title": "generateV"
      },
      "index": {
        "description": "The function generateV behaves in the same way but starts with the application of the supplied function to the supplied value Vector generateV Vector Integer",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "generateV",
        "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:groupV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003egroupV\u003c/a\u003e\u003c/code\u003e groups a vector into a vector of vectors of size n.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Vector a -\u003e Vector (Vector a)",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#groupV",
        "fct-type": "function",
        "title": "groupV"
      },
      "index": {
        "description": "The function groupV groups vector into vector of vectors of size",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "groupV",
        "normalized": "Int-\u003eVector a-\u003eVector(Vector a)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eVector a-\u003eVector(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:headV",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003eheadV\u003c/a\u003e\u003c/code\u003e returns the first element of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#headV",
        "fct-type": "function",
        "title": "headV"
      },
      "index": {
        "description": "The functions headV returns the first element of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "headV",
        "normalized": "Vector a-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:initV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003einitV\u003c/a\u003e\u003c/code\u003e returns all but the last elements of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#initV",
        "fct-type": "function",
        "title": "initV"
      },
      "index": {
        "description": "The function initV returns all but the last elements of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "initV",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:iterateV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eiterateV\u003c/a\u003e\u003c/code\u003e generates a vector with a given number of elements starting from an initial element using a supplied function for the generation of elements. \n\u003c/p\u003e\u003cpre\u003e Vector\u003e iterateV 5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c1,2,3,4,5\u003e :: Vector Integer\n\u003c/pre\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e (b -\u003e b) -\u003e b -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#iterateV",
        "fct-type": "function",
        "title": "iterateV"
      },
      "index": {
        "description": "The function iterateV generates vector with given number of elements starting from an initial element using supplied function for the generation of elements Vector iterateV Vector Integer",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "iterateV",
        "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003e(b-\u003eb)-\u003eb-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:lastV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elastV\u003c/a\u003e\u003c/code\u003e returns the last element of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#lastV",
        "fct-type": "function",
        "title": "lastV"
      },
      "index": {
        "description": "The function lastV returns the last element of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "lastV",
        "normalized": "Vector a-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:lengthV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elengthV\u003c/a\u003e\u003c/code\u003e returns the number of elements in a value. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Int",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#lengthV",
        "fct-type": "function",
        "title": "lengthV"
      },
      "index": {
        "description": "The function lengthV returns the number of elements in value",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "lengthV",
        "normalized": "Vector a-\u003eInt",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:mapV",
      "description": {
        "fct-descr": "\u003cp\u003eThe higher-order function \u003ccode\u003e\u003ca\u003emapV\u003c/a\u003e\u003c/code\u003e applies a function on all elements of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#mapV",
        "fct-type": "function",
        "title": "mapV"
      },
      "index": {
        "description": "The higher-order function mapV applies function on all elements of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "mapV",
        "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:nullV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enullV\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if a vector is empty. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Bool",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#nullV",
        "fct-type": "function",
        "title": "nullV"
      },
      "index": {
        "description": "The function nullV returns True if vector is empty",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "nullV",
        "normalized": "Vector a-\u003eBool",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:replaceV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereplaceV\u003c/a\u003e\u003c/code\u003e replaces an element in a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Int -\u003e a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#replaceV",
        "fct-type": "function",
        "title": "replaceV"
      },
      "index": {
        "description": "The function replaceV replaces an element in vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "replaceV",
        "normalized": "Vector a-\u003eInt-\u003ea-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eInt-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:reverseV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereverseV\u003c/a\u003e\u003c/code\u003e reverses the order of elements in a vector. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#reverseV",
        "fct-type": "function",
        "title": "reverseV"
      },
      "index": {
        "description": "The function reverseV reverses the order of elements in vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "reverseV",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:rotlV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erotlV\u003c/a\u003e\u003c/code\u003e rotates a vector to the left. Note that this fuctions does not change the size of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#rotlV",
        "fct-type": "function",
        "title": "rotlV"
      },
      "index": {
        "description": "The function rotlV rotates vector to the left Note that this fuctions does not change the size of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "rotlV",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:rotrV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erotrV\u003c/a\u003e\u003c/code\u003e rotates a vector to the right. Note that this fuction does not change the size of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#rotrV",
        "fct-type": "function",
        "title": "rotrV"
      },
      "index": {
        "description": "The function rotrV rotates vector to the right Note that this fuction does not change the size of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "rotrV",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:selectV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselectV\u003c/a\u003e\u003c/code\u003e selects elements in the vector. The first argument gives the initial element, starting from zero, the second argument gives the stepsize between elements and the last argument gives the number of elements. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#selectV",
        "fct-type": "function",
        "title": "selectV"
      },
      "index": {
        "description": "The function selectV selects elements in the vector The first argument gives the initial element starting from zero the second argument gives the stepsize between elements and the last argument gives the number of elements",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "selectV",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:shiftlV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eshiftlV\u003c/a\u003e\u003c/code\u003e shifts a value from the left into a vector. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#shiftlV",
        "fct-type": "function",
        "title": "shiftlV"
      },
      "index": {
        "description": "The function shiftlV shifts value from the left into vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "shiftlV",
        "normalized": "Vector a-\u003ea-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:shiftrV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eshiftrV\u003c/a\u003e\u003c/code\u003e shifts a value from the right into a vector. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#shiftrV",
        "fct-type": "function",
        "title": "shiftrV"
      },
      "index": {
        "description": "The function shiftrV shifts value from the right into vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "shiftrV",
        "normalized": "Vector a-\u003ea-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:tailV",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003etailV\u003c/a\u003e\u003c/code\u003e returns all, but the first element of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#tailV",
        "fct-type": "function",
        "title": "tailV"
      },
      "index": {
        "description": "The functions tailV returns all but the first element of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "tailV",
        "normalized": "Vector a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:takeV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etakeV\u003c/a\u003e\u003c/code\u003e returns the first n elements of a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Vector b -\u003e Vector b",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#takeV",
        "fct-type": "function",
        "title": "takeV"
      },
      "index": {
        "description": "The function takeV returns the first elements of vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "takeV",
        "normalized": "a-\u003eVector b-\u003eVector b",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eVector b-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:unitV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunitV\u003c/a\u003e\u003c/code\u003e creates a vector with one element. \n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#unitV",
        "fct-type": "function",
        "title": "unitV"
      },
      "index": {
        "description": "The function unitV creates vector with one element",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "unitV",
        "normalized": "a-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:unzipV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eunzipV\u003c/a\u003e\u003c/code\u003e unzips a vector of tuples into two vectors.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector (a, b) -\u003e (Vector a, Vector b)",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#unzipV",
        "fct-type": "function",
        "title": "unzipV"
      },
      "index": {
        "description": "The function unzipV unzips vector of tuples into two vectors",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "unzipV",
        "normalized": "Vector(a,b)-\u003e(Vector a,Vector b)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector(a,b)-\u003e(Vector a,Vector b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:vector",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003evector\u003c/a\u003e\u003c/code\u003e converts a list into a vector.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "[a] -\u003e Vector a",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#vector",
        "fct-type": "function",
        "title": "vector"
      },
      "index": {
        "description": "The function vector converts list into vector",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "vector",
        "normalized": "[a]-\u003eVector a",
        "package": "ForSyDe",
        "partial": "",
        "signature": "[a]-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:zipV",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ezipV\u003c/a\u003e\u003c/code\u003e zips two vectors into a vector of tuples.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "Vector a -\u003e Vector b -\u003e Vector (a, b)",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#zipV",
        "fct-type": "function",
        "title": "zipV"
      },
      "index": {
        "description": "The function zipV zips two vectors into vector of tuples",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "zipV",
        "normalized": "Vector a-\u003eVector b-\u003eVector(a,b)",
        "package": "ForSyDe",
        "partial": "",
        "signature": "Vector a-\u003eVector b-\u003eVector(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow-Vector.html#v:zipWithV",
      "description": {
        "fct-descr": "\u003cp\u003eThe higher-order function \u003ccode\u003e\u003ca\u003ezipWithV\u003c/a\u003e\u003c/code\u003e applies a function pairwise on to vectors.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Shallow.Vector",
        "fct-package": "ForSyDe",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
        "fct-source": "src/ForSyDe-Shallow-Vector.html#zipWithV",
        "fct-type": "function",
        "title": "zipWithV"
      },
      "index": {
        "description": "The higher-order function zipWithV applies function pairwise on to vectors",
        "hierarchy": "ForSyDe Shallow Vector",
        "module": "ForSyDe.Shallow.Vector",
        "name": "zipWithV",
        "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
        "package": "ForSyDe",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Shallow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShallow-embedded implementation of ForSyDe (see \u003ca\u003eForSyDe.Shallow.Signal\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eUnlike systems built using the deep-embedded Signal type of ForSyDe\n (see \u003ccode\u003eForSyDe.Signal\u003c/code\u003e), systems built with \u003ccode\u003eForSyDe.Shallow.Signal\u003c/code\u003e\n can make use of new and experimental features such as multiple,\n heterogeneous MoCs (Models of Computation) other than the Synchronous\n MoC (the only Model of Computation currently supported by deep-embdded\n ForSyDe). However, as an important tradeoff, \u003ccode\u003eForSyDe.Shallow.Signal\u003c/code\u003e\n is unaware of the resulting system structure, only allowing simulation \n (i.e. a VHDL or GraphML backend is impossible to implement).\n\u003c/p\u003e\u003cp\u003eThe shallow implementation of ForSyDe consists of three main libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.CoreLib\u003c/a\u003e contains the basic definitions and\n   functions such as events and signals.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.MoCLib\u003c/a\u003e defines the models of computations\n   included in ForSyDe.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eForSyDe.Shallow.UtilityLib\u003c/a\u003e provides several additional modules\n   that are useful and convenient in practice. Their status is\n   experimental.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Shallow",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Shallow.html",
        "fct-type": "module",
        "title": "Shallow"
      },
      "index": {
        "description": "Shallow-embedded implementation of ForSyDe see ForSyDe.Shallow.Signal Unlike systems built using the deep-embedded Signal type of ForSyDe see ForSyDe.Signal systems built with ForSyDe.Shallow.Signal can make use of new and experimental features such as multiple heterogeneous MoCs Models of Computation other than the Synchronous MoC the only Model of Computation currently supported by deep-embdded ForSyDe However as an important tradeoff ForSyDe.Shallow.Signal is unaware of the resulting system structure only allowing simulation i.e VHDL or GraphML backend is impossible to implement The shallow implementation of ForSyDe consists of three main libraries ForSyDe.Shallow.CoreLib contains the basic definitions and functions such as events and signals ForSyDe.Shallow.MoCLib defines the models of computations included in ForSyDe ForSyDe.Shallow.UtilityLib provides several additional modules that are useful and convenient in practice Their status is experimental",
        "hierarchy": "ForSyDe Shallow",
        "module": "ForSyDe.Shallow",
        "name": "Shallow",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Shallow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Signal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the fundamental data structure for deep-embedded \n ForSyDe models: \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-Signal.html",
        "fct-type": "module",
        "title": "Signal"
      },
      "index": {
        "description": "This module provides the fundamental data structure for deep-embedded ForSyDe models Signal",
        "hierarchy": "ForSyDe Signal",
        "module": "ForSyDe.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-Signal.html#t:Signal",
      "description": {
        "fct-descr": "\u003cp\u003eA signal can be seen as wire which carries values of certain type \n   and which can be connected and processed by the two computational \n   entities of a ForSyDe system: processes and block instances.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.Signal",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-Netlist.html#Signal",
        "fct-type": "data",
        "title": "Signal"
      },
      "index": {
        "description": "signal can be seen as wire which carries values of certain type and which can be connected and processed by the two computational entities of ForSyDe system processes and block instances",
        "hierarchy": "ForSyDe Signal",
        "module": "ForSyDe.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides publicly usable functions to build a system definition\n and instantiate it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe-System.html",
        "fct-type": "module",
        "title": "System"
      },
      "index": {
        "description": "This module provides publicly usable functions to build system definition and instantiate it",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "System",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysDef",
      "description": {
        "fct-descr": "\u003cp\u003eWe add a phantom parameter to indicate the type of the system \n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "data",
        "fct-source": "src/ForSyDe-System-SysDef.html#SysDef",
        "fct-type": "data",
        "title": "SysDef"
      },
      "index": {
        "description": "We add phantom parameter to indicate the type of the system",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "SysDef",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Sys Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFun",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to describe a System function. It uses the same trick\n   as \u003ccode\u003eText.Printf\u003c/code\u003e to implement the variable number of arguments.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "class",
        "fct-source": "src/ForSyDe-System-SysFun.html#SysFun",
        "fct-type": "class",
        "title": "SysFun"
      },
      "index": {
        "description": "Class used to describe System function It uses the same trick as Text.Printf to implement the variable number of arguments",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "SysFun",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Sys Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFunToIOSimFun",
      "description": {
        "fct-descr": "\u003cp\u003eMultiparameter class to transform a System Function into an IO \n   Simulation Function, able to externally simulate a System using a \n   list-based representation of its signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "class",
        "fct-source": "src/ForSyDe-System-SysFun.html#SysFunToIOSimFun",
        "fct-type": "class",
        "title": "SysFunToIOSimFun"
      },
      "index": {
        "description": "Multiparameter class to transform System Function into an IO Simulation Function able to externally simulate System using list-based representation of its signals",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "SysFunToIOSimFun",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Sys Fun To IOSim Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#t:SysFunToSimFun",
      "description": {
        "fct-descr": "\u003cp\u003eMultiparameter class to transform a System Function into a Simulation \n   Function, able to simulate a System using a list-based representation \n   of its signals.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "class",
        "fct-source": "src/ForSyDe-System-SysFun.html#SysFunToSimFun",
        "fct-type": "class",
        "title": "SysFunToSimFun"
      },
      "index": {
        "description": "Multiparameter class to transform System Function into Simulation Function able to simulate System using list-based representation of its signals",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "SysFunToSimFun",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Sys Fun To Sim Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:instantiate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an instance of a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e in the form of  \n   function out of the name of a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e with the same type as its \n   system function. The resulting function can then be used to plug the \n   instance to the rest of the system.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "ProcId -\u003e SysDef f -\u003e f",
        "fct-source": "src/ForSyDe-System-Instantiate.html#instantiate",
        "fct-type": "function",
        "title": "instantiate"
      },
      "index": {
        "description": "Generates an instance of SysDef in the form of function out of the name of SysDef with the same type as its system function The resulting function can then be used to plug the instance to the rest of the system",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "instantiate",
        "normalized": "ProcId-\u003eSysDef a-\u003ea",
        "package": "ForSyDe",
        "partial": "",
        "signature": "ProcId-\u003eSysDef f-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e\u003cp\u003eBuilds a system definition out of a system function describing the system \n   and its port identifers.   \n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "f-\u003e SysId-\u003e [PortId]-\u003e [PortId]-\u003e SysDef f",
        "fct-type": "function",
        "title": "newSysDef"
      },
      "index": {
        "description": "SysDef constructor Builds system definition out of system function describing the system and its port identifers",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "newSysDef",
        "normalized": "a-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eSysDef a",
        "package": "ForSyDe",
        "partial": "Sys Def",
        "signature": "f-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eSysDef f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDefTH",
      "description": {
        "fct-descr": "\u003cp\u003eCURRENTLY BROKEN, do not use!\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor, Template Haskell version\n\u003c/p\u003e\u003cp\u003eBuilds a system definition out of a system function, a system identifiers \n   and its port identifers.\n\u003c/p\u003e\u003cp\u003eFor example \u003ccode\u003e$(newSysDefTH mySysFun \"mysys\" [\"in1\"] [\"out1\"])\u003c/code\u003e creates a\n  system definition from system funcion \u003ccode\u003emySysFun\u003c/code\u003e which should have \n  one input and output signals.\n\u003c/p\u003e\u003cp\u003eThe advantage of \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003enewSysDef\u003c/a\u003e\u003c/code\u003e is that it \n  reports errors (e.g duplicated port and process identifiers) earlier, \n  at host-language (Haskell) compile-time. \n\u003c/p\u003e\u003cp\u003eIn addition, due to the use of Template Haskell, \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e is\n  aware of the source location at which it was called, making\n  further error reports friendlier to the user.\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "f-\u003e SysId-\u003e [PortId]-\u003e [PortId]-\u003e ExpQ",
        "fct-type": "function",
        "title": "newSysDefTH"
      },
      "index": {
        "description": "CURRENTLY BROKEN do not use SysDef constructor Template Haskell version Builds system definition out of system function system identifiers and its port identifers For example newSysDefTH mySysFun mysys in1 out1 creates system definition from system funcion mySysFun which should have one input and output signals The advantage of newSysDefTH over newSysDef is that it reports errors e.g duplicated port and process identifiers earlier at host-language Haskell compile-time In addition due to the use of Template Haskell newSysDefTH is aware of the source location at which it was called making further error reports friendlier to the user",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "newSysDefTH",
        "normalized": "a-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
        "package": "ForSyDe",
        "partial": "Sys Def TH",
        "signature": "f-\u003eSysId-\u003e[PortId]-\u003e[PortId]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe-System.html#v:newSysDefTHName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e constructor, Template Haskell \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e version\n\u003c/p\u003e\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eSysDef\u003c/a\u003e\u003c/code\u003e out of the name of a system function\n   and its port identifers.\n\u003c/p\u003e\u003cp\u003eThe system will later be identified by the basename \n   (i.e. unqualified name) of the function.\n\u003c/p\u003e\u003cp\u003eFor example \u003ccode\u003e$(newSysDefTHName 'mySysFun [\"in1\"] [\"out1\"])\u003c/code\u003e creates a\n  system definition from system funcion \u003ccode\u003emySysFun\u003c/code\u003e which has one input and\n  output signals.\n\u003c/p\u003e\u003cp\u003eThe advantage of \u003ccode\u003e\u003ca\u003enewSysDefTHName\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003enewSysDefTH\u003c/a\u003e\u003c/code\u003e is that it \n   doesn't suffer from the Template Haskell bug \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/1800\u003c/a\u003e, or in other words, it allows to declare the system \n   defintion and system function in the same module.\n\u003c/p\u003e\u003cp\u003eHowever, since it doesn't have acces to the system function itself,\n   it can only give early error reports related to incorrect port identifiers\n   (process identifier duplicate errors will be reported at runtime).\n\u003c/p\u003e",
        "fct-module": "ForSyDe.System",
        "fct-package": "ForSyDe",
        "fct-signature": "Name-\u003e [PortId]-\u003e [PortId]-\u003e ExpQ",
        "fct-type": "function",
        "title": "newSysDefTHName"
      },
      "index": {
        "description": "SysDef constructor Template Haskell Name version Builds SysDef out of the name of system function and its port identifers The system will later be identified by the basename i.e unqualified name of the function For example newSysDefTHName mySysFun in1 out1 creates system definition from system funcion mySysFun which has one input and output signals The advantage of newSysDefTHName over newSysDefTH is that it doesn suffer from the Template Haskell bug http hackage.haskell.org trac ghc ticket or in other words it allows to declare the system defintion and system function in the same module However since it doesn have acces to the system function itself it can only give early error reports related to incorrect port identifiers process identifier duplicate errors will be reported at runtime",
        "hierarchy": "ForSyDe System",
        "module": "ForSyDe.System",
        "name": "newSysDefTHName",
        "normalized": "Name-\u003e[PortId]-\u003e[PortId]-\u003eExpQ",
        "package": "ForSyDe",
        "partial": "Sys Def THName",
        "signature": "Name-\u003e[PortId]-\u003e[PortId]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/ForSyDe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a wrapper for all the publicly usable types and\n functions of ForSyDe's deep-embedded Domain Specific Language\n (DSL). For the shallow-embedded DSL, please see \u003ca\u003eForSyDe.Shallow\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "ForSyDe",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/ForSyDe.html",
        "fct-type": "module",
        "title": "ForSyDe"
      },
      "index": {
        "description": "This module is wrapper for all the publicly usable types and functions of ForSyDe deep-embedded Domain Specific Language DSL For the shallow-embedded DSL please see ForSyDe.Shallow",
        "hierarchy": "ForSyDe",
        "module": "ForSyDe",
        "name": "ForSyDe",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "For Sy De",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically derive Template Haskell's \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e class for datatypes\n using Template Haskell splices.\n\u003c/p\u003e\u003cp\u003eBased on Lynagh's th-lift package: \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/th-lift\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.TH.Lift",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "Automatically derive Template Haskell Lift class for datatypes using Template Haskell splices Based on Lynagh th-lift package http hackage.haskell.org cgi-bin hackage-scripts package th-lift",
        "hierarchy": "Language Haskell TH Lift",
        "module": "Language.Haskell.TH.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#v:deriveLift",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003ederiveLif1\u003c/code\u003e used to automatically generate instances\n   of Lift for multiple data types. For instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell #-}\nmodule Colour where\nimport Language.Haskell.TH.Lift\n\ndata RGB = Red | Green | Blue\n\ndata Num a =\u003e Pixel a = Pixel a a a\n\n-- Generate Lift instances for RGB and Pixel\n$(mapM deriveLift [''RGB, ''Pixel])\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.TH.Lift",
        "fct-package": "ForSyDe",
        "fct-signature": "Name -\u003e Q Dec",
        "fct-source": "src/Language-Haskell-TH-Lift.html#deriveLift",
        "fct-type": "function",
        "title": "deriveLift"
      },
      "index": {
        "description": "Version of deriveLif1 used to automatically generate instances of Lift for multiple data types For instance LANGUAGE TemplateHaskell module Colour where import Language.Haskell.TH.Lift data RGB Red Green Blue data Num Pixel Pixel Generate Lift instances for RGB and Pixel mapM deriveLift RGB Pixel",
        "hierarchy": "Language Haskell TH Lift",
        "module": "Language.Haskell.TH.Lift",
        "name": "deriveLift",
        "normalized": "Name-\u003eQ Dec",
        "package": "ForSyDe",
        "partial": "Lift",
        "signature": "Name-\u003eQ Dec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-Lift.html#v:deriveLift1",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatically generate an instance of \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e for one data type. For example:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell #-}\nmodule Colour where\nimport Language.Haskell.TH.Lift\n\ndata RGB = Red | Green | Blue\n\n-- Generate the Lift instance of RGB\n$(deriveLift1 ''RGB)\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.TH.Lift",
        "fct-package": "ForSyDe",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Language-Haskell-TH-Lift.html#deriveLift1",
        "fct-type": "function",
        "title": "deriveLift1"
      },
      "index": {
        "description": "Automatically generate an instance of Lift for one data type For example LANGUAGE TemplateHaskell module Colour where import Language.Haskell.TH.Lift data RGB Red Green Blue Generate the Lift instance of RGB deriveLift1 RGB",
        "hierarchy": "Language Haskell TH Lift",
        "module": "Language.Haskell.TH.Lift",
        "name": "deriveLift1",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "ForSyDe",
        "partial": "Lift",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-LiftInstances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides  \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instances for all the AST-types defined\n in \u003ca\u003eLanguage.Haskell.Syntax\u003c/a\u003e:\n \u003ccode\u003e\u003ca\u003eGuard\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eStrict\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCallconv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSafety\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eBody\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunDep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eForeign\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStmt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eClause\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFurthermore it provides a \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e,  \n (essential for some of the other instantiations) and a function (metaLift)\n which lifts an expression twice, obtaing its meta AST (the AST of the AST)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.TH.LiftInstances",
        "fct-package": "ForSyDe",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-LiftInstances.html",
        "fct-type": "module",
        "title": "LiftInstances"
      },
      "index": {
        "description": "This module provides Lift instances for all the AST-types defined in Language.Haskell.Syntax Guard Strict Callconv Safety Body Con FunDep Foreign Lit Pat Match Stmt Range Clause Type Dec Exp Furthermore it provides Lift instance of Ratio Int8 Int16 Int32 essential for some of the other instantiations and function metaLift which lifts an expression twice obtaing its meta AST the AST of the AST",
        "hierarchy": "Language Haskell TH LiftInstances",
        "module": "Language.Haskell.TH.LiftInstances",
        "name": "LiftInstances",
        "normalized": "",
        "package": "ForSyDe",
        "partial": "Lift Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForSyDe/docs/Language-Haskell-TH-LiftInstances.html#v:metaLift",
      "description": {
        "fct-descr": "\u003cp\u003elift twice, getting the meta AST (the AST of the AST)\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.LiftInstances",
        "fct-package": "ForSyDe",
        "fct-signature": "a -\u003e Q Exp",
        "fct-source": "src/Language-Haskell-TH-LiftInstances.html#metaLift",
        "fct-type": "function",
        "title": "metaLift"
      },
      "index": {
        "description": "lift twice getting the meta AST the AST of the AST",
        "hierarchy": "Language Haskell TH LiftInstances",
        "module": "Language.Haskell.TH.LiftInstances",
        "name": "metaLift",
        "normalized": "a-\u003eQ Exp",
        "package": "ForSyDe",
        "partial": "Lift",
        "signature": "a-\u003eQ Exp"
      }
    }
  }
]