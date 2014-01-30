[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to access remote endpoints.\n     \u003ccode\u003e\u003ca\u003erunSelectQuery\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunAskQuery\u003c/a\u003e\u003c/code\u003e may not work if you try to override the output format. See also about \u003ccode\u003e\u003ca\u003eHGET\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHPOST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaSparqlClient.Queries",
        "fct-package": "hasparql-client",
        "fct-signature": "module",
        "fct-source": "src/Database-HaSparqlClient-Queries.html",
        "fct-type": "module",
        "title": "Queries"
      },
      "index": {
        "description": "This module provides functions to access remote endpoints runSelectQuery and runAskQuery may not work if you try to override the output format See also about HGET and HPOST",
        "hierarchy": "Database HaSparqlClient Queries",
        "module": "Database.HaSparqlClient.Queries",
        "name": "Queries",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runAskQuery",
      "description": {
        "fct-descr": "\u003cp\u003eReturn Right True or Right False for a query of type ASK. If it fails returns an error message.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Queries",
        "fct-package": "hasparql-client",
        "fct-signature": "Service -\u003e Method -\u003e IO (Either String Bool)",
        "fct-source": "src/Database-HaSparqlClient-Queries.html#runAskQuery",
        "fct-type": "function",
        "title": "runAskQuery"
      },
      "index": {
        "description": "Return Right True or Right False for query of type ASK If it fails returns an error message",
        "hierarchy": "Database HaSparqlClient Queries",
        "module": "Database.HaSparqlClient.Queries",
        "name": "runAskQuery",
        "normalized": "Service-\u003eMethod-\u003eIO(Either String Bool)",
        "package": "hasparql-client",
        "partial": "Ask Query",
        "signature": "Service-\u003eMethod-\u003eIO(Either String Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a service. On success returns a string created from the service. By default, the string is a representation in XML, other formats such as Turtle and N3 could be returned by adding the output format from the list of optional parameters. Returns an error message on failure. SPARUL and SPARQL can be performed.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Queries",
        "fct-package": "hasparql-client",
        "fct-signature": "Service -\u003e Method -\u003e IO (Either String String)",
        "fct-source": "src/Database-HaSparqlClient-Queries.html#runQuery",
        "fct-type": "function",
        "title": "runQuery"
      },
      "index": {
        "description": "Execute service On success returns string created from the service By default the string is representation in XML other formats such as Turtle and N3 could be returned by adding the output format from the list of optional parameters Returns an error message on failure SPARUL and SPARQL can be performed",
        "hierarchy": "Database HaSparqlClient Queries",
        "module": "Database.HaSparqlClient.Queries",
        "name": "runQuery",
        "normalized": "Service-\u003eMethod-\u003eIO(Either String String)",
        "package": "hasparql-client",
        "partial": "Query",
        "signature": "Service-\u003eMethod-\u003eIO(Either String String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Queries.html#v:runSelectQuery",
      "description": {
        "fct-descr": "\u003cp\u003eFind all possible values for a query of type SELECT and may return several lists of \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. URI, Literal and Blank Nodes are now types in Haskell. If it fails returns an error message. \n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Queries",
        "fct-package": "hasparql-client",
        "fct-signature": "Service -\u003e Method -\u003e IO (Either String [[BindingValue]])",
        "fct-source": "src/Database-HaSparqlClient-Queries.html#runSelectQuery",
        "fct-type": "function",
        "title": "runSelectQuery"
      },
      "index": {
        "description": "Find all possible values for query of type SELECT and may return several lists of BindingValue URI Literal and Blank Nodes are now types in Haskell If it fails returns an error message",
        "hierarchy": "Database HaSparqlClient Queries",
        "module": "Database.HaSparqlClient.Queries",
        "name": "runSelectQuery",
        "normalized": "Service-\u003eMethod-\u003eIO(Either String[[BindingValue]])",
        "package": "hasparql-client",
        "partial": "Select Query",
        "signature": "Service-\u003eMethod-\u003eIO(Either String[[BindingValue]])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType definitions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "module",
        "fct-source": "src/Database-HaSparqlClient-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Type definitions",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Types",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:BindingValue",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for SELECT query result format.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "data",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "data",
        "title": "BindingValue"
      },
      "index": {
        "description": "Representation for SELECT query result format",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "BindingValue",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Binding Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:DefaultGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a default graph URI. Overrides the default graph from SPARQL queries.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#DefaultGraph",
        "fct-type": "type",
        "title": "DefaultGraph"
      },
      "index": {
        "description": "Add default graph URI Overrides the default graph from SPARQL queries",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "DefaultGraph",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Default Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Endpoint",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a SPARQL endpoint.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Endpoint",
        "fct-type": "type",
        "title": "Endpoint"
      },
      "index": {
        "description": "Represents SPARQL endpoint",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Endpoint",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:ExtraParameters",
      "description": {
        "fct-descr": "\u003cp\u003eSome SPARQL endpoints require extra key value pairs. E.g., in Virtuoso Server, one would add should-sponge=soft to the query forcing virtuoso to retrieve graphs that are not stored in its local database. Can be for example, used to try others output formats in \u003ccode\u003eRunQuery\u003c/code\u003e depending on the server.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#ExtraParameters",
        "fct-type": "type",
        "title": "ExtraParameters"
      },
      "index": {
        "description": "Some SPARQL endpoints require extra key value pairs E.g in Virtuoso Server one would add should-sponge soft to the query forcing virtuoso to retrieve graphs that are not stored in its local database Can be for example used to try others output formats in RunQuery depending on the server",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "ExtraParameters",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Extra Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003ekey of the query part.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "key of the query part",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Key",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eSet to HTTP GET or POST request, according to the SPARQL protocol, some endpoints do not yet support POST requests. Some SPARQL queries, perhaps machine generated, may be longer than can be reliably conveyed by way of the HTTP GET. In those cases the POST may be used.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "data",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "Set to HTTP GET or POST request according to the SPARQL protocol some endpoints do not yet support POST requests Some SPARQL queries perhaps machine generated may be longer than can be reliably conveyed by way of the HTTP GET In those cases the POST may be used",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Method",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:NamedGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a named graph URI. Overrides named graphs from SPARQL queries.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#NamedGraph",
        "fct-type": "type",
        "title": "NamedGraph"
      },
      "index": {
        "description": "Add named graph URI Overrides named graphs from SPARQL queries",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "NamedGraph",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Named Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eSPARQL query \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Query",
        "fct-type": "type",
        "title": "Query"
      },
      "index": {
        "description": "SPARQL query String",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Query",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Service",
      "description": {
        "fct-descr": "\u003cp\u003eLocal representation for a SPARQL service.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "data",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "data",
        "title": "Service"
      },
      "index": {
        "description": "Local representation for SPARQL service",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Service",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003evalue of the query part.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "type",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Value",
        "fct-type": "type",
        "title": "Value"
      },
      "index": {
        "description": "value of the query part",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Value",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:BNode",
      "description": {
        "fct-descr": "\u003cp\u003eBlank Node with label.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "BNode String",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "BNode"
      },
      "index": {
        "description": "Blank Node with label",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "BNode",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "BNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:HGET",
      "description": {
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "HGET",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Method",
        "fct-type": "function",
        "title": "HGET"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "HGET",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "HGET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:HPOST",
      "description": {
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "HPOST",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Method",
        "fct-type": "function",
        "title": "HPOST"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "HPOST",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "HPOST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:LangLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral with language.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "LangLiteral String String",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "LangLiteral"
      },
      "index": {
        "description": "Literal with language",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "LangLiteral",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Lang Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Literal",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral string without datatype or lang.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Literal String",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "Literal string without datatype or lang",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Literal",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Sparql",
      "description": {
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Sparql",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "Sparql"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Sparql",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Sparql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:TypedLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral with datatype URI.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "TypedLiteral String String",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "TypedLiteral"
      },
      "index": {
        "description": "Literal with datatype URI",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "TypedLiteral",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Typed Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:URI",
      "description": {
        "fct-descr": "\u003cp\u003eURI reference to remote resource.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "URI String",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "URI"
      },
      "index": {
        "description": "URI reference to remote resource",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "URI",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:Unbound",
      "description": {
        "fct-descr": "\u003cp\u003eUnbound result value.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Unbound",
        "fct-source": "src/Database-HaSparqlClient-Types.html#BindingValue",
        "fct-type": "function",
        "title": "Unbound"
      },
      "index": {
        "description": "Unbound result value",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "Unbound",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Unbound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:defaultService",
      "description": {
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Service",
        "fct-source": "src/Database-HaSparqlClient-Types.html#defaultService",
        "fct-type": "function",
        "title": "defaultService"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "defaultService",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:defaultgraph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "DefaultGraph",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "defaultgraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "defaultgraph",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:endpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Endpoint",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "endpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "endpoint",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:namedgraph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "[NamedGraph]",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "namedgraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "namedgraph",
        "normalized": "[NamedGraph]",
        "package": "hasparql-client",
        "partial": "",
        "signature": "[NamedGraph]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:optionalparameters",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "[ExtraParameters]",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "optionalparameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "optionalparameters",
        "normalized": "[ExtraParameters]",
        "package": "hasparql-client",
        "partial": "",
        "signature": "[ExtraParameters]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Types.html#v:query",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaSparqlClient.Types",
        "fct-package": "hasparql-client",
        "fct-signature": "Query",
        "fct-source": "src/Database-HaSparqlClient-Types.html#Service",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Types",
        "module": "Database.HaSparqlClient.Types",
        "name": "query",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some convenience functions to get values from BindingValue. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "module",
        "fct-source": "src/Database-HaSparqlClient-Values.html",
        "fct-type": "module",
        "title": "Values"
      },
      "index": {
        "description": "This module provides some convenience functions to get values from BindingValue",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "Values",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:bnodeValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#bnodeValue",
        "fct-type": "function",
        "title": "bnodeValue"
      },
      "index": {
        "description": "Get the BNode value for BindingValue Return Nothing if BindingValue is not BNode",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "bnodeValue",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:datatypeValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the datatype value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eTypedLiteral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#datatypeValue",
        "fct-type": "function",
        "title": "datatypeValue"
      },
      "index": {
        "description": "Get the datatype value for BindingValue Return Nothing if BindingValue is not TypedLiteral",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "datatypeValue",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:languageValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the language value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eLangLiteral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#languageValue",
        "fct-type": "function",
        "title": "languageValue"
      },
      "index": {
        "description": "Get the language value for BindingValue Return Nothing if BindingValue is not LangLiteral",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "languageValue",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:literalValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the literal value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if not is of the any literal type.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#literalValue",
        "fct-type": "function",
        "title": "literalValue"
      },
      "index": {
        "description": "Get the literal value for BindingValue Return Nothing if not is of the any literal type",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "literalValue",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:showsparql",
      "description": {
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#showsparql",
        "fct-type": "function",
        "title": "showsparql"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "showsparql",
        "normalized": "a-\u003eString",
        "package": "hasparql-client",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:uriValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e value for a BindingValue. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#uriValue",
        "fct-type": "function",
        "title": "uriValue"
      },
      "index": {
        "description": "Get the URI value for BindingValue Return Nothing if BindingValue is not URI",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "uriValue",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "Value",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient-Values.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value for a \u003ccode\u003e\u003ca\u003eBindingValue\u003c/a\u003e\u003c/code\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if BindingValue is \u003ccode\u003e\u003ca\u003eUnbound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaSparqlClient.Values",
        "fct-package": "hasparql-client",
        "fct-signature": "BindingValue -\u003e Maybe String",
        "fct-source": "src/Database-HaSparqlClient-Values.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Get the value for BindingValue Return Nothing if BindingValue is Unbound",
        "hierarchy": "Database HaSparqlClient Values",
        "module": "Database.HaSparqlClient.Values",
        "name": "value",
        "normalized": "BindingValue-\u003eMaybe String",
        "package": "hasparql-client",
        "partial": "",
        "signature": "BindingValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasparql-client/docs/Database-HaSparqlClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaSparqlClient",
        "fct-package": "hasparql-client",
        "fct-signature": "module",
        "fct-source": "src/Database-HaSparqlClient.html",
        "fct-type": "module",
        "title": "HaSparqlClient"
      },
      "index": {
        "description": "Main module",
        "hierarchy": "Database HaSparqlClient",
        "module": "Database.HaSparqlClient",
        "name": "HaSparqlClient",
        "normalized": "",
        "package": "hasparql-client",
        "partial": "Ha Sparql Client",
        "signature": ""
      }
    }
  }
]