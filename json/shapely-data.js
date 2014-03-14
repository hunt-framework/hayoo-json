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
        "word": "shapely-data"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "TypeIndexed",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "TypeIndexed",
          "package": "shapely-data",
          "partial": "Type Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "DeleteAllType",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#DeleteAllType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "DeleteAllType",
          "package": "shapely-data",
          "partial": "Delete All Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#t:DeleteAllType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type equality predicate class.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "HasAny",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#HasAny",
          "type": "class"
        },
        "index": {
          "description": "type equality predicate class",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "HasAny",
          "package": "shapely-data",
          "partial": "Has Any",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#t:HasAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe non-empty, \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003el\u003c/code\u003e, out of which we can pull the\n first occurrence of type \u003ccode\u003ea\u003c/code\u003e, leaving as the \u003ccode\u003eTail\u003c/code\u003e \u003ccode\u003el'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "HavingType",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#HavingType",
          "type": "class"
        },
        "index": {
          "description": "The non-empty Product or Sum out of which we can pull the first occurrence of type leaving as the Tail",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "HavingType",
          "package": "shapely-data",
          "partial": "Having Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#t:HavingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "NubType",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#NubType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "NubType",
          "package": "shapely-data",
          "partial": "Nub Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#t:NubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop any occurrences of type \u003ccode\u003ea\u003c/code\u003e from the list \u003ccode\u003el\u003c/code\u003e, leaving \u003ccode\u003el'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "deleteAllTypeOf",
          "package": "shapely-data",
          "signature": "l -\u003e a -\u003e l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#deleteAllTypeOf",
          "type": "method"
        },
        "index": {
          "description": "Drop any occurrences of type from the list leaving",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "deleteAllTypeOf",
          "normalized": "a-\u003eb-\u003ec",
          "package": "shapely-data",
          "partial": "All Type Of",
          "signature": "l-\u003ea-\u003el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:deleteAllTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all but the first occurrence of each type.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "nubType",
          "package": "shapely-data",
          "signature": "l -\u003e l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#nubType",
          "type": "method"
        },
        "index": {
          "description": "Remove all but the first occurrence of each type",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "nubType",
          "normalized": "a-\u003eb",
          "package": "shapely-data",
          "partial": "Type",
          "signature": "l-\u003el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:nubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the first occurrence of type \u003ccode\u003ea\u003c/code\u003e to the \u003ccode\u003eHead\u003c/code\u003e of \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewFirstType",
          "package": "shapely-data",
          "signature": "l -\u003e NormalConstr l a l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#viewFirstType",
          "type": "method"
        },
        "index": {
          "description": "Shift the first occurrence of type to the Head of",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewFirstType",
          "normalized": "a-\u003eNormalConstr a b c",
          "package": "shapely-data",
          "partial": "First Type",
          "signature": "l-\u003eNormalConstr l a l'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:viewFirstType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eviewFirstType\u003c/a\u003e\u003c/code\u003e of the same type as its second argument.\n\u003c/p\u003e\u003cpre\u003e viewFirstTypeOf = const . viewFirstType\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewFirstTypeOf",
          "package": "shapely-data",
          "signature": "l -\u003e a -\u003e NormalConstr l a l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#viewFirstTypeOf",
          "type": "method"
        },
        "index": {
          "description": "viewFirstType of the same type as its second argument viewFirstTypeOf const viewFirstType",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewFirstTypeOf",
          "normalized": "a-\u003eb-\u003eNormalConstr a b c",
          "package": "shapely-data",
          "partial": "First Type Of",
          "signature": "l-\u003ea-\u003eNormalConstr l a l'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:viewFirstTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift the \u003cem\u003eonly\u003c/em\u003e occurrence of type \u003ccode\u003ea\u003c/code\u003e to the \u003ccode\u003eHead\u003c/code\u003e of \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e viewType = viewFirstType\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewType",
          "package": "shapely-data",
          "signature": "l -\u003e NormalConstr l a l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#viewType",
          "type": "function"
        },
        "index": {
          "description": "Shift the only occurrence of type to the Head of viewType viewFirstType",
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewType",
          "normalized": "a-\u003eNormalConstr a b c",
          "package": "shapely-data",
          "partial": "Type",
          "signature": "l-\u003eNormalConstr l a l'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:viewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewTypeOf",
          "package": "shapely-data",
          "signature": "l -\u003e a -\u003e NormalConstr l a l'",
          "source": "src/Data-Shapely-Normal-TypeIndexed.html#viewTypeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal TypeIndexed",
          "module": "Data.Shapely.Normal.TypeIndexed",
          "name": "viewTypeOf",
          "normalized": "a-\u003eb-\u003eNormalConstr a b c",
          "package": "shapely-data",
          "partial": "Type Of",
          "signature": "l-\u003ea-\u003eNormalConstr l a l'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal-TypeIndexed.html#v:viewTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Normal",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Normal",
          "package": "shapely-data",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": ":*!",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#%3A%2A%21",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":*!",
          "package": "shapely-data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": ":*\u003c:",
          "package": "shapely-data",
          "signature": ":*\u003c:",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":*\u003c:",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-42--60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": ":*:",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#%3A%2A%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":*:",
          "package": "shapely-data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": ":+:",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#%3A%2B%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":+:",
          "package": "shapely-data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe single exponent variable \u003ccode\u003ex\u003c/code\u003e distributed over the algebraic normal\n form \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eabc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": ":-\u003e=\u003e",
          "package": "shapely-data",
          "type": "function"
        },
        "index": {
          "description": "The single exponent variable distributed over the algebraic normal form Base abc",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":-\u003e=\u003e",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-45--62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebraic normal form \u003ccode\u003e\u003ca\u003eExponent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eabc\u003c/code\u003e distributed over the single\n base variable \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": ":=\u003e-\u003e",
          "package": "shapely-data",
          "signature": "-\u003e",
          "type": "function"
        },
        "index": {
          "description": "The algebraic normal form Exponent abc distributed over the single base variable",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": ":=\u003e-\u003e",
          "normalized": "-\u003e",
          "package": "shapely-data",
          "signature": "-\u003e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t::-61--62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for the exponent laws with the \u003ccode\u003eNormal\u003c/code\u003e form \u003ccode\u003eabc\u003c/code\u003e in the base\n place. See the instance documentation for concrete types and examples.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Base",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#Base",
          "type": "class"
        },
        "index": {
          "description": "class for the exponent laws with the Normal form abc in the base place See the instance documentation for concrete types and examples",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Base",
          "package": "shapely-data",
          "partial": "Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003es of the unit type are our constants in the algebra of ADTs.\n They are cardinal numbers at the type level (length), while their \u003cem\u003evalues\u003c/em\u003e\n are ordinal numbers (indicating position).\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Constant",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Constant",
          "type": "class"
        },
        "index": {
          "description": "Sum of the unit type are our constants in the algebra of ADTs They are cardinal numbers at the type level length while their values are ordinal numbers indicating position",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Constant",
          "package": "shapely-data",
          "partial": "Constant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebraic multiplication of a term with some \u003ccode\u003eNormal\u003c/code\u003e type \u003ccode\u003exs\u003c/code\u003e. When \u003ccode\u003exs\u003c/code\u003e\n is a \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e these are simple Cons/Snoc (see \u003ccode\u003e\u003ca\u003e*:\u003c/a\u003e\u003c/code\u003e). For \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003es the\n operation is distributed over all constructors, as in: \n \u003ccode\u003ea(x + y + z) = (ax + ay + az)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "DistributeTerm",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#DistributeTerm",
          "type": "class"
        },
        "index": {
          "description": "Algebraic multiplication of term with some Normal type xs When xs is Product these are simple Cons Snoc see For Sum the operation is distributed over all constructors as in ax ay az",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "DistributeTerm",
          "package": "shapely-data",
          "partial": "Distribute Term",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:DistributeTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for the exponent laws with the \u003ccode\u003eNormal\u003c/code\u003e form \u003ccode\u003eabc\u003c/code\u003e in the exponent\n place. See the instance documentation for concrete types and examples.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Exponent",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#Exponent",
          "type": "class"
        },
        "index": {
          "description": "class for the exponent laws with the Normal form abc in the exponent place See the instance documentation for concrete types and examples",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Exponent",
          "package": "shapely-data",
          "partial": "Exponent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eabcs\u003c/code\u003e out of which we can factor the product\n \u003ccode\u003eab\u003c/code\u003e, leaving some quotient.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "FactorPrefix",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#FactorPrefix",
          "type": "class"
        },
        "index": {
          "description": "Product or Sum abcs out of which we can factor the product ab leaving some quotient",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "FactorPrefix",
          "package": "shapely-data",
          "partial": "Factor Prefix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:FactorPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Five",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Five",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Five",
          "package": "shapely-data",
          "partial": "Five",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Five"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque wrapper type allowing application of useful class methods on\n \u003ccode\u003e\u003ca\u003eHomogeneous\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es. Only operations that don't modify the length of\n the product (which is stored in the \u003ccode\u003elen\u003c/code\u003e parameter) are supported.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "FixedList",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#FixedList",
          "type": "data"
        },
        "index": {
          "description": "An opaque wrapper type allowing application of useful class methods on Homogeneous Product Only operations that don modify the length of the product which is stored in the len parameter are supported",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "FixedList",
          "package": "shapely-data",
          "partial": "Fixed List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:FixedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Four",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Four",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Four",
          "package": "shapely-data",
          "partial": "Four",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis inverts \u003ccode\u003e\u003ca\u003eLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "HavingLength",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#HavingLength",
          "type": "class"
        },
        "index": {
          "description": "this inverts Length",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "HavingLength",
          "package": "shapely-data",
          "partial": "Having Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:HavingLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for homogeneous \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es with terms all of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Homogeneous",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Homogeneous",
          "type": "class"
        },
        "index": {
          "description": "class for homogeneous Product with terms all of type",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Homogeneous",
          "package": "shapely-data",
          "partial": "Homogeneous",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Homogeneous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Length",
          "package": "shapely-data",
          "signature": "Length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Length",
          "package": "shapely-data",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for massaging \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e representation types. This works as\n described in \u003ccode\u003e\u003ca\u003eMassageable\u003c/a\u003e\u003c/code\u003e, except that it doesn't recurse into subterms. \n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "MassageableNormal",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Massageable.html#MassageableNormal",
          "type": "class"
        },
        "index": {
          "description": "class for massaging Normal representation types This works as described in Massageable except that it doesn recurse into subterms",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "MassageableNormal",
          "package": "shapely-data",
          "partial": "Massageable Normal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:MassageableNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebraic multiplication of two \u003ccode\u003eNormal\u003c/code\u003e form types \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e. When\n both are \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es this operation is like the Prelude \u003ccode\u003e(++)\u003c/code\u003e. When both are\n \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003es the ordering of constructors follow the \"FOIL\" pattern, e.g.\n \u003ccode\u003e(a + b + c)*(x + y) == (ax + ay + bx + by + cx + cy)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eJust like normal multiplication, this is a monoid with \u003ccode\u003e()\u003c/code\u003e as our identity\n object.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Multiply",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Multiply",
          "type": "class"
        },
        "index": {
          "description": "Algebraic multiplication of two Normal form types xs and ys When both are Product this operation is like the Prelude When both are Sum the ordering of constructors follow the FOIL pattern e.g ax ay bx by cx cy Just like normal multiplication this is monoid with as our identity object",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Multiply",
          "package": "shapely-data",
          "partial": "Multiply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "One",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#One",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "One",
          "package": "shapely-data",
          "partial": "One",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "OneOrMore",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#OneOrMore",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "OneOrMore",
          "package": "shapely-data",
          "partial": "One Or More",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:OneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton inhabited \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e. This is an intermediate type useful for\n constructing sums, and in our instances (see e.g. \u003ccode\u003eTail\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Only",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Classes.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "singleton inhabited Sum This is an intermediate type useful for constructing sums and in our instances see e.g Tail",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Only",
          "package": "shapely-data",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Replicated",
          "package": "shapely-data",
          "signature": "Replicated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Replicated",
          "package": "shapely-data",
          "partial": "Replicated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Replicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversing \u003ccode\u003eProducts\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Reversable",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Reversable",
          "type": "class"
        },
        "index": {
          "description": "Reversing Products and Sum",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Reversable",
          "package": "shapely-data",
          "partial": "Reversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Reversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Seven",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Seven",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Seven",
          "package": "shapely-data",
          "partial": "Seven",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Seven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea class for shifting a sum or product left or right by one element, i.e. a\n logical shift\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "Shiftable",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Shiftable",
          "type": "class"
        },
        "index": {
          "description": "class for shifting sum or product left or right by one element i.e logical shift",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Shiftable",
          "package": "shapely-data",
          "partial": "Shiftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Shiftable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Six",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Six",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Six",
          "package": "shapely-data",
          "partial": "Six",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Six"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Three",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Three",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Three",
          "package": "shapely-data",
          "partial": "Three",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Two",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal.html#Two",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Two",
          "package": "shapely-data",
          "partial": "Two",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#t:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the term at the 1-based index \u003ccode\u003en\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eHomogeneous\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e as !! i = 'fanin' as (i `'_of'` 'length' as)\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(!!)",
          "package": "shapely-data",
          "signature": "as -\u003e i -\u003e a",
          "source": "src/Data-Shapely-Normal.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "Return the term at the based index of the Homogeneous Product xs as fanin as of length as",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(!!) !!",
          "normalized": "a-\u003eb-\u003ec",
          "package": "shapely-data",
          "signature": "as-\u003ei-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ($$:) f = fromFList . f . toFList\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "($$:)",
          "package": "shapely-data",
          "signature": "(FixedList len a -\u003e FixedList len b) -\u003e as -\u003e bs",
          "source": "src/Data-Shapely-Normal.html#%24%24%3A",
          "type": "function"
        },
        "index": {
          "description": "fromFList toFList",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "($$:) $$:",
          "normalized": "(FixedList a b-\u003eFixedList a c)-\u003ed-\u003ee",
          "package": "shapely-data",
          "signature": "(FixedList len a-\u003eFixedList len b)-\u003eas-\u003ebs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-36--36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for combining \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e terms, with (\u003ccode\u003e\u003ca\u003e*:\u003c/a\u003e\u003c/code\u003e), e.g.\n \u003ccode\u003e0 *: 1 *: 2 *! 3\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e x *! y = (x,(y,()))\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(*!)",
          "package": "shapely-data",
          "signature": "x -\u003e y -\u003e (x, (y, ()))",
          "source": "src/Data-Shapely-Normal.html#%2A%21",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for combining Product terms with e.g",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(*!) *!",
          "normalized": "a-\u003eb-\u003e(a,(b,()))",
          "package": "shapely-data",
          "signature": "x-\u003ey-\u003e(x,(y,()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepend the term \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(*\u003c)",
          "package": "shapely-data",
          "signature": "a -\u003e xs -\u003e a :*\u003c: xs",
          "source": "src/Data-Shapely-Normal.html#%2A%3C",
          "type": "method"
        },
        "index": {
          "description": "prepend the term",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(*\u003c) *\u003c",
          "normalized": "a-\u003eb-\u003ea*b",
          "package": "shapely-data",
          "signature": "a-\u003exs-\u003ea*xs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-42--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left push for Products.\n\u003c/p\u003e\u003cpre\u003e (*:) = (,)\n\u003c/pre\u003e\u003cp\u003eFor a right push, see (\u003ccode\u003e\u003ca\u003e\u003e*\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(*:)",
          "package": "shapely-data",
          "signature": "x -\u003e xs -\u003e (x, xs)",
          "source": "src/Data-Shapely-Normal.html#%2A%3A",
          "type": "function"
        },
        "index": {
          "description": "left push for Products For right push see",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(*:) *:",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "shapely-data",
          "signature": "x-\u003exs-\u003e(x,xs)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eappend the term \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(\u003e*)",
          "package": "shapely-data",
          "signature": "xs -\u003e a -\u003e xs :\u003e*: a",
          "source": "src/Data-Shapely-Normal.html#%3E%2A",
          "type": "method"
        },
        "index": {
          "description": "append the term",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(\u003e*) \u003e*",
          "normalized": "a-\u003eb-\u003ea*b",
          "package": "shapely-data",
          "signature": "xs-\u003ea-\u003exs*a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply \u003ccode\u003eNormal\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "(\u003e*\u003c)",
          "package": "shapely-data",
          "signature": "xs -\u003e ys -\u003e xs :\u003e*\u003c: ys",
          "source": "src/Data-Shapely-Normal.html#%3E%2A%3C",
          "type": "method"
        },
        "index": {
          "description": "Multiply Normal types",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "(\u003e*\u003c) \u003e*\u003c",
          "normalized": "a-\u003eb-\u003ea*b",
          "package": "shapely-data",
          "signature": "xs-\u003eys-\u003exs*ys",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:-62--42--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "Only",
          "package": "shapely-data",
          "signature": "Only",
          "source": "src/Data-Shapely-Normal-Classes.html#Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "Only",
          "package": "shapely-data",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_1",
          "package": "shapely-data",
          "signature": "Proxy One",
          "source": "src/Data-Shapely-Normal.html#_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_1",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_1st",
          "package": "shapely-data",
          "signature": "c",
          "source": "src/Data-Shapely-Normal.html#_1st",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_1st",
          "package": "shapely-data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_1st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_2",
          "package": "shapely-data",
          "signature": "Proxy Two",
          "source": "src/Data-Shapely-Normal.html#_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_2",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_2nd",
          "package": "shapely-data",
          "signature": "One :+: c",
          "source": "src/Data-Shapely-Normal.html#_2nd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_2nd",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_2nd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_3",
          "package": "shapely-data",
          "signature": "Proxy Three",
          "source": "src/Data-Shapely-Normal.html#_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_3",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_3rd",
          "package": "shapely-data",
          "signature": "One :+: (One :+: c)",
          "source": "src/Data-Shapely-Normal.html#_3rd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_3rd",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_3rd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_4",
          "package": "shapely-data",
          "signature": "Proxy Four",
          "source": "src/Data-Shapely-Normal.html#_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_4",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_4th",
          "package": "shapely-data",
          "signature": "One :+: (One :+: (One :+: c))",
          "source": "src/Data-Shapely-Normal.html#_4th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_4th",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_4th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_5",
          "package": "shapely-data",
          "signature": "Proxy Five",
          "source": "src/Data-Shapely-Normal.html#_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_5",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_5th",
          "package": "shapely-data",
          "signature": "One :+: (One :+: (One :+: (One :+: c)))",
          "source": "src/Data-Shapely-Normal.html#_5th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_5th",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_5th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_6",
          "package": "shapely-data",
          "signature": "Proxy Six",
          "source": "src/Data-Shapely-Normal.html#_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_6",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_6th",
          "package": "shapely-data",
          "signature": "One :+: (One :+: (One :+: (One :+: (One :+: c))))",
          "source": "src/Data-Shapely-Normal.html#_6th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_6th",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_6th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_7",
          "package": "shapely-data",
          "signature": "Proxy Seven",
          "source": "src/Data-Shapely-Normal.html#_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_7",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "_7th",
          "package": "shapely-data",
          "signature": "One :+: (One :+: (One :+: (One :+: (One :+: (One :+: c)))))",
          "source": "src/Data-Shapely-Normal.html#_7th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_7th",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_7th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed as in e.g. \u003ccode\u003e_3rd \u003ccode\u003e\u003ca\u003e_of\u003c/a\u003e\u003c/code\u003e _7\u003c/code\u003e, which has inferred type \u003ccode\u003eSeven\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "_of",
          "package": "shapely-data",
          "signature": "c -\u003e Proxy c -\u003e c",
          "source": "src/Data-Shapely-Normal.html#_of",
          "type": "function"
        },
        "index": {
          "description": "Used as in e.g rd of which has inferred type Seven",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "_of",
          "normalized": "a-\u003eProxy a-\u003ea",
          "package": "shapely-data",
          "signature": "c-\u003eProxy c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ary _ = id\n\u003c/pre\u003e\u003cp\u003eForce the arity of an arity-polymorphic function on \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es. e.g.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t _3 `ary` shiftl\n\u003c/code\u003e\u003c/strong\u003e_3 `ary` shiftl :: (a, (a1, (a2, ()))) -\u003e ShiftedL (a, (a1, (a2, ())))\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "ary",
          "package": "shapely-data",
          "signature": "Proxy c -\u003e (p -\u003e x) -\u003e p -\u003e x",
          "source": "src/Data-Shapely-Normal.html#ary",
          "type": "function"
        },
        "index": {
          "description": "ary id Force the arity of an arity-polymorphic function on Product e.g ary shiftl ary shiftl a1 a2 ShiftedL a1 a2",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "ary",
          "normalized": "Proxy a-\u003e(b-\u003ec)-\u003eb-\u003ec",
          "package": "shapely-data",
          "signature": "Proxy c-\u003e(p-\u003ex)-\u003ep-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:ary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e constructorsOfNormal = 'unfanin' id\n\u003c/pre\u003e\u003cp\u003eSee also \u003ccode\u003econstructorsOf\u003c/code\u003e. E.g.\n\u003c/p\u003e\u003cpre\u003e constructorsOfNormal ('a',('b',())) 'x' 'y'  ==  ('x',('y',()))\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "constructorsOfNormal",
          "package": "shapely-data",
          "signature": "-\u003e r",
          "source": "src/Data-Shapely-Normal.html#constructorsOfNormal",
          "type": "function"
        },
        "index": {
          "description": "constructorsOfNormal unfanin id See also constructorsOf E.g constructorsOfNormal",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "constructorsOfNormal",
          "normalized": "-\u003ea",
          "package": "shapely-data",
          "partial": "Of Normal",
          "signature": "-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:constructorsOfNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactor out and return the \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e from a homogeneous \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e. An\n n-ary \u003ccode\u003ecodiag\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e extract = fst . factorPrefix\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "extract",
          "package": "shapely-data",
          "signature": "Either t ts -\u003e t",
          "source": "src/Data-Shapely-Normal.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Factor out and return the Product from homogeneous Sum An n-ary codiag See also repeat for Product extract fst factorPrefix",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "extract",
          "normalized": "Either a b-\u003ea",
          "package": "shapely-data",
          "signature": "Either t ts-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "factorPrefix",
          "package": "shapely-data",
          "signature": "abcs -\u003e (ab, abcs :/ ab)",
          "source": "src/Data-Shapely-Normal.html#factorPrefix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "factorPrefix",
          "normalized": "a-\u003e(b,a b)",
          "package": "shapely-data",
          "partial": "Prefix",
          "signature": "abcs-\u003e(ab,abcs ab)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:factorPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "fanin",
          "package": "shapely-data",
          "signature": "-\u003e x) -\u003e abc -\u003e x",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#fanin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "fanin",
          "normalized": "-\u003ea)-\u003eb-\u003ea",
          "package": "shapely-data",
          "signature": "-\u003ex)-\u003eabc-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:fanin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "fanout",
          "package": "shapely-data",
          "signature": "abc) -\u003e x -\u003e abc",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#fanout",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "fanout",
          "normalized": "a)-\u003eb-\u003ea",
          "package": "shapely-data",
          "signature": "abc)-\u003ex-\u003eabc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:fanout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list back into a homogeneous \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "fromFList",
          "package": "shapely-data",
          "signature": "FixedList len a -\u003e Replicated len a",
          "source": "src/Data-Shapely-Normal.html#fromFList",
          "type": "method"
        },
        "index": {
          "description": "Convert list back into homogeneous Product",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "fromFList",
          "normalized": "FixedList a b-\u003eReplicated a b",
          "package": "shapely-data",
          "partial": "FList",
          "signature": "FixedList len a-\u003eReplicated len a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:fromFList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "just",
          "package": "shapely-data",
          "signature": "a",
          "source": "src/Data-Shapely-Normal-Classes.html#Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "just",
          "package": "shapely-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "length",
          "package": "shapely-data",
          "signature": "as -\u003e Proxy (Length as)",
          "source": "src/Data-Shapely-Normal.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "length",
          "normalized": "a-\u003eProxy(Length a)",
          "package": "shapely-data",
          "signature": "as-\u003eProxy(Length as)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e type \u003ccode\u003ex\u003c/code\u003e into some \u003ccode\u003e\u003ca\u003eMassageable\u003c/a\u003e\u003c/code\u003e normal-form type \u003ccode\u003ey\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "massageNormal",
          "package": "shapely-data",
          "signature": "x -\u003e y",
          "source": "src/Data-Shapely-Normal-Massageable.html#massageNormal",
          "type": "method"
        },
        "index": {
          "description": "Convert Normal type into some Massageable normal-form type",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "massageNormal",
          "normalized": "a-\u003eb",
          "package": "shapely-data",
          "partial": "Normal",
          "signature": "x-\u003ey",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:massageNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eFill\u003c/a\u003e a product with an initial value. If the size of the resulting\n product can't be inferred from context, provide a sype signature:\n\u003c/p\u003e\u003cpre\u003e truths = repeat True :: (Bool,(Bool,(Bool,())))\n\u003c/pre\u003e\u003cp\u003eAn n-ary \u003ccode\u003ecodiag\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003eextract\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "repeat",
          "package": "shapely-data",
          "signature": "a -\u003e as",
          "source": "src/Data-Shapely-Normal.html#repeat",
          "type": "method"
        },
        "index": {
          "description": "Fill product with an initial value If the size of the resulting product can be inferred from context provide sype signature truths repeat True Bool Bool Bool An n-ary codiag See also extract for Sum",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "repeat",
          "normalized": "a-\u003eb",
          "package": "shapely-data",
          "signature": "a-\u003eas",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplicate \u003ccode\u003ea\u003c/code\u003e, producing a \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003elen\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e replicate _ = 'repeat'\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "replicate",
          "package": "shapely-data",
          "signature": "Proxy len -\u003e a -\u003e Replicated len a",
          "source": "src/Data-Shapely-Normal.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Replicate producing Product of length len replicate repeat",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "replicate",
          "normalized": "Proxy a-\u003eb-\u003eReplicated a b",
          "package": "shapely-data",
          "signature": "Proxy len-\u003ea-\u003eReplicated len a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "reverse",
          "package": "shapely-data",
          "signature": "t -\u003e Reversed t",
          "source": "src/Data-Shapely-Normal.html#reverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "reverse",
          "normalized": "a-\u003eReversed a",
          "package": "shapely-data",
          "signature": "t-\u003eReversed t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "shiftl",
          "package": "shapely-data",
          "signature": "t -\u003e ShiftedL t",
          "source": "src/Data-Shapely-Normal.html#shiftl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "shiftl",
          "normalized": "a-\u003eShiftedL a",
          "package": "shapely-data",
          "signature": "t-\u003eShiftedL t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:shiftl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "shiftr",
          "package": "shapely-data",
          "signature": "t -\u003e ShiftedR t",
          "source": "src/Data-Shapely-Normal.html#shiftr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "shiftr",
          "normalized": "a-\u003eShiftedR a",
          "package": "shapely-data",
          "signature": "t-\u003eShiftedR t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:shiftr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "single",
          "package": "shapely-data",
          "signature": "a -\u003e (a, ())",
          "source": "src/Data-Shapely-Normal.html#single",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "single",
          "normalized": "a-\u003e(a,())",
          "package": "shapely-data",
          "signature": "a-\u003e(a,())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a homogeneous product to a fixed-length list.\n\u003c/p\u003e",
          "module": "Data.Shapely.Normal",
          "name": "toFList",
          "package": "shapely-data",
          "signature": "as -\u003e FixedList (Length as) a",
          "source": "src/Data-Shapely-Normal.html#toFList",
          "type": "method"
        },
        "index": {
          "description": "Convert homogeneous product to fixed-length list",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "toFList",
          "normalized": "a-\u003eFixedList(Length a)b",
          "package": "shapely-data",
          "partial": "FList",
          "signature": "as-\u003eFixedList(Length as)a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:toFList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "unfanin",
          "package": "shapely-data",
          "signature": "-\u003e x",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#unfanin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "unfanin",
          "normalized": "-\u003ea",
          "package": "shapely-data",
          "signature": "-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:unfanin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Normal",
          "name": "unfanout",
          "package": "shapely-data",
          "signature": "abc",
          "source": "src/Data-Shapely-Normal-Exponentiation.html#unfanout",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "unfanout",
          "package": "shapely-data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:unfanout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: \u003ccode\u003eviewl\u003c/code\u003e would be simply \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e viewr = swap . shiftr\n\u003c/pre\u003e",
          "module": "Data.Shapely.Normal",
          "name": "viewr",
          "package": "shapely-data",
          "signature": "t -\u003e p b a",
          "source": "src/Data-Shapely-Normal.html#viewr",
          "type": "function"
        },
        "index": {
          "description": "Note viewl would be simply id viewr swap shiftr",
          "hierarchy": "Data Shapely Normal",
          "module": "Data.Shapely.Normal",
          "name": "viewr",
          "normalized": "a-\u003eb c d",
          "package": "shapely-data",
          "signature": "t-\u003ep b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Normal.html#v:viewr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Spine",
          "name": "Spine",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Spine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": "Spine",
          "package": "shapely-data",
          "partial": "Spine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Spine",
          "name": ":-!",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Spine.html#%3A-%21",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": ":-!",
          "package": "shapely-data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#t::-45--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely.Spine",
          "name": ":-:",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Spine.html#%3A-%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": ":-:",
          "package": "shapely-data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#t::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"spine\" of some \u003ccode\u003e\u003ca\u003eShapely\u003c/a\u003e\u003c/code\u003e instance type can be specified by\n enumerating the types of its recursive subterms in a \u003ccode\u003eProduct\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e\n values. For instance the spine of \u003ccode\u003edata L = Cons Int L | Empty\u003c/code\u003e would simply\n be\n\u003c/p\u003e\u003cpre\u003e (Proxy :: Proxy L, ())\n\u003c/pre\u003e\u003cp\u003eWhen parameterized types make up the recursive structure, like \u003ccode\u003e[a]\u003c/code\u003e one can\n specify the spine using just the base type (in this case \u003ccode\u003e[]\u003c/code\u003e), e.g.\n\u003c/p\u003e\u003cpre\u003e (Proxy :: Proxy [], ())\n\u003c/pre\u003e\u003cp\u003e...or the base type applied as far as desired and functions using this spine\n will match potential product terms accordingly (e.g. \u003ccode\u003ecoerceWith\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eproxy-kindness\u003c/a\u003e for utilities useful fo constructing \u003ccode\u003eSpine\u003c/code\u003es, e.g.\n \u003ccode\u003e\u003ca\u003eunappliedOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely.Spine",
          "name": "SpineOf",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Spine.html#SpineOf",
          "type": "class"
        },
        "index": {
          "description": "The spine of some Shapely instance type can be specified by enumerating the types of its recursive subterms in Product of Proxy values For instance the spine of data Cons Int Empty would simply be Proxy Proxy When parameterized types make up the recursive structure like one can specify the spine using just the base type in this case e.g Proxy Proxy or the base type applied as far as desired and functions using this spine will match potential product terms accordingly e.g coerceWith See proxy-kindness for utilities useful fo constructing Spine e.g unappliedOf",
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": "SpineOf",
          "package": "shapely-data",
          "partial": "Spine Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#t:SpineOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e proxyTypeOf = return\n\u003c/pre\u003e",
          "module": "Data.Shapely.Spine",
          "name": "proxyTypeOf",
          "package": "shapely-data",
          "signature": "a -\u003e Proxy a",
          "source": "src/Data-Shapely-Spine.html#proxyTypeOf",
          "type": "function"
        },
        "index": {
          "description": "proxyTypeOf return",
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": "proxyTypeOf",
          "normalized": "a-\u003eProxy a",
          "package": "shapely-data",
          "partial": "Type Of",
          "signature": "a-\u003eProxy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#v:proxyTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows for terse definition of the cluster of types that make up a\n type's spine. E.g.\n\u003c/p\u003e\u003cpre\u003e sp = spine :: (Foo ':-:' Bar ':-!' Baz)\n\u003c/pre\u003e",
          "module": "Data.Shapely.Spine",
          "name": "spine",
          "package": "shapely-data",
          "signature": "ts",
          "source": "src/Data-Shapely-Spine.html#spine",
          "type": "method"
        },
        "index": {
          "description": "Allows for terse definition of the cluster of types that make up type spine E.g sp spine Foo Bar Baz",
          "hierarchy": "Data Shapely Spine",
          "module": "Data.Shapely.Spine",
          "name": "spine",
          "package": "shapely-data",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely-Spine.html#v:spine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely",
          "name": "Shapely",
          "package": "shapely-data",
          "source": "src/Data-Shapely.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Shapely",
          "package": "shapely-data",
          "partial": "Shapely",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eShapely\u003c/a\u003e\u003c/code\u003e type \u003ccode\u003ea\u003c/code\u003e coercible to \u003ccode\u003eb\u003c/code\u003e where types in the spine \u003ccode\u003ets\u003c/code\u003e are\n recursively \u003ccode\u003e\u003ca\u003ecoerceWith\u003c/a\u003e\u003c/code\u003e-ed to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "CoercibleWith",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Coercible.html#CoercibleWith",
          "type": "class"
        },
        "index": {
          "description": "Shapely type coercible to where types in the spine ts are recursively coerceWith ed to",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "CoercibleWith",
          "package": "shapely-data",
          "partial": "Coercible With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:CoercibleWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo types \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are isomorphic, by this definition, if they have the\n same number and ordering of constructors, and where \u003ccode\u003eProduct\u003c/code\u003e terms are\n identical or a corresponding recursive \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "Isomorphic",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Coercible.html#Isomorphic",
          "type": "class"
        },
        "index": {
          "description": "Two types and are isomorphic by this definition if they have the same number and ordering of constructors and where Product terms are identical or corresponding recursive and",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Isomorphic",
          "package": "shapely-data",
          "partial": "Isomorphic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:Isomorphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDISCLAIMER: this function is experimental (although it should be correct) and the behavior may change in the next version, based on user feedback. Please see list of limitations below and send feedback if you have any.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA class for typed, principled, \"fuzzy coercions\" between types.  See also\n \u003ccode\u003e\u003ca\u003eMassageableNormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis works as follows (or see examples below):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es in the source \u003ccode\u003ea\u003c/code\u003e must be mappable unambiguously to\n     exactly one product in the target \u003ccode\u003eb\u003c/code\u003e, according to the rules below.\n     This is a total function, and all product terms in the source are\n     preserved.\n\u003c/li\u003e\u003cli\u003e Products in \u003ccode\u003ea\u003c/code\u003e come in two flavors which are mapped differently onto\n     \u003ccode\u003eb\u003c/code\u003e: if a source product contains all uniquely-typed terms we treat it\n     as a type-indexed product (TIP) and its terms will be freely shuffled to\n     match its target; otherwise we consider the ordering of product terms to\n     be significant and require a target product with the same ordering. The\n     mapping between terms in source and target products is a bijection.\n\u003c/li\u003e\u003cli\u003e We map source product subterm \u003ccode\u003ea\u003c/code\u003es with target \u003ccode\u003eb\u003c/code\u003e subterms, by\n     recursively applying \u003ccode\u003e\u003ca\u003emassage\u003c/a\u003e\u003c/code\u003e (this is the only exception to the above,\n     and the only place where we inspect \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e subterms).\n\u003c/li\u003e\u003cli\u003e When the source \u003ccode\u003ea\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e this conversion may be surjective\n     w\u003cem\u003er\u003c/em\u003et the product mappings, i.e. multiple source \"constructors\" may map\n     to the same target constructor.  But again the individual mappings must be\n     unambiguous.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere are some examples:\n\u003c/p\u003e\u003cpre\u003e data Tsil a = Snoc (Tsil a) a | Lin\n           deriving Eq\n deriveShapely ''Tsil\n truth = massage \"123\" == Snoc (Snoc (Snoc Lin '3') '2') '1'\n\u003c/pre\u003e\u003cp\u003eOne limitation is we don't support a way to handle recursive structures\n beyond top-level direct recursion (e.g. mutually-recusrive pairs of types).\n And unlike \u003ccode\u003ecoerce\u003c/code\u003e functor type-applied recursive terms are not supported.\n\u003c/p\u003e\u003cp\u003eAny feedback on the above behavior would be greatly appreciated.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "Massageable",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Massageable.html#Massageable",
          "type": "class"
        },
        "index": {
          "description": "DISCLAIMER this function is experimental although it should be correct and the behavior may change in the next version based on user feedback Please see list of limitations below and send feedback if you have any class for typed principled fuzzy coercions between types See also MassageableNormal This works as follows or see examples below All Product in the source must be mappable unambiguously to exactly one product in the target according to the rules below This is total function and all product terms in the source are preserved Products in come in two flavors which are mapped differently onto if source product contains all uniquely-typed terms we treat it as type-indexed product TIP and its terms will be freely shuffled to match its target otherwise we consider the ordering of product terms to be significant and require target product with the same ordering The mapping between terms in source and target products is bijection We map source product subterm with target subterms by recursively applying massage this is the only exception to the above and the only place where we inspect Product subterms When the source is Sum this conversion may be surjective the product mappings i.e multiple source constructors may map to the same target constructor But again the individual mappings must be unambiguous Here are some examples data Tsil Snoc Tsil Lin deriving Eq deriveShapely Tsil truth massage Snoc Snoc Snoc Lin One limitation is we don support way to handle recursive structures beyond top-level direct recursion e.g mutually-recusrive pairs of types And unlike coerce functor type-applied recursive terms are not supported Any feedback on the above behavior would be greatly appreciated",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Massageable",
          "package": "shapely-data",
          "partial": "Massageable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:Massageable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Product is a list of arbitrary terms constructed with \u003ccode\u003e(,)\u003c/code\u003e, and\n terminated by \u003ccode\u003e()\u003c/code\u003e in the \u003ccode\u003esnd\u003c/code\u003e. e.g.\n\u003c/p\u003e\u003cpre\u003e prod = (1,(2,(3,())))\n\u003c/pre\u003e",
          "module": "Data.Shapely",
          "name": "Product",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Classes.html#Product",
          "type": "class"
        },
        "index": {
          "description": "Product is list of arbitrary terms constructed with and terminated by in the snd e.g prod",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Product",
          "package": "shapely-data",
          "partial": "Product",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of the \u003ccode\u003e\u003ca\u003eShapely\u003c/a\u003e\u003c/code\u003e class have  a \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e form representation,\n made up of \u003ccode\u003e(,)\u003c/code\u003e, \u003ccode\u003e()\u003c/code\u003e and \u003ccode\u003eEither\u003c/code\u003e, and functions to convert \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e and\n back \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e again.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "Shapely",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Classes.html#Shapely",
          "type": "class"
        },
        "index": {
          "description": "Instances of the Shapely class have Normal form representation made up of and Either and functions to convert from and back to again",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Shapely",
          "package": "shapely-data",
          "partial": "Shapely",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:Shapely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eSum\u003c/code\u003e is a non-empty list of \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003es constructed with \u003ccode\u003eEither\u003c/code\u003e\n and terminated by a \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e type on the \u003ccode\u003eRight\u003c/code\u003e. e.g.\n\u003c/p\u003e\u003cpre\u003e s = (Right $ Left (1,(2,(3,())))) :: Either (Bool,()) (Either (Int,(Int,(Int,()))) (Char,()))\n\u003c/pre\u003e\u003cp\u003eTo simplify type functions and class instances we also define the singleton\n sum \u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "Sum",
          "package": "shapely-data",
          "source": "src/Data-Shapely-Normal-Classes.html#Sum",
          "type": "class"
        },
        "index": {
          "description": "Sum is non-empty list of Product constructed with Either and terminated by Product type on the Right e.g Right Left Either Bool Either Int Int Int Char To simplify type functions and class instances we also define the singleton sum Only",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "Sum",
          "package": "shapely-data",
          "partial": "Sum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#t:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function on the \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e representation of a type to an ordinary\n value.\n\u003c/p\u003e\u003cpre\u003e ($$) f = to . f . from\n\u003c/pre\u003e",
          "module": "Data.Shapely",
          "name": "($$)",
          "package": "shapely-data",
          "signature": "(Normal a -\u003e Normal b) -\u003e a -\u003e b",
          "source": "src/Data-Shapely-Utilities.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Apply function on the Normal representation of type to an ordinary value to from",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "($$) $$",
          "normalized": "(Normal a-\u003eNormal b)-\u003ea-\u003eb",
          "package": "shapely-data",
          "signature": "(Normal a-\u003eNormal b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a possibly direct-recursive type \u003ccode\u003ea\u003c/code\u003e to an isomorphic type\n \u003ccode\u003eb\u003c/code\u003e. This is defined:\n\u003c/p\u003e\u003cpre\u003e coerce a = 'coerceWith' ('unappliedOf' a, ()) a\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003emassage\u003c/code\u003e for a more powerful and flexible conversion function\n supporting direct recursion.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "coerce",
          "package": "shapely-data",
          "signature": "a -\u003e b",
          "source": "src/Data-Shapely-Normal-Coercible.html#coerce",
          "type": "method"
        },
        "index": {
          "description": "Convert possibly direct-recursive type to an isomorphic type This is defined coerce coerceWith unappliedOf See massage for more powerful and flexible conversion function supporting direct recursion",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "coerce",
          "normalized": "a-\u003eb",
          "package": "shapely-data",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a type \u003ccode\u003ea\u003c/code\u003e to an isomorphic type \u003ccode\u003eb\u003c/code\u003e, where the \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e types\n in \u003ccode\u003ets\u003c/code\u003e define the recursive structure of \u003ccode\u003ea\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003eSpineOf\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThese terms will be converted to the target type when they appear as\n top-level product terms or in nested \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e applications.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "coerceWith",
          "package": "shapely-data",
          "signature": "ts -\u003e a -\u003e b",
          "source": "src/Data-Shapely-Normal-Coercible.html#coerceWith",
          "type": "method"
        },
        "index": {
          "description": "Convert type to an isomorphic type where the Proxy types in ts define the recursive structure of See SpineOf These terms will be converted to the target type when they appear as top-level product terms or in nested Functor applications",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "coerceWith",
          "normalized": "a-\u003eb-\u003ec",
          "package": "shapely-data",
          "partial": "With",
          "signature": "ts-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:coerceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a structure capable of rebuilding a type \u003ccode\u003ea\u003c/code\u003e from its \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e\n representation (via \u003ccode\u003e\u003ca\u003efanin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis structure is simply the data constructor (or a \u003ccode\u003eProduct\u003c/code\u003e of\n constructors for \u003ccode\u003eSum\u003c/code\u003es), e.g. for \u003ccode\u003eEither\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e constructorsOf _ = (Left,(Right,()))\n\u003c/pre\u003e\u003cp\u003eSatisfies:\n\u003c/p\u003e\u003cpre\u003e 'fanin' (constructorsOf a) (from a) == a\n\u003c/pre\u003e",
          "module": "Data.Shapely",
          "name": "constructorsOf",
          "package": "shapely-data",
          "signature": "-\u003e a",
          "source": "src/Data-Shapely-Classes.html#constructorsOf",
          "type": "method"
        },
        "index": {
          "description": "Return structure capable of rebuilding type from its Normal representation via fanin This structure is simply the data constructor or Product of constructors for Sum e.g for Either constructorsOf Left Right Satisfies fanin constructorsOf from",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "constructorsOf",
          "normalized": "-\u003ea",
          "package": "shapely-data",
          "partial": "Of",
          "signature": "-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:constructorsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eShapely\u003c/a\u003e\u003c/code\u003e instance for the type passed as argument \u003ccode\u003enm\u003c/code\u003e. Used\n like:\n\u003c/p\u003e\u003cpre\u003e $(deriveShapely ''Tree)  -- two single-quotes reference a TH \"Name\"\n\u003c/pre\u003e\u003cp\u003eThe algorithm used here to generate the \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e instance is most easily\n described syntactically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Constructors are replaced with \u003ccode\u003e()\u003c/code\u003e, which terminate (rather than start)\n      a product\n\u003c/li\u003e\u003cli\u003e Product terms are composed with nested tuples, e.g. \u003ccode\u003eFoo a b c ==\u003e (a,(b,(c,())))\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e|\u003c/code\u003e in multiconstructor (\u003ccode\u003eSum\u003c/code\u003e) type declarations is replaced\n      with \u003ccode\u003eEither\u003c/code\u003e, with a nesting like the above\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that a \u003ccode\u003eProduct\u003c/code\u003e type in the \u003ccode\u003eRight\u003c/code\u003e place terminates a composed\n \u003ccode\u003eSum\u003c/code\u003e, while a \u003ccode\u003e()\u003c/code\u003e in the \u003ccode\u003esnd\u003c/code\u003e place terminates the composed terms\n of a \u003ccode\u003eProduct\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Shapely",
          "name": "deriveShapely",
          "package": "shapely-data",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Shapely-TH.html#deriveShapely",
          "type": "function"
        },
        "index": {
          "description": "Generate Shapely instance for the type passed as argument nm Used like deriveShapely Tree two single-quotes reference TH Name The algorithm used here to generate the Normal instance is most easily described syntactically Constructors are replaced with which terminate rather than start product Product terms are composed with nested tuples e.g Foo The in multiconstructor Sum type declarations is replaced with Either with nesting like the above Note that Product type in the Right place terminates composed Sum while in the snd place terminates the composed terms of Product",
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "deriveShapely",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "shapely-data",
          "partial": "Shapely",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:deriveShapely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely",
          "name": "from",
          "package": "shapely-data",
          "signature": "a -\u003e Normal a",
          "source": "src/Data-Shapely-Classes.html#from",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "from",
          "normalized": "a-\u003eNormal a",
          "package": "shapely-data",
          "signature": "a-\u003eNormal a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely",
          "name": "massage",
          "package": "shapely-data",
          "signature": "a -\u003e b",
          "source": "src/Data-Shapely-Normal-Massageable.html#massage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "massage",
          "normalized": "a-\u003eb",
          "package": "shapely-data",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:massage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Shapely",
          "name": "to",
          "package": "shapely-data",
          "signature": "Normal a -\u003e a",
          "source": "src/Data-Shapely-Classes.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Shapely",
          "module": "Data.Shapely",
          "name": "to",
          "normalized": "Normal a-\u003ea",
          "package": "shapely-data",
          "signature": "Normal a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shapely-data/docs/Data-Shapely.html#v:to"
      }
    }
  ]
]