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
        "word": "snaplet-postgresql-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to use the auth snaplet with your user database stored\nin a PostgreSQL database.  When you run your application with this snaplet, a\nconfig file will be copied into the the \u003ccode\u003esnaplets/postgresql-auth\u003c/code\u003e directory.\nThis file contains all of the configurable options for the snaplet and allows\nyou to change them without recompiling your application.\n\u003c/p\u003e\u003cp\u003eTo use this snaplet in your application enable the session, postgres, and auth\nsnaplets as follows:\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- your own application state here\n     , _sess :: Snaplet SessionManager\n     , _db   :: Snaplet Postgres\n     , _auth :: Snaplet (AuthManager App)\n     }\n\u003c/pre\u003e\u003cp\u003eThen in your initializer you'll have something like this:\n\u003c/p\u003e\u003cpre\u003e d \u003c- nestSnaplet \"db\" db pgsInit\n a \u003c- nestSnaplet \"auth\" auth $ initPostgresAuth sess d\n\u003c/pre\u003e\u003cp\u003eIf you have not already created the database table for users, it will\nautomatically be created for you the first time you run your application.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
          "name": "PostgresqlSimple",
          "package": "snaplet-postgresql-simple",
          "source": "src/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows you to use the auth snaplet with your user database stored in PostgreSQL database When you run your application with this snaplet config file will be copied into the the snaplets postgresql-auth directory This file contains all of the configurable options for the snaplet and allows you to change them without recompiling your application To use this snaplet in your application enable the session postgres and auth snaplets as follows data App App your own application state here sess Snaplet SessionManager db Snaplet Postgres auth Snaplet AuthManager App Then in your initializer you ll have something like this nestSnaplet db db pgsInit nestSnaplet auth auth initPostgresAuth sess If you have not already created the database table for users it will automatically be created for you the first time you run your application",
          "hierarchy": "Snap Snaplet Auth Backends PostgresqlSimple",
          "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
          "name": "PostgresqlSimple",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgresql Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer for the postgres backend to the auth snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
          "name": "initPostgresAuth",
          "package": "snaplet-postgresql-simple",
          "signature": "SnapletLens b SessionManager-\u003e Snaplet Postgres-\u003e SnapletInit b (AuthManager b)",
          "type": "function"
        },
        "index": {
          "description": "Initializer for the postgres backend to the auth snaplet",
          "hierarchy": "Snap Snaplet Auth Backends PostgresqlSimple",
          "module": "Snap.Snaplet.Auth.Backends.PostgresqlSimple",
          "name": "initPostgresAuth",
          "normalized": "SnapletLens a SessionManager-\u003eSnaplet Postgres-\u003eSnapletInit a(AuthManager a)",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgres Auth",
          "signature": "SnapletLens b SessionManager-\u003eSnaplet Postgres-\u003eSnapletInit b(AuthManager b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-Auth-Backends-PostgresqlSimple.html#v:initPostgresAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis snaplet makes it simple to use a PostgreSQL database from your Snap\napplication and is based on the excellent postgresql-simple library\n(\u003ca\u003ehttp://hackage.haskell.org/package/postgresql-simple\u003c/a\u003e) by Leon Smith\n(adapted from Bryan O'Sullivan's mysql-simple).  Now, adding a database\nto your web app takes just two simple steps.\n\u003c/p\u003e\u003cp\u003eFirst, include this snaplet in your application's state.\n\u003c/p\u003e\u003cpre\u003e data App = App\n     { ... -- Other state needed in your app\n     , _db :: Snaplet Postgres\n     }\n\u003c/pre\u003e\u003cp\u003eNext, call the pgsInit from your application's initializer.\n\u003c/p\u003e\u003cpre\u003e appInit = makeSnaplet ... $ do\n     ...\n     d \u003c- nestSnaplet \"db\" db pgsInit\n     return $ App ... d\n\u003c/pre\u003e\u003cp\u003eNow you can use any of the postgresql-simple wrapper functions defined in this\nmodule anywhere in your application handlers.  For instance:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- with db $ query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eOptionally, if you find yourself doing many database queries, you can eliminate some of the boilerplate by defining a HasPostgres instance for your application.\n\u003c/p\u003e\u003cpre\u003e instance HasPostgres (Handler b App) where\n   getPostgresState = with db get\n\u003c/pre\u003e\u003cp\u003eWith this code, our postHandler example no longer requires the \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e postHandler :: Handler App App ()\n postHandler = do\n     posts \u003c- query_ \"select * from blog_post\"\n     ...\n\u003c/pre\u003e\u003cp\u003eThe first time you run an application with the postgresql-simple snaplet, a\nconfiguration file \u003ccode\u003edevel.cfg\u003c/code\u003e is created in the \u003ccode\u003esnaplets/postgresql-simple\u003c/code\u003e\ndirectory underneath your project root.  It specifies how to connect to your\nPostgreSQL server and what user, password, and database to use.  Edit this\nfile and modify the values appropriately and you'll be off and running.\n\u003c/p\u003e\u003cp\u003eIf you want to have out-of-the-box authentication, look at the documentation\nfor the \u003ca\u003eSnap.Snaplet.Auth.Backends.PostgresqlSimple\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "PostgresqlSimple",
          "package": "snaplet-postgresql-simple",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html",
          "type": "module"
        },
        "index": {
          "description": "This snaplet makes it simple to use PostgreSQL database from your Snap application and is based on the excellent postgresql-simple library http hackage.haskell.org package postgresql-simple by Leon Smith adapted from Bryan Sullivan mysql-simple Now adding database to your web app takes just two simple steps First include this snaplet in your application state data App App Other state needed in your app db Snaplet Postgres Next call the pgsInit from your application initializer appInit makeSnaplet do nestSnaplet db db pgsInit return App Now you can use any of the postgresql-simple wrapper functions defined in this module anywhere in your application handlers For instance postHandler Handler App App postHandler do posts with db query select from blog post Optionally if you find yourself doing many database queries you can eliminate some of the boilerplate by defining HasPostgres instance for your application instance HasPostgres Handler App where getPostgresState with db get With this code our postHandler example no longer requires the with function postHandler Handler App App postHandler do posts query select from blog post The first time you run an application with the postgresql-simple snaplet configuration file devel.cfg is created in the snaplets postgresql-simple directory underneath your project root It specifies how to connect to your PostgreSQL server and what user password and database to use Edit this file and modify the values appropriately and you ll be off and running If you want to have out-of-the-box authentication look at the documentation for the Snap.Snaplet.Auth.Backends.PostgresqlSimple module",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "PostgresqlSimple",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgresql Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": ":.",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": ":.",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap binary data for use as a \u003ccode\u003ebytea\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Binary",
          "package": "snaplet-postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap binary data for use as bytea value",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Binary",
          "package": "snaplet-postgresql-simple",
          "partial": "Binary",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e could not be formatted correctly.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "FormatError",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if Query could not be formatted correctly This may occur if the number of characters in the query string does not match the number of parameters provided",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "FormatError",
          "package": "snaplet-postgresql-simple",
          "partial": "Format Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:FormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can be defined outside of postgresql-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e evaluates it's result to WHNF, so the caveats listed in\n mysql-simple and very early versions of postgresql-simple no longer apply.\n Instead, look at the caveats associated with user-defined implementations\n of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "FromRow",
          "package": "snaplet-postgresql-simple",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can be defined outside of postgresql-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note that field evaluates it result to WHNF so the caveats listed in mysql-simple and very early versions of postgresql-simple no longer apply Instead look at the caveats associated with user-defined implementations of fromField",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "FromRow",
          "package": "snaplet-postgresql-simple",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiate this typeclass on 'Handler b YourAppState' so this snaplet\n can find the connection source.  If you need to have multiple instances of\n the postgres snaplet in your application, then don't provide this instance\n and leverage the default instance by using \"\u003ccode\u003ewith dbLens\u003c/code\u003e\" in front of calls\n to snaplet-postgresql-simple functions.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "HasPostgres",
          "package": "snaplet-postgresql-simple",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#HasPostgres",
          "type": "class"
        },
        "index": {
          "description": "Instantiate this typeclass on Handler YourAppState so this snaplet can find the connection source If you need to have multiple instances of the postgres snaplet in your application then don provide this instance and leverage the default instance by using with dbLens in front of calls to snaplet-postgresql-simple functions",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "HasPostgres",
          "package": "snaplet-postgresql-simple",
          "partial": "Has Postgres",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:HasPostgres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (Only (In [3,4,5]))\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "In",
          "package": "snaplet-postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in Only In",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "In",
          "package": "snaplet-postgresql-simple",
          "partial": "In",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOf the four isolation levels defined by the SQL standard,\n these are the three levels distinguished by PostgreSQL as of version 9.0.\n See \u003ca\u003ehttp://www.postgresql.org/docs/9.1/static/transaction-iso.html\u003c/a\u003e\n for more information.   Note that prior to PostgreSQL 9.0, \u003ccode\u003e\u003ca\u003eRepeatableRead\u003c/a\u003e\u003c/code\u003e\n was equivalent to \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "IsolationLevel",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "Of the four isolation levels defined by the SQL standard these are the three levels distinguished by PostgreSQL as of version See http www.postgresql.org docs static transaction-iso.html for more information Note that prior to PostgreSQL RepeatableRead was equivalent to Serializable",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "IsolationLevel",
          "package": "snaplet-postgresql-simple",
          "partial": "Isolation Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:IsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Only",
          "package": "snaplet-postgresql-simple",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Only",
          "package": "snaplet-postgresql-simple",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the postgresql-simple snaplet. To use it in your app\n include this in your application state and use pgsInit to initialize it.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Postgres",
          "package": "snaplet-postgresql-simple",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
          "type": "data"
        },
        "index": {
          "description": "The state for the postgresql-simple snaplet To use it in your app include this in your application state and use pgsInit to initialize it",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Postgres",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgres",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Postgres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.PostgreSQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Query",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.PostgreSQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Query",
          "package": "snaplet-postgresql-simple",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if \u003ccode\u003equery\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003eexecute\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "QueryError",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "QueryError",
          "package": "snaplet-postgresql-simple",
          "partial": "Query Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:QueryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Read Write Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ResultError",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if conversion from SQL value to Haskell value fails",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ResultError",
          "package": "snaplet-postgresql-simple",
          "partial": "Result Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "SqlError",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "SqlError",
          "package": "snaplet-postgresql-simple",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003erender\u003c/code\u003e method of the \u003ccode\u003eParam\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ToRow",
          "package": "snaplet-postgresql-simple",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ToRow",
          "package": "snaplet-postgresql-simple",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "TransactionMode",
          "package": "snaplet-postgresql-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "TransactionMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#t:TransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": ":.",
          "package": "snaplet-postgresql-simple",
          "signature": "h :. t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": ":.",
          "package": "snaplet-postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Binary",
          "package": "snaplet-postgresql-simple",
          "signature": "Binary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Binary",
          "package": "snaplet-postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe isolation level will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_isolation\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadCommitted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "DefaultIsolationLevel",
          "package": "snaplet-postgresql-simple",
          "signature": "DefaultIsolationLevel",
          "type": "function"
        },
        "index": {
          "description": "the isolation level will be taken from PostgreSQL per-connection default transaction isolation variable which is initialized according to the server config The default configuration is ReadCommitted",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "DefaultIsolationLevel",
          "package": "snaplet-postgresql-simple",
          "partial": "Default Isolation Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:DefaultIsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe read-write mode will be taken from\n   PostgreSQL's per-connection\n   \u003ccode\u003edefault_transaction_read_only\u003c/code\u003e variable,\n   which is initialized according to the\n   server's config.  The default configuration\n   is \u003ccode\u003e\u003ca\u003eReadWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "DefaultReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "signature": "DefaultReadWriteMode",
          "type": "function"
        },
        "index": {
          "description": "the read-write mode will be taken from PostgreSQL per-connection default transaction read only variable which is initialized according to the server config The default configuration is ReadWrite",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "DefaultReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Default Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:DefaultReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "In",
          "package": "snaplet-postgresql-simple",
          "signature": "In a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "In",
          "package": "snaplet-postgresql-simple",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Only",
          "package": "snaplet-postgresql-simple",
          "signature": "Only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Only",
          "package": "snaplet-postgresql-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Postgres",
          "package": "snaplet-postgresql-simple",
          "signature": "Postgres",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Postgres",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Postgres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadCommitted",
          "package": "snaplet-postgresql-simple",
          "signature": "ReadCommitted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadCommitted",
          "package": "snaplet-postgresql-simple",
          "partial": "Read Committed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadCommitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadOnly",
          "package": "snaplet-postgresql-simple",
          "signature": "ReadOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadOnly",
          "package": "snaplet-postgresql-simple",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadWrite",
          "package": "snaplet-postgresql-simple",
          "signature": "ReadWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "ReadWrite",
          "package": "snaplet-postgresql-simple",
          "partial": "Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "RepeatableRead",
          "package": "snaplet-postgresql-simple",
          "signature": "RepeatableRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "RepeatableRead",
          "package": "snaplet-postgresql-simple",
          "partial": "Repeatable Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:RepeatableRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Serializable",
          "package": "snaplet-postgresql-simple",
          "signature": "Serializable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "Serializable",
          "package": "snaplet-postgresql-simple",
          "partial": "Serializable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "SqlError",
          "package": "snaplet-postgresql-simple",
          "signature": "SqlError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "SqlError",
          "package": "snaplet-postgresql-simple",
          "partial": "Sql Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "TransactionMode",
          "package": "snaplet-postgresql-simple",
          "signature": "TransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "TransactionMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:TransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "begin",
          "package": "snaplet-postgresql-simple",
          "signature": "m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#begin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "begin",
          "normalized": "a()",
          "package": "snaplet-postgresql-simple",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "beginLevel",
          "package": "snaplet-postgresql-simple",
          "signature": "IsolationLevel -\u003e m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#beginLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "beginLevel",
          "normalized": "IsolationLevel-\u003ea()",
          "package": "snaplet-postgresql-simple",
          "partial": "Level",
          "signature": "IsolationLevel-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:beginLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "beginMode",
          "package": "snaplet-postgresql-simple",
          "signature": "TransactionMode -\u003e m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#beginMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "beginMode",
          "normalized": "TransactionMode-\u003ea()",
          "package": "snaplet-postgresql-simple",
          "partial": "Mode",
          "signature": "TransactionMode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:beginMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "commit",
          "package": "snaplet-postgresql-simple",
          "signature": "m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#commit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "commit",
          "normalized": "a()",
          "package": "snaplet-postgresql-simple",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Port on \u003ccode\u003e5432\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003epostgres\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultConnectInfo",
          "package": "snaplet-postgresql-simple",
          "signature": "ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Default information for setting up connection Defaults are as follows Server on localhost Port on User postgres No password Database postgres Use as in the following example connect defaultConnectInfo connectHost db.example.com",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultConnectInfo",
          "package": "snaplet-postgresql-simple",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultIsolationLevel",
          "package": "snaplet-postgresql-simple",
          "signature": "IsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultIsolationLevel",
          "package": "snaplet-postgresql-simple",
          "partial": "Isolation Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultIsolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultReadWriteMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultTransactionMode",
          "package": "snaplet-postgresql-simple",
          "signature": "TransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "defaultTransactionMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:defaultTransactionMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "execute",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e q -\u003e m Int64",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "execute",
          "normalized": "Query-\u003ea-\u003eb Int",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003eq-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "executeMany",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e [q] -\u003e m Int64",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#executeMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "executeMany",
          "normalized": "Query-\u003e[a]-\u003eb Int",
          "package": "snaplet-postgresql-simple",
          "partial": "Many",
          "signature": "Query-\u003e[q]-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:executeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "execute_",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e m Int64",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#execute_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "execute_",
          "normalized": "Query-\u003ea Int",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:execute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "field",
          "package": "snaplet-postgresql-simple",
          "signature": "RowParser a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "field",
          "package": "snaplet-postgresql-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fold",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e params -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fold",
          "normalized": "Query-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003ed b",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003eparams-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "foldWithOptions",
          "package": "snaplet-postgresql-simple",
          "signature": "FoldOptions -\u003e Query -\u003e params -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#foldWithOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "foldWithOptions",
          "normalized": "FoldOptions-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003ed b",
          "package": "snaplet-postgresql-simple",
          "partial": "With Options",
          "signature": "FoldOptions-\u003eQuery-\u003eparams-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:foldWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "foldWithOptions_",
          "package": "snaplet-postgresql-simple",
          "signature": "FoldOptions -\u003e Query -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#foldWithOptions_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "foldWithOptions_",
          "normalized": "FoldOptions-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003ec a",
          "package": "snaplet-postgresql-simple",
          "partial": "With Options",
          "signature": "FoldOptions-\u003eQuery-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:foldWithOptions_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fold_",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e b -\u003e (b -\u003e row -\u003e IO b) -\u003e m b",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#fold_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fold_",
          "normalized": "Query-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003ec a",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003eb-\u003e(b-\u003erow-\u003eIO b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "forEach",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e q -\u003e (r -\u003e IO ()) -\u003e m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#forEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "forEach",
          "normalized": "Query-\u003ea-\u003e(b-\u003eIO())-\u003ec()",
          "package": "snaplet-postgresql-simple",
          "partial": "Each",
          "signature": "Query-\u003eq-\u003e(r-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:forEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "forEach_",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e (r -\u003e IO ()) -\u003e m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#forEach_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "forEach_",
          "normalized": "Query-\u003e(a-\u003eIO())-\u003eb()",
          "package": "snaplet-postgresql-simple",
          "partial": "Each",
          "signature": "Query-\u003e(r-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:forEach_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "formatMany",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e [q] -\u003e m ByteString",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#formatMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "formatMany",
          "normalized": "Query-\u003e[a]-\u003eb ByteString",
          "package": "snaplet-postgresql-simple",
          "partial": "Many",
          "signature": "Query-\u003e[q]-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:formatMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "formatQuery",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e q -\u003e m ByteString",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#formatQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "formatQuery",
          "normalized": "Query-\u003ea-\u003eb ByteString",
          "package": "snaplet-postgresql-simple",
          "partial": "Query",
          "signature": "Query-\u003eq-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:formatQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromBinary",
          "package": "snaplet-postgresql-simple",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromBinary",
          "package": "snaplet-postgresql-simple",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromOnly",
          "package": "snaplet-postgresql-simple",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromOnly",
          "package": "snaplet-postgresql-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromRow",
          "package": "snaplet-postgresql-simple",
          "signature": "RowParser a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "fromRow",
          "package": "snaplet-postgresql-simple",
          "partial": "Row",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:fromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a connection string from a config\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "getConnectionString",
          "package": "snaplet-postgresql-simple",
          "signature": "Config -\u003e IO ByteString",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#getConnectionString",
          "type": "function"
        },
        "index": {
          "description": "Produce connection string from config",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "getConnectionString",
          "normalized": "Config-\u003eIO ByteString",
          "package": "snaplet-postgresql-simple",
          "partial": "Connection String",
          "signature": "Config-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:getConnectionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "getPostgresState",
          "package": "snaplet-postgresql-simple",
          "signature": "m Postgres",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#getPostgresState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "getPostgresState",
          "package": "snaplet-postgresql-simple",
          "partial": "Postgres State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:getPostgresState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "isolationLevel",
          "package": "snaplet-postgresql-simple",
          "signature": "IsolationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "isolationLevel",
          "package": "snaplet-postgresql-simple",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:isolationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for retrieving the connection pool\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgPool",
          "package": "snaplet-postgresql-simple",
          "signature": "Pool Connection",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#Postgres",
          "type": "function"
        },
        "index": {
          "description": "Function for retrieving the connection pool",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgPool",
          "package": "snaplet-postgresql-simple",
          "partial": "Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the snaplet\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgsInit",
          "package": "snaplet-postgresql-simple",
          "signature": "SnapletInit b Postgres",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#pgsInit",
          "type": "function"
        },
        "index": {
          "description": "Initialize the snaplet",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgsInit",
          "package": "snaplet-postgresql-simple",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgsInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the snaplet\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgsInit'",
          "package": "snaplet-postgresql-simple",
          "signature": "Config -\u003e SnapletInit b Postgres",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#pgsInit%27",
          "type": "function"
        },
        "index": {
          "description": "Initialize the snaplet",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "pgsInit'",
          "normalized": "Config-\u003eSnapletInit a Postgres",
          "package": "snaplet-postgresql-simple",
          "partial": "Init'",
          "signature": "Config-\u003eSnapletInit b Postgres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:pgsInit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "query",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e q -\u003e m [r]",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#query",
          "type": "function"
        },
        "index": {
          "description": "See query",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "query",
          "normalized": "Query-\u003ea-\u003eb[c]",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003eq-\u003em[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equery_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "query_",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e m [r]",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#query_",
          "type": "function"
        },
        "index": {
          "description": "See query",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "query_",
          "normalized": "Query-\u003ea[b]",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003em[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:query_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "readWriteMode",
          "package": "snaplet-postgresql-simple",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "readWriteMode",
          "package": "snaplet-postgresql-simple",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:readWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereturning\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "returning",
          "package": "snaplet-postgresql-simple",
          "signature": "Query -\u003e [q] -\u003e m [r]",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#returning",
          "type": "function"
        },
        "index": {
          "description": "See returning",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "returning",
          "normalized": "Query-\u003e[a]-\u003eb[c]",
          "package": "snaplet-postgresql-simple",
          "signature": "Query-\u003e[q]-\u003em[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:returning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "rollback",
          "package": "snaplet-postgresql-simple",
          "signature": "m ()",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#rollback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "rollback",
          "normalized": "a()",
          "package": "snaplet-postgresql-simple",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorDetail",
          "package": "snaplet-postgresql-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorDetail",
          "package": "snaplet-postgresql-simple",
          "partial": "Error Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorHint",
          "package": "snaplet-postgresql-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorHint",
          "package": "snaplet-postgresql-simple",
          "partial": "Error Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorMsg",
          "package": "snaplet-postgresql-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlErrorMsg",
          "package": "snaplet-postgresql-simple",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlExecStatus",
          "package": "snaplet-postgresql-simple",
          "signature": "ExecStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlExecStatus",
          "package": "snaplet-postgresql-simple",
          "partial": "Exec Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlExecStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlState",
          "package": "snaplet-postgresql-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "sqlState",
          "package": "snaplet-postgresql-simple",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:sqlState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "toRow",
          "package": "snaplet-postgresql-simple",
          "signature": "a -\u003e [Action]",
          "type": "method"
        },
        "index": {
          "description": "ToField collection of values",
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "toRow",
          "normalized": "a-\u003e[Action]",
          "package": "snaplet-postgresql-simple",
          "partial": "Row",
          "signature": "a-\u003e[Action]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransaction",
          "package": "snaplet-postgresql-simple",
          "signature": "m a -\u003e m a",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransaction",
          "normalized": "a b-\u003ea b",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransactionLevel",
          "package": "snaplet-postgresql-simple",
          "signature": "IsolationLevel -\u003e m a -\u003e m a",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransactionLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransactionLevel",
          "normalized": "IsolationLevel-\u003ea b-\u003ea b",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction Level",
          "signature": "IsolationLevel-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransactionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransactionMode",
          "package": "snaplet-postgresql-simple",
          "signature": "TransactionMode -\u003e m a -\u003e m a",
          "source": "src/Snap-Snaplet-PostgresqlSimple.html#withTransactionMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet PostgresqlSimple",
          "module": "Snap.Snaplet.PostgresqlSimple",
          "name": "withTransactionMode",
          "normalized": "TransactionMode-\u003ea b-\u003ea b",
          "package": "snaplet-postgresql-simple",
          "partial": "Transaction Mode",
          "signature": "TransactionMode-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-postgresql-simple/docs/Snap-Snaplet-PostgresqlSimple.html#v:withTransactionMode"
      }
    }
  ]
]