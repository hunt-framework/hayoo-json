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
        "word": "template"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple string substitution library that supports \"$\"-based\n substitution. Substitution uses the following rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"$$\" is an escape; it is replaced with a single \"$\".\n\u003c/li\u003e\u003cli\u003e \"$identifier\" names a substitution placeholder matching a\n      mapping key of \"identifier\". \"identifier\" must spell a\n      Haskell identifier. The first non-identifier character after the\n      \"$\" character terminates this placeholder specification.\n\u003c/li\u003e\u003cli\u003e \"${identifier}\" is equivalent to \"$identifier\". It is\n      required when valid identifier characters follow the placeholder\n      but are not part of the placeholder, such as\n      \"${noun}ification\".\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny other appearance of \"$\" in the string will result in an\n \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e being raised.\n\u003c/p\u003e\u003cp\u003eIf you render the same template multiple times it's faster to first\n convert it to a more efficient representation using \u003ccode\u003e\u003ca\u003etemplate\u003c/a\u003e\u003c/code\u003e and\n then render it using \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e. In fact, all that \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e does\n is to combine these two steps.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.Template",
          "name": "Template",
          "package": "template",
          "source": "src/Data-Text-Template.html",
          "type": "module"
        },
        "index": {
          "description": "simple string substitution library that supports based substitution Substitution uses the following rules is an escape it is replaced with single identifier names substitution placeholder matching mapping key of identifier identifier must spell Haskell identifier The first non-identifier character after the character terminates this placeholder specification identifier is equivalent to identifier It is required when valid identifier characters follow the placeholder but are not part of the placeholder such as noun ification Any other appearance of in the string will result in an error being raised If you render the same template multiple times it faster to first convert it to more efficient representation using template and then render it using render In fact all that substitute does is to combine these two steps",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "Template",
          "package": "template",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from placeholders in the template to values.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "Context",
          "package": "template",
          "source": "src/Data-Text-Template.html#Context",
          "type": "type"
        },
        "index": {
          "description": "mapping from placeholders in the template to values",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "Context",
          "package": "template",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, but with an applicative lookup function.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "ContextA",
          "package": "template",
          "source": "src/Data-Text-Template.html#ContextA",
          "type": "type"
        },
        "index": {
          "description": "Like Context but with an applicative lookup function",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "ContextA",
          "package": "template",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#t:ContextA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e template, supporting efficient\n rendering.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "Template",
          "package": "template",
          "source": "src/Data-Text-Template.html#Template",
          "type": "data"
        },
        "index": {
          "description": "representation of Text template supporting efficient rendering",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "Template",
          "package": "template",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the template substitution, returning a new \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "render",
          "package": "template",
          "signature": "Template -\u003e Context -\u003e Text",
          "source": "src/Data-Text-Template.html#render",
          "type": "function"
        },
        "index": {
          "description": "Perform the template substitution returning new Text",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "render",
          "normalized": "Template-\u003eContext-\u003eText",
          "package": "template",
          "signature": "Template-\u003eContext-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e, but allows the lookup to have side effects.  The\n lookups are performed in order that they are needed to generate the\n resulting text.\n\u003c/p\u003e\u003cp\u003eYou can use this e.g. to report errors when a lookup cannot be made\n successfully.  For example, given a list \u003ccode\u003ectx\u003c/code\u003e of key-value pairs\n and a \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etmpl\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e renderA tmpl (flip lookup ctx)\n\u003c/pre\u003e\u003cp\u003ewill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if any of the placeholders in the template\n don't appear in \u003ccode\u003ectx\u003c/code\u003e and \u003ccode\u003eJust text\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "renderA",
          "package": "template",
          "signature": "Template -\u003e ContextA f -\u003e f Text",
          "source": "src/Data-Text-Template.html#renderA",
          "type": "function"
        },
        "index": {
          "description": "Like render but allows the lookup to have side effects The lookups are performed in order that they are needed to generate the resulting text You can use this e.g to report errors when lookup cannot be made successfully For example given list ctx of key-value pairs and Template tmpl renderA tmpl flip lookup ctx will return Nothing if any of the placeholders in the template don appear in ctx and Just text otherwise",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "renderA",
          "normalized": "Template-\u003eContextA a-\u003ea Text",
          "package": "template",
          "signature": "Template-\u003eContextA f-\u003ef Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:renderA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the template string.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "showTemplate",
          "package": "template",
          "signature": "Template -\u003e Text",
          "source": "src/Data-Text-Template.html#showTemplate",
          "type": "function"
        },
        "index": {
          "description": "Show the template string",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "showTemplate",
          "normalized": "Template-\u003eText",
          "package": "template",
          "partial": "Template",
          "signature": "Template-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:showTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the template substitution, returning a new \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  A\n malformed template string will raise an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.  Note that\n\u003c/p\u003e\u003cpre\u003e substitute tmpl ctx == render (template tmpl) ctx\n\u003c/pre\u003e",
          "module": "Data.Text.Template",
          "name": "substitute",
          "package": "template",
          "signature": "Text -\u003e Context -\u003e Text",
          "source": "src/Data-Text-Template.html#substitute",
          "type": "function"
        },
        "index": {
          "description": "Perform the template substitution returning new Text malformed template string will raise an error Note that substitute tmpl ctx render template tmpl ctx",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "substitute",
          "normalized": "Text-\u003eContext-\u003eText",
          "package": "template",
          "signature": "Text-\u003eContext-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the template substitution in the given \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e,\n returning a new \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. Note that\n\u003c/p\u003e\u003cpre\u003e substituteA tmpl ctx == renderA (template tmpl) ctx\n\u003c/pre\u003e",
          "module": "Data.Text.Template",
          "name": "substituteA",
          "package": "template",
          "signature": "Text -\u003e ContextA f -\u003e f Text",
          "source": "src/Data-Text-Template.html#substituteA",
          "type": "function"
        },
        "index": {
          "description": "Perform the template substitution in the given Applicative returning new Text Note that substituteA tmpl ctx renderA template tmpl ctx",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "substituteA",
          "normalized": "Text-\u003eContextA a-\u003ea Text",
          "package": "template",
          "signature": "Text-\u003eContextA f-\u003ef Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:substituteA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a template from a template string.  A malformed template\n string will raise an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "template",
          "package": "template",
          "signature": "Text -\u003e Template",
          "source": "src/Data-Text-Template.html#template",
          "type": "function"
        },
        "index": {
          "description": "Create template from template string malformed template string will raise an error",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "template",
          "normalized": "Text-\u003eTemplate",
          "package": "template",
          "signature": "Text-\u003eTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a template from a template string.  A malformed template\n string will cause \u003ccode\u003e\u003ca\u003etemplateSafe\u003c/a\u003e\u003c/code\u003e to return \u003ccode\u003eLeft (row, col)\u003c/code\u003e, where\n \u003ccode\u003erow\u003c/code\u003e starts at 1 and \u003ccode\u003ecol\u003c/code\u003e at 0.\n\u003c/p\u003e",
          "module": "Data.Text.Template",
          "name": "templateSafe",
          "package": "template",
          "signature": "Text -\u003e Either (Int, Int) Template",
          "source": "src/Data-Text-Template.html#templateSafe",
          "type": "function"
        },
        "index": {
          "description": "Create template from template string malformed template string will cause templateSafe to return Left row col where row starts at and col at",
          "hierarchy": "Data Text Template",
          "module": "Data.Text.Template",
          "name": "templateSafe",
          "normalized": "Text-\u003eEither(Int,Int)Template",
          "package": "template",
          "partial": "Safe",
          "signature": "Text-\u003eEither(Int,Int)Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/template/docs/Data-Text-Template.html#v:templateSafe"
      }
    }
  ]
]