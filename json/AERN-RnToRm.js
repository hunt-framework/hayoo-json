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
        "word": "AERN-RnToRm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "DomEdges",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomEdges.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomEdges",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "DomEdges",
          "package": "AERN-RnToRm",
          "partial": "Dom Edges",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomEdges.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse some function approximation type and for each domain box\n    keep a structure of function approximations of this type indexed\n    by the hyper-edge structure.  For each hyper-edge of the domain,\n    the approximation has this edge as its domain.\n\u003c/p\u003e\u003cp\u003eE.g. for a 2D square domain there are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e one approximation for the whole square\n\u003c/li\u003e\u003cli\u003e four 1D approximations, one for each edge\n\u003c/li\u003e\u003cli\u003e eight 0D approximations, one for each endpoint of each edge \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "ERFnDomEdgesApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomEdges.html#ERFnDomEdgesApprox",
          "type": "data"
        },
        "index": {
          "description": "Use some function approximation type and for each domain box keep structure of function approximations of this type indexed by the hyper-edge structure For each hyper-edge of the domain the approximation has this edge as its domain E.g for square domain there are one approximation for the whole square four approximations one for each edge eight approximations one for each endpoint of each edge",
          "hierarchy": "Data Number ER RnToRm Approx DomEdges",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "ERFnDomEdgesApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Dom Edges Approx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomEdges.html#t:ERFnDomEdgesApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "ERFnDomEdgesApprox",
          "package": "AERN-RnToRm",
          "signature": "ERFnDomEdgesApprox",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomEdges.html#ERFnDomEdgesApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomEdges",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "ERFnDomEdgesApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Dom Edges Approx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomEdges.html#v:ERFnDomEdgesApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "erfnEdges",
          "package": "AERN-RnToRm",
          "signature": "Map (varid, PlusMinus) (ERFnDomEdgesApprox varid fa)",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomEdges.html#ERFnDomEdgesApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomEdges",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "erfnEdges",
          "normalized": "Map(a,PlusMinus)(ERFnDomEdgesApprox a b)",
          "package": "AERN-RnToRm",
          "partial": "Edges",
          "signature": "Map(varid,PlusMinus)(ERFnDomEdgesApprox varid fa)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomEdges.html#v:erfnEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "erfnMainVolume",
          "package": "AERN-RnToRm",
          "signature": "fa",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomEdges.html#ERFnDomEdgesApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomEdges",
          "module": "Data.Number.ER.RnToRm.Approx.DomEdges",
          "name": "erfnMainVolume",
          "package": "AERN-RnToRm",
          "partial": "Main Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomEdges.html#v:erfnMainVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatype translating enclosures from \u003ccode\u003e[-1,1]^n\u003c/code\u003e to any compact\n    interval in \u003ccode\u003eR^n\u003c/code\u003e with non-empty interior.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html",
          "type": "module"
        },
        "index": {
          "description": "Datatype translating enclosures from to any compact interval in with non-empty interior",
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "partial": "Dom Transl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe canonical translation of \n    any compact non-empty and non-singleton interval in \u003ccode\u003eR\u003c/code\u003e\n    to and from the unit interval \u003ccode\u003e[-1,1]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis structure holds the two coefficients for both\n    linear mappings.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "data"
        },
        "index": {
          "description": "The canonical translation of any compact non-empty and non-singleton interval in to and from the unit interval This structure holds the two coefficients for both linear mappings",
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "partial": "Dom Transl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#t:DomTransl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype translating enclosures from \u003ccode\u003e[-1,1]^n\u003c/code\u003e to any compact\n    interval in \u003ccode\u003eR^n\u003c/code\u003e with non-empty interior\n    using a bunch of linear maps, one for each dimension. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "ERFnDomTranslApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#ERFnDomTranslApprox",
          "type": "data"
        },
        "index": {
          "description": "Datatype translating enclosures from to any compact interval in with non-empty interior using bunch of linear maps one for each dimension",
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "ERFnDomTranslApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Dom Transl Approx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#t:ERFnDomTranslApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "signature": "DomTransl",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "DomTransl",
          "package": "AERN-RnToRm",
          "partial": "Dom Transl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:DomTransl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "ERFnDomTranslApprox",
          "package": "AERN-RnToRm",
          "signature": "ERFnDomTranslApprox",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#ERFnDomTranslApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "ERFnDomTranslApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Dom Transl Approx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:ERFnDomTranslApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe interval being mapped \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrDom",
          "package": "AERN-RnToRm",
          "signature": "ira",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "description": "the interval being mapped",
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrDom",
          "package": "AERN-RnToRm",
          "partial": "Dom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:dtrDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrFromUnitConst",
          "package": "AERN-RnToRm",
          "signature": "ira",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrFromUnitConst",
          "package": "AERN-RnToRm",
          "partial": "From Unit Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:dtrFromUnitConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrFromUnitSlope",
          "package": "AERN-RnToRm",
          "signature": "ira",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrFromUnitSlope",
          "package": "AERN-RnToRm",
          "partial": "From Unit Slope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:dtrFromUnitSlope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrToUnitConst",
          "package": "AERN-RnToRm",
          "signature": "ira",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrToUnitConst",
          "package": "AERN-RnToRm",
          "partial": "To Unit Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:dtrToUnitConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrToUnitSlope",
          "package": "AERN-RnToRm",
          "signature": "ira",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#DomTransl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "dtrToUnitSlope",
          "package": "AERN-RnToRm",
          "partial": "To Unit Slope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:dtrToUnitSlope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "erfnDomTransl",
          "package": "AERN-RnToRm",
          "signature": "dtrbox",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#ERFnDomTranslApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "erfnDomTransl",
          "package": "AERN-RnToRm",
          "partial": "Dom Transl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:erfnDomTransl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "erfnUnitApprox",
          "package": "AERN-RnToRm",
          "signature": "ufa",
          "source": "src/Data-Number-ER-RnToRm-Approx-DomTransl.html#ERFnDomTranslApprox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx DomTransl",
          "module": "Data.Number.ER.RnToRm.Approx.DomTransl",
          "name": "erfnUnitApprox",
          "package": "AERN-RnToRm",
          "partial": "Unit Approx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-DomTransl.html#v:erfnUnitApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArbitrary precision piece-wise something \n    (eg linear, polynomial, rational) enclosures \n    of functions \u003ccode\u003eR^n-\u003eR^m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type of approximation within segments is specified\n    by an instance of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe piece-wise construction defines another instance of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "PieceWise",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-PieceWise.html",
          "type": "module"
        },
        "index": {
          "description": "Arbitrary precision piece-wise something eg linear polynomial rational enclosures of functions The type of approximation within segments is specified by an instance of ERFnDomApprox The piece-wise construction defines another instance of ERFnDomApprox",
          "hierarchy": "Data Number ER RnToRm Approx PieceWise",
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "PieceWise",
          "package": "AERN-RnToRm",
          "partial": "Piece Wise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-PieceWise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary precision piece-wise something \n    (eg linear, polynomial, rational) enclosures \n    of functions \u003ccode\u003eR^n-\u003eR^m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type of approximation within segments is specified\n    by an instance of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe piece-wise construction defines another instance of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "ERFnPiecewise",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-PieceWise.html#ERFnPiecewise",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary precision piece-wise something eg linear polynomial rational enclosures of functions The type of approximation within segments is specified by an instance of ERFnDomApprox The piece-wise construction defines another instance of ERFnDomApprox",
          "hierarchy": "Data Number ER RnToRm Approx PieceWise",
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "ERFnPiecewise",
          "package": "AERN-RnToRm",
          "partial": "ERFn Piecewise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-PieceWise.html#t:ERFnPiecewise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "ERFnPiecewise",
          "package": "AERN-RnToRm",
          "signature": "ERFnPiecewise (BisectionTree box varid domra fa)",
          "source": "src/Data-Number-ER-RnToRm-Approx-PieceWise.html#ERFnPiecewise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx PieceWise",
          "module": "Data.Number.ER.RnToRm.Approx.PieceWise",
          "name": "ERFnPiecewise",
          "package": "AERN-RnToRm",
          "partial": "ERFn Piecewise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-PieceWise.html#v:ERFnPiecewise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLists of function approximations over the same domain. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "Tuple",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Lists of function approximations over the same domain",
          "hierarchy": "Data Number ER RnToRm Approx Tuple",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "Tuple",
          "package": "AERN-RnToRm",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tuple of function approximations allowing one to get from \n    functions \u003ccode\u003eR^n-\u003eR\u003c/code\u003e to a function \u003ccode\u003eR^n -\u003e R^m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "ERFnTuple",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx-Tuple.html#ERFnTuple",
          "type": "data"
        },
        "index": {
          "description": "tuple of function approximations allowing one to get from functions to function",
          "hierarchy": "Data Number ER RnToRm Approx Tuple",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "ERFnTuple",
          "package": "AERN-RnToRm",
          "partial": "ERFn Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-Tuple.html#t:ERFnTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "ERFnTuple",
          "package": "AERN-RnToRm",
          "signature": "ERFnTuple",
          "source": "src/Data-Number-ER-RnToRm-Approx-Tuple.html#ERFnTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx Tuple",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "ERFnTuple",
          "package": "AERN-RnToRm",
          "partial": "ERFn Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-Tuple.html#v:ERFnTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "erfnTuple",
          "package": "AERN-RnToRm",
          "signature": "[fa]",
          "source": "src/Data-Number-ER-RnToRm-Approx-Tuple.html#ERFnTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx Tuple",
          "module": "Data.Number.ER.RnToRm.Approx.Tuple",
          "name": "erfnTuple",
          "normalized": "[a]",
          "package": "AERN-RnToRm",
          "partial": "Tuple",
          "signature": "[fa]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx-Tuple.html#v:erfnTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApproximation of a real functions with rectangular domains.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the synonym FA.    \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "Approx",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx.html",
          "type": "module"
        },
        "index": {
          "description": "Approximation of real functions with rectangular domains To be imported qualified usually with the synonym FA",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "Approx",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that approximate first-order real functions\n    \u003ccode\u003eR^n -\u003e R^m\u003c/code\u003e using some type of graph enclosures.  The domains\n    of the functions can be neither specified nor investigated \n    by operations in this class.\n\u003c/p\u003e\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eERApprox\u003c/a\u003e\u003c/code\u003e so that we could perform point-wise\n    operations on the functions.\n\u003c/p\u003e\u003cp\u003eThis class is associated with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e two real number types (instances of \u003ccode\u003e\u003ca\u003eERIntApprox\u003c/a\u003e\u003c/code\u003e) for working with parts of the function's domain and range;\n\u003c/li\u003e\u003cli\u003e a type of boxes indexed by variables (instance of \u003ccode\u003e\u003ca\u003eDomainBox\u003c/a\u003e\u003c/code\u003e) for working with\n      multiple-dimension function domains.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#ERFnApprox",
          "type": "class"
        },
        "index": {
          "description": "class of types that approximate first-order real functions using some type of graph enclosures The domains of the functions can be neither specified nor investigated by operations in this class This class extends ERApprox so that we could perform point-wise operations on the functions This class is associated with two real number types instances of ERIntApprox for working with parts of the function domain and range type of boxes indexed by variables instance of DomainBox for working with multiple-dimension function domains",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Approx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#t:ERFnApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that approximate function enclosures of first-order real functions\n    \u003ccode\u003eR^n -\u003e R^m\u003c/code\u003e eg using a pair of function enclosures.  The domains\n    of the functions can be neither specified nor investigated \n    by operations in this class.\n\u003c/p\u003e\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eERApproxApprox\u003c/a\u003e\u003c/code\u003e so that we could perform point-wise\n    operations on the function enclosures.\n\u003c/p\u003e\u003cp\u003eThis class is associated with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a real number type (instance of \u003ccode\u003e\u003ca\u003eERIntApprox\u003c/a\u003e\u003c/code\u003e) for working with parts of the function's domain\n\u003c/li\u003e\u003cli\u003e a real number approximation approximation for approximating the function enclosure \n      range at an individual point or uniformly over many points;\n\u003c/li\u003e\u003cli\u003e a type of boxes indexed by variables (instance of \u003ccode\u003e\u003ca\u003eDomainBox\u003c/a\u003e\u003c/code\u003e) for working with\n      multiple-dimension function domains.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnApproxApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#ERFnApproxApprox",
          "type": "class"
        },
        "index": {
          "description": "class of types that approximate function enclosures of first-order real functions eg using pair of function enclosures The domains of the functions can be neither specified nor investigated by operations in this class This class extends ERApproxApprox so that we could perform point-wise operations on the function enclosures This class is associated with real number type instance of ERIntApprox for working with parts of the function domain real number approximation approximation for approximating the function enclosure range at an individual point or uniformly over many points type of boxes indexed by variables instance of DomainBox for working with multiple-dimension function domains",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnApproxApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Approx Approx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#t:ERFnApproxApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eERFnApprox\u003c/a\u003e\u003c/code\u003e by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e making the domain of the function enclosure available for inspection;\n\u003c/li\u003e\u003cli\u003e allowing the construction of basic function enclosures\n      where the domain has to be specified.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnDomApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#ERFnDomApprox",
          "type": "class"
        },
        "index": {
          "description": "This class extends ERFnApprox by making the domain of the function enclosure available for inspection allowing the construction of basic function enclosures where the domain has to be specified",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ERFnDomApprox",
          "package": "AERN-RnToRm",
          "partial": "ERFn Dom Approx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#t:ERFnDomApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a tuple of functions in a way \n        that does not treat the tuple elements uniformly.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "applyTupleFn",
          "package": "AERN-RnToRm",
          "signature": "([fa] -\u003e [fa]) -\u003e fa -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#applyTupleFn",
          "type": "method"
        },
        "index": {
          "description": "Modify tuple of functions in way that does not treat the tuple elements uniformly",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "applyTupleFn",
          "normalized": "([a]-\u003e[a])-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Tuple Fn",
          "signature": "([fa]-\u003e[fa])-\u003efa-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:applyTupleFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the domain into two halves, yoelding two function enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bisect",
          "package": "AERN-RnToRm",
          "signature": "bisect",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#bisect",
          "type": "method"
        },
        "index": {
          "description": "Split the domain into two halves yoelding two function enclosures",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bisect",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:bisect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively perform a number of bisections and then\n    glue the bits back together.  \n\u003c/p\u003e\u003cp\u003eThis way we can ensure that\n    a piece-wise enclosure has a partition that goes\n    to at least the given depth. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bisectUnbisectDepth",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e fa-\u003e fa",
          "type": "function"
        },
        "index": {
          "description": "Recursively perform number of bisections and then glue the bits back together This way we can ensure that piece-wise enclosure has partition that goes to at least the given depth",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bisectUnbisectDepth",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Unbisect Depth",
          "signature": "Int-\u003efa-\u003efa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:bisectUnbisectDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function enclosure with no information about the function's values.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bottomApprox",
          "package": "AERN-RnToRm",
          "signature": "bottomApprox",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#bottomApprox",
          "type": "method"
        },
        "index": {
          "description": "function enclosure with no information about the function values",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "bottomApprox",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:bottomApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck internal consistency and report problem if any. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "check",
          "package": "AERN-RnToRm",
          "signature": "check",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#check",
          "type": "method"
        },
        "index": {
          "description": "Check internal consistency and report problem if any",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "check",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple and limited composition of functions applicable\n        only when the range-defining function is non-decreasing. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "composeNonDecreasing",
          "package": "AERN-RnToRm",
          "signature": "composeNonDecreasing",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#composeNonDecreasing",
          "type": "method"
        },
        "index": {
          "description": "simple and limited composition of functions applicable only when the range-defining function is non-decreasing",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "composeNonDecreasing",
          "package": "AERN-RnToRm",
          "partial": "Non Decreasing",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:composeNonDecreasing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple and limited composition of functions applicable\n        only when the range-defining function is non-increasing. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "composeNonIncreasing",
          "package": "AERN-RnToRm",
          "signature": "composeNonIncreasing",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#composeNonIncreasing",
          "type": "method"
        },
        "index": {
          "description": "simple and limited composition of functions applicable only when the range-defining function is non-increasing",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "composeNonIncreasing",
          "package": "AERN-RnToRm",
          "partial": "Non Increasing",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:composeNonIncreasing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a constant enclosure for a tuple of functions.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "const",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e [ranra] -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#const",
          "type": "method"
        },
        "index": {
          "description": "Construct constant enclosure for tuple of functions",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "const",
          "normalized": "a-\u003e[b]-\u003ec",
          "package": "AERN-RnToRm",
          "signature": "box-\u003e[ranra]-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the domain of the function enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "dom",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e box",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#dom",
          "type": "method"
        },
        "index": {
          "description": "Return the domain of the function enclosure",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "dom",
          "normalized": "a-\u003eb",
          "package": "AERN-RnToRm",
          "signature": "fa-\u003ebox",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "domra2ranra",
          "package": "AERN-RnToRm",
          "signature": "domra2ranra",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#domra2ranra",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "domra2ranra",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:domra2ranra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the function at the given point.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "eval",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e fa -\u003e [ranra]",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#eval",
          "type": "method"
        },
        "index": {
          "description": "Evaluate the function at the given point",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "eval",
          "normalized": "a-\u003eb-\u003e[c]",
          "package": "AERN-RnToRm",
          "signature": "box-\u003efa-\u003e[ranra]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "evalAA",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e fa -\u003e [ranraa]",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#evalAA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "evalAA",
          "normalized": "a-\u003eb-\u003e[c]",
          "package": "AERN-RnToRm",
          "partial": "AA",
          "signature": "box-\u003efa-\u003e[ranraa]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:evalAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a close upper bound of the precision of the range \n        at the best approximated point in the domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getBestPrecision",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Precision",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getBestPrecision",
          "type": "method"
        },
        "index": {
          "description": "Give close upper bound of the precision of the range at the best approximated point in the domain",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getBestPrecision",
          "normalized": "a-\u003ePrecision",
          "package": "AERN-RnToRm",
          "partial": "Best Precision",
          "signature": "fa-\u003ePrecision",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getBestPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the internal degree of quality (usually polynomial degree) \n        of the approximation. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getDegree",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getDegree",
          "type": "method"
        },
        "index": {
          "description": "Get the internal degree of quality usually polynomial degree of the approximation",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getDegree",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Degree",
          "signature": "fa-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current uppend bound on the degree associated \n        with this function approximation. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getMaxDegree",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getMaxDegree",
          "type": "method"
        },
        "index": {
          "description": "Get the current uppend bound on the degree associated with this function approximation",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getMaxDegree",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Max Degree",
          "signature": "fa-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getMaxDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current uppend bound on the size associated \n        with this function approximation. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getMaxSize",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getMaxSize",
          "type": "method"
        },
        "index": {
          "description": "Get the current uppend bound on the size associated with this function approximation",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getMaxSize",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Max Size",
          "signature": "fa-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind some upper and lower bounds of the function over \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getRangeApprox",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e ranra",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getRangeApprox",
          "type": "method"
        },
        "index": {
          "description": "Find some upper and lower bounds of the function over",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getRangeApprox",
          "normalized": "a-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Range Approx",
          "signature": "fa-\u003eranra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getRangeApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the internal size of the approximation \n        (usually number of polynomial terms). \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getSize",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getSize",
          "type": "method"
        },
        "index": {
          "description": "Get the internal size of the approximation usually number of polynomial terms",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getSize",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Size",
          "signature": "fa-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveal how many functions are bundled together.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getTupleSize",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getTupleSize",
          "type": "method"
        },
        "index": {
          "description": "Reveal how many functions are bundled together",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getTupleSize",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Tuple Size",
          "signature": "fa-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getTupleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all variables that are actually used in the approximation.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getVariables",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e [varid]",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#getVariables",
          "type": "method"
        },
        "index": {
          "description": "List all variables that are actually used in the approximation",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "getVariables",
          "normalized": "a-\u003e[b]",
          "package": "AERN-RnToRm",
          "partial": "Variables",
          "signature": "fa-\u003e[varid]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:getVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely integrate a \u003ccode\u003eR^n -\u003e R^m\u003c/code\u003e function enclosure\n        with some initial condition (origin and function at origin).\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "signature": "integrate",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#integrate",
          "type": "method"
        },
        "index": {
          "description": "Safely integrate function enclosure with some initial condition origin and function at origin",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely integrate a \u003ccode\u003eR^n -\u003e R^m\u003c/code\u003e function enclosure\n        intersecting it with a prior enclosure for the result.\n\u003c/p\u003e\u003cp\u003eThe prior enclosure could contains one of more initial value.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateMeasureImprovement",
          "package": "AERN-RnToRm",
          "signature": "integrateMeasureImprovement",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#integrateMeasureImprovement",
          "type": "method"
        },
        "index": {
          "description": "Safely integrate function enclosure intersecting it with prior enclosure for the result The prior enclosure could contains one of more initial value",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateMeasureImprovement",
          "package": "AERN-RnToRm",
          "partial": "Measure Improvement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:integrateMeasureImprovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely integrate a \u003ccode\u003eR -\u003e R^m\u003c/code\u003e function enclosure\n        intersecting it with a prior enclosure for the result.\n\u003c/p\u003e\u003cp\u003eThe prior enclosure could contains one of more initial value.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateMeasureImprovementUnary",
          "package": "AERN-RnToRm",
          "signature": "integrateMeasureImprovementUnary",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#integrateMeasureImprovementUnary",
          "type": "method"
        },
        "index": {
          "description": "Safely integrate function enclosure intersecting it with prior enclosure for the result The prior enclosure could contains one of more initial value",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateMeasureImprovementUnary",
          "package": "AERN-RnToRm",
          "partial": "Measure Improvement Unary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:integrateMeasureImprovementUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely integrate a \u003ccode\u003eR -\u003e R^m\u003c/code\u003e function enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateUnary",
          "package": "AERN-RnToRm",
          "signature": "integrateUnary",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#integrateUnary",
          "type": "method"
        },
        "index": {
          "description": "Safely integrate function enclosure",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "integrateUnary",
          "package": "AERN-RnToRm",
          "partial": "Unary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:integrateUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersect two enclosures and measure the global improvement as one number.\n\u003c/p\u003e\u003cp\u003e(Use \u003ccode\u003e\u003ca\u003eintersectMeasureImprovement\u003c/a\u003e\u003c/code\u003e defined in module \u003ca\u003eData.Number.ER.Real.Approx\u003c/a\u003e \n         to measure the improvement using a function enclosure.) \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "intersectMeasureImprovement",
          "package": "AERN-RnToRm",
          "signature": "intersectMeasureImprovement",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#intersectMeasureImprovement",
          "type": "method"
        },
        "index": {
          "description": "Intersect two enclosures and measure the global improvement as one number Use intersectMeasureImprovement defined in module Data.Number.ER.Real.Approx to measure the improvement using function enclosure",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "intersectMeasureImprovement",
          "package": "AERN-RnToRm",
          "partial": "Measure Improvement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:intersectMeasureImprovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that a function approximation is consistent with\n   a real function that is meant to compute the same function.\n\u003c/p\u003e\u003cp\u003eThe result of this function is the list of points in which \n   the consistency check failed.  The result of the operation\n   is also included both for the real number version and the\n   function approximation version.\n\u003c/p\u003e",
          "module": "[\"Data.Number.ER.RnToRm.Approx\",\"Data.Number.ER.RnToRm.UnitDom.Approx\"]",
          "name": "keyPointsConsistencyCheck",
          "package": "AERN-RnToRm",
          "signature": "(box -\u003e ranra)-\u003e fa-\u003e [(box, ranra, ranra)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:keyPointsConsistencyCheck\",\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:keyPointsConsistencyCheck\"]"
        },
        "index": {
          "description": "Check that function approximation is consistent with real function that is meant to compute the same function The result of this function is the list of points in which the consistency check failed The result of the operation is also included both for the real number version and the function approximation version",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "keyPointsConsistencyCheck",
          "normalized": "(a-\u003eb)-\u003ec-\u003e[(a,b,b)]",
          "package": "AERN-RnToRm",
          "partial": "Points Consistency Check",
          "signature": "(box-\u003eranra)-\u003efa-\u003e[(box,ranra,ranra)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:keyPointsConsistencyCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that a pointwise operation previously performed on function approximations is \n   consistent with the same operation performed on\n   selected points in the domain of these functions.\n   The selected points are the centres of all faces of all dimensions,\n   which includes the corners.\n\u003c/p\u003e\u003cp\u003eThe result of this function is the list of points in which \n   the consistency check failed.  The result of the operation\n   is also included both for the real number version and the\n   function approximation version.\n\u003c/p\u003e",
          "module": "[\"Data.Number.ER.RnToRm.Approx\",\"Data.Number.ER.RnToRm.UnitDom.Approx\"]",
          "name": "keyPointsPointwiseConsistencyCheck",
          "package": "AERN-RnToRm",
          "signature": "([ranra] -\u003e ranra)-\u003e [fa]-\u003e fa-\u003e [(box, ranra, ranra)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:keyPointsPointwiseConsistencyCheck\",\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:keyPointsPointwiseConsistencyCheck\"]"
        },
        "index": {
          "description": "Check that pointwise operation previously performed on function approximations is consistent with the same operation performed on selected points in the domain of these functions The selected points are the centres of all faces of all dimensions which includes the corners The result of this function is the list of points in which the consistency check failed The result of the operation is also included both for the real number version and the function approximation version",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "keyPointsPointwiseConsistencyCheck",
          "normalized": "([a]-\u003ea)-\u003e[b]-\u003eb-\u003e[(c,a,a)]",
          "package": "AERN-RnToRm",
          "partial": "Points Pointwise Consistency Check",
          "signature": "([ranra]-\u003eranra)-\u003e[fa]-\u003efa-\u003e[(box,ranra,ranra)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:keyPointsPointwiseConsistencyCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFix some variables in the function to the given exact values.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "partialEval",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e fa -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#partialEval",
          "type": "method"
        },
        "index": {
          "description": "Fix some variables in the function to the given exact values",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "partialEval",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Eval",
          "signature": "box-\u003efa-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:partialEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersect one approximation by another but only on a box within its domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "partialIntersect",
          "package": "AERN-RnToRm",
          "signature": "partialIntersect",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#partialIntersect",
          "type": "method"
        },
        "index": {
          "description": "Intersect one approximation by another but only on box within its domain",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "partialIntersect",
          "package": "AERN-RnToRm",
          "partial": "Intersect",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:partialIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the exact enclosure for a projection function\n        (ie a variable).\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "proj",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e varid -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#proj",
          "type": "method"
        },
        "index": {
          "description": "Construct the exact enclosure for projection function ie variable",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "proj",
          "normalized": "a-\u003eb-\u003ec",
          "package": "AERN-RnToRm",
          "signature": "box-\u003evarid-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:proj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ranra2domra",
          "package": "AERN-RnToRm",
          "signature": "ranra2domra",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#ranra2domra",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "ranra2domra",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:ranra2domra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a function approximation by a real number approximation.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "scale",
          "package": "AERN-RnToRm",
          "signature": "ranra -\u003e fa -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#scale",
          "type": "method"
        },
        "index": {
          "description": "Multiply function approximation by real number approximation",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "scale",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AERN-RnToRm",
          "signature": "ranra-\u003efa-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an upper bound on the degree of this function approximation.\n\u003c/p\u003e\u003cp\u003eThis reduces the degree immediately if necessary and also\n        affects all operations performed with this value later.\n\u003c/p\u003e\u003cp\u003eMay also set the maximum size of the approximations to a default\n        based on the degree and the dimension of this enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "setMaxDegree",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e fa -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#setMaxDegree",
          "type": "method"
        },
        "index": {
          "description": "Set an upper bound on the degree of this function approximation This reduces the degree immediately if necessary and also affects all operations performed with this value later May also set the maximum size of the approximations to default based on the degree and the dimension of this enclosure",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "setMaxDegree",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Max Degree",
          "signature": "Int-\u003efa-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:setMaxDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an upper bound on the size of this function approximation.\n\u003c/p\u003e\u003cp\u003eThis reduces the size immediately if necessary and also\n        affects all operations performed with this value later.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "setMaxSize",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e fa -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#setMaxSize",
          "type": "method"
        },
        "index": {
          "description": "Set an upper bound on the size of this function approximation This reduces the size immediately if necessary and also affects all operations performed with this value later",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "setMaxSize",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Max Size",
          "signature": "Int-\u003efa-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:setMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine several functions with the same domain into one \u003cem\u003etuple function\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "tuple",
          "package": "AERN-RnToRm",
          "signature": "[fa] -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#tuple",
          "type": "method"
        },
        "index": {
          "description": "Combine several functions with the same domain into one tuple function",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "tuple",
          "normalized": "[a]-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "[fa]-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge function enclosures with neighbouring domains.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "unBisect",
          "package": "AERN-RnToRm",
          "signature": "unBisect",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#unBisect",
          "type": "method"
        },
        "index": {
          "description": "Merge function enclosures with neighbouring domains",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "unBisect",
          "package": "AERN-RnToRm",
          "partial": "Bisect",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:unBisect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind close upper and lower bounds of the volume of the entire enclosure.\n        A negative volume means that the enclosure is certainly inconsistent.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "volume",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e ranra",
          "source": "src/Data-Number-ER-RnToRm-Approx.html#volume",
          "type": "method"
        },
        "index": {
          "description": "Find close upper and lower bounds of the volume of the entire enclosure negative volume means that the enclosure is certainly inconsistent",
          "hierarchy": "Data Number ER RnToRm Approx",
          "module": "Data.Number.ER.RnToRm.Approx",
          "name": "volume",
          "normalized": "a-\u003eb",
          "package": "AERN-RnToRm",
          "signature": "fa-\u003eranra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-Approx.html#v:volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo be imported qualified, usually with prefix BTINTEG.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Integration.html",
          "type": "module"
        },
        "index": {
          "description": "To be imported qualified usually with prefix BTINTEG",
          "hierarchy": "Data Number ER RnToRm BisectionTree Integration",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "partial": "Integration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Integration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a bunch of bisection trees over the same domain \n    by \u003ca\u003eintegrating\u003c/a\u003e them in a very abstract sense.  \n    The trees are unified in their splitting patterns in the process.\n    By supplying certain parameters, this function can in fact\n    perform numerical integration of piece-wise polynomial functions.\n\u003c/p\u003e\u003cp\u003eIt can be also viewed as a \u003ca\u003ezipping+folding\u003c/a\u003e operator over bisection trees that\n    generates another bunch of bisection trees, synchronously traversing the original trees\n    from a certain point on a selected axis outwards in both directions, \n    carrying some data along.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "zipFromOrigin",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v1-\u003e ValueCombiner box varid d v1-\u003e EffortIndex-\u003e varid-\u003e d-\u003e Maybe box-\u003e (Maybe valPass -\u003e Maybe valPass -\u003e [BisectionTree box varid d v1] -\u003e [BisectionTree box varid d v2])-\u003e (EffortIndex -\u003e Depth -\u003e box -\u003e [v1] -\u003e [v2] -\u003e Bool)-\u003e (EffortIndex -\u003e Depth -\u003e box -\u003e [v1] -\u003e (valPass, [v2], valPass))-\u003e (EffortIndex -\u003e Depth -\u003e box -\u003e valPass -\u003e [v1] -\u003e ([v2], valPass))-\u003e (EffortIndex -\u003e Depth -\u003e box -\u003e [v1] -\u003e valPass -\u003e (valPass, [v2]))-\u003e [BisectionTree box varid d v1]-\u003e [BisectionTree box varid d v2]",
          "type": "function"
        },
        "index": {
          "description": "Transform bunch of bisection trees over the same domain by integrating them in very abstract sense The trees are unified in their splitting patterns in the process By supplying certain parameters this function can in fact perform numerical integration of piece-wise polynomial functions It can be also viewed as zipping folding operator over bisection trees that generates another bunch of bisection trees synchronously traversing the original trees from certain point on selected axis outwards in both directions carrying some data along",
          "hierarchy": "Data Number ER RnToRm BisectionTree Integration",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "zipFromOrigin",
          "normalized": "ValueSplitter a b c d-\u003eValueCombiner a b c d-\u003eEffortIndex-\u003eb-\u003ec-\u003eMaybe a-\u003e(Maybe e-\u003eMaybe e-\u003e[BisectionTree a b c d]-\u003e[BisectionTree a b c d])-\u003e(EffortIndex-\u003eDepth-\u003ea-\u003e[d]-\u003e[d]-\u003eBool)-\u003e(EffortIndex-\u003eDepth-\u003ea-\u003e[d]-\u003e(e,[d],e))-\u003e(EffortIndex-\u003eDepth-\u003ea-\u003ee-\u003e[d]-\u003e([d],e))-\u003e(EffortIndex-\u003eDepth-\u003ea-\u003e[d]-\u003ee-\u003e(e,[d]))-\u003e[BisectionTree a b c d]-\u003e[BisectionTree a b c d]",
          "package": "AERN-RnToRm",
          "partial": "From Origin",
          "signature": "ValueSplitter box varid d v-\u003eValueCombiner box varid d v-\u003eEffortIndex-\u003evarid-\u003ed-\u003eMaybe box-\u003e(Maybe valPass-\u003eMaybe valPass-\u003e[BisectionTree box varid d v]-\u003e[BisectionTree box varid d v])-\u003e(EffortIndex-\u003eDepth-\u003ebox-\u003e[v]-\u003e[v]-\u003eBool)-\u003e(EffortIndex-\u003eDepth-\u003ebox-\u003e[v]-\u003e(valPass,[v],valPass))-\u003e(EffortIndex-\u003eDepth-\u003ebox-\u003evalPass-\u003e[v]-\u003e([v],valPass))-\u003e(EffortIndex-\u003eDepth-\u003ebox-\u003e[v]-\u003evalPass-\u003e(valPass,[v]))-\u003e[BisectionTree box varid d v]-\u003e[BisectionTree box varid d v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Integration.html#v:zipFromOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a list of bisection trees in synchrony but do something\n    else inside and not inside a given subdomain.\n\u003c/p\u003e\u003cp\u003eFurther splitting at default points will be done up to the given depth\n    in an attempt to separate the subdomain as well as possible.\n\u003c/p\u003e\u003cp\u003eIf the subdomain is not properly isolated by the splitting at the\n    maximum depth, splits are made at irregular points to ensure full isolation\n    of the subdomain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "zipOnSubdomain",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v1-\u003e EffortIndex-\u003e Depth-\u003e box-\u003e (box -\u003e [v1] -\u003e [v2])-\u003e (box -\u003e [v1] -\u003e [v2])-\u003e (box -\u003e [v1] -\u003e [v2])-\u003e [BisectionTree box varid d v1]-\u003e [BisectionTree box varid d v2]",
          "type": "function"
        },
        "index": {
          "description": "Zip list of bisection trees in synchrony but do something else inside and not inside given subdomain Further splitting at default points will be done up to the given depth in an attempt to separate the subdomain as well as possible If the subdomain is not properly isolated by the splitting at the maximum depth splits are made at irregular points to ensure full isolation of the subdomain",
          "hierarchy": "Data Number ER RnToRm BisectionTree Integration",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Integration",
          "name": "zipOnSubdomain",
          "normalized": "ValueSplitter a b c d-\u003eEffortIndex-\u003eDepth-\u003ea-\u003e(a-\u003e[d]-\u003e[d])-\u003e(a-\u003e[d]-\u003e[d])-\u003e(a-\u003e[d]-\u003e[d])-\u003e[BisectionTree a b c d]-\u003e[BisectionTree a b c d]",
          "package": "AERN-RnToRm",
          "partial": "On Subdomain",
          "signature": "ValueSplitter box varid d v-\u003eEffortIndex-\u003eDepth-\u003ebox-\u003e(box-\u003e[v]-\u003e[v])-\u003e(box-\u003e[v]-\u003e[v])-\u003e(box-\u003e[v]-\u003e[v])-\u003e[BisectionTree box varid d v]-\u003e[BisectionTree box varid d v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Integration.html#v:zipOnSubdomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for addressing and modifying leaves of \n    binary bisection trees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "Path",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for addressing and modifying leaves of binary bisection trees",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "Path",
          "package": "AERN-RnToRm",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path in a binary tree.\n    It is used mainly in connection with \u003ccode\u003eBisectionTree.BisectionTree\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BisecTreePath",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#BisecTreePath",
          "type": "data"
        },
        "index": {
          "description": "path in binary tree It is used mainly in connection with BisectionTree.BisectionTree",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BisecTreePath",
          "package": "AERN-RnToRm",
          "partial": "Bisec Tree Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#t:BisecTreePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a binary tree with a hole that\n    can be efficiently filled.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZipper",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#FnZipper",
          "type": "data"
        },
        "index": {
          "description": "representation of binary tree with hole that can be efficiently filled",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZipper",
          "package": "AERN-RnToRm",
          "partial": "Fn Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#t:FnZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_H",
          "package": "AERN-RnToRm",
          "signature": "BTP_H",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#BisecTreePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_H",
          "package": "AERN-RnToRm",
          "partial": "BTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:BTP_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_L",
          "package": "AERN-RnToRm",
          "signature": "BTP_L BisecTreePath",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#BisecTreePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_L",
          "package": "AERN-RnToRm",
          "partial": "BTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:BTP_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_R",
          "package": "AERN-RnToRm",
          "signature": "BTP_R BisecTreePath",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#BisecTreePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "BTP_R",
          "package": "AERN-RnToRm",
          "partial": "BTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:BTP_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_H",
          "package": "AERN-RnToRm",
          "signature": "FnZ_H f",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#FnZipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_H",
          "package": "AERN-RnToRm",
          "partial": "Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:FnZ_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_L",
          "package": "AERN-RnToRm",
          "signature": "FnZ_L (FnZipper f) f",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#FnZipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_L",
          "package": "AERN-RnToRm",
          "partial": "Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:FnZ_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_R",
          "package": "AERN-RnToRm",
          "signature": "FnZ_R f (FnZipper f)",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#FnZipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "FnZ_R",
          "package": "AERN-RnToRm",
          "partial": "Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:FnZ_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a subdomain of a function according to a bisection path.\n    Return the restrited function as well as a zipper that allows\n    an efficient modification of the function on the looked up\n    subdomain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "lookupSubdomain",
          "package": "AERN-RnToRm",
          "signature": "fa -\u003e BisecTreePath -\u003e (fa, FnZipper fa)",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree-Path.html#lookupSubdomain",
          "type": "function"
        },
        "index": {
          "description": "Lookup subdomain of function according to bisection path Return the restrited function as well as zipper that allows an efficient modification of the function on the looked up subdomain",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "lookupSubdomain",
          "normalized": "a-\u003eBisecTreePath-\u003e(a,FnZipper a)",
          "package": "AERN-RnToRm",
          "partial": "Subdomain",
          "signature": "fa-\u003eBisecTreePath-\u003e(fa,FnZipper fa)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:lookupSubdomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming that bisection happens at default points as defined by\n    \u003ccode\u003e\u003ca\u003ebisectDomain\u003c/a\u003e\u003c/code\u003e and starts from the given root interval.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "path2dom",
          "package": "AERN-RnToRm",
          "signature": "ira-\u003e BisecTreePath-\u003e ira",
          "type": "function"
        },
        "index": {
          "description": "Assuming that bisection happens at default points as defined by bisectDomain and starts from the given root interval",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "path2dom",
          "normalized": "a-\u003eBisecTreePath-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "ira-\u003eBisecTreePath-\u003eira",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:path2dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a function in its subdomain as expressed by\n    the zipper.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "updateFnZ",
          "package": "AERN-RnToRm",
          "signature": "FnZipper fa-\u003e fa-\u003e fa",
          "type": "function"
        },
        "index": {
          "description": "Modify function in its subdomain as expressed by the zipper",
          "hierarchy": "Data Number ER RnToRm BisectionTree Path",
          "module": "Data.Number.ER.RnToRm.BisectionTree.Path",
          "name": "updateFnZ",
          "normalized": "FnZipper a-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Fn",
          "signature": "FnZipper fa-\u003efa-\u003efa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree-Path.html#v:updateFnZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a representation for recursive bisections of \u003ccode\u003eR^n\u003c/code\u003e\n    by hyperplanes, each of which is perpendicular to a base axis.\n\u003c/p\u003e\u003cp\u003eArbitrary data can be associated with the sections of a partition.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with prefix BISTR.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "BisectionTree",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html",
          "type": "module"
        },
        "index": {
          "description": "Defines representation for recursive bisections of by hyperplanes each of which is perpendicular to base axis Arbitrary data can be associated with the sections of partition To be imported qualified usually with prefix BISTR",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "BisectionTree",
          "package": "AERN-RnToRm",
          "partial": "Bisection Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The root of the tree often represents the whole \u003ccode\u003eR^n\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Each node splits the parent's space into two using\n      a specified variable (ie direction) and an optional splitting point.\n\u003c/li\u003e\u003cli\u003e By default, a split is taken at the point defined by the method \u003ccode\u003eRA.bisect\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "BisectionTree",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "data"
        },
        "index": {
          "description": "The root of the tree often represents the whole Each node splits the parent space into two using specified variable ie direction and an optional splitting point By default split is taken at the point defined by the method RA.bisect",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "BisectionTree",
          "package": "AERN-RnToRm",
          "partial": "Bisection Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#t:BisectionTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Depth",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#Depth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Depth",
          "package": "AERN-RnToRm",
          "partial": "Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#t:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "ValueCombiner",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#ValueCombiner",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "ValueCombiner",
          "package": "AERN-RnToRm",
          "partial": "Value Combiner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#t:ValueCombiner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue splitter function - parameters are: \n    depth, domain of value, value, variable to split by, \n    point to split at; returns the two split values\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "ValueSplitter",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#ValueSplitter",
          "type": "type"
        },
        "index": {
          "description": "value splitter function parameters are depth domain of value value variable to split by point to split at returns the two split values",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "ValueSplitter",
          "package": "AERN-RnToRm",
          "partial": "Value Splitter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#t:ValueSplitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Leaf",
          "package": "AERN-RnToRm",
          "signature": "Leaf",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Leaf",
          "package": "AERN-RnToRm",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Node",
          "package": "AERN-RnToRm",
          "signature": "Node",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "Node",
          "package": "AERN-RnToRm",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDepth",
          "package": "AERN-RnToRm",
          "signature": "Depth",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDepth",
          "package": "AERN-RnToRm",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirection to split in\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDir",
          "package": "AERN-RnToRm",
          "signature": "varid",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "direction to split in",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDir",
          "package": "AERN-RnToRm",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edomain\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDom",
          "package": "AERN-RnToRm",
          "signature": "box",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "domain",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrDom",
          "package": "AERN-RnToRm",
          "partial": "Dom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe half towards +Infty in split dir\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrHI",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid d v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "the half towards Infty in split dir",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrHI",
          "package": "AERN-RnToRm",
          "partial": "HI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrHI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe half towards -Infty in split dir\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrLO",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid d v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "the half towards Infty in split dir",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrLO",
          "package": "AERN-RnToRm",
          "partial": "LO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrLO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoint that the split is at\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrPt",
          "package": "AERN-RnToRm",
          "signature": "d",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "point that the split is at",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrPt",
          "package": "AERN-RnToRm",
          "partial": "Pt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue estimate\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrVal",
          "package": "AERN-RnToRm",
          "signature": "v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#BisectionTree",
          "type": "function"
        },
        "index": {
          "description": "value estimate",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "bistrVal",
          "package": "AERN-RnToRm",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:bistrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all values in leafs (except those within some CE subtree)\n    as a list (from the leftmost to the rightmost)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "collectDomValues",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid d v -\u003e [(box, v)]",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#collectDomValues",
          "type": "function"
        },
        "index": {
          "description": "return all values in leafs except those within some CE subtree as list from the leftmost to the rightmost",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "collectDomValues",
          "normalized": "BisectionTree a b c d-\u003e[(a,d)]",
          "package": "AERN-RnToRm",
          "partial": "Dom Values",
          "signature": "BisectionTree box varid d v-\u003e[(box,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:collectDomValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all values in leafs (except those within some CE subtree)\n    as a list (from the leftmost to the rightmost)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "collectValues",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid b a -\u003e [a]",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#collectValues",
          "type": "function"
        },
        "index": {
          "description": "return all values in leafs except those within some CE subtree as list from the leftmost to the rightmost",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "collectValues",
          "normalized": "BisectionTree a b c d-\u003e[d]",
          "package": "AERN-RnToRm",
          "partial": "Values",
          "signature": "BisectionTree box varid b a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:collectValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two bisection trees using a given value combining function.\n    Where necessary, leaves are split so that the resulting tree's structure\n    is the union of the two argument tree structures.  Such splitting of\n    values in leaves is performed by the provided functions.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "combineWith",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v1-\u003e ValueSplitter box varid d v2-\u003e (box -\u003e v1 -\u003e v2 -\u003e (Maybe res, aux))-\u003e EffortIndex-\u003e BisectionTree box varid d v1-\u003e BisectionTree box varid d v2-\u003e (Maybe (BisectionTree box varid d res), [aux])",
          "type": "function"
        },
        "index": {
          "description": "Combine two bisection trees using given value combining function Where necessary leaves are split so that the resulting tree structure is the union of the two argument tree structures Such splitting of values in leaves is performed by the provided functions",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "combineWith",
          "normalized": "ValueSplitter a b c d-\u003eValueSplitter a b c d-\u003e(a-\u003ed-\u003ed-\u003e(Maybe e,f))-\u003eEffortIndex-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d-\u003e(Maybe(BisectionTree a b c e),[f])",
          "package": "AERN-RnToRm",
          "partial": "With",
          "signature": "ValueSplitter box varid d v-\u003eValueSplitter box varid d v-\u003e(box-\u003ev-\u003ev-\u003e(Maybe res,aux))-\u003eEffortIndex-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v-\u003e(Maybe(BisectionTree box varid d res),[aux])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:combineWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinear ordering on bisection trees\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "compare",
          "package": "AERN-RnToRm",
          "signature": "(d -\u003e d -\u003e Ordering) -\u003e (v -\u003e v -\u003e Ordering) -\u003e BisectionTree box varid d v -\u003e BisectionTree box varid d v -\u003e Ordering",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#compare",
          "type": "function"
        },
        "index": {
          "description": "linear ordering on bisection trees",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "compare",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(b-\u003eb-\u003eOrdering)-\u003eBisectionTree c d a b-\u003eBisectionTree c d a b-\u003eOrdering",
          "package": "AERN-RnToRm",
          "signature": "(d-\u003ed-\u003eOrdering)-\u003e(v-\u003ev-\u003eOrdering)-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "const",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e v -\u003e BisectionTree box varid d v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "const",
          "normalized": "a-\u003eb-\u003eBisectionTree a c d b",
          "package": "AERN-RnToRm",
          "signature": "box-\u003ev-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a given action on all branches of a bisection tree, left to right.\n    (optionally now going below the given depth)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doBistr",
          "package": "AERN-RnToRm",
          "signature": "(box -\u003e v -\u003e IO ()) -\u003e Maybe Int -\u003e BisectionTree box varid d v -\u003e IO ()",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#doBistr",
          "type": "function"
        },
        "index": {
          "description": "Perform given action on all branches of bisection tree left to right optionally now going below the given depth",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doBistr",
          "normalized": "(a-\u003eb-\u003eIO())-\u003eMaybe Int-\u003eBisectionTree a c d b-\u003eIO()",
          "package": "AERN-RnToRm",
          "partial": "Bistr",
          "signature": "(box-\u003ev-\u003eIO())-\u003eMaybe Int-\u003eBisectionTree box varid d v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:doBistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a given action on all branches of a bisection tree, left to right.\n    (optionally now going below the given depth)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doMap",
          "package": "AERN-RnToRm",
          "signature": "(Depth -\u003e box -\u003e v -\u003e IO v) -\u003e Maybe Int -\u003e BisectionTree box varid d v -\u003e IO (BisectionTree box varid d v)",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#doMap",
          "type": "function"
        },
        "index": {
          "description": "Perform given action on all branches of bisection tree left to right optionally now going below the given depth",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doMap",
          "normalized": "(Depth-\u003ea-\u003eb-\u003eIO b)-\u003eMaybe Int-\u003eBisectionTree a c d b-\u003eIO(BisectionTree a c d b)",
          "package": "AERN-RnToRm",
          "partial": "Map",
          "signature": "(Depth-\u003ebox-\u003ev-\u003eIO v)-\u003eMaybe Int-\u003eBisectionTree box varid d v-\u003eIO(BisectionTree box varid d v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:doMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a given action on all branches of a bisection tree, left to right\n    with the option of further branching the tree.\n    (optionally now going below the given depth)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doMapLeaves",
          "package": "AERN-RnToRm",
          "signature": "(BisectionTree box varid d v -\u003e IO (BisectionTree box varid d v)) -\u003e Maybe Int -\u003e BisectionTree box varid d v -\u003e IO (BisectionTree box varid d v)",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#doMapLeaves",
          "type": "function"
        },
        "index": {
          "description": "Perform given action on all branches of bisection tree left to right with the option of further branching the tree optionally now going below the given depth",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "doMapLeaves",
          "normalized": "(BisectionTree a b c d-\u003eIO(BisectionTree a b c d))-\u003eMaybe Int-\u003eBisectionTree a b c d-\u003eIO(BisectionTree a b c d)",
          "package": "AERN-RnToRm",
          "partial": "Map Leaves",
          "signature": "(BisectionTree box varid d v-\u003eIO(BisectionTree box varid d v))-\u003eMaybe Int-\u003eBisectionTree box varid d v-\u003eIO(BisectionTree box varid d v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:doMapLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "isLeaf",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid d v -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#isLeaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "isLeaf",
          "normalized": "BisectionTree a b c d-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Leaf",
          "signature": "BisectionTree box varid d v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elookup all maximal subtrees whose domain intersect the given rectangle\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "lookupSubtreeDoms",
          "package": "AERN-RnToRm",
          "signature": "BisectionTree box varid d v-\u003e box-\u003e [BisectionTree box varid d v]",
          "type": "function"
        },
        "index": {
          "description": "lookup all maximal subtrees whose domain intersect the given rectangle",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "lookupSubtreeDoms",
          "normalized": "BisectionTree a b c d-\u003ea-\u003e[BisectionTree a b c d]",
          "package": "AERN-RnToRm",
          "partial": "Subtree Doms",
          "signature": "BisectionTree box varid d v-\u003ebox-\u003e[BisectionTree box varid d v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:lookupSubtreeDoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all values, thus creating a new tree.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "mapLeaves",
          "package": "AERN-RnToRm",
          "signature": "(BisectionTree box varid d v1 -\u003e BisectionTree box varid d v2) -\u003e BisectionTree box varid d v1 -\u003e BisectionTree box varid d v2",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#mapLeaves",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all values thus creating new tree",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "mapLeaves",
          "normalized": "(BisectionTree a b c d-\u003eBisectionTree a b c d)-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d",
          "package": "AERN-RnToRm",
          "partial": "Leaves",
          "signature": "(BisectionTree box varid d v-\u003eBisectionTree box varid d v)-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:mapLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all values, thus creating a new tree.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "mapWithDom",
          "package": "AERN-RnToRm",
          "signature": "(box -\u003e v1 -\u003e v2) -\u003e BisectionTree box varid d v1 -\u003e BisectionTree box varid d v2",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#mapWithDom",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all values thus creating new tree",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "mapWithDom",
          "normalized": "(a-\u003eb-\u003eb)-\u003eBisectionTree a c d b-\u003eBisectionTree a c d b",
          "package": "AERN-RnToRm",
          "partial": "With Dom",
          "signature": "(box-\u003ev-\u003ev)-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:mapWithDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "removeVars",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e BisectionTree box varid d v -\u003e BisectionTree box varid d v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#removeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "removeVars",
          "normalized": "a-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d",
          "package": "AERN-RnToRm",
          "partial": "Vars",
          "signature": "box-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:removeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "setDepth",
          "package": "AERN-RnToRm",
          "signature": "Depth -\u003e BisectionTree box varid d v -\u003e BisectionTree box varid d v",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#setDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "setDepth",
          "normalized": "Depth-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d",
          "package": "AERN-RnToRm",
          "partial": "Depth",
          "signature": "Depth-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:setDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "split",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v-\u003e EffortIndex-\u003e varid-\u003e d-\u003e box-\u003e BisectionTree box varid d v-\u003e BisectionTree box varid d v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "split",
          "normalized": "ValueSplitter a b c d-\u003eEffortIndex-\u003eb-\u003ec-\u003ea-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v-\u003eEffortIndex-\u003evarid-\u003ed-\u003ebox-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure both trees have equal structure at the top level:\n    either they are all leaves or they all split at the same\n    direction with the same splitting point.\n\u003c/p\u003e\u003cp\u003eAlso, unify the domains at the top level.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "sync2",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v1 -\u003e ValueSplitter box varid d v2 -\u003e EffortIndex -\u003e BisectionTree box varid d v1 -\u003e BisectionTree box varid d v2 -\u003e (BisectionTree box varid d v1, BisectionTree box varid d v2)",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#sync2",
          "type": "function"
        },
        "index": {
          "description": "Ensure both trees have equal structure at the top level either they are all leaves or they all split at the same direction with the same splitting point Also unify the domains at the top level",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "sync2",
          "normalized": "ValueSplitter a b c d-\u003eValueSplitter a b c d-\u003eEffortIndex-\u003eBisectionTree a b c d-\u003eBisectionTree a b c d-\u003e(BisectionTree a b c d,BisectionTree a b c d)",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v-\u003eValueSplitter box varid d v-\u003eEffortIndex-\u003eBisectionTree box varid d v-\u003eBisectionTree box varid d v-\u003e(BisectionTree box varid d v,BisectionTree box varid d v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:sync2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure all the trees have equal structure at the top level:\n    either they are all leaves or they all split at the same\n    direction with the same splitting point.\n\u003c/p\u003e\u003cp\u003eAlso, unify the domains at the top level.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "syncMany",
          "package": "AERN-RnToRm",
          "signature": "ValueSplitter box varid d v -\u003e EffortIndex -\u003e [BisectionTree box varid d v] -\u003e [BisectionTree box varid d v]",
          "source": "src/Data-Number-ER-RnToRm-BisectionTree.html#syncMany",
          "type": "function"
        },
        "index": {
          "description": "Ensure all the trees have equal structure at the top level either they are all leaves or they all split at the same direction with the same splitting point Also unify the domains at the top level",
          "hierarchy": "Data Number ER RnToRm BisectionTree",
          "module": "Data.Number.ER.RnToRm.BisectionTree",
          "name": "syncMany",
          "normalized": "ValueSplitter a b c d-\u003eEffortIndex-\u003e[BisectionTree a b c d]-\u003e[BisectionTree a b c d]",
          "package": "AERN-RnToRm",
          "partial": "Many",
          "signature": "ValueSplitter box varid d v-\u003eEffortIndex-\u003e[BisectionTree box varid d v]-\u003e[BisectionTree box varid d v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-BisectionTree.html#v:syncMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies default instances for the real number and function classes\n    described in \u003ca\u003eData.Number.ER.RnToRm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThese classes form loosely coupled boundaries between abstraction layers.\n    Nevertheless, we usually have particular implementations in mind, as shown here.\n\u003c/p\u003e\u003cp\u003eTo preserve the intended loose coupling, please use these definitions\n    only in functions that cannot infer from their input or output data which type of function enclosures\n    they should use.  Eg a function to add 1 to an enclosure should have the type:\n\u003c/p\u003e\u003cpre\u003e add1 :: (ERFnApprox box varid domra ranra fa) =\u003e fa -\u003e fa\n add1 f = f + 1\n\u003c/pre\u003e\u003cp\u003eand \u003cem\u003enot\u003c/em\u003e: \u003ccode\u003eadd1 :: FAPWP -\u003e FAPWP\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "DefaultRepr",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html",
          "type": "module"
        },
        "index": {
          "description": "This module supplies default instances for the real number and function classes described in Data.Number.ER.RnToRm These classes form loosely coupled boundaries between abstraction layers Nevertheless we usually have particular implementations in mind as shown here To preserve the intended loose coupling please use these definitions only in functions that cannot infer from their input or output data which type of function enclosures they should use Eg function to add to an enclosure should have the type add1 ERFnApprox box varid domra ranra fa fa fa add1 and not add1 FAPWP FAPWP",
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "DefaultRepr",
          "package": "AERN-RnToRm",
          "partial": "Default Repr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FA",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FA",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FA",
          "package": "AERN-RnToRm",
          "partial": "FA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPD",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPD",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPD",
          "package": "AERN-RnToRm",
          "partial": "FAPD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPDOI",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPDOI",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPDOI",
          "package": "AERN-RnToRm",
          "partial": "FAPDOI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPDOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPE",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPE",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPE",
          "package": "AERN-RnToRm",
          "partial": "FAPE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPT",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPT",
          "package": "AERN-RnToRm",
          "partial": "FAPT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPU",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPU",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPU",
          "package": "AERN-RnToRm",
          "partial": "FAPU",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPUOI",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPUOI",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPUOI",
          "package": "AERN-RnToRm",
          "partial": "FAPUOI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPUOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPWP",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#FAPWP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "FAPWP",
          "package": "AERN-RnToRm",
          "partial": "FAPWP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:FAPWP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "P",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-DefaultRepr.html#P",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm DefaultRepr",
          "module": "Data.Number.ER.RnToRm.DefaultRepr",
          "name": "P",
          "package": "AERN-RnToRm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-DefaultRepr.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few definitions useful for testing the enclosures code, eg in ghci.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.TestingDefs",
          "name": "TestingDefs",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-TestingDefs.html",
          "type": "module"
        },
        "index": {
          "description": "few definitions useful for testing the enclosures code eg in ghci",
          "hierarchy": "Data Number ER RnToRm TestingDefs",
          "module": "Data.Number.ER.RnToRm.TestingDefs",
          "name": "TestingDefs",
          "package": "AERN-RnToRm",
          "partial": "Testing Defs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-TestingDefs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA construction of an enclosure of a real function on\n    the domain [-1,1]^n for some n using elements of some\n    base (eg rational functions or polynomials).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "Interval",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "construction of an enclosure of real function on the domain for some using elements of some base eg rational functions or polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "Interval",
          "package": "AERN-RnToRm",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnContext",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnContext",
          "package": "AERN-RnToRm",
          "partial": "ERFn Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#t:ERFnContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnInterval",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnInterval",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#t:ERFnInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnContext",
          "package": "AERN-RnToRm",
          "signature": "ERFnContext",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnContext",
          "package": "AERN-RnToRm",
          "partial": "ERFn Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:ERFnContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnInterval",
          "package": "AERN-RnToRm",
          "signature": "ERFnInterval",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnInterval",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:ERFnInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnIntervalAny",
          "package": "AERN-RnToRm",
          "signature": "ERFnIntervalAny",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "ERFnIntervalAny",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:ERFnIntervalAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnCoeffGranularity",
          "package": "AERN-RnToRm",
          "signature": "Granularity",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnCoeffGranularity",
          "package": "AERN-RnToRm",
          "partial": "Coeff Granularity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnCoeffGranularity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContext",
          "package": "AERN-RnToRm",
          "signature": "ERFnContext",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContext",
          "package": "AERN-RnToRm",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContextDefault",
          "package": "AERN-RnToRm",
          "signature": "ERFnContext",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#erfnContextDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContextDefault",
          "package": "AERN-RnToRm",
          "partial": "Context Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnContextDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContextUnify",
          "package": "AERN-RnToRm",
          "signature": "ERFnContext -\u003e ERFnContext -\u003e ERFnContext",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#erfnContextUnify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnContextUnify",
          "normalized": "ERFnContext-\u003eERFnContext-\u003eERFnContext",
          "package": "AERN-RnToRm",
          "partial": "Context Unify",
          "signature": "ERFnContext-\u003eERFnContext-\u003eERFnContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnContextUnify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnLowerNeg",
          "package": "AERN-RnToRm",
          "signature": "fb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnLowerNeg",
          "package": "AERN-RnToRm",
          "partial": "Lower Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnLowerNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnMaxDegree",
          "package": "AERN-RnToRm",
          "signature": "Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnMaxDegree",
          "package": "AERN-RnToRm",
          "partial": "Max Degree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnMaxDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnMaxSize",
          "package": "AERN-RnToRm",
          "signature": "Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnMaxSize",
          "package": "AERN-RnToRm",
          "partial": "Max Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnUpper",
          "package": "AERN-RnToRm",
          "signature": "fb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#ERFnInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx Interval",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.Interval",
          "name": "erfnUpper",
          "package": "AERN-RnToRm",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-Interval.html#v:erfnUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA construction of an outer/inner enclosure of a real function on\n    the domain [-1,1]^n for some n using elements of some\n    base (eg rational functions or polynomials).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "IntervalOI",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html",
          "type": "module"
        },
        "index": {
          "description": "construction of an outer inner enclosure of real function on the domain for some using elements of some base eg rational functions or polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "IntervalOI",
          "package": "AERN-RnToRm",
          "partial": "Interval OI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOI",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOI",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval OI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#t:ERFnIntervalOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOI",
          "package": "AERN-RnToRm",
          "signature": "ERFnIntervalOI",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOI",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval OI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#v:ERFnIntervalOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOIAny",
          "package": "AERN-RnToRm",
          "signature": "ERFnIntervalOIAny",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "ERFnIntervalOIAny",
          "package": "AERN-RnToRm",
          "partial": "ERFn Interval OIAny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#v:ERFnIntervalOIAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiContext",
          "package": "AERN-RnToRm",
          "signature": "ERFnContext",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiContext",
          "package": "AERN-RnToRm",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#v:erfnoiContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiInner",
          "package": "AERN-RnToRm",
          "signature": "((fb, fb), Bool)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiInner",
          "normalized": "((a,a),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Inner",
          "signature": "((fb,fb),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#v:erfnoiInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiOuter",
          "package": "AERN-RnToRm",
          "signature": "(fb, fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#ERFnIntervalOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Approx IntervalOI",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx.IntervalOI",
          "name": "erfnoiOuter",
          "normalized": "(a,a)",
          "package": "AERN-RnToRm",
          "partial": "Outer",
          "signature": "(fb,fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx-IntervalOI.html#v:erfnoiOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApproximation of continuous real functions \n    defined on the unit rectangle domain of a certain dimension.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the synonym UFA.    \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "Approx",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html",
          "type": "module"
        },
        "index": {
          "description": "Approximation of continuous real functions defined on the unit rectangle domain of certain dimension To be imported qualified usually with the synonym UFA",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "Approx",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class extends \u003ccode\u003eERFnApprox\u003c/code\u003e by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e assuming that the domain of the function enclosures is always \u003ccode\u003e[-1,1]^n\u003c/code\u003e for some \u003ccode\u003en\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e allowing the construction of basic function enclosures\n      where the domain has to be known.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "ERUnitFnApprox",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#ERUnitFnApprox",
          "type": "class"
        },
        "index": {
          "description": "This class extends ERFnApprox by assuming that the domain of the function enclosures is always for some allowing the construction of basic function enclosures where the domain has to be known",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "ERUnitFnApprox",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Approx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#t:ERUnitFnApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the exact enclosure of an affine function on \u003ccode\u003e[-1,1]^n\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "affine",
          "package": "AERN-RnToRm",
          "signature": "affine",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#affine",
          "type": "method"
        },
        "index": {
          "description": "Construct the exact enclosure of an affine function on",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "affine",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function enclosure with no information about the function's values.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "bottomApprox",
          "package": "AERN-RnToRm",
          "signature": "fa",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#bottomApprox",
          "type": "method"
        },
        "index": {
          "description": "function enclosure with no information about the function values",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "bottomApprox",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:bottomApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple and limited composition of functions.\n\u003c/p\u003e\u003cp\u003eIt is primarily intended to be used for precomposition with affine functions.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "composeWithThin",
          "package": "AERN-RnToRm",
          "signature": "composeWithThin",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#composeWithThin",
          "type": "method"
        },
        "index": {
          "description": "simple and limited composition of functions It is primarily intended to be used for precomposition with affine functions",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "composeWithThin",
          "package": "AERN-RnToRm",
          "partial": "With Thin",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:composeWithThin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a constant enclosure for a tuple of functions.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "const",
          "package": "AERN-RnToRm",
          "signature": "[ranra] -\u003e fa",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#const",
          "type": "method"
        },
        "index": {
          "description": "Construct constant enclosure for tuple of functions",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "const",
          "normalized": "[a]-\u003eb",
          "package": "AERN-RnToRm",
          "signature": "[ranra]-\u003efa",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely integrate a \u003ccode\u003e[-1,1]^n -\u003e R^m\u003c/code\u003e function enclosure\n        with some initial condition (origin and function at origin).\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "signature": "integrate",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#integrate",
          "type": "method"
        },
        "index": {
          "description": "Safely integrate function enclosure with some initial condition origin and function at origin",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersect two enclosures and measure the global improvement as one number.\n\u003c/p\u003e\u003cp\u003e(Use \u003ccode\u003e\u003ca\u003eintersectMeasureImprovement\u003c/a\u003e\u003c/code\u003e defined in module \u003ca\u003eData.Number.ER.Real.Approx\u003c/a\u003e \n         to measure the improvement using a function enclosure.) \n\u003c/p\u003e\u003cp\u003eExplicitly specify the variables to identify the dimension of the domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "intersectMeasureImprovement",
          "package": "AERN-RnToRm",
          "signature": "intersectMeasureImprovement",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#intersectMeasureImprovement",
          "type": "method"
        },
        "index": {
          "description": "Intersect two enclosures and measure the global improvement as one number Use intersectMeasureImprovement defined in module Data.Number.ER.Real.Approx to measure the improvement using function enclosure Explicitly specify the variables to identify the dimension of the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "intersectMeasureImprovement",
          "package": "AERN-RnToRm",
          "partial": "Measure Improvement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:intersectMeasureImprovement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind close upper and lower bounds of the volume of the entire enclosure.\n        A negative volume means that the enclosure is certainly inconsistent.\n\u003c/p\u003e\u003cp\u003eExplicitly specify the variables to identify the dimension of the domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "volume",
          "package": "AERN-RnToRm",
          "signature": "[varid] -\u003e fa -\u003e ranra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Approx.html#volume",
          "type": "method"
        },
        "index": {
          "description": "Find close upper and lower bounds of the volume of the entire enclosure negative volume means that the enclosure is certainly inconsistent Explicitly specify the variables to identify the dimension of the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Approx",
          "module": "Data.Number.ER.RnToRm.UnitDom.Approx",
          "name": "volume",
          "normalized": "[a]-\u003eb-\u003ec",
          "package": "AERN-RnToRm",
          "signature": "[varid]-\u003efa-\u003eranra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Approx.html#v:volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of basic functions to pick from when testing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Generate",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html",
          "type": "module"
        },
        "index": {
          "description": "collection of basic functions to pick from when testing",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Generate",
          "package": "AERN-RnToRm",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg10Size10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg10Size10",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg10Size10",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:Deg10Size10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg20Size20",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg20Size20",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg20Size20",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:Deg20Size20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg5Size10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg5Size10",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg5Size10",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:Deg5Size10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclParalSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Degree3",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10Degree3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Degree3",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size Degree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclParalSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Small",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10Small",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Small",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size Small",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclParalSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThickSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Degree3",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10Degree3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Degree3",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size Degree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThickSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Small",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10Small",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Small",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size Small",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThickSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThinSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Degree3",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10Degree3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Degree3",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size Degree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThinSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Small",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10Small",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Small",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size Small",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBEnclThinSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10",
          "package": "AERN-RnToRm",
          "partial": "FBSize",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Degree3",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10Degree3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Degree3",
          "package": "AERN-RnToRm",
          "partial": "FBSize Degree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Small",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10Small",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Small",
          "package": "AERN-RnToRm",
          "partial": "FBSize Small",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#t:FBSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg10Size10",
          "package": "AERN-RnToRm",
          "signature": "Deg10Size10 Int Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg10Size10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg10Size10",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:Deg10Size10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg20Size20",
          "package": "AERN-RnToRm",
          "signature": "Deg20Size20 Int Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg20Size20",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg20Size20",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:Deg20Size20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg5Size10",
          "package": "AERN-RnToRm",
          "signature": "Deg5Size10 Int Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#Deg5Size10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "Deg5Size10",
          "package": "AERN-RnToRm",
          "partial": "Deg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:Deg5Size10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10",
          "package": "AERN-RnToRm",
          "signature": "FBEnclParalSize10 (((Int, Int), SmallRatio), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10",
          "normalized": "FBEnclParalSize(((Int,Int),SmallRatio),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size",
          "signature": "FBEnclParalSize(((Int,Int),SmallRatio),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclParalSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Degree3",
          "package": "AERN-RnToRm",
          "signature": "FBEnclParalSize10Degree3 ((Int, SmallRatio), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10Degree3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Degree3",
          "normalized": "FBEnclParalSize Degree((Int,SmallRatio),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size Degree",
          "signature": "FBEnclParalSize Degree((Int,SmallRatio),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclParalSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Small",
          "package": "AERN-RnToRm",
          "signature": "FBEnclParalSize10Small ((Int, SmallRatio), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclParalSize10Small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclParalSize10Small",
          "normalized": "FBEnclParalSize Small((Int,SmallRatio),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Paral Size Small",
          "signature": "FBEnclParalSize Small((Int,SmallRatio),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclParalSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThickSize10 (((Int, Int), (Int, Int)), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10",
          "normalized": "FBEnclThickSize(((Int,Int),(Int,Int)),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size",
          "signature": "FBEnclThickSize(((Int,Int),(Int,Int)),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThickSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Degree3",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThickSize10Degree3 ((Int, Int), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10Degree3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Degree3",
          "normalized": "FBEnclThickSize Degree((Int,Int),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size Degree",
          "signature": "FBEnclThickSize Degree((Int,Int),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThickSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Small",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThickSize10Small ((Int, Int), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThickSize10Small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThickSize10Small",
          "normalized": "FBEnclThickSize Small((Int,Int),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thick Size Small",
          "signature": "FBEnclThickSize Small((Int,Int),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThickSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThinSize10 ((Int, Int), E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10",
          "normalized": "FBEnclThinSize((Int,Int),E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size",
          "signature": "FBEnclThinSize((Int,Int),E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThinSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Degree3",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThinSize10Degree3 (Int, E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10Degree3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Degree3",
          "normalized": "FBEnclThinSize Degree(Int,E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size Degree",
          "signature": "FBEnclThinSize Degree(Int,E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThinSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Small",
          "package": "AERN-RnToRm",
          "signature": "FBEnclThinSize10Small (Int, E fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBEnclThinSize10Small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBEnclThinSize10Small",
          "normalized": "FBEnclThinSize Small(Int,E a)",
          "package": "AERN-RnToRm",
          "partial": "FBEncl Thin Size Small",
          "signature": "FBEnclThinSize Small(Int,E fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBEnclThinSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10",
          "package": "AERN-RnToRm",
          "signature": "FBSize10 ((Int, Int), fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10",
          "normalized": "FBSize((Int,Int),a)",
          "package": "AERN-RnToRm",
          "partial": "FBSize",
          "signature": "FBSize((Int,Int),fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Degree3",
          "package": "AERN-RnToRm",
          "signature": "FBSize10Degree3 (Int, fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10Degree3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Degree3",
          "normalized": "FBSize Degree(Int,a)",
          "package": "AERN-RnToRm",
          "partial": "FBSize Degree",
          "signature": "FBSize Degree(Int,fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Small",
          "package": "AERN-RnToRm",
          "signature": "FBSize10Small (Int, fb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#FBSize10Small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "FBSize10Small",
          "normalized": "FBSize Small(Int,a)",
          "package": "AERN-RnToRm",
          "partial": "FBSize Small",
          "signature": "FBSize Small(Int,fb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:FBSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeParalEncl",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e SmallRatio -\u003e (ufb, ufb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#makeParalEncl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeParalEncl",
          "normalized": "a-\u003eSmallRatio-\u003e(a,a)",
          "package": "AERN-RnToRm",
          "partial": "Paral Encl",
          "signature": "ufb-\u003eSmallRatio-\u003e(ufb,ufb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:makeParalEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeThickEncl",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e Int -\u003e ufb -\u003e ufb -\u003e (ufb, ufb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#makeThickEncl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeThickEncl",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003e(a,a)",
          "package": "AERN-RnToRm",
          "partial": "Thick Encl",
          "signature": "Int-\u003eInt-\u003eufb-\u003eufb-\u003e(ufb,ufb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:makeThickEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeThinEncl",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e (ufb, ufb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#makeThinEncl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "makeThinEncl",
          "normalized": "a-\u003e(a,a)",
          "package": "AERN-RnToRm",
          "partial": "Thin Encl",
          "signature": "ufb-\u003e(ufb,ufb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:makeThinEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10",
          "package": "AERN-RnToRm",
          "signature": "fb -\u003e [fb]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#polynomials1200ishSize10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10",
          "normalized": "a-\u003e[a]",
          "package": "AERN-RnToRm",
          "partial": "Size",
          "signature": "fb-\u003e[fb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:polynomials1200ishSize10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10Degree3",
          "package": "AERN-RnToRm",
          "signature": "fb -\u003e [fb]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#polynomials1200ishSize10Degree3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10Degree3",
          "normalized": "a-\u003e[a]",
          "package": "AERN-RnToRm",
          "partial": "Size Degree",
          "signature": "fb-\u003e[fb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:polynomials1200ishSize10Degree3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10Small",
          "package": "AERN-RnToRm",
          "signature": "fb -\u003e [fb]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#polynomials1200ishSize10Small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Generate",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Generate",
          "name": "polynomials1200ishSize10Small",
          "normalized": "a-\u003e[a]",
          "package": "AERN-RnToRm",
          "partial": "Size Small",
          "signature": "fb-\u003e[fb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Generate.html#v:polynomials1200ishSize10Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of bounding operations, ie constant bounds and binary min/max.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Bounds",
          "name": "Bounds",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Bounds.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of bounding operations ie constant bounds and binary min max",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Bounds",
          "name": "Bounds",
          "package": "AERN-RnToRm",
          "partial": "Bounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Bounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuxiliary functions for use in test for polynomial enclosure arithmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "Common",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Auxiliary functions for use in test for polynomial enclosure arithmetic",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "Common",
          "package": "AERN-RnToRm",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsConsistent",
          "package": "AERN-RnToRm",
          "signature": "String-\u003e testId-\u003e (boxra -\u003e ra)-\u003e [varid]-\u003e (fb, fb)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsConsistent",
          "normalized": "String-\u003ea-\u003e(b-\u003ec)-\u003e[d]-\u003e(e,e)-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "At Key Points Consistent",
          "signature": "String-\u003etestId-\u003e(boxra-\u003era)-\u003e[varid]-\u003e(fb,fb)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#v:enclAtKeyPointsConsistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsPointwiseBinaryInnerInOuter",
          "package": "AERN-RnToRm",
          "signature": "String-\u003e testId-\u003e (ra -\u003e ra -\u003e ra)-\u003e (fb, fb)-\u003e (fb, fb)-\u003e (fb, fb)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsPointwiseBinaryInnerInOuter",
          "normalized": "String-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003e(c,c)-\u003e(c,c)-\u003e(c,c)-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "At Key Points Pointwise Binary Inner In Outer",
          "signature": "String-\u003etestId-\u003e(ra-\u003era-\u003era)-\u003e(fb,fb)-\u003e(fb,fb)-\u003e(fb,fb)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#v:enclAtKeyPointsPointwiseBinaryInnerInOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsPointwiseUnaryInnerInOuter",
          "package": "AERN-RnToRm",
          "signature": "String-\u003e testId-\u003e (ra -\u003e ra)-\u003e (fb, fb)-\u003e (fb, fb)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "enclAtKeyPointsPointwiseUnaryInnerInOuter",
          "normalized": "String-\u003ea-\u003e(b-\u003eb)-\u003e(c,c)-\u003e(c,c)-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "At Key Points Pointwise Unary Inner In Outer",
          "signature": "String-\u003etestId-\u003e(ra-\u003era)-\u003e(fb,fb)-\u003e(fb,fb)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#v:enclAtKeyPointsPointwiseUnaryInnerInOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "fbAtKeyPointsCanBeLeq",
          "package": "AERN-RnToRm",
          "signature": "String-\u003e testId-\u003e fb-\u003e fb-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "fbAtKeyPointsCanBeLeq",
          "normalized": "String-\u003ea-\u003eb-\u003eb-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "At Key Points Can Be Leq",
          "signature": "String-\u003etestId-\u003efb-\u003efb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#v:fbAtKeyPointsCanBeLeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "fbAtKeyPointsPointwiseBinaryDownUpConsistent",
          "package": "AERN-RnToRm",
          "signature": "String-\u003e testId-\u003e (ra -\u003e ra -\u003e ra)-\u003e fb-\u003e fb-\u003e (fb, fb)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Common",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Common",
          "name": "fbAtKeyPointsPointwiseBinaryDownUpConsistent",
          "normalized": "String-\u003ea-\u003e(b-\u003eb-\u003eb)-\u003ec-\u003ec-\u003e(c,c)-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "At Key Points Pointwise Binary Down Up Consistent",
          "signature": "String-\u003etestId-\u003e(ra-\u003era-\u003era)-\u003efb-\u003efb-\u003e(fb,fb)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Common.html#v:fbAtKeyPointsPointwiseBinaryDownUpConsistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of polynomial enclosure composition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Compose",
          "name": "Compose",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Compose.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of polynomial enclosure composition",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Compose",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Compose",
          "name": "Compose",
          "package": "AERN-RnToRm",
          "partial": "Compose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Compose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of polynomial enclosure division.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Division",
          "name": "Division",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Division.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of polynomial enclosure division",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Division",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Division",
          "name": "Division",
          "package": "AERN-RnToRm",
          "partial": "Division",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Division.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of some elementary operations on primitive polynomial\n    enclosures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "Elementary",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of some elementary operations on primitive polynomial enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "Elementary",
          "package": "AERN-RnToRm",
          "partial": "Elementary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "noDomainRestriction",
          "package": "AERN-RnToRm",
          "signature": "(Maybe b, Maybe b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#noDomainRestriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "noDomainRestriction",
          "normalized": "(Maybe a,Maybe a)",
          "package": "AERN-RnToRm",
          "partial": "Domain Restriction",
          "signature": "(Maybe b,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#v:noDomainRestriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "positiveDomain",
          "package": "AERN-RnToRm",
          "signature": "(Maybe b, Maybe b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#positiveDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "positiveDomain",
          "normalized": "(Maybe a,Maybe a)",
          "package": "AERN-RnToRm",
          "partial": "Domain",
          "signature": "(Maybe b,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#v:positiveDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "sincosDomain",
          "package": "AERN-RnToRm",
          "signature": "(Maybe b, Maybe b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#sincosDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Elementary",
          "name": "sincosDomain",
          "normalized": "(Maybe a,Maybe a)",
          "package": "AERN-RnToRm",
          "partial": "Domain",
          "signature": "(Maybe b,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Elementary.html#v:sincosDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of basic enclosure operations, \n    mainly ring operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "Enclosure",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of basic enclosure operations mainly ring operations",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "Enclosure",
          "package": "AERN-RnToRm",
          "partial": "Enclosure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ParalEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclParalSize10 t, FBEnclParalSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclAdd_ParalEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ParalEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclParalSize a,FBEnclParalSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Add Paral Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclParalSize t,FBEnclParalSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclAdd_ParalEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ThickEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclThickSize10 t, FBEnclThickSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclAdd_ThickEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ThickEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclThickSize a,FBEnclThickSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Add Thick Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclThickSize t,FBEnclThickSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclAdd_ThickEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ThinEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclThinSize10 t, FBEnclThinSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclAdd_ThinEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclAdd_ThinEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclThinSize a,FBEnclThinSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Add Thin Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclThinSize t,FBEnclThinSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclAdd_ThinEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ParalEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclParalSize10 t, FBEnclParalSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclMult_ParalEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ParalEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclParalSize a,FBEnclParalSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Mult Paral Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclParalSize t,FBEnclParalSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclMult_ParalEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ThickEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclThickSize10 t, FBEnclThickSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclMult_ThickEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ThickEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclThickSize a,FBEnclThickSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Mult Thick Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclThickSize t,FBEnclThickSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclMult_ThickEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ThinEncls_consistent",
          "package": "AERN-RnToRm",
          "signature": "(t, t) -\u003e String -\u003e (Deg5Size10, (FBEnclThinSize10 t, FBEnclThinSize10 t)) -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#prop_enclMult_ThinEncls_consistent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Enclosure",
          "name": "prop_enclMult_ThinEncls_consistent",
          "normalized": "(a,a)-\u003eString-\u003e(Deg Size,(FBEnclThinSize a,FBEnclThinSize a))-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Mult Thin Encls",
          "signature": "(t,t)-\u003eString-\u003e(Deg Size,(FBEnclThinSize t,FBEnclThinSize t))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Enclosure.html#v:prop_enclMult_ThinEncls_consistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties for checking that polynomial intergration \n    is consistent with polynomial differentiation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Integration.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties for checking that polynomial intergration is consistent with polynomial differentiation",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Integration",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "partial": "Integration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Integration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of operations that reduce the size of polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Reduce",
          "name": "Reduce",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Reduce.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of operations that reduce the size of polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Reduce",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Reduce",
          "name": "Reduce",
          "package": "AERN-RnToRm",
          "partial": "Reduce",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Reduce.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickcheck properties of ring operations, ie addition and multiplication.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Ring",
          "name": "Ring",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Ring.html",
          "type": "module"
        },
        "index": {
          "description": "Quickcheck properties of ring operations ie addition and multiplication",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Properties Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Properties.Ring",
          "name": "Ring",
          "package": "AERN-RnToRm",
          "partial": "Ring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Properties-Ring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for running all function enclosure base tests in a batch.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Run",
          "name": "Run",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Support for running all function enclosure base tests in batch",
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Run",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Run",
          "name": "Run",
          "package": "AERN-RnToRm",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Run",
          "name": "runUFBTests",
          "package": "AERN-RnToRm",
          "signature": "String -\u003e fb -\u003e IO () -\u003e IO ()",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Run.html#runUFBTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base Tests Run",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base.Tests.Run",
          "name": "runUFBTests",
          "normalized": "String-\u003ea-\u003eIO()-\u003eIO()",
          "package": "AERN-RnToRm",
          "partial": "UFBTests",
          "signature": "String-\u003efb-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base-Tests-Run.html#v:runUFBTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses  abstracting function arithmetic with directed rounding.\n    Instances are used to describe a boundary for an approximation\n    to a real function on the interval [-1,1]^n.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the synonym UFB.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "Base",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Classes abstracting function arithmetic with directed rounding Instances are used to describe boundary for an approximation to real function on the interval To be imported qualified usually with the synonym UFB",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "Base",
          "package": "AERN-RnToRm",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBase",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#ERUnitFnBase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBase",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#t:ERUnitFnBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseElementary",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#ERUnitFnBaseElementary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseElementary",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Base Elementary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#t:ERUnitFnBaseElementary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseEncl",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#ERUnitFnBaseEncl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseEncl",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Base Encl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#t:ERUnitFnBaseEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseIElementary",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#ERUnitFnBaseIElementary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseIElementary",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Base IElementary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#t:ERUnitFnBaseIElementary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseIEncl",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#ERUnitFnBaseIEncl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "ERUnitFnBaseIEncl",
          "package": "AERN-RnToRm",
          "partial": "ERUnit Fn Base IEncl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#t:ERUnitFnBaseIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise upwards rounded multiplication \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(*^)",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#%2A%5E",
          "type": "method"
        },
        "index": {
          "description": "Pointwise upwards rounded multiplication",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(*^) *^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "ufb-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise upwards rounded addition \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(+^)",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#%2B%5E",
          "type": "method"
        },
        "index": {
          "description": "Pointwise upwards rounded addition",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(+^) +^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "ufb-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:-43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise upwards rounded subtraction \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(-^)",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#-%5E",
          "type": "method"
        },
        "index": {
          "description": "Pointwise upwards rounded subtraction",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "(-^) -^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "ufb-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:-45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclosure and base constant addition\n\u003c/p\u003e\u003cp\u003eIMPORTANT: enclosure = (NEGATED lower bound, upper bound)    \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addConstEncl",
          "package": "AERN-RnToRm",
          "signature": "addConstEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#addConstEncl",
          "type": "method"
        },
        "index": {
          "description": "Enclosure and base constant addition IMPORTANT enclosure NEGATED lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addConstEncl",
          "package": "AERN-RnToRm",
          "partial": "Const Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:addConstEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a scalar to a basic function, rounding upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addConstUp",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#addConstUp",
          "type": "method"
        },
        "index": {
          "description": "Add scalar to basic function rounding upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addConstUp",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Const Up",
          "signature": "b-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:addConstUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclosure addition\n\u003c/p\u003e\u003cp\u003eIMPORTANT: enclosure = (NEGATED lower bound, upper bound)    \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addEncl",
          "package": "AERN-RnToRm",
          "signature": "addEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#addEncl",
          "type": "method"
        },
        "index": {
          "description": "Enclosure addition IMPORTANT enclosure NEGATED lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:addEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner enclosure addition.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addIEncl",
          "package": "AERN-RnToRm",
          "signature": "addIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#addIEncl",
          "type": "method"
        },
        "index": {
          "description": "Inner enclosure addition",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "addIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:addIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an affine basic function. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "affine",
          "package": "AERN-RnToRm",
          "signature": "affine",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#affine",
          "type": "method"
        },
        "index": {
          "description": "Construct an affine basic function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "affine",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003eatan(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "atanEncl",
          "package": "AERN-RnToRm",
          "signature": "atanEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#atanEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate atan for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "atanEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:atanEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003eatan(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "atanIEncl",
          "package": "AERN-RnToRm",
          "signature": "atanIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#atanIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate atan for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "atanIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:atanIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an upper bound of a basic function over \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "bounds",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex -\u003e ufb -\u003e (b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#bounds",
          "type": "method"
        },
        "index": {
          "description": "Find an upper bound of basic function over",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "bounds",
          "normalized": "EffortIndex-\u003ea-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003eufb-\u003e(b,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "boundsEncl",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex -\u003e (ufb, ufb) -\u003e (b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#boundsEncl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "boundsEncl",
          "normalized": "EffortIndex-\u003e(a,a)-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "signature": "EffortIndex-\u003e(ufb,ufb)-\u003e(b,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:boundsEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck internal consistency of the basic function and report problem if any.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "check",
          "package": "AERN-RnToRm",
          "signature": "check",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#check",
          "type": "method"
        },
        "index": {
          "description": "Check internal consistency of the basic function and report problem if any",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "check",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA linear ordering on basic functions, which can be syntactic and rather arbitrary. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "compareApprox",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e ufb -\u003e Ordering",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#compareApprox",
          "type": "method"
        },
        "index": {
          "description": "linear ordering on basic functions which can be syntactic and rather arbitrary",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "compareApprox",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "signature": "ufb-\u003eufb-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:compareApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two basic functions, rounding downwards, \n        assuming \u003ccode\u003ef_v\u003c/code\u003e ranges within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeDown",
          "package": "AERN-RnToRm",
          "signature": "composeDown",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeDown",
          "type": "method"
        },
        "index": {
          "description": "Compose two basic functions rounding downwards assuming ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeDown",
          "package": "AERN-RnToRm",
          "partial": "Down",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two basic functions, rounding downwards and upwards, \n        assuming \u003ccode\u003ef_v\u003c/code\u003e ranges within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeEncl",
          "package": "AERN-RnToRm",
          "signature": "composeEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeEncl",
          "type": "method"
        },
        "index": {
          "description": "Compose two basic functions rounding downwards and upwards assuming ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two basic functions, rounding downwards and upwards, \n        assuming \u003ccode\u003ef_v\u003c/code\u003e ranges within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeIEncl",
          "package": "AERN-RnToRm",
          "signature": "composeIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeIEncl",
          "type": "method"
        },
        "index": {
          "description": "Compose two basic functions rounding downwards and upwards assuming ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute several variables in a basic function with other basic functions, \n        rounding downwards, assuming each \u003ccode\u003ef_v\u003c/code\u003e ranges \n        within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyDown",
          "package": "AERN-RnToRm",
          "signature": "composeManyDown",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeManyDown",
          "type": "method"
        },
        "index": {
          "description": "Substitute several variables in basic function with other basic functions rounding downwards assuming each ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyDown",
          "package": "AERN-RnToRm",
          "partial": "Many Down",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeManyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute several variables in a basic function with other basic functions, \n        rounding downwards and upwards, assuming each \u003ccode\u003ef_v\u003c/code\u003e ranges \n        within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyEncls",
          "package": "AERN-RnToRm",
          "signature": "composeManyEncls",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeManyEncls",
          "type": "method"
        },
        "index": {
          "description": "Substitute several variables in basic function with other basic functions rounding downwards and upwards assuming each ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyEncls",
          "package": "AERN-RnToRm",
          "partial": "Many Encls",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeManyEncls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute several variables in a basic function with other basic functions, \n        rounding downwards and upwards, assuming each \u003ccode\u003ef_v\u003c/code\u003e ranges \n        within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyIEncls",
          "package": "AERN-RnToRm",
          "signature": "composeManyIEncls",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeManyIEncls",
          "type": "method"
        },
        "index": {
          "description": "Substitute several variables in basic function with other basic functions rounding downwards and upwards assuming each ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyIEncls",
          "package": "AERN-RnToRm",
          "partial": "Many IEncls",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeManyIEncls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute several variables in a basic function with other basic functions, \n        rounding upwards, assuming each \u003ccode\u003ef_v\u003c/code\u003e ranges \n        within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyUp",
          "package": "AERN-RnToRm",
          "signature": "composeManyUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeManyUp",
          "type": "method"
        },
        "index": {
          "description": "Substitute several variables in basic function with other basic functions rounding upwards assuming each ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeManyUp",
          "package": "AERN-RnToRm",
          "partial": "Many Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeManyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two basic functions, rounding upwards, \n        assuming \u003ccode\u003ef_v\u003c/code\u003e ranges within the domain \u003ccode\u003e[-1,1]\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeUp",
          "package": "AERN-RnToRm",
          "signature": "composeUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#composeUp",
          "type": "method"
        },
        "index": {
          "description": "Compose two basic functions rounding upwards assuming ranges within the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "composeUp",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:composeUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a constant basic function. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "const",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#const",
          "type": "method"
        },
        "index": {
          "description": "Construct constant basic function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "const",
          "normalized": "a-\u003eb",
          "package": "AERN-RnToRm",
          "signature": "b-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a constant basic enclosure (negated lower bound fn, upper bound fn) \n        from bounds given as coeffients (lower bound, upper bound). \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "constEncl",
          "package": "AERN-RnToRm",
          "signature": "(b, b) -\u003e (ufb, ufb)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#constEncl",
          "type": "method"
        },
        "index": {
          "description": "Construct constant basic enclosure negated lower bound fn upper bound fn from bounds given as coeffients lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "constEncl",
          "normalized": "(a,a)-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "signature": "(b,b)-\u003e(ufb,ufb)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:constEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a constant basic inner enclosure \n            (negated lower bound fn, upper bound fn, is enclosure definitely anticonsistent?) \n        from bounds given as coeffients (lower bound, upper bound).\n        An inner enclosure \u003ccode\u003e(lnI,hI)\u003c/code\u003e is anticonsistent\n        iff \u003ccode\u003ehI + lnI  \u003c= 0\u003c/code\u003e, ie upper bound is never above lower bound.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "constIEncl",
          "package": "AERN-RnToRm",
          "signature": "(b, b) -\u003e ((ufb, ufb), Bool)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#constIEncl",
          "type": "method"
        },
        "index": {
          "description": "Construct constant basic inner enclosure negated lower bound fn upper bound fn is enclosure definitely anticonsistent from bounds given as coeffients lower bound upper bound An inner enclosure lnI hI is anticonsistent iff hI lnI ie upper bound is never above lower bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "constIEncl",
          "normalized": "(a,a)-\u003e((b,b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "signature": "(b,b)-\u003e((ufb,ufb),Bool)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:constIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003ecos(f)\u003c/code\u003e for enclosures,\n        assuming the range of \u003ccode\u003ef\u003c/code\u003e is within \u003ccode\u003e[-pi\u003cem\u003e2,pi\u003c/em\u003e2]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "cosEncl",
          "package": "AERN-RnToRm",
          "signature": "cosEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#cosEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate cos for enclosures assuming the range of is within pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "cosEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:cosEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003ecos(f)\u003c/code\u003e for enclosures,\n        assuming the range of \u003ccode\u003ef\u003c/code\u003e is within \u003ccode\u003e[-pi\u003cem\u003e2,pi\u003c/em\u003e2]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "cosIEncl",
          "package": "AERN-RnToRm",
          "signature": "cosIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#cosIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate cos for enclosures assuming the range of is within pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "cosIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:cosIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the derivative of \u003ccode\u003ef\u003c/code\u003e from below and from above.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "differentiate",
          "package": "AERN-RnToRm",
          "signature": "differentiate",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#differentiate",
          "type": "method"
        },
        "index": {
          "description": "Approximate the derivative of from below and from above",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "differentiate",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:differentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a basic function at a point rounding downwards \n        using a basic number for both the point and the result.\n\u003c/p\u003e\u003cp\u003eSafely evaluate a basic function at a point using a real number approximation\n        for both the point and the result.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalApprox",
          "package": "AERN-RnToRm",
          "signature": "boxra -\u003e ufb -\u003e ra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#evalApprox",
          "type": "method"
        },
        "index": {
          "description": "Evaluate basic function at point rounding downwards using basic number for both the point and the result Safely evaluate basic function at point using real number approximation for both the point and the result",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalApprox",
          "normalized": "a-\u003eb-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "Approx",
          "signature": "boxra-\u003eufb-\u003era",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:evalApprox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalEncl",
          "package": "AERN-RnToRm",
          "signature": "boxra -\u003e (ufb, ufb) -\u003e ra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#evalEncl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalEncl",
          "normalized": "a-\u003e(b,b)-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "signature": "boxra-\u003e(ufb,ufb)-\u003era",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:evalEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalEnclInner",
          "package": "AERN-RnToRm",
          "signature": "boxra -\u003e (ufb, ufb) -\u003e ra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#evalEnclInner",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalEnclInner",
          "normalized": "a-\u003e(b,b)-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "Encl Inner",
          "signature": "boxra-\u003e(ufb,ufb)-\u003era",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:evalEnclInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalIEncl",
          "package": "AERN-RnToRm",
          "signature": "boxra -\u003e ((ufb, ufb), Bool) -\u003e ra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#evalIEncl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalIEncl",
          "normalized": "a-\u003e((b,b),Bool)-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "signature": "boxra-\u003e((ufb,ufb),Bool)-\u003era",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:evalIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a basic function at a point rounding upwards \n        using a basic number for both the point and the result.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalUp",
          "package": "AERN-RnToRm",
          "signature": "boxb -\u003e ufb -\u003e b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#evalUp",
          "type": "method"
        },
        "index": {
          "description": "Evaluate basic function at point rounding upwards using basic number for both the point and the result",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "evalUp",
          "normalized": "a-\u003eb-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "signature": "boxb-\u003eufb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:evalUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003eexp(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "expEncl",
          "package": "AERN-RnToRm",
          "signature": "expEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#expEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate exp for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "expEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:expEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003eexp(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "expIEncl",
          "package": "AERN-RnToRm",
          "signature": "expIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#expIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate exp for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "expIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:expIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the degree of this basic function.\n\u003c/p\u003e\u003cp\u003eIf the function is a polynomial, this function should\n        return its degree. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getDegree",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#getDegree",
          "type": "method"
        },
        "index": {
          "description": "Get the degree of this basic function If the function is polynomial this function should return its degree",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getDegree",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Degree",
          "signature": "ufb-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:getDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the granularity of the coefficients inside this basic function.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getGranularity",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e Granularity",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#getGranularity",
          "type": "method"
        },
        "index": {
          "description": "Get the granularity of the coefficients inside this basic function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getGranularity",
          "normalized": "a-\u003eGranularity",
          "package": "AERN-RnToRm",
          "partial": "Granularity",
          "signature": "ufb-\u003eGranularity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:getGranularity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the term size of this basic function.\n\u003c/p\u003e\u003cp\u003eIf the function is a polynomial, this function should\n        return the number of terms in the polynomial. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getSize",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#getSize",
          "type": "method"
        },
        "index": {
          "description": "Get the term size of this basic function If the function is polynomial this function should return the number of terms in the polynomial",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getSize",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Size",
          "signature": "ufb-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all variables featured in this basic function.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getVariables",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e [varid]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#getVariables",
          "type": "method"
        },
        "index": {
          "description": "Get list of all variables featured in this basic function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "getVariables",
          "normalized": "a-\u003e[b]",
          "package": "AERN-RnToRm",
          "partial": "Variables",
          "signature": "ufb-\u003e[varid]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:getVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis should be evaluated before using any of the following operations. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "initialiseBaseArithmetic",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e IO ()",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#initialiseBaseArithmetic",
          "type": "method"
        },
        "index": {
          "description": "This should be evaluated before using any of the following operations",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "initialiseBaseArithmetic",
          "normalized": "a-\u003eIO()",
          "package": "AERN-RnToRm",
          "partial": "Base Arithmetic",
          "signature": "ufb-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:initialiseBaseArithmetic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the primitive function of \u003ccode\u003ef\u003c/code\u003e from below and from above.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "signature": "integrate",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#integrate",
          "type": "method"
        },
        "index": {
          "description": "Approximate the primitive function of from below and from above",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "integrate",
          "package": "AERN-RnToRm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck internal consistency of the basic function, typically absence of NaN.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "isValid",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#isValid",
          "type": "method"
        },
        "index": {
          "description": "Check internal consistency of the basic function typically absence of NaN",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "isValid",
          "normalized": "a-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Valid",
          "signature": "ufb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003elog(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "logEncl",
          "package": "AERN-RnToRm",
          "signature": "logEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#logEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate log for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "logEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:logEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003elog(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "logIEncl",
          "package": "AERN-RnToRm",
          "signature": "logIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#logIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate log for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "logIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:logIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function \u003ccode\u003emax(f1,f2)\u003c/code\u003e from below.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "maxDown",
          "package": "AERN-RnToRm",
          "signature": "maxDown",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#maxDown",
          "type": "method"
        },
        "index": {
          "description": "Approximate the function max f1 f2 from below",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "maxDown",
          "package": "AERN-RnToRm",
          "partial": "Down",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:maxDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function \u003ccode\u003emax(f1,f2)\u003c/code\u003e from above.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "maxUp",
          "package": "AERN-RnToRm",
          "signature": "maxUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#maxUp",
          "type": "method"
        },
        "index": {
          "description": "Approximate the function max f1 f2 from above",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "maxUp",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:maxUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function \u003ccode\u003emin(f1,f2)\u003c/code\u003e from below.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "minDown",
          "package": "AERN-RnToRm",
          "signature": "minDown",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#minDown",
          "type": "method"
        },
        "index": {
          "description": "Approximate the function min f1 f2 from below",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "minDown",
          "package": "AERN-RnToRm",
          "partial": "Down",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:minDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function \u003ccode\u003emin(f1,f2)\u003c/code\u003e from above.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "minUp",
          "package": "AERN-RnToRm",
          "signature": "minUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#minUp",
          "type": "method"
        },
        "index": {
          "description": "Approximate the function min f1 f2 from above",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "minUp",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:minUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclosure multiplication \n\u003c/p\u003e\u003cp\u003eIMPORTANT: enclosure = (NEGATED lower bound, upper bound)    \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "multiplyEncl",
          "package": "AERN-RnToRm",
          "signature": "multiplyEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#multiplyEncl",
          "type": "method"
        },
        "index": {
          "description": "Enclosure multiplication IMPORTANT enclosure NEGATED lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "multiplyEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:multiplyEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner enclosure multiplication.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "multiplyIEncl",
          "package": "AERN-RnToRm",
          "signature": "multiplyIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#multiplyIEncl",
          "type": "method"
        },
        "index": {
          "description": "Inner enclosure multiplication",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "multiplyIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:multiplyIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise exact negation of a basic function \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "neg",
          "package": "AERN-RnToRm",
          "signature": "ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#neg",
          "type": "method"
        },
        "index": {
          "description": "Pointwise exact negation of basic function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "neg",
          "normalized": "a-\u003ea",
          "package": "AERN-RnToRm",
          "signature": "ufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartially evaluate a basic function at a lower-dimensional point \n        given using a real number approximation.\n        Approximate the resulting function from above.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "partialEvalApproxUp",
          "package": "AERN-RnToRm",
          "signature": "boxra -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#partialEvalApproxUp",
          "type": "method"
        },
        "index": {
          "description": "Partially evaluate basic function at lower-dimensional point given using real number approximation Approximate the resulting function from above",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "partialEvalApproxUp",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Eval Approx Up",
          "signature": "boxra-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:partialEvalApproxUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from the associated interval type to the base type.\n        (The types are determined by the given example function.)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "raEndpoints",
          "package": "AERN-RnToRm",
          "signature": "raEndpoints",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#raEndpoints",
          "type": "method"
        },
        "index": {
          "description": "Convert from the associated interval type to the base type The types are determined by the given example function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "raEndpoints",
          "package": "AERN-RnToRm",
          "partial": "Endpoints",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:raEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from the base type to the associated interval type. \n        (The types are determined by the given example function.)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "raFromEndpoints",
          "package": "AERN-RnToRm",
          "signature": "raFromEndpoints",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#raFromEndpoints",
          "type": "method"
        },
        "index": {
          "description": "Convert from the base type to the associated interval type The types are determined by the given example function",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "raFromEndpoints",
          "package": "AERN-RnToRm",
          "partial": "From Endpoints",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:raFromEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the reciprocal of an enclosure, assuming\n        \u003ccode\u003ef\u003c/code\u003e does not hit zero in the unit domain.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: enclosure = (negated lower bound, upper bound)    \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipEncl",
          "package": "AERN-RnToRm",
          "signature": "recipEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#recipEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate the reciprocal of an enclosure assuming does not hit zero in the unit domain IMPORTANT enclosure negated lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:recipEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the reciprocal of an inner enclosure, assuming\n        \u003ccode\u003ef\u003c/code\u003e is positive in the unit domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipIEnclPositive",
          "package": "AERN-RnToRm",
          "signature": "recipIEnclPositive",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#recipIEnclPositive",
          "type": "method"
        },
        "index": {
          "description": "Approximate the reciprocal of an inner enclosure assuming is positive in the unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipIEnclPositive",
          "package": "AERN-RnToRm",
          "partial": "IEncl Positive",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:recipIEnclPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function \u003ccode\u003e1/f\u003c/code\u003e from above, assuming\n        \u003ccode\u003ef\u003c/code\u003e does not hit zero in the unit domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipUp",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e Int -\u003e EffortIndex -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#recipUp",
          "type": "method"
        },
        "index": {
          "description": "Approximate the function from above assuming does not hit zero in the unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "recipUp",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:recipUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the degree of a basic function, rounding pointwise upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "reduceDegreeUp",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#reduceDegreeUp",
          "type": "method"
        },
        "index": {
          "description": "Decrease the degree of basic function rounding pointwise upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "reduceDegreeUp",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Degree Up",
          "signature": "Int-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:reduceDegreeUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the size of this basic function, rounding pointwise upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "reduceSizeUp",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#reduceSizeUp",
          "type": "method"
        },
        "index": {
          "description": "Decrease the size of this basic function rounding pointwise upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "reduceSizeUp",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Size Up",
          "signature": "Int-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:reduceSizeUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a basic function by an approximation of a scalar, \n        rounding upwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleApproxUp",
          "package": "AERN-RnToRm",
          "signature": "scaleApproxUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#scaleApproxUp",
          "type": "method"
        },
        "index": {
          "description": "Multiply basic function by an approximation of scalar rounding upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleApproxUp",
          "package": "AERN-RnToRm",
          "partial": "Approx Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:scaleApproxUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclosure scaling by a base constant\n\u003c/p\u003e\u003cp\u003eIMPORTANT: enclosure = (NEGATED lower bound, upper bound)    \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleEncl",
          "package": "AERN-RnToRm",
          "signature": "scaleEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#scaleEncl",
          "type": "method"
        },
        "index": {
          "description": "Enclosure scaling by base constant IMPORTANT enclosure NEGATED lower bound upper bound",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:scaleEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a basic function by a scalar, rounding upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleUp",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#scaleUp",
          "type": "method"
        },
        "index": {
          "description": "Multiply basic function by scalar rounding upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "scaleUp",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Up",
          "signature": "b-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:scaleUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "setGranularity",
          "package": "AERN-RnToRm",
          "signature": "Granularity -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#setGranularity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "setGranularity",
          "normalized": "Granularity-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Granularity",
          "signature": "Granularity-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:setGranularity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "setMinGranularity",
          "package": "AERN-RnToRm",
          "signature": "Granularity -\u003e ufb -\u003e ufb",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#setMinGranularity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "setMinGranularity",
          "normalized": "Granularity-\u003ea-\u003ea",
          "package": "AERN-RnToRm",
          "partial": "Min Granularity",
          "signature": "Granularity-\u003eufb-\u003eufb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:setMinGranularity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "showDiGrCmp",
          "package": "AERN-RnToRm",
          "signature": "showDiGrCmp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#showDiGrCmp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "showDiGrCmp",
          "package": "AERN-RnToRm",
          "partial": "Di Gr Cmp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:showDiGrCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003esin(f)\u003c/code\u003e for enclosures,\n        assuming the range of \u003ccode\u003ef\u003c/code\u003e is within \u003ccode\u003e[-pi\u003cem\u003e2,pi\u003c/em\u003e2]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sinEncl",
          "package": "AERN-RnToRm",
          "signature": "sinEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#sinEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate sin for enclosures assuming the range of is within pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sinEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:sinEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003esin(f)\u003c/code\u003e for enclosures,\n        assuming the range of \u003ccode\u003ef\u003c/code\u003e is within \u003ccode\u003e[-pi\u003cem\u003e2,pi\u003c/em\u003e2]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sinIEncl",
          "package": "AERN-RnToRm",
          "signature": "sinIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#sinIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate sin for enclosures assuming the range of is within pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sinIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:sinIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003esqrt(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sqrtEncl",
          "package": "AERN-RnToRm",
          "signature": "sqrtEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#sqrtEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate sqrt for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sqrtEncl",
          "package": "AERN-RnToRm",
          "partial": "Encl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:sqrtEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate \u003ccode\u003esqrt(f)\u003c/code\u003e for enclosures.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sqrtIEncl",
          "package": "AERN-RnToRm",
          "signature": "sqrtIEncl",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#sqrtIEncl",
          "type": "method"
        },
        "index": {
          "description": "Approximate sqrt for enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "sqrtIEncl",
          "package": "AERN-RnToRm",
          "partial": "IEncl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:sqrtIEncl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an upper bound of a basic function over \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "upperBound",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex -\u003e ufb -\u003e b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#upperBound",
          "type": "method"
        },
        "index": {
          "description": "Find an upper bound of basic function over",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "upperBound",
          "normalized": "EffortIndex-\u003ea-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Bound",
          "signature": "EffortIndex-\u003eufb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an upper bound of a basic function over \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "upperBoundPrecise",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex -\u003e ufb -\u003e b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#upperBoundPrecise",
          "type": "method"
        },
        "index": {
          "description": "Find an upper bound of basic function over",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "upperBoundPrecise",
          "normalized": "EffortIndex-\u003ea-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Bound Precise",
          "signature": "EffortIndex-\u003eufb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:upperBoundPrecise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasure the volume between a function \n        and the zero hyperplane on the domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "volumeAboveZeroUp",
          "package": "AERN-RnToRm",
          "signature": "volumeAboveZeroUp",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-Base.html#volumeAboveZeroUp",
          "type": "method"
        },
        "index": {
          "description": "Measure the volume between function and the zero hyperplane on the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom Base",
          "module": "Data.Number.ER.RnToRm.UnitDom.Base",
          "name": "volumeAboveZeroUp",
          "package": "AERN-RnToRm",
          "partial": "Above Zero Up",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-Base.html#v:volumeAboveZeroUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eDefinition of the polynomial datatype and simple related functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "Basic",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Definition of the polynomial datatype and simple related functions",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "Basic",
          "package": "AERN-RnToRm",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polynomial represented by its coefficients it the Chebyshev basis.\n\u003c/p\u003e\u003cp\u003eThe polynomials are never to be used outside the domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll operations are rounded in such a way that the resulting polynomial\n    is a \u003cem\u003epoint-wise upper or lower bound\u003c/em\u003e of the exact result. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#ERChebPoly",
          "type": "data"
        },
        "index": {
          "description": "polynomial represented by its coefficients it the Chebyshev basis The polynomials are never to be used outside the domain All operations are rounded in such way that the resulting polynomial is point-wise upper or lower bound of the exact result",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "partial": "ERCheb Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#t:ERChebPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "TermKey",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#TermKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "TermKey",
          "package": "AERN-RnToRm",
          "partial": "Term Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#t:TermKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic\",\"Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\"]",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#ERChebPoly",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:ERChebPoly\",\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html#v:ERChebPoly\"]"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "partial": "ERCheb Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:ERChebPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion of polynomials from Chebyshev basis to the X^n basis\n\u003c/p\u003e\u003cp\u003e(not exact - suffering from rounding in the coefficient conversions)\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebToXBasis",
          "package": "AERN-RnToRm",
          "signature": "Map (TermKey box) b-\u003e Map (TermKey box) b",
          "type": "function"
        },
        "index": {
          "description": "conversion of polynomials from Chebyshev basis to the basis not exact suffering from rounding in the coefficient conversions",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebToXBasis",
          "normalized": "Map(TermKey a)b-\u003eMap(TermKey a)b",
          "package": "AERN-RnToRm",
          "partial": "To XBasis",
          "signature": "Map(TermKey box)b-\u003eMap(TermKey box)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chebToXBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChebyshev polynomials expressed as lists of integer coefficients for powers 0,1,2... \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebyXCoeffs",
          "package": "AERN-RnToRm",
          "signature": "[[d]]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chebyXCoeffs",
          "type": "function"
        },
        "index": {
          "description": "Chebyshev polynomials expressed as lists of integer coefficients for powers",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebyXCoeffs",
          "normalized": "[[a]]",
          "package": "AERN-RnToRm",
          "partial": "XCoeffs",
          "signature": "[[d]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chebyXCoeffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChebyshev polynomials expressed as associative lists power -\u003e coeff \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebyXCoeffsLists",
          "package": "AERN-RnToRm",
          "signature": "[[(d1, d2)]]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chebyXCoeffsLists",
          "type": "function"
        },
        "index": {
          "description": "Chebyshev polynomials expressed as associative lists power coeff",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chebyXCoeffsLists",
          "normalized": "[[(a,a)]]",
          "package": "AERN-RnToRm",
          "partial": "XCoeffs Lists",
          "signature": "[[(d,d)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chebyXCoeffsLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an affine polynomial.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplAffine",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e Map varid b -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplAffine",
          "type": "function"
        },
        "index": {
          "description": "Construct an affine polynomial",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplAffine",
          "normalized": "a-\u003eMap b a-\u003eERChebPoly c a",
          "package": "AERN-RnToRm",
          "partial": "Affine",
          "signature": "b-\u003eMap varid b-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic\",\"Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\"]",
          "name": "chplCoeffs",
          "package": "AERN-RnToRm",
          "signature": "Map (TermKey box) b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#ERChebPoly",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplCoeffs\",\"http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html#v:chplCoeffs\"]"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplCoeffs",
          "package": "AERN-RnToRm",
          "partial": "Coeffs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplCoeffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplConst",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplConst",
          "normalized": "a-\u003eERChebPoly b a",
          "package": "AERN-RnToRm",
          "partial": "Const",
          "signature": "b-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplConstTermKey",
          "package": "AERN-RnToRm",
          "signature": "box",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplConstTermKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplConstTermKey",
          "package": "AERN-RnToRm",
          "partial": "Const Term Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplConstTermKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplCountTerms",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplCountTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplCountTerms",
          "normalized": "ERChebPoly a b-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Count Terms",
          "signature": "ERChebPoly box b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplCountTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the polynomial is constant, return the constant,\n    otherwise return Nothing.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplGetConst",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e Maybe b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplGetConst",
          "type": "function"
        },
        "index": {
          "description": "If the polynomial is constant return the constant otherwise return Nothing",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplGetConst",
          "normalized": "ERChebPoly a b-\u003eMaybe b",
          "package": "AERN-RnToRm",
          "partial": "Get Const",
          "signature": "ERChebPoly box b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplGetConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect all terms of the polynomial and return the \n    degree of the highest degree term.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplGetDegree",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e d",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplGetDegree",
          "type": "function"
        },
        "index": {
          "description": "Inspect all terms of the polynomial and return the degree of the highest degree term",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplGetDegree",
          "normalized": "ERChebPoly a b-\u003ec",
          "package": "AERN-RnToRm",
          "partial": "Get Degree",
          "signature": "ERChebPoly box b-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplGetDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplIsConstTermKey",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e Bool",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplIsConstTermKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplIsConstTermKey",
          "normalized": "a-\u003eBool",
          "package": "AERN-RnToRm",
          "partial": "Is Const Term Key",
          "signature": "box-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplIsConstTermKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplRemoveZeroTermsUp",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplRemoveZeroTermsUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplRemoveZeroTermsUp",
          "normalized": "ERChebPoly a b-\u003eERChebPoly a b",
          "package": "AERN-RnToRm",
          "partial": "Remove Zero Terms Up",
          "signature": "ERChebPoly box b-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplRemoveZeroTermsUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a polynomial to a string representation,\n    using the ordinary x^n basis.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplShow",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Bool-\u003e Bool-\u003e ERChebPoly box b-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Convert polynomial to string representation using the ordinary basis",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplShow",
          "normalized": "Int-\u003eBool-\u003eBool-\u003eERChebPoly a b-\u003eString",
          "package": "AERN-RnToRm",
          "partial": "Show",
          "signature": "Int-\u003eBool-\u003eBool-\u003eERChebPoly box b-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplTermArity",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e Int",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplTermArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplTermArity",
          "normalized": "a-\u003eInt",
          "package": "AERN-RnToRm",
          "partial": "Term Arity",
          "signature": "box-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplTermArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplTermOrder",
          "package": "AERN-RnToRm",
          "signature": "box -\u003e d",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplTermOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplTermOrder",
          "normalized": "a-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Term Order",
          "signature": "box-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplTermOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a basic \u003ca\u003ex\u003c/a\u003e polynomial for a given variable number. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplVar",
          "package": "AERN-RnToRm",
          "signature": "varid -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#chplVar",
          "type": "function"
        },
        "index": {
          "description": "Make basic polynomial for given variable number",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "chplVar",
          "normalized": "a-\u003eERChebPoly b c",
          "package": "AERN-RnToRm",
          "partial": "Var",
          "signature": "varid-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:chplVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion of one Chebyshev term to the X^n basis\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "termXterms",
          "package": "AERN-RnToRm",
          "signature": "TermKey box-\u003e Map (TermKey box) Integer",
          "type": "function"
        },
        "index": {
          "description": "conversion of one Chebyshev term to the basis",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Basic",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Basic",
          "name": "termXterms",
          "normalized": "TermKey a-\u003eMap(TermKey a)Integer",
          "package": "AERN-RnToRm",
          "partial": "Xterms",
          "signature": "TermKey box-\u003eMap(TermKey box)Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#v:termXterms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of various functions related to the bounds of polynomials.    \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "Bounds",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of various functions related to the bounds of polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "Bounds",
          "package": "AERN-RnToRm",
          "partial": "Bounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind both lower and upper bounds on a polynomial over the \n    unit domain [-1,1]^n.  \n\u003c/p\u003e\u003cp\u003eQuick method that does not converge to exact result with increasing \n    effort index.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBounds",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e (b, b)",
          "type": "function"
        },
        "index": {
          "description": "Find both lower and upper bounds on polynomial over the unit domain Quick method that does not converge to exact result with increasing effort index",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBounds",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Bounds",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind bounds on a polynomial over the unit domain [-1,1]^n.\n\u003c/p\u003e\u003cp\u003eFast but inaccurate method, in essence\n    taking the maximum of the upper affine reduction.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsAffine",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e (b, b)",
          "type": "function"
        },
        "index": {
          "description": "Find bounds on polynomial over the unit domain Fast but inaccurate method in essence taking the maximum of the upper affine reduction",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsAffine",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Bounds Affine",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplBoundsAffine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a close upper bound of a polynomial over the \n    unit domain [-1,1]^n.\n\u003c/p\u003e\u003cp\u003eApproximates all local extrema and computes their maximum.  \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsByDerivative",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e (b, b)",
          "type": "function"
        },
        "index": {
          "description": "Find close upper bound of polynomial over the unit domain Approximates all local extrema and computes their maximum",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsByDerivative",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Bounds By Derivative",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplBoundsByDerivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind both lower and upper bounds on a polynomial over the \n    unit domain [-1,1]^n.\n\u003c/p\u003e\u003cp\u003eQuick method that does not converge to exact result with increasing \n    effort index.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsExpensive",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e (b, b)",
          "type": "function"
        },
        "index": {
          "description": "Find both lower and upper bounds on polynomial over the unit domain Quick method that does not converge to exact result with increasing effort index",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplBoundsExpensive",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Bounds Expensive",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplBoundsExpensive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a lower bound on a polynomial over the \n    unit domain [-1,1]^n.  \n\u003c/p\u003e\u003cp\u003eQuick method that does not converge to exact result with increasing \n    effort index.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplLowerBound",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Find lower bound on polynomial over the unit domain Quick method that does not converge to exact result with increasing effort index",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplLowerBound",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Lower Bound",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplLowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a lower bound on a polynomial over the \n    unit domain [-1,1]^n.  \n\u003c/p\u003e\u003cp\u003eQuick method that does not converge to exact result with increasing \n    effort index.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplLowerBoundExpensive",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Find lower bound on polynomial over the unit domain Quick method that does not converge to exact result with increasing effort index",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplLowerBoundExpensive",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Lower Bound Expensive",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplLowerBoundExpensive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate from below and  from above the pointwise maximum of two polynomials\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplMax",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate from below and from above the pointwise maximum of two polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplMax",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Max",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate from below and  from above the pointwise minimum of two polynomials\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplMin",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate from below and from above the pointwise minimum of two polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplMin",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Min",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the function max(0,p(x)) by a polynomial from below\n     and from above. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplNonneg",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the function max by polynomial from below and from above",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplNonneg",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Nonneg",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplNonneg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003echplNonneg\u003c/a\u003e\u003c/code\u003e using a cubic approximation. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplNonnegCubic",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "version of chplNonneg using cubic approximation",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplNonnegCubic",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Nonneg Cubic",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplNonnegCubic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a polynomial by an enclosure (with non-negated lower bound).\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplTimesLoHi",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e (ERChebPoly box b, ERChebPoly box b, b) -\u003e (ERChebPoly box b, ERChebPoly box b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#chplTimesLoHi",
          "type": "function"
        },
        "index": {
          "description": "Multiply polynomial by an enclosure with non-negated lower bound",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplTimesLoHi",
          "normalized": "ERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b,b)-\u003e(ERChebPoly a b,ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Times Lo Hi",
          "signature": "ERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b,b)-\u003e(ERChebPoly box b,ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplTimesLoHi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an upper bound on a polynomial over the \n    unit domain [-1,1]^n.  \n\u003c/p\u003e\u003cp\u003eQuick method that does not converge to exact result with increasing \n    effort index.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplUpperBound",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Find an upper bound on polynomial over the unit domain Quick method that does not converge to exact result with increasing effort index",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplUpperBound",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Upper Bound",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplUpperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an upper bound on a polynomial over the \n    unit domain [-1,1]^n.  \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplUpperBoundExpensive",
          "package": "AERN-RnToRm",
          "signature": "EffortIndex-\u003e ERChebPoly box b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Find an upper bound on polynomial over the unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Bounds",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Bounds",
          "name": "chplUpperBoundExpensive",
          "normalized": "EffortIndex-\u003eERChebPoly a b-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Upper Bound Expensive",
          "signature": "EffortIndex-\u003eERChebPoly box b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Bounds.html#v:chplUpperBoundExpensive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of pointwise consistently rounded polynomial composition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "Compose",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Compose.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of pointwise consistently rounded polynomial composition",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Compose",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "Compose",
          "package": "AERN-RnToRm",
          "partial": "Compose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Compose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a polynomial and an enclosure, producing a correcly rounded enclosure,\n    assuming the second polynomial maps [-1,1] into [-1,1].\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "enclCompose",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e varid-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Compose polynomial and an enclosure producing correcly rounded enclosure assuming the second polynomial maps into",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Compose",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "enclCompose",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003ec-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Compose",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003evarid-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Compose.html#v:enclCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two polynomials, rounding upwards\n    provided the second polynomial maps [-1,1] into [-1,1].\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "enclComposeMany",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e Map varid (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Compose two polynomials rounding upwards provided the second polynomial maps into",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Compose",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Compose",
          "name": "enclComposeMany",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003eMap c(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Compose Many",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003eMap varid(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Compose.html#v:enclComposeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of safely rounded derivative of polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "Derivative",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Derivative.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of safely rounded derivative of polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Derivative",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "Derivative",
          "package": "AERN-RnToRm",
          "partial": "Derivative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Derivative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiate a polynomial using one of its variables. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "ballDifferentiate",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b-\u003e varid-\u003e (ERChebPoly box b, b)",
          "type": "function"
        },
        "index": {
          "description": "Differentiate polynomial using one of its variables",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Derivative",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "ballDifferentiate",
          "normalized": "ERChebPoly a b-\u003ec-\u003e(ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Differentiate",
          "signature": "ERChebPoly box b-\u003evarid-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Derivative.html#v:ballDifferentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiate a polynomial using one of its variables. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "chplDifferentiate",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b-\u003e varid-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Differentiate polynomial using one of its variables",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Derivative",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Derivative",
          "name": "chplDifferentiate",
          "normalized": "ERChebPoly a b-\u003ec-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Differentiate",
          "signature": "ERChebPoly box b-\u003evarid-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Derivative.html#v:chplDifferentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of division applied to basic polynomial enclosures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Division",
          "name": "Division",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Division.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of division applied to basic polynomial enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Division",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Division",
          "name": "Division",
          "package": "AERN-RnToRm",
          "partial": "Division",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Division.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise reciprocal of a polynomial \n    by another polynomial from below and from above\n    using the tau method    \n    as described in [Mason & Handscomb 2003, p 62]. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Division",
          "name": "enclRecip",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise reciprocal of polynomial by another polynomial from below and from above using the tau method as described in Mason Handscomb",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Division",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Division",
          "name": "enclRecip",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Recip",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Division.html#v:enclRecip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of inner-rounded division \n    applied to basic polynomial enclosures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.DivisionInner",
          "name": "DivisionInner",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-DivisionInner.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of inner-rounded division applied to basic polynomial enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom DivisionInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.DivisionInner",
          "name": "DivisionInner",
          "package": "AERN-RnToRm",
          "partial": "Division Inner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-DivisionInner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise reciprocal of a positive polynomial \n    by another polynomial from below and from above\n    using the tau method\n    as described in [Mason & Handscomb 2003, p 62]. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.DivisionInner",
          "name": "ienclRecipPositive",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e Int-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise reciprocal of positive polynomial by another polynomial from below and from above using the tau method as described in Mason Handscomb",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom DivisionInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.DivisionInner",
          "name": "ienclRecipPositive",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Recip Positive",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-DivisionInner.html#v:ienclRecipPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of elementary functions applied to polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "Elementary",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of elementary functions applied to polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "Elementary",
          "package": "AERN-RnToRm",
          "partial": "Elementary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise arcus tangens of an enclosure. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclAtan",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise arcus tangens of an enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclAtan",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Atan",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclAtan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise cosine of an enclosure.\n\u003c/p\u003e\u003cp\u003eAssuming the polynomial range is [-pi\u003cem\u003e2, pi\u003c/em\u003e2]. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclCosine",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise cosine of an enclosure Assuming the polynomial range is pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclCosine",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Cosine",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclCosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise exponential of a polynomial enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclExp",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise exponential of polynomial enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclExp",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Exp",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise natural logarithm of an enclosure. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclLog",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise natural logarithm of an enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclLog",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Log",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise integer power of an enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclPow",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e i-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise integer power of an enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclPow",
          "normalized": "Int-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003ec-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Pow",
          "signature": "Int-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003ei-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise sine of an enclosure.\n\u003c/p\u003e\u003cp\u003eAssuming the polynomial range is [-pi\u003cem\u003e2, pi\u003c/em\u003e2]. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclSine",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise sine of an enclosure Assuming the polynomial range is pi pi",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclSine",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Sine",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclSine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the pointwise square root of a polynomial enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclSqrt",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate the pointwise square root of polynomial enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "enclSqrt",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Sqrt",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:enclSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "sincosTaylorAux",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e Bool-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e Int-\u003e Int-\u003e ERInterval b-\u003e ((ERChebPoly box b, ERChebPoly box b), Int, ERInterval b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Elementary",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Elementary",
          "name": "sincosTaylorAux",
          "normalized": "Int-\u003eInt-\u003eBool-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003eInt-\u003eInt-\u003eERInterval b-\u003e((ERChebPoly a b,ERChebPoly a b),Int,ERInterval b)",
          "package": "AERN-RnToRm",
          "partial": "Taylor Aux",
          "signature": "Int-\u003eInt-\u003eBool-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003eInt-\u003eInt-\u003eERInterval b-\u003e((ERChebPoly box b,ERChebPoly box b),Int,ERInterval b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Elementary.html#v:sincosTaylorAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of inner-rounded \n    elementary functions applied to polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.ElementaryInner",
          "name": "ElementaryInner",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-ElementaryInner.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of inner-rounded elementary functions applied to polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom ElementaryInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.ElementaryInner",
          "name": "ElementaryInner",
          "package": "AERN-RnToRm",
          "partial": "Elementary Inner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-ElementaryInner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.ElementaryInner",
          "name": "ienclSqrt",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e EffortIndex-\u003e Int-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom ElementaryInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.ElementaryInner",
          "name": "ienclSqrt",
          "normalized": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Sqrt",
          "signature": "Int-\u003eInt-\u003eEffortIndex-\u003eInt-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-ElementaryInner.html#v:ienclSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of selected operations working on pairs\n    of polynomials understood as function enclosures.\n    These are needed to define composition and some elementary operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "Enclosure",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of selected operations working on pairs of polynomials understood as function enclosures These are needed to define composition and some elementary operations",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "Enclosure",
          "package": "AERN-RnToRm",
          "partial": "Enclosure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a polynomial by a scalar interval, returning an enclosure.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "chplScaleRA",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERInterval b-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply polynomial by scalar interval returning an enclosure",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "chplScaleRA",
          "normalized": "Int-\u003eInt-\u003eERInterval a-\u003eERChebPoly b a-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "Scale RA",
          "signature": "Int-\u003eInt-\u003eERInterval b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:chplScaleRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclAdd",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclAdd",
          "normalized": "Int-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Add",
          "signature": "Int-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclConst",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#enclConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclConst",
          "normalized": "a-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "Const",
          "signature": "b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the Chebyshev polynomials of the first kind\n    applied to a given polynomial, yielding a list of polynomial enclosures. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclEvalTs",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e [(ERChebPoly box b, ERChebPoly box b)]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the Chebyshev polynomials of the first kind applied to given polynomial yielding list of polynomial enclosures",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclEvalTs",
          "normalized": "Int-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e[(ERChebPoly a b,ERChebPoly a b)]",
          "package": "AERN-RnToRm",
          "partial": "Eval Ts",
          "signature": "Int-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e[(ERChebPoly box b,ERChebPoly box b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclEvalTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclMultiply",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclMultiply",
          "normalized": "Int-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Multiply",
          "signature": "Int-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclRAConst",
          "package": "AERN-RnToRm",
          "signature": "ERInterval b -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#enclRAConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclRAConst",
          "normalized": "ERInterval a-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "RAConst",
          "signature": "ERInterval b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclRAConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclRAScale",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERInterval b-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclRAScale",
          "normalized": "Int-\u003eInt-\u003eERInterval a-\u003e(ERChebPoly b a,ERChebPoly b a)-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "RAScale",
          "signature": "Int-\u003eInt-\u003eERInterval b-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclRAScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply an enclosure by a scalar.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclScale",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e b-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply an enclosure by scalar",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclScale",
          "normalized": "Int-\u003eInt-\u003ea-\u003e(ERChebPoly b a,ERChebPoly b a)-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "Scale",
          "signature": "Int-\u003eInt-\u003eb-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply an enclosure by a scalar \n    assuming the enclosure is non-negative on the whole unit domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclScaleNonneg",
          "package": "AERN-RnToRm",
          "signature": "b-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply an enclosure by scalar assuming the enclosure is non-negative on the whole unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclScaleNonneg",
          "normalized": "a-\u003e(ERChebPoly b a,ERChebPoly b a)-\u003e(ERChebPoly b a,ERChebPoly b a)",
          "package": "AERN-RnToRm",
          "partial": "Scale Nonneg",
          "signature": "b-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclScaleNonneg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclSquare",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclSquare",
          "normalized": "Int-\u003eInt-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Square",
          "signature": "Int-\u003eInt-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclThin",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#enclThin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclThin",
          "normalized": "ERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Thin",
          "signature": "ERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclThin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a polynomial by an enclosure using min/max\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclThinTimes",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply polynomial by an enclosure using min max",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Enclosure",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Enclosure",
          "name": "enclThinTimes",
          "normalized": "Int-\u003eInt-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Thin Times",
          "signature": "Int-\u003eInt-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Enclosure.html#v:enclThinTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of selected operations working on pairs\n    of polynomials understood as *inner approximations* of function enclosures.\n    These are needed to define full Kaucher arithmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "EnclosureInner",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of selected operations working on pairs of polynomials understood as inner approximations of function enclosures These are needed to define full Kaucher arithmetic",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "EnclosureInner",
          "package": "AERN-RnToRm",
          "partial": "Enclosure Inner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclAdd",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclAdd",
          "normalized": "Int-\u003eInt-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Add",
          "signature": "Int-\u003eInt-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclConst",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#ienclConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclConst",
          "normalized": "a-\u003e((ERChebPoly b a,ERChebPoly b a),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Const",
          "signature": "b-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclMultiply",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclMultiply",
          "normalized": "Int-\u003eInt-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Multiply",
          "signature": "Int-\u003eInt-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclRAConst",
          "package": "AERN-RnToRm",
          "signature": "ERInterval b -\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#ienclRAConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclRAConst",
          "normalized": "ERInterval a-\u003e((ERChebPoly b a,ERChebPoly b a),Bool)",
          "package": "AERN-RnToRm",
          "partial": "RAConst",
          "signature": "ERInterval b-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclRAConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply an enclosure by a scalar \n    assuming the enclosure is non-negative on the whole unit domain.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclScaleNonneg",
          "package": "AERN-RnToRm",
          "signature": "b-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "description": "Multiply an enclosure by scalar assuming the enclosure is non-negative on the whole unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclScaleNonneg",
          "normalized": "a-\u003e((ERChebPoly b a,ERChebPoly b a),Bool)-\u003e((ERChebPoly b a,ERChebPoly b a),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Scale Nonneg",
          "signature": "b-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclScaleNonneg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclSquare",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e Int-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)-\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclSquare",
          "normalized": "Int-\u003eInt-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Square",
          "signature": "Int-\u003eInt-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclThin",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e ((ERChebPoly box b, ERChebPoly box b), Bool)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#ienclThin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom EnclosureInner",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.EnclosureInner",
          "name": "ienclThin",
          "normalized": "ERChebPoly a b-\u003e((ERChebPoly a b,ERChebPoly a b),Bool)",
          "package": "AERN-RnToRm",
          "partial": "Thin",
          "signature": "ERChebPoly box b-\u003e((ERChebPoly box b,ERChebPoly box b),Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-EnclosureInner.html#v:ienclThin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of various evaluation functions related to polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "Eval",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of various evaluation functions related to polynomials",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "Eval",
          "package": "AERN-RnToRm",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chebyEvalTsExact",
          "package": "AERN-RnToRm",
          "signature": "v -\u003e [v]",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chebyEvalTsExact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chebyEvalTsExact",
          "normalized": "a-\u003e[a]",
          "package": "AERN-RnToRm",
          "partial": "Eval Ts Exact",
          "signature": "v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chebyEvalTsExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a polynomial at a point, consistently rounding upwards and downwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEval",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e boxb -\u003e (b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chplEval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate polynomial at point consistently rounding upwards and downwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEval",
          "normalized": "ERChebPoly a b-\u003ec-\u003e(b,b)",
          "package": "AERN-RnToRm",
          "partial": "Eval",
          "signature": "ERChebPoly box b-\u003eboxb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chplEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEvalDown",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e boxb -\u003e b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chplEvalDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEvalDown",
          "normalized": "ERChebPoly a b-\u003ec-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Eval Down",
          "signature": "ERChebPoly box b-\u003eboxb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chplEvalDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEvalUp",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e boxb -\u003e b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chplEvalUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplEvalUp",
          "normalized": "ERChebPoly a b-\u003ec-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "Eval Up",
          "signature": "ERChebPoly box b-\u003eboxb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chplEvalUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute several variables in a polynomial with real number approximations,\n    rounding downwards and upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplPartialRAEval",
          "package": "AERN-RnToRm",
          "signature": "(ra -\u003e (b, b)) -\u003e ERChebPoly box b -\u003e boxra -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chplPartialRAEval",
          "type": "function"
        },
        "index": {
          "description": "Substitute several variables in polynomial with real number approximations rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplPartialRAEval",
          "normalized": "(a-\u003e(b,b))-\u003eERChebPoly c b-\u003ed-\u003e(ERChebPoly c b,ERChebPoly c b)",
          "package": "AERN-RnToRm",
          "partial": "Partial RAEval",
          "signature": "(ra-\u003e(b,b))-\u003eERChebPoly box b-\u003eboxra-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chplPartialRAEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a polynomial at a real number approximation \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplRAEval",
          "package": "AERN-RnToRm",
          "signature": "(b -\u003e ra) -\u003e ERChebPoly box b -\u003e boxra -\u003e ra",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#chplRAEval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate polynomial at real number approximation",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Eval",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Eval",
          "name": "chplRAEval",
          "normalized": "(a-\u003eb)-\u003eERChebPoly c a-\u003ed-\u003eb",
          "package": "AERN-RnToRm",
          "partial": "RAEval",
          "signature": "(b-\u003era)-\u003eERChebPoly box b-\u003eboxra-\u003era",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Eval.html#v:chplRAEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of safely rounded integration of polynomials\n    and other related functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Integration.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of safely rounded integration of polynomials and other related functions",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Integration",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Integration",
          "name": "Integration",
          "package": "AERN-RnToRm",
          "partial": "Integration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Integration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate from below and from above the integral of a polynomial.\n\u003c/p\u003e\u003cp\u003eBased on the following formulas for Chebyshev polynomials:\n\u003c/p\u003e\u003cpre\u003e     \\int T_n(x)dx = \n        T_{n+1}(x)/2(n+1) - T_{n-1}(x)/2(n-1)\n\u003c/pre\u003e\u003cpre\u003e     \\int T_1(x)dx = \n        T_2(x)/4 + 1/4\n\u003c/pre\u003e\u003cpre\u003e     \\int T_0(x)dx = \n        T_1(x)\n\u003c/pre\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Integration",
          "name": "chplIntegrate",
          "package": "AERN-RnToRm",
          "signature": "varid-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Approximate from below and from above the integral of polynomial Based on the following formulas for Chebyshev polynomials int dx n-1 n-1 int dx int dx",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Integration",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Integration",
          "name": "chplIntegrate",
          "normalized": "a-\u003eERChebPoly b c-\u003e(ERChebPoly b c,ERChebPoly b c)",
          "package": "AERN-RnToRm",
          "partial": "Integrate",
          "signature": "varid-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Integration.html#v:chplIntegrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of field arithmetic over polynomials \n    with pointwise rounding uniform over the whole unit domain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "Reduce",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Reduce.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of field arithmetic over polynomials with pointwise rounding uniform over the whole unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Reduce",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "Reduce",
          "package": "AERN-RnToRm",
          "partial": "Reduce",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Reduce.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a polynomial to a lower-order one that is dominated by (resp. dominates)\n    it closely on the domain [-1,1].\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "chplReduceDegree",
          "package": "AERN-RnToRm",
          "signature": "Int-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, ERChebPoly box b)",
          "type": "function"
        },
        "index": {
          "description": "Convert polynomial to lower-order one that is dominated by resp dominates it closely on the domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Reduce",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "chplReduceDegree",
          "normalized": "Int-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Reduce Degree",
          "signature": "Int-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Reduce.html#v:chplReduceDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "chplReduceTermCount",
          "package": "AERN-RnToRm",
          "signature": "Int -\u003e ERChebPoly box b -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Reduce.html#chplReduceTermCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Reduce",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Reduce",
          "name": "chplReduceTermCount",
          "normalized": "Int-\u003eERChebPoly a b-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Reduce Term Count",
          "signature": "Int-\u003eERChebPoly box b-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Reduce.html#v:chplReduceTermCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal module for \u003ca\u003eData.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation of addition and multiplication over polynomials \n    with pointwise rounding uniform over the whole unit domain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "Ring",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html",
          "type": "module"
        },
        "index": {
          "description": "Internal module for Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom Implementation of addition and multiplication over polynomials with pointwise rounding uniform over the whole unit domain",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "Ring",
          "package": "AERN-RnToRm",
          "partial": "Ring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two polynomials, rounding downwards and upwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballAdd",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e ERChebPoly box b -\u003e (ERChebPoly box b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#ballAdd",
          "type": "function"
        },
        "index": {
          "description": "Add two polynomials rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballAdd",
          "normalized": "ERChebPoly a b-\u003eERChebPoly a b-\u003e(ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Add",
          "signature": "ERChebPoly box b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:ballAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a constant to a polynomial, rounding downwards and upwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballAddConst",
          "package": "AERN-RnToRm",
          "signature": "b -\u003e ERChebPoly box b -\u003e (ERChebPoly box b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#ballAddConst",
          "type": "function"
        },
        "index": {
          "description": "Add constant to polynomial rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballAddConst",
          "normalized": "a-\u003eERChebPoly b a-\u003e(ERChebPoly b a,a)",
          "package": "AERN-RnToRm",
          "partial": "Add Const",
          "signature": "b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:ballAddConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two polynomials, rounding downwards and upwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballMultiply",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply two polynomials rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballMultiply",
          "normalized": "ERChebPoly a b-\u003eERChebPoly a b-\u003e(ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Multiply",
          "signature": "ERChebPoly box b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:ballMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a polynomial by a scalar rounding downwards and upwards. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballScale",
          "package": "AERN-RnToRm",
          "signature": "b-\u003e ERChebPoly box b-\u003e (ERChebPoly box b, b)",
          "type": "function"
        },
        "index": {
          "description": "Multiply polynomial by scalar rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballScale",
          "normalized": "a-\u003eERChebPoly b a-\u003e(ERChebPoly b a,a)",
          "package": "AERN-RnToRm",
          "partial": "Scale",
          "signature": "b-\u003eERChebPoly box b-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:ballScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a polynomial by itself, rounding downwards and upwards.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballSquare",
          "package": "AERN-RnToRm",
          "signature": "ERChebPoly box b -\u003e (ERChebPoly box b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#ballSquare",
          "type": "function"
        },
        "index": {
          "description": "Multiply polynomial by itself rounding downwards and upwards",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "ballSquare",
          "normalized": "ERChebPoly a b-\u003e(ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Square",
          "signature": "ERChebPoly box b-\u003e(ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:ballSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2Down",
          "package": "AERN-RnToRm",
          "signature": "(ERChebPoly box b, b) -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#chplBall2Down",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2Down",
          "normalized": "(ERChebPoly a b,b)-\u003eERChebPoly a b",
          "package": "AERN-RnToRm",
          "partial": "Ball Down",
          "signature": "(ERChebPoly box b,b)-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:chplBall2Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate a polynomial exactly.\n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2DownUp",
          "package": "AERN-RnToRm",
          "signature": "(ERChebPoly box b, b) -\u003e (ERChebPoly box b, ERChebPoly box b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#chplBall2DownUp",
          "type": "function"
        },
        "index": {
          "description": "Negate polynomial exactly",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2DownUp",
          "normalized": "(ERChebPoly a b,b)-\u003e(ERChebPoly a b,ERChebPoly a b)",
          "package": "AERN-RnToRm",
          "partial": "Ball Down Up",
          "signature": "(ERChebPoly box b,b)-\u003e(ERChebPoly box b,ERChebPoly box b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:chplBall2DownUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2DownUpWd",
          "package": "AERN-RnToRm",
          "signature": "(ERChebPoly box b, b) -\u003e (ERChebPoly box b, ERChebPoly box b, b)",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#chplBall2DownUpWd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2DownUpWd",
          "normalized": "(ERChebPoly a b,b)-\u003e(ERChebPoly a b,ERChebPoly a b,b)",
          "package": "AERN-RnToRm",
          "partial": "Ball Down Up Wd",
          "signature": "(ERChebPoly box b,b)-\u003e(ERChebPoly box b,ERChebPoly box b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:chplBall2DownUpWd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2Up",
          "package": "AERN-RnToRm",
          "signature": "(ERChebPoly box b, b) -\u003e ERChebPoly box b",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#chplBall2Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom Ring",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom.Ring",
          "name": "chplBall2Up",
          "normalized": "(ERChebPoly a b,b)-\u003eERChebPoly a b",
          "package": "AERN-RnToRm",
          "partial": "Ball Up",
          "signature": "(ERChebPoly box b,b)-\u003eERChebPoly box b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Ring.html#v:chplBall2Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArithmetic of multivariate polynomials \n    represented by their coefficients it the Chebyshev basis.\n\u003c/p\u003e\u003cp\u003eThe polynomials are never to be used outside the domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll operations are rounded in such a way that the resulting polynomial\n    is a \u003cem\u003epoint-wise upper or lower bound\u003c/em\u003e of the exact result. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "Polynom",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html",
          "type": "module"
        },
        "index": {
          "description": "Arithmetic of multivariate polynomials represented by their coefficients it the Chebyshev basis The polynomials are never to be used outside the domain All operations are rounded in such way that the resulting polynomial is point-wise upper or lower bound of the exact result",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "Polynom",
          "package": "AERN-RnToRm",
          "partial": "Polynom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polynomial represented by its coefficients it the Chebyshev basis.\n\u003c/p\u003e\u003cp\u003eThe polynomials are never to be used outside the domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll operations are rounded in such a way that the resulting polynomial\n    is a \u003cem\u003epoint-wise upper or lower bound\u003c/em\u003e of the exact result. \n\u003c/p\u003e",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#ERChebPoly",
          "type": "data"
        },
        "index": {
          "description": "polynomial represented by its coefficients it the Chebyshev basis The polynomials are never to be used outside the domain All operations are rounded in such way that the resulting polynomial is point-wise upper or lower bound of the exact result",
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "ERChebPoly",
          "package": "AERN-RnToRm",
          "partial": "ERCheb Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html#t:ERChebPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "TermKey",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom-Basic.html#TermKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number ER RnToRm UnitDom ChebyshevBase Polynom",
          "module": "Data.Number.ER.RnToRm.UnitDom.ChebyshevBase.Polynom",
          "name": "TermKey",
          "package": "AERN-RnToRm",
          "partial": "Term Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm-UnitDom-ChebyshevBase-Polynom.html#t:TermKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module bundles some of the most important functionality\n    of the AERN-RnToRm package.  \n    It is intended to be imported *qualified*.\n\u003c/p\u003e\u003cp\u003eAERN-RnToRm provides\n    datatypes and abstractions for approximating functions\n    of type \u003ccode\u003eD -\u003e R^m\u003c/code\u003e where \u003ccode\u003eD\u003c/code\u003e is a bounded interval in \u003ccode\u003eR^n\u003c/code\u003e\n    with non-empty interior.\n\u003c/p\u003e\u003cp\u003eAbstractions are provided via 4 type classes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERUnitFnBase\u003c/a\u003e\u003c/code\u003e: \n        generalises polynomials with floating point coefficients.\n        (\u003cem\u003eNot exported here, used only internally.\u003c/em\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnApprox\u003c/a\u003e\u003c/code\u003e: \n        generalises functions enclosures on a certain unspecified domain.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERUnitFnApprox\u003c/a\u003e\u003c/code\u003e (extends \u003ccode\u003e\u003ca\u003eERFnApprox\u003c/a\u003e\u003c/code\u003e): generalises function graph enclosures\n        on the domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e.\n        (\u003cem\u003eNot exported here, used only internally.\u003c/em\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e (extends \u003ccode\u003e\u003ca\u003eERFnApprox\u003c/a\u003e\u003c/code\u003e):\n        generalises function enclosures over a specified and queriable domain box\n        (instance of class \u003ccode\u003e\u003ca\u003eDomainBox\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAt all levels, all field operations are supported as well as\n     some elementary operations, namely exp, sin and cos.\n     Log and sqrt are planned to be added soon. \n\u003c/p\u003e\u003cp\u003eImplementations of \u003ccode\u003e\u003ca\u003eERUnitFnBase\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERChebPoly\u003c/a\u003e\u003c/code\u003e \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBy using the Chebyshev basis on domain \u003ccode\u003e[-1,1]^n\u003c/code\u003e, \n     we gain simple and optimally rounding degree reduction \n     as well as relatively simple handling of rounding \n     in other operations.\n\u003c/p\u003e\u003cp\u003eImplementations of \u003ccode\u003e\u003ca\u003eERUnitFnApprox\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eImplementations of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnDomTranslApprox\u003c/a\u003e\u003c/code\u003e: \n            builds a basic implementation \n            using an instance of \u003ccode\u003e\u003ca\u003eERUnitFnApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnTuple\u003c/a\u003e\u003c/code\u003e: \n            extends another implementation of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e \n            to work with lists of functions simultaneously.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnDomEdgesApprox\u003c/a\u003e\u003c/code\u003e: \n            separately enclose a function on its domain box \n            as well as on all the domain's hyper-edges \n            (including the corners) using\n            another implementation of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eERFnPiecewise\u003c/a\u003e\u003c/code\u003e: \n            allows the domain box to be bisected \n            to an arbitrary finite depth \n            and uses another implementation of \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e \n            to approximate the function on each segment. \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Number.ER.RnToRm",
          "name": "RnToRm",
          "package": "AERN-RnToRm",
          "source": "src/Data-Number-ER-RnToRm.html",
          "type": "module"
        },
        "index": {
          "description": "This module bundles some of the most important functionality of the AERN-RnToRm package It is intended to be imported qualified AERN-RnToRm provides datatypes and abstractions for approximating functions of type where is bounded interval in with non-empty interior Abstractions are provided via type classes ERUnitFnBase generalises polynomials with floating point coefficients Not exported here used only internally ERFnApprox generalises functions enclosures on certain unspecified domain ERUnitFnApprox extends ERFnApprox generalises function graph enclosures on the domain Not exported here used only internally ERFnDomApprox extends ERFnApprox generalises function enclosures over specified and queriable domain box instance of class DomainBox At all levels all field operations are supported as well as some elementary operations namely exp sin and cos Log and sqrt are planned to be added soon Implementations of ERUnitFnBase ERChebPoly By using the Chebyshev basis on domain we gain simple and optimally rounding degree reduction as well as relatively simple handling of rounding in other operations Implementations of ERUnitFnApprox ERFnInterval Implementations of ERFnDomApprox ERFnDomTranslApprox builds basic implementation using an instance of ERUnitFnApprox ERFnTuple extends another implementation of ERFnDomApprox to work with lists of functions simultaneously ERFnDomEdgesApprox separately enclose function on its domain box as well as on all the domain hyper-edges including the corners using another implementation of ERFnDomApprox ERFnPiecewise allows the domain box to be bisected to an arbitrary finite depth and uses another implementation of ERFnDomApprox to approximate the function on each segment",
          "hierarchy": "Data Number ER RnToRm",
          "module": "Data.Number.ER.RnToRm",
          "name": "RnToRm",
          "package": "AERN-RnToRm",
          "partial": "Rn To Rm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-RnToRm/docs/Data-Number-ER-RnToRm.html#"
      }
    }
  ]
]