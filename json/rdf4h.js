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
        "word": "rdf4h"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple graph implementation backed by \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RDF.MGraph",
          "name": "MGraph",
          "package": "rdf4h",
          "source": "src/Data-RDF-MGraph.html",
          "type": "module"
        },
        "index": {
          "description": "simple graph implementation backed by HashMap",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "MGraph",
          "package": "rdf4h",
          "partial": "MGraph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map-based graph implementation.\n\u003c/p\u003e\u003cp\u003eWorst-case time complexity of the graph functions, with respect\n to the number of triples, are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e    : O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emkRdf\u003c/a\u003e\u003c/code\u003e  : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etriplesOf\u003c/a\u003e\u003c/code\u003e: O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e   : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e    : O(log n)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.RDF.MGraph",
          "name": "MGraph",
          "package": "rdf4h",
          "source": "src/Data-RDF-MGraph.html#MGraph",
          "type": "data"
        },
        "index": {
          "description": "map-based graph implementation Worst-case time complexity of the graph functions with respect to the number of triples are empty mkRdf triplesOf select query log",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "MGraph",
          "package": "rdf4h",
          "partial": "MGraph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#t:MGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
          "module": "[\"Data.RDF.MGraph\",\"Data.RDF.TriplesGraph\"]",
          "name": "empty",
          "package": "rdf4h",
          "signature": "rdf",
          "source": "src/Data-RDF-Types.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:empty\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:empty\"]"
        },
        "index": {
          "description": "Return an empty RDF",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "empty",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
          "module": "[\"Data.RDF.MGraph\",\"Data.RDF.TriplesGraph\"]",
          "name": "mkRdf",
          "package": "rdf4h",
          "signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
          "source": "src/Data-RDF-Types.html#mkRdf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:mkRdf\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:mkRdf\"]"
        },
        "index": {
          "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "mkRdf",
          "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
          "package": "rdf4h",
          "partial": "Rdf",
          "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:mkRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
          "module": "[\"Data.RDF.MGraph\",\"Data.RDF.TriplesGraph\"]",
          "name": "query",
          "package": "rdf4h",
          "signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
          "source": "src/Data-RDF-Types.html#query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:query\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:query\"]"
        },
        "index": {
          "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "query",
          "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
          "module": "[\"Data.RDF.MGraph\",\"Data.RDF.TriplesGraph\"]",
          "name": "select",
          "package": "rdf4h",
          "signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
          "source": "src/Data-RDF-Types.html#select",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:select\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:select\"]"
        },
        "index": {
          "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "select",
          "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
          "module": "[\"Data.RDF.MGraph\",\"Data.RDF.TriplesGraph\"]",
          "name": "triplesOf",
          "package": "rdf4h",
          "signature": "rdf -\u003e Triples",
          "source": "src/Data-RDF-Types.html#triplesOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:triplesOf\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:triplesOf\"]"
        },
        "index": {
          "description": "Return all triples in the RDF as list",
          "hierarchy": "Data RDF MGraph",
          "module": "Data.RDF.MGraph",
          "name": "triplesOf",
          "normalized": "a-\u003eTriples",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "rdf-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:triplesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines types and utility functions related to namespaces, and\n some predefined values for commonly used namespaces, such as\n rdf, xsd, dublin core, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RDF.Namespace",
          "name": "Namespace",
          "package": "rdf4h",
          "source": "src/Data-RDF-Namespace.html",
          "type": "module"
        },
        "index": {
          "description": "Defines types and utility functions related to namespaces and some predefined values for commonly used namespaces such as rdf xsd dublin core etc",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "Namespace",
          "package": "rdf4h",
          "partial": "Namespace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a namespace as either a prefix and uri, respectively,\n  or just a uri.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "Namespace",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Namespace",
          "type": "data"
        },
        "index": {
          "description": "Represents namespace as either prefix and uri respectively or just uri",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "Namespace",
          "package": "rdf4h",
          "partial": "Namespace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of a prefix to the URI for that prefix.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMapping",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#PrefixMapping",
          "type": "newtype"
        },
        "index": {
          "description": "mapping of prefix to the URI for that prefix",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMapping",
          "package": "rdf4h",
          "partial": "Prefix Mapping",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:PrefixMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for a map from prefix to namespace URI.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#PrefixMappings",
          "type": "newtype"
        },
        "index": {
          "description": "An alias for map from prefix to namespace URI",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:PrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RDF.Namespace\",\"Data.RDF.Types\"]",
          "name": "PlainNS",
          "package": "rdf4h",
          "signature": "PlainNS Text",
          "source": "src/Data-RDF-Types.html#Namespace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PlainNS\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainNS\"]"
        },
        "index": {
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PlainNS",
          "package": "rdf4h",
          "partial": "Plain NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PlainNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RDF.Namespace\",\"Data.RDF.Types\"]",
          "name": "PrefixMapping",
          "package": "rdf4h",
          "signature": "PrefixMapping (Text, Text)",
          "source": "src/Data-RDF-Types.html#PrefixMapping",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMapping\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixMapping\"]"
        },
        "index": {
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMapping",
          "normalized": "PrefixMapping(Text,Text)",
          "package": "rdf4h",
          "partial": "Prefix Mapping",
          "signature": "PrefixMapping(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RDF.Namespace\",\"Data.RDF.Types\"]",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "signature": "PrefixMappings (Map Text Text)",
          "source": "src/Data-RDF-Types.html#PrefixMappings",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMappings\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixMappings\"]"
        },
        "index": {
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RDF.Namespace\",\"Data.RDF.Types\"]",
          "name": "PrefixedNS",
          "package": "rdf4h",
          "signature": "PrefixedNS Text Text",
          "source": "src/Data-RDF-Types.html#Namespace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixedNS\",\"http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixedNS\"]"
        },
        "index": {
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "PrefixedNS",
          "package": "rdf4h",
          "partial": "Prefixed NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixedNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Dublic Core namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "dc",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#dc",
          "type": "function"
        },
        "index": {
          "description": "The Dublic Core namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "dc",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:dc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Dublin Core terms namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "dct",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#dct",
          "type": "function"
        },
        "index": {
          "description": "The Dublin Core terms namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "dct",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:dct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample namespace #1.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "ex",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#ex",
          "type": "function"
        },
        "index": {
          "description": "Example namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "ex",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample namespace #2.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "ex2",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#ex2",
          "type": "function"
        },
        "index": {
          "description": "Example namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "ex2",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ex2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe friend of a friend namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "foaf",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#foaf",
          "type": "function"
        },
        "index": {
          "description": "The friend of friend namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "foaf",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:foaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a left-biased merge of the two sets of prefix mappings.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "mergePrefixMappings",
          "package": "rdf4h",
          "signature": "PrefixMappings -\u003e PrefixMappings -\u003e PrefixMappings",
          "source": "src/Data-RDF-Namespace.html#mergePrefixMappings",
          "type": "function"
        },
        "index": {
          "description": "Perform left-biased merge of the two sets of prefix mappings",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "mergePrefixMappings",
          "normalized": "PrefixMappings-\u003ePrefixMappings-\u003ePrefixMappings",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "signature": "PrefixMappings-\u003ePrefixMappings-\u003ePrefixMappings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mergePrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a namespace for the given URI reference.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "mkPlainNS",
          "package": "rdf4h",
          "signature": "Text -\u003e Namespace",
          "source": "src/Data-RDF-Namespace.html#mkPlainNS",
          "type": "function"
        },
        "index": {
          "description": "Make namespace for the given URI reference",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "mkPlainNS",
          "normalized": "Text-\u003eNamespace",
          "package": "rdf4h",
          "partial": "Plain NS",
          "signature": "Text-\u003eNamespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPlainNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a namespace having the given prefix for the given URI reference,\n respectively.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "mkPrefixedNS",
          "package": "rdf4h",
          "signature": "Text -\u003e Text -\u003e Namespace",
          "source": "src/Data-RDF-Namespace.html#mkPrefixedNS",
          "type": "function"
        },
        "index": {
          "description": "Make namespace having the given prefix for the given URI reference respectively",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "mkPrefixedNS",
          "normalized": "Text-\u003eText-\u003eNamespace",
          "package": "rdf4h",
          "partial": "Prefixed NS",
          "signature": "Text-\u003eText-\u003eNamespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPrefixedNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a namespace having the given prefix for the given URI reference,\n respectively, using strings which will be converted to bytestrings\n automatically.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "mkPrefixedNS'",
          "package": "rdf4h",
          "signature": "String -\u003e String -\u003e Namespace",
          "source": "src/Data-RDF-Namespace.html#mkPrefixedNS%27",
          "type": "function"
        },
        "index": {
          "description": "Make namespace having the given prefix for the given URI reference respectively using strings which will be converted to bytestrings automatically",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "mkPrefixedNS'",
          "normalized": "String-\u003eString-\u003eNamespace",
          "package": "rdf4h",
          "partial": "Prefixed NS'",
          "signature": "String-\u003eString-\u003eNamespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPrefixedNS-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a URI consisting of the given namespace and the given localname.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "mkUri",
          "package": "rdf4h",
          "signature": "Namespace -\u003e Text -\u003e Text",
          "source": "src/Data-RDF-Namespace.html#mkUri",
          "type": "function"
        },
        "index": {
          "description": "Make URI consisting of the given namespace and the given localname",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "mkUri",
          "normalized": "Namespace-\u003eText-\u003eText",
          "package": "rdf4h",
          "partial": "Uri",
          "signature": "Namespace-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003es and returns \u003ccode\u003e\u003ca\u003ePrefixMappings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "ns_mappings",
          "package": "rdf4h",
          "signature": "[Namespace] -\u003e PrefixMappings",
          "source": "src/Data-RDF-Namespace.html#ns_mappings",
          "type": "function"
        },
        "index": {
          "description": "Takes list of Namespace and returns PrefixMappings",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "ns_mappings",
          "normalized": "[Namespace]-\u003ePrefixMappings",
          "package": "rdf4h",
          "signature": "[Namespace]-\u003ePrefixMappings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ns_mappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OWL namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "owl",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#owl",
          "type": "function"
        },
        "index": {
          "description": "The OWL namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "owl",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:owl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the prefix of the given namespace, if it has one.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "prefixOf",
          "package": "rdf4h",
          "signature": "Namespace -\u003e Maybe Text",
          "source": "src/Data-RDF-Namespace.html#prefixOf",
          "type": "function"
        },
        "index": {
          "description": "Determine the prefix of the given namespace if it has one",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "prefixOf",
          "normalized": "Namespace-\u003eMaybe Text",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "Namespace-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:prefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RDF namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "rdf",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#rdf",
          "type": "function"
        },
        "index": {
          "description": "The RDF namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "rdf",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:rdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RDF Schema namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "rdfs",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#rdfs",
          "type": "function"
        },
        "index": {
          "description": "The RDF Schema namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "rdfs",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:rdfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SKOS namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "skos",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#skos",
          "type": "function"
        },
        "index": {
          "description": "The SKOS namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "skos",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:skos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of common predefined namespaces as a \u003ccode\u003e\u003ca\u003ePrefixMappings\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "standard_ns_mappings",
          "package": "rdf4h",
          "signature": "PrefixMappings",
          "source": "src/Data-RDF-Namespace.html#standard_ns_mappings",
          "type": "function"
        },
        "index": {
          "description": "The set of common predefined namespaces as PrefixMappings value",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "standard_ns_mappings",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:standard_ns_mappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView the prefix mappings as a list of key-value pairs. The PM in\n in the name is to reduce name clashes if used without qualifying.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "toPMList",
          "package": "rdf4h",
          "signature": "PrefixMappings -\u003e [(Text, Text)]",
          "source": "src/Data-RDF-Namespace.html#toPMList",
          "type": "function"
        },
        "index": {
          "description": "View the prefix mappings as list of key-value pairs The PM in in the name is to reduce name clashes if used without qualifying",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "toPMList",
          "normalized": "PrefixMappings-\u003e[(Text,Text)]",
          "package": "rdf4h",
          "partial": "PMList",
          "signature": "PrefixMappings-\u003e[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:toPMList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the URI of the given namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "uriOf",
          "package": "rdf4h",
          "signature": "Namespace -\u003e Text",
          "source": "src/Data-RDF-Namespace.html#uriOf",
          "type": "function"
        },
        "index": {
          "description": "Determine the URI of the given namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "uriOf",
          "normalized": "Namespace-\u003eText",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "Namespace-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:uriOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML Schema namespace.\n\u003c/p\u003e",
          "module": "Data.RDF.Namespace",
          "name": "xsd",
          "package": "rdf4h",
          "signature": "Namespace",
          "source": "src/Data-RDF-Namespace.html#xsd",
          "type": "function"
        },
        "index": {
          "description": "The XML Schema namespace",
          "hierarchy": "Data RDF Namespace",
          "module": "Data.RDF.Namespace",
          "name": "xsd",
          "package": "rdf4h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:xsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Query",
          "name": "Query",
          "package": "rdf4h",
          "source": "src/Data-RDF-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "Query",
          "package": "rdf4h",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether two triples have equal objects.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "equalObjects",
          "package": "rdf4h",
          "signature": "Triple -\u003e Triple -\u003e Bool",
          "source": "src/Data-RDF-Query.html#equalObjects",
          "type": "function"
        },
        "index": {
          "description": "Determine whether two triples have equal objects",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "equalObjects",
          "normalized": "Triple-\u003eTriple-\u003eBool",
          "package": "rdf4h",
          "partial": "Objects",
          "signature": "Triple-\u003eTriple-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether two triples have equal predicates.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "equalPredicates",
          "package": "rdf4h",
          "signature": "Triple -\u003e Triple -\u003e Bool",
          "source": "src/Data-RDF-Query.html#equalPredicates",
          "type": "function"
        },
        "index": {
          "description": "Determine whether two triples have equal predicates",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "equalPredicates",
          "normalized": "Triple-\u003eTriple-\u003eBool",
          "package": "rdf4h",
          "partial": "Predicates",
          "signature": "Triple-\u003eTriple-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalPredicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether two triples have equal subjects.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "equalSubjects",
          "package": "rdf4h",
          "signature": "Triple -\u003e Triple -\u003e Bool",
          "source": "src/Data-RDF-Query.html#equalSubjects",
          "type": "function"
        },
        "index": {
          "description": "Determine whether two triples have equal subjects",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "equalSubjects",
          "normalized": "Triple-\u003eTriple-\u003eBool",
          "package": "rdf4h",
          "partial": "Subjects",
          "signature": "Triple-\u003eTriple-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalSubjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand the triples in a graph with the prefix map and base URL for that\n graph.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "expandTriples",
          "package": "rdf4h",
          "signature": "rdf -\u003e Triples",
          "source": "src/Data-RDF-Query.html#expandTriples",
          "type": "function"
        },
        "index": {
          "description": "Expand the triples in graph with the prefix map and base URL for that graph",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "expandTriples",
          "normalized": "a-\u003eTriples",
          "package": "rdf4h",
          "partial": "Triples",
          "signature": "rdf-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:expandTriples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a parse result into an RDF if it was successful\n and error and terminate if not.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "fromEither",
          "package": "rdf4h",
          "signature": "Either ParseFailure rdf -\u003e rdf",
          "source": "src/Data-RDF-Query.html#fromEither",
          "type": "function"
        },
        "index": {
          "description": "Convert parse result into an RDF if it was successful and error and terminate if not",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "fromEither",
          "normalized": "Either ParseFailure a-\u003ea",
          "package": "rdf4h",
          "partial": "Either",
          "signature": "Either ParseFailure rdf-\u003erdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:fromEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the \u003ccode\u003e\u003ca\u003eRDF\u003c/a\u003e\u003c/code\u003e contains zero triples.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "isEmpty",
          "package": "rdf4h",
          "signature": "rdf -\u003e Bool",
          "source": "src/Data-RDF-Query.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Determines whether the RDF contains zero triples",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "isEmpty",
          "normalized": "a-\u003eBool",
          "package": "rdf4h",
          "partial": "Empty",
          "signature": "rdf-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis determines if two RDF representations are equal regardless of blank\n node names, triple order and prefixes.  In math terms, this is the simeq\n latex operator, or ~=\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "isIsomorphic",
          "package": "rdf4h",
          "signature": "rdf1 -\u003e rdf2 -\u003e Bool",
          "source": "src/Data-RDF-Query.html#isIsomorphic",
          "type": "function"
        },
        "index": {
          "description": "This determines if two RDF representations are equal regardless of blank node names triple order and prefixes In math terms this is the simeq latex operator or",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "isIsomorphic",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "rdf4h",
          "partial": "Isomorphic",
          "signature": "rdf-\u003erdf-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:isIsomorphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists of all objects of triples with the given predicate.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "listObjectsOfPredicate",
          "package": "rdf4h",
          "signature": "rdf -\u003e Predicate -\u003e [Object]",
          "source": "src/Data-RDF-Query.html#listObjectsOfPredicate",
          "type": "function"
        },
        "index": {
          "description": "Lists of all objects of triples with the given predicate",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "listObjectsOfPredicate",
          "normalized": "a-\u003ePredicate-\u003e[Object]",
          "package": "rdf4h",
          "partial": "Objects Of Predicate",
          "signature": "rdf-\u003ePredicate-\u003e[Object]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:listObjectsOfPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists of all subjects of triples with the given predicate.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "listSubjectsWithPredicate",
          "package": "rdf4h",
          "signature": "rdf -\u003e Predicate -\u003e [Subject]",
          "source": "src/Data-RDF-Query.html#listSubjectsWithPredicate",
          "type": "function"
        },
        "index": {
          "description": "Lists of all subjects of triples with the given predicate",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "listSubjectsWithPredicate",
          "normalized": "a-\u003ePredicate-\u003e[Subject]",
          "package": "rdf4h",
          "partial": "Subjects With Predicate",
          "signature": "rdf-\u003ePredicate-\u003e[Subject]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:listSubjectsWithPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the object node of the triple.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "objectOf",
          "package": "rdf4h",
          "signature": "Triple -\u003e Node",
          "source": "src/Data-RDF-Query.html#objectOf",
          "type": "function"
        },
        "index": {
          "description": "Answer the object node of the triple",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "objectOf",
          "normalized": "Triple-\u003eNode",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "Triple-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:objectOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the predicate node of the triple.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "predicateOf",
          "package": "rdf4h",
          "signature": "Triple -\u003e Node",
          "source": "src/Data-RDF-Query.html#predicateOf",
          "type": "function"
        },
        "index": {
          "description": "Answer the predicate node of the triple",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "predicateOf",
          "normalized": "Triple-\u003eNode",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "Triple-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:predicateOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer if rdf contains node.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "rdfContainsNode",
          "package": "rdf4h",
          "signature": "rdf -\u003e Node -\u003e Bool",
          "source": "src/Data-RDF-Query.html#rdfContainsNode",
          "type": "function"
        },
        "index": {
          "description": "Answer if rdf contains node",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "rdfContainsNode",
          "normalized": "a-\u003eNode-\u003eBool",
          "package": "rdf4h",
          "partial": "Contains Node",
          "signature": "rdf-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:rdfContainsNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove duplicate triples, returning unique triples. This \n function may return the triples in a different order than \n given.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "removeDupes",
          "package": "rdf4h",
          "signature": "Triples -\u003e Triples",
          "source": "src/Data-RDF-Query.html#removeDupes",
          "type": "function"
        },
        "index": {
          "description": "Remove duplicate triples returning unique triples This function may return the triples in different order than given",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "removeDupes",
          "normalized": "Triples-\u003eTriples",
          "package": "rdf4h",
          "partial": "Dupes",
          "signature": "Triples-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:removeDupes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the given list of triples in sorted order.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "sortTriples",
          "package": "rdf4h",
          "signature": "Triples -\u003e Triples",
          "source": "src/Data-RDF-Query.html#sortTriples",
          "type": "function"
        },
        "index": {
          "description": "Answer the given list of triples in sorted order",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "sortTriples",
          "normalized": "Triples-\u003eTriples",
          "package": "rdf4h",
          "partial": "Triples",
          "signature": "Triples-\u003eTriples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:sortTriples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the subject node of the triple.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "subjectOf",
          "package": "rdf4h",
          "signature": "Triple -\u003e Node",
          "source": "src/Data-RDF-Query.html#subjectOf",
          "type": "function"
        },
        "index": {
          "description": "Answer the subject node of the triple",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "subjectOf",
          "normalized": "Triple-\u003eNode",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "Triple-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:subjectOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer if triple contains node.\n\u003c/p\u003e",
          "module": "Data.RDF.Query",
          "name": "tripleContainsNode",
          "package": "rdf4h",
          "signature": "Node -\u003e Triple -\u003e Bool",
          "source": "src/Data-RDF-Query.html#tripleContainsNode",
          "type": "function"
        },
        "index": {
          "description": "Answer if triple contains node",
          "hierarchy": "Data RDF Query",
          "module": "Data.RDF.Query",
          "name": "tripleContainsNode",
          "normalized": "Node-\u003eTriple-\u003eBool",
          "package": "rdf4h",
          "partial": "Contains Node",
          "signature": "Node-\u003eTriple-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:tripleContainsNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e contains a list-backed graph implementation suitable\n for smallish graphs or for temporary graphs that will not be queried.\n It maintains the triples in the order that they are given in, and is\n especially useful for holding N-Triples, where it is often desirable\n to preserve the order of the triples when they were originally parsed.\n Duplicate triples are not filtered. If you might have duplicate triples,\n use \u003ccode\u003eMGraph\u003c/code\u003e instead, which is also more efficient. However, the query\n functions of this graph (select, query) remove duplicates from their\n result triples (but triplesOf does not) since it is usually cheap\n to do so.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RDF.TriplesGraph",
          "name": "TriplesGraph",
          "package": "rdf4h",
          "source": "src/Data-RDF-TriplesGraph.html",
          "type": "module"
        },
        "index": {
          "description": "TriplesGraph contains list-backed graph implementation suitable for smallish graphs or for temporary graphs that will not be queried It maintains the triples in the order that they are given in and is especially useful for holding N-Triples where it is often desirable to preserve the order of the triples when they were originally parsed Duplicate triples are not filtered If you might have duplicate triples use MGraph instead which is also more efficient However the query functions of this graph select query remove duplicates from their result triples but triplesOf does not since it is usually cheap to do so",
          "hierarchy": "Data RDF TriplesGraph",
          "module": "Data.RDF.TriplesGraph",
          "name": "TriplesGraph",
          "package": "rdf4h",
          "partial": "Triples Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple implementation of the \u003ccode\u003e\u003ca\u003eRDF\u003c/a\u003e\u003c/code\u003e type class that represents\n the graph internally as a list of triples.\n\u003c/p\u003e\u003cp\u003eNote that this type of RDF is fine for interactive\n experimentation and querying of smallish (\u003c10,000 triples) graphs,\n but there are better options for larger graphs or graphs that you\n will do many queries against (e.g., \u003ccode\u003eMGraph\u003c/code\u003e is faster for queries).\n\u003c/p\u003e\u003cp\u003eThe time complexity of the functions (where n == num_triples) are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e    : O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emkRdf\u003c/a\u003e\u003c/code\u003e  : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etriplesOf\u003c/a\u003e\u003c/code\u003e: O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e   : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e    : O(n)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.RDF.TriplesGraph",
          "name": "TriplesGraph",
          "package": "rdf4h",
          "source": "src/Data-RDF-TriplesGraph.html#TriplesGraph",
          "type": "data"
        },
        "index": {
          "description": "simple implementation of the RDF type class that represents the graph internally as list of triples Note that this type of RDF is fine for interactive experimentation and querying of smallish triples graphs but there are better options for larger graphs or graphs that you will do many queries against e.g MGraph is faster for queries The time complexity of the functions where num triples are empty mkRdf triplesOf select query",
          "hierarchy": "Data RDF TriplesGraph",
          "module": "Data.RDF.TriplesGraph",
          "name": "TriplesGraph",
          "package": "rdf4h",
          "partial": "Triples Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#t:TriplesGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Types",
          "name": "Types",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Types",
          "package": "rdf4h",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base URL of an RDF.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "BaseUrl",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#BaseUrl",
          "type": "newtype"
        },
        "index": {
          "description": "The base URL of an RDF",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "BaseUrl",
          "package": "rdf4h",
          "partial": "Base Url",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:BaseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual value of an RDF literal, represented as the \u003ccode\u003e\u003ca\u003eLValue\u003c/a\u003e\u003c/code\u003e\n parameter of an \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "LValue",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#LValue",
          "type": "data"
        },
        "index": {
          "description": "The actual value of an RDF literal represented as the LValue parameter of an LNode",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "LValue",
          "package": "rdf4h",
          "partial": "LValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a namespace as either a prefix and uri, respectively,\n  or just a uri.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Namespace",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Namespace",
          "type": "data"
        },
        "index": {
          "description": "Represents namespace as either prefix and uri respectively or just uri",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Namespace",
          "package": "rdf4h",
          "partial": "Namespace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF node, which may be either a URIRef node (\u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e), a blank\n node (\u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e), or a literal node (\u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Node",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Node",
          "type": "data"
        },
        "index": {
          "description": "An RDF node which may be either URIRef node UNode blank node BNode or literal node LNode",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Node",
          "package": "rdf4h",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNodeSelector\u003c/a\u003e\u003c/code\u003e is either a function that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n  or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for a node, or Nothing, which indicates that all\n nodes would return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe selector is said to select, or match, the nodes for\n which it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen used in conjunction with the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e method of \u003ccode\u003eGraph\u003c/code\u003e, three\n node selectors are used to match a triple.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "NodeSelector",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#NodeSelector",
          "type": "type"
        },
        "index": {
          "description": "NodeSelector is either function that returns True or False for node or Nothing which indicates that all nodes would return True The selector is said to select or match the nodes for which it returns True When used in conjunction with the select method of Graph three node selectors are used to match triple",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "NodeSelector",
          "package": "rdf4h",
          "partial": "Node Selector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:NodeSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Object",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Object",
          "type": "type"
        },
        "index": {
          "description": "An alias for Node defined for convenience and readability purposes",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Object",
          "package": "rdf4h",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a failure in parsing an N-Triples document, including\n an error message with information about the cause for the failure.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "ParseFailure",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#ParseFailure",
          "type": "newtype"
        },
        "index": {
          "description": "Represents failure in parsing an N-Triples document including an error message with information about the cause for the failure",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "ParseFailure",
          "package": "rdf4h",
          "partial": "Parse Failure",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:ParseFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Predicate",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Predicate",
          "type": "type"
        },
        "index": {
          "description": "An alias for Node defined for convenience and readability purposes",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Predicate",
          "package": "rdf4h",
          "partial": "Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of a prefix to the URI for that prefix.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "PrefixMapping",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#PrefixMapping",
          "type": "newtype"
        },
        "index": {
          "description": "mapping of prefix to the URI for that prefix",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "PrefixMapping",
          "package": "rdf4h",
          "partial": "Prefix Mapping",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:PrefixMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for a map from prefix to namespace URI.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#PrefixMappings",
          "type": "newtype"
        },
        "index": {
          "description": "An alias for map from prefix to namespace URI",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "PrefixMappings",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:PrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF value is a set of (unique) RDF triples, together with the\n operations defined upon them.\n\u003c/p\u003e\u003cp\u003eFor information about the efficiency of the functions, see the\n documentation for the particular RDF instance.\n\u003c/p\u003e\u003cp\u003eFor more information about the concept of an RDF graph, see\n the following: \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-rdf-graph\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "RDF",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RDF",
          "type": "class"
        },
        "index": {
          "description": "An RDF value is set of unique RDF triples together with the operations defined upon them For information about the efficiency of the functions see the documentation for the particular RDF instance For more information about the concept of an RDF graph see the following http www.w3.org TR rdf-concepts section-rdf-graph",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "RDF",
          "package": "rdf4h",
          "partial": "RDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RdfParser is a parser that knows how to parse 1 format of RDF and\n can parse an RDF document of that type from a string, a file, or a URL.\n Required configuration options will vary from instance to instance.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "RdfParser",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RdfParser",
          "type": "class"
        },
        "index": {
          "description": "An RdfParser is parser that knows how to parse format of RDF and can parse an RDF document of that type from string file or URL Required configuration options will vary from instance to instance",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "RdfParser",
          "package": "rdf4h",
          "partial": "Rdf Parser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RdfParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RdfSerializer is a serializer of RDF to some particular output format, such as\n NTriples or Turtle.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "RdfSerializer",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RdfSerializer",
          "type": "class"
        },
        "index": {
          "description": "An RdfSerializer is serializer of RDF to some particular output format such as NTriples or Turtle",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "RdfSerializer",
          "package": "rdf4h",
          "partial": "Rdf Serializer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RdfSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Subject",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Subject",
          "type": "type"
        },
        "index": {
          "description": "An alias for Node defined for convenience and readability purposes",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Subject",
          "package": "rdf4h",
          "partial": "Subject",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF triple is a statement consisting of a subject, predicate,\n and object, respectively.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-triples\u003c/a\u003e for\n more information.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Triple",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Triple",
          "type": "data"
        },
        "index": {
          "description": "An RDF triple is statement consisting of subject predicate and object respectively See http www.w3.org TR rdf-concepts section-triples for more information",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Triple",
          "package": "rdf4h",
          "partial": "Triple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of triples. This is defined for convenience and readability.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "Triples",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#Triples",
          "type": "type"
        },
        "index": {
          "description": "list of triples This is defined for convenience and readability",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Triples",
          "package": "rdf4h",
          "partial": "Triples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Triples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for ADTs that expose views to clients.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "View",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#View",
          "type": "class"
        },
        "index": {
          "description": "type class for ADTs that expose views to clients",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "View",
          "package": "rdf4h",
          "partial": "View",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF blank node. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-blank-nodes\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "BNode",
          "package": "rdf4h",
          "signature": "BNode !Text",
          "source": "src/Data-RDF-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "An RDF blank node See http www.w3.org TR rdf-concepts section-blank-nodes for more information",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "BNode",
          "package": "rdf4h",
          "partial": "BNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF blank node with an auto-generated identifier, as used in\n Turtle.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "BNodeGen",
          "package": "rdf4h",
          "signature": "BNodeGen !Int",
          "source": "src/Data-RDF-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "An RDF blank node with an auto-generated identifier as used in Turtle",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "BNodeGen",
          "package": "rdf4h",
          "partial": "BNode Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BNodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Types",
          "name": "BaseUrl",
          "package": "rdf4h",
          "signature": "BaseUrl Text",
          "source": "src/Data-RDF-Types.html#BaseUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "BaseUrl",
          "package": "rdf4h",
          "partial": "Base Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BaseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF literal. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-Graph-Literal\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "LNode",
          "package": "rdf4h",
          "signature": "LNode !LValue",
          "source": "src/Data-RDF-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "An RDF literal See http www.w3.org TR rdf-concepts section-Graph-Literal for more information",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "LNode",
          "package": "rdf4h",
          "partial": "LNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:LNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Types",
          "name": "ParseFailure",
          "package": "rdf4h",
          "signature": "ParseFailure String",
          "source": "src/Data-RDF-Types.html#ParseFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "ParseFailure",
          "package": "rdf4h",
          "partial": "Parse Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:ParseFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plain (untyped) literal value in an unspecified language.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "PlainL",
          "package": "rdf4h",
          "signature": "PlainL !Text",
          "source": "src/Data-RDF-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "plain untyped literal value in an unspecified language",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "PlainL",
          "package": "rdf4h",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plain (untyped) literal value with a language specifier.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "PlainLL",
          "package": "rdf4h",
          "signature": "PlainLL !Text !Text",
          "source": "src/Data-RDF-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "plain untyped literal value with language specifier",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "PlainLL",
          "package": "rdf4h",
          "partial": "Plain LL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Types",
          "name": "Triple",
          "package": "rdf4h",
          "signature": "Triple !Node !Node !Node",
          "source": "src/Data-RDF-Types.html#Triple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "Triple",
          "package": "rdf4h",
          "partial": "Triple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:Triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typed literal value consisting of the literal value and\n the URI of the datatype of the value, respectively.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "TypedL",
          "package": "rdf4h",
          "signature": "TypedL !Text !Text",
          "source": "src/Data-RDF-Types.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "typed literal value consisting of the literal value and the URI of the datatype of the value respectively",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "TypedL",
          "package": "rdf4h",
          "partial": "Typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:TypedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF URI reference. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-Graph-URIref\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "UNode",
          "package": "rdf4h",
          "signature": "UNode !Text",
          "source": "src/Data-RDF-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "An RDF URI reference See http www.w3.org TR rdf-concepts section-Graph-URIref for more information",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "UNode",
          "package": "rdf4h",
          "partial": "UNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:UNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an RDF with the specified prefix mappings merged with\n the existing mappings. If the Bool arg is True, then a new mapping\n for an existing prefix will replace the old mapping; otherwise,\n the new mapping is ignored.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "addPrefixMappings",
          "package": "rdf4h",
          "signature": "rdf -\u003e PrefixMappings -\u003e Bool -\u003e rdf",
          "source": "src/Data-RDF-Types.html#addPrefixMappings",
          "type": "method"
        },
        "index": {
          "description": "Return an RDF with the specified prefix mappings merged with the existing mappings If the Bool arg is True then new mapping for an existing prefix will replace the old mapping otherwise the new mapping is ignored",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "addPrefixMappings",
          "normalized": "a-\u003ePrefixMappings-\u003eBool-\u003ea",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "signature": "rdf-\u003ePrefixMappings-\u003eBool-\u003erdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:addPrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the base URL of this RDF, if any.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "baseUrl",
          "package": "rdf4h",
          "signature": "rdf -\u003e Maybe BaseUrl",
          "source": "src/Data-RDF-Types.html#baseUrl",
          "type": "method"
        },
        "index": {
          "description": "Return the base URL of this RDF if any",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "baseUrl",
          "normalized": "a-\u003eMaybe BaseUrl",
          "package": "rdf4h",
          "partial": "Url",
          "signature": "rdf-\u003eMaybe BaseUrl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:baseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a blank node using the given string identifier.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "bnode",
          "package": "rdf4h",
          "signature": "Text -\u003e Node",
          "source": "src/Data-RDF-Types.html#bnode",
          "type": "function"
        },
        "index": {
          "description": "Return blank node using the given string identifier",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "bnode",
          "normalized": "Text-\u003eNode",
          "package": "rdf4h",
          "signature": "Text-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:bnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "empty",
          "package": "rdf4h",
          "signature": "rdf",
          "source": "src/Data-RDF-Types.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Return an empty RDF",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "empty",
          "package": "rdf4h",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to the file handle whatever header information is required based on\n the output format. For example, if serializing to Turtle, this method would\n write the necessary @prefix declarations and possibly a @baseUrl declaration,\n whereas for NTriples, there is no header section at all, so this would be a no-op.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "hWriteH",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteH",
          "type": "method"
        },
        "index": {
          "description": "Write to the file handle whatever header information is required based on the output format For example if serializing to Turtle this method would write the necessary prefix declarations and possibly baseUrl declaration whereas for NTriples there is no header section at all so this would be no-op",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "hWriteH",
          "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single node to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "hWriteN",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Node -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteN",
          "type": "method"
        },
        "index": {
          "description": "Write single node to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "hWriteN",
          "normalized": "a-\u003eHandle-\u003eNode-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003eNode-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the RDF to a file handle using whatever configuration is specified by\n the first argument.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "hWriteRdf",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteRdf",
          "type": "method"
        },
        "index": {
          "description": "Write the RDF to file handle using whatever configuration is specified by the first argument",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "hWriteRdf",
          "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write Rdf",
          "signature": "s-\u003eHandle-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single triple to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "hWriteT",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Triple -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteT",
          "type": "method"
        },
        "index": {
          "description": "Write single triple to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "hWriteT",
          "normalized": "a-\u003eHandle-\u003eTriple-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003eTriple-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite some triples to a file handle using whatever configuration is specified\n by the first argument. \n\u003c/p\u003e\u003cp\u003eWARNING: if the serialization format has header-level information \n that should be output (e.g., @prefix declarations for Turtle), then you should\n use \u003ccode\u003ehWriteG\u003c/code\u003e instead of this method unless you're sure this is safe to use, since\n otherwise the resultant document will be missing the header information and \n will not be valid.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "hWriteTs",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Triples -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteTs",
          "type": "method"
        },
        "index": {
          "description": "Write some triples to file handle using whatever configuration is specified by the first argument WARNING if the serialization format has header-level information that should be output e.g prefix declarations for Turtle then you should use hWriteG instead of this method unless you re sure this is safe to use since otherwise the resultant document will be missing the header information and will not be valid",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "hWriteTs",
          "normalized": "a-\u003eHandle-\u003eTriples-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write Ts",
          "signature": "s-\u003eHandle-\u003eTriples-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer if given node is a blank node.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "isBNode",
          "package": "rdf4h",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-RDF-Types.html#isBNode",
          "type": "function"
        },
        "index": {
          "description": "Answer if given node is blank node",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "isBNode",
          "normalized": "Node-\u003eBool",
          "package": "rdf4h",
          "partial": "BNode",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isBNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer if given node is a literal node.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "isLNode",
          "package": "rdf4h",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-RDF-Types.html#isLNode",
          "type": "function"
        },
        "index": {
          "description": "Answer if given node is literal node",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "isLNode",
          "normalized": "Node-\u003eBool",
          "package": "rdf4h",
          "partial": "LNode",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer if given node is a URI Ref node.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "isUNode",
          "package": "rdf4h",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-RDF-Types.html#isUNode",
          "type": "function"
        },
        "index": {
          "description": "Answer if given node is URI Ref node",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "isUNode",
          "normalized": "Node-\u003eBool",
          "package": "rdf4h",
          "partial": "UNode",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isUNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a literal node using the given LValue.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "lnode",
          "package": "rdf4h",
          "signature": "LValue -\u003e Node",
          "source": "src/Data-RDF-Types.html#lnode",
          "type": "function"
        },
        "index": {
          "description": "Return literal node using the given LValue",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "lnode",
          "normalized": "LValue-\u003eNode",
          "package": "rdf4h",
          "signature": "LValue-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:lnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "mkRdf",
          "package": "rdf4h",
          "signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
          "source": "src/Data-RDF-Types.html#mkRdf",
          "type": "method"
        },
        "index": {
          "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "mkRdf",
          "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
          "package": "rdf4h",
          "partial": "Rdf",
          "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:mkRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the local file with the given path, yielding a failure with error\n message or the resultant RDF in the IO monad.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "parseFile",
          "package": "rdf4h",
          "signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
          "source": "src/Data-RDF-Types.html#parseFile",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the local file with the given path yielding failure with error message or the resultant RDF in the IO monad",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "parseFile",
          "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
          "package": "rdf4h",
          "partial": "File",
          "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the given text, yielding a failure with error message or\n the resultant RDF.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "parseString",
          "package": "rdf4h",
          "signature": "p -\u003e Text -\u003e Either ParseFailure rdf",
          "source": "src/Data-RDF-Types.html#parseString",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the given text yielding failure with error message or the resultant RDF",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "parseString",
          "normalized": "a-\u003eText-\u003eEither ParseFailure b",
          "package": "rdf4h",
          "partial": "String",
          "signature": "p-\u003eText-\u003eEither ParseFailure rdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the remote file with the given HTTP URL (https is not supported),\n yielding a failure with error message or the resultant graph in the IO monad.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "parseURL",
          "package": "rdf4h",
          "signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
          "source": "src/Data-RDF-Types.html#parseURL",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the remote file with the given HTTP URL https is not supported yielding failure with error message or the resultant graph in the IO monad",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "parseURL",
          "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
          "package": "rdf4h",
          "partial": "URL",
          "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a PlainL LValue for the given string value.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "plainL",
          "package": "rdf4h",
          "signature": "Text -\u003e LValue",
          "source": "src/Data-RDF-Types.html#plainL",
          "type": "function"
        },
        "index": {
          "description": "Return PlainL LValue for the given string value",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "plainL",
          "normalized": "Text-\u003eLValue",
          "package": "rdf4h",
          "signature": "Text-\u003eLValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:plainL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a PlainLL LValue for the given string value and language,\n respectively.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "plainLL",
          "package": "rdf4h",
          "signature": "Text -\u003e Text -\u003e LValue",
          "source": "src/Data-RDF-Types.html#plainLL",
          "type": "function"
        },
        "index": {
          "description": "Return PlainLL LValue for the given string value and language respectively",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "plainLL",
          "normalized": "Text-\u003eText-\u003eLValue",
          "package": "rdf4h",
          "partial": "LL",
          "signature": "Text-\u003eText-\u003eLValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:plainLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the prefix mappings defined for this RDF, if any.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "prefixMappings",
          "package": "rdf4h",
          "signature": "rdf -\u003e PrefixMappings",
          "source": "src/Data-RDF-Types.html#prefixMappings",
          "type": "method"
        },
        "index": {
          "description": "Return the prefix mappings defined for this RDF if any",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "prefixMappings",
          "normalized": "a-\u003ePrefixMappings",
          "package": "rdf4h",
          "partial": "Mappings",
          "signature": "rdf-\u003ePrefixMappings",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:prefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "query",
          "package": "rdf4h",
          "signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
          "source": "src/Data-RDF-Types.html#query",
          "type": "method"
        },
        "index": {
          "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "query",
          "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "select",
          "package": "rdf4h",
          "signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
          "source": "src/Data-RDF-Types.html#select",
          "type": "method"
        },
        "index": {
          "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "select",
          "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA smart constructor function for \u003ccode\u003e\u003ca\u003eTriple\u003c/a\u003e\u003c/code\u003e that verifies the node arguments\n are of the correct type and creates the new \u003ccode\u003e\u003ca\u003eTriple\u003c/a\u003e\u003c/code\u003e if so or calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n \u003cem\u003esubj\u003c/em\u003e must be a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003epred\u003c/em\u003e must be a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "triple",
          "package": "rdf4h",
          "signature": "Subject -\u003e Predicate -\u003e Object -\u003e Triple",
          "source": "src/Data-RDF-Types.html#triple",
          "type": "function"
        },
        "index": {
          "description": "smart constructor function for Triple that verifies the node arguments are of the correct type and creates the new Triple if so or calls error subj must be UNode or BNode and pred must be UNode",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "triple",
          "normalized": "Subject-\u003ePredicate-\u003eObject-\u003eTriple",
          "package": "rdf4h",
          "signature": "Subject-\u003ePredicate-\u003eObject-\u003eTriple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "triplesOf",
          "package": "rdf4h",
          "signature": "rdf -\u003e Triples",
          "source": "src/Data-RDF-Types.html#triplesOf",
          "type": "method"
        },
        "index": {
          "description": "Return all triples in the RDF as list",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "triplesOf",
          "normalized": "a-\u003eTriples",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "rdf-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:triplesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a TypedL LValue for the given string value and datatype URI,\n respectively.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "typedL",
          "package": "rdf4h",
          "signature": "Text -\u003e Text -\u003e LValue",
          "source": "src/Data-RDF-Types.html#typedL",
          "type": "function"
        },
        "index": {
          "description": "Return TypedL LValue for the given string value and datatype URI respectively",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "typedL",
          "normalized": "Text-\u003eText-\u003eLValue",
          "package": "rdf4h",
          "signature": "Text-\u003eText-\u003eLValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:typedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a URIRef node for the given bytetring URI.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "unode",
          "package": "rdf4h",
          "signature": "Text -\u003e Node",
          "source": "src/Data-RDF-Types.html#unode",
          "type": "function"
        },
        "index": {
          "description": "Return URIRef node for the given bytetring URI",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "unode",
          "normalized": "Text-\u003eNode",
          "package": "rdf4h",
          "signature": "Text-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:unode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RDF.Types",
          "name": "view",
          "package": "rdf4h",
          "signature": "a -\u003e b",
          "source": "src/Data-RDF-Types.html#view",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "view",
          "normalized": "a-\u003eb",
          "package": "rdf4h",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite header information to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "writeH",
          "package": "rdf4h",
          "signature": "s -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeH",
          "type": "method"
        },
        "index": {
          "description": "Write header information to stdout equivalent to hWriteRdf stdout",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "writeH",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single node to sdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteN\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "writeN",
          "package": "rdf4h",
          "signature": "s -\u003e Node -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeN",
          "type": "method"
        },
        "index": {
          "description": "Write single node to sdout equivalent to hWriteN stdout",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "writeN",
          "normalized": "a-\u003eNode-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003eNode-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the RDF to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "writeRdf",
          "package": "rdf4h",
          "signature": "s -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeRdf",
          "type": "method"
        },
        "index": {
          "description": "Write the RDF to stdout equivalent to hWriteRdf stdout",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "writeRdf",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Rdf",
          "signature": "s-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single triple to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteT\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "writeT",
          "package": "rdf4h",
          "signature": "s -\u003e Triple -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeT",
          "type": "method"
        },
        "index": {
          "description": "Write single triple to stdout equivalent to hWriteT stdout",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "writeT",
          "normalized": "a-\u003eTriple-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003eTriple-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite some triples to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF.Types",
          "name": "writeTs",
          "package": "rdf4h",
          "signature": "s -\u003e Triples -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeTs",
          "type": "method"
        },
        "index": {
          "description": "Write some triples to stdout equivalent to hWriteTs stdout",
          "hierarchy": "Data RDF Types",
          "module": "Data.RDF.Types",
          "name": "writeTs",
          "normalized": "a-\u003eTriples-\u003eIO()",
          "package": "rdf4h",
          "partial": "Ts",
          "signature": "s-\u003eTriples-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Core module exports all serializers and parsers,\n  types, and query functions of the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RDF",
          "name": "RDF",
          "package": "rdf4h",
          "source": "src/Data-RDF.html",
          "type": "module"
        },
        "index": {
          "description": "The Core module exports all serializers and parsers types and query functions of the library",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "RDF",
          "package": "rdf4h",
          "partial": "RDF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RDF value is a set of (unique) RDF triples, together with the\n operations defined upon them.\n\u003c/p\u003e\u003cp\u003eFor information about the efficiency of the functions, see the\n documentation for the particular RDF instance.\n\u003c/p\u003e\u003cp\u003eFor more information about the concept of an RDF graph, see\n the following: \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-rdf-graph\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "RDF",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RDF",
          "type": "class"
        },
        "index": {
          "description": "An RDF value is set of unique RDF triples together with the operations defined upon them For information about the efficiency of the functions see the documentation for the particular RDF instance For more information about the concept of an RDF graph see the following http www.w3.org TR rdf-concepts section-rdf-graph",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "RDF",
          "package": "rdf4h",
          "partial": "RDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RdfParser is a parser that knows how to parse 1 format of RDF and\n can parse an RDF document of that type from a string, a file, or a URL.\n Required configuration options will vary from instance to instance.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "RdfParser",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RdfParser",
          "type": "class"
        },
        "index": {
          "description": "An RdfParser is parser that knows how to parse format of RDF and can parse an RDF document of that type from string file or URL Required configuration options will vary from instance to instance",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "RdfParser",
          "package": "rdf4h",
          "partial": "Rdf Parser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RdfParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RdfSerializer is a serializer of RDF to some particular output format, such as\n NTriples or Turtle.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "RdfSerializer",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#RdfSerializer",
          "type": "class"
        },
        "index": {
          "description": "An RdfSerializer is serializer of RDF to some particular output format such as NTriples or Turtle",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "RdfSerializer",
          "package": "rdf4h",
          "partial": "Rdf Serializer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RdfSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an RDF with the specified prefix mappings merged with\n the existing mappings. If the Bool arg is True, then a new mapping\n for an existing prefix will replace the old mapping; otherwise,\n the new mapping is ignored.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "addPrefixMappings",
          "package": "rdf4h",
          "signature": "rdf -\u003e PrefixMappings -\u003e Bool -\u003e rdf",
          "source": "src/Data-RDF-Types.html#addPrefixMappings",
          "type": "method"
        },
        "index": {
          "description": "Return an RDF with the specified prefix mappings merged with the existing mappings If the Bool arg is True then new mapping for an existing prefix will replace the old mapping otherwise the new mapping is ignored",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "addPrefixMappings",
          "normalized": "a-\u003ePrefixMappings-\u003eBool-\u003ea",
          "package": "rdf4h",
          "partial": "Prefix Mappings",
          "signature": "rdf-\u003ePrefixMappings-\u003eBool-\u003erdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:addPrefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the base URL of this RDF, if any.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "baseUrl",
          "package": "rdf4h",
          "signature": "rdf -\u003e Maybe BaseUrl",
          "source": "src/Data-RDF-Types.html#baseUrl",
          "type": "method"
        },
        "index": {
          "description": "Return the base URL of this RDF if any",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "baseUrl",
          "normalized": "a-\u003eMaybe BaseUrl",
          "package": "rdf4h",
          "partial": "Url",
          "signature": "rdf-\u003eMaybe BaseUrl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:baseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "empty",
          "package": "rdf4h",
          "signature": "rdf",
          "source": "src/Data-RDF-Types.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Return an empty RDF",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "empty",
          "package": "rdf4h",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to the file handle whatever header information is required based on\n the output format. For example, if serializing to Turtle, this method would\n write the necessary @prefix declarations and possibly a @baseUrl declaration,\n whereas for NTriples, there is no header section at all, so this would be a no-op.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "hWriteH",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteH",
          "type": "method"
        },
        "index": {
          "description": "Write to the file handle whatever header information is required based on the output format For example if serializing to Turtle this method would write the necessary prefix declarations and possibly baseUrl declaration whereas for NTriples there is no header section at all so this would be no-op",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "hWriteH",
          "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single node to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "hWriteN",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Node -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteN",
          "type": "method"
        },
        "index": {
          "description": "Write single node to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "hWriteN",
          "normalized": "a-\u003eHandle-\u003eNode-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003eNode-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the RDF to a file handle using whatever configuration is specified by\n the first argument.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "hWriteRdf",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteRdf",
          "type": "method"
        },
        "index": {
          "description": "Write the RDF to file handle using whatever configuration is specified by the first argument",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "hWriteRdf",
          "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write Rdf",
          "signature": "s-\u003eHandle-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single triple to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "hWriteT",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Triple -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteT",
          "type": "method"
        },
        "index": {
          "description": "Write single triple to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "hWriteT",
          "normalized": "a-\u003eHandle-\u003eTriple-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write",
          "signature": "s-\u003eHandle-\u003eTriple-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite some triples to a file handle using whatever configuration is specified\n by the first argument. \n\u003c/p\u003e\u003cp\u003eWARNING: if the serialization format has header-level information \n that should be output (e.g., @prefix declarations for Turtle), then you should\n use \u003ccode\u003ehWriteG\u003c/code\u003e instead of this method unless you're sure this is safe to use, since\n otherwise the resultant document will be missing the header information and \n will not be valid.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "hWriteTs",
          "package": "rdf4h",
          "signature": "s -\u003e Handle -\u003e Triples -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#hWriteTs",
          "type": "method"
        },
        "index": {
          "description": "Write some triples to file handle using whatever configuration is specified by the first argument WARNING if the serialization format has header-level information that should be output e.g prefix declarations for Turtle then you should use hWriteG instead of this method unless you re sure this is safe to use since otherwise the resultant document will be missing the header information and will not be valid",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "hWriteTs",
          "normalized": "a-\u003eHandle-\u003eTriples-\u003eIO()",
          "package": "rdf4h",
          "partial": "Write Ts",
          "signature": "s-\u003eHandle-\u003eTriples-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "mkRdf",
          "package": "rdf4h",
          "signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
          "source": "src/Data-RDF-Types.html#mkRdf",
          "type": "method"
        },
        "index": {
          "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "mkRdf",
          "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
          "package": "rdf4h",
          "partial": "Rdf",
          "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:mkRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the local file with the given path, yielding a failure with error\n message or the resultant RDF in the IO monad.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "parseFile",
          "package": "rdf4h",
          "signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
          "source": "src/Data-RDF-Types.html#parseFile",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the local file with the given path yielding failure with error message or the resultant RDF in the IO monad",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "parseFile",
          "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
          "package": "rdf4h",
          "partial": "File",
          "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the given text, yielding a failure with error message or\n the resultant RDF.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "parseString",
          "package": "rdf4h",
          "signature": "p -\u003e Text -\u003e Either ParseFailure rdf",
          "source": "src/Data-RDF-Types.html#parseString",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the given text yielding failure with error message or the resultant RDF",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "parseString",
          "normalized": "a-\u003eText-\u003eEither ParseFailure b",
          "package": "rdf4h",
          "partial": "String",
          "signature": "p-\u003eText-\u003eEither ParseFailure rdf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse RDF from the remote file with the given HTTP URL (https is not supported),\n yielding a failure with error message or the resultant graph in the IO monad.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "parseURL",
          "package": "rdf4h",
          "signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
          "source": "src/Data-RDF-Types.html#parseURL",
          "type": "method"
        },
        "index": {
          "description": "Parse RDF from the remote file with the given HTTP URL https is not supported yielding failure with error message or the resultant graph in the IO monad",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "parseURL",
          "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
          "package": "rdf4h",
          "partial": "URL",
          "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the prefix mappings defined for this RDF, if any.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "prefixMappings",
          "package": "rdf4h",
          "signature": "rdf -\u003e PrefixMappings",
          "source": "src/Data-RDF-Types.html#prefixMappings",
          "type": "method"
        },
        "index": {
          "description": "Return the prefix mappings defined for this RDF if any",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "prefixMappings",
          "normalized": "a-\u003ePrefixMappings",
          "package": "rdf4h",
          "partial": "Mappings",
          "signature": "rdf-\u003ePrefixMappings",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:prefixMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "query",
          "package": "rdf4h",
          "signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
          "source": "src/Data-RDF-Types.html#query",
          "type": "method"
        },
        "index": {
          "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "query",
          "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "select",
          "package": "rdf4h",
          "signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
          "source": "src/Data-RDF-Types.html#select",
          "type": "method"
        },
        "index": {
          "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "select",
          "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "package": "rdf4h",
          "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "triplesOf",
          "package": "rdf4h",
          "signature": "rdf -\u003e Triples",
          "source": "src/Data-RDF-Types.html#triplesOf",
          "type": "method"
        },
        "index": {
          "description": "Return all triples in the RDF as list",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "triplesOf",
          "normalized": "a-\u003eTriples",
          "package": "rdf4h",
          "partial": "Of",
          "signature": "rdf-\u003eTriples",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:triplesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite header information to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "writeH",
          "package": "rdf4h",
          "signature": "s -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeH",
          "type": "method"
        },
        "index": {
          "description": "Write header information to stdout equivalent to hWriteRdf stdout",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "writeH",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single node to sdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteN\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "writeN",
          "package": "rdf4h",
          "signature": "s -\u003e Node -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeN",
          "type": "method"
        },
        "index": {
          "description": "Write single node to sdout equivalent to hWriteN stdout",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "writeN",
          "normalized": "a-\u003eNode-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003eNode-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the RDF to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "writeRdf",
          "package": "rdf4h",
          "signature": "s -\u003e rdf -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeRdf",
          "type": "method"
        },
        "index": {
          "description": "Write the RDF to stdout equivalent to hWriteRdf stdout",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "writeRdf",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "rdf4h",
          "partial": "Rdf",
          "signature": "s-\u003erdf-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeRdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a single triple to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteT\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "writeT",
          "package": "rdf4h",
          "signature": "s -\u003e Triple -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeT",
          "type": "method"
        },
        "index": {
          "description": "Write single triple to stdout equivalent to hWriteT stdout",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "writeT",
          "normalized": "a-\u003eTriple-\u003eIO()",
          "package": "rdf4h",
          "signature": "s-\u003eTriple-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite some triples to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RDF",
          "name": "writeTs",
          "package": "rdf4h",
          "signature": "s -\u003e Triples -\u003e IO ()",
          "source": "src/Data-RDF-Types.html#writeTs",
          "type": "method"
        },
        "index": {
          "description": "Write some triples to stdout equivalent to hWriteTs stdout",
          "hierarchy": "Data RDF",
          "module": "Data.RDF",
          "name": "writeTs",
          "normalized": "a-\u003eTriples-\u003eIO()",
          "package": "rdf4h",
          "partial": "Ts",
          "signature": "s-\u003eTriples-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser for RDF in N-Triples format \n \u003ca\u003ehttp://www.w3.org/TR/rdf-testcases/#ntriples\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-NTriplesParser.html",
          "type": "module"
        },
        "index": {
          "description": "parser for RDF in N-Triples format http www.w3.org TR rdf-testcases ntriples",
          "hierarchy": "Text RDF RDF4H NTriplesParser",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "partial": "NTriples Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNTriplesParser is an \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for parsing RDF in the\n NTriples format. It requires no configuration options. To use this parser,\n pass an \u003ccode\u003e\u003ca\u003eNTriplesParser\u003c/a\u003e\u003c/code\u003e value as the first argument to any of the \n \u003ccode\u003e\u003ca\u003eparseString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eparseURL\u003c/a\u003e\u003c/code\u003e methods of the \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e type\n class.\n\u003c/p\u003e",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-NTriplesParser.html#NTriplesParser",
          "type": "data"
        },
        "index": {
          "description": "NTriplesParser is an RdfParser implementation for parsing RDF in the NTriples format It requires no configuration options To use this parser pass an NTriplesParser value as the first argument to any of the parseString parseFile or parseURL methods of the RdfParser type class",
          "hierarchy": "Text RDF RDF4H NTriplesParser",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "partial": "NTriples Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#t:NTriplesParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a failure in parsing an N-Triples document, including\n an error message with information about the cause for the failure.\n\u003c/p\u003e",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "ParseFailure",
          "package": "rdf4h",
          "source": "src/Data-RDF-Types.html#ParseFailure",
          "type": "data"
        },
        "index": {
          "description": "Represents failure in parsing an N-Triples document including an error message with information about the cause for the failure",
          "hierarchy": "Text RDF RDF4H NTriplesParser",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "ParseFailure",
          "package": "rdf4h",
          "partial": "Parse Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#t:ParseFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "signature": "NTriplesParser",
          "source": "src/Text-RDF-RDF4H-NTriplesParser.html#NTriplesParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H NTriplesParser",
          "module": "Text.RDF.RDF4H.NTriplesParser",
          "name": "NTriplesParser",
          "package": "rdf4h",
          "partial": "NTriples Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#v:NTriplesParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA serializer for RDF as N-Triples\n \u003ca\u003ehttp://www.w3.org/TR/rdf-testcases/#ntriples\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-NTriplesSerializer.html",
          "type": "module"
        },
        "index": {
          "description": "serializer for RDF as N-Triples http www.w3.org TR rdf-testcases ntriples",
          "hierarchy": "Text RDF RDF4H NTriplesSerializer",
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "partial": "NTriples Serializer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-NTriplesSerializer.html#NTriplesSerializer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H NTriplesSerializer",
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "partial": "NTriples Serializer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#t:NTriplesSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "signature": "NTriplesSerializer",
          "source": "src/Text-RDF-RDF4H-NTriplesSerializer.html#NTriplesSerializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H NTriplesSerializer",
          "module": "Text.RDF.RDF4H.NTriplesSerializer",
          "name": "NTriplesSerializer",
          "package": "rdf4h",
          "partial": "NTriples Serializer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#v:NTriplesSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for the Turtle format \n \u003ca\u003ehttp://www.w3.org/TeamSubmission/turtle/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-TurtleParser.html",
          "type": "module"
        },
        "index": {
          "description": "An RdfParser implementation for the Turtle format http www.w3.org TeamSubmission turtle",
          "hierarchy": "Text RDF RDF4H TurtleParser",
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "partial": "Turtle Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for parsing RDF in the \n Turtle format. It takes optional arguments representing the base URL to use\n for resolving relative URLs in the document (may be overridden in the document\n itself using the @base directive), and the URL to use for the document itself\n for resolving references to \u003ca/\u003e in the document.\n To use this parser, pass a \u003ccode\u003e\u003ca\u003eTurtleParser\u003c/a\u003e\u003c/code\u003e value as the first argument to any of\n the \u003ccode\u003e\u003ca\u003eparseString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eparseURL\u003c/a\u003e\u003c/code\u003e methods of the \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e type\n class.\n\u003c/p\u003e",
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-TurtleParser.html#TurtleParser",
          "type": "data"
        },
        "index": {
          "description": "An RdfParser implementation for parsing RDF in the Turtle format It takes optional arguments representing the base URL to use for resolving relative URLs in the document may be overridden in the document itself using the base directive and the URL to use for the document itself for resolving references to in the document To use this parser pass TurtleParser value as the first argument to any of the parseString parseFile or parseURL methods of the RdfParser type class",
          "hierarchy": "Text RDF RDF4H TurtleParser",
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "partial": "Turtle Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#t:TurtleParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "signature": "TurtleParser (Maybe BaseUrl) (Maybe Text)",
          "source": "src/Text-RDF-RDF4H-TurtleParser.html#TurtleParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H TurtleParser",
          "module": "Text.RDF.RDF4H.TurtleParser",
          "name": "TurtleParser",
          "package": "rdf4h",
          "partial": "Turtle Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#v:TurtleParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn RDF serializer for Turtle \n \u003ca\u003ehttp://www.w3.org/TeamSubmission/turtle/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-TurtleSerializer.html",
          "type": "module"
        },
        "index": {
          "description": "An RDF serializer for Turtle http www.w3.org TeamSubmission turtle",
          "hierarchy": "Text RDF RDF4H TurtleSerializer",
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "partial": "Turtle Serializer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-TurtleSerializer.html#TurtleSerializer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H TurtleSerializer",
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "partial": "Turtle Serializer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#t:TurtleSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "signature": "TurtleSerializer (Maybe Text) PrefixMappings",
          "source": "src/Text-RDF-RDF4H-TurtleSerializer.html#TurtleSerializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H TurtleSerializer",
          "module": "Text.RDF.RDF4H.TurtleSerializer",
          "name": "TurtleSerializer",
          "package": "rdf4h",
          "partial": "Turtle Serializer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#v:TurtleSerializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn parser for the RDF/XML format \n \u003ca\u003ehttp://www.w3.org/TR/REC-rdf-syntax/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-XmlParser.html",
          "type": "module"
        },
        "index": {
          "description": "An parser for the RDF XML format http www.w3.org TR REC-rdf-syntax",
          "hierarchy": "Text RDF RDF4H XmlParser",
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "partial": "Xml Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "source": "src/Text-RDF-RDF4H-XmlParser.html#XmlParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H XmlParser",
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "partial": "Xml Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#t:XmlParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "signature": "XmlParser (Maybe BaseUrl) (Maybe Text)",
          "source": "src/Text-RDF-RDF4H-XmlParser.html#XmlParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RDF RDF4H XmlParser",
          "module": "Text.RDF.RDF4H.XmlParser",
          "name": "XmlParser",
          "package": "rdf4h",
          "partial": "Xml Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#v:XmlParser"
      }
    }
  ]
]