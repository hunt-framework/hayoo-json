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
        "word": "uri-template"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURI templates and their expansion. For details\n  (and up-to-date specs), see \n    http:\u003cem/\u003ebitworking.org\u003cem\u003eprojects\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAlso implements the OpenSearch 1.1 style with \u003ccode\u003e?\u003c/code\u003e suffix chars\n  + support for namespace prefixes {xmlns:foo?} =\u003e xmlns:bar\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.URI.Template",
          "name": "Template",
          "package": "uri-template",
          "source": "src/Network-URI-Template.html",
          "type": "module"
        },
        "index": {
          "description": "URI templates and their expansion For details and up-to-date specs see http bitworking.org projects Also implements the OpenSearch style with suffix chars support for namespace prefixes xmlns foo xmlns bar",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "Template",
          "package": "uri-template",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTemplateEnv\u003c/code\u003e holds the key,value mapping for the expansion\n context for a URI template.\n\u003c/p\u003e",
          "module": "Network.URI.Template",
          "name": "TemplateEnv",
          "package": "uri-template",
          "source": "src/Network-URI-Template.html#TemplateEnv",
          "type": "data"
        },
        "index": {
          "description": "TemplateEnv holds the key value mapping for the expansion context for URI template",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "TemplateEnv",
          "package": "uri-template",
          "partial": "Template Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#t:TemplateEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Template",
          "name": "URIString",
          "package": "uri-template",
          "source": "src/Network-URI-Template.html#URIString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "URIString",
          "package": "uri-template",
          "partial": "URIString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#t:URIString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URI.Template",
          "name": "URITemplate",
          "package": "uri-template",
          "source": "src/Network-URI-Template.html#URITemplate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "URITemplate",
          "package": "uri-template",
          "partial": "URITemplate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#t:URITemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddListToEnv key vals env\u003c/code\u003e expands the template environment \u003ccode\u003eenv\u003c/code\u003e\n with a list-valued key,value(s) pair.\n\u003c/p\u003e",
          "module": "Network.URI.Template",
          "name": "addListToEnv",
          "package": "uri-template",
          "signature": "String -\u003e [String] -\u003e TemplateEnv -\u003e TemplateEnv",
          "source": "src/Network-URI-Template.html#addListToEnv",
          "type": "function"
        },
        "index": {
          "description": "addListToEnv key vals env expands the template environment env with list-valued key value pair",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "addListToEnv",
          "normalized": "String-\u003e[String]-\u003eTemplateEnv-\u003eTemplateEnv",
          "package": "uri-template",
          "partial": "List To Env",
          "signature": "String-\u003e[String]-\u003eTemplateEnv-\u003eTemplateEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#v:addListToEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddToEnv key value env\u003c/code\u003e augments \u003ccode\u003eenv\u003c/code\u003e with a new\n key,value pair.\n\u003c/p\u003e",
          "module": "Network.URI.Template",
          "name": "addToEnv",
          "package": "uri-template",
          "signature": "String -\u003e String -\u003e TemplateEnv -\u003e TemplateEnv",
          "source": "src/Network-URI-Template.html#addToEnv",
          "type": "function"
        },
        "index": {
          "description": "addToEnv key value env augments env with new key value pair",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "addToEnv",
          "normalized": "String-\u003eString-\u003eTemplateEnv-\u003eTemplateEnv",
          "package": "uri-template",
          "partial": "To Env",
          "signature": "String-\u003eString-\u003eTemplateEnv-\u003eTemplateEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#v:addToEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexpand tenv tpl\u003c/code\u003e performs template expansion on URL template \u003ccode\u003etpl\u003c/code\u003e wrt\n \u003ccode\u003etenv\u003c/code\u003e. The result contains the expansion, _but_ leaving unbound template\n variables intact.\n\u003c/p\u003e",
          "module": "Network.URI.Template",
          "name": "expand",
          "package": "uri-template",
          "signature": "TemplateEnv -\u003e URITemplate -\u003e URIString",
          "source": "src/Network-URI-Template.html#expand",
          "type": "function"
        },
        "index": {
          "description": "expand tenv tpl performs template expansion on URL template tpl wrt tenv The result contains the expansion but leaving unbound template variables intact",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "expand",
          "normalized": "TemplateEnv-\u003eURITemplate-\u003eURIString",
          "package": "uri-template",
          "signature": "TemplateEnv-\u003eURITemplate-\u003eURIString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new, empty \u003ccode\u003e\u003ca\u003eTemplateEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.URI.Template",
          "name": "newEnv",
          "package": "uri-template",
          "signature": "TemplateEnv",
          "source": "src/Network-URI-Template.html#newEnv",
          "type": "function"
        },
        "index": {
          "description": "Construct new empty TemplateEnv",
          "hierarchy": "Network URI Template",
          "module": "Network.URI.Template",
          "name": "newEnv",
          "package": "uri-template",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uri-template/docs/Network-URI-Template.html#v:newEnv"
      }
    }
  ]
]