[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal parsers. Most users should not need to use this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Packed.Syntax.Internal",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "module",
        "fct-source": "src/Data-Packed-Syntax-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal parsers Most users should not need to use this module",
        "hierarchy": "Data Packed Syntax Internal",
        "module": "Data.Packed.Syntax.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "hmatrix-syntax",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:listExp",
      "description": {
        "fct-descr": "\u003cp\u003eParser for list expressions\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Syntax.Internal",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "String -\u003e Either String [Exp]",
        "fct-source": "src/Data-Packed-Syntax-Internal.html#listExp",
        "fct-type": "function",
        "title": "listExp"
      },
      "index": {
        "description": "Parser for list expressions",
        "hierarchy": "Data Packed Syntax Internal",
        "module": "Data.Packed.Syntax.Internal",
        "name": "listExp",
        "normalized": "String-\u003eEither String[Exp]",
        "package": "hmatrix-syntax",
        "partial": "Exp",
        "signature": "String-\u003eEither String[Exp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:listPat",
      "description": {
        "fct-descr": "\u003cp\u003eParser for list patterns\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Syntax.Internal",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "String -\u003e Either String [Pat]",
        "fct-source": "src/Data-Packed-Syntax-Internal.html#listPat",
        "fct-type": "function",
        "title": "listPat"
      },
      "index": {
        "description": "Parser for list patterns",
        "hierarchy": "Data Packed Syntax Internal",
        "module": "Data.Packed.Syntax.Internal",
        "name": "listPat",
        "normalized": "String-\u003eEither String[Pat]",
        "package": "hmatrix-syntax",
        "partial": "Pat",
        "signature": "String-\u003eEither String[Pat]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:matListExp",
      "description": {
        "fct-descr": "\u003cp\u003eParser for matrix expressions. Returns (outer length, inner length, matrix)\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Syntax.Internal",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "String -\u003e Either String (Int, Int, [[Exp]])",
        "fct-source": "src/Data-Packed-Syntax-Internal.html#matListExp",
        "fct-type": "function",
        "title": "matListExp"
      },
      "index": {
        "description": "Parser for matrix expressions Returns outer length inner length matrix",
        "hierarchy": "Data Packed Syntax Internal",
        "module": "Data.Packed.Syntax.Internal",
        "name": "matListExp",
        "normalized": "String-\u003eEither String(Int,Int,[[Exp]])",
        "package": "hmatrix-syntax",
        "partial": "List Exp",
        "signature": "String-\u003eEither String(Int,Int,[[Exp]])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax-Internal.html#v:matListPat",
      "description": {
        "fct-descr": "\u003cp\u003eParser for matrix patterns. Returns (outer length, inner length, matrix)\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Syntax.Internal",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "String -\u003e Either String (Int, Int, [[Pat]])",
        "fct-source": "src/Data-Packed-Syntax-Internal.html#matListPat",
        "fct-type": "function",
        "title": "matListPat"
      },
      "index": {
        "description": "Parser for matrix patterns Returns outer length inner length matrix",
        "hierarchy": "Data Packed Syntax Internal",
        "module": "Data.Packed.Syntax.Internal",
        "name": "matListPat",
        "normalized": "String-\u003eEither String(Int,Int,[[Pat]])",
        "package": "hmatrix-syntax",
        "partial": "List Pat",
        "signature": "String-\u003eEither String(Int,Int,[[Pat]])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main import. Modules using these quasiquoters need the following language pragma:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes, ViewPatterns #-}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Packed.Syntax",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "module",
        "fct-source": "src/Data-Packed-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "The main import Modules using these quasiquoters need the following language pragma LANGUAGE QuasiQuotes ViewPatterns",
        "hierarchy": "Data Packed Syntax",
        "module": "Data.Packed.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "hmatrix-syntax",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#v:mat",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiquoter for matrices. For example, use as an expression:\n\u003c/p\u003e\u003cpre\u003e buildMat x y = [mat| x,     y;\n                      x + y, sin y |]\n\u003c/pre\u003e\u003cp\u003eor use as a pattern:\n\u003c/p\u003e\u003cpre\u003e adjugateMat2 [mat| a, b; c, d |] = [mat| d, -b; -c, a |]\n\u003c/pre\u003e\u003cp\u003eIf row sizes don't match, this will be caught at compile time.\n\u003c/p\u003e",
        "fct-module": "Data.Packed.Syntax",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Packed-Syntax.html#mat",
        "fct-type": "function",
        "title": "mat"
      },
      "index": {
        "description": "Quasiquoter for matrices For example use as an expression buildMat mat sin or use as pattern adjugateMat2 mat mat If row sizes don match this will be caught at compile time",
        "hierarchy": "Data Packed Syntax",
        "module": "Data.Packed.Syntax",
        "name": "mat",
        "normalized": "",
        "package": "hmatrix-syntax",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-syntax/docs/Data-Packed-Syntax.html#v:vec",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiquoter for vectors. For example, use as an expression:\n\u003c/p\u003e\u003cpre\u003e buildVec x = [vec| x, sin x |]\n\u003c/pre\u003e\u003cp\u003eor use as a pattern:\n\u003c/p\u003e\u003cpre\u003e swap [vec| x, y |] = [vec| y, x |]\n\u003c/pre\u003e",
        "fct-module": "Data.Packed.Syntax",
        "fct-package": "hmatrix-syntax",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-Packed-Syntax.html#vec",
        "fct-type": "function",
        "title": "vec"
      },
      "index": {
        "description": "Quasiquoter for vectors For example use as an expression buildVec vec sin or use as pattern swap vec vec",
        "hierarchy": "Data Packed Syntax",
        "module": "Data.Packed.Syntax",
        "name": "vec",
        "normalized": "",
        "package": "hmatrix-syntax",
        "partial": "",
        "signature": ""
      }
    }
  }
]