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
        "word": "HDBC-postgresql-hstore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write stuff in hstore columns.\n\u003c/p\u003e\u003cp\u003eInsert crap into table:\n\u003c/p\u003e\u003cpre\u003e\n let myStuff = [(\"test\", \"shmest\"), (\"spam\", \"eggs\"), (\"sausage\", \"salad\")]\n withTransaction conn $ trans -\u003e run trans (\"INSERT INTO test_hstore (stuff) VALUES (\" ++ hsQuery myStuff  ++ \");\") (hsParams myStuff)\n\u003c/pre\u003e\u003cp\u003eParse hstore data:\n\u003c/p\u003e\u003cpre\u003e\n rows \u003c- quickQuery conn \"SELECT * FROM test_hstore;\" []\n forM_ rows $ [pk, hstuff] -\u003e print $ (fromSql pk :: Integer, hsParse hstuff)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "HStore",
          "package": "HDBC-postgresql-hstore",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write stuff in hstore columns Insert crap into table let myStuff test shmest spam eggs sausage salad withTransaction conn trans run trans INSERT INTO test hstore stuff VALUES hsQuery myStuff hsParams myStuff Parse hstore data rows quickQuery conn SELECT FROM test hstore forM rows pk hstuff print fromSql pk Integer hsParse hstuff",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "HStore",
          "package": "HDBC-postgresql-hstore",
          "partial": "HStore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a value, unquote, unslash.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "doubleQuoted",
          "package": "HDBC-postgresql-hstore",
          "signature": "Parser Text",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#doubleQuoted",
          "type": "function"
        },
        "index": {
          "description": "Grab value unquote unslash",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "doubleQuoted",
          "package": "HDBC-postgresql-hstore",
          "partial": "Quoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:doubleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a parameter list.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsParams",
          "package": "HDBC-postgresql-hstore",
          "signature": "[(String, String)] -\u003e [SqlValue]",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#hsParams",
          "type": "function"
        },
        "index": {
          "description": "Generate parameter list",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsParams",
          "normalized": "[(String,String)]-\u003e[SqlValue]",
          "package": "HDBC-postgresql-hstore",
          "partial": "Params",
          "signature": "[(String,String)]-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a SqlByteString with hstore data to a Map Text Text.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsParse",
          "package": "HDBC-postgresql-hstore",
          "signature": "SqlValue -\u003e Map Text Text",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#hsParse",
          "type": "function"
        },
        "index": {
          "description": "Parse SqlByteString with hstore data to Map Text Text",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsParse",
          "normalized": "SqlValue-\u003eMap Text Text",
          "package": "HDBC-postgresql-hstore",
          "partial": "Parse",
          "signature": "SqlValue-\u003eMap Text Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a placeholder string.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsQuery",
          "package": "HDBC-postgresql-hstore",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#hsQuery",
          "type": "function"
        },
        "index": {
          "description": "Generate placeholder string",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hsQuery",
          "normalized": "[(String,String)]-\u003eString",
          "package": "HDBC-postgresql-hstore",
          "partial": "Query",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hsQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse hstore-formatted value.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hstoreParser",
          "package": "HDBC-postgresql-hstore",
          "signature": "Parser (Map Text Text)",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#hstoreParser",
          "type": "function"
        },
        "index": {
          "description": "Parse hstore-formatted value",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "hstoreParser",
          "package": "HDBC-postgresql-hstore",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:hstoreParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one key-value pair.\n\u003c/p\u003e",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "kvPair",
          "package": "HDBC-postgresql-hstore",
          "signature": "Parser (Text, Text)",
          "source": "src/Database-HDBC-PostgreSQL-HStore.html#kvPair",
          "type": "function"
        },
        "index": {
          "description": "Parse one key-value pair",
          "hierarchy": "Database HDBC PostgreSQL HStore",
          "module": "Database.HDBC.PostgreSQL.HStore",
          "name": "kvPair",
          "normalized": "Parser(Text,Text)",
          "package": "HDBC-postgresql-hstore",
          "partial": "Pair",
          "signature": "Parser(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HDBC-postgresql-hstore/docs/Database-HDBC-PostgreSQL-HStore.html#v:kvPair"
      }
    }
  ]
]