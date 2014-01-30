[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#",
      "description": {
        "fct-module": "Web.Routes.TH",
        "fct-package": "web-routes-th",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes TH",
        "module": "Web.Routes.TH",
        "name": "TH",
        "normalized": "",
        "package": "web-routes-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:derivePathInfo",
      "description": {
        "fct-descr": "\u003cp\u003euse Template Haskell to create \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instances for a type.\n\u003c/p\u003e\u003cpre\u003e $(derivePathInfo ''SiteURL)\n\u003c/pre\u003e\u003cp\u003eUses the \u003ccode\u003e\u003ca\u003estandard\u003c/a\u003e\u003c/code\u003e formatter by default.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.TH",
        "fct-package": "web-routes-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Web-Routes-TH.html#derivePathInfo",
        "fct-type": "function",
        "title": "derivePathInfo"
      },
      "index": {
        "description": "use Template Haskell to create PathInfo instances for type derivePathInfo SiteURL Uses the standard formatter by default",
        "hierarchy": "Web Routes TH",
        "module": "Web.Routes.TH",
        "name": "derivePathInfo",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "web-routes-th",
        "partial": "Path Info",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:derivePathInfo-39-",
      "description": {
        "fct-descr": "\u003cp\u003euse Template Haskell to create \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instances for a type.\n\u003c/p\u003e\u003cp\u003eThis variant allows the user to supply a function that transforms\n the constructor name to a prettier rendering. It is important that\n the transformation function generates a unique output for each\n input. For example, simply converting the string to all lower case\n is not acceptable, because then \u003ccode\u003eFooBar\u003c/code\u003e and \u003ccode\u003eFoobar\u003c/code\u003e would be\n indistinguishable.\n\u003c/p\u003e\u003cpre\u003e $(derivePathInfo' standard ''SiteURL)\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003estandard\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Routes.TH",
        "fct-package": "web-routes-th",
        "fct-signature": "(String -\u003e String) -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Web-Routes-TH.html#derivePathInfo%27",
        "fct-type": "function",
        "title": "derivePathInfo'"
      },
      "index": {
        "description": "use Template Haskell to create PathInfo instances for type This variant allows the user to supply function that transforms the constructor name to prettier rendering It is important that the transformation function generates unique output for each input For example simply converting the string to all lower case is not acceptable because then FooBar and Foobar would be indistinguishable derivePathInfo standard SiteURL see also standard",
        "hierarchy": "Web Routes TH",
        "module": "Web.Routes.TH",
        "name": "derivePathInfo'",
        "normalized": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
        "package": "web-routes-th",
        "partial": "Path Info'",
        "signature": "(String-\u003eString)-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:mkRoute",
      "description": {
        "fct-module": "Web.Routes.TH",
        "fct-package": "web-routes-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Web-Routes-TH.html#mkRoute",
        "fct-type": "function",
        "title": "mkRoute"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes TH",
        "module": "Web.Routes.TH",
        "name": "mkRoute",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "web-routes-th",
        "partial": "Route",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:standard",
      "description": {
        "fct-descr": "\u003cp\u003ethe standard formatter\n\u003c/p\u003e\u003cp\u003eConverts \u003ccode\u003eCamelCase\u003c/code\u003e to \u003ccode\u003ecamel-case\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ederivePathInfo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederivePathInfo'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Routes.TH",
        "fct-package": "web-routes-th",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Web-Routes-TH.html#standard",
        "fct-type": "function",
        "title": "standard"
      },
      "index": {
        "description": "the standard formatter Converts CamelCase to camel-case see also derivePathInfo and derivePathInfo",
        "hierarchy": "Web Routes TH",
        "module": "Web.Routes.TH",
        "name": "standard",
        "normalized": "String-\u003eString",
        "package": "web-routes-th",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  }
]