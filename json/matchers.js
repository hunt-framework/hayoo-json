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
        "word": "matchers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "Base",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "Base",
          "package": "matchers",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "Caseless",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#Caseless",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "Caseless",
          "package": "matchers",
          "partial": "Caseless",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#t:Caseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "PCRE",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#PCRE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "PCRE",
          "package": "matchers",
          "partial": "PCRE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#t:PCRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "PCRE_Extra",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#PCRE_Extra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "PCRE_Extra",
          "package": "matchers",
          "partial": "PCRE Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#t:PCRE_Extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "Regex",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#Regex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "Regex",
          "package": "matchers",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_free",
          "package": "matchers",
          "signature": "FunPtr (Ptr a -\u003e IO ())",
          "source": "src/Text-Matchers-Pcre-Base.html#c_free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_free",
          "normalized": "FunPtr(Ptr a-\u003eIO())",
          "package": "matchers",
          "signature": "FunPtr(Ptr a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:c_free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_pcre_compile",
          "package": "matchers",
          "signature": "CString-\u003e CInt-\u003e Ptr CString-\u003e Ptr CInt-\u003e Ptr CUChar-\u003e IO (Ptr PCRE)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_pcre_compile",
          "normalized": "CString-\u003eCInt-\u003ePtr CString-\u003ePtr CInt-\u003ePtr CUChar-\u003eIO(Ptr PCRE)",
          "package": "matchers",
          "signature": "CString-\u003eCInt-\u003ePtr CString-\u003ePtr CInt-\u003ePtr CUChar-\u003eIO(Ptr PCRE)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:c_pcre_compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_pcre_exec",
          "package": "matchers",
          "signature": "Ptr PCRE-\u003e Ptr PCRE_Extra-\u003e CString-\u003e CInt-\u003e CInt-\u003e CInt-\u003e Ptr CInt-\u003e CInt-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "c_pcre_exec",
          "normalized": "Ptr PCRE-\u003ePtr PCRE_Extra-\u003eCString-\u003eCInt-\u003eCInt-\u003eCInt-\u003ePtr CInt-\u003eCInt-\u003eIO CInt",
          "package": "matchers",
          "signature": "Ptr PCRE-\u003ePtr PCRE_Extra-\u003eCString-\u003eCInt-\u003eCInt-\u003eCInt-\u003ePtr CInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:c_pcre_exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "caseless",
          "package": "matchers",
          "signature": "CInt",
          "source": "src/Text-Matchers-Pcre-Base.html#caseless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "caseless",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:caseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "compile",
          "package": "matchers",
          "signature": "Caseless -\u003e Text -\u003e IO (Either String Regex)",
          "source": "src/Text-Matchers-Pcre-Base.html#compile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "compile",
          "normalized": "Caseless-\u003eText-\u003eIO(Either String Regex)",
          "package": "matchers",
          "signature": "Caseless-\u003eText-\u003eIO(Either String Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "exec",
          "package": "matchers",
          "signature": "Regex -\u003e Text -\u003e IO (Maybe Bool)",
          "source": "src/Text-Matchers-Pcre-Base.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "exec",
          "normalized": "Regex-\u003eText-\u003eIO(Maybe Bool)",
          "package": "matchers",
          "signature": "Regex-\u003eText-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "pcre_compile",
          "package": "matchers",
          "signature": "Caseless-\u003e Text-\u003e IO (Either String (Ptr PCRE))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "pcre_compile",
          "normalized": "Caseless-\u003eText-\u003eIO(Either String(Ptr PCRE))",
          "package": "matchers",
          "signature": "Caseless-\u003eText-\u003eIO(Either String(Ptr PCRE))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:pcre_compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre.Base",
          "name": "pcre_exec",
          "package": "matchers",
          "signature": "Ptr PCRE -\u003e Text -\u003e IO (Maybe Bool)",
          "source": "src/Text-Matchers-Pcre-Base.html#pcre_exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "pcre_exec",
          "normalized": "Ptr PCRE-\u003eText-\u003eIO(Maybe Bool)",
          "package": "matchers",
          "signature": "Ptr PCRE-\u003eText-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:pcre_exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Matchers.Pcre.Base\",\"Text.Matchers.Pcre\"]",
          "name": "reCaseless",
          "package": "matchers",
          "signature": "Regex -\u003e Caseless",
          "source": "src/Text-Matchers-Pcre-Base.html#reCaseless",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:reCaseless\",\"http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#v:reCaseless\"]"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "reCaseless",
          "normalized": "Regex-\u003eCaseless",
          "package": "matchers",
          "partial": "Caseless",
          "signature": "Regex-\u003eCaseless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:reCaseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Matchers.Pcre.Base\",\"Text.Matchers.Pcre\"]",
          "name": "rePattern",
          "package": "matchers",
          "signature": "Regex -\u003e Text",
          "source": "src/Text-Matchers-Pcre-Base.html#rePattern",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:rePattern\",\"http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#v:rePattern\"]"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre Base",
          "module": "Text.Matchers.Pcre.Base",
          "name": "rePattern",
          "normalized": "Regex-\u003eText",
          "package": "matchers",
          "partial": "Pattern",
          "signature": "Regex-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre-Base.html#v:rePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre",
          "name": "Pcre",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre",
          "module": "Text.Matchers.Pcre",
          "name": "Pcre",
          "package": "matchers",
          "partial": "Pcre",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre",
          "name": "Caseless",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#Caseless",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre",
          "module": "Text.Matchers.Pcre",
          "name": "Caseless",
          "package": "matchers",
          "partial": "Caseless",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#t:Caseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre",
          "name": "Regex",
          "package": "matchers",
          "source": "src/Text-Matchers-Pcre-Base.html#Regex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre",
          "module": "Text.Matchers.Pcre",
          "name": "Regex",
          "package": "matchers",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre",
          "name": "compile",
          "package": "matchers",
          "signature": "Caseless -\u003e Text -\u003e Either String Regex",
          "source": "src/Text-Matchers-Pcre.html#compile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre",
          "module": "Text.Matchers.Pcre",
          "name": "compile",
          "normalized": "Caseless-\u003eText-\u003eEither String Regex",
          "package": "matchers",
          "signature": "Caseless-\u003eText-\u003eEither String Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Pcre",
          "name": "exec",
          "package": "matchers",
          "signature": "Regex -\u003e Text -\u003e Maybe Bool",
          "source": "src/Text-Matchers-Pcre.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Pcre",
          "module": "Text.Matchers.Pcre",
          "name": "exec",
          "normalized": "Regex-\u003eText-\u003eMaybe Bool",
          "package": "matchers",
          "signature": "Regex-\u003eText-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Pcre.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime parsers.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eText.Matchers\u003c/a\u003e allows you to perform matching based on times.\n Times are parsed using the parsers in this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Matchers.Times",
          "name": "Times",
          "package": "matchers",
          "source": "src/Text-Matchers-Times.html",
          "type": "module"
        },
        "index": {
          "description": "Time parsers Text.Matchers allows you to perform matching based on times Times are parsed using the parsers in this module",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "Times",
          "package": "matchers",
          "partial": "Times",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Times",
          "name": "colon",
          "package": "matchers",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Matchers-Times.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "colon",
          "normalized": "Char-\u003eBool",
          "package": "matchers",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate separator (slash or hyphen).\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "dateSep",
          "package": "matchers",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Matchers-Times.html#dateSep",
          "type": "function"
        },
        "index": {
          "description": "Date separator slash or hyphen",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "dateSep",
          "normalized": "Char-\u003eBool",
          "package": "matchers",
          "partial": "Sep",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:dateSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay, followed by optional whitespace, followed by optional time\n with zone.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "dateTime",
          "package": "matchers",
          "signature": "Parser UTCTime",
          "source": "src/Text-Matchers-Times.html#dateTime",
          "type": "function"
        },
        "index": {
          "description": "Day followed by optional whitespace followed by optional time with zone",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "dateTime",
          "package": "matchers",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:dateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA two-digit day (exactly 2 digits.)\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "day",
          "package": "matchers",
          "signature": "Parser Int",
          "source": "src/Text-Matchers-Times.html#day",
          "type": "function"
        },
        "index": {
          "description": "two-digit day exactly digits",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "day",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers.Times",
          "name": "digit",
          "package": "matchers",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Matchers-Times.html#digit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "digit",
          "normalized": "Char-\u003eBool",
          "package": "matchers",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo digits for the hour (exactly two digits).  Must be between\n 0 and 23.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "hours",
          "package": "matchers",
          "signature": "Parser Int",
          "source": "src/Text-Matchers-Times.html#hours",
          "type": "function"
        },
        "index": {
          "description": "Two digits for the hour exactly two digits Must be between and",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "hours",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo digits for the minutes (exactly two digits).  Must be\n between 0 and 59.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "minutes",
          "package": "matchers",
          "signature": "Parser Int",
          "source": "src/Text-Matchers-Times.html#minutes",
          "type": "function"
        },
        "index": {
          "description": "Two digits for the minutes exactly two digits Must be between and",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "minutes",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA two-digit month (exactly 2 digits.)\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "month",
          "package": "matchers",
          "signature": "Parser Int",
          "source": "src/Text-Matchers-Times.html#month",
          "type": "function"
        },
        "index": {
          "description": "two-digit month exactly digits",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "month",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA valid Gregorian day, in YYYY-MM-DD format.  Each separator\n may be a hyphen or a slash.  Fails if the day is not valid.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "pDate",
          "package": "matchers",
          "signature": "Parser Day",
          "source": "src/Text-Matchers-Times.html#pDate",
          "type": "function"
        },
        "index": {
          "description": "valid Gregorian day in YYYY-MM-DD format Each separator may be hyphen or slash Fails if the day is not valid",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "pDate",
          "package": "matchers",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:pDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo digits for seconds (exactly two digits).  Must be between 0\n and 59; there are no leap seconds.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "seconds",
          "package": "matchers",
          "signature": "Parser Pico",
          "source": "src/Text-Matchers-Times.html#seconds",
          "type": "function"
        },
        "index": {
          "description": "Two digits for seconds exactly two digits Must be between and there are no leap seconds",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "seconds",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHours and minutes, separated by colons, with optional seconds.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "time",
          "package": "matchers",
          "signature": "Parser TimeOfDay",
          "source": "src/Text-Matchers-Times.html#time",
          "type": "function"
        },
        "index": {
          "description": "Hours and minutes separated by colons with optional seconds",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "time",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime of day, with optional time zone.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "timeWithZone",
          "package": "matchers",
          "signature": "Parser (TimeOfDay, Maybe TimeZone)",
          "source": "src/Text-Matchers-Times.html#timeWithZone",
          "type": "function"
        },
        "index": {
          "description": "Time of day with optional time zone",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "timeWithZone",
          "normalized": "Parser(TimeOfDay,Maybe TimeZone)",
          "package": "matchers",
          "partial": "With Zone",
          "signature": "Parser(TimeOfDay,Maybe TimeZone)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:timeWithZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime zone; that is, sign and offset.  Both the sign and offset\n are required.  The number of minutes may not exceed 840.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "timeZone",
          "package": "matchers",
          "signature": "Parser TimeZone",
          "source": "src/Text-Matchers-Times.html#timeZone",
          "type": "function"
        },
        "index": {
          "description": "Time zone that is sign and offset Both the sign and offset are required The number of minutes may not exceed",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "timeZone",
          "package": "matchers",
          "partial": "Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:timeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime zone offset, exactly 4 digits.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "tzNumber",
          "package": "matchers",
          "signature": "Parser Int",
          "source": "src/Text-Matchers-Times.html#tzNumber",
          "type": "function"
        },
        "index": {
          "description": "Time zone offset exactly digits",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "tzNumber",
          "package": "matchers",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:tzNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime zone sign, plus or minus.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "tzSign",
          "package": "matchers",
          "signature": "Parser (Int -\u003e Int)",
          "source": "src/Text-Matchers-Times.html#tzSign",
          "type": "function"
        },
        "index": {
          "description": "Time zone sign plus or minus",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "tzSign",
          "normalized": "Parser(Int-\u003eInt)",
          "package": "matchers",
          "partial": "Sign",
          "signature": "Parser(Int-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:tzSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpace or tab.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "white",
          "package": "matchers",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Matchers-Times.html#white",
          "type": "function"
        },
        "index": {
          "description": "Space or tab",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "white",
          "normalized": "Char-\u003eBool",
          "package": "matchers",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA four-digit year.\n\u003c/p\u003e",
          "module": "Text.Matchers.Times",
          "name": "year",
          "package": "matchers",
          "signature": "Parser Integer",
          "source": "src/Text-Matchers-Times.html#year",
          "type": "function"
        },
        "index": {
          "description": "four-digit year",
          "hierarchy": "Text Matchers Times",
          "module": "Text.Matchers.Times",
          "name": "year",
          "package": "matchers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers-Times.html#v:year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers",
          "name": "Matchers",
          "package": "matchers",
          "source": "src/Text-Matchers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "Matchers",
          "package": "matchers",
          "partial": "Matchers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers",
          "name": "CaseSensitive",
          "package": "matchers",
          "source": "src/Text-Matchers.html#CaseSensitive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "CaseSensitive",
          "package": "matchers",
          "partial": "Case Sensitive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#t:CaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers",
          "name": "Insensitive",
          "package": "matchers",
          "signature": "Insensitive",
          "source": "src/Text-Matchers.html#CaseSensitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "Insensitive",
          "package": "matchers",
          "partial": "Insensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:Insensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Matchers",
          "name": "Sensitive",
          "package": "matchers",
          "signature": "Sensitive",
          "source": "src/Text-Matchers.html#CaseSensitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "Sensitive",
          "package": "matchers",
          "partial": "Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:Sensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches any valid time.\n\u003c/p\u003e",
          "module": "Text.Matchers",
          "name": "anyTime",
          "package": "matchers",
          "signature": "Predbox Text",
          "source": "src/Text-Matchers.html#anyTime",
          "type": "function"
        },
        "index": {
          "description": "Matches any valid time",
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "anyTime",
          "package": "matchers",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:anyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher that succeeds if the pattern text exactly matches the\n subject (with case sensitivity as appropriate.)\n\u003c/p\u003e",
          "module": "Text.Matchers",
          "name": "exact",
          "package": "matchers",
          "signature": "CaseSensitive -\u003e Text -\u003e Predbox Text",
          "source": "src/Text-Matchers.html#exact",
          "type": "function"
        },
        "index": {
          "description": "Matcher that succeeds if the pattern text exactly matches the subject with case sensitivity as appropriate",
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "exact",
          "normalized": "CaseSensitive-\u003eText-\u003ePredbox Text",
          "package": "matchers",
          "signature": "CaseSensitive-\u003eText-\u003ePredbox Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the PCRE regular expression engine.\n\u003c/p\u003e",
          "module": "Text.Matchers",
          "name": "pcre",
          "package": "matchers",
          "signature": "CaseSensitive-\u003e Text-\u003e Either Text (Predbox Text)",
          "type": "function"
        },
        "index": {
          "description": "Uses the PCRE regular expression engine",
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "pcre",
          "normalized": "CaseSensitive-\u003eText-\u003eEither Text(Predbox Text)",
          "package": "matchers",
          "signature": "CaseSensitive-\u003eText-\u003eEither Text(Predbox Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:pcre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given ordering is \u003ccode\u003er\u003c/code\u003e, the given time is \u003ccode\u003et\u003c/code\u003e, and the\n time of the subject is \u003ccode\u003es\u003c/code\u003e, the Predbox returns \u003ccode\u003ecompare s t == r\u003c/code\u003e.\n Always returns False if the subject is not a valid time.\n\u003c/p\u003e",
          "module": "Text.Matchers",
          "name": "time",
          "package": "matchers",
          "signature": "Ordering-\u003e UTCTime-\u003e Predbox Text",
          "type": "function"
        },
        "index": {
          "description": "If the given ordering is the given time is and the time of the subject is the Predbox returns compare Always returns False if the subject is not valid time",
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "time",
          "normalized": "Ordering-\u003eUTCTime-\u003ePredbox Text",
          "package": "matchers",
          "signature": "Ordering-\u003eUTCTime-\u003ePredbox Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher that succeeds if the pattern text is found anywhere\n within the subject.\n\u003c/p\u003e",
          "module": "Text.Matchers",
          "name": "within",
          "package": "matchers",
          "signature": "CaseSensitive-\u003e Text-\u003e Predbox Text",
          "type": "function"
        },
        "index": {
          "description": "Matcher that succeeds if the pattern text is found anywhere within the subject",
          "hierarchy": "Text Matchers",
          "module": "Text.Matchers",
          "name": "within",
          "normalized": "CaseSensitive-\u003eText-\u003ePredbox Text",
          "package": "matchers",
          "signature": "CaseSensitive-\u003eText-\u003ePredbox Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matchers/docs/Text-Matchers.html#v:within"
      }
    }
  ]
]