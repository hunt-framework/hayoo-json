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
        "word": "data-lens"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Product",
          "name": "Product",
          "package": "data-lens",
          "source": "src/Control-Category-Product.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Product",
          "module": "Control.Category.Product",
          "name": "Product",
          "package": "data-lens",
          "partial": "Product",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Control-Category-Product.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Product",
          "name": "Tensor",
          "package": "data-lens",
          "source": "src/Control-Category-Product.html#Tensor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Category Product",
          "module": "Control.Category.Product",
          "name": "Tensor",
          "package": "data-lens",
          "partial": "Tensor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Control-Category-Product.html#t:Tensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Product",
          "name": "(***)",
          "package": "data-lens",
          "signature": "c w x -\u003e c y z -\u003e c (w, y) (x, z)",
          "source": "src/Control-Category-Product.html#%2A%2A%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Product",
          "module": "Control.Category.Product",
          "name": "(***) ***",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "data-lens",
          "signature": "c w x-\u003ec y z-\u003ec(w,y)(x,z)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Control-Category-Product.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Product",
          "name": "first",
          "package": "data-lens",
          "signature": "c w x -\u003e c (w, z) (x, z)",
          "source": "src/Control-Category-Product.html#first",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Product",
          "module": "Control.Category.Product",
          "name": "first",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "data-lens",
          "signature": "c w x-\u003ec(w,z)(x,z)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Control-Category-Product.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Product",
          "name": "second",
          "package": "data-lens",
          "signature": "c y z -\u003e c (w, y) (w, z)",
          "source": "src/Control-Category-Product.html#second",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Product",
          "module": "Control.Category.Product",
          "name": "second",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "data-lens",
          "signature": "c y z-\u003ec(w,y)(w,z)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Control-Category-Product.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "Common",
          "package": "data-lens",
          "source": "src/Data-Lens-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "Common",
          "package": "data-lens",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "Lens",
          "package": "data-lens",
          "source": "src/Data-Lens-Common.html#Lens",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "Lens",
          "package": "data-lens",
          "partial": "Lens",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctional getter, which acts like a field accessor\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "(^!)",
          "package": "data-lens",
          "signature": "a -\u003e Lens a b -\u003e b",
          "source": "src/Data-Lens-Common.html#%5E%21",
          "type": "function"
        },
        "index": {
          "description": "functional getter which acts like field accessor",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!) ^!",
          "normalized": "a-\u003eLens a b-\u003eb",
          "package": "data-lens",
          "signature": "a-\u003eLens a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctional modify\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "(^!%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21%25%3D",
          "type": "function"
        },
        "index": {
          "description": "functional modify",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!%=) ^!%=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^!*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!*=) ^!*=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^!+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!+=) ^!+=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^!-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!-=) ^!-=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^!/=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!/=) ^!/=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^!=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%21%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^!=) ^!=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--33--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^$)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e a -\u003e b",
          "source": "src/Data-Lens-Common.html#%5E%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^$) ^$",
          "normalized": "Lens a b-\u003ea-\u003eb",
          "package": "data-lens",
          "signature": "Lens a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^$!)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e a -\u003e b",
          "source": "src/Data-Lens-Common.html#%5E%24%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^$!) ^$!",
          "normalized": "Lens a b-\u003ea-\u003eb",
          "package": "data-lens",
          "signature": "Lens a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctorial modify\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "(^%%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e f b) -\u003e a -\u003e f a",
          "source": "src/Data-Lens-Common.html#%5E%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "functorial modify",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^%%=) ^%%=",
          "normalized": "Lens a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003ef b)-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctional modify\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "(^%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%25%3D",
          "type": "function"
        },
        "index": {
          "description": "functional modify",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^%=) ^%=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^*=) ^*=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^+=) ^+=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^-=) ^-=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^/=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^/=) ^/=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "(^=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#%5E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^=) ^=",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctional getter, which acts like a field accessor\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "(^.)",
          "package": "data-lens",
          "signature": "a -\u003e Lens a b -\u003e b",
          "source": "src/Data-Lens-Common.html#%5E.",
          "type": "function"
        },
        "index": {
          "description": "functional getter which acts like field accessor",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "(^.) ^.",
          "normalized": "a-\u003eLens a b-\u003eb",
          "package": "data-lens",
          "signature": "a-\u003eLens a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "Lens",
          "package": "data-lens",
          "signature": "Lens",
          "source": "src/Data-Lens-Common.html#Lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "Lens",
          "package": "data-lens",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "fstLens",
          "package": "data-lens",
          "signature": "Lens (a, b) a",
          "source": "src/Data-Lens-Common.html#fstLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "fstLens",
          "normalized": "Lens(a,b)a",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "Lens(a,b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:fstLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the getter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "getL",
          "package": "data-lens",
          "signature": "Lens a b -\u003e a -\u003e b",
          "source": "src/Data-Lens-Common.html#getL",
          "type": "function"
        },
        "index": {
          "description": "Gets the getter function from lens",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "getL",
          "normalized": "Lens a b-\u003ea-\u003eb",
          "package": "data-lens",
          "signature": "Lens a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:getL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "intMapLens",
          "package": "data-lens",
          "signature": "Int -\u003e Lens (IntMap v) (Maybe v)",
          "source": "src/Data-Lens-Common.html#intMapLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "intMapLens",
          "normalized": "Int-\u003eLens(IntMap a)(Maybe a)",
          "package": "data-lens",
          "partial": "Map Lens",
          "signature": "Int-\u003eLens(IntMap v)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:intMapLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "intSetLens",
          "package": "data-lens",
          "signature": "Int -\u003e Lens IntSet Bool",
          "source": "src/Data-Lens-Common.html#intSetLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "intSetLens",
          "normalized": "Int-\u003eLens IntSet Bool",
          "package": "data-lens",
          "partial": "Set Lens",
          "signature": "Int-\u003eLens IntSet Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:intSetLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild a lens out of an isomorphism\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "iso",
          "package": "data-lens",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Lens a b",
          "source": "src/Data-Lens-Common.html#iso",
          "type": "function"
        },
        "index": {
          "description": "build lens out of an isomorphism",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "iso",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens a b",
          "package": "data-lens",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild a lens out of a getter and setter\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "lens",
          "package": "data-lens",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a -\u003e a) -\u003e Lens a b",
          "source": "src/Data-Lens-Common.html#lens",
          "type": "function"
        },
        "index": {
          "description": "build lens out of getter and setter",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eLens a b",
          "package": "data-lens",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eLens a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "mapLens",
          "package": "data-lens",
          "signature": "k -\u003e Lens (Map k v) (Maybe v)",
          "source": "src/Data-Lens-Common.html#mapLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "mapLens",
          "normalized": "a-\u003eLens(Map a b)(Maybe b)",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "k-\u003eLens(Map k v)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:mapLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "mergeL",
          "package": "data-lens",
          "signature": "Lens a c -\u003e Lens b c -\u003e Lens (Either a b) c",
          "source": "src/Data-Lens-Common.html#mergeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "mergeL",
          "normalized": "Lens a b-\u003eLens c b-\u003eLens(Either a c)b",
          "package": "data-lens",
          "signature": "Lens a c-\u003eLens b c-\u003eLens(Either a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:mergeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the modifier function from a lens.\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "modL",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#modL",
          "type": "function"
        },
        "index": {
          "description": "Gets the modifier function from lens",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "modL",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:modL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "runLens",
          "package": "data-lens",
          "signature": "a -\u003e Store b a",
          "source": "src/Data-Lens-Common.html#Lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "runLens",
          "normalized": "a-\u003eStore b a",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "a-\u003eStore b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:runLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the setter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Lens.Common",
          "name": "setL",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Common.html#setL",
          "type": "function"
        },
        "index": {
          "description": "Gets the setter function from lens",
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "setL",
          "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:setL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "setLens",
          "package": "data-lens",
          "signature": "k -\u003e Lens (Set k) Bool",
          "source": "src/Data-Lens-Common.html#setLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "setLens",
          "normalized": "a-\u003eLens(Set a)Bool",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "k-\u003eLens(Set k)Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:setLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Common",
          "name": "sndLens",
          "package": "data-lens",
          "signature": "Lens (a, b) b",
          "source": "src/Data-Lens-Common.html#sndLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Common",
          "module": "Data.Lens.Common",
          "name": "sndLens",
          "normalized": "Lens(a,b)b",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "Lens(a,b)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Common.html#v:sndLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "Lazy",
          "package": "data-lens",
          "source": "src/Data-Lens-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "Lazy",
          "package": "data-lens",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(||=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Lazy.html#%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(||=) ||=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a value using a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(~=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "set value using lens into state",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(~=) ~=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!||=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Lazy.html#%21%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!||=) !||=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification of a value through a lens into state\n with a supplemental response\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(!%%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e (c, b)) -\u003e StateT a m c",
          "source": "src/Data-Lens-Lazy.html#%21%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification of value through lens into state with supplemental response",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!%%=) !%%=",
          "normalized": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a d c",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification a value through a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(!%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification value through lens into state",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!%=) !%=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!&&=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Lazy.html#%21%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!&&=) !&&=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!*=) !*=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!+=) !+=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!-=) !-=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(!/=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!/=) !/=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a value using a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(!=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%21%3D",
          "type": "function"
        },
        "index": {
          "description": "set value using lens into state",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(!=) !=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-33--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification of a value through a lens into state\n with a supplemental response\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(%%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e (c, b)) -\u003e StateT a m c",
          "source": "src/Data-Lens-Lazy.html#%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification of value through lens into state with supplemental response",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(%%=) %%=",
          "normalized": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a d c",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification a value through a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "(%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification value through lens into state",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(%=) %=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(&&=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Lazy.html#%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(&&=) &&=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(*=) *=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(+=) +=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(-=) -=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "(//=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#%2F%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "(//=) //=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:-47--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the value of a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Lazy",
          "name": "access",
          "package": "data-lens",
          "signature": "Lens a b -\u003e StateT a m b",
          "source": "src/Data-Lens-Lazy.html#access",
          "type": "function"
        },
        "index": {
          "description": "get the value of lens into state",
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "access",
          "normalized": "Lens a b-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Lazy",
          "name": "focus",
          "package": "data-lens",
          "signature": "Lens a b -\u003e StateT b m c -\u003e StateT a m c",
          "source": "src/Data-Lens-Lazy.html#focus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Lazy",
          "module": "Data.Lens.Lazy",
          "name": "focus",
          "normalized": "Lens a b-\u003eStateT b c d-\u003eStateT a c d",
          "package": "data-lens",
          "signature": "Lens a b-\u003eStateT b m c-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Lazy.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "Common",
          "package": "data-lens",
          "source": "src/Data-Lens-Partial-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "Common",
          "package": "data-lens",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "PartialLens",
          "package": "data-lens",
          "source": "src/Data-Lens-Partial-Common.html#PartialLens",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "PartialLens",
          "package": "data-lens",
          "partial": "Partial Lens",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#t:PartialLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^$)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e a -\u003e Maybe b",
          "source": "src/Data-Lens-Partial-Common.html#%5E%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^$) ^$",
          "normalized": "PartialLens a b-\u003ea-\u003eMaybe b",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplicative modify\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Common",
          "name": "(^%%=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e f b) -\u003e a -\u003e f a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "applicative modify",
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^%%=) ^%%=",
          "normalized": "PartialLens a b-\u003e(b-\u003ec b)-\u003ea-\u003ec a",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003e(b-\u003ef b)-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^%=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%25%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^%=) ^%=",
          "normalized": "PartialLens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^*=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^*=) ^*=",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^+=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^+=) ^+=",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^-=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^-=) ^-=",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^/=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^/=) ^/=",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#%5E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^=) ^=",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "(^.)",
          "package": "data-lens",
          "signature": "a -\u003e PartialLens a b -\u003e Maybe b",
          "source": "src/Data-Lens-Partial-Common.html#%5E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "(^.) ^.",
          "normalized": "a-\u003ePartialLens a b-\u003eMaybe b",
          "package": "data-lens",
          "signature": "a-\u003ePartialLens a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "PLens",
          "package": "data-lens",
          "signature": "PLens (a -\u003e Maybe (Store b a))",
          "source": "src/Data-Lens-Partial-Common.html#PartialLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "PLens",
          "normalized": "PLens(a-\u003eMaybe(Store b a))",
          "package": "data-lens",
          "partial": "PLens",
          "signature": "PLens(a-\u003eMaybe(Store b a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:PLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "allPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Data-Lens-Partial-Common.html#allPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "allPL",
          "normalized": "PartialLens a b-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:allPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "anyPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Data-Lens-Partial-Common.html#anyPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "anyPL",
          "normalized": "PartialLens a b-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:anyPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "getPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e a -\u003e Maybe b",
          "source": "src/Data-Lens-Partial-Common.html#getPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "getPL",
          "normalized": "PartialLens a b-\u003ea-\u003eMaybe b",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:getPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "getorAPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e f b -\u003e a -\u003e f b",
          "source": "src/Data-Lens-Partial-Common.html#getorAPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "getorAPL",
          "normalized": "PartialLens a b-\u003ec b-\u003ea-\u003ec b",
          "package": "data-lens",
          "partial": "APL",
          "signature": "PartialLens a b-\u003ef b-\u003ea-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:getorAPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "getorEmptyPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e o) -\u003e a -\u003e o",
          "source": "src/Data-Lens-Partial-Common.html#getorEmptyPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "getorEmptyPL",
          "normalized": "PartialLens a b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-lens",
          "partial": "Empty PL",
          "signature": "PartialLens a b-\u003e(b-\u003eo)-\u003ea-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:getorEmptyPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "getorPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e b",
          "source": "src/Data-Lens-Partial-Common.html#getorPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "getorPL",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003eb",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:getorPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "headLens",
          "package": "data-lens",
          "signature": "PartialLens [a] a",
          "source": "src/Data-Lens-Partial-Common.html#headLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "headLens",
          "normalized": "PartialLens[a]a",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "PartialLens[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:headLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "justLens",
          "package": "data-lens",
          "signature": "PartialLens (Maybe a) a",
          "source": "src/Data-Lens-Partial-Common.html#justLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "justLens",
          "package": "data-lens",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:justLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "leftLens",
          "package": "data-lens",
          "signature": "PartialLens (Either a b) a",
          "source": "src/Data-Lens-Partial-Common.html#leftLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "leftLens",
          "package": "data-lens",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:leftLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "mergePL",
          "package": "data-lens",
          "signature": "PartialLens a c -\u003e PartialLens b c -\u003e PartialLens (Either a b) c",
          "source": "src/Data-Lens-Partial-Common.html#mergePL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "mergePL",
          "normalized": "PartialLens a b-\u003ePartialLens c b-\u003ePartialLens(Either a c)b",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a c-\u003ePartialLens b c-\u003ePartialLens(Either a b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:mergePL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "modPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#modPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "modPL",
          "normalized": "PartialLens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:modPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "null",
          "package": "data-lens",
          "signature": "PartialLens a b",
          "source": "src/Data-Lens-Partial-Common.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "null",
          "package": "data-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "nullPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e a -\u003e Bool",
          "source": "src/Data-Lens-Partial-Common.html#nullPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "nullPL",
          "normalized": "PartialLens a b-\u003ea-\u003eBool",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:nullPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "productPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Data-Lens-Partial-Common.html#productPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "productPL",
          "normalized": "PartialLens a b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:productPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "rightLens",
          "package": "data-lens",
          "signature": "PartialLens (Either a b) b",
          "source": "src/Data-Lens-Partial-Common.html#rightLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "rightLens",
          "package": "data-lens",
          "partial": "Lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:rightLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "runPLens",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e a -\u003e Coproduct Identity (Store b) a",
          "source": "src/Data-Lens-Partial-Common.html#runPLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "runPLens",
          "normalized": "PartialLens a b-\u003ea-\u003eCoproduct Identity(Store b)a",
          "package": "data-lens",
          "partial": "PLens",
          "signature": "PartialLens a b-\u003ea-\u003eCoproduct Identity(Store b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:runPLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "setPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Data-Lens-Partial-Common.html#setPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "setPL",
          "normalized": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:setPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "sumPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Data-Lens-Partial-Common.html#sumPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "sumPL",
          "normalized": "PartialLens a b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-lens",
          "partial": "PL",
          "signature": "PartialLens a b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:sumPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "tailLens",
          "package": "data-lens",
          "signature": "PartialLens [a] [a]",
          "source": "src/Data-Lens-Partial-Common.html#tailLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "tailLens",
          "normalized": "PartialLens[a][a]",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "PartialLens[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:tailLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "totalLens",
          "package": "data-lens",
          "signature": "Lens a b -\u003e PartialLens a b",
          "source": "src/Data-Lens-Partial-Common.html#totalLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "totalLens",
          "normalized": "Lens a b-\u003ePartialLens a b",
          "package": "data-lens",
          "partial": "Lens",
          "signature": "Lens a b-\u003ePartialLens a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:totalLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Common",
          "name": "trySetPL",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e a -\u003e Maybe (b -\u003e a)",
          "source": "src/Data-Lens-Partial-Common.html#trySetPL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Common",
          "module": "Data.Lens.Partial.Common",
          "name": "trySetPL",
          "normalized": "PartialLens a b-\u003ea-\u003eMaybe(b-\u003ea)",
          "package": "data-lens",
          "partial": "Set PL",
          "signature": "PartialLens a b-\u003ea-\u003eMaybe(b-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Common.html#v:trySetPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "Lazy",
          "package": "data-lens",
          "source": "src/Data-Lens-Partial-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "Lazy",
          "package": "data-lens",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(||=)",
          "package": "data-lens",
          "signature": "PartialLens a Bool -\u003e Bool -\u003e StateT a m (Maybe Bool)",
          "source": "src/Data-Lens-Partial-Lazy.html#%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(||=) ||=",
          "normalized": "PartialLens a Bool-\u003eBool-\u003eStateT a b(Maybe Bool)",
          "package": "data-lens",
          "signature": "PartialLens a Bool-\u003eBool-\u003eStateT a m(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a value using a partial lens into state\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in case of a null reference\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(~=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "set value using partial lens into state returns Nothing in case of null reference",
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(~=) ~=",
          "normalized": "PartialLens a b-\u003eb-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification of a value through a partial lens into state\n with a supplemental response.\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in case of a null reference\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(%%=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e (c, b)) -\u003e StateT a m (Maybe c)",
          "source": "src/Data-Lens-Partial-Lazy.html#%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification of value through partial lens into state with supplemental response returns Nothing in case of null reference",
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(%%=) %%=",
          "normalized": "PartialLens a b-\u003e(b-\u003e(c,b))-\u003eStateT a d(Maybe c)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003e(b-\u003e(c,b))-\u003eStateT a m(Maybe c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification a value through a partial lens into state\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in case of a null reference\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(%=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e (b -\u003e b) -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification value through partial lens into state returns Nothing in case of null reference",
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(%=) %=",
          "normalized": "PartialLens a b-\u003e(b-\u003eb)-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003e(b-\u003eb)-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(&&=)",
          "package": "data-lens",
          "signature": "PartialLens a Bool -\u003e Bool -\u003e StateT a m (Maybe Bool)",
          "source": "src/Data-Lens-Partial-Lazy.html#%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(&&=) &&=",
          "normalized": "PartialLens a Bool-\u003eBool-\u003eStateT a b(Maybe Bool)",
          "package": "data-lens",
          "signature": "PartialLens a Bool-\u003eBool-\u003eStateT a m(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(*=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(*=) *=",
          "normalized": "PartialLens a b-\u003eb-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(+=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(+=) +=",
          "normalized": "PartialLens a b-\u003eb-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(-=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(-=) -=",
          "normalized": "PartialLens a b-\u003eb-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "(//=)",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#%2F%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "(//=) //=",
          "normalized": "PartialLens a b-\u003eb-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eb-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:-47--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the value of a partial lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Lazy",
          "name": "access",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e StateT a m (Maybe b)",
          "source": "src/Data-Lens-Partial-Lazy.html#access",
          "type": "function"
        },
        "index": {
          "description": "get the value of partial lens into state",
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "access",
          "normalized": "PartialLens a b-\u003eStateT a c(Maybe b)",
          "package": "data-lens",
          "signature": "PartialLens a b-\u003eStateT a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns mzero in case of a null reference\n\u003c/p\u003e",
          "module": "Data.Lens.Partial.Lazy",
          "name": "accessPlus",
          "package": "data-lens",
          "signature": "PartialLens a b -\u003e StateT a m b",
          "source": "src/Data-Lens-Partial-Lazy.html#accessPlus",
          "type": "function"
        },
        "index": {
          "description": "returns mzero in case of null reference",
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "accessPlus",
          "normalized": "PartialLens a b-\u003eStateT a c b",
          "package": "data-lens",
          "partial": "Plus",
          "signature": "PartialLens a b-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:accessPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "joinMaybe",
          "package": "data-lens",
          "signature": "m (Maybe a) -\u003e m a",
          "source": "src/Data-Lens-Partial-Lazy.html#joinMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "joinMaybe",
          "normalized": "a(Maybe b)-\u003ea b",
          "package": "data-lens",
          "partial": "Maybe",
          "signature": "m(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:joinMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Partial.Lazy",
          "name": "maybeZero",
          "package": "data-lens",
          "signature": "Maybe a -\u003e m a",
          "source": "src/Data-Lens-Partial-Lazy.html#maybeZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Partial Lazy",
          "module": "Data.Lens.Partial.Lazy",
          "name": "maybeZero",
          "normalized": "Maybe a-\u003eb a",
          "package": "data-lens",
          "partial": "Zero",
          "signature": "Maybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Partial-Lazy.html#v:maybeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "Strict",
          "package": "data-lens",
          "source": "src/Data-Lens-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "Strict",
          "package": "data-lens",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(||=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Strict.html#%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(||=) ||=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a value using a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(~=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "set value using lens into state",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(~=) ~=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!||=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Strict.html#%21%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!||=) !||=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification of a value through a lens into state\n with a supplemental response\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(!%%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e (c, b)) -\u003e StateT a m c",
          "source": "src/Data-Lens-Strict.html#%21%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification of value through lens into state with supplemental response",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!%%=) !%%=",
          "normalized": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a d c",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification a value through a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(!%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification value through lens into state",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!%=) !%=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!&&=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Strict.html#%21%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!&&=) !&&=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!*=) !*=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!+=) !+=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!-=) !-=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(!/=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!/=) !/=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a value using a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(!=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%21%3D",
          "type": "function"
        },
        "index": {
          "description": "set value using lens into state",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(!=) !=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-33--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification of a value through a lens into state\n with a supplemental response\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(%%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e (c, b)) -\u003e StateT a m c",
          "source": "src/Data-Lens-Strict.html#%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification of value through lens into state with supplemental response",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(%%=) %%=",
          "normalized": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a d c",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003e(c,b))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einfix modification a value through a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "(%=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "infix modification value through lens into state",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(%=) %=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(&&=)",
          "package": "data-lens",
          "signature": "Lens a Bool -\u003e Bool -\u003e StateT a m Bool",
          "source": "src/Data-Lens-Strict.html#%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(&&=) &&=",
          "normalized": "Lens a Bool-\u003eBool-\u003eStateT a b Bool",
          "package": "data-lens",
          "signature": "Lens a Bool-\u003eBool-\u003eStateT a m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(*=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(*=) *=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(+=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(+=) +=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(-=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(-=) -=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "(//=)",
          "package": "data-lens",
          "signature": "Lens a b -\u003e b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#%2F%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "(//=) //=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eb-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:-47--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the value of a lens into state\n\u003c/p\u003e",
          "module": "Data.Lens.Strict",
          "name": "access",
          "package": "data-lens",
          "signature": "Lens a b -\u003e StateT a m b",
          "source": "src/Data-Lens-Strict.html#access",
          "type": "function"
        },
        "index": {
          "description": "get the value of lens into state",
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "access",
          "normalized": "Lens a b-\u003eStateT a c b",
          "package": "data-lens",
          "signature": "Lens a b-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Strict",
          "name": "focus",
          "package": "data-lens",
          "signature": "Lens a b -\u003e StateT b m c -\u003e StateT a m c",
          "source": "src/Data-Lens-Strict.html#focus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Strict",
          "module": "Data.Lens.Strict",
          "name": "focus",
          "normalized": "Lens a b-\u003eStateT b c d-\u003eStateT a c d",
          "package": "data-lens",
          "signature": "Lens a b-\u003eStateT b m c-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-lens/docs/Data-Lens-Strict.html#v:focus"
      }
    }
  ]
]