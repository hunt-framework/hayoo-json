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
        "word": "units"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports all of the definitions you need if you wish to\n write functions polymorphic over dimension specifications.\n\u003c/p\u003e\u003cp\u003eEach dimensioned quantity is represented by a member of the type\n \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e, which is parameterized by a type-level list of \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003es.\n A \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003e, in turn, is a unit type paired with its exponent,\n representented with a type-level \u003ccode\u003eZ\u003c/code\u003e. The unit types should all be\n \u003cem\u003ecanonical\u003c/em\u003e -- that is, the \u003ca\u003ebase\u003c/a\u003e unit of all compatible units. Thus,\n the type of velocity in the SI system would be\n \u003ccode\u003eDim '[D Meter One, D Second MOne]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA technical detail: because \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003e is used only at the type level\n and needs to store types of kind \u003ccode\u003e*\u003c/code\u003e, it must be parameterized, as we\n can't specify \u003ccode\u003e*\u003c/code\u003e in its declaration. (See \"The Right Kind of Generic\n Programming\", by Jos&#233; Pedro Magalh&#227;es, published at WGP'12, for more\n explanation.) So, we always work with \u003ccode\u003e(DimSpec *)\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "Poly",
          "package": "units",
          "source": "src/Data-Dimensions-Poly.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports all of the definitions you need if you wish to write functions polymorphic over dimension specifications Each dimensioned quantity is represented by member of the type Dim which is parameterized by type-level list of DimSpec DimSpec in turn is unit type paired with its exponent representented with type-level The unit types should all be canonical that is the base unit of all compatible units Thus the type of velocity in the SI system would be Dim Meter One Second MOne technical detail because DimSpec is used only at the type level and needs to store types of kind it must be parameterized as we can specify in its declaration See The Right Kind of Generic Programming by Jos Pedro Magalh es published at WGP for more explanation So we always work with DimSpec",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "Poly",
          "package": "units",
          "partial": "Poly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo these DimSpecs represent the same dimension?\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "($=)",
          "package": "units",
          "signature": "($=)",
          "type": "function"
        },
        "index": {
          "description": "Do these DimSpecs represent the same dimension",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "($=) $=",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if two \u003ccode\u003e[DimSpec *]\u003c/code\u003es should be considered to be equal\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "(@~)",
          "package": "units",
          "signature": "(@~)",
          "type": "function"
        },
        "index": {
          "description": "Check if two DimSpec should be considered to be equal",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "(@~) @~",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication of the exponents in a dimension by a scalar\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "(@*)",
          "package": "units",
          "signature": "(@*)",
          "type": "function"
        },
        "index": {
          "description": "Multiplication of the exponents in dimension by scalar",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "(@*) @*",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds corresponding exponents in two dimension\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "(@+)",
          "package": "units",
          "signature": "(@+)",
          "type": "function"
        },
        "index": {
          "description": "Adds corresponding exponents in two dimension",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "(@+) @+",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract exponents in two dimensions\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "(@-)",
          "package": "units",
          "signature": "(@-)",
          "type": "function"
        },
        "index": {
          "description": "Subtract exponents in two dimensions",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "(@-) @-",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision of the exponents in a dimension by a scalar\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "(@/)",
          "package": "units",
          "signature": "(@/)",
          "type": "function"
        },
        "index": {
          "description": "Division of the exponents in dimension by scalar",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "(@/) @/",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDim adds a dimensional annotation to its base type \u003ccode\u003en\u003c/code\u003e. This is the\n representation for all dimensioned quantities.\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "Dim",
          "package": "units",
          "source": "src/Data-Dimensions-Dim.html#Dim",
          "type": "data"
        },
        "index": {
          "description": "Dim adds dimensional annotation to its base type This is the representation for all dimensioned quantities",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "Dim",
          "package": "units",
          "partial": "Dim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will only be used at the kind level. It holds a dimension with its\n exponent.\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "DimSpec",
          "package": "units",
          "source": "src/Data-Dimensions-DimSpec.html#DimSpec",
          "type": "data"
        },
        "index": {
          "description": "This will only be used at the kind level It holds dimension with its exponent",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "DimSpec",
          "package": "units",
          "partial": "Dim Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:DimSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(Extract s lst)\u003c/code\u003e pulls the DimSpec that matches s out of lst, returning a\n   diminished list and, possibly, the extracted DimSpec.\n\u003c/p\u003e\u003cpre\u003e\n Extract A [A, B, C] ==\u003e ([B, C], Just A\n Extract D [A, B, C] ==\u003e ([A, B, C], Nothing)\n\u003c/pre\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "Extract",
          "package": "units",
          "signature": "Extract",
          "type": "function"
        },
        "index": {
          "description": "Extract lst pulls the DimSpec that matches out of lst returning diminished list and possibly the extracted DimSpec Extract Just Extract Nothing",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "Extract",
          "package": "units",
          "partial": "Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegate a single \u003ccode\u003eDimSpec\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "NegDim",
          "package": "units",
          "signature": "NegDim",
          "type": "function"
        },
        "index": {
          "description": "negate single DimSpec",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "NegDim",
          "package": "units",
          "partial": "Neg Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:NegDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegate a list of \u003ccode\u003eDimSpec\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "NegList",
          "package": "units",
          "signature": "NegList",
          "type": "function"
        },
        "index": {
          "description": "negate list of DimSpec",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "NegList",
          "package": "units",
          "partial": "Neg List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:NegList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e[DimSpec *]\u003c/code\u003e and remove any \u003ccode\u003eDimSpec\u003c/code\u003es with an exponent of 0\n\u003c/p\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "Normalize",
          "package": "units",
          "signature": "Normalize",
          "type": "function"
        },
        "index": {
          "description": "Take DimSpec and remove any DimSpec with an exponent of",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "Normalize",
          "package": "units",
          "partial": "Normalize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReorders a to be the in the same order as b, putting entries not in b at the end\n\u003c/p\u003e\u003cpre\u003e\n Reorder [A 1, B 2] [B 5, A 2] ==\u003e [B 2, A 1]\n Reorder [A 1, B 2, C 3] [C 2, A 8] ==\u003e [C 3, A 1, B 2]\n Reorder [A 1, B 2] [B 4, C 1, A 9] ==\u003e [B 2, A 1]\n Reorder x x ==\u003e x\n Reorder x [] ==\u003e x\n Reorder [] x ==\u003e []\n\u003c/pre\u003e",
          "module": "Data.Dimensions.Poly",
          "name": "Reorder",
          "package": "units",
          "signature": "Reorder",
          "type": "function"
        },
        "index": {
          "description": "Reorders to be the in the same order as putting entries not in at the end Reorder Reorder Reorder Reorder Reorder Reorder",
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "Reorder",
          "package": "units",
          "partial": "Reorder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Reorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.Poly",
          "name": "D",
          "package": "units",
          "signature": "D star Z",
          "source": "src/Data-Dimensions-DimSpec.html#DimSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions Poly",
          "module": "Data.Dimensions.Poly",
          "name": "D",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines prefixes from the SI standard at \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Prefixes",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html",
          "type": "module"
        },
        "index": {
          "description": "Defines prefixes from the SI standard at http www.bipm.org en si",
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Prefixes",
          "package": "units",
          "partial": "Prefixes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-18\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Atto",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Atto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Atto",
          "package": "units",
          "partial": "Atto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-2\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Centi",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Centi",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Centi",
          "package": "units",
          "partial": "Centi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Centi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^1\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deca",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Deca",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deca",
          "package": "units",
          "partial": "Deca",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Deca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-1\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deci",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Deci",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deci",
          "package": "units",
          "partial": "Deci",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Deci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^18\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Exa",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Exa",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Exa",
          "package": "units",
          "partial": "Exa",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Exa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-15\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Femto",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Femto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Femto",
          "package": "units",
          "partial": "Femto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Femto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^9\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Giga",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Giga",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Giga",
          "package": "units",
          "partial": "Giga",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Giga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^2\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Hecto",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Hecto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Hecto",
          "package": "units",
          "partial": "Hecto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Hecto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^3\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Kilo",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Kilo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Kilo",
          "package": "units",
          "partial": "Kilo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Kilo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^6\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Mega",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Mega",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Mega",
          "package": "units",
          "partial": "Mega",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Mega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-6\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Micro",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Micro",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Micro",
          "package": "units",
          "partial": "Micro",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Micro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-3\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Milli",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Milli",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Milli",
          "package": "units",
          "partial": "Milli",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Milli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-9\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Nano",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Nano",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Nano",
          "package": "units",
          "partial": "Nano",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^15\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Peta",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Peta",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Peta",
          "package": "units",
          "partial": "Peta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Peta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-12\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Pico",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Pico",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Pico",
          "package": "units",
          "partial": "Pico",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Pico"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^12\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Tera",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Tera",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Tera",
          "package": "units",
          "partial": "Tera",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Tera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-24\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yocto",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Yocto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yocto",
          "package": "units",
          "partial": "Yocto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Yocto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^24\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yotta",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Yotta",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yotta",
          "package": "units",
          "partial": "Yotta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Yotta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^-21\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zepto",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Zepto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zepto",
          "package": "units",
          "partial": "Zepto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Zepto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e10^21\n\u003c/p\u003e",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zetta",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Zetta",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zetta",
          "package": "units",
          "partial": "Zetta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Zetta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Atto",
          "package": "units",
          "signature": "Atto",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Atto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Atto",
          "package": "units",
          "partial": "Atto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Centi",
          "package": "units",
          "signature": "Centi",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Centi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Centi",
          "package": "units",
          "partial": "Centi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Centi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deca",
          "package": "units",
          "signature": "Deca",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Deca",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deca",
          "package": "units",
          "partial": "Deca",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Deca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deci",
          "package": "units",
          "signature": "Deci",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Deci",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Deci",
          "package": "units",
          "partial": "Deci",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Deci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Exa",
          "package": "units",
          "signature": "Exa",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Exa",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Exa",
          "package": "units",
          "partial": "Exa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Exa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Femto",
          "package": "units",
          "signature": "Femto",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Femto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Femto",
          "package": "units",
          "partial": "Femto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Femto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Giga",
          "package": "units",
          "signature": "Giga",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Giga",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Giga",
          "package": "units",
          "partial": "Giga",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Giga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Hecto",
          "package": "units",
          "signature": "Hecto",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Hecto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Hecto",
          "package": "units",
          "partial": "Hecto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Hecto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Kilo",
          "package": "units",
          "signature": "Kilo",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Kilo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Kilo",
          "package": "units",
          "partial": "Kilo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Kilo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Mega",
          "package": "units",
          "signature": "Mega",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Mega",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Mega",
          "package": "units",
          "partial": "Mega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Mega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Micro",
          "package": "units",
          "signature": "Micro",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Micro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Micro",
          "package": "units",
          "partial": "Micro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Micro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Milli",
          "package": "units",
          "signature": "Milli",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Milli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Milli",
          "package": "units",
          "partial": "Milli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Milli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Nano",
          "package": "units",
          "signature": "Nano",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Nano",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Nano",
          "package": "units",
          "partial": "Nano",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Peta",
          "package": "units",
          "signature": "Peta",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Peta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Peta",
          "package": "units",
          "partial": "Peta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Peta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Pico",
          "package": "units",
          "signature": "Pico",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Pico",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Pico",
          "package": "units",
          "partial": "Pico",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Pico"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Tera",
          "package": "units",
          "signature": "Tera",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Tera",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Tera",
          "package": "units",
          "partial": "Tera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Tera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yocto",
          "package": "units",
          "signature": "Yocto",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Yocto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yocto",
          "package": "units",
          "partial": "Yocto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Yocto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yotta",
          "package": "units",
          "signature": "Yotta",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Yotta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Yotta",
          "package": "units",
          "partial": "Yotta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Yotta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zepto",
          "package": "units",
          "signature": "Zepto",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Zepto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zepto",
          "package": "units",
          "partial": "Zepto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Zepto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zetta",
          "package": "units",
          "signature": "Zetta",
          "source": "src/Data-Dimensions-SI-Prefixes.html#Zetta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "Zetta",
          "package": "units",
          "partial": "Zetta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Zetta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "atto",
          "package": "units",
          "signature": "unit -\u003e Atto :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#atto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "atto",
          "normalized": "a-\u003eAtto a",
          "package": "units",
          "signature": "unit-\u003eAtto unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "centi",
          "package": "units",
          "signature": "unit -\u003e Centi :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#centi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "centi",
          "normalized": "a-\u003eCenti a",
          "package": "units",
          "signature": "unit-\u003eCenti unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:centi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "deca",
          "package": "units",
          "signature": "unit -\u003e Deca :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#deca",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "deca",
          "normalized": "a-\u003eDeca a",
          "package": "units",
          "signature": "unit-\u003eDeca unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:deca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "deci",
          "package": "units",
          "signature": "unit -\u003e Deci :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#deci",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "deci",
          "normalized": "a-\u003eDeci a",
          "package": "units",
          "signature": "unit-\u003eDeci unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:deci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "exa",
          "package": "units",
          "signature": "unit -\u003e Exa :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#exa",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "exa",
          "normalized": "a-\u003eExa a",
          "package": "units",
          "signature": "unit-\u003eExa unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:exa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "femto",
          "package": "units",
          "signature": "unit -\u003e Femto :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#femto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "femto",
          "normalized": "a-\u003eFemto a",
          "package": "units",
          "signature": "unit-\u003eFemto unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:femto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "giga",
          "package": "units",
          "signature": "unit -\u003e Giga :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#giga",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "giga",
          "normalized": "a-\u003eGiga a",
          "package": "units",
          "signature": "unit-\u003eGiga unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:giga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "hecto",
          "package": "units",
          "signature": "unit -\u003e Hecto :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#hecto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "hecto",
          "normalized": "a-\u003eHecto a",
          "package": "units",
          "signature": "unit-\u003eHecto unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:hecto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "kilo",
          "package": "units",
          "signature": "unit -\u003e Kilo :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#kilo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "kilo",
          "normalized": "a-\u003eKilo a",
          "package": "units",
          "signature": "unit-\u003eKilo unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:kilo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "mega",
          "package": "units",
          "signature": "unit -\u003e Mega :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#mega",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "mega",
          "normalized": "a-\u003eMega a",
          "package": "units",
          "signature": "unit-\u003eMega unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:mega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "micro",
          "package": "units",
          "signature": "unit -\u003e Micro :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#micro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "micro",
          "normalized": "a-\u003eMicro a",
          "package": "units",
          "signature": "unit-\u003eMicro unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:micro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "milli",
          "package": "units",
          "signature": "unit -\u003e Milli :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#milli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "milli",
          "normalized": "a-\u003eMilli a",
          "package": "units",
          "signature": "unit-\u003eMilli unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:milli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "nano",
          "package": "units",
          "signature": "unit -\u003e Nano :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#nano",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "nano",
          "normalized": "a-\u003eNano a",
          "package": "units",
          "signature": "unit-\u003eNano unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "peta",
          "package": "units",
          "signature": "unit -\u003e Peta :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#peta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "peta",
          "normalized": "a-\u003ePeta a",
          "package": "units",
          "signature": "unit-\u003ePeta unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:peta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "pico",
          "package": "units",
          "signature": "unit -\u003e Pico :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#pico",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "pico",
          "normalized": "a-\u003ePico a",
          "package": "units",
          "signature": "unit-\u003ePico unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:pico"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "tera",
          "package": "units",
          "signature": "unit -\u003e Tera :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#tera",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "tera",
          "normalized": "a-\u003eTera a",
          "package": "units",
          "signature": "unit-\u003eTera unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:tera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "yocto",
          "package": "units",
          "signature": "unit -\u003e Yocto :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#yocto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "yocto",
          "normalized": "a-\u003eYocto a",
          "package": "units",
          "signature": "unit-\u003eYocto unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:yocto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "yotta",
          "package": "units",
          "signature": "unit -\u003e Yotta :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#yotta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "yotta",
          "normalized": "a-\u003eYotta a",
          "package": "units",
          "signature": "unit-\u003eYotta unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:yotta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "zepto",
          "package": "units",
          "signature": "unit -\u003e Zepto :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#zepto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "zepto",
          "normalized": "a-\u003eZepto a",
          "package": "units",
          "signature": "unit-\u003eZepto unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:zepto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "zetta",
          "package": "units",
          "signature": "unit -\u003e Zetta :@ unit",
          "source": "src/Data-Dimensions-SI-Prefixes.html#zetta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Prefixes",
          "module": "Data.Dimensions.SI.Prefixes",
          "name": "zetta",
          "normalized": "a-\u003eZetta a",
          "package": "units",
          "signature": "unit-\u003eZetta unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:zetta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines type synonyms for SI units.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.SI.Types",
          "name": "Types",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type synonyms for SI units",
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Types",
          "package": "units",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Acceleration",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Acceleration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Acceleration",
          "package": "units",
          "partial": "Acceleration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Acceleration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Area",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Area",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Area",
          "package": "units",
          "partial": "Area",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Capacitance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Capacitance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Capacitance",
          "package": "units",
          "partial": "Capacitance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Capacitance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "CatalyticActivity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#CatalyticActivity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "CatalyticActivity",
          "package": "units",
          "partial": "Catalytic Activity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:CatalyticActivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Charge",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Charge",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Charge",
          "package": "units",
          "partial": "Charge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Charge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Concentration",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Concentration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Concentration",
          "package": "units",
          "partial": "Concentration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Concentration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Conductance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Conductance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Conductance",
          "package": "units",
          "partial": "Conductance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Conductance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Current",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Current",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Current",
          "package": "units",
          "partial": "Current",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "CurrentDensity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#CurrentDensity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "CurrentDensity",
          "package": "units",
          "partial": "Current Density",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:CurrentDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Density",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Density",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Density",
          "package": "units",
          "partial": "Density",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Density"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "ElectricPotential",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#ElectricPotential",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "ElectricPotential",
          "package": "units",
          "partial": "Electric Potential",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:ElectricPotential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Energy",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Energy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Energy",
          "package": "units",
          "partial": "Energy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Energy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Force",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Force",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Force",
          "package": "units",
          "partial": "Force",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Frequency",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Frequency",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Frequency",
          "package": "units",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Illuminance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Illuminance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Illuminance",
          "package": "units",
          "partial": "Illuminance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Illuminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Inductance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Inductance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Inductance",
          "package": "units",
          "partial": "Inductance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Inductance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Kerma",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Kerma",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Kerma",
          "package": "units",
          "partial": "Kerma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Kerma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Length",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Length",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Length",
          "package": "units",
          "partial": "Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Luminance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Luminance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Luminance",
          "package": "units",
          "partial": "Luminance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Luminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Luminosity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Luminosity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Luminosity",
          "package": "units",
          "partial": "Luminosity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Luminosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "LuminousFlux",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#LuminousFlux",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "LuminousFlux",
          "package": "units",
          "partial": "Luminous Flux",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:LuminousFlux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticFlux",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#MagneticFlux",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticFlux",
          "package": "units",
          "partial": "Magnetic Flux",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticFlux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticFluxDensity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#MagneticFluxDensity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticFluxDensity",
          "package": "units",
          "partial": "Magnetic Flux Density",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticFluxDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticStrength",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#MagneticStrength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "MagneticStrength",
          "package": "units",
          "partial": "Magnetic Strength",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticStrength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Mass",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Mass",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Mass",
          "package": "units",
          "partial": "Mass",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Momentum",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Momentum",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Momentum",
          "package": "units",
          "partial": "Momentum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Momentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Power",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Power",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Power",
          "package": "units",
          "partial": "Power",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Power"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Pressure",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Pressure",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Pressure",
          "package": "units",
          "partial": "Pressure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Pressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Quantity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Quantity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Quantity",
          "package": "units",
          "partial": "Quantity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Quantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Resistance",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Resistance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Resistance",
          "package": "units",
          "partial": "Resistance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Resistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "SpecificVolume",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#SpecificVolume",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "SpecificVolume",
          "package": "units",
          "partial": "Specific Volume",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:SpecificVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "SurfaceDensity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#SurfaceDensity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "SurfaceDensity",
          "package": "units",
          "partial": "Surface Density",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:SurfaceDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Temperature",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Temperature",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Temperature",
          "package": "units",
          "partial": "Temperature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Temperature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Time",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Time",
          "package": "units",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Velocity",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Velocity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Velocity",
          "package": "units",
          "partial": "Velocity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Volume",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Volume",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Volume",
          "package": "units",
          "partial": "Volume",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Types",
          "name": "Wavenumber",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Types.html#Wavenumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Types",
          "module": "Data.Dimensions.SI.Types",
          "name": "Wavenumber",
          "package": "units",
          "partial": "Wavenumber",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Wavenumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports unit definitions according to the SI system of units.\n The definitions were taken from here: \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere is one deviation from the definition at that site: To work better\n with prefixes, the unit of mass is \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.SI.Units",
          "name": "Units",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports unit definitions according to the SI system of units The definitions were taken from here http www.bipm.org en si There is one deviation from the definition at that site To work better with prefixes the unit of mass is Gram",
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Units",
          "package": "units",
          "partial": "Units",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Ampere",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Ampere",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Ampere",
          "package": "units",
          "partial": "Ampere",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Ampere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Becquerel",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Becquerel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Becquerel",
          "package": "units",
          "partial": "Becquerel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Becquerel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Candela",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Candela",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Candela",
          "package": "units",
          "partial": "Candela",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Candela"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Coulomb",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Coulomb",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Coulomb",
          "package": "units",
          "partial": "Coulomb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Coulomb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Farad",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Farad",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Farad",
          "package": "units",
          "partial": "Farad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Farad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Gram",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Gram",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Gram",
          "package": "units",
          "partial": "Gram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Gram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Gray",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Gray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Gray",
          "package": "units",
          "partial": "Gray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Henry",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Henry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Henry",
          "package": "units",
          "partial": "Henry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Henry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Hertz",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Hertz",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Hertz",
          "package": "units",
          "partial": "Hertz",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Hertz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Joule",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Joule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Joule",
          "package": "units",
          "partial": "Joule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Joule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Katal",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Katal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Katal",
          "package": "units",
          "partial": "Katal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Katal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Kelvin",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Kelvin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Kelvin",
          "package": "units",
          "partial": "Kelvin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Kelvin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Lumen",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Lumen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Lumen",
          "package": "units",
          "partial": "Lumen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Lumen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Lux",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Lux",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Lux",
          "package": "units",
          "partial": "Lux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Lux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Meter",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Meter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Meter",
          "package": "units",
          "partial": "Meter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Meter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Mole",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Mole",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Mole",
          "package": "units",
          "partial": "Mole",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Mole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Newton",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Newton",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Newton",
          "package": "units",
          "partial": "Newton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Newton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Ohm",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Ohm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Ohm",
          "package": "units",
          "partial": "Ohm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Ohm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Pascal",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Pascal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Pascal",
          "package": "units",
          "partial": "Pascal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Pascal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Second",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Second",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Second",
          "package": "units",
          "partial": "Second",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Siemens",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Siemens",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Siemens",
          "package": "units",
          "partial": "Siemens",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Siemens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Sievert",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Sievert",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Sievert",
          "package": "units",
          "partial": "Sievert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Sievert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Tesla",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Tesla",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Tesla",
          "package": "units",
          "partial": "Tesla",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Tesla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Volt",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Volt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Volt",
          "package": "units",
          "partial": "Volt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Volt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Watt",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Watt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Watt",
          "package": "units",
          "partial": "Watt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Watt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Weber",
          "package": "units",
          "source": "src/Data-Dimensions-SI-Units.html#Weber",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Weber",
          "package": "units",
          "partial": "Weber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Weber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Ampere",
          "package": "units",
          "signature": "Ampere",
          "source": "src/Data-Dimensions-SI-Units.html#Ampere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Ampere",
          "package": "units",
          "partial": "Ampere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Ampere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Becquerel",
          "package": "units",
          "signature": "Becquerel",
          "source": "src/Data-Dimensions-SI-Units.html#Becquerel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Becquerel",
          "package": "units",
          "partial": "Becquerel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Becquerel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Candela",
          "package": "units",
          "signature": "Candela",
          "source": "src/Data-Dimensions-SI-Units.html#Candela",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Candela",
          "package": "units",
          "partial": "Candela",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Candela"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Coulomb",
          "package": "units",
          "signature": "Coulomb",
          "source": "src/Data-Dimensions-SI-Units.html#Coulomb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Coulomb",
          "package": "units",
          "partial": "Coulomb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Coulomb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Farad",
          "package": "units",
          "signature": "Farad",
          "source": "src/Data-Dimensions-SI-Units.html#Farad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Farad",
          "package": "units",
          "partial": "Farad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Farad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Gram",
          "package": "units",
          "signature": "Gram",
          "source": "src/Data-Dimensions-SI-Units.html#Gram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Gram",
          "package": "units",
          "partial": "Gram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Gram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Gray",
          "package": "units",
          "signature": "Gray",
          "source": "src/Data-Dimensions-SI-Units.html#Gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Gray",
          "package": "units",
          "partial": "Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Henry",
          "package": "units",
          "signature": "Henry",
          "source": "src/Data-Dimensions-SI-Units.html#Henry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Henry",
          "package": "units",
          "partial": "Henry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Henry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Hertz",
          "package": "units",
          "signature": "Hertz",
          "source": "src/Data-Dimensions-SI-Units.html#Hertz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Hertz",
          "package": "units",
          "partial": "Hertz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Hertz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Joule",
          "package": "units",
          "signature": "Joule",
          "source": "src/Data-Dimensions-SI-Units.html#Joule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Joule",
          "package": "units",
          "partial": "Joule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Joule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Katal",
          "package": "units",
          "signature": "Katal",
          "source": "src/Data-Dimensions-SI-Units.html#Katal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Katal",
          "package": "units",
          "partial": "Katal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Katal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Kelvin",
          "package": "units",
          "signature": "Kelvin",
          "source": "src/Data-Dimensions-SI-Units.html#Kelvin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Kelvin",
          "package": "units",
          "partial": "Kelvin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Kelvin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Lumen",
          "package": "units",
          "signature": "Lumen",
          "source": "src/Data-Dimensions-SI-Units.html#Lumen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Lumen",
          "package": "units",
          "partial": "Lumen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Lumen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Lux",
          "package": "units",
          "signature": "Lux",
          "source": "src/Data-Dimensions-SI-Units.html#Lux",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Lux",
          "package": "units",
          "partial": "Lux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Lux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Meter",
          "package": "units",
          "signature": "Meter",
          "source": "src/Data-Dimensions-SI-Units.html#Meter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Meter",
          "package": "units",
          "partial": "Meter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Meter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Mole",
          "package": "units",
          "signature": "Mole",
          "source": "src/Data-Dimensions-SI-Units.html#Mole",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Mole",
          "package": "units",
          "partial": "Mole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Mole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Newton",
          "package": "units",
          "signature": "Newton",
          "source": "src/Data-Dimensions-SI-Units.html#Newton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Newton",
          "package": "units",
          "partial": "Newton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Newton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Ohm",
          "package": "units",
          "signature": "Ohm",
          "source": "src/Data-Dimensions-SI-Units.html#Ohm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Ohm",
          "package": "units",
          "partial": "Ohm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Ohm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Pascal",
          "package": "units",
          "signature": "Pascal",
          "source": "src/Data-Dimensions-SI-Units.html#Pascal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Pascal",
          "package": "units",
          "partial": "Pascal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Pascal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Second",
          "package": "units",
          "signature": "Second",
          "source": "src/Data-Dimensions-SI-Units.html#Second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Second",
          "package": "units",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Siemens",
          "package": "units",
          "signature": "Siemens",
          "source": "src/Data-Dimensions-SI-Units.html#Siemens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Siemens",
          "package": "units",
          "partial": "Siemens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Siemens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Sievert",
          "package": "units",
          "signature": "Sievert",
          "source": "src/Data-Dimensions-SI-Units.html#Sievert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Sievert",
          "package": "units",
          "partial": "Sievert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Sievert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Tesla",
          "package": "units",
          "signature": "Tesla",
          "source": "src/Data-Dimensions-SI-Units.html#Tesla",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Tesla",
          "package": "units",
          "partial": "Tesla",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Tesla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Volt",
          "package": "units",
          "signature": "Volt",
          "source": "src/Data-Dimensions-SI-Units.html#Volt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Volt",
          "package": "units",
          "partial": "Volt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Volt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Watt",
          "package": "units",
          "signature": "Watt",
          "source": "src/Data-Dimensions-SI-Units.html#Watt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Watt",
          "package": "units",
          "partial": "Watt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Watt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.SI.Units",
          "name": "Weber",
          "package": "units",
          "signature": "Weber",
          "source": "src/Data-Dimensions-SI-Units.html#Weber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions SI Units",
          "module": "Data.Dimensions.SI.Units",
          "name": "Weber",
          "package": "units",
          "partial": "Weber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Weber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports unit, type, and prefix definitions according to the SI\n system of units. The definitions were taken from here:\n \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere is one deviation from the definition at that site: To work better\n with prefixes, the unit of mass is \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.SI",
          "name": "SI",
          "package": "units",
          "source": "src/Data-Dimensions-SI.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports unit type and prefix definitions according to the SI system of units The definitions were taken from here http www.bipm.org en si There is one deviation from the definition at that site To work better with prefixes the unit of mass is Gram",
          "hierarchy": "Data Dimensions SI",
          "module": "Data.Dimensions.SI",
          "name": "SI",
          "package": "units",
          "partial": "SI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines only a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for dimensioned quantities.\n The Show instance prints out the number stored internally with its canonical\n units.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.Show",
          "name": "Show",
          "package": "units",
          "source": "src/Data-Dimensions-Show.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines only Show instance for dimensioned quantities The Show instance prints out the number stored internally with its canonical units",
          "hierarchy": "Data Dimensions Show",
          "module": "Data.Dimensions.Show",
          "name": "Show",
          "package": "units",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the constructor of the \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e type. This allows you\n to write dimension-unsafe code. Use at your peril.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions.Unsafe",
          "name": "Unsafe",
          "package": "units",
          "source": "src/Data-Dimensions-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the constructor of the Dim type This allows you to write dimension-unsafe code Use at your peril",
          "hierarchy": "Data Dimensions Unsafe",
          "module": "Data.Dimensions.Unsafe",
          "name": "Unsafe",
          "package": "units",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDim adds a dimensional annotation to its base type \u003ccode\u003en\u003c/code\u003e. This is the\n representation for all dimensioned quantities.\n\u003c/p\u003e",
          "module": "Data.Dimensions.Unsafe",
          "name": "Dim",
          "package": "units",
          "source": "src/Data-Dimensions-Dim.html#Dim",
          "type": "newtype"
        },
        "index": {
          "description": "Dim adds dimensional annotation to its base type This is the representation for all dimensioned quantities",
          "hierarchy": "Data Dimensions Unsafe",
          "module": "Data.Dimensions.Unsafe",
          "name": "Dim",
          "package": "units",
          "partial": "Dim",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#t:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions.Unsafe",
          "name": "Dim",
          "package": "units",
          "signature": "Dim n",
          "source": "src/Data-Dimensions-Dim.html#Dim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions Unsafe",
          "module": "Data.Dimensions.Unsafe",
          "name": "Dim",
          "package": "units",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#v:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe units package is a framework for strongly-typed dimensional analysis.\n This haddock documentation is generally \u003cem\u003enot\u003c/em\u003e enough to be able to use this\n package effectively. Please see the readme at\n \u003ca\u003ehttp://www.cis.upenn.edu/~eir/packages/units/README.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSome of the types below refer to declarations that are not exported and\n not documented here. This is because Haddock does not allow finely-tuned\n abstraction in documentation. (In particular, right-hand sides of type \n synonym declarations are always included.) If a symbol is not exported,\n you do \u003cem\u003enot\u003c/em\u003e need to know anything about it to use this package.\n\u003c/p\u003e\u003cp\u003eThough it doesn't appear here, \u003ccode\u003eScalar\u003c/code\u003e is an instance of \u003ccode\u003eNum\u003c/code\u003e, and\n generally has all the numeric instances that \u003ccode\u003eDouble\u003c/code\u003e has.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Dimensions",
          "name": "Dimensions",
          "package": "units",
          "source": "src/Data-Dimensions.html",
          "type": "module"
        },
        "index": {
          "description": "The units package is framework for strongly-typed dimensional analysis This haddock documentation is generally not enough to be able to use this package effectively Please see the readme at http www.cis.upenn.edu eir packages units README.html Some of the types below refer to declarations that are not exported and not documented here This is because Haddock does not allow finely-tuned abstraction in documentation In particular right-hand sides of type synonym declarations are always included If symbol is not exported you do not need to know anything about it to use this package Though it doesn appear here Scalar is an instance of Num and generally has all the numeric instances that Double has",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Dimensions",
          "package": "units",
          "partial": "Dimensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two integers\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(#*)",
          "package": "units",
          "signature": "(#*)",
          "type": "function"
        },
        "index": {
          "description": "Multiply two integers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(#*) #*",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two integers\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(#+)",
          "package": "units",
          "signature": "(#+)",
          "type": "function"
        },
        "index": {
          "description": "Add two integers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(#+) #+",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two integers\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(#-)",
          "package": "units",
          "signature": "(#-)",
          "type": "function"
        },
        "index": {
          "description": "Subtract two integers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(#-) #-",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two integers\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(#/)",
          "package": "units",
          "signature": "(#/)",
          "type": "function"
        },
        "index": {
          "description": "Divide two integers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(#/) #/",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two dimension types to produce a new one. For example:\n\u003c/p\u003e\u003cpre\u003e type Velocity = Length %/ Time\n\u003c/pre\u003e",
          "module": "Data.Dimensions",
          "name": "(%*)",
          "package": "units",
          "signature": "(%*)",
          "type": "function"
        },
        "index": {
          "description": "Multiply two dimension types to produce new one For example type Velocity Length Time",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(%*) %*",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two dimension types to produce a new one\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(%/)",
          "package": "units",
          "signature": "(%/)",
          "type": "function"
        },
        "index": {
          "description": "Divide two dimension types to produce new one",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(%/) %/",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiate a dimension type to an integer\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(%^)",
          "package": "units",
          "signature": "(%^)",
          "type": "function"
        },
        "index": {
          "description": "Exponentiate dimension type to an integer",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(%^) %^",
          "normalized": "()",
          "package": "units",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two units to get another unit.\n For example: \u003ccode\u003etype MetersSquared = Meter :* Meter\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": ":*",
          "package": "units",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%2A",
          "type": "data"
        },
        "index": {
          "description": "Multiply two units to get another unit For example type MetersSquared Meter Meter",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":*",
          "package": "units",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two units to get another unit\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": ":/",
          "package": "units",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%2F",
          "type": "data"
        },
        "index": {
          "description": "Divide two units to get another unit",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":/",
          "package": "units",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a conversion ratio by some constant. Used for defining prefixes.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": ":@",
          "package": "units",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%40",
          "type": "data"
        },
        "index": {
          "description": "Multiply conversion ratio by some constant Used for defining prefixes",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":@",
          "package": "units",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise a unit to a power, known at compile time\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": ":^",
          "package": "units",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%5E",
          "type": "data"
        },
        "index": {
          "description": "Raise unit to power known at compile time",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":^",
          "package": "units",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy type use just to label canonical units. It does \u003cem\u003enot\u003c/em\u003e have a\n \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Canonical",
          "package": "units",
          "source": "src/Data-Dimensions-Units.html#Canonical",
          "type": "data"
        },
        "index": {
          "description": "Dummy type use just to label canonical units It does not have Unit instance",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Canonical",
          "package": "units",
          "partial": "Canonical",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Canonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Five",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#Five",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Five",
          "package": "units",
          "partial": "Five",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Five"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Four",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#Four",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Four",
          "package": "units",
          "partial": "Four",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "MFive",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#MFive",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MFive",
          "package": "units",
          "partial": "MFive",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MFive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "MFour",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#MFour",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MFour",
          "package": "units",
          "partial": "MFour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MFour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "MOne",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#MOne",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MOne",
          "package": "units",
          "partial": "MOne",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "MThree",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#MThree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MThree",
          "package": "units",
          "partial": "MThree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MThree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "MTwo",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#MTwo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MTwo",
          "package": "units",
          "partial": "MTwo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a dimensioned quantity type capable of storing a value of a given\n unit. This uses a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for storage of the value. For example:\n\u003c/p\u003e\u003cpre\u003e type Length = MkDim Meter\n\u003c/pre\u003e",
          "module": "Data.Dimensions",
          "name": "MkDim",
          "package": "units",
          "source": "src/Data-Dimensions-Units.html#MkDim",
          "type": "type"
        },
        "index": {
          "description": "Make dimensioned quantity type capable of storing value of given unit This uses Double for storage of the value For example type Length MkDim Meter",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MkDim",
          "package": "units",
          "partial": "Mk Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MkDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a dimensioned quantity with a custom numerical type.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "MkGenDim",
          "package": "units",
          "source": "src/Data-Dimensions-Units.html#MkGenDim",
          "type": "type"
        },
        "index": {
          "description": "Make dimensioned quantity with custom numerical type",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "MkGenDim",
          "package": "units",
          "partial": "Mk Gen Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MkGenDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate an integer\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "NegZ",
          "package": "units",
          "signature": "NegZ",
          "type": "function"
        },
        "index": {
          "description": "Negate an integer",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "NegZ",
          "package": "units",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:NegZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit for unitless dimensioned quantities\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Number",
          "package": "units",
          "source": "src/Data-Dimensions.html#Number",
          "type": "data"
        },
        "index": {
          "description": "The unit for unitless dimensioned quantities",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Number",
          "package": "units",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "One",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#One",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "One",
          "package": "units",
          "partial": "One",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract one from an integer\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Pred",
          "package": "units",
          "signature": "Pred",
          "type": "function"
        },
        "index": {
          "description": "Subtract one from an integer",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Pred",
          "package": "units",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of unitless dimensioned quantities\n This is an instance of \u003ccode\u003eNum\u003c/code\u003e, though Haddock doesn't show it.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Scalar",
          "package": "units",
          "source": "src/Data-Dimensions.html#Scalar",
          "type": "type"
        },
        "index": {
          "description": "The type of unitless dimensioned quantities This is an instance of Num though Haddock doesn show it",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Scalar",
          "package": "units",
          "partial": "Scalar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd one to an integer\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Succ",
          "package": "units",
          "signature": "Succ",
          "type": "function"
        },
        "index": {
          "description": "Add one to an integer",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Succ",
          "package": "units",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Three",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#Three",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Three",
          "package": "units",
          "partial": "Three",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Two",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#Two",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Two",
          "package": "units",
          "partial": "Two",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of units. Make an instance of this class to define a new unit.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Unit",
          "package": "units",
          "source": "src/Data-Dimensions-Units.html#Unit",
          "type": "class"
        },
        "index": {
          "description": "Class of units Make an instance of this class to define new unit",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Unit",
          "package": "units",
          "partial": "Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for user-defined prefixes\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "UnitPrefix",
          "package": "units",
          "source": "src/Data-Dimensions-UnitCombinators.html#UnitPrefix",
          "type": "class"
        },
        "index": {
          "description": "class for user-defined prefixes",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "UnitPrefix",
          "package": "units",
          "partial": "Unit Prefix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:UnitPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datatype for type-level integers.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "Z",
          "package": "units",
          "source": "src/Data-Dimensions-Z.html#Z",
          "type": "data"
        },
        "index": {
          "description": "The datatype for type-level integers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Z",
          "package": "units",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003edimIn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(#)",
          "package": "units",
          "signature": "MkDim (CanonicalUnit unit) -\u003e unit -\u003e Double",
          "source": "src/Data-Dimensions.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Infix synonym for dimIn",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(#) #",
          "normalized": "MkDim(CanonicalUnit a)-\u003ea-\u003eDouble",
          "package": "units",
          "signature": "MkDim(CanonicalUnit unit)-\u003eunit-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003edimOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(%)",
          "package": "units",
          "signature": "Double -\u003e unit -\u003e MkDim (CanonicalUnit unit)",
          "source": "src/Data-Dimensions.html#%25",
          "type": "function"
        },
        "index": {
          "description": "Infix synonym for dimOf",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(%) %",
          "normalized": "Double-\u003ea-\u003eMkDim(CanonicalUnit a)",
          "package": "units",
          "signature": "Double-\u003eunit-\u003eMkDim(CanonicalUnit unit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a dimensioned quantity by a scalar\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(*.)",
          "package": "units",
          "signature": "n -\u003e Dim n a -\u003e Dim n a",
          "source": "src/Data-Dimensions-Dim.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "Multiply dimensioned quantity by scalar",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(*.) *.",
          "normalized": "a-\u003eDim a b-\u003eDim a b",
          "package": "units",
          "signature": "n-\u003eDim n a-\u003eDim n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two dimensioned quantities\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.*)",
          "package": "units",
          "signature": "Dim n a -\u003e Dim n b -\u003e Dim n (Normalize (a @+ b))",
          "source": "src/Data-Dimensions-Dim.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Multiply two dimensioned quantities",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.*) .*",
          "normalized": "Dim a b-\u003eDim a c-\u003eDim a(Normalize(b c))",
          "package": "units",
          "signature": "Dim n a-\u003eDim n b-\u003eDim n(Normalize(a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two compatible dimensioned quantities\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.+)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Dim n d1",
          "source": "src/Data-Dimensions-Dim.html#.%2B",
          "type": "function"
        },
        "index": {
          "description": "Add two compatible dimensioned quantities",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.+) .+",
          "normalized": "Dim a b-\u003eDim a b-\u003eDim a b",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eDim n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two compatible dimensioned quantities\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.-)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Dim n d1",
          "source": "src/Data-Dimensions-Dim.html#.-",
          "type": "function"
        },
        "index": {
          "description": "Subtract two compatible dimensioned quantities",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.-) .-",
          "normalized": "Dim a b-\u003eDim a b-\u003eDim a b",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eDim n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two dimensioned quantities\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(./)",
          "package": "units",
          "signature": "Dim n a -\u003e Dim n b -\u003e Dim n (Normalize (a @- b))",
          "source": "src/Data-Dimensions-Dim.html#.%2F",
          "type": "function"
        },
        "index": {
          "description": "Divide two dimensioned quantities",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(./) ./",
          "normalized": "Dim a b-\u003eDim a c-\u003eDim a(Normalize(b c))",
          "package": "units",
          "signature": "Dim n a-\u003eDim n b-\u003eDim n(Normalize(a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if one dimensioned quantity is less than a compatible one\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.\u003c)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
          "source": "src/Data-Dimensions-Dim.html#.%3C",
          "type": "function"
        },
        "index": {
          "description": "Check if one dimensioned quantity is less than compatible one",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.\u003c) .\u003c",
          "normalized": "Dim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if one dimensioned quantity is less than or equal to a compatible one\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.\u003c=)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
          "source": "src/Data-Dimensions-Dim.html#.%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "Check if one dimensioned quantity is less than or equal to compatible one",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.\u003c=) .\u003c=",
          "normalized": "Dim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if one dimensioned quantity is greater than a compatible one\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.\u003e)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
          "source": "src/Data-Dimensions-Dim.html#.%3E",
          "type": "function"
        },
        "index": {
          "description": "Check if one dimensioned quantity is greater than compatible one",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.\u003e) .\u003e",
          "normalized": "Dim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if one dimensioned quantity is greater than or equal to a compatible one\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.\u003e=)",
          "package": "units",
          "signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
          "source": "src/Data-Dimensions-Dim.html#.%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Check if one dimensioned quantity is greater than or equal to compatible one",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.\u003e=) .\u003e=",
          "normalized": "Dim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "signature": "Dim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise a dimensioned quantity to a power known at compile time\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "(.^)",
          "package": "units",
          "signature": "Dim n a -\u003e Sing z -\u003e Dim n (a @* z)",
          "source": "src/Data-Dimensions-Dim.html#.%5E",
          "type": "function"
        },
        "index": {
          "description": "Raise dimensioned quantity to power known at compile time",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "(.^) .^",
          "normalized": "Dim a b-\u003eSing c-\u003eDim a(b*c)",
          "package": "units",
          "signature": "Dim n a-\u003eSing z-\u003eDim n(a*z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": ":*",
          "package": "units",
          "signature": "u1 :* u2",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":*",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": ":/",
          "package": "units",
          "signature": "u1 :/ u2",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":/",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": ":@",
          "package": "units",
          "signature": "prefix :@ unit",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":@",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": ":^",
          "package": "units",
          "signature": "unit :^ (Sing power)",
          "source": "src/Data-Dimensions-UnitCombinators.html#%3A%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": ":^",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Number",
          "package": "units",
          "signature": "Number",
          "source": "src/Data-Dimensions.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Number",
          "package": "units",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "P",
          "package": "units",
          "signature": "P Z",
          "source": "src/Data-Dimensions-Z.html#Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "P",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "S",
          "package": "units",
          "signature": "S Z",
          "source": "src/Data-Dimensions-Z.html#Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "S",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "Zero",
          "package": "units",
          "signature": "Zero",
          "source": "src/Data-Dimensions-Z.html#Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "Zero",
          "package": "units",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conversion ratio \u003cem\u003efrom\u003c/em\u003e the base unit \u003cem\u003eto\u003c/em\u003e this unit.\n If left out, a conversion ratio of 1 is assumed.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e instance Unit Foot where\n   type BaseUnit Foot = Meter\n   conversionRatio _ = 0.3048\n\u003c/pre\u003e\u003cp\u003eImplementations should \u003cem\u003enever\u003c/em\u003e examine their argument!\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "conversionRatio",
          "package": "units",
          "signature": "unit -\u003e Double",
          "source": "src/Data-Dimensions-Units.html#conversionRatio",
          "type": "method"
        },
        "index": {
          "description": "The conversion ratio from the base unit to this unit If left out conversion ratio of is assumed For example instance Unit Foot where type BaseUnit Foot Meter conversionRatio Implementations should never examine their argument",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "conversionRatio",
          "normalized": "a-\u003eDouble",
          "package": "units",
          "partial": "Ratio",
          "signature": "unit-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:conversionRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDimension-safe cast. See the README for more info.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "dim",
          "package": "units",
          "signature": "Dim n d -\u003e Dim n e",
          "source": "src/Data-Dimensions.html#dim",
          "type": "function"
        },
        "index": {
          "description": "Dimension-safe cast See the README for more info",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dim",
          "normalized": "Dim a b-\u003eDim a c",
          "package": "units",
          "signature": "Dim n d-\u003eDim n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the cube root of a dimensioned quantity\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "dimCubeRoot",
          "package": "units",
          "signature": "Dim n a -\u003e Dim n (a @/ Three)",
          "source": "src/Data-Dimensions-Dim.html#dimCubeRoot",
          "type": "function"
        },
        "index": {
          "description": "Take the cube root of dimensioned quantity",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimCubeRoot",
          "normalized": "Dim a b-\u003eDim a(b Three)",
          "package": "units",
          "partial": "Cube Root",
          "signature": "Dim n a-\u003eDim n(a Three)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimCubeRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two compatible dimensioned quantities for equality\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "dimEq",
          "package": "units",
          "signature": "Dim n d0-\u003e Dim n d1-\u003e Dim n d2-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two compatible dimensioned quantities for equality",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimEq",
          "normalized": "Dim a b-\u003eDim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "partial": "Eq",
          "signature": "Dim n d-\u003eDim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts a \u003ccode\u003eDouble\u003c/code\u003e from a dimensioned quantity, expressed in\n   the given unit. For example:\n\u003c/p\u003e\u003cpre\u003e inMeters :: Length -\u003e Double\n inMeters x = dimIn x Meter\n\u003c/pre\u003e",
          "module": "Data.Dimensions",
          "name": "dimIn",
          "package": "units",
          "signature": "MkDim (CanonicalUnit unit) -\u003e unit -\u003e Double",
          "source": "src/Data-Dimensions.html#dimIn",
          "type": "function"
        },
        "index": {
          "description": "Extracts Double from dimensioned quantity expressed in the given unit For example inMeters Length Double inMeters dimIn Meter",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimIn",
          "normalized": "MkDim(CanonicalUnit a)-\u003ea-\u003eDouble",
          "package": "units",
          "partial": "In",
          "signature": "MkDim(CanonicalUnit unit)-\u003eunit-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two compatible dimensioned quantities for inequality\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "dimNeq",
          "package": "units",
          "signature": "Dim n d0-\u003e Dim n d1-\u003e Dim n d2-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two compatible dimensioned quantities for inequality",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimNeq",
          "normalized": "Dim a b-\u003eDim a b-\u003eDim a b-\u003eBool",
          "package": "units",
          "partial": "Neq",
          "signature": "Dim n d-\u003eDim n d-\u003eDim n d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimNeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a dimensioned quantity in the given unit. For example:\n\u003c/p\u003e\u003cpre\u003e height :: Length\n height = dimOf 2.0 Meter\n\u003c/pre\u003e",
          "module": "Data.Dimensions",
          "name": "dimOf",
          "package": "units",
          "signature": "Double -\u003e unit -\u003e MkDim (CanonicalUnit unit)",
          "source": "src/Data-Dimensions.html#dimOf",
          "type": "function"
        },
        "index": {
          "description": "Creates dimensioned quantity in the given unit For example height Length height dimOf Meter",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimOf",
          "normalized": "Double-\u003ea-\u003eMkDim(CanonicalUnit a)",
          "package": "units",
          "partial": "Of",
          "signature": "Double-\u003eunit-\u003eMkDim(CanonicalUnit unit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the square root of a dimensioned quantity\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "dimSqrt",
          "package": "units",
          "signature": "Dim n a -\u003e Dim n (a @/ Two)",
          "source": "src/Data-Dimensions-Dim.html#dimSqrt",
          "type": "function"
        },
        "index": {
          "description": "Take the square root of dimensioned quantity",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "dimSqrt",
          "normalized": "Dim a b-\u003eDim a(b Two)",
          "package": "units",
          "partial": "Sqrt",
          "signature": "Dim n a-\u003eDim n(a Two)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis should return the desired multiplier for the prefix being defined.\n This function must \u003cem\u003enot\u003c/em\u003e inspect its argument.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "multiplier",
          "package": "units",
          "signature": "prefix -\u003e Double",
          "source": "src/Data-Dimensions-UnitCombinators.html#multiplier",
          "type": "method"
        },
        "index": {
          "description": "This should return the desired multiplier for the prefix being defined This function must not inspect its argument",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "multiplier",
          "normalized": "a-\u003eDouble",
          "package": "units",
          "signature": "prefix-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:multiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the n'th root of a dimensioned quantity, where n is known at compile\n time\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "nthRoot",
          "package": "units",
          "signature": "Sing z -\u003e Dim n a -\u003e Dim n (a @/ z)",
          "source": "src/Data-Dimensions-Dim.html#nthRoot",
          "type": "function"
        },
        "index": {
          "description": "Take the th root of dimensioned quantity where is known at compile time",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "nthRoot",
          "normalized": "Sing a-\u003eDim b c-\u003eDim b(c a)",
          "package": "units",
          "partial": "Root",
          "signature": "Sing z-\u003eDim n a-\u003eDim n(a z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:nthRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pFive",
          "package": "units",
          "signature": "Sing Z (S (S (S (S (S Zero)))))",
          "source": "src/Data-Dimensions-Z.html#pFive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pFive",
          "package": "units",
          "partial": "Five",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pFive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pFour",
          "package": "units",
          "signature": "Sing Z (S (S (S (S Zero))))",
          "source": "src/Data-Dimensions-Z.html#pFour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pFour",
          "package": "units",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pFour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pMFive",
          "package": "units",
          "signature": "Sing Z (P (P (P (P (P Zero)))))",
          "source": "src/Data-Dimensions-Z.html#pMFive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pMFive",
          "package": "units",
          "partial": "MFive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMFive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pMFour",
          "package": "units",
          "signature": "Sing Z (P (P (P (P Zero))))",
          "source": "src/Data-Dimensions-Z.html#pMFour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pMFour",
          "package": "units",
          "partial": "MFour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMFour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pMOne",
          "package": "units",
          "signature": "Sing Z (P Zero)",
          "source": "src/Data-Dimensions-Z.html#pMOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pMOne",
          "package": "units",
          "partial": "MOne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pMThree",
          "package": "units",
          "signature": "Sing Z (P (P (P Zero)))",
          "source": "src/Data-Dimensions-Z.html#pMThree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pMThree",
          "package": "units",
          "partial": "MThree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMThree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pMTwo",
          "package": "units",
          "signature": "Sing Z (P (P Zero))",
          "source": "src/Data-Dimensions-Z.html#pMTwo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pMTwo",
          "package": "units",
          "partial": "MTwo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pOne",
          "package": "units",
          "signature": "Sing Z (S Zero)",
          "source": "src/Data-Dimensions-Z.html#pOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pOne",
          "package": "units",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract one from a singleton \u003ccode\u003eZ\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "pPred",
          "package": "units",
          "signature": "Sing z -\u003e Sing (Pred z)",
          "source": "src/Data-Dimensions-Z.html#pPred",
          "type": "function"
        },
        "index": {
          "description": "Subtract one from singleton",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pPred",
          "normalized": "Sing a-\u003eSing(Pred a)",
          "package": "units",
          "partial": "Pred",
          "signature": "Sing z-\u003eSing(Pred z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd one to a singleton \u003ccode\u003eZ\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "pSucc",
          "package": "units",
          "signature": "Sing z -\u003e Sing (Succ z)",
          "source": "src/Data-Dimensions-Z.html#pSucc",
          "type": "function"
        },
        "index": {
          "description": "Add one to singleton",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pSucc",
          "normalized": "Sing a-\u003eSing(Succ a)",
          "package": "units",
          "partial": "Succ",
          "signature": "Sing z-\u003eSing(Succ z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pThree",
          "package": "units",
          "signature": "Sing Z (S (S (S Zero)))",
          "source": "src/Data-Dimensions-Z.html#pThree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pThree",
          "package": "units",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pThree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dimensions",
          "name": "pTwo",
          "package": "units",
          "signature": "Sing Z (S (S Zero))",
          "source": "src/Data-Dimensions-Z.html#pTwo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pTwo",
          "package": "units",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the singleton value representing \u003ccode\u003eZero\u003c/code\u003e at the term level and\n at the type level, simultaneously. Used for raising units to powers.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "pZero",
          "package": "units",
          "signature": "Sing Z Zero",
          "source": "src/Data-Dimensions-Z.html#pZero",
          "type": "function"
        },
        "index": {
          "description": "This is the singleton value representing Zero at the term level and at the type level simultaneously Used for raising units to powers",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "pZero",
          "package": "units",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a raw number into a unitless dimensioned quantity\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "scalar",
          "package": "units",
          "signature": "n -\u003e Dim n `[]`",
          "source": "src/Data-Dimensions.html#scalar",
          "type": "function"
        },
        "index": {
          "description": "Convert raw number into unitless dimensioned quantity",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "scalar",
          "normalized": "a-\u003eDim a[]",
          "package": "units",
          "signature": "n-\u003eDim n[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number 1, expressed as a unitless dimensioned quantity.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "unity",
          "package": "units",
          "signature": "Dim n `[]`",
          "source": "src/Data-Dimensions.html#unity",
          "type": "function"
        },
        "index": {
          "description": "The number expressed as unitless dimensioned quantity",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "unity",
          "normalized": "Dim a[]",
          "package": "units",
          "signature": "Dim n[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:unity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number 0, polymorphic in its dimension. Use of this will\n often require a type annotation.\n\u003c/p\u003e",
          "module": "Data.Dimensions",
          "name": "zero",
          "package": "units",
          "signature": "Dim n dimspec",
          "source": "src/Data-Dimensions.html#zero",
          "type": "function"
        },
        "index": {
          "description": "The number polymorphic in its dimension Use of this will often require type annotation",
          "hierarchy": "Data Dimensions",
          "module": "Data.Dimensions",
          "name": "zero",
          "package": "units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:zero"
      }
    }
  ]
]