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
        "word": "mysql-simple-quasi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Simple.Quasi",
          "name": "Quasi",
          "package": "mysql-simple-quasi",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "Quasi",
          "package": "mysql-simple-quasi",
          "partial": "Quasi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn execute-like query that takes \u003ccode\u003eq\u003c/code\u003e as its parameters.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExecute",
          "package": "mysql-simple-quasi",
          "type": "data"
        },
        "index": {
          "description": "An execute-like query that takes as its parameters",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExecute",
          "package": "mysql-simple-quasi",
          "partial": "QExecute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn execute-like query that has no parameters.  There's very little gain in using\n this over using \u003ccode\u003e\u003ca\u003eexecute_\u003c/a\u003e\u003c/code\u003e from mysql-simple directly, but it's provided for completeness.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExecute_",
          "package": "mysql-simple-quasi",
          "type": "data"
        },
        "index": {
          "description": "An execute-like query that has no parameters There very little gain in using this over using execute from mysql-simple directly but it provided for completeness",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExecute_",
          "package": "mysql-simple-quasi",
          "partial": "QExecute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExecute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExtractable",
          "package": "mysql-simple-quasi",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QExtractable",
          "package": "mysql-simple-quasi",
          "partial": "QExtractable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QExtractable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA select-like query that takes \u003ccode\u003eq\u003c/code\u003e as its parameters and returns a list of \u003ccode\u003er\u003c/code\u003e as its results.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QQuery",
          "package": "mysql-simple-quasi",
          "type": "data"
        },
        "index": {
          "description": "select-like query that takes as its parameters and returns list of as its results",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QQuery",
          "package": "mysql-simple-quasi",
          "partial": "QQuery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA select-like query that has no parameters, and returns a list of \u003ccode\u003er\u003c/code\u003e as its results.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QQuery_",
          "package": "mysql-simple-quasi",
          "type": "data"
        },
        "index": {
          "description": "select-like query that has no parameters and returns list of as its results",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "QQuery_",
          "package": "mysql-simple-quasi",
          "partial": "QQuery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#t:QQuery_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQExecute\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "execute",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QExecute q -\u003e q -\u003e IO Int64",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple execute function Note that no instances are required for because the QExecute type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "execute",
          "normalized": "Connection-\u003eQExecute a-\u003ea-\u003eIO Int",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQExecute q-\u003eq-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQExecute\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "executeMany",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QExecute q -\u003e [q] -\u003e IO Int64",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple executeMany function Note that no instances are required for because the QExecute type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "executeMany",
          "normalized": "Connection-\u003eQExecute a-\u003e[a]-\u003eIO Int",
          "package": "mysql-simple-quasi",
          "partial": "Many",
          "signature": "Connection-\u003eQExecute q-\u003e[q]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:executeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eexecute_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "execute_",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QExecute_ -\u003e IO Int64",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple execute function",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "execute_",
          "normalized": "Connection-\u003eQExecute_-\u003eIO Int",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQExecute_-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:execute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the query.  This loses all the type safety\n of the original query and the whole point of using the library,\n but presumably you know what you're doing.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "extractQuery",
          "package": "mysql-simple-quasi",
          "signature": "q -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "Extracts the query This loses all the type safety of the original query and the whole point of using the library but presumably you know what you re doing",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "extractQuery",
          "normalized": "a-\u003eString",
          "package": "mysql-simple-quasi",
          "partial": "Query",
          "signature": "q-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:extractQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "fold",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery q r -\u003e q -\u003e a -\u003e (a -\u003e r -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple fold function Note that no instances are required for or because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "fold",
          "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003ec-\u003e(c-\u003eb-\u003eIO c)-\u003eIO c",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQQuery q r-\u003eq-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003efold_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "fold_",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery_ r -\u003e a -\u003e (a -\u003e r -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple fold function Note that no instances are required for because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "fold_",
          "normalized": "Connection-\u003eQQuery_ a-\u003eb-\u003e(b-\u003ea-\u003eIO b)-\u003eIO b",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQQuery_ r-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:fold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eforEach\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "forEach",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery q r -\u003e q -\u003e (r -\u003e IO ()) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple forEach function Note that no instances are required for or because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "forEach",
          "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "mysql-simple-quasi",
          "partial": "Each",
          "signature": "Connection-\u003eQQuery q r-\u003eq-\u003e(r-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:forEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003eforEach_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "forEach_",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery_ r -\u003e (r -\u003e IO ()) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple forEach function Note that no instances are required for because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "forEach_",
          "normalized": "Connection-\u003eQQuery_ a-\u003e(a-\u003eIO())-\u003eIO()",
          "package": "mysql-simple-quasi",
          "partial": "Each",
          "signature": "Connection-\u003eQQuery_ r-\u003e(r-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:forEach_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eqquery\u003c/a\u003e\u003c/code\u003e, except that it produces a query of type QExecute/QExecute_\n instead of QQuery/QQuery_, and it gives an error if there are any result annotations\n (since executes don't return any results).\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "qexec",
          "package": "mysql-simple-quasi",
          "signature": "QuasiQuoter",
          "type": "function"
        },
        "index": {
          "description": "Same as qquery except that it produces query of type QExecute QExecute instead of QQuery QQuery and it gives an error if there are any result annotations since executes don return any results",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "qexec",
          "package": "mysql-simple-quasi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:qexec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quasi-quoter that takes the param and result types from the query\n string and generates a typed query.  For example:\n\u003c/p\u003e\u003cpre\u003e [qquery|select * from users|]\n\u003c/pre\u003e\u003cp\u003ewill turn into an expression of type \u003ccode\u003eQueryResults r =\u003e QQuery_ r\u003c/code\u003e.\n This is not particularly useful.  However, this:\n\u003c/p\u003e\u003cpre\u003e [qquery|select id{Int32}, name{String} from users|]\n\u003c/pre\u003e\u003cp\u003ebecomes \u003ccode\u003eQQuery_ (Int32, String)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFurthermore, this:\n\u003c/p\u003e\u003cpre\u003e [qquery|select id{Int32} from users where name = ?{String}|]\n\u003c/pre\u003e\u003cp\u003ebecomes: \u003ccode\u003eQQuery String Int32\u003c/code\u003e.  And this:\n\u003c/p\u003e\u003cpre\u003e [qquery| select a.*{Int, Maybe String, String}, b.value{Double}\n            from a inner join b on a.id = b.id\n            where a.name = ?{String} and b.num = ?{Int}|]\n\u003c/pre\u003e\u003cp\u003ebecomes: \u003ccode\u003eQQuery (String, Int) (Int, Maybe String, String, Double)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Any non-escaped question mark in the String is taken to be one\n   substitution.  It is given type \u003ccode\u003eQueryParam a =\u003e a\u003c/code\u003e unless it is\n   followed immediately (no spaces) by curly brackets with a type in it,\n   in which case it uses that type.\n\u003c/li\u003e\u003cli\u003e A question mark preceded by a backslash is turned into a single question mark.\n\u003c/li\u003e\u003cli\u003e To insert an actual backslash, use double backslash.\n\u003c/li\u003e\u003cli\u003e Any other instances of curly brackets in the String are taken to\n   be a comma-separated list of result types, which are all tupled\n   (in the order they appear in the String) into a single result type.\n   To get a literal curly bracket, put a backslash before it.\n\u003c/li\u003e\u003cli\u003e If there is only a single substitution or single result, \u003ccode\u003eOnly\u003c/code\u003e is automatically added/removed\n   when passing it through to the mysql-simple library.\n\u003c/li\u003e\u003cli\u003e If there is no \u003ccode\u003e?\u003c/code\u003e substitution in the query, the resulting type is \u003ccode\u003eQQuery_ r\u003c/code\u003e.  If there are\n   substitutions, the resulting type is \u003ccode\u003eQQuery q r\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "qquery",
          "package": "mysql-simple-quasi",
          "signature": "QuasiQuoter",
          "type": "function"
        },
        "index": {
          "description": "quasi-quoter that takes the param and result types from the query string and generates typed query For example qquery select from users will turn into an expression of type QueryResults QQuery This is not particularly useful However this qquery select id Int32 name String from users becomes QQuery Int32 String Furthermore this qquery select id Int32 from users where name String becomes QQuery String Int32 And this qquery select Int Maybe String String b.value Double from inner join on a.id b.id where a.name String and b.num Int becomes QQuery String Int Int Maybe String String Double In general Any non-escaped question mark in the String is taken to be one substitution It is given type QueryParam unless it is followed immediately no spaces by curly brackets with type in it in which case it uses that type question mark preceded by backslash is turned into single question mark To insert an actual backslash use double backslash Any other instances of curly brackets in the String are taken to be comma-separated list of result types which are all tupled in the order they appear in the String into single result type To get literal curly bracket put backslash before it If there is only single substitution or single result Only is automatically added removed when passing it through to the mysql-simple library If there is no substitution in the query the resulting type is QQuery If there are substitutions the resulting type is QQuery",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "qquery",
          "package": "mysql-simple-quasi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:qquery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003eq\u003c/code\u003e or \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "query",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery q r -\u003e q -\u003e IO [r]",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple query function Note that no instances are required for or because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "query",
          "normalized": "Connection-\u003eQQuery a b-\u003ea-\u003eIO[b]",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQQuery q r-\u003eq-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper\n for mysql-simple's \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that no instances are required for \u003ccode\u003er\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eQQuery_\u003c/a\u003e\u003c/code\u003e type\n witnesses them at its construction.\n\u003c/p\u003e",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "query_",
          "package": "mysql-simple-quasi",
          "signature": "Connection -\u003e QQuery_ r -\u003e IO [r]",
          "type": "function"
        },
        "index": {
          "description": "wrapper for mysql-simple query function Note that no instances are required for because the QQuery type witnesses them at its construction",
          "hierarchy": "Database MySQL Simple Quasi",
          "module": "Database.MySQL.Simple.Quasi",
          "name": "query_",
          "normalized": "Connection-\u003eQQuery_ a-\u003eIO[a]",
          "package": "mysql-simple-quasi",
          "signature": "Connection-\u003eQQuery_ r-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysql-simple-quasi/docs/Database-MySQL-Simple-Quasi.html#v:query_"
      }
    }
  ]
]