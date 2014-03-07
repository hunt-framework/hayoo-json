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
        "word": "uri"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "source": "src/Text-URI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "partial": "URI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a general universal resource identifier using\n  its component parts.\n\u003c/p\u003e\u003cp\u003eFor example, for the URI\n\u003c/p\u003e\u003cpre\u003e   foo://anonymous@www.haskell.org:42/ghc?query#frag\n\u003c/pre\u003e\u003cp\u003ethe components are:\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "source": "src/Text-URI.html#URI",
          "type": "data"
        },
        "index": {
          "description": "Represents general universal resource identifier using its component parts For example for the URI foo anonymous@www.haskell.org ghc query frag the components are",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "partial": "URI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "signature": "URI",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "URI",
          "package": "uri",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves \u003ca\u003e..\u003c/a\u003e and \u003ca\u003e.\u003c/a\u003e from path\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "dereferencePath",
          "package": "uri",
          "signature": "[String] -\u003e [String]",
          "source": "src/Text-URI.html#dereferencePath",
          "type": "function"
        },
        "index": {
          "description": "Removes and from path",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "dereferencePath",
          "normalized": "[String]-\u003e[String]",
          "package": "uri",
          "partial": "Path",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:dereferencePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edereferencePath for strings\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "dereferencePathString",
          "package": "uri",
          "signature": "String -\u003e String",
          "source": "src/Text-URI.html#dereferencePathString",
          "type": "function"
        },
        "index": {
          "description": "dereferencePath for strings",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "dereferencePathString",
          "normalized": "String-\u003eString",
          "package": "uri",
          "partial": "Path String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:dereferencePathString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes string, using predicate to determine whether character is allowed\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "escapeString",
          "package": "uri",
          "signature": "(Char -\u003e Bool) -\u003e String -\u003e String",
          "source": "src/Text-URI.html#escapeString",
          "type": "function"
        },
        "index": {
          "description": "Escapes string using predicate to determine whether character is allowed",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "escapeString",
          "normalized": "(Char-\u003eBool)-\u003eString-\u003eString",
          "package": "uri",
          "partial": "String",
          "signature": "(Char-\u003eBool)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:escapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if uri is a reference\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "isReference",
          "package": "uri",
          "signature": "URI -\u003e Bool",
          "source": "src/Text-URI.html#isReference",
          "type": "function"
        },
        "index": {
          "description": "Checks if uri is reference",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "isReference",
          "normalized": "URI-\u003eBool",
          "package": "uri",
          "partial": "Reference",
          "signature": "URI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:isReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if uri is relative\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "isRelative",
          "package": "uri",
          "signature": "URI -\u003e Bool",
          "source": "src/Text-URI.html#isRelative",
          "type": "function"
        },
        "index": {
          "description": "Checks if uri is relative",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "isRelative",
          "normalized": "URI-\u003eBool",
          "package": "uri",
          "partial": "Relative",
          "signature": "URI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emergePaths for strings\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "mergePathStrings",
          "package": "uri",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Text-URI.html#mergePathStrings",
          "type": "function"
        },
        "index": {
          "description": "mergePaths for strings",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "mergePathStrings",
          "normalized": "String-\u003eString-\u003eString",
          "package": "uri",
          "partial": "Path Strings",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:mergePathStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two paths\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "mergePaths",
          "package": "uri",
          "signature": "[String] -\u003e [String] -\u003e [String]",
          "source": "src/Text-URI.html#mergePaths",
          "type": "function"
        },
        "index": {
          "description": "Merges two paths",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "mergePaths",
          "normalized": "[String]-\u003e[String]-\u003e[String]",
          "package": "uri",
          "partial": "Paths",
          "signature": "[String]-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:mergePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emergeURIs for strings\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "mergeURIStrings",
          "package": "uri",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Text-URI.html#mergeURIStrings",
          "type": "function"
        },
        "index": {
          "description": "mergeURIs for strings",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "mergeURIStrings",
          "normalized": "String-\u003eString-\u003eString",
          "package": "uri",
          "partial": "URIStrings",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:mergeURIStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two URIs\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "mergeURIs",
          "package": "uri",
          "signature": "URI-\u003e URI-\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Merges two URIs",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "mergeURIs",
          "normalized": "URI-\u003eURI-\u003eURI",
          "package": "uri",
          "partial": "URIs",
          "signature": "URI-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:mergeURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank URI\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "nullURI",
          "package": "uri",
          "signature": "URI",
          "source": "src/Text-URI.html#nullURI",
          "type": "function"
        },
        "index": {
          "description": "Blank URI",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "nullURI",
          "package": "uri",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:nullURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if character is OK in fragment\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "okInFragment",
          "package": "uri",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-URI.html#okInFragment",
          "type": "function"
        },
        "index": {
          "description": "Checks if character is OK in fragment",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "okInFragment",
          "normalized": "Char-\u003eBool",
          "package": "uri",
          "partial": "In Fragment",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:okInFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if character is OK in path\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "okInPath",
          "package": "uri",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-URI.html#okInPath",
          "type": "function"
        },
        "index": {
          "description": "Checks if character is OK in path",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "okInPath",
          "normalized": "Char-\u003eBool",
          "package": "uri",
          "partial": "In Path",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:okInPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if character is OK in query\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "okInQuery",
          "package": "uri",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-URI.html#okInQuery",
          "type": "function"
        },
        "index": {
          "description": "Checks if character is OK in query",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "okInQuery",
          "normalized": "Char-\u003eBool",
          "package": "uri",
          "partial": "In Query",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:okInQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if character is OK in urlencoded query item\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "okInQueryItem",
          "package": "uri",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-URI.html#okInQueryItem",
          "type": "function"
        },
        "index": {
          "description": "Checks if character is OK in urlencoded query item",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "okInQueryItem",
          "normalized": "Char-\u003eBool",
          "package": "uri",
          "partial": "In Query Item",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:okInQueryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if character is OK in userinfo\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "okInUserinfo",
          "package": "uri",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-URI.html#okInUserinfo",
          "type": "function"
        },
        "index": {
          "description": "Checks if character is OK in userinfo",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "okInUserinfo",
          "normalized": "Char-\u003eBool",
          "package": "uri",
          "partial": "In Userinfo",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:okInUserinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes www-urlencoded query from key-value pairs\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "pairsToQuery",
          "package": "uri",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Text-URI.html#pairsToQuery",
          "type": "function"
        },
        "index": {
          "description": "Composes www-urlencoded query from key-value pairs",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "pairsToQuery",
          "normalized": "[(String,String)]-\u003eString",
          "package": "uri",
          "partial": "To Query",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:pairsToQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses URI\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "parseURI",
          "package": "uri",
          "signature": "String -\u003e Maybe URI",
          "source": "src/Text-URI.html#parseURI",
          "type": "function"
        },
        "index": {
          "description": "Parses URI",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "parseURI",
          "normalized": "String-\u003eMaybe URI",
          "package": "uri",
          "partial": "URI",
          "signature": "String-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:parseURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits path to segments\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "pathToSegments",
          "package": "uri",
          "signature": "String -\u003e [String]",
          "source": "src/Text-URI.html#pathToSegments",
          "type": "function"
        },
        "index": {
          "description": "Splits path to segments",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "pathToSegments",
          "normalized": "String-\u003e[String]",
          "package": "uri",
          "partial": "To Segments",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:pathToSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses www-urlencoded string to key-value pairs\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "queryToPairs",
          "package": "uri",
          "signature": "String -\u003e [(String, String)]",
          "source": "src/Text-URI.html#queryToPairs",
          "type": "function"
        },
        "index": {
          "description": "Parses www-urlencoded string to key-value pairs",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "queryToPairs",
          "normalized": "String-\u003e[(String,String)]",
          "package": "uri",
          "partial": "To Pairs",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:queryToPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins path segments, with escaping\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "segmentsToPath",
          "package": "uri",
          "signature": "[String] -\u003e String",
          "source": "src/Text-URI.html#segmentsToPath",
          "type": "function"
        },
        "index": {
          "description": "Joins path segments with escaping",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "segmentsToPath",
          "normalized": "[String]-\u003eString",
          "package": "uri",
          "partial": "To Path",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:segmentsToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnescapes percent-sequences\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "unescapeString",
          "package": "uri",
          "signature": "String -\u003e String",
          "source": "src/Text-URI.html#unescapeString",
          "type": "function"
        },
        "index": {
          "description": "Unescapes percent-sequences",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "unescapeString",
          "normalized": "String-\u003eString",
          "package": "uri",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:unescapeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efrag\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriFragment",
          "package": "uri",
          "signature": "Maybe String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "frag",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriFragment",
          "package": "uri",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e/ghc\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriPath",
          "package": "uri",
          "signature": "String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "ghc",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriPath",
          "package": "uri",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for extracting path segments\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "uriPathSegments",
          "package": "uri",
          "signature": "URI -\u003e [String]",
          "source": "src/Text-URI.html#uriPathSegments",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for extracting path segments",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriPathSegments",
          "normalized": "URI-\u003e[String]",
          "package": "uri",
          "partial": "Path Segments",
          "signature": "URI-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriPathSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e42\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriPort",
          "package": "uri",
          "signature": "Maybe Integer",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriPort",
          "package": "uri",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003equery\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriQuery",
          "package": "uri",
          "signature": "Maybe String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "query",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriQuery",
          "package": "uri",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for extracting www-urlencoded data\n\u003c/p\u003e",
          "module": "Text.URI",
          "name": "uriQueryItems",
          "package": "uri",
          "signature": "URI -\u003e [(String, String)]",
          "source": "src/Text-URI.html#uriQueryItems",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for extracting www-urlencoded data",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriQueryItems",
          "normalized": "URI-\u003e[(String,String)]",
          "package": "uri",
          "partial": "Query Items",
          "signature": "URI-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriQueryItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ewww.haskell.org\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriRegName",
          "package": "uri",
          "signature": "Maybe String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "www.haskell.org",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriRegName",
          "package": "uri",
          "partial": "Reg Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriRegName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efoo\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriScheme",
          "package": "uri",
          "signature": "Maybe String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "foo",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriScheme",
          "package": "uri",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eanonymous\u003c/pre\u003e",
          "module": "Text.URI",
          "name": "uriUserInfo",
          "package": "uri",
          "signature": "Maybe String",
          "source": "src/Text-URI.html#URI",
          "type": "function"
        },
        "index": {
          "description": "anonymous",
          "hierarchy": "Text URI",
          "module": "Text.URI",
          "name": "uriUserInfo",
          "package": "uri",
          "partial": "User Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri/docs/Text-URI.html#v:uriUserInfo"
      }
    }
  ]
]