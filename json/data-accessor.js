[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003eAccessor\u003c/code\u003e type.\nIt should be imported with qualification.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "This module defines the Accessor type It should be imported with qualification",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eThe accessor function we use,\nhas a record value as first argument\nand returns the content of a specific record field\nand a function that allows to overwrite that field with a new value.\n\u003c/p\u003e\u003cp\u003eIn former version of a package\nwe used a function that resembled the state monad.\nHowever this required to use an \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\nin the implementation of the \u003ccode\u003eget\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "data",
        "fct-source": "src/Data-Accessor-Private.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "The accessor function we use has record value as first argument and returns the content of specific record field and function that allows to overwrite that field with new value In former version of package we used function that resembled the state monad However this required to use an undefined in the implementation of the get function",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "T",
        "normalized": "",
        "package": "data-accessor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:-36--37-",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped version of '($)'.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e b",
        "fct-source": "src/Data-Accessor-Basic.html#%24%25",
        "fct-type": "function",
        "title": "($%)"
      },
      "index": {
        "description": "Flipped version of",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "($%) $%",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "data-accessor",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor composition the other direction.\n\u003c/p\u003e\u003cpre\u003e (\u003c.) = flip (.\u003e)\n\u003c/pre\u003e\u003cp\u003eYou may also use the \u003ccode\u003e(.)\u003c/code\u003e operator from Category class.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T b c -\u003e T a b -\u003e T a c",
        "fct-source": "src/Data-Accessor-Basic.html#%3C.",
        "fct-type": "function",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "Accessor composition the other direction flip You may also use the operator from Category class",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "(\u003c.) \u003c.",
        "normalized": "T a b-\u003eT c a-\u003eT c b",
        "package": "data-accessor",
        "partial": "",
        "signature": "T b c-\u003eT a b-\u003eT a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:-94--61-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write \u003ccode\u003efirst ^= 2+3 $ second ^= 5+7 $ record\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#%5E%3D",
        "fct-type": "function",
        "title": "(^=)"
      },
      "index": {
        "description": "set as infix operator This lets us write first second record",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "(^=) ^=",
        "normalized": "T a b-\u003eb-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:-94-.",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write \u003ccode\u003erecord^.field^.subfield\u003c/code\u003e.\nThis imitates Modula II syntax.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "r -\u003e T r a -\u003e a",
        "fct-source": "src/Data-Accessor-Basic.html#%5E.",
        "fct-type": "function",
        "title": "(^.)"
      },
      "index": {
        "description": "get as infix operator This lets us write record field subfield This imitates Modula II syntax",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "(^.) ^.",
        "normalized": "a-\u003eT a b-\u003eb",
        "package": "data-accessor",
        "partial": "",
        "signature": "r-\u003eT r a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:-94-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write\n\u003ccode\u003efield^:subfield^:(2*) $ record\u003c/code\u003e,\n\u003ccode\u003erecord$%field^:subfield^:(2*)\u003c/code\u003e\nor \u003ccode\u003erecord$%field^:subfield^:(const 1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#%5E%3A",
        "fct-type": "function",
        "title": "(^:)"
      },
      "index": {
        "description": "modify as infix operator This lets us write field subfield record record field subfield or record field subfield const",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "(^:) ^:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor composition:\nCombine an accessor with an accessor to a sub-field.\nSpeak \"stack\".\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T a b -\u003e T b c -\u003e T a c",
        "fct-source": "src/Data-Accessor-Basic.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Accessor composition Combine an accessor with an accessor to sub-field Speak stack",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "(.\u003e) .\u003e",
        "normalized": "T a b-\u003eT b c-\u003eT a c",
        "package": "data-accessor",
        "partial": "",
        "signature": "T a b-\u003eT b c-\u003eT a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a general function,\nbut it is especially useful for setting many values of different type at once.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "[r -\u003e r] -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "This is general function but it is especially useful for setting many values of different type at once",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "compose",
        "normalized": "[a-\u003ea]-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "[r-\u003er]-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:fromLens",
      "description": {
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "(r -\u003e (a, a -\u003e r)) -\u003e T r a",
        "fct-source": "src/Data-Accessor-Basic.html#fromLens",
        "fct-type": "function",
        "title": "fromLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "fromLens",
        "normalized": "(a-\u003e(b,b-\u003ea))-\u003eT a b",
        "package": "data-accessor",
        "partial": "Lens",
        "signature": "(r-\u003e(a,a-\u003er))-\u003eT r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:fromSetGet",
      "description": {
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "(a -\u003e r -\u003e r) -\u003e (r -\u003e a) -\u003e T r a",
        "fct-source": "src/Data-Accessor-Basic.html#fromSetGet",
        "fct-type": "function",
        "title": "fromSetGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "fromSetGet",
        "normalized": "(a-\u003eb-\u003eb)-\u003e(b-\u003ea)-\u003eT b a",
        "package": "data-accessor",
        "partial": "Set Get",
        "signature": "(a-\u003er-\u003er)-\u003e(r-\u003ea)-\u003eT r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:fromWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eIf an object is wrapped in a \u003ccode\u003enewtype\u003c/code\u003e,\nyou can generate an \u003ccode\u003eAccessor\u003c/code\u003e to the unwrapped data\nby providing a wrapper and an unwrapper function.\nThe set function is simpler in this case,\nsince no existing data must be kept.\nSince the information content of the wrapped and unwrapped data is equivalent,\nyou can swap wrapper and unwrapper.\nThis way you can construct an \u003ccode\u003eAccessor\u003c/code\u003e\nthat treats a record field containing an unwrapped object\nlike a field containing a wrapped object.\n\u003c/p\u003e\u003cpre\u003e newtype A = A {unA :: Int}\n\n access :: Accessor.T A Int\n access = fromWrapper A unA\n\u003c/pre\u003e\u003cp\u003eWe could also have called this function \u003ccode\u003efromBijection\u003c/code\u003e,\nsince it must hold \u003ccode\u003ewrap . unwrap = id\u003c/code\u003e and \u003ccode\u003eunwrap . wrap = id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "(b -\u003e a) -\u003e (a -\u003e b) -\u003e T a b",
        "fct-source": "src/Data-Accessor-Basic.html#fromWrapper",
        "fct-type": "function",
        "title": "fromWrapper"
      },
      "index": {
        "description": "If an object is wrapped in newtype you can generate an Accessor to the unwrapped data by providing wrapper and an unwrapper function The set function is simpler in this case since no existing data must be kept Since the information content of the wrapped and unwrapped data is equivalent you can swap wrapper and unwrapper This way you can construct an Accessor that treats record field containing an unwrapped object like field containing wrapped object newtype unA Int access Accessor.T Int access fromWrapper unA We could also have called this function fromBijection since it must hold wrap unwrap id and unwrap wrap id",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "fromWrapper",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eT b a",
        "package": "data-accessor",
        "partial": "Wrapper",
        "signature": "(b-\u003ea)-\u003e(a-\u003eb)-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a field. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e r -\u003e a",
        "fct-source": "src/Data-Accessor-Basic.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the value of field",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "get",
        "normalized": "T a b-\u003ea-\u003eb",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003er-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge the accessors to two independent fields.\n\u003c/p\u003e\u003cp\u003eIndependency means, it must hold:\n\u003c/p\u003e\u003cpre\u003e set (merge accA accB) (a,b) = set (merge accB accA) (b,a)\n\u003c/pre\u003e\u003cp\u003eYou may construct smart accessors\nby composing a merged accessor with a \u003ccode\u003efromWrapper\u003c/code\u003e accessor.\n\u003c/p\u003e\u003cp\u003eThis is a special case of the more general \u003ccode\u003ePoint\u003c/code\u003e concept\nin the package \u003ccode\u003efclabels\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T a b -\u003e T a c -\u003e T a (b, c)",
        "fct-source": "src/Data-Accessor-Basic.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge the accessors to two independent fields Independency means it must hold set merge accA accB set merge accB accA You may construct smart accessors by composing merged accessor with fromWrapper accessor This is special case of the more general Point concept in the package fclabels",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "merge",
        "normalized": "T a b-\u003eT a c-\u003eT a(b,c)",
        "package": "data-accessor",
        "partial": "",
        "signature": "T a b-\u003eT a c-\u003eT a(b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the value of a field by a function. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Transform the value of field by function",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eAccess a (non-existing) element of type \u003ccode\u003e()\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r ()",
        "fct-source": "src/Data-Accessor-Basic.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Access non-existing element of type",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "null",
        "normalized": "T a()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eresult a\u003c/code\u003e accesses the value of a function for argument \u003ccode\u003ea\u003c/code\u003e.\nIt is not very efficient to build a function\nfrom setting all of its values using this accessor,\nsince every access to a function adds another \u003ccode\u003eif-then-else\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso see semantic editor combinators,\nthat allow to modify all function values of a function at once.\nCf. \u003ca\u003ehttp://conal.net/blog/posts/semantic-editor-combinators/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "a -\u003e T (a -\u003e b) b",
        "fct-source": "src/Data-Accessor-Basic.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "result accesses the value of function for argument It is not very efficient to build function from setting all of its values using this accessor since every access to function adds another if-then-else Also see semantic editor combinators that allow to modify all function values of function at once Cf http conal.net blog posts semantic-editor-combinators",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "result",
        "normalized": "a-\u003eT(a-\u003eb)b",
        "package": "data-accessor",
        "partial": "",
        "signature": "a-\u003eT(a-\u003eb)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:self",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the record itself\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r r",
        "fct-source": "src/Data-Accessor-Basic.html#self",
        "fct-type": "function",
        "title": "self"
      },
      "index": {
        "description": "Access the record itself",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "self",
        "normalized": "",
        "package": "data-accessor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Basic.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of a field. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Basic",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set the value of field",
        "hierarchy": "Data Accessor Basic",
        "module": "Data.Accessor.Basic",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading records from streams\n\u003c/p\u003e\u003cp\u003eThis is still only for demonstration and might be of not much use\nand you should not rely on the interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-BinaryRead.html",
        "fct-type": "module",
        "title": "BinaryRead"
      },
      "index": {
        "description": "Reading records from streams This is still only for demonstration and might be of not much use and you should not rely on the interface",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "BinaryRead",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Binary Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:ByteCompatible",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "class",
        "fct-source": "src/Data-Accessor-BinaryRead.html#ByteCompatible",
        "fct-type": "class",
        "title": "ByteCompatible"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "ByteCompatible",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Byte Compatible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:ByteSource",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "class",
        "fct-source": "src/Data-Accessor-BinaryRead.html#ByteSource",
        "fct-type": "class",
        "title": "ByteSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "ByteSource",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Byte Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:ByteStream",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "class",
        "fct-source": "src/Data-Accessor-BinaryRead.html#ByteStream",
        "fct-type": "class",
        "title": "ByteStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "ByteStream",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Byte Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:C",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "class",
        "fct-source": "src/Data-Accessor-BinaryRead.html#C",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "C",
        "normalized": "",
        "package": "data-accessor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:Parser",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Accessor-BinaryRead.html#Parser",
        "fct-type": "newtype",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "Parser",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#t:Stream",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "type",
        "fct-source": "src/Data-Accessor-BinaryRead.html#Stream",
        "fct-type": "type",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "Stream",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:Parser",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "Parser",
        "fct-source": "src/Data-Accessor-BinaryRead.html#Parser",
        "fct-type": "function",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "Parser",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:any",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "source a",
        "fct-source": "src/Data-Accessor-BinaryRead.html#any",
        "fct-type": "method",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "any",
        "normalized": "",
        "package": "data-accessor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:field",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e Parser s r",
        "fct-source": "src/Data-Accessor-BinaryRead.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "field",
        "normalized": "T a b-\u003eParser c a",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003eParser s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:getWord8",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "s -\u003e m (Word8, s)",
        "fct-source": "src/Data-Accessor-BinaryRead.html#getWord8",
        "fct-type": "method",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "getWord8",
        "normalized": "a-\u003eb(Word,a)",
        "package": "data-accessor",
        "partial": "Word",
        "signature": "s-\u003em(Word,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:readWord8",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "source Word8",
        "fct-source": "src/Data-Accessor-BinaryRead.html#readWord8",
        "fct-type": "method",
        "title": "readWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "readWord8",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:record",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "[Parser s r] -\u003e Parser s r",
        "fct-source": "src/Data-Accessor-BinaryRead.html#record",
        "fct-type": "function",
        "title": "record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "record",
        "normalized": "[Parser a b]-\u003eParser a b",
        "package": "data-accessor",
        "partial": "",
        "signature": "[Parser s r]-\u003eParser s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:runParser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "(r, s) -\u003e Maybe (r, s)",
        "fct-source": "src/Data-Accessor-BinaryRead.html#Parser",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "runParser",
        "normalized": "(a,b)-\u003eMaybe(a,b)",
        "package": "data-accessor",
        "partial": "Parser",
        "signature": "(r,s)-\u003eMaybe(r,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-BinaryRead.html#v:toByte",
      "description": {
        "fct-module": "Data.Accessor.BinaryRead",
        "fct-package": "data-accessor",
        "fct-signature": "byte -\u003e Word8",
        "fct-source": "src/Data-Accessor-BinaryRead.html#toByte",
        "fct-type": "method",
        "title": "toByte"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor BinaryRead",
        "module": "Data.Accessor.BinaryRead",
        "name": "toByte",
        "normalized": "a-\u003eWord",
        "package": "data-accessor",
        "partial": "Byte",
        "signature": "byte-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows to access elements of arrays, sets and finite maps\nlike elements of records.\nThis is especially useful for working with nested structures\nconsisting of arrays, sets, maps and records.\n\u003c/p\u003e\u003cp\u003eMaybe we should move it to a separate package,\nthen we would not need to import \u003ccode\u003earray\u003c/code\u003e and \u003ccode\u003econtainers\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Container.html",
        "fct-type": "module",
        "title": "Container"
      },
      "index": {
        "description": "This module allows to access elements of arrays sets and finite maps like elements of records This is especially useful for working with nested structures consisting of arrays sets maps and records Maybe we should move it to separate package then we would not need to import array and containers package",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "Container",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:array",
      "description": {
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "i -\u003e T (Array i e) e",
        "fct-source": "src/Data-Accessor-Container.html#array",
        "fct-type": "function",
        "title": "array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "array",
        "normalized": "a-\u003eT(Array a b)b",
        "package": "data-accessor",
        "partial": "",
        "signature": "i-\u003eT(Array i e)e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:intMapDefault",
      "description": {
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "elem -\u003e Int -\u003e T (IntMap elem) elem",
        "fct-source": "src/Data-Accessor-Container.html#intMapDefault",
        "fct-type": "function",
        "title": "intMapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "intMapDefault",
        "normalized": "a-\u003eInt-\u003eT(IntMap a)a",
        "package": "data-accessor",
        "partial": "Map Default",
        "signature": "elem-\u003eInt-\u003eT(IntMap elem)elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:intMapMaybe",
      "description": {
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "Int -\u003e T (IntMap elem) (Maybe elem)",
        "fct-source": "src/Data-Accessor-Container.html#intMapMaybe",
        "fct-type": "function",
        "title": "intMapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "intMapMaybe",
        "normalized": "Int-\u003eT(IntMap a)(Maybe a)",
        "package": "data-accessor",
        "partial": "Map Maybe",
        "signature": "Int-\u003eT(IntMap elem)(Maybe elem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:mapDefault",
      "description": {
        "fct-descr": "\u003cp\u003eTreats a finite map like an infinite map,\nwhere all undefined elements are replaced by a default value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "elem -\u003e key -\u003e T (Map key elem) elem",
        "fct-source": "src/Data-Accessor-Container.html#mapDefault",
        "fct-type": "function",
        "title": "mapDefault"
      },
      "index": {
        "description": "Treats finite map like an infinite map where all undefined elements are replaced by default value",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "mapDefault",
        "normalized": "a-\u003eb-\u003eT(Map b a)a",
        "package": "data-accessor",
        "partial": "Default",
        "signature": "elem-\u003ekey-\u003eT(Map key elem)elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eTreats a finite map like an infinite map,\nwhere all undefined elements are \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\nand defined elements are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "key -\u003e T (Map key elem) (Maybe elem)",
        "fct-source": "src/Data-Accessor-Container.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Treats finite map like an infinite map where all undefined elements are Nothing and defined elements are Just",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "mapMaybe",
        "normalized": "a-\u003eT(Map a b)(Maybe b)",
        "package": "data-accessor",
        "partial": "Maybe",
        "signature": "key-\u003eT(Map key elem)(Maybe elem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Container.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eTreat a Set like a boolean array.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Container",
        "fct-package": "data-accessor",
        "fct-signature": "a -\u003e T (Set a) Bool",
        "fct-source": "src/Data-Accessor-Container.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Treat Set like boolean array",
        "hierarchy": "Data Accessor Container",
        "module": "Data.Accessor.Container",
        "name": "set",
        "normalized": "a-\u003eT(Set a)Bool",
        "package": "data-accessor",
        "partial": "",
        "signature": "a-\u003eT(Set a)Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: please use Data.Accessor.Monad.Trans.State from data-accessor-transformers\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAccess helper functions in a State monad \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-MonadState.html",
        "fct-type": "module",
        "title": "MonadState"
      },
      "index": {
        "description": "Deprecated please use Data.Accessor.Monad.Trans.State from data-accessor-transformers Access helper functions in State monad",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "MonadState",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:get",
      "description": {
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "get",
        "normalized": "T a b-\u003eStateT a c b",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modify record element and return its old value",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "getAndModify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
        "package": "data-accessor",
        "partial": "And Modify",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:lift",
      "description": {
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r s -\u003e State s a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "lift",
        "normalized": "T a b-\u003eState b c-\u003eStateT a d c",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r s-\u003eState s a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:liftT",
      "description": {
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r s -\u003e StateT s m a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "liftT",
        "normalized": "T a b-\u003eStateT b c d-\u003eStateT a c d",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r s-\u003eStateT s m a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:modify",
      "description": {
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify record element and return its new value",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "modifyAndGet",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
        "package": "data-accessor",
        "partial": "And Get",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-MonadState.html#v:set",
      "description": {
        "fct-module": "Data.Accessor.MonadState",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadState",
        "module": "Data.Accessor.MonadState",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Show.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for creating Show instances using the accessors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Show",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "Support for creating Show instances using the accessors",
        "hierarchy": "Data Accessor Show",
        "module": "Data.Accessor.Show",
        "name": "Show",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Show.html#v:field",
      "description": {
        "fct-module": "Data.Accessor.Show",
        "fct-package": "data-accessor",
        "fct-signature": "String -\u003e T r a -\u003e r -\u003e r -\u003e Maybe ShowS",
        "fct-source": "src/Data-Accessor-Show.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Show",
        "module": "Data.Accessor.Show",
        "name": "field",
        "normalized": "String-\u003eT a b-\u003ea-\u003ea-\u003eMaybe ShowS",
        "package": "data-accessor",
        "partial": "",
        "signature": "String-\u003eT r a-\u003er-\u003er-\u003eMaybe ShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Show.html#v:showsPrec",
      "description": {
        "fct-module": "Data.Accessor.Show",
        "fct-package": "data-accessor",
        "fct-signature": "[r -\u003e r -\u003e Maybe ShowS] -\u003e String -\u003e r -\u003e Int -\u003e r -\u003e ShowS",
        "fct-source": "src/Data-Accessor-Show.html#showsPrec",
        "fct-type": "function",
        "title": "showsPrec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Show",
        "module": "Data.Accessor.Show",
        "name": "showsPrec",
        "normalized": "[a-\u003ea-\u003eMaybe ShowS]-\u003eString-\u003ea-\u003eInt-\u003ea-\u003eShowS",
        "package": "data-accessor",
        "partial": "Prec",
        "signature": "[r-\u003er-\u003eMaybe ShowS]-\u003eString-\u003er-\u003eInt-\u003er-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#",
      "description": {
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Tuple.html",
        "fct-type": "module",
        "title": "Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eAccess to the first value of a pair. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "T (a, b) a",
        "fct-source": "src/Data-Accessor-Tuple.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Access to the first value of pair",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "first",
        "normalized": "T(a,b)a",
        "package": "data-accessor",
        "partial": "",
        "signature": "T(a,b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#v:first3",
      "description": {
        "fct-descr": "\u003cp\u003eAccess to the first value of a triple. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "T (a, b, c) a",
        "fct-source": "src/Data-Accessor-Tuple.html#first3",
        "fct-type": "function",
        "title": "first3"
      },
      "index": {
        "description": "Access to the first value of triple",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "first3",
        "normalized": "T(a,b,c)a",
        "package": "data-accessor",
        "partial": "",
        "signature": "T(a,b,c)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eAccess to the second value of a pair. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "T (a, b) b",
        "fct-source": "src/Data-Accessor-Tuple.html#second",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "Access to the second value of pair",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "second",
        "normalized": "T(a,b)b",
        "package": "data-accessor",
        "partial": "",
        "signature": "T(a,b)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#v:second3",
      "description": {
        "fct-descr": "\u003cp\u003eAccess to the second value of a triple. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "T (a, b, c) b",
        "fct-source": "src/Data-Accessor-Tuple.html#second3",
        "fct-type": "function",
        "title": "second3"
      },
      "index": {
        "description": "Access to the second value of triple",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "second3",
        "normalized": "T(a,b,c)b",
        "package": "data-accessor",
        "partial": "",
        "signature": "T(a,b,c)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor-Tuple.html#v:third3",
      "description": {
        "fct-descr": "\u003cp\u003eAccess to the third value of a triple. \n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Tuple",
        "fct-package": "data-accessor",
        "fct-signature": "T (a, b, c) c",
        "fct-source": "src/Data-Accessor-Tuple.html#third3",
        "fct-type": "function",
        "title": "third3"
      },
      "index": {
        "description": "Access to the third value of triple",
        "hierarchy": "Data Accessor Tuple",
        "module": "Data.Accessor.Tuple",
        "name": "third3",
        "normalized": "T(a,b,c)c",
        "package": "data-accessor",
        "partial": "",
        "signature": "T(a,b,c)c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple abstract data type for\na piece of a data stucture that can be read from and written to.\nIn contrast to \u003ca\u003eData.Accessor.Basic\u003c/a\u003e it is intended for unqualified import.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor.html",
        "fct-type": "module",
        "title": "Accessor"
      },
      "index": {
        "description": "This module provides simple abstract data type for piece of data stucture that can be read from and written to In contrast to Data.Accessor.Basic it is intended for unqualified import",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "Accessor",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Accessor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#t:Accessor",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eAccessor r a\u003c/code\u003e is an object that encodes how to\n get and put a subject of type \u003ccode\u003ea\u003c/code\u003e out of/into an object\n of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn order for an instance of this data structure \u003ccode\u003ea\u003c/code\u003e to be\n an \u003ccode\u003e\u003ca\u003eAccessor\u003c/a\u003e\u003c/code\u003e, it must obey the following laws:\n\u003c/p\u003e\u003cpre\u003e getVal a (setVal a x r) = x\n setVal a (getVal a r) r = r\n\u003c/pre\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "type",
        "fct-source": "src/Data-Accessor.html#Accessor",
        "fct-type": "type",
        "title": "Accessor"
      },
      "index": {
        "description": "An Accessor is an object that encodes how to get and put subject of type out of into an object of type In order for an instance of this data structure to be an Accessor it must obey the following laws getVal setVal setVal getVal",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "Accessor",
        "normalized": "",
        "package": "data-accessor",
        "partial": "Accessor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-MonadStatePrivate.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor composition the other direction.\n\u003c/p\u003e\u003cpre\u003e (\u003c.) = flip (.\u003e)\n\u003c/pre\u003e\u003cp\u003eYou may also use the \u003ccode\u003e(.)\u003c/code\u003e operator from Category class.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor b c -\u003e Accessor a b -\u003e Accessor a c",
        "fct-source": "src/Data-Accessor.html#%3C.",
        "fct-type": "function",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "Accessor composition the other direction flip You may also use the operator from Category class",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(\u003c.) \u003c.",
        "normalized": "Accessor a b-\u003eAccessor c a-\u003eAccessor c b",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor b c-\u003eAccessor a b-\u003eAccessor a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use (Data.Accessor.Monad.Trans.State.%=) from data-accessor-transformers package\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAn \"assignment operator\" for state monads.\n\u003c/p\u003e\u003cpre\u003e (=:) = putA\n\u003c/pre\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Deprecated use Data.Accessor.Monad.Trans.State from data-accessor-transformers package An assignment operator for state monads putA",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(=:) =:",
        "normalized": "Accessor a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-94--61-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write \u003ccode\u003efirst ^= 2+3 $ second ^= 5+7 $ record\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e a -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#%5E%3D",
        "fct-type": "function",
        "title": "(^=)"
      },
      "index": {
        "description": "set as infix operator This lets us write first second record",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(^=) ^=",
        "normalized": "T a b-\u003eb-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003ea-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-94-.",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write \u003ccode\u003erecord^.field^.subfield\u003c/code\u003e.\nThis imitates Modula II syntax.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "r -\u003e T r a -\u003e a",
        "fct-source": "src/Data-Accessor-Basic.html#%5E.",
        "fct-type": "function",
        "title": "(^.)"
      },
      "index": {
        "description": "get as infix operator This lets us write record field subfield This imitates Modula II syntax",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(^.) ^.",
        "normalized": "a-\u003eT a b-\u003eb",
        "package": "data-accessor",
        "partial": "",
        "signature": "r-\u003eT r a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:-94-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e as infix operator.\nThis lets us write\n\u003ccode\u003efield^:subfield^:(2*) $ record\u003c/code\u003e,\n\u003ccode\u003erecord$%field^:subfield^:(2*)\u003c/code\u003e\nor \u003ccode\u003erecord$%field^:subfield^:(const 1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e r -\u003e r",
        "fct-source": "src/Data-Accessor-Basic.html#%5E%3A",
        "fct-type": "function",
        "title": "(^:)"
      },
      "index": {
        "description": "modify as infix operator This lets us write field subfield record record field subfield or record field subfield const",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(^:) ^:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eAccessor composition:\nCombine an accessor with an accessor to a sub-field.\nSpeak \"stack\".\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor a b -\u003e Accessor b c -\u003e Accessor a c",
        "fct-source": "src/Data-Accessor.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Accessor composition Combine an accessor with an accessor to sub-field Speak stack",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "(.\u003e) .\u003e",
        "normalized": "Accessor a b-\u003eAccessor b c-\u003eAccessor a c",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor a b-\u003eAccessor b c-\u003eAccessor a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:accessor",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eAccessor\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003eget\u003c/code\u003e and a \u003ccode\u003eset\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "(r -\u003e a)-\u003e (a -\u003e r -\u003e r)-\u003e Accessor r a",
        "fct-type": "function",
        "title": "accessor"
      },
      "index": {
        "description": "Construct an Accessor from get and set method",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "accessor",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eAccessor a b",
        "package": "data-accessor",
        "partial": "",
        "signature": "(r-\u003ea)-\u003e(a-\u003er-\u003er)-\u003eAccessor r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:getA",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Data.Accessor.Monad.Trans.State.get from data-accessor-transformers package\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA structural dereference function for state monads.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor.html#getA",
        "fct-type": "function",
        "title": "getA"
      },
      "index": {
        "description": "Deprecated Data.Accessor.Monad.Trans.State.get from data-accessor-transformers package structural dereference function for state monads",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "getA",
        "normalized": "Accessor a b-\u003eStateT a c b",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor r a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:getVal",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from a record field that is specified by an Accessor\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a-\u003e r-\u003e a",
        "fct-type": "function",
        "title": "getVal"
      },
      "index": {
        "description": "Get value from record field that is specified by an Accessor",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "getVal",
        "normalized": "Accessor a b-\u003ea-\u003eb",
        "package": "data-accessor",
        "partial": "Val",
        "signature": "Accessor r a-\u003er-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:modA",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Data.Accessor.Monad.Trans.State.modify from data-accessor-transformers package\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA structural modification function for state monads.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor.html#modA",
        "fct-type": "function",
        "title": "modA"
      },
      "index": {
        "description": "Deprecated Data.Accessor.Monad.Trans.State.modify from data-accessor-transformers package structural modification function for state monads",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "modA",
        "normalized": "Accessor a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:putA",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Data.Accessor.Monad.Trans.State.set from data-accessor-transformers package\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA structural assignment function for state monads.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor.html#putA",
        "fct-type": "function",
        "title": "putA"
      },
      "index": {
        "description": "Deprecated Data.Accessor.Monad.Trans.State.set from data-accessor-transformers package structural assignment function for state monads",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "putA",
        "normalized": "Accessor a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor",
        "partial": "",
        "signature": "Accessor r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor/docs/Data-Accessor.html#v:setVal",
      "description": {
        "fct-descr": "\u003cp\u003eSet a value of a record field that is specified by an Accessor\n\u003c/p\u003e",
        "fct-module": "Data.Accessor",
        "fct-package": "data-accessor",
        "fct-signature": "Accessor r a-\u003e a-\u003e r-\u003e r",
        "fct-type": "function",
        "title": "setVal"
      },
      "index": {
        "description": "Set value of record field that is specified by an Accessor",
        "hierarchy": "Data Accessor",
        "module": "Data.Accessor",
        "name": "setVal",
        "normalized": "Accessor a b-\u003eb-\u003ea-\u003ea",
        "package": "data-accessor",
        "partial": "Val",
        "signature": "Accessor r a-\u003ea-\u003er-\u003er"
      }
    }
  }
]