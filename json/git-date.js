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
        "word": "git-date"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Git",
          "name": "Git",
          "package": "git-date",
          "source": "src/Data-Time-Git.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Time Git",
          "module": "Data.Time.Git",
          "name": "Git",
          "package": "git-date",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date/time string and return Just a Unix timestamp.\n   Return Nothing if the string could not be interpreted.\n   If no timezone is in the string, the local timezone is used.\n   This is not in IO and you cannot safely ask it to parse strings like\n   \"now\" and \"yesterday\".\n\u003c/p\u003e",
          "module": "Data.Time.Git",
          "name": "approxidate",
          "package": "git-date",
          "signature": "String -\u003e Maybe Integer",
          "source": "src/Data-Time-Git.html#approxidate",
          "type": "function"
        },
        "index": {
          "description": "Parse date time string and return Just Unix timestamp Return Nothing if the string could not be interpreted If no timezone is in the string the local timezone is used This is not in IO and you cannot safely ask it to parse strings like now and yesterday",
          "hierarchy": "Data Time Git",
          "module": "Data.Time.Git",
          "name": "approxidate",
          "normalized": "String-\u003eMaybe Integer",
          "package": "git-date",
          "signature": "String-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:approxidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date/time string and return Just a Unix timestamp.\n   Return Nothing if the string could not be interpreted.\n   If no timezone is in the string, the local timezone is used.\n   This is in IO so that you can safely ask it to parse strings like\n   \"now\" and \"yesterday\".\n\u003c/p\u003e",
          "module": "Data.Time.Git",
          "name": "io_approxidate",
          "package": "git-date",
          "signature": "String -\u003e IO (Maybe Integer)",
          "source": "src/Data-Time-Git.html#io_approxidate",
          "type": "function"
        },
        "index": {
          "description": "Parse date time string and return Just Unix timestamp Return Nothing if the string could not be interpreted If no timezone is in the string the local timezone is used This is in IO so that you can safely ask it to parse strings like now and yesterday",
          "hierarchy": "Data Time Git",
          "module": "Data.Time.Git",
          "name": "io_approxidate",
          "normalized": "String-\u003eIO(Maybe Integer)",
          "package": "git-date",
          "signature": "String-\u003eIO(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:io_approxidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Unix timestamp to a UTCTime\n\u003c/p\u003e",
          "module": "Data.Time.Git",
          "name": "posixToUTC",
          "package": "git-date",
          "signature": "Integer -\u003e UTCTime",
          "source": "src/Data-Time-Git.html#posixToUTC",
          "type": "function"
        },
        "index": {
          "description": "Convert Unix timestamp to UTCTime",
          "hierarchy": "Data Time Git",
          "module": "Data.Time.Git",
          "name": "posixToUTC",
          "normalized": "Integer-\u003eUTCTime",
          "package": "git-date",
          "partial": "To UTC",
          "signature": "Integer-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:posixToUTC"
      }
    }
  ]
]