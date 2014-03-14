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
        "word": "web-routes-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.TH",
          "name": "TH",
          "package": "web-routes-th",
          "source": "src/Web-Routes-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes TH",
          "module": "Web.Routes.TH",
          "name": "TH",
          "package": "web-routes-th",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse Template Haskell to create \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instances for a type.\n\u003c/p\u003e\u003cpre\u003e $(derivePathInfo ''SiteURL)\n\u003c/pre\u003e\u003cp\u003eUses the \u003ccode\u003e\u003ca\u003estandard\u003c/a\u003e\u003c/code\u003e formatter by default.\n\u003c/p\u003e",
          "module": "Web.Routes.TH",
          "name": "derivePathInfo",
          "package": "web-routes-th",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Web-Routes-TH.html#derivePathInfo",
          "type": "function"
        },
        "index": {
          "description": "use Template Haskell to create PathInfo instances for type derivePathInfo SiteURL Uses the standard formatter by default",
          "hierarchy": "Web Routes TH",
          "module": "Web.Routes.TH",
          "name": "derivePathInfo",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "web-routes-th",
          "partial": "Path Info",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:derivePathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse Template Haskell to create \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instances for a type.\n\u003c/p\u003e\u003cp\u003eThis variant allows the user to supply a function that transforms\n the constructor name to a prettier rendering. It is important that\n the transformation function generates a unique output for each\n input. For example, simply converting the string to all lower case\n is not acceptable, because then \u003ccode\u003eFooBar\u003c/code\u003e and \u003ccode\u003eFoobar\u003c/code\u003e would be\n indistinguishable.\n\u003c/p\u003e\u003cpre\u003e $(derivePathInfo' standard ''SiteURL)\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003estandard\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.TH",
          "name": "derivePathInfo'",
          "package": "web-routes-th",
          "signature": "(String -\u003e String) -\u003e Name -\u003e Q [Dec]",
          "source": "src/Web-Routes-TH.html#derivePathInfo%27",
          "type": "function"
        },
        "index": {
          "description": "use Template Haskell to create PathInfo instances for type This variant allows the user to supply function that transforms the constructor name to prettier rendering It is important that the transformation function generates unique output for each input For example simply converting the string to all lower case is not acceptable because then FooBar and Foobar would be indistinguishable derivePathInfo standard SiteURL see also standard",
          "hierarchy": "Web Routes TH",
          "module": "Web.Routes.TH",
          "name": "derivePathInfo'",
          "normalized": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
          "package": "web-routes-th",
          "partial": "Path Info'",
          "signature": "(String-\u003eString)-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:derivePathInfo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.TH",
          "name": "mkRoute",
          "package": "web-routes-th",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Web-Routes-TH.html#mkRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes TH",
          "module": "Web.Routes.TH",
          "name": "mkRoute",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "web-routes-th",
          "partial": "Route",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:mkRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe standard formatter\n\u003c/p\u003e\u003cp\u003eConverts \u003ccode\u003eCamelCase\u003c/code\u003e to \u003ccode\u003ecamel-case\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ederivePathInfo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederivePathInfo'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.TH",
          "name": "standard",
          "package": "web-routes-th",
          "signature": "String -\u003e String",
          "source": "src/Web-Routes-TH.html#standard",
          "type": "function"
        },
        "index": {
          "description": "the standard formatter Converts CamelCase to camel-case see also derivePathInfo and derivePathInfo",
          "hierarchy": "Web Routes TH",
          "module": "Web.Routes.TH",
          "name": "standard",
          "normalized": "String-\u003eString",
          "package": "web-routes-th",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-th/docs/Web-Routes-TH.html#v:standard"
      }
    }
  ]
]