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
        "word": "jonathanscard"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "JonathansCard",
          "package": "jonathanscard",
          "source": "src/Web-JonathansCard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "JonathansCard",
          "package": "jonathanscard",
          "partial": "Jonathans Card",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Balance on Jonathan's Card\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "Balance",
          "package": "jonathanscard",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "data"
        },
        "index": {
          "description": "Represents Balance on Jonathan Card",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "Balance",
          "package": "jonathanscard",
          "partial": "Balance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#t:Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the changes over time on Jonathan's Card\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "Change",
          "package": "jonathanscard",
          "source": "src/Web-JonathansCard.html#Change",
          "type": "data"
        },
        "index": {
          "description": "Represents the changes over time on Jonathan Card",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "Change",
          "package": "jonathanscard",
          "partial": "Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest representation of UTC.\n It consists of the day number, and a time offset from midnight.\n Note that if a day has a leap second added to it, it will have 86401 seconds.\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "UTCTime",
          "package": "jonathanscard",
          "type": "data"
        },
        "index": {
          "description": "This is the simplest representation of UTC It consists of the day number and time offset from midnight Note that if day has leap second added to it it will have seconds",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "UTCTime",
          "package": "jonathanscard",
          "partial": "UTCTime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#t:UTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "Balance",
          "package": "jonathanscard",
          "signature": "Balance",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "Balance",
          "package": "jonathanscard",
          "partial": "Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "Change",
          "package": "jonathanscard",
          "signature": "Change",
          "source": "src/Web-JonathansCard.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "Change",
          "package": "jonathanscard",
          "partial": "Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "balAmount",
          "package": "jonathanscard",
          "signature": "Double",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "balAmount",
          "package": "jonathanscard",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:balAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "balBalanceId",
          "package": "jonathanscard",
          "signature": "Int",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "balBalanceId",
          "package": "jonathanscard",
          "partial": "Balance Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:balBalanceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "balCreated",
          "package": "jonathanscard",
          "signature": "Maybe UTCTime",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "balCreated",
          "package": "jonathanscard",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:balCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "balMessage",
          "package": "jonathanscard",
          "signature": "String",
          "source": "src/Web-JonathansCard.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "balMessage",
          "package": "jonathanscard",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:balMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of balances on Jonathan's Card\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "balances",
          "package": "jonathanscard",
          "signature": "IO (Either String [Balance])",
          "source": "src/Web-JonathansCard.html#balances",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of balances on Jonathan Card",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "balances",
          "normalized": "IO(Either String[Balance])",
          "package": "jonathanscard",
          "signature": "IO(Either String[Balance])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:balances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the changes in amounts on Jonathan's Card\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "changes",
          "package": "jonathanscard",
          "signature": "IO (Either String [Change])",
          "source": "src/Web-JonathansCard.html#changes",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the changes in amounts on Jonathan Card",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "changes",
          "normalized": "IO(Either String[Change])",
          "package": "jonathanscard",
          "signature": "IO(Either String[Change])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "chgBalance",
          "package": "jonathanscard",
          "signature": "Double",
          "source": "src/Web-JonathansCard.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "chgBalance",
          "package": "jonathanscard",
          "partial": "Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:chgBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "chgCreated",
          "package": "jonathanscard",
          "signature": "Maybe UTCTime",
          "source": "src/Web-JonathansCard.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "chgCreated",
          "package": "jonathanscard",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:chgCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.JonathansCard",
          "name": "chgDelta",
          "package": "jonathanscard",
          "signature": "Double",
          "source": "src/Web-JonathansCard.html#Change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "chgDelta",
          "package": "jonathanscard",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:chgDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the latest balance on Jonathan's Card\n\u003c/p\u003e",
          "module": "Web.JonathansCard",
          "name": "latest",
          "package": "jonathanscard",
          "signature": "IO (Either String Balance)",
          "source": "src/Web-JonathansCard.html#latest",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the latest balance on Jonathan Card",
          "hierarchy": "Web JonathansCard",
          "module": "Web.JonathansCard",
          "name": "latest",
          "package": "jonathanscard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jonathanscard/docs/Web-JonathansCard.html#v:latest"
      }
    }
  ]
]