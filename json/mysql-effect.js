[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA thin MySQL effect.\n\u003c/p\u003e\u003cp\u003eSee the documentation of 'mysql-simple' for details regarding the\n various functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "module",
        "fct-source": "src/Control-Eff-MySQL.html",
        "fct-type": "module",
        "title": "MySQL"
      },
      "index": {
        "description": "thin MySQL effect See the documentation of mysql-simple for details regarding the various functions",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "MySQL",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "My SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:ConnectInfo",
      "description": {
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (In [3,4,5])\n\u003c/pre\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in In",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "In",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "Only",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.MySQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.MySQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "Query",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:QueryParams",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "QueryParams"
      },
      "index": {
        "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "QueryParams",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Query Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#t:QueryResults",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a list of strings.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e\u003cp\u003eThis example instance demonstrates how to convert a two-column row\n into a Haskell pair. Each field in the metadata is paired up with\n each value from the row, and the two are passed to \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n instance (\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e b) =\u003e \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e (a,b) where\n     \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e [fa,fb] [va,vb] = (a,b)\n         where !a = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fa va\n               !b = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fb vb\n     \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e fs vs  = \u003ccode\u003e\u003ca\u003econvertError\u003c/a\u003e\u003c/code\u003e fs vs 2\n\u003c/pre\u003e\u003cp\u003eNotice that this instance evaluates each element to WHNF before\n constructing the pair. By doing this, we guarantee two important\n properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Keep resource usage under control by preventing the construction\n   of potentially long-lived thunks.\n\u003c/li\u003e\u003cli\u003e Ensure that any \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e that might arise is thrown\n   immediately, rather than some place later in application code\n   that cannot handle it.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can also declare Haskell types of your own to be instances of\n \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\ndata User = User { firstName :: String, lastName :: String }\n\ninstance \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e User where\n    \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e [fa,fb] [va,vb] = User \u003ca\u003e$\u003c/a\u003e a \u003ca\u003e*\u003c/a\u003e b\n        where !a = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fa va\n              !b = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fb vb\n    \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e fs vs  = \u003ccode\u003e\u003ca\u003econvertError\u003c/a\u003e\u003c/code\u003e fs vs 2\n\u003c/pre\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "QueryResults"
      },
      "index": {
        "description": "collection type that can be converted from list of strings Instances should use the convert method of the Result class to perform conversion of each element of the collection This example instance demonstrates how to convert two-column row into Haskell pair Each field in the metadata is paired up with each value from the row and the two are passed to convert instance Result Result QueryResults where convertResults fa fb va vb where convert fa va convert fb vb convertResults fs vs convertError fs vs Notice that this instance evaluates each element to WHNF before constructing the pair By doing this we guarantee two important properties Keep resource usage under control by preventing the construction of potentially long-lived thunks Ensure that any ResultError that might arise is thrown immediately rather than some place later in application code that cannot handle it You can also declare Haskell types of your own to be instances of QueryResults data User User firstName String lastName String instance QueryResults User where convertResults fa fb va vb User where convert fa va convert fb vb convertResults fs vs convertError fs vs",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "QueryResults",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Query Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:ConnectInfo",
      "description": {
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:In",
      "description": {
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "In a",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "In",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:Only",
      "description": {
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "Only",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:autocommit",
      "description": {
        "fct-descr": "\u003cp\u003eSee 'M.autocommit ' for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Bool -\u003e Eff r ()",
        "fct-source": "src/Control-Eff-MySQL.html#autocommit",
        "fct-type": "function",
        "title": "autocommit"
      },
      "index": {
        "description": "See M.autocommit for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "autocommit",
        "normalized": "Bool-\u003eEff a()",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Bool-\u003eEff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eSee 'M.commit ' for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Eff r ()",
        "fct-source": "src/Control-Eff-MySQL.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "See M.commit for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "commit",
        "normalized": "Eff a()",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Eff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectDatabase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectDatabase",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectHost",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "[Option]",
        "fct-type": "function",
        "title": "connectOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectOptions",
        "normalized": "[Option]",
        "package": "mysql-effect",
        "partial": "Options",
        "signature": "[Option]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectPassword",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "FilePath",
        "fct-type": "function",
        "title": "connectPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectPath",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Word16",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectPort",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectSSL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Maybe SSLInfo",
        "fct-type": "function",
        "title": "connectSSL"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectSSL",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "SSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:connectUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "connectUser",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:convertResults",
      "description": {
        "fct-descr": "\u003cp\u003eConvert values from a row into a Haskell collection.\n\u003c/p\u003e\u003cp\u003eThis function will throw a \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e if conversion of the\n collection fails.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "[Field] -\u003e [Maybe ByteString] -\u003e a",
        "fct-type": "method",
        "title": "convertResults"
      },
      "index": {
        "description": "Convert values from row into Haskell collection This function will throw ResultError if conversion of the collection fails",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "convertResults",
        "normalized": "[Field]-\u003e[Maybe ByteString]-\u003ea",
        "package": "mysql-effect",
        "partial": "Results",
        "signature": "[Field]-\u003e[Maybe ByteString]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003eroot\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003etest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Character set \u003ccode\u003eutf8\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for setting up connection Defaults are as follows Server on localhost User root No password Database test Character set utf8 Use as in the following example connect defaultConnectInfo connectHost db.example.com",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e p -\u003e Eff r Int64",
        "fct-source": "src/Control-Eff-MySQL.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "See execute for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "execute",
        "normalized": "Query-\u003ea-\u003eEff b Int",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Query-\u003ep-\u003eEff r Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e [p] -\u003e Eff r Int64",
        "fct-source": "src/Control-Eff-MySQL.html#executeMany",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "See executeMany for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "executeMany",
        "normalized": "Query-\u003e[a]-\u003eEff b Int",
        "package": "mysql-effect",
        "partial": "Many",
        "signature": "Query-\u003e[p]-\u003eEff r Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute_\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e Eff r Int64",
        "fct-source": "src/Control-Eff-MySQL.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "See execute for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "execute_",
        "normalized": "Query-\u003eEff a Int",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Query-\u003eEff r Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:formatMany",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eformatMany\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e [p] -\u003e Eff r ByteString",
        "fct-source": "src/Control-Eff-MySQL.html#formatMany",
        "fct-type": "function",
        "title": "formatMany"
      },
      "index": {
        "description": "See formatMany for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "formatMany",
        "normalized": "Query-\u003e[a]-\u003eEff b ByteString",
        "package": "mysql-effect",
        "partial": "Many",
        "signature": "Query-\u003e[p]-\u003eEff r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:formatQuery",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eformatQuery\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e p -\u003e Eff r ByteString",
        "fct-source": "src/Control-Eff-MySQL.html#formatQuery",
        "fct-type": "function",
        "title": "formatQuery"
      },
      "index": {
        "description": "See formatQuery for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "formatQuery",
        "normalized": "Query-\u003ea-\u003eEff b ByteString",
        "package": "mysql-effect",
        "partial": "Query",
        "signature": "Query-\u003ep-\u003eEff r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "fromOnly",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:insertID",
      "description": {
        "fct-descr": "\u003cp\u003eSee 'M.insertID ' for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Eff r Word64",
        "fct-source": "src/Control-Eff-MySQL.html#insertID",
        "fct-type": "function",
        "title": "insertID"
      },
      "index": {
        "description": "See M.insertID for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "insertID",
        "normalized": "",
        "package": "mysql-effect",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e p -\u003e Eff r [a]",
        "fct-source": "src/Control-Eff-MySQL.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "See query for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "query",
        "normalized": "Query-\u003ea-\u003eEff b[c]",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Query-\u003ep-\u003eEff r[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Query -\u003e Eff r [a]",
        "fct-source": "src/Control-Eff-MySQL.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "See query for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "query_",
        "normalized": "Query-\u003eEff a[b]",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Query-\u003eEff r[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:renderParams",
      "description": {
        "fct-descr": "\u003cp\u003eRender a collection of values.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "a -\u003e [Action]",
        "fct-type": "method",
        "title": "renderParams"
      },
      "index": {
        "description": "Render collection of values",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "renderParams",
        "normalized": "a-\u003e[Action]",
        "package": "mysql-effect",
        "partial": "Params",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eSee 'M.rollback ' for details.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Eff r ()",
        "fct-source": "src/Control-Eff-MySQL.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "See M.rollback for details",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "rollback",
        "normalized": "Eff a()",
        "package": "mysql-effect",
        "partial": "",
        "signature": "Eff r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:runMySQL",
      "description": {
        "fct-descr": "\u003cp\u003eRun the MySQL effect. In case of exceptions it will not close the\n connection. (That will still be done by the GC at one point.)\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Eff (MySQL :\u003e r) a -\u003e ConnectInfo -\u003e Eff r a",
        "fct-source": "src/Control-Eff-MySQL.html#runMySQL",
        "fct-type": "function",
        "title": "runMySQL"
      },
      "index": {
        "description": "Run the MySQL effect In case of exceptions it will not close the connection That will still be done by the GC at one point",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "runMySQL",
        "normalized": "Eff(MySQL a)b-\u003eConnectInfo-\u003eEff a b",
        "package": "mysql-effect",
        "partial": "My SQL",
        "signature": "Eff(MySQL r)a-\u003eConnectInfo-\u003eEff r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-effect/docs/Control-Eff-MySQL.html#v:runMySQLWithConnection",
      "description": {
        "fct-descr": "\u003cp\u003eRun the MySQL effect with a given \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Eff.MySQL",
        "fct-package": "mysql-effect",
        "fct-signature": "Eff (MySQL :\u003e r) a -\u003e Connection -\u003e Eff r a",
        "fct-source": "src/Control-Eff-MySQL.html#runMySQLWithConnection",
        "fct-type": "function",
        "title": "runMySQLWithConnection"
      },
      "index": {
        "description": "Run the MySQL effect with given Connection",
        "hierarchy": "Control Eff MySQL",
        "module": "Control.Eff.MySQL",
        "name": "runMySQLWithConnection",
        "normalized": "Eff(MySQL a)b-\u003eConnection-\u003eEff a b",
        "package": "mysql-effect",
        "partial": "My SQLWith Connection",
        "signature": "Eff(MySQL r)a-\u003eConnection-\u003eEff r a"
      }
    }
  }
]