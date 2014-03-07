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
        "word": "hasparql-client"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to access remote endpoints.\n     \u003ccode\u003e\u003ca\u003erunSelectQuery\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunAskQuery\u003c/a\u003e\u003c/code\u003e may not work if you try to override the output format. See also about \u003ccode\u003e\u003ca\u003eHGET\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHPOST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaSparqlClient.Queries",
          "name": "Queries",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Queries.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to access remote endpoints runSelectQuery and runAskQuery may not work if you try to override the output format See also about HGET and HPOST",
          "hierarchy": "Database HaSparqlClient Queries",
          "module": "Database.HaSparqlClient.Queries",
          "name": "Queries",
          "package": "hasparql-client",
          "partial": "Queries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn Right True or Right False for a query of type ASK. If it fails returns an error message.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runAskQuery",
          "package": "hasparql-client",
          "signature": "Service -\u003e Method -\u003e IO (Either String Bool)",
          "source": "src/Database-HaSparqlClient-Queries.html#runAskQuery",
          "type": "function"
        },
        "index": {
          "description": "Return Right True or Right False for query of type ASK If it fails returns an error message",
          "hierarchy": "Database HaSparqlClient Queries",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runAskQuery",
          "normalized": "Service-\u003eMethod-\u003eIO(Either String Bool)",
          "package": "hasparql-client",
          "partial": "Ask Query",
          "signature": "Service-\u003eMethod-\u003eIO(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runAskQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a service. On success returns a string created from the service. By default, the string is a representation in XML, other formats such as Turtle and N3 could be returned by adding the output format from the list of optional parameters. Returns an error message on failure. SPARUL and SPARQL can be performed.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runQuery",
          "package": "hasparql-client",
          "signature": "Service -\u003e Method -\u003e IO (Either String String)",
          "source": "src/Database-HaSparqlClient-Queries.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute service On success returns string created from the service By default the string is representation in XML other formats such as Turtle and N3 could be returned by adding the output format from the list of optional parameters Returns an error message on failure SPARUL and SPARQL can be performed",
          "hierarchy": "Database HaSparqlClient Queries",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runQuery",
          "normalized": "Service-\u003eMethod-\u003eIO(Either String String)",
          "package": "hasparql-client",
          "partial": "Query",
          "signature": "Service-\u003eMethod-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all possible values for a query of type SELECT and may return several lists of \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. URI, Literal and Blank Nodes are now types in Haskell. If it fails returns an error message. \n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runSelectQuery",
          "package": "hasparql-client",
          "signature": "Service -\u003e Method -\u003e IO (Either String [[BindingValue]])",
          "source": "src/Database-HaSparqlClient-Queries.html#runSelectQuery",
          "type": "function"
        },
        "index": {
          "description": "Find all possible values for query of type SELECT and may return several lists of BindingValue URI Literal and Blank Nodes are now types in Haskell If it fails returns an error message",
          "hierarchy": "Database HaSparqlClient Queries",
          "module": "Database.HaSparqlClient.Queries",
          "name": "runSelectQuery",
          "normalized": "Service-\u003eMethod-\u003eIO(Either String[[BindingValue]])",
          "package": "hasparql-client",
          "partial": "Select Query",
          "signature": "Service-\u003eMethod-\u003eIO(Either String[[BindingValue]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runSelectQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType definitions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Types",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Type definitions",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Types",
          "package": "hasparql-client",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for SELECT query result format.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "BindingValue",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "data"
        },
        "index": {
          "description": "Representation for SELECT query result format",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "BindingValue",
          "package": "hasparql-client",
          "partial": "Binding Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:BindingValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a default graph URI. Overrides the default graph from SPARQL queries.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "DefaultGraph",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#DefaultGraph",
          "type": "type"
        },
        "index": {
          "description": "Add default graph URI Overrides the default graph from SPARQL queries",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "DefaultGraph",
          "package": "hasparql-client",
          "partial": "Default Graph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:DefaultGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a SPARQL endpoint.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Endpoint",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Endpoint",
          "type": "type"
        },
        "index": {
          "description": "Represents SPARQL endpoint",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Endpoint",
          "package": "hasparql-client",
          "partial": "Endpoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome SPARQL endpoints require extra key value pairs. E.g., in Virtuoso Server, one would add should-sponge=soft to the query forcing virtuoso to retrieve graphs that are not stored in its local database. Can be for example, used to try others output formats in \u003ccode\u003eRunQuery\u003c/code\u003e depending on the server.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "ExtraParameters",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#ExtraParameters",
          "type": "type"
        },
        "index": {
          "description": "Some SPARQL endpoints require extra key value pairs E.g in Virtuoso Server one would add should-sponge soft to the query forcing virtuoso to retrieve graphs that are not stored in its local database Can be for example used to try others output formats in RunQuery depending on the server",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "ExtraParameters",
          "package": "hasparql-client",
          "partial": "Extra Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:ExtraParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekey of the query part.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Key",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Key",
          "type": "type"
        },
        "index": {
          "description": "key of the query part",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Key",
          "package": "hasparql-client",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to HTTP GET or POST request, according to the SPARQL protocol, some endpoints do not yet support POST requests. Some SPARQL queries, perhaps machine generated, may be longer than can be reliably conveyed by way of the HTTP GET. In those cases the POST may be used.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Method",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Set to HTTP GET or POST request according to the SPARQL protocol some endpoints do not yet support POST requests Some SPARQL queries perhaps machine generated may be longer than can be reliably conveyed by way of the HTTP GET In those cases the POST may be used",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Method",
          "package": "hasparql-client",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a named graph URI. Overrides named graphs from SPARQL queries.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "NamedGraph",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#NamedGraph",
          "type": "type"
        },
        "index": {
          "description": "Add named graph URI Overrides named graphs from SPARQL queries",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "NamedGraph",
          "package": "hasparql-client",
          "partial": "Named Graph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:NamedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSPARQL query \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Query",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Query",
          "type": "type"
        },
        "index": {
          "description": "SPARQL query String",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Query",
          "package": "hasparql-client",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal representation for a SPARQL service.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Service",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "data"
        },
        "index": {
          "description": "Local representation for SPARQL service",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Service",
          "package": "hasparql-client",
          "partial": "Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue of the query part.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Value",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Types.html#Value",
          "type": "type"
        },
        "index": {
          "description": "value of the query part",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Value",
          "package": "hasparql-client",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank Node with label.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "BNode",
          "package": "hasparql-client",
          "signature": "BNode String",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Blank Node with label",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "BNode",
          "package": "hasparql-client",
          "partial": "BNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:BNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "HGET",
          "package": "hasparql-client",
          "signature": "HGET",
          "source": "src/Database-HaSparqlClient-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "HGET",
          "package": "hasparql-client",
          "partial": "HGET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:HGET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "HPOST",
          "package": "hasparql-client",
          "signature": "HPOST",
          "source": "src/Database-HaSparqlClient-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "HPOST",
          "package": "hasparql-client",
          "partial": "HPOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:HPOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral with language.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "LangLiteral",
          "package": "hasparql-client",
          "signature": "LangLiteral String String",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Literal with language",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "LangLiteral",
          "package": "hasparql-client",
          "partial": "Lang Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:LangLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral string without datatype or lang.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Literal",
          "package": "hasparql-client",
          "signature": "Literal String",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Literal string without datatype or lang",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Literal",
          "package": "hasparql-client",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "Sparql",
          "package": "hasparql-client",
          "signature": "Sparql",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Sparql",
          "package": "hasparql-client",
          "partial": "Sparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Sparql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral with datatype URI.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "TypedLiteral",
          "package": "hasparql-client",
          "signature": "TypedLiteral String String",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Literal with datatype URI",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "TypedLiteral",
          "package": "hasparql-client",
          "partial": "Typed Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:TypedLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI reference to remote resource.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "URI",
          "package": "hasparql-client",
          "signature": "URI String",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "URI reference to remote resource",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "URI",
          "package": "hasparql-client",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbound result value.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Types",
          "name": "Unbound",
          "package": "hasparql-client",
          "signature": "Unbound",
          "source": "src/Database-HaSparqlClient-Types.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Unbound result value",
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "Unbound",
          "package": "hasparql-client",
          "partial": "Unbound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Unbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "defaultService",
          "package": "hasparql-client",
          "signature": "Service",
          "source": "src/Database-HaSparqlClient-Types.html#defaultService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "defaultService",
          "package": "hasparql-client",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:defaultService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "defaultgraph",
          "package": "hasparql-client",
          "signature": "DefaultGraph",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "defaultgraph",
          "package": "hasparql-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:defaultgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "endpoint",
          "package": "hasparql-client",
          "signature": "Endpoint",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "endpoint",
          "package": "hasparql-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "namedgraph",
          "package": "hasparql-client",
          "signature": "[NamedGraph]",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "namedgraph",
          "normalized": "[NamedGraph]",
          "package": "hasparql-client",
          "signature": "[NamedGraph]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:namedgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "optionalparameters",
          "package": "hasparql-client",
          "signature": "[ExtraParameters]",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "optionalparameters",
          "normalized": "[ExtraParameters]",
          "package": "hasparql-client",
          "signature": "[ExtraParameters]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:optionalparameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Types",
          "name": "query",
          "package": "hasparql-client",
          "signature": "Query",
          "source": "src/Database-HaSparqlClient-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Types",
          "module": "Database.HaSparqlClient.Types",
          "name": "query",
          "package": "hasparql-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some convenience functions to get values from BindingValue. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "Values",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient-Values.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some convenience functions to get values from BindingValue",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "Values",
          "package": "hasparql-client",
          "partial": "Values",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "bnodeValue",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#bnodeValue",
          "type": "function"
        },
        "index": {
          "description": "Get the BNode value for BindingValue Return Nothing if BindingValue is not BNode",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "bnodeValue",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "partial": "Value",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:bnodeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the datatype value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eTypedLiteral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "datatypeValue",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#datatypeValue",
          "type": "function"
        },
        "index": {
          "description": "Get the datatype value for BindingValue Return Nothing if BindingValue is not TypedLiteral",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "datatypeValue",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "partial": "Value",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:datatypeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the language value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eLangLiteral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "languageValue",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#languageValue",
          "type": "function"
        },
        "index": {
          "description": "Get the language value for BindingValue Return Nothing if BindingValue is not LangLiteral",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "languageValue",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "partial": "Value",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:languageValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the literal value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if not is of the any literal type.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "literalValue",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#literalValue",
          "type": "function"
        },
        "index": {
          "description": "Get the literal value for BindingValue Return Nothing if not is of the any literal type",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "literalValue",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "partial": "Value",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:literalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaSparqlClient.Values",
          "name": "showsparql",
          "package": "hasparql-client",
          "signature": "a -\u003e String",
          "source": "src/Database-HaSparqlClient-Values.html#showsparql",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "showsparql",
          "normalized": "a-\u003eString",
          "package": "hasparql-client",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:showsparql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e value for a BindingValue. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "uriValue",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#uriValue",
          "type": "function"
        },
        "index": {
          "description": "Get the URI value for BindingValue Return Nothing if BindingValue is not URI",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "uriValue",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "partial": "Value",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:uriValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if BindingValue is \u003ccode\u003e\u003ca\u003eUnbound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaSparqlClient.Values",
          "name": "value",
          "package": "hasparql-client",
          "signature": "BindingValue -\u003e Maybe String",
          "source": "src/Database-HaSparqlClient-Values.html#value",
          "type": "function"
        },
        "index": {
          "description": "Get the value for BindingValue Return Nothing if BindingValue is Unbound",
          "hierarchy": "Database HaSparqlClient Values",
          "module": "Database.HaSparqlClient.Values",
          "name": "value",
          "normalized": "BindingValue-\u003eMaybe String",
          "package": "hasparql-client",
          "signature": "BindingValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaSparqlClient",
          "name": "HaSparqlClient",
          "package": "hasparql-client",
          "source": "src/Database-HaSparqlClient.html",
          "type": "module"
        },
        "index": {
          "description": "Main module",
          "hierarchy": "Database HaSparqlClient",
          "module": "Database.HaSparqlClient",
          "name": "HaSparqlClient",
          "package": "hasparql-client",
          "partial": "Ha Sparql Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient.html#"
      }
    }
  ]
]