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
        "word": "yesod-fay"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to be shared between server and client.\n\u003c/p\u003e\u003cp\u003eThis module must be valid for both GHC and Fay.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Fay.Yesod",
          "name": "Yesod",
          "package": "yesod-fay",
          "source": "src/Language-Fay-Yesod.html",
          "type": "module"
        },
        "index": {
          "description": "Module to be shared between server and client This module must be valid for both GHC and Fay",
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "Yesod",
          "package": "yesod-fay",
          "partial": "Yesod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proxy type for specifying what type a command should return. The final\n field for each data constructor in a command datatype should be \u003ccode\u003eReturns\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Fay.Yesod",
          "name": "Returns",
          "package": "yesod-fay",
          "source": "src/Language-Fay-Yesod.html#Returns",
          "type": "data"
        },
        "index": {
          "description": "proxy type for specifying what type command should return The final field for each data constructor in command datatype should be Returns",
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "Returns",
          "package": "yesod-fay",
          "partial": "Returns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#t:Returns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Fay.Yesod",
          "name": "Text",
          "package": "yesod-fay",
          "source": "src/Language-Fay-Yesod.html#Text",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "Text",
          "package": "yesod-fay",
          "partial": "Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Fay.Yesod",
          "name": "Returns",
          "package": "yesod-fay",
          "signature": "Returns",
          "source": "src/Language-Fay-Yesod.html#Returns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "Returns",
          "package": "yesod-fay",
          "partial": "Returns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:Returns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the AJAX command.\n\u003c/p\u003e",
          "module": "Language.Fay.Yesod",
          "name": "ajaxCommand",
          "package": "yesod-fay",
          "signature": "Automatic command-\u003e (Automatic a -\u003e Fay ())-\u003e Fay ()",
          "type": "function"
        },
        "index": {
          "description": "Run the AJAX command",
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "ajaxCommand",
          "normalized": "Automatic a-\u003e(Automatic b-\u003eFay())-\u003eFay()",
          "package": "yesod-fay",
          "partial": "Command",
          "signature": "Automatic command-\u003e(Automatic a-\u003eFay())-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:ajaxCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the AJAX command, handling errors as well\n\u003c/p\u003e",
          "module": "Language.Fay.Yesod",
          "name": "ajaxCommandWithErrorHandling",
          "package": "yesod-fay",
          "signature": "Automatic command-\u003e (Automatic a -\u003e Fay ())-\u003e Fay ()-\u003e Fay ()",
          "type": "function"
        },
        "index": {
          "description": "Run the AJAX command handling errors as well",
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "ajaxCommandWithErrorHandling",
          "normalized": "Automatic a-\u003e(Automatic b-\u003eFay())-\u003eFay()-\u003eFay()",
          "package": "yesod-fay",
          "partial": "Command With Error Handling",
          "signature": "Automatic command-\u003e(Automatic a-\u003eFay())-\u003eFay()-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:ajaxCommandWithErrorHandling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a command.\n\u003c/p\u003e",
          "module": "Language.Fay.Yesod",
          "name": "call",
          "package": "yesod-fay",
          "signature": "(Returns a -\u003e command)-\u003e (a -\u003e Fay ())-\u003e Fay ()",
          "type": "function"
        },
        "index": {
          "description": "Call command",
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "call",
          "normalized": "(Returns a-\u003eb)-\u003e(a-\u003eFay())-\u003eFay()",
          "package": "yesod-fay",
          "signature": "(Returns a-\u003ecommand)-\u003e(a-\u003eFay())-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Fay.Yesod",
          "name": "callWithErrorHandling",
          "package": "yesod-fay",
          "signature": "(Returns a -\u003e command)-\u003e (a -\u003e Fay ())-\u003e Fay ()-\u003e Fay ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "callWithErrorHandling",
          "normalized": "(Returns a-\u003eb)-\u003e(a-\u003eFay())-\u003eFay()-\u003eFay()",
          "package": "yesod-fay",
          "partial": "With Error Handling",
          "signature": "(Returns a-\u003ecommand)-\u003e(a-\u003eFay())-\u003eFay()-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:callWithErrorHandling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Fay.Yesod",
          "name": "fromString",
          "package": "yesod-fay",
          "signature": "String -\u003e Text",
          "source": "src/Language-Fay-Yesod.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "fromString",
          "normalized": "String-\u003eText",
          "package": "yesod-fay",
          "partial": "String",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Fay.Yesod",
          "name": "toString",
          "package": "yesod-fay",
          "signature": "Text -\u003e String",
          "source": "src/Language-Fay-Yesod.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Fay Yesod",
          "module": "Language.Fay.Yesod",
          "name": "toString",
          "normalized": "Text-\u003eString",
          "package": "yesod-fay",
          "partial": "String",
          "signature": "Text-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Language-Fay-Yesod.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for using Fay from a Yesod application.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be used from your Yesod application, not from\n your Fay programs.\n\u003c/p\u003e\u003cp\u003eWe assume a specific file structure, namely that there is a \u003ccode\u003efay\u003c/code\u003e folder\n containing client-side code, and \u003ccode\u003efay-shared\u003c/code\u003e containing code to be used by\n both the client and server.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eLanguage.Fay.Yesod\u003c/code\u003e module (part of this package) is\n required by both client and server code. However, since Fay does not\n currently have package management support, we use a bit of a hack: the TH\n calls in this package will automatically create the necessary\n \u003ccode\u003efay/Language/Fay/Yesod.hs\u003c/code\u003e file.  Ultimately, we will use a more elegant\n solution.\n\u003c/p\u003e\u003cp\u003eIn the future, if this package proves popular enough, Fay support will\n likely be built into the scaffolding. In the meantime, you must manually\n integrate it. In order to take advantage of this module, you should modify\n your Yesod application as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Modify your \u003ccode\u003ecabal\u003c/code\u003e file to include the \u003ccode\u003efay-shared\u003c/code\u003e folder when\n   compiling. This can be done by adding a \u003ccode\u003ehs-source-dirs: ., fay-shared\u003c/code\u003e line\n   to your library section.\n\u003c/li\u003e\u003cli\u003e Create the module \u003ccode\u003eSharedTypes\u003c/code\u003e in \u003ccode\u003efay-shared\u003c/code\u003e and create a \u003ccode\u003eCommand\u003c/code\u003e\n   datatype. For an example of what this file should look like, see\n   \u003ca\u003ehttps://github.com/snoyberg/yesod-fay/blob/master/sample/fay-shared/SharedTypes.hs\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Add the function \u003ccode\u003efayFile\u003c/code\u003e to your \u003ccode\u003eImport\u003c/code\u003e module. See\n   \u003ca\u003ehttps://github.com/snoyberg/yesod-fay/blob/master/sample/Import.hs\u003c/a\u003e for an\n   example.\n\u003c/li\u003e\u003cli\u003e Add a new route at for the Fay subsite. Generally, it will look like\n   \u003ccode\u003e/fay-command FaySiteR FaySite getFaySite\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Import the \u003ccode\u003eSharedTypes\u003c/code\u003e and \u003ccode\u003eYesod.Fay\u003c/code\u003e modules into your \u003ccode\u003eFoundation.hs\u003c/code\u003e\n   module. Add an instance of \u003ccode\u003eYesodFay\u003c/code\u003e for your application. You should set\n   the \u003ccode\u003eYesodFayCommand\u003c/code\u003e associated type to the \u003ccode\u003eCommand\u003c/code\u003e datatype you created.\n   (You may also need to add a \u003ccode\u003eYesodJquery\u003c/code\u003e instance.) Note that this instance\n   must appear after your \u003ccode\u003eparseRoutes\u003c/code\u003e. Set the method \u003ccode\u003efayRoute\u003c/code\u003e to\n   \u003ccode\u003eFaySiteR\u003c/code\u003e (or whatever you called the subsite route), and implement\n   \u003ccode\u003eyesodFayCommand\u003c/code\u003e. It will generally look something like \u003ccode\u003eyesodFayCommand\n   render command = case command of { ... }\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e In order to use Fay, add \u003ccode\u003e$(fayFile \"MyModule\")\u003c/code\u003e to a widget, and then\n   write the corresponding \u003ccode\u003efay/MyModule.hs\u003c/code\u003e file. For an example, see\n   \u003ca\u003ehttps://github.com/snoyberg/yesod-fay/blob/master/sample/fay/Home.hs\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Yesod.Fay",
          "name": "Fay",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for using Fay from Yesod application This module is intended to be used from your Yesod application not from your Fay programs We assume specific file structure namely that there is fay folder containing client-side code and fay-shared containing code to be used by both the client and server The Language.Fay.Yesod module part of this package is required by both client and server code However since Fay does not currently have package management support we use bit of hack the TH calls in this package will automatically create the necessary fay Language Fay Yesod.hs file Ultimately we will use more elegant solution In the future if this package proves popular enough Fay support will likely be built into the scaffolding In the meantime you must manually integrate it In order to take advantage of this module you should modify your Yesod application as follows Modify your cabal file to include the fay-shared folder when compiling This can be done by adding hs-source-dirs fay-shared line to your library section Create the module SharedTypes in fay-shared and create Command datatype For an example of what this file should look like see https github.com snoyberg yesod-fay blob master sample fay-shared SharedTypes.hs Add the function fayFile to your Import module See https github.com snoyberg yesod-fay blob master sample Import.hs for an example Add new route at for the Fay subsite Generally it will look like fay-command FaySiteR FaySite getFaySite Import the SharedTypes and Yesod.Fay modules into your Foundation.hs module Add an instance of YesodFay for your application You should set the YesodFayCommand associated type to the Command datatype you created You may also need to add YesodJquery instance Note that this instance must appear after your parseRoutes Set the method fayRoute to FaySiteR or whatever you called the subsite route and implement yesodFayCommand It will generally look something like yesodFayCommand render command case command of In order to use Fay add fayFile MyModule to widget and then write the corresponding fay MyModule.hs file For an example see https github.com snoyberg yesod-fay blob master sample fay Home.hs",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "Fay",
          "package": "yesod-fay",
          "partial": "Fay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function provided by the developer describing how to answer individual\n commands from client-side code.\n\u003c/p\u003e\u003cp\u003eDue to restrictions of the type system in Fay, we use a relatively simple\n approach for encoding the return type. In order to specify this, an extra\n parameter- \u003ccode\u003eReturns\u003c/code\u003e- is passed around, with a phantom type variable stating\n the expected return type.\n\u003c/p\u003e\u003cp\u003eThe first argument to your function is the \"respond\" function: it takes\n the extra \u003ccode\u003eReturns\u003c/code\u003e parameter as well as the actual value to be returned,\n and produces the expected result.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "CommandHandler",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay.html#CommandHandler",
          "type": "type"
        },
        "index": {
          "description": "function provided by the developer describing how to answer individual commands from client-side code Due to restrictions of the type system in Fay we use relatively simple approach for encoding the return type In order to specify this an extra parameter Returns is passed around with phantom type variable stating the expected return type The first argument to your function is the respond function it takes the extra Returns parameter as well as the actual value to be returned and produces the expected result",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "CommandHandler",
          "package": "yesod-fay",
          "partial": "Command Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:CommandHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that takes a String giving the Fay module name, and returns an\n TH splice that generates a \u003ccode\u003eWidget\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "FayFile",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay.html#FayFile",
          "type": "type"
        },
        "index": {
          "description": "function that takes String giving the Fay module name and returns an TH splice that generates Widget",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "FayFile",
          "package": "yesod-fay",
          "partial": "Fay File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:FayFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Fay subsite.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "FaySite",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay-Data.html#FaySite",
          "type": "data"
        },
        "index": {
          "description": "The Fay subsite",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "FaySite",
          "package": "yesod-fay",
          "partial": "Fay Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:FaySite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proxy type for specifying what type a command should return. The final\n field for each data constructor in a command datatype should be \u003ccode\u003eReturns\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "Returns",
          "package": "yesod-fay",
          "source": "src/Language-Fay-Yesod.html#Returns",
          "type": "data"
        },
        "index": {
          "description": "proxy type for specifying what type command should return The final field for each data constructor in command datatype should be Returns",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "Returns",
          "package": "yesod-fay",
          "partial": "Returns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:Returns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type-safe URLs associated with a site argument.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "Route",
          "package": "yesod-fay",
          "signature": "Route",
          "type": "function"
        },
        "index": {
          "description": "The type-safe URLs associated with site argument",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "Route",
          "package": "yesod-fay",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for applications using Fay.\n\u003c/p\u003e\u003cp\u003eWe depend on \u003ccode\u003eYesodJquery\u003c/code\u003e since the generated client-side code uses jQuery\n for making Ajax calls. We have an associated type stating the command\n datatype. Since this datatype must be used by both the client and server,\n you should place its definition in the \u003ccode\u003efay-shared\u003c/code\u003e folder.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "YesodFay",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay.html#YesodFay",
          "type": "class"
        },
        "index": {
          "description": "Type class for applications using Fay We depend on YesodJquery since the generated client-side code uses jQuery for making Ajax calls We have an associated type stating the command datatype Since this datatype must be used by both the client and server you should place its definition in the fay-shared folder",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "YesodFay",
          "package": "yesod-fay",
          "partial": "Yesod Fay",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:YesodFay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA setttings data type for indicating whether the generated Javascript\n should contain a copy of the Fay runtime or not.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "YesodFaySettings",
          "package": "yesod-fay",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "data"
        },
        "index": {
          "description": "setttings data type for indicating whether the generated Javascript should contain copy of the Fay runtime or not",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "YesodFaySettings",
          "package": "yesod-fay",
          "partial": "Yesod Fay Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:YesodFaySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "YesodJquery",
          "package": "yesod-fay",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "YesodJquery",
          "package": "yesod-fay",
          "partial": "Yesod Jquery",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#t:YesodJquery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "YesodFaySettings",
          "package": "yesod-fay",
          "signature": "YesodFaySettings",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "YesodFaySettings",
          "package": "yesod-fay",
          "partial": "Yesod Fay Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:YesodFaySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a full compile of the Fay code via GHC for type checking, and then\n embeds the Fay-generated Javascript as a static string. File changes during\n runtime will not be reflected.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "fayFileProd",
          "package": "yesod-fay",
          "signature": "YesodFaySettings -\u003e Q Exp",
          "source": "src/Yesod-Fay.html#fayFileProd",
          "type": "function"
        },
        "index": {
          "description": "Does full compile of the Fay code via GHC for type checking and then embeds the Fay-generated Javascript as static string File changes during runtime will not be reflected",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "fayFileProd",
          "normalized": "YesodFaySettings-\u003eQ Exp",
          "package": "yesod-fay",
          "partial": "File Prod",
          "signature": "YesodFaySettings-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:fayFileProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms no type checking on the Fay code. Each time the widget is\n requested, the Fay code will be compiled from scratch to Javascript.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "fayFileReload",
          "package": "yesod-fay",
          "signature": "YesodFaySettings -\u003e Q Exp",
          "source": "src/Yesod-Fay.html#fayFileReload",
          "type": "function"
        },
        "index": {
          "description": "Performs no type checking on the Fay code Each time the widget is requested the Fay code will be compiled from scratch to Javascript",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "fayFileReload",
          "normalized": "YesodFaySettings-\u003eQ Exp",
          "package": "yesod-fay",
          "partial": "File Reload",
          "signature": "YesodFaySettings-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:fayFileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere in the routing tree our Fay subsite is located. This is\n generally named \u003ccode\u003eFaySiteR\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e mkYesod \"YourSite\" [parseRoutes\n ...\n /fay-command FaySiteR FaySite getFaySite\n |]\n\n instance YesodFay YourSite where\n     fayRoute = FaySiteR\n\u003c/pre\u003e",
          "module": "Yesod.Fay",
          "name": "fayRoute",
          "package": "yesod-fay",
          "signature": "Route FaySite -\u003e Route master",
          "source": "src/Yesod-Fay.html#fayRoute",
          "type": "method"
        },
        "index": {
          "description": "Where in the routing tree our Fay subsite is located This is generally named FaySiteR e.g mkYesod YourSite parseRoutes fay-command FaySiteR FaySite getFaySite instance YesodFay YourSite where fayRoute FaySiteR",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "fayRoute",
          "normalized": "Route FaySite-\u003eRoute a",
          "package": "yesod-fay",
          "partial": "Route",
          "signature": "Route FaySite-\u003eRoute master",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:fayRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo be used from your routing declarations.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "getFaySite",
          "package": "yesod-fay",
          "signature": "a -\u003e FaySite",
          "source": "src/Yesod-Fay.html#getFaySite",
          "type": "function"
        },
        "index": {
          "description": "To be used from your routing declarations",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "getFaySite",
          "normalized": "a-\u003eFaySite",
          "package": "yesod-fay",
          "partial": "Fay Site",
          "signature": "a-\u003eFaySite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:getFaySite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe jQuery Javascript file. Note that in upgrades to this library, the\n version of jQuery referenced, or where it is downloaded from, may be\n changed without warning. If you are relying on a specific version of\n jQuery, you should give an explicit URL instead of relying on the\n default value.\n\u003c/p\u003e\u003cp\u003eCurrently, the default value is jQuery 1.7 from Google's CDN.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "urlJqueryJs",
          "package": "yesod-fay",
          "signature": "a -\u003e Either (Route a) Text",
          "type": "method"
        },
        "index": {
          "description": "The jQuery Javascript file Note that in upgrades to this library the version of jQuery referenced or where it is downloaded from may be changed without warning If you are relying on specific version of jQuery you should give an explicit URL instead of relying on the default value Currently the default value is jQuery from Google CDN",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "urlJqueryJs",
          "normalized": "a-\u003eEither(Route a)Text",
          "package": "yesod-fay",
          "partial": "Jquery Js",
          "signature": "a-\u003eEither(Route a)Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:urlJqueryJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe jQuery UI 1.8 CSS file; defaults to cupertino theme.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiCss",
          "package": "yesod-fay",
          "signature": "a -\u003e Either (Route a) Text",
          "type": "method"
        },
        "index": {
          "description": "The jQuery UI CSS file defaults to cupertino theme",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiCss",
          "normalized": "a-\u003eEither(Route a)Text",
          "package": "yesod-fay",
          "partial": "Jquery Ui Css",
          "signature": "a-\u003eEither(Route a)Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:urlJqueryUiCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejQuery UI time picker add-on.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiDateTimePicker",
          "package": "yesod-fay",
          "signature": "a -\u003e Either (Route a) Text",
          "type": "method"
        },
        "index": {
          "description": "jQuery UI time picker add-on",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiDateTimePicker",
          "normalized": "a-\u003eEither(Route a)Text",
          "package": "yesod-fay",
          "partial": "Jquery Ui Date Time Picker",
          "signature": "a-\u003eEither(Route a)Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:urlJqueryUiDateTimePicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe jQuery UI 1.8 Javascript file.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiJs",
          "package": "yesod-fay",
          "signature": "a -\u003e Either (Route a) Text",
          "type": "method"
        },
        "index": {
          "description": "The jQuery UI Javascript file",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "urlJqueryUiJs",
          "normalized": "a-\u003eEither(Route a)Text",
          "package": "yesod-fay",
          "partial": "Jquery Ui Js",
          "signature": "a-\u003eEither(Route a)Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:urlJqueryUiJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser-defined function specifying how to respond to commands. Using the\n above datatype, this might look like:\n\u003c/p\u003e\u003cpre\u003e yesodFayCommand render command =\n     case command of\n         GetFib index r = render r $ fibs !! index\n\u003c/pre\u003e",
          "module": "Yesod.Fay",
          "name": "yesodFayCommand",
          "package": "yesod-fay",
          "signature": "CommandHandler master",
          "source": "src/Yesod-Fay.html#yesodFayCommand",
          "type": "method"
        },
        "index": {
          "description": "User-defined function specifying how to respond to commands Using the above datatype this might look like yesodFayCommand render command case command of GetFib index render fibs index",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yesodFayCommand",
          "package": "yesod-fay",
          "partial": "Fay Command",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yesodFayCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "yesodFaySettings",
          "package": "yesod-fay",
          "signature": "String -\u003e YesodFaySettings",
          "source": "src/Yesod-Fay.html#yesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yesodFaySettings",
          "normalized": "String-\u003eYesodFaySettings",
          "package": "yesod-fay",
          "partial": "Fay Settings",
          "signature": "String-\u003eYesodFaySettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yesodFaySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "yfsExternal",
          "package": "yesod-fay",
          "signature": "Maybe (FilePath, Exp)",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yfsExternal",
          "normalized": "Maybe(FilePath,Exp)",
          "package": "yesod-fay",
          "partial": "External",
          "signature": "Maybe(FilePath,Exp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yfsExternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "yfsModuleName",
          "package": "yesod-fay",
          "signature": "String",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yfsModuleName",
          "package": "yesod-fay",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yfsModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "yfsPostProcess",
          "package": "yesod-fay",
          "signature": "String -\u003e IO String",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yfsPostProcess",
          "normalized": "String-\u003eIO String",
          "package": "yesod-fay",
          "partial": "Post Process",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yfsPostProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that the server call functions provided for your Fay code require\n jQuery to be present. If you disable this option and still use the\n provided server call functions, your code will break.\n\u003c/p\u003e",
          "module": "Yesod.Fay",
          "name": "yfsRequireJQuery",
          "package": "yesod-fay",
          "signature": "Bool",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "description": "Note that the server call functions provided for your Fay code require jQuery to be present If you disable this option and still use the provided server call functions your code will break",
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yfsRequireJQuery",
          "package": "yesod-fay",
          "partial": "Require JQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yfsRequireJQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Fay",
          "name": "yfsSeparateRuntime",
          "package": "yesod-fay",
          "signature": "Maybe (FilePath, Exp)",
          "source": "src/Yesod-Fay.html#YesodFaySettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Fay",
          "module": "Yesod.Fay",
          "name": "yfsSeparateRuntime",
          "normalized": "Maybe(FilePath,Exp)",
          "package": "yesod-fay",
          "partial": "Separate Runtime",
          "signature": "Maybe(FilePath,Exp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-fay/docs/Yesod-Fay.html#v:yfsSeparateRuntime"
      }
    }
  ]
]