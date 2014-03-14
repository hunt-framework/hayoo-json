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
        "word": "dbmigrations"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Backend.HDBC",
          "name": "HDBC",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Backend-HDBC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Backend HDBC",
          "module": "Database.Schema.Migrations.Backend.HDBC",
          "name": "HDBC",
          "package": "dbmigrations",
          "partial": "HDBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend-HDBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Backend",
          "name": "Backend",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Backend.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "Backend",
          "package": "dbmigrations",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Backend represents a database engine backend such as MySQL or\n SQLite.  A Backend supplies relatively low-level functions for\n inspecting the backend's state, applying migrations, and reverting\n migrations.  A Backend also supplies the migration necessary to\n \u003ca\u003ebootstrap\u003c/a\u003e a backend so that it can track which migrations are\n installed.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "Backend",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Backend.html#Backend",
          "type": "class"
        },
        "index": {
          "description": "Backend represents database engine backend such as MySQL or SQLite Backend supplies relatively low-level functions for inspecting the backend state applying migrations and reverting migrations Backend also supplies the migration necessary to bootstrap backend so that it can track which migrations are installed",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "Backend",
          "package": "dbmigrations",
          "partial": "Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the specified migration on the backend.  applyMigration\n does NOT assume control of the transaction, since it expects\n the transaction to (possibly) cover more than one\n applyMigration operation.  The caller is expected to call\n commit at the appropriate time.  If the application fails, the\n underlying SqlError is raised and a manual rollback may be\n necessary; for this, see withTransaction from HDBC.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "applyMigration",
          "package": "dbmigrations",
          "signature": "b -\u003e Migration -\u003e m ()",
          "source": "src/Database-Schema-Migrations-Backend.html#applyMigration",
          "type": "method"
        },
        "index": {
          "description": "Apply the specified migration on the backend applyMigration does NOT assume control of the transaction since it expects the transaction to possibly cover more than one applyMigration operation The caller is expected to call commit at the appropriate time If the application fails the underlying SqlError is raised and manual rollback may be necessary for this see withTransaction from HDBC",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "applyMigration",
          "normalized": "a-\u003eMigration-\u003eb()",
          "package": "dbmigrations",
          "partial": "Migration",
          "signature": "b-\u003eMigration-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:applyMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe migration necessary to bootstrap a database with this\n connection interface.  This might differ slightly from one\n backend to another.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "getBootstrapMigration",
          "package": "dbmigrations",
          "signature": "b -\u003e m Migration",
          "source": "src/Database-Schema-Migrations-Backend.html#getBootstrapMigration",
          "type": "method"
        },
        "index": {
          "description": "The migration necessary to bootstrap database with this connection interface This might differ slightly from one backend to another",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "getBootstrapMigration",
          "normalized": "a-\u003eb Migration",
          "package": "dbmigrations",
          "partial": "Bootstrap Migration",
          "signature": "b-\u003em Migration",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:getBootstrapMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of installed migration names from the backend.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "getMigrations",
          "package": "dbmigrations",
          "signature": "b -\u003e m [String]",
          "source": "src/Database-Schema-Migrations-Backend.html#getMigrations",
          "type": "method"
        },
        "index": {
          "description": "Returns list of installed migration names from the backend",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "getMigrations",
          "normalized": "a-\u003eb[String]",
          "package": "dbmigrations",
          "partial": "Migrations",
          "signature": "b-\u003em[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:getMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the backend has been bootstrapped.  A backend\n has been bootstrapped if is capable of tracking which\n migrations have been installed; the \u003ca\u003ebootstrap migration\u003c/a\u003e\n provided by getBootstrapMigration should suffice to bootstrap\n the backend.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "isBootstrapped",
          "package": "dbmigrations",
          "signature": "b -\u003e m Bool",
          "source": "src/Database-Schema-Migrations-Backend.html#isBootstrapped",
          "type": "method"
        },
        "index": {
          "description": "Returns whether the backend has been bootstrapped backend has been bootstrapped if is capable of tracking which migrations have been installed the bootstrap migration provided by getBootstrapMigration should suffice to bootstrap the backend",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "isBootstrapped",
          "normalized": "a-\u003eb Bool",
          "package": "dbmigrations",
          "partial": "Bootstrapped",
          "signature": "b-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:isBootstrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRevert the specified migration from the backend and record\n this action in the table which tracks installed migrations.\n revertMigration does NOT assume control of the transaction,\n since it expects the transaction to (possibly) cover more than\n one revertMigration operation.  The caller is expected to call\n commit at the appropriate time.  If the revert fails, the\n underlying SqlError is raised and a manual rollback may be\n necessary; for this, see withTransaction from HDBC.  If the\n specified migration does not supply a revert instruction, this\n has no effect other than bookkeeping.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "revertMigration",
          "package": "dbmigrations",
          "signature": "b -\u003e Migration -\u003e m ()",
          "source": "src/Database-Schema-Migrations-Backend.html#revertMigration",
          "type": "method"
        },
        "index": {
          "description": "Revert the specified migration from the backend and record this action in the table which tracks installed migrations revertMigration does NOT assume control of the transaction since it expects the transaction to possibly cover more than one revertMigration operation The caller is expected to call commit at the appropriate time If the revert fails the underlying SqlError is raised and manual rollback may be necessary for this see withTransaction from HDBC If the specified migration does not supply revert instruction this has no effect other than bookkeeping",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "revertMigration",
          "normalized": "a-\u003eMigration-\u003eb()",
          "package": "dbmigrations",
          "partial": "Migration",
          "signature": "b-\u003eMigration-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:revertMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackend instances should use this as the name of the migration\n returned by getBootstrapMigration; this migration is special\n because it cannot be reverted.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Backend",
          "name": "rootMigrationName",
          "package": "dbmigrations",
          "signature": "String",
          "source": "src/Database-Schema-Migrations-Backend.html#rootMigrationName",
          "type": "function"
        },
        "index": {
          "description": "Backend instances should use this as the name of the migration returned by getBootstrapMigration this migration is special because it cannot be reverted",
          "hierarchy": "Database Schema Migrations Backend",
          "module": "Database.Schema.Migrations.Backend",
          "name": "rootMigrationName",
          "package": "dbmigrations",
          "partial": "Migration Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:rootMigrationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module types and functions for representing a dependency\n graph of arbitrary objects and functions for querying such graphs\n to get dependency and reverse dependency information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "Dependencies",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Dependencies.html",
          "type": "module"
        },
        "index": {
          "description": "This module types and functions for representing dependency graph of arbitrary objects and functions for querying such graphs to get dependency and reverse dependency information",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "Dependencies",
          "package": "dbmigrations",
          "partial": "Dependencies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects supply a representation of their identifiers,\n and a list of other objects upon which they depend.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "Dependable",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Dependencies.html#Dependable",
          "type": "class"
        },
        "index": {
          "description": "Dependable objects supply representation of their identifiers and list of other objects upon which they depend",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "Dependable",
          "package": "dbmigrations",
          "partial": "Dependable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#t:Dependable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDependencyGraph\u003c/a\u003e\u003c/code\u003e represents a collection of objects together\n with a graph of their dependency relationships.  This is intended\n to be used with instances of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "DependencyGraph",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
          "type": "data"
        },
        "index": {
          "description": "DependencyGraph represents collection of objects together with graph of their dependency relationships This is intended to be used with instances of Dependable",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "DependencyGraph",
          "package": "dbmigrations",
          "partial": "Dependency Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#t:DependencyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "DG",
          "package": "dbmigrations",
          "signature": "DG",
          "source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "DG",
          "package": "dbmigrations",
          "partial": "DG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:DG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed \u003ccode\u003e\u003ca\u003eGr\u003c/a\u003e\u003c/code\u003e (graph) of the\n \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects' dependency\n relationships, with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e vertex and\n edge labels.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraph",
          "package": "dbmigrations",
          "signature": "Gr String String",
          "source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
          "type": "function"
        },
        "index": {
          "description": "directed Gr graph of the Dependable objects dependency relationships with String vertex and edge labels",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraph",
          "package": "dbmigrations",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e object\n identifiers to their graph vertex\n indices.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraphNameMap",
          "package": "dbmigrations",
          "signature": "[(String, Int)]",
          "source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
          "type": "function"
        },
        "index": {
          "description": "mapping of Dependable object identifiers to their graph vertex indices",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraphNameMap",
          "normalized": "[(String,Int)]",
          "package": "dbmigrations",
          "partial": "Graph Name Map",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraphNameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects to\n their graph vertex indices.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraphObjectMap",
          "package": "dbmigrations",
          "signature": "[(a, Int)]",
          "source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
          "type": "function"
        },
        "index": {
          "description": "mapping of Dependable objects to their graph vertex indices",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depGraphObjectMap",
          "normalized": "[(a,Int)]",
          "package": "dbmigrations",
          "partial": "Graph Object Map",
          "signature": "[(a,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraphObjectMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of a \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depId",
          "package": "dbmigrations",
          "signature": "a -\u003e String",
          "source": "src/Database-Schema-Migrations-Dependencies.html#depId",
          "type": "method"
        },
        "index": {
          "description": "The identifier of Dependable object",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depId",
          "normalized": "a-\u003eString",
          "package": "dbmigrations",
          "partial": "Id",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a dependency graph and an ID, return the IDs of objects that\n the object depends on.  IDs are returned with least direct\n dependencies first (i.e., the apply order).\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "dependencies",
          "package": "dbmigrations",
          "signature": "DependencyGraph d -\u003e String -\u003e [String]",
          "source": "src/Database-Schema-Migrations-Dependencies.html#dependencies",
          "type": "function"
        },
        "index": {
          "description": "Given dependency graph and an ID return the IDs of objects that the object depends on IDs are returned with least direct dependencies first i.e the apply order",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "dependencies",
          "normalized": "DependencyGraph a-\u003eString-\u003e[String]",
          "package": "dbmigrations",
          "signature": "DependencyGraph d-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifiers of the objects on which \u003ccode\u003ea\u003c/code\u003e depends.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depsOf",
          "package": "dbmigrations",
          "signature": "a -\u003e [String]",
          "source": "src/Database-Schema-Migrations-Dependencies.html#depsOf",
          "type": "method"
        },
        "index": {
          "description": "The identifiers of the objects on which depends",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "depsOf",
          "normalized": "a-\u003e[String]",
          "package": "dbmigrations",
          "partial": "Of",
          "signature": "a-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a dependency graph from a list of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003es.  Return the\n graph on success or return an error message if the graph cannot be\n constructed (e.g., if the graph contains a cycle).\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "mkDepGraph",
          "package": "dbmigrations",
          "signature": "[a] -\u003e Either String (DependencyGraph a)",
          "source": "src/Database-Schema-Migrations-Dependencies.html#mkDepGraph",
          "type": "function"
        },
        "index": {
          "description": "Build dependency graph from list of Dependable Return the graph on success or return an error message if the graph cannot be constructed e.g if the graph contains cycle",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "mkDepGraph",
          "normalized": "[a]-\u003eEither String(DependencyGraph a)",
          "package": "dbmigrations",
          "partial": "Dep Graph",
          "signature": "[a]-\u003eEither String(DependencyGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:mkDepGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a dependency graph and an ID, return the IDs of objects that\n depend on it.  IDs are returned with least direct reverse\n dependencies first (i.e., the revert order).\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "reverseDependencies",
          "package": "dbmigrations",
          "signature": "DependencyGraph d -\u003e String -\u003e [String]",
          "source": "src/Database-Schema-Migrations-Dependencies.html#reverseDependencies",
          "type": "function"
        },
        "index": {
          "description": "Given dependency graph and an ID return the IDs of objects that depend on it IDs are returned with least direct reverse dependencies first i.e the revert order",
          "hierarchy": "Database Schema Migrations Dependencies",
          "module": "Database.Schema.Migrations.Dependencies",
          "name": "reverseDependencies",
          "normalized": "DependencyGraph a-\u003eString-\u003e[String]",
          "package": "dbmigrations",
          "partial": "Dependencies",
          "signature": "DependencyGraph d-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:reverseDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type for interacting with a\n filesystem-backed \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "Filesystem",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Filesystem.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides type for interacting with filesystem-backed MigrationStore",
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "Filesystem",
          "package": "dbmigrations",
          "partial": "Filesystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "FilesystemStore",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "FilesystemStore",
          "package": "dbmigrations",
          "partial": "Filesystem Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#t:FilesystemStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "FSStore",
          "package": "dbmigrations",
          "signature": "FSStore",
          "source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "FSStore",
          "package": "dbmigrations",
          "partial": "FSStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:FSStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a store and migration name, read and parse the associated\n migration and return the migration if successful.  Otherwise return\n a parsing error message.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "migrationFromFile",
          "package": "dbmigrations",
          "signature": "FilesystemStore -\u003e String -\u003e IO (Either String Migration)",
          "source": "src/Database-Schema-Migrations-Filesystem.html#migrationFromFile",
          "type": "function"
        },
        "index": {
          "description": "Given store and migration name read and parse the associated migration and return the migration if successful Otherwise return parsing error message",
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "migrationFromFile",
          "normalized": "FilesystemStore-\u003eString-\u003eIO(Either String Migration)",
          "package": "dbmigrations",
          "partial": "From File",
          "signature": "FilesystemStore-\u003eString-\u003eIO(Either String Migration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:migrationFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a filesystem path, read and parse the file as a migration\n return the \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e if successful.  Otherwise return a parsing\n error message.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "migrationFromPath",
          "package": "dbmigrations",
          "signature": "FilePath -\u003e IO (Either String Migration)",
          "source": "src/Database-Schema-Migrations-Filesystem.html#migrationFromPath",
          "type": "function"
        },
        "index": {
          "description": "Given filesystem path read and parse the file as migration return the Migration if successful Otherwise return parsing error message",
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "migrationFromPath",
          "normalized": "FilePath-\u003eIO(Either String Migration)",
          "package": "dbmigrations",
          "partial": "From Path",
          "signature": "FilePath-\u003eIO(Either String Migration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:migrationFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "storePath",
          "package": "dbmigrations",
          "signature": "FilePath",
          "source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Filesystem",
          "module": "Database.Schema.Migrations.Filesystem",
          "name": "storePath",
          "package": "dbmigrations",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:storePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Migration.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "partial": "Migration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "partial": "Migration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#t:Migration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "MonadMigration",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Migration.html#MonadMigration",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "MonadMigration",
          "package": "dbmigrations",
          "partial": "Monad Migration",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#t:MonadMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "signature": "Migration",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "Migration",
          "package": "dbmigrations",
          "partial": "Migration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:Migration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "getCurrentTime",
          "package": "dbmigrations",
          "signature": "m UTCTime",
          "source": "src/Database-Schema-Migrations-Migration.html#getCurrentTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "getCurrentTime",
          "package": "dbmigrations",
          "partial": "Current Time",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:getCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mApply",
          "package": "dbmigrations",
          "signature": "String",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mApply",
          "package": "dbmigrations",
          "partial": "Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mDeps",
          "package": "dbmigrations",
          "signature": "[String]",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mDeps",
          "normalized": "[String]",
          "package": "dbmigrations",
          "partial": "Deps",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mDesc",
          "package": "dbmigrations",
          "signature": "Maybe String",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mDesc",
          "package": "dbmigrations",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mId",
          "package": "dbmigrations",
          "signature": "String",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mId",
          "package": "dbmigrations",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mRevert",
          "package": "dbmigrations",
          "signature": "Maybe String",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mRevert",
          "package": "dbmigrations",
          "partial": "Revert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mRevert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "mTimestamp",
          "package": "dbmigrations",
          "signature": "UTCTime",
          "source": "src/Database-Schema-Migrations-Migration.html#Migration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "mTimestamp",
          "package": "dbmigrations",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Migration",
          "name": "newMigration",
          "package": "dbmigrations",
          "signature": "String -\u003e m Migration",
          "source": "src/Database-Schema-Migrations-Migration.html#newMigration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Migration",
          "module": "Database.Schema.Migrations.Migration",
          "name": "newMigration",
          "normalized": "String-\u003ea Migration",
          "package": "dbmigrations",
          "partial": "Migration",
          "signature": "String-\u003em Migration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:newMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an abstraction for a \u003cem\u003emigration store\u003c/em\u003e, a\n facility in which \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es can be stored and from which they\n can be loaded.  This module also provides functions for taking\n \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es from a store and converting them into the appropriate\n intermediate types for use with the rest of this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "Store",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Store.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an abstraction for migration store facility in which Migration can be stored and from which they can be loaded This module also provides functions for taking Migration from store and converting them into the appropriate intermediate types for use with the rest of this library",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "Store",
          "package": "dbmigrations",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for types of validation errors for migration maps.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "MapValidationError",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
          "type": "data"
        },
        "index": {
          "description": "type for types of validation errors for migration maps",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "MapValidationError",
          "package": "dbmigrations",
          "partial": "Map Validation Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MapValidationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from migration name to \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e.  This is exported\n for testing purposes, but you'll want to interface with this\n through the encapsulating \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "MigrationMap",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Store.html#MigrationMap",
          "type": "type"
        },
        "index": {
          "description": "mapping from migration name to Migration This is exported for testing purposes but you ll want to interface with this through the encapsulating StoreData type",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "MigrationMap",
          "package": "dbmigrations",
          "partial": "Migration Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MigrationMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for types which represent a storage facility (and a\n monad context in which to operate on the store).  A MigrationStore\n is a facility in which new migrations can be created, and from\n which existing migrations can be loaded.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "MigrationStore",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Store.html#MigrationStore",
          "type": "class"
        },
        "index": {
          "description": "type class for types which represent storage facility and monad context in which to operate on the store MigrationStore is facility in which new migrations can be created and from which existing migrations can be loaded",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "MigrationStore",
          "package": "dbmigrations",
          "partial": "Migration Store",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MigrationStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Store",
          "name": "StoreData",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations-Store.html#StoreData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "StoreData",
          "package": "dbmigrations",
          "partial": "Store Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:StoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error was encountered when\n constructing the dependency graph for\n this store.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "DependencyGraphError",
          "package": "dbmigrations",
          "signature": "DependencyGraphError String",
          "source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
          "type": "function"
        },
        "index": {
          "description": "An error was encountered when constructing the dependency graph for this store",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "DependencyGraphError",
          "package": "dbmigrations",
          "partial": "Dependency Graph Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:DependencyGraphError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA migration claims a dependency on a\n migration that does not exist.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "DependencyReferenceError",
          "package": "dbmigrations",
          "signature": "DependencyReferenceError String String",
          "source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
          "type": "function"
        },
        "index": {
          "description": "migration claims dependency on migration that does not exist",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "DependencyReferenceError",
          "package": "dbmigrations",
          "partial": "Dependency Reference Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:DependencyReferenceError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Store",
          "name": "StoreData",
          "package": "dbmigrations",
          "signature": "StoreData",
          "source": "src/Database-Schema-Migrations-Store.html#StoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "StoreData",
          "package": "dbmigrations",
          "partial": "Store Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:StoreData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDependencyGraph\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e; returns Left if\n the dependency graph cannot be constructed (e.g., due to a\n dependency cycle) or Right on success.  Generally speaking, you\n won't want to use this directly; use \u003ccode\u003e\u003ca\u003eloadMigrations\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "depGraphFromMapping",
          "package": "dbmigrations",
          "signature": "MigrationMap -\u003e Either String (DependencyGraph Migration)",
          "source": "src/Database-Schema-Migrations-Store.html#depGraphFromMapping",
          "type": "function"
        },
        "index": {
          "description": "Create DependencyGraph from MigrationMap returns Left if the dependency graph cannot be constructed e.g due to dependency cycle or Right on success Generally speaking you won want to use this directly use loadMigrations instead",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "depGraphFromMapping",
          "normalized": "MigrationMap-\u003eEither String(DependencyGraph Migration)",
          "package": "dbmigrations",
          "partial": "Graph From Mapping",
          "signature": "MigrationMap-\u003eEither String(DependencyGraph Migration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:depGraphFromMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the full representation of a given migration name;\n mostly for filesystem stores, where the full representation\n includes the store path.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "fullMigrationName",
          "package": "dbmigrations",
          "signature": "s -\u003e String -\u003e m String",
          "source": "src/Database-Schema-Migrations-Store.html#fullMigrationName",
          "type": "method"
        },
        "index": {
          "description": "Return the full representation of given migration name mostly for filesystem stores where the full representation includes the store path",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "fullMigrationName",
          "normalized": "a-\u003eString-\u003eb String",
          "package": "dbmigrations",
          "partial": "Migration Name",
          "signature": "s-\u003eString-\u003em String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:fullMigrationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all available migrations' names.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "getMigrations",
          "package": "dbmigrations",
          "signature": "s -\u003e m [String]",
          "source": "src/Database-Schema-Migrations-Store.html#getMigrations",
          "type": "method"
        },
        "index": {
          "description": "Return list of all available migrations names",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "getMigrations",
          "normalized": "a-\u003eb[String]",
          "package": "dbmigrations",
          "partial": "Migrations",
          "signature": "s-\u003em[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:getMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a migration from the store.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "loadMigration",
          "package": "dbmigrations",
          "signature": "s -\u003e String -\u003e m (Maybe Migration)",
          "source": "src/Database-Schema-Migrations-Store.html#loadMigration",
          "type": "method"
        },
        "index": {
          "description": "Load migration from the store",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "loadMigration",
          "normalized": "a-\u003eString-\u003eb(Maybe Migration)",
          "package": "dbmigrations",
          "partial": "Migration",
          "signature": "s-\u003eString-\u003em(Maybe Migration)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:loadMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad migrations from the specified \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e, validate the\n loaded migrations, and return errors or a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e on\n success.  Generally speaking, this will be the first thing you\n should call once you have constructed a \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "loadMigrations",
          "package": "dbmigrations",
          "signature": "s -\u003e m (Either [MapValidationError] StoreData)",
          "source": "src/Database-Schema-Migrations-Store.html#loadMigrations",
          "type": "function"
        },
        "index": {
          "description": "Load migrations from the specified MigrationStore validate the loaded migrations and return errors or MigrationMap on success Generally speaking this will be the first thing you should call once you have constructed MigrationStore",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "loadMigrations",
          "normalized": "a-\u003eb(Either[MapValidationError]StoreData)",
          "package": "dbmigrations",
          "partial": "Migrations",
          "signature": "s-\u003em(Either[MapValidationError]StoreData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:loadMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a migration to the store.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "saveMigration",
          "package": "dbmigrations",
          "signature": "s -\u003e Migration -\u003e m ()",
          "source": "src/Database-Schema-Migrations-Store.html#saveMigration",
          "type": "method"
        },
        "index": {
          "description": "Save migration to the store",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "saveMigration",
          "normalized": "a-\u003eMigration-\u003eb()",
          "package": "dbmigrations",
          "partial": "Migration",
          "signature": "s-\u003eMigration-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:saveMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Store",
          "name": "storeDataGraph",
          "package": "dbmigrations",
          "signature": "DependencyGraph Migration",
          "source": "src/Database-Schema-Migrations-Store.html#StoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeDataGraph",
          "package": "dbmigrations",
          "partial": "Data Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeDataGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Schema.Migrations.Store",
          "name": "storeDataMapping",
          "package": "dbmigrations",
          "signature": "MigrationMap",
          "source": "src/Database-Schema-Migrations-Store.html#StoreData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeDataMapping",
          "package": "dbmigrations",
          "partial": "Data Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeDataMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for looking up a \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e by name in the\n specified \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeLookup",
          "package": "dbmigrations",
          "signature": "StoreData -\u003e String -\u003e Maybe Migration",
          "source": "src/Database-Schema-Migrations-Store.html#storeLookup",
          "type": "function"
        },
        "index": {
          "description": "convenience function for looking up Migration by name in the specified StoreData",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeLookup",
          "normalized": "StoreData-\u003eString-\u003eMaybe Migration",
          "package": "dbmigrations",
          "partial": "Lookup",
          "signature": "StoreData-\u003eString-\u003eMaybe Migration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for extracting the list of \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es\n extant in the specified \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeMigrations",
          "package": "dbmigrations",
          "signature": "StoreData -\u003e [Migration]",
          "source": "src/Database-Schema-Migrations-Store.html#storeMigrations",
          "type": "function"
        },
        "index": {
          "description": "convenience function for extracting the list of Migration extant in the specified StoreData",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "storeMigrations",
          "normalized": "StoreData-\u003e[Migration]",
          "package": "dbmigrations",
          "partial": "Migrations",
          "signature": "StoreData-\u003e[Migration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a migration map.  Returns zero or more validation errors.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "validateMigrationMap",
          "package": "dbmigrations",
          "signature": "MigrationMap -\u003e [MapValidationError]",
          "source": "src/Database-Schema-Migrations-Store.html#validateMigrationMap",
          "type": "function"
        },
        "index": {
          "description": "Validate migration map Returns zero or more validation errors",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "validateMigrationMap",
          "normalized": "MigrationMap-\u003e[MapValidationError]",
          "package": "dbmigrations",
          "partial": "Migration Map",
          "signature": "MigrationMap-\u003e[MapValidationError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:validateMigrationMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a single migration.  Looks up the migration's\n dependencies in the specified \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e and returns a\n \u003ccode\u003e\u003ca\u003eMapValidationError\u003c/a\u003e\u003c/code\u003e for each one that does not exist in the map.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations.Store",
          "name": "validateSingleMigration",
          "package": "dbmigrations",
          "signature": "MigrationMap -\u003e Migration -\u003e [MapValidationError]",
          "source": "src/Database-Schema-Migrations-Store.html#validateSingleMigration",
          "type": "function"
        },
        "index": {
          "description": "Validate single migration Looks up the migration dependencies in the specified MigrationMap and returns MapValidationError for each one that does not exist in the map",
          "hierarchy": "Database Schema Migrations Store",
          "module": "Database.Schema.Migrations.Store",
          "name": "validateSingleMigration",
          "normalized": "MigrationMap-\u003eMigration-\u003e[MapValidationError]",
          "package": "dbmigrations",
          "partial": "Single Migration",
          "signature": "MigrationMap-\u003eMigration-\u003e[MapValidationError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:validateSingleMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a high-level interface for the rest of this\n library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Schema.Migrations",
          "name": "Migrations",
          "package": "dbmigrations",
          "source": "src/Database-Schema-Migrations.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides high-level interface for the rest of this library",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "Migrations",
          "package": "dbmigrations",
          "partial": "Migrations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new migration and store it in the \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e,\n with some of its fields initially set to defaults.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations",
          "name": "createNewMigration",
          "package": "dbmigrations",
          "signature": "s-\u003e String-\u003e [String]-\u003e m (Either String Migration)",
          "type": "function"
        },
        "index": {
          "description": "Create new migration and store it in the MigrationStore with some of its fields initially set to defaults",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "createNewMigration",
          "normalized": "a-\u003eString-\u003e[String]-\u003eb(Either String Migration)",
          "package": "dbmigrations",
          "partial": "New Migration",
          "signature": "s-\u003eString-\u003e[String]-\u003em(Either String Migration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:createNewMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e, ensure that the backend is ready for use by\n bootstrapping it.  This entails installing the appropriate database\n elements to track installed migrations.  If the backend is already\n bootstrapped, this has no effect.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations",
          "name": "ensureBootstrappedBackend",
          "package": "dbmigrations",
          "signature": "b -\u003e m ()",
          "source": "src/Database-Schema-Migrations.html#ensureBootstrappedBackend",
          "type": "function"
        },
        "index": {
          "description": "Given Backend ensure that the backend is ready for use by bootstrapping it This entails installing the appropriate database elements to track installed migrations If the backend is already bootstrapped this has no effect",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "ensureBootstrappedBackend",
          "normalized": "a-\u003eb()",
          "package": "dbmigrations",
          "partial": "Bootstrapped Backend",
          "signature": "b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:ensureBootstrappedBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a migration mapping computed from a MigrationStore, a\n backend, and a migration to apply, return a list of migrations to\n apply, in order.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations",
          "name": "migrationsToApply",
          "package": "dbmigrations",
          "signature": "StoreData -\u003e b -\u003e Migration -\u003e m [Migration]",
          "source": "src/Database-Schema-Migrations.html#migrationsToApply",
          "type": "function"
        },
        "index": {
          "description": "Given migration mapping computed from MigrationStore backend and migration to apply return list of migrations to apply in order",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "migrationsToApply",
          "normalized": "StoreData-\u003ea-\u003eMigration-\u003eb[Migration]",
          "package": "dbmigrations",
          "partial": "To Apply",
          "signature": "StoreData-\u003eb-\u003eMigration-\u003em[Migration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:migrationsToApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a migration mapping computed from a MigrationStore, a\n backend, and a migration to revert, return a list of migrations to\n revert, in order.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations",
          "name": "migrationsToRevert",
          "package": "dbmigrations",
          "signature": "StoreData -\u003e b -\u003e Migration -\u003e m [Migration]",
          "source": "src/Database-Schema-Migrations.html#migrationsToRevert",
          "type": "function"
        },
        "index": {
          "description": "Given migration mapping computed from MigrationStore backend and migration to revert return list of migrations to revert in order",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "migrationsToRevert",
          "normalized": "StoreData-\u003ea-\u003eMigration-\u003eb[Migration]",
          "package": "dbmigrations",
          "partial": "To Revert",
          "signature": "StoreData-\u003eb-\u003eMigration-\u003em[Migration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:migrationsToRevert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e, query the backend and\n return a list of migration names which are available in the\n \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e but which are not installed in the \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Schema.Migrations",
          "name": "missingMigrations",
          "package": "dbmigrations",
          "signature": "b -\u003e StoreData -\u003e m [String]",
          "source": "src/Database-Schema-Migrations.html#missingMigrations",
          "type": "function"
        },
        "index": {
          "description": "Given Backend and MigrationMap query the backend and return list of migration names which are available in the MigrationMap but which are not installed in the Backend",
          "hierarchy": "Database Schema Migrations",
          "module": "Database.Schema.Migrations",
          "name": "missingMigrations",
          "normalized": "a-\u003eStoreData-\u003eb[String]",
          "package": "dbmigrations",
          "partial": "Migrations",
          "signature": "b-\u003eStoreData-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:missingMigrations"
      }
    }
  ]
]