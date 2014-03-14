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
        "word": "hsparql"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.Connection",
          "name": "Connection",
          "package": "hsparql",
          "source": "src/Database-HSparql-Connection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "Connection",
          "package": "hsparql",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal representations of incoming XML results.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "BindingValue",
          "package": "hsparql",
          "source": "src/Database-HSparql-Connection.html#BindingValue",
          "type": "data"
        },
        "index": {
          "description": "Local representations of incoming XML results",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "BindingValue",
          "package": "hsparql",
          "partial": "Binding Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#t:BindingValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURI of the SPARQL endpoint.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "EndPoint",
          "package": "hsparql",
          "source": "src/Database-HSparql-Connection.html#EndPoint",
          "type": "type"
        },
        "index": {
          "description": "URI of the SPARQL endpoint",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "EndPoint",
          "package": "hsparql",
          "partial": "End Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#t:EndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRDF Node (UNode, BNode, LNode)\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "Bound",
          "package": "hsparql",
          "signature": "Bound Node",
          "source": "src/Database-HSparql-Connection.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "RDF Node UNode BNode LNode",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "Bound",
          "package": "hsparql",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:Bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbound result value\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "Unbound",
          "package": "hsparql",
          "signature": "Unbound",
          "source": "src/Database-HSparql-Connection.html#BindingValue",
          "type": "function"
        },
        "index": {
          "description": "Unbound result value",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "Unbound",
          "package": "hsparql",
          "partial": "Unbound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:Unbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "askQuery",
          "package": "hsparql",
          "signature": "EndPoint -\u003e Query AskQuery -\u003e IO Bool",
          "source": "src/Database-HSparql-Connection.html#askQuery",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "askQuery",
          "normalized": "EndPoint-\u003eQuery AskQuery-\u003eIO Bool",
          "package": "hsparql",
          "partial": "Query",
          "signature": "EndPoint-\u003eQuery AskQuery-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:askQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and construct \u003ccode\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e\u003c/code\u003e from given\n  \u003ccode\u003e\u003ca\u003eConstructQuery\u003c/a\u003e\u003c/code\u003e action. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "constructQuery",
          "package": "hsparql",
          "signature": "EndPoint -\u003e Query ConstructQuery -\u003e IO rdf",
          "source": "src/Database-HSparql-Connection.html#constructQuery",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote EndPoint and construct TriplesGraph from given ConstructQuery action Provisional implementation",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "constructQuery",
          "normalized": "EndPoint-\u003eQuery ConstructQuery-\u003eIO a",
          "package": "hsparql",
          "partial": "Query",
          "signature": "EndPoint-\u003eQuery ConstructQuery-\u003eIO rdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:constructQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and construct \u003ccode\u003e\u003ca\u003eTriplesGraph\u003c/a\u003e\u003c/code\u003e from given\n  \u003ccode\u003e\u003ca\u003eConstructQuery\u003c/a\u003e\u003c/code\u003e action. \u003cem\u003eProvisional implementation\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "describeQuery",
          "package": "hsparql",
          "signature": "EndPoint -\u003e Query DescribeQuery -\u003e IO rdf",
          "source": "src/Database-HSparql-Connection.html#describeQuery",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote EndPoint and construct TriplesGraph from given ConstructQuery action Provisional implementation",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "describeQuery",
          "normalized": "EndPoint-\u003eQuery DescribeQuery-\u003eIO a",
          "package": "hsparql",
          "partial": "Query",
          "signature": "EndPoint-\u003eQuery DescribeQuery-\u003eIO rdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:describeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "selectQuery",
          "package": "hsparql",
          "signature": "EndPoint -\u003e Query SelectQuery -\u003e IO (Maybe [[BindingValue]])",
          "source": "src/Database-HSparql-Connection.html#selectQuery",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "selectQuery",
          "normalized": "EndPoint-\u003eQuery SelectQuery-\u003eIO(Maybe[[BindingValue]])",
          "package": "hsparql",
          "partial": "Query",
          "signature": "EndPoint-\u003eQuery SelectQuery-\u003eIO(Maybe[[BindingValue]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:selectQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to remote \u003ccode\u003e\u003ca\u003eEndPoint\u003c/a\u003e\u003c/code\u003e and find all possible bindings for the\n  \u003ccode\u003e\u003ca\u003eVariable\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eSelectQuery\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Database.HSparql.Connection",
          "name": "updateQuery",
          "package": "hsparql",
          "signature": "EndPoint -\u003e Query UpdateQuery -\u003e IO Bool",
          "source": "src/Database-HSparql-Connection.html#updateQuery",
          "type": "function"
        },
        "index": {
          "description": "Connect to remote EndPoint and find all possible bindings for the Variable in the SelectQuery action",
          "hierarchy": "Database HSparql Connection",
          "module": "Database.HSparql.Connection",
          "name": "updateQuery",
          "normalized": "EndPoint-\u003eQuery UpdateQuery-\u003eIO Bool",
          "package": "hsparql",
          "partial": "Query",
          "signature": "EndPoint-\u003eQuery UpdateQuery-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-Connection.html#v:updateQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe query generator DSL for SPARQL, used when connecting to remote\n  endpoints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "QueryGenerator",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html",
          "type": "module"
        },
        "index": {
          "description": "The query generator DSL for SPARQL used when connecting to remote endpoints",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "QueryGenerator",
          "package": "hsparql",
          "partial": "Query Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "AskQuery",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "AskQuery",
          "package": "hsparql",
          "partial": "Ask Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:AskQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "ConstructQuery",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "ConstructQuery",
          "package": "hsparql",
          "partial": "Construct Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:ConstructQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "DescribeQuery",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "DescribeQuery",
          "package": "hsparql",
          "partial": "Describe Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:DescribeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "Pattern",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#Pattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "Pattern",
          "package": "hsparql",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad applied to \u003ccode\u003eQueryData\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "Query",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#Query",
          "type": "type"
        },
        "index": {
          "description": "The State monad applied to QueryData",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "Query",
          "package": "hsparql",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "SelectQuery",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "SelectQuery",
          "package": "hsparql",
          "partial": "Select Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:SelectQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "UpdateQuery",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "UpdateQuery",
          "package": "hsparql",
          "partial": "Update Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:UpdateQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "Variable",
          "package": "hsparql",
          "source": "src/Database-HSparql-QueryGenerator.html#Variable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "Variable",
          "package": "hsparql",
          "partial": "Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their equivalence.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.!=.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%21%3D.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their equivalence",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.!=.) .!=.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-33--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two terms.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.*.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%2A.",
          "type": "function"
        },
        "index": {
          "description": "Multiply two terms",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.*.) .*.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two terms.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.+.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%2B.",
          "type": "function"
        },
        "index": {
          "description": "Add two terms",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.+.) .+.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the difference between two terms.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.-.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.-.",
          "type": "function"
        },
        "index": {
          "description": "Find the difference between two terms",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.-.) .-.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two terms.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(./.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%2F.",
          "type": "function"
        },
        "index": {
          "description": "Divide two terms",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(./.) ./.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003c=.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003c.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3C.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their equivalence.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.==.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their equivalence",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.==.) .==.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003e=.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3E%3D.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an expression which tests the relationship of the two operands,\n  evaluating their relative value.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003e.)",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3E.",
          "type": "function"
        },
        "index": {
          "description": "Create an expression which tests the relationship of the two operands evaluating their relative value",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "a-\u003eb-\u003eExpr",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, with the \u003ccode\u003ePrefix\u003c/code\u003e and reference name.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.:.)",
          "package": "hsparql",
          "signature": "Prefix -\u003e Text -\u003e IRIRef",
          "source": "src/Database-HSparql-QueryGenerator.html#.%3A.",
          "type": "function"
        },
        "index": {
          "description": "Form Node with the Prefix and reference name",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "(.:.) .:.",
          "normalized": "Prefix-\u003eText-\u003eIRIRef",
          "package": "hsparql",
          "signature": "Prefix-\u003eText-\u003eIRIRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:.:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "AskQuery",
          "package": "hsparql",
          "signature": "AskQuery",
          "source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "AskQuery",
          "package": "hsparql",
          "partial": "Ask Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:AskQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "ConstructQuery",
          "package": "hsparql",
          "signature": "ConstructQuery",
          "source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "ConstructQuery",
          "package": "hsparql",
          "partial": "Construct Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:ConstructQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "DescribeQuery",
          "package": "hsparql",
          "signature": "DescribeQuery",
          "source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "DescribeQuery",
          "package": "hsparql",
          "partial": "Describe Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:DescribeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "SelectQuery",
          "package": "hsparql",
          "signature": "SelectQuery",
          "source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "SelectQuery",
          "package": "hsparql",
          "partial": "Select Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:SelectQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "UpdateQuery",
          "package": "hsparql",
          "signature": "UpdateQuery",
          "source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "UpdateQuery",
          "package": "hsparql",
          "partial": "Update Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:UpdateQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "askTriple",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#askTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "askTriple",
          "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "package": "hsparql",
          "partial": "Triple",
          "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:askTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "bound",
          "package": "hsparql",
          "signature": "Variable -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "bound",
          "normalized": "Variable-\u003eExpr",
          "package": "hsparql",
          "signature": "Variable-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "constructTriple",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#constructTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "constructTriple",
          "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "package": "hsparql",
          "partial": "Triple",
          "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:constructTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a 'Ask Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createAskQuery",
          "package": "hsparql",
          "signature": "Query AskQuery -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#createAskQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Ask Query action returning the String representation of the query",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createAskQuery",
          "normalized": "Query AskQuery-\u003eString",
          "package": "hsparql",
          "partial": "Ask Query",
          "signature": "Query AskQuery-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createAskQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a 'Construct Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createConstructQuery",
          "package": "hsparql",
          "signature": "Query ConstructQuery -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#createConstructQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Construct Query action returning the String representation of the query",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createConstructQuery",
          "normalized": "Query ConstructQuery-\u003eString",
          "package": "hsparql",
          "partial": "Construct Query",
          "signature": "Query ConstructQuery-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createConstructQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a 'Describe Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createDescribeQuery",
          "package": "hsparql",
          "signature": "Query DescribeQuery -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#createDescribeQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Describe Query action returning the String representation of the query",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createDescribeQuery",
          "normalized": "Query DescribeQuery-\u003eString",
          "package": "hsparql",
          "partial": "Describe Query",
          "signature": "Query DescribeQuery-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createDescribeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a 'Select Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createSelectQuery",
          "package": "hsparql",
          "signature": "Query SelectQuery -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#createSelectQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Select Query action returning the String representation of the query",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createSelectQuery",
          "normalized": "Query SelectQuery-\u003eString",
          "package": "hsparql",
          "partial": "Select Query",
          "signature": "Query SelectQuery-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createSelectQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a 'Update Query' action, returning the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the query.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createUpdateQuery",
          "package": "hsparql",
          "signature": "Query UpdateQuery -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#createUpdateQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute Update Query action returning the String representation of the query",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "createUpdateQuery",
          "normalized": "Query UpdateQuery-\u003eString",
          "package": "hsparql",
          "partial": "Update Query",
          "signature": "Query UpdateQuery-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:createUpdateQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "datatype",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#datatype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "datatype",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:datatype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "describeIRI",
          "package": "hsparql",
          "signature": "IRIRef -\u003e Query IRIRef",
          "source": "src/Database-HSparql-QueryGenerator.html#describeIRI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "describeIRI",
          "normalized": "IRIRef-\u003eQuery IRIRef",
          "package": "hsparql",
          "partial": "IRI",
          "signature": "IRIRef-\u003eQuery IRIRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:describeIRI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet duplicate handling to \u003ccode\u003eDistinct\u003c/code\u003e. By default, there are no reductions.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "distinct",
          "package": "hsparql",
          "signature": "Query Duplicates",
          "source": "src/Database-HSparql-QueryGenerator.html#distinct",
          "type": "function"
        },
        "index": {
          "description": "Set duplicate handling to Distinct By default there are no reductions",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "distinct",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:distinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict results to only those for which the given expression is true.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "filterExpr",
          "package": "hsparql",
          "signature": "a -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#filterExpr",
          "type": "function"
        },
        "index": {
          "description": "Restrict results to only those for which the given expression is true",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "filterExpr",
          "normalized": "a-\u003eQuery Pattern",
          "package": "hsparql",
          "partial": "Expr",
          "signature": "a-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:filterExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "iriRef",
          "package": "hsparql",
          "signature": "Text -\u003e IRIRef",
          "source": "src/Database-HSparql-QueryGenerator.html#iriRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "iriRef",
          "normalized": "Text-\u003eIRIRef",
          "package": "hsparql",
          "partial": "Ref",
          "signature": "Text-\u003eIRIRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:iriRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "isBlank",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#isBlank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "isBlank",
          "package": "hsparql",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "isIRI",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#isIRI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "isIRI",
          "package": "hsparql",
          "partial": "IRI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isIRI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "isLiteral",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#isLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "isLiteral",
          "package": "hsparql",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "isURI",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#isURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "isURI",
          "package": "hsparql",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:isURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "lang",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#lang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "lang",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "langMatches",
          "package": "hsparql",
          "signature": "BuiltinFunc2",
          "source": "src/Database-HSparql-QueryGenerator.html#langMatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "langMatches",
          "package": "hsparql",
          "partial": "Matches",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:langMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate any term-like expression, for use, e.g., in filtering.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "notExpr",
          "package": "hsparql",
          "signature": "a -\u003e Expr",
          "source": "src/Database-HSparql-QueryGenerator.html#notExpr",
          "type": "function"
        },
        "index": {
          "description": "Negate any term-like expression for use e.g in filtering",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "notExpr",
          "normalized": "a-\u003eExpr",
          "package": "hsparql",
          "partial": "Expr",
          "signature": "a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:notExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd optional constraints on matches. Variable bindings within the optional\n  action are lost, so variables must always be defined prior to opening the\n  optional block.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "optional",
          "package": "hsparql",
          "signature": "Query a -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#optional",
          "type": "function"
        },
        "index": {
          "description": "Add optional constraints on matches Variable bindings within the optional action are lost so variables must always be defined prior to opening the optional block",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "optional",
          "normalized": "Query a-\u003eQuery Pattern",
          "package": "hsparql",
          "signature": "Query a-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias of \u003ccode\u003e\u003ca\u003eorderNextAsc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNext",
          "package": "hsparql",
          "signature": "a -\u003e Query ()",
          "source": "src/Database-HSparql-QueryGenerator.html#orderNext",
          "type": "function"
        },
        "index": {
          "description": "Alias of orderNextAsc",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNext",
          "normalized": "a-\u003eQuery()",
          "package": "hsparql",
          "partial": "Next",
          "signature": "a-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrder the results, after any previous ordering, based on the term, in\n  ascending order.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNextAsc",
          "package": "hsparql",
          "signature": "a -\u003e Query ()",
          "source": "src/Database-HSparql-QueryGenerator.html#orderNextAsc",
          "type": "function"
        },
        "index": {
          "description": "Order the results after any previous ordering based on the term in ascending order",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNextAsc",
          "normalized": "a-\u003eQuery()",
          "package": "hsparql",
          "partial": "Next Asc",
          "signature": "a-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNextAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrder the results, after any previous ordering, based on the term, in\n  descending order.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNextDesc",
          "package": "hsparql",
          "signature": "a -\u003e Query ()",
          "source": "src/Database-HSparql-QueryGenerator.html#orderNextDesc",
          "type": "function"
        },
        "index": {
          "description": "Order the results after any previous ordering based on the term in descending order",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "orderNextDesc",
          "normalized": "a-\u003eQuery()",
          "package": "hsparql",
          "partial": "Next Desc",
          "signature": "a-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:orderNextDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a prefix to the query, given an IRI reference, and return it.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "prefix",
          "package": "hsparql",
          "signature": "Text -\u003e IRIRef -\u003e Query Prefix",
          "source": "src/Database-HSparql-QueryGenerator.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Add prefix to the query given an IRI reference and return it",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "prefix",
          "normalized": "Text-\u003eIRIRef-\u003eQuery Prefix",
          "package": "hsparql",
          "signature": "Text-\u003eIRIRef-\u003eQuery Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert most query-related types to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, most importantly\n  \u003ccode\u003eQueryData\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "qshow",
          "package": "hsparql",
          "signature": "a -\u003e String",
          "source": "src/Database-HSparql-QueryGenerator.html#qshow",
          "type": "function"
        },
        "index": {
          "description": "Convert most query-related types to String most importantly QueryData",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "qshow",
          "normalized": "a-\u003eString",
          "package": "hsparql",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:qshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryAsk",
          "package": "hsparql",
          "signature": "[Pattern]",
          "source": "src/Database-HSparql-QueryGenerator.html#AskQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryAsk",
          "normalized": "[Pattern]",
          "package": "hsparql",
          "partial": "Ask",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryAsk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryConstructs",
          "package": "hsparql",
          "signature": "[Pattern]",
          "source": "src/Database-HSparql-QueryGenerator.html#ConstructQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryConstructs",
          "normalized": "[Pattern]",
          "package": "hsparql",
          "partial": "Constructs",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryConstructs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryDescribe",
          "package": "hsparql",
          "signature": "IRIRef",
          "source": "src/Database-HSparql-QueryGenerator.html#DescribeQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryDescribe",
          "package": "hsparql",
          "partial": "Describe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryDescribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryUpdate",
          "package": "hsparql",
          "signature": "[Pattern]",
          "source": "src/Database-HSparql-QueryGenerator.html#UpdateQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryUpdate",
          "normalized": "[Pattern]",
          "package": "hsparql",
          "partial": "Update",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryVars",
          "package": "hsparql",
          "signature": "[Variable]",
          "source": "src/Database-HSparql-QueryGenerator.html#SelectQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "queryVars",
          "normalized": "[Variable]",
          "package": "hsparql",
          "partial": "Vars",
          "signature": "[Variable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:queryVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet duplicate handling to \u003ccode\u003eReduced\u003c/code\u003e. By default, there are no reductions.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "reduced",
          "package": "hsparql",
          "signature": "Query Duplicates",
          "source": "src/Database-HSparql-QueryGenerator.html#reduced",
          "type": "function"
        },
        "index": {
          "description": "Set duplicate handling to Reduced By default there are no reductions",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "reduced",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:reduced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "regex",
          "package": "hsparql",
          "signature": "BuiltinFunc2",
          "source": "src/Database-HSparql-QueryGenerator.html#regex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "regex",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "sameTerm",
          "package": "hsparql",
          "signature": "BuiltinFunc2",
          "source": "src/Database-HSparql-QueryGenerator.html#sameTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "sameTerm",
          "package": "hsparql",
          "partial": "Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:sameTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "str",
          "package": "hsparql",
          "signature": "BuiltinFunc1",
          "source": "src/Database-HSparql-QueryGenerator.html#str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "str",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the query to only results for which values match constants in this\n  triple, or for which the variables can be bound.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "triple",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#triple",
          "type": "function"
        },
        "index": {
          "description": "Restrict the query to only results for which values match constants in this triple or for which the variables can be bound",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "triple",
          "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "package": "hsparql",
          "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a union structure to the query pattern. As with \u003ccode\u003e\u003ca\u003eoptional\u003c/a\u003e\u003c/code\u003e blocks,\n  variables must be defined prior to the opening of any block.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "union",
          "package": "hsparql",
          "signature": "Query a -\u003e Query b -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#union",
          "type": "function"
        },
        "index": {
          "description": "Add union structure to the query pattern As with optional blocks variables must be defined prior to the opening of any block",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "union",
          "normalized": "Query a-\u003eQuery b-\u003eQuery Pattern",
          "package": "hsparql",
          "signature": "Query a-\u003eQuery b-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HSparql.QueryGenerator",
          "name": "updateTriple",
          "package": "hsparql",
          "signature": "a -\u003e b -\u003e c -\u003e Query Pattern",
          "source": "src/Database-HSparql-QueryGenerator.html#updateTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "updateTriple",
          "normalized": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "package": "hsparql",
          "partial": "Triple",
          "signature": "a-\u003eb-\u003ec-\u003eQuery Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:updateTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and return a variable to the query, usable in later expressions.\n\u003c/p\u003e",
          "module": "Database.HSparql.QueryGenerator",
          "name": "var",
          "package": "hsparql",
          "signature": "Query Variable",
          "source": "src/Database-HSparql-QueryGenerator.html#var",
          "type": "function"
        },
        "index": {
          "description": "Create and return variable to the query usable in later expressions",
          "hierarchy": "Database HSparql QueryGenerator",
          "module": "Database.HSparql.QueryGenerator",
          "name": "var",
          "package": "hsparql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsparql/docs/Database-HSparql-QueryGenerator.html#v:var"
      }
    }
  ]
]