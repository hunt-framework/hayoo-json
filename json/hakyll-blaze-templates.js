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
        "word": "hakyll-blaze-templates"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Blaze",
          "name": "Blaze",
          "package": "hakyll-blaze-templates",
          "source": "src/Hakyll-Web-Template-Blaze.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "Blaze",
          "package": "hakyll-blaze-templates",
          "partial": "Blaze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Blaze",
          "name": "Template",
          "package": "hakyll-blaze-templates",
          "source": "src/Hakyll-Web-Template-Blaze.html#Template",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "Template",
          "package": "hakyll-blaze-templates",
          "partial": "Template",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplate",
          "package": "hakyll-blaze-templates",
          "signature": "Template Compiler String-\u003e Context String-\u003e Item String-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplate",
          "normalized": "Template Compiler String-\u003eContext String-\u003eItem String-\u003eCompiler(Item String)",
          "package": "hakyll-blaze-templates",
          "partial": "Template",
          "signature": "Template Compiler String-\u003eContext String-\u003eItem String-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:applyTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplateList",
          "package": "hakyll-blaze-templates",
          "signature": "Template Compiler String -\u003e Context String -\u003e [Item String] -\u003e Compiler String",
          "source": "src/Hakyll-Web-Template-Blaze.html#applyTemplateList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplateList",
          "normalized": "Template Compiler String-\u003eContext String-\u003e[Item String]-\u003eCompiler String",
          "package": "hakyll-blaze-templates",
          "partial": "Template List",
          "signature": "Template Compiler String-\u003eContext String-\u003e[Item String]-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:applyTemplateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplateListWith",
          "package": "hakyll-blaze-templates",
          "signature": "String-\u003e Template Compiler String-\u003e Context String-\u003e [Item String]-\u003e Compiler String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "applyTemplateListWith",
          "normalized": "String-\u003eTemplate Compiler String-\u003eContext String-\u003e[Item String]-\u003eCompiler String",
          "package": "hakyll-blaze-templates",
          "partial": "Template List With",
          "signature": "String-\u003eTemplate Compiler String-\u003eContext String-\u003e[Item String]-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:applyTemplateListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an HTML snippet from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e without escaping\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "preEscapedString",
          "package": "hakyll-blaze-templates",
          "signature": "String-\u003e Markup",
          "type": "function"
        },
        "index": {
          "description": "Create an HTML snippet from String without escaping",
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "preEscapedString",
          "normalized": "String-\u003eMarkup",
          "package": "hakyll-blaze-templates",
          "partial": "Escaped String",
          "signature": "String-\u003eMarkup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:preEscapedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epreEscapedToHtml specialised to String\n Also safeToHtml sounds better than preEscapedToHtml\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "safeToHtml",
          "package": "hakyll-blaze-templates",
          "signature": "String -\u003e Html",
          "source": "src/Hakyll-Web-Template-Blaze.html#safeToHtml",
          "type": "function"
        },
        "index": {
          "description": "preEscapedToHtml specialised to String Also safeToHtml sounds better than preEscapedToHtml",
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "safeToHtml",
          "normalized": "String-\u003eHtml",
          "package": "hakyll-blaze-templates",
          "partial": "To Html",
          "signature": "String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:safeToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an HTML snippet from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "string",
          "package": "hakyll-blaze-templates",
          "signature": "String-\u003e Markup",
          "type": "function"
        },
        "index": {
          "description": "Create an HTML snippet from String",
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "string",
          "normalized": "String-\u003eMarkup",
          "package": "hakyll-blaze-templates",
          "signature": "String-\u003eMarkup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoHtml specialised to String.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "toHtml",
          "package": "hakyll-blaze-templates",
          "signature": "String -\u003e Html",
          "source": "src/Hakyll-Web-Template-Blaze.html#toHtml",
          "type": "function"
        },
        "index": {
          "description": "toHtml specialised to String",
          "hierarchy": "Hakyll Web Template Blaze",
          "module": "Hakyll.Web.Template.Blaze",
          "name": "toHtml",
          "normalized": "String-\u003eHtml",
          "package": "hakyll-blaze-templates",
          "partial": "Html",
          "signature": "String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-blaze-templates/docs/Hakyll-Web-Template-Blaze.html#v:toHtml"
      }
    }
  ]
]