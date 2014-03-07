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
        "word": "formlets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "source": "src/Text-Blaze-Html5-Formlets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "partial": "Formlets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Html5Form",
          "package": "formlets",
          "source": "src/Text-Blaze-Html5-Formlets.html#Html5Form",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Html5Form",
          "package": "formlets",
          "partial": "Html Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#t:Html5Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Html5Formlet",
          "package": "formlets",
          "source": "src/Text-Blaze-Html5-Formlets.html#Html5Formlet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "Html5Formlet",
          "package": "formlets",
          "partial": "Html Formlet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#t:Html5Formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA checkbox with an optional default value\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "signature": "Html5Formlet m Bool",
          "source": "src/Text-Blaze-Html5-Formlets.html#checkbox",
          "type": "function"
        },
        "index": {
          "description": "checkbox with an optional default value",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:checkbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn radio choice for Enums\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "enumRadio",
          "package": "formlets",
          "signature": "[(a, String)] -\u003e Html5Formlet m a",
          "source": "src/Text-Blaze-Html5-Formlets.html#enumRadio",
          "type": "function"
        },
        "index": {
          "description": "An radio choice for Enums",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "enumRadio",
          "normalized": "[(a,String)]-\u003eHtml Formlet b a",
          "package": "formlets",
          "partial": "Radio",
          "signature": "[(a,String)]-\u003eHtml Formlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:enumRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file upload form\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "file",
          "package": "formlets",
          "signature": "Html5Form m File",
          "source": "src/Text-Blaze-Html5-Formlets.html#file",
          "type": "function"
        },
        "index": {
          "description": "file upload form",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "file",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hidden input field\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "hidden",
          "package": "formlets",
          "signature": "Html5Formlet m String",
          "source": "src/Text-Blaze-Html5-Formlets.html#hidden",
          "type": "function"
        },
        "index": {
          "description": "hidden input field",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "hidden",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input field with an optional value\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "input",
          "package": "formlets",
          "signature": "Html5Formlet m String",
          "source": "src/Text-Blaze-Html5-Formlets.html#input",
          "type": "function"
        },
        "index": {
          "description": "An input field with an optional value",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "input",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA validated integer component\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "signature": "Html5Formlet m Integer",
          "source": "src/Text-Blaze-Html5-Formlets.html#inputInteger",
          "type": "function"
        },
        "index": {
          "description": "validated integer component",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:inputInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "label",
          "package": "formlets",
          "signature": "String -\u003e Form Html m ()",
          "source": "src/Text-Blaze-Html5-Formlets.html#label",
          "type": "function"
        },
        "index": {
          "description": "label",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "label",
          "normalized": "String-\u003eForm Html a()",
          "package": "formlets",
          "signature": "String-\u003eForm Html m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA password field with an optional value\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "password",
          "package": "formlets",
          "signature": "Html5Formlet m String",
          "source": "src/Text-Blaze-Html5-Formlets.html#password",
          "type": "function"
        },
        "index": {
          "description": "password field with an optional value",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "password",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA radio choice\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "radio",
          "package": "formlets",
          "signature": "[(String, String)] -\u003e Html5Formlet m String",
          "source": "src/Text-Blaze-Html5-Formlets.html#radio",
          "type": "function"
        },
        "index": {
          "description": "radio choice",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "radio",
          "normalized": "[(String,String)]-\u003eHtml Formlet a String",
          "package": "formlets",
          "signature": "[(String,String)]-\u003eHtml Formlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:radio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for anything that is an instance of Eq\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "select",
          "package": "formlets",
          "signature": "[(a, Html)]-\u003e Html5Formlet m a",
          "type": "function"
        },
        "index": {
          "description": "drop-down for anything that is an instance of Eq",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "select",
          "normalized": "[(a,Html)]-\u003eHtml Formlet b a",
          "package": "formlets",
          "signature": "[(a,Html)]-\u003eHtml Formlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a helper function to generate select boxes\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "selectHtml",
          "package": "formlets",
          "signature": "[(String, Html)]-\u003e String-\u003e String-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "This is helper function to generate select boxes",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "selectHtml",
          "normalized": "[(String,Html)]-\u003eString-\u003eString-\u003eHtml",
          "package": "formlets",
          "partial": "Html",
          "signature": "[(String,Html)]-\u003eString-\u003eString-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:selectHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for selecting values\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "selectRaw",
          "package": "formlets",
          "signature": "[(String, Html)]-\u003e Html5Formlet m String",
          "type": "function"
        },
        "index": {
          "description": "drop-down for selecting values",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "selectRaw",
          "normalized": "[(String,Html)]-\u003eHtml Formlet a String",
          "package": "formlets",
          "partial": "Raw",
          "signature": "[(String,Html)]-\u003eHtml Formlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:selectRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA textarea with optional rows and columns, and an optional value\n\u003c/p\u003e",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "textarea",
          "package": "formlets",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e Html5Formlet m String",
          "source": "src/Text-Blaze-Html5-Formlets.html#textarea",
          "type": "function"
        },
        "index": {
          "description": "textarea with optional rows and columns and an optional value",
          "hierarchy": "Text Blaze Html5 Formlets",
          "module": "Text.Blaze.Html5.Formlets",
          "name": "textarea",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eHtml Formlet a String",
          "package": "formlets",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eHtml Formlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Blaze-Html5-Formlets.html#v:textarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets.MassInput",
          "name": "MassInput",
          "package": "formlets",
          "source": "src/Text-Formlets-MassInput.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Formlets MassInput",
          "module": "Text.Formlets.MassInput",
          "name": "MassInput",
          "package": "formlets",
          "partial": "Mass Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets-MassInput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets.MassInput",
          "name": "massInput",
          "package": "formlets",
          "signature": "XHtmlFormlet m a-\u003e (Html -\u003e Html)-\u003e (Html -\u003e Html)-\u003e XHtmlFormlet m [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets MassInput",
          "module": "Text.Formlets.MassInput",
          "name": "massInput",
          "normalized": "XHtmlFormlet a b-\u003e(Html-\u003eHtml)-\u003e(Html-\u003eHtml)-\u003eXHtmlFormlet a[b]",
          "package": "formlets",
          "partial": "Input",
          "signature": "XHtmlFormlet m a-\u003e(Html-\u003eHtml)-\u003e(Html-\u003eHtml)-\u003eXHtmlFormlet m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets-MassInput.html#v:massInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "source": "src/Text-Formlets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "partial": "Formlets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ContentType",
          "package": "formlets",
          "source": "src/Text-Formlets.html#ContentType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ContentType",
          "package": "formlets",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Env",
          "package": "formlets",
          "source": "src/Text-Formlets.html#Env",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Env",
          "package": "formlets",
          "partial": "Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "File",
          "package": "formlets",
          "source": "src/Text-Formlets.html#File",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "File",
          "package": "formlets",
          "partial": "File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Form",
          "package": "formlets",
          "source": "src/Text-Formlets.html#Form",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Form",
          "package": "formlets",
          "partial": "Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "FormContentType",
          "package": "formlets",
          "source": "src/Text-Formlets.html#FormContentType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "FormContentType",
          "package": "formlets",
          "partial": "Form Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:FormContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Formlet",
          "package": "formlets",
          "source": "src/Text-Formlets.html#Formlet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Formlet",
          "package": "formlets",
          "partial": "Formlet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:Formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Rect",
          "package": "formlets",
          "source": "src/Text-Formlets.html#Rect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Rect",
          "package": "formlets",
          "partial": "Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#t:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ContentType",
          "package": "formlets",
          "signature": "ContentType",
          "source": "src/Text-Formlets.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ContentType",
          "package": "formlets",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "File",
          "package": "formlets",
          "signature": "File",
          "source": "src/Text-Formlets.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "File",
          "package": "formlets",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "MultiPart",
          "package": "formlets",
          "signature": "MultiPart",
          "source": "src/Text-Formlets.html#FormContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "MultiPart",
          "package": "formlets",
          "partial": "Multi Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:MultiPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "Rect",
          "package": "formlets",
          "signature": "Rect",
          "source": "src/Text-Formlets.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "Rect",
          "package": "formlets",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "UrlEncoded",
          "package": "formlets",
          "signature": "UrlEncoded",
          "source": "src/Text-Formlets.html#FormContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "UrlEncoded",
          "package": "formlets",
          "partial": "Url Encoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:UrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a condition or convert a result\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "check",
          "package": "formlets",
          "signature": "Form xml m a -\u003e (a -\u003e Failing b) -\u003e Form xml m b",
          "source": "src/Text-Formlets.html#check",
          "type": "function"
        },
        "index": {
          "description": "Check condition or convert result",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "check",
          "normalized": "Form a b c-\u003e(c-\u003eFailing d)-\u003eForm a b d",
          "package": "formlets",
          "signature": "Form xml m a-\u003e(a-\u003eFailing b)-\u003eForm xml m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadically check a condition or convert a result\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "checkM",
          "package": "formlets",
          "signature": "Form xml m a -\u003e (a -\u003e m (Failing b)) -\u003e Form xml m b",
          "source": "src/Text-Formlets.html#checkM",
          "type": "function"
        },
        "index": {
          "description": "Monadically check condition or convert result",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "checkM",
          "normalized": "Form a b c-\u003e(c-\u003eb(Failing d))-\u003eForm a b d",
          "package": "formlets",
          "signature": "Form xml m a-\u003e(a-\u003em(Failing b))-\u003eForm xml m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:checkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "content",
          "package": "formlets",
          "signature": "ByteString",
          "source": "src/Text-Formlets.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "content",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "contentType",
          "package": "formlets",
          "signature": "ContentType",
          "source": "src/Text-Formlets.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "contentType",
          "package": "formlets",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:contentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ctParameters",
          "package": "formlets",
          "signature": "[(String, String)]",
          "source": "src/Text-Formlets.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ctParameters",
          "normalized": "[(String,String)]",
          "package": "formlets",
          "partial": "Parameters",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ctParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ctSubtype",
          "package": "formlets",
          "signature": "String",
          "source": "src/Text-Formlets.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ctSubtype",
          "package": "formlets",
          "partial": "Subtype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ctSubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ctType",
          "package": "formlets",
          "signature": "String",
          "source": "src/Text-Formlets.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ctType",
          "package": "formlets",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ctType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a predicate to a value and return FR.Success or FR.Failure as appropriate\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "ensure",
          "package": "formlets",
          "signature": "(a -\u003e Bool)-\u003e String-\u003e a-\u003e Failing a",
          "type": "function"
        },
        "index": {
          "description": "Apply predicate to value and return FR.Success or FR.Failure as appropriate",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ensure",
          "normalized": "(a-\u003eBool)-\u003eString-\u003ea-\u003eFailing a",
          "package": "formlets",
          "signature": "(a-\u003eBool)-\u003eString-\u003ea-\u003eFailing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "ensureM",
          "package": "formlets",
          "signature": "(a -\u003e m Bool)-\u003e String-\u003e a-\u003e m (Failing a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ensureM",
          "normalized": "(a-\u003eb Bool)-\u003eString-\u003ea-\u003eb(Failing a)",
          "package": "formlets",
          "signature": "(a-\u003em Bool)-\u003eString-\u003ea-\u003em(Failing a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ensureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply multiple predicates to a value, return FR.Success or all the FR.Failure messages\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "ensures",
          "package": "formlets",
          "signature": "[(a -\u003e Bool, String)]-\u003e a-\u003e Failing a",
          "type": "function"
        },
        "index": {
          "description": "Apply multiple predicates to value return FR.Success or all the FR.Failure messages",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "ensures",
          "normalized": "[(a-\u003eBool,String)]-\u003ea-\u003eFailing a",
          "package": "formlets",
          "signature": "[(a-\u003eBool,String)]-\u003ea-\u003eFailing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:ensures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "fileName",
          "package": "formlets",
          "signature": "String",
          "source": "src/Text-Formlets.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "fileName",
          "package": "formlets",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "fmapFst",
          "package": "formlets",
          "signature": "(t -\u003e t1) -\u003e (t, t2) -\u003e (t1, t2)",
          "source": "src/Text-Formlets.html#fmapFst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "fmapFst",
          "normalized": "(a-\u003ea)-\u003e(a,a)-\u003e(a,a)",
          "package": "formlets",
          "partial": "Fst",
          "signature": "(t-\u003et)-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:fmapFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a form control\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einput'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoptionalInput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egeneralInputMulti\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "generalInput",
          "package": "formlets",
          "signature": "(String -\u003e Maybe String -\u003e xml)-\u003e Form xml m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "generate form control see also input optionalInput generalInputMulti",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "generalInput",
          "normalized": "(String-\u003eMaybe String-\u003ea)-\u003eForm a b(Maybe String)",
          "package": "formlets",
          "partial": "Input",
          "signature": "(String-\u003eMaybe String-\u003exml)-\u003eForm xml m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:generalInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a form control which can return multiple values\n\u003c/p\u003e\u003cp\u003eUseful for controls such as checkboxes and multiple select .\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einput'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoptionalInput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egeneralInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "generalInputMulti",
          "package": "formlets",
          "signature": "(String -\u003e [String] -\u003e xml) -\u003e Form xml m [String]",
          "source": "src/Text-Formlets.html#generalInputMulti",
          "type": "function"
        },
        "index": {
          "description": "generate form control which can return multiple values Useful for controls such as checkboxes and multiple select see also input optionalInput generalInput",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "generalInputMulti",
          "normalized": "(String-\u003e[String]-\u003ea)-\u003eForm a b[String]",
          "package": "formlets",
          "partial": "Input Multi",
          "signature": "(String-\u003e[String]-\u003exml)-\u003eForm xml m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:generalInputMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for genereting input components based forms.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003eoptionalInput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egeneralInput\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egeneralInputMulti\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "input'",
          "package": "formlets",
          "signature": "(String -\u003e String -\u003e xml)-\u003e Maybe String-\u003e Form xml m String",
          "type": "function"
        },
        "index": {
          "description": "Helper function for genereting input components based forms see also optionalInput generalInput and generalInputMulti",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "input'",
          "normalized": "(String-\u003eString-\u003ea)-\u003eMaybe String-\u003eForm a b String",
          "package": "formlets",
          "signature": "(String-\u003eString-\u003exml)-\u003eMaybe String-\u003eForm xml m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:input-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA File input widget.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "inputFile",
          "package": "formlets",
          "signature": "(String -\u003e xml)-\u003e Form xml m File",
          "type": "function"
        },
        "index": {
          "description": "File input widget",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "inputFile",
          "normalized": "(String-\u003ea)-\u003eForm a b File",
          "package": "formlets",
          "partial": "File",
          "signature": "(String-\u003exml)-\u003eForm xml m File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:inputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeprecated. See \u003ccode\u003e\u003ca\u003einput'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "inputM'",
          "package": "formlets",
          "signature": "(String -\u003e String -\u003e xml) -\u003e Maybe String -\u003e Form xml m String",
          "source": "src/Text-Formlets.html#inputM%27",
          "type": "function"
        },
        "index": {
          "description": "deprecated See input",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "inputM'",
          "normalized": "(String-\u003eString-\u003ea)-\u003eMaybe String-\u003eForm a b String",
          "package": "formlets",
          "partial": "M'",
          "signature": "(String-\u003eString-\u003exml)-\u003eMaybe String-\u003eForm xml m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:inputM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generates a single (or more) forms for a, and a parser function for a list of a's.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "massInput",
          "package": "formlets",
          "signature": "Formlet xml m a-\u003e Formlet xml m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generates single or more forms for and parser function for list of",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "massInput",
          "normalized": "Formlet a b c-\u003eFormlet a b[c]",
          "package": "formlets",
          "partial": "Input",
          "signature": "Formlet xml m a-\u003eFormlet xml m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:massInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns Nothing if the result is the empty String.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "nothingIfNull",
          "package": "formlets",
          "signature": "Form xml m String -\u003e Form xml m (Maybe String)",
          "source": "src/Text-Formlets.html#nothingIfNull",
          "type": "function"
        },
        "index": {
          "description": "Returns Nothing if the result is the empty String",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "nothingIfNull",
          "normalized": "Form a b String-\u003eForm a b(Maybe String)",
          "package": "formlets",
          "partial": "If Null",
          "signature": "Form xml m String-\u003eForm xml m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:nothingIfNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a form control which is not required to be successful\n\u003c/p\u003e\u003cp\u003eThere is no way to provide a default value, because that would\n result in the control being successful.\n\u003c/p\u003e\u003cp\u003eFor more information on successful controls see:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.w3.org/TR/html401/interact/forms.html#successful-controls\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einput'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egeneralInput\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egeneralInputMulti\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "optionalInput",
          "package": "formlets",
          "signature": "(String -\u003e xml)-\u003e Form xml m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Create form control which is not required to be successful There is no way to provide default value because that would result in the control being successful For more information on successful controls see http www.w3.org TR html401 interact forms.html successful-controls see also input generalInput and generalInputMulti",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "optionalInput",
          "normalized": "(String-\u003ea)-\u003eForm a b(Maybe String)",
          "package": "formlets",
          "partial": "Input",
          "signature": "(String-\u003exml)-\u003eForm xml m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:optionalInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the XML component\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "plug",
          "package": "formlets",
          "signature": "(xml -\u003e xml1) -\u003e Form xml m a -\u003e Form xml1 m a",
          "source": "src/Text-Formlets.html#plug",
          "type": "function"
        },
        "index": {
          "description": "Transform the XML component",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "plug",
          "normalized": "(a-\u003ea)-\u003eForm a b c-\u003eForm a b c",
          "package": "formlets",
          "signature": "(xml-\u003exml)-\u003eForm xml m a-\u003eForm xml m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:plug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "plug'",
          "package": "formlets",
          "signature": "(xml1 -\u003e xml2) -\u003e Formlet xml1 m a -\u003e Formlet xml2 m a",
          "source": "src/Text-Formlets.html#plug%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "plug'",
          "normalized": "(a-\u003ea)-\u003eFormlet a b c-\u003eFormlet a b c",
          "package": "formlets",
          "signature": "(xml-\u003exml)-\u003eFormlet xml m a-\u003eFormlet xml m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:plug-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the XML components of two forms using f, and combine the\n values using g.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "plug2",
          "package": "formlets",
          "signature": "(xml -\u003e xml1 -\u003e xml2) -\u003e (a -\u003e b -\u003e Failing c) -\u003e Form xml m a -\u003e Form xml1 m b -\u003e Form xml2 m c",
          "source": "src/Text-Formlets.html#plug2",
          "type": "function"
        },
        "index": {
          "description": "Combine the XML components of two forms using and combine the values using",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "plug2",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003ec-\u003eFailing d)-\u003eForm a e b-\u003eForm a e c-\u003eForm a e d",
          "package": "formlets",
          "signature": "(xml-\u003exml-\u003exml)-\u003e(a-\u003eb-\u003eFailing c)-\u003eForm xml m a-\u003eForm xml m b-\u003eForm xml m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:plug2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "pureM",
          "package": "formlets",
          "signature": "m a -\u003e Form xml m a",
          "source": "src/Text-Formlets.html#pureM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "pureM",
          "normalized": "a b-\u003eForm c a b",
          "package": "formlets",
          "signature": "m a-\u003eForm xml m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:pureM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "rectCols",
          "package": "formlets",
          "signature": "Int",
          "source": "src/Text-Formlets.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "rectCols",
          "package": "formlets",
          "partial": "Cols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:rectCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Formlets",
          "name": "rectRows",
          "package": "formlets",
          "signature": "Int",
          "source": "src/Text-Formlets.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "rectRows",
          "package": "formlets",
          "partial": "Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:rectRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the form state\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "runFormState",
          "package": "formlets",
          "signature": "Env-\u003e Form xml m a-\u003e (m (Failing a), xml, FormContentType)",
          "type": "function"
        },
        "index": {
          "description": "Runs the form state",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "runFormState",
          "normalized": "Env-\u003eForm a b c-\u003e(b(Failing c),a,FormContentType)",
          "package": "formlets",
          "partial": "Form State",
          "signature": "Env-\u003eForm xml m a-\u003e(m(Failing a),xml,FormContentType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:runFormState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a good number of rows for a textarea input.  Uses the\n number of newlines in the string and the number of lines that\n are too long for the desired width.\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "stringRect",
          "package": "formlets",
          "signature": "Int -\u003e String -\u003e Rect",
          "source": "src/Text-Formlets.html#stringRect",
          "type": "function"
        },
        "index": {
          "description": "Choose good number of rows for textarea input Uses the number of newlines in the string and the number of lines that are too long for the desired width",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "stringRect",
          "normalized": "Int-\u003eString-\u003eRect",
          "package": "formlets",
          "partial": "Rect",
          "signature": "Int-\u003eString-\u003eRect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:stringRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure xml\n\u003c/p\u003e",
          "module": "Text.Formlets",
          "name": "xml",
          "package": "formlets",
          "signature": "xml -\u003e Form xml m ()",
          "source": "src/Text-Formlets.html#xml",
          "type": "function"
        },
        "index": {
          "description": "Pure xml",
          "hierarchy": "Text Formlets",
          "module": "Text.Formlets",
          "name": "xml",
          "normalized": "a-\u003eForm a b()",
          "package": "formlets",
          "signature": "xml-\u003eForm xml m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-Formlets.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Strict.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "source": "src/Text-XHtml-Strict-Formlets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "partial": "Formlets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Strict.Formlets",
          "name": "XHtmlForm",
          "package": "formlets",
          "source": "src/Text-XHtml-Strict-Formlets.html#XHtmlForm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "XHtmlForm",
          "package": "formlets",
          "partial": "XHtml Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#t:XHtmlForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Strict.Formlets",
          "name": "XHtmlFormlet",
          "package": "formlets",
          "source": "src/Text-XHtml-Strict-Formlets.html#XHtmlFormlet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "XHtmlFormlet",
          "package": "formlets",
          "partial": "XHtml Formlet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#t:XHtmlFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA checkbox with an optional default value\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "signature": "XHtmlFormlet m Bool",
          "source": "src/Text-XHtml-Strict-Formlets.html#checkbox",
          "type": "function"
        },
        "index": {
          "description": "checkbox with an optional default value",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:checkbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn radio choice for Enums\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "enumRadio",
          "package": "formlets",
          "signature": "[(a, String)] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Strict-Formlets.html#enumRadio",
          "type": "function"
        },
        "index": {
          "description": "An radio choice for Enums",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "enumRadio",
          "normalized": "[(a,String)]-\u003eXHtmlFormlet b a",
          "package": "formlets",
          "partial": "Radio",
          "signature": "[(a,String)]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:enumRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for all the options from |a|.\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "enumSelect",
          "package": "formlets",
          "signature": "[HtmlAttr] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Strict-Formlets.html#enumSelect",
          "type": "function"
        },
        "index": {
          "description": "drop-down for all the options from",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "enumSelect",
          "normalized": "[HtmlAttr]-\u003eXHtmlFormlet a b",
          "package": "formlets",
          "partial": "Select",
          "signature": "[HtmlAttr]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:enumSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file upload form\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "file",
          "package": "formlets",
          "signature": "XHtmlForm m File",
          "source": "src/Text-XHtml-Strict-Formlets.html#file",
          "type": "function"
        },
        "index": {
          "description": "file upload form",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "file",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hidden input field\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "hidden",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Strict-Formlets.html#hidden",
          "type": "function"
        },
        "index": {
          "description": "hidden input field",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "hidden",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input field with an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "input",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Strict-Formlets.html#input",
          "type": "function"
        },
        "index": {
          "description": "An input field with an optional value",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "input",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA validated integer component\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "signature": "XHtmlFormlet m Integer",
          "source": "src/Text-XHtml-Strict-Formlets.html#inputInteger",
          "type": "function"
        },
        "index": {
          "description": "validated integer component",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:inputInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Strict.Formlets",
          "name": "label",
          "package": "formlets",
          "signature": "h -\u003e Form Html m ()",
          "source": "src/Text-XHtml-Strict-Formlets.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "label",
          "normalized": "a-\u003eForm Html b()",
          "package": "formlets",
          "signature": "h-\u003eForm Html m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA password field with an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "password",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Strict-Formlets.html#password",
          "type": "function"
        },
        "index": {
          "description": "password field with an optional value",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "password",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA radio choice\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "radio",
          "package": "formlets",
          "signature": "[(String, String)] -\u003e XHtmlFormlet m String",
          "source": "src/Text-XHtml-Strict-Formlets.html#radio",
          "type": "function"
        },
        "index": {
          "description": "radio choice",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "radio",
          "normalized": "[(String,String)]-\u003eXHtmlFormlet a String",
          "package": "formlets",
          "signature": "[(String,String)]-\u003eXHtmlFormlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:radio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for anything that is an instance of Eq\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "select",
          "package": "formlets",
          "signature": "[HtmlAttr] -\u003e [(a, h)] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Strict-Formlets.html#select",
          "type": "function"
        },
        "index": {
          "description": "drop-down for anything that is an instance of Eq",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "select",
          "normalized": "[HtmlAttr]-\u003e[(a,b)]-\u003eXHtmlFormlet c a",
          "package": "formlets",
          "signature": "[HtmlAttr]-\u003e[(a,h)]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for selecting values\n\u003c/p\u003e",
          "module": "[\"Text.XHtml.Strict.Formlets\",\"Text.XHtml.Transitional.Formlets\"]",
          "name": "selectRaw",
          "package": "formlets",
          "signature": "[HtmlAttr]-\u003e [(String, h)]-\u003e XHtmlFormlet m String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:selectRaw\",\"http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:selectRaw\"]"
        },
        "index": {
          "description": "drop-down for selecting values",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "selectRaw",
          "normalized": "[HtmlAttr]-\u003e[(String,a)]-\u003eXHtmlFormlet b String",
          "package": "formlets",
          "partial": "Raw",
          "signature": "[HtmlAttr]-\u003e[(String,h)]-\u003eXHtmlFormlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:selectRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a helper function to generate select boxes\n\u003c/p\u003e",
          "module": "[\"Text.XHtml.Strict.Formlets\",\"Text.XHtml.Transitional.Formlets\"]",
          "name": "selectXHtml",
          "package": "formlets",
          "signature": "[HtmlAttr]-\u003e [(String, h)]-\u003e String-\u003e String-\u003e Html",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:selectXHtml\",\"http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:selectXHtml\"]"
        },
        "index": {
          "description": "This is helper function to generate select boxes",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "selectXHtml",
          "normalized": "[HtmlAttr]-\u003e[(String,a)]-\u003eString-\u003eString-\u003eHtml",
          "package": "formlets",
          "partial": "XHtml",
          "signature": "[HtmlAttr]-\u003e[(String,h)]-\u003eString-\u003eString-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:selectXHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA textarea with optional rows and columns, and an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "textarea",
          "package": "formlets",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e XHtmlFormlet m String",
          "source": "src/Text-XHtml-Strict-Formlets.html#textarea",
          "type": "function"
        },
        "index": {
          "description": "textarea with optional rows and columns and an optional value",
          "hierarchy": "Text XHtml Strict Formlets",
          "module": "Text.XHtml.Strict.Formlets",
          "name": "textarea",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eXHtmlFormlet a String",
          "package": "formlets",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eXHtmlFormlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Strict-Formlets.html#v:textarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "source": "src/Text-XHtml-Transitional-Formlets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "Formlets",
          "package": "formlets",
          "partial": "Formlets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "XHtmlForm",
          "package": "formlets",
          "source": "src/Text-XHtml-Transitional-Formlets.html#XHtmlForm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "XHtmlForm",
          "package": "formlets",
          "partial": "XHtml Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#t:XHtmlForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "XHtmlFormlet",
          "package": "formlets",
          "source": "src/Text-XHtml-Transitional-Formlets.html#XHtmlFormlet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "XHtmlFormlet",
          "package": "formlets",
          "partial": "XHtml Formlet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#t:XHtmlFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA checkbox with an optional default value\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "signature": "XHtmlFormlet m Bool",
          "source": "src/Text-XHtml-Transitional-Formlets.html#checkbox",
          "type": "function"
        },
        "index": {
          "description": "checkbox with an optional default value",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "checkbox",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:checkbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn radio choice for Enums\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "enumRadio",
          "package": "formlets",
          "signature": "[(a, String)] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Transitional-Formlets.html#enumRadio",
          "type": "function"
        },
        "index": {
          "description": "An radio choice for Enums",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "enumRadio",
          "normalized": "[(a,String)]-\u003eXHtmlFormlet b a",
          "package": "formlets",
          "partial": "Radio",
          "signature": "[(a,String)]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:enumRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for all the options from |a|.\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "enumSelect",
          "package": "formlets",
          "signature": "[HtmlAttr] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Transitional-Formlets.html#enumSelect",
          "type": "function"
        },
        "index": {
          "description": "drop-down for all the options from",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "enumSelect",
          "normalized": "[HtmlAttr]-\u003eXHtmlFormlet a b",
          "package": "formlets",
          "partial": "Select",
          "signature": "[HtmlAttr]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:enumSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file upload form\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "file",
          "package": "formlets",
          "signature": "XHtmlForm m File",
          "source": "src/Text-XHtml-Transitional-Formlets.html#file",
          "type": "function"
        },
        "index": {
          "description": "file upload form",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "file",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hidden input field\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "hidden",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Transitional-Formlets.html#hidden",
          "type": "function"
        },
        "index": {
          "description": "hidden input field",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "hidden",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input field with an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "input",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Transitional-Formlets.html#input",
          "type": "function"
        },
        "index": {
          "description": "An input field with an optional value",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "input",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA validated integer component\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "signature": "XHtmlFormlet m Integer",
          "source": "src/Text-XHtml-Transitional-Formlets.html#inputInteger",
          "type": "function"
        },
        "index": {
          "description": "validated integer component",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "inputInteger",
          "package": "formlets",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:inputInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "label",
          "package": "formlets",
          "signature": "h -\u003e Form Html m ()",
          "source": "src/Text-XHtml-Transitional-Formlets.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "label",
          "normalized": "a-\u003eForm Html b()",
          "package": "formlets",
          "signature": "h-\u003eForm Html m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA password field with an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "password",
          "package": "formlets",
          "signature": "XHtmlFormlet m String",
          "source": "src/Text-XHtml-Transitional-Formlets.html#password",
          "type": "function"
        },
        "index": {
          "description": "password field with an optional value",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "password",
          "package": "formlets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA radio choice\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "radio",
          "package": "formlets",
          "signature": "[(String, String)] -\u003e XHtmlFormlet m String",
          "source": "src/Text-XHtml-Transitional-Formlets.html#radio",
          "type": "function"
        },
        "index": {
          "description": "radio choice",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "radio",
          "normalized": "[(String,String)]-\u003eXHtmlFormlet a String",
          "package": "formlets",
          "signature": "[(String,String)]-\u003eXHtmlFormlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:radio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-down for anything that is an instance of Eq\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "select",
          "package": "formlets",
          "signature": "[HtmlAttr] -\u003e [(a, h)] -\u003e XHtmlFormlet m a",
          "source": "src/Text-XHtml-Transitional-Formlets.html#select",
          "type": "function"
        },
        "index": {
          "description": "drop-down for anything that is an instance of Eq",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "select",
          "normalized": "[HtmlAttr]-\u003e[(a,b)]-\u003eXHtmlFormlet c a",
          "package": "formlets",
          "signature": "[HtmlAttr]-\u003e[(a,h)]-\u003eXHtmlFormlet m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA textarea with optional rows and columns, and an optional value\n\u003c/p\u003e",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "textarea",
          "package": "formlets",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e XHtmlFormlet m String",
          "source": "src/Text-XHtml-Transitional-Formlets.html#textarea",
          "type": "function"
        },
        "index": {
          "description": "textarea with optional rows and columns and an optional value",
          "hierarchy": "Text XHtml Transitional Formlets",
          "module": "Text.XHtml.Transitional.Formlets",
          "name": "textarea",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eXHtmlFormlet a String",
          "package": "formlets",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eXHtmlFormlet m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/formlets/docs/Text-XHtml-Transitional-Formlets.html#v:textarea"
      }
    }
  ]
]