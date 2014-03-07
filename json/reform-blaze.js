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
        "word": "reform-blaze"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "Common",
          "package": "reform-blaze",
          "source": "src/Text-Reform-Blaze-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "Common",
          "package": "reform-blaze",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "br",
          "package": "reform-blaze",
          "signature": "Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#br",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:br\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:br\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:br\"]"
        },
        "index": {
          "description": "create br tag",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "br",
          "normalized": "Form a b c Html()()",
          "package": "reform-blaze",
          "signature": "Form m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:br"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"button\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "button",
          "package": "reform-blaze",
          "signature": "children -\u003e Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#button",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:button\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:button\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:button\"]"
        },
        "index": {
          "description": "create button type button button element This element does not add any data to the form data set",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "button",
          "normalized": "a-\u003eForm b c d Html()()",
          "package": "reform-blaze",
          "signature": "children-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"reset\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "buttonReset",
          "package": "reform-blaze",
          "signature": "children -\u003e Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#buttonReset",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:buttonReset\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:buttonReset\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:buttonReset\"]"
        },
        "index": {
          "description": "create button type reset button element This element does not add any data to the form data set",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "buttonReset",
          "normalized": "a-\u003eForm b c d Html()()",
          "package": "reform-blaze",
          "partial": "Reset",
          "signature": "children-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:buttonReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Common",
          "name": "buttonSubmit",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text) -\u003e text -\u003e children -\u003e Form m input error Html () (Maybe text)",
          "source": "src/Text-Reform-Blaze-Common.html#buttonSubmit",
          "type": "function"
        },
        "index": {
          "description": "Create button type submit element",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "buttonSubmit",
          "normalized": "(a-\u003eEither b c)-\u003ec-\u003ed-\u003eForm e a b Html()(Maybe c)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "(input-\u003eEither error text)-\u003etext-\u003echildren-\u003eForm m input error Html()(Maybe text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:buttonSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIncludes errors from child forms.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "childErrorList",
          "package": "reform-blaze",
          "signature": "Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#childErrorList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:childErrorList\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:childErrorList\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:childErrorList\"]"
        },
        "index": {
          "description": "create ul which contains all the errors related to the Form Includes errors from child forms The ul will have the attribute class reform-error-list",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "childErrorList",
          "normalized": "Form a b c Html()()",
          "package": "reform-blaze",
          "partial": "Error List",
          "signature": "Form m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:childErrorList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "errorList",
          "package": "reform-blaze",
          "signature": "Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#errorList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:errorList\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:errorList\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:errorList\"]"
        },
        "index": {
          "description": "create ul which contains all the errors related to the Form The ul will have the attribute class reform-error-list",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "errorList",
          "normalized": "Form a b c Html()()",
          "package": "reform-blaze",
          "partial": "List",
          "signature": "Form m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:errorList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap a \u003ccode\u003e\u003cfieldset class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "fieldset",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
          "source": "src/Text-Reform-Blaze-Common.html#fieldset",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:fieldset\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:fieldset\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:fieldset\"]"
        },
        "index": {
          "description": "wrap fieldset class reform around Form",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "fieldset",
          "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:fieldset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate \u003ccode\u003e\u003cform action=action method=\"POST\" enctype=\"multipart/form-data\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "form",
          "package": "reform-blaze",
          "signature": "action-\u003e [(Text, Text)]-\u003e Html-\u003e Html",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:form\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:form\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:form\"]"
        },
        "index": {
          "description": "create form action action method POST enctype multipart form-data",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "form",
          "normalized": "a-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml",
          "package": "reform-blaze",
          "signature": "action-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputButton",
          "package": "reform-blaze",
          "signature": "text -\u003e Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#inputButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputButton",
          "normalized": "a-\u003eForm b c d Html()()",
          "package": "reform-blaze",
          "partial": "Button",
          "signature": "text-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a single \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating if it was checked or not.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einputCheckboxes\u003c/a\u003e\u003c/code\u003e\n FIXME: Should this built on something in Generalized?\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "inputCheckbox",
          "package": "reform-blaze",
          "signature": "Bool-\u003e Form m input error Html () Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckbox\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputCheckbox\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputCheckbox\"]"
        },
        "index": {
          "description": "Create single input type checkbox element returns Bool indicating if it was checked or not see also inputCheckboxes FIXME Should this built on something in Generalized",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputCheckbox",
          "normalized": "Bool-\u003eForm a b c Html()Bool",
          "package": "reform-blaze",
          "partial": "Checkbox",
          "signature": "Bool-\u003eForm m input error Html()Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "inputCheckboxes",
          "package": "reform-blaze",
          "signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckboxes\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputCheckboxes\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputCheckboxes\"]"
        },
        "index": {
          "description": "Create group of input type checkbox elements",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputCheckboxes",
          "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
          "package": "reform-blaze",
          "partial": "Checkboxes",
          "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckboxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis control may succeed even if the user does not actually select a file to upload. In that case the uploaded name will likely be \"\" and the file contents will be empty as well.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "inputFile",
          "package": "reform-blaze",
          "signature": "Form m input error Html () (FileType input)",
          "source": "src/Text-Reform-Blaze-Common.html#inputFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputFile\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputFile\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputFile\"]"
        },
        "index": {
          "description": "Create an input type file element This control may succeed even if the user does not actually select file to upload In that case the uploaded name will likely be and the file contents will be empty as well",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputFile",
          "normalized": "Form a b c Html()(FileType b)",
          "package": "reform-blaze",
          "partial": "File",
          "signature": "Form m input error Html()(FileType input)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputHidden",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
          "source": "src/Text-Reform-Blaze-Common.html#inputHidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputHidden",
          "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
          "package": "reform-blaze",
          "partial": "Hidden",
          "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputPassword",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
          "source": "src/Text-Reform-Blaze-Common.html#inputPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputPassword",
          "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
          "package": "reform-blaze",
          "partial": "Password",
          "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"radio\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "inputRadio",
          "package": "reform-blaze",
          "signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputRadio\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputRadio\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputRadio\"]"
        },
        "index": {
          "description": "Create group of input type radio elements",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputRadio",
          "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
          "package": "reform-blaze",
          "partial": "Radio",
          "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputReset",
          "package": "reform-blaze",
          "signature": "text -\u003e Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#inputReset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputReset",
          "normalized": "a-\u003eForm b c d Html()()",
          "package": "reform-blaze",
          "partial": "Reset",
          "signature": "text-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputSubmit",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () (Maybe text)",
          "source": "src/Text-Reform-Blaze-Common.html#inputSubmit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputSubmit",
          "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()(Maybe c)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()(Maybe text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "inputText",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
          "source": "src/Text-Reform-Blaze-Common.html#inputText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "inputText",
          "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
          "package": "reform-blaze",
          "partial": "Text",
          "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ca\u003eor ++\u003c/a\u003e to ensure that the \u003ccode\u003efor\u003c/code\u003e attribute references the correct \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e label \"some input field: \" ++\u003e inputText \"\"\n\u003c/pre\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "label",
          "package": "reform-blaze",
          "signature": "children -\u003e Form m input error Html () ()",
          "source": "src/Text-Reform-Blaze-Common.html#label",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:label\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:label\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:label\"]"
        },
        "index": {
          "description": "create label element Use this with or to ensure that the for attribute references the correct id label some input field inputText",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "label",
          "normalized": "a-\u003eForm b c d Html()()",
          "package": "reform-blaze",
          "signature": "children-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap a \u003ccode\u003e\u003cli class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "li",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
          "source": "src/Text-Reform-Blaze-Common.html#li",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:li\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:li\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:li\"]"
        },
        "index": {
          "description": "wrap li class reform around Form",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "li",
          "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:li"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap an \u003ccode\u003e\u003col class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "ol",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
          "source": "src/Text-Reform-Blaze-Common.html#ol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ol\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:ol\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:ol\"]"
        },
        "index": {
          "description": "wrap an ol class reform around Form",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "ol",
          "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eselectMultiple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "select",
          "package": "reform-blaze",
          "signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:select\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:select\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:select\"]"
        },
        "index": {
          "description": "create select select element plus its option option children see also selectMultiple",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "select",
          "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
          "package": "reform-blaze",
          "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003eThis creates a \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e element which allows more than one item to be selected.\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "selectMultiple",
          "package": "reform-blaze",
          "signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:selectMultiple\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:selectMultiple\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:selectMultiple\"]"
        },
        "index": {
          "description": "create select multiple multiple select element plus its option option children This creates select element which allows more than one item to be selected",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "selectMultiple",
          "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
          "package": "reform-blaze",
          "partial": "Multiple",
          "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:selectMultiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an attribute to the \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e for a form element.\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Common",
          "name": "setAttr",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a -\u003e Attribute -\u003e Form m input error Html proof a",
          "source": "src/Text-Reform-Blaze-Common.html#setAttr",
          "type": "function"
        },
        "index": {
          "description": "add an attribute to the Html for form element",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "setAttr",
          "normalized": "Form a b c Html d e-\u003eAttribute-\u003eForm a b c Html d e",
          "package": "reform-blaze",
          "partial": "Attr",
          "signature": "Form m input error Html proof a-\u003eAttribute-\u003eForm m input error Html proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:setAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Blaze.Common",
          "name": "textarea",
          "package": "reform-blaze",
          "signature": "(input -\u003e Either error text)-\u003e Int-\u003e Int-\u003e text-\u003e Form m input error Html () text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "textarea",
          "normalized": "(a-\u003eEither b c)-\u003eInt-\u003eInt-\u003ec-\u003eForm d a b Html()c",
          "package": "reform-blaze",
          "signature": "(input-\u003eEither error text)-\u003eInt-\u003eInt-\u003etext-\u003eForm m input error Html()text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:textarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap a \u003ccode\u003e\u003cul class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.Reform.Blaze.Common\",\"Text.Reform.Blaze.String\",\"Text.Reform.Blaze.Text\"]",
          "name": "ul",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
          "source": "src/Text-Reform-Blaze-Common.html#ul",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ul\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:ul\",\"http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:ul\"]"
        },
        "index": {
          "description": "wrap ul class reform around Form",
          "hierarchy": "Text Reform Blaze Common",
          "module": "Text.Reform.Blaze.Common",
          "name": "ul",
          "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
          "package": "reform-blaze",
          "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions creating Reform using blaze-html markup.\n\u003c/p\u003e\u003cp\u003eThis module assumes that you wish for text based controls such as \u003ccode\u003e\u003ca\u003einputText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etextarea\u003c/a\u003e\u003c/code\u003e to using \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e values. If you prefer \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e see \u003ca\u003eText.Reform.Blaze.Text\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "String",
          "package": "reform-blaze",
          "source": "src/Text-Reform-Blaze-String.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions creating Reform using blaze-html markup This module assumes that you wish for text based controls such as inputText and textarea to using String values If you prefer Text see Text.Reform.Blaze.Text",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "String",
          "package": "reform-blaze",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "buttonSubmit",
          "package": "reform-blaze",
          "signature": "String-\u003e children-\u003e Form m input error Html () (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "create button type submit button element",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "buttonSubmit",
          "normalized": "String-\u003ea-\u003eForm b c d Html()(Maybe String)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "String-\u003echildren-\u003eForm m input error Html()(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:buttonSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"button\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThe element is a push button with a text label. The button does nothing by default, but actions can be added using javascript. This element does not add any data to the form data set.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebutton\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputButton",
          "package": "reform-blaze",
          "signature": "String-\u003e Form m input error Html () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an input type button element The element is push button with text label The button does nothing by default but actions can be added using javascript This element does not add any data to the form data set see also button",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputButton",
          "normalized": "String-\u003eForm a b c Html()()",
          "package": "reform-blaze",
          "partial": "Button",
          "signature": "String-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"hidden\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputHidden",
          "package": "reform-blaze",
          "signature": "String-\u003e Form m input error Html () String",
          "type": "function"
        },
        "index": {
          "description": "Create an input type hidden element",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputHidden",
          "normalized": "String-\u003eForm a b c Html()String",
          "package": "reform-blaze",
          "partial": "Hidden",
          "signature": "String-\u003eForm m input error Html()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"password\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputPassword",
          "package": "reform-blaze",
          "signature": "Form m input error Html () String",
          "source": "src/Text-Reform-Blaze-String.html#inputPassword",
          "type": "function"
        },
        "index": {
          "description": "Create an input type password element",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputPassword",
          "normalized": "Form a b c Html()String",
          "package": "reform-blaze",
          "partial": "Password",
          "signature": "Form m input error Html()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputReset",
          "package": "reform-blaze",
          "signature": "String-\u003e Form m input error Html () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an input type reset element This element does not add any data to the form data set",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputReset",
          "normalized": "String-\u003eForm a b c Html()()",
          "package": "reform-blaze",
          "partial": "Reset",
          "signature": "String-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eJust\u003c/code\u003e \u003cem\u003evalue\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e if this button was used to submit the form.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNothing\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    if this button was not used to submit the form.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputSubmit",
          "package": "reform-blaze",
          "signature": "String-\u003e Form m input error Html () (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Create an input type submit element returns Just value if this button was used to submit the form Nothing if this button was not used to submit the form",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputSubmit",
          "normalized": "String-\u003eForm a b c Html()(Maybe String)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "String-\u003eForm m input error Html()(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "inputText",
          "package": "reform-blaze",
          "signature": "String-\u003e Form m input error Html () String",
          "type": "function"
        },
        "index": {
          "description": "Create an input type text element",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "inputText",
          "normalized": "String-\u003eForm a b c Html()String",
          "package": "reform-blaze",
          "partial": "Text",
          "signature": "String-\u003eForm m input error Html()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ctextarea\u003e\u003c/textarea\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.String",
          "name": "textarea",
          "package": "reform-blaze",
          "signature": "Int-\u003e Int-\u003e String-\u003e Form m input error Html () String",
          "type": "function"
        },
        "index": {
          "description": "Create textarea textarea element",
          "hierarchy": "Text Reform Blaze String",
          "module": "Text.Reform.Blaze.String",
          "name": "textarea",
          "normalized": "Int-\u003eInt-\u003eString-\u003eForm a b c Html()String",
          "package": "reform-blaze",
          "signature": "Int-\u003eInt-\u003eString-\u003eForm m input error Html()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:textarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions creating Reform using blaze-html markup.\n\u003c/p\u003e\u003cp\u003eThis module assumes that you wish for text based controls such as \u003ccode\u003e\u003ca\u003einputText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etextarea\u003c/a\u003e\u003c/code\u003e to using \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. If you prefer \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e see \u003ca\u003eText.Reform.Blaze.String\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "Text",
          "package": "reform-blaze",
          "source": "src/Text-Reform-Blaze-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions creating Reform using blaze-html markup This module assumes that you wish for text based controls such as inputText and textarea to using Text values If you prefer String see Text.Reform.Blaze.String",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "Text",
          "package": "reform-blaze",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "buttonSubmit",
          "package": "reform-blaze",
          "signature": "Text-\u003e children-\u003e Form m input error Html () (Maybe Text)",
          "type": "function"
        },
        "index": {
          "description": "create button type submit button element",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "buttonSubmit",
          "normalized": "Text-\u003ea-\u003eForm b c d Html()(Maybe Text)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "Text-\u003echildren-\u003eForm m input error Html()(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:buttonSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"button\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThe element is a push button with a text label. The button does nothing by default, but actions can be added using javascript. This element does not add any data to the form data set.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebutton\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputButton",
          "package": "reform-blaze",
          "signature": "Text-\u003e Form m input error Html () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an input type button element The element is push button with text label The button does nothing by default but actions can be added using javascript This element does not add any data to the form data set see also button",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputButton",
          "normalized": "Text-\u003eForm a b c Html()()",
          "package": "reform-blaze",
          "partial": "Button",
          "signature": "Text-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"hidden\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputHidden",
          "package": "reform-blaze",
          "signature": "Text-\u003e Form m input error Html () Text",
          "type": "function"
        },
        "index": {
          "description": "Create an input type hidden element",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputHidden",
          "normalized": "Text-\u003eForm a b c Html()Text",
          "package": "reform-blaze",
          "partial": "Hidden",
          "signature": "Text-\u003eForm m input error Html()Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"password\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputPassword",
          "package": "reform-blaze",
          "signature": "Form m input error Html () Text",
          "source": "src/Text-Reform-Blaze-Text.html#inputPassword",
          "type": "function"
        },
        "index": {
          "description": "Create an input type password element",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputPassword",
          "normalized": "Form a b c Html()Text",
          "package": "reform-blaze",
          "partial": "Password",
          "signature": "Form m input error Html()Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputReset",
          "package": "reform-blaze",
          "signature": "Text-\u003e Form m input error Html () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an input type reset element This element does not add any data to the form data set",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputReset",
          "normalized": "Text-\u003eForm a b c Html()()",
          "package": "reform-blaze",
          "partial": "Reset",
          "signature": "Text-\u003eForm m input error Html()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eJust\u003c/code\u003e \u003cem\u003evalue\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e if this button was used to submit the form.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNothing\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    if this button was not used to submit the form.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputSubmit",
          "package": "reform-blaze",
          "signature": "Text-\u003e Form m input error Html () (Maybe Text)",
          "type": "function"
        },
        "index": {
          "description": "Create an input type submit element returns Just value if this button was used to submit the form Nothing if this button was not used to submit the form",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputSubmit",
          "normalized": "Text-\u003eForm a b c Html()(Maybe Text)",
          "package": "reform-blaze",
          "partial": "Submit",
          "signature": "Text-\u003eForm m input error Html()(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputText",
          "package": "reform-blaze",
          "signature": "Text-\u003e Form m input error Html () Text",
          "type": "function"
        },
        "index": {
          "description": "Create an input type text element",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "inputText",
          "normalized": "Text-\u003eForm a b c Html()Text",
          "package": "reform-blaze",
          "partial": "Text",
          "signature": "Text-\u003eForm m input error Html()Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ctextarea\u003e\u003c/textarea\u003e element\n\u003c/p\u003e",
          "module": "Text.Reform.Blaze.Text",
          "name": "textarea",
          "package": "reform-blaze",
          "signature": "Int-\u003e Int-\u003e Text-\u003e Form m input error Html () Text",
          "type": "function"
        },
        "index": {
          "description": "Create textarea textarea element",
          "hierarchy": "Text Reform Blaze Text",
          "module": "Text.Reform.Blaze.Text",
          "name": "textarea",
          "normalized": "Int-\u003eInt-\u003eText-\u003eForm a b c Html()Text",
          "package": "reform-blaze",
          "signature": "Int-\u003eInt-\u003eText-\u003eForm m input error Html()Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:textarea"
      }
    }
  ]
]