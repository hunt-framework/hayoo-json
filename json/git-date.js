[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#",
      "description": {
        "fct-module": "Data.Time.Git",
        "fct-package": "git-date",
        "fct-signature": "module",
        "fct-source": "src/Data-Time-Git.html",
        "fct-type": "module",
        "title": "Git"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Git",
        "module": "Data.Time.Git",
        "name": "Git",
        "normalized": "",
        "package": "git-date",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:approxidate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date/time string and return Just a Unix timestamp.\n   Return Nothing if the string could not be interpreted.\n   If no timezone is in the string, the local timezone is used.\n   This is not in IO and you cannot safely ask it to parse strings like\n   \"now\" and \"yesterday\".\n\u003c/p\u003e",
        "fct-module": "Data.Time.Git",
        "fct-package": "git-date",
        "fct-signature": "String -\u003e Maybe Integer",
        "fct-source": "src/Data-Time-Git.html#approxidate",
        "fct-type": "function",
        "title": "approxidate"
      },
      "index": {
        "description": "Parse date time string and return Just Unix timestamp Return Nothing if the string could not be interpreted If no timezone is in the string the local timezone is used This is not in IO and you cannot safely ask it to parse strings like now and yesterday",
        "hierarchy": "Data Time Git",
        "module": "Data.Time.Git",
        "name": "approxidate",
        "normalized": "String-\u003eMaybe Integer",
        "package": "git-date",
        "partial": "",
        "signature": "String-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:io_approxidate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date/time string and return Just a Unix timestamp.\n   Return Nothing if the string could not be interpreted.\n   If no timezone is in the string, the local timezone is used.\n   This is in IO so that you can safely ask it to parse strings like\n   \"now\" and \"yesterday\".\n\u003c/p\u003e",
        "fct-module": "Data.Time.Git",
        "fct-package": "git-date",
        "fct-signature": "String -\u003e IO (Maybe Integer)",
        "fct-source": "src/Data-Time-Git.html#io_approxidate",
        "fct-type": "function",
        "title": "io_approxidate"
      },
      "index": {
        "description": "Parse date time string and return Just Unix timestamp Return Nothing if the string could not be interpreted If no timezone is in the string the local timezone is used This is in IO so that you can safely ask it to parse strings like now and yesterday",
        "hierarchy": "Data Time Git",
        "module": "Data.Time.Git",
        "name": "io_approxidate",
        "normalized": "String-\u003eIO(Maybe Integer)",
        "package": "git-date",
        "partial": "",
        "signature": "String-\u003eIO(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/git-date/docs/Data-Time-Git.html#v:posixToUTC",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Unix timestamp to a UTCTime\n\u003c/p\u003e",
        "fct-module": "Data.Time.Git",
        "fct-package": "git-date",
        "fct-signature": "Integer -\u003e UTCTime",
        "fct-source": "src/Data-Time-Git.html#posixToUTC",
        "fct-type": "function",
        "title": "posixToUTC"
      },
      "index": {
        "description": "Convert Unix timestamp to UTCTime",
        "hierarchy": "Data Time Git",
        "module": "Data.Time.Git",
        "name": "posixToUTC",
        "normalized": "Integer-\u003eUTCTime",
        "package": "git-date",
        "partial": "To UTC",
        "signature": "Integer-\u003eUTCTime"
      }
    }
  }
]