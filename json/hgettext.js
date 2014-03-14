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
        "word": "hgettext"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library extends the Distribution with internationalization support.\n\u003c/p\u003e\u003cp\u003eIt performs two functions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e compiles and installs PO files to the specified directory\n\u003c/li\u003e\u003cli\u003e tells the application where files were installed to make it able\n to bind them to the code\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eEach PO file will be placed to the\n \u003ccode\u003e{datadir}/locale/{loc}/LC_MESSAGES/{domain}.mo\u003c/code\u003e where:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003edatadir\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Usually \u003ccode\u003eprefix/share\u003c/code\u003e but could be different, depends\n  on system.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eloc\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Locale name (language code, two characters). This module\n  supposes, that each PO file has a base name set to the proper\n  locale, e.g. \u003ccode\u003ede.po\u003c/code\u003e is the German translation of the program, so\n  this file will be placed under \u003ccode\u003e{datadir}/locale/de\u003c/code\u003e directory\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003edomain\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Program domain. A unique identifier of single\n  translational unit (program). By default domain will be set to the\n  package name, but its name could be configured in the \u003ccode\u003e.cabal\u003c/code\u003e file.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe module defines following \u003ccode\u003e.cabal\u003c/code\u003e fields:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ex-gettext-domain-name\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Name of the domain. One ofmore\n  alphanumeric characters separated by hyphens or underlines. When\n  not set, package name will be used.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ex-gettext-po-files\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e List of files with translations. Could be\n  used a limited form of wildcards, e.g.: \u003ccode\u003ex-gettext-po-files:\n  po/*.po\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ex-gettext-domain-def\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Name of the macro, in which domain name\n  will be passed to the program. Default value is\n  \u003ccode\u003e__MESSAGE_CATALOG_DOMAIN__\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ex-gettext-msg-cat-def\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Name of the macro, in which path to the\n  message catalog will be passed to the program. Default value is\n  \u003ccode\u003e__MESSAGE_CATALOG_DIR__\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe last two parameters are used to send configuration data to the\n code during its compilation. The most common usage example is:\n\u003c/p\u003e\u003cpre\u003e ...\n prepareI18N = do\n    setLocale LC_ALL (Just \"\") \n    bindTextDomain __MESSAGE_CATALOG_DOMAIN__ (Just __MESSAGE_CATALOG_DIR__)\n    textDomain __MESSAGE_CATALOG_DOMAIN__\n\n main = do\n    prepareI18N\n    ...\n\n ...\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e files, passed in the \u003ccode\u003ex-gettext-po-files\u003c/code\u003e are not\n automatically added to the source distribution, so they should be\n also added to the \u003ccode\u003eextra-source-files\u003c/code\u003e parameter, along with\n translation template file (usually \u003ccode\u003emessage.pot\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e sometimes, when only configuration targets changes, code\n will not recompile, thus you should execute \u003ccode\u003ecabal clean\u003c/code\u003e to\n cleanup the build and restart it again from the configuration. This\n is temporary bug, it will be fixed in next releases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "GetText",
          "package": "hgettext",
          "source": "src/Distribution-Simple-I18N-GetText.html",
          "type": "module"
        },
        "index": {
          "description": "This library extends the Distribution with internationalization support It performs two functions compiles and installs PO files to the specified directory tells the application where files were installed to make it able to bind them to the code Each PO file will be placed to the datadir locale loc LC MESSAGES domain mo where datadir Usually prefix share but could be different depends on system loc Locale name language code two characters This module supposes that each PO file has base name set to the proper locale e.g de.po is the German translation of the program so this file will be placed under datadir locale de directory domain Program domain unique identifier of single translational unit program By default domain will be set to the package name but its name could be configured in the cabal file The module defines following cabal fields x-gettext-domain-name Name of the domain One ofmore alphanumeric characters separated by hyphens or underlines When not set package name will be used x-gettext-po-files List of files with translations Could be used limited form of wildcards e.g x-gettext-po-files po po x-gettext-domain-def Name of the macro in which domain name will be passed to the program Default value is MESSAGE CATALOG DOMAIN x-gettext-msg-cat-def Name of the macro in which path to the message catalog will be passed to the program Default value is MESSAGE CATALOG DIR The last two parameters are used to send configuration data to the code during its compilation The most common usage example is prepareI18N do setLocale LC ALL Just bindTextDomain MESSAGE CATALOG DOMAIN Just MESSAGE CATALOG DIR textDomain MESSAGE CATALOG DOMAIN main do prepareI18N NOTE files passed in the x-gettext-po-files are not automatically added to the source distribution so they should be also added to the extra-source-files parameter along with translation template file usually message.pot WARNING sometimes when only configuration targets changes code will not recompile thus you should execute cabal clean to cleanup the build and restart it again from the configuration This is temporary bug it will be fixed in next releases",
          "hierarchy": "Distribution Simple I18N GetText",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "GetText",
          "package": "hgettext",
          "partial": "Get Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Distribution-Simple-I18N-GetText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault main function, same as\n\u003c/p\u003e\u003cpre\u003e defaultMainWithHooks $ installGetTextHooks simpleUserHooks\n\u003c/pre\u003e",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "gettextDefaultMain",
          "package": "hgettext",
          "signature": "IO ()",
          "source": "src/Distribution-Simple-I18N-GetText.html#gettextDefaultMain",
          "type": "function"
        },
        "index": {
          "description": "Default main function same as defaultMainWithHooks installGetTextHooks simpleUserHooks",
          "hierarchy": "Distribution Simple I18N GetText",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "gettextDefaultMain",
          "normalized": "IO()",
          "package": "hgettext",
          "partial": "Default Main",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Distribution-Simple-I18N-GetText.html#v:gettextDefaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstalls hooks, used by GetText module to install\n PO files to the system. Previous won't be disabled\n\u003c/p\u003e",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "installGetTextHooks",
          "package": "hgettext",
          "signature": "UserHooks-\u003e UserHooks",
          "type": "function"
        },
        "index": {
          "description": "Installs hooks used by GetText module to install PO files to the system Previous won be disabled",
          "hierarchy": "Distribution Simple I18N GetText",
          "module": "Distribution.Simple.I18N.GetText",
          "name": "installGetTextHooks",
          "normalized": "UserHooks-\u003eUserHooks",
          "package": "hgettext",
          "partial": "Get Text Hooks",
          "signature": "UserHooks-\u003eUserHooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Distribution-Simple-I18N-GetText.html#v:installGetTextHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides basic internationalization capabilities\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.I18N.GetText",
          "name": "GetText",
          "package": "hgettext",
          "source": "src/Text-I18N-GetText.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides basic internationalization capabilities",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "GetText",
          "package": "hgettext",
          "partial": "Get Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebindTextDomain sets the base directory of the hierarchy\n containing message catalogs for a given message domain.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e if fails\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "bindTextDomain",
          "package": "hgettext",
          "signature": "String-\u003e Maybe String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "bindTextDomain sets the base directory of the hierarchy containing message catalogs for given message domain Throws IOError if fails",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "bindTextDomain",
          "normalized": "String-\u003eMaybe String-\u003eIO String",
          "package": "hgettext",
          "partial": "Text Domain",
          "signature": "String-\u003eMaybe String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:bindTextDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edGetText wraps GNU dgettext function. It works similar to \u003ccode\u003e\u003ca\u003egetText\u003c/a\u003e\u003c/code\u003e\n but also could take domain name.\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "dGetText",
          "package": "hgettext",
          "signature": "Maybe String-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "dGetText wraps GNU dgettext function It works similar to getText but also could take domain name",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "dGetText",
          "normalized": "Maybe String-\u003eString-\u003eIO String",
          "package": "hgettext",
          "partial": "Get Text",
          "signature": "Maybe String-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:dGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edcGetText wraps GNU dcgettext function. It works similar to \u003ccode\u003e\u003ca\u003edGetText\u003c/a\u003e\u003c/code\u003e\n but also takes category id\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "dcGetText",
          "package": "hgettext",
          "signature": "Maybe String-\u003e Category-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "dcGetText wraps GNU dcgettext function It works similar to dGetText but also takes category id",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "dcGetText",
          "normalized": "Maybe String-\u003eCategory-\u003eString-\u003eIO String",
          "package": "hgettext",
          "partial": "Get Text",
          "signature": "Maybe String-\u003eCategory-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:dcGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edcnGetText wraps GNU dcngettext function. It works similar to \u003ccode\u003e\u003ca\u003ednGetText\u003c/a\u003e\u003c/code\u003e but\n also takes category id\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "dcnGetText",
          "package": "hgettext",
          "signature": "Maybe String-\u003e Category-\u003e String-\u003e String-\u003e Integer-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "dcnGetText wraps GNU dcngettext function It works similar to dnGetText but also takes category id",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "dcnGetText",
          "normalized": "Maybe String-\u003eCategory-\u003eString-\u003eString-\u003eInteger-\u003eIO String",
          "package": "hgettext",
          "partial": "Get Text",
          "signature": "Maybe String-\u003eCategory-\u003eString-\u003eString-\u003eInteger-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:dcnGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ednGetText wraps GNU dngettext function. It works similar to \u003ccode\u003e\u003ca\u003enGetText\u003c/a\u003e\u003c/code\u003e but\n also takes domain name\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "dnGetText",
          "package": "hgettext",
          "signature": "Maybe String-\u003e String-\u003e String-\u003e Integer-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "dnGetText wraps GNU dngettext function It works similar to nGetText but also takes domain name",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "dnGetText",
          "normalized": "Maybe String-\u003eString-\u003eString-\u003eInteger-\u003eIO String",
          "package": "hgettext",
          "partial": "Get Text",
          "signature": "Maybe String-\u003eString-\u003eString-\u003eInteger-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:dnGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetText wraps GNU gettext function. It returns translated string for the\n input messages. If translated string not found the input string will be\n returned.\n\u003c/p\u003e\u003cp\u003eThe most common usage of this function is to declare function __:\n\u003c/p\u003e\u003cpre\u003e __ = unsafePerformIO . getText\n\u003c/pre\u003e\u003cp\u003eand wrap all text strings into this function, e.g.\n\u003c/p\u003e\u003cpre\u003e printHello = putStrLn (__ \"Hello\")\n\u003c/pre\u003e",
          "module": "Text.I18N.GetText",
          "name": "getText",
          "package": "hgettext",
          "signature": "String -\u003e IO String",
          "source": "src/Text-I18N-GetText.html#getText",
          "type": "function"
        },
        "index": {
          "description": "getText wraps GNU gettext function It returns translated string for the input messages If translated string not found the input string will be returned The most common usage of this function is to declare function unsafePerformIO getText and wrap all text strings into this function e.g printHello putStrLn Hello",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "getText",
          "normalized": "String-\u003eIO String",
          "package": "hgettext",
          "partial": "Text",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:getText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enGetText wraps GNU ngettext function. It translates text string in the\n user's native language, by lookilng up the approppiate plural form of the\n message.\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "nGetText",
          "package": "hgettext",
          "signature": "String-\u003e String-\u003e Integer-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "nGetText wraps GNU ngettext function It translates text string in the user native language by lookilng up the approppiate plural form of the message",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "nGetText",
          "normalized": "String-\u003eString-\u003eInteger-\u003eIO String",
          "package": "hgettext",
          "partial": "Get Text",
          "signature": "String-\u003eString-\u003eInteger-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:nGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etextDomain sets domain for future \u003ccode\u003e\u003ca\u003egetText\u003c/a\u003e\u003c/code\u003e call\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e if fails\n\u003c/p\u003e",
          "module": "Text.I18N.GetText",
          "name": "textDomain",
          "package": "hgettext",
          "signature": "Maybe String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "textDomain sets domain for future getText call Throws IOError if fails",
          "hierarchy": "Text I18N GetText",
          "module": "Text.I18N.GetText",
          "name": "textDomain",
          "normalized": "Maybe String-\u003eIO String",
          "package": "hgettext",
          "partial": "Domain",
          "signature": "Maybe String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgettext/docs/Text-I18N-GetText.html#v:textDomain"
      }
    }
  ]
]