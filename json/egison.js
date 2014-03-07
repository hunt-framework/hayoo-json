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
        "word": "egison"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to evaluate various objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Core",
          "name": "Core",
          "package": "egison",
          "source": "src/Language-Egison-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to evaluate various objects",
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "Core",
          "package": "egison",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "applyFunc",
          "package": "egison",
          "signature": "WHNFData -\u003e WHNFData -\u003e EgisonM WHNFData",
          "source": "src/Language-Egison-Core.html#applyFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "applyFunc",
          "normalized": "WHNFData-\u003eWHNFData-\u003eEgisonM WHNFData",
          "package": "egison",
          "partial": "Func",
          "signature": "WHNFData-\u003eWHNFData-\u003eEgisonM WHNFData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:applyFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalExpr",
          "package": "egison",
          "signature": "Env -\u003e EgisonExpr -\u003e EgisonM WHNFData",
          "source": "src/Language-Egison-Core.html#evalExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalExpr",
          "normalized": "Env-\u003eEgisonExpr-\u003eEgisonM WHNFData",
          "package": "egison",
          "partial": "Expr",
          "signature": "Env-\u003eEgisonExpr-\u003eEgisonM WHNFData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalExprDeep",
          "package": "egison",
          "signature": "Env -\u003e EgisonExpr -\u003e EgisonM EgisonValue",
          "source": "src/Language-Egison-Core.html#evalExprDeep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalExprDeep",
          "normalized": "Env-\u003eEgisonExpr-\u003eEgisonM EgisonValue",
          "package": "egison",
          "partial": "Expr Deep",
          "signature": "Env-\u003eEgisonExpr-\u003eEgisonM EgisonValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalExprDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalRef",
          "package": "egison",
          "signature": "ObjectRef -\u003e EgisonM WHNFData",
          "source": "src/Language-Egison-Core.html#evalRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalRef",
          "normalized": "ObjectRef-\u003eEgisonM WHNFData",
          "package": "egison",
          "partial": "Ref",
          "signature": "ObjectRef-\u003eEgisonM WHNFData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalRefDeep",
          "package": "egison",
          "signature": "ObjectRef -\u003e EgisonM EgisonValue",
          "source": "src/Language-Egison-Core.html#evalRefDeep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalRefDeep",
          "normalized": "ObjectRef-\u003eEgisonM EgisonValue",
          "package": "egison",
          "partial": "Ref Deep",
          "signature": "ObjectRef-\u003eEgisonM EgisonValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalRefDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalStringWHNF",
          "package": "egison",
          "signature": "WHNFData -\u003e EgisonM String",
          "source": "src/Language-Egison-Core.html#evalStringWHNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalStringWHNF",
          "normalized": "WHNFData-\u003eEgisonM String",
          "package": "egison",
          "partial": "String WHNF",
          "signature": "WHNFData-\u003eEgisonM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalStringWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalTopExpr",
          "package": "egison",
          "signature": "Env -\u003e EgisonTopExpr -\u003e EgisonM Env",
          "source": "src/Language-Egison-Core.html#evalTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalTopExpr",
          "normalized": "Env-\u003eEgisonTopExpr-\u003eEgisonM Env",
          "package": "egison",
          "partial": "Top Expr",
          "signature": "Env-\u003eEgisonTopExpr-\u003eEgisonM Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalTopExpr'",
          "package": "egison",
          "signature": "Env -\u003e EgisonTopExpr -\u003e EgisonM Env",
          "source": "src/Language-Egison-Core.html#evalTopExpr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalTopExpr'",
          "normalized": "Env-\u003eEgisonTopExpr-\u003eEgisonM Env",
          "package": "egison",
          "partial": "Top Expr'",
          "signature": "Env-\u003eEgisonTopExpr-\u003eEgisonM Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalTopExpr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalTopExprs",
          "package": "egison",
          "signature": "Env -\u003e [EgisonTopExpr] -\u003e EgisonM Env",
          "source": "src/Language-Egison-Core.html#evalTopExprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalTopExprs",
          "normalized": "Env-\u003e[EgisonTopExpr]-\u003eEgisonM Env",
          "package": "egison",
          "partial": "Top Exprs",
          "signature": "Env-\u003e[EgisonTopExpr]-\u003eEgisonM Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalTopExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "evalWHNF",
          "package": "egison",
          "signature": "WHNFData -\u003e EgisonM EgisonValue",
          "source": "src/Language-Egison-Core.html#evalWHNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "evalWHNF",
          "normalized": "WHNFData-\u003eEgisonM EgisonValue",
          "package": "egison",
          "partial": "WHNF",
          "signature": "WHNFData-\u003eEgisonM EgisonValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:evalWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "fromStringValue",
          "package": "egison",
          "signature": "EgisonValue -\u003e EgisonM String",
          "source": "src/Language-Egison-Core.html#fromStringValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "fromStringValue",
          "normalized": "EgisonValue-\u003eEgisonM String",
          "package": "egison",
          "partial": "String Value",
          "signature": "EgisonValue-\u003eEgisonM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:fromStringValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "isEmptyCollection",
          "package": "egison",
          "signature": "WHNFData -\u003e EgisonM Bool",
          "source": "src/Language-Egison-Core.html#isEmptyCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "isEmptyCollection",
          "normalized": "WHNFData-\u003eEgisonM Bool",
          "package": "egison",
          "partial": "Empty Collection",
          "signature": "WHNFData-\u003eEgisonM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:isEmptyCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "patternMatch",
          "package": "egison",
          "signature": "Env -\u003e EgisonPattern -\u003e ObjectRef -\u003e Matcher -\u003e EgisonM (MList EgisonM Match)",
          "source": "src/Language-Egison-Core.html#patternMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "patternMatch",
          "normalized": "Env-\u003eEgisonPattern-\u003eObjectRef-\u003eMatcher-\u003eEgisonM(MList EgisonM Match)",
          "package": "egison",
          "partial": "Match",
          "signature": "Env-\u003eEgisonPattern-\u003eObjectRef-\u003eMatcher-\u003eEgisonM(MList EgisonM Match)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:patternMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "recursiveBind",
          "package": "egison",
          "signature": "Env -\u003e [(String, EgisonExpr)] -\u003e EgisonM Env",
          "source": "src/Language-Egison-Core.html#recursiveBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "recursiveBind",
          "normalized": "Env-\u003e[(String,EgisonExpr)]-\u003eEgisonM Env",
          "package": "egison",
          "partial": "Bind",
          "signature": "Env-\u003e[(String,EgisonExpr)]-\u003eEgisonM Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:recursiveBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "unconsCollection",
          "package": "egison",
          "signature": "WHNFData -\u003e MatchM (ObjectRef, ObjectRef)",
          "source": "src/Language-Egison-Core.html#unconsCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "unconsCollection",
          "normalized": "WHNFData-\u003eMatchM(ObjectRef,ObjectRef)",
          "package": "egison",
          "partial": "Collection",
          "signature": "WHNFData-\u003eMatchM(ObjectRef,ObjectRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:unconsCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Core",
          "name": "unsnocCollection",
          "package": "egison",
          "signature": "WHNFData -\u003e MatchM (ObjectRef, ObjectRef)",
          "source": "src/Language-Egison-Core.html#unsnocCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Core",
          "module": "Language.Egison.Core",
          "name": "unsnocCollection",
          "normalized": "WHNFData-\u003eMatchM(ObjectRef,ObjectRef)",
          "package": "egison",
          "partial": "Collection",
          "signature": "WHNFData-\u003eMatchM(ObjectRef,ObjectRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Core.html#v:unsnocCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provide desugar functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Desugar",
          "name": "Desugar",
          "package": "egison",
          "source": "src/Language-Egison-Desugar.html",
          "type": "module"
        },
        "index": {
          "description": "This module provide desugar functions",
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "Desugar",
          "package": "egison",
          "partial": "Desugar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Desugar",
          "name": "DesugarM",
          "package": "egison",
          "source": "src/Language-Egison-Desugar.html#DesugarM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "DesugarM",
          "package": "egison",
          "partial": "Desugar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#t:DesugarM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Desugar",
          "name": "desugar",
          "package": "egison",
          "signature": "EgisonExpr -\u003e DesugarM EgisonExpr",
          "source": "src/Language-Egison-Desugar.html#desugar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "desugar",
          "normalized": "EgisonExpr-\u003eDesugarM EgisonExpr",
          "package": "egison",
          "signature": "EgisonExpr-\u003eDesugarM EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#v:desugar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Desugar",
          "name": "desugarExpr",
          "package": "egison",
          "signature": "EgisonExpr -\u003e EgisonM EgisonExpr",
          "source": "src/Language-Egison-Desugar.html#desugarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "desugarExpr",
          "normalized": "EgisonExpr-\u003eEgisonM EgisonExpr",
          "package": "egison",
          "partial": "Expr",
          "signature": "EgisonExpr-\u003eEgisonM EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#v:desugarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Desugar",
          "name": "desugarTopExpr",
          "package": "egison",
          "signature": "EgisonTopExpr -\u003e EgisonM EgisonTopExpr",
          "source": "src/Language-Egison-Desugar.html#desugarTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "desugarTopExpr",
          "normalized": "EgisonTopExpr-\u003eEgisonM EgisonTopExpr",
          "package": "egison",
          "partial": "Top Expr",
          "signature": "EgisonTopExpr-\u003eEgisonM EgisonTopExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#v:desugarTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Desugar",
          "name": "runDesugarM",
          "package": "egison",
          "signature": "DesugarM a -\u003e Fresh (Either EgisonError a)",
          "source": "src/Language-Egison-Desugar.html#runDesugarM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Desugar",
          "module": "Language.Egison.Desugar",
          "name": "runDesugarM",
          "normalized": "DesugarM a-\u003eFresh(Either EgisonError a)",
          "package": "egison",
          "partial": "Desugar",
          "signature": "DesugarM a-\u003eFresh(Either EgisonError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Desugar.html#v:runDesugarM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provide Egison parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Parser",
          "name": "Parser",
          "package": "egison",
          "source": "src/Language-Egison-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This module provide Egison parser",
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "Parser",
          "package": "egison",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a file\n\u003c/p\u003e",
          "module": "Language.Egison.Parser",
          "name": "loadFile",
          "package": "egison",
          "signature": "FilePath -\u003e EgisonM [EgisonTopExpr]",
          "source": "src/Language-Egison-Parser.html#loadFile",
          "type": "function"
        },
        "index": {
          "description": "Load file",
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "loadFile",
          "normalized": "FilePath-\u003eEgisonM[EgisonTopExpr]",
          "package": "egison",
          "partial": "File",
          "signature": "FilePath-\u003eEgisonM[EgisonTopExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:loadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a libary file\n\u003c/p\u003e",
          "module": "Language.Egison.Parser",
          "name": "loadLibraryFile",
          "package": "egison",
          "signature": "FilePath -\u003e EgisonM [EgisonTopExpr]",
          "source": "src/Language-Egison-Parser.html#loadLibraryFile",
          "type": "function"
        },
        "index": {
          "description": "Load libary file",
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "loadLibraryFile",
          "normalized": "FilePath-\u003eEgisonM[EgisonTopExpr]",
          "package": "egison",
          "partial": "Library File",
          "signature": "FilePath-\u003eEgisonM[EgisonTopExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:loadLibraryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "parseExpr",
          "package": "egison",
          "signature": "String -\u003e Either EgisonError EgisonExpr",
          "source": "src/Language-Egison-Parser.html#parseExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "parseExpr",
          "normalized": "String-\u003eEither EgisonError EgisonExpr",
          "package": "egison",
          "partial": "Expr",
          "signature": "String-\u003eEither EgisonError EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "parseExprs",
          "package": "egison",
          "signature": "String -\u003e Either EgisonError [EgisonExpr]",
          "source": "src/Language-Egison-Parser.html#parseExprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "parseExprs",
          "normalized": "String-\u003eEither EgisonError[EgisonExpr]",
          "package": "egison",
          "partial": "Exprs",
          "signature": "String-\u003eEither EgisonError[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:parseExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "parseTopExpr",
          "package": "egison",
          "signature": "String -\u003e Either EgisonError EgisonTopExpr",
          "source": "src/Language-Egison-Parser.html#parseTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "parseTopExpr",
          "normalized": "String-\u003eEither EgisonError EgisonTopExpr",
          "package": "egison",
          "partial": "Top Expr",
          "signature": "String-\u003eEither EgisonError EgisonTopExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:parseTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "parseTopExprs",
          "package": "egison",
          "signature": "String -\u003e Either EgisonError [EgisonTopExpr]",
          "source": "src/Language-Egison-Parser.html#parseTopExprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "parseTopExprs",
          "normalized": "String-\u003eEither EgisonError[EgisonTopExpr]",
          "package": "egison",
          "partial": "Top Exprs",
          "signature": "String-\u003eEither EgisonError[EgisonTopExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:parseTopExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "readExpr",
          "package": "egison",
          "signature": "String -\u003e EgisonM EgisonExpr",
          "source": "src/Language-Egison-Parser.html#readExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "readExpr",
          "normalized": "String-\u003eEgisonM EgisonExpr",
          "package": "egison",
          "partial": "Expr",
          "signature": "String-\u003eEgisonM EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:readExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "readExprs",
          "package": "egison",
          "signature": "String -\u003e EgisonM [EgisonExpr]",
          "source": "src/Language-Egison-Parser.html#readExprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "readExprs",
          "normalized": "String-\u003eEgisonM[EgisonExpr]",
          "package": "egison",
          "partial": "Exprs",
          "signature": "String-\u003eEgisonM[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:readExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "readTopExpr",
          "package": "egison",
          "signature": "String -\u003e EgisonM EgisonTopExpr",
          "source": "src/Language-Egison-Parser.html#readTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "readTopExpr",
          "normalized": "String-\u003eEgisonM EgisonTopExpr",
          "package": "egison",
          "partial": "Top Expr",
          "signature": "String-\u003eEgisonM EgisonTopExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:readTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Parser",
          "name": "readTopExprs",
          "package": "egison",
          "signature": "String -\u003e EgisonM [EgisonTopExpr]",
          "source": "src/Language-Egison-Parser.html#readTopExprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Parser",
          "module": "Language.Egison.Parser",
          "name": "readTopExprs",
          "normalized": "String-\u003eEgisonM[EgisonTopExpr]",
          "package": "egison",
          "partial": "Top Exprs",
          "signature": "String-\u003eEgisonM[EgisonTopExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Parser.html#v:readTopExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides primitive functions in Egison.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Primitives",
          "name": "Primitives",
          "package": "egison",
          "source": "src/Language-Egison-Primitives.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides primitive functions in Egison",
          "hierarchy": "Language Egison Primitives",
          "module": "Language.Egison.Primitives",
          "name": "Primitives",
          "package": "egison",
          "partial": "Primitives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Primitives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Primitives",
          "name": "primitiveEnv",
          "package": "egison",
          "signature": "IO Env",
          "source": "src/Language-Egison-Primitives.html#primitiveEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Primitives",
          "module": "Language.Egison.Primitives",
          "name": "primitiveEnv",
          "package": "egison",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Primitives.html#v:primitiveEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Primitives",
          "name": "primitiveEnvNoIO",
          "package": "egison",
          "signature": "IO Env",
          "source": "src/Language-Egison-Primitives.html#primitiveEnvNoIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Primitives",
          "module": "Language.Egison.Primitives",
          "name": "primitiveEnvNoIO",
          "package": "egison",
          "partial": "Env No IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Primitives.html#v:primitiveEnvNoIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains type definitions of Egison Data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Types",
          "name": "Types",
          "package": "egison",
          "source": "src/Language-Egison-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains type definitions of Egison Data",
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Types",
          "package": "egison",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Binding",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Binding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Binding",
          "package": "egison",
          "partial": "Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Binding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "BindingExpr",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#BindingExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "BindingExpr",
          "package": "egison",
          "partial": "Binding Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:BindingExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Egison",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Egison",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Egison",
          "package": "egison",
          "partial": "Egison",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Egison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonError",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonError",
          "package": "egison",
          "partial": "Egison Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonExpr",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonExpr",
          "package": "egison",
          "partial": "Egison Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonM",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonM",
          "package": "egison",
          "partial": "Egison",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonPattern",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonPattern",
          "package": "egison",
          "partial": "Egison Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonTopExpr",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonTopExpr",
          "package": "egison",
          "partial": "Egison Top Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonValue",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonValue",
          "package": "egison",
          "partial": "Egison Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonWHNF",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#EgisonWHNF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonWHNF",
          "package": "egison",
          "partial": "Egison WHNF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:EgisonWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Env",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Env",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Env",
          "package": "egison",
          "partial": "Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Fresh",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Fresh",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Fresh",
          "package": "egison",
          "partial": "Fresh",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "FreshT",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#FreshT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "FreshT",
          "package": "egison",
          "partial": "Fresh",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Inner",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Inner",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Inner",
          "package": "egison",
          "partial": "Inner",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "InnerExpr",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#InnerExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "InnerExpr",
          "package": "egison",
          "partial": "Inner Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:InnerExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Intermediate",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Intermediate",
          "package": "egison",
          "partial": "Intermediate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Intermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopContext",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#LoopContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopContext",
          "package": "egison",
          "partial": "Loop Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:LoopContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopMode",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#LoopMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopMode",
          "package": "egison",
          "partial": "Loop Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:LoopMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopRange",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#LoopRange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopRange",
          "package": "egison",
          "partial": "Loop Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:LoopRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MList",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MList",
          "package": "egison",
          "partial": "MList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Match",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Match",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Match",
          "package": "egison",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchClause",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MatchClause",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchClause",
          "package": "egison",
          "partial": "Match Clause",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MatchClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchM",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MatchM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchM",
          "package": "egison",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MatchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Matcher",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Matcher",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Matcher",
          "package": "egison",
          "partial": "Matcher",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Matcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatcherInfo",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MatcherInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatcherInfo",
          "package": "egison",
          "partial": "Matcher Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MatcherInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchingState",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MatchingState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchingState",
          "package": "egison",
          "partial": "Matching State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MatchingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchingTree",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MatchingTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchingTree",
          "package": "egison",
          "partial": "Matching Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MatchingTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MonadFresh",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#MonadFresh",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MonadFresh",
          "package": "egison",
          "partial": "Monad Fresh",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:MonadFresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Object",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Object",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Object",
          "package": "egison",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor memoization\n\u003c/p\u003e",
          "module": "Language.Egison.Types",
          "name": "ObjectRef",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#ObjectRef",
          "type": "type"
        },
        "index": {
          "description": "For memoization",
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ObjectRef",
          "package": "egison",
          "partial": "Object Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:ObjectRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PMMode",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#PMMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PMMode",
          "package": "egison",
          "partial": "PMMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:PMMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PatternBinding",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#PatternBinding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PatternBinding",
          "package": "egison",
          "partial": "Pattern Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:PatternBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PrimitiveDataPattern",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PrimitiveDataPattern",
          "package": "egison",
          "partial": "Primitive Data Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:PrimitiveDataPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PrimitiveFunc",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#PrimitiveFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PrimitiveFunc",
          "package": "egison",
          "partial": "Primitive Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:PrimitiveFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PrimitivePatPattern",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#PrimitivePatPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PrimitivePatPattern",
          "package": "egison",
          "partial": "Primitive Pat Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:PrimitivePatPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Var",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#Var",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Var",
          "package": "egison",
          "partial": "Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "WHNFData",
          "package": "egison",
          "source": "src/Language-Egison-Types.html#WHNFData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "WHNFData",
          "package": "egison",
          "partial": "WHNFData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#t:WHNFData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "AlgebraicDataMatcherExpr",
          "package": "egison",
          "signature": "AlgebraicDataMatcherExpr [(String, [EgisonExpr])]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "AlgebraicDataMatcherExpr",
          "normalized": "AlgebraicDataMatcherExpr[(String,[EgisonExpr])]",
          "package": "egison",
          "partial": "Algebraic Data Matcher Expr",
          "signature": "AlgebraicDataMatcherExpr[(String,[EgisonExpr])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:AlgebraicDataMatcherExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "AndPat",
          "package": "egison",
          "signature": "AndPat [EgisonPattern]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "AndPat",
          "normalized": "AndPat[EgisonPattern]",
          "package": "egison",
          "partial": "And Pat",
          "signature": "AndPat[EgisonPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:AndPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ApplyExpr",
          "package": "egison",
          "signature": "ApplyExpr EgisonExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ApplyExpr",
          "package": "egison",
          "partial": "Apply Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ApplyExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ApplyPat",
          "package": "egison",
          "signature": "ApplyPat EgisonExpr [EgisonPattern]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ApplyPat",
          "normalized": "ApplyPat EgisonExpr[EgisonPattern]",
          "package": "egison",
          "partial": "Apply Pat",
          "signature": "ApplyPat EgisonExpr[EgisonPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ApplyPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ArgumentsNum",
          "package": "egison",
          "signature": "ArgumentsNum Int Int",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ArgumentsNum",
          "package": "egison",
          "partial": "Arguments Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ArgumentsNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Array",
          "package": "egison",
          "signature": "Array (IntMap EgisonValue)",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Array",
          "package": "egison",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ArrayExpr",
          "package": "egison",
          "signature": "ArrayExpr [EgisonExpr]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ArrayExpr",
          "normalized": "ArrayExpr[EgisonExpr]",
          "package": "egison",
          "partial": "Array Expr",
          "signature": "ArrayExpr[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ArrayExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ArrayRefExpr",
          "package": "egison",
          "signature": "ArrayRefExpr EgisonExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ArrayRefExpr",
          "package": "egison",
          "partial": "Array Ref Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ArrayRefExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ArraySizeExpr",
          "package": "egison",
          "signature": "ArraySizeExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ArraySizeExpr",
          "package": "egison",
          "partial": "Array Size Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ArraySizeExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Assertion",
          "package": "egison",
          "signature": "Assertion String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Assertion",
          "package": "egison",
          "partial": "Assertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Assertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "BFSMode",
          "package": "egison",
          "signature": "BFSMode",
          "source": "src/Language-Egison-Types.html#PMMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "BFSMode",
          "package": "egison",
          "partial": "BFSMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:BFSMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Bool",
          "package": "egison",
          "signature": "Bool Bool",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Bool",
          "package": "egison",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "BoolExpr",
          "package": "egison",
          "signature": "BoolExpr Bool",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "BoolExpr",
          "package": "egison",
          "partial": "Bool Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:BoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Char",
          "package": "egison",
          "signature": "Char Char",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Char",
          "package": "egison",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "CharExpr",
          "package": "egison",
          "signature": "CharExpr Char",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "CharExpr",
          "package": "egison",
          "partial": "Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:CharExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Collection",
          "package": "egison",
          "signature": "Collection (Seq EgisonValue)",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Collection",
          "package": "egison",
          "partial": "Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "CollectionExpr",
          "package": "egison",
          "signature": "CollectionExpr [InnerExpr]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "CollectionExpr",
          "normalized": "CollectionExpr[InnerExpr]",
          "package": "egison",
          "partial": "Collection Expr",
          "signature": "CollectionExpr[InnerExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:CollectionExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ContPat",
          "package": "egison",
          "signature": "ContPat",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ContPat",
          "package": "egison",
          "partial": "Cont Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ContPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "DFSMode",
          "package": "egison",
          "signature": "DFSMode",
          "source": "src/Language-Egison-Types.html#PMMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "DFSMode",
          "package": "egison",
          "partial": "DFSMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:DFSMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Default",
          "package": "egison",
          "signature": "Default String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Default",
          "package": "egison",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Define",
          "package": "egison",
          "signature": "Define String EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Define",
          "package": "egison",
          "partial": "Define",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Define"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Desugar",
          "package": "egison",
          "signature": "Desugar String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Desugar",
          "package": "egison",
          "partial": "Desugar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Desugar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "DoExpr",
          "package": "egison",
          "signature": "DoExpr [BindingExpr] EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "DoExpr",
          "normalized": "DoExpr[BindingExpr]EgisonExpr",
          "package": "egison",
          "partial": "Do Expr",
          "signature": "DoExpr[BindingExpr]EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:DoExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EOF",
          "package": "egison",
          "signature": "EOF",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EOF",
          "package": "egison",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonBug",
          "package": "egison",
          "signature": "EgisonBug String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonBug",
          "package": "egison",
          "partial": "Egison Bug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:EgisonBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "EgisonM",
          "package": "egison",
          "signature": "EgisonM",
          "source": "src/Language-Egison-Types.html#EgisonM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "EgisonM",
          "package": "egison",
          "partial": "Egison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:EgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ElementExpr",
          "package": "egison",
          "signature": "ElementExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#InnerExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ElementExpr",
          "package": "egison",
          "partial": "Element Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ElementExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Execute",
          "package": "egison",
          "signature": "Execute EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Execute",
          "package": "egison",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Float",
          "package": "egison",
          "signature": "Float Double",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Float",
          "package": "egison",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "FloatExpr",
          "package": "egison",
          "signature": "FloatExpr Double",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "FloatExpr",
          "package": "egison",
          "partial": "Float Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:FloatExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "FreshT",
          "package": "egison",
          "signature": "FreshT",
          "source": "src/Language-Egison-Types.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "FreshT",
          "package": "egison",
          "partial": "Fresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:FreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Func",
          "package": "egison",
          "signature": "Func Env [String] EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Func",
          "normalized": "Func Env[String]EgisonExpr",
          "package": "egison",
          "partial": "Func",
          "signature": "Func Env[String]EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "GenerateArrayExpr",
          "package": "egison",
          "signature": "GenerateArrayExpr [String] EgisonExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "GenerateArrayExpr",
          "normalized": "GenerateArrayExpr[String]EgisonExpr EgisonExpr",
          "package": "egison",
          "partial": "Generate Array Expr",
          "signature": "GenerateArrayExpr[String]EgisonExpr EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:GenerateArrayExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "HashExpr",
          "package": "egison",
          "signature": "HashExpr [(EgisonExpr, EgisonExpr)]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "HashExpr",
          "normalized": "HashExpr[(EgisonExpr,EgisonExpr)]",
          "package": "egison",
          "partial": "Hash Expr",
          "signature": "HashExpr[(EgisonExpr,EgisonExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:HashExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IArray",
          "package": "egison",
          "signature": "IArray (IntMap ObjectRef)",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IArray",
          "package": "egison",
          "partial": "IArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ICollection",
          "package": "egison",
          "signature": "ICollection (IORef (Seq Inner))",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ICollection",
          "package": "egison",
          "partial": "ICollection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ICollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IElement",
          "package": "egison",
          "signature": "IElement ObjectRef",
          "source": "src/Language-Egison-Types.html#Inner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IElement",
          "package": "egison",
          "partial": "IElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IInductiveData",
          "package": "egison",
          "signature": "IInductiveData String [ObjectRef]",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IInductiveData",
          "normalized": "IInductiveData String[ObjectRef]",
          "package": "egison",
          "partial": "IInductive Data",
          "signature": "IInductiveData String[ObjectRef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IInductiveData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IIntHash",
          "package": "egison",
          "signature": "IIntHash (HashMap Integer ObjectRef)",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IIntHash",
          "package": "egison",
          "partial": "IInt Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IIntHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IOFunc",
          "package": "egison",
          "signature": "IOFunc (EgisonM WHNFData)",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IOFunc",
          "package": "egison",
          "partial": "IOFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IOFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IStrHash",
          "package": "egison",
          "signature": "IStrHash (HashMap ByteString ObjectRef)",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IStrHash",
          "package": "egison",
          "partial": "IStr Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IStrHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ISubCollection",
          "package": "egison",
          "signature": "ISubCollection ObjectRef",
          "source": "src/Language-Egison-Types.html#Inner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ISubCollection",
          "package": "egison",
          "partial": "ISub Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ISubCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ITuple",
          "package": "egison",
          "signature": "ITuple [ObjectRef]",
          "source": "src/Language-Egison-Types.html#Intermediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ITuple",
          "normalized": "ITuple[ObjectRef]",
          "package": "egison",
          "partial": "ITuple",
          "signature": "ITuple[ObjectRef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ITuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IfExpr",
          "package": "egison",
          "signature": "IfExpr EgisonExpr EgisonExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IfExpr",
          "package": "egison",
          "partial": "If Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IfExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IndexedExpr",
          "package": "egison",
          "signature": "IndexedExpr EgisonExpr [EgisonExpr]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IndexedExpr",
          "normalized": "IndexedExpr EgisonExpr[EgisonExpr]",
          "package": "egison",
          "partial": "Indexed Expr",
          "signature": "IndexedExpr EgisonExpr[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IndexedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IndexedPat",
          "package": "egison",
          "signature": "IndexedPat EgisonPattern [EgisonExpr]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IndexedPat",
          "normalized": "IndexedPat EgisonPattern[EgisonExpr]",
          "package": "egison",
          "partial": "Indexed Pat",
          "signature": "IndexedPat EgisonPattern[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IndexedPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "InductiveData",
          "package": "egison",
          "signature": "InductiveData String [EgisonValue]",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "InductiveData",
          "normalized": "InductiveData String[EgisonValue]",
          "package": "egison",
          "partial": "Inductive Data",
          "signature": "InductiveData String[EgisonValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:InductiveData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "InductiveDataExpr",
          "package": "egison",
          "signature": "InductiveDataExpr String [EgisonExpr]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "InductiveDataExpr",
          "normalized": "InductiveDataExpr String[EgisonExpr]",
          "package": "egison",
          "partial": "Inductive Data Expr",
          "signature": "InductiveDataExpr String[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:InductiveDataExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "InductivePat",
          "package": "egison",
          "signature": "InductivePat String [EgisonPattern]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "InductivePat",
          "normalized": "InductivePat String[EgisonPattern]",
          "package": "egison",
          "partial": "Inductive Pat",
          "signature": "InductivePat String[EgisonPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:InductivePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IntHash",
          "package": "egison",
          "signature": "IntHash (HashMap Integer EgisonValue)",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IntHash",
          "package": "egison",
          "partial": "Int Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IntHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Integer",
          "package": "egison",
          "signature": "Integer Integer",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Integer",
          "package": "egison",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IntegerExpr",
          "package": "egison",
          "signature": "IntegerExpr Integer",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IntegerExpr",
          "package": "egison",
          "partial": "Integer Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IntegerExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Intermediate",
          "package": "egison",
          "signature": "Intermediate Intermediate",
          "source": "src/Language-Egison-Types.html#WHNFData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Intermediate",
          "package": "egison",
          "partial": "Intermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Intermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "IoExpr",
          "package": "egison",
          "signature": "IoExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "IoExpr",
          "package": "egison",
          "partial": "Io Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:IoExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LambdaExpr",
          "package": "egison",
          "signature": "LambdaExpr [String] EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LambdaExpr",
          "normalized": "LambdaExpr[String]EgisonExpr",
          "package": "egison",
          "partial": "Lambda Expr",
          "signature": "LambdaExpr[String]EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LambdaExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LetExpr",
          "package": "egison",
          "signature": "LetExpr [BindingExpr] EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LetExpr",
          "normalized": "LetExpr[BindingExpr]EgisonExpr",
          "package": "egison",
          "partial": "Let Expr",
          "signature": "LetExpr[BindingExpr]EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LetExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LetPat",
          "package": "egison",
          "signature": "LetPat [BindingExpr] EgisonPattern",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LetPat",
          "normalized": "LetPat[BindingExpr]EgisonPattern",
          "package": "egison",
          "partial": "Let Pat",
          "signature": "LetPat[BindingExpr]EgisonPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LetPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LetRecExpr",
          "package": "egison",
          "signature": "LetRecExpr [BindingExpr] EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LetRecExpr",
          "normalized": "LetRecExpr[BindingExpr]EgisonExpr",
          "package": "egison",
          "partial": "Let Rec Expr",
          "signature": "LetRecExpr[BindingExpr]EgisonExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LetRecExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Load",
          "package": "egison",
          "signature": "Load String",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Load",
          "package": "egison",
          "partial": "Load",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoadFile",
          "package": "egison",
          "signature": "LoadFile String",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoadFile",
          "package": "egison",
          "partial": "Load File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LoadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopContext",
          "package": "egison",
          "signature": "LoopContext LoopMode Binding (Bool, EgisonPattern) EgisonPattern EgisonPattern",
          "source": "src/Language-Egison-Types.html#LoopContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopContext",
          "normalized": "LoopContext LoopMode Binding(Bool,EgisonPattern)EgisonPattern EgisonPattern",
          "package": "egison",
          "partial": "Loop Context",
          "signature": "LoopContext LoopMode Binding(Bool,EgisonPattern)EgisonPattern EgisonPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LoopContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopPat",
          "package": "egison",
          "signature": "LoopPat LoopMode String LoopRange EgisonPattern EgisonPattern",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopPat",
          "package": "egison",
          "partial": "Loop Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LoopPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "LoopRange",
          "package": "egison",
          "signature": "LoopRange EgisonExpr EgisonPattern",
          "source": "src/Language-Egison-Types.html#LoopRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "LoopRange",
          "package": "egison",
          "partial": "Loop Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:LoopRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MAtom",
          "package": "egison",
          "signature": "MAtom EgisonPattern ObjectRef Matcher",
          "source": "src/Language-Egison-Types.html#MatchingTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MAtom",
          "package": "egison",
          "partial": "MAtom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MCons",
          "package": "egison",
          "signature": "MCons a (m (MList m a))",
          "source": "src/Language-Egison-Types.html#MList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MCons",
          "package": "egison",
          "partial": "MCons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MNil",
          "package": "egison",
          "signature": "MNil",
          "source": "src/Language-Egison-Types.html#MList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MNil",
          "package": "egison",
          "partial": "MNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MNode",
          "package": "egison",
          "signature": "MNode [PatternBinding] MatchingState",
          "source": "src/Language-Egison-Types.html#MatchingTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MNode",
          "normalized": "MNode[PatternBinding]MatchingState",
          "package": "egison",
          "partial": "MNode",
          "signature": "MNode[PatternBinding]MatchingState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MState",
          "package": "egison",
          "signature": "MState Env [LoopContext] [Binding] [MatchingTree]",
          "source": "src/Language-Egison-Types.html#MatchingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MState",
          "normalized": "MState Env[LoopContext][Binding][MatchingTree]",
          "package": "egison",
          "partial": "MState",
          "signature": "MState Env[LoopContext][Binding][MatchingTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Match",
          "package": "egison",
          "signature": "Match String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Match",
          "package": "egison",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchAllExpr",
          "package": "egison",
          "signature": "MatchAllExpr EgisonExpr EgisonExpr MatchClause",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchAllExpr",
          "package": "egison",
          "partial": "Match All Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatchAllExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchAllLambdaExpr",
          "package": "egison",
          "signature": "MatchAllLambdaExpr EgisonExpr MatchClause",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchAllLambdaExpr",
          "package": "egison",
          "partial": "Match All Lambda Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatchAllLambdaExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchExpr",
          "package": "egison",
          "signature": "MatchExpr EgisonExpr EgisonExpr [MatchClause]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchExpr",
          "normalized": "MatchExpr EgisonExpr EgisonExpr[MatchClause]",
          "package": "egison",
          "partial": "Match Expr",
          "signature": "MatchExpr EgisonExpr EgisonExpr[MatchClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatchExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatchLambdaExpr",
          "package": "egison",
          "signature": "MatchLambdaExpr EgisonExpr [MatchClause]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatchLambdaExpr",
          "normalized": "MatchLambdaExpr EgisonExpr[MatchClause]",
          "package": "egison",
          "partial": "Match Lambda Expr",
          "signature": "MatchLambdaExpr EgisonExpr[MatchClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatchLambdaExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatcherBFSExpr",
          "package": "egison",
          "signature": "MatcherBFSExpr MatcherInfo",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatcherBFSExpr",
          "package": "egison",
          "partial": "Matcher BFSExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatcherBFSExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "MatcherDFSExpr",
          "package": "egison",
          "signature": "MatcherDFSExpr MatcherInfo",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "MatcherDFSExpr",
          "package": "egison",
          "partial": "Matcher DFSExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:MatcherDFSExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NaiveMode",
          "package": "egison",
          "signature": "NaiveMode",
          "source": "src/Language-Egison-Types.html#LoopMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NaiveMode",
          "package": "egison",
          "partial": "Naive Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NaiveMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NextMatchAllExpr",
          "package": "egison",
          "signature": "NextMatchAllExpr EgisonExpr EgisonExpr MatchClause",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NextMatchAllExpr",
          "package": "egison",
          "partial": "Next Match All Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NextMatchAllExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NextMatchAllLambdaExpr",
          "package": "egison",
          "signature": "NextMatchAllLambdaExpr EgisonExpr MatchClause",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NextMatchAllLambdaExpr",
          "package": "egison",
          "partial": "Next Match All Lambda Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NextMatchAllLambdaExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NextMatchExpr",
          "package": "egison",
          "signature": "NextMatchExpr EgisonExpr EgisonExpr [MatchClause]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NextMatchExpr",
          "normalized": "NextMatchExpr EgisonExpr EgisonExpr[MatchClause]",
          "package": "egison",
          "partial": "Next Match Expr",
          "signature": "NextMatchExpr EgisonExpr EgisonExpr[MatchClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NextMatchExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NextMatchLambdaExpr",
          "package": "egison",
          "signature": "NextMatchLambdaExpr EgisonExpr [MatchClause]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NextMatchLambdaExpr",
          "normalized": "NextMatchLambdaExpr EgisonExpr[MatchClause]",
          "package": "egison",
          "partial": "Next Match Lambda Expr",
          "signature": "NextMatchLambdaExpr EgisonExpr[MatchClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NextMatchLambdaExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NotImplemented",
          "package": "egison",
          "signature": "NotImplemented String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NotImplemented",
          "package": "egison",
          "partial": "Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "NotPat",
          "package": "egison",
          "signature": "NotPat EgisonPattern",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "NotPat",
          "package": "egison",
          "partial": "Not Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:NotPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "OrPat",
          "package": "egison",
          "signature": "OrPat [EgisonPattern]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "OrPat",
          "normalized": "OrPat[EgisonPattern]",
          "package": "egison",
          "partial": "Or Pat",
          "signature": "OrPat[EgisonPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:OrPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDConsPat",
          "package": "egison",
          "signature": "PDConsPat PrimitiveDataPattern PrimitiveDataPattern",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDConsPat",
          "package": "egison",
          "partial": "PDCons Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDConsPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDConstantPat",
          "package": "egison",
          "signature": "PDConstantPat EgisonExpr",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDConstantPat",
          "package": "egison",
          "partial": "PDConstant Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDConstantPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDEmptyPat",
          "package": "egison",
          "signature": "PDEmptyPat",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDEmptyPat",
          "package": "egison",
          "partial": "PDEmpty Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDEmptyPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDInductivePat",
          "package": "egison",
          "signature": "PDInductivePat String [PrimitiveDataPattern]",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDInductivePat",
          "normalized": "PDInductivePat String[PrimitiveDataPattern]",
          "package": "egison",
          "partial": "PDInductive Pat",
          "signature": "PDInductivePat String[PrimitiveDataPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDInductivePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDPatVar",
          "package": "egison",
          "signature": "PDPatVar String",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDPatVar",
          "package": "egison",
          "partial": "PDPat Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDPatVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDSnocPat",
          "package": "egison",
          "signature": "PDSnocPat PrimitiveDataPattern PrimitiveDataPattern",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDSnocPat",
          "package": "egison",
          "partial": "PDSnoc Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDSnocPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PDWildCard",
          "package": "egison",
          "signature": "PDWildCard",
          "source": "src/Language-Egison-Types.html#PrimitiveDataPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PDWildCard",
          "package": "egison",
          "partial": "PDWild Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PDWildCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PPInductivePat",
          "package": "egison",
          "signature": "PPInductivePat String [PrimitivePatPattern]",
          "source": "src/Language-Egison-Types.html#PrimitivePatPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PPInductivePat",
          "normalized": "PPInductivePat String[PrimitivePatPattern]",
          "package": "egison",
          "partial": "PPInductive Pat",
          "signature": "PPInductivePat String[PrimitivePatPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PPInductivePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PPPatVar",
          "package": "egison",
          "signature": "PPPatVar",
          "source": "src/Language-Egison-Types.html#PrimitivePatPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PPPatVar",
          "package": "egison",
          "partial": "PPPat Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PPPatVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PPValuePat",
          "package": "egison",
          "signature": "PPValuePat String",
          "source": "src/Language-Egison-Types.html#PrimitivePatPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PPValuePat",
          "package": "egison",
          "partial": "PPValue Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PPValuePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PPWildCard",
          "package": "egison",
          "signature": "PPWildCard",
          "source": "src/Language-Egison-Types.html#PrimitivePatPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PPWildCard",
          "package": "egison",
          "partial": "PPWild Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PPWildCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Parser",
          "package": "egison",
          "signature": "Parser String",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Parser",
          "package": "egison",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PatVar",
          "package": "egison",
          "signature": "PatVar String",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PatVar",
          "package": "egison",
          "partial": "Pat Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PatVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PatternFunc",
          "package": "egison",
          "signature": "PatternFunc Env [String] EgisonPattern",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PatternFunc",
          "normalized": "PatternFunc Env[String]EgisonPattern",
          "package": "egison",
          "partial": "Pattern Func",
          "signature": "PatternFunc Env[String]EgisonPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PatternFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PatternFunctionExpr",
          "package": "egison",
          "signature": "PatternFunctionExpr [String] EgisonPattern",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PatternFunctionExpr",
          "normalized": "PatternFunctionExpr[String]EgisonPattern",
          "package": "egison",
          "partial": "Pattern Function Expr",
          "signature": "PatternFunctionExpr[String]EgisonPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PatternFunctionExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Port",
          "package": "egison",
          "signature": "Port Handle",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Port",
          "package": "egison",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PredPat",
          "package": "egison",
          "signature": "PredPat EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PredPat",
          "package": "egison",
          "partial": "Pred Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PredPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "PrimitiveFunc",
          "package": "egison",
          "signature": "PrimitiveFunc PrimitiveFunc",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "PrimitiveFunc",
          "package": "egison",
          "partial": "Primitive Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:PrimitiveFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Rational",
          "package": "egison",
          "signature": "Rational Rational",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Rational",
          "package": "egison",
          "partial": "Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "RationalExpr",
          "package": "egison",
          "signature": "RationalExpr Rational",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "RationalExpr",
          "package": "egison",
          "partial": "Rational Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:RationalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "SmartMode",
          "package": "egison",
          "signature": "SmartMode",
          "source": "src/Language-Egison-Types.html#LoopMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "SmartMode",
          "package": "egison",
          "partial": "Smart Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:SmartMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Something",
          "package": "egison",
          "signature": "Something",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Something",
          "package": "egison",
          "partial": "Something",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Something"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "SomethingExpr",
          "package": "egison",
          "signature": "SomethingExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "SomethingExpr",
          "package": "egison",
          "partial": "Something Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:SomethingExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "StrHash",
          "package": "egison",
          "signature": "StrHash (HashMap ByteString EgisonValue)",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "StrHash",
          "package": "egison",
          "partial": "Str Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:StrHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "StringExpr",
          "package": "egison",
          "signature": "StringExpr String",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "StringExpr",
          "package": "egison",
          "partial": "String Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:StringExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "SubCollectionExpr",
          "package": "egison",
          "signature": "SubCollectionExpr EgisonExpr",
          "source": "src/Language-Egison-Types.html#InnerExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "SubCollectionExpr",
          "package": "egison",
          "partial": "Sub Collection Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:SubCollectionExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Test",
          "package": "egison",
          "signature": "Test EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonTopExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Test",
          "package": "egison",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Thunk",
          "package": "egison",
          "signature": "Thunk (EgisonM WHNFData)",
          "source": "src/Language-Egison-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Thunk",
          "package": "egison",
          "partial": "Thunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Thunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Tuple",
          "package": "egison",
          "signature": "Tuple [EgisonValue]",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Tuple",
          "normalized": "Tuple[EgisonValue]",
          "package": "egison",
          "partial": "Tuple",
          "signature": "Tuple[EgisonValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "TupleExpr",
          "package": "egison",
          "signature": "TupleExpr [EgisonExpr]",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "TupleExpr",
          "normalized": "TupleExpr[EgisonExpr]",
          "package": "egison",
          "partial": "Tuple Expr",
          "signature": "TupleExpr[EgisonExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:TupleExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "TuplePat",
          "package": "egison",
          "signature": "TuplePat [EgisonPattern]",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "TuplePat",
          "normalized": "TuplePat[EgisonPattern]",
          "package": "egison",
          "partial": "Tuple Pat",
          "signature": "TuplePat[EgisonPattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:TuplePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "TypeMismatch",
          "package": "egison",
          "signature": "TypeMismatch String WHNFData",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "TypeMismatch",
          "package": "egison",
          "partial": "Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:TypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "UnboundVariable",
          "package": "egison",
          "signature": "UnboundVariable Var",
          "source": "src/Language-Egison-Types.html#EgisonError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "UnboundVariable",
          "package": "egison",
          "partial": "Unbound Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:UnboundVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Undefined",
          "package": "egison",
          "signature": "Undefined",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Undefined",
          "package": "egison",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "UndefinedExpr",
          "package": "egison",
          "signature": "UndefinedExpr",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "UndefinedExpr",
          "package": "egison",
          "partial": "Undefined Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:UndefinedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "UserMatcher",
          "package": "egison",
          "signature": "UserMatcher Env PMMode MatcherInfo",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "UserMatcher",
          "package": "egison",
          "partial": "User Matcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:UserMatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "Value",
          "package": "egison",
          "signature": "Value EgisonValue",
          "source": "src/Language-Egison-Types.html#WHNFData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "Value",
          "package": "egison",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "ValuePat",
          "package": "egison",
          "signature": "ValuePat EgisonExpr",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "ValuePat",
          "package": "egison",
          "partial": "Value Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:ValuePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "VarExpr",
          "package": "egison",
          "signature": "VarExpr String",
          "source": "src/Language-Egison-Types.html#EgisonExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "VarExpr",
          "package": "egison",
          "partial": "Var Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:VarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "VarPat",
          "package": "egison",
          "signature": "VarPat String",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "VarPat",
          "package": "egison",
          "partial": "Var Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:VarPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "WHNF",
          "package": "egison",
          "signature": "WHNF WHNFData",
          "source": "src/Language-Egison-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "WHNF",
          "package": "egison",
          "partial": "WHNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:WHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "WildCard",
          "package": "egison",
          "signature": "WildCard",
          "source": "src/Language-Egison-Types.html#EgisonPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "WildCard",
          "package": "egison",
          "partial": "Wild Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:WildCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "World",
          "package": "egison",
          "signature": "World",
          "source": "src/Language-Egison-Types.html#EgisonValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "World",
          "package": "egison",
          "partial": "World",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:World"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "extendEnv",
          "package": "egison",
          "signature": "Env -\u003e [Binding] -\u003e Env",
          "source": "src/Language-Egison-Types.html#extendEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "extendEnv",
          "normalized": "Env-\u003e[Binding]-\u003eEnv",
          "package": "egison",
          "partial": "Env",
          "signature": "Env-\u003e[Binding]-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:extendEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fresh",
          "package": "egison",
          "signature": "m String",
          "source": "src/Language-Egison-Types.html#fresh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fresh",
          "package": "egison",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromEgison",
          "package": "egison",
          "signature": "EgisonValue -\u003e EgisonM a",
          "source": "src/Language-Egison-Types.html#fromEgison",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromEgison",
          "normalized": "EgisonValue-\u003eEgisonM a",
          "package": "egison",
          "partial": "Egison",
          "signature": "EgisonValue-\u003eEgisonM a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromEgison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromEgisonM",
          "package": "egison",
          "signature": "EgisonM a -\u003e IO (Either EgisonError a)",
          "source": "src/Language-Egison-Types.html#fromEgisonM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromEgisonM",
          "normalized": "EgisonM a-\u003eIO(Either EgisonError a)",
          "package": "egison",
          "partial": "Egison",
          "signature": "EgisonM a-\u003eIO(Either EgisonError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromEgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromList",
          "package": "egison",
          "signature": "[a] -\u003e MList m a",
          "source": "src/Language-Egison-Types.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromList",
          "normalized": "[a]-\u003eMList b a",
          "package": "egison",
          "partial": "List",
          "signature": "[a]-\u003eMList m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromMList",
          "package": "egison",
          "signature": "MList m a -\u003e m [a]",
          "source": "src/Language-Egison-Types.html#fromMList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromMList",
          "normalized": "MList a b-\u003ea[b]",
          "package": "egison",
          "partial": "MList",
          "signature": "MList m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromMList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromSeq",
          "package": "egison",
          "signature": "Seq a -\u003e MList m a",
          "source": "src/Language-Egison-Types.html#fromSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromSeq",
          "normalized": "Seq a-\u003eMList b a",
          "package": "egison",
          "partial": "Seq",
          "signature": "Seq a-\u003eMList m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "fromWHNF",
          "package": "egison",
          "signature": "WHNFData -\u003e EgisonM a",
          "source": "src/Language-Egison-Types.html#fromWHNF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "fromWHNF",
          "normalized": "WHNFData-\u003eEgisonM a",
          "package": "egison",
          "partial": "WHNF",
          "signature": "WHNFData-\u003eEgisonM a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:fromWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "liftEgisonM",
          "package": "egison",
          "signature": "Fresh (Either EgisonError a) -\u003e EgisonM a",
          "source": "src/Language-Egison-Types.html#liftEgisonM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "liftEgisonM",
          "normalized": "Fresh(Either EgisonError a)-\u003eEgisonM a",
          "package": "egison",
          "partial": "Egison",
          "signature": "Fresh(Either EgisonError a)-\u003eEgisonM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:liftEgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "liftError",
          "package": "egison",
          "signature": "Either e a -\u003e m a",
          "source": "src/Language-Egison-Types.html#liftError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "liftError",
          "normalized": "Either a b-\u003ec b",
          "package": "egison",
          "partial": "Error",
          "signature": "Either e a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:liftError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "mappend",
          "package": "egison",
          "signature": "MList m a -\u003e m (MList m a) -\u003e m (MList m a)",
          "source": "src/Language-Egison-Types.html#mappend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "mappend",
          "normalized": "MList a b-\u003ea(MList a b)-\u003ea(MList a b)",
          "package": "egison",
          "signature": "MList m a-\u003em(MList m a)-\u003em(MList m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "matchFail",
          "package": "egison",
          "signature": "MatchM a",
          "source": "src/Language-Egison-Types.html#matchFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "matchFail",
          "package": "egison",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:matchFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "mconcat",
          "package": "egison",
          "signature": "MList m (MList m a) -\u003e m (MList m a)",
          "source": "src/Language-Egison-Types.html#mconcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "mconcat",
          "normalized": "MList a(MList a b)-\u003ea(MList a b)",
          "package": "egison",
          "signature": "MList m(MList m a)-\u003em(MList m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "mfoldr",
          "package": "egison",
          "signature": "(a -\u003e m b -\u003e m b) -\u003e m b -\u003e MList m a -\u003e m b",
          "source": "src/Language-Egison-Types.html#mfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "mfoldr",
          "normalized": "(a-\u003eb c-\u003eb c)-\u003eb c-\u003eMList b a-\u003eb c",
          "package": "egison",
          "signature": "(a-\u003em b-\u003em b)-\u003em b-\u003eMList m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:mfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "mfor",
          "package": "egison",
          "signature": "MList m a -\u003e (a -\u003e m b) -\u003e m (MList m b)",
          "source": "src/Language-Egison-Types.html#mfor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "mfor",
          "normalized": "MList a b-\u003e(b-\u003ea c)-\u003ea(MList a c)",
          "package": "egison",
          "signature": "MList m a-\u003e(a-\u003em b)-\u003em(MList m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:mfor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "mmap",
          "package": "egison",
          "signature": "(a -\u003e m b) -\u003e MList m a -\u003e m (MList m b)",
          "source": "src/Language-Egison-Types.html#mmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "mmap",
          "normalized": "(a-\u003eb c)-\u003eMList b a-\u003eb(MList b c)",
          "package": "egison",
          "signature": "(a-\u003em b)-\u003eMList m a-\u003em(MList m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:mmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "msingleton",
          "package": "egison",
          "signature": "a -\u003e MList m a",
          "source": "src/Language-Egison-Types.html#msingleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "msingleton",
          "normalized": "a-\u003eMList b a",
          "package": "egison",
          "signature": "a-\u003eMList m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:msingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "nullEnv",
          "package": "egison",
          "signature": "Env",
          "source": "src/Language-Egison-Types.html#nullEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "nullEnv",
          "package": "egison",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:nullEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "pmMode",
          "package": "egison",
          "signature": "Matcher -\u003e PMMode",
          "source": "src/Language-Egison-Types.html#pmMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "pmMode",
          "normalized": "Matcher-\u003ePMMode",
          "package": "egison",
          "partial": "Mode",
          "signature": "Matcher-\u003ePMMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:pmMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "refVar",
          "package": "egison",
          "signature": "Env -\u003e Var -\u003e EgisonM ObjectRef",
          "source": "src/Language-Egison-Types.html#refVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "refVar",
          "normalized": "Env-\u003eVar-\u003eEgisonM ObjectRef",
          "package": "egison",
          "partial": "Var",
          "signature": "Env-\u003eVar-\u003eEgisonM ObjectRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:refVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "runEgisonM",
          "package": "egison",
          "signature": "EgisonM a -\u003e FreshT IO (Either EgisonError a)",
          "source": "src/Language-Egison-Types.html#runEgisonM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "runEgisonM",
          "normalized": "EgisonM a-\u003eFreshT IO(Either EgisonError a)",
          "package": "egison",
          "partial": "Egison",
          "signature": "EgisonM a-\u003eFreshT IO(Either EgisonError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:runEgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "runFreshT",
          "package": "egison",
          "signature": "Int -\u003e FreshT m a -\u003e m (a, Int)",
          "source": "src/Language-Egison-Types.html#runFreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "runFreshT",
          "normalized": "Int-\u003eFreshT a b-\u003ea(b,Int)",
          "package": "egison",
          "partial": "Fresh",
          "signature": "Int-\u003eFreshT m a-\u003em(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:runFreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "toEgison",
          "package": "egison",
          "signature": "a -\u003e EgisonValue",
          "source": "src/Language-Egison-Types.html#toEgison",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "toEgison",
          "normalized": "a-\u003eEgisonValue",
          "package": "egison",
          "partial": "Egison",
          "signature": "a-\u003eEgisonValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:toEgison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "toWHNF",
          "package": "egison",
          "signature": "a -\u003e WHNFData",
          "source": "src/Language-Egison-Types.html#toWHNF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "toWHNF",
          "normalized": "a-\u003eWHNFData",
          "package": "egison",
          "partial": "WHNF",
          "signature": "a-\u003eWHNFData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:toWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "unEgisonM",
          "package": "egison",
          "signature": "ErrorT EgisonError (FreshT IO) a",
          "source": "src/Language-Egison-Types.html#EgisonM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "unEgisonM",
          "package": "egison",
          "partial": "Egison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:unEgisonM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Egison.Types",
          "name": "unFreshT",
          "package": "egison",
          "signature": "StateT Int m a",
          "source": "src/Language-Egison-Types.html#FreshT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Egison Types",
          "module": "Language.Egison.Types",
          "name": "unFreshT",
          "package": "egison",
          "partial": "Fresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Types.html#v:unFreshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison.Util",
          "name": "Util",
          "package": "egison",
          "source": "src/Language-Egison-Util.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utility functions",
          "hierarchy": "Language Egison Util",
          "module": "Language.Egison.Util",
          "name": "Util",
          "package": "egison",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete Egison keywords\n\u003c/p\u003e",
          "module": "Language.Egison.Util",
          "name": "completeEgison",
          "package": "egison",
          "signature": "CompletionFunc m",
          "source": "src/Language-Egison-Util.html#completeEgison",
          "type": "function"
        },
        "index": {
          "description": "Complete Egison keywords",
          "hierarchy": "Language Egison Util",
          "module": "Language.Egison.Util",
          "name": "completeEgison",
          "package": "egison",
          "partial": "Egison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Util.html#v:completeEgison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Egison expression from the prompt. We can handle multiline input.\n\u003c/p\u003e",
          "module": "Language.Egison.Util",
          "name": "getEgisonExpr",
          "package": "egison",
          "signature": "String -\u003e InputT IO (Maybe (Either (String, EgisonTopExpr) (String, EgisonExpr)))",
          "source": "src/Language-Egison-Util.html#getEgisonExpr",
          "type": "function"
        },
        "index": {
          "description": "Get Egison expression from the prompt We can handle multiline input",
          "hierarchy": "Language Egison Util",
          "module": "Language.Egison.Util",
          "name": "getEgisonExpr",
          "normalized": "String-\u003eInputT IO(Maybe(Either(String,EgisonTopExpr)(String,EgisonExpr)))",
          "package": "egison",
          "partial": "Egison Expr",
          "signature": "String-\u003eInputT IO(Maybe(Either(String,EgisonTopExpr)(String,EgisonExpr)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Util.html#v:getEgisonExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Egison expression from the prompt. We can handle multiline input.\n\u003c/p\u003e",
          "module": "Language.Egison.Util",
          "name": "getEgisonExprOrNewLine",
          "package": "egison",
          "signature": "String -\u003e InputT IO (Either (Maybe String) (Either (String, EgisonTopExpr) (String, EgisonExpr)))",
          "source": "src/Language-Egison-Util.html#getEgisonExprOrNewLine",
          "type": "function"
        },
        "index": {
          "description": "Get Egison expression from the prompt We can handle multiline input",
          "hierarchy": "Language Egison Util",
          "module": "Language.Egison.Util",
          "name": "getEgisonExprOrNewLine",
          "normalized": "String-\u003eInputT IO(Either(Maybe String)(Either(String,EgisonTopExpr)(String,EgisonExpr)))",
          "package": "egison",
          "partial": "Egison Expr Or New Line",
          "signature": "String-\u003eInputT IO(Either(Maybe String)(Either(String,EgisonTopExpr)(String,EgisonExpr)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison-Util.html#v:getEgisonExprOrNewLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the top module of Egison.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Egison",
          "name": "Egison",
          "package": "egison",
          "source": "src/Language-Egison.html",
          "type": "module"
        },
        "index": {
          "description": "This is the top module of Egison",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "Egison",
          "package": "egison",
          "partial": "Egison",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval an Egison expression\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "evalEgisonExpr",
          "package": "egison",
          "signature": "Env -\u003e EgisonExpr -\u003e IO (Either EgisonError EgisonValue)",
          "source": "src/Language-Egison.html#evalEgisonExpr",
          "type": "function"
        },
        "index": {
          "description": "eval an Egison expression",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "evalEgisonExpr",
          "normalized": "Env-\u003eEgisonExpr-\u003eIO(Either EgisonError EgisonValue)",
          "package": "egison",
          "partial": "Egison Expr",
          "signature": "Env-\u003eEgisonExpr-\u003eIO(Either EgisonError EgisonValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:evalEgisonExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval an Egison top expression\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "evalEgisonTopExpr",
          "package": "egison",
          "signature": "Env -\u003e EgisonTopExpr -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#evalEgisonTopExpr",
          "type": "function"
        },
        "index": {
          "description": "eval an Egison top expression",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "evalEgisonTopExpr",
          "normalized": "Env-\u003eEgisonTopExpr-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison Top Expr",
          "signature": "Env-\u003eEgisonTopExpr-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:evalEgisonTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval Egison top expressions\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "evalEgisonTopExprs",
          "package": "egison",
          "signature": "Env -\u003e [EgisonTopExpr] -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#evalEgisonTopExprs",
          "type": "function"
        },
        "index": {
          "description": "eval Egison top expressions",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "evalEgisonTopExprs",
          "normalized": "Env-\u003e[EgisonTopExpr]-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison Top Exprs",
          "signature": "Env-\u003e[EgisonTopExpr]-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:evalEgisonTopExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment that contains core libraries\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "initialEnv",
          "package": "egison",
          "signature": "IO Env",
          "source": "src/Language-Egison.html#initialEnv",
          "type": "function"
        },
        "index": {
          "description": "Environment that contains core libraries",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "initialEnv",
          "package": "egison",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:initialEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment that contains core libraries without IO primitives\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "initialEnvNoIO",
          "package": "egison",
          "signature": "IO Env",
          "source": "src/Language-Egison.html#initialEnvNoIO",
          "type": "function"
        },
        "index": {
          "description": "Environment that contains core libraries without IO primitives",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "initialEnvNoIO",
          "package": "egison",
          "partial": "Env No IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:initialEnvNoIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eload an Egison file\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "loadEgisonFile",
          "package": "egison",
          "signature": "Env -\u003e FilePath -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#loadEgisonFile",
          "type": "function"
        },
        "index": {
          "description": "load an Egison file",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "loadEgisonFile",
          "normalized": "Env-\u003eFilePath-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison File",
          "signature": "Env-\u003eFilePath-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:loadEgisonFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eload an Egison library\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "loadEgisonLibrary",
          "package": "egison",
          "signature": "Env -\u003e FilePath -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#loadEgisonLibrary",
          "type": "function"
        },
        "index": {
          "description": "load an Egison library",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "loadEgisonLibrary",
          "normalized": "Env-\u003eFilePath-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison Library",
          "signature": "Env-\u003eFilePath-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:loadEgisonLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval an Egison expression. Input is a Haskell string.\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "runEgisonExpr",
          "package": "egison",
          "signature": "Env -\u003e String -\u003e IO (Either EgisonError EgisonValue)",
          "source": "src/Language-Egison.html#runEgisonExpr",
          "type": "function"
        },
        "index": {
          "description": "eval an Egison expression Input is Haskell string",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "runEgisonExpr",
          "normalized": "Env-\u003eString-\u003eIO(Either EgisonError EgisonValue)",
          "package": "egison",
          "partial": "Egison Expr",
          "signature": "Env-\u003eString-\u003eIO(Either EgisonError EgisonValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:runEgisonExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval an Egison top expression. Input is a Haskell string.\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "runEgisonTopExpr",
          "package": "egison",
          "signature": "Env -\u003e String -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#runEgisonTopExpr",
          "type": "function"
        },
        "index": {
          "description": "eval an Egison top expression Input is Haskell string",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "runEgisonTopExpr",
          "normalized": "Env-\u003eString-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison Top Expr",
          "signature": "Env-\u003eString-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:runEgisonTopExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeval Egison top expressions. Input is a Haskell string.\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "runEgisonTopExprs",
          "package": "egison",
          "signature": "Env -\u003e String -\u003e IO (Either EgisonError Env)",
          "source": "src/Language-Egison.html#runEgisonTopExprs",
          "type": "function"
        },
        "index": {
          "description": "eval Egison top expressions Input is Haskell string",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "runEgisonTopExprs",
          "normalized": "Env-\u003eString-\u003eIO(Either EgisonError Env)",
          "package": "egison",
          "partial": "Egison Top Exprs",
          "signature": "Env-\u003eString-\u003eIO(Either EgisonError Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:runEgisonTopExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion number\n\u003c/p\u003e",
          "module": "Language.Egison",
          "name": "version",
          "package": "egison",
          "signature": "Version",
          "source": "src/Language-Egison.html#version",
          "type": "function"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "Language Egison",
          "module": "Language.Egison",
          "name": "version",
          "package": "egison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/egison/docs/Language-Egison.html#v:version"
      }
    }
  ]
]