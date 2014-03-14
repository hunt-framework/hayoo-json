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
        "word": "inserts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe internal workings of \u003ccode\u003einserts\u003c/code\u003e. In most cases you don't want to be\n digging around in this module, but it's useful if you want to somehow analyze\n or transform the \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThe usual caveat applies: this module is not a public API and is subject to\n modification without warning.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Template.Inserts.Internal",
          "name": "Internal",
          "package": "inserts",
          "source": "src/Text-Template-Inserts-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "The internal workings of inserts In most cases you don want to be digging around in this module but it useful if you want to somehow analyze or transform the Template type The usual caveat applies this module is not public API and is subject to modification without warning",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Internal",
          "package": "inserts",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGot\u003c/a\u003e\u003c/code\u003e is the \"purely \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\" \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e with \n \u003ccode\u003e[S.ByteString]\u003c/code\u003e as its \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e type. When both the left and\n right arguments to '(\u003ca\u003e*\u003c/a\u003e)' are \u003ccode\u003e\u003ca\u003eMiss\u003c/a\u003e\u003c/code\u003e their errors are \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003eed\n together.\n\u003c/p\u003e",
          "module": "Text.Template.Inserts.Internal",
          "name": "Got",
          "package": "inserts",
          "source": "src/Text-Template-Inserts-Internal.html#Got",
          "type": "data"
        },
        "index": {
          "description": "Got is the purely Applicative Either with S.ByteString as its Left type When both the left and right arguments to are Miss their errors are mappend ed together",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Got",
          "package": "inserts",
          "partial": "Got",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#t:Got"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Template",
          "package": "inserts",
          "source": "src/Text-Template-Inserts-Internal.html#Template",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Template",
          "package": "inserts",
          "partial": "Template",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e chunks are either \u003ccode\u003e\u003ca\u003eLiteral\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eHole\u003c/a\u003e\u003c/code\u003es to be filled by a \n runtime key lookup later.\n\u003c/p\u003e",
          "module": "Text.Template.Inserts.Internal",
          "name": "TemplateC",
          "package": "inserts",
          "source": "src/Text-Template-Inserts-Internal.html#TemplateC",
          "type": "data"
        },
        "index": {
          "description": "Template chunks are either Literal or Hole to be filled by runtime key lookup later",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "TemplateC",
          "package": "inserts",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#t:TemplateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Got",
          "package": "inserts",
          "signature": "Got a",
          "source": "src/Text-Template-Inserts-Internal.html#Got",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Got",
          "package": "inserts",
          "partial": "Got",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:Got"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Hole",
          "package": "inserts",
          "signature": "Hole ByteString",
          "source": "src/Text-Template-Inserts-Internal.html#TemplateC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Hole",
          "package": "inserts",
          "partial": "Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:Hole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Literal",
          "package": "inserts",
          "signature": "Literal Builder",
          "source": "src/Text-Template-Inserts-Internal.html#TemplateC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Literal",
          "package": "inserts",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Miss",
          "package": "inserts",
          "signature": "Miss (DList ByteString)",
          "source": "src/Text-Template-Inserts-Internal.html#Got",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Miss",
          "package": "inserts",
          "partial": "Miss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:Miss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "Template",
          "package": "inserts",
          "signature": "Template",
          "source": "src/Text-Template-Inserts-Internal.html#Template",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "Template",
          "package": "inserts",
          "partial": "Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "gotEither",
          "package": "inserts",
          "signature": "Got a -\u003e Either [ByteString] a",
          "source": "src/Text-Template-Inserts-Internal.html#gotEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "gotEither",
          "normalized": "Got a-\u003eEither[ByteString]a",
          "package": "inserts",
          "partial": "Either",
          "signature": "Got a-\u003eEither[ByteString]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:gotEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Template.Inserts.Internal\",\"Text.Template.Inserts\"]",
          "name": "parseTemplate",
          "package": "inserts",
          "signature": "ByteString -\u003e Either String Template",
          "source": "src/Text-Template-Inserts-Internal.html#parseTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:parseTemplate\",\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts.html#v:parseTemplate\"]"
        },
        "index": {
          "description": "Try to parse ByteString as Template",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "parseTemplate",
          "normalized": "ByteString-\u003eEither String Template",
          "package": "inserts",
          "partial": "Template",
          "signature": "ByteString-\u003eEither String Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:parseTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs either the successfully interpolated template or the list of\n missing keys. For fast operation, try building the lookup function using\n \u003ccode\u003eunordered-containers\u003c/code\u003e \u003ccode\u003eHashMap\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Text.Template.Inserts.Internal\",\"Text.Template.Inserts\"]",
          "name": "runTemplate",
          "package": "inserts",
          "signature": "(ByteString -\u003e Maybe ByteString) -\u003e Template -\u003e Either [ByteString] ByteString",
          "source": "src/Text-Template-Inserts-Internal.html#runTemplate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:runTemplate\",\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts.html#v:runTemplate\"]"
        },
        "index": {
          "description": "Outputs either the successfully interpolated template or the list of missing keys For fast operation try building the lookup function using unordered-containers HashMap",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "runTemplate",
          "normalized": "(ByteString-\u003eMaybe ByteString)-\u003eTemplate-\u003eEither[ByteString]ByteString",
          "package": "inserts",
          "partial": "Template",
          "signature": "(ByteString-\u003eMaybe ByteString)-\u003eTemplate-\u003eEither[ByteString]ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:runTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can build a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e much more quickly, so if you need\n to quickly show your templates then this might be nicer than using \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n directly.\n\u003c/p\u003e",
          "module": "Text.Template.Inserts.Internal",
          "name": "showTemplate",
          "package": "inserts",
          "signature": "Template -\u003e ByteString",
          "source": "src/Text-Template-Inserts-Internal.html#showTemplate",
          "type": "function"
        },
        "index": {
          "description": "We can build lazy ByteString much more quickly so if you need to quickly show your templates then this might be nicer than using show directly",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "showTemplate",
          "normalized": "Template-\u003eByteString",
          "package": "inserts",
          "partial": "Template",
          "signature": "Template-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:showTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eattoparsec\u003c/code\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003es. This is useful if you'd\n like to embed \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003es into a more sophisticated, parseable type of\n your own.\n\u003c/p\u003e",
          "module": "[\"Text.Template.Inserts.Internal\",\"Text.Template.Inserts\"]",
          "name": "templateParser",
          "package": "inserts",
          "signature": "Parser Template",
          "source": "src/Text-Template-Inserts-Internal.html#templateParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:templateParser\",\"http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts.html#v:templateParser\"]"
        },
        "index": {
          "description": "An attoparsec Parser for Template This is useful if you like to embed Template into more sophisticated parseable type of your own",
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "templateParser",
          "package": "inserts",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:templateParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts.Internal",
          "name": "unTemplate",
          "package": "inserts",
          "signature": "DList TemplateC",
          "source": "src/Text-Template-Inserts-Internal.html#Template",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Template Inserts Internal",
          "module": "Text.Template.Inserts.Internal",
          "name": "unTemplate",
          "package": "inserts",
          "partial": "Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts-Internal.html#v:unTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompletely trivial, interpolation-only \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003es; for when you want an API\n that fits on a business card. \u003ca\u003eText.Template.Inserts\u003c/a\u003e implements a\n subset of Mustache syntax. It uses template strings with named holes\n deliminted by \"mustaches\":\n\u003c/p\u003e\u003cpre\u003e import Data.HashMap.Strict as Map\n import Data.ByteString     as S\n\n context :: HashMap ByteString ByteString\n context = Map.fromList [ (\"country\", \"Morocco\")\n                        , (\"favoriteFruit\", \"bananas\")\n                        ]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunTemplate (flip Map.lookup context) \"I live in {{country}} and love {{favoriteFruit}}.\"\n\u003c/code\u003e\u003c/strong\u003eRight \"I live in Morocco and love bananas\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunTemplate (flip Map.lookup context) \"My address is {{ address }}\"\n\u003c/code\u003e\u003c/strong\u003eLeft [\"address\"]\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003eText.Template.Inserts\u003c/a\u003e seeks to be as unsurprising and simple as\n possible sacrificing all kinds of niceities. Sometimes though, all you\n need is obvious, trivial string interpolation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Template.Inserts",
          "name": "Inserts",
          "package": "inserts",
          "source": "src/Text-Template-Inserts.html",
          "type": "module"
        },
        "index": {
          "description": "Completely trivial interpolation-only Template for when you want an API that fits on business card Text.Template.Inserts implements subset of Mustache syntax It uses template strings with named holes deliminted by mustaches import Data.HashMap.Strict as Map import Data.ByteString as context HashMap ByteString ByteString context Map.fromList country Morocco favoriteFruit bananas runTemplate flip Map.lookup context live in country and love favoriteFruit Right live in Morocco and love bananas runTemplate flip Map.lookup context My address is address Left address Text.Template.Inserts seeks to be as unsurprising and simple as possible sacrificing all kinds of niceities Sometimes though all you need is obvious trivial string interpolation",
          "hierarchy": "Text Template Inserts",
          "module": "Text.Template.Inserts",
          "name": "Inserts",
          "package": "inserts",
          "partial": "Inserts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Template.Inserts",
          "name": "Template",
          "package": "inserts",
          "source": "src/Text-Template-Inserts-Internal.html#Template",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Template Inserts",
          "module": "Text.Template.Inserts",
          "name": "Template",
          "package": "inserts",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/inserts/docs/Text-Template-Inserts.html#t:Template"
      }
    }
  ]
]