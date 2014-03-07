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
        "word": "ConfigFile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "Monadic",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Monadic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "Monadic",
          "package": "ConfigFile",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "add_section",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#add_section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "add_section",
          "normalized": "SectionSpec-\u003eConfigParser-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:add_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "has_option",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e OptionSpec -\u003e ConfigParser -\u003e Bool",
          "source": "src/Data-ConfigFile-Monadic.html#has_option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "has_option",
          "normalized": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003eBool",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:has_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "has_section",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e ConfigParser -\u003e Bool",
          "source": "src/Data-ConfigFile-Monadic.html#has_section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "has_section",
          "normalized": "SectionSpec-\u003eConfigParser-\u003eBool",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eConfigParser-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:has_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "interpolatingAccess",
          "package": "ConfigFile",
          "signature": "Int -\u003e SectionSpec -\u003e OptionSpec -\u003e ConfigParser -\u003e m String",
          "source": "src/Data-ConfigFile-Monadic.html#interpolatingAccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "interpolatingAccess",
          "normalized": "Int-\u003eSectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003ea String",
          "package": "ConfigFile",
          "partial": "Access",
          "signature": "Int-\u003eSectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:interpolatingAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "items",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e ConfigParser -\u003e m [(OptionSpec, String)]",
          "source": "src/Data-ConfigFile-Monadic.html#items",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "items",
          "normalized": "SectionSpec-\u003eConfigParser-\u003ea[(OptionSpec,String)]",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eConfigParser-\u003em[(OptionSpec,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "options",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e ConfigParser -\u003e m [OptionSpec]",
          "source": "src/Data-ConfigFile-Monadic.html#options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "options",
          "normalized": "SectionSpec-\u003eConfigParser-\u003ea[OptionSpec]",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eConfigParser-\u003em[OptionSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "readfile",
          "package": "ConfigFile",
          "signature": "FilePath -\u003e ConfigParser -\u003e IO (m ConfigParser)",
          "source": "src/Data-ConfigFile-Monadic.html#readfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "readfile",
          "normalized": "FilePath-\u003eConfigParser-\u003eIO(a ConfigParser)",
          "package": "ConfigFile",
          "signature": "FilePath-\u003eConfigParser-\u003eIO(m ConfigParser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:readfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "readhandle",
          "package": "ConfigFile",
          "signature": "Handle -\u003e ConfigParser -\u003e IO (m ConfigParser)",
          "source": "src/Data-ConfigFile-Monadic.html#readhandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "readhandle",
          "normalized": "Handle-\u003eConfigParser-\u003eIO(a ConfigParser)",
          "package": "ConfigFile",
          "signature": "Handle-\u003eConfigParser-\u003eIO(m ConfigParser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:readhandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "readstring",
          "package": "ConfigFile",
          "signature": "String -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#readstring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "readstring",
          "normalized": "String-\u003eConfigParser-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "String-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:readstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "remove_option",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e OptionSpec -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#remove_option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "remove_option",
          "normalized": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:remove_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "remove_section",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#remove_section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "remove_section",
          "normalized": "SectionSpec-\u003eConfigParser-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:remove_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "set",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e OptionSpec -\u003e String -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "set",
          "normalized": "SectionSpec-\u003eOptionSpec-\u003eString-\u003eConfigParser-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eOptionSpec-\u003eString-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "setshow",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e OptionSpec -\u003e a -\u003e ConfigParser -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile-Monadic.html#setshow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "setshow",
          "normalized": "SectionSpec-\u003eOptionSpec-\u003ea-\u003eConfigParser-\u003eb ConfigParser",
          "package": "ConfigFile",
          "signature": "SectionSpec-\u003eOptionSpec-\u003ea-\u003eConfigParser-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:setshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Monadic",
          "name": "simpleAccess",
          "package": "ConfigFile",
          "signature": "SectionSpec -\u003e OptionSpec -\u003e ConfigParser -\u003e m String",
          "source": "src/Data-ConfigFile-Monadic.html#simpleAccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Monadic",
          "module": "Data.ConfigFile.Monadic",
          "name": "simpleAccess",
          "normalized": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003ea String",
          "package": "ConfigFile",
          "partial": "Access",
          "signature": "SectionSpec-\u003eOptionSpec-\u003eConfigParser-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Monadic.html#v:simpleAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser support for \u003ca\u003eData.ConfigFile\u003c/a\u003e.  This module is not intended to be\nused directly by your programs.\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2008 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ConfigFile.Parser",
          "name": "Parser",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser support for Data.ConfigFile This module is not intended to be used directly by your programs Copyright John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "Parser",
          "package": "ConfigFile",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal output from parser \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Parser",
          "name": "ParseOutput",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#ParseOutput",
          "type": "type"
        },
        "index": {
          "description": "Internal output from parser",
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "ParseOutput",
          "package": "ConfigFile",
          "partial": "Parse Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#t:ParseOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Parser",
          "name": "interpmain",
          "package": "ConfigFile",
          "signature": "(String -\u003e Either CPError String) -\u003e Parser String",
          "source": "src/Data-ConfigFile-Parser.html#interpmain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "interpmain",
          "normalized": "(String-\u003eEither CPError String)-\u003eParser String",
          "package": "ConfigFile",
          "signature": "(String-\u003eEither CPError String)-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#v:interpmain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Parser",
          "name": "parse_file",
          "package": "ConfigFile",
          "signature": "FilePath -\u003e IO (m ParseOutput)",
          "source": "src/Data-ConfigFile-Parser.html#parse_file",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "parse_file",
          "normalized": "FilePath-\u003eIO(a ParseOutput)",
          "package": "ConfigFile",
          "signature": "FilePath-\u003eIO(m ParseOutput)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#v:parse_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Parser",
          "name": "parse_handle",
          "package": "ConfigFile",
          "signature": "Handle -\u003e IO (m ParseOutput)",
          "source": "src/Data-ConfigFile-Parser.html#parse_handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "parse_handle",
          "normalized": "Handle-\u003eIO(a ParseOutput)",
          "package": "ConfigFile",
          "signature": "Handle-\u003eIO(m ParseOutput)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#v:parse_handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.Parser",
          "name": "parse_string",
          "package": "ConfigFile",
          "signature": "String -\u003e m ParseOutput",
          "source": "src/Data-ConfigFile-Parser.html#parse_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile Parser",
          "module": "Data.ConfigFile.Parser",
          "name": "parse_string",
          "normalized": "String-\u003ea ParseOutput",
          "package": "ConfigFile",
          "signature": "String-\u003em ParseOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Parser.html#v:parse_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal types for \u003ca\u003eData.ConfigFile\u003c/a\u003e.  This module is not intended to be\nused directly by your programs.\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2008 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "Types",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Internal types for Data.ConfigFile This module is not intended to be used directly by your programs Copyright John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "Types",
          "package": "ConfigFile",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main data storage type (storage of sections).\n\u003c/p\u003e\u003cp\u003ePLEASE NOTE: This type is exported only for use by other modules under\nData.ConfigFile.  You should NEVER access the FiniteMap in a ConfigParser\ndirectly.  This type may change in future releases of MissingH, which could\nbreak your programs.  Please retrict yourself to the interface in\n\u003ccode\u003eData.ConfigFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "CPData",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPData",
          "type": "type"
        },
        "index": {
          "description": "The main data storage type storage of sections PLEASE NOTE This type is exported only for use by other modules under Data.ConfigFile You should NEVER access the FiniteMap in ConfigParser directly This type may change in future releases of MissingH which could break your programs Please retrict yourself to the interface in Data.ConfigFile",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "CPData",
          "package": "ConfigFile",
          "partial": "CPData",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:CPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates an error occurred.  The String is an explanation of the location\nof the error. \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "CPError",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPError",
          "type": "type"
        },
        "index": {
          "description": "Indicates an error occurred The String is an explanation of the location of the error",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "CPError",
          "package": "ConfigFile",
          "partial": "CPError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:CPError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible ConfigParser errors. \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "CPErrorData",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "data"
        },
        "index": {
          "description": "Possible ConfigParser errors",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "CPErrorData",
          "package": "ConfigFile",
          "partial": "CPError Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:CPErrorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStorage of options. \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "CPOptions",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPOptions",
          "type": "type"
        },
        "index": {
          "description": "Storage of options",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "CPOptions",
          "package": "ConfigFile",
          "partial": "CPOptions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:CPOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main record that is used by \u003ccode\u003eData.ConfigFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "data"
        },
        "index": {
          "description": "This is the main record that is used by Data.ConfigFile",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "partial": "Config Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:ConfigParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of options \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "OptionSpec",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#OptionSpec",
          "type": "type"
        },
        "index": {
          "description": "Names of options",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "OptionSpec",
          "package": "ConfigFile",
          "partial": "Option Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:OptionSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal output from parser \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "ParseOutput",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#ParseOutput",
          "type": "type"
        },
        "index": {
          "description": "Internal output from parser",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "ParseOutput",
          "package": "ConfigFile",
          "partial": "Parse Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:ParseOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of sections \n\u003c/p\u003e",
          "module": "Data.ConfigFile.Types",
          "name": "SectionSpec",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#SectionSpec",
          "type": "type"
        },
        "index": {
          "description": "Names of sections",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "SectionSpec",
          "package": "ConfigFile",
          "partial": "Section Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#t:SectionSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:ConfigParser\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:ConfigParser\"]"
        },
        "index": {
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "partial": "Config Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:ConfigParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaised by \u003ccode\u003eData.ConfigFile.interpolatingAccess\u003c/code\u003e if a request was made for a non-existant option\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "InterpolationError",
          "package": "ConfigFile",
          "signature": "InterpolationError String",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:InterpolationError\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:InterpolationError\"]"
        },
        "index": {
          "description": "Raised by Data.ConfigFile.interpolatingAccess if request was made for non-existant option",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "InterpolationError",
          "package": "ConfigFile",
          "partial": "Interpolation Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:InterpolationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe option does not exist\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "NoOption",
          "package": "ConfigFile",
          "signature": "NoOption OptionSpec",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:NoOption\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:NoOption\"]"
        },
        "index": {
          "description": "The option does not exist",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "NoOption",
          "package": "ConfigFile",
          "partial": "No Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:NoOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe section does not exist\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "NoSection",
          "package": "ConfigFile",
          "signature": "NoSection SectionSpec",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:NoSection\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:NoSection\"]"
        },
        "index": {
          "description": "The section does not exist",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "NoSection",
          "package": "ConfigFile",
          "partial": "No Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:NoSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMiscellaneous error\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "OtherProblem",
          "package": "ConfigFile",
          "signature": "OtherProblem String",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:OtherProblem\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:OtherProblem\"]"
        },
        "index": {
          "description": "Miscellaneous error",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "OtherProblem",
          "package": "ConfigFile",
          "partial": "Other Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:OtherProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse error\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "ParseError",
          "package": "ConfigFile",
          "signature": "ParseError String",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:ParseError\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:ParseError\"]"
        },
        "index": {
          "description": "Parse error",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "ParseError",
          "package": "ConfigFile",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to create an already-existing ection\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "SectionAlreadyExists",
          "package": "ConfigFile",
          "signature": "SectionAlreadyExists SectionSpec",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:SectionAlreadyExists\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:SectionAlreadyExists\"]"
        },
        "index": {
          "description": "Attempt to create an already-existing ection",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "SectionAlreadyExists",
          "package": "ConfigFile",
          "partial": "Section Already Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:SectionAlreadyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that is used to perform lookups, do optional\n interpolation, etc.  It is assumed that accessfunc\n will internally call defaulthandler to do the underlying lookup.\n The option value is not assumed to be transformed.\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "accessfunc",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e Either CPError String",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:accessfunc\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:accessfunc\"]"
        },
        "index": {
          "description": "Function that is used to perform lookups do optional interpolation etc It is assumed that accessfunc will internally call defaulthandler to do the underlying lookup The option value is not assumed to be transformed",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "accessfunc",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eEither CPError String",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eEither CPError String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:accessfunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data itself\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "content",
          "package": "ConfigFile",
          "signature": "CPData",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:content\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:content\"]"
        },
        "index": {
          "description": "The data itself",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "content",
          "package": "ConfigFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to look up an option, considering a default value\n if \u003ccode\u003e\u003ca\u003eusedefault\u003c/a\u003e\u003c/code\u003e is True; or ignoring a default value otherwise.\n The option specification is assumed to be already transformed.\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "defaulthandler",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e Either CPError String",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:defaulthandler\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:defaulthandler\"]"
        },
        "index": {
          "description": "Function to look up an option considering default value if usedefault is True or ignoring default value otherwise The option specification is assumed to be already transformed",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "defaulthandler",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eEither CPError String",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eEither CPError String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:defaulthandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to transform an option into a standard representation\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "optionxform",
          "package": "ConfigFile",
          "signature": "OptionSpec -\u003e OptionSpec",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:optionxform\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:optionxform\"]"
        },
        "index": {
          "description": "How to transform an option into standard representation",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "optionxform",
          "normalized": "OptionSpec-\u003eOptionSpec",
          "package": "ConfigFile",
          "signature": "OptionSpec-\u003eOptionSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:optionxform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not to seek out a default action when no match\n is found.\n\u003c/p\u003e",
          "module": "[\"Data.ConfigFile.Types\",\"Data.ConfigFile\"]",
          "name": "usedefault",
          "package": "ConfigFile",
          "signature": "Bool",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:usedefault\",\"http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:usedefault\"]"
        },
        "index": {
          "description": "Whether or not to seek out default action when no match is found",
          "hierarchy": "Data ConfigFile Types",
          "module": "Data.ConfigFile.Types",
          "name": "usedefault",
          "package": "ConfigFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile-Types.html#v:usedefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguration file parsing, generation, and manipulation\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2004-2008 John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module contains extensive documentation.  Please scroll down to the Introduction section to continue reading.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ConfigFile",
          "name": "ConfigFile",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile.html",
          "type": "module"
        },
        "index": {
          "description": "Configuration file parsing generation and manipulation Copyright John Goerzen jgoerzen@complete.org This module contains extensive documentation Please scroll down to the Introduction section to continue reading",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "ConfigFile",
          "package": "ConfigFile",
          "partial": "Config File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates an error occurred.  The String is an explanation of the location\nof the error. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "CPError",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPError",
          "type": "type"
        },
        "index": {
          "description": "Indicates an error occurred The String is an explanation of the location of the error",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "CPError",
          "package": "ConfigFile",
          "partial": "CPError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:CPError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible ConfigParser errors. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "CPErrorData",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#CPErrorData",
          "type": "data"
        },
        "index": {
          "description": "Possible ConfigParser errors",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "CPErrorData",
          "package": "ConfigFile",
          "partial": "CPError Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:CPErrorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main record that is used by \u003ccode\u003eData.ConfigFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#ConfigParser",
          "type": "data"
        },
        "index": {
          "description": "This is the main record that is used by Data.ConfigFile",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "ConfigParser",
          "package": "ConfigFile",
          "partial": "Config Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:ConfigParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class representing the data types that can be returned by \u003ca\u003eget\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "Get_C",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile.html#Get_C",
          "type": "class"
        },
        "index": {
          "description": "The class representing the data types that can be returned by get",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "Get_C",
          "package": "ConfigFile",
          "partial": "Get",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:Get_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of options \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "OptionSpec",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#OptionSpec",
          "type": "type"
        },
        "index": {
          "description": "Names of options",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "OptionSpec",
          "package": "ConfigFile",
          "partial": "Option Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:OptionSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of sections \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "SectionSpec",
          "package": "ConfigFile",
          "source": "src/Data-ConfigFile-Types.html#SectionSpec",
          "type": "type"
        },
        "index": {
          "description": "Names of sections",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "SectionSpec",
          "package": "ConfigFile",
          "partial": "Section Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#t:SectionSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the specified section name.  Returns a\n\u003ccode\u003e\u003ca\u003eSectionAlreadyExists\u003c/a\u003e\u003c/code\u003e error if the\nsection was already present.  Otherwise, returns the new\n\u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "add_section",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#add_section",
          "type": "function"
        },
        "index": {
          "description": "Adds the specified section name Returns SectionAlreadyExists error if the section was already present Otherwise returns the new ConfigParser object",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "add_section",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:add_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default empty \u003ccode\u003eData.ConfigFile\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eThe content contains only an empty mandatory \u003ccode\u003eDEFAULT\u003c/code\u003e section.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eoptionxform\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003emap toLower\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eusedefault\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eaccessfunc\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003e\u003ca\u003esimpleAccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "emptyCP",
          "package": "ConfigFile",
          "signature": "ConfigParser",
          "source": "src/Data-ConfigFile.html#emptyCP",
          "type": "function"
        },
        "index": {
          "description": "The default empty Data.ConfigFile object The content contains only an empty mandatory DEFAULT section optionxform is set to map toLower usedefault is set to True accessfunc is set to simpleAccess",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "emptyCP",
          "package": "ConfigFile",
          "partial": "CP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:emptyCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a string from the configuration file.\n\u003c/p\u003e\u003cp\u003eWhen used in a context where a String is expected, returns that string verbatim.\n\u003c/p\u003e\u003cp\u003eWhen used in a context where a Bool is expected, parses the string to\na Boolean value (see logic below).\n\u003c/p\u003e\u003cp\u003eWhen used in a context where anything that is an instance of Read is expected,\ncalls read to parse the item.\n\u003c/p\u003e\u003cp\u003eAn error will be returned of no such option could be found or if it could\nnot be parsed as a boolean (when returning a Bool).\n\u003c/p\u003e\u003cp\u003eWhen parsing to a Bool, strings are case-insentively converted as follows:\n\u003c/p\u003e\u003cp\u003eThe following will produce a True value:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 1\n\u003c/li\u003e\u003cli\u003e yes\n\u003c/li\u003e\u003cli\u003e on\n\u003c/li\u003e\u003cli\u003e enabled\n\u003c/li\u003e\u003cli\u003e true\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe following will produce a False value:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0\n\u003c/li\u003e\u003cli\u003e no\n\u003c/li\u003e\u003cli\u003e off\n\u003c/li\u003e\u003cli\u003e disabled\n\u003c/li\u003e\u003cli\u003e false \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ConfigFile",
          "name": "get",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e m a",
          "source": "src/Data-ConfigFile.html#get",
          "type": "method"
        },
        "index": {
          "description": "Retrieves string from the configuration file When used in context where String is expected returns that string verbatim When used in context where Bool is expected parses the string to Boolean value see logic below When used in context where anything that is an instance of Read is expected calls read to parse the item An error will be returned of no such option could be found or if it could not be parsed as boolean when returning Bool When parsing to Bool strings are case-insentively converted as follows The following will produce True value yes on enabled true The following will produce False value no off disabled false",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "get",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea b",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the given option is present.  Returns True\nonly if the given section is present AND the given option is present\nin that section.  No special \u003ccode\u003eDEFAULT\u003c/code\u003e processing is done.  No\nexception could be raised or error returned.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "has_option",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e Bool",
          "source": "src/Data-ConfigFile.html#has_option",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the given option is present Returns True only if the given section is present AND the given option is present in that section No special DEFAULT processing is done No exception could be raised or error returned",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "has_option",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eBool",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:has_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the given section exists.\n\u003c/p\u003e\u003cp\u003eNo special \u003ccode\u003eDEFAULT\u003c/code\u003e processing is done. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "has_section",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e Bool",
          "source": "src/Data-ConfigFile.html#has_section",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the given section exists No special DEFAULT processing is done",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "has_section",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eBool",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:has_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolating access function.  Please see the Interpolation section\nabove for a background on interpolation.\n\u003c/p\u003e\u003cp\u003eAlthough the format string looks similar to one used by \u003ca\u003eText.Printf\u003c/a\u003e,\nit is not the same.  In particular, only the %(...)s format is supported.\nNo width specifiers are supported and no conversions other than s are supported.\n\u003c/p\u003e\u003cp\u003eTo use this function, you must specify a maximum recursion depth for\ninterpolation.  This is used to prevent a stack overflow in the event that\nthe configuration file contains an endless interpolation loop.  Values of 10\nor so are usually more than enough, though you could probably go into the\nhundreds or thousands before you have actual problems.\n\u003c/p\u003e\u003cp\u003eA value less than one will cause an instant error every time you attempt\na lookup.\n\u003c/p\u003e\u003cp\u003eThis access method can cause \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and friends to return a new \u003ccode\u003e\u003ca\u003eCPError\u003c/a\u003e\u003c/code\u003e:\n\u003ccode\u003e\u003ca\u003eInterpolationError\u003c/a\u003e\u003c/code\u003e.  This error would be returned when:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The configuration file makes a reference to an option that does\n   not exist\n\u003c/li\u003e\u003cli\u003e The maximum interpolation depth is exceeded\n\u003c/li\u003e\u003cli\u003e There is a syntax error processing a %-directive in the configuration\n   file\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn interpolation lookup name specifies an option only.  There is no provision\nto specify a section.  Interpolation variables are looked up in the current\nsection, and, if \u003ccode\u003e\u003ca\u003eusedefault\u003c/a\u003e\u003c/code\u003e is True, in \u003ccode\u003eDEFAULT\u003c/code\u003e according to the normal\nlogic.\n\u003c/p\u003e\u003cp\u003eTo use a literal percent sign, you must place \u003ccode\u003e%%\u003c/code\u003e in the configuration\nfile when interpolation is used.\n\u003c/p\u003e\u003cp\u003eHere is how you might enable interpolation:\n\u003c/p\u003e\u003cpre\u003elet cp2 = cp {accessfunc = interpolatingAccess 10}\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ecp2\u003c/code\u003e object will now support interpolation with a maximum depth of 10.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "interpolatingAccess",
          "package": "ConfigFile",
          "signature": "Int -\u003e ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e m String",
          "source": "src/Data-ConfigFile.html#interpolatingAccess",
          "type": "function"
        },
        "index": {
          "description": "Interpolating access function Please see the Interpolation section above for background on interpolation Although the format string looks similar to one used by Text.Printf it is not the same In particular only the format is supported No width specifiers are supported and no conversions other than are supported To use this function you must specify maximum recursion depth for interpolation This is used to prevent stack overflow in the event that the configuration file contains an endless interpolation loop Values of or so are usually more than enough though you could probably go into the hundreds or thousands before you have actual problems value less than one will cause an instant error every time you attempt lookup This access method can cause get and friends to return new CPError InterpolationError This error would be returned when The configuration file makes reference to an option that does not exist The maximum interpolation depth is exceeded There is syntax error processing directive in the configuration file An interpolation lookup name specifies an option only There is no provision to specify section Interpolation variables are looked up in the current section and if usedefault is True in DEFAULT according to the normal logic To use literal percent sign you must place in the configuration file when interpolation is used Here is how you might enable interpolation let cp2 cp accessfunc interpolatingAccess The cp2 object will now support interpolation with maximum depth of",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "interpolatingAccess",
          "normalized": "Int-\u003eConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea String",
          "package": "ConfigFile",
          "partial": "Access",
          "signature": "Int-\u003eConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:interpolatingAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of \u003ccode\u003e(optionname, value)\u003c/code\u003e pairs representing the content\nof the given section.  Returns an error the section is invalid. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "items",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e m [(OptionSpec, String)]",
          "source": "src/Data-ConfigFile.html#items",
          "type": "function"
        },
        "index": {
          "description": "Returns list of optionname value pairs representing the content of the given section Returns an error the section is invalid",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "items",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003ea[(OptionSpec,String)]",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003em[(OptionSpec,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003es into one.\n\u003c/p\u003e\u003cp\u003eAny duplicate options are resolved to contain the value specified in\nthe second parser.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e options in the resulting object will be set as they\nare in the second one passed to this function. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "merge",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e ConfigParser -\u003e ConfigParser",
          "source": "src/Data-ConfigFile.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Combines two ConfigParser into one Any duplicate options are resolved to contain the value specified in the second parser The ConfigParser options in the resulting object will be set as they are in the second one passed to this function",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "merge",
          "normalized": "ConfigParser-\u003eConfigParser-\u003eConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eConfigParser-\u003eConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the names of all the options present in the\ngiven section.\n\u003c/p\u003e\u003cp\u003eReturns an error if the given section does not exist.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "options",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e m [OptionSpec]",
          "source": "src/Data-ConfigFile.html#options",
          "type": "function"
        },
        "index": {
          "description": "Returns list of the names of all the options present in the given section Returns an error if the given section does not exist",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "options",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003ea[OptionSpec]",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003em[OptionSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads data from the specified file.  It is then combined with the\ngiven \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e using the semantics documented under \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e with the\nnew data taking precedence over the old.  However, unlike\n\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e, all the options\nas set in the old object are preserved since the on-disk representation\ndoes not convey those options.\n\u003c/p\u003e\u003cp\u003eMay return an error if there is a syntax error.  May raise an exception if the file could not be accessed.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "readfile",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e FilePath -\u003e IO (m ConfigParser)",
          "source": "src/Data-ConfigFile.html#readfile",
          "type": "function"
        },
        "index": {
          "description": "Loads data from the specified file It is then combined with the given ConfigParser using the semantics documented under merge with the new data taking precedence over the old However unlike merge all the options as set in the old object are preserved since the on-disk representation does not convey those options May return an error if there is syntax error May raise an exception if the file could not be accessed",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "readfile",
          "normalized": "ConfigParser-\u003eFilePath-\u003eIO(a ConfigParser)",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eFilePath-\u003eIO(m ConfigParser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:readfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereadfile\u003c/a\u003e\u003c/code\u003e, but uses an already-open handle.  You should\nuse \u003ccode\u003e\u003ca\u003ereadfile\u003c/a\u003e\u003c/code\u003e instead of this if possible, since it will be able to\ngenerate better error messages.\n\u003c/p\u003e\u003cp\u003eErrors would be returned on a syntax error.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "readhandle",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e Handle -\u003e IO (m ConfigParser)",
          "source": "src/Data-ConfigFile.html#readhandle",
          "type": "function"
        },
        "index": {
          "description": "Like readfile but uses an already-open handle You should use readfile instead of this if possible since it will be able to generate better error messages Errors would be returned on syntax error",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "readhandle",
          "normalized": "ConfigParser-\u003eHandle-\u003eIO(a ConfigParser)",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eHandle-\u003eIO(m ConfigParser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:readhandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereadfile\u003c/a\u003e\u003c/code\u003e, but uses a string.  You should use \u003ccode\u003e\u003ca\u003ereadfile\u003c/a\u003e\u003c/code\u003e\ninstead of this if you are processing a file, since it can generate\nbetter error messages.\n\u003c/p\u003e\u003cp\u003eErrors would be returned on a syntax error.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "readstring",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e String -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#readstring",
          "type": "function"
        },
        "index": {
          "description": "Like readfile but uses string You should use readfile instead of this if you are processing file since it can generate better error messages Errors would be returned on syntax error",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "readstring",
          "normalized": "ConfigParser-\u003eString-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eString-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:readstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the specified option.  Returns a \u003ccode\u003e\u003ca\u003eNoSection\u003c/a\u003e\u003c/code\u003e error if the\nsection does not exist and a \u003ccode\u003e\u003ca\u003eNoOption\u003c/a\u003e\u003c/code\u003e error if the option does not\nexist.  Otherwise, returns the new \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "remove_option",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#remove_option",
          "type": "function"
        },
        "index": {
          "description": "Removes the specified option Returns NoSection error if the section does not exist and NoOption error if the option does not exist Otherwise returns the new ConfigParser object",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "remove_option",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:remove_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the specified section.  Returns a \u003ccode\u003e\u003ca\u003eNoSection\u003c/a\u003e\u003c/code\u003e error if\nthe section does not exist; otherwise, returns the new \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e\nobject.\n\u003c/p\u003e\u003cp\u003eThis call may not be used to remove the \u003ccode\u003eDEFAULT\u003c/code\u003e section.  Attempting to do\nso will always cause a \u003ccode\u003e\u003ca\u003eNoSection\u003c/a\u003e\u003c/code\u003e error.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "remove_section",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#remove_section",
          "type": "function"
        },
        "index": {
          "description": "Removes the specified section Returns NoSection error if the section does not exist otherwise returns the new ConfigParser object This call may not be used to remove the DEFAULT section Attempting to do so will always cause NoSection error",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "remove_section",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:remove_section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of sections in your configuration file.  Never includes\nthe always-present section \u003ccode\u003eDEFAULT\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "sections",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e [SectionSpec]",
          "source": "src/Data-ConfigFile.html#sections",
          "type": "function"
        },
        "index": {
          "description": "Returns list of sections in your configuration file Never includes the always-present section DEFAULT",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "sections",
          "normalized": "ConfigParser-\u003e[SectionSpec]",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003e[SectionSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:sections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the option to a new value, replacing an existing one if it exists.\n\u003c/p\u003e\u003cp\u003eReturns an error if the section does not exist. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "set",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e String -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#set",
          "type": "function"
        },
        "index": {
          "description": "Sets the option to new value replacing an existing one if it exists Returns an error if the section does not exist",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "set",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eString-\u003ea ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003eString-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the option to a new value, replacing an existing one if it exists.\nIt requires only a showable value as its parameter.\nThis can be used with bool values, as well as numeric ones.\n\u003c/p\u003e\u003cp\u003eReturns an error if the section does not exist. \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "setshow",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e a -\u003e m ConfigParser",
          "source": "src/Data-ConfigFile.html#setshow",
          "type": "function"
        },
        "index": {
          "description": "Sets the option to new value replacing an existing one if it exists It requires only showable value as its parameter This can be used with bool values as well as numeric ones Returns an error if the section does not exist",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "setshow",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea-\u003eb ConfigParser",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea-\u003em ConfigParser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:setshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault (non-interpolating) access function \n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "simpleAccess",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e SectionSpec -\u003e OptionSpec -\u003e m String",
          "source": "src/Data-ConfigFile.html#simpleAccess",
          "type": "function"
        },
        "index": {
          "description": "Default non-interpolating access function",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "simpleAccess",
          "normalized": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003ea String",
          "package": "ConfigFile",
          "partial": "Access",
          "signature": "ConfigParser-\u003eSectionSpec-\u003eOptionSpec-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:simpleAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the \u003ccode\u003e\u003ca\u003eConfigParser\u003c/a\u003e\u003c/code\u003e to a string representation that could be\nlater re-parsed by this module or modified by a human.\n\u003c/p\u003e\u003cp\u003eNote that this does not necessarily re-create a file that was originally\nloaded.  Things may occur in a different order, comments will be removed,\netc.  The conversion makes an effort to make the result human-editable,\nbut it does not make an effort to make the result identical to the original\ninput.\n\u003c/p\u003e\u003cp\u003eThe result is, however, guaranteed to parse the same as the original input.\n\u003c/p\u003e",
          "module": "Data.ConfigFile",
          "name": "to_string",
          "package": "ConfigFile",
          "signature": "ConfigParser -\u003e String",
          "source": "src/Data-ConfigFile.html#to_string",
          "type": "function"
        },
        "index": {
          "description": "Converts the ConfigParser to string representation that could be later re-parsed by this module or modified by human Note that this does not necessarily re-create file that was originally loaded Things may occur in different order comments will be removed etc The conversion makes an effort to make the result human-editable but it does not make an effort to make the result identical to the original input The result is however guaranteed to parse the same as the original input",
          "hierarchy": "Data ConfigFile",
          "module": "Data.ConfigFile",
          "name": "to_string",
          "normalized": "ConfigParser-\u003eString",
          "package": "ConfigFile",
          "signature": "ConfigParser-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFile/docs/Data-ConfigFile.html#v:to_string"
      }
    }
  ]
]