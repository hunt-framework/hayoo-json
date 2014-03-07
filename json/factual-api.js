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
        "word": "factual-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create diffs queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-DiffsQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create diffs queries",
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "partial": "Diffs Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe DiffsQuery type is used to construct diffs queries. A table, start\n   timestamp and end timestamp should be specified.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-DiffsQuery.html#DiffsQuery",
          "type": "data"
        },
        "index": {
          "description": "The DiffsQuery type is used to construct diffs queries table start timestamp and end timestamp should be specified",
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "partial": "Diffs Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#t:DiffsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "signature": "DiffsQuery",
          "source": "src/Data-Factual-Query-DiffsQuery.html#DiffsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "DiffsQuery",
          "package": "factual-api",
          "partial": "Diffs Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#v:DiffsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "end",
          "package": "factual-api",
          "signature": "Timestamp",
          "source": "src/Data-Factual-Query-DiffsQuery.html#DiffsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "end",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "start",
          "package": "factual-api",
          "signature": "Timestamp",
          "source": "src/Data-Factual-Query-DiffsQuery.html#DiffsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "start",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Query-DiffsQuery.html#DiffsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query DiffsQuery",
          "module": "Data.Factual.Query.DiffsQuery",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-DiffsQuery.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create facets queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-FacetsQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create facets queries",
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "partial": "Facets Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe FacetsQuery type is used to construct facets queries. A table and search\n   should be specified, but the rest of the query options are essentially\n   optional.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "data"
        },
        "index": {
          "description": "The FacetsQuery type is used to construct facets queries table and search should be specified but the rest of the query options are essentially optional",
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "partial": "Facets Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#t:FacetsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "signature": "FacetsQuery",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "FacetsQuery",
          "package": "factual-api",
          "partial": "Facets Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:FacetsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "filters",
          "package": "factual-api",
          "signature": "[Filter]",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "filters",
          "normalized": "[Filter]",
          "package": "factual-api",
          "signature": "[Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:filters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "geo",
          "package": "factual-api",
          "signature": "Maybe Geo",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "geo",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "includeCount",
          "package": "factual-api",
          "signature": "Bool",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "includeCount",
          "package": "factual-api",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:includeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "limit",
          "package": "factual-api",
          "signature": "Maybe Int",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "limit",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "minCount",
          "package": "factual-api",
          "signature": "Maybe Int",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "minCount",
          "package": "factual-api",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:minCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "search",
          "package": "factual-api",
          "signature": "Search",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "search",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "select",
          "package": "factual-api",
          "signature": "[String]",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "select",
          "normalized": "[String]",
          "package": "factual-api",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Query-FacetsQuery.html#FacetsQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query FacetsQuery",
          "module": "Data.Factual.Query.FacetsQuery",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-FacetsQuery.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to create geopulse queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-GeocodeQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to create geopulse queries",
          "hierarchy": "Data Factual Query GeocodeQuery",
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "partial": "Geocode Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeocodeQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GeocodeQuery type is used to construct geocode queries. A geo point\n   is required.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-GeocodeQuery.html#GeocodeQuery",
          "type": "data"
        },
        "index": {
          "description": "The GeocodeQuery type is used to construct geocode queries geo point is required",
          "hierarchy": "Data Factual Query GeocodeQuery",
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "partial": "Geocode Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeocodeQuery.html#t:GeocodeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "signature": "GeocodeQuery Geo",
          "source": "src/Data-Factual-Query-GeocodeQuery.html#GeocodeQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query GeocodeQuery",
          "module": "Data.Factual.Query.GeocodeQuery",
          "name": "GeocodeQuery",
          "package": "factual-api",
          "partial": "Geocode Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeocodeQuery.html#v:GeocodeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to create geopulse queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-GeopulseQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to create geopulse queries",
          "hierarchy": "Data Factual Query GeopulseQuery",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "partial": "Geopulse Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeopulseQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GeopulseQuery type is used to construct geopulse queries. A geo point\n   is required but select values are optional (just use an empty list to\n   denote selecting all pulses).\n\u003c/p\u003e",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-GeopulseQuery.html#GeopulseQuery",
          "type": "data"
        },
        "index": {
          "description": "The GeopulseQuery type is used to construct geopulse queries geo point is required but select values are optional just use an empty list to denote selecting all pulses",
          "hierarchy": "Data Factual Query GeopulseQuery",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "partial": "Geopulse Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeopulseQuery.html#t:GeopulseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "signature": "GeopulseQuery",
          "source": "src/Data-Factual-Query-GeopulseQuery.html#GeopulseQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query GeopulseQuery",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "GeopulseQuery",
          "package": "factual-api",
          "partial": "Geopulse Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeopulseQuery.html#v:GeopulseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "geo",
          "package": "factual-api",
          "signature": "Geo",
          "source": "src/Data-Factual-Query-GeopulseQuery.html#GeopulseQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query GeopulseQuery",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "geo",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeopulseQuery.html#v:geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "select",
          "package": "factual-api",
          "signature": "[String]",
          "source": "src/Data-Factual-Query-GeopulseQuery.html#GeopulseQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query GeopulseQuery",
          "module": "Data.Factual.Query.GeopulseQuery",
          "name": "select",
          "normalized": "[String]",
          "package": "factual-api",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-GeopulseQuery.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to create match queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-MatchQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to create match queries",
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "package": "factual-api",
          "partial": "Match Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA match query is formed as an array of match values. These values will\n   be compared with Factual records to return a cleaner, more canonical row\n   of data.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-MatchQuery.html#MatchQuery",
          "type": "data"
        },
        "index": {
          "description": "match query is formed as an array of match values These values will be compared with Factual records to return cleaner more canonical row of data",
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "package": "factual-api",
          "partial": "Match Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#t:MatchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA match value can either be a String or a Number (Double). The first\n   argument is the name of the field and the second argument is the input\n   value.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchValue",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-MatchQuery.html#MatchValue",
          "type": "data"
        },
        "index": {
          "description": "match value can either be String or Number Double The first argument is the name of the field and the second argument is the input value",
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchValue",
          "package": "factual-api",
          "partial": "Match Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#t:MatchValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchNum",
          "package": "factual-api",
          "signature": "MatchNum String Double",
          "source": "src/Data-Factual-Query-MatchQuery.html#MatchValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchNum",
          "package": "factual-api",
          "partial": "Match Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#v:MatchNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "package": "factual-api",
          "signature": "MatchQuery [MatchValue]",
          "source": "src/Data-Factual-Query-MatchQuery.html#MatchQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchQuery",
          "normalized": "MatchQuery[MatchValue]",
          "package": "factual-api",
          "partial": "Match Query",
          "signature": "MatchQuery[MatchValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#v:MatchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchStr",
          "package": "factual-api",
          "signature": "MatchStr String String",
          "source": "src/Data-Factual-Query-MatchQuery.html#MatchValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query MatchQuery",
          "module": "Data.Factual.Query.MatchQuery",
          "name": "MatchStr",
          "package": "factual-api",
          "partial": "Match Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-MatchQuery.html#v:MatchStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create read queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-ReadQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create read queries",
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "partial": "Read Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ReadQuery type is used to construct read queries. A table should be\n   specified, but the rest of the query options are essentially optional\n   (you opt out using Nothing or an empty List for the value). The select is\n   a list of field names to include in the results. The limit and offset are\n   used to request a specific range of rows and includeCount will include the\n   count of returned rows if it is set to True.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "data"
        },
        "index": {
          "description": "The ReadQuery type is used to construct read queries table should be specified but the rest of the query options are essentially optional you opt out using Nothing or an empty List for the value The select is list of field names to include in the results The limit and offset are used to request specific range of rows and includeCount will include the count of returned rows if it is set to True",
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "partial": "Read Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#t:ReadQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "signature": "ReadQuery",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "ReadQuery",
          "package": "factual-api",
          "partial": "Read Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:ReadQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "filters",
          "package": "factual-api",
          "signature": "[Filter]",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "filters",
          "normalized": "[Filter]",
          "package": "factual-api",
          "signature": "[Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:filters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "geo",
          "package": "factual-api",
          "signature": "Maybe Geo",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "geo",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "includeCount",
          "package": "factual-api",
          "signature": "Bool",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "includeCount",
          "package": "factual-api",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:includeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "limit",
          "package": "factual-api",
          "signature": "Maybe Int",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "limit",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "offset",
          "package": "factual-api",
          "signature": "Maybe Int",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "offset",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "search",
          "package": "factual-api",
          "signature": "Search",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "search",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "select",
          "package": "factual-api",
          "signature": "[String]",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "select",
          "normalized": "[String]",
          "package": "factual-api",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "sort",
          "package": "factual-api",
          "signature": "[SortOrder]",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "sort",
          "normalized": "[SortOrder]",
          "package": "factual-api",
          "signature": "[SortOrder]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ReadQuery",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Query-ReadQuery.html#ReadQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ReadQuery",
          "module": "Data.Factual.Query.ReadQuery",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ReadQuery.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to create resolve queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-ResolveQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to create resolve queries",
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "partial": "Resolve Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA resolve query is formed as an array of resolve values. These values will\n   be compared with Factual records to return a cleaner, more canonical row\n   of data.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveQuery",
          "type": "data"
        },
        "index": {
          "description": "resolve query is formed as an array of resolve values These values will be compared with Factual records to return cleaner more canonical row of data",
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "partial": "Resolve Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#t:ResolveQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA resolve value can either be a String or a Number (Double). The first\n   argument is the name of the field and the second argument is the input\n   value.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveValue",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveValue",
          "type": "data"
        },
        "index": {
          "description": "resolve value can either be String or Number Double The first argument is the name of the field and the second argument is the input value",
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveValue",
          "package": "factual-api",
          "partial": "Resolve Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#t:ResolveValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveNum",
          "package": "factual-api",
          "signature": "ResolveNum String Double",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveNum",
          "package": "factual-api",
          "partial": "Resolve Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#v:ResolveNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "signature": "ResolveQuery",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveQuery",
          "package": "factual-api",
          "partial": "Resolve Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#v:ResolveQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveStr",
          "package": "factual-api",
          "signature": "ResolveStr String String",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "ResolveStr",
          "package": "factual-api",
          "partial": "Resolve Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#v:ResolveStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "debug",
          "package": "factual-api",
          "signature": "Bool",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "debug",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "values",
          "package": "factual-api",
          "signature": "[ResolveValue]",
          "source": "src/Data-Factual-Query-ResolveQuery.html#ResolveQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query ResolveQuery",
          "module": "Data.Factual.Query.ResolveQuery",
          "name": "values",
          "normalized": "[ResolveValue]",
          "package": "factual-api",
          "signature": "[ResolveValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-ResolveQuery.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to create schema queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-SchemaQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to create schema queries",
          "hierarchy": "Data Factual Query SchemaQuery",
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "partial": "Schema Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-SchemaQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA schema query is formed by simply supplying a Table to the value\n   constructor.\n\u003c/p\u003e",
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "source": "src/Data-Factual-Query-SchemaQuery.html#SchemaQuery",
          "type": "data"
        },
        "index": {
          "description": "schema query is formed by simply supplying Table to the value constructor",
          "hierarchy": "Data Factual Query SchemaQuery",
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "partial": "Schema Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-SchemaQuery.html#t:SchemaQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "signature": "SchemaQuery Table",
          "source": "src/Data-Factual-Query-SchemaQuery.html#SchemaQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Query SchemaQuery",
          "module": "Data.Factual.Query.SchemaQuery",
          "name": "SchemaQuery",
          "package": "factual-api",
          "partial": "Schema Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query-SchemaQuery.html#v:SchemaQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the definition of the Query typeclass.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Query",
          "name": "Query",
          "package": "factual-api",
          "source": "src/Data-Factual-Query.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the definition of the Query typeclass",
          "hierarchy": "Data Factual Query",
          "module": "Data.Factual.Query",
          "name": "Query",
          "package": "factual-api",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA member of the Query typeclass must define a path function which outputs\n   the Query endpoint path, and a params function that outputs a Map of query\n   params keys and values.\n\u003c/p\u003e",
          "module": "Data.Factual.Query",
          "name": "Query",
          "package": "factual-api",
          "source": "src/Data-Factual-Query.html#Query",
          "type": "class"
        },
        "index": {
          "description": "member of the Query typeclass must define path function which outputs the Query endpoint path and params function that outputs Map of query params keys and values",
          "hierarchy": "Data Factual Query",
          "module": "Data.Factual.Query",
          "name": "Query",
          "package": "factual-api",
          "partial": "Query",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query",
          "name": "params",
          "package": "factual-api",
          "signature": "q -\u003e Map String String",
          "source": "src/Data-Factual-Query.html#params",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Factual Query",
          "module": "Data.Factual.Query",
          "name": "params",
          "normalized": "a-\u003eMap String String",
          "package": "factual-api",
          "signature": "q-\u003eMap String String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Query",
          "name": "path",
          "package": "factual-api",
          "signature": "q -\u003e String",
          "source": "src/Data-Factual-Query.html#path",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Factual Query",
          "module": "Data.Factual.Query",
          "name": "path",
          "normalized": "a-\u003eString",
          "package": "factual-api",
          "signature": "q-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Query.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type which encapsulates Factual API responses. It\n   also provides some utility function that can be used to manipulate the\n   Aeson object which holds the data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "source": "src/Data-Factual-Response.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type which encapsulates Factual API responses It also provides some utility function that can be used to manipulate the Aeson object which holds the data",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA response object has a status (that will be ok if the query was successful\n   and error if the query failed), a version (which should always be 3.0) and\n   the actual response data which is an Aeson value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "data"
        },
        "index": {
          "description": "response object has status that will be ok if the query was successful and error if the query failed version which should always be and the actual response data which is an Aeson value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "Value",
          "package": "factual-api",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "Value",
          "package": "factual-api",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "signature": "Response",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "Response",
          "package": "factual-api",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "errorMessage",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "errorMessage",
          "package": "factual-api",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "errorType",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "errorType",
          "package": "factual-api",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:errorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used by the API module to turn the Aeson value returned by\n   the API into a Response value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "fromValue",
          "package": "factual-api",
          "signature": "Value -\u003e Response",
          "source": "src/Data-Factual-Response.html#fromValue",
          "type": "function"
        },
        "index": {
          "description": "This function is used by the API module to turn the Aeson value returned by the API into Response value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "fromValue",
          "normalized": "Value-\u003eResponse",
          "package": "factual-api",
          "partial": "Value",
          "signature": "Value-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:fromValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to extract a Double from an Aeson Object\n   (HashMap) value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "lookupNumber",
          "package": "factual-api",
          "signature": "String -\u003e Value -\u003e Double",
          "source": "src/Data-Factual-Response.html#lookupNumber",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to extract Double from an Aeson Object HashMap value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "lookupNumber",
          "normalized": "String-\u003eValue-\u003eDouble",
          "package": "factual-api",
          "partial": "Number",
          "signature": "String-\u003eValue-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:lookupNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to extract a String from an Aeson Object\n   (HashMap) value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "lookupString",
          "package": "factual-api",
          "signature": "String -\u003e Value -\u003e String",
          "source": "src/Data-Factual-Response.html#lookupString",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to extract String from an Aeson Object HashMap value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "lookupString",
          "normalized": "String-\u003eValue-\u003eString",
          "package": "factual-api",
          "partial": "String",
          "signature": "String-\u003eValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:lookupString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to extract any Aeson value from an Aeson Object\n   (HashMap) value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "lookupValue",
          "package": "factual-api",
          "signature": "String -\u003e Value -\u003e Value",
          "source": "src/Data-Factual-Response.html#lookupValue",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to extract any Aeson value from an Aeson Object HashMap value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "lookupValue",
          "normalized": "String-\u003eValue-\u003eValue",
          "package": "factual-api",
          "partial": "Value",
          "signature": "String-\u003eValue-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:lookupValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to safely extract any Aeson value from an Aeson\n    Object (HashMap) value.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "lookupValueSafe",
          "package": "factual-api",
          "signature": "String -\u003e Value -\u003e Maybe Value",
          "source": "src/Data-Factual-Response.html#lookupValueSafe",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to safely extract any Aeson value from an Aeson Object HashMap value",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "lookupValueSafe",
          "normalized": "String-\u003eValue-\u003eMaybe Value",
          "package": "factual-api",
          "partial": "Value Safe",
          "signature": "String-\u003eValue-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:lookupValueSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "response",
          "package": "factual-api",
          "signature": "Value",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "response",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "status",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "status",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to convert an Aeson Array value into a vanilla\n   list.\n\u003c/p\u003e",
          "module": "Data.Factual.Response",
          "name": "toList",
          "package": "factual-api",
          "signature": "Value -\u003e [Value]",
          "source": "src/Data-Factual-Response.html#toList",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to convert an Aeson Array value into vanilla list",
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "toList",
          "normalized": "Value-\u003e[Value]",
          "package": "factual-api",
          "partial": "List",
          "signature": "Value-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Response",
          "name": "version",
          "package": "factual-api",
          "signature": "Double",
          "source": "src/Data-Factual-Response.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Response",
          "module": "Data.Factual.Response",
          "name": "version",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Response.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the Filter type used to create read and facet queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "Filter",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Filter.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the Filter type used to create read and facet queries",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "Filter",
          "package": "factual-api",
          "partial": "Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Field is a String representation of the field name.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "Field",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Filter.html#Field",
          "type": "type"
        },
        "index": {
          "description": "Field is String representation of the field name",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "Field",
          "package": "factual-api",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Filter type is used to represent various filters in a read or facets query.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "Filter",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "The Filter type is used to represent various filters in read or facets query",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "Filter",
          "package": "factual-api",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm an AND condition with the filters in the list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "And",
          "package": "factual-api",
          "signature": "And [Filter]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "Form an AND condition with the filters in the list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "And",
          "normalized": "And[Filter]",
          "package": "factual-api",
          "partial": "And",
          "signature": "And[Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must begin with a specific string.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "BeginsWith",
          "package": "factual-api",
          "signature": "BeginsWith Field String",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must begin with specific string",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "BeginsWith",
          "package": "factual-api",
          "partial": "Begins With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:BeginsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must begin with any of the strings in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "BeginsWithAny",
          "package": "factual-api",
          "signature": "BeginsWithAny Field [String]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must begin with any of the strings in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "BeginsWithAny",
          "normalized": "BeginsWithAny Field[String]",
          "package": "factual-api",
          "partial": "Begins With Any",
          "signature": "BeginsWithAny Field[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:BeginsWithAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric field has to match a number exactly.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "EqualNum",
          "package": "factual-api",
          "signature": "EqualNum Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "numeric field has to match number exactly",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "EqualNum",
          "package": "factual-api",
          "partial": "Equal Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:EqualNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field has to match a string exactly.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "EqualStr",
          "package": "factual-api",
          "signature": "EqualStr Field String",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field has to match string exactly",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "EqualStr",
          "package": "factual-api",
          "partial": "Equal Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:EqualStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must be greater than the given value.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "GreaterThan",
          "package": "factual-api",
          "signature": "GreaterThan Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must be greater than the given value",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "GreaterThan",
          "package": "factual-api",
          "partial": "Greater Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:GreaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must be greater than or equal to the given value.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "GreaterThanOrEqualTo",
          "package": "factual-api",
          "signature": "GreaterThanOrEqualTo Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must be greater than or equal to the given value",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "GreaterThanOrEqualTo",
          "package": "factual-api",
          "partial": "Greater Than Or Equal To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:GreaterThanOrEqualTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric field must be equal to any of the numbers in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "InNumList",
          "package": "factual-api",
          "signature": "InNumList Field [Double]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "numeric field must be equal to any of the numbers in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "InNumList",
          "normalized": "InNumList Field[Double]",
          "package": "factual-api",
          "partial": "In Num List",
          "signature": "InNumList Field[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:InNumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must be equal to any of the strings in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "InStrList",
          "package": "factual-api",
          "signature": "InStrList Field [String]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must be equal to any of the strings in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "InStrList",
          "normalized": "InStrList Field[String]",
          "package": "factual-api",
          "partial": "In Str List",
          "signature": "InStrList Field[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:InStrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must be blank.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "IsBlank",
          "package": "factual-api",
          "signature": "IsBlank Field",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must be blank",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "IsBlank",
          "package": "factual-api",
          "partial": "Is Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:IsBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must not be blank.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "IsNotBlank",
          "package": "factual-api",
          "signature": "IsNotBlank Field",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must not be blank",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "IsNotBlank",
          "package": "factual-api",
          "partial": "Is Not Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:IsNotBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must be less than the given value.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "LessThan",
          "package": "factual-api",
          "signature": "LessThan Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must be less than the given value",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "LessThan",
          "package": "factual-api",
          "partial": "Less Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:LessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must be less than or equal to the given value.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "LessThanOrEqualTo",
          "package": "factual-api",
          "signature": "LessThanOrEqualTo Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must be less than or equal to the given value",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "LessThanOrEqualTo",
          "package": "factual-api",
          "partial": "Less Than Or Equal To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:LessThanOrEqualTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must not begin with a specific string.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotBeginsWith",
          "package": "factual-api",
          "signature": "NotBeginsWith Field String",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must not begin with specific string",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotBeginsWith",
          "package": "factual-api",
          "partial": "Not Begins With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotBeginsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must not begin with any of the strings in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotBeginsWithAny",
          "package": "factual-api",
          "signature": "NotBeginsWithAny Field [String]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must not begin with any of the strings in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotBeginsWithAny",
          "normalized": "NotBeginsWithAny Field[String]",
          "package": "factual-api",
          "partial": "Not Begins With Any",
          "signature": "NotBeginsWithAny Field[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotBeginsWithAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric field must equal a specific number.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotEqualNum",
          "package": "factual-api",
          "signature": "NotEqualNum Field Double",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "numeric field must equal specific number",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotEqualNum",
          "package": "factual-api",
          "partial": "Not Equal Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotEqualNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must equal a specific string.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotEqualStr",
          "package": "factual-api",
          "signature": "NotEqualStr Field String",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must equal specific string",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotEqualStr",
          "package": "factual-api",
          "partial": "Not Equal Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotEqualStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric field must not be equal to any of the numbers in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotInNumList",
          "package": "factual-api",
          "signature": "NotInNumList Field [Double]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "numeric field must not be equal to any of the numbers in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotInNumList",
          "normalized": "NotInNumList Field[Double]",
          "package": "factual-api",
          "partial": "Not In Num List",
          "signature": "NotInNumList Field[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotInNumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string field must not be equal to any of the strings in a list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotInStrList",
          "package": "factual-api",
          "signature": "NotInStrList Field [String]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "string field must not be equal to any of the strings in list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "NotInStrList",
          "normalized": "NotInStrList Field[String]",
          "package": "factual-api",
          "partial": "Not In Str List",
          "signature": "NotInStrList Field[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:NotInStrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm an OR condition with the filters in the list.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "Or",
          "package": "factual-api",
          "signature": "Or [Filter]",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "Form an OR condition with the filters in the list",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "Or",
          "normalized": "Or[Filter]",
          "package": "factual-api",
          "partial": "Or",
          "signature": "Or[Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field must match of full text search with the given string.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Filter",
          "name": "SearchFilter",
          "package": "factual-api",
          "signature": "SearchFilter Field String",
          "source": "src/Data-Factual-Shared-Filter.html#Filter",
          "type": "function"
        },
        "index": {
          "description": "field must match of full text search with the given string",
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "SearchFilter",
          "package": "factual-api",
          "partial": "Search Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:SearchFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Filter",
          "name": "filtersPair",
          "package": "factual-api",
          "signature": "[Filter] -\u003e (String, String)",
          "source": "src/Data-Factual-Shared-Filter.html#filtersPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Filter",
          "module": "Data.Factual.Shared.Filter",
          "name": "filtersPair",
          "normalized": "[Filter]-\u003e(String,String)",
          "package": "factual-api",
          "partial": "Pair",
          "signature": "[Filter]-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Filter.html#v:filtersPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the Geo type used to create read and facet queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Shared.Geo",
          "name": "Geo",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Geo.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the Geo type used to create read and facet queries",
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Geo",
          "package": "factual-api",
          "partial": "Geo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Geo type is used to limit the search to specific geograph location.\n   Currently, only circles are supported. Supply a latitude, longitude and\n   radius in meters for the circle.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Geo",
          "name": "Geo",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Geo.html#Geo",
          "type": "data"
        },
        "index": {
          "description": "The Geo type is used to limit the search to specific geograph location Currently only circles are supported Supply latitude longitude and radius in meters for the circle",
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Geo",
          "package": "factual-api",
          "partial": "Geo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#t:Geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Lat is the latitude represented as a Double.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Geo",
          "name": "Lat",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Geo.html#Lat",
          "type": "type"
        },
        "index": {
          "description": "Lat is the latitude represented as Double",
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Lat",
          "package": "factual-api",
          "partial": "Lat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#t:Lat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Long is the longitude represented as a Double.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Geo",
          "name": "Long",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Geo.html#Long",
          "type": "type"
        },
        "index": {
          "description": "Long is the longitude represented as Double",
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Long",
          "package": "factual-api",
          "partial": "Long",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#t:Long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Radius is the radius of the circle as a Double in meters.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Geo",
          "name": "Radius",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Geo.html#Radius",
          "type": "type"
        },
        "index": {
          "description": "Radius is the radius of the circle as Double in meters",
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Radius",
          "package": "factual-api",
          "partial": "Radius",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#t:Radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Geo",
          "name": "Circle",
          "package": "factual-api",
          "signature": "Circle Lat Long Radius",
          "source": "src/Data-Factual-Shared-Geo.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Circle",
          "package": "factual-api",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Geo",
          "name": "Point",
          "package": "factual-api",
          "signature": "Point Lat Long",
          "source": "src/Data-Factual-Shared-Geo.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "Point",
          "package": "factual-api",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Geo",
          "name": "geoPair",
          "package": "factual-api",
          "signature": "Maybe Geo -\u003e (String, String)",
          "source": "src/Data-Factual-Shared-Geo.html#geoPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Geo",
          "module": "Data.Factual.Shared.Geo",
          "name": "geoPair",
          "normalized": "Maybe Geo-\u003e(String,String)",
          "package": "factual-api",
          "partial": "Pair",
          "signature": "Maybe Geo-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Geo.html#v:geoPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the Search type used to create read and facet queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Shared.Search",
          "name": "Search",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Search.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the Search type used to create read and facet queries",
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "Search",
          "package": "factual-api",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to construct an ANDed or ORed search in a query.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Search",
          "name": "Search",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Search.html#Search",
          "type": "data"
        },
        "index": {
          "description": "This type is used to construct an ANDed or ORed search in query",
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "Search",
          "package": "factual-api",
          "partial": "Search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#t:Search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Search",
          "name": "AndSearch",
          "package": "factual-api",
          "signature": "AndSearch [String]",
          "source": "src/Data-Factual-Shared-Search.html#Search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "AndSearch",
          "normalized": "AndSearch[String]",
          "package": "factual-api",
          "partial": "And Search",
          "signature": "AndSearch[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#v:AndSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Search",
          "name": "NoSearch",
          "package": "factual-api",
          "signature": "NoSearch",
          "source": "src/Data-Factual-Shared-Search.html#Search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "NoSearch",
          "package": "factual-api",
          "partial": "No Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#v:NoSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Search",
          "name": "OrSearch",
          "package": "factual-api",
          "signature": "OrSearch [String]",
          "source": "src/Data-Factual-Shared-Search.html#Search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "OrSearch",
          "normalized": "OrSearch[String]",
          "package": "factual-api",
          "partial": "Or Search",
          "signature": "OrSearch[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#v:OrSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Search",
          "name": "searchPair",
          "package": "factual-api",
          "signature": "Search -\u003e (String, String)",
          "source": "src/Data-Factual-Shared-Search.html#searchPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Search",
          "module": "Data.Factual.Shared.Search",
          "name": "searchPair",
          "normalized": "Search-\u003e(String,String)",
          "package": "factual-api",
          "partial": "Pair",
          "signature": "Search-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Search.html#v:searchPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the SortOrder type used to create read and facet queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "SortOrder",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-SortOrder.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the SortOrder type used to create read and facet queries",
          "hierarchy": "Data Factual Shared SortOrder",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "SortOrder",
          "package": "factual-api",
          "partial": "Sort Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-SortOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SortOrder type is used to represent sorting parameters\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "SortOrder",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-SortOrder.html#SortOrder",
          "type": "data"
        },
        "index": {
          "description": "The SortOrder type is used to represent sorting parameters",
          "hierarchy": "Data Factual Shared SortOrder",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "SortOrder",
          "package": "factual-api",
          "partial": "Sort Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-SortOrder.html#t:SortOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.SortOrder",
          "name": "Asc",
          "package": "factual-api",
          "signature": "Asc String",
          "source": "src/Data-Factual-Shared-SortOrder.html#SortOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared SortOrder",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "Asc",
          "package": "factual-api",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-SortOrder.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.SortOrder",
          "name": "Desc",
          "package": "factual-api",
          "signature": "Desc String",
          "source": "src/Data-Factual-Shared-SortOrder.html#SortOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared SortOrder",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "Desc",
          "package": "factual-api",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-SortOrder.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.SortOrder",
          "name": "sortPair",
          "package": "factual-api",
          "signature": "[SortOrder] -\u003e (String, String)",
          "source": "src/Data-Factual-Shared-SortOrder.html#sortPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared SortOrder",
          "module": "Data.Factual.Shared.SortOrder",
          "name": "sortPair",
          "normalized": "[SortOrder]-\u003e(String,String)",
          "package": "factual-api",
          "partial": "Pair",
          "signature": "[SortOrder]-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-SortOrder.html#v:sortPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type used to represent a table for the read or\n   schema query types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Shared.Table",
          "name": "Table",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Table.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the type used to represent table for the read or schema query types",
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Table",
          "package": "factual-api",
          "partial": "Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type defines the available tables. Use the Custom table option for\n   tables that are not listed you.\n\u003c/p\u003e",
          "module": "Data.Factual.Shared.Table",
          "name": "Table",
          "package": "factual-api",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "data"
        },
        "index": {
          "description": "This type defines the available tables Use the Custom table option for tables that are not listed you",
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Table",
          "package": "factual-api",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "Crosswalk",
          "package": "factual-api",
          "signature": "Crosswalk",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Crosswalk",
          "package": "factual-api",
          "partial": "Crosswalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:Crosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "Custom",
          "package": "factual-api",
          "signature": "Custom String",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Custom",
          "package": "factual-api",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "Global",
          "package": "factual-api",
          "signature": "Global",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Global",
          "package": "factual-api",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "HealthCareProviders",
          "package": "factual-api",
          "signature": "HealthCareProviders",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "HealthCareProviders",
          "package": "factual-api",
          "partial": "Health Care Providers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:HealthCareProviders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "HotelsUS",
          "package": "factual-api",
          "signature": "HotelsUS",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "HotelsUS",
          "package": "factual-api",
          "partial": "Hotels US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:HotelsUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "Monetize",
          "package": "factual-api",
          "signature": "Monetize",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Monetize",
          "package": "factual-api",
          "partial": "Monetize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:Monetize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "Places",
          "package": "factual-api",
          "signature": "Places",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "Places",
          "package": "factual-api",
          "partial": "Places",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:Places"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "ProductsCPG",
          "package": "factual-api",
          "signature": "ProductsCPG",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "ProductsCPG",
          "package": "factual-api",
          "partial": "Products CPG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:ProductsCPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "ProductsCrosswalk",
          "package": "factual-api",
          "signature": "ProductsCrosswalk",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "ProductsCrosswalk",
          "package": "factual-api",
          "partial": "Products Crosswalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:ProductsCrosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "RestaurantsUS",
          "package": "factual-api",
          "signature": "RestaurantsUS",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "RestaurantsUS",
          "package": "factual-api",
          "partial": "Restaurants US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:RestaurantsUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Shared.Table",
          "name": "WorldGeographies",
          "package": "factual-api",
          "signature": "WorldGeographies",
          "source": "src/Data-Factual-Shared-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Shared Table",
          "module": "Data.Factual.Shared.Table",
          "name": "WorldGeographies",
          "package": "factual-api",
          "partial": "World Geographies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Shared-Table.html#v:WorldGeographies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to clear fields.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Clear.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to clear fields",
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "partial": "Clear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Clear type represents a Write to be made to the API which will clear\n   certain fields from an entry. The table and factualId identify the row to\n   be changed, and the fields list indicates which fields to clear out. A user\n   must be specified as well.\n\u003c/p\u003e",
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "data"
        },
        "index": {
          "description": "The Clear type represents Write to be made to the API which will clear certain fields from an entry The table and factualId identify the row to be changed and the fields list indicates which fields to clear out user must be specified as well",
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "partial": "Clear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#t:Clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "signature": "Clear",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "Clear",
          "package": "factual-api",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#v:Clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Clear",
          "name": "factualId",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "factualId",
          "package": "factual-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#v:factualId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Clear",
          "name": "fields",
          "package": "factual-api",
          "signature": "[String]",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "fields",
          "normalized": "[String]",
          "package": "factual-api",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Clear",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Clear",
          "name": "user",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Clear.html#Clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Clear",
          "module": "Data.Factual.Write.Clear",
          "name": "user",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Clear.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create flag writes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Flag.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create flag writes",
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "partial": "Flag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Flag type represents a Write to be made to the API which flags a\n   row as having some kind of problem. The table and factualId identify the\n   problematic row, while the problem indicates the type of issue the row\n   has. The user is specified as a string. Other fields such as comment and\n   reference are optional. The debug flag is used to write in debug mode.\n\u003c/p\u003e",
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "The Flag type represents Write to be made to the API which flags row as having some kind of problem The table and factualId identify the problematic row while the problem indicates the type of issue the row has The user is specified as string Other fields such as comment and reference are optional The debug flag is used to write in debug mode",
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Problem represents what is wrong with the row being flagged\n\u003c/p\u003e",
          "module": "Data.Factual.Write.Flag",
          "name": "Problem",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "data"
        },
        "index": {
          "description": "Problem represents what is wrong with the row being flagged",
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Problem",
          "package": "factual-api",
          "partial": "Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#t:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Duplicate",
          "package": "factual-api",
          "signature": "Duplicate",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Duplicate",
          "package": "factual-api",
          "partial": "Duplicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "signature": "Flag",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Flag",
          "package": "factual-api",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Inaccurate",
          "package": "factual-api",
          "signature": "Inaccurate",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Inaccurate",
          "package": "factual-api",
          "partial": "Inaccurate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Inaccurate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Inappropriate",
          "package": "factual-api",
          "signature": "Inappropriate",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Inappropriate",
          "package": "factual-api",
          "partial": "Inappropriate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Inappropriate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Nonexistent",
          "package": "factual-api",
          "signature": "Nonexistent",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Nonexistent",
          "package": "factual-api",
          "partial": "Nonexistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Nonexistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Other",
          "package": "factual-api",
          "signature": "Other",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Other",
          "package": "factual-api",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "Spam",
          "package": "factual-api",
          "signature": "Spam",
          "source": "src/Data-Factual-Write-Flag.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "Spam",
          "package": "factual-api",
          "partial": "Spam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:Spam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "comment",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "comment",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "dataJSON",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "dataJSON",
          "package": "factual-api",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:dataJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "factualId",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "factualId",
          "package": "factual-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:factualId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "fields",
          "package": "factual-api",
          "signature": "Maybe [String]",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "fields",
          "normalized": "Maybe[String]",
          "package": "factual-api",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "problem",
          "package": "factual-api",
          "signature": "Problem",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "problem",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "reference",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "reference",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Flag",
          "name": "user",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Flag.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Flag",
          "module": "Data.Factual.Write.Flag",
          "name": "user",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Flag.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create inserts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Insert.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create inserts",
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "partial": "Insert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Insert type represents a Write to the API which performs an upsert\n   (a row can be updated or a new row can be written). The table and user\n   must be specified, while the factual ID is optional (omitted for new\n   rows). Finally the values are specified in a String to String Map.\n\u003c/p\u003e",
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "data"
        },
        "index": {
          "description": "The Insert type represents Write to the API which performs an upsert row can be updated or new row can be written The table and user must be specified while the factual ID is optional omitted for new rows Finally the values are specified in String to String Map",
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "partial": "Insert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#t:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "signature": "Insert",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "Insert",
          "package": "factual-api",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Insert",
          "name": "factualId",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "factualId",
          "package": "factual-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#v:factualId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Insert",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Insert",
          "name": "user",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "user",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Insert",
          "name": "values",
          "package": "factual-api",
          "signature": "Map String String",
          "source": "src/Data-Factual-Write-Insert.html#Insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Insert",
          "module": "Data.Factual.Write.Insert",
          "name": "values",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Insert.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the types used to create submits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Submit.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the types used to create submits",
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "partial": "Submit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Submit type represents a Write to the API which performs an upsert\n   (a row can be updated or a new row can be written). The table and user\n   must be specified, while the factual ID, reference, and comment are\n   optional (omitted for new rows). Finally the values are specified in a\n   String to String Map.\n\u003c/p\u003e",
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "data"
        },
        "index": {
          "description": "The Submit type represents Write to the API which performs an upsert row can be updated or new row can be written The table and user must be specified while the factual ID reference and comment are optional omitted for new rows Finally the values are specified in String to String Map",
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "partial": "Submit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#t:Submit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "signature": "Submit",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "Submit",
          "package": "factual-api",
          "partial": "Submit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:Submit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "comment",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "comment",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "factualId",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "factualId",
          "package": "factual-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:factualId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "reference",
          "package": "factual-api",
          "signature": "Maybe String",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "reference",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "table",
          "package": "factual-api",
          "signature": "Table",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "table",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "user",
          "package": "factual-api",
          "signature": "String",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "user",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write.Submit",
          "name": "values",
          "package": "factual-api",
          "signature": "Map String String",
          "source": "src/Data-Factual-Write-Submit.html#Submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Factual Write Submit",
          "module": "Data.Factual.Write.Submit",
          "name": "values",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write-Submit.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the definition of the Write typeclass.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Factual.Write",
          "name": "Write",
          "package": "factual-api",
          "source": "src/Data-Factual-Write.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the definition of the Write typeclass",
          "hierarchy": "Data Factual Write",
          "module": "Data.Factual.Write",
          "name": "Write",
          "package": "factual-api",
          "partial": "Write",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA member of the Write typeclass must define a path function which returns\n   the write path as a String, a params function that outputs any addition path\n   params as a Map, and a body function which returns Map of the data passed in\n   the body of the post request.\n\u003c/p\u003e",
          "module": "Data.Factual.Write",
          "name": "Write",
          "package": "factual-api",
          "source": "src/Data-Factual-Write.html#Write",
          "type": "class"
        },
        "index": {
          "description": "member of the Write typeclass must define path function which returns the write path as String params function that outputs any addition path params as Map and body function which returns Map of the data passed in the body of the post request",
          "hierarchy": "Data Factual Write",
          "module": "Data.Factual.Write",
          "name": "Write",
          "package": "factual-api",
          "partial": "Write",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write.html#t:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write",
          "name": "body",
          "package": "factual-api",
          "signature": "w -\u003e Map String String",
          "source": "src/Data-Factual-Write.html#body",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Factual Write",
          "module": "Data.Factual.Write",
          "name": "body",
          "normalized": "a-\u003eMap String String",
          "package": "factual-api",
          "signature": "w-\u003eMap String String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write",
          "name": "params",
          "package": "factual-api",
          "signature": "w -\u003e Map String String",
          "source": "src/Data-Factual-Write.html#params",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Factual Write",
          "module": "Data.Factual.Write",
          "name": "params",
          "normalized": "a-\u003eMap String String",
          "package": "factual-api",
          "signature": "w-\u003eMap String String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Factual.Write",
          "name": "path",
          "package": "factual-api",
          "signature": "w -\u003e String",
          "source": "src/Data-Factual-Write.html#path",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Factual Write",
          "module": "Data.Factual.Write",
          "name": "path",
          "normalized": "a-\u003eString",
          "package": "factual-api",
          "signature": "w-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Data-Factual-Write.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports functions which are used to execute requests and handle\n   the OAuth authentication process.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Factual.API",
          "name": "API",
          "package": "factual-api",
          "source": "src/Network-Factual-API.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports functions which are used to execute requests and handle the OAuth authentication process",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "API",
          "package": "factual-api",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "Long",
          "package": "factual-api",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "Long",
          "package": "factual-api",
          "partial": "Long",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#t:Long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions is used to store the Token and a potential timeout\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "Options",
          "package": "factual-api",
          "source": "src/Network-Factual-API.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Options is used to store the Token and potential timeout",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "Options",
          "package": "factual-api",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OAuth Token.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "Token",
          "package": "factual-api",
          "type": "data"
        },
        "index": {
          "description": "The OAuth Token",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "Token",
          "package": "factual-api",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a proper 3 legged OAuth. The difference between this and ReqToken\n      is that user has authorized your application and you can perform requests\n      on behalf of that user.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "AccessToken",
          "package": "factual-api",
          "signature": "AccessToken",
          "type": "function"
        },
        "index": {
          "description": "This is proper legged OAuth The difference between this and ReqToken is that user has authorized your application and you can perform requests on behalf of that user",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "AccessToken",
          "package": "factual-api",
          "partial": "Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:AccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "Options",
          "package": "factual-api",
          "signature": "Options",
          "source": "src/Network-Factual-API.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "Options",
          "package": "factual-api",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service provider has granted you the request token but the\n      user has not yet authorized your application. You need to\n      exchange this token by a proper AccessToken, but this may only\n      happen after user has granted you permission to do so.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "ReqToken",
          "package": "factual-api",
          "signature": "ReqToken",
          "type": "function"
        },
        "index": {
          "description": "The service provider has granted you the request token but the user has not yet authorized your application You need to exchange this token by proper AccessToken but this may only happen after user has granted you permission to do so",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "ReqToken",
          "package": "factual-api",
          "partial": "Req Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:ReqToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token is used to perform 2 legged OAuth requests. \n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "TwoLegg",
          "package": "factual-api",
          "signature": "TwoLegg",
          "type": "function"
        },
        "index": {
          "description": "This token is used to perform legged OAuth requests",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "TwoLegg",
          "package": "factual-api",
          "partial": "Two Legg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:TwoLegg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "application",
          "package": "factual-api",
          "signature": "Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "application",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to debug Queries. It takes a Query value and prints\n   out the URL path generated by that query.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "debugQuery",
          "package": "factual-api",
          "signature": "query -\u003e IO ()",
          "source": "src/Network-Factual-API.html#debugQuery",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to debug Queries It takes Query value and prints out the URL path generated by that query",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "debugQuery",
          "normalized": "a-\u003eIO()",
          "package": "factual-api",
          "partial": "Query",
          "signature": "query-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:debugQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to debug Writes. It takes a Write value and prints\n   out the URL path, and post body generated by that write.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "debugWrite",
          "package": "factual-api",
          "signature": "write -\u003e IO ()",
          "source": "src/Network-Factual-API.html#debugWrite",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to debug Writes It takes Write value and prints out the URL path and post body generated by that write",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "debugWrite",
          "normalized": "a-\u003eIO()",
          "package": "factual-api",
          "partial": "Write",
          "signature": "write-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:debugWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to make a Multi Query (multiple queries in a single\n   request. It takes Options, a Map of key Strings to Queries and returns a Map\n   from the same keys to Response values.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "executeMultiQuery",
          "package": "factual-api",
          "signature": "Options -\u003e Map String query -\u003e IO (Map String Response)",
          "source": "src/Network-Factual-API.html#executeMultiQuery",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to make Multi Query multiple queries in single request It takes Options Map of key Strings to Queries and returns Map from the same keys to Response values",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "executeMultiQuery",
          "normalized": "Options-\u003eMap String a-\u003eIO(Map String Response)",
          "package": "factual-api",
          "partial": "Multi Query",
          "signature": "Options-\u003eMap String query-\u003eIO(Map String Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:executeMultiQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes Options and a Query value and sends the query to the\n   Factual API. The resultant IO action contains a Response value which wraps\n   the resultant data.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "executeQuery",
          "package": "factual-api",
          "signature": "Options -\u003e query -\u003e IO Response",
          "source": "src/Network-Factual-API.html#executeQuery",
          "type": "function"
        },
        "index": {
          "description": "This function takes Options and Query value and sends the query to the Factual API The resultant IO action contains Response value which wraps the resultant data",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "executeQuery",
          "normalized": "Options-\u003ea-\u003eIO Response",
          "package": "factual-api",
          "partial": "Query",
          "signature": "Options-\u003equery-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:executeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used to execute Writes. The function takes Options and a\n   Write value, and returns a Response value.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "executeWrite",
          "package": "factual-api",
          "signature": "Options -\u003e write -\u003e IO Response",
          "source": "src/Network-Factual-API.html#executeWrite",
          "type": "function"
        },
        "index": {
          "description": "This function is used to execute Writes The function takes Options and Write value and returns Response value",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "executeWrite",
          "normalized": "Options-\u003ea-\u003eIO Response",
          "package": "factual-api",
          "partial": "Write",
          "signature": "Options-\u003ewrite-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:executeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a Key and Secret, and generates a Token that is passed\n   to the various methods used to make requests.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "generateToken",
          "package": "factual-api",
          "signature": "Key -\u003e Secret -\u003e Token",
          "source": "src/Network-Factual-API.html#generateToken",
          "type": "function"
        },
        "index": {
          "description": "This function takes Key and Secret and generates Token that is passed to the various methods used to make requests",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "generateToken",
          "normalized": "Key-\u003eSecret-\u003eToken",
          "package": "factual-api",
          "partial": "Token",
          "signature": "Key-\u003eSecret-\u003eToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:generateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to perform raw read queries to any API endpoint.\n   It takes Options, a Path string and a Map of params (both keys and values\n   are strings). The function returns a standard Response value.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "get",
          "package": "factual-api",
          "signature": "Options -\u003e Path -\u003e Params -\u003e IO Response",
          "source": "src/Network-Factual-API.html#get",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to perform raw read queries to any API endpoint It takes Options Path string and Map of params both keys and values are strings The function returns standard Response value",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "get",
          "normalized": "Options-\u003ePath-\u003eParams-\u003eIO Response",
          "package": "factual-api",
          "signature": "Options-\u003ePath-\u003eParams-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "oauthParams",
          "package": "factual-api",
          "signature": "FieldList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "oauthParams",
          "package": "factual-api",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:oauthParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to perform raw post queries to any API endpoint.\n   It takes Options, a Path string, a Map of params and a body Map. Both Maps\n   have String keys and values. The function returns a standard Response value.\n\u003c/p\u003e",
          "module": "Network.Factual.API",
          "name": "post",
          "package": "factual-api",
          "signature": "Options -\u003e Path -\u003e Params -\u003e Body -\u003e IO Response",
          "source": "src/Network-Factual-API.html#post",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to perform raw post queries to any API endpoint It takes Options Path string Map of params and body Map Both Maps have String keys and values The function returns standard Response value",
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "post",
          "normalized": "Options-\u003ePath-\u003eParams-\u003eBody-\u003eIO Response",
          "package": "factual-api",
          "signature": "Options-\u003ePath-\u003eParams-\u003eBody-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "timeout",
          "package": "factual-api",
          "signature": "Maybe Long",
          "source": "src/Network-Factual-API.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "timeout",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "token",
          "package": "factual-api",
          "signature": "Token",
          "source": "src/Network-Factual-API.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "token",
          "package": "factual-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Factual.API",
          "name": "urlEncode",
          "package": "factual-api",
          "signature": "String -\u003e String",
          "source": "src/Network-Factual-API.html#urlEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Factual API",
          "module": "Network.Factual.API",
          "name": "urlEncode",
          "normalized": "String-\u003eString",
          "package": "factual-api",
          "partial": "Encode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/factual-api/docs/Network-Factual-API.html#v:urlEncode"
      }
    }
  ]
]