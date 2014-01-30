[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#",
      "description": {
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "module",
        "fct-type": "module",
        "title": "Quasi"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "Quasi",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "Quasi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExecute",
      "description": {
        "fct-descr": "\u003cp\u003eAn execute-like query that takes \u003ccode\u003eq\u003c/code\u003e as its parameters.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QExecute"
      },
      "index": {
        "description": "An execute-like query that takes as its parameters",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "QExecute",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "QExecute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExecute_",
      "description": {
        "fct-descr": "\u003cp\u003eAn execute-like query that has no parameters.  There's very little gain in using\n this over using \u003ccode\u003e\u003ca\u003eexecute_\u003c/a\u003e\u003c/code\u003e from mysql-simple directly, but it's provided for completeness.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QExecute_"
      },
      "index": {
        "description": "An execute-like query that has no parameters There very little gain in using this over using execute from mysql-simple directly but it provided for completeness",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "QExecute_",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "QExecute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExtractable",
      "description": {
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "QExtractable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "QExtractable",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "QExtractable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA select-like query that takes \u003ccode\u003eq\u003c/code\u003e as its parameters and returns a list of \u003ccode\u003er\u003c/code\u003e as its results.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QQuery"
      },
      "index": {
        "description": "select-like query that takes as its parameters and returns list of as its results",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "QQuery",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "QQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QQuery_",
      "description": {
        "fct-descr": "\u003cp\u003eA select-like query that has no parameters, and returns a list of \u003ccode\u003er\u003c/code\u003e as its results.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QQuery_"
      },
      "index": {
        "description": "select-like query that has no parameters and returns list of as its results",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "QQuery_",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "QQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQExecute\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QExecute q -\u003e q -\u003e IO Int64",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "wrapper for mysql-simple execute function Note that no instances are required for because the QExecute type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "execute",
        "normalized": "Connection-\u003eQExecute a-\u003ea-\u003eIO Int",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQExecute q-\u003eq-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQExecute\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QExecute q -\u003e [q] -\u003e IO Int64",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "wrapper for mysql-simple executeMany function Note that no instances are required for because the QExecute type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "executeMany",
        "normalized": "Connection-\u003eQExecute a-\u003e[a]-\u003eIO Int",
        "package": "mysql-simple-quasi",
        "partial": "Many",
        "signature": "Connection-\u003eQExecute q-\u003e[q]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecute_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QExecute_ -\u003e IO Int64",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "wrapper for mysql-simple execute function",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "execute_",
        "normalized": "Connection-\u003eQExecute_-\u003eIO Int",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQExecute_-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:extractQuery",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the query.  This loses all the type safety\n of the original query and the whole point of using the library,\n but presumably you know what you're doing.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "q -\u003e String",
        "fct-type": "method",
        "title": "extractQuery"
      },
      "index": {
        "description": "Extracts the query This loses all the type safety of the original query and the whole point of using the library but presumably you know what you re doing",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "extractQuery",
        "normalized": "a-\u003eString",
        "package": "mysql-simple-quasi",
        "partial": "Query",
        "signature": "q-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery q r -\u003e q -\u003e a -\u003e (a -\u003e r -\u003e IO a) -\u003e IO a",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "wrapper for mysql-simple fold function Note that no instances are required for or because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "fold",
        "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003ec-\u003e(c-\u003eb-\u003eIO c)-\u003eIO c",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQQuery q r-\u003eq-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:fold_",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003efold_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery_ r -\u003e a -\u003e (a -\u003e r -\u003e IO a) -\u003e IO a",
        "fct-type": "function",
        "title": "fold_"
      },
      "index": {
        "description": "wrapper for mysql-simple fold function Note that no instances are required for because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "fold_",
        "normalized": "Connection-\u003eQQuery_ a-\u003eb-\u003e(b-\u003ea-\u003eIO b)-\u003eIO b",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQQuery_ r-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eforEach\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery q r -\u003e q -\u003e (r -\u003e IO ()) -\u003e IO ()",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "wrapper for mysql-simple forEach function Note that no instances are required for or because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "forEach",
        "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003e(b-\u003eIO())-\u003eIO()",
        "package": "mysql-simple-quasi",
        "partial": "Each",
        "signature": "Connection-\u003eQQuery q r-\u003eq-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:forEach_",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eforEach_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery_ r -\u003e (r -\u003e IO ()) -\u003e IO ()",
        "fct-type": "function",
        "title": "forEach_"
      },
      "index": {
        "description": "wrapper for mysql-simple forEach function Note that no instances are required for because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "forEach_",
        "normalized": "Connection-\u003eQQuery_ a-\u003e(a-\u003eIO())-\u003eIO()",
        "package": "mysql-simple-quasi",
        "partial": "Each",
        "signature": "Connection-\u003eQQuery_ r-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:qexec",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eqquery\u003c/a\u003e\u003c/code\u003e, except that it produces a query of type QExecute/QExecute_\n instead of QQuery/QQuery_, and it gives an error if there are any result annotations\n (since executes don't return any results).\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "QuasiQuoter",
        "fct-type": "function",
        "title": "qexec"
      },
      "index": {
        "description": "Same as qquery except that it produces query of type QExecute QExecute instead of QQuery QQuery and it gives an error if there are any result annotations since executes don return any results",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "qexec",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:qquery",
      "description": {
        "fct-descr": "\u003cp\u003eA quasi-quoter that takes the param and result types from the query\n string and generates a typed query.  For example:\n\u003c/p\u003e\u003cpre\u003e [qquery|select * from users|]\n\u003c/pre\u003e\u003cp\u003ewill turn into an expression of type \u003ccode\u003eQueryResults r =\u003e QQuery_ r\u003c/code\u003e.\n This is not particularly useful.  However, this:\n\u003c/p\u003e\u003cpre\u003e [qquery|select id{Int32}, name{String} from users|]\n\u003c/pre\u003e\u003cp\u003ebecomes \u003ccode\u003eQQuery_ (Int32, String)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFurthermore, this:\n\u003c/p\u003e\u003cpre\u003e [qquery|select id{Int32} from users where name = ?{String}|]\n\u003c/pre\u003e\u003cp\u003ebecomes: \u003ccode\u003eQQuery String Int32\u003c/code\u003e.  And this:\n\u003c/p\u003e\u003cpre\u003e [qquery| select a.*{Int, Maybe String, String}, b.value{Double}\n            from a inner join b on a.id = b.id\n            where a.name = ?{String} and b.num = ?{Int}|]\n\u003c/pre\u003e\u003cp\u003ebecomes: \u003ccode\u003eQQuery (String, Int) (Int, Maybe String, String, Double)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Any non-escaped question mark in the String is taken to be one\n   substitution.  It is given type \u003ccode\u003eQueryParam a =\u003e a\u003c/code\u003e unless it is\n   followed immediately (no spaces) by curly brackets with a type in it,\n   in which case it uses that type.\n\u003c/li\u003e\u003cli\u003e A question mark preceded by a backslash is turned into a single question mark.\n\u003c/li\u003e\u003cli\u003e To insert an actual backslash, use double backslash.\n\u003c/li\u003e\u003cli\u003e Any other instances of curly brackets in the String are taken to\n   be a comma-separated list of result types, which are all tupled\n   (in the order they appear in the String) into a single result type.\n   To get a literal curly bracket, put a backslash before it.\n\u003c/li\u003e\u003cli\u003e If there is only a single substitution or single result, \u003ccode\u003eOnly\u003c/code\u003e is automatically added/removed\n   when passing it through to the mysql-simple library.\n\u003c/li\u003e\u003cli\u003e If there is no \u003ccode\u003e?\u003c/code\u003e substitution in the query, the resulting type is \u003ccode\u003eQQuery_ r\u003c/code\u003e.  If there are\n   substitutions, the resulting type is \u003ccode\u003eQQuery q r\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "QuasiQuoter",
        "fct-type": "function",
        "title": "qquery"
      },
      "index": {
        "description": "quasi-quoter that takes the param and result types from the query string and generates typed query For example qquery select from users will turn into an expression of type QueryResults QQuery This is not particularly useful However this qquery select id Int32 name String from users becomes QQuery Int32 String Furthermore this qquery select id Int32 from users where name String becomes QQuery String Int32 And this qquery select Int Maybe String String b.value Double from inner join on a.id b.id where a.name String and b.num Int becomes QQuery String Int Int Maybe String String Double In general Any non-escaped question mark in the String is taken to be one substitution It is given type QueryParam unless it is followed immediately no spaces by curly brackets with type in it in which case it uses that type question mark preceded by backslash is turned into single question mark To insert an actual backslash use double backslash Any other instances of curly brackets in the String are taken to be comma-separated list of result types which are all tupled in the order they appear in the String into single result type To get literal curly bracket put backslash before it If there is only single substitution or single result Only is automatically added removed when passing it through to the mysql-simple library If there is no substitution in the query the resulting type is QQuery If there are substitutions the resulting type is QQuery",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "qquery",
        "normalized": "",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery q r -\u003e q -\u003e IO [r]",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "wrapper for mysql-simple query function Note that no instances are required for or because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "query",
        "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003eIO[b]",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQQuery q r-\u003eq-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Quasi",
        "fct-package": "mysql-simple-quasi",
        "fct-signature": "Connection -\u003e QQuery_ r -\u003e IO [r]",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "wrapper for mysql-simple query function Note that no instances are required for because the QQuery type witnesses them at its construction",
        "hierarchy": "Database MySQL Simple Quasi",
        "module": "Database.MySQL.Simple.Quasi",
        "name": "query_",
        "normalized": "Connection-\u003eQQuery_ a-\u003eIO[a]",
        "package": "mysql-simple-quasi",
        "partial": "",
        "signature": "Connection-\u003eQQuery_ r-\u003eIO[r]"
      }
    }
  }
]