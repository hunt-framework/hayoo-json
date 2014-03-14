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
        "word": "yarr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore type system\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yarr.Base",
          "name": "Base",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Core type system",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Base",
          "package": "yarr",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for handling \u003cem\u003en\u003c/em\u003e-ary functions.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Arity",
          "package": "yarr",
          "type": "class"
        },
        "index": {
          "description": "Type class for handling ary functions",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Arity",
          "package": "yarr",
          "partial": "Arity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of vector expressed as type-level natural.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Dim",
          "package": "yarr",
          "signature": "Dim",
          "type": "function"
        },
        "index": {
          "description": "Size of vector expressed as type-level natural",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Dim",
          "package": "yarr",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper which is used to make \u003ccode\u003e\u003ca\u003eFn\u003c/a\u003e\u003c/code\u003e injective.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Fun",
          "package": "yarr",
          "type": "data"
        },
        "index": {
          "description": "Newtype wrapper which is used to make Fn injective",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Fun",
          "package": "yarr",
          "partial": "Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for arrays which could be created.\n It combines a pair of representations: freezed and mutable (raw).\n This segregation is lifted from Boxed representation\n and, in the final, from GHC system of primitive arrays.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - freezed array representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003emr\u003c/code\u003e - mutable, raw array representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type index, common for both representations\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - element type\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr.Base",
          "name": "Manifest",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#Manifest",
          "type": "class"
        },
        "index": {
          "description": "Class for arrays which could be created It combines pair of representations freezed and mutable raw This segregation is lifted from Boxed representation and in the final from GHC system of primitive arrays Parameters freezed array representation mr mutable raw array representation load type index common for both representations sh shape of arrays element type",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Manifest",
          "package": "yarr",
          "partial": "Manifest",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "NFData",
          "package": "yarr",
          "type": "class"
        },
        "index": {
          "description": "class of types that can be fully evaluated",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "NFData",
          "package": "yarr",
          "partial": "NFData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:NFData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level fixation of preferred work (load, fold, etc.)\n index type of the array load type.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type index\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e - preferred work index, \u003ccode\u003eInt\u003c/code\u003e or \u003ccode\u003esh\u003c/code\u003e itself\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr.Base",
          "name": "PreferredWorkIndex",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#PreferredWorkIndex",
          "type": "class"
        },
        "index": {
          "description": "Type level fixation of preferred work load fold etc index type of the array load type Parameters load type index sh shape of arrays preferred work index Int or sh itself",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "PreferredWorkIndex",
          "package": "yarr",
          "partial": "Preferred Work Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:PreferredWorkIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class generalizes \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eParamenters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - representation,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - element type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCounterpart for arrays of vectors: \u003ccode\u003e\u003ca\u003eVecRegular\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Regular",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#Regular",
          "type": "class"
        },
        "index": {
          "description": "This class generalizes USource and UTarget Paramenters representation load type sh shape element type Counterpart for arrays of vectors VecRegular",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Regular",
          "package": "yarr",
          "partial": "Regular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for column-major, regular composite array indices.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Shape",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Shape",
          "type": "class"
        },
        "index": {
          "description": "Class for column-major regular composite array indices",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Shape",
          "package": "yarr",
          "partial": "Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for arrays which could be indexed.\n\u003c/p\u003e\u003cp\u003eIt's functions are unsafe: you \u003cem\u003emust\u003c/em\u003e call \u003ccode\u003e\u003ca\u003etouchArray\u003c/a\u003e\u003c/code\u003e after the last call.\n Fortunately, you will hardly ever need to call them manually.\n\u003c/p\u003e\u003cp\u003eMinimum complete defenition: \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCounterpart for arrays of vectors: \u003ccode\u003e\u003ca\u003eUVecSource\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "USource",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#USource",
          "type": "class"
        },
        "index": {
          "description": "Class for arrays which could be indexed It functions are unsafe you must call touchArray after the last call Fortunately you will hardly ever need to call them manually Minimum complete defenition index or linearIndex Counterpart for arrays of vectors UVecSource",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "USource",
          "package": "yarr",
          "partial": "USource",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:USource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for mutable arrays.\n\u003c/p\u003e\u003cp\u003eJust like for \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e, it's function are unsafe\n and require calling \u003ccode\u003e\u003ca\u003etouchArray\u003c/a\u003e\u003c/code\u003e after the last call.\n\u003c/p\u003e\u003cp\u003eMinimum complete defenition: \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCounterpart for arrays of vectors: \u003ccode\u003e\u003ca\u003eUVecTarget\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "UTarget",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#UTarget",
          "type": "class"
        },
        "index": {
          "description": "Class for mutable arrays Just like for USource it function are unsafe and require calling touchArray after the last call Minimum complete defenition write or linearWrite Counterpart for arrays of vectors UVecTarget",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "UTarget",
          "package": "yarr",
          "partial": "UTarget",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:UTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for arrays of vectors which could be indexed.\n The class doesn't need to define functions, it just gathers it's dependencies.\n\u003c/p\u003e\u003cp\u003eCounterpart for \"simple\" arrays: \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "UVecSource",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#UVecSource",
          "type": "class"
        },
        "index": {
          "description": "Class for arrays of vectors which could be indexed The class doesn need to define functions it just gathers it dependencies Counterpart for simple arrays USource",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "UVecSource",
          "package": "yarr",
          "partial": "UVec Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:UVecSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for mutable arrays of vectors.\n The class doesn't need to define functions, it just gathers it's dependencies.\n\u003c/p\u003e\u003cp\u003eCounterpart for \"simple\" arrays: \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "UVecTarget",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#UVecTarget",
          "type": "class"
        },
        "index": {
          "description": "Class for mutable arrays of vectors The class doesn need to define functions it just gathers it dependencies Counterpart for simple arrays UTarget",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "UVecTarget",
          "package": "yarr",
          "partial": "UVec Target",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:UVecTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector based on the lists. Not very useful by itself but is\n   necessary for implementation.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "VecList",
          "package": "yarr",
          "type": "data"
        },
        "index": {
          "description": "Vector based on the lists Not very useful by itself but is necessary for implementation",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "VecList",
          "package": "yarr",
          "partial": "Vec List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:VecList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for arrays of vectors.\n\u003c/p\u003e\u003cp\u003eParamenters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - (entire) representation.\n    Associated array type for this class is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e r sh (v e)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eslr\u003c/code\u003e - slice representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ev\u003c/code\u003e - vector type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e - \u003cem\u003evector\u003c/em\u003e (not array) element type.\n    Array element type is entire vector: \u003ccode\u003e(v e)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCounterpart for \"simple\" arrays: \u003ccode\u003e\u003ca\u003eRegular\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "VecRegular",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#VecRegular",
          "type": "class"
        },
        "index": {
          "description": "Class for arrays of vectors Paramenters entire representation Associated array type for this class is UArray sh slr slice representation load type sh shape vector type vector not array element type Array element type is entire vector Counterpart for simple arrays Regular",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "VecRegular",
          "package": "yarr",
          "partial": "Vec Regular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:VecRegular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for vectors with fixed length.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "Vector",
          "package": "yarr",
          "type": "class"
        },
        "index": {
          "description": "Type class for vectors with fixed length",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "Vector",
          "package": "yarr",
          "partial": "Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal implementation class. Generalizes \u003ccode\u003elinear-\u003c/code\u003e and simple\n indexing and writing function in \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "WorkIndex",
          "package": "yarr",
          "source": "src/Data-Yarr-Base.html#WorkIndex",
          "type": "class"
        },
        "index": {
          "description": "Internal implementation class Generalizes linear and simple indexing and writing function in USource and UTarget classes",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "WorkIndex",
          "package": "yarr",
          "partial": "Work Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#t:WorkIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e: fully evaluates the first argument, before returning the\n second.\n\u003c/p\u003e\u003cp\u003eThe name \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e is used to illustrate the relationship to \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e:\n where \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e is shallow in the sense that it only evaluates the top\n level of its argument, \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e traverses the entire data structure\n evaluating it completely.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e can be useful for forcing pending exceptions,\n eradicating space leaks, or forcing lazy I/O to happen.  It is\n also useful in conjunction with parallel Strategies (see the\n \u003ccode\u003eparallel\u003c/code\u003e package).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee about the ordering of evaluation.  The\n implementation may evaluate the components of the structure in\n any order or in parallel.  To impose an actual order on\n evaluation, use \u003ccode\u003epseq\u003c/code\u003e from \u003ca\u003eControl.Parallel\u003c/a\u003e in the\n \u003ccode\u003eparallel\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "deepseq",
          "package": "yarr",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "deepseq fully evaluates the first argument before returning the second The name deepseq is used to illustrate the relationship to seq where seq is shallow in the sense that it only evaluates the top level of its argument deepseq traverses the entire data structure evaluating it completely deepseq can be useful for forcing pending exceptions eradicating space leaks or forcing lazy to happen It is also useful in conjunction with parallel Strategies see the parallel package There is no guarantee about the ordering of evaluation The implementation may evaluate the components of the structure in any order or in parallel To impose an actual order on evaluation use pseq from Control.Parallel in the parallel package",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "deepseq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "yarr",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:deepseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the extent an the array.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "extent",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e sh",
          "source": "src/Data-Yarr-Base.html#extent",
          "type": "method"
        },
        "index": {
          "description": "Returns the extent an the array",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "extent",
          "normalized": "UArray a b c d-\u003ec",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:extent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Ensures that array \u003cem\u003eand all it's real manifest sources\u003c/em\u003e\n are fully evaluated.\n This function is not for people, it is for GHC compiler.\n\u003c/p\u003e\u003cp\u003eDefault implementation: \u003ccode\u003eforce arr = arr `deepseq` return ()\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "force",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO ()",
          "source": "src/Data-Yarr-Base.html#force",
          "type": "method"
        },
        "index": {
          "description": "Ensures that array and all it real manifest sources are fully evaluated This function is not for people it is for GHC compiler Default implementation force arr arr deepseq return",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "force",
          "normalized": "UArray a b c d-\u003eIO()",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Freezes mutable array and returns array which could be indexed.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "freeze",
          "package": "yarr",
          "signature": "UArray mr l sh a -\u003e IO (UArray r l sh a)",
          "source": "src/Data-Yarr-Base.html#freeze",
          "type": "method"
        },
        "index": {
          "description": "Freezes mutable array and returns array which could be indexed",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "freeze",
          "normalized": "UArray a b c d-\u003eIO(UArray e b c d)",
          "package": "yarr",
          "signature": "UArray mr l sh a-\u003eIO(UArray r l sh a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Base",
          "name": "gindex",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e i -\u003e IO a",
          "source": "src/Data-Yarr-Base.html#gindex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "gindex",
          "normalized": "UArray a b c d-\u003ee-\u003eIO d",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003ei-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:gindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Base",
          "name": "gsize",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e i",
          "source": "src/Data-Yarr-Base.html#gsize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "gsize",
          "normalized": "UArray a b c d-\u003ee",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:gsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Base",
          "name": "gwrite",
          "package": "yarr",
          "signature": "UArray tr tl sh a -\u003e i -\u003e a -\u003e IO ()",
          "source": "src/Data-Yarr-Base.html#gwrite",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "gwrite",
          "normalized": "UArray a b c d-\u003ee-\u003ed-\u003eIO()",
          "package": "yarr",
          "signature": "UArray tr tl sh a-\u003ei-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:gwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape, genuine monadic indexing.\n\u003c/p\u003e\u003cp\u003eIn Yarr arrays are always \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e-indexed and multidimensionally square.\n Maximum index is \u003ccode\u003e(extent arr)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault implementation:\n \u003ccode\u003eindex arr sh = linearIndex arr $ \u003ccode\u003e\u003ca\u003etoLinear\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e arr) sh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "index",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e sh -\u003e IO a",
          "source": "src/Data-Yarr-Base.html#index",
          "type": "method"
        },
        "index": {
          "description": "Shape genuine monadic indexing In Yarr arrays are always zero indexed and multidimensionally square Maximum index is extent arr Default implementation index arr sh linearIndex arr toLinear extent arr sh",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "index",
          "normalized": "UArray a b c d-\u003ec-\u003eIO d",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003esh-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Surrogate\" linear index.\n For \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e arrays \u003ccode\u003eindex == linearIndex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDefault implementation:\n \u003ccode\u003elinearIndex arr i = index arr $ \u003ccode\u003e\u003ca\u003efromLinear\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e arr) i\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "linearIndex",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e Int -\u003e IO a",
          "source": "src/Data-Yarr-Base.html#linearIndex",
          "type": "method"
        },
        "index": {
          "description": "Surrogate linear index For Dim1 arrays index linearIndex Default implementation linearIndex arr index arr fromLinear extent arr",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "linearIndex",
          "normalized": "UArray a b c d-\u003eInt-\u003eIO d",
          "package": "yarr",
          "partial": "Index",
          "signature": "UArray r l sh a-\u003eInt-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:linearIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFast (usually), linear indexing. Intented to be used internally.\n\u003c/p\u003e\u003cp\u003eDefault implementation:\n \u003ccode\u003elinearWrite tarr i = write tarr $ \u003ccode\u003e\u003ca\u003efromLinear\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e tarr) i\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "linearWrite",
          "package": "yarr",
          "signature": "UArray tr tl sh a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Data-Yarr-Base.html#linearWrite",
          "type": "method"
        },
        "index": {
          "description": "Fast usually linear indexing Intented to be used internally Default implementation linearWrite tarr write tarr fromLinear extent tarr",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "linearWrite",
          "normalized": "UArray a b c d-\u003eInt-\u003ed-\u003eIO()",
          "package": "yarr",
          "partial": "Write",
          "signature": "UArray tr tl sh a-\u003eInt-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:linearWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Creates and returns mutable array of the given shape.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "new",
          "package": "yarr",
          "signature": "sh -\u003e IO (UArray mr l sh a)",
          "source": "src/Data-Yarr-Base.html#new",
          "type": "method"
        },
        "index": {
          "description": "Creates and returns mutable array of the given shape",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "new",
          "normalized": "a-\u003eIO(UArray b c a d)",
          "package": "yarr",
          "signature": "sh-\u003eIO(UArray mr l sh a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ernf should reduce its argument to normal form (that is, fully\n evaluate all sub-components), and then return '()'.\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is \n\u003c/p\u003e\u003cpre\u003e rnf a = a `seq` ()\n\u003c/pre\u003e\u003cp\u003ewhich may be convenient when defining instances for data types with\n no unevaluated fields (e.g. enumerations).\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "rnf",
          "package": "yarr",
          "signature": "a -\u003e ()",
          "type": "method"
        },
        "index": {
          "description": "rnf should reduce its argument to normal form that is fully evaluate all sub-components and then return The default implementation of rnf is rnf seq which may be convenient when defining instances for data types with no unevaluated fields e.g enumerations",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "rnf",
          "normalized": "a-\u003e()",
          "package": "yarr",
          "signature": "a-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:rnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Array of vectors -\u003e vector of arrays.\n Think about this function as shallow \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e from Prelude.\n Slices are \u003cem\u003eviews\u003c/em\u003e of an underlying array.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n let css = slices coords\n     xs = css \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e 0\n     ys = css \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e 1\n\u003c/pre\u003e",
          "module": "Data.Yarr.Base",
          "name": "slices",
          "package": "yarr",
          "signature": "UArray r l sh (v e) -\u003e VecList (Dim v) (UArray slr l sh e)",
          "source": "src/Data-Yarr-Base.html#slices",
          "type": "method"
        },
        "index": {
          "description": "Array of vectors vector of arrays Think about this function as shallow unzip from Prelude Slices are views of an underlying array Example let css slices coords xs css ys css",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "slices",
          "normalized": "UArray a b c(d e)-\u003eVecList(Dim d)(UArray f b c e)",
          "package": "yarr",
          "signature": "UArray r l sh(v e)-\u003eVecList(Dim v)(UArray slr l sh e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:slices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Thaws freezed array and returns mutable version.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "thaw",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO (UArray mr l sh a)",
          "source": "src/Data-Yarr-Base.html#thaw",
          "type": "method"
        },
        "index": {
          "description": "Thaws freezed array and returns mutable version",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "thaw",
          "normalized": "UArray a b c d-\u003eIO(UArray e b c d)",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003eIO(UArray mr l sh a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Base",
          "name": "toWork",
          "package": "yarr",
          "signature": "sh -\u003e i",
          "source": "src/Data-Yarr-Base.html#toWork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "toWork",
          "normalized": "a-\u003eb",
          "package": "yarr",
          "partial": "Work",
          "signature": "sh-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:toWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling this function on foreign array (\u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e)\n ensures it is still alive (GC haven't picked it).\n In other manifest representations, the function defined as \u003ccode\u003ereturn ()\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003etouchArray\u003c/a\u003e\u003c/code\u003e is lifted to top level in class hierarchy\n because in fact foreign representation is the heart of the library.\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "touchArray",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO ()",
          "source": "src/Data-Yarr-Base.html#touchArray",
          "type": "method"
        },
        "index": {
          "description": "Calling this function on foreign array ensures it is still alive GC haven picked it In other manifest representations the function defined as return touchArray is lifted to top level in class hierarchy because in fact foreign representation is the heart of the library",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "touchArray",
          "normalized": "UArray a b c d-\u003eIO()",
          "package": "yarr",
          "partial": "Array",
          "signature": "UArray r l sh a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:touchArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape, genuine monadic writing.\n\u003c/p\u003e\u003cp\u003eDefault implementation:\n \u003ccode\u003ewrite tarr sh = linearWrite tarr $ \u003ccode\u003e\u003ca\u003etoLinear\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e tarr) sh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Base",
          "name": "write",
          "package": "yarr",
          "signature": "UArray tr tl sh a -\u003e sh -\u003e a -\u003e IO ()",
          "source": "src/Data-Yarr-Base.html#write",
          "type": "method"
        },
        "index": {
          "description": "Shape genuine monadic writing Default implementation write tarr sh linearWrite tarr toLinear extent tarr sh",
          "hierarchy": "Data Yarr Base",
          "module": "Data.Yarr.Base",
          "name": "write",
          "normalized": "UArray a b c d-\u003ec-\u003ed-\u003eIO()",
          "package": "yarr",
          "signature": "UArray tr tl sh a-\u003esh-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Base.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "Convolution",
          "package": "yarr",
          "source": "src/Data-Yarr-Convolution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "Convolution",
          "package": "yarr",
          "partial": "Convolution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvolution fused representation internally keeps 2 element getters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e slow \u003cem\u003eborder get\u003c/em\u003e, which checks every index from applied stencil\n    to lay inside extent of underlying source array.\n\u003c/li\u003e\u003cli\u003e fast \u003cem\u003ecenter get\u003c/em\u003e, which doesn't worry about bound checks\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand \u003ccode\u003ecenter\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "CV",
          "package": "yarr",
          "source": "src/Data-Yarr-Convolution-Repr.html#CV",
          "type": "data"
        },
        "index": {
          "description": "Convolution fused representation internally keeps element getters slow border get which checks every index from applied stencil to lay inside extent of underlying source array fast center get which doesn worry about bound checks and center Block",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "CV",
          "package": "yarr",
          "partial": "CV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#t:CV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConVolution \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e type is specialized to load convoluted arrays.\n\u003c/p\u003e\u003cp\u003eIt loads \u003ccode\u003ecenter\u003c/code\u003e with \u003ccode\u003ecenterGet\u003c/code\u003e and borders outside the center with\n \u003ccode\u003eborderGet\u003c/code\u003e separately.\n\u003c/p\u003e\u003cp\u003eIt is even able to distribute quite expensive border loads evenly between\n available threads while parallel load.\n\u003c/p\u003e\u003cp\u003eElement-wise Loading convoluted arrays wasn't inlined propely\n with unrolled \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003eing (\u003ccode\u003e\u003ca\u003eunrolledFill\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edim2BlockFill\u003c/a\u003e\u003c/code\u003e).\n However, with simple \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e performance was OK.\n\u003c/p\u003e\u003cp\u003eFor details see\n \u003ca\u003ehttp://stackoverflow.com/questions/14748900/ghc-doesnt-perform-2-stage-partial-application-inlining\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eALMOST SOLVED:\u003c/em\u003e you just need to support unrolled filling function with \u003ccode\u003eINLINE\u003c/code\u003e pragma,\n see \u003ca\u003ehttps://github.com/leventov/yarr/blob/master/tests/blur.hs\u003c/a\u003e,\n \u003ccode\u003effill\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "CVL",
          "package": "yarr",
          "source": "src/Data-Yarr-Convolution-Repr.html#CVL",
          "type": "data"
        },
        "index": {
          "description": "ConVolution Load type is specialized to load convoluted arrays It loads center with centerGet and borders outside the center with borderGet separately It is even able to distribute quite expensive border loads evenly between available threads while parallel load Element-wise Loading convoluted arrays wasn inlined propely with unrolled Fill ing unrolledFill dim2BlockFill However with simple fill performance was OK For details see http stackoverflow.com questions ghc-doesnt-perform-2-stage-partial-application-inlining ALMOST SOLVED you just need to support unrolled filling function with INLINE pragma see https github.com leventov yarr blob master tests blur.hs ffill function",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "CVL",
          "package": "yarr",
          "partial": "CVL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#t:CVL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized static \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e stencil.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "Dim1Stencil",
          "package": "yarr",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "data"
        },
        "index": {
          "description": "Generalized static Dim1 stencil",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "Dim1Stencil",
          "package": "yarr",
          "partial": "Dim Stencil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#t:Dim1Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized static \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e stencil.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "Dim2Stencil",
          "package": "yarr",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "data"
        },
        "index": {
          "description": "Generalized static Dim2 stencil",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "Dim2Stencil",
          "package": "yarr",
          "partial": "Dim Stencil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#t:Dim2Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "Dim1Stencil",
          "package": "yarr",
          "signature": "Dim1Stencil",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "Dim1Stencil",
          "package": "yarr",
          "partial": "Dim Stencil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:Dim1Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "Dim2Stencil",
          "package": "yarr",
          "signature": "Dim2Stencil",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "Dim2Stencil",
          "package": "yarr",
          "partial": "Dim Stencil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:Dim2Stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvolves \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e array with static stencil.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "convolveDim1WithStaticStencil",
          "package": "yarr",
          "signature": "(UArray r l Dim1 a -\u003e Dim1 -\u003e Dim1 -\u003e IO a)-\u003e Dim1Stencil s a b c-\u003e UArray r l Dim1 a-\u003e UArray CV CVL Dim1 c",
          "type": "function"
        },
        "index": {
          "description": "Convolves Dim1 array with static stencil",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "convolveDim1WithStaticStencil",
          "normalized": "(UArray a b Dim c-\u003eDim-\u003eDim-\u003eIO c)-\u003eDim Stencil d c e f-\u003eUArray a b Dim c-\u003eUArray CV CVL Dim f",
          "package": "yarr",
          "partial": "Dim With Static Stencil",
          "signature": "(UArray r l Dim a-\u003eDim-\u003eDim-\u003eIO a)-\u003eDim Stencil s a b c-\u003eUArray r l Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:convolveDim1WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog of \u003ccode\u003e\u003ca\u003econvolveShDim2WithStaticStencil\u003c/a\u003e\u003c/code\u003e\n to convolve arrays with \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003einear load index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "convolveLinearDim2WithStaticStencil",
          "package": "yarr",
          "signature": "(UArray r L Dim2 a -\u003e Dim2 -\u003e Dim2 -\u003e IO a)-\u003e Dim2Stencil sx sy a b c-\u003e UArray r L Dim2 a-\u003e UArray CV CVL Dim2 c",
          "type": "function"
        },
        "index": {
          "description": "Analog of convolveShDim2WithStaticStencil to convolve arrays with inear load index",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "convolveLinearDim2WithStaticStencil",
          "normalized": "(UArray a L Dim b-\u003eDim-\u003eDim-\u003eIO b)-\u003eDim Stencil c d b e f-\u003eUArray a L Dim b-\u003eUArray CV CVL Dim f",
          "package": "yarr",
          "partial": "Linear Dim With Static Stencil",
          "signature": "(UArray r L Dim a-\u003eDim-\u003eDim-\u003eIO a)-\u003eDim Stencil sx sy a b c-\u003eUArray r L Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:convolveLinearDim2WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvolves \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e array with \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003eaped load type with static stencil.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "convolveShDim2WithStaticStencil",
          "package": "yarr",
          "signature": "(UArray r SH Dim2 a -\u003e Dim2 -\u003e Dim2 -\u003e IO a)-\u003e Dim2Stencil sx sy a b c-\u003e UArray r SH Dim2 a-\u003e UArray CV CVL Dim2 c",
          "type": "function"
        },
        "index": {
          "description": "Convolves Dim2 array with SH aped load type with static stencil",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "convolveShDim2WithStaticStencil",
          "normalized": "(UArray a SH Dim b-\u003eDim-\u003eDim-\u003eIO b)-\u003eDim Stencil c d b e f-\u003eUArray a SH Dim b-\u003eUArray CV CVL Dim f",
          "package": "yarr",
          "partial": "Sh Dim With Static Stencil",
          "signature": "(UArray r SH Dim a-\u003eDim-\u003eDim-\u003eIO a)-\u003eDim Stencil sx sy a b c-\u003eUArray r SH Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:convolveShDim2WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurried version of \u003ccode\u003e\u003ca\u003econvolveDim1WithStaticStencil\u003c/a\u003e\u003c/code\u003e\n with border get clamping indices out of bounds to\n \u003ccode\u003e0\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e source)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveDim1WithStaticStencil",
          "package": "yarr",
          "signature": "Dim1Stencil s a b c-\u003e UArray r l Dim1 a-\u003e UArray CV CVL Dim1 c",
          "type": "function"
        },
        "index": {
          "description": "Curried version of convolveDim1WithStaticStencil with border get clamping indices out of bounds to or extent source",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveDim1WithStaticStencil",
          "normalized": "Dim Stencil a b c d-\u003eUArray e f Dim b-\u003eUArray CV CVL Dim d",
          "package": "yarr",
          "partial": "Convolve Dim With Static Stencil",
          "signature": "Dim Stencil s a b c-\u003eUArray r l Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dConvolveDim1WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog of \u003ccode\u003e\u003ca\u003edConvolveShDim2WithStaticStencil\u003c/a\u003e\u003c/code\u003e\n to convolve arrays with \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003einear load index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveLinearDim2WithStaticStencil",
          "package": "yarr",
          "signature": "Dim2Stencil sx sy a b c-\u003e UArray r L Dim2 a-\u003e UArray CV CVL Dim2 c",
          "type": "function"
        },
        "index": {
          "description": "Analog of dConvolveShDim2WithStaticStencil to convolve arrays with inear load index",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveLinearDim2WithStaticStencil",
          "normalized": "Dim Stencil a b c d e-\u003eUArray f L Dim c-\u003eUArray CV CVL Dim e",
          "package": "yarr",
          "partial": "Convolve Linear Dim With Static Stencil",
          "signature": "Dim Stencil sx sy a b c-\u003eUArray r L Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dConvolveLinearDim2WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as\n \u003ccode\u003edConvolveShDim2WithStaticStencil = \u003ccode\u003e\u003ca\u003econvolveShDim2WithStaticStencil\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edim2OutClamp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nlet gradientX =\n        dConvolveLinearDim2WithStaticStencil\n            [\u003ccode\u003e\u003ca\u003edim2St\u003c/a\u003e\u003c/code\u003e| -1  0  1\n                     -2  0  2\n                     -1  0  1 |]\n            image\n\u003c/pre\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveShDim2WithStaticStencil",
          "package": "yarr",
          "signature": "Dim2Stencil sx sy a b c-\u003e UArray r SH Dim2 a-\u003e UArray CV CVL Dim2 c",
          "type": "function"
        },
        "index": {
          "description": "Defined as dConvolveShDim2WithStaticStencil convolveShDim2WithStaticStencil dim2OutClamp Example let gradientX dConvolveLinearDim2WithStaticStencil dim2St image",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dConvolveShDim2WithStaticStencil",
          "normalized": "Dim Stencil a b c d e-\u003eUArray f SH Dim c-\u003eUArray CV CVL Dim e",
          "package": "yarr",
          "partial": "Convolve Sh Dim With Static Stencil",
          "signature": "Dim Stencil sx sy a b c-\u003eUArray r SH Dim a-\u003eUArray CV CVL Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dConvolveShDim2WithStaticStencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for producing typical numeric convolving \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e stencil,\n which effectively skips unnecessary multiplications.\n\u003c/p\u003e\u003cpre\u003e[dim1St| 1 4 6 4 1 |]\u003c/pre\u003e\u003cp\u003eProduces\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eDim1Stencil\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003en5\u003c/a\u003e\u003c/code\u003e\n    (\u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e\n       [\\ acc a -\u003e return (acc + a),\n        \\ acc a -\u003e (return $ (acc + (4 * a))),\n        \\ acc a -\u003e (return $ (acc + (6 * a))),\n        \\ acc a -\u003e (return $ (acc + (4 * a))),\n        \\ acc a -\u003e return (acc + a)])\n    (\\ acc a reduce -\u003e reduce acc a)\n    (return 0)\n\u003c/pre\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim1St",
          "package": "yarr",
          "signature": "QuasiQuoter",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#dim1St",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for producing typical numeric convolving Dim1 stencil which effectively skips unnecessary multiplications dim1St Produces Dim1Stencil n5 VecList acc return acc acc return acc acc return acc acc return acc acc return acc acc reduce reduce acc return",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim1St",
          "package": "yarr",
          "partial": "St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim1St"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized reduce function\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilReduce",
          "package": "yarr",
          "signature": "c -\u003e a -\u003e b -\u003e IO c",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "function"
        },
        "index": {
          "description": "Generalized reduce function",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilReduce",
          "normalized": "a-\u003eb-\u003ec-\u003eIO a",
          "package": "yarr",
          "partial": "Stencil Reduce",
          "signature": "c-\u003ea-\u003eb-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim1StencilReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilSize",
          "package": "yarr",
          "signature": "size",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilSize",
          "package": "yarr",
          "partial": "Stencil Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim1StencilSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilValues",
          "package": "yarr",
          "signature": "VecList size b",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilValues",
          "package": "yarr",
          "partial": "Stencil Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim1StencilValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce zero\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilZero",
          "package": "yarr",
          "signature": "IO c",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim1Stencil",
          "type": "function"
        },
        "index": {
          "description": "Reduce zero",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim1StencilZero",
          "package": "yarr",
          "partial": "Stencil Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim1StencilZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClamps \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e index out of bounds to the nearest one inside bounds.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim2OutClamp",
          "package": "yarr",
          "signature": "UArray r l Dim2 a -\u003e Dim2 -\u003e Dim2 -\u003e IO a",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#dim2OutClamp",
          "type": "function"
        },
        "index": {
          "description": "Clamps Dim2 index out of bounds to the nearest one inside bounds",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2OutClamp",
          "normalized": "UArray a b Dim c-\u003eDim-\u003eDim-\u003eIO c",
          "package": "yarr",
          "partial": "Out Clamp",
          "signature": "UArray r l Dim a-\u003eDim-\u003eDim-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2OutClamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost useful \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e stencil producer.\n\u003c/p\u003e\u003cp\u003eTyping\n\u003c/p\u003e\u003cpre\u003e\n [dim2St| 1   2   1\n          0   0   0\n         -1  -2  -1 |]\n\u003c/pre\u003e\u003cp\u003eResults to\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eDim2Stencil\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003en3\u003c/a\u003e\u003c/code\u003e\n  \u003ccode\u003e\u003ca\u003en3\u003c/a\u003e\u003c/code\u003e\n  (\u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e\n     [\u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e\n        [\\ acc a -\u003e return (acc + a),\n         \\ acc a -\u003e (return $ (acc + (2 * a))),\n         \\ acc a -\u003e return (acc + a)],\n      \u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e\n        [\\ acc _ -\u003e return acc,\n         \\ acc _ -\u003e return acc,\n         \\ acc _ -\u003e return acc],\n      \u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e\n        [\\ acc a -\u003e return (acc - a),\n         \\ acc a -\u003e (return $ (acc + (-2 * a))),\n         \\ acc a -\u003e return (acc - a)]])\n  (\\ acc a reduce -\u003e reducej acc a)\n  (return 0)\n\u003c/pre\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim2St",
          "package": "yarr",
          "signature": "QuasiQuoter",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#dim2St",
          "type": "function"
        },
        "index": {
          "description": "Most useful Dim2 stencil producer Typing dim2St Results to Dim2Stencil n3 n3 VecList VecList acc return acc acc return acc acc return acc VecList acc return acc acc return acc acc return acc VecList acc return acc acc return acc acc return acc acc reduce reducej acc return",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2St",
          "package": "yarr",
          "partial": "St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2St"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized reduce function\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilReduce",
          "package": "yarr",
          "signature": "c -\u003e a -\u003e b -\u003e IO c",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "description": "Generalized reduce function",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilReduce",
          "normalized": "a-\u003eb-\u003ec-\u003eIO a",
          "package": "yarr",
          "partial": "Stencil Reduce",
          "signature": "c-\u003ea-\u003eb-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2StencilReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilSizeX",
          "package": "yarr",
          "signature": "sx",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilSizeX",
          "package": "yarr",
          "partial": "Stencil Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2StencilSizeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilSizeY",
          "package": "yarr",
          "signature": "sy",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilSizeY",
          "package": "yarr",
          "partial": "Stencil Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2StencilSizeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStencil values, packed in nested vectors\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilValues",
          "package": "yarr",
          "signature": "VecList sy (VecList sx b)",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "description": "Stencil values packed in nested vectors",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilValues",
          "package": "yarr",
          "partial": "Stencil Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2StencilValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce zero\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilZero",
          "package": "yarr",
          "signature": "IO c",
          "source": "src/Data-Yarr-Convolution-StaticStencils.html#Dim2Stencil",
          "type": "function"
        },
        "index": {
          "description": "Reduce zero",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "dim2StencilZero",
          "package": "yarr",
          "partial": "Stencil Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:dim2StencilZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetreives fast center get from convoluted array\n and wraps it into \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003eelayed array.\n\u003c/p\u003e\u003cp\u003eRemember that array indexing in Yarr is always zero-based,\n so indices in result array are shifted by top-level corner offset\n of given convoluted array.\n\u003c/p\u003e",
          "module": "Data.Yarr.Convolution",
          "name": "justCenter",
          "package": "yarr",
          "signature": "UArray CV CVL sh a -\u003e UArray D SH sh a",
          "source": "src/Data-Yarr-Convolution-Repr.html#justCenter",
          "type": "function"
        },
        "index": {
          "description": "Retreives fast center get from convoluted array and wraps it into elayed array Remember that array indexing in Yarr is always zero-based so indices in result array are shifted by top-level corner offset of given convoluted array",
          "hierarchy": "Data Yarr Convolution",
          "module": "Data.Yarr.Convolution",
          "name": "justCenter",
          "normalized": "UArray CV CVL a b-\u003eUArray D SH a b",
          "package": "yarr",
          "partial": "Center",
          "signature": "UArray CV CVL sh a-\u003eUArray D SH sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Convolution.html#v:justCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing and computing arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yarr.Eval",
          "name": "Eval",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Load ing and computing arrays",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "Eval",
          "package": "yarr",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to frequently used get-write-from-to arguments combo.\n\u003c/p\u003e\u003cp\u003eTo be passed as 1st parameter of all \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing functions\n from \u003ca\u003eData.Yarr.Eval\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "Fill",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Fill",
          "type": "type"
        },
        "index": {
          "description": "Alias to frequently used get-write-from-to arguments combo To be passed as st parameter of all Load ing functions from Data.Yarr.Eval module",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "Fill",
          "package": "yarr",
          "partial": "Fill",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear load type index. \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e load type index\n define \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e and leave \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e\n functions defined by default.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "L",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#L",
          "type": "data"
        },
        "index": {
          "description": "Linear load type index UArray with load type index define linearIndex and linearWrite and leave index and write functions defined by default",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "L",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class abstracts pair of array types,\n which could be loaded one to another.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source representation. Instance of \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e class.\n          Typically one of fused representations:\n          \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e or\n          \u003ccode\u003e\u003ca\u003eCV\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - source load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etr\u003c/code\u003e - target representation. Instance of \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etl\u003c/code\u003e - target load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - array element type\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCounterpart for arrays of vectors: \u003ccode\u003e\u003ca\u003eVecLoad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e this class seems to be overengineered, normally\n it should have only 3 parameters: \u003ccode\u003eLoad l tl sh\u003c/code\u003e.\n But Convoluted (\u003ccode\u003e\u003ca\u003eCV\u003c/a\u003e\u003c/code\u003e) representation is\n tightly connected with it's load type.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "Load",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#Load",
          "type": "class"
        },
        "index": {
          "description": "This class abstracts pair of array types which could be loaded one to another Parameters source representation Instance of USource class Typically one of fused representations SE or CV source load type tr target representation Instance of UTarget class tl target load type sh shape of arrays array element type Counterpart for arrays of vectors VecLoad TODO this class seems to be overengineered normally it should have only parameters Load tl sh But Convoluted CV representation is tightly connected with it load type",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "Load",
          "package": "yarr",
          "partial": "Load",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:Load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass abstracts pair of arrays which could be loaded in\n just specified range of indices.\n\u003c/p\u003e\u003cp\u003e\"Range\" is a multidimensional\n segment: segment for \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e arrays, square for \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e arrays and\n cube for \u003ccode\u003e\u003ca\u003eDim3\u003c/a\u003e\u003c/code\u003e. Thus, it is specified by pair of indices:\n \"top-left\" (minimum is \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e) and \"bottom-right\" (maximum is\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eentire\u003c/a\u003e\u003c/code\u003e arr tarr)\u003c/code\u003e) corners.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "RangeLoad",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#RangeLoad",
          "type": "class"
        },
        "index": {
          "description": "Class abstracts pair of arrays which could be loaded in just specified range of indices Range is multidimensional segment segment for Dim1 arrays square for Dim2 arrays and cube for Dim3 Thus it is specified by pair of indices top-left minimum is zero and bottom-right maximum is entire arr tarr corners",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "RangeLoad",
          "package": "yarr",
          "partial": "Range Load",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:RangeLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class extends \u003ccode\u003e\u003ca\u003eVecLoad\u003c/a\u003e\u003c/code\u003e just like \u003ccode\u003e\u003ca\u003eRangeLoad\u003c/a\u003e\u003c/code\u003e extends \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e.\n It abstracts slice-wise loading from one array type to\n another in specified range.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "RangeVecLoad",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#RangeVecLoad",
          "type": "class"
        },
        "index": {
          "description": "This class extends VecLoad just like RangeLoad extends Load It abstracts slice-wise loading from one array type to another in specified range",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "RangeVecLoad",
          "package": "yarr",
          "partial": "Range Vec Load",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:RangeVecLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral shape load type index. \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003e load type index\n specialize \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e and leave \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e\n functions defined by default.\n\u003c/p\u003e\u003cp\u003eType-level distinction between \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003einear and \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003eaped arrays\n is aimed to avoid integral division operations while looping\n through composite (\u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDim3\u003c/a\u003e\u003c/code\u003e) indices.\n\u003c/p\u003e\u003cp\u003eIntegral division is very expensive operation even on modern CPUs.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "SH",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#SH",
          "type": "data"
        },
        "index": {
          "description": "General shape load type index UArray with SH load type index specialize index and write and leave linearIndex and linearWrite functions defined by default Type-level distinction between inear and SH aped arrays is aimed to avoid integral division operations while looping through composite Dim2 Dim3 indices Integral division is very expensive operation even on modern CPUs",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "SH",
          "package": "yarr",
          "partial": "SH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:SH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 2 common ways to parameterize\n parallelism: a) to say \"split this work between \u003ccode\u003en\u003c/code\u003e threads\"\n or b) to say \"split this work between maximum reasonable\n number of threads\", that is \u003cem\u003ecapabilities\u003c/em\u003e. Since\n \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e function is monadic, we need always pass\n \u003ccode\u003eIO Int\u003c/code\u003e as thread number parameter in order not to multiply\n number of functions in this module (there are already too many).\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "Threads",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#Threads",
          "type": "type"
        },
        "index": {
          "description": "There are common ways to parameterize parallelism to say split this work between threads or to say split this work between maximum reasonable number of threads that is capabilities Since getNumCapabilities function is monadic we need always pass IO Int as thread number parameter in order not to multiply number of functions in this module there are already too many",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "Threads",
          "package": "yarr",
          "partial": "Threads",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:Threads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass abstracts \u003cem\u003eseparated in time and space\u003c/em\u003e loading \u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e of one array type\n to another. Result of running functions with \u003ccode\u003e-Slices-\u003c/code\u003e infix\n \u003cem\u003eis always identical\u003c/em\u003e to result of running corresponding function from\n \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e\u003ca\u003eVecLoad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRangeVecLoad\u003c/a\u003e\u003c/code\u003e are just about performance.\n If target representation is separate (ex. \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e),\n using \u003ccode\u003e\u003ca\u003eloadSlicesP\u003c/a\u003e\u003c/code\u003e may be faster than \u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e because of per-thread memory\n locality.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eslr\u003c/code\u003e - source slice representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - source load type \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etr\u003c/code\u003e - target representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etslr\u003c/code\u003e - target slice representation\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etl\u003c/code\u003e - target load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ev\u003c/code\u003e - source vector type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ev2\u003c/code\u003e - target vector type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e - vector element type, common for source and target arrays\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr.Eval",
          "name": "VecLoad",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#VecLoad",
          "type": "class"
        },
        "index": {
          "description": "Class abstracts separated in time and space loading slices of one array type to another Result of running functions with Slices infix is always identical to result of running corresponding function from Load class VecLoad and RangeVecLoad are just about performance If target representation is separate ex SE using loadSlicesP may be faster than loadP because of per-thread memory locality Parameters source representation slr source slice representation source load type tr target representation tslr target slice representation tl target load type sh shape of arrays source vector type v2 target vector type vector element type common for source and target arrays",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "VecLoad",
          "package": "yarr",
          "partial": "Vec Load",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#t:VecLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "caps",
          "package": "yarr",
          "signature": "Threads",
          "source": "src/Data-Yarr-Eval.html#caps",
          "type": "function"
        },
        "index": {
          "description": "Alias to getNumCapabilities",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "caps",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:caps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e This function simplifies the most common way of loading\n arrays.\n\u003c/p\u003e\u003cp\u003eInstead of\n\u003c/p\u003e\u003cpre\u003e\n mTarget \u003c- \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e (extent source)\n \u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e source mTarget\n target \u003c- \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e mTarget\n\u003c/pre\u003e\u003cp\u003eYou can write just\n\u003c/p\u003e\u003cpre\u003etarget \u003c- compute (\u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e) source\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "compute",
          "package": "yarr",
          "signature": "(UArray r l sh a -\u003e UArray mtr tl sh b -\u003e IO ())-\u003e UArray r l sh a-\u003e IO (UArray tr tl sh b)",
          "type": "function"
        },
        "index": {
          "description": "This function simplifies the most common way of loading arrays Instead of mTarget new extent source loadP fill caps source mTarget target freeze mTarget You can write just target compute loadP fill caps source",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "compute",
          "normalized": "(UArray a b c d-\u003eUArray e f c g-\u003eIO())-\u003eUArray a b c d-\u003eIO(UArray h f c g)",
          "package": "yarr",
          "signature": "(UArray r l sh a-\u003eUArray mtr tl sh b-\u003eIO())-\u003eUArray r l sh a-\u003eIO(UArray tr tl sh b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:compute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost common parallel use case of \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edComputeP = \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "dComputeP",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO (UArray tr tl sh a)",
          "source": "src/Data-Yarr-Eval.html#dComputeP",
          "type": "function"
        },
        "index": {
          "description": "Most common parallel use case of compute dComputeP compute loadP fill caps",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "dComputeP",
          "normalized": "UArray a b c d-\u003eIO(UArray e f c d)",
          "package": "yarr",
          "partial": "Compute",
          "signature": "UArray r l sh a-\u003eIO(UArray tr tl sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:dComputeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost common sequential use case of \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edComputeS = \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloadS\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "dComputeS",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO (UArray tr tl sh a)",
          "source": "src/Data-Yarr-Eval.html#dComputeS",
          "type": "function"
        },
        "index": {
          "description": "Most common sequential use case of compute dComputeS compute loadS fill",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "dComputeS",
          "normalized": "UArray a b c d-\u003eIO(UArray e f c d)",
          "package": "yarr",
          "partial": "Compute",
          "signature": "UArray r l sh a-\u003eIO(UArray tr tl sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:dComputeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines maximum common range of 2 arrays -\n \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003eion of their \u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "entire",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e UArray r2 l2 sh b -\u003e sh",
          "source": "src/Data-Yarr-Eval.html#entire",
          "type": "function"
        },
        "index": {
          "description": "Determines maximum common range of arrays intersect ion of their extent",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "entire",
          "normalized": "UArray a b c d-\u003eUArray a b c e-\u003ec",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003eUArray r l sh b-\u003esh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:entire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Entirely loads source to target in parallel.\n\u003c/p\u003e\u003cp\u003eFirst parameter is used to parameterize loop\n unrolling to maximize performance.\n Default choice is \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e -- vanilla not unrolled looping.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n tarr \u003c- \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eextent\u003c/a\u003e\u003c/code\u003e arr)\n loadP \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e arr tarr\n loadP (\u003ccode\u003e\u003ca\u003edim2BlockFill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etouch\u003c/a\u003e\u003c/code\u003e) (\u003ccode\u003e\u003ca\u003ethreads\u003c/a\u003e\u003c/code\u003e 2) arr tarr\n\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "loadP",
          "package": "yarr",
          "signature": "loadP",
          "source": "src/Data-Yarr-Eval.html#loadP",
          "type": "method"
        },
        "index": {
          "description": "Entirely loads source to target in parallel First parameter is used to parameterize loop unrolling to maximize performance Default choice is fill vanilla not unrolled looping Examples tarr new extent arr loadP fill caps arr tarr loadP dim2BlockFill n2 n2 touch threads arr tarr",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "loadP",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:loadP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sequential analog of \u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e function.\n Loads source to target \u003ccode\u003e\u003ca\u003eentire\u003c/a\u003e\u003c/code\u003ely.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eloadS (\u003ccode\u003e\u003ca\u003eunrolledFill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en4\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enoTouch\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e arr tarr\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "loadS",
          "package": "yarr",
          "signature": "loadS",
          "source": "src/Data-Yarr-Eval.html#loadS",
          "type": "method"
        },
        "index": {
          "description": "Sequential analog of loadP function Loads source to target entire ly Example loadS unrolledFill n4 noTouch caps arr tarr",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "loadS",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:loadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Entirely, slice-wise loads vectors from source to target \n in parallel.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n -- blurred and delayedBlurred are arrays of color components.\n loadSlicesP \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e delayedBlurred blurred\n\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "loadSlicesP",
          "package": "yarr",
          "signature": "loadSlicesP",
          "source": "src/Data-Yarr-Eval.html#loadSlicesP",
          "type": "method"
        },
        "index": {
          "description": "Entirely slice-wise loads vectors from source to target in parallel Example blurred and delayedBlurred are arrays of color components loadSlicesP fill caps delayedBlurred blurred",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "loadSlicesP",
          "package": "yarr",
          "partial": "Slices",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:loadSlicesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sequentially loads vectors from source to target, slice by slice.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "loadSlicesS",
          "package": "yarr",
          "signature": "loadSlicesS",
          "source": "src/Data-Yarr-Eval.html#loadSlicesS",
          "type": "method"
        },
        "index": {
          "description": "Sequentially loads vectors from source to target slice by slice",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "loadSlicesS",
          "package": "yarr",
          "partial": "Slices",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:loadSlicesS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Loads elements from source to target in specified range\n in parallel.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n let ext = extent convolved\n res \u003c- new ext\n rangeLoadP \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e convolved res (5, 5) (ext `minus` (5, 5))\n\u003c/pre\u003e",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadP",
          "package": "yarr",
          "signature": "rangeLoadP",
          "source": "src/Data-Yarr-Eval.html#rangeLoadP",
          "type": "method"
        },
        "index": {
          "description": "Loads elements from source to target in specified range in parallel Example let ext extent convolved res new ext rangeLoadP fill caps convolved res ext minus",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadP",
          "package": "yarr",
          "partial": "Load",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:rangeLoadP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sequentially loads elements from source to target in specified range.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadS",
          "package": "yarr",
          "signature": "rangeLoadS",
          "source": "src/Data-Yarr-Eval.html#rangeLoadS",
          "type": "method"
        },
        "index": {
          "description": "Sequentially loads elements from source to target in specified range",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadS",
          "package": "yarr",
          "partial": "Load",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:rangeLoadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Loads vectors from source to target in specified range, slice-wise,\n in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadSlicesP",
          "package": "yarr",
          "signature": "rangeLoadSlicesP",
          "source": "src/Data-Yarr-Eval.html#rangeLoadSlicesP",
          "type": "method"
        },
        "index": {
          "description": "Loads vectors from source to target in specified range slice-wise in parallel",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadSlicesP",
          "package": "yarr",
          "partial": "Load Slices",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:rangeLoadSlicesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sequentially loads vector elements from source to target\n in specified range, slice by slice.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadSlicesS",
          "package": "yarr",
          "signature": "rangeLoadSlicesS",
          "source": "src/Data-Yarr-Eval.html#rangeLoadSlicesS",
          "type": "method"
        },
        "index": {
          "description": "Sequentially loads vector elements from source to target in specified range slice by slice",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "rangeLoadSlicesS",
          "package": "yarr",
          "partial": "Load Slices",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:rangeLoadSlicesS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Eval",
          "name": "threads",
          "package": "yarr",
          "signature": "Int -\u003e Threads",
          "source": "src/Data-Yarr-Eval.html#threads",
          "type": "function"
        },
        "index": {
          "description": "Alias to return",
          "hierarchy": "Data Yarr Eval",
          "module": "Data.Yarr.Eval",
          "name": "threads",
          "normalized": "Int-\u003eThreads",
          "package": "yarr",
          "signature": "Int-\u003eThreads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Eval.html#v:threads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataflow (fusion operations)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yarr.Flow",
          "name": "Flow",
          "package": "yarr",
          "source": "src/Data-Yarr-Flow.html",
          "type": "module"
        },
        "index": {
          "description": "Dataflow fusion operations",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "Flow",
          "package": "yarr",
          "partial": "Flow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed representation is a wrapper for arbitrary indexing function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e instance holds linear getter (\u003ccode\u003e(Int -\u003e IO a)\u003c/code\u003e),\n and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e - shaped, \"true\" \u003ccode\u003e(sh -\u003e IO a)\u003c/code\u003e index, respectively.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eD\u003c/code\u003eelayed arrays are most common recipients for fusion operations.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "D",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Delayed.html#D",
          "type": "data"
        },
        "index": {
          "description": "Delayed representation is wrapper for arbitrary indexing function UArray sh instance holds linear getter Int IO and UArray SH sh shaped true sh IO index respectively elayed arrays are most common recipients for fusion operations",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "D",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class abstracts pair of array types, which could be (preferably should be)\n mapped \u003cem\u003e(fused)\u003c/em\u003e one to another. Injective version of \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source array representation. It determines result representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efr\u003c/code\u003e (fused repr) - result (fused) array representation. Result array\n    isn't indeed presented in memory, finally it should be\n    \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003ed or \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eed to \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e\n    representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type, common for source and fused arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll functions are already defined, using non-injective versions from \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart, it's role play top-level functions\n from \u003ca\u003eData.Yarr.Repr.Separate\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "DefaultFusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#DefaultFusion",
          "type": "class"
        },
        "index": {
          "description": "This class abstracts pair of array types which could be preferably should be mapped fused one to another Injective version of Fusion class Parameters source array representation It determines result representation fr fused repr result fused array representation Result array isn indeed presented in memory finally it should be compute or Load ed to Manifest representation load type common for source and fused arrays sh shape of arrays All functions are already defined using non-injective versions from Fusion class The class doesn have vector counterpart it role play top-level functions from Data.Yarr.Repr.Separate module",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "DefaultFusion",
          "package": "yarr",
          "partial": "Default Fusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#t:DefaultFusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eDefaultFusion\u003c/a\u003e\u003c/code\u003e, this class abstracts the pair array types,\n which should be fused one to another\n on maps and zips which accept index of element\n (several elements for zips) in array (arrays).\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source array representation. Determines result representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - source load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efr\u003c/code\u003e (fused repr) - result (fused) array representation. Result array\n    isn't indeed presented in memory, finally it should be\n    \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003ed or \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eed to \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e\n    representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efl\u003c/code\u003e - result, \"shaped\" load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll functions are already defined,\n using non-injective versions from \u003ccode\u003e\u003ca\u003eIFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "DefaultIFusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#DefaultIFusion",
          "type": "class"
        },
        "index": {
          "description": "Like DefaultFusion this class abstracts the pair array types which should be fused one to another on maps and zips which accept index of element several elements for zips in array arrays Parameters source array representation Determines result representation source load type fr fused repr result fused array representation Result array isn indeed presented in memory finally it should be compute or Load ed to Manifest representation fl result shaped load type sh shape of arrays All functions are already defined using non-injective versions from IFusion class The class doesn have vector counterpart",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "DefaultIFusion",
          "package": "yarr",
          "partial": "Default IFusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#t:DefaultIFusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSEparate meta array representation. Internally SEparate arrays\n hold vector of it's slices (so, \u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e is just getter for them).\n\u003c/p\u003e\u003cp\u003eMostly useful for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Separate in memory manifest \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign arrays (\"Unboxed\" arrays\n    in \u003ccode\u003evector\u003c/code\u003e/\u003ccode\u003erepa\u003c/code\u003e libraries terms).\n\u003c/li\u003e\u003cli\u003e Element-wise vector array fusion (see group of \u003ccode\u003e\u003ca\u003edmapElems\u003c/a\u003e\u003c/code\u003e functions).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr.Flow",
          "name": "SE",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Separate.html#SE",
          "type": "data"
        },
        "index": {
          "description": "SEparate meta array representation Internally SEparate arrays hold vector of it slices so slices is just getter for them Mostly useful for Separate in memory manifest oreign arrays Unboxed arrays in vector repa libraries terms Element-wise vector array fusion see group of dmapElems functions",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "SE",
          "package": "yarr",
          "partial": "SE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#t:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "cartProduct2",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray D SH Dim2 c",
          "source": "src/Data-Yarr-Flow.html#cartProduct2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "cartProduct2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eUArray d e Dim a-\u003eUArray d e Dim b-\u003eUArray D SH Dim c",
          "package": "yarr",
          "partial": "Product",
          "signature": "(a-\u003eb-\u003ec)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray D SH Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:cartProduct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "cartProduct3",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray r3 l3 Dim1 c -\u003e UArray D SH Dim3 d",
          "source": "src/Data-Yarr-Flow.html#cartProduct3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "cartProduct3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArray e f Dim a-\u003eUArray e f Dim b-\u003eUArray e f Dim c-\u003eUArray D SH Dim d",
          "package": "yarr",
          "partial": "Product",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray r l Dim c-\u003eUArray D SH Dim d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:cartProduct3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad type preserving wrapping arbirtary array into \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003eelayed representation.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Delayed\",\"Data.Yarr\"]",
          "name": "delay",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e UArray D l sh a",
          "source": "src/Data-Yarr-Repr-Delayed.html#delay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:delay\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:delay\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:delay\"]"
        },
        "index": {
          "description": "Load type preserving wrapping arbirtary array into elayed representation",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "delay",
          "normalized": "UArray a b c d-\u003eUArray D b c d",
          "package": "yarr",
          "signature": "UArray r l sh a-\u003eUArray D l sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure element mapping.\n\u003c/p\u003e\u003cp\u003eMain basic \"map\" in Yarr.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dmap",
          "package": "yarr",
          "signature": "dmap",
          "source": "src/Data-Yarr-Fusion.html#dmap",
          "type": "method"
        },
        "index": {
          "description": "Pure element mapping Main basic map in Yarr",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dmap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Injective element-wise fusion (mapping).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n let domainHSVImage =\n         dmapElems (\u003ccode\u003e\u003ca\u003evl_3\u003c/a\u003e\u003c/code\u003e (* 360) (* 100) (* 100))\n                   normedHSVImage\n\u003c/pre\u003e\u003cp\u003eAlso, used internally to define \u003ccode\u003e\u003ca\u003emapElems\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dmapElems",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmapElems\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dmapElems\"]"
        },
        "index": {
          "description": "Injective element-wise fusion mapping Example let domainHSVImage dmapElems vl normedHSVImage Also used internally to define mapElems function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dmapElems",
          "normalized": "VecList(Dim a)(b-\u003ec)-\u003eUArray d e f(a b)-\u003eUArray(SE g)e f(a c)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic vesion of \u003ccode\u003e\u003ca\u003edmapElems\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dmapElemsM",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e IO b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmapElemsM\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dmapElemsM\"]"
        },
        "index": {
          "description": "Monadic vesion of dmapElems function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dmapElemsM",
          "normalized": "VecList(Dim a)(b-\u003eIO c)-\u003eUArray d e f(a b)-\u003eUArray(SE g)e f(a c)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eIO b)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmapElemsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic element mapping.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dmapM",
          "package": "yarr",
          "signature": "dmapM",
          "source": "src/Data-Yarr-Fusion.html#dmapM",
          "type": "method"
        },
        "index": {
          "description": "Monadic element mapping",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dmapM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized element zipping with pure function.\n Zipper function is wrapped in \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e for injectivity.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzip",
          "package": "yarr",
          "signature": "dzip",
          "source": "src/Data-Yarr-Fusion.html#dzip",
          "type": "method"
        },
        "index": {
          "description": "Generalized element zipping with pure function Zipper function is wrapped in Fun for injectivity",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Zipping 2 arrays of the same type indexes and shapes.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n let productArr = dzip2 (*) arr1 arr2\n\u003c/pre\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzip2",
          "package": "yarr",
          "signature": "dzip2",
          "source": "src/Data-Yarr-Fusion.html#dzip2",
          "type": "method"
        },
        "index": {
          "description": "Zipping arrays of the same type indexes and shapes Example let productArr dzip2 arr1 arr2",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip2\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzip2M",
          "package": "yarr",
          "signature": "dzip2M",
          "source": "src/Data-Yarr-Fusion.html#dzip2M",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip2 function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Zipping 3 arrays of the same type indexes and shapes.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzip3",
          "package": "yarr",
          "signature": "dzip3",
          "source": "src/Data-Yarr-Fusion.html#dzip3",
          "type": "method"
        },
        "index": {
          "description": "Zipping arrays of the same type indexes and shapes",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip3\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzip3M",
          "package": "yarr",
          "signature": "dzip3M",
          "source": "src/Data-Yarr-Fusion.html#dzip3M",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip3 function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized element-wise zipping of several arrays of vectors.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElems",
          "package": "yarr",
          "signature": "VecList (Dim v2) (Fun m a b)-\u003e VecList m (UArray r l sh (v a))-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElems\"]"
        },
        "index": {
          "description": "Generalized element-wise zipping of several arrays of vectors",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElems",
          "normalized": "VecList(Dim a)(Fun b c d)-\u003eVecList b(UArray e f g(a c))-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(Fun m a b)-\u003eVecList m(UArray r l sh(v a))-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElems2",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray (SE fslr) l sh (v c)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems2\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElems2\"]"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElems2",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed)-\u003eUArray e f g(a b)-\u003eUArray e f g(a c)-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray(SE fslr)l sh(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElems2M",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e IO c)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray (SE fslr) l sh (v c)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems2M\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElems2M\"]"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElems2M",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003eIO d)-\u003eUArray e f g(a b)-\u003eUArray e f g(a c)-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003eIO c)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray(SE fslr)l sh(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElems3",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c -\u003e d)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray r l sh (v c)-\u003e UArray (SE fslr) l sh (v d)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems3\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElems3\"]"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElems3",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed-\u003ee)-\u003eUArray f g h(a b)-\u003eUArray f g h(a c)-\u003eUArray f g h(a d)-\u003eUArray(SE i)g h(a e)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec-\u003ed)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray r l sh(v c)-\u003eUArray(SE fslr)l sh(v d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElems3M",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c -\u003e IO d)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray r l sh (v c)-\u003e UArray (SE fslr) l sh (v d)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems3M\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElems3M\"]"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElems3M",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed-\u003eIO e)-\u003eUArray f g h(a b)-\u003eUArray f g h(a c)-\u003eUArray f g h(a d)-\u003eUArray(SE i)g h(a e)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec-\u003eIO d)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray r l sh(v c)-\u003eUArray(SE fslr)l sh(v d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElems3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized monadic element-wise zipping of several arrays of vectors\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Flow\",\"Data.Yarr.Repr.Separate\"]",
          "name": "dzipElemsM",
          "package": "yarr",
          "signature": "VecList (Dim v2) (Fun m a (IO b))-\u003e VecList m (UArray r l sh (v a))-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElemsM\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:dzipElemsM\"]"
        },
        "index": {
          "description": "Generalized monadic element-wise zipping of several arrays of vectors",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipElemsM",
          "normalized": "VecList(Dim a)(Fun b c(IO d))-\u003eVecList b(UArray e f g(a c))-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(Fun m a(IO b))-\u003eVecList m(UArray r l sh(v a))-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipElemsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzipM",
          "package": "yarr",
          "signature": "dzipM",
          "source": "src/Data-Yarr-Fusion.html#dzipM",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized zipping of 2 arrays.\n\u003c/p\u003e\u003cp\u003eMain basic \"zipWith\" in Yarr.\n\u003c/p\u003e\u003cp\u003eAlthough sighature of this function has extremely big predicate,\n it is more permissible than \u003ccode\u003e\u003ca\u003edzip2\u003c/a\u003e\u003c/code\u003e counterpart, because source arrays\n shouldn't be of the same type.\n\u003c/p\u003e\u003cp\u003eImplemented by means of \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e function (source arrays are simply\n delayed before zipping).\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzipWith",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c)-\u003e UArray r1 l sh a-\u003e UArray r2 l sh b-\u003e UArray D l sh c",
          "type": "function"
        },
        "index": {
          "description": "Generalized zipping of arrays Main basic zipWith in Yarr Although sighature of this function has extremely big predicate it is more permissible than dzip2 counterpart because source arrays shouldn be of the same type Implemented by means of delay function source arrays are simply delayed before zipping",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eUArray d e f a-\u003eUArray d e f b-\u003eUArray D e f c",
          "package": "yarr",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eUArray r l sh a-\u003eUArray r l sh b-\u003eUArray D l sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized zipping of 3 arrays, which shouldn't be\n of the same representation type.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "dzipWith3",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c -\u003e d)-\u003e UArray r1 l sh a-\u003e UArray r2 l sh b-\u003e UArray r3 l sh c-\u003e UArray D l sh d",
          "type": "function"
        },
        "index": {
          "description": "Generalized zipping of arrays which shouldn be of the same representation type",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "dzipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArray e f g a-\u003eUArray e f g b-\u003eUArray e f g c-\u003eUArray D f g d",
          "package": "yarr",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eUArray r l sh a-\u003eUArray r l sh b-\u003eUArray r l sh c-\u003eUArray D l sh d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:dzipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "icartProduct2",
          "package": "yarr",
          "signature": "(Dim2 -\u003e a -\u003e b -\u003e c) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray D SH Dim2 c",
          "source": "src/Data-Yarr-Flow.html#icartProduct2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "icartProduct2",
          "normalized": "(Dim-\u003ea-\u003eb-\u003ec)-\u003eUArray d e Dim a-\u003eUArray d e Dim b-\u003eUArray D SH Dim c",
          "package": "yarr",
          "partial": "Product",
          "signature": "(Dim-\u003ea-\u003eb-\u003ec)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray D SH Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:icartProduct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "icartProduct2M",
          "package": "yarr",
          "signature": "(Dim2 -\u003e a -\u003e b -\u003e IO c) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray D SH Dim2 c",
          "source": "src/Data-Yarr-Flow.html#icartProduct2M",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "icartProduct2M",
          "normalized": "(Dim-\u003ea-\u003eb-\u003eIO c)-\u003eUArray d e Dim a-\u003eUArray d e Dim b-\u003eUArray D SH Dim c",
          "package": "yarr",
          "partial": "Product",
          "signature": "(Dim-\u003ea-\u003eb-\u003eIO c)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray D SH Dim c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:icartProduct2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "icartProduct3",
          "package": "yarr",
          "signature": "(Dim3 -\u003e a -\u003e b -\u003e c -\u003e d) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray r3 l3 Dim1 c -\u003e UArray D SH Dim3 d",
          "source": "src/Data-Yarr-Flow.html#icartProduct3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "icartProduct3",
          "normalized": "(Dim-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eUArray e f Dim a-\u003eUArray e f Dim b-\u003eUArray e f Dim c-\u003eUArray D SH Dim d",
          "package": "yarr",
          "partial": "Product",
          "signature": "(Dim-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray r l Dim c-\u003eUArray D SH Dim d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:icartProduct3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Flow",
          "name": "icartProduct3M",
          "package": "yarr",
          "signature": "(Dim3 -\u003e a -\u003e b -\u003e c -\u003e IO d) -\u003e UArray r1 l1 Dim1 a -\u003e UArray r2 l2 Dim1 b -\u003e UArray r3 l3 Dim1 c -\u003e UArray D SH Dim3 d",
          "source": "src/Data-Yarr-Flow.html#icartProduct3M",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "icartProduct3M",
          "normalized": "(Dim-\u003ea-\u003eb-\u003ec-\u003eIO d)-\u003eUArray e f Dim a-\u003eUArray e f Dim b-\u003eUArray e f Dim c-\u003eUArray D SH Dim d",
          "package": "yarr",
          "partial": "Product",
          "signature": "(Dim-\u003ea-\u003eb-\u003ec-\u003eIO d)-\u003eUArray r l Dim a-\u003eUArray r l Dim b-\u003eUArray r l Dim c-\u003eUArray D SH Dim d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:icartProduct3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure element mapping with array index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "imap",
          "package": "yarr",
          "signature": "imap",
          "source": "src/Data-Yarr-Fusion.html#imap",
          "type": "method"
        },
        "index": {
          "description": "Pure element mapping with array index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "imap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic element mapping with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "imapM",
          "package": "yarr",
          "signature": "imapM",
          "source": "src/Data-Yarr-Fusion.html#imapM",
          "type": "method"
        },
        "index": {
          "description": "Monadic element mapping with index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "imapM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:imapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized pure element zipping with index in arrays.\n Zipper function is wrapped in \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e for injectivity.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izip",
          "package": "yarr",
          "signature": "izip",
          "source": "src/Data-Yarr-Fusion.html#izip",
          "type": "method"
        },
        "index": {
          "description": "Generalized pure element zipping with index in arrays Zipper function is wrapped in Fun for injectivity",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure zipping of 2 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izip2",
          "package": "yarr",
          "signature": "izip2",
          "source": "src/Data-Yarr-Fusion.html#izip2",
          "type": "method"
        },
        "index": {
          "description": "Pure zipping of arrays with index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic zipping of 2 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izip2M",
          "package": "yarr",
          "signature": "izip2M",
          "source": "src/Data-Yarr-Fusion.html#izip2M",
          "type": "method"
        },
        "index": {
          "description": "Monadic zipping of arrays with index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure zipping of 3 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izip3",
          "package": "yarr",
          "signature": "izip3",
          "source": "src/Data-Yarr-Fusion.html#izip3",
          "type": "method"
        },
        "index": {
          "description": "Pure zipping of arrays with index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic zipping of 3 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izip3M",
          "package": "yarr",
          "signature": "izip3M",
          "source": "src/Data-Yarr-Fusion.html#izip3M",
          "type": "method"
        },
        "index": {
          "description": "Monadic zipping of arrays with index",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003eizip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "izipM",
          "package": "yarr",
          "signature": "izipM",
          "source": "src/Data-Yarr-Fusion.html#izipM",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of izip function",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "izipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:izipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Maps elements of vectors in array uniformly.\n Don't confuse with \u003ccode\u003e\u003ca\u003edmapElems\u003c/a\u003e\u003c/code\u003e, which accepts a vector of mapper\n for each slice.\n\u003c/p\u003e\u003cp\u003eTypical use case -- type conversion:\n\u003c/p\u003e\u003cpre\u003e\n let floatImage :: UArray F Dim2 Float\n     floatImage = mapElems \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e word8Image\n\u003c/pre\u003e",
          "module": "Data.Yarr.Flow",
          "name": "mapElems",
          "package": "yarr",
          "signature": "(a -\u003e b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v b)",
          "type": "function"
        },
        "index": {
          "description": "Maps elements of vectors in array uniformly Don confuse with dmapElems which accepts vector of mapper for each slice Typical use case type conversion let floatImage UArray Dim2 Float floatImage mapElems fromIntegral word8Image",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "mapElems",
          "normalized": "(a-\u003eb)-\u003eUArray c d e(f a)-\u003eUArray(SE g)d e(f b)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "(a-\u003eb)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:mapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003emapElems\u003c/a\u003e\u003c/code\u003e function.\n Don't confuse with \u003ccode\u003e\u003ca\u003edmapElemsM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003elet domained = mapElemsM (\u003ccode\u003e\u003ca\u003eclampM\u003c/a\u003e\u003c/code\u003e 0.0 1.0) floatImage\u003c/pre\u003e",
          "module": "Data.Yarr.Flow",
          "name": "mapElemsM",
          "package": "yarr",
          "signature": "(a -\u003e IO b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v b)",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of mapElems function Don confuse with dmapElemsM Example let domained mapElemsM clampM floatImage",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "mapElemsM",
          "normalized": "(a-\u003eIO b)-\u003eUArray c d e(f a)-\u003eUArray(SE g)d e(f b)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "(a-\u003eIO b)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:mapElemsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Function from \u003ccode\u003erepa\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Flow",
          "name": "traverse",
          "package": "yarr",
          "signature": "(sh -\u003e sh')-\u003e ((sh -\u003e IO a) -\u003e sh' -\u003e IO b)-\u003e UArray r l sh a-\u003e UArray D SH sh' b",
          "type": "function"
        },
        "index": {
          "description": "Function from repa",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "traverse",
          "normalized": "(a-\u003eb)-\u003e((a-\u003eIO c)-\u003eb-\u003eIO d)-\u003eUArray e f a c-\u003eUArray D SH b d",
          "package": "yarr",
          "signature": "(sh-\u003esh')-\u003e((sh-\u003eIO a)-\u003esh'-\u003eIO b)-\u003eUArray r l sh a-\u003eUArray D SH sh' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Function for in-place zipping vector elements.\n\u003c/p\u003e\u003cp\u003eAlways true:\n\u003c/p\u003e\u003cpre\u003ezipElems f arr == \u003ccode\u003e\u003ca\u003edzip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e f) (\u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e arr)\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003elet &#966;s = zipElems (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e) coords\u003c/pre\u003e",
          "module": "Data.Yarr.Flow",
          "name": "zipElems",
          "package": "yarr",
          "signature": "Fn (Dim v) a b-\u003e UArray r l sh (v a)-\u003e UArray fr l sh b",
          "type": "function"
        },
        "index": {
          "description": "Function for in-place zipping vector elements Always true zipElems arr dzip Fun slices arr Example let zipElems flip atan2 coords",
          "hierarchy": "Data Yarr Flow",
          "module": "Data.Yarr.Flow",
          "name": "zipElems",
          "normalized": "Fn(Dim a)b c-\u003eUArray d e f(a b)-\u003eUArray g e f c",
          "package": "yarr",
          "partial": "Elems",
          "signature": "Fn(Dim v)a b-\u003eUArray r l sh(v a)-\u003eUArray fr l sh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Flow.html#v:zipElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFusion type system. Use re-exported in \u003ca\u003eData.Yarr.Flow\u003c/a\u003e functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "Fusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html",
          "type": "module"
        },
        "index": {
          "description": "Fusion type system Use re-exported in Data.Yarr.Flow functions",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "Fusion",
          "package": "yarr",
          "partial": "Fusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class abstracts pair of array types, which could be (preferably should be)\n mapped \u003cem\u003e(fused)\u003c/em\u003e one to another. Injective version of \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source array representation. It determines result representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efr\u003c/code\u003e (fused repr) - result (fused) array representation. Result array\n    isn't indeed presented in memory, finally it should be\n    \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003ed or \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eed to \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e\n    representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - load type, common for source and fused arrays\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll functions are already defined, using non-injective versions from \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart, it's role play top-level functions\n from \u003ca\u003eData.Yarr.Repr.Separate\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "DefaultFusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#DefaultFusion",
          "type": "class"
        },
        "index": {
          "description": "This class abstracts pair of array types which could be preferably should be mapped fused one to another Injective version of Fusion class Parameters source array representation It determines result representation fr fused repr result fused array representation Result array isn indeed presented in memory finally it should be compute or Load ed to Manifest representation load type common for source and fused arrays sh shape of arrays All functions are already defined using non-injective versions from Fusion class The class doesn have vector counterpart it role play top-level functions from Data.Yarr.Repr.Separate module",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "DefaultFusion",
          "package": "yarr",
          "partial": "Default Fusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#t:DefaultFusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eDefaultFusion\u003c/a\u003e\u003c/code\u003e, this class abstracts the pair array types,\n which should be fused one to another\n on maps and zips which accept index of element\n (several elements for zips) in array (arrays).\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - source array representation. Determines result representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e - source load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efr\u003c/code\u003e (fused repr) - result (fused) array representation. Result array\n    isn't indeed presented in memory, finally it should be\n    \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003ed or \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eed to \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e\n    representation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efl\u003c/code\u003e - result, \"shaped\" load type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - shape of arrays\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll functions are already defined,\n using non-injective versions from \u003ccode\u003e\u003ca\u003eIFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "DefaultIFusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#DefaultIFusion",
          "type": "class"
        },
        "index": {
          "description": "Like DefaultFusion this class abstracts the pair array types which should be fused one to another on maps and zips which accept index of element several elements for zips in array arrays Parameters source array representation Determines result representation source load type fr fused repr result fused array representation Result array isn indeed presented in memory finally it should be compute or Load ed to Manifest representation fl result shaped load type sh shape of arrays All functions are already defined using non-injective versions from IFusion class The class doesn have vector counterpart",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "DefaultIFusion",
          "package": "yarr",
          "partial": "Default IFusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#t:DefaultIFusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized, non-injective version of \u003ccode\u003e\u003ca\u003eDefaultFusion\u003c/a\u003e\u003c/code\u003e. Used internally.\n\u003c/p\u003e\u003cp\u003eMinimum complete defenition: \u003ccode\u003e\u003ca\u003efmapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efzip2M\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efzip3M\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efzipM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart, it's role play top-level functions\n from \u003ca\u003eData.Yarr.Repr.Separate\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "Fusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#Fusion",
          "type": "class"
        },
        "index": {
          "description": "Generalized non-injective version of DefaultFusion Used internally Minimum complete defenition fmapM fzip2M fzip3M and fzipM The class doesn have vector counterpart it role play top-level functions from Data.Yarr.Repr.Separate module",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "Fusion",
          "package": "yarr",
          "partial": "Fusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#t:Fusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e, for mappings/zippings with array index. Used to define\n functions in \u003ccode\u003e\u003ca\u003eDefaultIFusion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum complete defenition: \u003ccode\u003e\u003ca\u003efimapM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efizip2M\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efizip3M\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efizipM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe class doesn't have vector counterpart.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "IFusion",
          "package": "yarr",
          "source": "src/Data-Yarr-Fusion.html#IFusion",
          "type": "class"
        },
        "index": {
          "description": "Like Fusion for mappings zippings with array index Used to define functions in DefaultIFusion Minimum complete defenition fimapM fizip2M fizip3M and fizipM The class doesn have vector counterpart",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "IFusion",
          "package": "yarr",
          "partial": "IFusion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#t:IFusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure element mapping.\n\u003c/p\u003e\u003cp\u003eMain basic \"map\" in Yarr.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dmap",
          "package": "yarr",
          "signature": "dmap",
          "source": "src/Data-Yarr-Fusion.html#dmap",
          "type": "method"
        },
        "index": {
          "description": "Pure element mapping Main basic map in Yarr",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dmap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic element mapping.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dmapM",
          "package": "yarr",
          "signature": "dmapM",
          "source": "src/Data-Yarr-Fusion.html#dmapM",
          "type": "method"
        },
        "index": {
          "description": "Monadic element mapping",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dmapM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized element zipping with pure function.\n Zipper function is wrapped in \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e for injectivity.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzip",
          "package": "yarr",
          "signature": "dzip",
          "source": "src/Data-Yarr-Fusion.html#dzip",
          "type": "method"
        },
        "index": {
          "description": "Generalized element zipping with pure function Zipper function is wrapped in Fun for injectivity",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Zipping 2 arrays of the same type indexes and shapes.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n let productArr = dzip2 (*) arr1 arr2\n\u003c/pre\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzip2",
          "package": "yarr",
          "signature": "dzip2",
          "source": "src/Data-Yarr-Fusion.html#dzip2",
          "type": "method"
        },
        "index": {
          "description": "Zipping arrays of the same type indexes and shapes Example let productArr dzip2 arr1 arr2",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip2\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzip2M",
          "package": "yarr",
          "signature": "dzip2M",
          "source": "src/Data-Yarr-Fusion.html#dzip2M",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip2 function",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Zipping 3 arrays of the same type indexes and shapes.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzip3",
          "package": "yarr",
          "signature": "dzip3",
          "source": "src/Data-Yarr-Fusion.html#dzip3",
          "type": "method"
        },
        "index": {
          "description": "Zipping arrays of the same type indexes and shapes",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip3\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzip3M",
          "package": "yarr",
          "signature": "dzip3M",
          "source": "src/Data-Yarr-Fusion.html#dzip3M",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip3 function",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003edzip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "dzipM",
          "package": "yarr",
          "signature": "dzipM",
          "source": "src/Data-Yarr-Fusion.html#dzipM",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of dzip function",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "dzipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:dzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fimap",
          "package": "yarr",
          "signature": "fimap",
          "source": "src/Data-Yarr-Fusion.html#fimap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fimap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fimapM",
          "package": "yarr",
          "signature": "(sh -\u003e a -\u003e IO b) -\u003e UArray r l sh a -\u003e UArray fr fl sh b",
          "source": "src/Data-Yarr-Fusion.html#fimapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fimapM",
          "normalized": "(a-\u003eb-\u003eIO c)-\u003eUArray d e a b-\u003eUArray f g a c",
          "package": "yarr",
          "signature": "(sh-\u003ea-\u003eIO b)-\u003eUArray r l sh a-\u003eUArray fr fl sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fimapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizip",
          "package": "yarr",
          "signature": "fizip",
          "source": "src/Data-Yarr-Fusion.html#fizip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizip2",
          "package": "yarr",
          "signature": "fizip2",
          "source": "src/Data-Yarr-Fusion.html#fizip2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizip2M",
          "package": "yarr",
          "signature": "fizip2M",
          "source": "src/Data-Yarr-Fusion.html#fizip2M",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizip3",
          "package": "yarr",
          "signature": "fizip3",
          "source": "src/Data-Yarr-Fusion.html#fizip3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizip3M",
          "package": "yarr",
          "signature": "fizip3M",
          "source": "src/Data-Yarr-Fusion.html#fizip3M",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fizipM",
          "package": "yarr",
          "signature": "fizipM",
          "source": "src/Data-Yarr-Fusion.html#fizipM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fizipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fizipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fmap",
          "package": "yarr",
          "signature": "fmap",
          "source": "src/Data-Yarr-Fusion.html#fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fmap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fmapM",
          "package": "yarr",
          "signature": "(a -\u003e IO b) -\u003e UArray r l sh a -\u003e UArray fr l sh b",
          "source": "src/Data-Yarr-Fusion.html#fmapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fmapM",
          "normalized": "(a-\u003eIO b)-\u003eUArray c d e a-\u003eUArray f d e b",
          "package": "yarr",
          "signature": "(a-\u003eIO b)-\u003eUArray r l sh a-\u003eUArray fr l sh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzip",
          "package": "yarr",
          "signature": "fzip",
          "source": "src/Data-Yarr-Fusion.html#fzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzip2",
          "package": "yarr",
          "signature": "fzip2",
          "source": "src/Data-Yarr-Fusion.html#fzip2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzip2M",
          "package": "yarr",
          "signature": "fzip2M",
          "source": "src/Data-Yarr-Fusion.html#fzip2M",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzip3",
          "package": "yarr",
          "signature": "fzip3",
          "source": "src/Data-Yarr-Fusion.html#fzip3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzip3M",
          "package": "yarr",
          "signature": "fzip3M",
          "source": "src/Data-Yarr-Fusion.html#fzip3M",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Fusion",
          "name": "fzipM",
          "package": "yarr",
          "signature": "fzipM",
          "source": "src/Data-Yarr-Fusion.html#fzipM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "fzipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:fzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure element mapping with array index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "imap",
          "package": "yarr",
          "signature": "imap",
          "source": "src/Data-Yarr-Fusion.html#imap",
          "type": "method"
        },
        "index": {
          "description": "Pure element mapping with array index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "imap",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic element mapping with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "imapM",
          "package": "yarr",
          "signature": "imapM",
          "source": "src/Data-Yarr-Fusion.html#imapM",
          "type": "method"
        },
        "index": {
          "description": "Monadic element mapping with index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "imapM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:imapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Generalized pure element zipping with index in arrays.\n Zipper function is wrapped in \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e for injectivity.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izip",
          "package": "yarr",
          "signature": "izip",
          "source": "src/Data-Yarr-Fusion.html#izip",
          "type": "method"
        },
        "index": {
          "description": "Generalized pure element zipping with index in arrays Zipper function is wrapped in Fun for injectivity",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izip",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure zipping of 2 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izip2",
          "package": "yarr",
          "signature": "izip2",
          "source": "src/Data-Yarr-Fusion.html#izip2",
          "type": "method"
        },
        "index": {
          "description": "Pure zipping of arrays with index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izip2",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic zipping of 2 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izip2M",
          "package": "yarr",
          "signature": "izip2M",
          "source": "src/Data-Yarr-Fusion.html#izip2M",
          "type": "method"
        },
        "index": {
          "description": "Monadic zipping of arrays with index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izip2M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izip2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Pure zipping of 3 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izip3",
          "package": "yarr",
          "signature": "izip3",
          "source": "src/Data-Yarr-Fusion.html#izip3",
          "type": "method"
        },
        "index": {
          "description": "Pure zipping of arrays with index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izip3",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic zipping of 3 arrays with index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izip3M",
          "package": "yarr",
          "signature": "izip3M",
          "source": "src/Data-Yarr-Fusion.html#izip3M",
          "type": "method"
        },
        "index": {
          "description": "Monadic zipping of arrays with index",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izip3M",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izip3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Monadic version of \u003ccode\u003e\u003ca\u003eizip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Fusion",
          "name": "izipM",
          "package": "yarr",
          "signature": "izipM",
          "source": "src/Data-Yarr-Fusion.html#izipM",
          "type": "method"
        },
        "index": {
          "description": "Monadic version of izip function",
          "hierarchy": "Data Yarr Fusion",
          "module": "Data.Yarr.Fusion",
          "name": "izipM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Fusion.html#v:izipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.IO.List",
          "name": "List",
          "package": "yarr",
          "source": "src/Data-Yarr-IO-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr IO List",
          "module": "Data.Yarr.IO.List",
          "name": "List",
          "package": "yarr",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-IO-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Loads manifest array into memory, with elements\n from flatten list.\n\u003c/p\u003e\u003cp\u003eUse this function in the last resort, there are plenty of\n methods to \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e array, from \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003eelayed array for example.\n\u003c/p\u003e",
          "module": "Data.Yarr.IO.List",
          "name": "fromList",
          "package": "yarr",
          "signature": "sh-\u003e [a]-\u003e IO (UArray r l sh a)",
          "type": "function"
        },
        "index": {
          "description": "Loads manifest array into memory with elements from flatten list Use this function in the last resort there are plenty of methods to Load array from elayed array for example",
          "hierarchy": "Data Yarr IO List",
          "module": "Data.Yarr.IO.List",
          "name": "fromList",
          "normalized": "a-\u003e[b]-\u003eIO(UArray c d a b)",
          "package": "yarr",
          "partial": "List",
          "signature": "sh-\u003e[a]-\u003eIO(UArray r l sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-IO-List.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Covert array to flat list.\n Multidimentional arrays are flatten in column-major order:\n\u003c/p\u003e\u003cp\u003e[(elem at (0, .., 0, 1)), (elem at (0, .., 0, 2)), ...]\n\u003c/p\u003e",
          "module": "Data.Yarr.IO.List",
          "name": "toList",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e IO [a]",
          "source": "src/Data-Yarr-IO-List.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Covert array to flat list Multidimentional arrays are flatten in column-major order elem at elem at",
          "hierarchy": "Data Yarr IO List",
          "module": "Data.Yarr.IO.List",
          "name": "toList",
          "normalized": "UArray a b c d-\u003eIO[d]",
          "package": "yarr",
          "partial": "List",
          "signature": "UArray r l sh a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-IO-List.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Boxed",
          "name": "Boxed",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Boxed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Boxed",
          "module": "Data.Yarr.Repr.Boxed",
          "name": "Boxed",
          "package": "yarr",
          "partial": "Boxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Boxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003eoxed representation is a wrapper for \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e\n from \u003ccode\u003eprimitive\u003c/code\u003e package. It may be used to operate with arrays\n of variable-lengths or multiconstructor ADTs, for example, lists.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e element types you would better use\n \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e test this representation at least one time...\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Boxed",
          "name": "B",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Boxed.html#B",
          "type": "data"
        },
        "index": {
          "description": "oxed representation is wrapper for Array from primitive package It may be used to operate with arrays of variable-lengths or multiconstructor ADTs for example lists For Storable element types you would better use oreign arrays TODO test this representation at least one time",
          "hierarchy": "Data Yarr Repr Boxed",
          "module": "Data.Yarr.Repr.Boxed",
          "name": "B",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Boxed.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable Boxed is a wrapper for \u003ccode\u003e\u003ca\u003eMutableArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Boxed",
          "name": "MB",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Boxed.html#MB",
          "type": "data"
        },
        "index": {
          "description": "Mutable Boxed is wrapper for MutableArray",
          "hierarchy": "Data Yarr Repr Boxed",
          "module": "Data.Yarr.Repr.Boxed",
          "name": "MB",
          "package": "yarr",
          "partial": "MB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Boxed.html#t:MB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Delayed",
          "name": "Delayed",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Delayed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "Delayed",
          "package": "yarr",
          "partial": "Delayed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed representation is a wrapper for arbitrary indexing function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e instance holds linear getter (\u003ccode\u003e(Int -\u003e IO a)\u003c/code\u003e),\n and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e - shaped, \"true\" \u003ccode\u003e(sh -\u003e IO a)\u003c/code\u003e index, respectively.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eD\u003c/code\u003eelayed arrays are most common recipients for fusion operations.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "D",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Delayed.html#D",
          "type": "data"
        },
        "index": {
          "description": "Delayed representation is wrapper for arbitrary indexing function UArray sh instance holds linear getter Int IO and UArray SH sh shaped true sh IO index respectively elayed arrays are most common recipients for fusion operations",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "D",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn opposite to \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003eelayed (source) Delayed Target holds abstract \u003cem\u003ewriting\u003c/em\u003e\n function: \u003ccode\u003e(sh -\u003e a -\u003e IO ())\u003c/code\u003e. It may be used to perform arbitrarily tricky\n things, because no one obliges you to indeed write\n an element inside wrapped function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "DT",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Delayed.html#DT",
          "type": "data"
        },
        "index": {
          "description": "In opposite to elayed source Delayed Target holds abstract writing function sh IO It may be used to perform arbitrarily tricky things because no one obliges you to indeed write an element inside wrapped function",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "DT",
          "package": "yarr",
          "partial": "DT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear load type index. \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e load type index\n define \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e and leave \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e\n functions defined by default.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "L",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#L",
          "type": "data"
        },
        "index": {
          "description": "Linear load type index UArray with load type index define linearIndex and linearWrite and leave index and write functions defined by default",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "L",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral shape load type index. \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003e load type index\n specialize \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e and leave \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e\n functions defined by default.\n\u003c/p\u003e\u003cp\u003eType-level distinction between \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003einear and \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003eaped arrays\n is aimed to avoid integral division operations while looping\n through composite (\u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDim3\u003c/a\u003e\u003c/code\u003e) indices.\n\u003c/p\u003e\u003cp\u003eIntegral division is very expensive operation even on modern CPUs.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "SH",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#SH",
          "type": "data"
        },
        "index": {
          "description": "General shape load type index UArray with SH load type index specialize index and write and leave linearIndex and linearWrite functions defined by default Type-level distinction between inear and SH aped arrays is aimed to avoid integral division operations while looping through composite Dim2 Dim3 indices Integral division is very expensive operation even on modern CPUs",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "SH",
          "package": "yarr",
          "partial": "SH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#t:SH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Delayed",
          "name": "delayLinear",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e UArray D L sh a",
          "source": "src/Data-Yarr-Repr-Delayed.html#delayLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "delayLinear",
          "normalized": "UArray a b c d-\u003eUArray D L c d",
          "package": "yarr",
          "partial": "Linear",
          "signature": "UArray r l sh a-\u003eUArray D L sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:delayLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e arr)\u003c/code\u003e into Delayed representation. Normally you shouldn't need\n to use this function. It may be dangerous for performance, because\n preferred \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing type of source array is ignored.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "delayShaped",
          "package": "yarr",
          "signature": "UArray r l sh a -\u003e UArray D SH sh a",
          "source": "src/Data-Yarr-Repr-Delayed.html#delayShaped",
          "type": "function"
        },
        "index": {
          "description": "Wraps index arr into Delayed representation Normally you shouldn need to use this function It may be dangerous for performance because preferred Load ing type of source array is ignored",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "delayShaped",
          "normalized": "UArray a b c d-\u003eUArray D SH c d",
          "package": "yarr",
          "partial": "Shaped",
          "signature": "UArray r l sh a-\u003eUArray D SH sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:delayShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap indexing function into delayed representation.\n\u003c/p\u003e\u003cp\u003eUse this function carefully, don't implement through it something\n that has specialized implementation in the library (mapping, zipping, etc).\n\u003c/p\u003e\u003cp\u003eSuitable to obtain arrays of constant element,\n of indices (\u003ccode\u003efromFunction sh \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e), and so on.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Repr.Delayed\",\"Data.Yarr\"]",
          "name": "fromFunction",
          "package": "yarr",
          "signature": "sh-\u003e (sh -\u003e IO a)-\u003e UArray D SH sh a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:fromFunction\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:fromFunction\"]"
        },
        "index": {
          "description": "Wrap indexing function into delayed representation Use this function carefully don implement through it something that has specialized implementation in the library mapping zipping etc Suitable to obtain arrays of constant element of indices fromFunction sh return and so on",
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "fromFunction",
          "normalized": "a-\u003e(a-\u003eIO b)-\u003eUArray D SH a b",
          "package": "yarr",
          "partial": "Function",
          "signature": "sh-\u003e(sh-\u003eIO a)-\u003eUArray D SH sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:fromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Delayed",
          "name": "fromLinearFunction",
          "package": "yarr",
          "signature": "sh-\u003e (Int -\u003e IO a)-\u003e UArray D L sh a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "fromLinearFunction",
          "normalized": "a-\u003e(Int-\u003eIO b)-\u003eUArray D L a b",
          "package": "yarr",
          "partial": "Linear Function",
          "signature": "sh-\u003e(Int-\u003eIO a)-\u003eUArray D L sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:fromLinearFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Delayed",
          "name": "linearConst",
          "package": "yarr",
          "signature": "sh -\u003e a -\u003e UArray D L sh a",
          "source": "src/Data-Yarr-Repr-Delayed.html#linearConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "linearConst",
          "normalized": "a-\u003eb-\u003eUArray D L a b",
          "package": "yarr",
          "partial": "Const",
          "signature": "sh-\u003ea-\u003eUArray D L sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:linearConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Delayed",
          "name": "shapedConst",
          "package": "yarr",
          "signature": "sh -\u003e a -\u003e UArray D SH sh a",
          "source": "src/Data-Yarr-Repr-Delayed.html#shapedConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Delayed",
          "module": "Data.Yarr.Repr.Delayed",
          "name": "shapedConst",
          "normalized": "a-\u003eb-\u003eUArray D SH a b",
          "package": "yarr",
          "partial": "Const",
          "signature": "sh-\u003ea-\u003eUArray D SH sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Delayed.html#v:shapedConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Foreign",
          "name": "Foreign",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Foreign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "Foreign",
          "package": "yarr",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForeign representation is the heart of Yarr framework.\n\u003c/p\u003e\u003cp\u003eInternally it holds raw pointer (\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e), which makes indexing\n foreign arrays not slower than GHC's built-in primitive arrays,\n but without freeze/thaw boilerplate.\n\u003c/p\u003e\u003cp\u003eForeign arrays are very permissible, for example you can easily\n use them as source and target of \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing operation simultaneously,\n achieving old good in-place \u003ccode\u003eC-\u003c/code\u003estyle array modifying:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eloadS\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e arr) arr\u003c/pre\u003e\u003cp\u003eForeign arrays are intented to hold all \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e types and\n vectors of them (because there is a conditional instance of \u003ccode\u003eStoralbe\u003c/code\u003e\n class for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003es too).\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "F",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Foreign.html#F",
          "type": "data"
        },
        "index": {
          "description": "Foreign representation is the heart of Yarr framework Internally it holds raw pointer Ptr which makes indexing foreign arrays not slower than GHC built-in primitive arrays but without freeze thaw boilerplate Foreign arrays are very permissible for example you can easily use them as source and target of Load ing operation simultaneously achieving old good in-place style array modifying loadS fill dmap sqrt arr arr Foreign arrays are intented to hold all Storable types and vectors of them because there is conditional instance of Storalbe class for Vector of Storable too",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "F",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForeign Slice representation, \u003cem\u003eview\u003c/em\u003e slice representation\n for \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign arrays.\n\u003c/p\u003e\u003cp\u003eTo understand Foreign Slices,\n suppose you have standard \u003ccode\u003eimage\u003c/code\u003e array of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eN3\u003c/a\u003e\u003c/code\u003e Word8)\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eIt's layout in memory (with array indices):\n\u003c/p\u003e\u003cpre\u003e\n  r g b | r g b | r g b | ...\n (0, 0)  (0, 1)  (0, 2)   ...\n\u003c/pre\u003e\u003cpre\u003e\n let (VecList [reds, greens, blues]) = \u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e image\n -- reds, greens, blues :: UArray FS Dim2 Word8\n\u003c/pre\u003e\u003cp\u003eNow \u003ccode\u003eblues\u003c/code\u003e just indexes each third byte on the same underlying\n memory block:\n\u003c/p\u003e\u003cpre\u003e\n ... b | ... b | ... b | ...\n   (0, 0)  (0, 1)  (0, 2)...\n\u003c/pre\u003e",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "FS",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Foreign.html#FS",
          "type": "data"
        },
        "index": {
          "description": "Foreign Slice representation view slice representation for oreign arrays To understand Foreign Slices suppose you have standard image array of UArray Dim2 VecList N3 Word8 type It layout in memory with array indices let VecList reds greens blues slices image reds greens blues UArray FS Dim2 Word8 Now blues just indexes each third byte on the same underlying memory block",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "FS",
          "package": "yarr",
          "partial": "FS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#t:FS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear load type index. \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e load type index\n define \u003ccode\u003e\u003ca\u003elinearIndex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearWrite\u003c/a\u003e\u003c/code\u003e and leave \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e\n functions defined by default.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "L",
          "package": "yarr",
          "source": "src/Data-Yarr-Eval.html#L",
          "type": "data"
        },
        "index": {
          "description": "Linear load type index UArray with load type index define linearIndex and linearWrite and leave index and write functions defined by default",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "L",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member functions of this class facilitate writing values of\nprimitive types to raw memory (which may have been allocated with the\nabove mentioned routines) and reading values from blocks of raw\nmemory.  The class, furthermore, includes support for computing the\nstorage requirements and alignment restrictions of storable types.\n\u003c/p\u003e\u003cp\u003eMemory addresses are represented as values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, for some\n\u003ccode\u003ea\u003c/code\u003e which is an instance of class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.  The type argument to\n\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e helps provide some valuable type safety in FFI code (you can't\nmix pointers of different types without an explicit cast), while\nhelping the Haskell type system figure out which marshalling method is\nneeded for a given pointer.\n\u003c/p\u003e\u003cp\u003eAll marshalling between Haskell and a foreign language ultimately\nboils down to translating Haskell data structures into the binary\nrepresentation of a corresponding data structure of the foreign\nlanguage and vice versa.  To code this marshalling in Haskell, it is\nnecessary to manipulate primitive data types stored in unstructured\nmemory blocks.  The class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e facilitates this manipulation on\nall types for which it is instantiated, which are the standard basic\ntypes of Haskell, the fixed size \u003ccode\u003eInt\u003c/code\u003e types (\u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e), the fixed size \u003ccode\u003eWord\u003c/code\u003e types (\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e), \u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e, all types from \u003ca\u003eForeign.C.Types\u003c/a\u003e,\nas well as \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealignment\u003c/a\u003e\u003c/code\u003e, one of \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003epeekElemOff\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epeekByteOff\u003c/a\u003e\u003c/code\u003e, and one of \u003ccode\u003e\u003ca\u003epoke\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epokeElemOff\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003epokeByteOff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "Storable",
          "package": "yarr",
          "type": "class"
        },
        "index": {
          "description": "The member functions of this class facilitate writing values of primitive types to raw memory which may have been allocated with the above mentioned routines and reading values from blocks of raw memory The class furthermore includes support for computing the storage requirements and alignment restrictions of storable types Memory addresses are represented as values of type Ptr for some which is an instance of class Storable The type argument to Ptr helps provide some valuable type safety in FFI code you can mix pointers of different types without an explicit cast while helping the Haskell type system figure out which marshalling method is needed for given pointer All marshalling between Haskell and foreign language ultimately boils down to translating Haskell data structures into the binary representation of corresponding data structure of the foreign language and vice versa To code this marshalling in Haskell it is necessary to manipulate primitive data types stored in unstructured memory blocks The class Storable facilitates this manipulation on all types for which it is instantiated which are the standard basic types of Haskell the fixed size Int types Int8 Int16 Int32 Int64 the fixed size Word types Word8 Word16 Word32 Word64 StablePtr all types from Foreign.C.Types as well as Ptr Minimal complete definition sizeOf alignment one of peek peekElemOff and peekByteOff and one of poke pokeElemOff and pokeByteOff",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "Storable",
          "package": "yarr",
          "partial": "Storable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#t:Storable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e allocates zero-initialized foreign array.\n\u003c/p\u003e\u003cp\u003eNeeded because common \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e function allocates array with garbage.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "newEmpty",
          "package": "yarr",
          "signature": "sh -\u003e IO (UArray F L sh a)",
          "source": "src/Data-Yarr-Repr-Foreign.html#newEmpty",
          "type": "function"
        },
        "index": {
          "description": "allocates zero-initialized foreign array Needed because common new function allocates array with garbage",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "newEmpty",
          "normalized": "a-\u003eIO(UArray F L a b)",
          "package": "yarr",
          "partial": "Empty",
          "signature": "sh-\u003eIO(UArray F L sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#v:newEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns pointer to memory block used by the given foreign\n array.\n\u003c/p\u003e\u003cp\u003eMay be useful to reuse memory if you don't longer need the given array\n in the program:\n\u003c/p\u003e\u003cpre\u003e\n brandNewData \u003c-\n    \u003ccode\u003e\u003ca\u003eunsafeFromForeignPtr\u003c/a\u003e\u003c/code\u003e ext (\u003ccode\u003e\u003ca\u003ecastForeignPtr\u003c/a\u003e\u003c/code\u003e (toForeignPtr arr))\n\u003c/pre\u003e",
          "module": "[\"Data.Yarr.Repr.Foreign\",\"Data.Yarr\"]",
          "name": "toForeignPtr",
          "package": "yarr",
          "signature": "UArray F L sh a -\u003e ForeignPtr a",
          "source": "src/Data-Yarr-Repr-Foreign.html#toForeignPtr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#v:toForeignPtr\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:toForeignPtr\"]"
        },
        "index": {
          "description": "Returns pointer to memory block used by the given foreign array May be useful to reuse memory if you don longer need the given array in the program brandNewData unsafeFromForeignPtr ext castForeignPtr toForeignPtr arr",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "toForeignPtr",
          "normalized": "UArray F L a b-\u003eForeignPtr b",
          "package": "yarr",
          "partial": "Foreign Ptr",
          "signature": "UArray F L sh a-\u003eForeignPtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Wraps foreign ptr into foreign array.\n\u003c/p\u003e\u003cp\u003eThe function is unsafe because it simply don't (and can't)\n check anything about correctness of produced array.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Repr.Foreign\",\"Data.Yarr\"]",
          "name": "unsafeFromForeignPtr",
          "package": "yarr",
          "signature": "sh -\u003e ForeignPtr a -\u003e IO (UArray F L sh a)",
          "source": "src/Data-Yarr-Repr-Foreign.html#unsafeFromForeignPtr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#v:unsafeFromForeignPtr\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:unsafeFromForeignPtr\"]"
        },
        "index": {
          "description": "Wraps foreign ptr into foreign array The function is unsafe because it simply don and can check anything about correctness of produced array",
          "hierarchy": "Data Yarr Repr Foreign",
          "module": "Data.Yarr.Repr.Foreign",
          "name": "unsafeFromForeignPtr",
          "normalized": "a-\u003eForeignPtr b-\u003eIO(UArray F L a b)",
          "package": "yarr",
          "partial": "From Foreign Ptr",
          "signature": "sh-\u003eForeignPtr a-\u003eIO(UArray F L sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Foreign.html#v:unsafeFromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "Separate",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Separate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "Separate",
          "package": "yarr",
          "partial": "Separate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSEparate meta array representation. Internally SEparate arrays\n hold vector of it's slices (so, \u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e is just getter for them).\n\u003c/p\u003e\u003cp\u003eMostly useful for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Separate in memory manifest \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign arrays (\"Unboxed\" arrays\n    in \u003ccode\u003evector\u003c/code\u003e/\u003ccode\u003erepa\u003c/code\u003e libraries terms).\n\u003c/li\u003e\u003cli\u003e Element-wise vector array fusion (see group of \u003ccode\u003e\u003ca\u003edmapElems\u003c/a\u003e\u003c/code\u003e functions).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr.Repr.Separate",
          "name": "SE",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Separate.html#SE",
          "type": "data"
        },
        "index": {
          "description": "SEparate meta array representation Internally SEparate arrays hold vector of it slices so slices is just getter for them Mostly useful for Separate in memory manifest oreign arrays Unboxed arrays in vector repa libraries terms Element-wise vector array fusion see group of dmapElems functions",
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "SE",
          "package": "yarr",
          "partial": "SE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#t:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(0)\u003c/em\u003e Converts separate vector between vector types of the same arity.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n -- floatPairs :: \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVecList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eN2\u003c/a\u003e\u003c/code\u003e Float)\n let cs :: \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e Float)\n     cs = convert floatPairs\n\u003c/pre\u003e",
          "module": "Data.Yarr.Repr.Separate",
          "name": "convert",
          "package": "yarr",
          "signature": "UArray (SE r) l sh (v e) -\u003e UArray (SE r) l sh (v2 e)",
          "source": "src/Data-Yarr-Repr-Separate.html#convert",
          "type": "function"
        },
        "index": {
          "description": "Converts separate vector between vector types of the same arity Example floatPairs UArray SE Dim1 VecList N2 Float let cs UArray SE Dim1 Complex Float cs convert floatPairs",
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "convert",
          "normalized": "UArray(SE a)b c(d e)-\u003eUArray(SE a)b c(d e)",
          "package": "yarr",
          "signature": "UArray(SE r)l sh(v e)-\u003eUArray(SE r)l sh(v e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup of \u003ccode\u003ef-...-Elems-\u003c/code\u003e functions is used internally to define\n \u003ccode\u003ed-...-Elems-\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fmapElems",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function"
        },
        "index": {
          "description": "Group of f-...-Elems functions is used internally to define d-...-Elems functions",
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fmapElems",
          "normalized": "VecList(Dim a)(b-\u003ec)-\u003eUArray d e f(a b)-\u003eUArray(SE g)e f(a c)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fmapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fmapElemsM",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e IO b)-\u003e UArray r l sh (v a)-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fmapElemsM",
          "normalized": "VecList(Dim a)(b-\u003eIO c)-\u003eUArray d e f(a b)-\u003eUArray(SE g)e f(a c)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eIO b)-\u003eUArray r l sh(v a)-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fmapElemsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Glues several arrays of the same type\n into one separate array of vectors.\n All source arrays must be of the same extent.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003elet separateCoords = fromSlices (\u003ccode\u003e\u003ca\u003evl_3\u003c/a\u003e\u003c/code\u003e xs ys zs)\u003c/pre\u003e",
          "module": "[\"Data.Yarr.Repr.Separate\",\"Data.Yarr\"]",
          "name": "fromSlices",
          "package": "yarr",
          "signature": "VecList (Dim v) (UArray r l sh e) -\u003e UArray (SE r) l sh (v e)",
          "source": "src/Data-Yarr-Repr-Separate.html#fromSlices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fromSlices\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:fromSlices\"]"
        },
        "index": {
          "description": "Glues several arrays of the same type into one separate array of vectors All source arrays must be of the same extent Example let separateCoords fromSlices vl xs ys zs",
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fromSlices",
          "normalized": "VecList(Dim a)(UArray b c d e)-\u003eUArray(SE b)c d(a e)",
          "package": "yarr",
          "partial": "Slices",
          "signature": "VecList(Dim v)(UArray r l sh e)-\u003eUArray(SE r)l sh(v e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fromSlices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems",
          "package": "yarr",
          "signature": "VecList (Dim v2) (Fun m a b)-\u003e VecList m (UArray r l sh (v a))-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems",
          "normalized": "VecList(Dim a)(Fun b c d)-\u003eVecList b(UArray e f g(a c))-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(Fun m a b)-\u003eVecList m(UArray r l sh(v a))-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems2",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray (SE fslr) l sh (v c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems2",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed)-\u003eUArray e f g(a b)-\u003eUArray e f g(a c)-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray(SE fslr)l sh(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElems2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems2M",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e IO c)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray (SE fslr) l sh (v c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems2M",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003eIO d)-\u003eUArray e f g(a b)-\u003eUArray e f g(a c)-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003eIO c)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray(SE fslr)l sh(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElems2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems3",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c -\u003e d)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray r l sh (v c)-\u003e UArray (SE fslr) l sh (v d)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems3",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed-\u003ee)-\u003eUArray f g h(a b)-\u003eUArray f g h(a c)-\u003eUArray f g h(a d)-\u003eUArray(SE i)g h(a e)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec-\u003ed)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray r l sh(v c)-\u003eUArray(SE fslr)l sh(v d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElems3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems3M",
          "package": "yarr",
          "signature": "VecList (Dim v) (a -\u003e b -\u003e c -\u003e IO d)-\u003e UArray r l sh (v a)-\u003e UArray r l sh (v b)-\u003e UArray r l sh (v c)-\u003e UArray (SE fslr) l sh (v d)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElems3M",
          "normalized": "VecList(Dim a)(b-\u003ec-\u003ed-\u003eIO e)-\u003eUArray f g h(a b)-\u003eUArray f g h(a c)-\u003eUArray f g h(a d)-\u003eUArray(SE i)g h(a e)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(a-\u003eb-\u003ec-\u003eIO d)-\u003eUArray r l sh(v a)-\u003eUArray r l sh(v b)-\u003eUArray r l sh(v c)-\u003eUArray(SE fslr)l sh(v d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElems3M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElemsM",
          "package": "yarr",
          "signature": "VecList (Dim v2) (Fun m a (IO b))-\u003e VecList m (UArray r l sh (v a))-\u003e UArray (SE fslr) l sh (v2 b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "fzipElemsM",
          "normalized": "VecList(Dim a)(Fun b c(IO d))-\u003eVecList b(UArray e f g(a c))-\u003eUArray(SE h)f g(a d)",
          "package": "yarr",
          "partial": "Elems",
          "signature": "VecList(Dim v)(Fun m a(IO b))-\u003eVecList m(UArray r l sh(v a))-\u003eUArray(SE fslr)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:fzipElemsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(depends on mapper function)\u003c/em\u003e\n Maps slices of separate array \"entirely\".\n\u003c/p\u003e\u003cp\u003eThis function is useful when operation over slices is not\n element-wise (in that case you should use \u003ccode\u003e\u003ca\u003emapElems\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003elet blurredImage = unsafeMapSlices blur image\u003c/pre\u003e\u003cp\u003eThe function is unsafe because it doesn't check that slice mapper\n translates extents uniformly (though it is pure).\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Repr.Separate\",\"Data.Yarr\"]",
          "name": "unsafeMapSlices",
          "package": "yarr",
          "signature": "(UArray r l sh a -\u003e UArray r2 l2 sh2 b)-\u003e UArray (SE r) l sh (v a)-\u003e UArray (SE r2) l2 sh2 (v b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:unsafeMapSlices\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:unsafeMapSlices\"]"
        },
        "index": {
          "description": "depends on mapper function Maps slices of separate array entirely This function is useful when operation over slices is not element-wise in that case you should use mapElems let blurredImage unsafeMapSlices blur image The function is unsafe because it doesn check that slice mapper translates extents uniformly though it is pure",
          "hierarchy": "Data Yarr Repr Separate",
          "module": "Data.Yarr.Repr.Separate",
          "name": "unsafeMapSlices",
          "normalized": "(UArray a b c d-\u003eUArray a b c e)-\u003eUArray(SE a)b c(f d)-\u003eUArray(SE a)b c(f e)",
          "package": "yarr",
          "partial": "Map Slices",
          "signature": "(UArray r l sh a-\u003eUArray r l sh b)-\u003eUArray(SE r)l sh(v a)-\u003eUArray(SE r)l sh(v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Repr-Separate.html#v:unsafeMapSlices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "Shape",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Shape",
          "package": "yarr",
          "partial": "Shape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly for internal use.\n Abstracts top-left -- bottom-right pair of indices.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Block",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Block",
          "type": "type"
        },
        "index": {
          "description": "Mainly for internal use Abstracts top-left bottom-right pair of indices",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Block",
          "package": "yarr",
          "partial": "Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor internal use.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e implement for \u003ccode\u003e\u003ca\u003eDim3\u003c/a\u003e\u003c/code\u003e and merge with \u003ccode\u003e\u003ca\u003eShape\u003c/a\u003e\u003c/code\u003e class\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "BlockShape",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#BlockShape",
          "type": "class"
        },
        "index": {
          "description": "For internal use TODO implement for Dim3 and merge with Shape class",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "BlockShape",
          "package": "yarr",
          "partial": "Block Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:BlockShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "Dim1",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Dim1",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Dim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "Dim2",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Dim2",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Dim2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "Dim3",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Dim3",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Dim3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to frequently used get-write-from-to arguments combo.\n\u003c/p\u003e\u003cp\u003eTo be passed as 1st parameter of all \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing functions\n from \u003ca\u003eData.Yarr.Eval\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Fill",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Fill",
          "type": "type"
        },
        "index": {
          "description": "Alias to frequently used get-write-from-to arguments combo To be passed as st parameter of all Load ing functions from Data.Yarr.Eval module",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Fill",
          "package": "yarr",
          "partial": "Fill",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes left folds.\n\u003c/p\u003e\u003cp\u003eTo be passed to fold combinators from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Foldl",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Foldl",
          "type": "type"
        },
        "index": {
          "description": "Generalizes left folds To be passed to fold combinators from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Foldl",
          "package": "yarr",
          "partial": "Foldl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes right folds.\n\u003c/p\u003e\u003cp\u003eTo be passed to fold combinators from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Foldr",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Foldr",
          "type": "type"
        },
        "index": {
          "description": "Generalizes right folds To be passed to fold combinators from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Foldr",
          "package": "yarr",
          "partial": "Foldr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "MultiShape",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#MultiShape",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "MultiShape",
          "package": "yarr",
          "partial": "Multi Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:MultiShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for column-major, regular composite array indices.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Shape",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Shape",
          "type": "class"
        },
        "index": {
          "description": "Class for column-major regular composite array indices",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Shape",
          "package": "yarr",
          "partial": "Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes both partially applied left and right folds,\n as well as walks with mutable state.\n\u003c/p\u003e\u003cp\u003eTo be passed to walk runners from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "StatefulWalk",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#StatefulWalk",
          "type": "type"
        },
        "index": {
          "description": "Generalizes both partially applied left and right folds as well as walks with mutable state To be passed to walk runners from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "StatefulWalk",
          "package": "yarr",
          "partial": "Stateful Walk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:StatefulWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly used to fight against GHC simplifier, which gives\n no chance to LLVM to perform Global Value Numbering optimization.\n\u003c/p\u003e\u003cp\u003eCopied from \u003ccode\u003erepa\u003c/code\u003e, see\n \u003ca\u003ehttp://hackage.haskell.org/packages/archive/repa/3.2.3.1/doc/html/Data-Array-Repa-Eval.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Touchable",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Primitive.html#Touchable",
          "type": "class"
        },
        "index": {
          "description": "Mainly used to fight against GHC simplifier which gives no chance to LLVM to perform Global Value Numbering optimization Copied from repa see http hackage.haskell.org packages archive repa doc html Data-Array-Repa-Eval.html",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Touchable",
          "package": "yarr",
          "partial": "Touchable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Touchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurried version of \u003ccode\u003e\u003ca\u003eStatefulWalk\u003c/a\u003e\u003c/code\u003e. Identical to \u003ccode\u003e\u003ca\u003eWork\u003c/a\u003e\u003c/code\u003e, indeed.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Walk",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Walk",
          "type": "type"
        },
        "index": {
          "description": "Curried version of StatefulWalk Identical to Work indeed",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Walk",
          "package": "yarr",
          "partial": "Walk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstracts interval works: \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eWalk\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTo be passed to functions from \u003ca\u003eData.Yarr.Utils.Fork\u003c/a\u003e module\n or called directly.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "Work",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Work",
          "type": "type"
        },
        "index": {
          "description": "Abstracts interval works Fill Walk To be passed to functions from Data.Yarr.Utils.Fork module or called directly",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "Work",
          "package": "yarr",
          "partial": "Work",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#t:Work"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "blockSize",
          "package": "yarr",
          "signature": "Block sh -\u003e Int",
          "source": "src/Data-Yarr-Shape.html#blockSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "blockSize",
          "normalized": "Block a-\u003eInt",
          "package": "yarr",
          "partial": "Size",
          "signature": "Block sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "clipBlock",
          "package": "yarr",
          "signature": "clipBlock",
          "source": "src/Data-Yarr-Shape.html#clipBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "clipBlock",
          "package": "yarr",
          "partial": "Block",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:clipBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "combine",
          "package": "yarr",
          "signature": "lsh -\u003e Int -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#combine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "combine",
          "normalized": "a-\u003eInt-\u003eb",
          "package": "yarr",
          "signature": "lsh-\u003eInt-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponent-wise maximum, used in \u003ca\u003eData.Yarr.Convolution\u003c/a\u003e implementation.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "complement",
          "package": "yarr",
          "signature": "VecList n sh -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#complement",
          "type": "method"
        },
        "index": {
          "description": "Component-wise maximum used in Data.Yarr.Convolution implementation",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "complement",
          "normalized": "VecList a b-\u003eb",
          "package": "yarr",
          "signature": "VecList n sh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2D-unrolled filling to maximize profit from\n \"Global value numbering\" LLVM optimization.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eblurred \u003c- \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloadS\u003c/a\u003e\u003c/code\u003e (dim2BlockFill \u003ccode\u003e\u003ca\u003en1\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003en4\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etouch\u003c/a\u003e\u003c/code\u003e)) delayedBlurred\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "dim2BlockFill",
          "package": "yarr",
          "signature": "bsx-\u003e bsy-\u003e (a -\u003e IO ())-\u003e Fill Dim2 a",
          "type": "function"
        },
        "index": {
          "description": "D-unrolled filling to maximize profit from Global value numbering LLVM optimization Example blurred compute loadS dim2BlockFill n1 n4 touch delayedBlurred",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "dim2BlockFill",
          "normalized": "a-\u003eb-\u003e(c-\u003eIO())-\u003eFill Dim c",
          "package": "yarr",
          "partial": "Block Fill",
          "signature": "bsx-\u003ebsy-\u003e(a-\u003eIO())-\u003eFill Dim a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:dim2BlockFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard fill without unrolling.\n To avoid premature optimization just type \u003ccode\u003efill\u003c/code\u003e\n each time you want to \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e array\n to manifest representation.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "fill",
          "package": "yarr",
          "signature": "Fill sh a",
          "source": "src/Data-Yarr-Shape.html#fill",
          "type": "method"
        },
        "index": {
          "description": "Standard fill without unrolling To avoid premature optimization just type fill each time you want to Load array to manifest representation",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "fill",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard left fold wothout unrolling.\n\u003c/p\u003e\u003cp\u003eThis one and 5 following functions shouldn't be called directly,\n they are intented to be passed as first argument\n to \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e and functions from\n \u003ca\u003eData.Yarr.Work\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "foldl",
          "package": "yarr",
          "signature": "Foldl sh a b",
          "source": "src/Data-Yarr-Shape.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Standard left fold wothout unrolling This one and following functions shouldn be called directly they are intented to be passed as first argument to Load and functions from Data.Yarr.Work module",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "foldl",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard right folding function without unrolling.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "foldr",
          "package": "yarr",
          "signature": "Foldr sh a b",
          "source": "src/Data-Yarr-Shape.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Standard right folding function without unrolling",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "foldr",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts linear, memory index of shaped array to shape index\n without bound checks.\n\u003c/p\u003e\u003cpre\u003efromLinear (3, 4) 5 == (1, 1)\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "fromLinear",
          "package": "yarr",
          "signature": "fromLinear",
          "source": "src/Data-Yarr-Shape.html#fromLinear",
          "type": "method"
        },
        "index": {
          "description": "Converts linear memory index of shaped array to shape index without bound checks fromLinear",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "fromLinear",
          "package": "yarr",
          "partial": "Linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:fromLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "inc",
          "package": "yarr",
          "signature": "sh -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#inc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "inc",
          "normalized": "a-\u003ea",
          "package": "yarr",
          "signature": "sh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "inner",
          "package": "yarr",
          "signature": "sh -\u003e Int",
          "source": "src/Data-Yarr-Shape.html#inner",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "inner",
          "normalized": "a-\u003eInt",
          "package": "yarr",
          "signature": "sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "insideBlock",
          "package": "yarr",
          "signature": "Block sh -\u003e sh -\u003e Bool",
          "source": "src/Data-Yarr-Shape.html#insideBlock",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "insideBlock",
          "normalized": "Block a-\u003ea-\u003eBool",
          "package": "yarr",
          "partial": "Block",
          "signature": "Block sh-\u003esh-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:insideBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponent-wise minimum, returns maximum legal index\n for all given array extents\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "intersect",
          "package": "yarr",
          "signature": "intersect",
          "source": "src/Data-Yarr-Shape.html#intersect",
          "type": "method"
        },
        "index": {
          "description": "Component-wise minimum returns maximum legal index for all given array extents",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "intersect",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "intersectBlocks",
          "package": "yarr",
          "signature": "VecList n (Block sh) -\u003e Block sh",
          "source": "src/Data-Yarr-Shape.html#intersectBlocks",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "intersectBlocks",
          "normalized": "VecList a(Block b)-\u003eBlock b",
          "package": "yarr",
          "partial": "Blocks",
          "signature": "VecList n(Block sh)-\u003eBlock sh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:intersectBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "lower",
          "package": "yarr",
          "signature": "sh -\u003e lsh",
          "source": "src/Data-Yarr-Shape.html#lower",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "lower",
          "normalized": "a-\u003eb",
          "package": "yarr",
          "signature": "sh-\u003elsh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "makeChunkRange",
          "package": "yarr",
          "signature": "Int -\u003e sh -\u003e sh -\u003e Int -\u003e Block sh",
          "source": "src/Data-Yarr-Shape.html#makeChunkRange",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "makeChunkRange",
          "normalized": "Int-\u003ea-\u003ea-\u003eInt-\u003eBlock a",
          "package": "yarr",
          "partial": "Chunk Range",
          "signature": "Int-\u003esh-\u003esh-\u003eInt-\u003eBlock sh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:makeChunkRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(1, 2) `minus` (1, 0) == (0, 2)\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "minus",
          "package": "yarr",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#minus",
          "type": "method"
        },
        "index": {
          "description": "minus",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "minus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "yarr",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e(\\_ -\u003e return ())\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Yarr.Shape\",\"Data.Yarr.Utils.Primitive\"]",
          "name": "noTouch",
          "package": "yarr",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-Yarr-Utils-Primitive.html#noTouch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:noTouch\",\"http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:noTouch\"]"
        },
        "index": {
          "description": "Alias to return",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "noTouch",
          "normalized": "a-\u003eIO()",
          "package": "yarr",
          "partial": "Touch",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:noTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eoffset == \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminus\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "offset",
          "package": "yarr",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#offset",
          "type": "method"
        },
        "index": {
          "description": "offset flip minus",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "offset",
          "normalized": "a-\u003ea-\u003ea",
          "package": "yarr",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(1, 2, 3) `plus` (0, 0, 1) == (1, 2, 4)\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "plus",
          "package": "yarr",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Data-Yarr-Shape.html#plus",
          "type": "method"
        },
        "index": {
          "description": "plus",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "plus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "yarr",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esize\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003esize (3, 5) == 15\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "size",
          "package": "yarr",
          "signature": "sh -\u003e Int",
          "source": "src/Data-Yarr-Shape.html#size",
          "type": "method"
        },
        "index": {
          "description": "Dim1 size is id size",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "yarr",
          "signature": "sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpposite to \u003ccode\u003e\u003ca\u003efromLinear\u003c/a\u003e\u003c/code\u003e, converts composite array index\n to linear, \"memory\" index without bounds checks.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e shapes.\n\u003c/p\u003e\u003cpre\u003etoLinear (5, 5) (3, 0) == 15\u003c/pre\u003e",
          "module": "Data.Yarr.Shape",
          "name": "toLinear",
          "package": "yarr",
          "signature": "toLinear",
          "source": "src/Data-Yarr-Shape.html#toLinear",
          "type": "method"
        },
        "index": {
          "description": "Opposite to fromLinear converts composite array index to linear memory index without bounds checks id for Dim1 shapes toLinear",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "toLinear",
          "package": "yarr",
          "partial": "Linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:toLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function intented to be passed as 3rd parameter\n to \u003ccode\u003eunrolled-\u003c/code\u003e functions in \u003ccode\u003e\u003ca\u003eShape\u003c/a\u003e\u003c/code\u003e class\n and \u003ccode\u003e\u003ca\u003edim2BlockFill\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your loading operation is strictly local by elements\n (in most cases), use \u003ccode\u003e\u003ca\u003enoTouch\u003c/a\u003e\u003c/code\u003e instead of this function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "touch",
          "package": "yarr",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-Yarr-Utils-Primitive.html#touch",
          "type": "method"
        },
        "index": {
          "description": "The function intented to be passed as rd parameter to unrolled functions in Shape class and dim2BlockFill If your loading operation is strictly local by elements in most cases use noTouch instead of this function",
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "touch",
          "normalized": "a-\u003eIO()",
          "package": "yarr",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "unrolledFill",
          "package": "yarr",
          "signature": "unrolledFill",
          "source": "src/Data-Yarr-Shape.html#unrolledFill",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "unrolledFill",
          "package": "yarr",
          "partial": "Fill",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:unrolledFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "unrolledFoldl",
          "package": "yarr",
          "signature": "unrolledFoldl",
          "source": "src/Data-Yarr-Shape.html#unrolledFoldl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "unrolledFoldl",
          "package": "yarr",
          "partial": "Foldl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:unrolledFoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Shape",
          "name": "unrolledFoldr",
          "package": "yarr",
          "signature": "unrolledFoldr",
          "source": "src/Data-Yarr-Shape.html#unrolledFoldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "unrolledFoldr",
          "package": "yarr",
          "partial": "Foldr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:unrolledFoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e, \u003ccode\u003e(0, 0)\u003c/code\u003e, \u003ccode\u003e(0, 0, 0)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Shape",
          "name": "zero",
          "package": "yarr",
          "signature": "sh",
          "source": "src/Data-Yarr-Shape.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Shape",
          "module": "Data.Yarr.Shape",
          "name": "zero",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Shape.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "FixedVector",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-FixedVector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "FixedVector",
          "package": "yarr",
          "partial": "Fixed Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType family for n-ary functions.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "Fn",
          "package": "yarr",
          "signature": "Fn",
          "type": "function"
        },
        "index": {
          "description": "Type family for n-ary functions",
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "Fn",
          "package": "yarr",
          "partial": "Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#t:Fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorkaround for slice-wise currined filling functions inlining issues.\n See comment to \u003ccode\u003e\u003ca\u003eCVL\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "InlinableArity",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-FixedVector-InlinableArity.html#InlinableArity",
          "type": "class"
        },
        "index": {
          "description": "Workaround for slice-wise currined filling functions inlining issues See comment to CVL for details",
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "InlinableArity",
          "package": "yarr",
          "partial": "Inlinable Arity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#t:InlinableArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "N7",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#N7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "N7",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#t:N7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "N8",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#N8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "N8",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#t:N8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "VecTuple",
          "package": "yarr",
          "signature": "VecTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "VecTuple",
          "package": "yarr",
          "partial": "Vec Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#t:VecTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "all",
          "package": "yarr",
          "signature": "(a -\u003e Bool) -\u003e v a -\u003e Bool",
          "source": "src/Data-Yarr-Utils-FixedVector.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "yarr",
          "signature": "(a-\u003eBool)-\u003ev a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "any",
          "package": "yarr",
          "signature": "(a -\u003e Bool) -\u003e v a -\u003e Bool",
          "source": "src/Data-Yarr-Utils-FixedVector.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "yarr",
          "signature": "(a-\u003eBool)-\u003ev a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "apply",
          "package": "yarr",
          "signature": "v (a -\u003e b) -\u003e v a -\u003e v b",
          "source": "src/Data-Yarr-Utils-FixedVector.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "apply",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "yarr",
          "signature": "v(a-\u003eb)-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArity of function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "arity",
          "package": "yarr",
          "signature": "n -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Arity of function",
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "arity",
          "normalized": "a-\u003eInt",
          "package": "yarr",
          "signature": "n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "iifoldM",
          "package": "yarr",
          "signature": "ix -\u003e (ix -\u003e ix) -\u003e (b -\u003e ix -\u003e a -\u003e m b) -\u003e b -\u003e v a -\u003e m b",
          "source": "src/Data-Yarr-Utils-FixedVector.html#iifoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "iifoldM",
          "normalized": "a-\u003e(a-\u003ea)-\u003e(b-\u003ea-\u003ec-\u003ed b)-\u003eb-\u003ee c-\u003ed b",
          "package": "yarr",
          "signature": "ix-\u003e(ix-\u003eix)-\u003e(b-\u003eix-\u003ea-\u003em b)-\u003eb-\u003ev a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:iifoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "iifoldl",
          "package": "yarr",
          "signature": "ix -\u003e (ix -\u003e ix) -\u003e (b -\u003e ix -\u003e a -\u003e b) -\u003e b -\u003e v a -\u003e b",
          "source": "src/Data-Yarr-Utils-FixedVector.html#iifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "iifoldl",
          "normalized": "a-\u003e(a-\u003ea)-\u003e(b-\u003ea-\u003ec-\u003eb)-\u003eb-\u003ed c-\u003eb",
          "package": "yarr",
          "signature": "ix-\u003e(ix-\u003eix)-\u003e(b-\u003eix-\u003ea-\u003eb)-\u003eb-\u003ev a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:iifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "inlinableMap",
          "package": "yarr",
          "signature": "(a -\u003e b) -\u003e v a -\u003e v b",
          "source": "src/Data-Yarr-Utils-FixedVector-InlinableArity.html#inlinableMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "inlinableMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "yarr",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003ev a-\u003ev b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:inlinableMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "inlinableZipWith",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c) -\u003e v a -\u003e v b -\u003e v c",
          "source": "src/Data-Yarr-Utils-FixedVector-InlinableArity.html#inlinableZipWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "inlinableZipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "yarr",
          "partial": "Zip With",
          "signature": "(a-\u003eb-\u003ec)-\u003ev a-\u003ev b-\u003ev c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:inlinableZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "makeInlinableArityInstance",
          "package": "yarr",
          "signature": "TypeQ -\u003e n -\u003e Q [Dec]",
          "source": "src/Data-Yarr-Utils-FixedVector-InlinableArity.html#makeInlinableArityInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "makeInlinableArityInstance",
          "normalized": "TypeQ-\u003ea-\u003eQ[Dec]",
          "package": "yarr",
          "partial": "Inlinable Arity Instance",
          "signature": "TypeQ-\u003en-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:makeInlinableArityInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "makeVecTupleInstance",
          "package": "yarr",
          "signature": "TypeQ -\u003e n -\u003e Q [Dec]",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTuple.html#makeVecTupleInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "makeVecTupleInstance",
          "normalized": "TypeQ-\u003ea-\u003eQ[Dec]",
          "package": "yarr",
          "partial": "Vec Tuple Instance",
          "signature": "TypeQ-\u003en-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:makeVecTupleInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n1",
          "package": "yarr",
          "signature": "N1",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n1",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n2",
          "package": "yarr",
          "signature": "N2",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n2",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n3",
          "package": "yarr",
          "signature": "N3",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n3",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n4",
          "package": "yarr",
          "signature": "N4",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n4",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n5",
          "package": "yarr",
          "signature": "N5",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n5",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n6",
          "package": "yarr",
          "signature": "N6",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n6",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n7",
          "package": "yarr",
          "signature": "N7",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n7",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n8",
          "package": "yarr",
          "signature": "N8",
          "source": "src/Data-Yarr-Utils-FixedVector-Arity.html#n8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "n8",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:n8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_2_1",
          "package": "yarr",
          "signature": "VecTuple N2 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_2_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_2_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_2_2",
          "package": "yarr",
          "signature": "VecTuple N2 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_2_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_2_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_2_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_1",
          "package": "yarr",
          "signature": "VecTuple N3 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_3_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_3_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_2",
          "package": "yarr",
          "signature": "VecTuple N3 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_3_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_3_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_3",
          "package": "yarr",
          "signature": "VecTuple N3 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_3_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_3_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_3_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_1",
          "package": "yarr",
          "signature": "VecTuple N4 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_4_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_4_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_2",
          "package": "yarr",
          "signature": "VecTuple N4 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_4_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_4_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_3",
          "package": "yarr",
          "signature": "VecTuple N4 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_4_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_4_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_4",
          "package": "yarr",
          "signature": "VecTuple N4 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_4_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_4_4",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_4_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_1",
          "package": "yarr",
          "signature": "VecTuple N5 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_5_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_5_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_2",
          "package": "yarr",
          "signature": "VecTuple N5 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_5_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_5_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_3",
          "package": "yarr",
          "signature": "VecTuple N5 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_5_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_5_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_4",
          "package": "yarr",
          "signature": "VecTuple N5 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_5_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_4",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_5_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_5",
          "package": "yarr",
          "signature": "VecTuple N5 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_5_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_5_5",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_5_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_1",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_2",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_3",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_4",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_4",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_5",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_5",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_6",
          "package": "yarr",
          "signature": "VecTuple N6 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_6_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_6_6",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_6_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_1",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_2",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_3",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_4",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_4",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_5",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_5",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_6",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_6",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_7",
          "package": "yarr",
          "signature": "VecTuple N7 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_7_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_7_7",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_7_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_1",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_1",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_2",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_2",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_3",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_3",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_4",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_4",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_5",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_5",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_6",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_6",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_7",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_7",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_8",
          "package": "yarr",
          "signature": "VecTuple N8 e -\u003e e",
          "source": "src/Data-Yarr-Utils-FixedVector-VecTupleInstances.html#sel_8_8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "sel_8_8",
          "normalized": "VecTuple N a-\u003ea",
          "package": "yarr",
          "signature": "VecTuple N e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:sel_8_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_1",
          "package": "yarr",
          "signature": "a -\u003e VecList N1 a",
          "source": "src/Data-Yarr-Utils-FixedVector.html#vl_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_1",
          "normalized": "a-\u003eVecList N a",
          "package": "yarr",
          "signature": "a-\u003eVecList N a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:vl_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_2",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e VecList N2 a",
          "source": "src/Data-Yarr-Utils-FixedVector.html#vl_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_2",
          "normalized": "a-\u003ea-\u003eVecList N a",
          "package": "yarr",
          "signature": "a-\u003ea-\u003eVecList N a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:vl_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_3",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e a -\u003e VecList N3 a",
          "source": "src/Data-Yarr-Utils-FixedVector.html#vl_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_3",
          "normalized": "a-\u003ea-\u003ea-\u003eVecList N a",
          "package": "yarr",
          "signature": "a-\u003ea-\u003ea-\u003eVecList N a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:vl_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_4",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e VecList N4 a",
          "source": "src/Data-Yarr-Utils-FixedVector.html#vl_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "vl_4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eVecList N a",
          "package": "yarr",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eVecList N a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:vl_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zero",
          "package": "yarr",
          "signature": "v a",
          "source": "src/Data-Yarr-Utils-FixedVector.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zero",
          "package": "yarr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zipWith3",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e v a -\u003e v b -\u003e v c -\u003e v d",
          "source": "src/Data-Yarr-Utils-FixedVector.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "yarr",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ev a-\u003ev b-\u003ev c-\u003ev d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zipWithM_",
          "package": "yarr",
          "signature": "(a -\u003e b -\u003e m c) -\u003e v a -\u003e v b -\u003e m ()",
          "source": "src/Data-Yarr-Utils-FixedVector.html#zipWithM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils FixedVector",
          "module": "Data.Yarr.Utils.FixedVector",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003ee b-\u003ec()",
          "package": "yarr",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003ev a-\u003ev b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-FixedVector.html#v:zipWithM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Fork",
          "name": "Fork",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Fork.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Fork",
          "module": "Data.Yarr.Utils.Fork",
          "name": "Fork",
          "package": "yarr",
          "partial": "Fork",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Fork.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeFork",
          "package": "yarr",
          "signature": "Int-\u003e sh-\u003e sh-\u003e Work sh a-\u003e Int -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Fork",
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeFork",
          "normalized": "Int-\u003ea-\u003ea-\u003eWork a b-\u003eInt-\u003eIO b",
          "package": "yarr",
          "partial": "Fork",
          "signature": "Int-\u003esh-\u003esh-\u003eWork sh a-\u003eInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Fork.html#v:makeFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeForkEachSlice",
          "package": "yarr",
          "signature": "Int-\u003e sh-\u003e sh-\u003e v (Work sh a)-\u003e Int -\u003e IO (v a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Fork",
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeForkEachSlice",
          "normalized": "Int-\u003ea-\u003ea-\u003eb(Work a c)-\u003eInt-\u003eIO(b c)",
          "package": "yarr",
          "partial": "Fork Each Slice",
          "signature": "Int-\u003esh-\u003esh-\u003ev(Work sh a)-\u003eInt-\u003eIO(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Fork.html#v:makeForkEachSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeForkSlicesOnce",
          "package": "yarr",
          "signature": "Int-\u003e VecList n (sh, sh)-\u003e VecList n (Work sh a)-\u003e Int -\u003e IO [(Int, a)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Fork",
          "module": "Data.Yarr.Utils.Fork",
          "name": "makeForkSlicesOnce",
          "normalized": "Int-\u003eVecList a(b,b)-\u003eVecList a(Work b c)-\u003eInt-\u003eIO[(Int,c)]",
          "package": "yarr",
          "partial": "Fork Slices Once",
          "signature": "Int-\u003eVecList n(sh,sh)-\u003eVecList n(Work sh a)-\u003eInt-\u003eIO[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Fork.html#v:makeForkSlicesOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Parallel",
          "name": "Parallel",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Parallel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Parallel",
          "module": "Data.Yarr.Utils.Parallel",
          "name": "Parallel",
          "package": "yarr",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Parallel",
          "name": "parallel",
          "package": "yarr",
          "signature": "Int-\u003e (Int -\u003e IO a)-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Parallel",
          "module": "Data.Yarr.Utils.Parallel",
          "name": "parallel",
          "normalized": "Int-\u003e(Int-\u003eIO a)-\u003eIO[a]",
          "package": "yarr",
          "signature": "Int-\u003e(Int-\u003eIO a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Parallel.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e which discards results.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Parallel",
          "name": "parallel_",
          "package": "yarr",
          "signature": "Int-\u003e (Int -\u003e IO a)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Version of parallel which discards results",
          "hierarchy": "Data Yarr Utils Parallel",
          "module": "Data.Yarr.Utils.Parallel",
          "name": "parallel_",
          "normalized": "Int-\u003e(Int-\u003eIO a)-\u003eIO()",
          "package": "yarr",
          "signature": "Int-\u003e(Int-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Parallel.html#v:parallel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Primitive",
          "name": "Primitive",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Primitive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "Primitive",
          "package": "yarr",
          "partial": "Primitive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGHC simplifier tends to float numeric comparsions\n as high in execution graph as possible, which in conjunction\n with loop unrolling sometimes leads to dramatic code bloat.\n\u003c/p\u003e\u003cp\u003eI'm not sure \u003ccode\u003e-M\u003c/code\u003e functions work at all,\n but strict versions defenitely keep comparsions unfloated.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "PrimitiveOrd",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Primitive.html#PrimitiveOrd",
          "type": "class"
        },
        "index": {
          "description": "GHC simplifier tends to float numeric comparsions as high in execution graph as possible which in conjunction with loop unrolling sometimes leads to dramatic code bloat not sure functions work at all but strict versions defenitely keep comparsions unfloated",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "PrimitiveOrd",
          "package": "yarr",
          "partial": "Primitive Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#t:PrimitiveOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly used to fight against GHC simplifier, which gives\n no chance to LLVM to perform Global Value Numbering optimization.\n\u003c/p\u003e\u003cp\u003eCopied from \u003ccode\u003erepa\u003c/code\u003e, see\n \u003ca\u003ehttp://hackage.haskell.org/packages/archive/repa/3.2.3.1/doc/html/Data-Array-Repa-Eval.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "Touchable",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Primitive.html#Touchable",
          "type": "class"
        },
        "index": {
          "description": "Mainly used to fight against GHC simplifier which gives no chance to LLVM to perform Global Value Numbering optimization Copied from repa see http hackage.haskell.org packages archive repa doc html Data-Array-Repa-Eval.html",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "Touchable",
          "package": "yarr",
          "partial": "Touchable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#t:Touchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe sequential clamp.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "clampM",
          "package": "yarr",
          "signature": "clampM",
          "source": "src/Data-Yarr-Utils-Primitive.html#clampM",
          "type": "method"
        },
        "index": {
          "description": "Maybe sequential clamp",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "clampM",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:clampM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinetely sequential clamp.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "clampM'",
          "package": "yarr",
          "signature": "clampM'",
          "source": "src/Data-Yarr-Utils-Primitive.html#clampM%27",
          "type": "method"
        },
        "index": {
          "description": "Definetely sequential clamp",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "clampM'",
          "package": "yarr",
          "partial": "M'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:clampM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe sequential \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "maxM",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Yarr-Utils-Primitive.html#maxM",
          "type": "method"
        },
        "index": {
          "description": "Maybe sequential max",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "maxM",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "yarr",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:maxM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinetely sequential \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "maxM'",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Yarr-Utils-Primitive.html#maxM%27",
          "type": "method"
        },
        "index": {
          "description": "Definetely sequential max",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "maxM'",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "yarr",
          "partial": "M'",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:maxM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe sequential \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "minM",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Yarr-Utils-Primitive.html#minM",
          "type": "method"
        },
        "index": {
          "description": "Maybe sequential min",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "minM",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "yarr",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:minM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinetely sequential \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "minM'",
          "package": "yarr",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Yarr-Utils-Primitive.html#minM%27",
          "type": "method"
        },
        "index": {
          "description": "Definetely sequential min",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "minM'",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "yarr",
          "partial": "M'",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:minM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function intented to be passed as 3rd parameter\n to \u003ccode\u003eunrolled-\u003c/code\u003e functions in \u003ccode\u003e\u003ca\u003eShape\u003c/a\u003e\u003c/code\u003e class\n and \u003ccode\u003e\u003ca\u003edim2BlockFill\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your loading operation is strictly local by elements\n (in most cases), use \u003ccode\u003e\u003ca\u003enoTouch\u003c/a\u003e\u003c/code\u003e instead of this function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "touch",
          "package": "yarr",
          "signature": "a -\u003e IO ()",
          "source": "src/Data-Yarr-Utils-Primitive.html#touch",
          "type": "method"
        },
        "index": {
          "description": "The function intented to be passed as rd parameter to unrolled functions in Shape class and dim2BlockFill If your loading operation is strictly local by elements in most cases use noTouch instead of this function",
          "hierarchy": "Data Yarr Utils Primitive",
          "module": "Data.Yarr.Utils.Primitive",
          "name": "touch",
          "normalized": "a-\u003eIO()",
          "package": "yarr",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Primitive.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Split",
          "name": "Split",
          "package": "yarr",
          "source": "src/Data-Yarr-Utils-Split.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Split",
          "module": "Data.Yarr.Utils.Split",
          "name": "Split",
          "package": "yarr",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWell-known missed in \u003ca\u003eData.List.Split\u003c/a\u003e function.\n\u003c/p\u003e",
          "module": "Data.Yarr.Utils.Split",
          "name": "evenChunks",
          "package": "yarr",
          "signature": "[a]-\u003e Int-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Well-known missed in Data.List.Split function",
          "hierarchy": "Data Yarr Utils Split",
          "module": "Data.Yarr.Utils.Split",
          "name": "evenChunks",
          "normalized": "[a]-\u003eInt-\u003e[[a]]",
          "package": "yarr",
          "partial": "Chunks",
          "signature": "[a]-\u003eInt-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Split.html#v:evenChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Utils.Split",
          "name": "makeSplitIndex",
          "package": "yarr",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int -\u003e Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Utils Split",
          "module": "Data.Yarr.Utils.Split",
          "name": "makeSplitIndex",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInt",
          "package": "yarr",
          "partial": "Split Index",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Utils-Split.html#v:makeSplitIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr.Walk",
          "name": "Walk",
          "package": "yarr",
          "source": "src/Data-Yarr-Walk.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "Walk",
          "package": "yarr",
          "partial": "Walk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes left folds.\n\u003c/p\u003e\u003cp\u003eTo be passed to fold combinators from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "Foldl",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Foldl",
          "type": "type"
        },
        "index": {
          "description": "Generalizes left folds To be passed to fold combinators from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "Foldl",
          "package": "yarr",
          "partial": "Foldl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#t:Foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes right folds.\n\u003c/p\u003e\u003cp\u003eTo be passed to fold combinators from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "Foldr",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#Foldr",
          "type": "type"
        },
        "index": {
          "description": "Generalizes right folds To be passed to fold combinators from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "Foldr",
          "package": "yarr",
          "partial": "Foldr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#t:Foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes both partially applied left and right folds,\n as well as walks with mutable state.\n\u003c/p\u003e\u003cp\u003eTo be passed to walk runners from \u003ca\u003eData.Yarr.Walk\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "StatefulWalk",
          "package": "yarr",
          "source": "src/Data-Yarr-WorkTypes.html#StatefulWalk",
          "type": "type"
        },
        "index": {
          "description": "Generalizes both partially applied left and right folds as well as walks with mutable state To be passed to walk runners from Data.Yarr.Walk module",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "StatefulWalk",
          "package": "yarr",
          "partial": "Stateful Walk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#t:StatefulWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Version of \u003ccode\u003e\u003ca\u003emutate\u003c/a\u003e\u003c/code\u003e, accepts mutating function\n which additionaly accepts array index.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "imutate",
          "package": "yarr",
          "signature": "Fill i a-\u003e (s -\u003e i -\u003e a -\u003e IO ())-\u003e StatefulWalk i a s",
          "type": "function"
        },
        "index": {
          "description": "Version of mutate accepts mutating function which additionaly accepts array index",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "imutate",
          "normalized": "Fill a b-\u003e(c-\u003ea-\u003eb-\u003eIO())-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Fill i a-\u003e(s-\u003ei-\u003ea-\u003eIO())-\u003eStatefulWalk i a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:imutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "ireduceInner",
          "package": "yarr",
          "signature": "StatefulWalk sh a b -\u003e (lsh -\u003e IO b) -\u003e UArray r l sh a -\u003e UArray D SH lsh b",
          "source": "src/Data-Yarr-Walk.html#ireduceInner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "ireduceInner",
          "normalized": "StatefulWalk a b c-\u003e(d-\u003eIO c)-\u003eUArray e f a b-\u003eUArray D SH d c",
          "package": "yarr",
          "partial": "Inner",
          "signature": "StatefulWalk sh a b-\u003e(lsh-\u003eIO b)-\u003eUArray r l sh a-\u003eUArray D SH lsh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:ireduceInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "ireduceL",
          "package": "yarr",
          "signature": "Foldl i a b-\u003e (b -\u003e i -\u003e a -\u003e b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "ireduceL",
          "normalized": "Foldl a b c-\u003e(c-\u003ea-\u003eb-\u003ec)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Foldl i a b-\u003e(b-\u003ei-\u003ea-\u003eb)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:ireduceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "ireduceR",
          "package": "yarr",
          "signature": "Foldr i a b-\u003e (i -\u003e a -\u003e b -\u003e b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "ireduceR",
          "normalized": "Foldr a b c-\u003e(a-\u003eb-\u003ec-\u003ec)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Foldr i a b-\u003e(i-\u003ea-\u003eb-\u003eb)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:ireduceR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state,\n with indexed function (\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eimutate\u003c/a\u003e\u003c/code\u003e, etc).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eres \u003c- iwalk (\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\\s i a -\u003e ...)) foldZero sourceArray\u003c/pre\u003e",
          "module": "Data.Yarr.Walk",
          "name": "iwalk",
          "package": "yarr",
          "signature": "StatefulWalk sh a s-\u003e IO s-\u003e UArray r l sh a-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Walk with state with indexed function foldl foldr imutate etc Example res iwalk foldl foldZero sourceArray",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "iwalk",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e a b-\u003eIO c",
          "package": "yarr",
          "signature": "StatefulWalk sh a s-\u003eIO s-\u003eUArray r l sh a-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:iwalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative indexed stateful walk, in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "iwalkP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk sh a s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh a-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Run associative indexed stateful walk in parallel",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "iwalkP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e a b-\u003eIO c",
          "package": "yarr",
          "signature": "Threads-\u003eStatefulWalk sh a s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh a-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:iwalkP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state, with indexed function,\n over each slice of array of vectors.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "iwalkSlicesSeparate",
          "package": "yarr",
          "signature": "StatefulWalk sh e s-\u003e IO s-\u003e UArray r l sh (v e)-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Walk with state with indexed function over each slice of array of vectors",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "iwalkSlicesSeparate",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e a(f b)-\u003eIO(VecList(Dim f)c)",
          "package": "yarr",
          "partial": "Slices Separate",
          "signature": "StatefulWalk sh e s-\u003eIO s-\u003eUArray r l sh(v e)-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:iwalkSlicesSeparate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative indexed stateful walk\n over slices of array of vectors, in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "iwalkSlicesSeparateP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk sh e s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh (v e)-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Run associative indexed stateful walk over slices of array of vectors in parallel",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "iwalkSlicesSeparateP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e a(f b)-\u003eIO(VecList(Dim f)c)",
          "package": "yarr",
          "partial": "Slices Separate",
          "signature": "Threads-\u003eStatefulWalk sh e s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh(v e)-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:iwalkSlicesSeparateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "mutate",
          "package": "yarr",
          "signature": "Fill i a-\u003e (s -\u003e a -\u003e IO ())-\u003e StatefulWalk i a s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "mutate",
          "normalized": "Fill a b-\u003e(c-\u003eb-\u003eIO())-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Fill i a-\u003e(s-\u003ea-\u003eIO())-\u003eStatefulWalk i a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:mutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state, in specified range of indices.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalk",
          "package": "yarr",
          "signature": "StatefulWalk sh a s-\u003e IO s-\u003e UArray r l sh a-\u003e sh-\u003e sh-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Walk with state in specified range of indices",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalk",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e a b-\u003ea-\u003ea-\u003eIO c",
          "package": "yarr",
          "partial": "Walk",
          "signature": "StatefulWalk sh a s-\u003eIO s-\u003eUArray r l sh a-\u003esh-\u003esh-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:rangeWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative stateful walk in specified range, in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk sh a s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh a-\u003e sh-\u003e sh-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Run associative stateful walk in specified range in parallel",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e a b-\u003ea-\u003ea-\u003eIO c",
          "package": "yarr",
          "partial": "Walk",
          "signature": "Threads-\u003eStatefulWalk sh a s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh a-\u003esh-\u003esh-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:rangeWalkP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state, in specified range of indices,\n over each slice of array of vectors.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkSlicesSeparate",
          "package": "yarr",
          "signature": "StatefulWalk sh e s-\u003e IO s-\u003e UArray r l sh (v e)-\u003e sh-\u003e sh-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Walk with state in specified range of indices over each slice of array of vectors",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkSlicesSeparate",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e a(f b)-\u003ea-\u003ea-\u003eIO(VecList(Dim f)c)",
          "package": "yarr",
          "partial": "Walk Slices Separate",
          "signature": "StatefulWalk sh e s-\u003eIO s-\u003eUArray r l sh(v e)-\u003esh-\u003esh-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:rangeWalkSlicesSeparate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative stateful walk in specified range,\n over slices of array of vectors, in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkSlicesSeparateP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk sh e s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh (v e)-\u003e sh-\u003e sh-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Run associative stateful walk in specified range over slices of array of vectors in parallel",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "rangeWalkSlicesSeparateP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e a(f b)-\u003ea-\u003ea-\u003eIO(VecList(Dim f)c)",
          "package": "yarr",
          "partial": "Walk Slices Separate",
          "signature": "Threads-\u003eStatefulWalk sh e s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh(v e)-\u003esh-\u003esh-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:rangeWalkSlicesSeparateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "reduceInner",
          "package": "yarr",
          "signature": "StatefulWalk i a b -\u003e (lsh -\u003e IO b) -\u003e UArray r l sh a -\u003e UArray D SH lsh b",
          "source": "src/Data-Yarr-Walk.html#reduceInner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "reduceInner",
          "normalized": "StatefulWalk a b c-\u003e(d-\u003eIO c)-\u003eUArray e f g b-\u003eUArray D SH d c",
          "package": "yarr",
          "partial": "Inner",
          "signature": "StatefulWalk i a b-\u003e(lsh-\u003eIO b)-\u003eUArray r l sh a-\u003eUArray D SH lsh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:reduceInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "reduceL",
          "package": "yarr",
          "signature": "Foldl i a b-\u003e (b -\u003e a -\u003e b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "reduceL",
          "normalized": "Foldl a b c-\u003e(c-\u003eb-\u003ec)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Foldl i a b-\u003e(b-\u003ea-\u003eb)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:reduceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "reduceLeftM",
          "package": "yarr",
          "signature": "Foldl i a b-\u003e (b -\u003e a -\u003e IO b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "reduceLeftM",
          "normalized": "Foldl a b c-\u003e(c-\u003eb-\u003eIO c)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "partial": "Left",
          "signature": "Foldl i a b-\u003e(b-\u003ea-\u003eIO b)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:reduceLeftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "reduceR",
          "package": "yarr",
          "signature": "Foldr i a b-\u003e (a -\u003e b -\u003e b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "reduceR",
          "normalized": "Foldr a b c-\u003e(b-\u003ec-\u003ec)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "signature": "Foldr i a b-\u003e(a-\u003eb-\u003eb)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:reduceR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "reduceRightM",
          "package": "yarr",
          "signature": "Foldr i a b-\u003e (a -\u003e b -\u003e IO b)-\u003e StatefulWalk i a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "reduceRightM",
          "normalized": "Foldr a b c-\u003e(b-\u003ec-\u003eIO c)-\u003eStatefulWalk a b c",
          "package": "yarr",
          "partial": "Right",
          "signature": "Foldr i a b-\u003e(a-\u003eb-\u003eIO b)-\u003eStatefulWalk i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:reduceRightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state,\n with non-indexed function (\u003ccode\u003e\u003ca\u003ereduceL\u003c/a\u003e\u003c/code\u003e group of fold combinators, \u003ccode\u003e\u003ca\u003emutate\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e = walk (\u003ccode\u003e\u003ca\u003ereduceR\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (:)) (return [])\u003c/pre\u003e",
          "module": "Data.Yarr.Walk",
          "name": "walk",
          "package": "yarr",
          "signature": "StatefulWalk i a s-\u003e IO s-\u003e UArray r l sh a-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Walk with state with non-indexed function reduceL group of fold combinators mutate Example toList walk reduceR foldr return",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "walk",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e f b-\u003eIO c",
          "package": "yarr",
          "signature": "StatefulWalk i a s-\u003eIO s-\u003eUArray r l sh a-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative non-indexed stateful walk, in parallel.\n\u003c/p\u003e\u003cp\u003eExample -- associative image histogram filling in the test:\n \u003ca\u003ehttps://github.com/leventov/yarr/blob/master/tests/lum-equalization.hs\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "walkP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk i a s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh a-\u003e IO s",
          "type": "function"
        },
        "index": {
          "description": "Run associative non-indexed stateful walk in parallel Example associative image histogram filling in the test https github.com leventov yarr blob master tests lum-equalization.hs",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "walkP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e f b-\u003eIO c",
          "package": "yarr",
          "signature": "Threads-\u003eStatefulWalk i a s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh a-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:walkP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Walk with state, with non-indexed function,\n over each slice of array of vectors.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "walkSlicesSeparate",
          "package": "yarr",
          "signature": "StatefulWalk i e s-\u003e IO s-\u003e UArray r l sh (v e)-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Walk with state with non-indexed function over each slice of array of vectors",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "walkSlicesSeparate",
          "normalized": "StatefulWalk a b c-\u003eIO c-\u003eUArray d e f(g b)-\u003eIO(VecList(Dim g)c)",
          "package": "yarr",
          "partial": "Slices Separate",
          "signature": "StatefulWalk i e s-\u003eIO s-\u003eUArray r l sh(v e)-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:walkSlicesSeparate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Run associative non-indexed stateful walk\n over slices of array of vectors, in parallel.\n\u003c/p\u003e",
          "module": "Data.Yarr.Walk",
          "name": "walkSlicesSeparateP",
          "package": "yarr",
          "signature": "Threads-\u003e StatefulWalk i e s-\u003e IO s-\u003e (s -\u003e s -\u003e IO s)-\u003e UArray r l sh (v e)-\u003e IO (VecList (Dim v) s)",
          "type": "function"
        },
        "index": {
          "description": "Run associative non-indexed stateful walk over slices of array of vectors in parallel",
          "hierarchy": "Data Yarr Walk",
          "module": "Data.Yarr.Walk",
          "name": "walkSlicesSeparateP",
          "normalized": "Threads-\u003eStatefulWalk a b c-\u003eIO c-\u003e(c-\u003ec-\u003eIO c)-\u003eUArray d e f(g b)-\u003eIO(VecList(Dim g)c)",
          "package": "yarr",
          "partial": "Slices Separate",
          "signature": "Threads-\u003eStatefulWalk i e s-\u003eIO s-\u003e(s-\u003es-\u003eIO s)-\u003eUArray r l sh(v e)-\u003eIO(VecList(Dim v)s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr-Walk.html#v:walkSlicesSeparateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eType system intro:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegular\u003c/a\u003e\u003c/code\u003e is main type class in the library.\n    Like \u003ccode\u003eSource\u003c/code\u003e class in \u003ccode\u003erepa\u003c/code\u003e, it defines indexed type family: \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e.\n    Classes \u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e, for arrays which could be indexed, and \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e,\n    for mutable arrays, inherit from \u003ccode\u003e\u003ca\u003eRegular\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs in \u003ccode\u003erepa\u003c/code\u003e, arrays in Yarr are type-indexed.\n    \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e type family has 2 type indexes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003erepresentation index\u003c/em\u003e - the first type argument.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eload type index\u003c/em\u003e -\n          the second argument of the type family. Pair of \u003cem\u003eload indexes\u003c/em\u003e,\n          from source and target array determines how arrays will be\n          loaded one to another. Load index is mostly internal thing.\n          See \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e class for details.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRest 2 \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e parameters generalize \u003ccode\u003e\u003ca\u003eShape\u003c/a\u003e\u003c/code\u003e and element type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVecRegular\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUVecSource\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUVecTarget\u003c/a\u003e\u003c/code\u003e are counterparts for arrays\n    of fixed-sized vectors.\n    These classes have 6 arguments: repr type index, \u003cem\u003eslice repr type index\u003c/em\u003e,\n    load type index, shape, vector type, vector element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e in the docs \"vector\" always stands for\n    fixed-size vector. Don't confuse with vector from \u003ccode\u003evector\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eAs in \u003ccode\u003erepa\u003c/code\u003e, there are several kinds of representations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e representations: \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign and \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003eoxed\n          with \u003ccode\u003e\u003ca\u003eMB\u003c/a\u003e\u003c/code\u003e (Mutable Boxed).\n          The difference between \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e arrays is that\n          \u003ccode\u003e\u003ca\u003eManifest\u003c/a\u003e\u003c/code\u003e arrays could be created (see \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e function).\n          For example, \u003ccode\u003e\u003ca\u003eFS\u003c/a\u003e\u003c/code\u003e (Foreign Slice) is a slice representation for \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e.\n          FS-arrays are mutable, but you can't create a slice,\n          you should firstly allocate entire \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e array.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eDelayed\u003c/em\u003e, or \u003cem\u003efused\u003c/em\u003e representations: \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003eelayed\n          and \u003ccode\u003e\u003ca\u003eCV\u003c/a\u003e\u003c/code\u003e (ConVoluted).\n          Arrays of these types aren't really exist in memory.\n          Finally they should be loaded to manifest arrays.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eView\u003c/em\u003e representations: \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e (Delayed Target) and \u003ccode\u003e\u003ca\u003eFS\u003c/a\u003e\u003c/code\u003e.\n          Useful for advanced hand-controlled flow operations.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eMeta\u003c/em\u003e representations: \u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003eparate\n          and \u003ccode\u003e\u003ca\u003eCHK\u003c/a\u003e\u003c/code\u003e (CHecKed).\n          Thery are parameterized with another representation index.\n          Arrays of meta types play almost like their prototypes.\n          \u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e glues several arrays\n          into one array of vectors (array types with \u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e index are\n          always instances of \u003ccode\u003e\u003ca\u003eVecRegular\u003c/a\u003e\u003c/code\u003e class).\n          \u003ccode\u003e\u003ca\u003eCHK\u003c/a\u003e\u003c/code\u003e is useful for debugging,\n          it raises error on illegal indexing attempt.\n          By default indexing is unchecked.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eRepresentation choice:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign is the main manifest representation.\n    \"Unboxed\" arrays of tuples from \u003ccode\u003erepa\u003c/code\u003e and \u003ccode\u003evector\u003c/code\u003e libraries\n    may be emulated by \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e type index,\n    but keep in mind that they are usually slower than vanilla foreign arrays,\n    because the latter are memory-local.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHow to load array into memory:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eCurrently there is only one option \"out of the box\" - to load image :)\n    See \u003ca\u003eData.Yarr.IO.Image\u003c/a\u003e module in \u003ccode\u003eyarr-image-io\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eConsider also \u003ca\u003eData.Yarr.IO.List\u003c/a\u003e module,\n    although it is very slow way to obtain manifest array in memory.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHow to map and zip arrays:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eDefaultFusion\u003c/a\u003e\u003c/code\u003e class and functions in \u003ca\u003eData.Yarr.Flow\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003elet delayedVecLengths = \u003ccode\u003e\u003ca\u003ezipElems\u003c/a\u003e\u003c/code\u003e (x y -\u003e sqrt (x * x + y * y)) vecs\u003c/pre\u003e\u003cp\u003e\u003cem\u003eHow to compute an array:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003e class and its counterpart \u003ccode\u003e\u003ca\u003eVecLoad\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eTypical use:\n\u003c/p\u003e\u003cpre\u003evecLengths \u003c- \u003ccode\u003e\u003ca\u003ecompute\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloadP\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecaps\u003c/a\u003e\u003c/code\u003e) delayedVecLengths\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eWorking examples\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttps://github.com/leventov/yarr/tree/master/tests\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003cem\u003eHow to write fast program:\u003c/em\u003e\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Read corresponding section in \u003ccode\u003erepa\u003c/code\u003e guide:\n           \u003ca\u003ehttp://hackage.haskell.org/packages/archive/repa/3.2.3.1/doc/html/Data-Array-Repa.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Write \u003ccode\u003eINLINE\u003c/code\u003e pragmas to all functions, including curried shortcuts.\n           For example in such case: \u003ccode\u003elet {myIndex = \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e arr} in ...\u003c/code\u003e\n           you should write: \u003ccode\u003elet {{-# INLINE myIndex #-};\u003c/code\u003e\n           \u003ccode\u003emyIndex = \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e arr} in ...\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Although the library is highly generalized, target programs\n           should be as as precise in types as possible.\n           Don't neglect writing signatures for functions.\n\u003c/li\u003e\u003cli\u003e Compilation flags:\n           \u003ccode\u003e-Odph -rtsopts -threaded -fno-liberate-case -funbox-strict-fields\u003c/code\u003e\n           \u003ccode\u003e-fexpose-all-unfoldings -funfolding-keeness-factor1000\u003c/code\u003e\n           \u003ccode\u003e-fsimpl-tick-factor=500 -fllvm -optlo-O3\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e\u003cem\u003eAbbreviations across the library:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn names:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eU-\u003c/code\u003e, \u003ccode\u003eu-\u003c/code\u003e, \u003ccode\u003eunsafe-\u003c/code\u003e prefixes mean that:\n          a) function parameters must conform special\n          statically unchecked conditions, or b) it isn't OK just to call the function,\n          you must do something else, call another function.\n          All functions in type classes with \u003ccode\u003eU-\u003c/code\u003e prefix\n          (\u003ccode\u003e\u003ca\u003eUSource\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUTarget\u003c/a\u003e\u003c/code\u003e) are unsafe.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ed-\u003c/code\u003e prefix stands for \"default\". Typically function\n          with \u003ccode\u003ed-\u003c/code\u003e prefix is carried version of the one without prefix.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eI-\u003c/code\u003e, \u003ccode\u003ei-\u003c/code\u003e prefixes for \"indexed\". Functions with this prefix accept\n          array index before element itself.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef-\u003c/code\u003e prefix means \"fused\". Used for functions from \u003ccode\u003e\u003ca\u003eFusion\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e-M\u003c/code\u003e, as usual, is for monadic versions of functions.\n          However, if there isn't non-monadic version\n          (the most part of core functions), the suffix is omitted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e-S\u003c/code\u003e and \u003ccode\u003e-P\u003c/code\u003e are suffixes from \u003ccode\u003erepa\u003c/code\u003e, they indicate\n          sequential and parallel versions of flow operation, respectively.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn signatures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003etr\u003c/code\u003e, \u003ccode\u003emr\u003c/code\u003e - representation, target repr, manifest repr.\n          For the first type index of \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e family.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eslr\u003c/code\u003e, \u003ccode\u003etslr\u003c/code\u003e, \u003ccode\u003emslr\u003c/code\u003e - slice representation, respectively\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e, \u003ccode\u003etl\u003c/code\u003e - load index, for the second argument of \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esh\u003c/code\u003e - array shape: \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eDim3\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ev\u003c/code\u003e, \u003ccode\u003ev1\u003c/code\u003e, \u003ccode\u003ev2\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e, \u003ccode\u003ee2\u003c/code\u003e - vector element\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eArity\u003c/a\u003e\u003c/code\u003e of vector\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Yarr",
          "name": "Yarr",
          "package": "yarr",
          "source": "src/Data-Yarr.html",
          "type": "module"
        },
        "index": {
          "description": "Type system intro Regular is main type class in the library Like Source class in repa it defines indexed type family UArray Classes USource for arrays which could be indexed and UTarget for mutable arrays inherit from Regular As in repa arrays in Yarr are type-indexed UArray type family has type indexes representation index the first type argument load type index the second argument of the type family Pair of load indexes from source and target array determines how arrays will be loaded one to another Load index is mostly internal thing See Load class for details Rest UArray parameters generalize Shape and element type VecRegular UVecSource UVecTarget are counterparts for arrays of fixed-sized vectors These classes have arguments repr type index slice repr type index load type index shape vector type vector element Note in the docs vector always stands for fixed-size vector Don confuse with vector from vector library As in repa there are several kinds of representations Manifest representations oreign and oxed with MB Mutable Boxed The difference between Manifest and UTarget arrays is that Manifest arrays could be created see new function For example FS Foreign Slice is slice representation for FS-arrays are mutable but you can create slice you should firstly allocate entire array Delayed or fused representations elayed and CV ConVoluted Arrays of these types aren really exist in memory Finally they should be loaded to manifest arrays View representations DT Delayed Target and FS Useful for advanced hand-controlled flow operations Meta representations SE parate and CHK CHecKed Thery are parameterized with another representation index Arrays of meta types play almost like their prototypes SE glues several arrays into one array of vectors array types with SE index are always instances of VecRegular class CHK is useful for debugging it raises error on illegal indexing attempt By default indexing is unchecked Representation choice oreign is the main manifest representation Unboxed arrays of tuples from repa and vector libraries may be emulated by SE type index but keep in mind that they are usually slower than vanilla foreign arrays because the latter are memory-local How to load array into memory Currently there is only one option out of the box to load image See Data.Yarr.IO.Image module in yarr-image-io package Consider also Data.Yarr.IO.List module although it is very slow way to obtain manifest array in memory How to map and zip arrays See DefaultFusion class and functions in Data.Yarr.Flow module Example let delayedVecLengths zipElems sqrt vecs How to compute an array See Load class and its counterpart VecLoad and compute function Typical use vecLengths compute loadP fill caps delayedVecLengths Working examples https github.com leventov yarr tree master tests How to write fast program Read corresponding section in repa guide http hackage.haskell.org packages archive repa doc html Data-Array-Repa.html Write INLINE pragmas to all functions including curried shortcuts For example in such case let myIndex index arr in you should write let INLINE myIndex myIndex index arr in Although the library is highly generalized target programs should be as as precise in types as possible Don neglect writing signatures for functions Compilation flags Odph rtsopts threaded fno-liberate-case funbox-strict-fields fexpose-all-unfoldings funfolding-keeness-factor1000 fsimpl-tick-factor fllvm optlo-O3 Abbreviations across the library In names unsafe prefixes mean that function parameters must conform special statically unchecked conditions or it isn OK just to call the function you must do something else call another function All functions in type classes with prefix USource UTarget are unsafe prefix stands for default Typically function with prefix is carried version of the one without prefix prefixes for indexed Functions with this prefix accept array index before element itself prefix means fused Used for functions from Fusion class as usual is for monadic versions of functions However if there isn non-monadic version the most part of core functions the suffix is omitted and are suffixes from repa they indicate sequential and parallel versions of flow operation respectively In signatures tr mr representation target repr manifest repr For the first type index of UArray family slr tslr mslr slice representation respectively tl load index for the second argument of UArray sh array shape Dim1 Dim2 or Dim3 v1 v2 Vector type e2 vector element Arity of vector",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Yarr",
          "package": "yarr",
          "partial": "Yarr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed representation is a wrapper for arbitrary indexing function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e instance holds linear getter (\u003ccode\u003e(Int -\u003e IO a)\u003c/code\u003e),\n and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e D \u003ccode\u003e\u003ca\u003eSH\u003c/a\u003e\u003c/code\u003e sh a\u003c/code\u003e - shaped, \"true\" \u003ccode\u003e(sh -\u003e IO a)\u003c/code\u003e index, respectively.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eD\u003c/code\u003eelayed arrays are most common recipients for fusion operations.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "D",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Delayed.html#D",
          "type": "data"
        },
        "index": {
          "description": "Delayed representation is wrapper for arbitrary indexing function UArray sh instance holds linear getter Int IO and UArray SH sh shaped true sh IO index respectively elayed arrays are most common recipients for fusion operations",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "D",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "Dim1",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Dim1",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:Dim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "Dim2",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Dim2",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:Dim2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "Dim3",
          "package": "yarr",
          "source": "src/Data-Yarr-Shape.html#Dim3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Dim3",
          "package": "yarr",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:Dim3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForeign representation is the heart of Yarr framework.\n\u003c/p\u003e\u003cp\u003eInternally it holds raw pointer (\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e), which makes indexing\n foreign arrays not slower than GHC's built-in primitive arrays,\n but without freeze/thaw boilerplate.\n\u003c/p\u003e\u003cp\u003eForeign arrays are very permissible, for example you can easily\n use them as source and target of \u003ccode\u003e\u003ca\u003eLoad\u003c/a\u003e\u003c/code\u003eing operation simultaneously,\n achieving old good in-place \u003ccode\u003eC-\u003c/code\u003estyle array modifying:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eloadS\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e arr) arr\u003c/pre\u003e\u003cp\u003eForeign arrays are intented to hold all \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e types and\n vectors of them (because there is a conditional instance of \u003ccode\u003eStoralbe\u003c/code\u003e\n class for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003es too).\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "F",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Foreign.html#F",
          "type": "data"
        },
        "index": {
          "description": "Foreign representation is the heart of Yarr framework Internally it holds raw pointer Ptr which makes indexing foreign arrays not slower than GHC built-in primitive arrays but without freeze thaw boilerplate Foreign arrays are very permissible for example you can easily use them as source and target of Load ing operation simultaneously achieving old good in-place style array modifying loadS fill dmap sqrt arr arr Foreign arrays are intented to hold all Storable types and vectors of them because there is conditional instance of Storalbe class for Vector of Storable too",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "F",
          "package": "yarr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper which is used to make \u003ccode\u003e\u003ca\u003eFn\u003c/a\u003e\u003c/code\u003e injective.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "Fun",
          "package": "yarr",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper which is used to make Fn injective",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Fun",
          "package": "yarr",
          "partial": "Fun",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "N1",
          "package": "yarr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "N1",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:N1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "N2",
          "package": "yarr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "N2",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:N2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "N3",
          "package": "yarr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "N3",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:N3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "N4",
          "package": "yarr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "N4",
          "package": "yarr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:N4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSEparate meta array representation. Internally SEparate arrays\n hold vector of it's slices (so, \u003ccode\u003e\u003ca\u003eslices\u003c/a\u003e\u003c/code\u003e is just getter for them).\n\u003c/p\u003e\u003cp\u003eMostly useful for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Separate in memory manifest \u003ccode\u003e\u003ca\u003eF\u003c/a\u003e\u003c/code\u003eoreign arrays (\"Unboxed\" arrays\n    in \u003ccode\u003evector\u003c/code\u003e/\u003ccode\u003erepa\u003c/code\u003e libraries terms).\n\u003c/li\u003e\u003cli\u003e Element-wise vector array fusion (see group of \u003ccode\u003e\u003ca\u003edmapElems\u003c/a\u003e\u003c/code\u003e functions).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Yarr",
          "name": "SE",
          "package": "yarr",
          "source": "src/Data-Yarr-Repr-Separate.html#SE",
          "type": "data"
        },
        "index": {
          "description": "SEparate meta array representation Internally SEparate arrays hold vector of it slices so slices is just getter for them Mostly useful for Separate in memory manifest oreign arrays Unboxed arrays in vector repa libraries terms Element-wise vector array fusion see group of dmapElems functions",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "SE",
          "package": "yarr",
          "partial": "SE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector based on the lists. Not very useful by itself but is\n   necessary for implementation.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "VecList",
          "package": "yarr",
          "type": "newtype"
        },
        "index": {
          "description": "Vector based on the lists Not very useful by itself but is necessary for implementation",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "VecList",
          "package": "yarr",
          "partial": "Vec List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:VecList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for vectors with fixed length.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "Vector",
          "package": "yarr",
          "type": "class"
        },
        "index": {
          "description": "Type class for vectors with fixed length",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Vector",
          "package": "yarr",
          "partial": "Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "Fun",
          "package": "yarr",
          "signature": "Fun (Fn n a b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "Fun",
          "package": "yarr",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yarr",
          "name": "VecList",
          "package": "yarr",
          "signature": "VecList [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "VecList",
          "normalized": "VecList[a]",
          "package": "yarr",
          "partial": "Vec List",
          "signature": "VecList[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:VecList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN-ary function for creation of vectors.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "construct",
          "package": "yarr",
          "signature": "Fun (Dim v) a (v a)",
          "type": "method"
        },
        "index": {
          "description": "N-ary function for creation of vectors",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "construct",
          "package": "yarr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruction of vector.\n\u003c/p\u003e",
          "module": "Data.Yarr",
          "name": "inspect",
          "package": "yarr",
          "signature": "v a -\u003e Fun (Dim v) a b -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "Deconstruction of vector",
          "hierarchy": "Data Yarr",
          "module": "Data.Yarr",
          "name": "inspect",
          "normalized": "a b-\u003eFun(Dim a)b c-\u003ec",
          "package": "yarr",
          "signature": "v a-\u003eFun(Dim v)a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Data-Yarr.html#v:inspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Yarr",
          "name": "Yarr",
          "package": "yarr",
          "source": "src/Debug-Yarr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debug Yarr",
          "module": "Debug.Yarr",
          "name": "Yarr",
          "package": "yarr",
          "partial": "Yarr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Debug-Yarr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Yarr",
          "name": "CHK",
          "package": "yarr",
          "source": "src/Debug-Yarr.html#CHK",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debug Yarr",
          "module": "Debug.Yarr",
          "name": "CHK",
          "package": "yarr",
          "partial": "CHK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Debug-Yarr.html#t:CHK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYarr something to stderr.\n\u003c/p\u003e",
          "module": "Debug.Yarr",
          "name": "yarr",
          "package": "yarr",
          "signature": "String -\u003e IO ()",
          "source": "src/Debug-Yarr.html#yarr",
          "type": "function"
        },
        "index": {
          "description": "Yarr something to stderr",
          "hierarchy": "Debug Yarr",
          "module": "Debug.Yarr",
          "name": "yarr",
          "normalized": "String-\u003eIO()",
          "package": "yarr",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Debug-Yarr.html#v:yarr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYarr something as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e",
          "module": "Debug.Yarr",
          "name": "yerr",
          "package": "yarr",
          "signature": "String -\u003e a",
          "source": "src/Debug-Yarr.html#yerr",
          "type": "function"
        },
        "index": {
          "description": "Yarr something as error message",
          "hierarchy": "Debug Yarr",
          "module": "Debug.Yarr",
          "name": "yerr",
          "normalized": "String-\u003ea",
          "package": "yarr",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yarr/docs/Debug-Yarr.html#v:yerr"
      }
    }
  ]
]