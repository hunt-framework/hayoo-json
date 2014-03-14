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
        "word": "i18n"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternationalization support for Haskell. This module contains\n  PO parser. PO files are assumed to be in UTF-8 encoding.\n\u003c/p\u003e\u003cp\u003ePlural forms are not yet implemented.\n\u003c/p\u003e\u003cp\u003emodules Text.I18n, Control.Monad.Trans, and function putStrLn and putStr\n  from System.IO.UTF8 are exported for convenience.\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding (putStr,putStrLn)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.I18n.Po",
          "name": "Po",
          "package": "i18n",
          "source": "src/Text-I18n-Po.html",
          "type": "module"
        },
        "index": {
          "description": "Internationalization support for Haskell This module contains PO parser PO files are assumed to be in UTF-8 encoding Plural forms are not yet implemented modules Text.I18n Control.Monad.Trans and function putStrLn and putStr from System.IO.UTF8 are exported for convenience import Prelude hiding putStr putStrLn",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Po",
          "package": "i18n",
          "partial": "Po",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Po",
          "name": "Context",
          "package": "i18n",
          "source": "src/Text-I18n.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Context",
          "package": "i18n",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Internationalization monad built using monad transformers.\n\u003c/p\u003e",
          "module": "Text.I18n.Po",
          "name": "I18n",
          "package": "i18n",
          "source": "src/Text-I18n.html#I18n",
          "type": "type"
        },
        "index": {
          "description": "The Internationalization monad built using monad transformers",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "I18n",
          "package": "i18n",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:I18n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Localization structure.\n\u003c/p\u003e",
          "module": "Text.I18n.Po",
          "name": "L10n",
          "package": "i18n",
          "source": "src/Text-I18n.html#L10n",
          "type": "type"
        },
        "index": {
          "description": "The Localization structure",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "L10n",
          "package": "i18n",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:L10n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Po",
          "name": "Locale",
          "package": "i18n",
          "source": "src/Text-I18n.html#Locale",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Locale",
          "package": "i18n",
          "partial": "Locale",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:Locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Po",
          "name": "Msgid",
          "package": "i18n",
          "source": "src/Text-I18n.html#Msgid",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Msgid",
          "package": "i18n",
          "partial": "Msgid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:Msgid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Po",
          "name": "Msgstr",
          "package": "i18n",
          "source": "src/Text-I18n.html#Msgstr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Msgstr",
          "package": "i18n",
          "partial": "Msgstr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#t:Msgstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "Locale",
          "package": "i18n",
          "signature": "Locale String",
          "source": "src/Text-I18n.html#Locale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:Locale\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:Locale\"]"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Locale",
          "package": "i18n",
          "partial": "Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:Locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "Msgid",
          "package": "i18n",
          "signature": "Msgid String",
          "source": "src/Text-I18n.html#Msgid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:Msgid\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:Msgid\"]"
        },
        "index": {
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "Msgid",
          "package": "i18n",
          "partial": "Msgid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:Msgid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds \u003ccode\u003e\u003ca\u003eL10n\u003c/a\u003e\u003c/code\u003e structure by parsing \u003cem\u003e .po \u003c/em\u003e files contained in a given\n directory. \u003ccode\u003e\u003ca\u003eL10n\u003c/a\u003e\u003c/code\u003e structure is to be passed to \u003ccode\u003e\u003ca\u003elocalize\u003c/a\u003e\u003c/code\u003e function.\n \u003ccode\u003e\u003ca\u003eL10n\u003c/a\u003e\u003c/code\u003e structure is used internaly by the \u003ccode\u003e\u003ca\u003eI18n\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.I18n.Po",
          "name": "getL10n",
          "package": "i18n",
          "signature": "FilePath-\u003e IO (L10n, [ParseError])",
          "type": "function"
        },
        "index": {
          "description": "Builds L10n structure by parsing po files contained in given directory L10n structure is to be passed to localize function L10n structure is used internaly by the I18n monad",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "getL10n",
          "normalized": "FilePath-\u003eIO(L a,[ParseError])",
          "package": "i18n",
          "signature": "FilePath-\u003eIO(L n,[ParseError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:getL10n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe heart of I18n monad. Based on \u003ccode\u003eText.Printf.printf\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e example :: String -\u003e I18n String\n example name = do\n     hello \u003c- gettext \"Hello, %s!\"\n     return (hello name)\n\u003c/pre\u003e",
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "gettext",
          "package": "i18n",
          "signature": "String -\u003e I18n a",
          "source": "src/Text-I18n.html#gettext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:gettext\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:gettext\"]"
        },
        "index": {
          "description": "The heart of I18n monad Based on Text.Printf.printf example String I18n String example name do hello gettext Hello return hello name",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "gettext",
          "normalized": "String-\u003eI a b",
          "package": "i18n",
          "signature": "String-\u003eI n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:gettext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top level localization function.\n\u003c/p\u003e\u003cpre\u003e import Text.I18n.Po\n import Prelude hiding (putStr,putStrLn)\n\n main = do\n     (l10n,errors) \u003c- getL10n \"dir/to/po\" -- directory containing PO files\n     putStrLn $ localize l10n (Locale \"en\") (example \"Joe\")\n\u003c/pre\u003e",
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "localize",
          "package": "i18n",
          "signature": "L10n-\u003e Locale-\u003e I18n a-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:localize\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:localize\"]"
        },
        "index": {
          "description": "The top level localization function import Text.I18n.Po import Prelude hiding putStr putStrLn main do l10n errors getL10n dir to po directory containing PO files putStrLn localize l10n Locale en example Joe",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "localize",
          "normalized": "L a-\u003eLocale-\u003eI a b-\u003eb",
          "package": "i18n",
          "signature": "L n-\u003eLocale-\u003eI n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:localize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a UTF8 string to the standard output device\n\u003c/p\u003e",
          "module": "Text.I18n.Po",
          "name": "putStr",
          "package": "i18n",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write UTF8 string to the standard output device",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "i18n",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Text.I18n.Po",
          "name": "putStrLn",
          "package": "i18n",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "i18n",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a local \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e for an internationalized expression.\n    If there is no translation, then no context version is tried.\n\u003c/p\u003e\u003cpre\u003e example2 :: String -\u003e I18n String\n example2 = withContext (Just \"test\") . example\n\u003c/pre\u003e",
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "withContext",
          "package": "i18n",
          "signature": "Maybe Context-\u003e I18n a-\u003e I18n a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:withContext\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:withContext\"]"
        },
        "index": {
          "description": "Sets local Context for an internationalized expression If there is no translation then no context version is tried example2 String I18n String example2 withContext Just test example",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "withContext",
          "normalized": "Maybe Context-\u003eI a b-\u003eI a b",
          "package": "i18n",
          "partial": "Context",
          "signature": "Maybe Context-\u003eI n a-\u003eI n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:withContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a local \u003ccode\u003e\u003ca\u003eLocale\u003c/a\u003e\u003c/code\u003e for an internationalized expression.\n\u003c/p\u003e\u003cpre\u003e example3 :: String -\u003e I18n String\n example3 = withLocale (Locale \"ru\") . example2\n\u003c/pre\u003e",
          "module": "[\"Text.I18n.Po\",\"Text.I18n\"]",
          "name": "withLocale",
          "package": "i18n",
          "signature": "Locale-\u003e I18n a-\u003e I18n a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:withLocale\",\"http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#v:withLocale\"]"
        },
        "index": {
          "description": "Sets local Locale for an internationalized expression example3 String I18n String example3 withLocale Locale ru example2",
          "hierarchy": "Text I18n Po",
          "module": "Text.I18n.Po",
          "name": "withLocale",
          "normalized": "Locale-\u003eI a b-\u003eI a b",
          "package": "i18n",
          "partial": "Locale",
          "signature": "Locale-\u003eI n a-\u003eI n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Po.html#v:withLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA slightly modified version of Text.Printf module. (with permission)\n\u003c/p\u003e\u003cp\u003eThis module is internal to Text.I18n.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.I18n.Printf",
          "name": "Printf",
          "package": "i18n",
          "source": "src/Text-I18n-Printf.html",
          "type": "module"
        },
        "index": {
          "description": "slightly modified version of Text.Printf module with permission This module is internal to Text.I18n",
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "Printf",
          "package": "i18n",
          "partial": "Printf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "HPrintfType",
          "package": "i18n",
          "source": "src/Text-I18n-Printf.html#HPrintfType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "HPrintfType",
          "package": "i18n",
          "partial": "HPrintf Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#t:HPrintfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "IsChar",
          "package": "i18n",
          "source": "src/Text-I18n-Printf.html#IsChar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "IsChar",
          "package": "i18n",
          "partial": "Is Char",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#t:IsChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "PrintfArg",
          "package": "i18n",
          "source": "src/Text-I18n-Printf.html#PrintfArg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "PrintfArg",
          "package": "i18n",
          "partial": "Printf Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#t:PrintfArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "PrintfType",
          "package": "i18n",
          "source": "src/Text-I18n-Printf.html#PrintfType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "PrintfType",
          "package": "i18n",
          "partial": "Printf Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#t:PrintfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "hPrintf",
          "package": "i18n",
          "signature": "Handle -\u003e String -\u003e r",
          "source": "src/Text-I18n-Printf.html#hPrintf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "hPrintf",
          "normalized": "Handle-\u003eString-\u003ea",
          "package": "i18n",
          "partial": "Printf",
          "signature": "Handle-\u003eString-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#v:hPrintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "printf",
          "package": "i18n",
          "signature": "String -\u003e r",
          "source": "src/Text-I18n-Printf.html#printf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "printf",
          "normalized": "String-\u003ea",
          "package": "i18n",
          "signature": "String-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#v:printf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "spr",
          "package": "i18n",
          "signature": "String -\u003e [UPrintf] -\u003e t",
          "source": "src/Text-I18n-Printf.html#spr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "spr",
          "normalized": "String-\u003e[UPrintf]-\u003ea",
          "package": "i18n",
          "signature": "String-\u003e[UPrintf]-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#v:spr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n.Printf",
          "name": "uprintf",
          "package": "i18n",
          "signature": "String -\u003e [UPrintf] -\u003e String",
          "source": "src/Text-I18n-Printf.html#uprintf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text I18n Printf",
          "module": "Text.I18n.Printf",
          "name": "uprintf",
          "normalized": "String-\u003e[UPrintf]-\u003eString",
          "package": "i18n",
          "signature": "String-\u003e[UPrintf]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n-Printf.html#v:uprintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternationalization support for Haskell.\n  Use Text.I18n.Po module.\n\u003c/p\u003e\u003cp\u003ePlural forms are not yet implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.I18n",
          "name": "I18n",
          "package": "i18n",
          "source": "src/Text-I18n.html",
          "type": "module"
        },
        "index": {
          "description": "Internationalization support for Haskell Use Text.I18n.Po module Plural forms are not yet implemented",
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "I18n",
          "package": "i18n",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n",
          "name": "Context",
          "package": "i18n",
          "source": "src/Text-I18n.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "Context",
          "package": "i18n",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Internationalization monad built using monad transformers.\n\u003c/p\u003e",
          "module": "Text.I18n",
          "name": "I18n",
          "package": "i18n",
          "source": "src/Text-I18n.html#I18n",
          "type": "type"
        },
        "index": {
          "description": "The Internationalization monad built using monad transformers",
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "I18n",
          "package": "i18n",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:I18n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Localization structure.\n\u003c/p\u003e",
          "module": "Text.I18n",
          "name": "L10n",
          "package": "i18n",
          "source": "src/Text-I18n.html#L10n",
          "type": "type"
        },
        "index": {
          "description": "The Localization structure",
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "L10n",
          "package": "i18n",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:L10n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n",
          "name": "Locale",
          "package": "i18n",
          "source": "src/Text-I18n.html#Locale",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "Locale",
          "package": "i18n",
          "partial": "Locale",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:Locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n",
          "name": "Msgid",
          "package": "i18n",
          "source": "src/Text-I18n.html#Msgid",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "Msgid",
          "package": "i18n",
          "partial": "Msgid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:Msgid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.I18n",
          "name": "Msgstr",
          "package": "i18n",
          "source": "src/Text-I18n.html#Msgstr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text I18n",
          "module": "Text.I18n",
          "name": "Msgstr",
          "package": "i18n",
          "partial": "Msgstr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/i18n/docs/Text-I18n.html#t:Msgstr"
      }
    }
  ]
]