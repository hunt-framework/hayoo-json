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
        "word": "layout-bootstrap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric form builder and processor.\n Not-so bootstrap, but uses it's widgets.\n\u003c/p\u003e\u003cp\u003eExample form:\n\u003c/p\u003e\u003cpre\u003e checkForm = (emptyForm []) { required = [ textField \"Service\" \"test:pass\" \"Service ID. For example: &#171;test:pass&#187;.\"\n                                         , textField \"Account\" \"9999995000\" \"Account ID. For example: &#171;5077322496&#187;.\" ]\n                            , optional = [ textField \"Amount\" \"0.12\" \"Amount to check.\" ]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Layout.Bootstrap.Forms",
          "name": "Forms",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Forms.html",
          "type": "module"
        },
        "index": {
          "description": "Generic form builder and processor Not-so bootstrap but uses it widgets Example form checkForm emptyForm required textField Service test pass Service ID For example test pass textField Account Account ID For example optional textField Amount Amount to check",
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "Forms",
          "package": "layout-bootstrap",
          "partial": "Forms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm container\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Forms",
          "name": "Form",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "data"
        },
        "index": {
          "description": "Form container",
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "Form",
          "package": "layout-bootstrap",
          "partial": "Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "FormData",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Forms.html#FormData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "FormData",
          "package": "layout-bootstrap",
          "partial": "Form Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#t:FormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "Form",
          "package": "layout-bootstrap",
          "signature": "Form",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "Form",
          "package": "layout-bootstrap",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery basic form. You can add fancy required/optional fields with record modifiers\n or generate simple textfields from a list of names.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Forms",
          "name": "emptyForm",
          "package": "layout-bootstrap",
          "signature": "[Text] -\u003e Form",
          "source": "src/Layout-Bootstrap-Forms.html#emptyForm",
          "type": "function"
        },
        "index": {
          "description": "Very basic form You can add fancy required optional fields with record modifiers or generate simple textfields from list of names",
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "emptyForm",
          "normalized": "[Text]-\u003eForm",
          "package": "layout-bootstrap",
          "partial": "Form",
          "signature": "[Text]-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:emptyForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "extra",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "extra",
          "normalized": "[Input]",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "formErrors",
          "package": "layout-bootstrap",
          "signature": "FormData",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "formErrors",
          "package": "layout-bootstrap",
          "partial": "Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:formErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "formValues",
          "package": "layout-bootstrap",
          "signature": "FormData",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "formValues",
          "package": "layout-bootstrap",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:formValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "optional",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "optional",
          "normalized": "[Input]",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Forms",
          "name": "required",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "source": "src/Layout-Bootstrap-Forms.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "required",
          "normalized": "[Input]",
          "package": "layout-bootstrap",
          "signature": "[Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText field builder to be used with \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Forms",
          "name": "textField",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Input",
          "source": "src/Layout-Bootstrap-Forms.html#textField",
          "type": "function"
        },
        "index": {
          "description": "Text field builder to be used with Form constructor",
          "hierarchy": "Layout Bootstrap Forms",
          "module": "Layout.Bootstrap.Forms",
          "name": "textField",
          "normalized": "Text-\u003eText-\u003eText-\u003eInput",
          "package": "layout-bootstrap",
          "partial": "Field",
          "signature": "Text-\u003eText-\u003eText-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Forms.html#v:textField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBootstrap-starter template. Not a real thing yet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Layout.Bootstrap.Starter",
          "name": "Starter",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Starter.html",
          "type": "module"
        },
        "index": {
          "description": "Bootstrap-starter template Not real thing yet",
          "hierarchy": "Layout Bootstrap Starter",
          "module": "Layout.Bootstrap.Starter",
          "name": "Starter",
          "package": "layout-bootstrap",
          "partial": "Starter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Starter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate configuration goes here.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Starter",
          "name": "Context",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Starter.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Template configuration goes here",
          "hierarchy": "Layout Bootstrap Starter",
          "module": "Layout.Bootstrap.Starter",
          "name": "Context",
          "package": "layout-bootstrap",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Starter.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a basic \u003ca\u003ehtml\u003c/a\u003e wrapper wich loads styles and js.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Starter",
          "name": "template",
          "package": "layout-bootstrap",
          "signature": "Context -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Starter.html#template",
          "type": "function"
        },
        "index": {
          "description": "Render basic html wrapper wich loads styles and js",
          "hierarchy": "Layout Bootstrap Starter",
          "module": "Layout.Bootstrap.Starter",
          "name": "template",
          "normalized": "Context-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Context-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Starter.html#v:template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrap your Html in bootstrap-styled containers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "Widgets",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Widgets.html",
          "type": "module"
        },
        "index": {
          "description": "Wrap your Html in bootstrap-styled containers",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "Widgets",
          "package": "layout-bootstrap",
          "partial": "Widgets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm field for one-line text entry.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "Input",
          "package": "layout-bootstrap",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "data"
        },
        "index": {
          "description": "Form field for one-line text entry",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "Input",
          "package": "layout-bootstrap",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "Input",
          "package": "layout-bootstrap",
          "signature": "Input",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "Input",
          "package": "layout-bootstrap",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDedicated place for some great quotes.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "blockQuote_",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#blockQuote_",
          "type": "function"
        },
        "index": {
          "description": "Dedicated place for some great quotes",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "blockQuote_",
          "normalized": "Text-\u003eText-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "Quote",
          "signature": "Text-\u003eText-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:blockQuote_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric button element. Provide list of css classes to be added. Hook JS actions to class names.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "button",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e [Text] -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#button",
          "type": "function"
        },
        "index": {
          "description": "Generic button element Provide list of css classes to be added Hook JS actions to class names",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "button",
          "normalized": "Text-\u003e[Text]-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003e[Text]-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToolbar-like groups of buttons. Put \u003ccode\u003e\u003ca\u003ebuttonGroup\u003c/a\u003e\u003c/code\u003es inside.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonBar",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#buttonBar",
          "type": "function"
        },
        "index": {
          "description": "Toolbar-like groups of buttons Put buttonGroup inside",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonBar",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "Bar",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:buttonBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eButton with a dropdown menu.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonDD",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#buttonDD",
          "type": "function"
        },
        "index": {
          "description": "Button with dropdown menu",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonDD",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "DD",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:buttonDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eButton container. Put \u003ccode\u003e\u003ca\u003ebutton\u003c/a\u003e\u003c/code\u003es inside.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonGroup",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#buttonGroup",
          "type": "function"
        },
        "index": {
          "description": "Button container Put button inside",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonGroup",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "Group",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:buttonGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore menu-like button. Has a caret in a split section.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonSDD",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#buttonSDD",
          "type": "function"
        },
        "index": {
          "description": "More menu-like button Has caret in split section",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "buttonSDD",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "SDD",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:buttonSDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTiny cross element for notification blocks.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "closeIcon",
          "package": "layout-bootstrap",
          "signature": "Html",
          "source": "src/Layout-Bootstrap-Widgets.html#closeIcon",
          "type": "function"
        },
        "index": {
          "description": "Tiny cross element for notification blocks",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "closeIcon",
          "package": "layout-bootstrap",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:closeIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "errors",
          "package": "layout-bootstrap",
          "signature": "Bool",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "errors",
          "package": "layout-bootstrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFieldset label.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "fieldset",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#fieldset",
          "type": "function"
        },
        "index": {
          "description": "Fieldset label",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "fieldset",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:fieldset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm wrapper.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "form",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#form",
          "type": "function"
        },
        "index": {
          "description": "Form wrapper",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "form",
          "normalized": "Text-\u003eText-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eText-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm button bar.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formActions",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#formActions",
          "type": "function"
        },
        "index": {
          "description": "Form button bar",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formActions",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "partial": "Actions",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:formActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBootstrap-horizontal form.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formH",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#formH",
          "type": "function"
        },
        "index": {
          "description": "Bootstrap-horizontal form",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formH",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:formH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBootstrap-vertical form.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formV",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#formV",
          "type": "function"
        },
        "index": {
          "description": "Bootstrap-vertical form",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "formV",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:formV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "help",
          "package": "layout-bootstrap",
          "signature": "Text",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "help",
          "package": "layout-bootstrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault glyphs.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "icon",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#icon",
          "type": "function"
        },
        "index": {
          "description": "Default glyphs",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "icon",
          "normalized": "Text-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:icon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite glyphs.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "iconW",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#iconW",
          "type": "function"
        },
        "index": {
          "description": "White glyphs",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "iconW",
          "normalized": "Text-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:iconW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHtml constructor for just needed parameters.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "input",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#input",
          "type": "function"
        },
        "index": {
          "description": "Html constructor for just needed parameters",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "input",
          "normalized": "Text-\u003eText-\u003eText-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eText-\u003eText-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHtml constructor for all Input parameters.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "input'",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Text -\u003e Text -\u003e Text -\u003e Bool -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#input%27",
          "type": "function"
        },
        "index": {
          "description": "Html constructor for all Input parameters",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "input'",
          "normalized": "Text-\u003eText-\u003eText-\u003eText-\u003eBool-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eText-\u003eText-\u003eText-\u003eBool-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:input-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCell with an offset (fixed row only).\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "offspan",
          "package": "layout-bootstrap",
          "signature": "Int -\u003e Int -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#offspan",
          "type": "function"
        },
        "index": {
          "description": "Cell with an offset fixed row only",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "offspan",
          "normalized": "Int-\u003eInt-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Int-\u003eInt-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:offspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "placeholder",
          "package": "layout-bootstrap",
          "signature": "Text",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "placeholder",
          "package": "layout-bootstrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:placeholder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed-width container.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "row",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#row",
          "type": "function"
        },
        "index": {
          "description": "Fixed-width container",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "row",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePercent-width container.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "rowF",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#rowF",
          "type": "function"
        },
        "index": {
          "description": "Percent-width container",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "rowF",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:rowF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID-marked navigation section.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "section",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#section",
          "type": "function"
        },
        "index": {
          "description": "ID-marked navigation section",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "section",
          "normalized": "Text-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Text-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText field with only name provided. Good to start with record overrides. Needs \u003ccode\u003e\u003ca\u003etoHtml\u003c/a\u003e\u003c/code\u003e when inserted into \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e tree.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "simpleInput",
          "package": "layout-bootstrap",
          "signature": "Text -\u003e Input",
          "source": "src/Layout-Bootstrap-Widgets.html#simpleInput",
          "type": "function"
        },
        "index": {
          "description": "Text field with only name provided Good to start with record overrides Needs toHtml when inserted into Html tree",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "simpleInput",
          "normalized": "Text-\u003eInput",
          "package": "layout-bootstrap",
          "partial": "Input",
          "signature": "Text-\u003eInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:simpleInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent wrapper to place inside a container.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "span",
          "package": "layout-bootstrap",
          "signature": "Int -\u003e Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#span",
          "type": "function"
        },
        "index": {
          "description": "Content wrapper to place inside container",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "span",
          "normalized": "Int-\u003eHtml-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Int-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "title",
          "package": "layout-bootstrap",
          "signature": "Text",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "title",
          "package": "layout-bootstrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Layout.Bootstrap.Widgets",
          "name": "value",
          "package": "layout-bootstrap",
          "signature": "Text",
          "source": "src/Layout-Bootstrap-Widgets.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "value",
          "package": "layout-bootstrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn area with a rounded border.\n\u003c/p\u003e",
          "module": "Layout.Bootstrap.Widgets",
          "name": "well",
          "package": "layout-bootstrap",
          "signature": "Html -\u003e Html",
          "source": "src/Layout-Bootstrap-Widgets.html#well",
          "type": "function"
        },
        "index": {
          "description": "An area with rounded border",
          "hierarchy": "Layout Bootstrap Widgets",
          "module": "Layout.Bootstrap.Widgets",
          "name": "well",
          "normalized": "Html-\u003eHtml",
          "package": "layout-bootstrap",
          "signature": "Html-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layout-bootstrap/docs/Layout-Bootstrap-Widgets.html#v:well"
      }
    }
  ]
]