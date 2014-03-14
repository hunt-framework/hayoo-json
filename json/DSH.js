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
        "word": "DSH"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDSH compiler module exposes the function fromQ that can be used to\n execute DSH programs on a database. It transform the DSH program into\n FerryCore which is then translated into SQL (through a table algebra). The SQL\n code is executed on the database and then processed to form a Haskell value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.DSH.Compiler",
          "name": "Compiler",
          "package": "DSH",
          "source": "src/Database-DSH-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "DSH compiler module exposes the function fromQ that can be used to execute DSH programs on database It transform the DSH program into FerryCore which is then translated into SQL through table algebra The SQL code is executed on the database and then processed to form Haskell value",
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "Compiler",
          "package": "DSH",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH.Compiler",
          "name": "debugCore",
          "package": "DSH",
          "signature": "conn -\u003e Exp a -\u003e IO String",
          "source": "src/Database-DSH-Compiler.html#debugCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "debugCore",
          "normalized": "a-\u003eExp b-\u003eIO String",
          "package": "DSH",
          "partial": "Core",
          "signature": "conn-\u003eExp a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH.Compiler",
          "name": "debugCoreDot",
          "package": "DSH",
          "signature": "conn -\u003e Exp a -\u003e IO String",
          "source": "src/Database-DSH-Compiler.html#debugCoreDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "debugCoreDot",
          "normalized": "a-\u003eExp b-\u003eIO String",
          "package": "DSH",
          "partial": "Core Dot",
          "signature": "conn-\u003eExp a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugCoreDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the query into unoptimised algebraic plan\n\u003c/p\u003e",
          "module": "Database.DSH.Compiler",
          "name": "debugPlan",
          "package": "DSH",
          "signature": "conn -\u003e Exp a -\u003e IO String",
          "source": "src/Database-DSH-Compiler.html#debugPlan",
          "type": "function"
        },
        "index": {
          "description": "Convert the query into unoptimised algebraic plan",
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "debugPlan",
          "normalized": "a-\u003eExp b-\u003eIO String",
          "package": "DSH",
          "partial": "Plan",
          "signature": "conn-\u003eExp a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the query into optimised algebraic plan\n\u003c/p\u003e",
          "module": "Database.DSH.Compiler",
          "name": "debugPlanOpt",
          "package": "DSH",
          "signature": "conn -\u003e Exp a -\u003e IO String",
          "source": "src/Database-DSH-Compiler.html#debugPlanOpt",
          "type": "function"
        },
        "index": {
          "description": "Convert the query into optimised algebraic plan",
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "debugPlanOpt",
          "normalized": "a-\u003eExp b-\u003eIO String",
          "package": "DSH",
          "partial": "Plan Opt",
          "signature": "conn-\u003eExp a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugPlanOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the query into SQL\n\u003c/p\u003e",
          "module": "Database.DSH.Compiler",
          "name": "debugSQL",
          "package": "DSH",
          "signature": "conn -\u003e Exp a -\u003e IO String",
          "source": "src/Database-DSH-Compiler.html#debugSQL",
          "type": "function"
        },
        "index": {
          "description": "Convert the query into SQL",
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "debugSQL",
          "normalized": "a-\u003eExp b-\u003eIO String",
          "package": "DSH",
          "partial": "SQL",
          "signature": "conn-\u003eExp a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugSQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the query on the database\n\u003c/p\u003e",
          "module": "Database.DSH.Compiler",
          "name": "fromQ",
          "package": "DSH",
          "signature": "conn -\u003e Q a -\u003e IO a",
          "source": "src/Database-DSH-Compiler.html#fromQ",
          "type": "function"
        },
        "index": {
          "description": "Execute the query on the database",
          "hierarchy": "Database DSH Compiler",
          "module": "Database.DSH.Compiler",
          "name": "fromQ",
          "normalized": "a-\u003eQ b-\u003eIO b",
          "package": "DSH",
          "signature": "conn-\u003eQ a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:fromQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the reference implementation of DSH by interpreting\n the embedded representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.DSH.Interpreter",
          "name": "Interpreter",
          "package": "DSH",
          "source": "src/Database-DSH-Interpreter.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the reference implementation of DSH by interpreting the embedded representation",
          "hierarchy": "Database DSH Interpreter",
          "module": "Database.DSH.Interpreter",
          "name": "Interpreter",
          "package": "DSH",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH.Interpreter",
          "name": "fromQ",
          "package": "DSH",
          "signature": "conn -\u003e Q a -\u003e IO a",
          "source": "src/Database-DSH-Interpreter.html#fromQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH Interpreter",
          "module": "Database.DSH.Interpreter",
          "name": "fromQ",
          "normalized": "a-\u003eQ b-\u003eIO b",
          "package": "DSH",
          "signature": "conn-\u003eQ a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Interpreter.html#v:fromQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name clashes\n with \u003ca\u003ePrelude\u003c/a\u003e functions. For example:\n\u003c/p\u003e\u003cpre\u003e import qualified Database.DSH as Q\n import Database.DSH (Q)\n\u003c/pre\u003e\u003cp\u003eAlternatively you can hide \u003ca\u003ePrelude\u003c/a\u003e and import this module like this:\n\u003c/p\u003e\u003cpre\u003e import Prelude ()\n import Database.DSH\n\u003c/pre\u003e\u003cp\u003eIn this case you still get Prelude definitions that are not provided\n by Database.DSH.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.DSH",
          "name": "DSH",
          "package": "DSH",
          "source": "src/Database-DSH.html",
          "type": "module"
        },
        "index": {
          "description": "This module is intended to be imported qualified to avoid name clashes with Prelude functions For example import qualified Database.DSH as import Database.DSH Alternatively you can hide Prelude and import this module like this import Prelude import Database.DSH In this case you still get Prelude definitions that are not provided by Database.DSH",
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "DSH",
          "package": "DSH",
          "partial": "DSH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "Elim",
          "package": "DSH",
          "source": "src/Database-DSH-Internals.html#Elim",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "Elim",
          "package": "DSH",
          "partial": "Elim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:Elim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "Q",
          "package": "DSH",
          "source": "src/Database-DSH-Internals.html#Q",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "Q",
          "package": "DSH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "QA",
          "package": "DSH",
          "source": "src/Database-DSH-Internals.html#QA",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "QA",
          "package": "DSH",
          "partial": "QA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:QA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "TA",
          "package": "DSH",
          "source": "src/Database-DSH-Internals.html#TA",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "TA",
          "package": "DSH",
          "partial": "TA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:TA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "View",
          "package": "DSH",
          "source": "src/Database-DSH-Internals.html#View",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "View",
          "package": "DSH",
          "partial": "View",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(||)",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q Bool -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(||) ||",
          "normalized": "Q Bool-\u003eQ Bool-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q Bool-\u003eQ Bool-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(|\u003e)",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(|\u003e) |\u003e",
          "normalized": "Q[a]-\u003eQ a-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(!!)",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q Integer -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#%21%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(!!) !!",
          "normalized": "Q[a]-\u003eQ Integer-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ Integer-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(&&)",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q Bool -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(&&) &&",
          "normalized": "Q Bool-\u003eQ Bool-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q Bool-\u003eQ Bool-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(++)",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(++) ++",
          "normalized": "Q[a]-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(/=)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(/=) /=",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003c)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003c) \u003c",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003c|)",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003c|) \u003c|",
          "normalized": "Q a-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q a-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003c=)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003c=) \u003c=",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(==)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(==) ==",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003e)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003e) \u003e",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003e=)",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003e=) \u003e=",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003e\u003e)",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [b] -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "Q[a]-\u003eQ[b]-\u003eQ[b]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[b]-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(\u003e\u003e=)",
          "package": "DSH",
          "signature": "Q [a] -\u003e (Q a -\u003e Q [b]) -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "Q[a]-\u003e(Q a-\u003eQ[b])-\u003eQ[b]",
          "package": "DSH",
          "signature": "Q[a]-\u003e(Q a-\u003eQ[b])-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "(?)",
          "package": "DSH",
          "signature": "Q Bool -\u003e (Q a, Q a) -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "(?) ?",
          "normalized": "Q Bool-\u003e(Q a,Q a)-\u003eQ a",
          "package": "DSH",
          "signature": "Q Bool-\u003e(Q a,Q a)-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "all",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "all",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
          "package": "DSH",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "and",
          "package": "DSH",
          "signature": "Q [Bool] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "and",
          "normalized": "Q[Bool]-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q[Bool]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "any",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "any",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
          "package": "DSH",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "append",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "append",
          "normalized": "Q[a]-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "bool",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "bool",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool-\u003eQ a",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "break",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q ([a], [a])",
          "source": "src/Database-DSH-Externals.html#break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "break",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
          "package": "DSH",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "catMaybes",
          "package": "DSH",
          "signature": "Q [Maybe a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#catMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "catMaybes",
          "normalized": "Q[Maybe a]-\u003eQ[a]",
          "package": "DSH",
          "partial": "Maybes",
          "signature": "Q[Maybe a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "concat",
          "package": "DSH",
          "signature": "Q [[a]] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "concat",
          "normalized": "Q[[a]]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[[a]]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "concatMap",
          "package": "DSH",
          "signature": "(Q a -\u003e Q [b]) -\u003e Q [a] -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "concatMap",
          "normalized": "(Q a-\u003eQ[b])-\u003eQ[a]-\u003eQ[b]",
          "package": "DSH",
          "partial": "Map",
          "signature": "(Q a-\u003eQ[b])-\u003eQ[a]-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "cond",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q a -\u003e Q a -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#cond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "cond",
          "normalized": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
          "package": "DSH",
          "signature": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "cons",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "cons",
          "normalized": "Q a-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q a-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveDSH",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveDSH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveDSH",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "DSH",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveDSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveElim",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveElim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveElim",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Elim",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveElim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveQA",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveQA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveQA",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "QA",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveQA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveSmartConstructors",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveSmartConstructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveSmartConstructors",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Smart Constructors",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveSmartConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveTA",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveTA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveTA",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "TA",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveTupleRangeQA",
          "package": "DSH",
          "signature": "Int -\u003e Int -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveTupleRangeQA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveTupleRangeQA",
          "normalized": "Int-\u003eInt-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Tuple Range QA",
          "signature": "Int-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeQA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveTupleRangeSmartConstructors",
          "package": "DSH",
          "signature": "Int -\u003e Int -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveTupleRangeSmartConstructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveTupleRangeSmartConstructors",
          "normalized": "Int-\u003eInt-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Tuple Range Smart Constructors",
          "signature": "Int-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeSmartConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveTupleRangeTA",
          "package": "DSH",
          "signature": "Int -\u003e Int -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveTupleRangeTA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveTupleRangeTA",
          "normalized": "Int-\u003eInt-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Tuple Range TA",
          "signature": "Int-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveTupleRangeView",
          "package": "DSH",
          "signature": "Int -\u003e Int -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveTupleRangeView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveTupleRangeView",
          "normalized": "Int-\u003eInt-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "Tuple Range View",
          "signature": "Int-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "deriveView",
          "package": "DSH",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Database-DSH-TH.html#deriveView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "deriveView",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "DSH",
          "partial": "View",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "drop",
          "package": "DSH",
          "signature": "Q Integer -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "drop",
          "normalized": "Q Integer-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q Integer-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "dropWhile",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "dropWhile",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "partial": "While",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "either",
          "package": "DSH",
          "signature": "(Q a -\u003e Q c) -\u003e (Q b -\u003e Q c) -\u003e Q (Either a b) -\u003e Q c",
          "source": "src/Database-DSH-Externals.html#either",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "either",
          "normalized": "(Q a-\u003eQ b)-\u003e(Q c-\u003eQ b)-\u003eQ(Either a c)-\u003eQ b",
          "package": "DSH",
          "signature": "(Q a-\u003eQ c)-\u003e(Q b-\u003eQ c)-\u003eQ(Either a b)-\u003eQ c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "eitherToPair",
          "package": "DSH",
          "signature": "Q (Either a b) -\u003e Q ([a], [b])",
          "source": "src/Database-DSH-Externals.html#eitherToPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "eitherToPair",
          "normalized": "Q(Either a b)-\u003eQ([a],[b])",
          "package": "DSH",
          "partial": "To Pair",
          "signature": "Q(Either a b)-\u003eQ([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:eitherToPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "elem",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "elem",
          "normalized": "Q a-\u003eQ[a]-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ[a]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "elim",
          "package": "DSH",
          "signature": "Q a -\u003e Eliminator a r",
          "source": "src/Database-DSH-Internals.html#elim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "elim",
          "normalized": "Q a-\u003eEliminator a b",
          "package": "DSH",
          "signature": "Q a-\u003eEliminator a r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:elim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "empty",
          "package": "DSH",
          "signature": "Q [a]",
          "source": "src/Database-DSH-Externals.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "empty",
          "normalized": "Q[a]",
          "package": "DSH",
          "signature": "Q[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "eq",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "eq",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "false",
          "package": "DSH",
          "signature": "Q Bool",
          "source": "src/Database-DSH-Externals.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "false",
          "package": "DSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "filter",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "filter",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "fromJust",
          "package": "DSH",
          "signature": "Q (Maybe a) -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#fromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "fromJust",
          "normalized": "Q(Maybe a)-\u003eQ a",
          "package": "DSH",
          "partial": "Just",
          "signature": "Q(Maybe a)-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "fromMaybe",
          "package": "DSH",
          "signature": "Q a -\u003e Q (Maybe a) -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#fromMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "fromMaybe",
          "normalized": "Q a-\u003eQ(Maybe a)-\u003eQ a",
          "package": "DSH",
          "partial": "Maybe",
          "signature": "Q a-\u003eQ(Maybe a)-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "fst",
          "package": "DSH",
          "signature": "Q (a, b) -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#fst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "fst",
          "normalized": "Q(a,b)-\u003eQ a",
          "package": "DSH",
          "signature": "Q(a,b)-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "groupWith",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [[a]]",
          "source": "src/Database-DSH-Externals.html#groupWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "groupWith",
          "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[[a]]",
          "package": "DSH",
          "partial": "With",
          "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:groupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "groupWithKey",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [(b, [a])]",
          "source": "src/Database-DSH-Externals.html#groupWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "groupWithKey",
          "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[(b,[a])]",
          "package": "DSH",
          "partial": "With Key",
          "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[(b,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:groupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "gt",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#gt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "gt",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "gte",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#gte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "gte",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:gte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "guard",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q [()]",
          "source": "src/Database-DSH-Externals.html#guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "guard",
          "normalized": "Q Bool-\u003eQ[()]",
          "package": "DSH",
          "signature": "Q Bool-\u003eQ[()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "head",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "head",
          "normalized": "Q[a]-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "ifThenElse",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q a -\u003e Q a -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "ifThenElse",
          "normalized": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
          "package": "DSH",
          "partial": "Then Else",
          "signature": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "index",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q Integer -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "index",
          "normalized": "Q[a]-\u003eQ Integer-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ Integer-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "init",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "init",
          "normalized": "Q[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "integerToDouble",
          "package": "DSH",
          "signature": "Q Integer -\u003e Q Double",
          "source": "src/Database-DSH-Externals.html#integerToDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "integerToDouble",
          "normalized": "Q Integer-\u003eQ Double",
          "package": "DSH",
          "partial": "To Double",
          "signature": "Q Integer-\u003eQ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:integerToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "isJust",
          "package": "DSH",
          "signature": "Q (Maybe a) -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#isJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "isJust",
          "normalized": "Q(Maybe a)-\u003eQ Bool",
          "package": "DSH",
          "partial": "Just",
          "signature": "Q(Maybe a)-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "isLeft",
          "package": "DSH",
          "signature": "Q (Either a b) -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#isLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "isLeft",
          "normalized": "Q(Either a b)-\u003eQ Bool",
          "package": "DSH",
          "partial": "Left",
          "signature": "Q(Either a b)-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "isNothing",
          "package": "DSH",
          "signature": "Q (Maybe a) -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#isNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "isNothing",
          "normalized": "Q(Maybe a)-\u003eQ Bool",
          "package": "DSH",
          "partial": "Nothing",
          "signature": "Q(Maybe a)-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "isRight",
          "package": "DSH",
          "signature": "Q (Either a b) -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#isRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "isRight",
          "normalized": "Q(Either a b)-\u003eQ Bool",
          "package": "DSH",
          "partial": "Right",
          "signature": "Q(Either a b)-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "just",
          "package": "DSH",
          "signature": "Q a -\u003e Q (Maybe a)",
          "source": "src/Database-DSH-Externals.html#just",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "just",
          "normalized": "Q a-\u003eQ(Maybe a)",
          "package": "DSH",
          "signature": "Q a-\u003eQ(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "last",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "last",
          "normalized": "Q[a]-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "left",
          "package": "DSH",
          "signature": "Q a -\u003e Q (Either a b)",
          "source": "src/Database-DSH-Externals.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "left",
          "normalized": "Q a-\u003eQ(Either a b)",
          "package": "DSH",
          "signature": "Q a-\u003eQ(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "lefts",
          "package": "DSH",
          "signature": "Q [Either a b] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#lefts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "lefts",
          "normalized": "Q[Either a b]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[Either a b]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "length",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q Integer",
          "source": "src/Database-DSH-Externals.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "length",
          "normalized": "Q[a]-\u003eQ Integer",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "listToMaybe",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q (Maybe a)",
          "source": "src/Database-DSH-Externals.html#listToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "listToMaybe",
          "normalized": "Q[a]-\u003eQ(Maybe a)",
          "package": "DSH",
          "partial": "To Maybe",
          "signature": "Q[a]-\u003eQ(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "lookup",
          "package": "DSH",
          "signature": "Q a -\u003e Q [(a, b)] -\u003e Q (Maybe b)",
          "source": "src/Database-DSH-Externals.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "lookup",
          "normalized": "Q a-\u003eQ[(a,b)]-\u003eQ(Maybe b)",
          "package": "DSH",
          "signature": "Q a-\u003eQ[(a,b)]-\u003eQ(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "lt",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#lt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "lt",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "lte",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#lte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "lte",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "map",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "map",
          "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[b]",
          "package": "DSH",
          "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "mapMaybe",
          "package": "DSH",
          "signature": "(Q a -\u003e Q (Maybe b)) -\u003e Q [a] -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "mapMaybe",
          "normalized": "(Q a-\u003eQ(Maybe b))-\u003eQ[a]-\u003eQ[b]",
          "package": "DSH",
          "partial": "Maybe",
          "signature": "(Q a-\u003eQ(Maybe b))-\u003eQ[a]-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "max",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "max",
          "normalized": "Q a-\u003eQ a-\u003eQ a",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "maximum",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "maximum",
          "normalized": "Q[a]-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "maybe",
          "package": "DSH",
          "signature": "Q b -\u003e (Q a -\u003e Q b) -\u003e Q (Maybe a) -\u003e Q b",
          "source": "src/Database-DSH-Externals.html#maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "maybe",
          "normalized": "Q a-\u003e(Q b-\u003eQ a)-\u003eQ(Maybe b)-\u003eQ a",
          "package": "DSH",
          "signature": "Q b-\u003e(Q a-\u003eQ b)-\u003eQ(Maybe a)-\u003eQ b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "maybeToList",
          "package": "DSH",
          "signature": "Q (Maybe a) -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#maybeToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "maybeToList",
          "normalized": "Q(Maybe a)-\u003eQ[a]",
          "package": "DSH",
          "partial": "To List",
          "signature": "Q(Maybe a)-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "min",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "min",
          "normalized": "Q a-\u003eQ a-\u003eQ a",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "minimum",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "minimum",
          "normalized": "Q[a]-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "mzip",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [b] -\u003e Q [(a, b)]",
          "source": "src/Database-DSH-Externals.html#mzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "mzip",
          "normalized": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:mzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "neq",
          "package": "DSH",
          "signature": "Q a -\u003e Q a -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#neq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "neq",
          "normalized": "Q a-\u003eQ a-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q a-\u003eQ a-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:neq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "nil",
          "package": "DSH",
          "signature": "Q [a]",
          "source": "src/Database-DSH-Externals.html#nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "nil",
          "normalized": "Q[a]",
          "package": "DSH",
          "signature": "Q[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "not",
          "package": "DSH",
          "signature": "Q Bool -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#not",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "not",
          "normalized": "Q Bool-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q Bool-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "notElem",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "notElem",
          "normalized": "Q a-\u003eQ[a]-\u003eQ Bool",
          "package": "DSH",
          "partial": "Elem",
          "signature": "Q a-\u003eQ[a]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "nothing",
          "package": "DSH",
          "signature": "Q (Maybe a)",
          "source": "src/Database-DSH-Externals.html#nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "nothing",
          "package": "DSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "nub",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#nub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "nub",
          "normalized": "Q[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "null",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "null",
          "normalized": "Q[a]-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "or",
          "package": "DSH",
          "signature": "Q [Bool] -\u003e Q Bool",
          "source": "src/Database-DSH-Externals.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "or",
          "normalized": "Q[Bool]-\u003eQ Bool",
          "package": "DSH",
          "signature": "Q[Bool]-\u003eQ Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "pair",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q (a, b)",
          "source": "src/Database-DSH-Externals.html#pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "pair",
          "normalized": "Q a-\u003eQ b-\u003eQ(a,b)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "pairToEither",
          "package": "DSH",
          "signature": "Q ([a], [b]) -\u003e Q (Either a b)",
          "source": "src/Database-DSH-Externals.html#pairToEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "pairToEither",
          "normalized": "Q([a],[b])-\u003eQ(Either a b)",
          "package": "DSH",
          "partial": "To Either",
          "signature": "Q([a],[b])-\u003eQ(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:pairToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "partitionEithers",
          "package": "DSH",
          "signature": "Q [Either a b] -\u003e Q ([a], [b])",
          "source": "src/Database-DSH-Externals.html#partitionEithers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "partitionEithers",
          "normalized": "Q[Either a b]-\u003eQ([a],[b])",
          "package": "DSH",
          "partial": "Eithers",
          "signature": "Q[Either a b]-\u003eQ([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:partitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "return",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "return",
          "normalized": "Q a-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q a-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "reverse",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "reverse",
          "normalized": "Q[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "right",
          "package": "DSH",
          "signature": "Q b -\u003e Q (Either a b)",
          "source": "src/Database-DSH-Externals.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "right",
          "normalized": "Q a-\u003eQ(Either b a)",
          "package": "DSH",
          "signature": "Q b-\u003eQ(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "rights",
          "package": "DSH",
          "signature": "Q [Either a b] -\u003e Q [b]",
          "source": "src/Database-DSH-Externals.html#rights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "rights",
          "normalized": "Q[Either a b]-\u003eQ[b]",
          "package": "DSH",
          "signature": "Q[Either a b]-\u003eQ[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "singleton",
          "package": "DSH",
          "signature": "Q a -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "singleton",
          "normalized": "Q a-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q a-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "snd",
          "package": "DSH",
          "signature": "Q (a, b) -\u003e Q b",
          "source": "src/Database-DSH-Externals.html#snd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "snd",
          "normalized": "Q(a,b)-\u003eQ b",
          "package": "DSH",
          "signature": "Q(a,b)-\u003eQ b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "snoc",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "snoc",
          "normalized": "Q[a]-\u003eQ a-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "sortWith",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#sortWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "sortWith",
          "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "partial": "With",
          "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:sortWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "span",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q ([a], [a])",
          "source": "src/Database-DSH-Externals.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "span",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
          "package": "DSH",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "splitAt",
          "package": "DSH",
          "signature": "Q Integer -\u003e Q [a] -\u003e Q ([a], [a])",
          "source": "src/Database-DSH-Externals.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "splitAt",
          "normalized": "Q Integer-\u003eQ[a]-\u003eQ([a],[a])",
          "package": "DSH",
          "partial": "At",
          "signature": "Q Integer-\u003eQ[a]-\u003eQ([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "sum",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "sum",
          "normalized": "Q[a]-\u003eQ a",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "table",
          "package": "DSH",
          "signature": "String -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "table",
          "normalized": "String-\u003eQ[a]",
          "package": "DSH",
          "signature": "String-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tableCSV",
          "package": "DSH",
          "signature": "String -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#tableCSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tableCSV",
          "normalized": "String-\u003eQ[a]",
          "package": "DSH",
          "partial": "CSV",
          "signature": "String-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tableDB",
          "package": "DSH",
          "signature": "String -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#tableDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tableDB",
          "normalized": "String-\u003eQ[a]",
          "package": "DSH",
          "partial": "DB",
          "signature": "String-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tableWithKeys",
          "package": "DSH",
          "signature": "String -\u003e [[String]] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#tableWithKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tableWithKeys",
          "normalized": "String-\u003e[[String]]-\u003eQ[a]",
          "package": "DSH",
          "partial": "With Keys",
          "signature": "String-\u003e[[String]]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableWithKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tail",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tail",
          "normalized": "Q[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "take",
          "package": "DSH",
          "signature": "Q Integer -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "take",
          "normalized": "Q Integer-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "signature": "Q Integer-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "takeWhile",
          "package": "DSH",
          "signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
          "source": "src/Database-DSH-Externals.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "takeWhile",
          "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "package": "DSH",
          "partial": "While",
          "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "toQ",
          "package": "DSH",
          "signature": "a -\u003e Q a",
          "source": "src/Database-DSH-Externals.html#toQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "toQ",
          "normalized": "a-\u003eQ a",
          "package": "DSH",
          "signature": "a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:toQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "triple",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q (a, b, c)",
          "source": "src/Database-DSH-Externals.html#triple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "triple",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ(a,b,c)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "true",
          "package": "DSH",
          "signature": "Q Bool",
          "source": "src/Database-DSH-Externals.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "true",
          "package": "DSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple2",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q ((,) a b)",
          "source": "src/Database-DSH-Externals.html#tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple2",
          "normalized": "Q a-\u003eQ b-\u003eQ((,)a b)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ((,)a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple3",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q ((,,) a b c)",
          "source": "src/Database-DSH-Externals.html#tuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple3",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ((,,)a b c)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ((,,)a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple4",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q ((,,,) a b c d)",
          "source": "src/Database-DSH-Externals.html#tuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple4",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ((,,,)a b c d)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ((,,,)a b c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple5",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q ((,,,,) a b c d e)",
          "source": "src/Database-DSH-Externals.html#tuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple5",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ((,,,,)a b c d e)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ((,,,,)a b c d e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple6",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q f -\u003e Q ((,,,,,) a b c d e f)",
          "source": "src/Database-DSH-Externals.html#tuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple6",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ((,,,,,)a b c d e f)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ((,,,,,)a b c d e f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "tuple7",
          "package": "DSH",
          "signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q f -\u003e Q g -\u003e Q ((,,,,,,) a b c d e f g)",
          "source": "src/Database-DSH-Externals.html#tuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "tuple7",
          "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ g-\u003eQ((,,,,,,)a b c d e f g)",
          "package": "DSH",
          "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ g-\u003eQ((,,,,,,)a b c d e f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "unit",
          "package": "DSH",
          "signature": "Q ()",
          "source": "src/Database-DSH-Externals.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "unit",
          "normalized": "Q()",
          "package": "DSH",
          "signature": "Q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "unzip",
          "package": "DSH",
          "signature": "Q [(a, b)] -\u003e Q ([a], [b])",
          "source": "src/Database-DSH-Externals.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "unzip",
          "normalized": "Q[(a,b)]-\u003eQ([a],[b])",
          "package": "DSH",
          "signature": "Q[(a,b)]-\u003eQ([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "unzip3",
          "package": "DSH",
          "signature": "Q [(a, b, c)] -\u003e Q ([a], [b], [c])",
          "source": "src/Database-DSH-Externals.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "unzip3",
          "normalized": "Q[(a,b,c)]-\u003eQ([a],[b],[c])",
          "package": "DSH",
          "signature": "Q[(a,b,c)]-\u003eQ([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "view",
          "package": "DSH",
          "signature": "a -\u003e ToView a",
          "source": "src/Database-DSH-Internals.html#view",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "view",
          "normalized": "a-\u003eToView a",
          "package": "DSH",
          "signature": "a-\u003eToView a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "zip",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [b] -\u003e Q [(a, b)]",
          "source": "src/Database-DSH-Externals.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "zip",
          "normalized": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "zip3",
          "package": "DSH",
          "signature": "Q [a] -\u003e Q [b] -\u003e Q [c] -\u003e Q [(a, b, c)]",
          "source": "src/Database-DSH-Externals.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "zip3",
          "normalized": "Q[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[(a,b,c)]",
          "package": "DSH",
          "signature": "Q[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "zipWith",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b -\u003e Q c) -\u003e Q [a] -\u003e Q [b] -\u003e Q [c]",
          "source": "src/Database-DSH-Externals.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "zipWith",
          "normalized": "(Q a-\u003eQ b-\u003eQ c)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]",
          "package": "DSH",
          "partial": "With",
          "signature": "(Q a-\u003eQ b-\u003eQ c)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.DSH",
          "name": "zipWith3",
          "package": "DSH",
          "signature": "(Q a -\u003e Q b -\u003e Q c -\u003e Q d) -\u003e Q [a] -\u003e Q [b] -\u003e Q [c] -\u003e Q [d]",
          "source": "src/Database-DSH-Externals.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database DSH",
          "module": "Database.DSH",
          "name": "zipWith3",
          "normalized": "(Q a-\u003eQ b-\u003eQ c-\u003eQ d)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[d]",
          "package": "DSH",
          "partial": "With",
          "signature": "(Q a-\u003eQ b-\u003eQ c-\u003eQ d)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zipWith3"
      }
    }
  ]
]