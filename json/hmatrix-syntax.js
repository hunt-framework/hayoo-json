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
        "word": "hmatrix-syntax"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal parsers. Most users should not need to use this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Packed.Syntax.Internal",
          "name": "Internal",
          "package": "hmatrix-syntax",
          "source": "src/Data-Packed-Syntax-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal parsers Most users should not need to use this module",
          "hierarchy": "Data Packed Syntax Internal",
          "module": "Data.Packed.Syntax.Internal",
          "name": "Internal",
          "package": "hmatrix-syntax",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for list expressions\n\u003c/p\u003e",
          "module": "Data.Packed.Syntax.Internal",
          "name": "listExp",
          "package": "hmatrix-syntax",
          "signature": "String -\u003e Either String [Exp]",
          "source": "src/Data-Packed-Syntax-Internal.html#listExp",
          "type": "function"
        },
        "index": {
          "description": "Parser for list expressions",
          "hierarchy": "Data Packed Syntax Internal",
          "module": "Data.Packed.Syntax.Internal",
          "name": "listExp",
          "normalized": "String-\u003eEither String[Exp]",
          "package": "hmatrix-syntax",
          "partial": "Exp",
          "signature": "String-\u003eEither String[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:listExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for list patterns\n\u003c/p\u003e",
          "module": "Data.Packed.Syntax.Internal",
          "name": "listPat",
          "package": "hmatrix-syntax",
          "signature": "String -\u003e Either String [Pat]",
          "source": "src/Data-Packed-Syntax-Internal.html#listPat",
          "type": "function"
        },
        "index": {
          "description": "Parser for list patterns",
          "hierarchy": "Data Packed Syntax Internal",
          "module": "Data.Packed.Syntax.Internal",
          "name": "listPat",
          "normalized": "String-\u003eEither String[Pat]",
          "package": "hmatrix-syntax",
          "partial": "Pat",
          "signature": "String-\u003eEither String[Pat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:listPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for matrix expressions. Returns (outer length, inner length, matrix)\n\u003c/p\u003e",
          "module": "Data.Packed.Syntax.Internal",
          "name": "matListExp",
          "package": "hmatrix-syntax",
          "signature": "String -\u003e Either String (Int, Int, [[Exp]])",
          "source": "src/Data-Packed-Syntax-Internal.html#matListExp",
          "type": "function"
        },
        "index": {
          "description": "Parser for matrix expressions Returns outer length inner length matrix",
          "hierarchy": "Data Packed Syntax Internal",
          "module": "Data.Packed.Syntax.Internal",
          "name": "matListExp",
          "normalized": "String-\u003eEither String(Int,Int,[[Exp]])",
          "package": "hmatrix-syntax",
          "partial": "List Exp",
          "signature": "String-\u003eEither String(Int,Int,[[Exp]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:matListExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for matrix patterns. Returns (outer length, inner length, matrix)\n\u003c/p\u003e",
          "module": "Data.Packed.Syntax.Internal",
          "name": "matListPat",
          "package": "hmatrix-syntax",
          "signature": "String -\u003e Either String (Int, Int, [[Pat]])",
          "source": "src/Data-Packed-Syntax-Internal.html#matListPat",
          "type": "function"
        },
        "index": {
          "description": "Parser for matrix patterns Returns outer length inner length matrix",
          "hierarchy": "Data Packed Syntax Internal",
          "module": "Data.Packed.Syntax.Internal",
          "name": "matListPat",
          "normalized": "String-\u003eEither String(Int,Int,[[Pat]])",
          "package": "hmatrix-syntax",
          "partial": "List Pat",
          "signature": "String-\u003eEither String(Int,Int,[[Pat]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:matListPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main import. Modules using these quasiquoters need the following language pragma:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes, ViewPatterns #-}\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Packed.Syntax",
          "name": "Syntax",
          "package": "hmatrix-syntax",
          "source": "src/Data-Packed-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "The main import Modules using these quasiquoters need the following language pragma LANGUAGE QuasiQuotes ViewPatterns",
          "hierarchy": "Data Packed Syntax",
          "module": "Data.Packed.Syntax",
          "name": "Syntax",
          "package": "hmatrix-syntax",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiquoter for matrices. For example, use as an expression:\n\u003c/p\u003e\u003cpre\u003e buildMat x y = [mat| x,     y;\n                      x + y, sin y |]\n\u003c/pre\u003e\u003cp\u003eor use as a pattern:\n\u003c/p\u003e\u003cpre\u003e adjugateMat2 [mat| a, b; c, d |] = [mat| d, -b; -c, a |]\n\u003c/pre\u003e\u003cp\u003eIf row sizes don't match, this will be caught at compile time.\n\u003c/p\u003e",
          "module": "Data.Packed.Syntax",
          "name": "mat",
          "package": "hmatrix-syntax",
          "signature": "QuasiQuoter",
          "source": "src/Data-Packed-Syntax.html#mat",
          "type": "function"
        },
        "index": {
          "description": "Quasiquoter for matrices For example use as an expression buildMat mat sin or use as pattern adjugateMat2 mat mat If row sizes don match this will be caught at compile time",
          "hierarchy": "Data Packed Syntax",
          "module": "Data.Packed.Syntax",
          "name": "mat",
          "package": "hmatrix-syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#v:mat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiquoter for vectors. For example, use as an expression:\n\u003c/p\u003e\u003cpre\u003e buildVec x = [vec| x, sin x |]\n\u003c/pre\u003e\u003cp\u003eor use as a pattern:\n\u003c/p\u003e\u003cpre\u003e swap [vec| x, y |] = [vec| y, x |]\n\u003c/pre\u003e",
          "module": "Data.Packed.Syntax",
          "name": "vec",
          "package": "hmatrix-syntax",
          "signature": "QuasiQuoter",
          "source": "src/Data-Packed-Syntax.html#vec",
          "type": "function"
        },
        "index": {
          "description": "Quasiquoter for vectors For example use as an expression buildVec vec sin or use as pattern swap vec vec",
          "hierarchy": "Data Packed Syntax",
          "module": "Data.Packed.Syntax",
          "name": "vec",
          "package": "hmatrix-syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#v:vec"
      }
    }
  ]
]