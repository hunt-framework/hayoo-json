[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for CoffeeScript, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003ecoffee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003ecoffee\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e#{...}\u003c/code\u003e is the Shakespearean standard for variable interpolation, but\n CoffeeScript already uses that sequence for string interpolation. Therefore,\n Shakespearean interpolation is introduced with \u003ccode\u003e%{...}\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003ecoffee\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003ecoffee\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e   b = 1\n   console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFunction wrapper added to your coffeescript code:\n\u003c/p\u003e\u003cpre\u003e ((shakespeare_var_a) =\u003e\n   b = 1\n   console.log(shakespeare_var_a + b)\n )\n\u003c/pre\u003e\u003cp\u003eThis is then compiled down to javascript, and the variables are applied:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e CoffeeScript: \u003ca\u003ehttp://coffeescript.org/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Text.Coffee",
        "fct-package": "shakespeare-js",
        "fct-signature": "module",
        "fct-source": "src/Text-Coffee.html",
        "fct-type": "module",
        "title": "Coffee"
      },
      "index": {
        "description": "Shakespearean module for CoffeeScript introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool coffee To use this module coffee must be installed on your system is the Shakespearean standard for variable interpolation but CoffeeScript already uses that sequence for string interpolation Therefore Shakespearean interpolation is introduced with If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with coffee and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on coffee Your code console.log Function wrapper added to your coffeescript code shakespeare var console.log shakespeare var This is then compiled down to javascript and the variables are applied function shakespeare var var console.log shakespeare var Further reading Shakespearean templates http www.yesodweb.com book templates CoffeeScript http coffeescript.org",
        "hierarchy": "Text Coffee",
        "module": "Text.Coffee",
        "name": "Coffee",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Coffee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffee",
      "description": {
        "fct-descr": "\u003cp\u003eRead inline, quasiquoted CoffeeScript.\n\u003c/p\u003e",
        "fct-module": "Text.Coffee",
        "fct-package": "shakespeare-js",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Coffee.html#coffee",
        "fct-type": "function",
        "title": "coffee"
      },
      "index": {
        "description": "Read inline quasiquoted CoffeeScript",
        "hierarchy": "Text Coffee",
        "module": "Text.Coffee",
        "name": "coffee",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a CoffeeScript template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
        "fct-module": "Text.Coffee",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Coffee.html#coffeeFile",
        "fct-type": "function",
        "title": "coffeeFile"
      },
      "index": {
        "description": "Read in CoffeeScript template file This function reads the file once at compile time",
        "hierarchy": "Text Coffee",
        "module": "Text.Coffee",
        "name": "coffeeFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFileDebug",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use coffeeFileReload instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated synonym for \u003ccode\u003e\u003ca\u003ecoffeeFileReload\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Coffee",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Coffee.html#coffeeFileDebug",
        "fct-type": "function",
        "title": "coffeeFileDebug"
      },
      "index": {
        "description": "Deprecated Please use coffeeFileReload instead Deprecated synonym for coffeeFileReload",
        "hierarchy": "Text Coffee",
        "module": "Text.Coffee",
        "name": "coffeeFileDebug",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Debug",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Coffee.html#v:coffeeFileReload",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a CoffeeScript template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
        "fct-module": "Text.Coffee",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Coffee.html#coffeeFileReload",
        "fct-type": "function",
        "title": "coffeeFileReload"
      },
      "index": {
        "description": "Read in CoffeeScript template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
        "hierarchy": "Text Coffee",
        "module": "Text.Coffee",
        "name": "coffeeFileReload",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Reload",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for Javascript templates, introducing type-safe,\n compile-time variable and url interpolation.--\n\u003c/p\u003e\u003cp\u003eYou might consider trying \u003ccode\u003e\u003ca\u003eTypescript\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCoffee\u003c/a\u003e\u003c/code\u003e which compile down to Javascript.\n\u003c/p\u003e\u003cp\u003eFurther reading: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "module",
        "fct-source": "src/Text-Julius.html",
        "fct-type": "module",
        "title": "Julius"
      },
      "index": {
        "description": "Shakespearean module for Javascript templates introducing type-safe compile-time variable and url interpolation You might consider trying Typescript or Coffee which compile down to Javascript Further reading http www.yesodweb.com book templates",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "Julius",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Julius",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:Javascript",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper of \u003ccode\u003eBuilder\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Julius.html#Javascript",
        "fct-type": "newtype",
        "title": "Javascript"
      },
      "index": {
        "description": "Newtype wrapper of Builder",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "Javascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:JavascriptUrl",
      "description": {
        "fct-descr": "\u003cp\u003eReturn type of template-reading functions.\n\u003c/p\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "type",
        "fct-source": "src/Text-Julius.html#JavascriptUrl",
        "fct-type": "type",
        "title": "JavascriptUrl"
      },
      "index": {
        "description": "Return type of template-reading functions",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "JavascriptUrl",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Javascript Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:RawJS",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "class",
        "fct-source": "src/Text-Julius.html#RawJS",
        "fct-type": "class",
        "title": "RawJS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "RawJS",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Raw JS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:RawJavascript",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Julius.html#RawJavascript",
        "fct-type": "newtype",
        "title": "RawJavascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "RawJavascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Raw Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#t:ToJavascript",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass for types that can be interpolated in CoffeeScript templates.\n\u003c/p\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "class",
        "fct-source": "src/Text-Julius.html#ToJavascript",
        "fct-type": "class",
        "title": "ToJavascript"
      },
      "index": {
        "description": "typeclass for types that can be interpolated in CoffeeScript templates",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "ToJavascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "To Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:Javascript",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "Javascript",
        "fct-source": "src/Text-Julius.html#Javascript",
        "fct-type": "function",
        "title": "Javascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "Javascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:RawJavascript",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "RawJavascript Builder",
        "fct-source": "src/Text-Julius.html#RawJavascript",
        "fct-type": "function",
        "title": "RawJavascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "RawJavascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Raw Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:asJavascriptUrl",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "JavascriptUrl url -\u003e JavascriptUrl url",
        "fct-source": "src/Text-Julius.html#asJavascriptUrl",
        "fct-type": "function",
        "title": "asJavascriptUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "asJavascriptUrl",
        "normalized": "JavascriptUrl a-\u003eJavascriptUrl a",
        "package": "shakespeare-js",
        "partial": "Javascript Url",
        "signature": "JavascriptUrl url-\u003eJavascriptUrl url"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:javascriptSettings",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "Q ShakespeareSettings",
        "fct-source": "src/Text-Julius.html#javascriptSettings",
        "fct-type": "function",
        "title": "javascriptSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "javascriptSettings",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:js",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Julius.html#js",
        "fct-type": "function",
        "title": "js"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "js",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFile",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#jsFile",
        "fct-type": "function",
        "title": "jsFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "jsFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFileDebug",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use jsFileReload instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#jsFileDebug",
        "fct-type": "function",
        "title": "jsFileDebug"
      },
      "index": {
        "description": "Deprecated Please use jsFileReload instead",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "jsFileDebug",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Debug",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:jsFileReload",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#jsFileReload",
        "fct-type": "function",
        "title": "jsFileReload"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "jsFileReload",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Reload",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:julius",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Julius.html#julius",
        "fct-type": "function",
        "title": "julius"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "julius",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFile",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#juliusFile",
        "fct-type": "function",
        "title": "juliusFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "juliusFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFileDebug",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Please use juliusFileReload instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#juliusFileDebug",
        "fct-type": "function",
        "title": "juliusFileDebug"
      },
      "index": {
        "description": "Deprecated Please use juliusFileReload instead",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "juliusFileDebug",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Debug",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusFileReload",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Julius.html#juliusFileReload",
        "fct-type": "function",
        "title": "juliusFileReload"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "juliusFileReload",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Reload",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:juliusUsedIdentifiers",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine which identifiers are used by the given template, useful for\n creating systems like yesod devel.\n\u003c/p\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "String -\u003e [(Deref, VarType)]",
        "fct-source": "src/Text-Julius.html#juliusUsedIdentifiers",
        "fct-type": "function",
        "title": "juliusUsedIdentifiers"
      },
      "index": {
        "description": "Determine which identifiers are used by the given template useful for creating systems like yesod devel",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "juliusUsedIdentifiers",
        "normalized": "String-\u003e[(Deref,VarType)]",
        "package": "shakespeare-js",
        "partial": "Used Identifiers",
        "signature": "String-\u003e[(Deref,VarType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:rawJS",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "a -\u003e RawJavascript",
        "fct-source": "src/Text-Julius.html#rawJS",
        "fct-type": "method",
        "title": "rawJS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "rawJS",
        "normalized": "a-\u003eRawJavascript",
        "package": "shakespeare-js",
        "partial": "JS",
        "signature": "a-\u003eRawJavascript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:renderJavascript",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "Javascript -\u003e Text",
        "fct-source": "src/Text-Julius.html#renderJavascript",
        "fct-type": "function",
        "title": "renderJavascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "renderJavascript",
        "normalized": "Javascript-\u003eText",
        "package": "shakespeare-js",
        "partial": "Javascript",
        "signature": "Javascript-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:renderJavascriptUrl",
      "description": {
        "fct-descr": "\u003cp\u003erender with route interpolation. If using this module standalone, apart\n from type-safe routes, a dummy renderer can be used:\n\u003c/p\u003e\u003cpre\u003e renderJavascriptUrl (\\_ _ -\u003e undefined) javascriptUrl\n\u003c/pre\u003e\u003cp\u003eWhen using Yesod, a renderer is generated for you, which can be accessed\n within the GHandler monad: \u003ccode\u003e\u003ca\u003egetUrlRenderParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "(url -\u003e [(Text, Text)] -\u003e Text) -\u003e JavascriptUrl url -\u003e Text",
        "fct-source": "src/Text-Julius.html#renderJavascriptUrl",
        "fct-type": "function",
        "title": "renderJavascriptUrl"
      },
      "index": {
        "description": "render with route interpolation If using this module standalone apart from type-safe routes dummy renderer can be used renderJavascriptUrl undefined javascriptUrl When using Yesod renderer is generated for you which can be accessed within the GHandler monad getUrlRenderParams",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "renderJavascriptUrl",
        "normalized": "(a-\u003e[(Text,Text)]-\u003eText)-\u003eJavascriptUrl a-\u003eText",
        "package": "shakespeare-js",
        "partial": "Javascript Url",
        "signature": "(url-\u003e[(Text,Text)]-\u003eText)-\u003eJavascriptUrl url-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:toJavascript",
      "description": {
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "a -\u003e Javascript",
        "fct-source": "src/Text-Julius.html#toJavascript",
        "fct-type": "method",
        "title": "toJavascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "toJavascript",
        "normalized": "a-\u003eJavascript",
        "package": "shakespeare-js",
        "partial": "Javascript",
        "signature": "a-\u003eJavascript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Julius.html#v:unJavascript",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Julius",
        "fct-package": "shakespeare-js",
        "fct-signature": "Builder",
        "fct-source": "src/Text-Julius.html#Javascript",
        "fct-type": "function",
        "title": "unJavascript"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Julius",
        "module": "Text.Julius",
        "name": "unJavascript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for Roy, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003eroy\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003eroy\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003eroy\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003eroy\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e let b = 1\n console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFinal Result:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Roy: \u003ca\u003ehttp://http://roy.brianmckenna.org/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Text.Roy",
        "fct-package": "shakespeare-js",
        "fct-signature": "module",
        "fct-source": "src/Text-Roy.html",
        "fct-type": "module",
        "title": "Roy"
      },
      "index": {
        "description": "Shakespearean module for Roy introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool roy To use this module roy must be installed on your system If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with roy and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on roy Your code let console.log Final Result function shakespeare var var console.log shakespeare var Further reading Shakespearean templates http www.yesodweb.com book templates Roy http http roy.brianmckenna.org",
        "hierarchy": "Text Roy",
        "module": "Text.Roy",
        "name": "Roy",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Roy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:roy",
      "description": {
        "fct-descr": "\u003cp\u003eRead inline, quasiquoted Roy.\n\u003c/p\u003e",
        "fct-module": "Text.Roy",
        "fct-package": "shakespeare-js",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Roy.html#roy",
        "fct-type": "function",
        "title": "roy"
      },
      "index": {
        "description": "Read inline quasiquoted Roy",
        "hierarchy": "Text Roy",
        "module": "Text.Roy",
        "name": "roy",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:royFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a Roy template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
        "fct-module": "Text.Roy",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Roy.html#royFile",
        "fct-type": "function",
        "title": "royFile"
      },
      "index": {
        "description": "Read in Roy template file This function reads the file once at compile time",
        "hierarchy": "Text Roy",
        "module": "Text.Roy",
        "name": "royFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-Roy.html#v:royFileReload",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a Roy template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
        "fct-module": "Text.Roy",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-Roy.html#royFileReload",
        "fct-type": "function",
        "title": "royFileReload"
      },
      "index": {
        "description": "Read in Roy template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
        "hierarchy": "Text Roy",
        "module": "Text.Roy",
        "name": "royFileReload",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "File Reload",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Shakespearean module for TypeScript, introducing type-safe,\n compile-time variable and url interpolation. It is exactly the same as\n \u003ca\u003eText.Julius\u003c/a\u003e, except that the template is first compiled to Javascript with\n the system tool \u003ccode\u003etsc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo use this module, \u003ccode\u003etsc\u003c/code\u003e must be installed on your system.\n\u003c/p\u003e\u003cp\u003eIf you interpolate variables,\n the template is first wrapped with a function containing javascript variables representing shakespeare variables,\n then compiled with \u003ccode\u003etsc\u003c/code\u003e,\n and then the value of the variables are applied to the function.\n This means that in production the template can be compiled\n once at compile time and there will be no dependency in your production\n system on \u003ccode\u003etsc\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eYour code:\n\u003c/p\u003e\u003cpre\u003e var b = 1\n console.log(#{a} + b)\n\u003c/pre\u003e\u003cp\u003eFinal Result:\n\u003c/p\u003e\u003cpre\u003e ;(function(shakespeare_var_a){\n   var b = 1;\n   console.log(shakespeare_var_a + b);\n })(#{a});\n\u003c/pre\u003e\u003cp\u003eImportant Warnings! This integration is not ideal.\n\u003c/p\u003e\u003cp\u003eDue to the function wrapper, all type declarations must be in separate .d.ts files.\n However, if you don't interpolate variables, no function wrapper will be\n created, and you can make type declarations in the same file.\n\u003c/p\u003e\u003cp\u003eThis does not work cross-platform!\n\u003c/p\u003e\u003cp\u003eUnfortunately tsc does not support stdin and stdout.\n So a hack of writing to temporary files using the mktemp\n command is used. This works on my version of Linux, but not for windows\n unless perhaps you install a mktemp utility, which I have not tested.\n Please vote up this bug: \u003ca\u003ehttp://typescript.codeplex.com/workitem/600\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eMaking this work on Windows would not be very difficult, it will just require a new\n package with a dependency on a package like temporary.\n\u003c/p\u003e\u003cp\u003eFurther reading:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Shakespearean templates: \u003ca\u003ehttp://www.yesodweb.com/book/templates\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e TypeScript: \u003ca\u003ehttp://typescript.codeplex.com/\u003c/a\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Text.TypeScript",
        "fct-package": "shakespeare-js",
        "fct-signature": "module",
        "fct-source": "src/Text-TypeScript.html",
        "fct-type": "module",
        "title": "TypeScript"
      },
      "index": {
        "description": "Shakespearean module for TypeScript introducing type-safe compile-time variable and url interpolation It is exactly the same as Text.Julius except that the template is first compiled to Javascript with the system tool tsc To use this module tsc must be installed on your system If you interpolate variables the template is first wrapped with function containing javascript variables representing shakespeare variables then compiled with tsc and then the value of the variables are applied to the function This means that in production the template can be compiled once at compile time and there will be no dependency in your production system on tsc Your code var console.log Final Result function shakespeare var var console.log shakespeare var Important Warnings This integration is not ideal Due to the function wrapper all type declarations must be in separate d.ts files However if you don interpolate variables no function wrapper will be created and you can make type declarations in the same file This does not work cross-platform Unfortunately tsc does not support stdin and stdout So hack of writing to temporary files using the mktemp command is used This works on my version of Linux but not for windows unless perhaps you install mktemp utility which have not tested Please vote up this bug http typescript.codeplex.com workitem Making this work on Windows would not be very difficult it will just require new package with dependency on package like temporary Further reading Shakespearean templates http www.yesodweb.com book templates TypeScript http typescript.codeplex.com",
        "hierarchy": "Text TypeScript",
        "module": "Text.TypeScript",
        "name": "TypeScript",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "Type Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:tsc",
      "description": {
        "fct-descr": "\u003cp\u003eRead inline, quasiquoted TypeScript\n\u003c/p\u003e",
        "fct-module": "Text.TypeScript",
        "fct-package": "shakespeare-js",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-TypeScript.html#tsc",
        "fct-type": "function",
        "title": "tsc"
      },
      "index": {
        "description": "Read inline quasiquoted TypeScript",
        "hierarchy": "Text TypeScript",
        "module": "Text.TypeScript",
        "name": "tsc",
        "normalized": "",
        "package": "shakespeare-js",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:typeScriptFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a TypeScript template file. This function reads the file once, at\n compile time.\n\u003c/p\u003e",
        "fct-module": "Text.TypeScript",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-TypeScript.html#typeScriptFile",
        "fct-type": "function",
        "title": "typeScriptFile"
      },
      "index": {
        "description": "Read in TypeScript template file This function reads the file once at compile time",
        "hierarchy": "Text TypeScript",
        "module": "Text.TypeScript",
        "name": "typeScriptFile",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "Script File",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shakespeare-js/docs/Text-TypeScript.html#v:typeScriptFileReload",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a Roy template file. This impure function uses\n unsafePerformIO to re-read the file on every call, allowing for rapid\n iteration.\n\u003c/p\u003e",
        "fct-module": "Text.TypeScript",
        "fct-package": "shakespeare-js",
        "fct-signature": "FilePath -\u003e Q Exp",
        "fct-source": "src/Text-TypeScript.html#typeScriptFileReload",
        "fct-type": "function",
        "title": "typeScriptFileReload"
      },
      "index": {
        "description": "Read in Roy template file This impure function uses unsafePerformIO to re-read the file on every call allowing for rapid iteration",
        "hierarchy": "Text TypeScript",
        "module": "Text.TypeScript",
        "name": "typeScriptFileReload",
        "normalized": "FilePath-\u003eQ Exp",
        "package": "shakespeare-js",
        "partial": "Script File Reload",
        "signature": "FilePath-\u003eQ Exp"
      }
    }
  }
]