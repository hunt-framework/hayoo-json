[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write stuff in hstore columns.\n\u003c/p\u003e\u003cp\u003eInsert crap into table:\n\u003c/p\u003e\u003cpre\u003e\n let myStuff = [(\"test\", \"shmest\"), (\"spam\", \"eggs\"), (\"sausage\", \"salad\")]\n withTransaction conn $ trans -\u003e run trans (\"INSERT INTO test_hstore (stuff) VALUES (\" ++ hsQuery myStuff  ++ \");\") (hsParams myStuff)\n\u003c/pre\u003e\u003cp\u003eParse hstore data:\n\u003c/p\u003e\u003cpre\u003e\n rows \u003c- quickQuery conn \"SELECT * FROM test_hstore;\" []\n forM_ rows $ [pk, hstuff] -\u003e print $ (fromSql pk :: Integer, hsParse hstuff)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html",
        "fct-type": "module",
        "title": "HStore"
      },
      "index": {
        "description": "Read and write stuff in hstore columns Insert crap into table let myStuff test shmest spam eggs sausage salad withTransaction conn trans run trans INSERT INTO test hstore stuff VALUES hsQuery myStuff hsParams myStuff Parse hstore data rows quickQuery conn SELECT FROM test hstore forM rows pk hstuff print fromSql pk Integer hsParse hstuff",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "HStore",
        "normalized": "",
        "package": "HDBC-postgresql-hstore",
        "partial": "HStore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:doubleQuoted",
      "description": {
        "fct-descr": "\u003cp\u003eGrab a value, unquote, unslash.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "Parser Text",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#doubleQuoted",
        "fct-type": "function",
        "title": "doubleQuoted"
      },
      "index": {
        "description": "Grab value unquote unslash",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "doubleQuoted",
        "normalized": "",
        "package": "HDBC-postgresql-hstore",
        "partial": "Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsParams",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a parameter list.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "[(String, String)] -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#hsParams",
        "fct-type": "function",
        "title": "hsParams"
      },
      "index": {
        "description": "Generate parameter list",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "hsParams",
        "normalized": "[(String,String)]-\u003e[SqlValue]",
        "package": "HDBC-postgresql-hstore",
        "partial": "Params",
        "signature": "[(String,String)]-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsParse",
      "description": {
        "fct-descr": "\u003cp\u003eParse a SqlByteString with hstore data to a Map Text Text.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "SqlValue -\u003e Map Text Text",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#hsParse",
        "fct-type": "function",
        "title": "hsParse"
      },
      "index": {
        "description": "Parse SqlByteString with hstore data to Map Text Text",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "hsParse",
        "normalized": "SqlValue-\u003eMap Text Text",
        "package": "HDBC-postgresql-hstore",
        "partial": "Parse",
        "signature": "SqlValue-\u003eMap Text Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsQuery",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a placeholder string.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "[(String, String)] -\u003e String",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#hsQuery",
        "fct-type": "function",
        "title": "hsQuery"
      },
      "index": {
        "description": "Generate placeholder string",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "hsQuery",
        "normalized": "[(String,String)]-\u003eString",
        "package": "HDBC-postgresql-hstore",
        "partial": "Query",
        "signature": "[(String,String)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hstoreParser",
      "description": {
        "fct-descr": "\u003cp\u003eParse hstore-formatted value.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "Parser (Map Text Text)",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#hstoreParser",
        "fct-type": "function",
        "title": "hstoreParser"
      },
      "index": {
        "description": "Parse hstore-formatted value",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "hstoreParser",
        "normalized": "",
        "package": "HDBC-postgresql-hstore",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:kvPair",
      "description": {
        "fct-descr": "\u003cp\u003eParse one key-value pair.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.PostgreSQL.HStore",
        "fct-package": "HDBC-postgresql-hstore",
        "fct-signature": "Parser (Text, Text)",
        "fct-source": "src/Database-HDBC-PostgreSQL-HStore.html#kvPair",
        "fct-type": "function",
        "title": "kvPair"
      },
      "index": {
        "description": "Parse one key-value pair",
        "hierarchy": "Database HDBC PostgreSQL HStore",
        "module": "Database.HDBC.PostgreSQL.HStore",
        "name": "kvPair",
        "normalized": "Parser(Text,Text)",
        "package": "HDBC-postgresql-hstore",
        "partial": "Pair",
        "signature": "Parser(Text,Text)"
      }
    }
  }
]