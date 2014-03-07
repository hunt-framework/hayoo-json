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
        "word": "shakespeare-i18n"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type-based system for providing translations\n for text strings.\n\u003c/p\u003e\u003cp\u003eIt is similar in purpose to gettext or Java message bundles.\n\u003c/p\u003e\u003cp\u003eThe core idea is to create simple data type where each constructor\n represents a phrase, sentence, paragraph, etc. For example:\n\u003c/p\u003e\u003cpre\u003e data AppMessages = Hello | Goodbye\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRenderMessage\u003c/a\u003e\u003c/code\u003e class is used to retrieve the appropriate\n translation for a message value:\n\u003c/p\u003e\u003cpre\u003e class RenderMessage master message where\n   renderMessage :: master  -- ^ type that specifies which set of translations to use\n                 -\u003e [Lang]  -- ^ acceptable languages in descending order of preference\n                 -\u003e message -- ^ message to translate\n                 -\u003e Text\n\u003c/pre\u003e\u003cp\u003eDefining the translation type and providing the \u003ccode\u003e\u003ca\u003eRenderMessage\u003c/a\u003e\u003c/code\u003e\n instance in Haskell is not very translator friendly. Instead,\n translations are generally provided in external translations\n files. Then the \u003ccode\u003e\u003ca\u003emkMessage\u003c/a\u003e\u003c/code\u003e Template Haskell function is used to\n read the external translation files and automatically create the\n translation type and the \u003ccode\u003eRenderMessage\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eA full description of using this module to create translations for \u003ccode\u003eHamlet\u003c/code\u003e can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.yesodweb.com/book/internationalization\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eA full description of using the module to create translations for \u003ccode\u003eHSP\u003c/code\u003e can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://happstack.com/docs/crashcourse/Templates.html#hsp-i18n\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eYou can also adapt those instructions for use with other systems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "I18N",
          "package": "shakespeare-i18n",
          "source": "src/Text-Shakespeare-I18N.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides type-based system for providing translations for text strings It is similar in purpose to gettext or Java message bundles The core idea is to create simple data type where each constructor represents phrase sentence paragraph etc For example data AppMessages Hello Goodbye The RenderMessage class is used to retrieve the appropriate translation for message value class RenderMessage master message where renderMessage master type that specifies which set of translations to use Lang acceptable languages in descending order of preference message message to translate Text Defining the translation type and providing the RenderMessage instance in Haskell is not very translator friendly Instead translations are generally provided in external translations files Then the mkMessage Template Haskell function is used to read the external translation files and automatically create the translation type and the RenderMessage instance full description of using this module to create translations for Hamlet can be found here http www.yesodweb.com book internationalization full description of using the module to create translations for HSP can be found here http happstack.com docs crashcourse Templates.html hsp-i18n You can also adapt those instructions for use with other systems",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "I18N",
          "package": "shakespeare-i18n",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean RFC1766 / ISO 639-1 language code (eg, \u003ccode\u003efr\u003c/code\u003e, \u003ccode\u003een-GB\u003c/code\u003e, etc).\n\u003c/p\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "Lang",
          "package": "shakespeare-i18n",
          "source": "src/Text-Shakespeare-I18N.html#Lang",
          "type": "type"
        },
        "index": {
          "description": "an RFC1766 ISO language code eg fr en-GB etc",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "Lang",
          "package": "shakespeare-i18n",
          "partial": "Lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#t:Lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eRenderMessage\u003c/a\u003e\u003c/code\u003e is used to provide translations for a message types\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003emaster\u003c/code\u003e argument exists so that it is possible to provide more\n than one set of translations for a \u003ccode\u003emessage\u003c/code\u003e type. This is useful\n if a library provides a default set of translations, but the user\n of the library wants to provide a different set of translations.\n\u003c/p\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "RenderMessage",
          "package": "shakespeare-i18n",
          "source": "src/Text-Shakespeare-I18N.html#RenderMessage",
          "type": "class"
        },
        "index": {
          "description": "the RenderMessage is used to provide translations for message types The master argument exists so that it is possible to provide more than one set of translations for message type This is useful if library provides default set of translations but the user of the library wants to provide different set of translations",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "RenderMessage",
          "package": "shakespeare-i18n",
          "partial": "Render Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#t:RenderMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Shakespeare.I18N",
          "name": "SomeMessage",
          "package": "shakespeare-i18n",
          "source": "src/Text-Shakespeare-I18N.html#SomeMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "SomeMessage",
          "package": "shakespeare-i18n",
          "partial": "Some Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#t:SomeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToMessage\u003c/a\u003e\u003c/code\u003e is used to convert the value inside #{ } to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe primary purpose of this class is to allow the value in #{ } to\n be a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e rather than forcing it to always be \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "ToMessage",
          "package": "shakespeare-i18n",
          "source": "src/Text-Shakespeare-I18N.html#ToMessage",
          "type": "class"
        },
        "index": {
          "description": "ToMessage is used to convert the value inside to Text The primary purpose of this class is to allow the value in to be String or Text rather than forcing it to always be Text",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "ToMessage",
          "package": "shakespeare-i18n",
          "partial": "To Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#t:ToMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Shakespeare.I18N",
          "name": "SomeMessage",
          "package": "shakespeare-i18n",
          "signature": "SomeMessage msg",
          "source": "src/Text-Shakespeare-I18N.html#SomeMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "SomeMessage",
          "package": "shakespeare-i18n",
          "partial": "Some Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:SomeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate translations from translation files\n\u003c/p\u003e\u003cp\u003eThis function will:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e look in the supplied subdirectory for files ending in \u003ccode\u003e.msg\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e generate a type based on the constructors found\n\u003c/li\u003e\u003cli\u003e create a \u003ccode\u003e\u003ca\u003eRenderMessage\u003c/a\u003e\u003c/code\u003e instance\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessage",
          "package": "shakespeare-i18n",
          "signature": "String-\u003e FilePath-\u003e Lang-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "generate translations from translation files This function will look in the supplied subdirectory for files ending in msg generate type based on the constructors found create RenderMessage instance",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessage",
          "normalized": "String-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "package": "shakespeare-i18n",
          "partial": "Message",
          "signature": "String-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:mkMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate \u003ccode\u003e\u003ca\u003eRenderMessage\u003c/a\u003e\u003c/code\u003e instance for an existing data-type\n\u003c/p\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessageFor",
          "package": "shakespeare-i18n",
          "signature": "String-\u003e String-\u003e FilePath-\u003e Lang-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "create RenderMessage instance for an existing data-type",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessageFor",
          "normalized": "String-\u003eString-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "package": "shakespeare-i18n",
          "partial": "Message For",
          "signature": "String-\u003eString-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:mkMessageFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an additional set of translations for a type created by \u003ccode\u003e\u003ca\u003emkMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessageVariant",
          "package": "shakespeare-i18n",
          "signature": "String-\u003e String-\u003e FilePath-\u003e Lang-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "create an additional set of translations for type created by mkMessage",
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "mkMessageVariant",
          "normalized": "String-\u003eString-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "package": "shakespeare-i18n",
          "partial": "Message Variant",
          "signature": "String-\u003eString-\u003eFilePath-\u003eLang-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:mkMessageVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Shakespeare.I18N",
          "name": "renderMessage",
          "package": "shakespeare-i18n",
          "signature": "renderMessage",
          "source": "src/Text-Shakespeare-I18N.html#renderMessage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "renderMessage",
          "package": "shakespeare-i18n",
          "partial": "Message",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:renderMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Shakespeare.I18N",
          "name": "toMessage",
          "package": "shakespeare-i18n",
          "signature": "a -\u003e Text",
          "source": "src/Text-Shakespeare-I18N.html#toMessage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Shakespeare I18N",
          "module": "Text.Shakespeare.I18N",
          "name": "toMessage",
          "normalized": "a-\u003eText",
          "package": "shakespeare-i18n",
          "partial": "Message",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-i18n/docs/Text-Shakespeare-I18N.html#v:toMessage"
      }
    }
  ]
]