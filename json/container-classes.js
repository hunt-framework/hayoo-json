[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "module",
        "fct-source": "src/Data-Containers.html",
        "fct-type": "module",
        "title": "Containers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "Containers",
        "normalized": "",
        "package": "container-classes",
        "partial": "Containers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#t:CFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eDenotes \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es that have kind \u003ccode\u003e* -\u003e *\u003c/code\u003e and can thus have\n   more than one possible type of value stored within them.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Containers.html#CFunctor",
        "fct-type": "class",
        "title": "CFunctor"
      },
      "index": {
        "description": "Denotes Container that have kind and can thus have more than one possible type of value stored within them",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "CFunctor",
        "normalized": "",
        "package": "container-classes",
        "partial": "CFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#t:Container",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es are data-types that store values.  No restriction is\n   placed on \u003cem\u003ehow\u003c/em\u003e they store these values, though there may be\n   restrictions on some methods if a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e is also an instance\n   of a sub-class of \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum required implementation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esplitElem\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Containers.html#Container",
        "fct-type": "class",
        "title": "Container"
      },
      "index": {
        "description": "Container are data-types that store values No restriction is placed on how they store these values though there may be restrictions on some methods if Container is also an instance of sub-class of Container Minimum required implementation null insert fold or splitElem",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "Container",
        "normalized": "",
        "package": "container-classes",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#t:SFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es that are also instances of \u003ccode\u003e\u003ca\u003eCFunctor\u003c/a\u003e\u003c/code\u003e.\n   All methods have default definitions.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Containers.html#SFunctor",
        "fct-type": "class",
        "title": "SFunctor"
      },
      "index": {
        "description": "Represents Sequence that are also instances of CFunctor All methods have default definitions",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "SFunctor",
        "normalized": "",
        "package": "container-classes",
        "partial": "SFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#t:Sequence",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es are linear \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es with explicit left (start)\n   and right (end) ends.  As such, it is possible to append/traverse\n   from either end.\n\u003c/p\u003e\u003cp\u003eAll methods have default stand-alone definitions, and thus no\n   explicit method definitions are required for instances.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Containers.html#Sequence",
        "fct-type": "class",
        "title": "Sequence"
      },
      "index": {
        "description": "Sequence are linear Container with explicit left start and right end ends As such it is possible to append traverse from either end All methods have default stand-alone definitions and thus no explicit method definitions are required for instances",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "Sequence",
        "normalized": "",
        "package": "container-classes",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es that may be infinite in length.  All\n   methods have default definitions.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Containers.html#Stream",
        "fct-type": "class",
        "title": "Stream"
      },
      "index": {
        "description": "Represents Sequence that may be infinite in length All methods have default definitions",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "Stream",
        "normalized": "",
        "package": "container-classes",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.  Will\n    throw an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the index is negative or larger than the\n    length of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Int -\u003e v",
        "fct-source": "src/Data-Containers.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "Sequence index subscript operator starting from Will throw an error if the index is negative or larger than the length of the Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "(!!) !!",
        "normalized": "a-\u003eInt-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eInt-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:-43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e; combines two \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es.  For instances\n   of \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e this should be an \u003ccode\u003eappend\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "An alias for mappend combines two Container For instances of Sequence this should be an append operation",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "(++) ++",
        "normalized": "a-\u003ea-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if\n   all elements of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#all",
        "fct-type": "method",
        "title": "all"
      },
      "index": {
        "description": "Applied to predicate and Container all determines if all elements of the Container satisfy the predicate",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the conjunction of a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e containing Boolean\n   values.  For the result to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e must be\n   finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value\n   occurring within a finite position within the order utilised by\n   \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#and",
        "fct-type": "method",
        "title": "and"
      },
      "index": {
        "description": "Returns the conjunction of Container containing Boolean values For the result to be True the Container must be finite False however results from False value occurring within finite position within the order utilised by fold",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "and",
        "normalized": "a-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n   any element of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#any",
        "fct-type": "method",
        "title": "any"
      },
      "index": {
        "description": "Applied to predicate and Container any determines if any element of the Container satisfies the predicate",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eWhen applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, returns\n   a tuple where first element is longest prefix (possibly empty)\n   of \u003ccode\u003exs\u003c/code\u003e of elements that \u003cem\u003edo not satisfy\u003c/em\u003e p and second element\n   is the remainder of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Containers.html#break",
        "fct-type": "method",
        "title": "break"
      },
      "index": {
        "description": "When applied to predicate and Sequence xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the Sequence break is equivalent to span not",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:build",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "((v -\u003e c -\u003e c) -\u003e c -\u003e c) -\u003e c",
        "fct-source": "src/Data-Containers.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "build",
        "normalized": "((a-\u003eb-\u003eb)-\u003eb-\u003eb)-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "((v-\u003ec-\u003ec)-\u003ec-\u003ec)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:buildL",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "((c -\u003e v -\u003e c) -\u003e c -\u003e c) -\u003e c",
        "fct-source": "src/Data-Containers.html#buildL",
        "fct-type": "function",
        "title": "buildL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "buildL",
        "normalized": "((a-\u003eb-\u003ea)-\u003ea-\u003ea)-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "((c-\u003ev-\u003ec)-\u003ec-\u003ec)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate all the inner \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es together.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "o -\u003e i",
        "fct-source": "src/Data-Containers.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate all the inner Container together",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "concat",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "o-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e and concatenate the results.\n   Note that the types of the initial and final \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es do not\n   have to be the same.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(fv -\u003e t) -\u003e f -\u003e t",
        "fct-source": "src/Data-Containers.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over Container and concatenate the results Note that the types of the initial and final Container do not have to be the same",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "concatMap",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "container-classes",
        "partial": "Map",
        "signature": "(fv-\u003et)-\u003ef-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "An alias for insert for Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:convertContainer",
      "description": {
        "fct-descr": "\u003cp\u003eConvert one \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e to another.  If they are both\n   \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es, then ordering is preserved.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "f -\u003e t",
        "fct-source": "src/Data-Containers.html#convertContainer",
        "fct-type": "function",
        "title": "convertContainer"
      },
      "index": {
        "description": "Convert one Container to another If they are both Sequence then ordering is preserved",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "convertContainer",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "Container",
        "signature": "f-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:convertContainerBy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert one \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e to another by utilising a mapping\n   function.  If they are both \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es, then ordering is\n   preserved.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(fv -\u003e tv) -\u003e f -\u003e t",
        "fct-source": "src/Data-Containers.html#convertContainerBy",
        "fct-type": "function",
        "title": "convertContainerBy"
      },
      "index": {
        "description": "Convert one Container to another by utilising mapping function If they are both Sequence then ordering is preserved",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "convertContainerBy",
        "normalized": "(a-\u003eb)-\u003ec-\u003ed",
        "package": "container-classes",
        "partial": "Container By",
        "signature": "(fv-\u003etv)-\u003ef-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e into a circular one, or\n   equivalently, the infinite repetition of the original \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n   It is the identity on infinite \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e c",
        "fct-source": "src/Data-Containers.html#cycle",
        "fct-type": "method",
        "title": "cycle"
      },
      "index": {
        "description": "cycle ties finite Stream into circular one or equivalently the infinite repetition of the original Stream It is the identity on infinite Stream",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "cycle",
        "normalized": "a-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the first value of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e that matches the\n   predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Delete the first value of the Container that matches the predicate",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "delete",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:deleteAll",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all values in the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e that match the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#deleteAll",
        "fct-type": "method",
        "title": "deleteAll"
      },
      "index": {
        "description": "Delete all values in the Container that match the predicate",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "deleteAll",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "All",
        "signature": "v-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e has to be an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, and is\n   usually more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "Int -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#drop",
        "fct-type": "method",
        "title": "drop"
      },
      "index": {
        "description": "variant of genericDrop where has to be an Int and is usually more efficient",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "drop",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "Int-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the suffix remaining after\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#dropWhile",
        "fct-type": "method",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "While",
        "signature": "(v-\u003eBool)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eThe container membership predicate, usually written in infix\n   form, e.g., \u003ccode\u003ev \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#elem",
        "fct-type": "method",
        "title": "elem"
      },
      "index": {
        "description": "The container membership predicate usually written in infix form e.g elem",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "elem",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e; constructs an empty \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c",
        "fct-source": "src/Data-Containers.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An alias for mempty constructs an empty Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "empty",
        "normalized": "",
        "package": "container-classes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:enumFrom",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "a -\u003e c",
        "fct-source": "src/Data-Containers.html#enumFrom",
        "fct-type": "function",
        "title": "enumFrom"
      },
      "index": {
        "description": "wrapper around enumFrom",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "enumFrom",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "From",
        "signature": "a-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:enumFromThen",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "a -\u003e a -\u003e c",
        "fct-source": "src/Data-Containers.html#enumFromThen",
        "fct-type": "function",
        "title": "enumFromThen"
      },
      "index": {
        "description": "wrapper around enumFromThen",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "enumFromThen",
        "normalized": "a-\u003ea-\u003eb",
        "package": "container-classes",
        "partial": "From Then",
        "signature": "a-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:enumFromThenTo",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eenumFromThenTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "a -\u003e a -\u003e a -\u003e c",
        "fct-source": "src/Data-Containers.html#enumFromThenTo",
        "fct-type": "function",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "wrapper around enumFromThenTo",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "enumFromThenTo",
        "normalized": "a-\u003ea-\u003ea-\u003eb",
        "package": "container-classes",
        "partial": "From Then To",
        "signature": "a-\u003ea-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eenumFromTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "a -\u003e a -\u003e c",
        "fct-source": "src/Data-Containers.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "wrapper around enumFromTo",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003eb",
        "package": "container-classes",
        "partial": "From To",
        "signature": "a-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eWhen applied to a predicate and a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e returns\n   the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e containing just those elements that satisfy the\n   predicate (preserving order where applicable).\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#filter",
        "fct-type": "method",
        "title": "filter"
      },
      "index": {
        "description": "When applied to predicate and Container filter returns the Container containing just those elements that satisfy the predicate preserving order where applicable",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to a binary operator, a starting value and a\n   \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e, reduce the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e using the binary operator.\n   For \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e instances, this should be a right fold.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e c -\u003e a",
        "fct-source": "src/Data-Containers.html#fold",
        "fct-type": "method",
        "title": "fold"
      },
      "index": {
        "description": "Applied to binary operator starting value and Container reduce the Container using the binary operator For Sequence instances this should be right fold",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003ec-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:fold1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e with no starting value, and thus must be\n   applied to non-empty \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e c -\u003e v",
        "fct-source": "src/Data-Containers.html#fold1",
        "fct-type": "method",
        "title": "fold1"
      },
      "index": {
        "description": "variant of fold with no starting value and thus must be applied to non-empty Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "fold1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to a binary operator, a starting value and a\n   \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e, reduce the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e using the binary operator\n   from left to right.\n\u003c/p\u003e\u003cp\u003eThe default definition is modelled after \u003ccode\u003eData.List.foldl'\u003c/code\u003e\n   rather than \u003ccode\u003eData.List.foldl\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(b -\u003e v -\u003e b) -\u003e b -\u003e c -\u003e b",
        "fct-source": "src/Data-Containers.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "Applied to binary operator starting value and Sequence reduce the Sequence using the binary operator from left to right The default definition is modelled after Data.List.foldl rather than Data.List.foldl",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "(b-\u003ev-\u003eb)-\u003eb-\u003ec-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e with no starting value, and thus must be\n   applied to non-empty \u003ccode\u003eSequences\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e c -\u003e v",
        "fct-source": "src/Data-Containers.html#foldl1",
        "fct-type": "method",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl with no starting value and thus must be applied to non-empty Sequences",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eSeuquence\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e a -\u003e a) -\u003e a -\u003e c -\u003e a",
        "fct-source": "src/Data-Containers.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "An alias for fold for Seuquence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ea-\u003ea)-\u003ea-\u003ec-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eSeuquence\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e c -\u003e v",
        "fct-source": "src/Data-Containers.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "An alias for fold1 for Seuquence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericDrop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first\n   \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "n -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#genericDrop",
        "fct-type": "method",
        "title": "genericDrop"
      },
      "index": {
        "description": "genericDrop xs returns the suffix of xs after the first elements or empty if length xs",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericDrop",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "Drop",
        "signature": "n-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericLength",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003egenericSize\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e n",
        "fct-source": "src/Data-Containers.html#genericLength",
        "fct-type": "function",
        "title": "genericLength"
      },
      "index": {
        "description": "An alias for genericSize for Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericLength",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "Length",
        "signature": "c-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericReplicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e where\n   every element is \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "n -\u003e v -\u003e c",
        "fct-source": "src/Data-Containers.html#genericReplicate",
        "fct-type": "method",
        "title": "genericReplicate"
      },
      "index": {
        "description": "genericReplicate is Sequence of length where every element is",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericReplicate",
        "normalized": "a-\u003eb-\u003ec",
        "package": "container-classes",
        "partial": "Replicate",
        "signature": "n-\u003ev-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e n",
        "fct-source": "src/Data-Containers.html#genericSize",
        "fct-type": "method",
        "title": "genericSize"
      },
      "index": {
        "description": "Returns the size of the Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericSize",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "Size",
        "signature": "c-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericSplitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns a tuple where the first element\n   is the prefix of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e of \u003ccode\u003exs\u003c/code\u003e and the second element is\n   the rest of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.  It is equivalent to\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "n -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Containers.html#genericSplitAt",
        "fct-type": "method",
        "title": "genericSplitAt"
      },
      "index": {
        "description": "genericSplitAt xs returns tuple where the first element is the prefix of length of xs and the second element is the rest of the Sequence It is equivalent to genericTake xs genericDrop xs",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericSplitAt",
        "normalized": "a-\u003eb-\u003e(b,b)",
        "package": "container-classes",
        "partial": "Split At",
        "signature": "n-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:genericTake",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first \u003ccode\u003en\u003c/code\u003e elements of a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e, or the entire\n   \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e if its \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e is less than \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "n -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#genericTake",
        "fct-type": "method",
        "title": "genericTake"
      },
      "index": {
        "description": "Return the first elements of Sequence or the entire Sequence if its length is less than",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "genericTake",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "Take",
        "signature": "n-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eThe first element of a non-empty \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#head",
        "fct-type": "method",
        "title": "head"
      },
      "index": {
        "description": "The first element of non-empty Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "head",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eEverything except the last value of a non-empty \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e c",
        "fct-source": "src/Data-Containers.html#init",
        "fct-type": "method",
        "title": "init"
      },
      "index": {
        "description": "Everything except the last value of non-empty Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "init",
        "normalized": "a-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a value to the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.  If this is also a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e,\n   then it should be a \"\u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e\" operation (i.e. insert the value\n   at the beginning of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Add value to the Container If this is also Sequence then it should be cons operation i.e insert the value at the beginning of the Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e returns an infinite \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e of repeated\n   applications of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x = x `cons` f x `cons` f (f x) `cons` ...\n\u003c/pre\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e v) -\u003e v -\u003e c",
        "fct-source": "src/Data-Containers.html#iterate",
        "fct-type": "method",
        "title": "iterate"
      },
      "index": {
        "description": "iterate returns an infinite Stream of repeated applications of to iterate cons cons cons",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003ev)-\u003ev-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eThe last element of a non-empty \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#last",
        "fct-type": "method",
        "title": "last"
      },
      "index": {
        "description": "The last element of non-empty Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "last",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-Containers.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "An alias for size for Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eStrings\u003c/code\u003e at\n   newline characters. The resulting \u003ccode\u003eStrings\u003c/code\u003e do not contain\n   newlines.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "String -\u003e c",
        "fct-source": "src/Data-Containers.html#lines",
        "fct-type": "method",
        "title": "lines"
      },
      "index": {
        "description": "lines breaks string up into Sequence of Strings at newline characters The resulting Strings do not contain newlines",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "lines",
        "normalized": "String-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "String-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply the provided function on every element of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e b) -\u003e c a -\u003e c b",
        "fct-source": "src/Data-Containers.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "Apply the provided function on every element of the Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ec a-\u003ec b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eApply the monadic mapping function to all the elements of the\n   'Container, and then evaluate the actions and collect the\n   results.  The order the actions are evaluated in are determined\n   by the corresponding \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e m b) -\u003e c a -\u003e m (c b)",
        "fct-source": "src/Data-Containers.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Apply the monadic mapping function to all the elements of the Container and then evaluate the actions and collect the results The order the actions are evaluated in are determined by the corresponding fold definition",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ec a-\u003em(c b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eApply the monadic mapping function to all the elements of the\n   'Container, and then evaluate the actions and discard the\n   results.  The order the actions are evaluated in are determined\n   by the corresponding \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e m b) -\u003e c a -\u003e m ()",
        "fct-source": "src/Data-Containers.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Apply the monadic mapping function to all the elements of the Container and then evaluate the actions and discard the results The order the actions are evaluated in are determined by the corresponding fold definition",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ec a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the maximum value of a non-empty, finite \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#maximum",
        "fct-type": "method",
        "title": "maximum"
      },
      "index": {
        "description": "Returns the maximum value of non-empty finite Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "maximum",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the minimum value of a non-empty, finite \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#minimum",
        "fct-type": "method",
        "title": "minimum"
      },
      "index": {
        "description": "Returns the minimum value of non-empty finite Container",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "minimum",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003eThe negated version of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#notElem",
        "fct-type": "method",
        "title": "notElem"
      },
      "index": {
        "description": "The negated version of elem",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "notElem",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "container-classes",
        "partial": "Elem",
        "signature": "v-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Test whether Container is empty",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the disjunction of a \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e containing Boolean\n   values.  For the result to be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e must be\n   finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value\n   occurring within a finite position within the order utilised by\n   \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Bool",
        "fct-source": "src/Data-Containers.html#or",
        "fct-type": "method",
        "title": "or"
      },
      "index": {
        "description": "Returns the disjunction of Container containing Boolean values For the result to be False the Container must be finite True however results from True value occurring within finite position within the order utilised by fold",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "or",
        "normalized": "a-\u003eBool",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:partition",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Containers.html#partition",
        "fct-type": "method",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the product of a finite \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e of numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#product",
        "fct-type": "method",
        "title": "product"
      },
      "index": {
        "description": "Computes the product of finite Container of numbers",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "product",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is an infinite \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, with \u003ccode\u003ex\u003c/code\u003e the value of\n   every element.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c",
        "fct-source": "src/Data-Containers.html#repeat",
        "fct-type": "method",
        "title": "repeat"
      },
      "index": {
        "description": "repeat is an infinite Stream with the value of every element",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "repeat",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e has to be an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e,\n   and is usually more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "Int -\u003e v -\u003e c",
        "fct-source": "src/Data-Containers.html#replicate",
        "fct-type": "method",
        "title": "replicate"
      },
      "index": {
        "description": "variant of genericReplicate where has to be an Int and is usually more efficient",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "Int-\u003ev-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n   \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e c",
        "fct-source": "src/Data-Containers.html#reverse",
        "fct-type": "method",
        "title": "reverse"
      },
      "index": {
        "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "reverse",
        "normalized": "a-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:rigidMap",
      "description": {
        "fct-descr": "\u003cp\u003eA type-preserving mapping function, where the resulting\n   \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e is obtained by applying the provided function on\n   every element of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e.  For instances of \u003ccode\u003e\u003ca\u003eCFunctor\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003erigidMap\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e suffices.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e v) -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#rigidMap",
        "fct-type": "method",
        "title": "rigidMap"
      },
      "index": {
        "description": "type-preserving mapping function where the resulting Container is obtained by applying the provided function on every element of the Container For instances of CFunctor rigidMap map suffices",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "rigidMap",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "Map",
        "signature": "(v-\u003ev)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:scanl",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e c a -\u003e c b",
        "fct-source": "src/Data-Containers.html#scanl",
        "fct-type": "method",
        "title": "scanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "scanl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ec a",
        "package": "container-classes",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ec a-\u003ec b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:scanl1",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e c a -\u003e c a",
        "fct-source": "src/Data-Containers.html#scanl1",
        "fct-type": "method",
        "title": "scanl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "scanl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ec a-\u003ec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:scanr",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e c a -\u003e c b",
        "fct-source": "src/Data-Containers.html#scanr",
        "fct-type": "method",
        "title": "scanr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "scanr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003ec b",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003ec b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:scanr1",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e c a -\u003e c a",
        "fct-source": "src/Data-Containers.html#scanr1",
        "fct-type": "method",
        "title": "scanr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "scanr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a",
        "package": "container-classes",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ec a-\u003ec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e and collect the results.\n   The order the actions are evaluated in are determined by the\n   corresponding \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c (m a) -\u003e m (c a)",
        "fct-source": "src/Data-Containers.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Evaluate each action in the Container and collect the results The order the actions are evaluated in are determined by the corresponding fold definition",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "sequence",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "container-classes",
        "partial": "",
        "signature": "c(m a)-\u003em(c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:sequence_",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e and discard the results.\n   The order the actions are evaluated in are determined by the\n   corresponding \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Data-Containers.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "Evaluate each action in the Container and discard the results The order the actions are evaluated in are determined by the corresponding fold definition",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "sequence_",
        "normalized": "a-\u003eb()",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a singleton \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e;\n   i.e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e x) == 1\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "v -\u003e c",
        "fct-source": "src/Data-Containers.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton Container i.e size singleton",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "singleton",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "v-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of the \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.  Typically\n   more efficient than \u003ccode\u003e\u003ca\u003egenericSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-Containers.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Returns the size of the Container as an Int Typically more efficient than genericSize",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "size",
        "normalized": "a-\u003eInt",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eAppend the value to the end of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v -\u003e c",
        "fct-source": "src/Data-Containers.html#snoc",
        "fct-type": "method",
        "title": "snoc"
      },
      "index": {
        "description": "Append the value to the end of the Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "snoc",
        "normalized": "a-\u003eb-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eWhen applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, returns\n   a tuple where first element is longest prefix (possibly empty)\n   of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy p and second element is the\n   remainder of the \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Containers.html#span",
        "fct-type": "method",
        "title": "span"
      },
      "index": {
        "description": "When applied to predicate and Sequence xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the Sequence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
        "package": "container-classes",
        "partial": "",
        "signature": "(v-\u003eBool)-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e has to be an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, and\n   is usually more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "Int -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Containers.html#splitAt",
        "fct-type": "method",
        "title": "splitAt"
      },
      "index": {
        "description": "variant of genericSplitAt where has to be an Int and is usually more efficient",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "splitAt",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "container-classes",
        "partial": "At",
        "signature": "Int-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:splitElem",
      "description": {
        "fct-descr": "\u003cp\u003eAn inverse to \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.  Should obey the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eisNothing (\u003ccode\u003e\u003ca\u003esplitElem\u003c/a\u003e\u003c/code\u003e c) == \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e c\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitElem\u003c/a\u003e\u003c/code\u003e c = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (v,c')\u003c/code\u003e, then \u003ccode\u003ec == v `'insert'` c'\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ec\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e, then the returned value\n     should be the first one.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Maybe (v, c)",
        "fct-source": "src/Data-Containers.html#splitElem",
        "fct-type": "method",
        "title": "splitElem"
      },
      "index": {
        "description": "An inverse to insert Should obey the following isNothing splitElem null If splitElem Just then insert If is an instance of Sequence then the returned value should be the first one",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "splitElem",
        "normalized": "a-\u003eMaybe(b,a)",
        "package": "container-classes",
        "partial": "Elem",
        "signature": "c-\u003eMaybe(v,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the sum of a finite \u003ccode\u003e\u003ca\u003eContainer\u003c/a\u003e\u003c/code\u003e of numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e v",
        "fct-source": "src/Data-Containers.html#sum",
        "fct-type": "method",
        "title": "sum"
      },
      "index": {
        "description": "Computes the sum of finite Container of numbers",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "sum",
        "normalized": "a-\u003eb",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eEverything except the first element of a non-empty \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e.\n   Consider instead using 'drop 1'.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e c",
        "fct-source": "src/Data-Containers.html#tail",
        "fct-type": "method",
        "title": "tail"
      },
      "index": {
        "description": "Everything except the first element of non-empty Sequence Consider instead using drop",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "tail",
        "normalized": "a-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e has to be an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, and is\n   usually more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "Int -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#take",
        "fct-type": "method",
        "title": "take"
      },
      "index": {
        "description": "variant of genericTake where has to be an Int and is usually more efficient",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "take",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "Int-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eWhen applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, returns\n   the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n   satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(v -\u003e Bool) -\u003e c -\u003e c",
        "fct-source": "src/Data-Containers.html#takeWhile",
        "fct-type": "method",
        "title": "takeWhile"
      },
      "index": {
        "description": "When applied to predicate and Sequence xs returns the longest prefix possibly empty of xs of elements that satisfy",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
        "package": "container-classes",
        "partial": "While",
        "signature": "(v-\u003eBool)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e. It joins lines,\n   after appending a terminating newline to each.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e String",
        "fct-source": "src/Data-Containers.html#unlines",
        "fct-type": "method",
        "title": "unlines"
      },
      "index": {
        "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "unlines",
        "normalized": "a-\u003eString",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e. It joins words\n   with separating spaces.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e String",
        "fct-source": "src/Data-Containers.html#unwords",
        "fct-type": "method",
        "title": "unwords"
      },
      "index": {
        "description": "unwords is an inverse operation to words It joins words with separating spaces",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "unwords",
        "normalized": "a-\u003eString",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:unzip",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c (a, b) -\u003e (c a, c b)",
        "fct-source": "src/Data-Containers.html#unzip",
        "fct-type": "method",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "unzip",
        "normalized": "a(b,c)-\u003e(a b,a c)",
        "package": "container-classes",
        "partial": "",
        "signature": "c(a,b)-\u003e(c a,c b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:unzip3",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c (a, b, d) -\u003e (c a, c b, c d)",
        "fct-source": "src/Data-Containers.html#unzip3",
        "fct-type": "method",
        "title": "unzip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "unzip3",
        "normalized": "a(b,c,d)-\u003e(a b,a c,a d)",
        "package": "container-classes",
        "partial": "",
        "signature": "c(a,b,d)-\u003e(c a,c b,c d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:viewL",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esplitElem\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eSeuquence\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Maybe (v, c)",
        "fct-source": "src/Data-Containers.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "An alias for splitElem for Seuquence",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "viewL",
        "normalized": "a-\u003eMaybe(b,a)",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eMaybe(v,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:viewR",
      "description": {
        "fct-descr": "\u003cp\u003eAn inverse to \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e (equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e xs, 'last xs')\u003c/code\u003e\n   for non-empty \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es).  Should obey the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eisNothing (\u003ccode\u003e\u003ca\u003eviewR\u003c/a\u003e\u003c/code\u003e xs) == \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e xs\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eviewR\u003c/a\u003e\u003c/code\u003e xs = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (x,xs')\u003c/code\u003e, then \u003ccode\u003exs == xs' `'snoc'` x\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c -\u003e Maybe (v, c)",
        "fct-source": "src/Data-Containers.html#viewR",
        "fct-type": "method",
        "title": "viewR"
      },
      "index": {
        "description": "An inverse to snoc equivalent to init xs last xs for non-empty Sequence Should obey the following isNothing viewR xs null xs If viewR xs Just xs then xs xs snoc",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "viewR",
        "normalized": "a-\u003eMaybe(b,a)",
        "package": "container-classes",
        "partial": "",
        "signature": "c-\u003eMaybe(v,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e up into a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e of words, which\n   were delimited by white space.\n\u003c/p\u003e",
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "String -\u003e c",
        "fct-source": "src/Data-Containers.html#words",
        "fct-type": "method",
        "title": "words"
      },
      "index": {
        "description": "words breaks String up into Sequence of words which were delimited by white space",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "words",
        "normalized": "String-\u003ea",
        "package": "container-classes",
        "partial": "",
        "signature": "String-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:zip",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c a -\u003e c b -\u003e c (a, b)",
        "fct-source": "src/Data-Containers.html#zip",
        "fct-type": "method",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "zip",
        "normalized": "a b-\u003ea c-\u003ea(b,c)",
        "package": "container-classes",
        "partial": "",
        "signature": "c a-\u003ec b-\u003ec(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:zip3",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "c a -\u003e c b -\u003e c d -\u003e c (a, b, d)",
        "fct-source": "src/Data-Containers.html#zip3",
        "fct-type": "method",
        "title": "zip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "zip3",
        "normalized": "a b-\u003ea c-\u003ea d-\u003ea(b,c,d)",
        "package": "container-classes",
        "partial": "",
        "signature": "c a-\u003ec b-\u003ec d-\u003ec(a,b,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:zipWith",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e b -\u003e d) -\u003e c a -\u003e c b -\u003e c d",
        "fct-source": "src/Data-Containers.html#zipWith",
        "fct-type": "method",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "container-classes",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ed)-\u003ec a-\u003ec b-\u003ec d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/container-classes/docs/Data-Containers.html#v:zipWith3",
      "description": {
        "fct-module": "Data.Containers",
        "fct-package": "container-classes",
        "fct-signature": "(a -\u003e b -\u003e d -\u003e e) -\u003e c a -\u003e c b -\u003e c d -\u003e c e",
        "fct-source": "src/Data-Containers.html#zipWith3",
        "fct-type": "method",
        "title": "zipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Containers",
        "module": "Data.Containers",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "container-classes",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ed-\u003ee)-\u003ec a-\u003ec b-\u003ec d-\u003ec e"
      }
    }
  }
]