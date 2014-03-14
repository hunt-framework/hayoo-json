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
        "word": "lighttpd-conf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Parser",
          "name": "parseConf",
          "package": "lighttpd-conf",
          "signature": "ByteString -\u003e Maybe Config",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Parser.html#parseConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Parser",
          "module": "Lighttpd.Conf.Parser",
          "name": "parseConf",
          "normalized": "ByteString-\u003eMaybe Config",
          "package": "lighttpd-conf",
          "partial": "Conf",
          "signature": "ByteString-\u003eMaybe Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Parser.html#v:parseConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Parser",
          "name": "parseConf'",
          "package": "lighttpd-conf",
          "signature": "String -\u003e Maybe Config",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Parser.html#parseConf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Parser",
          "module": "Lighttpd.Conf.Parser",
          "name": "parseConf'",
          "normalized": "String-\u003eMaybe Config",
          "package": "lighttpd-conf",
          "partial": "Conf'",
          "signature": "String-\u003eMaybe Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Parser.html#v:parseConf'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "PprMode",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#PprMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "PprMode",
          "package": "lighttpd-conf",
          "partial": "Ppr Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#t:PprMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "Ppr",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#Ppr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "Ppr",
          "package": "lighttpd-conf",
          "partial": "Ppr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#v:Ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "ppr",
          "package": "lighttpd-conf",
          "signature": "a -\u003e Doc",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#ppr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "ppr",
          "normalized": "a-\u003eDoc",
          "package": "lighttpd-conf",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#v:ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprField",
          "package": "lighttpd-conf",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#pprField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprField",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "lighttpd-conf",
          "partial": "Field",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#v:pprField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprWithMode",
          "package": "lighttpd-conf",
          "signature": "PprMode -\u003e Config -\u003e Doc",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#pprWithMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprWithMode",
          "normalized": "PprMode-\u003eConfig-\u003eDoc",
          "package": "lighttpd-conf",
          "partial": "With Mode",
          "signature": "PprMode-\u003eConfig-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#v:pprWithMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprs",
          "package": "lighttpd-conf",
          "signature": "[a] -\u003e Doc",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Ppr.html#pprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Ppr",
          "module": "Lighttpd.Conf.Ppr",
          "name": "pprs",
          "normalized": "[a]-\u003eDoc",
          "package": "lighttpd-conf",
          "signature": "[a]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Ppr.html#v:pprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "ArrayElem",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#ArrayElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "ArrayElem",
          "package": "lighttpd-conf",
          "partial": "Array Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:ArrayElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Cond",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Cond",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Cond",
          "package": "lighttpd-conf",
          "partial": "Cond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "CondElse",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#CondElse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "CondElse",
          "package": "lighttpd-conf",
          "partial": "Cond Else",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:CondElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Config",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Config",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Config",
          "package": "lighttpd-conf",
          "partial": "Config",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Enabled",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Enabled",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Enabled",
          "package": "lighttpd-conf",
          "partial": "Enabled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Exp",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Exp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Exp",
          "package": "lighttpd-conf",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Field",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Field",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Field",
          "package": "lighttpd-conf",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Include",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Include",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Include",
          "package": "lighttpd-conf",
          "partial": "Include",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Include"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Name",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Name",
          "package": "lighttpd-conf",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Op",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Op",
          "package": "lighttpd-conf",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Pat",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Pat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Pat",
          "package": "lighttpd-conf",
          "partial": "Pat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "QName",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#QName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "QName",
          "package": "lighttpd-conf",
          "partial": "QName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "Val",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#Val",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "Val",
          "package": "lighttpd-conf",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "ToVal",
          "package": "lighttpd-conf",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#ToVal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "ToVal",
          "package": "lighttpd-conf",
          "partial": "To Val",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#v:ToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "mkName",
          "package": "lighttpd-conf",
          "signature": "String -\u003e Name",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#mkName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "mkName",
          "normalized": "String-\u003eName",
          "package": "lighttpd-conf",
          "partial": "Name",
          "signature": "String-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#v:mkName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "mkQName",
          "package": "lighttpd-conf",
          "signature": "String -\u003e String -\u003e QName",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#mkQName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "mkQName",
          "normalized": "String-\u003eString-\u003eQName",
          "package": "lighttpd-conf",
          "partial": "QName",
          "signature": "String-\u003eString-\u003eQName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#v:mkQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lighttpd.Conf.Syntax",
          "name": "toVal",
          "package": "lighttpd-conf",
          "signature": "a -\u003e Val",
          "source": "http://hackage.haskell.org/package/lighttpd-conf/docs/src/Lighttpd-Conf-Syntax.html#toVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lighttpd Conf Syntax",
          "module": "Lighttpd.Conf.Syntax",
          "name": "toVal",
          "normalized": "a-\u003eVal",
          "package": "lighttpd-conf",
          "partial": "Val",
          "signature": "a-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lighttpd-conf/docs/Lighttpd-Conf-Syntax.html#v:toVal"
      }
    }
  ]
]