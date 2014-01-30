[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports all of the definitions you need if you wish to\n write functions polymorphic over dimension specifications.\n\u003c/p\u003e\u003cp\u003eEach dimensioned quantity is represented by a member of the type\n \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e, which is parameterized by a type-level list of \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003es.\n A \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003e, in turn, is a unit type paired with its exponent,\n representented with a type-level \u003ccode\u003eZ\u003c/code\u003e. The unit types should all be\n \u003cem\u003ecanonical\u003c/em\u003e -- that is, the \u003ca\u003ebase\u003c/a\u003e unit of all compatible units. Thus,\n the type of velocity in the SI system would be\n \u003ccode\u003eDim '[D Meter One, D Second MOne]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA technical detail: because \u003ccode\u003e\u003ca\u003eDimSpec\u003c/a\u003e\u003c/code\u003e is used only at the type level\n and needs to store types of kind \u003ccode\u003e*\u003c/code\u003e, it must be parameterized, as we\n can't specify \u003ccode\u003e*\u003c/code\u003e in its declaration. (See \"The Right Kind of Generic\n Programming\", by Jos&#233; Pedro Magalh&#227;es, published at WGP'12, for more\n explanation.) So, we always work with \u003ccode\u003e(DimSpec *)\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-Poly.html",
        "fct-type": "module",
        "title": "Poly"
      },
      "index": {
        "description": "This module exports all of the definitions you need if you wish to write functions polymorphic over dimension specifications Each dimensioned quantity is represented by member of the type Dim which is parameterized by type-level list of DimSpec DimSpec in turn is unit type paired with its exponent representented with type-level The unit types should all be canonical that is the base unit of all compatible units Thus the type of velocity in the SI system would be Dim Meter One Second MOne technical detail because DimSpec is used only at the type level and needs to store types of kind it must be parameterized as we can specify in its declaration See The Right Kind of Generic Programming by Jos Pedro Magalh es published at WGP for more explanation So we always work with DimSpec",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "Poly",
        "normalized": "",
        "package": "units",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-36--61-",
      "description": {
        "fct-descr": "\u003cp\u003eDo these DimSpecs represent the same dimension?\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "($=)",
        "fct-type": "function",
        "title": "($=)"
      },
      "index": {
        "description": "Do these DimSpecs represent the same dimension",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "($=) $=",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--126-",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if two \u003ccode\u003e[DimSpec *]\u003c/code\u003es should be considered to be equal\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "(@~)",
        "fct-type": "function",
        "title": "(@~)"
      },
      "index": {
        "description": "Check if two DimSpec should be considered to be equal",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "(@~) @~",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication of the exponents in a dimension by a scalar\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "(@*)",
        "fct-type": "function",
        "title": "(@*)"
      },
      "index": {
        "description": "Multiplication of the exponents in dimension by scalar",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "(@*) @*",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds corresponding exponents in two dimension\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "(@+)",
        "fct-type": "function",
        "title": "(@+)"
      },
      "index": {
        "description": "Adds corresponding exponents in two dimension",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "(@+) @+",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--45-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract exponents in two dimensions\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "(@-)",
        "fct-type": "function",
        "title": "(@-)"
      },
      "index": {
        "description": "Subtract exponents in two dimensions",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "(@-) @-",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:-64--47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivision of the exponents in a dimension by a scalar\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "(@/)",
        "fct-type": "function",
        "title": "(@/)"
      },
      "index": {
        "description": "Division of the exponents in dimension by scalar",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "(@/) @/",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Dim",
      "description": {
        "fct-descr": "\u003cp\u003eDim adds a dimensional annotation to its base type \u003ccode\u003en\u003c/code\u003e. This is the\n representation for all dimensioned quantities.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-Dim.html#Dim",
        "fct-type": "data",
        "title": "Dim"
      },
      "index": {
        "description": "Dim adds dimensional annotation to its base type This is the representation for all dimensioned quantities",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "Dim",
        "normalized": "",
        "package": "units",
        "partial": "Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:DimSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThis will only be used at the kind level. It holds a dimension with its\n exponent.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-DimSpec.html#DimSpec",
        "fct-type": "data",
        "title": "DimSpec"
      },
      "index": {
        "description": "This will only be used at the kind level It holds dimension with its exponent",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "DimSpec",
        "normalized": "",
        "package": "units",
        "partial": "Dim Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Extract",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(Extract s lst)\u003c/code\u003e pulls the DimSpec that matches s out of lst, returning a\n   diminished list and, possibly, the extracted DimSpec.\n\u003c/p\u003e\u003cpre\u003e\n Extract A [A, B, C] ==\u003e ([B, C], Just A\n Extract D [A, B, C] ==\u003e ([A, B, C], Nothing)\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "Extract",
        "fct-type": "function",
        "title": "Extract"
      },
      "index": {
        "description": "Extract lst pulls the DimSpec that matches out of lst returning diminished list and possibly the extracted DimSpec Extract Just Extract Nothing",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "Extract",
        "normalized": "",
        "package": "units",
        "partial": "Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:NegDim",
      "description": {
        "fct-descr": "\u003cp\u003enegate a single \u003ccode\u003eDimSpec\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "NegDim",
        "fct-type": "function",
        "title": "NegDim"
      },
      "index": {
        "description": "negate single DimSpec",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "NegDim",
        "normalized": "",
        "package": "units",
        "partial": "Neg Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:NegList",
      "description": {
        "fct-descr": "\u003cp\u003enegate a list of \u003ccode\u003eDimSpec\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "NegList",
        "fct-type": "function",
        "title": "NegList"
      },
      "index": {
        "description": "negate list of DimSpec",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "NegList",
        "normalized": "",
        "package": "units",
        "partial": "Neg List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Normalize",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003e[DimSpec *]\u003c/code\u003e and remove any \u003ccode\u003eDimSpec\u003c/code\u003es with an exponent of 0\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "Normalize",
        "fct-type": "function",
        "title": "Normalize"
      },
      "index": {
        "description": "Take DimSpec and remove any DimSpec with an exponent of",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "Normalize",
        "normalized": "",
        "package": "units",
        "partial": "Normalize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#t:Reorder",
      "description": {
        "fct-descr": "\u003cp\u003eReorders a to be the in the same order as b, putting entries not in b at the end\n\u003c/p\u003e\u003cpre\u003e\n Reorder [A 1, B 2] [B 5, A 2] ==\u003e [B 2, A 1]\n Reorder [A 1, B 2, C 3] [C 2, A 8] ==\u003e [C 3, A 1, B 2]\n Reorder [A 1, B 2] [B 4, C 1, A 9] ==\u003e [B 2, A 1]\n Reorder x x ==\u003e x\n Reorder x [] ==\u003e x\n Reorder [] x ==\u003e []\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "Reorder",
        "fct-type": "function",
        "title": "Reorder"
      },
      "index": {
        "description": "Reorders to be the in the same order as putting entries not in at the end Reorder Reorder Reorder Reorder Reorder Reorder",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "Reorder",
        "normalized": "",
        "package": "units",
        "partial": "Reorder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Poly.html#v:D",
      "description": {
        "fct-module": "Data.Dimensions.Poly",
        "fct-package": "units",
        "fct-signature": "D star Z",
        "fct-source": "src/Data-Dimensions-DimSpec.html#DimSpec",
        "fct-type": "function",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions Poly",
        "module": "Data.Dimensions.Poly",
        "name": "D",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines prefixes from the SI standard at \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html",
        "fct-type": "module",
        "title": "Prefixes"
      },
      "index": {
        "description": "Defines prefixes from the SI standard at http www.bipm.org en si",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Prefixes",
        "normalized": "",
        "package": "units",
        "partial": "Prefixes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Atto",
      "description": {
        "fct-descr": "\u003cp\u003e10^-18\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Atto",
        "fct-type": "data",
        "title": "Atto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Atto",
        "normalized": "",
        "package": "units",
        "partial": "Atto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Centi",
      "description": {
        "fct-descr": "\u003cp\u003e10^-2\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Centi",
        "fct-type": "data",
        "title": "Centi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Centi",
        "normalized": "",
        "package": "units",
        "partial": "Centi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Deca",
      "description": {
        "fct-descr": "\u003cp\u003e10^1\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Deca",
        "fct-type": "data",
        "title": "Deca"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Deca",
        "normalized": "",
        "package": "units",
        "partial": "Deca",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Deci",
      "description": {
        "fct-descr": "\u003cp\u003e10^-1\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Deci",
        "fct-type": "data",
        "title": "Deci"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Deci",
        "normalized": "",
        "package": "units",
        "partial": "Deci",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Exa",
      "description": {
        "fct-descr": "\u003cp\u003e10^18\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Exa",
        "fct-type": "data",
        "title": "Exa"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Exa",
        "normalized": "",
        "package": "units",
        "partial": "Exa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Femto",
      "description": {
        "fct-descr": "\u003cp\u003e10^-15\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Femto",
        "fct-type": "data",
        "title": "Femto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Femto",
        "normalized": "",
        "package": "units",
        "partial": "Femto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Giga",
      "description": {
        "fct-descr": "\u003cp\u003e10^9\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Giga",
        "fct-type": "data",
        "title": "Giga"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Giga",
        "normalized": "",
        "package": "units",
        "partial": "Giga",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Hecto",
      "description": {
        "fct-descr": "\u003cp\u003e10^2\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Hecto",
        "fct-type": "data",
        "title": "Hecto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Hecto",
        "normalized": "",
        "package": "units",
        "partial": "Hecto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Kilo",
      "description": {
        "fct-descr": "\u003cp\u003e10^3\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Kilo",
        "fct-type": "data",
        "title": "Kilo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Kilo",
        "normalized": "",
        "package": "units",
        "partial": "Kilo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Mega",
      "description": {
        "fct-descr": "\u003cp\u003e10^6\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Mega",
        "fct-type": "data",
        "title": "Mega"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Mega",
        "normalized": "",
        "package": "units",
        "partial": "Mega",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Micro",
      "description": {
        "fct-descr": "\u003cp\u003e10^-6\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Micro",
        "fct-type": "data",
        "title": "Micro"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Micro",
        "normalized": "",
        "package": "units",
        "partial": "Micro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Milli",
      "description": {
        "fct-descr": "\u003cp\u003e10^-3\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Milli",
        "fct-type": "data",
        "title": "Milli"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Milli",
        "normalized": "",
        "package": "units",
        "partial": "Milli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Nano",
      "description": {
        "fct-descr": "\u003cp\u003e10^-9\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Nano",
        "fct-type": "data",
        "title": "Nano"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Nano",
        "normalized": "",
        "package": "units",
        "partial": "Nano",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Peta",
      "description": {
        "fct-descr": "\u003cp\u003e10^15\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Peta",
        "fct-type": "data",
        "title": "Peta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Peta",
        "normalized": "",
        "package": "units",
        "partial": "Peta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Pico",
      "description": {
        "fct-descr": "\u003cp\u003e10^-12\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Pico",
        "fct-type": "data",
        "title": "Pico"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Pico",
        "normalized": "",
        "package": "units",
        "partial": "Pico",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Tera",
      "description": {
        "fct-descr": "\u003cp\u003e10^12\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Tera",
        "fct-type": "data",
        "title": "Tera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Tera",
        "normalized": "",
        "package": "units",
        "partial": "Tera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Yocto",
      "description": {
        "fct-descr": "\u003cp\u003e10^-24\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Yocto",
        "fct-type": "data",
        "title": "Yocto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Yocto",
        "normalized": "",
        "package": "units",
        "partial": "Yocto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Yotta",
      "description": {
        "fct-descr": "\u003cp\u003e10^24\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Yotta",
        "fct-type": "data",
        "title": "Yotta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Yotta",
        "normalized": "",
        "package": "units",
        "partial": "Yotta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Zepto",
      "description": {
        "fct-descr": "\u003cp\u003e10^-21\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Zepto",
        "fct-type": "data",
        "title": "Zepto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Zepto",
        "normalized": "",
        "package": "units",
        "partial": "Zepto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#t:Zetta",
      "description": {
        "fct-descr": "\u003cp\u003e10^21\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Zetta",
        "fct-type": "data",
        "title": "Zetta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Zetta",
        "normalized": "",
        "package": "units",
        "partial": "Zetta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Atto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Atto",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Atto",
        "fct-type": "function",
        "title": "Atto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Atto",
        "normalized": "",
        "package": "units",
        "partial": "Atto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Centi",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Centi",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Centi",
        "fct-type": "function",
        "title": "Centi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Centi",
        "normalized": "",
        "package": "units",
        "partial": "Centi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Deca",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Deca",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Deca",
        "fct-type": "function",
        "title": "Deca"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Deca",
        "normalized": "",
        "package": "units",
        "partial": "Deca",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Deci",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Deci",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Deci",
        "fct-type": "function",
        "title": "Deci"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Deci",
        "normalized": "",
        "package": "units",
        "partial": "Deci",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Exa",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Exa",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Exa",
        "fct-type": "function",
        "title": "Exa"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Exa",
        "normalized": "",
        "package": "units",
        "partial": "Exa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Femto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Femto",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Femto",
        "fct-type": "function",
        "title": "Femto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Femto",
        "normalized": "",
        "package": "units",
        "partial": "Femto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Giga",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Giga",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Giga",
        "fct-type": "function",
        "title": "Giga"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Giga",
        "normalized": "",
        "package": "units",
        "partial": "Giga",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Hecto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Hecto",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Hecto",
        "fct-type": "function",
        "title": "Hecto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Hecto",
        "normalized": "",
        "package": "units",
        "partial": "Hecto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Kilo",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Kilo",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Kilo",
        "fct-type": "function",
        "title": "Kilo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Kilo",
        "normalized": "",
        "package": "units",
        "partial": "Kilo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Mega",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Mega",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Mega",
        "fct-type": "function",
        "title": "Mega"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Mega",
        "normalized": "",
        "package": "units",
        "partial": "Mega",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Micro",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Micro",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Micro",
        "fct-type": "function",
        "title": "Micro"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Micro",
        "normalized": "",
        "package": "units",
        "partial": "Micro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Milli",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Milli",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Milli",
        "fct-type": "function",
        "title": "Milli"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Milli",
        "normalized": "",
        "package": "units",
        "partial": "Milli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Nano",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Nano",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Nano",
        "fct-type": "function",
        "title": "Nano"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Nano",
        "normalized": "",
        "package": "units",
        "partial": "Nano",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Peta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Peta",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Peta",
        "fct-type": "function",
        "title": "Peta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Peta",
        "normalized": "",
        "package": "units",
        "partial": "Peta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Pico",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Pico",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Pico",
        "fct-type": "function",
        "title": "Pico"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Pico",
        "normalized": "",
        "package": "units",
        "partial": "Pico",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Tera",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Tera",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Tera",
        "fct-type": "function",
        "title": "Tera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Tera",
        "normalized": "",
        "package": "units",
        "partial": "Tera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Yocto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Yocto",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Yocto",
        "fct-type": "function",
        "title": "Yocto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Yocto",
        "normalized": "",
        "package": "units",
        "partial": "Yocto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Yotta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Yotta",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Yotta",
        "fct-type": "function",
        "title": "Yotta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Yotta",
        "normalized": "",
        "package": "units",
        "partial": "Yotta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Zepto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Zepto",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Zepto",
        "fct-type": "function",
        "title": "Zepto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Zepto",
        "normalized": "",
        "package": "units",
        "partial": "Zepto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:Zetta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "Zetta",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#Zetta",
        "fct-type": "function",
        "title": "Zetta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "Zetta",
        "normalized": "",
        "package": "units",
        "partial": "Zetta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:atto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Atto :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#atto",
        "fct-type": "function",
        "title": "atto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "atto",
        "normalized": "a-\u003eAtto a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eAtto unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:centi",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Centi :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#centi",
        "fct-type": "function",
        "title": "centi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "centi",
        "normalized": "a-\u003eCenti a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eCenti unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:deca",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Deca :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#deca",
        "fct-type": "function",
        "title": "deca"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "deca",
        "normalized": "a-\u003eDeca a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eDeca unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:deci",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Deci :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#deci",
        "fct-type": "function",
        "title": "deci"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "deci",
        "normalized": "a-\u003eDeci a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eDeci unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:exa",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Exa :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#exa",
        "fct-type": "function",
        "title": "exa"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "exa",
        "normalized": "a-\u003eExa a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eExa unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:femto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Femto :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#femto",
        "fct-type": "function",
        "title": "femto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "femto",
        "normalized": "a-\u003eFemto a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eFemto unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:giga",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Giga :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#giga",
        "fct-type": "function",
        "title": "giga"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "giga",
        "normalized": "a-\u003eGiga a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eGiga unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:hecto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Hecto :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#hecto",
        "fct-type": "function",
        "title": "hecto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "hecto",
        "normalized": "a-\u003eHecto a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eHecto unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:kilo",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Kilo :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#kilo",
        "fct-type": "function",
        "title": "kilo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "kilo",
        "normalized": "a-\u003eKilo a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eKilo unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:mega",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Mega :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#mega",
        "fct-type": "function",
        "title": "mega"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "mega",
        "normalized": "a-\u003eMega a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eMega unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:micro",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Micro :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#micro",
        "fct-type": "function",
        "title": "micro"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "micro",
        "normalized": "a-\u003eMicro a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eMicro unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:milli",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Milli :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#milli",
        "fct-type": "function",
        "title": "milli"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "milli",
        "normalized": "a-\u003eMilli a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eMilli unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:nano",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Nano :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#nano",
        "fct-type": "function",
        "title": "nano"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "nano",
        "normalized": "a-\u003eNano a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eNano unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:peta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Peta :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#peta",
        "fct-type": "function",
        "title": "peta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "peta",
        "normalized": "a-\u003ePeta a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003ePeta unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:pico",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Pico :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#pico",
        "fct-type": "function",
        "title": "pico"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "pico",
        "normalized": "a-\u003ePico a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003ePico unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:tera",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Tera :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#tera",
        "fct-type": "function",
        "title": "tera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "tera",
        "normalized": "a-\u003eTera a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eTera unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:yocto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Yocto :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#yocto",
        "fct-type": "function",
        "title": "yocto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "yocto",
        "normalized": "a-\u003eYocto a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eYocto unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:yotta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Yotta :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#yotta",
        "fct-type": "function",
        "title": "yotta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "yotta",
        "normalized": "a-\u003eYotta a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eYotta unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:zepto",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Zepto :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#zepto",
        "fct-type": "function",
        "title": "zepto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "zepto",
        "normalized": "a-\u003eZepto a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eZepto unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Prefixes.html#v:zetta",
      "description": {
        "fct-module": "Data.Dimensions.SI.Prefixes",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Zetta :@ unit",
        "fct-source": "src/Data-Dimensions-SI-Prefixes.html#zetta",
        "fct-type": "function",
        "title": "zetta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Prefixes",
        "module": "Data.Dimensions.SI.Prefixes",
        "name": "zetta",
        "normalized": "a-\u003eZetta a",
        "package": "units",
        "partial": "",
        "signature": "unit-\u003eZetta unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines type synonyms for SI units.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-SI-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module defines type synonyms for SI units",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Types",
        "normalized": "",
        "package": "units",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Acceleration",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Acceleration",
        "fct-type": "type",
        "title": "Acceleration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Acceleration",
        "normalized": "",
        "package": "units",
        "partial": "Acceleration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Area",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Area",
        "fct-type": "type",
        "title": "Area"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Area",
        "normalized": "",
        "package": "units",
        "partial": "Area",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Capacitance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Capacitance",
        "fct-type": "type",
        "title": "Capacitance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Capacitance",
        "normalized": "",
        "package": "units",
        "partial": "Capacitance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:CatalyticActivity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#CatalyticActivity",
        "fct-type": "type",
        "title": "CatalyticActivity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "CatalyticActivity",
        "normalized": "",
        "package": "units",
        "partial": "Catalytic Activity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Charge",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Charge",
        "fct-type": "type",
        "title": "Charge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Charge",
        "normalized": "",
        "package": "units",
        "partial": "Charge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Concentration",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Concentration",
        "fct-type": "type",
        "title": "Concentration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Concentration",
        "normalized": "",
        "package": "units",
        "partial": "Concentration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Conductance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Conductance",
        "fct-type": "type",
        "title": "Conductance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Conductance",
        "normalized": "",
        "package": "units",
        "partial": "Conductance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Current",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Current",
        "fct-type": "type",
        "title": "Current"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Current",
        "normalized": "",
        "package": "units",
        "partial": "Current",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:CurrentDensity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#CurrentDensity",
        "fct-type": "type",
        "title": "CurrentDensity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "CurrentDensity",
        "normalized": "",
        "package": "units",
        "partial": "Current Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Density",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Density",
        "fct-type": "type",
        "title": "Density"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Density",
        "normalized": "",
        "package": "units",
        "partial": "Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:ElectricPotential",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#ElectricPotential",
        "fct-type": "type",
        "title": "ElectricPotential"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "ElectricPotential",
        "normalized": "",
        "package": "units",
        "partial": "Electric Potential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Energy",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Energy",
        "fct-type": "type",
        "title": "Energy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Energy",
        "normalized": "",
        "package": "units",
        "partial": "Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Force",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Force",
        "fct-type": "type",
        "title": "Force"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Force",
        "normalized": "",
        "package": "units",
        "partial": "Force",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Frequency",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Frequency",
        "fct-type": "type",
        "title": "Frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Frequency",
        "normalized": "",
        "package": "units",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Illuminance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Illuminance",
        "fct-type": "type",
        "title": "Illuminance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Illuminance",
        "normalized": "",
        "package": "units",
        "partial": "Illuminance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Inductance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Inductance",
        "fct-type": "type",
        "title": "Inductance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Inductance",
        "normalized": "",
        "package": "units",
        "partial": "Inductance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Kerma",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Kerma",
        "fct-type": "type",
        "title": "Kerma"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Kerma",
        "normalized": "",
        "package": "units",
        "partial": "Kerma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Length",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Length",
        "fct-type": "type",
        "title": "Length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Length",
        "normalized": "",
        "package": "units",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Luminance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Luminance",
        "fct-type": "type",
        "title": "Luminance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Luminance",
        "normalized": "",
        "package": "units",
        "partial": "Luminance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Luminosity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Luminosity",
        "fct-type": "type",
        "title": "Luminosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Luminosity",
        "normalized": "",
        "package": "units",
        "partial": "Luminosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:LuminousFlux",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#LuminousFlux",
        "fct-type": "type",
        "title": "LuminousFlux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "LuminousFlux",
        "normalized": "",
        "package": "units",
        "partial": "Luminous Flux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticFlux",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#MagneticFlux",
        "fct-type": "type",
        "title": "MagneticFlux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "MagneticFlux",
        "normalized": "",
        "package": "units",
        "partial": "Magnetic Flux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticFluxDensity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#MagneticFluxDensity",
        "fct-type": "type",
        "title": "MagneticFluxDensity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "MagneticFluxDensity",
        "normalized": "",
        "package": "units",
        "partial": "Magnetic Flux Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:MagneticStrength",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#MagneticStrength",
        "fct-type": "type",
        "title": "MagneticStrength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "MagneticStrength",
        "normalized": "",
        "package": "units",
        "partial": "Magnetic Strength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Mass",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Mass",
        "fct-type": "type",
        "title": "Mass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Mass",
        "normalized": "",
        "package": "units",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Momentum",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Momentum",
        "fct-type": "type",
        "title": "Momentum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Momentum",
        "normalized": "",
        "package": "units",
        "partial": "Momentum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Power",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Power",
        "fct-type": "type",
        "title": "Power"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Power",
        "normalized": "",
        "package": "units",
        "partial": "Power",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Pressure",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Pressure",
        "fct-type": "type",
        "title": "Pressure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Pressure",
        "normalized": "",
        "package": "units",
        "partial": "Pressure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Quantity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Quantity",
        "fct-type": "type",
        "title": "Quantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Quantity",
        "normalized": "",
        "package": "units",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Resistance",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Resistance",
        "fct-type": "type",
        "title": "Resistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Resistance",
        "normalized": "",
        "package": "units",
        "partial": "Resistance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:SpecificVolume",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#SpecificVolume",
        "fct-type": "type",
        "title": "SpecificVolume"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "SpecificVolume",
        "normalized": "",
        "package": "units",
        "partial": "Specific Volume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:SurfaceDensity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#SurfaceDensity",
        "fct-type": "type",
        "title": "SurfaceDensity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "SurfaceDensity",
        "normalized": "",
        "package": "units",
        "partial": "Surface Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Temperature",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Temperature",
        "fct-type": "type",
        "title": "Temperature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Temperature",
        "normalized": "",
        "package": "units",
        "partial": "Temperature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Time",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Time",
        "normalized": "",
        "package": "units",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Velocity",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Velocity",
        "fct-type": "type",
        "title": "Velocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Velocity",
        "normalized": "",
        "package": "units",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Volume",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Volume",
        "fct-type": "type",
        "title": "Volume"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Volume",
        "normalized": "",
        "package": "units",
        "partial": "Volume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Types.html#t:Wavenumber",
      "description": {
        "fct-module": "Data.Dimensions.SI.Types",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-SI-Types.html#Wavenumber",
        "fct-type": "type",
        "title": "Wavenumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Types",
        "module": "Data.Dimensions.SI.Types",
        "name": "Wavenumber",
        "normalized": "",
        "package": "units",
        "partial": "Wavenumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports unit definitions according to the SI system of units.\n The definitions were taken from here: \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere is one deviation from the definition at that site: To work better\n with prefixes, the unit of mass is \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-SI-Units.html",
        "fct-type": "module",
        "title": "Units"
      },
      "index": {
        "description": "This module exports unit definitions according to the SI system of units The definitions were taken from here http www.bipm.org en si There is one deviation from the definition at that site To work better with prefixes the unit of mass is Gram",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Units",
        "normalized": "",
        "package": "units",
        "partial": "Units",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Ampere",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Ampere",
        "fct-type": "data",
        "title": "Ampere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Ampere",
        "normalized": "",
        "package": "units",
        "partial": "Ampere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Becquerel",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Becquerel",
        "fct-type": "data",
        "title": "Becquerel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Becquerel",
        "normalized": "",
        "package": "units",
        "partial": "Becquerel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Candela",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Candela",
        "fct-type": "data",
        "title": "Candela"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Candela",
        "normalized": "",
        "package": "units",
        "partial": "Candela",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Coulomb",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Coulomb",
        "fct-type": "data",
        "title": "Coulomb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Coulomb",
        "normalized": "",
        "package": "units",
        "partial": "Coulomb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Farad",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Farad",
        "fct-type": "data",
        "title": "Farad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Farad",
        "normalized": "",
        "package": "units",
        "partial": "Farad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Gram",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Gram",
        "fct-type": "data",
        "title": "Gram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Gram",
        "normalized": "",
        "package": "units",
        "partial": "Gram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Gray",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Gray",
        "fct-type": "data",
        "title": "Gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Gray",
        "normalized": "",
        "package": "units",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Henry",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Henry",
        "fct-type": "data",
        "title": "Henry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Henry",
        "normalized": "",
        "package": "units",
        "partial": "Henry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Hertz",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Hertz",
        "fct-type": "data",
        "title": "Hertz"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Hertz",
        "normalized": "",
        "package": "units",
        "partial": "Hertz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Joule",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Joule",
        "fct-type": "data",
        "title": "Joule"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Joule",
        "normalized": "",
        "package": "units",
        "partial": "Joule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Katal",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Katal",
        "fct-type": "data",
        "title": "Katal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Katal",
        "normalized": "",
        "package": "units",
        "partial": "Katal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Kelvin",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Kelvin",
        "fct-type": "data",
        "title": "Kelvin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Kelvin",
        "normalized": "",
        "package": "units",
        "partial": "Kelvin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Lumen",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Lumen",
        "fct-type": "data",
        "title": "Lumen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Lumen",
        "normalized": "",
        "package": "units",
        "partial": "Lumen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Lux",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Lux",
        "fct-type": "data",
        "title": "Lux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Lux",
        "normalized": "",
        "package": "units",
        "partial": "Lux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Meter",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Meter",
        "fct-type": "data",
        "title": "Meter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Meter",
        "normalized": "",
        "package": "units",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Mole",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Mole",
        "fct-type": "data",
        "title": "Mole"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Mole",
        "normalized": "",
        "package": "units",
        "partial": "Mole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Newton",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Newton",
        "fct-type": "data",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Newton",
        "normalized": "",
        "package": "units",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Ohm",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Ohm",
        "fct-type": "data",
        "title": "Ohm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Ohm",
        "normalized": "",
        "package": "units",
        "partial": "Ohm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Pascal",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Pascal",
        "fct-type": "data",
        "title": "Pascal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Pascal",
        "normalized": "",
        "package": "units",
        "partial": "Pascal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Second",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Second",
        "fct-type": "data",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Second",
        "normalized": "",
        "package": "units",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Siemens",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Siemens",
        "fct-type": "data",
        "title": "Siemens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Siemens",
        "normalized": "",
        "package": "units",
        "partial": "Siemens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Sievert",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Sievert",
        "fct-type": "data",
        "title": "Sievert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Sievert",
        "normalized": "",
        "package": "units",
        "partial": "Sievert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Tesla",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Tesla",
        "fct-type": "data",
        "title": "Tesla"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Tesla",
        "normalized": "",
        "package": "units",
        "partial": "Tesla",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Volt",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Volt",
        "fct-type": "data",
        "title": "Volt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Volt",
        "normalized": "",
        "package": "units",
        "partial": "Volt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Watt",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Watt",
        "fct-type": "data",
        "title": "Watt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Watt",
        "normalized": "",
        "package": "units",
        "partial": "Watt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#t:Weber",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Weber",
        "fct-type": "data",
        "title": "Weber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Weber",
        "normalized": "",
        "package": "units",
        "partial": "Weber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Ampere",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Ampere",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Ampere",
        "fct-type": "function",
        "title": "Ampere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Ampere",
        "normalized": "",
        "package": "units",
        "partial": "Ampere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Becquerel",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Becquerel",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Becquerel",
        "fct-type": "function",
        "title": "Becquerel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Becquerel",
        "normalized": "",
        "package": "units",
        "partial": "Becquerel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Candela",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Candela",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Candela",
        "fct-type": "function",
        "title": "Candela"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Candela",
        "normalized": "",
        "package": "units",
        "partial": "Candela",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Coulomb",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Coulomb",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Coulomb",
        "fct-type": "function",
        "title": "Coulomb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Coulomb",
        "normalized": "",
        "package": "units",
        "partial": "Coulomb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Farad",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Farad",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Farad",
        "fct-type": "function",
        "title": "Farad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Farad",
        "normalized": "",
        "package": "units",
        "partial": "Farad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Gram",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Gram",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Gram",
        "fct-type": "function",
        "title": "Gram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Gram",
        "normalized": "",
        "package": "units",
        "partial": "Gram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Gray",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Gray",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Gray",
        "fct-type": "function",
        "title": "Gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Gray",
        "normalized": "",
        "package": "units",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Henry",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Henry",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Henry",
        "fct-type": "function",
        "title": "Henry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Henry",
        "normalized": "",
        "package": "units",
        "partial": "Henry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Hertz",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Hertz",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Hertz",
        "fct-type": "function",
        "title": "Hertz"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Hertz",
        "normalized": "",
        "package": "units",
        "partial": "Hertz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Joule",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Joule",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Joule",
        "fct-type": "function",
        "title": "Joule"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Joule",
        "normalized": "",
        "package": "units",
        "partial": "Joule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Katal",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Katal",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Katal",
        "fct-type": "function",
        "title": "Katal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Katal",
        "normalized": "",
        "package": "units",
        "partial": "Katal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Kelvin",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Kelvin",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Kelvin",
        "fct-type": "function",
        "title": "Kelvin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Kelvin",
        "normalized": "",
        "package": "units",
        "partial": "Kelvin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Lumen",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Lumen",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Lumen",
        "fct-type": "function",
        "title": "Lumen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Lumen",
        "normalized": "",
        "package": "units",
        "partial": "Lumen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Lux",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Lux",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Lux",
        "fct-type": "function",
        "title": "Lux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Lux",
        "normalized": "",
        "package": "units",
        "partial": "Lux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Meter",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Meter",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Meter",
        "fct-type": "function",
        "title": "Meter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Meter",
        "normalized": "",
        "package": "units",
        "partial": "Meter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Mole",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Mole",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Mole",
        "fct-type": "function",
        "title": "Mole"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Mole",
        "normalized": "",
        "package": "units",
        "partial": "Mole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Newton",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Newton",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Newton",
        "fct-type": "function",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Newton",
        "normalized": "",
        "package": "units",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Ohm",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Ohm",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Ohm",
        "fct-type": "function",
        "title": "Ohm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Ohm",
        "normalized": "",
        "package": "units",
        "partial": "Ohm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Pascal",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Pascal",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Pascal",
        "fct-type": "function",
        "title": "Pascal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Pascal",
        "normalized": "",
        "package": "units",
        "partial": "Pascal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Second",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Second",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Second",
        "fct-type": "function",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Second",
        "normalized": "",
        "package": "units",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Siemens",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Siemens",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Siemens",
        "fct-type": "function",
        "title": "Siemens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Siemens",
        "normalized": "",
        "package": "units",
        "partial": "Siemens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Sievert",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Sievert",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Sievert",
        "fct-type": "function",
        "title": "Sievert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Sievert",
        "normalized": "",
        "package": "units",
        "partial": "Sievert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Tesla",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Tesla",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Tesla",
        "fct-type": "function",
        "title": "Tesla"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Tesla",
        "normalized": "",
        "package": "units",
        "partial": "Tesla",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Volt",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Volt",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Volt",
        "fct-type": "function",
        "title": "Volt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Volt",
        "normalized": "",
        "package": "units",
        "partial": "Volt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Watt",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Watt",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Watt",
        "fct-type": "function",
        "title": "Watt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Watt",
        "normalized": "",
        "package": "units",
        "partial": "Watt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI-Units.html#v:Weber",
      "description": {
        "fct-module": "Data.Dimensions.SI.Units",
        "fct-package": "units",
        "fct-signature": "Weber",
        "fct-source": "src/Data-Dimensions-SI-Units.html#Weber",
        "fct-type": "function",
        "title": "Weber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions SI Units",
        "module": "Data.Dimensions.SI.Units",
        "name": "Weber",
        "normalized": "",
        "package": "units",
        "partial": "Weber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-SI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports unit, type, and prefix definitions according to the SI\n system of units. The definitions were taken from here:\n \u003ca\u003ehttp://www.bipm.org/en/si/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere is one deviation from the definition at that site: To work better\n with prefixes, the unit of mass is \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.SI",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-SI.html",
        "fct-type": "module",
        "title": "SI"
      },
      "index": {
        "description": "This module exports unit type and prefix definitions according to the SI system of units The definitions were taken from here http www.bipm.org en si There is one deviation from the definition at that site To work better with prefixes the unit of mass is Gram",
        "hierarchy": "Data Dimensions SI",
        "module": "Data.Dimensions.SI",
        "name": "SI",
        "normalized": "",
        "package": "units",
        "partial": "SI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Show.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines only a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for dimensioned quantities.\n The Show instance prints out the number stored internally with its canonical\n units.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.Show",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "This module defines only Show instance for dimensioned quantities The Show instance prints out the number stored internally with its canonical units",
        "hierarchy": "Data Dimensions Show",
        "module": "Data.Dimensions.Show",
        "name": "Show",
        "normalized": "",
        "package": "units",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the constructor of the \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e type. This allows you\n to write dimension-unsafe code. Use at your peril.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions.Unsafe",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "This module exports the constructor of the Dim type This allows you to write dimension-unsafe code Use at your peril",
        "hierarchy": "Data Dimensions Unsafe",
        "module": "Data.Dimensions.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "units",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#t:Dim",
      "description": {
        "fct-descr": "\u003cp\u003eDim adds a dimensional annotation to its base type \u003ccode\u003en\u003c/code\u003e. This is the\n representation for all dimensioned quantities.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions.Unsafe",
        "fct-package": "units",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Dimensions-Dim.html#Dim",
        "fct-type": "newtype",
        "title": "Dim"
      },
      "index": {
        "description": "Dim adds dimensional annotation to its base type This is the representation for all dimensioned quantities",
        "hierarchy": "Data Dimensions Unsafe",
        "module": "Data.Dimensions.Unsafe",
        "name": "Dim",
        "normalized": "",
        "package": "units",
        "partial": "Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions-Unsafe.html#v:Dim",
      "description": {
        "fct-module": "Data.Dimensions.Unsafe",
        "fct-package": "units",
        "fct-signature": "Dim n",
        "fct-source": "src/Data-Dimensions-Dim.html#Dim",
        "fct-type": "function",
        "title": "Dim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions Unsafe",
        "module": "Data.Dimensions.Unsafe",
        "name": "Dim",
        "normalized": "",
        "package": "units",
        "partial": "Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe units package is a framework for strongly-typed dimensional analysis.\n This haddock documentation is generally \u003cem\u003enot\u003c/em\u003e enough to be able to use this\n package effectively. Please see the readme at\n \u003ca\u003ehttp://www.cis.upenn.edu/~eir/packages/units/README.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSome of the types below refer to declarations that are not exported and\n not documented here. This is because Haddock does not allow finely-tuned\n abstraction in documentation. (In particular, right-hand sides of type \n synonym declarations are always included.) If a symbol is not exported,\n you do \u003cem\u003enot\u003c/em\u003e need to know anything about it to use this package.\n\u003c/p\u003e\u003cp\u003eThough it doesn't appear here, \u003ccode\u003eScalar\u003c/code\u003e is an instance of \u003ccode\u003eNum\u003c/code\u003e, and\n generally has all the numeric instances that \u003ccode\u003eDouble\u003c/code\u003e has.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "module",
        "fct-source": "src/Data-Dimensions.html",
        "fct-type": "module",
        "title": "Dimensions"
      },
      "index": {
        "description": "The units package is framework for strongly-typed dimensional analysis This haddock documentation is generally not enough to be able to use this package effectively Please see the readme at http www.cis.upenn.edu eir packages units README.html Some of the types below refer to declarations that are not exported and not documented here This is because Haddock does not allow finely-tuned abstraction in documentation In particular right-hand sides of type synonym declarations are always included If symbol is not exported you do not need to know anything about it to use this package Though it doesn appear here Scalar is an instance of Num and generally has all the numeric instances that Double has",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Dimensions",
        "normalized": "",
        "package": "units",
        "partial": "Dimensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two integers\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(#*)",
        "fct-type": "function",
        "title": "(#*)"
      },
      "index": {
        "description": "Multiply two integers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(#*) #*",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two integers\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(#+)",
        "fct-type": "function",
        "title": "(#+)"
      },
      "index": {
        "description": "Add two integers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(#+) #+",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--45-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract two integers\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(#-)",
        "fct-type": "function",
        "title": "(#-)"
      },
      "index": {
        "description": "Subtract two integers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(#-) #-",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-35--47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivide two integers\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(#/)",
        "fct-type": "function",
        "title": "(#/)"
      },
      "index": {
        "description": "Divide two integers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(#/) #/",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two dimension types to produce a new one. For example:\n\u003c/p\u003e\u003cpre\u003e type Velocity = Length %/ Time\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(%*)",
        "fct-type": "function",
        "title": "(%*)"
      },
      "index": {
        "description": "Multiply two dimension types to produce new one For example type Velocity Length Time",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(%*) %*",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivide two dimension types to produce a new one\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(%/)",
        "fct-type": "function",
        "title": "(%/)"
      },
      "index": {
        "description": "Divide two dimension types to produce new one",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(%/) %/",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:-37--94-",
      "description": {
        "fct-descr": "\u003cp\u003eExponentiate a dimension type to an integer\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "(%^)",
        "fct-type": "function",
        "title": "(%^)"
      },
      "index": {
        "description": "Exponentiate dimension type to an integer",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(%^) %^",
        "normalized": "()",
        "package": "units",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two units to get another unit.\n For example: \u003ccode\u003etype MetersSquared = Meter :* Meter\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%2A",
        "fct-type": "data",
        "title": ":*"
      },
      "index": {
        "description": "Multiply two units to get another unit For example type MetersSquared Meter Meter",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":*",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivide two units to get another unit\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%2F",
        "fct-type": "data",
        "title": ":/"
      },
      "index": {
        "description": "Divide two units to get another unit",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":/",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-64-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply a conversion ratio by some constant. Used for defining prefixes.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%40",
        "fct-type": "data",
        "title": ":@"
      },
      "index": {
        "description": "Multiply conversion ratio by some constant Used for defining prefixes",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":@",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t::-94-",
      "description": {
        "fct-descr": "\u003cp\u003eRaise a unit to a power, known at compile time\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%5E",
        "fct-type": "data",
        "title": ":^"
      },
      "index": {
        "description": "Raise unit to power known at compile time",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":^",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Canonical",
      "description": {
        "fct-descr": "\u003cp\u003eDummy type use just to label canonical units. It does \u003cem\u003enot\u003c/em\u003e have a\n \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-Units.html#Canonical",
        "fct-type": "data",
        "title": "Canonical"
      },
      "index": {
        "description": "Dummy type use just to label canonical units It does not have Unit instance",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Canonical",
        "normalized": "",
        "package": "units",
        "partial": "Canonical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Five",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#Five",
        "fct-type": "type",
        "title": "Five"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Five",
        "normalized": "",
        "package": "units",
        "partial": "Five",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Four",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#Four",
        "fct-type": "type",
        "title": "Four"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Four",
        "normalized": "",
        "package": "units",
        "partial": "Four",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MFive",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#MFive",
        "fct-type": "type",
        "title": "MFive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MFive",
        "normalized": "",
        "package": "units",
        "partial": "MFive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MFour",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#MFour",
        "fct-type": "type",
        "title": "MFour"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MFour",
        "normalized": "",
        "package": "units",
        "partial": "MFour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MOne",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#MOne",
        "fct-type": "type",
        "title": "MOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MOne",
        "normalized": "",
        "package": "units",
        "partial": "MOne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MThree",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#MThree",
        "fct-type": "type",
        "title": "MThree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MThree",
        "normalized": "",
        "package": "units",
        "partial": "MThree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MTwo",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#MTwo",
        "fct-type": "type",
        "title": "MTwo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MTwo",
        "normalized": "",
        "package": "units",
        "partial": "MTwo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MkDim",
      "description": {
        "fct-descr": "\u003cp\u003eMake a dimensioned quantity type capable of storing a value of a given\n unit. This uses a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for storage of the value. For example:\n\u003c/p\u003e\u003cpre\u003e type Length = MkDim Meter\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Units.html#MkDim",
        "fct-type": "type",
        "title": "MkDim"
      },
      "index": {
        "description": "Make dimensioned quantity type capable of storing value of given unit This uses Double for storage of the value For example type Length MkDim Meter",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MkDim",
        "normalized": "",
        "package": "units",
        "partial": "Mk Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:MkGenDim",
      "description": {
        "fct-descr": "\u003cp\u003eMake a dimensioned quantity with a custom numerical type.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Units.html#MkGenDim",
        "fct-type": "type",
        "title": "MkGenDim"
      },
      "index": {
        "description": "Make dimensioned quantity with custom numerical type",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "MkGenDim",
        "normalized": "",
        "package": "units",
        "partial": "Mk Gen Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:NegZ",
      "description": {
        "fct-descr": "\u003cp\u003eNegate an integer\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "NegZ",
        "fct-type": "function",
        "title": "NegZ"
      },
      "index": {
        "description": "Negate an integer",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "NegZ",
        "normalized": "",
        "package": "units",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Number",
      "description": {
        "fct-descr": "\u003cp\u003eThe unit for unitless dimensioned quantities\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions.html#Number",
        "fct-type": "data",
        "title": "Number"
      },
      "index": {
        "description": "The unit for unitless dimensioned quantities",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Number",
        "normalized": "",
        "package": "units",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:One",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#One",
        "fct-type": "type",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "One",
        "normalized": "",
        "package": "units",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Pred",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract one from an integer\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Pred",
        "fct-type": "function",
        "title": "Pred"
      },
      "index": {
        "description": "Subtract one from an integer",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Pred",
        "normalized": "",
        "package": "units",
        "partial": "Pred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Scalar",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of unitless dimensioned quantities\n This is an instance of \u003ccode\u003eNum\u003c/code\u003e, though Haddock doesn't show it.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions.html#Scalar",
        "fct-type": "type",
        "title": "Scalar"
      },
      "index": {
        "description": "The type of unitless dimensioned quantities This is an instance of Num though Haddock doesn show it",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Scalar",
        "normalized": "",
        "package": "units",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Succ",
      "description": {
        "fct-descr": "\u003cp\u003eAdd one to an integer\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Succ",
        "fct-type": "function",
        "title": "Succ"
      },
      "index": {
        "description": "Add one to an integer",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Succ",
        "normalized": "",
        "package": "units",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Three",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#Three",
        "fct-type": "type",
        "title": "Three"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Three",
        "normalized": "",
        "package": "units",
        "partial": "Three",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Two",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "type",
        "fct-source": "src/Data-Dimensions-Z.html#Two",
        "fct-type": "type",
        "title": "Two"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Two",
        "normalized": "",
        "package": "units",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Unit",
      "description": {
        "fct-descr": "\u003cp\u003eClass of units. Make an instance of this class to define a new unit.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "class",
        "fct-source": "src/Data-Dimensions-Units.html#Unit",
        "fct-type": "class",
        "title": "Unit"
      },
      "index": {
        "description": "Class of units Make an instance of this class to define new unit",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Unit",
        "normalized": "",
        "package": "units",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:UnitPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eA class for user-defined prefixes\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "class",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#UnitPrefix",
        "fct-type": "class",
        "title": "UnitPrefix"
      },
      "index": {
        "description": "class for user-defined prefixes",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "UnitPrefix",
        "normalized": "",
        "package": "units",
        "partial": "Unit Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#t:Z",
      "description": {
        "fct-descr": "\u003cp\u003eThe datatype for type-level integers.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "data",
        "fct-source": "src/Data-Dimensions-Z.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "The datatype for type-level integers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Z",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003edimIn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "MkDim (CanonicalUnit unit) -\u003e unit -\u003e Double",
        "fct-source": "src/Data-Dimensions.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Infix synonym for dimIn",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(#) #",
        "normalized": "MkDim(CanonicalUnit a)-\u003ea-\u003eDouble",
        "package": "units",
        "partial": "",
        "signature": "MkDim(CanonicalUnit unit)-\u003eunit-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-37-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix synonym for \u003ccode\u003e\u003ca\u003edimOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Double -\u003e unit -\u003e MkDim (CanonicalUnit unit)",
        "fct-source": "src/Data-Dimensions.html#%25",
        "fct-type": "function",
        "title": "(%)"
      },
      "index": {
        "description": "Infix synonym for dimOf",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(%) %",
        "normalized": "Double-\u003ea-\u003eMkDim(CanonicalUnit a)",
        "package": "units",
        "partial": "",
        "signature": "Double-\u003eunit-\u003eMkDim(CanonicalUnit unit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply a dimensioned quantity by a scalar\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "n -\u003e Dim n a -\u003e Dim n a",
        "fct-source": "src/Data-Dimensions-Dim.html#%2A.",
        "fct-type": "function",
        "title": "(*.)"
      },
      "index": {
        "description": "Multiply dimensioned quantity by scalar",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(*.) *.",
        "normalized": "a-\u003eDim a b-\u003eDim a b",
        "package": "units",
        "partial": "",
        "signature": "n-\u003eDim n a-\u003eDim n a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two dimensioned quantities\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n a -\u003e Dim n b -\u003e Dim n (Normalize (a @+ b))",
        "fct-source": "src/Data-Dimensions-Dim.html#.%2A",
        "fct-type": "function",
        "title": "(.*)"
      },
      "index": {
        "description": "Multiply two dimensioned quantities",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.*) .*",
        "normalized": "Dim a b-\u003eDim a c-\u003eDim a(Normalize(b c))",
        "package": "units",
        "partial": "",
        "signature": "Dim n a-\u003eDim n b-\u003eDim n(Normalize(a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two compatible dimensioned quantities\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Dim n d1",
        "fct-source": "src/Data-Dimensions-Dim.html#.%2B",
        "fct-type": "function",
        "title": "(.+)"
      },
      "index": {
        "description": "Add two compatible dimensioned quantities",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.+) .+",
        "normalized": "Dim a b-\u003eDim a b-\u003eDim a b",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eDim n d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-45-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract two compatible dimensioned quantities\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Dim n d1",
        "fct-source": "src/Data-Dimensions-Dim.html#.-",
        "fct-type": "function",
        "title": "(.-)"
      },
      "index": {
        "description": "Subtract two compatible dimensioned quantities",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.-) .-",
        "normalized": "Dim a b-\u003eDim a b-\u003eDim a b",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eDim n d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivide two dimensioned quantities\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n a -\u003e Dim n b -\u003e Dim n (Normalize (a @- b))",
        "fct-source": "src/Data-Dimensions-Dim.html#.%2F",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "Divide two dimensioned quantities",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(./) ./",
        "normalized": "Dim a b-\u003eDim a c-\u003eDim a(Normalize(b c))",
        "package": "units",
        "partial": "",
        "signature": "Dim n a-\u003eDim n b-\u003eDim n(Normalize(a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-60-",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if one dimensioned quantity is less than a compatible one\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
        "fct-source": "src/Data-Dimensions-Dim.html#.%3C",
        "fct-type": "function",
        "title": "(.\u003c)"
      },
      "index": {
        "description": "Check if one dimensioned quantity is less than compatible one",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.\u003c) .\u003c",
        "normalized": "Dim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-60--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if one dimensioned quantity is less than or equal to a compatible one\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
        "fct-source": "src/Data-Dimensions-Dim.html#.%3C%3D",
        "fct-type": "function",
        "title": "(.\u003c=)"
      },
      "index": {
        "description": "Check if one dimensioned quantity is less than or equal to compatible one",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.\u003c=) .\u003c=",
        "normalized": "Dim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if one dimensioned quantity is greater than a compatible one\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
        "fct-source": "src/Data-Dimensions-Dim.html#.%3E",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Check if one dimensioned quantity is greater than compatible one",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.\u003e) .\u003e",
        "normalized": "Dim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if one dimensioned quantity is greater than or equal to a compatible one\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d1 -\u003e Dim n d2 -\u003e Bool",
        "fct-source": "src/Data-Dimensions-Dim.html#.%3E%3D",
        "fct-type": "function",
        "title": "(.\u003e=)"
      },
      "index": {
        "description": "Check if one dimensioned quantity is greater than or equal to compatible one",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.\u003e=) .\u003e=",
        "normalized": "Dim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:.-94-",
      "description": {
        "fct-descr": "\u003cp\u003eRaise a dimensioned quantity to a power known at compile time\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n a -\u003e Sing z -\u003e Dim n (a @* z)",
        "fct-source": "src/Data-Dimensions-Dim.html#.%5E",
        "fct-type": "function",
        "title": "(.^)"
      },
      "index": {
        "description": "Raise dimensioned quantity to power known at compile time",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "(.^) .^",
        "normalized": "Dim a b-\u003eSing c-\u003eDim a(b*c)",
        "package": "units",
        "partial": "",
        "signature": "Dim n a-\u003eSing z-\u003eDim n(a*z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-42-",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "u1 :* u2",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%2A",
        "fct-type": "function",
        "title": ":*"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":*",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-47-",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "u1 :/ u2",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%2F",
        "fct-type": "function",
        "title": ":/"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":/",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-64-",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "prefix :@ unit",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%40",
        "fct-type": "function",
        "title": ":@"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":@",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v::-94-",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "unit :^ (Sing power)",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#%3A%5E",
        "fct-type": "function",
        "title": ":^"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": ":^",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:Number",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Number",
        "fct-source": "src/Data-Dimensions.html#Number",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Number",
        "normalized": "",
        "package": "units",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:P",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "P Z",
        "fct-source": "src/Data-Dimensions-Z.html#Z",
        "fct-type": "function",
        "title": "P"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "P",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:S",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "S Z",
        "fct-source": "src/Data-Dimensions-Z.html#Z",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "S",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:Zero",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Zero",
        "fct-source": "src/Data-Dimensions-Z.html#Z",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "Zero",
        "normalized": "",
        "package": "units",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:conversionRatio",
      "description": {
        "fct-descr": "\u003cp\u003eThe conversion ratio \u003cem\u003efrom\u003c/em\u003e the base unit \u003cem\u003eto\u003c/em\u003e this unit.\n If left out, a conversion ratio of 1 is assumed.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e instance Unit Foot where\n   type BaseUnit Foot = Meter\n   conversionRatio _ = 0.3048\n\u003c/pre\u003e\u003cp\u003eImplementations should \u003cem\u003enever\u003c/em\u003e examine their argument!\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "unit -\u003e Double",
        "fct-source": "src/Data-Dimensions-Units.html#conversionRatio",
        "fct-type": "method",
        "title": "conversionRatio"
      },
      "index": {
        "description": "The conversion ratio from the base unit to this unit If left out conversion ratio of is assumed For example instance Unit Foot where type BaseUnit Foot Meter conversionRatio Implementations should never examine their argument",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "conversionRatio",
        "normalized": "a-\u003eDouble",
        "package": "units",
        "partial": "Ratio",
        "signature": "unit-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dim",
      "description": {
        "fct-descr": "\u003cp\u003eDimension-safe cast. See the README for more info.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d -\u003e Dim n e",
        "fct-source": "src/Data-Dimensions.html#dim",
        "fct-type": "function",
        "title": "dim"
      },
      "index": {
        "description": "Dimension-safe cast See the README for more info",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dim",
        "normalized": "Dim a b-\u003eDim a c",
        "package": "units",
        "partial": "",
        "signature": "Dim n d-\u003eDim n e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimCubeRoot",
      "description": {
        "fct-descr": "\u003cp\u003eTake the cube root of a dimensioned quantity\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n a -\u003e Dim n (a @/ Three)",
        "fct-source": "src/Data-Dimensions-Dim.html#dimCubeRoot",
        "fct-type": "function",
        "title": "dimCubeRoot"
      },
      "index": {
        "description": "Take the cube root of dimensioned quantity",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimCubeRoot",
        "normalized": "Dim a b-\u003eDim a(b Three)",
        "package": "units",
        "partial": "Cube Root",
        "signature": "Dim n a-\u003eDim n(a Three)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimEq",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two compatible dimensioned quantities for equality\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d0-\u003e Dim n d1-\u003e Dim n d2-\u003e Bool",
        "fct-type": "function",
        "title": "dimEq"
      },
      "index": {
        "description": "Compare two compatible dimensioned quantities for equality",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimEq",
        "normalized": "Dim a b-\u003eDim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "Eq",
        "signature": "Dim n d-\u003eDim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimIn",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts a \u003ccode\u003eDouble\u003c/code\u003e from a dimensioned quantity, expressed in\n   the given unit. For example:\n\u003c/p\u003e\u003cpre\u003e inMeters :: Length -\u003e Double\n inMeters x = dimIn x Meter\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "MkDim (CanonicalUnit unit) -\u003e unit -\u003e Double",
        "fct-source": "src/Data-Dimensions.html#dimIn",
        "fct-type": "function",
        "title": "dimIn"
      },
      "index": {
        "description": "Extracts Double from dimensioned quantity expressed in the given unit For example inMeters Length Double inMeters dimIn Meter",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimIn",
        "normalized": "MkDim(CanonicalUnit a)-\u003ea-\u003eDouble",
        "package": "units",
        "partial": "In",
        "signature": "MkDim(CanonicalUnit unit)-\u003eunit-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimNeq",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two compatible dimensioned quantities for inequality\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n d0-\u003e Dim n d1-\u003e Dim n d2-\u003e Bool",
        "fct-type": "function",
        "title": "dimNeq"
      },
      "index": {
        "description": "Compare two compatible dimensioned quantities for inequality",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimNeq",
        "normalized": "Dim a b-\u003eDim a b-\u003eDim a b-\u003eBool",
        "package": "units",
        "partial": "Neq",
        "signature": "Dim n d-\u003eDim n d-\u003eDim n d-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimOf",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a dimensioned quantity in the given unit. For example:\n\u003c/p\u003e\u003cpre\u003e height :: Length\n height = dimOf 2.0 Meter\n\u003c/pre\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Double -\u003e unit -\u003e MkDim (CanonicalUnit unit)",
        "fct-source": "src/Data-Dimensions.html#dimOf",
        "fct-type": "function",
        "title": "dimOf"
      },
      "index": {
        "description": "Creates dimensioned quantity in the given unit For example height Length height dimOf Meter",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimOf",
        "normalized": "Double-\u003ea-\u003eMkDim(CanonicalUnit a)",
        "package": "units",
        "partial": "Of",
        "signature": "Double-\u003eunit-\u003eMkDim(CanonicalUnit unit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:dimSqrt",
      "description": {
        "fct-descr": "\u003cp\u003eTake the square root of a dimensioned quantity\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n a -\u003e Dim n (a @/ Two)",
        "fct-source": "src/Data-Dimensions-Dim.html#dimSqrt",
        "fct-type": "function",
        "title": "dimSqrt"
      },
      "index": {
        "description": "Take the square root of dimensioned quantity",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "dimSqrt",
        "normalized": "Dim a b-\u003eDim a(b Two)",
        "package": "units",
        "partial": "Sqrt",
        "signature": "Dim n a-\u003eDim n(a Two)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:multiplier",
      "description": {
        "fct-descr": "\u003cp\u003eThis should return the desired multiplier for the prefix being defined.\n This function must \u003cem\u003enot\u003c/em\u003e inspect its argument.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "prefix -\u003e Double",
        "fct-source": "src/Data-Dimensions-UnitCombinators.html#multiplier",
        "fct-type": "method",
        "title": "multiplier"
      },
      "index": {
        "description": "This should return the desired multiplier for the prefix being defined This function must not inspect its argument",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "multiplier",
        "normalized": "a-\u003eDouble",
        "package": "units",
        "partial": "",
        "signature": "prefix-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:nthRoot",
      "description": {
        "fct-descr": "\u003cp\u003eTake the n'th root of a dimensioned quantity, where n is known at compile\n time\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing z -\u003e Dim n a -\u003e Dim n (a @/ z)",
        "fct-source": "src/Data-Dimensions-Dim.html#nthRoot",
        "fct-type": "function",
        "title": "nthRoot"
      },
      "index": {
        "description": "Take the th root of dimensioned quantity where is known at compile time",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "nthRoot",
        "normalized": "Sing a-\u003eDim b c-\u003eDim b(c a)",
        "package": "units",
        "partial": "Root",
        "signature": "Sing z-\u003eDim n a-\u003eDim n(a z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pFive",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (S (S (S (S (S Zero)))))",
        "fct-source": "src/Data-Dimensions-Z.html#pFive",
        "fct-type": "function",
        "title": "pFive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pFive",
        "normalized": "",
        "package": "units",
        "partial": "Five",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pFour",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (S (S (S (S Zero))))",
        "fct-source": "src/Data-Dimensions-Z.html#pFour",
        "fct-type": "function",
        "title": "pFour"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pFour",
        "normalized": "",
        "package": "units",
        "partial": "Four",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMFive",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (P (P (P (P (P Zero)))))",
        "fct-source": "src/Data-Dimensions-Z.html#pMFive",
        "fct-type": "function",
        "title": "pMFive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pMFive",
        "normalized": "",
        "package": "units",
        "partial": "MFive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMFour",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (P (P (P (P Zero))))",
        "fct-source": "src/Data-Dimensions-Z.html#pMFour",
        "fct-type": "function",
        "title": "pMFour"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pMFour",
        "normalized": "",
        "package": "units",
        "partial": "MFour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMOne",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (P Zero)",
        "fct-source": "src/Data-Dimensions-Z.html#pMOne",
        "fct-type": "function",
        "title": "pMOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pMOne",
        "normalized": "",
        "package": "units",
        "partial": "MOne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMThree",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (P (P (P Zero)))",
        "fct-source": "src/Data-Dimensions-Z.html#pMThree",
        "fct-type": "function",
        "title": "pMThree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pMThree",
        "normalized": "",
        "package": "units",
        "partial": "MThree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pMTwo",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (P (P Zero))",
        "fct-source": "src/Data-Dimensions-Z.html#pMTwo",
        "fct-type": "function",
        "title": "pMTwo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pMTwo",
        "normalized": "",
        "package": "units",
        "partial": "MTwo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pOne",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (S Zero)",
        "fct-source": "src/Data-Dimensions-Z.html#pOne",
        "fct-type": "function",
        "title": "pOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pOne",
        "normalized": "",
        "package": "units",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pPred",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract one from a singleton \u003ccode\u003eZ\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing z -\u003e Sing (Pred z)",
        "fct-source": "src/Data-Dimensions-Z.html#pPred",
        "fct-type": "function",
        "title": "pPred"
      },
      "index": {
        "description": "Subtract one from singleton",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pPred",
        "normalized": "Sing a-\u003eSing(Pred a)",
        "package": "units",
        "partial": "Pred",
        "signature": "Sing z-\u003eSing(Pred z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pSucc",
      "description": {
        "fct-descr": "\u003cp\u003eAdd one to a singleton \u003ccode\u003eZ\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing z -\u003e Sing (Succ z)",
        "fct-source": "src/Data-Dimensions-Z.html#pSucc",
        "fct-type": "function",
        "title": "pSucc"
      },
      "index": {
        "description": "Add one to singleton",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pSucc",
        "normalized": "Sing a-\u003eSing(Succ a)",
        "package": "units",
        "partial": "Succ",
        "signature": "Sing z-\u003eSing(Succ z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pThree",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (S (S (S Zero)))",
        "fct-source": "src/Data-Dimensions-Z.html#pThree",
        "fct-type": "function",
        "title": "pThree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pThree",
        "normalized": "",
        "package": "units",
        "partial": "Three",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pTwo",
      "description": {
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z (S (S Zero))",
        "fct-source": "src/Data-Dimensions-Z.html#pTwo",
        "fct-type": "function",
        "title": "pTwo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pTwo",
        "normalized": "",
        "package": "units",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:pZero",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the singleton value representing \u003ccode\u003eZero\u003c/code\u003e at the term level and\n at the type level, simultaneously. Used for raising units to powers.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Sing Z Zero",
        "fct-source": "src/Data-Dimensions-Z.html#pZero",
        "fct-type": "function",
        "title": "pZero"
      },
      "index": {
        "description": "This is the singleton value representing Zero at the term level and at the type level simultaneously Used for raising units to powers",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "pZero",
        "normalized": "",
        "package": "units",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:scalar",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a raw number into a unitless dimensioned quantity\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "n -\u003e Dim n `[]`",
        "fct-source": "src/Data-Dimensions.html#scalar",
        "fct-type": "function",
        "title": "scalar"
      },
      "index": {
        "description": "Convert raw number into unitless dimensioned quantity",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "scalar",
        "normalized": "a-\u003eDim a[]",
        "package": "units",
        "partial": "",
        "signature": "n-\u003eDim n[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:unity",
      "description": {
        "fct-descr": "\u003cp\u003eThe number 1, expressed as a unitless dimensioned quantity.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n `[]`",
        "fct-source": "src/Data-Dimensions.html#unity",
        "fct-type": "function",
        "title": "unity"
      },
      "index": {
        "description": "The number expressed as unitless dimensioned quantity",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "unity",
        "normalized": "Dim a[]",
        "package": "units",
        "partial": "",
        "signature": "Dim n[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/units/docs/Data-Dimensions.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eThe number 0, polymorphic in its dimension. Use of this will\n often require a type annotation.\n\u003c/p\u003e",
        "fct-module": "Data.Dimensions",
        "fct-package": "units",
        "fct-signature": "Dim n dimspec",
        "fct-source": "src/Data-Dimensions.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "The number polymorphic in its dimension Use of this will often require type annotation",
        "hierarchy": "Data Dimensions",
        "module": "Data.Dimensions",
        "name": "zero",
        "normalized": "",
        "package": "units",
        "partial": "",
        "signature": ""
      }
    }
  }
]