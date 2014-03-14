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
        "word": "ini"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClean configuration files in the INI format.\n\u003c/p\u003e\u003cp\u003eFormat rules and recommendations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e: \u003c/code\u003e syntax is space-sensitive.\n\u003c/li\u003e\u003cli\u003e Keys are case-sensitive.\n\u003c/li\u003e\u003cli\u003e Lower-case is recommended.\n\u003c/li\u003e\u003cli\u003e Values can be empty.\n\u003c/li\u003e\u003cli\u003e Keys cannot key separators, section delimiters, or comment markers.\n\u003c/li\u003e\u003cli\u003e Comments must start at the beginning of the line and start with \u003ccode\u003e;\u003c/code\u003e or \u003ccode\u003e#\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn example configuration file:\n\u003c/p\u003e\u003cpre\u003e\n # Some comment.\n [SERVER]\n port=6667\n hostname=localhost\n ; another comment here\n [AUTH]\n user: hello\n pass: world\n salt:\n\u003c/pre\u003e\u003cp\u003eParsing example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseIni \"[SERVER]\\nport: 6667\\nhostname: localhost\"\n\u003c/code\u003e\u003c/strong\u003eRight (Ini {unIni = fromList [(\"SERVER\",fromList [(\"hostname\",\"localhost\"),(\"port\",\"6667\")])]})\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "source": "src/Data-Ini.html",
          "type": "module"
        },
        "index": {
          "description": "Clean configuration files in the INI format Format rules and recommendations The syntax is space-sensitive Keys are case-sensitive Lower-case is recommended Values can be empty Keys cannot key separators section delimiters or comment markers Comments must start at the beginning of the line and start with or An example configuration file Some comment SERVER port hostname localhost another comment here AUTH user hello pass world salt Parsing example parseIni SERVER nport nhostname localhost Right Ini unIni fromList SERVER fromList hostname localhost port",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "partial": "Ini",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn INI configuration.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "source": "src/Data-Ini.html#Ini",
          "type": "newtype"
        },
        "index": {
          "description": "An INI configuration",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "partial": "Ini",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#t:Ini"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "signature": "Ini",
          "source": "src/Data-Ini.html#Ini",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "Ini",
          "package": "ini",
          "partial": "Ini",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:Ini"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for an INI.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "iniParser",
          "package": "ini",
          "signature": "Parser Ini",
          "source": "src/Data-Ini.html#iniParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for an INI",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "iniParser",
          "package": "ini",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:iniParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key-value pair. Either \u003ccode\u003efoo: bar\u003c/code\u003e or \u003ccode\u003efoo=bar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "keyValueParser",
          "package": "ini",
          "signature": "Parser (Text, Text)",
          "source": "src/Data-Ini.html#keyValueParser",
          "type": "function"
        },
        "index": {
          "description": "key-value pair Either foo bar or foo bar",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "keyValueParser",
          "normalized": "Parser(Text,Text)",
          "package": "ini",
          "partial": "Value Parser",
          "signature": "Parser(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:keyValueParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup values in the config.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "lookupValue",
          "package": "ini",
          "signature": "Text -\u003e Text -\u003e Ini -\u003e Either String Text",
          "source": "src/Data-Ini.html#lookupValue",
          "type": "function"
        },
        "index": {
          "description": "Lookup values in the config",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "lookupValue",
          "normalized": "Text-\u003eText-\u003eIni-\u003eEither String Text",
          "package": "ini",
          "partial": "Value",
          "signature": "Text-\u003eText-\u003eIni-\u003eEither String Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:lookupValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an INI config.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "parseIni",
          "package": "ini",
          "signature": "Text -\u003e Either String Ini",
          "source": "src/Data-Ini.html#parseIni",
          "type": "function"
        },
        "index": {
          "description": "Parse an INI config",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "parseIni",
          "normalized": "Text-\u003eEither String Ini",
          "package": "ini",
          "partial": "Ini",
          "signature": "Text-\u003eEither String Ini",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:parseIni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an INI config.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "printIni",
          "package": "ini",
          "signature": "Ini -\u003e Text",
          "source": "src/Data-Ini.html#printIni",
          "type": "function"
        },
        "index": {
          "description": "Print an INI config",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "printIni",
          "normalized": "Ini-\u003eText",
          "package": "ini",
          "partial": "Ini",
          "signature": "Ini-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:printIni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an INI file.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "readIniFile",
          "package": "ini",
          "signature": "FilePath -\u003e IO (Either String Ini)",
          "source": "src/Data-Ini.html#readIniFile",
          "type": "function"
        },
        "index": {
          "description": "Parse an INI file",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "readIniFile",
          "normalized": "FilePath-\u003eIO(Either String Ini)",
          "package": "ini",
          "partial": "Ini File",
          "signature": "FilePath-\u003eIO(Either String Ini)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:readIniFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value using a reader from \u003ca\u003eData.Text.Read\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "readValue",
          "package": "ini",
          "signature": "Text -\u003e Text -\u003e (Text -\u003e Either String (a, Text)) -\u003e Ini -\u003e Either String a",
          "source": "src/Data-Ini.html#readValue",
          "type": "function"
        },
        "index": {
          "description": "Read value using reader from Data.Text.Read",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "readValue",
          "normalized": "Text-\u003eText-\u003e(Text-\u003eEither String(a,Text))-\u003eIni-\u003eEither String a",
          "package": "ini",
          "partial": "Value",
          "signature": "Text-\u003eText-\u003e(Text-\u003eEither String(a,Text))-\u003eIni-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:readValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA section. Format: \u003ccode\u003e[foo]\u003c/code\u003e. Conventionally, \u003ccode\u003e[FOO]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "sectionParser",
          "package": "ini",
          "signature": "Parser (Text, HashMap Text Text)",
          "source": "src/Data-Ini.html#sectionParser",
          "type": "function"
        },
        "index": {
          "description": "section Format foo Conventionally FOO",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "sectionParser",
          "normalized": "Parser(Text,HashMap Text Text)",
          "package": "ini",
          "partial": "Parser",
          "signature": "Parser(Text,HashMap Text Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:sectionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ini",
          "name": "unIni",
          "package": "ini",
          "signature": "HashMap Text (HashMap Text Text)",
          "source": "src/Data-Ini.html#Ini",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "unIni",
          "package": "ini",
          "partial": "Ini",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:unIni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the INI config to a file.\n\u003c/p\u003e",
          "module": "Data.Ini",
          "name": "writeIniFile",
          "package": "ini",
          "signature": "FilePath -\u003e Ini -\u003e IO ()",
          "source": "src/Data-Ini.html#writeIniFile",
          "type": "function"
        },
        "index": {
          "description": "Print the INI config to file",
          "hierarchy": "Data Ini",
          "module": "Data.Ini",
          "name": "writeIniFile",
          "normalized": "FilePath-\u003eIni-\u003eIO()",
          "package": "ini",
          "partial": "Ini File",
          "signature": "FilePath-\u003eIni-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ini/docs/Data-Ini.html#v:writeIniFile"
      }
    }
  ]
]