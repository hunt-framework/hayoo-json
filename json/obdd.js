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
        "word": "obdd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eimplementation of reduced ordered binary decision diagrams.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OBDD.Data",
          "name": "Data",
          "package": "obdd",
          "source": "src/OBDD-Data.html",
          "type": "module"
        },
        "index": {
          "description": "implementation of reduced ordered binary decision diagrams",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "Data",
          "package": "obdd",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "Node",
          "package": "obdd",
          "source": "src/OBDD-Data.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "Node",
          "package": "obdd",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassumes total ordering on variables\n\u003c/p\u003e",
          "module": "OBDD.Data",
          "name": "OBDD",
          "package": "obdd",
          "source": "src/OBDD-Data.html#OBDD",
          "type": "data"
        },
        "index": {
          "description": "assumes total ordering on variables",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "OBDD",
          "package": "obdd",
          "partial": "OBDD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#t:OBDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "Branch",
          "package": "obdd",
          "signature": "Branch !v !i !i",
          "source": "src/OBDD-Data.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "Branch",
          "package": "obdd",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "Leaf",
          "package": "obdd",
          "signature": "Leaf !Bool",
          "source": "src/OBDD-Data.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "Leaf",
          "package": "obdd",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "access",
          "package": "obdd",
          "signature": "OBDD v -\u003e Node v (OBDD v)",
          "source": "src/OBDD-Data.html#access",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "access",
          "normalized": "OBDD a-\u003eNode a(OBDD a)",
          "package": "obdd",
          "signature": "OBDD v-\u003eNode v(OBDD v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of all models (WARNING not using \n variables that had been deleted)\n\u003c/p\u003e",
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "all_models",
          "package": "obdd",
          "signature": "OBDD v -\u003e [Map v Bool]",
          "source": "src/OBDD-Data.html#all_models",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:all_models\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:all_models\"]"
        },
        "index": {
          "description": "list of all models WARNING not using variables that had been deleted",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "all_models",
          "normalized": "OBDD a-\u003e[Map a Bool]",
          "package": "obdd",
          "signature": "OBDD v-\u003e[Map v Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:all_models"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "cached",
          "package": "obdd",
          "signature": "(Index, Index) -\u003e State (OBDD v) Index -\u003e State (OBDD v) Index",
          "source": "src/OBDD-Data.html#cached",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "cached",
          "normalized": "(Index,Index)-\u003eState(OBDD a)Index-\u003eState(OBDD a)Index",
          "package": "obdd",
          "signature": "(Index,Index)-\u003eState(OBDD v)Index-\u003eState(OBDD v)Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:cached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"OBDD.Data\",\"OBDD.Operation\"]",
          "name": "fold",
          "package": "obdd",
          "signature": "(Bool -\u003e a) -\u003e (v -\u003e a -\u003e a -\u003e a) -\u003e OBDD v -\u003e a",
          "source": "src/OBDD-Data.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:fold\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:fold\"]"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "fold",
          "normalized": "(Bool-\u003ea)-\u003e(b-\u003ea-\u003ea-\u003ea)-\u003eOBDD b-\u003ea",
          "package": "obdd",
          "signature": "(Bool-\u003ea)-\u003e(v-\u003ea-\u003ea-\u003ea)-\u003eOBDD v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"OBDD.Data\",\"OBDD.Operation\"]",
          "name": "foldM",
          "package": "obdd",
          "signature": "(Bool -\u003e m a) -\u003e (v -\u003e a -\u003e a -\u003e m a) -\u003e OBDD v -\u003e m a",
          "source": "src/OBDD-Data.html#foldM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:foldM\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:foldM\"]"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "foldM",
          "normalized": "(Bool-\u003ea b)-\u003e(c-\u003eb-\u003eb-\u003ea b)-\u003eOBDD c-\u003ea b",
          "package": "obdd",
          "signature": "(Bool-\u003em a)-\u003e(v-\u003ea-\u003ea-\u003em a)-\u003eOBDD v-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "make",
          "package": "obdd",
          "signature": "State (OBDD v) Index -\u003e OBDD v",
          "source": "src/OBDD-Data.html#make",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "make",
          "normalized": "State(OBDD a)Index-\u003eOBDD a",
          "package": "obdd",
          "signature": "State(OBDD v)Index-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the OBDD not have any models?\n\u003c/p\u003e",
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "null",
          "package": "obdd",
          "signature": "OBDD v -\u003e Bool",
          "source": "src/OBDD-Data.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:null\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:null\"]"
        },
        "index": {
          "description": "does the OBDD not have any models",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "null",
          "normalized": "OBDD a-\u003eBool",
          "package": "obdd",
          "signature": "OBDD v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of satisfying assignments with  given set of variables.\n The set of variables must be given since the current OBDD may not contain\n all variables that were used to construct it, since some  nodes may have been removed\n because they had identical children.\n\u003c/p\u003e",
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "number_of_models",
          "package": "obdd",
          "signature": "Set v -\u003e OBDD v -\u003e Integer",
          "source": "src/OBDD-Data.html#number_of_models",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:number_of_models\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:number_of_models\"]"
        },
        "index": {
          "description": "Number of satisfying assignments with given set of variables The set of variables must be given since the current OBDD may not contain all variables that were used to construct it since some nodes may have been removed because they had identical children",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "number_of_models",
          "normalized": "Set a-\u003eOBDD a-\u003eInteger",
          "package": "obdd",
          "signature": "Set v-\u003eOBDD v-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:number_of_models"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "register",
          "package": "obdd",
          "signature": "Node v Index -\u003e State (OBDD v) Index",
          "source": "src/OBDD-Data.html#register",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "register",
          "normalized": "Node a Index-\u003eState(OBDD a)Index",
          "package": "obdd",
          "signature": "Node v Index-\u003eState(OBDD v)Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the OBDD have any models?\n\u003c/p\u003e",
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "satisfiable",
          "package": "obdd",
          "signature": "OBDD v -\u003e Bool",
          "source": "src/OBDD-Data.html#satisfiable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:satisfiable\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:satisfiable\"]"
        },
        "index": {
          "description": "does the OBDD have any models",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "satisfiable",
          "normalized": "OBDD a-\u003eBool",
          "package": "obdd",
          "signature": "OBDD v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:satisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "size",
          "package": "obdd",
          "signature": "OBDD v -\u003e Index",
          "source": "src/OBDD-Data.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:size\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:size\"]"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "size",
          "normalized": "OBDD a-\u003eIndex",
          "package": "obdd",
          "signature": "OBDD v-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erandomly select one model, if possible\n\u003c/p\u003e",
          "module": "[\"OBDD.Data\",\"OBDD.Property\"]",
          "name": "some_model",
          "package": "obdd",
          "signature": "OBDD v -\u003e IO (Maybe (Map v Bool))",
          "source": "src/OBDD-Data.html#some_model",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:some_model\",\"http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#v:some_model\"]"
        },
        "index": {
          "description": "randomly select one model if possible",
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "some_model",
          "normalized": "OBDD a-\u003eIO(Maybe(Map a Bool))",
          "package": "obdd",
          "signature": "OBDD v-\u003eIO(Maybe(Map v Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:some_model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Data",
          "name": "top",
          "package": "obdd",
          "signature": "OBDD v -\u003e Index",
          "source": "src/OBDD-Data.html#top",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Data",
          "module": "OBDD.Data",
          "name": "top",
          "normalized": "OBDD a-\u003eIndex",
          "package": "obdd",
          "signature": "OBDD v-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Data.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ebuilds basic OBDDs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OBDD.Make",
          "name": "Make",
          "package": "obdd",
          "source": "src/OBDD-Make.html",
          "type": "module"
        },
        "index": {
          "description": "builds basic OBDDs",
          "hierarchy": "OBDD Make",
          "module": "OBDD.Make",
          "name": "Make",
          "package": "obdd",
          "partial": "Make",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Make.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Make",
          "name": "constant",
          "package": "obdd",
          "signature": "Bool -\u003e OBDD v",
          "source": "src/OBDD-Make.html#constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Make",
          "module": "OBDD.Make",
          "name": "constant",
          "normalized": "Bool-\u003eOBDD a",
          "package": "obdd",
          "signature": "Bool-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Make.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable with given parity\n\u003c/p\u003e",
          "module": "OBDD.Make",
          "name": "unit",
          "package": "obdd",
          "signature": "v -\u003e Bool -\u003e OBDD v",
          "source": "src/OBDD-Make.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Variable with given parity",
          "hierarchy": "OBDD Make",
          "module": "OBDD.Make",
          "name": "unit",
          "normalized": "a-\u003eBool-\u003eOBDD a",
          "package": "obdd",
          "signature": "v-\u003eBool-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Make.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "Operation",
          "package": "obdd",
          "source": "src/OBDD-Operation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "Operation",
          "package": "obdd",
          "partial": "Operation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "(||)",
          "package": "obdd",
          "signature": "OBDD v -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "(||) ||",
          "normalized": "OBDD a-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "OBDD v-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "(&&)",
          "package": "obdd",
          "signature": "OBDD v -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "(&&) &&",
          "normalized": "OBDD a-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "OBDD v-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "and",
          "package": "obdd",
          "signature": "[OBDD v] -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "and",
          "normalized": "[OBDD a]-\u003eOBDD a",
          "package": "obdd",
          "signature": "[OBDD v]-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "binary",
          "package": "obdd",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e OBDD v -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#binary",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "binary",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eOBDD a-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eOBDD v-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove variable existentially\n TODO: needs better implementation\n\u003c/p\u003e",
          "module": "OBDD.Operation",
          "name": "exists",
          "package": "obdd",
          "signature": "v -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#exists",
          "type": "function"
        },
        "index": {
          "description": "remove variable existentially TODO needs better implementation",
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "exists",
          "normalized": "a-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "v-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove variables existentially\n TODO: needs better implementation\n\u003c/p\u003e",
          "module": "OBDD.Operation",
          "name": "exists_many",
          "package": "obdd",
          "signature": "Set v -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#exists_many",
          "type": "function"
        },
        "index": {
          "description": "remove variables existentially TODO needs better implementation",
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "exists_many",
          "normalized": "Set a-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "Set v-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:exists_many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace variable by value\n\u003c/p\u003e",
          "module": "OBDD.Operation",
          "name": "instantiate",
          "package": "obdd",
          "signature": "v -\u003e Bool -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#instantiate",
          "type": "function"
        },
        "index": {
          "description": "replace variable by value",
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "instantiate",
          "normalized": "a-\u003eBool-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "v-\u003eBool-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:instantiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFIXME this is a silly implementation. Negation should be done\n by switching values in Leaves (?)\n\u003c/p\u003e",
          "module": "OBDD.Operation",
          "name": "not",
          "package": "obdd",
          "signature": "OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#not",
          "type": "function"
        },
        "index": {
          "description": "FIXME this is silly implementation Negation should be done by switching values in Leaves",
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "not",
          "normalized": "OBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "OBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "or",
          "package": "obdd",
          "signature": "[OBDD v] -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "or",
          "normalized": "[OBDD a]-\u003eOBDD a",
          "package": "obdd",
          "signature": "[OBDD v]-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Operation",
          "name": "unary",
          "package": "obdd",
          "signature": "(Bool -\u003e Bool) -\u003e OBDD v -\u003e OBDD v",
          "source": "src/OBDD-Operation.html#unary",
          "type": "function"
        },
        "index": {
          "hierarchy": "OBDD Operation",
          "module": "OBDD.Operation",
          "name": "unary",
          "normalized": "(Bool-\u003eBool)-\u003eOBDD a-\u003eOBDD a",
          "package": "obdd",
          "signature": "(Bool-\u003eBool)-\u003eOBDD v-\u003eOBDD v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Operation.html#v:unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OBDD.Property",
          "name": "Property",
          "package": "obdd",
          "source": "src/OBDD-Property.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "OBDD Property",
          "module": "OBDD.Property",
          "name": "Property",
          "package": "obdd",
          "partial": "Property",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD-Property.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ereduced ordered binary decision diagrams\n (c) Johannes Waldmann, 2008\n\u003c/p\u003e\u003cp\u003ethis module is intended to be imported qualified\n because it overloads some Prelude names.\n\u003c/p\u003e\u003cp\u003efor a similar, but much more elaborate project, see\n \u003ca\u003ehttp://www.informatik.uni-kiel.de/~mh/lehre/diplomarbeiten/christiansen.pdf\u003c/a\u003e\n but I'm not sure where that source code would be available.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OBDD",
          "name": "OBDD",
          "package": "obdd",
          "source": "src/OBDD.html",
          "type": "module"
        },
        "index": {
          "description": "reduced ordered binary decision diagrams Johannes Waldmann this module is intended to be imported qualified because it overloads some Prelude names for similar but much more elaborate project see http www.informatik.uni-kiel.de mh lehre diplomarbeiten christiansen.pdf but not sure where that source code would be available",
          "hierarchy": "OBDD",
          "module": "OBDD",
          "name": "OBDD",
          "package": "obdd",
          "partial": "OBDD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassumes total ordering on variables\n\u003c/p\u003e",
          "module": "OBDD",
          "name": "OBDD",
          "package": "obdd",
          "source": "src/OBDD-Data.html#OBDD",
          "type": "data"
        },
        "index": {
          "description": "assumes total ordering on variables",
          "hierarchy": "OBDD",
          "module": "OBDD",
          "name": "OBDD",
          "package": "obdd",
          "partial": "OBDD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/obdd/docs/OBDD.html#t:OBDD"
      }
    }
  ]
]