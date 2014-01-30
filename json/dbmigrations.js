[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend-HDBC.html#",
      "description": {
        "fct-module": "Database.Schema.Migrations.Backend.HDBC",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Backend-HDBC.html",
        "fct-type": "module",
        "title": "HDBC"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Backend HDBC",
        "module": "Database.Schema.Migrations.Backend.HDBC",
        "name": "HDBC",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "HDBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#",
      "description": {
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Backend.html",
        "fct-type": "module",
        "title": "Backend"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "Backend",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#t:Backend",
      "description": {
        "fct-descr": "\u003cp\u003eA Backend represents a database engine backend such as MySQL or\n SQLite.  A Backend supplies relatively low-level functions for\n inspecting the backend's state, applying migrations, and reverting\n migrations.  A Backend also supplies the migration necessary to\n \u003ca\u003ebootstrap\u003c/a\u003e a backend so that it can track which migrations are\n installed.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "class",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#Backend",
        "fct-type": "class",
        "title": "Backend"
      },
      "index": {
        "description": "Backend represents database engine backend such as MySQL or SQLite Backend supplies relatively low-level functions for inspecting the backend state applying migrations and reverting migrations Backend also supplies the migration necessary to bootstrap backend so that it can track which migrations are installed",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "Backend",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:applyMigration",
      "description": {
        "fct-descr": "\u003cp\u003eApply the specified migration on the backend.  applyMigration\n does NOT assume control of the transaction, since it expects\n the transaction to (possibly) cover more than one\n applyMigration operation.  The caller is expected to call\n commit at the appropriate time.  If the application fails, the\n underlying SqlError is raised and a manual rollback may be\n necessary; for this, see withTransaction from HDBC.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e Migration -\u003e m ()",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#applyMigration",
        "fct-type": "method",
        "title": "applyMigration"
      },
      "index": {
        "description": "Apply the specified migration on the backend applyMigration does NOT assume control of the transaction since it expects the transaction to possibly cover more than one applyMigration operation The caller is expected to call commit at the appropriate time If the application fails the underlying SqlError is raised and manual rollback may be necessary for this see withTransaction from HDBC",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "applyMigration",
        "normalized": "a-\u003eMigration-\u003eb()",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": "b-\u003eMigration-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:getBootstrapMigration",
      "description": {
        "fct-descr": "\u003cp\u003eThe migration necessary to bootstrap a database with this\n connection interface.  This might differ slightly from one\n backend to another.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e m Migration",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#getBootstrapMigration",
        "fct-type": "method",
        "title": "getBootstrapMigration"
      },
      "index": {
        "description": "The migration necessary to bootstrap database with this connection interface This might differ slightly from one backend to another",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "getBootstrapMigration",
        "normalized": "a-\u003eb Migration",
        "package": "dbmigrations",
        "partial": "Bootstrap Migration",
        "signature": "b-\u003em Migration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:getMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of installed migration names from the backend.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e m [String]",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#getMigrations",
        "fct-type": "method",
        "title": "getMigrations"
      },
      "index": {
        "description": "Returns list of installed migration names from the backend",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "getMigrations",
        "normalized": "a-\u003eb[String]",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": "b-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:isBootstrapped",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the backend has been bootstrapped.  A backend\n has been bootstrapped if is capable of tracking which\n migrations have been installed; the \u003ca\u003ebootstrap migration\u003c/a\u003e\n provided by getBootstrapMigration should suffice to bootstrap\n the backend.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e m Bool",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#isBootstrapped",
        "fct-type": "method",
        "title": "isBootstrapped"
      },
      "index": {
        "description": "Returns whether the backend has been bootstrapped backend has been bootstrapped if is capable of tracking which migrations have been installed the bootstrap migration provided by getBootstrapMigration should suffice to bootstrap the backend",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "isBootstrapped",
        "normalized": "a-\u003eb Bool",
        "package": "dbmigrations",
        "partial": "Bootstrapped",
        "signature": "b-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:revertMigration",
      "description": {
        "fct-descr": "\u003cp\u003eRevert the specified migration from the backend and record\n this action in the table which tracks installed migrations.\n revertMigration does NOT assume control of the transaction,\n since it expects the transaction to (possibly) cover more than\n one revertMigration operation.  The caller is expected to call\n commit at the appropriate time.  If the revert fails, the\n underlying SqlError is raised and a manual rollback may be\n necessary; for this, see withTransaction from HDBC.  If the\n specified migration does not supply a revert instruction, this\n has no effect other than bookkeeping.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e Migration -\u003e m ()",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#revertMigration",
        "fct-type": "method",
        "title": "revertMigration"
      },
      "index": {
        "description": "Revert the specified migration from the backend and record this action in the table which tracks installed migrations revertMigration does NOT assume control of the transaction since it expects the transaction to possibly cover more than one revertMigration operation The caller is expected to call commit at the appropriate time If the revert fails the underlying SqlError is raised and manual rollback may be necessary for this see withTransaction from HDBC If the specified migration does not supply revert instruction this has no effect other than bookkeeping",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "revertMigration",
        "normalized": "a-\u003eMigration-\u003eb()",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": "b-\u003eMigration-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Backend.html#v:rootMigrationName",
      "description": {
        "fct-descr": "\u003cp\u003eBackend instances should use this as the name of the migration\n returned by getBootstrapMigration; this migration is special\n because it cannot be reverted.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Backend",
        "fct-package": "dbmigrations",
        "fct-signature": "String",
        "fct-source": "src/Database-Schema-Migrations-Backend.html#rootMigrationName",
        "fct-type": "function",
        "title": "rootMigrationName"
      },
      "index": {
        "description": "Backend instances should use this as the name of the migration returned by getBootstrapMigration this migration is special because it cannot be reverted",
        "hierarchy": "Database Schema Migrations Backend",
        "module": "Database.Schema.Migrations.Backend",
        "name": "rootMigrationName",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module types and functions for representing a dependency\n graph of arbitrary objects and functions for querying such graphs\n to get dependency and reverse dependency information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html",
        "fct-type": "module",
        "title": "Dependencies"
      },
      "index": {
        "description": "This module types and functions for representing dependency graph of arbitrary objects and functions for querying such graphs to get dependency and reverse dependency information",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "Dependencies",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Dependencies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#t:Dependable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects supply a representation of their identifiers,\n and a list of other objects upon which they depend.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "class",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#Dependable",
        "fct-type": "class",
        "title": "Dependable"
      },
      "index": {
        "description": "Dependable objects supply representation of their identifiers and list of other objects upon which they depend",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "Dependable",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Dependable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#t:DependencyGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDependencyGraph\u003c/a\u003e\u003c/code\u003e represents a collection of objects together\n with a graph of their dependency relationships.  This is intended\n to be used with instances of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "data",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
        "fct-type": "data",
        "title": "DependencyGraph"
      },
      "index": {
        "description": "DependencyGraph represents collection of objects together with graph of their dependency relationships This is intended to be used with instances of Dependable",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "DependencyGraph",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Dependency Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:DG",
      "description": {
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "DG",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
        "fct-type": "function",
        "title": "DG"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "DG",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "DG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA directed \u003ccode\u003e\u003ca\u003eGr\u003c/a\u003e\u003c/code\u003e (graph) of the\n \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects' dependency\n relationships, with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e vertex and\n edge labels.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "Gr String String",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
        "fct-type": "function",
        "title": "depGraph"
      },
      "index": {
        "description": "directed Gr graph of the Dependable objects dependency relationships with String vertex and edge labels",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "depGraph",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraphNameMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e object\n identifiers to their graph vertex\n indices.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
        "fct-type": "function",
        "title": "depGraphNameMap"
      },
      "index": {
        "description": "mapping of Dependable object identifiers to their graph vertex indices",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "depGraphNameMap",
        "normalized": "[(String,Int)]",
        "package": "dbmigrations",
        "partial": "Graph Name Map",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depGraphObjectMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e objects to\n their graph vertex indices.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "[(a, Int)]",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#DependencyGraph",
        "fct-type": "function",
        "title": "depGraphObjectMap"
      },
      "index": {
        "description": "mapping of Dependable objects to their graph vertex indices",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "depGraphObjectMap",
        "normalized": "[(a,Int)]",
        "package": "dbmigrations",
        "partial": "Graph Object Map",
        "signature": "[(a,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depId",
      "description": {
        "fct-descr": "\u003cp\u003eThe identifier of a \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#depId",
        "fct-type": "method",
        "title": "depId"
      },
      "index": {
        "description": "The identifier of Dependable object",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "depId",
        "normalized": "a-\u003eString",
        "package": "dbmigrations",
        "partial": "Id",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:dependencies",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a dependency graph and an ID, return the IDs of objects that\n the object depends on.  IDs are returned with least direct\n dependencies first (i.e., the apply order).\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "DependencyGraph d -\u003e String -\u003e [String]",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#dependencies",
        "fct-type": "function",
        "title": "dependencies"
      },
      "index": {
        "description": "Given dependency graph and an ID return the IDs of objects that the object depends on IDs are returned with least direct dependencies first i.e the apply order",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "dependencies",
        "normalized": "DependencyGraph a-\u003eString-\u003e[String]",
        "package": "dbmigrations",
        "partial": "",
        "signature": "DependencyGraph d-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:depsOf",
      "description": {
        "fct-descr": "\u003cp\u003eThe identifiers of the objects on which \u003ccode\u003ea\u003c/code\u003e depends.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "a -\u003e [String]",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#depsOf",
        "fct-type": "method",
        "title": "depsOf"
      },
      "index": {
        "description": "The identifiers of the objects on which depends",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "depsOf",
        "normalized": "a-\u003e[String]",
        "package": "dbmigrations",
        "partial": "Of",
        "signature": "a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:mkDepGraph",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a dependency graph from a list of \u003ccode\u003e\u003ca\u003eDependable\u003c/a\u003e\u003c/code\u003es.  Return the\n graph on success or return an error message if the graph cannot be\n constructed (e.g., if the graph contains a cycle).\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "[a] -\u003e Either String (DependencyGraph a)",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#mkDepGraph",
        "fct-type": "function",
        "title": "mkDepGraph"
      },
      "index": {
        "description": "Build dependency graph from list of Dependable Return the graph on success or return an error message if the graph cannot be constructed e.g if the graph contains cycle",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "mkDepGraph",
        "normalized": "[a]-\u003eEither String(DependencyGraph a)",
        "package": "dbmigrations",
        "partial": "Dep Graph",
        "signature": "[a]-\u003eEither String(DependencyGraph a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Dependencies.html#v:reverseDependencies",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a dependency graph and an ID, return the IDs of objects that\n depend on it.  IDs are returned with least direct reverse\n dependencies first (i.e., the revert order).\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Dependencies",
        "fct-package": "dbmigrations",
        "fct-signature": "DependencyGraph d -\u003e String -\u003e [String]",
        "fct-source": "src/Database-Schema-Migrations-Dependencies.html#reverseDependencies",
        "fct-type": "function",
        "title": "reverseDependencies"
      },
      "index": {
        "description": "Given dependency graph and an ID return the IDs of objects that depend on it IDs are returned with least direct reverse dependencies first i.e the revert order",
        "hierarchy": "Database Schema Migrations Dependencies",
        "module": "Database.Schema.Migrations.Dependencies",
        "name": "reverseDependencies",
        "normalized": "DependencyGraph a-\u003eString-\u003e[String]",
        "package": "dbmigrations",
        "partial": "Dependencies",
        "signature": "DependencyGraph d-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type for interacting with a\n filesystem-backed \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html",
        "fct-type": "module",
        "title": "Filesystem"
      },
      "index": {
        "description": "This module provides type for interacting with filesystem-backed MigrationStore",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "Filesystem",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Filesystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#t:FilesystemStore",
      "description": {
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "data",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
        "fct-type": "data",
        "title": "FilesystemStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "FilesystemStore",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Filesystem Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:FSStore",
      "description": {
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "FSStore",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
        "fct-type": "function",
        "title": "FSStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "FSStore",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "FSStore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:migrationFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a store and migration name, read and parse the associated\n migration and return the migration if successful.  Otherwise return\n a parsing error message.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "FilesystemStore -\u003e String -\u003e IO (Either String Migration)",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html#migrationFromFile",
        "fct-type": "function",
        "title": "migrationFromFile"
      },
      "index": {
        "description": "Given store and migration name read and parse the associated migration and return the migration if successful Otherwise return parsing error message",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "migrationFromFile",
        "normalized": "FilesystemStore-\u003eString-\u003eIO(Either String Migration)",
        "package": "dbmigrations",
        "partial": "From File",
        "signature": "FilesystemStore-\u003eString-\u003eIO(Either String Migration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:migrationFromPath",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a filesystem path, read and parse the file as a migration\n return the \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e if successful.  Otherwise return a parsing\n error message.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "FilePath -\u003e IO (Either String Migration)",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html#migrationFromPath",
        "fct-type": "function",
        "title": "migrationFromPath"
      },
      "index": {
        "description": "Given filesystem path read and parse the file as migration return the Migration if successful Otherwise return parsing error message",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "migrationFromPath",
        "normalized": "FilePath-\u003eIO(Either String Migration)",
        "package": "dbmigrations",
        "partial": "From Path",
        "signature": "FilePath-\u003eIO(Either String Migration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Filesystem.html#v:storePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Filesystem",
        "fct-package": "dbmigrations",
        "fct-signature": "FilePath",
        "fct-source": "src/Database-Schema-Migrations-Filesystem.html#FilesystemStore",
        "fct-type": "function",
        "title": "storePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Filesystem",
        "module": "Database.Schema.Migrations.Filesystem",
        "name": "storePath",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Migration.html",
        "fct-type": "module",
        "title": "Migration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "Migration",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#t:Migration",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "data",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "data",
        "title": "Migration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "Migration",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#t:MonadMigration",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "class",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#MonadMigration",
        "fct-type": "class",
        "title": "MonadMigration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "MonadMigration",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Monad Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:Migration",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "Migration",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "Migration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "Migration",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:getCurrentTime",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "m UTCTime",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#getCurrentTime",
        "fct-type": "method",
        "title": "getCurrentTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "getCurrentTime",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Current Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mApply",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "String",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mApply",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mDeps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "[String]",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mDeps"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mDeps",
        "normalized": "[String]",
        "package": "dbmigrations",
        "partial": "Deps",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mDesc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mDesc",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "String",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mId"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mId",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mRevert",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mRevert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mRevert",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Revert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:mTimestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "UTCTime",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#Migration",
        "fct-type": "function",
        "title": "mTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "mTimestamp",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Migration.html#v:newMigration",
      "description": {
        "fct-module": "Database.Schema.Migrations.Migration",
        "fct-package": "dbmigrations",
        "fct-signature": "String -\u003e m Migration",
        "fct-source": "src/Database-Schema-Migrations-Migration.html#newMigration",
        "fct-type": "function",
        "title": "newMigration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Migration",
        "module": "Database.Schema.Migrations.Migration",
        "name": "newMigration",
        "normalized": "String-\u003ea Migration",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": "String-\u003em Migration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an abstraction for a \u003cem\u003emigration store\u003c/em\u003e, a\n facility in which \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es can be stored and from which they\n can be loaded.  This module also provides functions for taking\n \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es from a store and converting them into the appropriate\n intermediate types for use with the rest of this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations-Store.html",
        "fct-type": "module",
        "title": "Store"
      },
      "index": {
        "description": "This module provides an abstraction for migration store facility in which Migration can be stored and from which they can be loaded This module also provides functions for taking Migration from store and converting them into the appropriate intermediate types for use with the rest of this library",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "Store",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MapValidationError",
      "description": {
        "fct-descr": "\u003cp\u003eA type for types of validation errors for migration maps.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "data",
        "fct-source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
        "fct-type": "data",
        "title": "MapValidationError"
      },
      "index": {
        "description": "type for types of validation errors for migration maps",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "MapValidationError",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Map Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MigrationMap",
      "description": {
        "fct-descr": "\u003cp\u003eA mapping from migration name to \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e.  This is exported\n for testing purposes, but you'll want to interface with this\n through the encapsulating \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "type",
        "fct-source": "src/Database-Schema-Migrations-Store.html#MigrationMap",
        "fct-type": "type",
        "title": "MigrationMap"
      },
      "index": {
        "description": "mapping from migration name to Migration This is exported for testing purposes but you ll want to interface with this through the encapsulating StoreData type",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "MigrationMap",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:MigrationStore",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for types which represent a storage facility (and a\n monad context in which to operate on the store).  A MigrationStore\n is a facility in which new migrations can be created, and from\n which existing migrations can be loaded.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "class",
        "fct-source": "src/Database-Schema-Migrations-Store.html#MigrationStore",
        "fct-type": "class",
        "title": "MigrationStore"
      },
      "index": {
        "description": "type class for types which represent storage facility and monad context in which to operate on the store MigrationStore is facility in which new migrations can be created and from which existing migrations can be loaded",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "MigrationStore",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migration Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#t:StoreData",
      "description": {
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "data",
        "fct-source": "src/Database-Schema-Migrations-Store.html#StoreData",
        "fct-type": "data",
        "title": "StoreData"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "StoreData",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Store Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:DependencyGraphError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error was encountered when\n constructing the dependency graph for\n this store.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "DependencyGraphError String",
        "fct-source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
        "fct-type": "function",
        "title": "DependencyGraphError"
      },
      "index": {
        "description": "An error was encountered when constructing the dependency graph for this store",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "DependencyGraphError",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Dependency Graph Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:DependencyReferenceError",
      "description": {
        "fct-descr": "\u003cp\u003eA migration claims a dependency on a\n migration that does not exist.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "DependencyReferenceError String String",
        "fct-source": "src/Database-Schema-Migrations-Store.html#MapValidationError",
        "fct-type": "function",
        "title": "DependencyReferenceError"
      },
      "index": {
        "description": "migration claims dependency on migration that does not exist",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "DependencyReferenceError",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Dependency Reference Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:StoreData",
      "description": {
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "StoreData",
        "fct-source": "src/Database-Schema-Migrations-Store.html#StoreData",
        "fct-type": "function",
        "title": "StoreData"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "StoreData",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Store Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:depGraphFromMapping",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDependencyGraph\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e; returns Left if\n the dependency graph cannot be constructed (e.g., due to a\n dependency cycle) or Right on success.  Generally speaking, you\n won't want to use this directly; use \u003ccode\u003e\u003ca\u003eloadMigrations\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "MigrationMap -\u003e Either String (DependencyGraph Migration)",
        "fct-source": "src/Database-Schema-Migrations-Store.html#depGraphFromMapping",
        "fct-type": "function",
        "title": "depGraphFromMapping"
      },
      "index": {
        "description": "Create DependencyGraph from MigrationMap returns Left if the dependency graph cannot be constructed e.g due to dependency cycle or Right on success Generally speaking you won want to use this directly use loadMigrations instead",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "depGraphFromMapping",
        "normalized": "MigrationMap-\u003eEither String(DependencyGraph Migration)",
        "package": "dbmigrations",
        "partial": "Graph From Mapping",
        "signature": "MigrationMap-\u003eEither String(DependencyGraph Migration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:fullMigrationName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the full representation of a given migration name;\n mostly for filesystem stores, where the full representation\n includes the store path.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "s -\u003e String -\u003e m String",
        "fct-source": "src/Database-Schema-Migrations-Store.html#fullMigrationName",
        "fct-type": "method",
        "title": "fullMigrationName"
      },
      "index": {
        "description": "Return the full representation of given migration name mostly for filesystem stores where the full representation includes the store path",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "fullMigrationName",
        "normalized": "a-\u003eString-\u003eb String",
        "package": "dbmigrations",
        "partial": "Migration Name",
        "signature": "s-\u003eString-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:getMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of all available migrations' names.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "s -\u003e m [String]",
        "fct-source": "src/Database-Schema-Migrations-Store.html#getMigrations",
        "fct-type": "method",
        "title": "getMigrations"
      },
      "index": {
        "description": "Return list of all available migrations names",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "getMigrations",
        "normalized": "a-\u003eb[String]",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": "s-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:loadMigration",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a migration from the store.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "s -\u003e String -\u003e m (Maybe Migration)",
        "fct-source": "src/Database-Schema-Migrations-Store.html#loadMigration",
        "fct-type": "method",
        "title": "loadMigration"
      },
      "index": {
        "description": "Load migration from the store",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "loadMigration",
        "normalized": "a-\u003eString-\u003eb(Maybe Migration)",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": "s-\u003eString-\u003em(Maybe Migration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:loadMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eLoad migrations from the specified \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e, validate the\n loaded migrations, and return errors or a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e on\n success.  Generally speaking, this will be the first thing you\n should call once you have constructed a \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "s -\u003e m (Either [MapValidationError] StoreData)",
        "fct-source": "src/Database-Schema-Migrations-Store.html#loadMigrations",
        "fct-type": "function",
        "title": "loadMigrations"
      },
      "index": {
        "description": "Load migrations from the specified MigrationStore validate the loaded migrations and return errors or MigrationMap on success Generally speaking this will be the first thing you should call once you have constructed MigrationStore",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "loadMigrations",
        "normalized": "a-\u003eb(Either[MapValidationError]StoreData)",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": "s-\u003em(Either[MapValidationError]StoreData)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:saveMigration",
      "description": {
        "fct-descr": "\u003cp\u003eSave a migration to the store.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "s -\u003e Migration -\u003e m ()",
        "fct-source": "src/Database-Schema-Migrations-Store.html#saveMigration",
        "fct-type": "method",
        "title": "saveMigration"
      },
      "index": {
        "description": "Save migration to the store",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "saveMigration",
        "normalized": "a-\u003eMigration-\u003eb()",
        "package": "dbmigrations",
        "partial": "Migration",
        "signature": "s-\u003eMigration-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeDataGraph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "DependencyGraph Migration",
        "fct-source": "src/Database-Schema-Migrations-Store.html#StoreData",
        "fct-type": "function",
        "title": "storeDataGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "storeDataGraph",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Data Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeDataMapping",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "MigrationMap",
        "fct-source": "src/Database-Schema-Migrations-Store.html#StoreData",
        "fct-type": "function",
        "title": "storeDataMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "storeDataMapping",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Data Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeLookup",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function for looking up a \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003e by name in the\n specified \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "StoreData -\u003e String -\u003e Maybe Migration",
        "fct-source": "src/Database-Schema-Migrations-Store.html#storeLookup",
        "fct-type": "function",
        "title": "storeLookup"
      },
      "index": {
        "description": "convenience function for looking up Migration by name in the specified StoreData",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "storeLookup",
        "normalized": "StoreData-\u003eString-\u003eMaybe Migration",
        "package": "dbmigrations",
        "partial": "Lookup",
        "signature": "StoreData-\u003eString-\u003eMaybe Migration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:storeMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function for extracting the list of \u003ccode\u003e\u003ca\u003eMigration\u003c/a\u003e\u003c/code\u003es\n extant in the specified \u003ccode\u003e\u003ca\u003eStoreData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "StoreData -\u003e [Migration]",
        "fct-source": "src/Database-Schema-Migrations-Store.html#storeMigrations",
        "fct-type": "function",
        "title": "storeMigrations"
      },
      "index": {
        "description": "convenience function for extracting the list of Migration extant in the specified StoreData",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "storeMigrations",
        "normalized": "StoreData-\u003e[Migration]",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": "StoreData-\u003e[Migration]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:validateMigrationMap",
      "description": {
        "fct-descr": "\u003cp\u003eValidate a migration map.  Returns zero or more validation errors.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "MigrationMap -\u003e [MapValidationError]",
        "fct-source": "src/Database-Schema-Migrations-Store.html#validateMigrationMap",
        "fct-type": "function",
        "title": "validateMigrationMap"
      },
      "index": {
        "description": "Validate migration map Returns zero or more validation errors",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "validateMigrationMap",
        "normalized": "MigrationMap-\u003e[MapValidationError]",
        "package": "dbmigrations",
        "partial": "Migration Map",
        "signature": "MigrationMap-\u003e[MapValidationError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations-Store.html#v:validateSingleMigration",
      "description": {
        "fct-descr": "\u003cp\u003eValidate a single migration.  Looks up the migration's\n dependencies in the specified \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e and returns a\n \u003ccode\u003e\u003ca\u003eMapValidationError\u003c/a\u003e\u003c/code\u003e for each one that does not exist in the map.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations.Store",
        "fct-package": "dbmigrations",
        "fct-signature": "MigrationMap -\u003e Migration -\u003e [MapValidationError]",
        "fct-source": "src/Database-Schema-Migrations-Store.html#validateSingleMigration",
        "fct-type": "function",
        "title": "validateSingleMigration"
      },
      "index": {
        "description": "Validate single migration Looks up the migration dependencies in the specified MigrationMap and returns MapValidationError for each one that does not exist in the map",
        "hierarchy": "Database Schema Migrations Store",
        "module": "Database.Schema.Migrations.Store",
        "name": "validateSingleMigration",
        "normalized": "MigrationMap-\u003eMigration-\u003e[MapValidationError]",
        "package": "dbmigrations",
        "partial": "Single Migration",
        "signature": "MigrationMap-\u003eMigration-\u003e[MapValidationError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a high-level interface for the rest of this\n library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "module",
        "fct-source": "src/Database-Schema-Migrations.html",
        "fct-type": "module",
        "title": "Migrations"
      },
      "index": {
        "description": "This module provides high-level interface for the rest of this library",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "Migrations",
        "normalized": "",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:createNewMigration",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new migration and store it in the \u003ccode\u003e\u003ca\u003eMigrationStore\u003c/a\u003e\u003c/code\u003e,\n with some of its fields initially set to defaults.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "s-\u003e String-\u003e [String]-\u003e m (Either String Migration)",
        "fct-type": "function",
        "title": "createNewMigration"
      },
      "index": {
        "description": "Create new migration and store it in the MigrationStore with some of its fields initially set to defaults",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "createNewMigration",
        "normalized": "a-\u003eString-\u003e[String]-\u003eb(Either String Migration)",
        "package": "dbmigrations",
        "partial": "New Migration",
        "signature": "s-\u003eString-\u003e[String]-\u003em(Either String Migration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:ensureBootstrappedBackend",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e, ensure that the backend is ready for use by\n bootstrapping it.  This entails installing the appropriate database\n elements to track installed migrations.  If the backend is already\n bootstrapped, this has no effect.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e m ()",
        "fct-source": "src/Database-Schema-Migrations.html#ensureBootstrappedBackend",
        "fct-type": "function",
        "title": "ensureBootstrappedBackend"
      },
      "index": {
        "description": "Given Backend ensure that the backend is ready for use by bootstrapping it This entails installing the appropriate database elements to track installed migrations If the backend is already bootstrapped this has no effect",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "ensureBootstrappedBackend",
        "normalized": "a-\u003eb()",
        "package": "dbmigrations",
        "partial": "Bootstrapped Backend",
        "signature": "b-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:migrationsToApply",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a migration mapping computed from a MigrationStore, a\n backend, and a migration to apply, return a list of migrations to\n apply, in order.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "StoreData -\u003e b -\u003e Migration -\u003e m [Migration]",
        "fct-source": "src/Database-Schema-Migrations.html#migrationsToApply",
        "fct-type": "function",
        "title": "migrationsToApply"
      },
      "index": {
        "description": "Given migration mapping computed from MigrationStore backend and migration to apply return list of migrations to apply in order",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "migrationsToApply",
        "normalized": "StoreData-\u003ea-\u003eMigration-\u003eb[Migration]",
        "package": "dbmigrations",
        "partial": "To Apply",
        "signature": "StoreData-\u003eb-\u003eMigration-\u003em[Migration]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:migrationsToRevert",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a migration mapping computed from a MigrationStore, a\n backend, and a migration to revert, return a list of migrations to\n revert, in order.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "StoreData -\u003e b -\u003e Migration -\u003e m [Migration]",
        "fct-source": "src/Database-Schema-Migrations.html#migrationsToRevert",
        "fct-type": "function",
        "title": "migrationsToRevert"
      },
      "index": {
        "description": "Given migration mapping computed from MigrationStore backend and migration to revert return list of migrations to revert in order",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "migrationsToRevert",
        "normalized": "StoreData-\u003ea-\u003eMigration-\u003eb[Migration]",
        "package": "dbmigrations",
        "partial": "To Revert",
        "signature": "StoreData-\u003eb-\u003eMigration-\u003em[Migration]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbmigrations/docs/Database-Schema-Migrations.html#v:missingMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e, query the backend and\n return a list of migration names which are available in the\n \u003ccode\u003e\u003ca\u003eMigrationMap\u003c/a\u003e\u003c/code\u003e but which are not installed in the \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Schema.Migrations",
        "fct-package": "dbmigrations",
        "fct-signature": "b -\u003e StoreData -\u003e m [String]",
        "fct-source": "src/Database-Schema-Migrations.html#missingMigrations",
        "fct-type": "function",
        "title": "missingMigrations"
      },
      "index": {
        "description": "Given Backend and MigrationMap query the backend and return list of migration names which are available in the MigrationMap but which are not installed in the Backend",
        "hierarchy": "Database Schema Migrations",
        "module": "Database.Schema.Migrations",
        "name": "missingMigrations",
        "normalized": "a-\u003eStoreData-\u003eb[String]",
        "package": "dbmigrations",
        "partial": "Migrations",
        "signature": "b-\u003eStoreData-\u003em[String]"
      }
    }
  }
]