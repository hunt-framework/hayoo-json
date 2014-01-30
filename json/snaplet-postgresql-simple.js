[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to use the auth snaplet with your user database stored\nin a PostgreSQL database.  When you run your application with this snaplet, a\nconfig file will be copied into the the \u003ccode\u003esnaplets/postgresql-auth\u003c/code\u003e directory.\nThis file contains all of the configurable options for the snaplet and allows\nyou to change them without recompiling your application.\n\u003c/p\u003e\u003cp\u003eTo use this snaplet in your application enable the session, postgres, and auth\nsnaplets as follows:\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- your own application state here\n     , _sess :: Snaplet SessionManager\n     , _db   :: Snaplet Postgres\n     , _auth :: Snaplet (AuthManager App)\n     }\n\u003c/pre\u003e\u003cp\u003eThen in your initializer you'll have something like this:\n\u003c/p\u003e\u003cpre\u003e d \u003c- nestSnaplet \"db\" db pgsInit\n a \u003c- nestSnaplet \"auth\" auth $ initPostgresAuth sess d\n\u003c/pre\u003e\u003cp\u003eIf you have not already created the database table for users, it will\nautomatically be created for you the first time you run your application.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html",
        "fct-type": "module",
        "title": "PostgresqlSimple"
      },
      "index": {
        "description": "This module allows you to use the auth snaplet with your user database stored in PostgreSQL database When you run your application with this snaplet config file will be copied into the the snaplets postgresql-auth directory This file contains all of the configurable options for the snaplet and allows you to change them without recompiling your application To use this snaplet in your application enable the session postgres and auth snaplets as follows data App App your own application state here sess Snaplet SessionManager db Snaplet Postgres auth Snaplet AuthManager App Then in your initializer you ll have something like this nestSnaplet db db pgsInit nestSnaplet auth auth initPostgresAuth sess If you have not already created the database table for users it will automatically be created for you the first time you run your application",
        "hierarchy": "Snap Snaplet Auth Backends PostgresqlSimple",
        "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
        "name": "PostgresqlSimple",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgresql Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html#v:initPostgresAuth",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer for the postgres backend to the auth snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "SnapletLens b SessionManager-\u003e Snaplet Postgres-\u003e SnapletInit b (AuthManager b)",
        "fct-type": "function",
        "title": "initPostgresAuth"
      },
      "index": {
        "description": "Initializer for the postgres backend to the auth snaplet",
        "hierarchy": "Snap Snaplet Auth Backends PostgresqlSimple",
        "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
        "name": "initPostgresAuth",
        "normalized": "SnapletLens a SessionManager-\u003eSnaplet Postgres-\u003eSnapletInit a(AuthManager a)",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgres Auth",
        "signature": "SnapletLens b SessionManager-\u003eSnaplet Postgres-\u003eSnapletInit b(AuthManager b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis snaplet makes it simple to use a PostgreSQL database from your Snap\napplication and is based on the excellent postgresql-simple library\n(\u003ca\u003ehttp://hackage.haskell.org/package/postgresql-simple\u003c/a\u003e) by Leon Smith\n(adapted from Bryan O'Sullivan's mysql-simple).  Now, adding a database\nto your web app takes just two simple steps.\n\u003c/p\u003e\u003cp\u003eFirst, include this snaplet in your application's state.\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- Other state needed in your app\n     , _db :: Snaplet Postgres\n     }\n\u003c/pre\u003e\u003cp\u003eNext, call the pgsInit from your application's initializer.\n\u003c/p\u003e\u003cpre\u003e appInit = makeSnaplet ... $ do\n     ...\n     d \u003c- nestSnaplet \"db\" db pgsInit\n     return $ App ... d\n\u003c/pre\u003e\u003cp\u003eNow you can use any of the postgresql-simple wrapper functions defined in this\nmodule anywhere in your application handlers.  For instance:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- with db $ query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eOptionally, if you find yourself doing many database queries, you can eliminate some of the boilerplate by defining a HasPostgres instance for your application.\n\u003c/p\u003e\u003cpre\u003e instance HasPostgres (Handler b App) where\n   getPostgresState = with db get\n\u003c/pre\u003e\u003cp\u003eWith this code, our postHandler example no longer requires the \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eThe first time you run an application with the postgresql-simple snaplet, a\nconfiguration file \u003ccode\u003edevel.cfg\u003c/code\u003e is created in the \u003ccode\u003esnaplets/postgresql-simple\u003c/code\u003e\ndirectory underneath your project root.  It specifies how to connect to your\nPostgreSQL server and what user, password, and database to use.  Edit this\nfile and modify the values appropriately and you'll be off and running.\n\u003c/p\u003e\u003cp\u003eIf you want to have out-of-the-box authentication, look at the documentation\nfor the \u003ca\u003eSnap.Snaplet.Auth.Backends.PostgresqlSimple\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html",
        "fct-type": "module",
        "title": "PostgresqlSimple"
      },
      "index": {
        "description": "This snaplet makes it simple to use PostgreSQL database from your Snap application and is based on the excellent postgresql-simple library http hackage.haskell.org package postgresql-simple by Leon Smith adapted from Bryan Sullivan mysql-simple Now adding database to your web app takes just two simple steps First include this snaplet in your application state data App App Other state needed in your app db Snaplet Postgres Next call the pgsInit from your application initializer appInit makeSnaplet do nestSnaplet db db pgsInit return App Now you can use any of the postgresql-simple wrapper functions defined in this module anywhere in your application handlers For instance postHandler Handler App App postHandler do posts with db query select from blog post Optionally if you find yourself doing many database queries you can eliminate some of the boilerplate by defining HasPostgres instance for your application instance HasPostgres Handler App where getPostgresState with db get With this code our postHandler example no longer requires the with function postHandler Handler App App postHandler do posts query select from blog post The first time you run an application with the postgresql-simple snaplet configuration file devel.cfg is created in the snaplets postgresql-simple directory underneath your project root It specifies how to connect to your PostgreSQL server and what user password and database to use Edit this file and modify the values appropriately and you ll be off and running If you want to have out-of-the-box authentication look at the documentation for the Snap.Snaplet.Auth.Backends.PostgresqlSimple module",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "PostgresqlSimple",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgresql Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": ":.",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Wrap binary data for use as bytea value",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Binary",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:FormatError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e could not be formatted correctly.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FormatError"
      },
      "index": {
        "description": "Exception thrown if Query could not be formatted correctly This may occur if the number of characters in the query string does not match the number of parameters provided",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "FormatError",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "FromRow",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:HasPostgres",
      "description": {
        "fct-descr": "\u003cp\u003eInstantiate this typeclass on 'Handler b YourAppState' so this snaplet\n can find the connection source.  If you need to have multiple instances of\n the postgres snaplet in your application, then don't provide this instance\n and leverage the default instance by using \"\u003ccode\u003ewith dbLens\u003c/code\u003e\" in front of calls\n to snaplet-postgresql-simple functions.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#HasPostgres",
        "fct-type": "class",
        "title": "HasPostgres"
      },
      "index": {
        "description": "Instantiate this typeclass on Handler YourAppState so this snaplet can find the connection source If you need to have multiple instances of the postgres snaplet in your application then don provide this instance and leverage the default instance by using with dbLens in front of calls to snaplet-postgresql-simple functions",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "HasPostgres",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Has Postgres",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "In",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:IsolationLevel",
      "description": {
        "fct-descr": "\u003cp\u003eOf the four isolation levels defined by the SQL standard,\n these are the three levels distinguished by PostgreSQL as of version 9.0.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/transaction-iso.html\u003c/a\u003e\n for more information.   Note that prior to PostgreSQL 9.0, \u003ccode\u003e\u003ca\u003eRepeatableRead\u003c/a\u003e\u003c/code\u003e\n was equivalent to \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IsolationLevel"
      },
      "index": {
        "description": "Of the four isolation levels defined by the SQL standard these are the three levels distinguished by PostgreSQL as of version See http www.postgresql.org docs static transaction-iso.html for more information Note that prior to PostgreSQL RepeatableRead was equivalent to Serializable",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "IsolationLevel",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Only",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Postgres",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the postgresql-simple snaplet. To use it in your app\n include this in your application state and use pgsInit to initialize it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
        "fct-type": "data",
        "title": "Postgres"
      },
      "index": {
        "description": "The state for the postgresql-simple snaplet To use it in your app include this in your application state and use pgsInit to initialize it",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Postgres",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgres",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Query",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:QueryError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QueryError"
      },
      "index": {
        "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "QueryError",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ReadWriteMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ResultError",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:SqlError",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "SqlError",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ToRow",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:TransactionMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "TransactionMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v::.",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "h :. t",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": ":.",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Binary",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Binary",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:DefaultIsolationLevel",
      "description": {
        "fct-descr": "\u003cp\u003ethe isolation level will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_isolation\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadCommitted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "DefaultIsolationLevel",
        "fct-type": "function",
        "title": "DefaultIsolationLevel"
      },
      "index": {
        "description": "the isolation level will be taken from PostgreSQL per-connection default transaction isolation variable which is initialized according to the server config The default configuration is ReadCommitted",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "DefaultIsolationLevel",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Default Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:DefaultReadWriteMode",
      "description": {
        "fct-descr": "\u003cp\u003ethe read-write mode will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_read_only\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "DefaultReadWriteMode",
        "fct-type": "function",
        "title": "DefaultReadWriteMode"
      },
      "index": {
        "description": "the read-write mode will be taken from PostgreSQL per-connection default transaction read only variable which is initialized according to the server config The default configuration is ReadWrite",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "DefaultReadWriteMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Default Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:In",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "In a",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "In",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Only",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Only",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Postgres",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Postgres",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
        "fct-type": "function",
        "title": "Postgres"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Postgres",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgres",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadCommitted",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ReadCommitted",
        "fct-type": "function",
        "title": "ReadCommitted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ReadCommitted",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Read Committed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadOnly",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ReadOnly",
        "fct-type": "function",
        "title": "ReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ReadOnly",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadWrite",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ReadWrite",
        "fct-type": "function",
        "title": "ReadWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "ReadWrite",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Read Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:RepeatableRead",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "RepeatableRead",
        "fct-type": "function",
        "title": "RepeatableRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "RepeatableRead",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Repeatable Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Serializable",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Serializable",
        "fct-type": "function",
        "title": "Serializable"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "Serializable",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:SqlError",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "SqlError",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:TransactionMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "TransactionMode",
        "fct-type": "function",
        "title": "TransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "TransactionMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:begin",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#begin",
        "fct-type": "function",
        "title": "begin"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "begin",
        "normalized": "a()",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:beginLevel",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "IsolationLevel -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#beginLevel",
        "fct-type": "function",
        "title": "beginLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "beginLevel",
        "normalized": "IsolationLevel-\u003ea()",
        "package": "snaplet-postgresql-simple",
        "partial": "Level",
        "signature": "IsolationLevel-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:beginMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "TransactionMode -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#beginMode",
        "fct-type": "function",
        "title": "beginMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "beginMode",
        "normalized": "TransactionMode-\u003ea()",
        "package": "snaplet-postgresql-simple",
        "partial": "Mode",
        "signature": "TransactionMode-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:commit",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "commit",
        "normalized": "a()",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Port on \u003ccode\u003e5432\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for setting up connection Defaults are as follows Server on localhost Port on User postgres No password Database postgres Use as in the following example connect defaultConnectInfo connectHost db.example.com",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultIsolationLevel",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "IsolationLevel",
        "fct-type": "function",
        "title": "defaultIsolationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "defaultIsolationLevel",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Isolation Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultReadWriteMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ReadWriteMode",
        "fct-type": "function",
        "title": "defaultReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "defaultReadWriteMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultTransactionMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "TransactionMode",
        "fct-type": "function",
        "title": "defaultTransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "defaultTransactionMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:execute",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e q -\u003e m Int64",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "execute",
        "normalized": "Query-\u003ea-\u003eb Int",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003eq-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:executeMany",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e [q] -\u003e m Int64",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#executeMany",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "executeMany",
        "normalized": "Query-\u003e[a]-\u003eb Int",
        "package": "snaplet-postgresql-simple",
        "partial": "Many",
        "signature": "Query-\u003e[q]-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:execute_",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e m Int64",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "execute_",
        "normalized": "Query-\u003ea Int",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:field",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "RowParser a",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "field",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fold",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e params -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "fold",
        "normalized": "Query-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003ed b",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003eparams-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:foldWithOptions",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "FoldOptions -\u003e Query -\u003e params -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#foldWithOptions",
        "fct-type": "function",
        "title": "foldWithOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "foldWithOptions",
        "normalized": "FoldOptions-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003ed b",
        "package": "snaplet-postgresql-simple",
        "partial": "With Options",
        "signature": "FoldOptions-\u003eQuery-\u003eparams-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:foldWithOptions_",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "FoldOptions -\u003e Query -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#foldWithOptions_",
        "fct-type": "function",
        "title": "foldWithOptions_"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "foldWithOptions_",
        "normalized": "FoldOptions-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003ec a",
        "package": "snaplet-postgresql-simple",
        "partial": "With Options",
        "signature": "FoldOptions-\u003eQuery-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fold_",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#fold_",
        "fct-type": "function",
        "title": "fold_"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "fold_",
        "normalized": "Query-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003ec a",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:forEach",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e q -\u003e (r -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#forEach",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "forEach",
        "normalized": "Query-\u003ea-\u003e(b-\u003eIO())-\u003ec()",
        "package": "snaplet-postgresql-simple",
        "partial": "Each",
        "signature": "Query-\u003eq-\u003e(r-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:forEach_",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e (r -\u003e IO ()) -\u003e m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#forEach_",
        "fct-type": "function",
        "title": "forEach_"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "forEach_",
        "normalized": "Query-\u003e(a-\u003eIO())-\u003eb()",
        "package": "snaplet-postgresql-simple",
        "partial": "Each",
        "signature": "Query-\u003e(r-\u003eIO())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:formatMany",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e [q] -\u003e m ByteString",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#formatMany",
        "fct-type": "function",
        "title": "formatMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "formatMany",
        "normalized": "Query-\u003e[a]-\u003eb ByteString",
        "package": "snaplet-postgresql-simple",
        "partial": "Many",
        "signature": "Query-\u003e[q]-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:formatQuery",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e q -\u003e m ByteString",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#formatQuery",
        "fct-type": "function",
        "title": "formatQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "formatQuery",
        "normalized": "Query-\u003ea-\u003eb ByteString",
        "package": "snaplet-postgresql-simple",
        "partial": "Query",
        "signature": "Query-\u003eq-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "fromBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "fromBinary",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "fromOnly",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromRow",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "RowParser a",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "fromRow",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:getConnectionString",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a connection string from a config\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Config -\u003e IO ByteString",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#getConnectionString",
        "fct-type": "function",
        "title": "getConnectionString"
      },
      "index": {
        "description": "Produce connection string from config",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "getConnectionString",
        "normalized": "Config-\u003eIO ByteString",
        "package": "snaplet-postgresql-simple",
        "partial": "Connection String",
        "signature": "Config-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:getPostgresState",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "m Postgres",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#getPostgresState",
        "fct-type": "method",
        "title": "getPostgresState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "getPostgresState",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Postgres State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:isolationLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "!IsolationLevel",
        "fct-type": "function",
        "title": "isolationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "isolationLevel",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgPool",
      "description": {
        "fct-descr": "\u003cp\u003eFunction for retrieving the connection pool\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Pool Connection",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
        "fct-type": "function",
        "title": "pgPool"
      },
      "index": {
        "description": "Function for retrieving the connection pool",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "pgPool",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgsInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the snaplet\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "SnapletInit b Postgres",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#pgsInit",
        "fct-type": "function",
        "title": "pgsInit"
      },
      "index": {
        "description": "Initialize the snaplet",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "pgsInit",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgsInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the snaplet\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Config -\u003e SnapletInit b Postgres",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#pgsInit%27",
        "fct-type": "function",
        "title": "pgsInit'"
      },
      "index": {
        "description": "Initialize the snaplet",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "pgsInit'",
        "normalized": "Config-\u003eSnapletInit a Postgres",
        "package": "snaplet-postgresql-simple",
        "partial": "Init'",
        "signature": "Config-\u003eSnapletInit b Postgres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e q -\u003e m [r]",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "See query",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "query",
        "normalized": "Query-\u003ea-\u003eb[c]",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003eq-\u003em[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e m [r]",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "See query",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "query_",
        "normalized": "Query-\u003ea[b]",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003em[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:readWriteMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "!ReadWriteMode",
        "fct-type": "function",
        "title": "readWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "readWriteMode",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:returning",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereturning\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "Query -\u003e [q] -\u003e m [r]",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#returning",
        "fct-type": "function",
        "title": "returning"
      },
      "index": {
        "description": "See returning",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "returning",
        "normalized": "Query-\u003e[a]-\u003eb[c]",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "Query-\u003e[q]-\u003em[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:rollback",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "m ()",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#rollback",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "rollback",
        "normalized": "a()",
        "package": "snaplet-postgresql-simple",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorDetail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "sqlErrorDetail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "sqlErrorDetail",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Error Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorHint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "sqlErrorHint"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "sqlErrorHint",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Error Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "sqlErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "sqlErrorMsg",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlExecStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ExecStatus",
        "fct-type": "function",
        "title": "sqlExecStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "sqlExecStatus",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "Exec Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "sqlState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "sqlState",
        "normalized": "",
        "package": "snaplet-postgresql-simple",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:toRow",
      "description": {
        "fct-descr": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "a -\u003e [Action]",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "ToField collection of values",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "toRow",
        "normalized": "a-\u003e[Action]",
        "package": "snaplet-postgresql-simple",
        "partial": "Row",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransaction",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "withTransaction",
        "normalized": "a b-\u003ea b",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransactionLevel",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "IsolationLevel -\u003e m a -\u003e m a",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransactionLevel",
        "fct-type": "function",
        "title": "withTransactionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "withTransactionLevel",
        "normalized": "IsolationLevel-\u003ea b-\u003ea b",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction Level",
        "signature": "IsolationLevel-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransactionMode",
      "description": {
        "fct-module": "Snap.Snaplet.PostgresqlSimple",
        "fct-package": "snaplet-postgresql-simple",
        "fct-signature": "TransactionMode -\u003e m a -\u003e m a",
        "fct-source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransactionMode",
        "fct-type": "function",
        "title": "withTransactionMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet PostgresqlSimple",
        "module": "Snap.Snaplet.PostgresqlSimple",
        "name": "withTransactionMode",
        "normalized": "TransactionMode-\u003ea b-\u003ea b",
        "package": "snaplet-postgresql-simple",
        "partial": "Transaction Mode",
        "signature": "TransactionMode-\u003em a-\u003em a"
      }
    }
  }
]