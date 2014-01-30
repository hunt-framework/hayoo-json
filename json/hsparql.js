[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#",
      "description": {
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "module",
        "fct-source": "src/Database-HSparql-Connection.html",
        "fct-type": "module",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "hsparql",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#t:BindingValue",
      "description": {
        "fct-descr": "\u003cp\u003eLocal representations of incoming XML results.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-Connection.html#BindingValue",
        "fct-type": "data",
        "title": "BindingValue"
      },
      "index": {
        "description": "Local representations of incoming XML results",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "BindingValue",
        "normalized": "",
        "package": "hsparql",
        "partial": "Binding Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#t:EndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eURI of the SPARQL endpoint.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSparql-Connection.html#EndPoint",
        "fct-type": "type",
        "title": "EndPoint"
      },
      "index": {
        "description": "URI of the SPARQL endpoint",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "EndPoint",
        "normalized": "",
        "package": "hsparql",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:Bound",
      "description": {
        "fct-descr": "\u003cp\u003eRDF Node (UNode, BNode, LNode)\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "Bound Node",
        "fct-source": "src/Database-HSparql-Connection.html#BindingValue",
        "fct-type": "function",
        "title": "Bound"
      },
      "index": {
        "description": "RDF Node UNode BNode LNode",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "Bound",
        "normalized": "",
        "package": "hsparql",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:Unbound",
      "description": {
        "fct-descr": "\u003cp\u003eUnbound result value\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "Unbound",
        "fct-source": "src/Database-HSparql-Connection.html#BindingValue",
        "fct-type": "function",
        "title": "Unbound"
      },
      "index": {
        "description": "Unbound result value",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "Unbound",
        "normalized": "",
        "package": "hsparql",
        "partial": "Unbound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:askQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "EndPoint -\u003e Query AskQuery -\u003e IO Bool",
        "fct-source": "src/Database-HSparql-Connection.html#askQuery",
        "fct-type": "function",
        "title": "askQuery"
      },
      "index": {
        "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "askQuery",
        "normalized": "EndPoint-\u003eQuery AskQuery-\u003eIO Bool",
        "package": "hsparql",
        "partial": "Query",
        "signature": "EndPoint-\u003eQuery AskQuery-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:constructQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and construct \u003ccode\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e\u003c/code\u003e from given\n  \u003ccode\u003e\u003ca\u003eConstructQuery\u003c/a\u003e\u003c/code\u003e action. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "EndPoint -\u003e Query ConstructQuery -\u003e IO rdf",
        "fct-source": "src/Database-HSparql-Connection.html#constructQuery",
        "fct-type": "function",
        "title": "constructQuery"
      },
      "index": {
        "description": "Connect to remote EndPoint and construct TriplesGraph from given ConstructQuery action Provisional implementation",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "constructQuery",
        "normalized": "EndPoint-\u003eQuery ConstructQuery-\u003eIO a",
        "package": "hsparql",
        "partial": "Query",
        "signature": "EndPoint-\u003eQuery ConstructQuery-\u003eIO rdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:describeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and construct \u003ccode\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e\u003c/code\u003e from given\n  \u003ccode\u003e\u003ca\u003eConstructQuery\u003c/a\u003e\u003c/code\u003e action. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "EndPoint -\u003e Query DescribeQuery -\u003e IO rdf",
        "fct-source": "src/Database-HSparql-Connection.html#describeQuery",
        "fct-type": "function",
        "title": "describeQuery"
      },
      "index": {
        "description": "Connect to remote EndPoint and construct TriplesGraph from given ConstructQuery action Provisional implementation",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "describeQuery",
        "normalized": "EndPoint-\u003eQuery DescribeQuery-\u003eIO a",
        "package": "hsparql",
        "partial": "Query",
        "signature": "EndPoint-\u003eQuery DescribeQuery-\u003eIO rdf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:selectQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "EndPoint -\u003e Query SelectQuery -\u003e IO (Maybe [[BindingValue]])",
        "fct-source": "src/Database-HSparql-Connection.html#selectQuery",
        "fct-type": "function",
        "title": "selectQuery"
      },
      "index": {
        "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "selectQuery",
        "normalized": "EndPoint-\u003eQuery SelectQuery-\u003eIO(Maybe[[BindingValue]])",
        "package": "hsparql",
        "partial": "Query",
        "signature": "EndPoint-\u003eQuery SelectQuery-\u003eIO(Maybe[[BindingValue]])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:updateQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.Connection",
        "fct-package": "hsparql",
        "fct-signature": "EndPoint -\u003e Query UpdateQuery -\u003e IO Bool",
        "fct-source": "src/Database-HSparql-Connection.html#updateQuery",
        "fct-type": "function",
        "title": "updateQuery"
      },
      "index": {
        "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
        "hierarchy": "Database HSparql Connection",
        "module": "Database.HSparql.Connection",
        "name": "updateQuery",
        "normalized": "EndPoint-\u003eQuery UpdateQuery-\u003eIO Bool",
        "package": "hsparql",
        "partial": "Query",
        "signature": "EndPoint-\u003eQuery UpdateQuery-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe query generator DSL for SPARQL, used when connecting to remote\n  endpoints.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "module",
        "fct-source": "src/Database-HSparql-QueryGenerator.html",
        "fct-type": "module",
        "title": "QueryGenerator"
      },
      "index": {
        "description": "The query generator DSL for SPARQL used when connecting to remote endpoints",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "QueryGenerator",
        "normalized": "",
        "package": "hsparql",
        "partial": "Query Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:AskQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
        "fct-type": "data",
        "title": "AskQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "AskQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Ask Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:ConstructQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
        "fct-type": "data",
        "title": "ConstructQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "ConstructQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Construct Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:DescribeQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
        "fct-type": "data",
        "title": "DescribeQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "DescribeQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Describe Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Pattern",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "Pattern",
        "normalized": "",
        "package": "hsparql",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad applied to \u003ccode\u003eQueryData\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "type",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#Query",
        "fct-type": "type",
        "title": "Query"
      },
      "index": {
        "description": "The State monad applied to QueryData",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "Query",
        "normalized": "",
        "package": "hsparql",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:SelectQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
        "fct-type": "data",
        "title": "SelectQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "SelectQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Select Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:UpdateQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
        "fct-type": "data",
        "title": "UpdateQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "UpdateQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Update Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Variable",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "data",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#Variable",
        "fct-type": "data",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "Variable",
        "normalized": "",
        "package": "hsparql",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-33--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their equivalence.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%21%3D.",
        "fct-type": "function",
        "title": "(.!=.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their equivalence",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.!=.) .!=.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two terms.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Multiply two terms",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.*.) .*.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-43-.",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two terms.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%2B.",
        "fct-type": "function",
        "title": "(.+.)"
      },
      "index": {
        "description": "Add two terms",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.+.) .+.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eFind the difference between two terms.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.-.",
        "fct-type": "function",
        "title": "(.-.)"
      },
      "index": {
        "description": "Find the difference between two terms",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.-.) .-.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-47-.",
      "description": {
        "fct-descr": "\u003cp\u003eDivide two terms.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%2F.",
        "fct-type": "function",
        "title": "(./.)"
      },
      "index": {
        "description": "Divide two terms",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(./.) ./.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-60--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their equivalence.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their equivalence",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.==.) .==.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-62--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-62-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "a-\u003eb-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.:.",
      "description": {
        "fct-descr": "\u003cp\u003eForm a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, with the \u003ccode\u003ePrefix\u003c/code\u003e and reference name.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Prefix -\u003e Text -\u003e IRIRef",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#.%3A.",
        "fct-type": "function",
        "title": "(.:.)"
      },
      "index": {
        "description": "Form Node with the Prefix and reference name",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "(.:.) .:.",
        "normalized": "Prefix-\u003eText-\u003eIRIRef",
        "package": "hsparql",
        "partial": "",
        "signature": "Prefix-\u003eText-\u003eIRIRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:AskQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "AskQuery",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
        "fct-type": "function",
        "title": "AskQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "AskQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Ask Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:ConstructQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "ConstructQuery",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
        "fct-type": "function",
        "title": "ConstructQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "ConstructQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Construct Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:DescribeQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "DescribeQuery",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
        "fct-type": "function",
        "title": "DescribeQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "DescribeQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Describe Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:SelectQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "SelectQuery",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
        "fct-type": "function",
        "title": "SelectQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "SelectQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Select Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:UpdateQuery",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "UpdateQuery",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
        "fct-type": "function",
        "title": "UpdateQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "UpdateQuery",
        "normalized": "",
        "package": "hsparql",
        "partial": "Update Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:askTriple",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#askTriple",
        "fct-type": "function",
        "title": "askTriple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "askTriple",
        "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "Triple",
        "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:bound",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Variable -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#bound",
        "fct-type": "function",
        "title": "bound"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "bound",
        "normalized": "Variable-\u003eExpr",
        "package": "hsparql",
        "partial": "",
        "signature": "Variable-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:constructTriple",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#constructTriple",
        "fct-type": "function",
        "title": "constructTriple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "constructTriple",
        "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "Triple",
        "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createAskQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a 'Ask Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query AskQuery -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#createAskQuery",
        "fct-type": "function",
        "title": "createAskQuery"
      },
      "index": {
        "description": "Execute Ask Query action returning the String representation of the query",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "createAskQuery",
        "normalized": "Query AskQuery-\u003eString",
        "package": "hsparql",
        "partial": "Ask Query",
        "signature": "Query AskQuery-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createConstructQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a 'Construct Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query ConstructQuery -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#createConstructQuery",
        "fct-type": "function",
        "title": "createConstructQuery"
      },
      "index": {
        "description": "Execute Construct Query action returning the String representation of the query",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "createConstructQuery",
        "normalized": "Query ConstructQuery-\u003eString",
        "package": "hsparql",
        "partial": "Construct Query",
        "signature": "Query ConstructQuery-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createDescribeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a 'Describe Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query DescribeQuery -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#createDescribeQuery",
        "fct-type": "function",
        "title": "createDescribeQuery"
      },
      "index": {
        "description": "Execute Describe Query action returning the String representation of the query",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "createDescribeQuery",
        "normalized": "Query DescribeQuery-\u003eString",
        "package": "hsparql",
        "partial": "Describe Query",
        "signature": "Query DescribeQuery-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createSelectQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a 'Select Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query SelectQuery -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#createSelectQuery",
        "fct-type": "function",
        "title": "createSelectQuery"
      },
      "index": {
        "description": "Execute Select Query action returning the String representation of the query",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "createSelectQuery",
        "normalized": "Query SelectQuery-\u003eString",
        "package": "hsparql",
        "partial": "Select Query",
        "signature": "Query SelectQuery-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createUpdateQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a 'Update Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query UpdateQuery -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#createUpdateQuery",
        "fct-type": "function",
        "title": "createUpdateQuery"
      },
      "index": {
        "description": "Execute Update Query action returning the String representation of the query",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "createUpdateQuery",
        "normalized": "Query UpdateQuery-\u003eString",
        "package": "hsparql",
        "partial": "Update Query",
        "signature": "Query UpdateQuery-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:datatype",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#datatype",
        "fct-type": "function",
        "title": "datatype"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "datatype",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:describeIRI",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "IRIRef -\u003e Query IRIRef",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#describeIRI",
        "fct-type": "function",
        "title": "describeIRI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "describeIRI",
        "normalized": "IRIRef-\u003eQuery IRIRef",
        "package": "hsparql",
        "partial": "IRI",
        "signature": "IRIRef-\u003eQuery IRIRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:distinct",
      "description": {
        "fct-descr": "\u003cp\u003eSet duplicate handling to \u003ccode\u003eDistinct\u003c/code\u003e. By default, there are no reductions.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query Duplicates",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#distinct",
        "fct-type": "function",
        "title": "distinct"
      },
      "index": {
        "description": "Set duplicate handling to Distinct By default there are no reductions",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "distinct",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:filterExpr",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict results to only those for which the given expression is true.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#filterExpr",
        "fct-type": "function",
        "title": "filterExpr"
      },
      "index": {
        "description": "Restrict results to only those for which the given expression is true",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "filterExpr",
        "normalized": "a-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "Expr",
        "signature": "a-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:iriRef",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Text -\u003e IRIRef",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#iriRef",
        "fct-type": "function",
        "title": "iriRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "iriRef",
        "normalized": "Text-\u003eIRIRef",
        "package": "hsparql",
        "partial": "Ref",
        "signature": "Text-\u003eIRIRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isBlank",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#isBlank",
        "fct-type": "function",
        "title": "isBlank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "isBlank",
        "normalized": "",
        "package": "hsparql",
        "partial": "Blank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isIRI",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#isIRI",
        "fct-type": "function",
        "title": "isIRI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "isIRI",
        "normalized": "",
        "package": "hsparql",
        "partial": "IRI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isLiteral",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#isLiteral",
        "fct-type": "function",
        "title": "isLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "isLiteral",
        "normalized": "",
        "package": "hsparql",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isURI",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#isURI",
        "fct-type": "function",
        "title": "isURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "isURI",
        "normalized": "",
        "package": "hsparql",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:lang",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#lang",
        "fct-type": "function",
        "title": "lang"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "lang",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:langMatches",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc2",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#langMatches",
        "fct-type": "function",
        "title": "langMatches"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "langMatches",
        "normalized": "",
        "package": "hsparql",
        "partial": "Matches",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:notExpr",
      "description": {
        "fct-descr": "\u003cp\u003eNegate any term-like expression, for use, e.g., in filtering.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e Expr",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#notExpr",
        "fct-type": "function",
        "title": "notExpr"
      },
      "index": {
        "description": "Negate any term-like expression for use e.g in filtering",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "notExpr",
        "normalized": "a-\u003eExpr",
        "package": "hsparql",
        "partial": "Expr",
        "signature": "a-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:optional",
      "description": {
        "fct-descr": "\u003cp\u003eAdd optional constraints on matches. Variable bindings within the optional\n  action are lost, so variables must always be defined prior to opening the\n  optional block.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query a -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#optional",
        "fct-type": "function",
        "title": "optional"
      },
      "index": {
        "description": "Add optional constraints on matches Variable bindings within the optional action are lost so variables must always be defined prior to opening the optional block",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "optional",
        "normalized": "Query a-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "",
        "signature": "Query a-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNext",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of \u003ccode\u003e\u003ca\u003eorderNextAsc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e Query ()",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#orderNext",
        "fct-type": "function",
        "title": "orderNext"
      },
      "index": {
        "description": "Alias of orderNextAsc",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "orderNext",
        "normalized": "a-\u003eQuery()",
        "package": "hsparql",
        "partial": "Next",
        "signature": "a-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNextAsc",
      "description": {
        "fct-descr": "\u003cp\u003eOrder the results, after any previous ordering, based on the term, in\n  ascending order.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e Query ()",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#orderNextAsc",
        "fct-type": "function",
        "title": "orderNextAsc"
      },
      "index": {
        "description": "Order the results after any previous ordering based on the term in ascending order",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "orderNextAsc",
        "normalized": "a-\u003eQuery()",
        "package": "hsparql",
        "partial": "Next Asc",
        "signature": "a-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNextDesc",
      "description": {
        "fct-descr": "\u003cp\u003eOrder the results, after any previous ordering, based on the term, in\n  descending order.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e Query ()",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#orderNextDesc",
        "fct-type": "function",
        "title": "orderNextDesc"
      },
      "index": {
        "description": "Order the results after any previous ordering based on the term in descending order",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "orderNextDesc",
        "normalized": "a-\u003eQuery()",
        "package": "hsparql",
        "partial": "Next Desc",
        "signature": "a-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a prefix to the query, given an IRI reference, and return it.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Text -\u003e IRIRef -\u003e Query Prefix",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "Add prefix to the query given an IRI reference and return it",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "prefix",
        "normalized": "Text-\u003eIRIRef-\u003eQuery Prefix",
        "package": "hsparql",
        "partial": "",
        "signature": "Text-\u003eIRIRef-\u003eQuery Prefix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:qshow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert most query-related types to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, most importantly\n  \u003ccode\u003eQueryData\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#qshow",
        "fct-type": "function",
        "title": "qshow"
      },
      "index": {
        "description": "Convert most query-related types to String most importantly QueryData",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "qshow",
        "normalized": "a-\u003eString",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryAsk",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "[Pattern]",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
        "fct-type": "function",
        "title": "queryAsk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "queryAsk",
        "normalized": "[Pattern]",
        "package": "hsparql",
        "partial": "Ask",
        "signature": "[Pattern]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryConstructs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "[Pattern]",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
        "fct-type": "function",
        "title": "queryConstructs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "queryConstructs",
        "normalized": "[Pattern]",
        "package": "hsparql",
        "partial": "Constructs",
        "signature": "[Pattern]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryDescribe",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "IRIRef",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
        "fct-type": "function",
        "title": "queryDescribe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "queryDescribe",
        "normalized": "",
        "package": "hsparql",
        "partial": "Describe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "[Pattern]",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
        "fct-type": "function",
        "title": "queryUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "queryUpdate",
        "normalized": "[Pattern]",
        "package": "hsparql",
        "partial": "Update",
        "signature": "[Pattern]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryVars",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "[Variable]",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
        "fct-type": "function",
        "title": "queryVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "queryVars",
        "normalized": "[Variable]",
        "package": "hsparql",
        "partial": "Vars",
        "signature": "[Variable]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:reduced",
      "description": {
        "fct-descr": "\u003cp\u003eSet duplicate handling to \u003ccode\u003eReduced\u003c/code\u003e. By default, there are no reductions.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query Duplicates",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#reduced",
        "fct-type": "function",
        "title": "reduced"
      },
      "index": {
        "description": "Set duplicate handling to Reduced By default there are no reductions",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "reduced",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:regex",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc2",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#regex",
        "fct-type": "function",
        "title": "regex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "regex",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:sameTerm",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc2",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#sameTerm",
        "fct-type": "function",
        "title": "sameTerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "sameTerm",
        "normalized": "",
        "package": "hsparql",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:str",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "BuiltinFunc1",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "str",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:triple",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict the query to only results for which values match constants in this\n  triple, or for which the variables can be bound.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#triple",
        "fct-type": "function",
        "title": "triple"
      },
      "index": {
        "description": "Restrict the query to only results for which values match constants in this triple or for which the variables can be bound",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "triple",
        "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "",
        "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a union structure to the query pattern. As with \u003ccode\u003e\u003ca\u003eoptional\u003c/a\u003e\u003c/code\u003e blocks,\n  variables must be defined prior to the opening of any block.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query a -\u003e Query b -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Add union structure to the query pattern As with optional blocks variables must be defined prior to the opening of any block",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "union",
        "normalized": "Query a-\u003eQuery b-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "",
        "signature": "Query a-\u003eQuery b-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:updateTriple",
      "description": {
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#updateTriple",
        "fct-type": "function",
        "title": "updateTriple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "updateTriple",
        "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
        "package": "hsparql",
        "partial": "Triple",
        "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:var",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and return a variable to the query, usable in later expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HSparql.QueryGenerator",
        "fct-package": "hsparql",
        "fct-signature": "Query Variable",
        "fct-source": "src/Database-HSparql-QueryGenerator.html#var",
        "fct-type": "function",
        "title": "var"
      },
      "index": {
        "description": "Create and return variable to the query usable in later expressions",
        "hierarchy": "Database HSparql QueryGenerator",
        "module": "Database.HSparql.QueryGenerator",
        "name": "var",
        "normalized": "",
        "package": "hsparql",
        "partial": "",
        "signature": ""
      }
    }
  }
]