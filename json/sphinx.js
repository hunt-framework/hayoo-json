[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#",
      "description": {
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "module",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html",
        "fct-type": "module",
        "title": "Configuration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "Configuration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#t:Configuration",
      "description": {
        "fct-descr": "\u003cp\u003eThe configuration for a query\n\u003c/p\u003e\u003cp\u003eA note about encodings: The encoding specified here is used to encode\n every \u003ccode\u003eText\u003c/code\u003e value that is sent to the server, and it used to decode all\n of the server's answers, including error messages.\n\u003c/p\u003e\u003cp\u003eIf the specified encoding doesn't support characters sent to the server,\n they will silently be substituted with the byte value of \u003ccode\u003e'\\SUB' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before transmission.\n\u003c/p\u003e\u003cp\u003eIf the server sends a byte value back that the encoding doesn't understand,\n the affected bytes will be converted into special values as\n specified by that encoding. For example, when decoding invalid UTF-8,\n all invalid bytes are going to be substituted with \u003ccode\u003e'\\65533' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "data",
        "title": "Configuration"
      },
      "index": {
        "description": "The configuration for query note about encodings The encoding specified here is used to encode every Text value that is sent to the server and it used to decode all of the server answers including error messages If the specified encoding doesn support characters sent to the server they will silently be substituted with the byte value of SUB Char before transmission If the server sends byte value back that the encoding doesn understand the affected bytes will be converted into special values as specified by that encoding For example when decoding invalid UTF-8 all invalid bytes are going to be substituted with Char",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "Configuration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:Configuration",
      "description": {
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Configuration",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "Configuration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "Configuration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:cutoff",
      "description": {
        "fct-descr": "\u003cp\u003eCutoff to stop searching at\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "cutoff"
      },
      "index": {
        "description": "Cutoff to stop searching at",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "cutoff",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA basic, default configuration.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Configuration",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "basic default configuration",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "defaultConfig",
        "normalized": "",
        "package": "sphinx",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:encoding",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding used to encode queries to the server, and decode server responses\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "Encoding used to encode queries to the server and decode server responses",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "encoding",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:fieldWeights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-field-name weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "fieldWeights"
      },
      "index": {
        "description": "Per-field-name weights",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "fieldWeights",
        "normalized": "[(String,Int)]",
        "package": "sphinx",
        "partial": "Weights",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:filters",
      "description": {
        "fct-descr": "\u003cp\u003eattribute filters\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "[Filter]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "filters"
      },
      "index": {
        "description": "attribute filters",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "filters",
        "normalized": "[Filter]",
        "package": "sphinx",
        "partial": "",
        "signature": "[Filter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by sorting clause (to sort groups in result set with)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Group-by sorting clause to sort groups in result set with",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "groupBy",
        "normalized": "",
        "package": "sphinx",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupByFunc",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by function (to pre-process group-by attribute value with)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "GroupByFunction",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupByFunc"
      },
      "index": {
        "description": "Group-by function to pre-process group-by attribute value with",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "groupByFunc",
        "normalized": "",
        "package": "sphinx",
        "partial": "By Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupDistinct",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by attribute name \n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupDistinct"
      },
      "index": {
        "description": "Group-by attribute name",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "groupDistinct",
        "normalized": "",
        "package": "sphinx",
        "partial": "Distinct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:groupSort",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by count-distinct attribute\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupSort"
      },
      "index": {
        "description": "Group-by count-distinct attribute",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "groupSort",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "The hostname of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "host",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:indexWeights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-index weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "indexWeights"
      },
      "index": {
        "description": "Per-index weights",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "indexWeights",
        "normalized": "[(String,Int)]",
        "package": "sphinx",
        "partial": "Weights",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eHow many records to return from result-set starting at offset (default is 20)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "How many records to return from result-set starting at offset default is",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "limit",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxId",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum ID to match, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxId"
      },
      "index": {
        "description": "Maximum ID to match means no limit",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "maxId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxMatches",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of matches to retrieve\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxMatches"
      },
      "index": {
        "description": "Maximum number of matches to retrieve",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "maxMatches",
        "normalized": "",
        "package": "sphinx",
        "partial": "Matches",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:maxQueryTime",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum query time in milliseconds, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxQueryTime"
      },
      "index": {
        "description": "Maximum query time in milliseconds means no limit",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "maxQueryTime",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:minId",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum ID to match, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "minId"
      },
      "index": {
        "description": "Minimum ID to match means no limit",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "minId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eQuery matching mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "MatchMode",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "Query matching mode",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "mode",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:offset",
      "description": {
        "fct-descr": "\u003cp\u003eHow many records to seek from result-set start (default is 0)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "offset"
      },
      "index": {
        "description": "How many records to seek from result-set start default is",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "offset",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eThe portnumber of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "The portnumber of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "port",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:ranker",
      "description": {
        "fct-descr": "\u003cp\u003eRanking mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Rank",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "ranker"
      },
      "index": {
        "description": "Ranking mode",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "ranker",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryCount",
      "description": {
        "fct-descr": "\u003cp\u003eDistributed retries count\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "retryCount"
      },
      "index": {
        "description": "Distributed retries count",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "retryCount",
        "normalized": "",
        "package": "sphinx",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:retryDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDistributed retries delay\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "retryDelay"
      },
      "index": {
        "description": "Distributed retries delay",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "retryDelay",
        "normalized": "",
        "package": "sphinx",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:selectClause",
      "description": {
        "fct-descr": "\u003cp\u003eattributes to select, defaults to \"*\"\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "selectClause"
      },
      "index": {
        "description": "attributes to select defaults to",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "selectClause",
        "normalized": "",
        "package": "sphinx",
        "partial": "Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eMatch sorting mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "Sort",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Match sorting mode",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "sort",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute to sort by\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Attribute to sort by",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "sortBy",
        "normalized": "",
        "package": "sphinx",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Configuration.html#v:weights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-field weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Configuration",
        "fct-package": "sphinx",
        "fct-signature": "[Int]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "weights"
      },
      "index": {
        "description": "Per-field weights",
        "hierarchy": "Text Search Sphinx Configuration",
        "module": "Text.Search.Sphinx.Configuration",
        "name": "weights",
        "normalized": "[Int]",
        "package": "sphinx",
        "partial": "",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#",
      "description": {
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "module",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html",
        "fct-type": "module",
        "title": "ExcerptConfiguration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "ExcerptConfiguration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Excerpt Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#t:ExcerptConfiguration",
      "description": {
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "data",
        "title": "ExcerptConfiguration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "ExcerptConfiguration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Excerpt Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:ExcerptConfiguration",
      "description": {
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "ExcerptConfiguration",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "ExcerptConfiguration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "ExcerptConfiguration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Excerpt Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:afterMatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "afterMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "afterMatch",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:allowEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "allowEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "allowEmpty",
        "normalized": "",
        "package": "sphinx",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:altConfig",
      "description": {
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "ExcerptConfiguration",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#altConfig",
        "fct-type": "function",
        "title": "altConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "altConfig",
        "normalized": "",
        "package": "sphinx",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:around",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "around"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "around",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:beforeMatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "beforeMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "beforeMatch",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:chunkSeparator",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "chunkSeparator"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "chunkSeparator",
        "normalized": "",
        "package": "sphinx",
        "partial": "Separator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:defaultConfig",
      "description": {
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "ExcerptConfiguration",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "defaultConfig",
        "normalized": "",
        "package": "sphinx",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:encoding",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding used to encode queries to the server, and decode server responses\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "Encoding used to encode queries to the server and decode server responses",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "encoding",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:exactPhrase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "exactPhrase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "exactPhrase",
        "normalized": "",
        "package": "sphinx",
        "partial": "Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:forceAllWords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "forceAllWords"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "forceAllWords",
        "normalized": "",
        "package": "sphinx",
        "partial": "All Words",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "The hostname of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "host",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:htmlStripMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "htmlStripMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "htmlStripMode",
        "normalized": "",
        "package": "sphinx",
        "partial": "Strip Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "limit",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limitPassages",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "limitPassages"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "limitPassages",
        "normalized": "",
        "package": "sphinx",
        "partial": "Passages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:limitWords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "limitWords"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "limitWords",
        "normalized": "",
        "package": "sphinx",
        "partial": "Words",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:loadFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "loadFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "loadFiles",
        "normalized": "",
        "package": "sphinx",
        "partial": "Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:passageBoundary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "passageBoundary"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "passageBoundary",
        "normalized": "",
        "package": "sphinx",
        "partial": "Boundary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eThe portnumber of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "The portnumber of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "port",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:queryMode",
      "description": {
        "fct-descr": "\u003cp\u003ewarning! broken on 1.10-beta (keep to default of false). Fixed on trunk\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "queryMode"
      },
      "index": {
        "description": "warning broken on beta keep to default of false Fixed on trunk",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "queryMode",
        "normalized": "",
        "package": "sphinx",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:singlePassage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "singlePassage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "singlePassage",
        "normalized": "",
        "package": "sphinx",
        "partial": "Passage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:startPassageId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "startPassageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "startPassageId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Passage Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:useBoundaries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "useBoundaries"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "useBoundaries",
        "normalized": "",
        "package": "sphinx",
        "partial": "Boundaries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-ExcerptConfiguration.html#v:weightOrder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.ExcerptConfiguration",
        "fct-package": "sphinx",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Search-Sphinx-ExcerptConfiguration.html#ExcerptConfiguration",
        "fct-type": "function",
        "title": "weightOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx ExcerptConfiguration",
        "module": "Text.Search.Sphinx.ExcerptConfiguration",
        "name": "weightOrder",
        "normalized": "",
        "package": "sphinx",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "module",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html",
        "fct-type": "module",
        "title": "Indexable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "Indexable",
        "normalized": "",
        "package": "sphinx",
        "partial": "Indexable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:Id",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "type",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "Id",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:SchemaType",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
        "fct-type": "data",
        "title": "SchemaType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "SchemaType",
        "normalized": "",
        "package": "sphinx",
        "partial": "Schema Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#t:SphinxSchema",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "class",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#SphinxSchema",
        "fct-type": "class",
        "title": "SphinxSchema"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "SphinxSchema",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sphinx Schema",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TAttribute",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "TAttribute AttrT",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
        "fct-type": "function",
        "title": "TAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "TAttribute",
        "normalized": "",
        "package": "sphinx",
        "partial": "TAttribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TField",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "TField",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
        "fct-type": "function",
        "title": "TField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "TField",
        "normalized": "",
        "package": "sphinx",
        "partial": "TField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:TFieldString",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "TFieldString",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#SchemaType",
        "fct-type": "function",
        "title": "TFieldString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "TFieldString",
        "normalized": "",
        "package": "sphinx",
        "partial": "TField String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:schema",
      "description": {
        "fct-descr": "\u003cp\u003eThe first parameter should be ignored, but is used to satisfy Haskell's type system.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "a -\u003e [(String, SchemaType)]",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#schema",
        "fct-type": "method",
        "title": "schema"
      },
      "index": {
        "description": "The first parameter should be ignored but is used to satisfy Haskell type system",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "schema",
        "normalized": "a-\u003e[(String,SchemaType)]",
        "package": "sphinx",
        "partial": "",
        "signature": "a-\u003e[(String,SchemaType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:serialize",
      "description": {
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "[a] -\u003e Element",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#serialize",
        "fct-type": "function",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "serialize",
        "normalized": "[a]-\u003eElement",
        "package": "sphinx",
        "partial": "",
        "signature": "[a]-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Indexable.html#v:toDocument",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value of a to a document with a document id and some attributes and fields.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Indexable",
        "fct-package": "sphinx",
        "fct-signature": "a -\u003e (Id, [(String, Attr)])",
        "fct-source": "src/Text-Search-Sphinx-Indexable.html#toDocument",
        "fct-type": "method",
        "title": "toDocument"
      },
      "index": {
        "description": "Convert value of to document with document id and some attributes and fields",
        "hierarchy": "Text Search Sphinx Indexable",
        "module": "Text.Search.Sphinx.Indexable",
        "name": "toDocument",
        "normalized": "a-\u003e(Id,[(String,Attr)])",
        "package": "sphinx",
        "partial": "Document",
        "signature": "a-\u003e(Id,[(String,Attr)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "module",
        "fct-source": "src/Text-Search-Sphinx-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Types",
        "normalized": "",
        "package": "sphinx",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Attr",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Attr",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:AttrT",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute types\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "data",
        "title": "AttrT"
      },
      "index": {
        "description": "Attribute types",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrT",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ByteString",
        "normalized": "",
        "package": "sphinx",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Filter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter types\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Filter",
        "fct-type": "data",
        "title": "Filter"
      },
      "index": {
        "description": "Filter types",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Filter",
        "normalized": "",
        "package": "sphinx",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:GroupByFunction",
      "description": {
        "fct-descr": "\u003cp\u003eGrouping functions\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "data",
        "title": "GroupByFunction"
      },
      "index": {
        "description": "Grouping functions",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "GroupByFunction",
        "normalized": "",
        "package": "sphinx",
        "partial": "Group By Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Match",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Match",
        "fct-type": "data",
        "title": "Match"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Match",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:MatchMode",
      "description": {
        "fct-descr": "\u003cp\u003eMatch modes\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "data",
        "title": "MatchMode"
      },
      "index": {
        "description": "Match modes",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "MatchMode",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eData structure representing one query. It can be sent with \u003ccode\u003erunQueries\u003c/code\u003e\n or \u003ccode\u003erunQueries'\u003c/code\u003e to the server in batch mode.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "Data structure representing one query It can be sent with runQueries or runQueries to the server in batch mode",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Query",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:QueryResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a query\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "data",
        "title": "QueryResult"
      },
      "index": {
        "description": "The result of query",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryResult",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:QueryStatus",
      "description": {
        "fct-descr": "\u003cp\u003estatus from an individual query\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
        "fct-type": "data",
        "title": "QueryStatus"
      },
      "index": {
        "description": "status from an individual query",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryStatus",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Rank",
      "description": {
        "fct-descr": "\u003cp\u003eRanking modes (ext2 only)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "data",
        "title": "Rank"
      },
      "index": {
        "description": "Ranking modes ext2 only",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Rank",
        "normalized": "",
        "package": "sphinx",
        "partial": "Rank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003ea result returned from searchd\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "result returned from searchd",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Result",
        "normalized": "",
        "package": "sphinx",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:SearchdCommand",
      "description": {
        "fct-descr": "\u003cp\u003eSearch commands\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
        "fct-type": "data",
        "title": "SearchdCommand"
      },
      "index": {
        "description": "Search commands",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "SearchdCommand",
        "normalized": "",
        "package": "sphinx",
        "partial": "Searchd Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:SingleResult",
      "description": {
        "fct-descr": "\u003cp\u003ea single query result, runQueries returns a list of these\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SingleResult",
        "fct-type": "data",
        "title": "SingleResult"
      },
      "index": {
        "description": "single query result runQueries returns list of these",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "SingleResult",
        "normalized": "",
        "package": "sphinx",
        "partial": "Single Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Sort",
      "description": {
        "fct-descr": "\u003cp\u003eSort modes\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "data",
        "title": "Sort"
      },
      "index": {
        "description": "Sort modes",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Sort",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eSearchd status codes\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Searchd status codes",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Status",
        "normalized": "",
        "package": "sphinx",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#t:VerCommand",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent client-side command implementation versions\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#VerCommand",
        "fct-type": "data",
        "title": "VerCommand"
      },
      "index": {
        "description": "Current client-side command implementation versions",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "VerCommand",
        "normalized": "",
        "package": "sphinx",
        "partial": "Ver Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:All",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "All",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "All",
        "normalized": "",
        "package": "sphinx",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Any",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Any",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Any",
        "normalized": "",
        "package": "sphinx",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Attr",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Attr",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "Attr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Attr",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrAsc",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrAsc",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "AttrAsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrAsc",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrBigInt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrBigInt Int64",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "function",
        "title": "AttrBigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrBigInt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrDesc",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrDesc",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "AttrDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrDesc",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrFloat",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrFloat Float",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "function",
        "title": "AttrFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrFloat",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrMulti",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrMulti [Attr]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "function",
        "title": "AttrMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrMulti",
        "normalized": "AttrMulti[Attr]",
        "package": "sphinx",
        "partial": "Attr Multi",
        "signature": "AttrMulti[Attr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrPair",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrPair",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "AttrPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrPair",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrString",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrString Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "function",
        "title": "AttrString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrString",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTBigInt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTBigInt",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTBigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTBigInt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TBig Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTBool",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTBool",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTBool",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTFloat",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTFloat",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTFloat",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTMulti",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTMulti AttrT",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTMulti",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TMulti",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTStr2Ordinal",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTStr2Ordinal",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTStr2Ordinal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTStr2Ordinal",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TStr Ordinal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTString",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTString",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTString",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTTimestamp",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTTimestamp",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTTimestamp",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TTimestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTUInt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTUInt",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTUInt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TUInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrTWordCount",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrTWordCount",
        "fct-source": "src/Text-Search-Sphinx-Types.html#AttrT",
        "fct-type": "function",
        "title": "AttrTWordCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrTWordCount",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr TWord Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:AttrUInt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrUInt Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Attr",
        "fct-type": "function",
        "title": "AttrUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "AttrUInt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Attr UInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Bm25",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Bm25",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "Bm25"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Bm25",
        "normalized": "",
        "package": "sphinx",
        "partial": "Bm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Boolean",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Boolean",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Boolean",
        "normalized": "",
        "package": "sphinx",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Day",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Day",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "Day"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Day",
        "normalized": "",
        "package": "sphinx",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ERROR",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ERROR Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Status",
        "fct-type": "function",
        "title": "ERROR"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ERROR",
        "normalized": "",
        "package": "sphinx",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Error",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Error Int Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Error",
        "normalized": "",
        "package": "sphinx",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ExclusionFilter",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ExclusionFilter Filter",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Filter",
        "fct-type": "function",
        "title": "ExclusionFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ExclusionFilter",
        "normalized": "",
        "package": "sphinx",
        "partial": "Exclusion Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Expr",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Expr",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Expr",
        "normalized": "",
        "package": "sphinx",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Extended",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Extended",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Extended"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Extended",
        "normalized": "",
        "package": "sphinx",
        "partial": "Extended",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Extended2",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Extended2",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Extended2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Extended2",
        "normalized": "",
        "package": "sphinx",
        "partial": "Extended",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Fieldmask",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Fieldmask",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "Fieldmask"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Fieldmask",
        "normalized": "",
        "package": "sphinx",
        "partial": "Fieldmask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:FilterRange",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "FilterRange String Int64 Int64",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Filter",
        "fct-type": "function",
        "title": "FilterRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "FilterRange",
        "normalized": "",
        "package": "sphinx",
        "partial": "Filter Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:FilterValues",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "FilterValues String [Int64]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Filter",
        "fct-type": "function",
        "title": "FilterValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "FilterValues",
        "normalized": "FilterValues String[Int]",
        "package": "sphinx",
        "partial": "Filter Values",
        "signature": "FilterValues String[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Fullscan",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Fullscan",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Fullscan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Fullscan",
        "normalized": "",
        "package": "sphinx",
        "partial": "Fullscan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Match",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Match",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Match",
        "fct-type": "function",
        "title": "Match"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Match",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:MatchAny",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "MatchAny",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "MatchAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "MatchAny",
        "normalized": "",
        "package": "sphinx",
        "partial": "Match Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Month",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Month",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "Month"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Month",
        "normalized": "",
        "package": "sphinx",
        "partial": "Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:None",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "None",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "None",
        "normalized": "",
        "package": "sphinx",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:OK",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "OK",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Status",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "OK",
        "normalized": "",
        "package": "sphinx",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Ok",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Ok a",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Result",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Ok",
        "normalized": "",
        "package": "sphinx",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Phrase",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Phrase",
        "fct-source": "src/Text-Search-Sphinx-Types.html#MatchMode",
        "fct-type": "function",
        "title": "Phrase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Phrase",
        "normalized": "",
        "package": "sphinx",
        "partial": "Phrase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Proximity",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Proximity",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "Proximity"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Proximity",
        "normalized": "",
        "package": "sphinx",
        "partial": "Proximity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ProximityBm25",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ProximityBm25",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "ProximityBm25"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ProximityBm25",
        "normalized": "",
        "package": "sphinx",
        "partial": "Proximity Bm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Query",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Query",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Query",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryERROR",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryERROR Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
        "fct-type": "function",
        "title": "QueryERROR"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryERROR",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryError",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryError Int Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SingleResult",
        "fct-type": "function",
        "title": "QueryError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryError",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryOK",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryOK",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
        "fct-type": "function",
        "title": "QueryOK"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryOK",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryOk",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryOk QueryResult",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SingleResult",
        "fct-type": "function",
        "title": "QueryOk"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryOk",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryResult",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryResult",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "QueryResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryResult",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryWARNING",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryWARNING",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryStatus",
        "fct-type": "function",
        "title": "QueryWARNING"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryWARNING",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query WARNING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:QueryWarning",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "QueryWarning Text QueryResult",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SingleResult",
        "fct-type": "function",
        "title": "QueryWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "QueryWarning",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:RETRY",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "RETRY",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Status",
        "fct-type": "function",
        "title": "RETRY"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "RETRY",
        "normalized": "",
        "package": "sphinx",
        "partial": "RETRY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Relevance",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Relevance",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "Relevance"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Relevance",
        "normalized": "",
        "package": "sphinx",
        "partial": "Relevance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Retry",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Retry Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Result",
        "fct-type": "function",
        "title": "Retry"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Retry",
        "normalized": "",
        "package": "sphinx",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScExcerpt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ScExcerpt",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
        "fct-type": "function",
        "title": "ScExcerpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ScExcerpt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sc Excerpt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScKeywords",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ScKeywords",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
        "fct-type": "function",
        "title": "ScKeywords"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ScKeywords",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sc Keywords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScSearch",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ScSearch",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
        "fct-type": "function",
        "title": "ScSearch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ScSearch",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sc Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:ScUpdate",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "ScUpdate",
        "fct-source": "src/Text-Search-Sphinx-Types.html#SearchdCommand",
        "fct-type": "function",
        "title": "ScUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "ScUpdate",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sc Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:SortExtended",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "SortExtended",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "SortExtended"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "SortExtended",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sort Extended",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Sph04",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Sph04",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "Sph04"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Sph04",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:TimeSegments",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "TimeSegments",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Sort",
        "fct-type": "function",
        "title": "TimeSegments"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "TimeSegments",
        "normalized": "",
        "package": "sphinx",
        "partial": "Time Segments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Total",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Total",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "Total"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Total",
        "normalized": "",
        "package": "sphinx",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcExcerpt",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "VcExcerpt",
        "fct-source": "src/Text-Search-Sphinx-Types.html#VerCommand",
        "fct-type": "function",
        "title": "VcExcerpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "VcExcerpt",
        "normalized": "",
        "package": "sphinx",
        "partial": "Vc Excerpt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcKeywords",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "VcKeywords",
        "fct-source": "src/Text-Search-Sphinx-Types.html#VerCommand",
        "fct-type": "function",
        "title": "VcKeywords"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "VcKeywords",
        "normalized": "",
        "package": "sphinx",
        "partial": "Vc Keywords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcSearch",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "VcSearch",
        "fct-source": "src/Text-Search-Sphinx-Types.html#VerCommand",
        "fct-type": "function",
        "title": "VcSearch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "VcSearch",
        "normalized": "",
        "package": "sphinx",
        "partial": "Vc Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:VcUpdate",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "VcUpdate",
        "fct-source": "src/Text-Search-Sphinx-Types.html#VerCommand",
        "fct-type": "function",
        "title": "VcUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "VcUpdate",
        "normalized": "",
        "package": "sphinx",
        "partial": "Vc Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:WARNING",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "WARNING",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Status",
        "fct-type": "function",
        "title": "WARNING"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "WARNING",
        "normalized": "",
        "package": "sphinx",
        "partial": "WARNING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Warning",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Warning Text a",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Result",
        "fct-type": "function",
        "title": "Warning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Warning",
        "normalized": "",
        "package": "sphinx",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Week",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Week",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "Week"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Week",
        "normalized": "",
        "package": "sphinx",
        "partial": "Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:WordCount",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "WordCount",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Rank",
        "fct-type": "function",
        "title": "WordCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "WordCount",
        "normalized": "",
        "package": "sphinx",
        "partial": "Word Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:Year",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Year",
        "fct-source": "src/Text-Search-Sphinx-Types.html#GroupByFunction",
        "fct-type": "function",
        "title": "Year"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "Year",
        "normalized": "",
        "package": "sphinx",
        "partial": "Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attrMultiMask",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Integer",
        "fct-source": "src/Text-Search-Sphinx-Types.html#attrMultiMask",
        "fct-type": "function",
        "title": "attrMultiMask"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "attrMultiMask",
        "normalized": "",
        "package": "sphinx",
        "partial": "Multi Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attrT",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "AttrT -\u003e a",
        "fct-source": "src/Text-Search-Sphinx-Types.html#attrT",
        "fct-type": "function",
        "title": "attrT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "attrT",
        "normalized": "AttrT-\u003ea",
        "package": "sphinx",
        "partial": "",
        "signature": "AttrT-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attributeNames",
      "description": {
        "fct-descr": "\u003cp\u003eList of attribute names returned in the result.\n | The Match will contain just the attribute values in the same order.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "attributeNames"
      },
      "index": {
        "description": "List of attribute names returned in the result The Match will contain just the attribute values in the same order",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "attributeNames",
        "normalized": "[ByteString]",
        "package": "sphinx",
        "partial": "Names",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:attributeValues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "[Attr]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Match",
        "fct-type": "function",
        "title": "attributeValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "attributeValues",
        "normalized": "[Attr]",
        "package": "sphinx",
        "partial": "Values",
        "signature": "[Attr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:documentId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int64",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Match",
        "fct-type": "function",
        "title": "documentId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "documentId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:documentWeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Match",
        "fct-type": "function",
        "title": "documentWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "documentWeight",
        "normalized": "",
        "package": "sphinx",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:exclude",
      "description": {
        "fct-descr": "\u003cp\u003eshortcut for creating an exclusion filter\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Filter -\u003e Filter",
        "fct-source": "src/Text-Search-Sphinx-Types.html#exclude",
        "fct-type": "function",
        "title": "exclude"
      },
      "index": {
        "description": "shortcut for creating an exclusion filter",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "exclude",
        "normalized": "Filter-\u003eFilter",
        "package": "sphinx",
        "partial": "",
        "signature": "Filter-\u003eFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:fromEnumFilter",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Filter -\u003e a",
        "fct-source": "src/Text-Search-Sphinx-Types.html#fromEnumFilter",
        "fct-type": "function",
        "title": "fromEnumFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "fromEnumFilter",
        "normalized": "Filter-\u003ea",
        "package": "sphinx",
        "partial": "Enum Filter",
        "signature": "Filter-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:matches",
      "description": {
        "fct-descr": "\u003cp\u003eThe matches\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "[Match]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "matches"
      },
      "index": {
        "description": "The matches",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "matches",
        "normalized": "[Match]",
        "package": "sphinx",
        "partial": "",
        "signature": "[Match]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryComment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment string.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryComment"
      },
      "index": {
        "description": "comment string",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "queryComment",
        "normalized": "",
        "package": "sphinx",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryIndexes",
      "description": {
        "fct-descr": "\u003cp\u003eThe indexes, \"*\" means every index\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryIndexes"
      },
      "index": {
        "description": "The indexes means every index",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "queryIndexes",
        "normalized": "",
        "package": "sphinx",
        "partial": "Indexes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual query string\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "The actual query string",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "queryString",
        "normalized": "",
        "package": "sphinx",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:searchdCommand",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "SearchdCommand -\u003e Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#searchdCommand",
        "fct-type": "function",
        "title": "searchdCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "searchdCommand",
        "normalized": "SearchdCommand-\u003eInt",
        "package": "sphinx",
        "partial": "Command",
        "signature": "SearchdCommand-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toAttrT",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "a -\u003e AttrT",
        "fct-source": "src/Text-Search-Sphinx-Types.html#toAttrT",
        "fct-type": "function",
        "title": "toAttrT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "toAttrT",
        "normalized": "a-\u003eAttrT",
        "package": "sphinx",
        "partial": "Attr",
        "signature": "a-\u003eAttrT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toQueryStatus",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int -\u003e QueryStatus",
        "fct-source": "src/Text-Search-Sphinx-Types.html#toQueryStatus",
        "fct-type": "function",
        "title": "toQueryStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "toQueryStatus",
        "normalized": "Int-\u003eQueryStatus",
        "package": "sphinx",
        "partial": "Query Status",
        "signature": "Int-\u003eQueryStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:toStatus",
      "description": {
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int -\u003e Status",
        "fct-source": "src/Text-Search-Sphinx-Types.html#toStatus",
        "fct-type": "function",
        "title": "toStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "toStatus",
        "normalized": "Int-\u003eStatus",
        "package": "sphinx",
        "partial": "Status",
        "signature": "Int-\u003eStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:total",
      "description": {
        "fct-descr": "\u003cp\u003eTotal amount of matches retrieved on server by this query.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "total"
      },
      "index": {
        "description": "Total amount of matches retrieved on server by this query",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "total",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:totalFound",
      "description": {
        "fct-descr": "\u003cp\u003eTotal amount of matching documents in index.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "totalFound"
      },
      "index": {
        "description": "Total amount of matching documents in index",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "totalFound",
        "normalized": "",
        "package": "sphinx",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:verCommand",
      "description": {
        "fct-descr": "\u003cp\u003eImportant! 2.0 compatible\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "VerCommand -\u003e a",
        "fct-source": "src/Text-Search-Sphinx-Types.html#verCommand",
        "fct-type": "function",
        "title": "verCommand"
      },
      "index": {
        "description": "Important compatible",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "verCommand",
        "normalized": "VerCommand-\u003ea",
        "package": "sphinx",
        "partial": "Command",
        "signature": "VerCommand-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx-Types.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003eprocessed words with the number of docs and the number of hits.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx.Types",
        "fct-package": "sphinx",
        "fct-signature": "[(Text, Int, Int)]",
        "fct-source": "src/Text-Search-Sphinx-Types.html#QueryResult",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "processed words with the number of docs and the number of hits",
        "hierarchy": "Text Search Sphinx Types",
        "module": "Text.Search.Sphinx.Types",
        "name": "words",
        "normalized": "[(Text,Int,Int)]",
        "package": "sphinx",
        "partial": "",
        "signature": "[(Text,Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#",
      "description": {
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "module",
        "fct-source": "src/Text-Search-Sphinx.html",
        "fct-type": "module",
        "title": "Sphinx"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "Sphinx",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sphinx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#t:Configuration",
      "description": {
        "fct-descr": "\u003cp\u003eThe configuration for a query\n\u003c/p\u003e\u003cp\u003eA note about encodings: The encoding specified here is used to encode\n every \u003ccode\u003eText\u003c/code\u003e value that is sent to the server, and it used to decode all\n of the server's answers, including error messages.\n\u003c/p\u003e\u003cp\u003eIf the specified encoding doesn't support characters sent to the server,\n they will silently be substituted with the byte value of \u003ccode\u003e'\\SUB' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before transmission.\n\u003c/p\u003e\u003cp\u003eIf the server sends a byte value back that the encoding doesn't understand,\n the affected bytes will be converted into special values as\n specified by that encoding. For example, when decoding invalid UTF-8,\n all invalid bytes are going to be substituted with \u003ccode\u003e'\\65533' ::\n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "data",
        "title": "Configuration"
      },
      "index": {
        "description": "The configuration for query note about encodings The encoding specified here is used to encode every Text value that is sent to the server and it used to decode all of the server answers including error messages If the specified encoding doesn support characters sent to the server they will silently be substituted with the byte value of SUB Char before transmission If the server sends byte value back that the encoding doesn understand the affected bytes will be converted into special values as specified by that encoding For example when decoding invalid UTF-8 all invalid bytes are going to be substituted with Char",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "Configuration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eData structure representing one query. It can be sent with \u003ccode\u003erunQueries\u003c/code\u003e\n or \u003ccode\u003erunQueries'\u003c/code\u003e to the server in batch mode.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "data",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "Data structure representing one query It can be sent with runQueries or runQueries to the server in batch mode",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "Query",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:Configuration",
      "description": {
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Configuration",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "Configuration"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "Configuration",
        "normalized": "",
        "package": "sphinx",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:Query",
      "description": {
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Query",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "Query",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:buildExcerpts",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: add configuration options\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "ExcerptConfiguration-\u003e [Text]-\u003e Text-\u003e Text-\u003e IO (Result [Text])",
        "fct-type": "function",
        "title": "buildExcerpts"
      },
      "index": {
        "description": "TODO add configuration options",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "buildExcerpts",
        "normalized": "ExcerptConfiguration-\u003e[Text]-\u003eText-\u003eText-\u003eIO(Result[Text])",
        "package": "sphinx",
        "partial": "Excerpts",
        "signature": "ExcerptConfiguration-\u003e[Text]-\u003eText-\u003eText-\u003eIO(Result[Text])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:cutoff",
      "description": {
        "fct-descr": "\u003cp\u003eCutoff to stop searching at\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "cutoff"
      },
      "index": {
        "description": "Cutoff to stop searching at",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "cutoff",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA basic, default configuration.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Configuration",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "basic default configuration",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "defaultConfig",
        "normalized": "",
        "package": "sphinx",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:encoding",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding used to encode queries to the server, and decode server responses\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "Encoding used to encode queries to the server and decode server responses",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "encoding",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:escapeText",
      "description": {
        "fct-descr": "\u003cp\u003eEscape all possible meta characters.\n   Most of these characters only need to be escaped in certain contexts\n   however, in normal searching they will all be ignored\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Text-Search-Sphinx.html#escapeText",
        "fct-type": "function",
        "title": "escapeText"
      },
      "index": {
        "description": "Escape all possible meta characters Most of these characters only need to be escaped in certain contexts however in normal searching they will all be ignored",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "escapeText",
        "normalized": "Text-\u003eText",
        "package": "sphinx",
        "partial": "Text",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:fieldWeights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-field-name weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "fieldWeights"
      },
      "index": {
        "description": "Per-field-name weights",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "fieldWeights",
        "normalized": "[(String,Int)]",
        "package": "sphinx",
        "partial": "Weights",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:filters",
      "description": {
        "fct-descr": "\u003cp\u003eattribute filters\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "[Filter]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "filters"
      },
      "index": {
        "description": "attribute filters",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "filters",
        "normalized": "[Filter]",
        "package": "sphinx",
        "partial": "",
        "signature": "[Filter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by sorting clause (to sort groups in result set with)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Group-by sorting clause to sort groups in result set with",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "groupBy",
        "normalized": "",
        "package": "sphinx",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupByFunc",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by function (to pre-process group-by attribute value with)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "GroupByFunction",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupByFunc"
      },
      "index": {
        "description": "Group-by function to pre-process group-by attribute value with",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "groupByFunc",
        "normalized": "",
        "package": "sphinx",
        "partial": "By Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupDistinct",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by attribute name \n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupDistinct"
      },
      "index": {
        "description": "Group-by attribute name",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "groupDistinct",
        "normalized": "",
        "package": "sphinx",
        "partial": "Distinct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:groupSort",
      "description": {
        "fct-descr": "\u003cp\u003eGroup-by count-distinct attribute\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "groupSort"
      },
      "index": {
        "description": "Group-by count-distinct attribute",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "groupSort",
        "normalized": "",
        "package": "sphinx",
        "partial": "Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "The hostname of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "host",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:indexWeights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-index weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "indexWeights"
      },
      "index": {
        "description": "Per-index weights",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "indexWeights",
        "normalized": "[(String,Int)]",
        "package": "sphinx",
        "partial": "Weights",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eHow many records to return from result-set starting at offset (default is 20)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "How many records to return from result-set starting at offset default is",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "limit",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxId",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum ID to match, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxId"
      },
      "index": {
        "description": "Maximum ID to match means no limit",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "maxId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxMatches",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of matches to retrieve\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxMatches"
      },
      "index": {
        "description": "Maximum number of matches to retrieve",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "maxMatches",
        "normalized": "",
        "package": "sphinx",
        "partial": "Matches",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maxQueryTime",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum query time in milliseconds, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "maxQueryTime"
      },
      "index": {
        "description": "Maximum query time in milliseconds means no limit",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "maxQueryTime",
        "normalized": "",
        "package": "sphinx",
        "partial": "Query Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:maybeQueries",
      "description": {
        "fct-descr": "\u003cp\u003eexecutes \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e. Log warning and errors, automatically retry.\n Return a Nothing on error, otherwise a Just.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "(Text -\u003e IO ()) -\u003e Configuration -\u003e [Query] -\u003e IO (Maybe [QueryResult])",
        "fct-source": "src/Text-Search-Sphinx.html#maybeQueries",
        "fct-type": "function",
        "title": "maybeQueries"
      },
      "index": {
        "description": "executes runQueries Log warning and errors automatically retry Return Nothing on error otherwise Just",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "maybeQueries",
        "normalized": "(Text-\u003eIO())-\u003eConfiguration-\u003e[Query]-\u003eIO(Maybe[QueryResult])",
        "package": "sphinx",
        "partial": "Queries",
        "signature": "(Text-\u003eIO())-\u003eConfiguration-\u003e[Query]-\u003eIO(Maybe[QueryResult])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:minId",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum ID to match, 0 means no limit\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "minId"
      },
      "index": {
        "description": "Minimum ID to match means no limit",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "minId",
        "normalized": "",
        "package": "sphinx",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eQuery matching mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "MatchMode",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "Query matching mode",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "mode",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:offset",
      "description": {
        "fct-descr": "\u003cp\u003eHow many records to seek from result-set start (default is 0)\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "offset"
      },
      "index": {
        "description": "How many records to seek from result-set start default is",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "offset",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eThe portnumber of the Sphinx daemon\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "The portnumber of the Sphinx daemon",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "port",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e function runs a single query against the Sphinx daemon.\n   To pipeline multiple queries in a batch, use and \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Configuration-\u003e Text-\u003e Text-\u003e IO (Result QueryResult)",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "The query function runs single query against the Sphinx daemon To pipeline multiple queries in batch use and runQueries",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "query",
        "normalized": "Configuration-\u003eText-\u003eText-\u003eIO(Result QueryResult)",
        "package": "sphinx",
        "partial": "",
        "signature": "Configuration-\u003eText-\u003eText-\u003eIO(Result QueryResult)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryComment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment string.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryComment"
      },
      "index": {
        "description": "comment string",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "queryComment",
        "normalized": "",
        "package": "sphinx",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryIndexes",
      "description": {
        "fct-descr": "\u003cp\u003eThe indexes, \"*\" means every index\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryIndexes"
      },
      "index": {
        "description": "The indexes means every index",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "queryIndexes",
        "normalized": "",
        "package": "sphinx",
        "partial": "Indexes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual query string\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Text",
        "fct-source": "src/Text-Search-Sphinx-Types.html#Query",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "The actual query string",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "queryString",
        "normalized": "",
        "package": "sphinx",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:ranker",
      "description": {
        "fct-descr": "\u003cp\u003eRanking mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Rank",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "ranker"
      },
      "index": {
        "description": "Ranking mode",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "ranker",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:resultsToMatches",
      "description": {
        "fct-descr": "\u003cp\u003eCombine results from \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e into matches.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int -\u003e [QueryResult] -\u003e [Match]",
        "fct-source": "src/Text-Search-Sphinx.html#resultsToMatches",
        "fct-type": "function",
        "title": "resultsToMatches"
      },
      "index": {
        "description": "Combine results from runQueries into matches",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "resultsToMatches",
        "normalized": "Int-\u003e[QueryResult]-\u003e[Match]",
        "package": "sphinx",
        "partial": "To Matches",
        "signature": "Int-\u003e[QueryResult]-\u003e[Match]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:retryCount",
      "description": {
        "fct-descr": "\u003cp\u003eDistributed retries count\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "retryCount"
      },
      "index": {
        "description": "Distributed retries count",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "retryCount",
        "normalized": "",
        "package": "sphinx",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:retryDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDistributed retries delay\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Int",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "retryDelay"
      },
      "index": {
        "description": "Distributed retries delay",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "retryDelay",
        "normalized": "",
        "package": "sphinx",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:runQueries",
      "description": {
        "fct-descr": "\u003cp\u003eMake multiple queries at once, using a list of \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n For a single query, just use the query method\n Easier handling of query result than runQueries'\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Configuration -\u003e [Query] -\u003e IO (Result [QueryResult])",
        "fct-source": "src/Text-Search-Sphinx.html#runQueries",
        "fct-type": "function",
        "title": "runQueries"
      },
      "index": {
        "description": "Make multiple queries at once using list of Query For single query just use the query method Easier handling of query result than runQueries",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "runQueries",
        "normalized": "Configuration-\u003e[Query]-\u003eIO(Result[QueryResult])",
        "package": "sphinx",
        "partial": "Queries",
        "signature": "Configuration-\u003e[Query]-\u003eIO(Result[QueryResult])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:runQueries-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLower level- called by \u003ccode\u003e\u003ca\u003erunQueries\u003c/a\u003e\u003c/code\u003e.\n This may be useful for debugging problems- warning messages won't get compressed\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Configuration -\u003e [Query] -\u003e IO (Result [SingleResult])",
        "fct-source": "src/Text-Search-Sphinx.html#runQueries%27",
        "fct-type": "function",
        "title": "runQueries'"
      },
      "index": {
        "description": "Lower level called by runQueries This may be useful for debugging problems warning messages won get compressed",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "runQueries'",
        "normalized": "Configuration-\u003e[Query]-\u003eIO(Result[SingleResult])",
        "package": "sphinx",
        "partial": "Queries'",
        "signature": "Configuration-\u003e[Query]-\u003eIO(Result[SingleResult])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:selectClause",
      "description": {
        "fct-descr": "\u003cp\u003eattributes to select, defaults to \"*\"\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "selectClause"
      },
      "index": {
        "description": "attributes to select defaults to",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "selectClause",
        "normalized": "",
        "package": "sphinx",
        "partial": "Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:simpleQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience function which accepts a search string and\n builds a query for that string over all indexes without attaching\n comments to the queries.\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Text-\u003e Query",
        "fct-type": "function",
        "title": "simpleQuery"
      },
      "index": {
        "description": "This is convenience function which accepts search string and builds query for that string over all indexes without attaching comments to the queries",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "simpleQuery",
        "normalized": "Text-\u003eQuery",
        "package": "sphinx",
        "partial": "Query",
        "signature": "Text-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eMatch sorting mode\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "Sort",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Match sorting mode",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "sort",
        "normalized": "",
        "package": "sphinx",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eAttribute to sort by\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "String",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Attribute to sort by",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "sortBy",
        "normalized": "",
        "package": "sphinx",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sphinx/docs/Text-Search-Sphinx.html#v:weights",
      "description": {
        "fct-descr": "\u003cp\u003ePer-field weights\n\u003c/p\u003e",
        "fct-module": "Text.Search.Sphinx",
        "fct-package": "sphinx",
        "fct-signature": "[Int]",
        "fct-source": "src/Text-Search-Sphinx-Configuration.html#Configuration",
        "fct-type": "function",
        "title": "weights"
      },
      "index": {
        "description": "Per-field weights",
        "hierarchy": "Text Search Sphinx",
        "module": "Text.Search.Sphinx",
        "name": "weights",
        "normalized": "[Int]",
        "package": "sphinx",
        "partial": "",
        "signature": "[Int]"
      }
    }
  }
]