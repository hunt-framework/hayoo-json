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
        "word": "citation-resolve"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "Internal",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "Internal",
          "package": "citation-resolve",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure that carries the resolved references.  Since\n   the mapping \u003ccode\u003eReference -\u003e BibTeX\u003c/code\u003e is not the inverse of \n   \u003ccode\u003eBibTeX -\u003e Reference\u003c/code\u003e for the version \u003ccode\u003eciteproc-hs-0.3.8\u003c/code\u003e and loses some\n   information, we choose to store the original BibTeX string in the Database,\n  rather  than \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "Database",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#Database",
          "type": "newtype"
        },
        "index": {
          "description": "The data structure that carries the resolved references Since the mapping Reference BibTeX is not the inverse of BibTeX Reference for the version citeproc-hs-0.3.8 and loses some information we choose to store the original BibTeX string in the Database rather than Reference",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "Database",
          "package": "citation-resolve",
          "partial": "Database",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lens for accessing the map within the Database.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "HasDatabase",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#HasDatabase",
          "type": "class"
        },
        "index": {
          "description": "The lens for accessing the map within the Database",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "HasDatabase",
          "package": "citation-resolve",
          "partial": "Has Database",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#t:HasDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolver Monad is a function that converts a key of type \u003ccode\u003ea\u003c/code\u003e to some\n other type \u003ccode\u003eb\u003c/code\u003e, which may fail with an error message.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "RM",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#RM",
          "type": "type"
        },
        "index": {
          "description": "Resolver Monad is function that converts key of type to some other type which may fail with an error message",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "RM",
          "package": "citation-resolve",
          "partial": "RM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#t:RM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.CSL.Input.Identifier.Internal\",\"Text.CSL.Input.Identifier\"]",
          "name": "Database",
          "package": "citation-resolve",
          "signature": "Database",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#Database",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:Database\",\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:Database\"]"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "Database",
          "package": "citation-resolve",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.CSL.Input.Identifier.Internal\",\"Text.CSL.Input.Identifier\"]",
          "name": "_databaseMap",
          "package": "citation-resolve",
          "signature": "Map String String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#Database",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:_databaseMap\",\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:_databaseMap\"]"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "_databaseMap",
          "package": "citation-resolve",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:_databaseMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "database",
          "package": "citation-resolve",
          "signature": "Lens' t Database",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#database",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "database",
          "package": "citation-resolve",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "databaseMap",
          "package": "citation-resolve",
          "signature": "Lens' t (Map String String)",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#databaseMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "databaseMap",
          "package": "citation-resolve",
          "partial": "Map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:databaseMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea safer way to get data file name.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "getDataFileName",
          "package": "citation-resolve",
          "signature": "String -\u003e IO String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#getDataFileName",
          "type": "function"
        },
        "index": {
          "description": "safer way to get data file name",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "getDataFileName",
          "normalized": "String-\u003eIO String",
          "package": "citation-resolve",
          "partial": "Data File Name",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:getDataFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform possibly failing IO within a monad\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "liftIOE",
          "package": "citation-resolve",
          "signature": "IO (Either a b) -\u003e EitherT a m b",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#liftIOE",
          "type": "function"
        },
        "index": {
          "description": "Perform possibly failing IO within monad",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "liftIOE",
          "normalized": "IO(Either a b)-\u003eEitherT a c b",
          "package": "citation-resolve",
          "partial": "IOE",
          "signature": "IO(Either a b)-\u003eEitherT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:liftIOE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveArXiv",
          "package": "citation-resolve",
          "signature": "RM m String String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveArXiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveArXiv",
          "package": "citation-resolve",
          "partial": "Ar Xiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveArXiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveBibcode",
          "package": "citation-resolve",
          "signature": "RM m String String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveBibcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveBibcode",
          "package": "citation-resolve",
          "partial": "Bibcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveBibcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a Bibtex entry that contains single reference.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveBibtex",
          "package": "citation-resolve",
          "signature": "String -\u003e RM m String Reference",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveBibtex",
          "type": "function"
        },
        "index": {
          "description": "parse Bibtex entry that contains single reference",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveBibtex",
          "normalized": "String-\u003eRM a String Reference",
          "package": "citation-resolve",
          "partial": "Bibtex",
          "signature": "String-\u003eRM m String Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveBibtex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresolvers for specific document IDs.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveDOI",
          "package": "citation-resolve",
          "signature": "RM m String String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveDOI",
          "type": "function"
        },
        "index": {
          "description": "resolvers for specific document IDs",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveDOI",
          "package": "citation-resolve",
          "partial": "DOI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveDOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresolve a document url to a \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e, or emits a error\n   message with reason why it fails.\n\u003c/p\u003e",
          "module": "[\"Text.CSL.Input.Identifier.Internal\",\"Text.CSL.Input.Identifier\"]",
          "name": "resolveEither",
          "package": "citation-resolve",
          "signature": "String -\u003e EitherT String m Reference",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveEither",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveEither\",\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:resolveEither\"]"
        },
        "index": {
          "description": "resolve document url to Reference or emits error message with reason why it fails",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveEither",
          "normalized": "String-\u003eEitherT String a Reference",
          "package": "citation-resolve",
          "partial": "Either",
          "signature": "String-\u003eEitherT String m Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveISBN",
          "package": "citation-resolve",
          "signature": "RM m String String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#resolveISBN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "resolveISBN",
          "package": "citation-resolve",
          "partial": "ISBN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:resolveISBN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString version of replace.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "stringReplace",
          "package": "citation-resolve",
          "signature": "String -\u003e String -\u003e String -\u003e String",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#stringReplace",
          "type": "function"
        },
        "index": {
          "description": "String version of replace",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "stringReplace",
          "normalized": "String-\u003eString-\u003eString-\u003eString",
          "package": "citation-resolve",
          "partial": "Replace",
          "signature": "String-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:stringReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcecute the program using the given database file. The file will be\n   created if it didn't exist.\n\u003c/p\u003e",
          "module": "[\"Text.CSL.Input.Identifier.Internal\",\"Text.CSL.Input.Identifier\"]",
          "name": "withDatabaseFile",
          "package": "citation-resolve",
          "signature": "FilePath -\u003e m a -\u003e m a",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#withDatabaseFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:withDatabaseFile\",\"http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:withDatabaseFile\"]"
        },
        "index": {
          "description": "Excecute the program using the given database file The file will be created if it didn exist",
          "hierarchy": "Text CSL Input Identifier Internal",
          "module": "Text.CSL.Input.Identifier.Internal",
          "name": "withDatabaseFile",
          "normalized": "FilePath-\u003ea b-\u003ea b",
          "package": "citation-resolve",
          "partial": "Database File",
          "signature": "FilePath-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier-Internal.html#v:withDatabaseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides a way to convert document identifiers, such\n  as DOIs, ISBNs, arXiv IDs to bibliographic references.\n\u003c/p\u003e\u003cp\u003eEach type of identifiers will be converted via internet services\n  to a bibliographic record of type \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e , which in\n  turn can be rendered in various format using \u003ccode\u003eciteproc-hs\u003c/code\u003e package\n  \u003ca\u003ehackage.haskell.org/package/citeproc-hs\u003c/a\u003e .\n\u003c/p\u003e\u003cp\u003eMoreover, the server responses are cached in a local database,\n  making the server load as little as possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "Identifier",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides way to convert document identifiers such as DOIs ISBNs arXiv IDs to bibliographic references Each type of identifiers will be converted via internet services to bibliographic record of type Reference which in turn can be rendered in various format using citeproc-hs package hackage.haskell.org package citeproc-hs Moreover the server responses are cached in local database making the server load as little as possible",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "Identifier",
          "package": "citation-resolve",
          "partial": "Identifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure that carries the resolved references.  Since\n   the mapping \u003ccode\u003eReference -\u003e BibTeX\u003c/code\u003e is not the inverse of \n   \u003ccode\u003eBibTeX -\u003e Reference\u003c/code\u003e for the version \u003ccode\u003eciteproc-hs-0.3.8\u003c/code\u003e and loses some\n   information, we choose to store the original BibTeX string in the Database,\n  rather  than \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "Database",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#Database",
          "type": "newtype"
        },
        "index": {
          "description": "The data structure that carries the resolved references Since the mapping Reference BibTeX is not the inverse of BibTeX Reference for the version citeproc-hs-0.3.8 and loses some information we choose to store the original BibTeX string in the Database rather than Reference",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "Database",
          "package": "citation-resolve",
          "partial": "Database",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lens for accessing the map within the Database.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "HasDatabase",
          "package": "citation-resolve",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#HasDatabase",
          "type": "class"
        },
        "index": {
          "description": "The lens for accessing the map within the Database",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "HasDatabase",
          "package": "citation-resolve",
          "partial": "Has Database",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#t:HasDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier",
          "name": "database",
          "package": "citation-resolve",
          "signature": "Lens' t Database",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#database",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "database",
          "package": "citation-resolve",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSL.Input.Identifier",
          "name": "databaseMap",
          "package": "citation-resolve",
          "signature": "Lens' t (Map String String)",
          "source": "src/Text-CSL-Input-Identifier-Internal.html#databaseMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "databaseMap",
          "package": "citation-resolve",
          "partial": "Map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:databaseMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a document url to a \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e. returns an empty reference when someting fails.\n   prefix the document ID with one of \u003ca\u003earXiv:\u003c/a\u003e, \u003ca\u003edoi:\u003c/a\u003e, \u003ca\u003ebibcode:\u003c/a\u003e or \u003ca\u003eisbn:\u003c/a\u003e .\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo { ref \u003c- resolveDef \"arXiv:1204.4779\" ; putStrLn $ title ref }\n\u003c/code\u003e\u003c/strong\u003eParaiso: an automated tuning framework for explicit solvers of partial differential equations\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo { ref \u003c- resolveDef \"doi:10.1088/1749-4699/5/1/015003\" ; print $ author ref }\n\u003c/code\u003e\u003c/strong\u003e[Takayuki Muranushi]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo { ref \u003c- resolveDef \"bibcode:2012CS&D....5a5003M\" ; putStrLn $ containerTitle ref }\n\u003c/code\u003e\u003c/strong\u003eComputational Science and Discovery\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo { ref \u003c- resolveDef \"isbn:9784274068850\" ; putStrLn $ title ref }\n\u003c/code\u003e\u003c/strong\u003eSugoi hasukeru tanoshiku manab&#333;\n\u003c/pre\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "resolve",
          "package": "citation-resolve",
          "signature": "String -\u003e m Reference",
          "source": "src/Text-CSL-Input-Identifier.html#resolve",
          "type": "function"
        },
        "index": {
          "description": "Resolve document url to Reference returns an empty reference when someting fails prefix the document ID with one of arXiv doi bibcode or isbn do ref resolveDef arXiv putStrLn title ref Paraiso an automated tuning framework for explicit solvers of partial differential equations do ref resolveDef doi print author ref Takayuki Muranushi do ref resolveDef bibcode CS D....5a5003M putStrLn containerTitle ref Computational Science and Discovery do ref resolveDef isbn putStrLn title ref Sugoi hasukeru tanoshiku manab",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "resolve",
          "normalized": "String-\u003ea Reference",
          "package": "citation-resolve",
          "signature": "String-\u003em Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:resolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve the document id using the default database.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "resolveDef",
          "package": "citation-resolve",
          "signature": "String -\u003e IO Reference",
          "source": "src/Text-CSL-Input-Identifier.html#resolveDef",
          "type": "function"
        },
        "index": {
          "description": "Resolve the document id using the default database",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "resolveDef",
          "normalized": "String-\u003eIO Reference",
          "package": "citation-resolve",
          "partial": "Def",
          "signature": "String-\u003eIO Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:resolveDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the resolver database and generate the BibTeX item string for the document,\n   using the url as the citation-key.\n\u003c/p\u003e",
          "module": "Text.CSL.Input.Identifier",
          "name": "toBibTeXItem",
          "package": "citation-resolve",
          "signature": "String -\u003e m Text",
          "source": "src/Text-CSL-Input-Identifier.html#toBibTeXItem",
          "type": "function"
        },
        "index": {
          "description": "Access the resolver database and generate the BibTeX item string for the document using the url as the citation-key",
          "hierarchy": "Text CSL Input Identifier",
          "module": "Text.CSL.Input.Identifier",
          "name": "toBibTeXItem",
          "normalized": "String-\u003ea Text",
          "package": "citation-resolve",
          "partial": "Bib Te XItem",
          "signature": "String-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/citation-resolve/docs/Text-CSL-Input-Identifier.html#v:toBibTeXItem"
      }
    }
  ]
]