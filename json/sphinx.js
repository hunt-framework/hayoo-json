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
        "word": "sphinx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Configuration",
          "name": "Configuration",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Configuration.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "Configuration",
          "package": "sphinx",
          "partial": "Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for a query\n\u003c/p\u003e\u003cp\u003eA note about encodings: The encoding specified here is used to encode\n every \u003ccode\u003eText\u003c/code\u003e value that is sent to the server, and it used to decode all\n of the server's answers, including error messages.\n\u003c/p\u003e\u003cp\u003eIf the specified encoding doesn't support characters sent to the server,\n they will silently be substituted with the byte value of \u003ccode\u003e'\\SUB' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before transmission.\n\u003c/p\u003e\u003cp\u003eIf the server sends a byte value back that the encoding doesn't understand,\n the affected bytes will be converted into special values as\n specified by that encoding. For example, when decoding invalid UTF-8,\n all invalid bytes are going to be substituted with \u003ccode\u003e'\\65533' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "Configuration",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "The configuration for query note about encodings The encoding specified here is used to encode every Text value that is sent to the server and it used to decode all of the server answers including error messages If the specified encoding doesn support characters sent to the server they will silently be substituted with the byte value of SUB Char before transmission If the server sends byte value back that the encoding doesn understand the affected bytes will be converted into special values as specified by that encoding For example when decoding invalid UTF-8 all invalid bytes are going to be substituted with Char",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "Configuration",
          "package": "sphinx",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "Configuration",
          "package": "sphinx",
          "signature": "Configuration",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:Configuration\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:Configuration\"]"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "Configuration",
          "package": "sphinx",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCutoff to stop searching at\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "cutoff",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:cutoff\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:cutoff\"]"
        },
        "index": {
          "description": "Cutoff to stop searching at",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "cutoff",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:cutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic, default configuration.\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "defaultConfig",
          "package": "sphinx",
          "signature": "Configuration",
          "source": "src/Text-Search-Sphinx-Configuration.html#defaultConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:defaultConfig\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:defaultConfig\"]"
        },
        "index": {
          "description": "basic default configuration",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "defaultConfig",
          "package": "sphinx",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding used to encode queries to the server, and decode server responses\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "encoding",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:encoding\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:encoding\"]"
        },
        "index": {
          "description": "Encoding used to encode queries to the server and decode server responses",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "encoding",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer-field-name weights\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "fieldWeights",
          "package": "sphinx",
          "signature": "[(String, Int)]",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:fieldWeights\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:fieldWeights\"]"
        },
        "index": {
          "description": "Per-field-name weights",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "fieldWeights",
          "normalized": "[(String,Int)]",
          "package": "sphinx",
          "partial": "Weights",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:fieldWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattribute filters\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "filters",
          "package": "sphinx",
          "signature": "[Filter]",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:filters\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:filters\"]"
        },
        "index": {
          "description": "attribute filters",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "filters",
          "normalized": "[Filter]",
          "package": "sphinx",
          "signature": "[Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:filters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup-by sorting clause (to sort groups in result set with)\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "groupBy",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupBy\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupBy\"]"
        },
        "index": {
          "description": "Group-by sorting clause to sort groups in result set with",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "groupBy",
          "package": "sphinx",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup-by function (to pre-process group-by attribute value with)\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "groupByFunc",
          "package": "sphinx",
          "signature": "GroupByFunction",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupByFunc\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupByFunc\"]"
        },
        "index": {
          "description": "Group-by function to pre-process group-by attribute value with",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "groupByFunc",
          "package": "sphinx",
          "partial": "By Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupByFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup-by attribute name \n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "groupDistinct",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupDistinct\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupDistinct\"]"
        },
        "index": {
          "description": "Group-by attribute name",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "groupDistinct",
          "package": "sphinx",
          "partial": "Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup-by count-distinct attribute\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "groupSort",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupSort\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupSort\"]"
        },
        "index": {
          "description": "Group-by count-distinct attribute",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "groupSort",
          "package": "sphinx",
          "partial": "Sort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname of the Sphinx daemon\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "host",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:host\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:host\"]"
        },
        "index": {
          "description": "The hostname of the Sphinx daemon",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "host",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer-index weights\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "indexWeights",
          "package": "sphinx",
          "signature": "[(String, Int)]",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:indexWeights\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:indexWeights\"]"
        },
        "index": {
          "description": "Per-index weights",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "indexWeights",
          "normalized": "[(String,Int)]",
          "package": "sphinx",
          "partial": "Weights",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:indexWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many records to return from result-set starting at offset (default is 20)\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "limit",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:limit\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:limit\"]"
        },
        "index": {
          "description": "How many records to return from result-set starting at offset default is",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "limit",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum ID to match, 0 means no limit\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "maxId",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxId\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxId\"]"
        },
        "index": {
          "description": "Maximum ID to match means no limit",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "maxId",
          "package": "sphinx",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of matches to retrieve\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "maxMatches",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxMatches\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxMatches\"]"
        },
        "index": {
          "description": "Maximum number of matches to retrieve",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "maxMatches",
          "package": "sphinx",
          "partial": "Matches",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum query time in milliseconds, 0 means no limit\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "maxQueryTime",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxQueryTime\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxQueryTime\"]"
        },
        "index": {
          "description": "Maximum query time in milliseconds means no limit",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "maxQueryTime",
          "package": "sphinx",
          "partial": "Query Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxQueryTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum ID to match, 0 means no limit\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "minId",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:minId\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:minId\"]"
        },
        "index": {
          "description": "Minimum ID to match means no limit",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "minId",
          "package": "sphinx",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:minId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery matching mode\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "mode",
          "package": "sphinx",
          "signature": "MatchMode",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:mode\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:mode\"]"
        },
        "index": {
          "description": "Query matching mode",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "mode",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many records to seek from result-set start (default is 0)\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "offset",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:offset\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:offset\"]"
        },
        "index": {
          "description": "How many records to seek from result-set start default is",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "offset",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe portnumber of the Sphinx daemon\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "port",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:port\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:port\"]"
        },
        "index": {
          "description": "The portnumber of the Sphinx daemon",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "port",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRanking mode\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "ranker",
          "package": "sphinx",
          "signature": "Rank",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:ranker\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:ranker\"]"
        },
        "index": {
          "description": "Ranking mode",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "ranker",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:ranker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistributed retries count\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "retryCount",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryCount\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:retryCount\"]"
        },
        "index": {
          "description": "Distributed retries count",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "retryCount",
          "package": "sphinx",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistributed retries delay\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "retryDelay",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryDelay\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:retryDelay\"]"
        },
        "index": {
          "description": "Distributed retries delay",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "retryDelay",
          "package": "sphinx",
          "partial": "Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattributes to select, defaults to \"*\"\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "selectClause",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:selectClause\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:selectClause\"]"
        },
        "index": {
          "description": "attributes to select defaults to",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "selectClause",
          "package": "sphinx",
          "partial": "Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:selectClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch sorting mode\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "sort",
          "package": "sphinx",
          "signature": "Sort",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sort\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:sort\"]"
        },
        "index": {
          "description": "Match sorting mode",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "sort",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute to sort by\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "sortBy",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sortBy\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:sortBy\"]"
        },
        "index": {
          "description": "Attribute to sort by",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "sortBy",
          "package": "sphinx",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer-field weights\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Configuration\",\"Text.Search.Sphinx\"]",
          "name": "weights",
          "package": "sphinx",
          "signature": "[Int]",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:weights\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:weights\"]"
        },
        "index": {
          "description": "Per-field weights",
          "hierarchy": "Text Search Sphinx Configuration",
          "module": "Text.Search.Sphinx.Configuration",
          "name": "weights",
          "normalized": "[Int]",
          "package": "sphinx",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "partial": "Excerpt Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "partial": "Excerpt Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#t:ExcerptConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "signature": "ExcerptConfiguration",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "ExcerptConfiguration",
          "package": "sphinx",
          "partial": "Excerpt Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:ExcerptConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "afterMatch",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "afterMatch",
          "package": "sphinx",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:afterMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "allowEmpty",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "allowEmpty",
          "package": "sphinx",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:allowEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "altConfig",
          "package": "sphinx",
          "signature": "ExcerptConfiguration",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#altConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "altConfig",
          "package": "sphinx",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:altConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "around",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "around",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:around"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "beforeMatch",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "beforeMatch",
          "package": "sphinx",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:beforeMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "chunkSeparator",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "chunkSeparator",
          "package": "sphinx",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:chunkSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "defaultConfig",
          "package": "sphinx",
          "signature": "ExcerptConfiguration",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "defaultConfig",
          "package": "sphinx",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding used to encode queries to the server, and decode server responses\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "encoding",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Encoding used to encode queries to the server and decode server responses",
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "encoding",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "exactPhrase",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "exactPhrase",
          "package": "sphinx",
          "partial": "Phrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:exactPhrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "forceAllWords",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "forceAllWords",
          "package": "sphinx",
          "partial": "All Words",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:forceAllWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname of the Sphinx daemon\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "host",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "description": "The hostname of the Sphinx daemon",
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "host",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "htmlStripMode",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "htmlStripMode",
          "package": "sphinx",
          "partial": "Strip Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:htmlStripMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limit",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limit",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limitPassages",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limitPassages",
          "package": "sphinx",
          "partial": "Passages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limitPassages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limitWords",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "limitWords",
          "package": "sphinx",
          "partial": "Words",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limitWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "loadFiles",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "loadFiles",
          "package": "sphinx",
          "partial": "Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:loadFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "passageBoundary",
          "package": "sphinx",
          "signature": "String",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "passageBoundary",
          "package": "sphinx",
          "partial": "Boundary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:passageBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe portnumber of the Sphinx daemon\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "port",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "description": "The portnumber of the Sphinx daemon",
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "port",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewarning! broken on 1.10-beta (keep to default of false). Fixed on trunk\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "queryMode",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "description": "warning broken on beta keep to default of false Fixed on trunk",
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "queryMode",
          "package": "sphinx",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:queryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "singlePassage",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "singlePassage",
          "package": "sphinx",
          "partial": "Passage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:singlePassage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "startPassageId",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "startPassageId",
          "package": "sphinx",
          "partial": "Passage Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:startPassageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "useBoundaries",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "useBoundaries",
          "package": "sphinx",
          "partial": "Boundaries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:useBoundaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "weightOrder",
          "package": "sphinx",
          "signature": "Bool",
          "source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx ExcerptConfiguration",
          "module": "Text.Search.Sphinx.ExcerptConfiguration",
          "name": "weightOrder",
          "package": "sphinx",
          "partial": "Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:weightOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "Indexable",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Indexable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "Indexable",
          "package": "sphinx",
          "partial": "Indexable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "Id",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Indexable.html#Id",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "Id",
          "package": "sphinx",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "SchemaType",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "SchemaType",
          "package": "sphinx",
          "partial": "Schema Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:SchemaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "SphinxSchema",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Indexable.html#SphinxSchema",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "SphinxSchema",
          "package": "sphinx",
          "partial": "Sphinx Schema",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:SphinxSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TAttribute",
          "package": "sphinx",
          "signature": "TAttribute AttrT",
          "source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TAttribute",
          "package": "sphinx",
          "partial": "TAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TField",
          "package": "sphinx",
          "signature": "TField",
          "source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TField",
          "package": "sphinx",
          "partial": "TField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TFieldString",
          "package": "sphinx",
          "signature": "TFieldString",
          "source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "TFieldString",
          "package": "sphinx",
          "partial": "TField String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TFieldString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first parameter should be ignored, but is used to satisfy Haskell's type system.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "schema",
          "package": "sphinx",
          "signature": "a -\u003e [(String, SchemaType)]",
          "source": "src/Text-Search-Sphinx-Indexable.html#schema",
          "type": "method"
        },
        "index": {
          "description": "The first parameter should be ignored but is used to satisfy Haskell type system",
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "schema",
          "normalized": "a-\u003e[(String,SchemaType)]",
          "package": "sphinx",
          "signature": "a-\u003e[(String,SchemaType)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Indexable",
          "name": "serialize",
          "package": "sphinx",
          "signature": "[a] -\u003e Element",
          "source": "src/Text-Search-Sphinx-Indexable.html#serialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "serialize",
          "normalized": "[a]-\u003eElement",
          "package": "sphinx",
          "signature": "[a]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value of a to a document with a document id and some attributes and fields.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "toDocument",
          "package": "sphinx",
          "signature": "a -\u003e (Id, [(String, Attr)])",
          "source": "src/Text-Search-Sphinx-Indexable.html#toDocument",
          "type": "method"
        },
        "index": {
          "description": "Convert value of to document with document id and some attributes and fields",
          "hierarchy": "Text Search Sphinx Indexable",
          "module": "Text.Search.Sphinx.Indexable",
          "name": "toDocument",
          "normalized": "a-\u003e(Id,[(String,Attr)])",
          "package": "sphinx",
          "partial": "Document",
          "signature": "a-\u003e(Id,[(String,Attr)])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:toDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Types",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Types",
          "package": "sphinx",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Attr",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Attr",
          "package": "sphinx",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute types\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrT",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "data"
        },
        "index": {
          "description": "Attribute types",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrT",
          "package": "sphinx",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:AttrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "ByteString",
          "package": "sphinx",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ByteString",
          "package": "sphinx",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter types\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Filter",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "Filter types",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Filter",
          "package": "sphinx",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrouping functions\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "GroupByFunction",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "data"
        },
        "index": {
          "description": "Grouping functions",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "GroupByFunction",
          "package": "sphinx",
          "partial": "Group By Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:GroupByFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Match",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Match",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Match",
          "package": "sphinx",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch modes\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "MatchMode",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "data"
        },
        "index": {
          "description": "Match modes",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "MatchMode",
          "package": "sphinx",
          "partial": "Match Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:MatchMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure representing one query. It can be sent with \u003ccode\u003erunQueries\u003c/code\u003e\n or \u003ccode\u003erunQueries'\u003c/code\u003e to the server in batch mode.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Query",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "data"
        },
        "index": {
          "description": "Data structure representing one query It can be sent with runQueries or runQueries to the server in batch mode",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Query",
          "package": "sphinx",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a query\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryResult",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "data"
        },
        "index": {
          "description": "The result of query",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryResult",
          "package": "sphinx",
          "partial": "Query Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:QueryResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus from an individual query\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryStatus",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
          "type": "data"
        },
        "index": {
          "description": "status from an individual query",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryStatus",
          "package": "sphinx",
          "partial": "Query Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:QueryStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRanking modes (ext2 only)\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Rank",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "data"
        },
        "index": {
          "description": "Ranking modes ext2 only",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Rank",
          "package": "sphinx",
          "partial": "Rank",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea result returned from searchd\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Result",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "result returned from searchd",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Result",
          "package": "sphinx",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch commands\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "SearchdCommand",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
          "type": "data"
        },
        "index": {
          "description": "Search commands",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "SearchdCommand",
          "package": "sphinx",
          "partial": "Searchd Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:SearchdCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea single query result, runQueries returns a list of these\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "SingleResult",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#SingleResult",
          "type": "data"
        },
        "index": {
          "description": "single query result runQueries returns list of these",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "SingleResult",
          "package": "sphinx",
          "partial": "Single Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:SingleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort modes\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Sort",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "data"
        },
        "index": {
          "description": "Sort modes",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Sort",
          "package": "sphinx",
          "partial": "Sort",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearchd status codes\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "Status",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Searchd status codes",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Status",
          "package": "sphinx",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent client-side command implementation versions\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "VerCommand",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#VerCommand",
          "type": "data"
        },
        "index": {
          "description": "Current client-side command implementation versions",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "VerCommand",
          "package": "sphinx",
          "partial": "Ver Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:VerCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "All",
          "package": "sphinx",
          "signature": "All",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "All",
          "package": "sphinx",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Any",
          "package": "sphinx",
          "signature": "Any",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Any",
          "package": "sphinx",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Attr",
          "package": "sphinx",
          "signature": "Attr",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Attr",
          "package": "sphinx",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrAsc",
          "package": "sphinx",
          "signature": "AttrAsc",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrAsc",
          "package": "sphinx",
          "partial": "Attr Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrBigInt",
          "package": "sphinx",
          "signature": "AttrBigInt Int64",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrBigInt",
          "package": "sphinx",
          "partial": "Attr Big Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrBigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrDesc",
          "package": "sphinx",
          "signature": "AttrDesc",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrDesc",
          "package": "sphinx",
          "partial": "Attr Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrFloat",
          "package": "sphinx",
          "signature": "AttrFloat Float",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrFloat",
          "package": "sphinx",
          "partial": "Attr Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrMulti",
          "package": "sphinx",
          "signature": "AttrMulti [Attr]",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrMulti",
          "normalized": "AttrMulti[Attr]",
          "package": "sphinx",
          "partial": "Attr Multi",
          "signature": "AttrMulti[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrPair",
          "package": "sphinx",
          "signature": "AttrPair",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrPair",
          "package": "sphinx",
          "partial": "Attr Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrString",
          "package": "sphinx",
          "signature": "AttrString Text",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrString",
          "package": "sphinx",
          "partial": "Attr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTBigInt",
          "package": "sphinx",
          "signature": "AttrTBigInt",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTBigInt",
          "package": "sphinx",
          "partial": "Attr TBig Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTBigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTBool",
          "package": "sphinx",
          "signature": "AttrTBool",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTBool",
          "package": "sphinx",
          "partial": "Attr TBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTFloat",
          "package": "sphinx",
          "signature": "AttrTFloat",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTFloat",
          "package": "sphinx",
          "partial": "Attr TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTMulti",
          "package": "sphinx",
          "signature": "AttrTMulti AttrT",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTMulti",
          "package": "sphinx",
          "partial": "Attr TMulti",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTStr2Ordinal",
          "package": "sphinx",
          "signature": "AttrTStr2Ordinal",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTStr2Ordinal",
          "package": "sphinx",
          "partial": "Attr TStr Ordinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTStr2Ordinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTString",
          "package": "sphinx",
          "signature": "AttrTString",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTString",
          "package": "sphinx",
          "partial": "Attr TString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTTimestamp",
          "package": "sphinx",
          "signature": "AttrTTimestamp",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTTimestamp",
          "package": "sphinx",
          "partial": "Attr TTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTUInt",
          "package": "sphinx",
          "signature": "AttrTUInt",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTUInt",
          "package": "sphinx",
          "partial": "Attr TUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTWordCount",
          "package": "sphinx",
          "signature": "AttrTWordCount",
          "source": "src/Text-Search-Sphinx-Types.html#AttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrTWordCount",
          "package": "sphinx",
          "partial": "Attr TWord Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTWordCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrUInt",
          "package": "sphinx",
          "signature": "AttrUInt Int",
          "source": "src/Text-Search-Sphinx-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "AttrUInt",
          "package": "sphinx",
          "partial": "Attr UInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Bm25",
          "package": "sphinx",
          "signature": "Bm25",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Bm25",
          "package": "sphinx",
          "partial": "Bm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Bm25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Boolean",
          "package": "sphinx",
          "signature": "Boolean",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Boolean",
          "package": "sphinx",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Day",
          "package": "sphinx",
          "signature": "Day",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Day",
          "package": "sphinx",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ERROR",
          "package": "sphinx",
          "signature": "ERROR Int",
          "source": "src/Text-Search-Sphinx-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ERROR",
          "package": "sphinx",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Error",
          "package": "sphinx",
          "signature": "Error Int Text",
          "source": "src/Text-Search-Sphinx-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Error",
          "package": "sphinx",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ExclusionFilter",
          "package": "sphinx",
          "signature": "ExclusionFilter Filter",
          "source": "src/Text-Search-Sphinx-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ExclusionFilter",
          "package": "sphinx",
          "partial": "Exclusion Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ExclusionFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Expr",
          "package": "sphinx",
          "signature": "Expr",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Expr",
          "package": "sphinx",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Extended",
          "package": "sphinx",
          "signature": "Extended",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Extended",
          "package": "sphinx",
          "partial": "Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Extended2",
          "package": "sphinx",
          "signature": "Extended2",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Extended2",
          "package": "sphinx",
          "partial": "Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Extended2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Fieldmask",
          "package": "sphinx",
          "signature": "Fieldmask",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Fieldmask",
          "package": "sphinx",
          "partial": "Fieldmask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Fieldmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "FilterRange",
          "package": "sphinx",
          "signature": "FilterRange String Int64 Int64",
          "source": "src/Text-Search-Sphinx-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "FilterRange",
          "package": "sphinx",
          "partial": "Filter Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:FilterRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "FilterValues",
          "package": "sphinx",
          "signature": "FilterValues String [Int64]",
          "source": "src/Text-Search-Sphinx-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "FilterValues",
          "normalized": "FilterValues String[Int]",
          "package": "sphinx",
          "partial": "Filter Values",
          "signature": "FilterValues String[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:FilterValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Fullscan",
          "package": "sphinx",
          "signature": "Fullscan",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Fullscan",
          "package": "sphinx",
          "partial": "Fullscan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Fullscan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Match",
          "package": "sphinx",
          "signature": "Match",
          "source": "src/Text-Search-Sphinx-Types.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Match",
          "package": "sphinx",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "MatchAny",
          "package": "sphinx",
          "signature": "MatchAny",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "MatchAny",
          "package": "sphinx",
          "partial": "Match Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:MatchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Month",
          "package": "sphinx",
          "signature": "Month",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Month",
          "package": "sphinx",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "None",
          "package": "sphinx",
          "signature": "None",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "None",
          "package": "sphinx",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "OK",
          "package": "sphinx",
          "signature": "OK",
          "source": "src/Text-Search-Sphinx-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "OK",
          "package": "sphinx",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Ok",
          "package": "sphinx",
          "signature": "Ok a",
          "source": "src/Text-Search-Sphinx-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Ok",
          "package": "sphinx",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Phrase",
          "package": "sphinx",
          "signature": "Phrase",
          "source": "src/Text-Search-Sphinx-Types.html#MatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Phrase",
          "package": "sphinx",
          "partial": "Phrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Proximity",
          "package": "sphinx",
          "signature": "Proximity",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Proximity",
          "package": "sphinx",
          "partial": "Proximity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Proximity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ProximityBm25",
          "package": "sphinx",
          "signature": "ProximityBm25",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ProximityBm25",
          "package": "sphinx",
          "partial": "Proximity Bm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ProximityBm25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Search.Sphinx.Types\",\"Text.Search.Sphinx\"]",
          "name": "Query",
          "package": "sphinx",
          "signature": "Query",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Query\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:Query\"]"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Query",
          "package": "sphinx",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryERROR",
          "package": "sphinx",
          "signature": "QueryERROR Int",
          "source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryERROR",
          "package": "sphinx",
          "partial": "Query ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryError",
          "package": "sphinx",
          "signature": "QueryError Int Text",
          "source": "src/Text-Search-Sphinx-Types.html#SingleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryError",
          "package": "sphinx",
          "partial": "Query Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryOK",
          "package": "sphinx",
          "signature": "QueryOK",
          "source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryOK",
          "package": "sphinx",
          "partial": "Query OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryOk",
          "package": "sphinx",
          "signature": "QueryOk QueryResult",
          "source": "src/Text-Search-Sphinx-Types.html#SingleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryOk",
          "package": "sphinx",
          "partial": "Query Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryResult",
          "package": "sphinx",
          "signature": "QueryResult",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryResult",
          "package": "sphinx",
          "partial": "Query Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryWARNING",
          "package": "sphinx",
          "signature": "QueryWARNING",
          "source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryWARNING",
          "package": "sphinx",
          "partial": "Query WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryWARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryWarning",
          "package": "sphinx",
          "signature": "QueryWarning Text QueryResult",
          "source": "src/Text-Search-Sphinx-Types.html#SingleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "QueryWarning",
          "package": "sphinx",
          "partial": "Query Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "RETRY",
          "package": "sphinx",
          "signature": "RETRY",
          "source": "src/Text-Search-Sphinx-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "RETRY",
          "package": "sphinx",
          "partial": "RETRY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:RETRY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Relevance",
          "package": "sphinx",
          "signature": "Relevance",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Relevance",
          "package": "sphinx",
          "partial": "Relevance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Relevance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Retry",
          "package": "sphinx",
          "signature": "Retry Text",
          "source": "src/Text-Search-Sphinx-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Retry",
          "package": "sphinx",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ScExcerpt",
          "package": "sphinx",
          "signature": "ScExcerpt",
          "source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ScExcerpt",
          "package": "sphinx",
          "partial": "Sc Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScExcerpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ScKeywords",
          "package": "sphinx",
          "signature": "ScKeywords",
          "source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ScKeywords",
          "package": "sphinx",
          "partial": "Sc Keywords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScKeywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ScSearch",
          "package": "sphinx",
          "signature": "ScSearch",
          "source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ScSearch",
          "package": "sphinx",
          "partial": "Sc Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "ScUpdate",
          "package": "sphinx",
          "signature": "ScUpdate",
          "source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "ScUpdate",
          "package": "sphinx",
          "partial": "Sc Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "SortExtended",
          "package": "sphinx",
          "signature": "SortExtended",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "SortExtended",
          "package": "sphinx",
          "partial": "Sort Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:SortExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Sph04",
          "package": "sphinx",
          "signature": "Sph04",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Sph04",
          "package": "sphinx",
          "partial": "Sph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Sph04"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "TimeSegments",
          "package": "sphinx",
          "signature": "TimeSegments",
          "source": "src/Text-Search-Sphinx-Types.html#Sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "TimeSegments",
          "package": "sphinx",
          "partial": "Time Segments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:TimeSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Total",
          "package": "sphinx",
          "signature": "Total",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Total",
          "package": "sphinx",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "VcExcerpt",
          "package": "sphinx",
          "signature": "VcExcerpt",
          "source": "src/Text-Search-Sphinx-Types.html#VerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "VcExcerpt",
          "package": "sphinx",
          "partial": "Vc Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcExcerpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "VcKeywords",
          "package": "sphinx",
          "signature": "VcKeywords",
          "source": "src/Text-Search-Sphinx-Types.html#VerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "VcKeywords",
          "package": "sphinx",
          "partial": "Vc Keywords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcKeywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "VcSearch",
          "package": "sphinx",
          "signature": "VcSearch",
          "source": "src/Text-Search-Sphinx-Types.html#VerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "VcSearch",
          "package": "sphinx",
          "partial": "Vc Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "VcUpdate",
          "package": "sphinx",
          "signature": "VcUpdate",
          "source": "src/Text-Search-Sphinx-Types.html#VerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "VcUpdate",
          "package": "sphinx",
          "partial": "Vc Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "WARNING",
          "package": "sphinx",
          "signature": "WARNING",
          "source": "src/Text-Search-Sphinx-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "WARNING",
          "package": "sphinx",
          "partial": "WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Warning",
          "package": "sphinx",
          "signature": "Warning Text a",
          "source": "src/Text-Search-Sphinx-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Warning",
          "package": "sphinx",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Week",
          "package": "sphinx",
          "signature": "Week",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Week",
          "package": "sphinx",
          "partial": "Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Week"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "WordCount",
          "package": "sphinx",
          "signature": "WordCount",
          "source": "src/Text-Search-Sphinx-Types.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "WordCount",
          "package": "sphinx",
          "partial": "Word Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:WordCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "Year",
          "package": "sphinx",
          "signature": "Year",
          "source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "Year",
          "package": "sphinx",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "attrMultiMask",
          "package": "sphinx",
          "signature": "Integer",
          "source": "src/Text-Search-Sphinx-Types.html#attrMultiMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "attrMultiMask",
          "package": "sphinx",
          "partial": "Multi Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attrMultiMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "attrT",
          "package": "sphinx",
          "signature": "AttrT -\u003e a",
          "source": "src/Text-Search-Sphinx-Types.html#attrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "attrT",
          "normalized": "AttrT-\u003ea",
          "package": "sphinx",
          "signature": "AttrT-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of attribute names returned in the result.\n | The Match will contain just the attribute values in the same order.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "attributeNames",
          "package": "sphinx",
          "signature": "[ByteString]",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "description": "List of attribute names returned in the result The Match will contain just the attribute values in the same order",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "attributeNames",
          "normalized": "[ByteString]",
          "package": "sphinx",
          "partial": "Names",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attributeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "attributeValues",
          "package": "sphinx",
          "signature": "[Attr]",
          "source": "src/Text-Search-Sphinx-Types.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "attributeValues",
          "normalized": "[Attr]",
          "package": "sphinx",
          "partial": "Values",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attributeValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "documentId",
          "package": "sphinx",
          "signature": "Int64",
          "source": "src/Text-Search-Sphinx-Types.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "documentId",
          "package": "sphinx",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:documentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "documentWeight",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Types.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "documentWeight",
          "package": "sphinx",
          "partial": "Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:documentWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshortcut for creating an exclusion filter\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "exclude",
          "package": "sphinx",
          "signature": "Filter -\u003e Filter",
          "source": "src/Text-Search-Sphinx-Types.html#exclude",
          "type": "function"
        },
        "index": {
          "description": "shortcut for creating an exclusion filter",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "exclude",
          "normalized": "Filter-\u003eFilter",
          "package": "sphinx",
          "signature": "Filter-\u003eFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:exclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "fromEnumFilter",
          "package": "sphinx",
          "signature": "Filter -\u003e a",
          "source": "src/Text-Search-Sphinx-Types.html#fromEnumFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "fromEnumFilter",
          "normalized": "Filter-\u003ea",
          "package": "sphinx",
          "partial": "Enum Filter",
          "signature": "Filter-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:fromEnumFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe matches\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "matches",
          "package": "sphinx",
          "signature": "[Match]",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "description": "The matches",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "matches",
          "normalized": "[Match]",
          "package": "sphinx",
          "signature": "[Match]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment string.\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Types\",\"Text.Search.Sphinx\"]",
          "name": "queryComment",
          "package": "sphinx",
          "signature": "Text",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryComment\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryComment\"]"
        },
        "index": {
          "description": "comment string",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "queryComment",
          "package": "sphinx",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indexes, \"*\" means every index\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Types\",\"Text.Search.Sphinx\"]",
          "name": "queryIndexes",
          "package": "sphinx",
          "signature": "Text",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryIndexes\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryIndexes\"]"
        },
        "index": {
          "description": "The indexes means every index",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "queryIndexes",
          "package": "sphinx",
          "partial": "Indexes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual query string\n\u003c/p\u003e",
          "module": "[\"Text.Search.Sphinx.Types\",\"Text.Search.Sphinx\"]",
          "name": "queryString",
          "package": "sphinx",
          "signature": "Text",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryString\",\"http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryString\"]"
        },
        "index": {
          "description": "The actual query string",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "queryString",
          "package": "sphinx",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "searchdCommand",
          "package": "sphinx",
          "signature": "SearchdCommand -\u003e Int",
          "source": "src/Text-Search-Sphinx-Types.html#searchdCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "searchdCommand",
          "normalized": "SearchdCommand-\u003eInt",
          "package": "sphinx",
          "partial": "Command",
          "signature": "SearchdCommand-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:searchdCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "toAttrT",
          "package": "sphinx",
          "signature": "a -\u003e AttrT",
          "source": "src/Text-Search-Sphinx-Types.html#toAttrT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "toAttrT",
          "normalized": "a-\u003eAttrT",
          "package": "sphinx",
          "partial": "Attr",
          "signature": "a-\u003eAttrT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toAttrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "toQueryStatus",
          "package": "sphinx",
          "signature": "Int -\u003e QueryStatus",
          "source": "src/Text-Search-Sphinx-Types.html#toQueryStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "toQueryStatus",
          "normalized": "Int-\u003eQueryStatus",
          "package": "sphinx",
          "partial": "Query Status",
          "signature": "Int-\u003eQueryStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toQueryStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx.Types",
          "name": "toStatus",
          "package": "sphinx",
          "signature": "Int -\u003e Status",
          "source": "src/Text-Search-Sphinx-Types.html#toStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "toStatus",
          "normalized": "Int-\u003eStatus",
          "package": "sphinx",
          "partial": "Status",
          "signature": "Int-\u003eStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal amount of matches retrieved on server by this query.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "total",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "description": "Total amount of matches retrieved on server by this query",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "total",
          "package": "sphinx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal amount of matching documents in index.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "totalFound",
          "package": "sphinx",
          "signature": "Int",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "description": "Total amount of matching documents in index",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "totalFound",
          "package": "sphinx",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:totalFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImportant! 2.0 compatible\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "verCommand",
          "package": "sphinx",
          "signature": "VerCommand -\u003e a",
          "source": "src/Text-Search-Sphinx-Types.html#verCommand",
          "type": "function"
        },
        "index": {
          "description": "Important compatible",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "verCommand",
          "normalized": "VerCommand-\u003ea",
          "package": "sphinx",
          "partial": "Command",
          "signature": "VerCommand-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:verCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocessed words with the number of docs and the number of hits.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx.Types",
          "name": "words",
          "package": "sphinx",
          "signature": "[(Text, Int, Int)]",
          "source": "src/Text-Search-Sphinx-Types.html#QueryResult",
          "type": "function"
        },
        "index": {
          "description": "processed words with the number of docs and the number of hits",
          "hierarchy": "Text Search Sphinx Types",
          "module": "Text.Search.Sphinx.Types",
          "name": "words",
          "normalized": "[(Text,Int,Int)]",
          "package": "sphinx",
          "signature": "[(Text,Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Search.Sphinx",
          "name": "Sphinx",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "Sphinx",
          "package": "sphinx",
          "partial": "Sphinx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for a query\n\u003c/p\u003e\u003cp\u003eA note about encodings: The encoding specified here is used to encode\n every \u003ccode\u003eText\u003c/code\u003e value that is sent to the server, and it used to decode all\n of the server's answers, including error messages.\n\u003c/p\u003e\u003cp\u003eIf the specified encoding doesn't support characters sent to the server,\n they will silently be substituted with the byte value of \u003ccode\u003e'\\SUB' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before transmission.\n\u003c/p\u003e\u003cp\u003eIf the server sends a byte value back that the encoding doesn't understand,\n the affected bytes will be converted into special values as\n specified by that encoding. For example, when decoding invalid UTF-8,\n all invalid bytes are going to be substituted with \u003ccode\u003e'\\65533' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "Configuration",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "The configuration for query note about encodings The encoding specified here is used to encode every Text value that is sent to the server and it used to decode all of the server answers including error messages If the specified encoding doesn support characters sent to the server they will silently be substituted with the byte value of SUB Char before transmission If the server sends byte value back that the encoding doesn understand the affected bytes will be converted into special values as specified by that encoding For example when decoding invalid UTF-8 all invalid bytes are going to be substituted with Char",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "Configuration",
          "package": "sphinx",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure representing one query. It can be sent with \u003ccode\u003erunQueries\u003c/code\u003e\n or \u003ccode\u003erunQueries'\u003c/code\u003e to the server in batch mode.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "Query",
          "package": "sphinx",
          "source": "src/Text-Search-Sphinx-Types.html#Query",
          "type": "data"
        },
        "index": {
          "description": "Data structure representing one query It can be sent with runQueries or runQueries to the server in batch mode",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "Query",
          "package": "sphinx",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO: add configuration options\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "buildExcerpts",
          "package": "sphinx",
          "signature": "ExcerptConfiguration-\u003e [Text]-\u003e Text-\u003e Text-\u003e IO (Result [Text])",
          "type": "function"
        },
        "index": {
          "description": "TODO add configuration options",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "buildExcerpts",
          "normalized": "ExcerptConfiguration-\u003e[Text]-\u003eText-\u003eText-\u003eIO(Result[Text])",
          "package": "sphinx",
          "partial": "Excerpts",
          "signature": "ExcerptConfiguration-\u003e[Text]-\u003eText-\u003eText-\u003eIO(Result[Text])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:buildExcerpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape all possible meta characters.\n   Most of these characters only need to be escaped in certain contexts\n   however, in normal searching they will all be ignored\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "escapeText",
          "package": "sphinx",
          "signature": "Text -\u003e Text",
          "source": "src/Text-Search-Sphinx.html#escapeText",
          "type": "function"
        },
        "index": {
          "description": "Escape all possible meta characters Most of these characters only need to be escaped in certain contexts however in normal searching they will all be ignored",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "escapeText",
          "normalized": "Text-\u003eText",
          "package": "sphinx",
          "partial": "Text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:escapeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecutes \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e. Log warning and errors, automatically retry.\n Return a Nothing on error, otherwise a Just.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "maybeQueries",
          "package": "sphinx",
          "signature": "(Text -\u003e IO ()) -\u003e Configuration -\u003e [Query] -\u003e IO (Maybe [QueryResult])",
          "source": "src/Text-Search-Sphinx.html#maybeQueries",
          "type": "function"
        },
        "index": {
          "description": "executes runQueries Log warning and errors automatically retry Return Nothing on error otherwise Just",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "maybeQueries",
          "normalized": "(Text-\u003eIO())-\u003eConfiguration-\u003e[Query]-\u003eIO(Maybe[QueryResult])",
          "package": "sphinx",
          "partial": "Queries",
          "signature": "(Text-\u003eIO())-\u003eConfiguration-\u003e[Query]-\u003eIO(Maybe[QueryResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maybeQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e function runs a single query against the Sphinx daemon.\n   To pipeline multiple queries in a batch, use and \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "query",
          "package": "sphinx",
          "signature": "Configuration-\u003e Text-\u003e Text-\u003e IO (Result QueryResult)",
          "type": "function"
        },
        "index": {
          "description": "The query function runs single query against the Sphinx daemon To pipeline multiple queries in batch use and runQueries",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "query",
          "normalized": "Configuration-\u003eText-\u003eText-\u003eIO(Result QueryResult)",
          "package": "sphinx",
          "signature": "Configuration-\u003eText-\u003eText-\u003eIO(Result QueryResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine results from \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e into matches.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "resultsToMatches",
          "package": "sphinx",
          "signature": "Int -\u003e [QueryResult] -\u003e [Match]",
          "source": "src/Text-Search-Sphinx.html#resultsToMatches",
          "type": "function"
        },
        "index": {
          "description": "Combine results from runQueries into matches",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "resultsToMatches",
          "normalized": "Int-\u003e[QueryResult]-\u003e[Match]",
          "package": "sphinx",
          "partial": "To Matches",
          "signature": "Int-\u003e[QueryResult]-\u003e[Match]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:resultsToMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake multiple queries at once, using a list of \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n For a single query, just use the query method\n Easier handling of query result than runQueries'\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "runQueries",
          "package": "sphinx",
          "signature": "Configuration -\u003e [Query] -\u003e IO (Result [QueryResult])",
          "source": "src/Text-Search-Sphinx.html#runQueries",
          "type": "function"
        },
        "index": {
          "description": "Make multiple queries at once using list of Query For single query just use the query method Easier handling of query result than runQueries",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "runQueries",
          "normalized": "Configuration-\u003e[Query]-\u003eIO(Result[QueryResult])",
          "package": "sphinx",
          "partial": "Queries",
          "signature": "Configuration-\u003e[Query]-\u003eIO(Result[QueryResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:runQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower level- called by \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e.\n This may be useful for debugging problems- warning messages won't get compressed\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "runQueries'",
          "package": "sphinx",
          "signature": "Configuration -\u003e [Query] -\u003e IO (Result [SingleResult])",
          "source": "src/Text-Search-Sphinx.html#runQueries%27",
          "type": "function"
        },
        "index": {
          "description": "Lower level called by runQueries This may be useful for debugging problems warning messages won get compressed",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "runQueries'",
          "normalized": "Configuration-\u003e[Query]-\u003eIO(Result[SingleResult])",
          "package": "sphinx",
          "partial": "Queries'",
          "signature": "Configuration-\u003e[Query]-\u003eIO(Result[SingleResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:runQueries-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a convenience function which accepts a search string and\n builds a query for that string over all indexes without attaching\n comments to the queries.\n\u003c/p\u003e",
          "module": "Text.Search.Sphinx",
          "name": "simpleQuery",
          "package": "sphinx",
          "signature": "Text-\u003e Query",
          "type": "function"
        },
        "index": {
          "description": "This is convenience function which accepts search string and builds query for that string over all indexes without attaching comments to the queries",
          "hierarchy": "Text Search Sphinx",
          "module": "Text.Search.Sphinx",
          "name": "simpleQuery",
          "normalized": "Text-\u003eQuery",
          "package": "sphinx",
          "partial": "Query",
          "signature": "Text-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:simpleQuery"
      }
    }
  ]
]