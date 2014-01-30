[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-Auth-Backends-SqliteSimple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to use the auth snaplet with your user database\nstored in a SQLite database.  When you run your application with this\nsnaplet, a config file will be copied into the the\n\u003ccode\u003esnaplets/sqlite-auth\u003c/code\u003e directory.  This file contains all of the\nconfigurable options for the snaplet and allows you to change them\nwithout recompiling your application.\n\u003c/p\u003e\u003cp\u003eTo use this snaplet in your application enable the session, sqlite,\nand auth snaplets as follows:\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- your own application state here\n     , _sess :: Snaplet SessionManager\n     , _db   :: Snaplet Sqlite\n     , _auth :: Snaplet (AuthManager App)\n     }\n\u003c/pre\u003e\u003cp\u003eThen in your initializer you'll have something like this:\n\u003c/p\u003e\u003cpre\u003e d \u003c- nestSnaplet \"db\" db sqliteInit\n a \u003c- nestSnaplet \"auth\" auth $ initSqliteAuth sess d\n\u003c/pre\u003e\u003cp\u003eIf you have not already created the database table for users, it will\nautomatically be created for you the first time you run your\napplication.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-SqliteSimple.html",
        "fct-type": "module",
        "title": "SqliteSimple"
      },
      "index": {
        "description": "This module allows you to use the auth snaplet with your user database stored in SQLite database When you run your application with this snaplet config file will be copied into the the snaplets sqlite-auth directory This file contains all of the configurable options for the snaplet and allows you to change them without recompiling your application To use this snaplet in your application enable the session sqlite and auth snaplets as follows data App App your own application state here sess Snaplet SessionManager db Snaplet Sqlite auth Snaplet AuthManager App Then in your initializer you ll have something like this nestSnaplet db db sqliteInit nestSnaplet auth auth initSqliteAuth sess If you have not already created the database table for users it will automatically be created for you the first time you run your application",
        "hierarchy": "Snap Snaplet Auth Backends SqliteSimple",
        "module": "Snap.Snaplet.Auth.Backends.SqliteSimple",
        "name": "SqliteSimple",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-Auth-Backends-SqliteSimple.html#v:initSqliteAuth",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer for the sqlite backend to the auth snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "SnapletLens b SessionManager-\u003e Snaplet Sqlite-\u003e SnapletInit b (AuthManager b)",
        "fct-type": "function",
        "title": "initSqliteAuth"
      },
      "index": {
        "description": "Initializer for the sqlite backend to the auth snaplet",
        "hierarchy": "Snap Snaplet Auth Backends SqliteSimple",
        "module": "Snap.Snaplet.Auth.Backends.SqliteSimple",
        "name": "initSqliteAuth",
        "normalized": "SnapletLens a SessionManager-\u003eSnaplet Sqlite-\u003eSnapletInit a(AuthManager a)",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite Auth",
        "signature": "SnapletLens b SessionManager-\u003eSnaplet Sqlite-\u003eSnapletInit b(AuthManager b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis snaplet makes it simple to use a SQLite database from your Snap\napplication and is based on the sqlite-simple library\n(\u003ca\u003ehttp://hackage.haskell.org/package/sqlite-simple\u003c/a\u003e).  Now, adding a\ndatabase to your web app takes just two simple steps.\n\u003c/p\u003e\u003cp\u003eFirst, include this snaplet in your application's state.\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- Other state needed in your app\n     , _db :: Snaplet Sqlite\n     }\n\u003c/pre\u003e\u003cp\u003eNext, call the sqliteInit from your application's initializer.\n\u003c/p\u003e\u003cpre\u003e appInit = makeSnaplet ... $ do\n     ...\n     d \u003c- nestSnaplet \"db\" db sqliteInit\n     return $ App ... d\n\u003c/pre\u003e\u003cp\u003eNow you can use any of the sqlite-simple wrapper functions defined in\nthis module anywhere in your application handlers.  For instance:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- with db $ query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eOptionally, if you find yourself doing many database queries, you can\neliminate some of the boilerplate by defining a HasSqlite instance for\nyour application.\n\u003c/p\u003e\u003cpre\u003e instance HasSqlite (Handler b App) where\n   getSqliteState = with db get\n\u003c/pre\u003e\u003cp\u003eWith this code, our postHandler example no longer requires the \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e\nfunction:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eThe first time you run an application with the sqlite-simple snaplet,\na configuration file \u003ccode\u003edevel.cfg\u003c/code\u003e is created in the\n\u003ccode\u003esnaplets/sqlite-simple\u003c/code\u003e directory underneath your project root.  It\nspecifies how to connect to your Sqlite database.  Edit this file and\nmodify the values appropriately and you'll be off and running.\n\u003c/p\u003e\u003cp\u003eIf you want to have out-of-the-box authentication, look at the\ndocumentation for the \u003ca\u003eSnap.Snaplet.Auth.Backends.Sqlite\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html",
        "fct-type": "module",
        "title": "SqliteSimple"
      },
      "index": {
        "description": "This snaplet makes it simple to use SQLite database from your Snap application and is based on the sqlite-simple library http hackage.haskell.org package sqlite-simple Now adding database to your web app takes just two simple steps First include this snaplet in your application state data App App Other state needed in your app db Snaplet Sqlite Next call the sqliteInit from your application initializer appInit makeSnaplet do nestSnaplet db db sqliteInit return App Now you can use any of the sqlite-simple wrapper functions defined in this module anywhere in your application handlers For instance postHandler Handler App App postHandler do posts with db query select from blog post Optionally if you find yourself doing many database queries you can eliminate some of the boilerplate by defining HasSqlite instance for your application instance HasSqlite Handler App where getSqliteState with db get With this code our postHandler example no longer requires the with function postHandler Handler App App postHandler do posts query select from blog post The first time you run an application with the sqlite-simple snaplet configuration file devel.cfg is created in the snaplets sqlite-simple directory underneath your project root It specifies how to connect to your Sqlite database Edit this file and modify the values appropriately and you ll be off and running If you want to have out-of-the-box authentication look at the documentation for the Snap.Snaplet.Auth.Backends.Sqlite module",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "SqliteSimple",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": ":.",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eConnection to an open database.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003econnectionHandle\u003c/a\u003e\u003c/code\u003e to gain access to the underlying\n \u003ca\u003ehttp://hackage.haskell.org/package/direct-sqlite\u003c/a\u003e connection.\n This may be useful if you need to access some direct-sqlite\n functionality that's not exposed in the sqlite-simple API.  This\n should be a safe thing to do although mixing both APIs is\n discouraged.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection to an open database You can use connectionHandle to gain access to the underlying http hackage.haskell.org package direct-sqlite connection This may be useful if you need to access some direct-sqlite functionality that not exposed in the sqlite-simple API This should be safe thing to do although mixing both APIs is discouraged",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Connection",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:FormatError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e was malformed.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FormatError"
      },
      "index": {
        "description": "Exception thrown if Query was malformed This may occur if the number of characters in the query string does not match the number of parameters provided",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "FormatError",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can defined outside of sqlite-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote the caveats associated with user-defined implementations of\n \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can defined outside of sqlite-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note the caveats associated with user-defined implementations of fromRow",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "FromRow",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:HasSqlite",
      "description": {
        "fct-descr": "\u003cp\u003eInstantiate this typeclass on 'Handler b YourAppState' so this snaplet\n can find the connection source.  If you need to have multiple instances of\n the sqlite snaplet in your application, then don't provide this instance\n and leverage the default instance by using \"\u003ccode\u003ewith dbLens\u003c/code\u003e\" in front of calls\n to snaplet-sqlite-simple functions.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#HasSqlite",
        "fct-type": "class",
        "title": "HasSqlite"
      },
      "index": {
        "description": "Instantiate this typeclass on Handler YourAppState so this snaplet can find the connection source If you need to have multiple instances of the sqlite snaplet in your application then don provide this instance and leverage the default instance by using with dbLens in front of calls to snaplet-sqlite-simple functions",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "HasSqlite",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Has Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Only",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.SQLite.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003eText\u003c/code\u003e, and literal Haskell strings that\n contain Unicode characters will be correctly transformed to UTF-8.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.SQLite.Simple Query select The underlying type is Text and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Query",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "ResultError",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:Sqlite",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the sqlite-simple snaplet. To use it in your app\n include this in your application state and use \u003ccode\u003e\u003ca\u003esqliteInit\u003c/a\u003e\u003c/code\u003e to initialize it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#Sqlite",
        "fct-type": "data",
        "title": "Sqlite"
      },
      "index": {
        "description": "The state for the sqlite-simple snaplet To use it in your app include this in your application state and use sqliteInit to initialize it",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Sqlite",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of SQLData\n elements.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of SQLData elements",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "ToRow",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v::.",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "h :. t",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": ":.",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:Only",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Only",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:Sqlite",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Sqlite",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#Sqlite",
        "fct-type": "function",
        "title": "Sqlite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "Sqlite",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ewithSqlite\u003c/a\u003e\u003c/code\u003e for notes on concurrent access.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Query -\u003e q -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "See also withSqlite for notes on concurrent access",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "execute",
        "normalized": "Query-\u003ea-\u003eb()",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": "Query-\u003eq-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ewithSqlite\u003c/a\u003e\u003c/code\u003e for notes on concurrent access.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Query -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "See also withSqlite for notes on concurrent access",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "execute_",
        "normalized": "Query-\u003ea()",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": "Query-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:field",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "field",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "fromOnly",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:fromRow",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "fromRow",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:getSqliteState",
      "description": {
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "m Sqlite",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#getSqliteState",
        "fct-type": "method",
        "title": "getSqliteState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "getSqliteState",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ewithSqlite\u003c/a\u003e\u003c/code\u003e for notes on concurrent access.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Query -\u003e q -\u003e m [r]",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "See query See also withSqlite for notes on concurrent access",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "query",
        "normalized": "Query-\u003ea-\u003eb[c]",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": "Query-\u003eq-\u003em[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ewithSqlite\u003c/a\u003e\u003c/code\u003e for notes on concurrent access.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "Query -\u003e m [r]",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "See query See also withSqlite for notes on concurrent access",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "query_",
        "normalized": "Query-\u003ea[b]",
        "package": "snaplet-sqlite-simple",
        "partial": "",
        "signature": "Query-\u003em[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:sqliteConn",
      "description": {
        "fct-descr": "\u003cp\u003eFunction for retrieving the database connection\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "MVar Connection",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#Sqlite",
        "fct-type": "function",
        "title": "sqliteConn"
      },
      "index": {
        "description": "Function for retrieving the database connection",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "sqliteConn",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:sqliteInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the snaplet\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "SnapletInit b Sqlite",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#sqliteInit",
        "fct-type": "function",
        "title": "sqliteInit"
      },
      "index": {
        "description": "Initialize the snaplet",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "sqliteInit",
        "normalized": "",
        "package": "snaplet-sqlite-simple",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:toRow",
      "description": {
        "fct-descr": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "a -\u003e [SQLData]",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "ToField collection of values",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "toRow",
        "normalized": "a-\u003e[SQLData]",
        "package": "snaplet-sqlite-simple",
        "partial": "Row",
        "signature": "a-\u003e[SQLData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-sqlite-simple/docs/Snap-Snaplet-SqliteSimple.html#v:withSqlite",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for executing a function that needs a database\n connection.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMulti-threading considerations\u003c/em\u003e: The database connection is mutexed\n such that only a single thread can read or write at any given time.\n This means we lose database access parallelism.  Please see\n \u003ca\u003ehttps://github.com/nurpax/snaplet-sqlite-simple/issues/5\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.SqliteSimple",
        "fct-package": "snaplet-sqlite-simple",
        "fct-signature": "(Connection -\u003e IO b) -\u003e m b",
        "fct-source": "src/Snap-Snaplet-SqliteSimple.html#withSqlite",
        "fct-type": "function",
        "title": "withSqlite"
      },
      "index": {
        "description": "Convenience function for executing function that needs database connection Multi-threading considerations The database connection is mutexed such that only single thread can read or write at any given time This means we lose database access parallelism Please see https github.com nurpax snaplet-sqlite-simple issues for more information",
        "hierarchy": "Snap Snaplet SqliteSimple",
        "module": "Snap.Snaplet.SqliteSimple",
        "name": "withSqlite",
        "normalized": "(Connection-\u003eIO a)-\u003eb a",
        "package": "snaplet-sqlite-simple",
        "partial": "Sqlite",
        "signature": "(Connection-\u003eIO b)-\u003em b"
      }
    }
  }
]