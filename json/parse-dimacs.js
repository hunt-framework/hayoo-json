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
        "word": "parse-dimacs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple module for parsing CNF files in DIMACS format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "ParseDIMACS",
          "package": "parse-dimacs",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html",
          "type": "module"
        },
        "index": {
          "description": "simple module for parsing CNF files in DIMACS format",
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "ParseDIMACS",
          "package": "parse-dimacs",
          "partial": "Parse DIMACS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "CNF",
          "package": "parse-dimacs",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#CNF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "CNF",
          "package": "parse-dimacs",
          "partial": "CNF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#t:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "Clause",
          "package": "parse-dimacs",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#Clause",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "Clause",
          "package": "parse-dimacs",
          "partial": "Clause",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#t:Clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "CNF",
          "package": "parse-dimacs",
          "signature": "CNF",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#CNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "CNF",
          "package": "parse-dimacs",
          "partial": "CNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "clauses",
          "package": "parse-dimacs",
          "signature": "[Clause]",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#CNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "clauses",
          "normalized": "[Clause]",
          "package": "parse-dimacs",
          "signature": "[Clause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:clauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of clauses in the problem as reported by the cnf header.\n\u003c/p\u003e",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "numClauses",
          "package": "parse-dimacs",
          "signature": "Int",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#CNF",
          "type": "function"
        },
        "index": {
          "description": "The number of clauses in the problem as reported by the cnf header",
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "numClauses",
          "package": "parse-dimacs",
          "partial": "Clauses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:numClauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of variables in the problem as reported by the cnf header.\n\u003c/p\u003e",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "numVars",
          "package": "parse-dimacs",
          "signature": "Int",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#CNF",
          "type": "function"
        },
        "index": {
          "description": "The number of variables in the problem as reported by the cnf header",
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "numVars",
          "package": "parse-dimacs",
          "partial": "Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:numVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a byte string containing DIMACS CNF data.  The source name is only\n | used in error messages and may be the empty string.\n\u003c/p\u003e",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "parseByteString",
          "package": "parse-dimacs",
          "signature": "SourceName -\u003e ByteString -\u003e Either ParseError CNF",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#parseByteString",
          "type": "function"
        },
        "index": {
          "description": "Parse byte string containing DIMACS CNF data The source name is only used in error messages and may be the empty string",
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "parseByteString",
          "normalized": "SourceName-\u003eByteString-\u003eEither ParseError CNF",
          "package": "parse-dimacs",
          "partial": "Byte String",
          "signature": "SourceName-\u003eByteString-\u003eEither ParseError CNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:parseByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a file containing DIMACS CNF data.\n\u003c/p\u003e",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "parseFile",
          "package": "parse-dimacs",
          "signature": "FilePath -\u003e IO (Either ParseError CNF)",
          "source": "src/Language-CNF-Parse-ParseDIMACS.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Parse file containing DIMACS CNF data",
          "hierarchy": "Language CNF Parse ParseDIMACS",
          "module": "Language.CNF.Parse.ParseDIMACS",
          "name": "parseFile",
          "normalized": "FilePath-\u003eIO(Either ParseError CNF)",
          "package": "parse-dimacs",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either ParseError CNF)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parse-dimacs/docs/Language-CNF-Parse-ParseDIMACS.html#v:parseFile"
      }
    }
  ]
]