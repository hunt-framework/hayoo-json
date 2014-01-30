[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple graph implementation backed by \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF-MGraph.html",
        "fct-type": "module",
        "title": "MGraph"
      },
      "index": {
        "description": "simple graph implementation backed by Map",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "MGraph",
        "normalized": "",
        "package": "rdf4h",
        "partial": "MGraph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#t:MGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA map-based graph implementation.\n\u003c/p\u003e\u003cp\u003eWorst-case time complexity of the graph functions, with respect\n to the number of triples, are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e    : O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emkRdf\u003c/a\u003e\u003c/code\u003e  : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etriplesOf\u003c/a\u003e\u003c/code\u003e: O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e   : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e    : O(log n)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-MGraph.html#MGraph",
        "fct-type": "data",
        "title": "MGraph"
      },
      "index": {
        "description": "map-based graph implementation Worst-case time complexity of the graph functions with respect to the number of triples are empty mkRdf triplesOf select query log",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "MGraph",
        "normalized": "",
        "package": "rdf4h",
        "partial": "MGraph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf",
        "fct-source": "src/Data-RDF-Types.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Return an empty RDF",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "empty",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:mkRdf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#mkRdf",
        "fct-type": "function",
        "title": "mkRdf"
      },
      "index": {
        "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "mkRdf",
        "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "query",
        "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "select",
        "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-MGraph.html#v:triplesOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.MGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#triplesOf",
        "fct-type": "function",
        "title": "triplesOf"
      },
      "index": {
        "description": "Return all triples in the RDF as list",
        "hierarchy": "Data RDF MGraph",
        "module": "Data.RDF.MGraph",
        "name": "triplesOf",
        "normalized": "a-\u003eTriples",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "rdf-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines types and utility functions related to namespaces, and\n some predefined values for commonly used namespaces, such as\n rdf, xsd, dublin core, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF-Namespace.html",
        "fct-type": "module",
        "title": "Namespace"
      },
      "index": {
        "description": "Defines types and utility functions related to namespaces and some predefined values for commonly used namespaces such as rdf xsd dublin core etc",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "Namespace",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:Namespace",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a namespace as either a prefix and uri, respectively,\n  or just a uri.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "data",
        "title": "Namespace"
      },
      "index": {
        "description": "Represents namespace as either prefix and uri respectively or just uri",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "Namespace",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:PrefixMapping",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping of a prefix to the URI for that prefix.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#PrefixMapping",
        "fct-type": "newtype",
        "title": "PrefixMapping"
      },
      "index": {
        "description": "mapping of prefix to the URI for that prefix",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PrefixMapping",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#t:PrefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for a map from prefix to namespace URI.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#PrefixMappings",
        "fct-type": "newtype",
        "title": "PrefixMappings"
      },
      "index": {
        "description": "An alias for map from prefix to namespace URI",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PrefixMappings",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PlainNS",
      "description": {
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PlainNS Text",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "function",
        "title": "PlainNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PlainNS",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Plain NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMapping",
      "description": {
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMapping (Text, Text)",
        "fct-source": "src/Data-RDF-Types.html#PrefixMapping",
        "fct-type": "function",
        "title": "PrefixMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PrefixMapping",
        "normalized": "PrefixMapping(Text,Text)",
        "package": "rdf4h",
        "partial": "Prefix Mapping",
        "signature": "PrefixMapping(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixMappings",
      "description": {
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMappings (Map Text Text)",
        "fct-source": "src/Data-RDF-Types.html#PrefixMappings",
        "fct-type": "function",
        "title": "PrefixMappings"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PrefixMappings",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:PrefixedNS",
      "description": {
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixedNS Text Text",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "function",
        "title": "PrefixedNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "PrefixedNS",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefixed NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:dc",
      "description": {
        "fct-descr": "\u003cp\u003eThe Dublic Core namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#dc",
        "fct-type": "function",
        "title": "dc"
      },
      "index": {
        "description": "The Dublic Core namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "dc",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:dct",
      "description": {
        "fct-descr": "\u003cp\u003eThe Dublin Core terms namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#dct",
        "fct-type": "function",
        "title": "dct"
      },
      "index": {
        "description": "The Dublin Core terms namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "dct",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ex",
      "description": {
        "fct-descr": "\u003cp\u003eExample namespace #1.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#ex",
        "fct-type": "function",
        "title": "ex"
      },
      "index": {
        "description": "Example namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "ex",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ex2",
      "description": {
        "fct-descr": "\u003cp\u003eExample namespace #2.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#ex2",
        "fct-type": "function",
        "title": "ex2"
      },
      "index": {
        "description": "Example namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "ex2",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:foaf",
      "description": {
        "fct-descr": "\u003cp\u003eThe friend of a friend namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#foaf",
        "fct-type": "function",
        "title": "foaf"
      },
      "index": {
        "description": "The friend of friend namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "foaf",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mergePrefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a left-biased merge of the two sets of prefix mappings.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMappings -\u003e PrefixMappings -\u003e PrefixMappings",
        "fct-source": "src/Data-RDF-Namespace.html#mergePrefixMappings",
        "fct-type": "function",
        "title": "mergePrefixMappings"
      },
      "index": {
        "description": "Perform left-biased merge of the two sets of prefix mappings",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "mergePrefixMappings",
        "normalized": "PrefixMappings-\u003ePrefixMappings-\u003ePrefixMappings",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": "PrefixMappings-\u003ePrefixMappings-\u003ePrefixMappings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPlainNS",
      "description": {
        "fct-descr": "\u003cp\u003eMake a namespace for the given URI reference.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#mkPlainNS",
        "fct-type": "function",
        "title": "mkPlainNS"
      },
      "index": {
        "description": "Make namespace for the given URI reference",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "mkPlainNS",
        "normalized": "Text-\u003eNamespace",
        "package": "rdf4h",
        "partial": "Plain NS",
        "signature": "Text-\u003eNamespace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPrefixedNS",
      "description": {
        "fct-descr": "\u003cp\u003eMake a namespace having the given prefix for the given URI reference,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Text -\u003e Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#mkPrefixedNS",
        "fct-type": "function",
        "title": "mkPrefixedNS"
      },
      "index": {
        "description": "Make namespace having the given prefix for the given URI reference respectively",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "mkPrefixedNS",
        "normalized": "Text-\u003eText-\u003eNamespace",
        "package": "rdf4h",
        "partial": "Prefixed NS",
        "signature": "Text-\u003eText-\u003eNamespace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkPrefixedNS-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMake a namespace having the given prefix for the given URI reference,\n respectively, using strings which will be converted to bytestrings\n automatically.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "String -\u003e String -\u003e Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#mkPrefixedNS%27",
        "fct-type": "function",
        "title": "mkPrefixedNS'"
      },
      "index": {
        "description": "Make namespace having the given prefix for the given URI reference respectively using strings which will be converted to bytestrings automatically",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "mkPrefixedNS'",
        "normalized": "String-\u003eString-\u003eNamespace",
        "package": "rdf4h",
        "partial": "Prefixed NS'",
        "signature": "String-\u003eString-\u003eNamespace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:mkUri",
      "description": {
        "fct-descr": "\u003cp\u003eMake a URI consisting of the given namespace and the given localname.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace -\u003e Text -\u003e Text",
        "fct-source": "src/Data-RDF-Namespace.html#mkUri",
        "fct-type": "function",
        "title": "mkUri"
      },
      "index": {
        "description": "Make URI consisting of the given namespace and the given localname",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "mkUri",
        "normalized": "Namespace-\u003eText-\u003eText",
        "package": "rdf4h",
        "partial": "Uri",
        "signature": "Namespace-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:ns_mappings",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of \u003ccode\u003e\u003ca\u003eNamespace\u003c/a\u003e\u003c/code\u003es and returns \u003ccode\u003e\u003ca\u003ePrefixMappings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "[Namespace] -\u003e PrefixMappings",
        "fct-source": "src/Data-RDF-Namespace.html#ns_mappings",
        "fct-type": "function",
        "title": "ns_mappings"
      },
      "index": {
        "description": "Takes list of Namespace and returns PrefixMappings",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "ns_mappings",
        "normalized": "[Namespace]-\u003ePrefixMappings",
        "package": "rdf4h",
        "partial": "",
        "signature": "[Namespace]-\u003ePrefixMappings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:owl",
      "description": {
        "fct-descr": "\u003cp\u003eThe OWL namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#owl",
        "fct-type": "function",
        "title": "owl"
      },
      "index": {
        "description": "The OWL namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "owl",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:prefixOf",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the prefix of the given namespace, if it has one.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace -\u003e Maybe Text",
        "fct-source": "src/Data-RDF-Namespace.html#prefixOf",
        "fct-type": "function",
        "title": "prefixOf"
      },
      "index": {
        "description": "Determine the prefix of the given namespace if it has one",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "prefixOf",
        "normalized": "Namespace-\u003eMaybe Text",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "Namespace-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:rdf",
      "description": {
        "fct-descr": "\u003cp\u003eThe RDF namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#rdf",
        "fct-type": "function",
        "title": "rdf"
      },
      "index": {
        "description": "The RDF namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "rdf",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:rdfs",
      "description": {
        "fct-descr": "\u003cp\u003eThe RDF Schema namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#rdfs",
        "fct-type": "function",
        "title": "rdfs"
      },
      "index": {
        "description": "The RDF Schema namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "rdfs",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:skos",
      "description": {
        "fct-descr": "\u003cp\u003eThe SKOS namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#skos",
        "fct-type": "function",
        "title": "skos"
      },
      "index": {
        "description": "The SKOS namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "skos",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:standard_ns_mappings",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of common predefined namespaces as a \u003ccode\u003e\u003ca\u003ePrefixMappings\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMappings",
        "fct-source": "src/Data-RDF-Namespace.html#standard_ns_mappings",
        "fct-type": "function",
        "title": "standard_ns_mappings"
      },
      "index": {
        "description": "The set of common predefined namespaces as PrefixMappings value",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "standard_ns_mappings",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:toPMList",
      "description": {
        "fct-descr": "\u003cp\u003eView the prefix mappings as a list of key-value pairs. The PM in\n in the name is to reduce name clashes if used without qualifying.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMappings -\u003e [(Text, Text)]",
        "fct-source": "src/Data-RDF-Namespace.html#toPMList",
        "fct-type": "function",
        "title": "toPMList"
      },
      "index": {
        "description": "View the prefix mappings as list of key-value pairs The PM in in the name is to reduce name clashes if used without qualifying",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "toPMList",
        "normalized": "PrefixMappings-\u003e[(Text,Text)]",
        "package": "rdf4h",
        "partial": "PMList",
        "signature": "PrefixMappings-\u003e[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:uriOf",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the URI of the given namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace -\u003e Text",
        "fct-source": "src/Data-RDF-Namespace.html#uriOf",
        "fct-type": "function",
        "title": "uriOf"
      },
      "index": {
        "description": "Determine the URI of the given namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "uriOf",
        "normalized": "Namespace-\u003eText",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "Namespace-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Namespace.html#v:xsd",
      "description": {
        "fct-descr": "\u003cp\u003eThe XML Schema namespace.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Namespace",
        "fct-package": "rdf4h",
        "fct-signature": "Namespace",
        "fct-source": "src/Data-RDF-Namespace.html#xsd",
        "fct-type": "function",
        "title": "xsd"
      },
      "index": {
        "description": "The XML Schema namespace",
        "hierarchy": "Data RDF Namespace",
        "module": "Data.RDF.Namespace",
        "name": "xsd",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#",
      "description": {
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "Query",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalObjects",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether two triples have equal objects.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Triple -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#equalObjects",
        "fct-type": "function",
        "title": "equalObjects"
      },
      "index": {
        "description": "Determine whether two triples have equal objects",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "equalObjects",
        "normalized": "Triple-\u003eTriple-\u003eBool",
        "package": "rdf4h",
        "partial": "Objects",
        "signature": "Triple-\u003eTriple-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalPredicates",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether two triples have equal predicates.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Triple -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#equalPredicates",
        "fct-type": "function",
        "title": "equalPredicates"
      },
      "index": {
        "description": "Determine whether two triples have equal predicates",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "equalPredicates",
        "normalized": "Triple-\u003eTriple-\u003eBool",
        "package": "rdf4h",
        "partial": "Predicates",
        "signature": "Triple-\u003eTriple-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:equalSubjects",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether two triples have equal subjects.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Triple -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#equalSubjects",
        "fct-type": "function",
        "title": "equalSubjects"
      },
      "index": {
        "description": "Determine whether two triples have equal subjects",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "equalSubjects",
        "normalized": "Triple-\u003eTriple-\u003eBool",
        "package": "rdf4h",
        "partial": "Subjects",
        "signature": "Triple-\u003eTriple-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:expandTriples",
      "description": {
        "fct-descr": "\u003cp\u003eExpand the triples in a graph with the prefix map and base URL for that\n graph.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Triples",
        "fct-source": "src/Data-RDF-Query.html#expandTriples",
        "fct-type": "function",
        "title": "expandTriples"
      },
      "index": {
        "description": "Expand the triples in graph with the prefix map and base URL for that graph",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "expandTriples",
        "normalized": "a-\u003eTriples",
        "package": "rdf4h",
        "partial": "Triples",
        "signature": "rdf-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:fromEither",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a parse result into an RDF if it was successful\n and error and terminate if not.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Either ParseFailure rdf -\u003e rdf",
        "fct-source": "src/Data-RDF-Query.html#fromEither",
        "fct-type": "function",
        "title": "fromEither"
      },
      "index": {
        "description": "Convert parse result into an RDF if it was successful and error and terminate if not",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "fromEither",
        "normalized": "Either ParseFailure a-\u003ea",
        "package": "rdf4h",
        "partial": "Either",
        "signature": "Either ParseFailure rdf-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether the \u003ccode\u003e\u003ca\u003eRDF\u003c/a\u003e\u003c/code\u003e contains zero triples.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Determines whether the RDF contains zero triples",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "isEmpty",
        "normalized": "a-\u003eBool",
        "package": "rdf4h",
        "partial": "Empty",
        "signature": "rdf-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:isIsomorphic",
      "description": {
        "fct-descr": "\u003cp\u003eThis determines if two RDF representations are equal regardless of blank\n node names, triple order and prefixes.  In math terms, this is the simeq\n latex operator, or ~=\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf1 -\u003e rdf2 -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#isIsomorphic",
        "fct-type": "function",
        "title": "isIsomorphic"
      },
      "index": {
        "description": "This determines if two RDF representations are equal regardless of blank node names triple order and prefixes In math terms this is the simeq latex operator or",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "isIsomorphic",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "rdf4h",
        "partial": "Isomorphic",
        "signature": "rdf-\u003erdf-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:listObjectsOfPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eLists of all objects of triples with the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Predicate -\u003e [Object]",
        "fct-source": "src/Data-RDF-Query.html#listObjectsOfPredicate",
        "fct-type": "function",
        "title": "listObjectsOfPredicate"
      },
      "index": {
        "description": "Lists of all objects of triples with the given predicate",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "listObjectsOfPredicate",
        "normalized": "a-\u003ePredicate-\u003e[Object]",
        "package": "rdf4h",
        "partial": "Objects Of Predicate",
        "signature": "rdf-\u003ePredicate-\u003e[Object]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:listSubjectsWithPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eLists of all subjects of triples with the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Predicate -\u003e [Subject]",
        "fct-source": "src/Data-RDF-Query.html#listSubjectsWithPredicate",
        "fct-type": "function",
        "title": "listSubjectsWithPredicate"
      },
      "index": {
        "description": "Lists of all subjects of triples with the given predicate",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "listSubjectsWithPredicate",
        "normalized": "a-\u003ePredicate-\u003e[Subject]",
        "package": "rdf4h",
        "partial": "Subjects With Predicate",
        "signature": "rdf-\u003ePredicate-\u003e[Subject]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:objectOf",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the object node of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Node",
        "fct-source": "src/Data-RDF-Query.html#objectOf",
        "fct-type": "function",
        "title": "objectOf"
      },
      "index": {
        "description": "Answer the object node of the triple",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "objectOf",
        "normalized": "Triple-\u003eNode",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "Triple-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:predicateOf",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the predicate node of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Node",
        "fct-source": "src/Data-RDF-Query.html#predicateOf",
        "fct-type": "function",
        "title": "predicateOf"
      },
      "index": {
        "description": "Answer the predicate node of the triple",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "predicateOf",
        "normalized": "Triple-\u003eNode",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "Triple-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:rdfContainsNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer if rdf contains node.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Node -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#rdfContainsNode",
        "fct-type": "function",
        "title": "rdfContainsNode"
      },
      "index": {
        "description": "Answer if rdf contains node",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "rdfContainsNode",
        "normalized": "a-\u003eNode-\u003eBool",
        "package": "rdf4h",
        "partial": "Contains Node",
        "signature": "rdf-\u003eNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:removeDupes",
      "description": {
        "fct-descr": "\u003cp\u003eRemove duplicate triples, returning unique triples. This \n function may return the triples in a different order than \n given.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Triples",
        "fct-source": "src/Data-RDF-Query.html#removeDupes",
        "fct-type": "function",
        "title": "removeDupes"
      },
      "index": {
        "description": "Remove duplicate triples returning unique triples This function may return the triples in different order than given",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "removeDupes",
        "normalized": "Triples-\u003eTriples",
        "package": "rdf4h",
        "partial": "Dupes",
        "signature": "Triples-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:sortTriples",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the given list of triples in sorted order.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Triples",
        "fct-source": "src/Data-RDF-Query.html#sortTriples",
        "fct-type": "function",
        "title": "sortTriples"
      },
      "index": {
        "description": "Answer the given list of triples in sorted order",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "sortTriples",
        "normalized": "Triples-\u003eTriples",
        "package": "rdf4h",
        "partial": "Triples",
        "signature": "Triples-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:subjectOf",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer the subject node of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Triple -\u003e Node",
        "fct-source": "src/Data-RDF-Query.html#subjectOf",
        "fct-type": "function",
        "title": "subjectOf"
      },
      "index": {
        "description": "Answer the subject node of the triple",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "subjectOf",
        "normalized": "Triple-\u003eNode",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "Triple-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Query.html#v:tripleContainsNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer if triple contains node.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Query",
        "fct-package": "rdf4h",
        "fct-signature": "Node -\u003e Triple -\u003e Bool",
        "fct-source": "src/Data-RDF-Query.html#tripleContainsNode",
        "fct-type": "function",
        "title": "tripleContainsNode"
      },
      "index": {
        "description": "Answer if triple contains node",
        "hierarchy": "Data RDF Query",
        "module": "Data.RDF.Query",
        "name": "tripleContainsNode",
        "normalized": "Node-\u003eTriple-\u003eBool",
        "package": "rdf4h",
        "partial": "Contains Node",
        "signature": "Node-\u003eTriple-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e contains a list-backed graph implementation suitable\n for smallish graphs or for temporary graphs that will not be queried.\n It maintains the triples in the order that they are given in, and is\n especially useful for holding N-Triples, where it is often desirable\n to preserve the order of the triples when they were originally parsed.\n Duplicate triples are not filtered. If you might have duplicate triples,\n use \u003ccode\u003eMGraph\u003c/code\u003e instead, which is also more efficient. However, the query\n functions of this graph (select, query) remove duplicates from their\n result triples (but triplesOf does not) since it is usually cheap\n to do so.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF-TriplesGraph.html",
        "fct-type": "module",
        "title": "TriplesGraph"
      },
      "index": {
        "description": "TriplesGraph contains list-backed graph implementation suitable for smallish graphs or for temporary graphs that will not be queried It maintains the triples in the order that they are given in and is especially useful for holding N-Triples where it is often desirable to preserve the order of the triples when they were originally parsed Duplicate triples are not filtered If you might have duplicate triples use MGraph instead which is also more efficient However the query functions of this graph select query remove duplicates from their result triples but triplesOf does not since it is usually cheap to do so",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "TriplesGraph",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Triples Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#t:TriplesGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA simple implementation of the \u003ccode\u003e\u003ca\u003eRDF\u003c/a\u003e\u003c/code\u003e type class that represents\n the graph internally as a list of triples.\n\u003c/p\u003e\u003cp\u003eNote that this type of RDF is fine for interactive\n experimentation and querying of smallish (\u003c10,000 triples) graphs,\n but there are better options for larger graphs or graphs that you\n will do many queries against (e.g., \u003ccode\u003eMGraph\u003c/code\u003e is faster for queries).\n\u003c/p\u003e\u003cp\u003eThe time complexity of the functions (where n == num_triples) are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e    : O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emkRdf\u003c/a\u003e\u003c/code\u003e  : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etriplesOf\u003c/a\u003e\u003c/code\u003e: O(1)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e   : O(n)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e    : O(n)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-TriplesGraph.html#TriplesGraph",
        "fct-type": "data",
        "title": "TriplesGraph"
      },
      "index": {
        "description": "simple implementation of the RDF type class that represents the graph internally as list of triples Note that this type of RDF is fine for interactive experimentation and querying of smallish triples graphs but there are better options for larger graphs or graphs that you will do many queries against e.g MGraph is faster for queries The time complexity of the functions where num triples are empty mkRdf triplesOf select query",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "TriplesGraph",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Triples Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf",
        "fct-source": "src/Data-RDF-Types.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Return an empty RDF",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "empty",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:mkRdf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#mkRdf",
        "fct-type": "function",
        "title": "mkRdf"
      },
      "index": {
        "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "mkRdf",
        "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "query",
        "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "select",
        "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-TriplesGraph.html#v:triplesOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.TriplesGraph",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#triplesOf",
        "fct-type": "function",
        "title": "triplesOf"
      },
      "index": {
        "description": "Return all triples in the RDF as list",
        "hierarchy": "Data RDF TriplesGraph",
        "module": "Data.RDF.TriplesGraph",
        "name": "triplesOf",
        "normalized": "a-\u003eTriples",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "rdf-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Types",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:BaseUrl",
      "description": {
        "fct-descr": "\u003cp\u003eThe base URL of an RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#BaseUrl",
        "fct-type": "newtype",
        "title": "BaseUrl"
      },
      "index": {
        "description": "The base URL of an RDF",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "BaseUrl",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Base Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:LValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual value of an RDF literal, represented as the \u003ccode\u003e\u003ca\u003eLValue\u003c/a\u003e\u003c/code\u003e\n parameter of an \u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#LValue",
        "fct-type": "data",
        "title": "LValue"
      },
      "index": {
        "description": "The actual value of an RDF literal represented as the LValue parameter of an LNode",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "LValue",
        "normalized": "",
        "package": "rdf4h",
        "partial": "LValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Namespace",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a namespace as either a prefix and uri, respectively,\n  or just a uri.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "data",
        "title": "Namespace"
      },
      "index": {
        "description": "Represents namespace as either prefix and uri respectively or just uri",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Namespace",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Namespace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF node, which may be either a URIRef node (\u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e), a blank\n node (\u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e), or a literal node (\u003ccode\u003e\u003ca\u003eLNode\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "An RDF node which may be either URIRef node UNode blank node BNode or literal node LNode",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Node",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:NodeSelector",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNodeSelector\u003c/a\u003e\u003c/code\u003e is either a function that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n  or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for a node, or Nothing, which indicates that all\n nodes would return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe selector is said to select, or match, the nodes for\n which it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen used in conjunction with the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e method of \u003ccode\u003eGraph\u003c/code\u003e, three\n node selectors are used to match a triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "type",
        "fct-source": "src/Data-RDF-Types.html#NodeSelector",
        "fct-type": "type",
        "title": "NodeSelector"
      },
      "index": {
        "description": "NodeSelector is either function that returns True or False for node or Nothing which indicates that all nodes would return True The selector is said to select or match the nodes for which it returns True When used in conjunction with the select method of Graph three node selectors are used to match triple",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "NodeSelector",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Node Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "type",
        "fct-source": "src/Data-RDF-Types.html#Object",
        "fct-type": "type",
        "title": "Object"
      },
      "index": {
        "description": "An alias for Node defined for convenience and readability purposes",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Object",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:ParseFailure",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a failure in parsing an N-Triples document, including\n an error message with information about the cause for the failure.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#ParseFailure",
        "fct-type": "newtype",
        "title": "ParseFailure"
      },
      "index": {
        "description": "Represents failure in parsing an N-Triples document including an error message with information about the cause for the failure",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "ParseFailure",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Parse Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "type",
        "fct-source": "src/Data-RDF-Types.html#Predicate",
        "fct-type": "type",
        "title": "Predicate"
      },
      "index": {
        "description": "An alias for Node defined for convenience and readability purposes",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Predicate",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:PrefixMapping",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping of a prefix to the URI for that prefix.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#PrefixMapping",
        "fct-type": "newtype",
        "title": "PrefixMapping"
      },
      "index": {
        "description": "mapping of prefix to the URI for that prefix",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PrefixMapping",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:PrefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for a map from prefix to namespace URI.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "newtype",
        "fct-source": "src/Data-RDF-Types.html#PrefixMappings",
        "fct-type": "newtype",
        "title": "PrefixMappings"
      },
      "index": {
        "description": "An alias for map from prefix to namespace URI",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PrefixMappings",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RDF",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF value is a set of (unique) RDF triples, together with the\n operations defined upon them.\n\u003c/p\u003e\u003cp\u003eFor information about the efficiency of the functions, see the\n documentation for the particular RDF instance.\n\u003c/p\u003e\u003cp\u003eFor more information about the concept of an RDF graph, see\n the following: \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-rdf-graph\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RDF",
        "fct-type": "class",
        "title": "RDF"
      },
      "index": {
        "description": "An RDF value is set of unique RDF triples together with the operations defined upon them For information about the efficiency of the functions see the documentation for the particular RDF instance For more information about the concept of an RDF graph see the following http www.w3.org TR rdf-concepts section-rdf-graph",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "RDF",
        "normalized": "",
        "package": "rdf4h",
        "partial": "RDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RdfParser",
      "description": {
        "fct-descr": "\u003cp\u003eAn RdfParser is a parser that knows how to parse 1 format of RDF and\n can parse an RDF document of that type from a string, a file, or a URL.\n Required configuration options will vary from instance to instance.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RdfParser",
        "fct-type": "class",
        "title": "RdfParser"
      },
      "index": {
        "description": "An RdfParser is parser that knows how to parse format of RDF and can parse an RDF document of that type from string file or URL Required configuration options will vary from instance to instance",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "RdfParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Rdf Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:RdfSerializer",
      "description": {
        "fct-descr": "\u003cp\u003eAn RdfSerializer is a serializer of RDF to some particular output format, such as\n NTriples or Turtle.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RdfSerializer",
        "fct-type": "class",
        "title": "RdfSerializer"
      },
      "index": {
        "description": "An RdfSerializer is serializer of RDF to some particular output format such as NTriples or Turtle",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "RdfSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Rdf Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Subject",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, defined for convenience and readability purposes.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "type",
        "fct-source": "src/Data-RDF-Types.html#Subject",
        "fct-type": "type",
        "title": "Subject"
      },
      "index": {
        "description": "An alias for Node defined for convenience and readability purposes",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Subject",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Triple",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF triple is a statement consisting of a subject, predicate,\n and object, respectively.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-triples\u003c/a\u003e for\n more information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#Triple",
        "fct-type": "data",
        "title": "Triple"
      },
      "index": {
        "description": "An RDF triple is statement consisting of subject predicate and object respectively See http www.w3.org TR rdf-concepts section-triples for more information",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Triple",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Triple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:Triples",
      "description": {
        "fct-descr": "\u003cp\u003eA list of triples. This is defined for convenience and readability.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "type",
        "fct-source": "src/Data-RDF-Types.html#Triples",
        "fct-type": "type",
        "title": "Triples"
      },
      "index": {
        "description": "list of triples This is defined for convenience and readability",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Triples",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Triples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#t:View",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for ADTs that expose views to clients.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#View",
        "fct-type": "class",
        "title": "View"
      },
      "index": {
        "description": "type class for ADTs that expose views to clients",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "View",
        "normalized": "",
        "package": "rdf4h",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BNode",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF blank node. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-blank-nodes\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "BNode !Text",
        "fct-source": "src/Data-RDF-Types.html#Node",
        "fct-type": "function",
        "title": "BNode"
      },
      "index": {
        "description": "An RDF blank node See http www.w3.org TR rdf-concepts section-blank-nodes for more information",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "BNode",
        "normalized": "",
        "package": "rdf4h",
        "partial": "BNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BNodeGen",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF blank node with an auto-generated identifier, as used in\n Turtle.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "BNodeGen !Int",
        "fct-source": "src/Data-RDF-Types.html#Node",
        "fct-type": "function",
        "title": "BNodeGen"
      },
      "index": {
        "description": "An RDF blank node with an auto-generated identifier as used in Turtle",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "BNodeGen",
        "normalized": "",
        "package": "rdf4h",
        "partial": "BNode Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:BaseUrl",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "BaseUrl Text",
        "fct-source": "src/Data-RDF-Types.html#BaseUrl",
        "fct-type": "function",
        "title": "BaseUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "BaseUrl",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Base Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:LNode",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF literal. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-Graph-Literal\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "LNode !LValue",
        "fct-source": "src/Data-RDF-Types.html#Node",
        "fct-type": "function",
        "title": "LNode"
      },
      "index": {
        "description": "An RDF literal See http www.w3.org TR rdf-concepts section-Graph-Literal for more information",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "LNode",
        "normalized": "",
        "package": "rdf4h",
        "partial": "LNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:ParseFailure",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "ParseFailure String",
        "fct-source": "src/Data-RDF-Types.html#ParseFailure",
        "fct-type": "function",
        "title": "ParseFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "ParseFailure",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Parse Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainL",
      "description": {
        "fct-descr": "\u003cp\u003eA plain (untyped) literal value in an unspecified language.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PlainL !Text",
        "fct-source": "src/Data-RDF-Types.html#LValue",
        "fct-type": "function",
        "title": "PlainL"
      },
      "index": {
        "description": "plain untyped literal value in an unspecified language",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PlainL",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainLL",
      "description": {
        "fct-descr": "\u003cp\u003eA plain (untyped) literal value with a language specifier.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PlainLL !Text !Text",
        "fct-source": "src/Data-RDF-Types.html#LValue",
        "fct-type": "function",
        "title": "PlainLL"
      },
      "index": {
        "description": "plain untyped literal value with language specifier",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PlainLL",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Plain LL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PlainNS",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PlainNS Text",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "function",
        "title": "PlainNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PlainNS",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Plain NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixMapping",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMapping (Text, Text)",
        "fct-source": "src/Data-RDF-Types.html#PrefixMapping",
        "fct-type": "function",
        "title": "PrefixMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PrefixMapping",
        "normalized": "PrefixMapping(Text,Text)",
        "package": "rdf4h",
        "partial": "Prefix Mapping",
        "signature": "PrefixMapping(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixMappings",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixMappings (Map Text Text)",
        "fct-source": "src/Data-RDF-Types.html#PrefixMappings",
        "fct-type": "function",
        "title": "PrefixMappings"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PrefixMappings",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:PrefixedNS",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "PrefixedNS Text Text",
        "fct-source": "src/Data-RDF-Types.html#Namespace",
        "fct-type": "function",
        "title": "PrefixedNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "PrefixedNS",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Prefixed NS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:Triple",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Triple !Node !Node !Node",
        "fct-source": "src/Data-RDF-Types.html#Triple",
        "fct-type": "function",
        "title": "Triple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "Triple",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Triple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:TypedL",
      "description": {
        "fct-descr": "\u003cp\u003eA typed literal value consisting of the literal value and\n the URI of the datatype of the value, respectively.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "TypedL !Text !Text",
        "fct-source": "src/Data-RDF-Types.html#LValue",
        "fct-type": "function",
        "title": "TypedL"
      },
      "index": {
        "description": "typed literal value consisting of the literal value and the URI of the datatype of the value respectively",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "TypedL",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Typed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:UNode",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF URI reference. See\n \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-Graph-URIref\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "UNode !Text",
        "fct-source": "src/Data-RDF-Types.html#Node",
        "fct-type": "function",
        "title": "UNode"
      },
      "index": {
        "description": "An RDF URI reference See http www.w3.org TR rdf-concepts section-Graph-URIref for more information",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "UNode",
        "normalized": "",
        "package": "rdf4h",
        "partial": "UNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:addPrefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an RDF with the specified prefix mappings merged with\n the existing mappings. If the Bool arg is True, then a new mapping\n for an existing prefix will replace the old mapping; otherwise,\n the new mapping is ignored.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e PrefixMappings -\u003e Bool -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#addPrefixMappings",
        "fct-type": "method",
        "title": "addPrefixMappings"
      },
      "index": {
        "description": "Return an RDF with the specified prefix mappings merged with the existing mappings If the Bool arg is True then new mapping for an existing prefix will replace the old mapping otherwise the new mapping is ignored",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "addPrefixMappings",
        "normalized": "a-\u003ePrefixMappings-\u003eBool-\u003ea",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": "rdf-\u003ePrefixMappings-\u003eBool-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:baseUrl",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the base URL of this RDF, if any.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe BaseUrl",
        "fct-source": "src/Data-RDF-Types.html#baseUrl",
        "fct-type": "method",
        "title": "baseUrl"
      },
      "index": {
        "description": "Return the base URL of this RDF if any",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "baseUrl",
        "normalized": "a-\u003eMaybe BaseUrl",
        "package": "rdf4h",
        "partial": "Url",
        "signature": "rdf-\u003eMaybe BaseUrl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:bnode",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a blank node using the given string identifier.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Node",
        "fct-source": "src/Data-RDF-Types.html#bnode",
        "fct-type": "function",
        "title": "bnode"
      },
      "index": {
        "description": "Return blank node using the given string identifier",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "bnode",
        "normalized": "Text-\u003eNode",
        "package": "rdf4h",
        "partial": "",
        "signature": "Text-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf",
        "fct-source": "src/Data-RDF-Types.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "Return an empty RDF",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "empty",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteH",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to the file handle whatever header information is required based on\n the output format. For example, if serializing to Turtle, this method would\n write the necessary @prefix declarations and possibly a @baseUrl declaration,\n whereas for NTriples, there is no header section at all, so this would be a no-op.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteH",
        "fct-type": "method",
        "title": "hWriteH"
      },
      "index": {
        "description": "Write to the file handle whatever header information is required based on the output format For example if serializing to Turtle this method would write the necessary prefix declarations and possibly baseUrl declaration whereas for NTriples there is no header section at all so this would be no-op",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "hWriteH",
        "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteN",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single node to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Node -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteN",
        "fct-type": "method",
        "title": "hWriteN"
      },
      "index": {
        "description": "Write single node to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "hWriteN",
        "normalized": "a-\u003eHandle-\u003eNode-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003eNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteRdf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the RDF to a file handle using whatever configuration is specified by\n the first argument.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteRdf",
        "fct-type": "method",
        "title": "hWriteRdf"
      },
      "index": {
        "description": "Write the RDF to file handle using whatever configuration is specified by the first argument",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "hWriteRdf",
        "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write Rdf",
        "signature": "s-\u003eHandle-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteT",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single triple to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Triple -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteT",
        "fct-type": "method",
        "title": "hWriteT"
      },
      "index": {
        "description": "Write single triple to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "hWriteT",
        "normalized": "a-\u003eHandle-\u003eTriple-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003eTriple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:hWriteTs",
      "description": {
        "fct-descr": "\u003cp\u003eWrite some triples to a file handle using whatever configuration is specified\n by the first argument. \n\u003c/p\u003e\u003cp\u003eWARNING: if the serialization format has header-level information \n that should be output (e.g., @prefix declarations for Turtle), then you should\n use \u003ccode\u003ehWriteG\u003c/code\u003e instead of this method unless you're sure this is safe to use, since\n otherwise the resultant document will be missing the header information and \n will not be valid.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Triples -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteTs",
        "fct-type": "method",
        "title": "hWriteTs"
      },
      "index": {
        "description": "Write some triples to file handle using whatever configuration is specified by the first argument WARNING if the serialization format has header-level information that should be output e.g prefix declarations for Turtle then you should use hWriteG instead of this method unless you re sure this is safe to use since otherwise the resultant document will be missing the header information and will not be valid",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "hWriteTs",
        "normalized": "a-\u003eHandle-\u003eTriples-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write Ts",
        "signature": "s-\u003eHandle-\u003eTriples-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isBNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer if given node is a blank node.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Data-RDF-Types.html#isBNode",
        "fct-type": "function",
        "title": "isBNode"
      },
      "index": {
        "description": "Answer if given node is blank node",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "isBNode",
        "normalized": "Node-\u003eBool",
        "package": "rdf4h",
        "partial": "BNode",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isLNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer if given node is a literal node.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Data-RDF-Types.html#isLNode",
        "fct-type": "function",
        "title": "isLNode"
      },
      "index": {
        "description": "Answer if given node is literal node",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "isLNode",
        "normalized": "Node-\u003eBool",
        "package": "rdf4h",
        "partial": "LNode",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:isUNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnswer if given node is a URI Ref node.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Data-RDF-Types.html#isUNode",
        "fct-type": "function",
        "title": "isUNode"
      },
      "index": {
        "description": "Answer if given node is URI Ref node",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "isUNode",
        "normalized": "Node-\u003eBool",
        "package": "rdf4h",
        "partial": "UNode",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:lnode",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a literal node using the given LValue.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "LValue -\u003e Node",
        "fct-source": "src/Data-RDF-Types.html#lnode",
        "fct-type": "function",
        "title": "lnode"
      },
      "index": {
        "description": "Return literal node using the given LValue",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "lnode",
        "normalized": "LValue-\u003eNode",
        "package": "rdf4h",
        "partial": "",
        "signature": "LValue-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:mkRdf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#mkRdf",
        "fct-type": "method",
        "title": "mkRdf"
      },
      "index": {
        "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "mkRdf",
        "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the local file with the given path, yielding a failure with error\n message or the resultant RDF in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
        "fct-source": "src/Data-RDF-Types.html#parseFile",
        "fct-type": "method",
        "title": "parseFile"
      },
      "index": {
        "description": "Parse RDF from the local file with the given path yielding failure with error message or the resultant RDF in the IO monad",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "parseFile",
        "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
        "package": "rdf4h",
        "partial": "File",
        "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseString",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the given text, yielding a failure with error message or\n the resultant RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e Text -\u003e Either ParseFailure rdf",
        "fct-source": "src/Data-RDF-Types.html#parseString",
        "fct-type": "method",
        "title": "parseString"
      },
      "index": {
        "description": "Parse RDF from the given text yielding failure with error message or the resultant RDF",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "parseString",
        "normalized": "a-\u003eText-\u003eEither ParseFailure b",
        "package": "rdf4h",
        "partial": "String",
        "signature": "p-\u003eText-\u003eEither ParseFailure rdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:parseURL",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the remote file with the given HTTP URL (https is not supported),\n yielding a failure with error message or the resultant graph in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
        "fct-source": "src/Data-RDF-Types.html#parseURL",
        "fct-type": "method",
        "title": "parseURL"
      },
      "index": {
        "description": "Parse RDF from the remote file with the given HTTP URL https is not supported yielding failure with error message or the resultant graph in the IO monad",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "parseURL",
        "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
        "package": "rdf4h",
        "partial": "URL",
        "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:plainL",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a PlainL LValue for the given string value.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e LValue",
        "fct-source": "src/Data-RDF-Types.html#plainL",
        "fct-type": "function",
        "title": "plainL"
      },
      "index": {
        "description": "Return PlainL LValue for the given string value",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "plainL",
        "normalized": "Text-\u003eLValue",
        "package": "rdf4h",
        "partial": "",
        "signature": "Text-\u003eLValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:plainLL",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a PlainLL LValue for the given string value and language,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Text -\u003e LValue",
        "fct-source": "src/Data-RDF-Types.html#plainLL",
        "fct-type": "function",
        "title": "plainLL"
      },
      "index": {
        "description": "Return PlainLL LValue for the given string value and language respectively",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "plainLL",
        "normalized": "Text-\u003eText-\u003eLValue",
        "package": "rdf4h",
        "partial": "LL",
        "signature": "Text-\u003eText-\u003eLValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:prefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the prefix mappings defined for this RDF, if any.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e PrefixMappings",
        "fct-source": "src/Data-RDF-Types.html#prefixMappings",
        "fct-type": "method",
        "title": "prefixMappings"
      },
      "index": {
        "description": "Return the prefix mappings defined for this RDF if any",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "prefixMappings",
        "normalized": "a-\u003ePrefixMappings",
        "package": "rdf4h",
        "partial": "Mappings",
        "signature": "rdf-\u003ePrefixMappings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#query",
        "fct-type": "method",
        "title": "query"
      },
      "index": {
        "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "query",
        "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "select",
        "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:triple",
      "description": {
        "fct-descr": "\u003cp\u003eA smart constructor function for \u003ccode\u003e\u003ca\u003eTriple\u003c/a\u003e\u003c/code\u003e that verifies the node arguments\n are of the correct type and creates the new \u003ccode\u003e\u003ca\u003eTriple\u003c/a\u003e\u003c/code\u003e if so or calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n \u003cem\u003esubj\u003c/em\u003e must be a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBNode\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003epred\u003c/em\u003e must be a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Subject -\u003e Predicate -\u003e Object -\u003e Triple",
        "fct-source": "src/Data-RDF-Types.html#triple",
        "fct-type": "function",
        "title": "triple"
      },
      "index": {
        "description": "smart constructor function for Triple that verifies the node arguments are of the correct type and creates the new Triple if so or calls error subj must be UNode or BNode and pred must be UNode",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "triple",
        "normalized": "Subject-\u003ePredicate-\u003eObject-\u003eTriple",
        "package": "rdf4h",
        "partial": "",
        "signature": "Subject-\u003ePredicate-\u003eObject-\u003eTriple"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:triplesOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#triplesOf",
        "fct-type": "method",
        "title": "triplesOf"
      },
      "index": {
        "description": "Return all triples in the RDF as list",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "triplesOf",
        "normalized": "a-\u003eTriples",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "rdf-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:typedL",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a TypedL LValue for the given string value and datatype URI,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Text -\u003e LValue",
        "fct-source": "src/Data-RDF-Types.html#typedL",
        "fct-type": "function",
        "title": "typedL"
      },
      "index": {
        "description": "Return TypedL LValue for the given string value and datatype URI respectively",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "typedL",
        "normalized": "Text-\u003eText-\u003eLValue",
        "package": "rdf4h",
        "partial": "",
        "signature": "Text-\u003eText-\u003eLValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:unode",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a URIRef node for the given bytetring URI.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "Text -\u003e Node",
        "fct-source": "src/Data-RDF-Types.html#unode",
        "fct-type": "function",
        "title": "unode"
      },
      "index": {
        "description": "Return URIRef node for the given bytetring URI",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "unode",
        "normalized": "Text-\u003eNode",
        "package": "rdf4h",
        "partial": "",
        "signature": "Text-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:view",
      "description": {
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-RDF-Types.html#view",
        "fct-type": "method",
        "title": "view"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "view",
        "normalized": "a-\u003eb",
        "package": "rdf4h",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeH",
      "description": {
        "fct-descr": "\u003cp\u003eWrite header information to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeH",
        "fct-type": "method",
        "title": "writeH"
      },
      "index": {
        "description": "Write header information to stdout equivalent to hWriteRdf stdout",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "writeH",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeN",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single node to sdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteN\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Node -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeN",
        "fct-type": "method",
        "title": "writeN"
      },
      "index": {
        "description": "Write single node to sdout equivalent to hWriteN stdout",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "writeN",
        "normalized": "a-\u003eNode-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003eNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeRdf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the RDF to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeRdf",
        "fct-type": "method",
        "title": "writeRdf"
      },
      "index": {
        "description": "Write the RDF to stdout equivalent to hWriteRdf stdout",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "writeRdf",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "s-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeT",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single triple to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteT\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Triple -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeT",
        "fct-type": "method",
        "title": "writeT"
      },
      "index": {
        "description": "Write single triple to stdout equivalent to hWriteT stdout",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "writeT",
        "normalized": "a-\u003eTriple-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003eTriple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF-Types.html#v:writeTs",
      "description": {
        "fct-descr": "\u003cp\u003eWrite some triples to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF.Types",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Triples -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeTs",
        "fct-type": "method",
        "title": "writeTs"
      },
      "index": {
        "description": "Write some triples to stdout equivalent to hWriteTs stdout",
        "hierarchy": "Data RDF Types",
        "module": "Data.RDF.Types",
        "name": "writeTs",
        "normalized": "a-\u003eTriples-\u003eIO()",
        "package": "rdf4h",
        "partial": "Ts",
        "signature": "s-\u003eTriples-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Core module exports all serializers and parsers,\n  types, and query functions of the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Data-RDF.html",
        "fct-type": "module",
        "title": "RDF"
      },
      "index": {
        "description": "The Core module exports all serializers and parsers types and query functions of the library",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "RDF",
        "normalized": "",
        "package": "rdf4h",
        "partial": "RDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RDF",
      "description": {
        "fct-descr": "\u003cp\u003eAn RDF value is a set of (unique) RDF triples, together with the\n operations defined upon them.\n\u003c/p\u003e\u003cp\u003eFor information about the efficiency of the functions, see the\n documentation for the particular RDF instance.\n\u003c/p\u003e\u003cp\u003eFor more information about the concept of an RDF graph, see\n the following: \u003ca\u003ehttp://www.w3.org/TR/rdf-concepts/#section-rdf-graph\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RDF",
        "fct-type": "class",
        "title": "RDF"
      },
      "index": {
        "description": "An RDF value is set of unique RDF triples together with the operations defined upon them For information about the efficiency of the functions see the documentation for the particular RDF instance For more information about the concept of an RDF graph see the following http www.w3.org TR rdf-concepts section-rdf-graph",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "RDF",
        "normalized": "",
        "package": "rdf4h",
        "partial": "RDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RdfParser",
      "description": {
        "fct-descr": "\u003cp\u003eAn RdfParser is a parser that knows how to parse 1 format of RDF and\n can parse an RDF document of that type from a string, a file, or a URL.\n Required configuration options will vary from instance to instance.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RdfParser",
        "fct-type": "class",
        "title": "RdfParser"
      },
      "index": {
        "description": "An RdfParser is parser that knows how to parse format of RDF and can parse an RDF document of that type from string file or URL Required configuration options will vary from instance to instance",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "RdfParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Rdf Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#t:RdfSerializer",
      "description": {
        "fct-descr": "\u003cp\u003eAn RdfSerializer is a serializer of RDF to some particular output format, such as\n NTriples or Turtle.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "class",
        "fct-source": "src/Data-RDF-Types.html#RdfSerializer",
        "fct-type": "class",
        "title": "RdfSerializer"
      },
      "index": {
        "description": "An RdfSerializer is serializer of RDF to some particular output format such as NTriples or Turtle",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "RdfSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Rdf Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:addPrefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an RDF with the specified prefix mappings merged with\n the existing mappings. If the Bool arg is True, then a new mapping\n for an existing prefix will replace the old mapping; otherwise,\n the new mapping is ignored.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e PrefixMappings -\u003e Bool -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#addPrefixMappings",
        "fct-type": "method",
        "title": "addPrefixMappings"
      },
      "index": {
        "description": "Return an RDF with the specified prefix mappings merged with the existing mappings If the Bool arg is True then new mapping for an existing prefix will replace the old mapping otherwise the new mapping is ignored",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "addPrefixMappings",
        "normalized": "a-\u003ePrefixMappings-\u003eBool-\u003ea",
        "package": "rdf4h",
        "partial": "Prefix Mappings",
        "signature": "rdf-\u003ePrefixMappings-\u003eBool-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:baseUrl",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the base URL of this RDF, if any.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe BaseUrl",
        "fct-source": "src/Data-RDF-Types.html#baseUrl",
        "fct-type": "method",
        "title": "baseUrl"
      },
      "index": {
        "description": "Return the base URL of this RDF if any",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "baseUrl",
        "normalized": "a-\u003eMaybe BaseUrl",
        "package": "rdf4h",
        "partial": "Url",
        "signature": "rdf-\u003eMaybe BaseUrl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an empty RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf",
        "fct-source": "src/Data-RDF-Types.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "Return an empty RDF",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "empty",
        "normalized": "",
        "package": "rdf4h",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteH",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to the file handle whatever header information is required based on\n the output format. For example, if serializing to Turtle, this method would\n write the necessary @prefix declarations and possibly a @baseUrl declaration,\n whereas for NTriples, there is no header section at all, so this would be a no-op.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteH",
        "fct-type": "method",
        "title": "hWriteH"
      },
      "index": {
        "description": "Write to the file handle whatever header information is required based on the output format For example if serializing to Turtle this method would write the necessary prefix declarations and possibly baseUrl declaration whereas for NTriples there is no header section at all so this would be no-op",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "hWriteH",
        "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteN",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single node to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Node -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteN",
        "fct-type": "method",
        "title": "hWriteN"
      },
      "index": {
        "description": "Write single node to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "hWriteN",
        "normalized": "a-\u003eHandle-\u003eNode-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003eNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteRdf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the RDF to a file handle using whatever configuration is specified by\n the first argument.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteRdf",
        "fct-type": "method",
        "title": "hWriteRdf"
      },
      "index": {
        "description": "Write the RDF to file handle using whatever configuration is specified by the first argument",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "hWriteRdf",
        "normalized": "a-\u003eHandle-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write Rdf",
        "signature": "s-\u003eHandle-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteT",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single triple to the file handle using whatever configuration is \n specified by the first argument. The same WARNING applies as to \u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Triple -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteT",
        "fct-type": "method",
        "title": "hWriteT"
      },
      "index": {
        "description": "Write single triple to the file handle using whatever configuration is specified by the first argument The same WARNING applies as to hWriteTs",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "hWriteT",
        "normalized": "a-\u003eHandle-\u003eTriple-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write",
        "signature": "s-\u003eHandle-\u003eTriple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:hWriteTs",
      "description": {
        "fct-descr": "\u003cp\u003eWrite some triples to a file handle using whatever configuration is specified\n by the first argument. \n\u003c/p\u003e\u003cp\u003eWARNING: if the serialization format has header-level information \n that should be output (e.g., @prefix declarations for Turtle), then you should\n use \u003ccode\u003ehWriteG\u003c/code\u003e instead of this method unless you're sure this is safe to use, since\n otherwise the resultant document will be missing the header information and \n will not be valid.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Handle -\u003e Triples -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#hWriteTs",
        "fct-type": "method",
        "title": "hWriteTs"
      },
      "index": {
        "description": "Write some triples to file handle using whatever configuration is specified by the first argument WARNING if the serialization format has header-level information that should be output e.g prefix declarations for Turtle then you should use hWriteG instead of this method unless you re sure this is safe to use since otherwise the resultant document will be missing the header information and will not be valid",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "hWriteTs",
        "normalized": "a-\u003eHandle-\u003eTriples-\u003eIO()",
        "package": "rdf4h",
        "partial": "Write Ts",
        "signature": "s-\u003eHandle-\u003eTriples-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:mkRdf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a RDF containing all the given triples. Handling of duplicates\n in the input depend on the particular RDF implementation.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "Triples -\u003e Maybe BaseUrl -\u003e PrefixMappings -\u003e rdf",
        "fct-source": "src/Data-RDF-Types.html#mkRdf",
        "fct-type": "method",
        "title": "mkRdf"
      },
      "index": {
        "description": "Return RDF containing all the given triples Handling of duplicates in the input depend on the particular RDF implementation",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "mkRdf",
        "normalized": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003ea",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "Triples-\u003eMaybe BaseUrl-\u003ePrefixMappings-\u003erdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the local file with the given path, yielding a failure with error\n message or the resultant RDF in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
        "fct-source": "src/Data-RDF-Types.html#parseFile",
        "fct-type": "method",
        "title": "parseFile"
      },
      "index": {
        "description": "Parse RDF from the local file with the given path yielding failure with error message or the resultant RDF in the IO monad",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "parseFile",
        "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
        "package": "rdf4h",
        "partial": "File",
        "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseString",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the given text, yielding a failure with error message or\n the resultant RDF.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e Text -\u003e Either ParseFailure rdf",
        "fct-source": "src/Data-RDF-Types.html#parseString",
        "fct-type": "method",
        "title": "parseString"
      },
      "index": {
        "description": "Parse RDF from the given text yielding failure with error message or the resultant RDF",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "parseString",
        "normalized": "a-\u003eText-\u003eEither ParseFailure b",
        "package": "rdf4h",
        "partial": "String",
        "signature": "p-\u003eText-\u003eEither ParseFailure rdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:parseURL",
      "description": {
        "fct-descr": "\u003cp\u003eParse RDF from the remote file with the given HTTP URL (https is not supported),\n yielding a failure with error message or the resultant graph in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "p -\u003e String -\u003e IO (Either ParseFailure rdf)",
        "fct-source": "src/Data-RDF-Types.html#parseURL",
        "fct-type": "method",
        "title": "parseURL"
      },
      "index": {
        "description": "Parse RDF from the remote file with the given HTTP URL https is not supported yielding failure with error message or the resultant graph in the IO monad",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "parseURL",
        "normalized": "a-\u003eString-\u003eIO(Either ParseFailure b)",
        "package": "rdf4h",
        "partial": "URL",
        "signature": "p-\u003eString-\u003eIO(Either ParseFailure rdf)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:prefixMappings",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the prefix mappings defined for this RDF, if any.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e PrefixMappings",
        "fct-source": "src/Data-RDF-Types.html#prefixMappings",
        "fct-type": "method",
        "title": "prefixMappings"
      },
      "index": {
        "description": "Return the prefix mappings defined for this RDF if any",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "prefixMappings",
        "normalized": "a-\u003ePrefixMappings",
        "package": "rdf4h",
        "partial": "Mappings",
        "signature": "rdf-\u003ePrefixMappings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the triples in the RDF that match the given pattern, where\n the pattern (3 Maybe Node parameters) is interpreted as a triple pattern.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMaybe Node\u003c/code\u003e params are interpreted as the subject, predicate, and\n object of a triple, respectively. \u003ccode\u003eJust n\u003c/code\u003e is true iff the triple has\n a node equal to \u003ccode\u003en\u003c/code\u003e in the appropriate location; \u003ccode\u003eNothing\u003c/code\u003e is always\n true, regardless of the node in the appropriate location.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e query rdf (Just n1) Nothing (Just n2) \u003c/code\u003e would return all\n and only the triples that have \u003ccode\u003en1\u003c/code\u003e as subject and \u003ccode\u003en2\u003c/code\u003e as object,\n regardless of the predicate of the triple.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Maybe Node -\u003e Maybe Node -\u003e Maybe Node -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#query",
        "fct-type": "method",
        "title": "query"
      },
      "index": {
        "description": "Return the triples in the RDF that match the given pattern where the pattern Maybe Node parameters is interpreted as triple pattern The Maybe Node params are interpreted as the subject predicate and object of triple respectively Just is true iff the triple has node equal to in the appropriate location Nothing is always true regardless of the node in the appropriate location For example query rdf Just n1 Nothing Just n2 would return all and only the triples that have n1 as subject and n2 as object regardless of the predicate of the triple",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "query",
        "normalized": "a-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eMaybe Node-\u003eMaybe Node-\u003eMaybe Node-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the triples in the RDF that match the given selectors.\n\u003c/p\u003e\u003cp\u003eThe three NodeSelector parameters are optional functions that match\n the respective subject, predicate, and object of a triple. The triples\n returned are those in the given graph for which the first selector\n returns true when called on the subject, the second selector returns\n true when called on the predicate, and the third selector returns true\n when called on the ojbect. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter is equivalent to a\n function that always returns true for the appropriate node; but\n implementations may be able to much more efficiently answer a select\n that involves a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e parameter rather than an \u003ccode\u003e(id True)\u003c/code\u003e parameter.\n\u003c/p\u003e\u003cp\u003eThe following call illustrates the use of select, and would result in\n the selection of all and only the triples that have a blank node\n as subject and a literal node as object:\n\u003c/p\u003e\u003cpre\u003e select gr (Just isBNode) Nothing (Just isLNode)\n\u003c/pre\u003e\u003cp\u003eNote: this function may be very slow; see the documentation for the\n particular RDF implementation for more information.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e NodeSelector -\u003e NodeSelector -\u003e NodeSelector -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Select the triples in the RDF that match the given selectors The three NodeSelector parameters are optional functions that match the respective subject predicate and object of triple The triples returned are those in the given graph for which the first selector returns true when called on the subject the second selector returns true when called on the predicate and the third selector returns true when called on the ojbect Nothing parameter is equivalent to function that always returns true for the appropriate node but implementations may be able to much more efficiently answer select that involves Nothing parameter rather than an id True parameter The following call illustrates the use of select and would result in the selection of all and only the triples that have blank node as subject and literal node as object select gr Just isBNode Nothing Just isLNode Note this function may be very slow see the documentation for the particular RDF implementation for more information",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "select",
        "normalized": "a-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples",
        "package": "rdf4h",
        "partial": "",
        "signature": "rdf-\u003eNodeSelector-\u003eNodeSelector-\u003eNodeSelector-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:triplesOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all triples in the RDF, as a list.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "rdf -\u003e Triples",
        "fct-source": "src/Data-RDF-Types.html#triplesOf",
        "fct-type": "method",
        "title": "triplesOf"
      },
      "index": {
        "description": "Return all triples in the RDF as list",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "triplesOf",
        "normalized": "a-\u003eTriples",
        "package": "rdf4h",
        "partial": "Of",
        "signature": "rdf-\u003eTriples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeH",
      "description": {
        "fct-descr": "\u003cp\u003eWrite header information to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeH",
        "fct-type": "method",
        "title": "writeH"
      },
      "index": {
        "description": "Write header information to stdout equivalent to hWriteRdf stdout",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "writeH",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeN",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single node to sdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteN\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Node -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeN",
        "fct-type": "method",
        "title": "writeN"
      },
      "index": {
        "description": "Write single node to sdout equivalent to hWriteN stdout",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "writeN",
        "normalized": "a-\u003eNode-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003eNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeRdf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the RDF to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteRdf\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e rdf -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeRdf",
        "fct-type": "method",
        "title": "writeRdf"
      },
      "index": {
        "description": "Write the RDF to stdout equivalent to hWriteRdf stdout",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "writeRdf",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "rdf4h",
        "partial": "Rdf",
        "signature": "s-\u003erdf-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeT",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single triple to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteT\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Triple -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeT",
        "fct-type": "method",
        "title": "writeT"
      },
      "index": {
        "description": "Write single triple to stdout equivalent to hWriteT stdout",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "writeT",
        "normalized": "a-\u003eTriple-\u003eIO()",
        "package": "rdf4h",
        "partial": "",
        "signature": "s-\u003eTriple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Data-RDF.html#v:writeTs",
      "description": {
        "fct-descr": "\u003cp\u003eWrite some triples to stdout; equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehWriteTs\u003c/a\u003e\u003c/code\u003e stdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RDF",
        "fct-package": "rdf4h",
        "fct-signature": "s -\u003e Triples -\u003e IO ()",
        "fct-source": "src/Data-RDF-Types.html#writeTs",
        "fct-type": "method",
        "title": "writeTs"
      },
      "index": {
        "description": "Write some triples to stdout equivalent to hWriteTs stdout",
        "hierarchy": "Data RDF",
        "module": "Data.RDF",
        "name": "writeTs",
        "normalized": "a-\u003eTriples-\u003eIO()",
        "package": "rdf4h",
        "partial": "Ts",
        "signature": "s-\u003eTriples-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser for RDF in N-Triples format \n \u003ca\u003ehttp://www.w3.org/TR/rdf-testcases/#ntriples\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RDF.RDF4H.NTriplesParser",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesParser.html",
        "fct-type": "module",
        "title": "NTriplesParser"
      },
      "index": {
        "description": "parser for RDF in N-Triples format http www.w3.org TR rdf-testcases ntriples",
        "hierarchy": "Text RDF RDF4H NTriplesParser",
        "module": "Text.RDF.RDF4H.NTriplesParser",
        "name": "NTriplesParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#t:NTriplesParser",
      "description": {
        "fct-descr": "\u003cp\u003eNTriplesParser is an \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for parsing RDF in the\n NTriples format. It requires no configuration options. To use this parser,\n pass an \u003ccode\u003e\u003ca\u003eNTriplesParser\u003c/a\u003e\u003c/code\u003e value as the first argument to any of the \n \u003ccode\u003e\u003ca\u003eparseString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eparseURL\u003c/a\u003e\u003c/code\u003e methods of the \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e type\n class.\n\u003c/p\u003e",
        "fct-module": "Text.RDF.RDF4H.NTriplesParser",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesParser.html#NTriplesParser",
        "fct-type": "data",
        "title": "NTriplesParser"
      },
      "index": {
        "description": "NTriplesParser is an RdfParser implementation for parsing RDF in the NTriples format It requires no configuration options To use this parser pass an NTriplesParser value as the first argument to any of the parseString parseFile or parseURL methods of the RdfParser type class",
        "hierarchy": "Text RDF RDF4H NTriplesParser",
        "module": "Text.RDF.RDF4H.NTriplesParser",
        "name": "NTriplesParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#t:ParseFailure",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a failure in parsing an N-Triples document, including\n an error message with information about the cause for the failure.\n\u003c/p\u003e",
        "fct-module": "Text.RDF.RDF4H.NTriplesParser",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Data-RDF-Types.html#ParseFailure",
        "fct-type": "data",
        "title": "ParseFailure"
      },
      "index": {
        "description": "Represents failure in parsing an N-Triples document including an error message with information about the cause for the failure",
        "hierarchy": "Text RDF RDF4H NTriplesParser",
        "module": "Text.RDF.RDF4H.NTriplesParser",
        "name": "ParseFailure",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Parse Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesParser.html#v:NTriplesParser",
      "description": {
        "fct-module": "Text.RDF.RDF4H.NTriplesParser",
        "fct-package": "rdf4h",
        "fct-signature": "NTriplesParser",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesParser.html#NTriplesParser",
        "fct-type": "function",
        "title": "NTriplesParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H NTriplesParser",
        "module": "Text.RDF.RDF4H.NTriplesParser",
        "name": "NTriplesParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA serializer for RDF as N-Triples\n \u003ca\u003ehttp://www.w3.org/TR/rdf-testcases/#ntriples\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RDF.RDF4H.NTriplesSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesSerializer.html",
        "fct-type": "module",
        "title": "NTriplesSerializer"
      },
      "index": {
        "description": "serializer for RDF as N-Triples http www.w3.org TR rdf-testcases ntriples",
        "hierarchy": "Text RDF RDF4H NTriplesSerializer",
        "module": "Text.RDF.RDF4H.NTriplesSerializer",
        "name": "NTriplesSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#t:NTriplesSerializer",
      "description": {
        "fct-module": "Text.RDF.RDF4H.NTriplesSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesSerializer.html#NTriplesSerializer",
        "fct-type": "data",
        "title": "NTriplesSerializer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H NTriplesSerializer",
        "module": "Text.RDF.RDF4H.NTriplesSerializer",
        "name": "NTriplesSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-NTriplesSerializer.html#v:NTriplesSerializer",
      "description": {
        "fct-module": "Text.RDF.RDF4H.NTriplesSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "NTriplesSerializer",
        "fct-source": "src/Text-RDF-RDF4H-NTriplesSerializer.html#NTriplesSerializer",
        "fct-type": "function",
        "title": "NTriplesSerializer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H NTriplesSerializer",
        "module": "Text.RDF.RDF4H.NTriplesSerializer",
        "name": "NTriplesSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "NTriples Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for the Turtle format \n \u003ca\u003ehttp://www.w3.org/TeamSubmission/turtle/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RDF.RDF4H.TurtleParser",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Text-RDF-RDF4H-TurtleParser.html",
        "fct-type": "module",
        "title": "TurtleParser"
      },
      "index": {
        "description": "An RdfParser implementation for the Turtle format http www.w3.org TeamSubmission turtle",
        "hierarchy": "Text RDF RDF4H TurtleParser",
        "module": "Text.RDF.RDF4H.TurtleParser",
        "name": "TurtleParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#t:TurtleParser",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e implementation for parsing RDF in the \n Turtle format. It takes optional arguments representing the base URL to use\n for resolving relative URLs in the document (may be overridden in the document\n itself using the @base directive), and the URL to use for the document itself\n for resolving references to \u003ca/\u003e in the document.\n To use this parser, pass a \u003ccode\u003e\u003ca\u003eTurtleParser\u003c/a\u003e\u003c/code\u003e value as the first argument to any of\n the \u003ccode\u003e\u003ca\u003eparseString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eparseURL\u003c/a\u003e\u003c/code\u003e methods of the \u003ccode\u003e\u003ca\u003eRdfParser\u003c/a\u003e\u003c/code\u003e type\n class.\n\u003c/p\u003e",
        "fct-module": "Text.RDF.RDF4H.TurtleParser",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Text-RDF-RDF4H-TurtleParser.html#TurtleParser",
        "fct-type": "data",
        "title": "TurtleParser"
      },
      "index": {
        "description": "An RdfParser implementation for parsing RDF in the Turtle format It takes optional arguments representing the base URL to use for resolving relative URLs in the document may be overridden in the document itself using the base directive and the URL to use for the document itself for resolving references to in the document To use this parser pass TurtleParser value as the first argument to any of the parseString parseFile or parseURL methods of the RdfParser type class",
        "hierarchy": "Text RDF RDF4H TurtleParser",
        "module": "Text.RDF.RDF4H.TurtleParser",
        "name": "TurtleParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleParser.html#v:TurtleParser",
      "description": {
        "fct-module": "Text.RDF.RDF4H.TurtleParser",
        "fct-package": "rdf4h",
        "fct-signature": "TurtleParser (Maybe BaseUrl) (Maybe Text)",
        "fct-source": "src/Text-RDF-RDF4H-TurtleParser.html#TurtleParser",
        "fct-type": "function",
        "title": "TurtleParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H TurtleParser",
        "module": "Text.RDF.RDF4H.TurtleParser",
        "name": "TurtleParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn RDF serializer for Turtle \n \u003ca\u003ehttp://www.w3.org/TeamSubmission/turtle/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RDF.RDF4H.TurtleSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Text-RDF-RDF4H-TurtleSerializer.html",
        "fct-type": "module",
        "title": "TurtleSerializer"
      },
      "index": {
        "description": "An RDF serializer for Turtle http www.w3.org TeamSubmission turtle",
        "hierarchy": "Text RDF RDF4H TurtleSerializer",
        "module": "Text.RDF.RDF4H.TurtleSerializer",
        "name": "TurtleSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#t:TurtleSerializer",
      "description": {
        "fct-module": "Text.RDF.RDF4H.TurtleSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Text-RDF-RDF4H-TurtleSerializer.html#TurtleSerializer",
        "fct-type": "data",
        "title": "TurtleSerializer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H TurtleSerializer",
        "module": "Text.RDF.RDF4H.TurtleSerializer",
        "name": "TurtleSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-TurtleSerializer.html#v:TurtleSerializer",
      "description": {
        "fct-module": "Text.RDF.RDF4H.TurtleSerializer",
        "fct-package": "rdf4h",
        "fct-signature": "TurtleSerializer (Maybe Text) PrefixMappings",
        "fct-source": "src/Text-RDF-RDF4H-TurtleSerializer.html#TurtleSerializer",
        "fct-type": "function",
        "title": "TurtleSerializer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H TurtleSerializer",
        "module": "Text.RDF.RDF4H.TurtleSerializer",
        "name": "TurtleSerializer",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Turtle Serializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn parser for the RDF/XML format \n \u003ca\u003ehttp://www.w3.org/TR/REC-rdf-syntax/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.RDF.RDF4H.XmlParser",
        "fct-package": "rdf4h",
        "fct-signature": "module",
        "fct-source": "src/Text-RDF-RDF4H-XmlParser.html",
        "fct-type": "module",
        "title": "XmlParser"
      },
      "index": {
        "description": "An parser for the RDF XML format http www.w3.org TR REC-rdf-syntax",
        "hierarchy": "Text RDF RDF4H XmlParser",
        "module": "Text.RDF.RDF4H.XmlParser",
        "name": "XmlParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Xml Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#t:XmlParser",
      "description": {
        "fct-module": "Text.RDF.RDF4H.XmlParser",
        "fct-package": "rdf4h",
        "fct-signature": "data",
        "fct-source": "src/Text-RDF-RDF4H-XmlParser.html#XmlParser",
        "fct-type": "data",
        "title": "XmlParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H XmlParser",
        "module": "Text.RDF.RDF4H.XmlParser",
        "name": "XmlParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Xml Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdf4h/docs/Text-RDF-RDF4H-XmlParser.html#v:XmlParser",
      "description": {
        "fct-module": "Text.RDF.RDF4H.XmlParser",
        "fct-package": "rdf4h",
        "fct-signature": "XmlParser (Maybe BaseUrl) (Maybe Text)",
        "fct-source": "src/Text-RDF-RDF4H-XmlParser.html#XmlParser",
        "fct-type": "function",
        "title": "XmlParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text RDF RDF4H XmlParser",
        "module": "Text.RDF.RDF4H.XmlParser",
        "name": "XmlParser",
        "normalized": "",
        "package": "rdf4h",
        "partial": "Xml Parser",
        "signature": ""
      }
    }
  }
]