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
        "word": "shakespeare-js"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for CoffeeScript, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003ecoffee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003ecoffee\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e#{...}\u003c/code\u003e is the Shakespearean standard for variable interpolation, but\n CoffeeScript already uses that sequence for string interpolation. Therefore,\n Shakespearean interpolation is introduced with \u003ccode\u003e%{...}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003ecoffee\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003ecoffee\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e   b = 1\n   console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFunction wrapper added to your coffeescript code:\n\u003c/p\u003e\u003cpre\u003e ((shakespeare_var_a) =\u003e\n   b = 1\n   console.log(shakespeare_var_a + b)\n )\n\u003c/pre\u003e\u003cp\u003eThis is then compiled down to javascript, and the variables are applied:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e CoffeeScript: \u003ca\u003ehttp://coffeescript.org/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Text.Coffee",
          "name": "Coffee",
          "package": "shakespeare-js",
          "source": "src/Text-Coffee.html",
          "type": "module"
        },
        "index": {
          "description": "Shakespearean module for CoffeeScript introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool coffee To use this module coffee must be installed on your system is the Shakespearean standard for variable interpolation but CoffeeScript already uses that sequence for string interpolation Therefore Shakespearean interpolation is introduced with If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with coffee and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on coffee Your code console.log Function wrapper added to your coffeescript code shakespeare var console.log shakespeare var This is then compiled down to javascript and the variables are applied function shakespeare var var console.log shakespeare var Further reading Shakespearean templates http www.yesodweb.com book templates CoffeeScript http coffeescript.org",
          "hierarchy": "Text Coffee",
          "module": "Text.Coffee",
          "name": "Coffee",
          "package": "shakespeare-js",
          "partial": "Coffee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead inline, quasiquoted CoffeeScript.\n\u003c/p\u003e",
          "module": "Text.Coffee",
          "name": "coffee",
          "package": "shakespeare-js",
          "signature": "QuasiQuoter",
          "source": "src/Text-Coffee.html#coffee",
          "type": "function"
        },
        "index": {
          "description": "Read inline quasiquoted CoffeeScript",
          "hierarchy": "Text Coffee",
          "module": "Text.Coffee",
          "name": "coffee",
          "package": "shakespeare-js",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a CoffeeScript template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
          "module": "Text.Coffee",
          "name": "coffeeFile",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Coffee.html#coffeeFile",
          "type": "function"
        },
        "index": {
          "description": "Read in CoffeeScript template file This function reads the file once at compile time",
          "hierarchy": "Text Coffee",
          "module": "Text.Coffee",
          "name": "coffeeFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use coffeeFileReload instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated synonym for \u003ccode\u003e\u003ca\u003ecoffeeFileReload\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Coffee",
          "name": "coffeeFileDebug",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Coffee.html#coffeeFileDebug",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use coffeeFileReload instead Deprecated synonym for coffeeFileReload",
          "hierarchy": "Text Coffee",
          "module": "Text.Coffee",
          "name": "coffeeFileDebug",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Debug",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFileDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a CoffeeScript template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
          "module": "Text.Coffee",
          "name": "coffeeFileReload",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Coffee.html#coffeeFileReload",
          "type": "function"
        },
        "index": {
          "description": "Read in CoffeeScript template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
          "hierarchy": "Text Coffee",
          "module": "Text.Coffee",
          "name": "coffeeFileReload",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Reload",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for Javascript templates, introducing type-safe,\n compile-time variable and url interpolation.--\n\u003c/p\u003e\u003cp\u003eYou might consider trying \u003ccode\u003e\u003ca\u003eTypescript\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCoffee\u003c/a\u003e\u003c/code\u003e which compile down to Javascript.\n\u003c/p\u003e\u003cp\u003eFurther reading: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Julius",
          "name": "Julius",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html",
          "type": "module"
        },
        "index": {
          "description": "Shakespearean module for Javascript templates introducing type-safe compile-time variable and url interpolation You might consider trying Typescript or Coffee which compile down to Javascript Further reading http www.yesodweb.com book templates",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "Julius",
          "package": "shakespeare-js",
          "partial": "Julius",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Julius",
          "name": "Javascript",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html#Javascript",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper of Builder",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "Javascript",
          "package": "shakespeare-js",
          "partial": "Javascript",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:Javascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn type of template-reading functions.\n\u003c/p\u003e",
          "module": "Text.Julius",
          "name": "JavascriptUrl",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html#JavascriptUrl",
          "type": "type"
        },
        "index": {
          "description": "Return type of template-reading functions",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "JavascriptUrl",
          "package": "shakespeare-js",
          "partial": "Javascript Url",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:JavascriptUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "RawJS",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html#RawJS",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "RawJS",
          "package": "shakespeare-js",
          "partial": "Raw JS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:RawJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "RawJavascript",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html#RawJavascript",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "RawJavascript",
          "package": "shakespeare-js",
          "partial": "Raw Javascript",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:RawJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for types that can be interpolated in CoffeeScript templates.\n\u003c/p\u003e",
          "module": "Text.Julius",
          "name": "ToJavascript",
          "package": "shakespeare-js",
          "source": "src/Text-Julius.html#ToJavascript",
          "type": "class"
        },
        "index": {
          "description": "typeclass for types that can be interpolated in CoffeeScript templates",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "ToJavascript",
          "package": "shakespeare-js",
          "partial": "To Javascript",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:ToJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "Javascript",
          "package": "shakespeare-js",
          "signature": "Javascript",
          "source": "src/Text-Julius.html#Javascript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "Javascript",
          "package": "shakespeare-js",
          "partial": "Javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:Javascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "RawJavascript",
          "package": "shakespeare-js",
          "signature": "RawJavascript Builder",
          "source": "src/Text-Julius.html#RawJavascript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "RawJavascript",
          "package": "shakespeare-js",
          "partial": "Raw Javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:RawJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "asJavascriptUrl",
          "package": "shakespeare-js",
          "signature": "JavascriptUrl url -\u003e JavascriptUrl url",
          "source": "src/Text-Julius.html#asJavascriptUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "asJavascriptUrl",
          "normalized": "JavascriptUrl a-\u003eJavascriptUrl a",
          "package": "shakespeare-js",
          "partial": "Javascript Url",
          "signature": "JavascriptUrl url-\u003eJavascriptUrl url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:asJavascriptUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "javascriptSettings",
          "package": "shakespeare-js",
          "signature": "Q ShakespeareSettings",
          "source": "src/Text-Julius.html#javascriptSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "javascriptSettings",
          "package": "shakespeare-js",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:javascriptSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "js",
          "package": "shakespeare-js",
          "signature": "QuasiQuoter",
          "source": "src/Text-Julius.html#js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "js",
          "package": "shakespeare-js",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "jsFile",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#jsFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "jsFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use jsFileReload instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Julius",
          "name": "jsFileDebug",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#jsFileDebug",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use jsFileReload instead",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "jsFileDebug",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Debug",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFileDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "jsFileReload",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#jsFileReload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "jsFileReload",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Reload",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "julius",
          "package": "shakespeare-js",
          "signature": "QuasiQuoter",
          "source": "src/Text-Julius.html#julius",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "julius",
          "package": "shakespeare-js",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:julius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "juliusFile",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#juliusFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "juliusFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use juliusFileReload instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Julius",
          "name": "juliusFileDebug",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#juliusFileDebug",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Please use juliusFileReload instead",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "juliusFileDebug",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Debug",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFileDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "juliusFileReload",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Julius.html#juliusFileReload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "juliusFileReload",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Reload",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine which identifiers are used by the given template, useful for\n creating systems like yesod devel.\n\u003c/p\u003e",
          "module": "Text.Julius",
          "name": "juliusUsedIdentifiers",
          "package": "shakespeare-js",
          "signature": "String -\u003e [(Deref, VarType)]",
          "source": "src/Text-Julius.html#juliusUsedIdentifiers",
          "type": "function"
        },
        "index": {
          "description": "Determine which identifiers are used by the given template useful for creating systems like yesod devel",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "juliusUsedIdentifiers",
          "normalized": "String-\u003e[(Deref,VarType)]",
          "package": "shakespeare-js",
          "partial": "Used Identifiers",
          "signature": "String-\u003e[(Deref,VarType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusUsedIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "rawJS",
          "package": "shakespeare-js",
          "signature": "a -\u003e RawJavascript",
          "source": "src/Text-Julius.html#rawJS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "rawJS",
          "normalized": "a-\u003eRawJavascript",
          "package": "shakespeare-js",
          "partial": "JS",
          "signature": "a-\u003eRawJavascript",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:rawJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "renderJavascript",
          "package": "shakespeare-js",
          "signature": "Javascript -\u003e Text",
          "source": "src/Text-Julius.html#renderJavascript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "renderJavascript",
          "normalized": "Javascript-\u003eText",
          "package": "shakespeare-js",
          "partial": "Javascript",
          "signature": "Javascript-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:renderJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender with route interpolation. If using this module standalone, apart\n from type-safe routes, a dummy renderer can be used:\n\u003c/p\u003e\u003cpre\u003e renderJavascriptUrl (\\_ _ -\u003e undefined) javascriptUrl\n\u003c/pre\u003e\u003cp\u003eWhen using Yesod, a renderer is generated for you, which can be accessed\n within the GHandler monad: \u003ccode\u003e\u003ca\u003egetUrlRenderParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Julius",
          "name": "renderJavascriptUrl",
          "package": "shakespeare-js",
          "signature": "(url -\u003e [(Text, Text)] -\u003e Text) -\u003e JavascriptUrl url -\u003e Text",
          "source": "src/Text-Julius.html#renderJavascriptUrl",
          "type": "function"
        },
        "index": {
          "description": "render with route interpolation If using this module standalone apart from type-safe routes dummy renderer can be used renderJavascriptUrl undefined javascriptUrl When using Yesod renderer is generated for you which can be accessed within the GHandler monad getUrlRenderParams",
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "renderJavascriptUrl",
          "normalized": "(a-\u003e[(Text,Text)]-\u003eText)-\u003eJavascriptUrl a-\u003eText",
          "package": "shakespeare-js",
          "partial": "Javascript Url",
          "signature": "(url-\u003e[(Text,Text)]-\u003eText)-\u003eJavascriptUrl url-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:renderJavascriptUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "toJavascript",
          "package": "shakespeare-js",
          "signature": "a -\u003e Javascript",
          "source": "src/Text-Julius.html#toJavascript",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "toJavascript",
          "normalized": "a-\u003eJavascript",
          "package": "shakespeare-js",
          "partial": "Javascript",
          "signature": "a-\u003eJavascript",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:toJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Julius",
          "name": "unJavascript",
          "package": "shakespeare-js",
          "signature": "Builder",
          "source": "src/Text-Julius.html#Javascript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Julius",
          "module": "Text.Julius",
          "name": "unJavascript",
          "package": "shakespeare-js",
          "partial": "Javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:unJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for Roy, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003eroy\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003eroy\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003eroy\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003eroy\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e let b = 1\n console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFinal Result:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Roy: \u003ca\u003ehttp://roy.brianmckenna.org/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Text.Roy",
          "name": "Roy",
          "package": "shakespeare-js",
          "source": "src/Text-Roy.html",
          "type": "module"
        },
        "index": {
          "description": "Shakespearean module for Roy introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool roy To use this module roy must be installed on your system If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with roy and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on roy Your code let console.log Final Result function shakespeare var var console.log shakespeare var Further reading Shakespearean templates http www.yesodweb.com book templates Roy http roy.brianmckenna.org",
          "hierarchy": "Text Roy",
          "module": "Text.Roy",
          "name": "Roy",
          "package": "shakespeare-js",
          "partial": "Roy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead inline, quasiquoted Roy.\n\u003c/p\u003e",
          "module": "Text.Roy",
          "name": "roy",
          "package": "shakespeare-js",
          "signature": "QuasiQuoter",
          "source": "src/Text-Roy.html#roy",
          "type": "function"
        },
        "index": {
          "description": "Read inline quasiquoted Roy",
          "hierarchy": "Text Roy",
          "module": "Text.Roy",
          "name": "roy",
          "package": "shakespeare-js",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:roy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a Roy template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
          "module": "Text.Roy",
          "name": "royFile",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Roy.html#royFile",
          "type": "function"
        },
        "index": {
          "description": "Read in Roy template file This function reads the file once at compile time",
          "hierarchy": "Text Roy",
          "module": "Text.Roy",
          "name": "royFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:royFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a Roy template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
          "module": "Text.Roy",
          "name": "royFileReload",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-Roy.html#royFileReload",
          "type": "function"
        },
        "index": {
          "description": "Read in Roy template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
          "hierarchy": "Text Roy",
          "module": "Text.Roy",
          "name": "royFileReload",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "File Reload",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:royFileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for TypeScript, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003etsc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003etsc\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003etsc\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003etsc\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e var b = 1\n console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFinal Result:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eImportant Warnings! This integration is not ideal.\n\u003c/p\u003e\u003cp\u003eDue to the function wrapper, all type declarations must be in separate .d.ts files.\n However, if you don't interpolate variables, no function wrapper will be\n created, and you can make type declarations in the same file.\n\u003c/p\u003e\u003cp\u003eThis does not work cross-platform!\n\u003c/p\u003e\u003cp\u003eUnfortunately tsc does not support stdin and stdout.\n So a hack of writing to temporary files using the mktemp\n command is used. This works on my version of Linux, but not for windows\n unless perhaps you install a mktemp utility, which I have not tested.\n Please vote up this bug: \u003ca\u003ehttp://typescript.codeplex.com/workitem/600\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eMaking this work on Windows would not be very difficult, it will just require a new\n package with a dependency on a package like temporary.\n\u003c/p\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e TypeScript: \u003ca\u003ehttp://typescript.codeplex.com/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Text.TypeScript",
          "name": "TypeScript",
          "package": "shakespeare-js",
          "source": "src/Text-TypeScript.html",
          "type": "module"
        },
        "index": {
          "description": "Shakespearean module for TypeScript introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool tsc To use this module tsc must be installed on your system If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with tsc and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on tsc Your code var console.log Final Result function shakespeare var var console.log shakespeare var Important Warnings This integration is not ideal Due to the function wrapper all type declarations must be in separate d.ts files However if you don interpolate variables no function wrapper will be created and you can make type declarations in the same file This does not work cross-platform Unfortunately tsc does not support stdin and stdout So hack of writing to temporary files using the mktemp command is used This works on my version of Linux but not for windows unless perhaps you install mktemp utility which have not tested Please vote up this bug http typescript.codeplex.com workitem Making this work on Windows would not be very difficult it will just require new package with dependency on package like temporary Further reading Shakespearean templates http www.yesodweb.com book templates TypeScript http typescript.codeplex.com",
          "hierarchy": "Text TypeScript",
          "module": "Text.TypeScript",
          "name": "TypeScript",
          "package": "shakespeare-js",
          "partial": "Type Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead inline, quasiquoted TypeScript\n\u003c/p\u003e",
          "module": "Text.TypeScript",
          "name": "tsc",
          "package": "shakespeare-js",
          "signature": "QuasiQuoter",
          "source": "src/Text-TypeScript.html#tsc",
          "type": "function"
        },
        "index": {
          "description": "Read inline quasiquoted TypeScript",
          "hierarchy": "Text TypeScript",
          "module": "Text.TypeScript",
          "name": "tsc",
          "package": "shakespeare-js",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:tsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a TypeScript template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
          "module": "Text.TypeScript",
          "name": "typeScriptFile",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-TypeScript.html#typeScriptFile",
          "type": "function"
        },
        "index": {
          "description": "Read in TypeScript template file This function reads the file once at compile time",
          "hierarchy": "Text TypeScript",
          "module": "Text.TypeScript",
          "name": "typeScriptFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "Script File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:typeScriptFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a Roy template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
          "module": "Text.TypeScript",
          "name": "typeScriptFileReload",
          "package": "shakespeare-js",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Text-TypeScript.html#typeScriptFileReload",
          "type": "function"
        },
        "index": {
          "description": "Read in Roy template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
          "hierarchy": "Text TypeScript",
          "module": "Text.TypeScript",
          "name": "typeScriptFileReload",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "shakespeare-js",
          "partial": "Script File Reload",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:typeScriptFileReload"
      }
    }
  ]
]