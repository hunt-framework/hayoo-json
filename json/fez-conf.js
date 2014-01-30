[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fez-conf/docs/Fez-Data-Conf.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple functions for loading config files\n\u003c/p\u003e\u003cp\u003eThis module was motived by the desire to factor this repetitive \n   configuration file parsing code out of several of my projects.\n\u003c/p\u003e\u003cp\u003eThese functions offer very simple behavior which may be fine for \n   many tasks. For those needing something that does more, including \n   building and saving config data and .ini-style [section]s, may I \n   suggest Data.ConfigFile \n   \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/ConfigFile\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Fez.Data.Conf",
        "fct-package": "fez-conf",
        "fct-signature": "module",
        "fct-source": "src/Fez-Data-Conf.html",
        "fct-type": "module",
        "title": "Conf"
      },
      "index": {
        "description": "Simple functions for loading config files This module was motived by the desire to factor this repetitive configuration file parsing code out of several of my projects These functions offer very simple behavior which may be fine for many tasks For those needing something that does more including building and saving config data and ini-style section may suggest Data.ConfigFile http hackage.haskell.org cgi-bin hackage-scripts package ConfigFile",
        "hierarchy": "Fez Data Conf",
        "module": "Fez.Data.Conf",
        "name": "Conf",
        "normalized": "",
        "package": "fez-conf",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fez-conf/docs/Fez-Data-Conf.html#t:ConfMap",
      "description": {
        "fct-module": "Fez.Data.Conf",
        "fct-package": "fez-conf",
        "fct-signature": "type",
        "fct-source": "src/Fez-Data-Conf.html#ConfMap",
        "fct-type": "type",
        "title": "ConfMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Fez Data Conf",
        "module": "Fez.Data.Conf",
        "name": "ConfMap",
        "normalized": "",
        "package": "fez-conf",
        "partial": "Conf Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fez-conf/docs/Fez-Data-Conf.html#v:parseToArgs",
      "description": {
        "fct-descr": "\u003cp\u003eParse config file data into what looks like long args on a command \n   line.\n\u003c/p\u003e\u003cp\u003eSometimes it's convenient to be able to supply commonly used \n   long args in a config file. The idea here is you can prepend this \n   [String] to your other command line args and send the whole mess \n   to your System.Console.GetOpt-based code.\n\u003c/p\u003e\u003cp\u003eFor example, this:\n\u003c/p\u003e\u003cpre\u003e  --- file start ---\n  foo=one\n  # a comment\n\n  bar\n  baz-blorp=2\n  --- file end ---\n\u003c/pre\u003e\u003cp\u003ebecomes:\n\u003c/p\u003e\u003cpre\u003e  [ \"--foo=one\", \"--bar\", \"--baz-blorp=2\" ]\n\u003c/pre\u003e\u003cp\u003eAs above, comments (prefixed with #) and blank lines in the config \n   file are discarded.\n\u003c/p\u003e",
        "fct-module": "Fez.Data.Conf",
        "fct-package": "fez-conf",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Fez-Data-Conf.html#parseToArgs",
        "fct-type": "function",
        "title": "parseToArgs"
      },
      "index": {
        "description": "Parse config file data into what looks like long args on command line Sometimes it convenient to be able to supply commonly used long args in config file The idea here is you can prepend this String to your other command line args and send the whole mess to your System.Console.GetOpt-based code For example this file start foo one comment bar baz-blorp file end becomes foo one bar baz-blorp As above comments prefixed with and blank lines in the config file are discarded",
        "hierarchy": "Fez Data Conf",
        "module": "Fez.Data.Conf",
        "name": "parseToArgs",
        "normalized": "String-\u003e[String]",
        "package": "fez-conf",
        "partial": "To Args",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fez-conf/docs/Fez-Data-Conf.html#v:parseToMap",
      "description": {
        "fct-descr": "\u003cp\u003eParse config file data into a simple (Map String String).\n\u003c/p\u003e\u003cp\u003eFor example, this:\n\u003c/p\u003e\u003cpre\u003e  --- file start ---\n  foo=one\n  # a comment\n\n  bar\n  baz-blorp=2\n  --- file end ---\n\u003c/pre\u003e\u003cp\u003ebecomes:\n\u003c/p\u003e\u003cpre\u003e  fromList [(\"foo\",\"one\"),(\"bar\",\"\"),(\"baz-blorp\",\"2\")]\n\u003c/pre\u003e\u003cp\u003eComments (prefixed with #) and blank lines in the config file \n   are discarded.\n\u003c/p\u003e",
        "fct-module": "Fez.Data.Conf",
        "fct-package": "fez-conf",
        "fct-signature": "String -\u003e ConfMap",
        "fct-source": "src/Fez-Data-Conf.html#parseToMap",
        "fct-type": "function",
        "title": "parseToMap"
      },
      "index": {
        "description": "Parse config file data into simple Map String String For example this file start foo one comment bar baz-blorp file end becomes fromList foo one bar baz-blorp Comments prefixed with and blank lines in the config file are discarded",
        "hierarchy": "Fez Data Conf",
        "module": "Fez.Data.Conf",
        "name": "parseToMap",
        "normalized": "String-\u003eConfMap",
        "package": "fez-conf",
        "partial": "To Map",
        "signature": "String-\u003eConfMap"
      }
    }
  }
]