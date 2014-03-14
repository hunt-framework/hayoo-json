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
        "word": "HPath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Cabal",
          "name": "Cabal",
          "package": "HPath",
          "source": "src/HPath-Cabal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HPath Cabal",
          "module": "HPath.Cabal",
          "name": "Cabal",
          "package": "HPath",
          "partial": "Cabal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Cabal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a Cabal file in the given directory and tell us what extensions are\n    in play and what the source directories are.\n\u003c/p\u003e",
          "module": "HPath.Cabal",
          "name": "info",
          "package": "HPath",
          "signature": "FilePath -\u003e IO ([Extension], [FilePath])",
          "source": "src/HPath-Cabal.html#info",
          "type": "function"
        },
        "index": {
          "description": "Open Cabal file in the given directory and tell us what extensions are in play and what the source directories are",
          "hierarchy": "HPath Cabal",
          "module": "HPath.Cabal",
          "name": "info",
          "normalized": "FilePath-\u003eIO([Extension],[FilePath])",
          "package": "HPath",
          "signature": "FilePath-\u003eIO([Extension],[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Cabal.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "Classes",
          "package": "HPath",
          "source": "src/HPath-HaskellSrcExts-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "Classes",
          "package": "HPath",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "HasModuleName",
          "package": "HPath",
          "source": "src/HPath-HaskellSrcExts-Classes.html#HasModuleName",
          "type": "class"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "HasModuleName",
          "package": "HPath",
          "partial": "Has Module Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#t:HasModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "MentionsNames",
          "package": "HPath",
          "source": "src/HPath-HaskellSrcExts-Classes.html#MentionsNames",
          "type": "class"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "MentionsNames",
          "package": "HPath",
          "partial": "Mentions Names",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#t:MentionsNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "SearchModule",
          "package": "HPath",
          "source": "src/HPath-HaskellSrcExts-Classes.html#SearchModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "SearchModule",
          "package": "HPath",
          "partial": "Search Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#t:SearchModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "declarations",
          "package": "HPath",
          "signature": "Module t -\u003e ast t -\u003e [Decl t]",
          "source": "src/HPath-HaskellSrcExts-Classes.html#declarations",
          "type": "method"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "declarations",
          "normalized": "Module a-\u003eb a-\u003e[Decl a]",
          "package": "HPath",
          "signature": "Module t-\u003east t-\u003e[Decl t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#v:declarations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "match",
          "package": "HPath",
          "signature": "ast t -\u003e Name t -\u003e Bool",
          "source": "src/HPath-HaskellSrcExts-Classes.html#match",
          "type": "method"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "match",
          "normalized": "a b-\u003eName b-\u003eBool",
          "package": "HPath",
          "signature": "ast t-\u003eName t-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "module_name",
          "package": "HPath",
          "signature": "ast t -\u003e String",
          "source": "src/HPath-HaskellSrcExts-Classes.html#module_name",
          "type": "method"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts Classes",
          "module": "HPath.HaskellSrcExts.Classes",
          "name": "module_name",
          "normalized": "a b-\u003eString",
          "package": "HPath",
          "signature": "ast t-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts-Classes.html#v:module_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts",
          "name": "HaskellSrcExts",
          "package": "HPath",
          "source": "src/HPath-HaskellSrcExts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts",
          "module": "HPath.HaskellSrcExts",
          "name": "HaskellSrcExts",
          "package": "HPath",
          "partial": "Haskell Src Exts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts",
          "name": "extension_conversion",
          "package": "HPath",
          "signature": "[Extension] -\u003e [Extension]",
          "source": "src/HPath-HaskellSrcExts.html#extension_conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts",
          "module": "HPath.HaskellSrcExts",
          "name": "extension_conversion",
          "normalized": "[Extension]-\u003e[Extension]",
          "package": "HPath",
          "signature": "[Extension]-\u003e[Extension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts.html#v:extension_conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts",
          "name": "modules",
          "package": "HPath",
          "signature": "[FilePath] -\u003e [Extension] -\u003e IO ([Module SrcSpanInfo], ([(SrcLoc, String)], [(FilePath, IOError)]))",
          "source": "src/HPath-HaskellSrcExts.html#modules",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts",
          "module": "HPath.HaskellSrcExts",
          "name": "modules",
          "normalized": "[FilePath]-\u003e[Extension]-\u003eIO([Module SrcSpanInfo],([(SrcLoc,String)],[(FilePath,IOError)]))",
          "package": "HPath",
          "signature": "[FilePath]-\u003e[Extension]-\u003eIO([Module SrcSpanInfo],([(SrcLoc,String)],[(FilePath,IOError)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts.html#v:modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts",
          "name": "qname",
          "package": "HPath",
          "signature": "Path -\u003e QName SrcSpanInfo",
          "source": "src/HPath-HaskellSrcExts.html#qname",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts",
          "module": "HPath.HaskellSrcExts",
          "name": "qname",
          "normalized": "Path-\u003eQName SrcSpanInfo",
          "package": "HPath",
          "signature": "Path-\u003eQName SrcSpanInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts.html#v:qname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.HaskellSrcExts",
          "name": "search",
          "package": "HPath",
          "signature": "Path -\u003e [Module SrcSpanInfo] -\u003e [Decl SrcSpanInfo]",
          "source": "src/HPath-HaskellSrcExts.html#search",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath HaskellSrcExts",
          "module": "HPath.HaskellSrcExts",
          "name": "search",
          "normalized": "Path-\u003e[Module SrcSpanInfo]-\u003e[Decl SrcSpanInfo]",
          "package": "HPath",
          "signature": "Path-\u003e[Module SrcSpanInfo]-\u003e[Decl SrcSpanInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-HaskellSrcExts.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Hierarchy",
          "name": "Hierarchy",
          "package": "HPath",
          "source": "src/HPath-Hierarchy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HPath Hierarchy",
          "module": "HPath.Hierarchy",
          "name": "Hierarchy",
          "package": "HPath",
          "partial": "Hierarchy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Hierarchy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce file paths to search for this Haskell name, accomodating JHC style\n    paths as well as GHC style paths. The GHC style path comes first in order.\n\u003c/p\u003e",
          "module": "HPath.Hierarchy",
          "name": "paths",
          "package": "HPath",
          "signature": "Path -\u003e [[Char]]",
          "source": "src/HPath-Hierarchy.html#paths",
          "type": "function"
        },
        "index": {
          "description": "Produce file paths to search for this Haskell name accomodating JHC style paths as well as GHC style paths The GHC style path comes first in order",
          "hierarchy": "HPath Hierarchy",
          "module": "HPath.Hierarchy",
          "name": "paths",
          "normalized": "Path-\u003e[[Char]]",
          "package": "HPath",
          "signature": "Path-\u003e[[Char]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Hierarchy.html#v:paths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for Haskell. Not complete and just parses strings to strings. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "HPath.Parser.Lower",
          "name": "Lower",
          "package": "HPath",
          "source": "src/HPath-Parser-Lower.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for Haskell Not complete and just parses strings to strings",
          "hierarchy": "HPath Parser Lower",
          "module": "HPath.Parser.Lower",
          "name": "Lower",
          "package": "HPath",
          "partial": "Lower",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Parser-Lower.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Path",
          "name": "Path",
          "package": "HPath",
          "source": "src/HPath-Path.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HPath Path",
          "module": "HPath.Path",
          "name": "Path",
          "package": "HPath",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Path",
          "name": "Path",
          "package": "HPath",
          "source": "src/HPath-Path.html#Path",
          "type": "data"
        },
        "index": {
          "hierarchy": "HPath Path",
          "module": "HPath.Path",
          "name": "Path",
          "package": "HPath",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Path.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Path",
          "name": "Path",
          "package": "HPath",
          "signature": "Path [String] String String",
          "source": "src/HPath-Path.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath Path",
          "module": "HPath.Path",
          "name": "Path",
          "normalized": "Path[String]String String",
          "package": "HPath",
          "partial": "Path",
          "signature": "Path[String]String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Path.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Path",
          "name": "parse",
          "package": "HPath",
          "signature": "String -\u003e Either ParseError Path",
          "source": "src/HPath-Path.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath Path",
          "module": "HPath.Path",
          "name": "parse",
          "normalized": "String-\u003eEither ParseError Path",
          "package": "HPath",
          "signature": "String-\u003eEither ParseError Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Path.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HPath.Path",
          "name": "url",
          "package": "HPath",
          "signature": "Path -\u003e String",
          "source": "src/HPath-Path.html#url",
          "type": "function"
        },
        "index": {
          "hierarchy": "HPath Path",
          "module": "HPath.Path",
          "name": "url",
          "normalized": "Path-\u003eString",
          "package": "HPath",
          "signature": "Path-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HPath/docs/HPath-Path.html#v:url"
      }
    }
  ]
]