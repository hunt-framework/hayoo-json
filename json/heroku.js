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
        "word": "heroku"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Heroku",
          "name": "Heroku",
          "package": "heroku",
          "source": "src/Web-Heroku.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Heroku",
          "module": "Web.Heroku",
          "name": "Heroku",
          "package": "heroku",
          "partial": "Heroku",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heroku/docs/Web-Heroku.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the DATABASE_URL environment variable\n and return an alist of connection parameters with the following keys:\n user, password, host, port, dbname\n\u003c/p\u003e\u003cp\u003ewarning: just calls error if it can't parse correctly\n\u003c/p\u003e",
          "module": "Web.Heroku",
          "name": "dbConnParams",
          "package": "heroku",
          "signature": "IO [(Text, Text)]",
          "source": "src/Web-Heroku.html#dbConnParams",
          "type": "function"
        },
        "index": {
          "description": "read the DATABASE URL environment variable and return an alist of connection parameters with the following keys user password host port dbname warning just calls error if it can parse correctly",
          "hierarchy": "Web Heroku",
          "module": "Web.Heroku",
          "name": "dbConnParams",
          "normalized": "IO[(Text,Text)]",
          "package": "heroku",
          "partial": "Conn Params",
          "signature": "IO[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heroku/docs/Web-Heroku.html#v:dbConnParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Heroku",
          "name": "parseDatabaseUrl",
          "package": "heroku",
          "signature": "String -\u003e [(Text, Text)]",
          "source": "src/Web-Heroku.html#parseDatabaseUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Heroku",
          "module": "Web.Heroku",
          "name": "parseDatabaseUrl",
          "normalized": "String-\u003e[(Text,Text)]",
          "package": "heroku",
          "partial": "Database Url",
          "signature": "String-\u003e[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heroku/docs/Web-Heroku.html#v:parseDatabaseUrl"
      }
    }
  ]
]