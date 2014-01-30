[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDSH compiler module exposes the function fromQ that can be used to\n execute DSH programs on a database. It transform the DSH program into\n FerryCore which is then translated into SQL (through a table algebra). The SQL\n code is executed on the database and then processed to form a Haskell value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "module",
        "fct-source": "src/Database-DSH-Compiler.html",
        "fct-type": "module",
        "title": "Compiler"
      },
      "index": {
        "description": "DSH compiler module exposes the function fromQ that can be used to execute DSH programs on database It transform the DSH program into FerryCore which is then translated into SQL through table algebra The SQL code is executed on the database and then processed to form Haskell value",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "DSH",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugCore",
      "description": {
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Exp a -\u003e IO String",
        "fct-source": "src/Database-DSH-Compiler.html#debugCore",
        "fct-type": "function",
        "title": "debugCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "debugCore",
        "normalized": "a-\u003eExp b-\u003eIO String",
        "package": "DSH",
        "partial": "Core",
        "signature": "conn-\u003eExp a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugCoreDot",
      "description": {
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Exp a -\u003e IO String",
        "fct-source": "src/Database-DSH-Compiler.html#debugCoreDot",
        "fct-type": "function",
        "title": "debugCoreDot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "debugCoreDot",
        "normalized": "a-\u003eExp b-\u003eIO String",
        "package": "DSH",
        "partial": "Core Dot",
        "signature": "conn-\u003eExp a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugPlan",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the query into unoptimised algebraic plan\n\u003c/p\u003e",
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Exp a -\u003e IO String",
        "fct-source": "src/Database-DSH-Compiler.html#debugPlan",
        "fct-type": "function",
        "title": "debugPlan"
      },
      "index": {
        "description": "Convert the query into unoptimised algebraic plan",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "debugPlan",
        "normalized": "a-\u003eExp b-\u003eIO String",
        "package": "DSH",
        "partial": "Plan",
        "signature": "conn-\u003eExp a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugPlanOpt",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the query into optimised algebraic plan\n\u003c/p\u003e",
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Exp a -\u003e IO String",
        "fct-source": "src/Database-DSH-Compiler.html#debugPlanOpt",
        "fct-type": "function",
        "title": "debugPlanOpt"
      },
      "index": {
        "description": "Convert the query into optimised algebraic plan",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "debugPlanOpt",
        "normalized": "a-\u003eExp b-\u003eIO String",
        "package": "DSH",
        "partial": "Plan Opt",
        "signature": "conn-\u003eExp a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:debugSQL",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the query into SQL\n\u003c/p\u003e",
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Exp a -\u003e IO String",
        "fct-source": "src/Database-DSH-Compiler.html#debugSQL",
        "fct-type": "function",
        "title": "debugSQL"
      },
      "index": {
        "description": "Convert the query into SQL",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "debugSQL",
        "normalized": "a-\u003eExp b-\u003eIO String",
        "package": "DSH",
        "partial": "SQL",
        "signature": "conn-\u003eExp a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Compiler.html#v:fromQ",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the query on the database\n\u003c/p\u003e",
        "fct-module": "Database.DSH.Compiler",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Q a -\u003e IO a",
        "fct-source": "src/Database-DSH-Compiler.html#fromQ",
        "fct-type": "function",
        "title": "fromQ"
      },
      "index": {
        "description": "Execute the query on the database",
        "hierarchy": "Database DSH Compiler",
        "module": "Database.DSH.Compiler",
        "name": "fromQ",
        "normalized": "a-\u003eQ b-\u003eIO b",
        "package": "DSH",
        "partial": "",
        "signature": "conn-\u003eQ a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Interpreter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the reference implementation of DSH by interpreting\n the embedded representation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.DSH.Interpreter",
        "fct-package": "DSH",
        "fct-signature": "module",
        "fct-source": "src/Database-DSH-Interpreter.html",
        "fct-type": "module",
        "title": "Interpreter"
      },
      "index": {
        "description": "This module provides the reference implementation of DSH by interpreting the embedded representation",
        "hierarchy": "Database DSH Interpreter",
        "module": "Database.DSH.Interpreter",
        "name": "Interpreter",
        "normalized": "",
        "package": "DSH",
        "partial": "Interpreter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH-Interpreter.html#v:fromQ",
      "description": {
        "fct-module": "Database.DSH.Interpreter",
        "fct-package": "DSH",
        "fct-signature": "conn -\u003e Q a -\u003e IO a",
        "fct-source": "src/Database-DSH-Interpreter.html#fromQ",
        "fct-type": "function",
        "title": "fromQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH Interpreter",
        "module": "Database.DSH.Interpreter",
        "name": "fromQ",
        "normalized": "a-\u003eQ b-\u003eIO b",
        "package": "DSH",
        "partial": "",
        "signature": "conn-\u003eQ a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name clashes\n with \u003ca\u003ePrelude\u003c/a\u003e functions. For example:\n\u003c/p\u003e\u003cpre\u003e import qualified Database.DSH as Q\n import Database.DSH (Q)\n\u003c/pre\u003e\u003cp\u003eAlternatively you can hide \u003ca\u003ePrelude\u003c/a\u003e and import this module like this:\n\u003c/p\u003e\u003cpre\u003e import Prelude ()\n import Database.DSH\n\u003c/pre\u003e\u003cp\u003eIn this case you still get Prelude definitions that are not provided\n by Database.DSH.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "module",
        "fct-source": "src/Database-DSH.html",
        "fct-type": "module",
        "title": "DSH"
      },
      "index": {
        "description": "This module is intended to be imported qualified to avoid name clashes with Prelude functions For example import qualified Database.DSH as import Database.DSH Alternatively you can hide Prelude and import this module like this import Prelude import Database.DSH In this case you still get Prelude definitions that are not provided by Database.DSH",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "DSH",
        "normalized": "",
        "package": "DSH",
        "partial": "DSH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:Elim",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "class",
        "fct-source": "src/Database-DSH-Internals.html#Elim",
        "fct-type": "class",
        "title": "Elim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "Elim",
        "normalized": "",
        "package": "DSH",
        "partial": "Elim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:Q",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "data",
        "fct-source": "src/Database-DSH-Internals.html#Q",
        "fct-type": "data",
        "title": "Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "Q",
        "normalized": "",
        "package": "DSH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:QA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "class",
        "fct-source": "src/Database-DSH-Internals.html#QA",
        "fct-type": "class",
        "title": "QA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "QA",
        "normalized": "",
        "package": "DSH",
        "partial": "QA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:TA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "class",
        "fct-source": "src/Database-DSH-Internals.html#TA",
        "fct-type": "class",
        "title": "TA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "TA",
        "normalized": "",
        "package": "DSH",
        "partial": "TA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#t:View",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "class",
        "fct-source": "src/Database-DSH-Internals.html#View",
        "fct-type": "class",
        "title": "View"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "View",
        "normalized": "",
        "package": "DSH",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-124--124-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q Bool -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%7C%7C",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(||) ||",
        "normalized": "Q Bool-\u003eQ Bool-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003eQ Bool-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-124--62-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(|\u003e) |\u003e",
        "normalized": "Q[a]-\u003eQ a-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-33--33-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q Integer -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(!!) !!",
        "normalized": "Q[a]-\u003eQ Integer-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ Integer-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-38--38-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q Bool -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%26%26",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(&&) &&",
        "normalized": "Q Bool-\u003eQ Bool-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003eQ Bool-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-43--43-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(++) ++",
        "normalized": "Q[a]-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-47--61-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(/=) /=",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003c) \u003c",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60--124-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003c|) \u003c|",
        "normalized": "Q a-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-60--61-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003c=) \u003c=",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-61--61-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(==) ==",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003e) \u003e",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--61-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003e=) \u003e=",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--62-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [b] -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#%3E%3E",
        "fct-type": "function",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "Q[a]-\u003eQ[b]-\u003eQ[b]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[b]-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-62--62--61-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e (Q a -\u003e Q [b]) -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#%3E%3E%3D",
        "fct-type": "function",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "Q[a]-\u003e(Q a-\u003eQ[b])-\u003eQ[b]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003e(Q a-\u003eQ[b])-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:-63-",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e (Q a, Q a) -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "(?) ?",
        "normalized": "Q Bool-\u003e(Q a,Q a)-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003e(Q a,Q a)-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:all",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "all",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:and",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Bool] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "and",
        "normalized": "Q[Bool]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q[Bool]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:any",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "any",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:append",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "append",
        "normalized": "Q[a]-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:bool",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "bool",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:break",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q ([a], [a])",
        "fct-source": "src/Database-DSH-Externals.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "break",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:catMaybes",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Maybe a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "catMaybes",
        "normalized": "Q[Maybe a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "Maybes",
        "signature": "Q[Maybe a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:concat",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [[a]] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "concat",
        "normalized": "Q[[a]]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[[a]]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:concatMap",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q [b]) -\u003e Q [a] -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "concatMap",
        "normalized": "(Q a-\u003eQ[b])-\u003eQ[a]-\u003eQ[b]",
        "package": "DSH",
        "partial": "Map",
        "signature": "(Q a-\u003eQ[b])-\u003eQ[a]-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:cond",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q a -\u003e Q a -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "cond",
        "normalized": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:cons",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "cons",
        "normalized": "Q a-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveDSH",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveDSH",
        "fct-type": "function",
        "title": "deriveDSH"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveDSH",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "DSH",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveElim",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveElim",
        "fct-type": "function",
        "title": "deriveElim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveElim",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Elim",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveQA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveQA",
        "fct-type": "function",
        "title": "deriveQA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveQA",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "QA",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveSmartConstructors",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveSmartConstructors",
        "fct-type": "function",
        "title": "deriveSmartConstructors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveSmartConstructors",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Smart Constructors",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveTA",
        "fct-type": "function",
        "title": "deriveTA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveTA",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "TA",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeQA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Int -\u003e Int -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveTupleRangeQA",
        "fct-type": "function",
        "title": "deriveTupleRangeQA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveTupleRangeQA",
        "normalized": "Int-\u003eInt-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Tuple Range QA",
        "signature": "Int-\u003eInt-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeSmartConstructors",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Int -\u003e Int -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveTupleRangeSmartConstructors",
        "fct-type": "function",
        "title": "deriveTupleRangeSmartConstructors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveTupleRangeSmartConstructors",
        "normalized": "Int-\u003eInt-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Tuple Range Smart Constructors",
        "signature": "Int-\u003eInt-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeTA",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Int -\u003e Int -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveTupleRangeTA",
        "fct-type": "function",
        "title": "deriveTupleRangeTA"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveTupleRangeTA",
        "normalized": "Int-\u003eInt-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Tuple Range TA",
        "signature": "Int-\u003eInt-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveTupleRangeView",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Int -\u003e Int -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveTupleRangeView",
        "fct-type": "function",
        "title": "deriveTupleRangeView"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveTupleRangeView",
        "normalized": "Int-\u003eInt-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "Tuple Range View",
        "signature": "Int-\u003eInt-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:deriveView",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Database-DSH-TH.html#deriveView",
        "fct-type": "function",
        "title": "deriveView"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "deriveView",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "DSH",
        "partial": "View",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:drop",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Integer -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "drop",
        "normalized": "Q Integer-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q Integer-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:dropWhile",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "dropWhile",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "While",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:either",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q c) -\u003e (Q b -\u003e Q c) -\u003e Q (Either a b) -\u003e Q c",
        "fct-source": "src/Database-DSH-Externals.html#either",
        "fct-type": "function",
        "title": "either"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "either",
        "normalized": "(Q a-\u003eQ b)-\u003e(Q c-\u003eQ b)-\u003eQ(Either a c)-\u003eQ b",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ c)-\u003e(Q b-\u003eQ c)-\u003eQ(Either a b)-\u003eQ c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:eitherToPair",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Either a b) -\u003e Q ([a], [b])",
        "fct-source": "src/Database-DSH-Externals.html#eitherToPair",
        "fct-type": "function",
        "title": "eitherToPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "eitherToPair",
        "normalized": "Q(Either a b)-\u003eQ([a],[b])",
        "package": "DSH",
        "partial": "To Pair",
        "signature": "Q(Either a b)-\u003eQ([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:elem",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "elem",
        "normalized": "Q a-\u003eQ[a]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[a]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:elim",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Eliminator a r",
        "fct-source": "src/Database-DSH-Internals.html#elim",
        "fct-type": "method",
        "title": "elim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "elim",
        "normalized": "Q a-\u003eEliminator a b",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eEliminator a r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:empty",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "empty",
        "normalized": "Q[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:eq",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#eq",
        "fct-type": "function",
        "title": "eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "eq",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:false",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#false",
        "fct-type": "function",
        "title": "false"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "false",
        "normalized": "",
        "package": "DSH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:filter",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "filter",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fromJust",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Maybe a) -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#fromJust",
        "fct-type": "function",
        "title": "fromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "fromJust",
        "normalized": "Q(Maybe a)-\u003eQ a",
        "package": "DSH",
        "partial": "Just",
        "signature": "Q(Maybe a)-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fromMaybe",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q (Maybe a) -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#fromMaybe",
        "fct-type": "function",
        "title": "fromMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "fromMaybe",
        "normalized": "Q a-\u003eQ(Maybe a)-\u003eQ a",
        "package": "DSH",
        "partial": "Maybe",
        "signature": "Q a-\u003eQ(Maybe a)-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:fst",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (a, b) -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#fst",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "fst",
        "normalized": "Q(a,b)-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q(a,b)-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:groupWith",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [[a]]",
        "fct-source": "src/Database-DSH-Externals.html#groupWith",
        "fct-type": "function",
        "title": "groupWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "groupWith",
        "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[[a]]",
        "package": "DSH",
        "partial": "With",
        "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:groupWithKey",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [(b, [a])]",
        "fct-source": "src/Database-DSH-Externals.html#groupWithKey",
        "fct-type": "function",
        "title": "groupWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "groupWithKey",
        "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[(b,[a])]",
        "package": "DSH",
        "partial": "With Key",
        "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[(b,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:gt",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#gt",
        "fct-type": "function",
        "title": "gt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "gt",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:gte",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#gte",
        "fct-type": "function",
        "title": "gte"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "gte",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:guard",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q [()]",
        "fct-source": "src/Database-DSH-Externals.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "guard",
        "normalized": "Q Bool-\u003eQ[()]",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003eQ[()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:head",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "head",
        "normalized": "Q[a]-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:ifThenElse",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q a -\u003e Q a -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "ifThenElse",
        "normalized": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a",
        "package": "DSH",
        "partial": "Then Else",
        "signature": "Q Bool-\u003eQ a-\u003eQ a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:index",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q Integer -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "index",
        "normalized": "Q[a]-\u003eQ Integer-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ Integer-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:init",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "init",
        "normalized": "Q[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:integerToDouble",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Integer -\u003e Q Double",
        "fct-source": "src/Database-DSH-Externals.html#integerToDouble",
        "fct-type": "function",
        "title": "integerToDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "integerToDouble",
        "normalized": "Q Integer-\u003eQ Double",
        "package": "DSH",
        "partial": "To Double",
        "signature": "Q Integer-\u003eQ Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isJust",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Maybe a) -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#isJust",
        "fct-type": "function",
        "title": "isJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "isJust",
        "normalized": "Q(Maybe a)-\u003eQ Bool",
        "package": "DSH",
        "partial": "Just",
        "signature": "Q(Maybe a)-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isLeft",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Either a b) -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "isLeft",
        "normalized": "Q(Either a b)-\u003eQ Bool",
        "package": "DSH",
        "partial": "Left",
        "signature": "Q(Either a b)-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isNothing",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Maybe a) -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#isNothing",
        "fct-type": "function",
        "title": "isNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "isNothing",
        "normalized": "Q(Maybe a)-\u003eQ Bool",
        "package": "DSH",
        "partial": "Nothing",
        "signature": "Q(Maybe a)-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:isRight",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Either a b) -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "isRight",
        "normalized": "Q(Either a b)-\u003eQ Bool",
        "package": "DSH",
        "partial": "Right",
        "signature": "Q(Either a b)-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:just",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q (Maybe a)",
        "fct-source": "src/Database-DSH-Externals.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "just",
        "normalized": "Q a-\u003eQ(Maybe a)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:last",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "last",
        "normalized": "Q[a]-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:left",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q (Either a b)",
        "fct-source": "src/Database-DSH-Externals.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "left",
        "normalized": "Q a-\u003eQ(Either a b)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lefts",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Either a b] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#lefts",
        "fct-type": "function",
        "title": "lefts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "lefts",
        "normalized": "Q[Either a b]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[Either a b]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:length",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q Integer",
        "fct-source": "src/Database-DSH-Externals.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "length",
        "normalized": "Q[a]-\u003eQ Integer",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:listToMaybe",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q (Maybe a)",
        "fct-source": "src/Database-DSH-Externals.html#listToMaybe",
        "fct-type": "function",
        "title": "listToMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "listToMaybe",
        "normalized": "Q[a]-\u003eQ(Maybe a)",
        "package": "DSH",
        "partial": "To Maybe",
        "signature": "Q[a]-\u003eQ(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lookup",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [(a, b)] -\u003e Q (Maybe b)",
        "fct-source": "src/Database-DSH-Externals.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "lookup",
        "normalized": "Q a-\u003eQ[(a,b)]-\u003eQ(Maybe b)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[(a,b)]-\u003eQ(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lt",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#lt",
        "fct-type": "function",
        "title": "lt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "lt",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:lte",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#lte",
        "fct-type": "function",
        "title": "lte"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "lte",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:map",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "map",
        "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[b]",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:mapMaybe",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q (Maybe b)) -\u003e Q [a] -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "mapMaybe",
        "normalized": "(Q a-\u003eQ(Maybe b))-\u003eQ[a]-\u003eQ[b]",
        "package": "DSH",
        "partial": "Maybe",
        "signature": "(Q a-\u003eQ(Maybe b))-\u003eQ[a]-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:max",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "max",
        "normalized": "Q a-\u003eQ a-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maximum",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "maximum",
        "normalized": "Q[a]-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maybe",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q b -\u003e (Q a -\u003e Q b) -\u003e Q (Maybe a) -\u003e Q b",
        "fct-source": "src/Database-DSH-Externals.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "maybe",
        "normalized": "Q a-\u003e(Q b-\u003eQ a)-\u003eQ(Maybe b)-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q b-\u003e(Q a-\u003eQ b)-\u003eQ(Maybe a)-\u003eQ b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:maybeToList",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Maybe a) -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#maybeToList",
        "fct-type": "function",
        "title": "maybeToList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "maybeToList",
        "normalized": "Q(Maybe a)-\u003eQ[a]",
        "package": "DSH",
        "partial": "To List",
        "signature": "Q(Maybe a)-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:min",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "min",
        "normalized": "Q a-\u003eQ a-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:minimum",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "minimum",
        "normalized": "Q[a]-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:mzip",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [b] -\u003e Q [(a, b)]",
        "fct-source": "src/Database-DSH-Externals.html#mzip",
        "fct-type": "function",
        "title": "mzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "mzip",
        "normalized": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:neq",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q a -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#neq",
        "fct-type": "function",
        "title": "neq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "neq",
        "normalized": "Q a-\u003eQ a-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ a-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nil",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#nil",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "nil",
        "normalized": "Q[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:not",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "not",
        "normalized": "Q Bool-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q Bool-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:notElem",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "notElem",
        "normalized": "Q a-\u003eQ[a]-\u003eQ Bool",
        "package": "DSH",
        "partial": "Elem",
        "signature": "Q a-\u003eQ[a]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nothing",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (Maybe a)",
        "fct-source": "src/Database-DSH-Externals.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "nothing",
        "normalized": "",
        "package": "DSH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:nub",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#nub",
        "fct-type": "function",
        "title": "nub"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "nub",
        "normalized": "Q[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:null",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "null",
        "normalized": "Q[a]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:or",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Bool] -\u003e Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "or",
        "normalized": "Q[Bool]-\u003eQ Bool",
        "package": "DSH",
        "partial": "",
        "signature": "Q[Bool]-\u003eQ Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:pair",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q (a, b)",
        "fct-source": "src/Database-DSH-Externals.html#pair",
        "fct-type": "function",
        "title": "pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "pair",
        "normalized": "Q a-\u003eQ b-\u003eQ(a,b)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:pairToEither",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q ([a], [b]) -\u003e Q (Either a b)",
        "fct-source": "src/Database-DSH-Externals.html#pairToEither",
        "fct-type": "function",
        "title": "pairToEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "pairToEither",
        "normalized": "Q([a],[b])-\u003eQ(Either a b)",
        "package": "DSH",
        "partial": "To Either",
        "signature": "Q([a],[b])-\u003eQ(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:partitionEithers",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Either a b] -\u003e Q ([a], [b])",
        "fct-source": "src/Database-DSH-Externals.html#partitionEithers",
        "fct-type": "function",
        "title": "partitionEithers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "partitionEithers",
        "normalized": "Q[Either a b]-\u003eQ([a],[b])",
        "package": "DSH",
        "partial": "Eithers",
        "signature": "Q[Either a b]-\u003eQ([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:return",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#return",
        "fct-type": "function",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "return",
        "normalized": "Q a-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:reverse",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "reverse",
        "normalized": "Q[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:right",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q b -\u003e Q (Either a b)",
        "fct-source": "src/Database-DSH-Externals.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "right",
        "normalized": "Q a-\u003eQ(Either b a)",
        "package": "DSH",
        "partial": "",
        "signature": "Q b-\u003eQ(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:rights",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [Either a b] -\u003e Q [b]",
        "fct-source": "src/Database-DSH-Externals.html#rights",
        "fct-type": "function",
        "title": "rights"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "rights",
        "normalized": "Q[Either a b]-\u003eQ[b]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[Either a b]-\u003eQ[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:singleton",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "singleton",
        "normalized": "Q a-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:snd",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q (a, b) -\u003e Q b",
        "fct-source": "src/Database-DSH-Externals.html#snd",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "snd",
        "normalized": "Q(a,b)-\u003eQ b",
        "package": "DSH",
        "partial": "",
        "signature": "Q(a,b)-\u003eQ b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:snoc",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "snoc",
        "normalized": "Q[a]-\u003eQ a-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:sortWith",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b) -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#sortWith",
        "fct-type": "function",
        "title": "sortWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "sortWith",
        "normalized": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "With",
        "signature": "(Q a-\u003eQ b)-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:span",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q ([a], [a])",
        "fct-source": "src/Database-DSH-Externals.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "span",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])",
        "package": "DSH",
        "partial": "",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:splitAt",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Integer -\u003e Q [a] -\u003e Q ([a], [a])",
        "fct-source": "src/Database-DSH-Externals.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "splitAt",
        "normalized": "Q Integer-\u003eQ[a]-\u003eQ([a],[a])",
        "package": "DSH",
        "partial": "At",
        "signature": "Q Integer-\u003eQ[a]-\u003eQ([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:sum",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "sum",
        "normalized": "Q[a]-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:table",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "String -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#table",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "table",
        "normalized": "String-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "String-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableCSV",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "String -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#tableCSV",
        "fct-type": "function",
        "title": "tableCSV"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tableCSV",
        "normalized": "String-\u003eQ[a]",
        "package": "DSH",
        "partial": "CSV",
        "signature": "String-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableDB",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "String -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#tableDB",
        "fct-type": "function",
        "title": "tableDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tableDB",
        "normalized": "String-\u003eQ[a]",
        "package": "DSH",
        "partial": "DB",
        "signature": "String-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tableWithKeys",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "String -\u003e [[String]] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#tableWithKeys",
        "fct-type": "function",
        "title": "tableWithKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tableWithKeys",
        "normalized": "String-\u003e[[String]]-\u003eQ[a]",
        "package": "DSH",
        "partial": "With Keys",
        "signature": "String-\u003e[[String]]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tail",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tail",
        "normalized": "Q[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:take",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Integer -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "take",
        "normalized": "Q Integer-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "",
        "signature": "Q Integer-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:takeWhile",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q Bool) -\u003e Q [a] -\u003e Q [a]",
        "fct-source": "src/Database-DSH-Externals.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "takeWhile",
        "normalized": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]",
        "package": "DSH",
        "partial": "While",
        "signature": "(Q a-\u003eQ Bool)-\u003eQ[a]-\u003eQ[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:toQ",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "a -\u003e Q a",
        "fct-source": "src/Database-DSH-Externals.html#toQ",
        "fct-type": "function",
        "title": "toQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "toQ",
        "normalized": "a-\u003eQ a",
        "package": "DSH",
        "partial": "",
        "signature": "a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:triple",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q (a, b, c)",
        "fct-source": "src/Database-DSH-Externals.html#triple",
        "fct-type": "function",
        "title": "triple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "triple",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ(a,b,c)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:true",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q Bool",
        "fct-source": "src/Database-DSH-Externals.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "true",
        "normalized": "",
        "package": "DSH",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple2",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q ((,) a b)",
        "fct-source": "src/Database-DSH-Externals.html#tuple2",
        "fct-type": "function",
        "title": "tuple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple2",
        "normalized": "Q a-\u003eQ b-\u003eQ((,)a b)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ((,)a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple3",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q ((,,) a b c)",
        "fct-source": "src/Database-DSH-Externals.html#tuple3",
        "fct-type": "function",
        "title": "tuple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple3",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ((,,)a b c)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ((,,)a b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple4",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q ((,,,) a b c d)",
        "fct-source": "src/Database-DSH-Externals.html#tuple4",
        "fct-type": "function",
        "title": "tuple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple4",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ((,,,)a b c d)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ((,,,)a b c d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple5",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q ((,,,,) a b c d e)",
        "fct-source": "src/Database-DSH-Externals.html#tuple5",
        "fct-type": "function",
        "title": "tuple5"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple5",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ((,,,,)a b c d e)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ((,,,,)a b c d e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple6",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q f -\u003e Q ((,,,,,) a b c d e f)",
        "fct-source": "src/Database-DSH-Externals.html#tuple6",
        "fct-type": "function",
        "title": "tuple6"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple6",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ((,,,,,)a b c d e f)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ((,,,,,)a b c d e f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:tuple7",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q a -\u003e Q b -\u003e Q c -\u003e Q d -\u003e Q e -\u003e Q f -\u003e Q g -\u003e Q ((,,,,,,) a b c d e f g)",
        "fct-source": "src/Database-DSH-Externals.html#tuple7",
        "fct-type": "function",
        "title": "tuple7"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "tuple7",
        "normalized": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ g-\u003eQ((,,,,,,)a b c d e f g)",
        "package": "DSH",
        "partial": "",
        "signature": "Q a-\u003eQ b-\u003eQ c-\u003eQ d-\u003eQ e-\u003eQ f-\u003eQ g-\u003eQ((,,,,,,)a b c d e f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unit",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q ()",
        "fct-source": "src/Database-DSH-Externals.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "unit",
        "normalized": "Q()",
        "package": "DSH",
        "partial": "",
        "signature": "Q()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unzip",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [(a, b)] -\u003e Q ([a], [b])",
        "fct-source": "src/Database-DSH-Externals.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "unzip",
        "normalized": "Q[(a,b)]-\u003eQ([a],[b])",
        "package": "DSH",
        "partial": "",
        "signature": "Q[(a,b)]-\u003eQ([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:unzip3",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [(a, b, c)] -\u003e Q ([a], [b], [c])",
        "fct-source": "src/Database-DSH-Externals.html#unzip3",
        "fct-type": "function",
        "title": "unzip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "unzip3",
        "normalized": "Q[(a,b,c)]-\u003eQ([a],[b],[c])",
        "package": "DSH",
        "partial": "",
        "signature": "Q[(a,b,c)]-\u003eQ([a],[b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:view",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "a -\u003e ToView a",
        "fct-source": "src/Database-DSH-Internals.html#view",
        "fct-type": "method",
        "title": "view"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "view",
        "normalized": "a-\u003eToView a",
        "package": "DSH",
        "partial": "",
        "signature": "a-\u003eToView a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zip",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [b] -\u003e Q [(a, b)]",
        "fct-source": "src/Database-DSH-Externals.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "zip",
        "normalized": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[b]-\u003eQ[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zip3",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "Q [a] -\u003e Q [b] -\u003e Q [c] -\u003e Q [(a, b, c)]",
        "fct-source": "src/Database-DSH-Externals.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "zip3",
        "normalized": "Q[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[(a,b,c)]",
        "package": "DSH",
        "partial": "",
        "signature": "Q[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[(a,b,c)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zipWith",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b -\u003e Q c) -\u003e Q [a] -\u003e Q [b] -\u003e Q [c]",
        "fct-source": "src/Database-DSH-Externals.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "zipWith",
        "normalized": "(Q a-\u003eQ b-\u003eQ c)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]",
        "package": "DSH",
        "partial": "With",
        "signature": "(Q a-\u003eQ b-\u003eQ c)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DSH/docs/Database-DSH.html#v:zipWith3",
      "description": {
        "fct-module": "Database.DSH",
        "fct-package": "DSH",
        "fct-signature": "(Q a -\u003e Q b -\u003e Q c -\u003e Q d) -\u003e Q [a] -\u003e Q [b] -\u003e Q [c] -\u003e Q [d]",
        "fct-source": "src/Database-DSH-Externals.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database DSH",
        "module": "Database.DSH",
        "name": "zipWith3",
        "normalized": "(Q a-\u003eQ b-\u003eQ c-\u003eQ d)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[d]",
        "package": "DSH",
        "partial": "With",
        "signature": "(Q a-\u003eQ b-\u003eQ c-\u003eQ d)-\u003eQ[a]-\u003eQ[b]-\u003eQ[c]-\u003eQ[d]"
      }
    }
  }
]