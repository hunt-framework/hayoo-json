[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Blaze-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "Common",
        "normalized": "",
        "package": "reform-blaze",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:br",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#br",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "create br tag",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "br",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"button\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "create button type button button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "button",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:buttonReset",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"reset\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#buttonReset",
        "fct-type": "function",
        "title": "buttonReset"
      },
      "index": {
        "description": "create button type reset button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "buttonReset",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:buttonSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text) -\u003e text -\u003e children -\u003e Form m input error Html () (Maybe text)",
        "fct-source": "src/Text-Reform-Blaze-Common.html#buttonSubmit",
        "fct-type": "function",
        "title": "buttonSubmit"
      },
      "index": {
        "description": "Create button type submit element",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "buttonSubmit",
        "normalized": "(a-\u003eEither b c)-\u003ec-\u003ed-\u003eForm e a b Html()(Maybe c)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "(input-\u003eEither error text)-\u003etext-\u003echildren-\u003eForm m input error Html()(Maybe text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:childErrorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIncludes errors from child forms.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#childErrorList",
        "fct-type": "function",
        "title": "childErrorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form Includes errors from child forms The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "childErrorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "Error List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:errorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#errorList",
        "fct-type": "function",
        "title": "errorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "errorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:fieldset",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cfieldset class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#fieldset",
        "fct-type": "function",
        "title": "fieldset"
      },
      "index": {
        "description": "wrap fieldset class reform around Form",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "fieldset",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:form",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cform action=action method=\"POST\" enctype=\"multipart/form-data\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "action-\u003e [(Text, Text)]-\u003e Html-\u003e Html",
        "fct-type": "function",
        "title": "form"
      },
      "index": {
        "description": "create form action action method POST enctype multipart form-data",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "form",
        "normalized": "a-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml",
        "package": "reform-blaze",
        "partial": "",
        "signature": "action-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputButton",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "text -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputButton",
        "fct-type": "function",
        "title": "inputButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputButton",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "Button",
        "signature": "text-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckbox",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a single \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating if it was checked or not.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einputCheckboxes\u003c/a\u003e\u003c/code\u003e\n FIXME: Should this built on something in Generalized?\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Bool-\u003e Form m input error Html () Bool",
        "fct-type": "function",
        "title": "inputCheckbox"
      },
      "index": {
        "description": "Create single input type checkbox element returns Bool indicating if it was checked or not see also inputCheckboxes FIXME Should this built on something in Generalized",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputCheckbox",
        "normalized": "Bool-\u003eForm a b c Html()Bool",
        "package": "reform-blaze",
        "partial": "Checkbox",
        "signature": "Bool-\u003eForm m input error Html()Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputCheckboxes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "inputCheckboxes"
      },
      "index": {
        "description": "Create group of input type checkbox elements",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputCheckboxes",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Checkboxes",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis control may succeed even if the user does not actually select a file to upload. In that case the uploaded name will likely be \"\" and the file contents will be empty as well.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () (FileType input)",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputFile",
        "fct-type": "function",
        "title": "inputFile"
      },
      "index": {
        "description": "Create an input type file element This control may succeed even if the user does not actually select file to upload In that case the uploaded name will likely be and the file contents will be empty as well",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputFile",
        "normalized": "Form a b c Html()(FileType b)",
        "package": "reform-blaze",
        "partial": "File",
        "signature": "Form m input error Html()(FileType input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputHidden",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputHidden",
        "fct-type": "function",
        "title": "inputHidden"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputHidden",
        "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
        "package": "reform-blaze",
        "partial": "Hidden",
        "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputPassword",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputPassword",
        "fct-type": "function",
        "title": "inputPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputPassword",
        "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
        "package": "reform-blaze",
        "partial": "Password",
        "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputRadio",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"radio\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "inputRadio"
      },
      "index": {
        "description": "Create group of input type radio elements",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputRadio",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "Radio",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputReset",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "text -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputReset",
        "fct-type": "function",
        "title": "inputReset"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputReset",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "text-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputSubmit",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () (Maybe text)",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputSubmit",
        "fct-type": "function",
        "title": "inputSubmit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputSubmit",
        "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()(Maybe c)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()(Maybe text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:inputText",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text) -\u003e text -\u003e Form m input error Html () text",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputText",
        "fct-type": "function",
        "title": "inputText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "inputText",
        "normalized": "(a-\u003eEither b c)-\u003ec-\u003eForm d a b Html()c",
        "package": "reform-blaze",
        "partial": "Text",
        "signature": "(input-\u003eEither error text)-\u003etext-\u003eForm m input error Html()text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ca\u003eor ++\u003c/a\u003e to ensure that the \u003ccode\u003efor\u003c/code\u003e attribute references the correct \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e label \"some input field: \" ++\u003e inputText \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "create label element Use this with or to ensure that the for attribute references the correct id label some input field inputText",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "label",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:li",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cli class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#li",
        "fct-type": "function",
        "title": "li"
      },
      "index": {
        "description": "wrap li class reform around Form",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "li",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ol",
      "description": {
        "fct-descr": "\u003cp\u003ewrap an \u003ccode\u003e\u003col class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ol",
        "fct-type": "function",
        "title": "ol"
      },
      "index": {
        "description": "wrap an ol class reform around Form",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "ol",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eselectMultiple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "create select select element plus its option option children see also selectMultiple",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "select",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:selectMultiple",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003eThis creates a \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e element which allows more than one item to be selected.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "selectMultiple"
      },
      "index": {
        "description": "create select multiple multiple select element plus its option option children This creates select element which allows more than one item to be selected",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "selectMultiple",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Multiple",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:setAttr",
      "description": {
        "fct-descr": "\u003cp\u003eadd an attribute to the \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e for a form element.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Attribute -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#setAttr",
        "fct-type": "function",
        "title": "setAttr"
      },
      "index": {
        "description": "add an attribute to the Html for form element",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "setAttr",
        "normalized": "Form a b c Html d e-\u003eAttribute-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "Attr",
        "signature": "Form m input error Html proof a-\u003eAttribute-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:textarea",
      "description": {
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "(input -\u003e Either error text)-\u003e Int-\u003e Int-\u003e text-\u003e Form m input error Html () text",
        "fct-type": "function",
        "title": "textarea"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "textarea",
        "normalized": "(a-\u003eEither b c)-\u003eInt-\u003eInt-\u003ec-\u003eForm d a b Html()c",
        "package": "reform-blaze",
        "partial": "",
        "signature": "(input-\u003eEither error text)-\u003eInt-\u003eInt-\u003etext-\u003eForm m input error Html()text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Common.html#v:ul",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cul class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Common",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ul",
        "fct-type": "function",
        "title": "ul"
      },
      "index": {
        "description": "wrap ul class reform around Form",
        "hierarchy": "Text Reform Blaze Common",
        "module": "Text.Reform.Blaze.Common",
        "name": "ul",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions creating Reform using blaze-html markup.\n\u003c/p\u003e\u003cp\u003eThis module assumes that you wish for text based controls such as \u003ccode\u003e\u003ca\u003einputText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etextarea\u003c/a\u003e\u003c/code\u003e to using \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e values. If you prefer \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e see \u003ca\u003eText.Reform.Blaze.Text\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Blaze-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "This module provides functions creating Reform using blaze-html markup This module assumes that you wish for text based controls such as inputText and textarea to using String values If you prefer Text see Text.Reform.Blaze.Text",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "String",
        "normalized": "",
        "package": "reform-blaze",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:br",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#br",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "create br tag",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "br",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"button\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "create button type button button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "button",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:buttonReset",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"reset\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#buttonReset",
        "fct-type": "function",
        "title": "buttonReset"
      },
      "index": {
        "description": "create button type reset button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "buttonReset",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:buttonSubmit",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e children-\u003e Form m input error Html () (Maybe String)",
        "fct-type": "function",
        "title": "buttonSubmit"
      },
      "index": {
        "description": "create button type submit button element",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "buttonSubmit",
        "normalized": "String-\u003ea-\u003eForm b c d Html()(Maybe String)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "String-\u003echildren-\u003eForm m input error Html()(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:childErrorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIncludes errors from child forms.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#childErrorList",
        "fct-type": "function",
        "title": "childErrorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form Includes errors from child forms The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "childErrorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "Error List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:errorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#errorList",
        "fct-type": "function",
        "title": "errorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "errorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:fieldset",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cfieldset class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#fieldset",
        "fct-type": "function",
        "title": "fieldset"
      },
      "index": {
        "description": "wrap fieldset class reform around Form",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "fieldset",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:form",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cform action=action method=\"POST\" enctype=\"multipart/form-data\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "action-\u003e [(Text, Text)]-\u003e Html-\u003e Html",
        "fct-type": "function",
        "title": "form"
      },
      "index": {
        "description": "create form action action method POST enctype multipart form-data",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "form",
        "normalized": "a-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml",
        "package": "reform-blaze",
        "partial": "",
        "signature": "action-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputButton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"button\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThe element is a push button with a text label. The button does nothing by default, but actions can be added using javascript. This element does not add any data to the form data set.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebutton\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e Form m input error Html () ()",
        "fct-type": "function",
        "title": "inputButton"
      },
      "index": {
        "description": "Create an input type button element The element is push button with text label The button does nothing by default but actions can be added using javascript This element does not add any data to the form data set see also button",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputButton",
        "normalized": "String-\u003eForm a b c Html()()",
        "package": "reform-blaze",
        "partial": "Button",
        "signature": "String-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputCheckbox",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a single \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating if it was checked or not.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einputCheckboxes\u003c/a\u003e\u003c/code\u003e\n FIXME: Should this built on something in Generalized?\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Bool-\u003e Form m input error Html () Bool",
        "fct-type": "function",
        "title": "inputCheckbox"
      },
      "index": {
        "description": "Create single input type checkbox element returns Bool indicating if it was checked or not see also inputCheckboxes FIXME Should this built on something in Generalized",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputCheckbox",
        "normalized": "Bool-\u003eForm a b c Html()Bool",
        "package": "reform-blaze",
        "partial": "Checkbox",
        "signature": "Bool-\u003eForm m input error Html()Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputCheckboxes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "inputCheckboxes"
      },
      "index": {
        "description": "Create group of input type checkbox elements",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputCheckboxes",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Checkboxes",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis control may succeed even if the user does not actually select a file to upload. In that case the uploaded name will likely be \"\" and the file contents will be empty as well.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () (FileType input)",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputFile",
        "fct-type": "function",
        "title": "inputFile"
      },
      "index": {
        "description": "Create an input type file element This control may succeed even if the user does not actually select file to upload In that case the uploaded name will likely be and the file contents will be empty as well",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputFile",
        "normalized": "Form a b c Html()(FileType b)",
        "package": "reform-blaze",
        "partial": "File",
        "signature": "Form m input error Html()(FileType input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputHidden",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"hidden\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e Form m input error Html () String",
        "fct-type": "function",
        "title": "inputHidden"
      },
      "index": {
        "description": "Create an input type hidden element",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputHidden",
        "normalized": "String-\u003eForm a b c Html()String",
        "package": "reform-blaze",
        "partial": "Hidden",
        "signature": "String-\u003eForm m input error Html()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputPassword",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"password\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () String",
        "fct-source": "src/Text-Reform-Blaze-String.html#inputPassword",
        "fct-type": "function",
        "title": "inputPassword"
      },
      "index": {
        "description": "Create an input type password element",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputPassword",
        "normalized": "Form a b c Html()String",
        "package": "reform-blaze",
        "partial": "Password",
        "signature": "Form m input error Html()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputRadio",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"radio\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "inputRadio"
      },
      "index": {
        "description": "Create group of input type radio elements",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputRadio",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "Radio",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputReset",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e Form m input error Html () ()",
        "fct-type": "function",
        "title": "inputReset"
      },
      "index": {
        "description": "Create an input type reset element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputReset",
        "normalized": "String-\u003eForm a b c Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "String-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eJust\u003c/code\u003e \u003cem\u003evalue\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e if this button was used to submit the form.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNothing\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    if this button was not used to submit the form.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e Form m input error Html () (Maybe String)",
        "fct-type": "function",
        "title": "inputSubmit"
      },
      "index": {
        "description": "Create an input type submit element returns Just value if this button was used to submit the form Nothing if this button was not used to submit the form",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputSubmit",
        "normalized": "String-\u003eForm a b c Html()(Maybe String)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "String-\u003eForm m input error Html()(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:inputText",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "String-\u003e Form m input error Html () String",
        "fct-type": "function",
        "title": "inputText"
      },
      "index": {
        "description": "Create an input type text element",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "inputText",
        "normalized": "String-\u003eForm a b c Html()String",
        "package": "reform-blaze",
        "partial": "Text",
        "signature": "String-\u003eForm m input error Html()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ca\u003eor ++\u003c/a\u003e to ensure that the \u003ccode\u003efor\u003c/code\u003e attribute references the correct \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e label \"some input field: \" ++\u003e inputText \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "create label element Use this with or to ensure that the for attribute references the correct id label some input field inputText",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "label",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:li",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cli class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#li",
        "fct-type": "function",
        "title": "li"
      },
      "index": {
        "description": "wrap li class reform around Form",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "li",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:ol",
      "description": {
        "fct-descr": "\u003cp\u003ewrap an \u003ccode\u003e\u003col class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ol",
        "fct-type": "function",
        "title": "ol"
      },
      "index": {
        "description": "wrap an ol class reform around Form",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "ol",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eselectMultiple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "create select select element plus its option option children see also selectMultiple",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "select",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:selectMultiple",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003eThis creates a \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e element which allows more than one item to be selected.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "selectMultiple"
      },
      "index": {
        "description": "create select multiple multiple select element plus its option option children This creates select element which allows more than one item to be selected",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "selectMultiple",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Multiple",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:textarea",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ctextarea\u003e\u003c/textarea\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Int-\u003e Int-\u003e String-\u003e Form m input error Html () String",
        "fct-type": "function",
        "title": "textarea"
      },
      "index": {
        "description": "Create textarea textarea element",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "textarea",
        "normalized": "Int-\u003eInt-\u003eString-\u003eForm a b c Html()String",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eString-\u003eForm m input error Html()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-String.html#v:ul",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cul class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.String",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ul",
        "fct-type": "function",
        "title": "ul"
      },
      "index": {
        "description": "wrap ul class reform around Form",
        "hierarchy": "Text Reform Blaze String",
        "module": "Text.Reform.Blaze.String",
        "name": "ul",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions creating Reform using blaze-html markup.\n\u003c/p\u003e\u003cp\u003eThis module assumes that you wish for text based controls such as \u003ccode\u003e\u003ca\u003einputText\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etextarea\u003c/a\u003e\u003c/code\u003e to using \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values. If you prefer \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e see \u003ca\u003eText.Reform.Blaze.String\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Blaze-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "This module provides functions creating Reform using blaze-html markup This module assumes that you wish for text based controls such as inputText and textarea to using Text values If you prefer String see Text.Reform.Blaze.String",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "Text",
        "normalized": "",
        "package": "reform-blaze",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:br",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#br",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "create br tag",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "br",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"button\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "create button type button button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "button",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:buttonReset",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"reset\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#buttonReset",
        "fct-type": "function",
        "title": "buttonReset"
      },
      "index": {
        "description": "create button type reset button element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "buttonReset",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:buttonSubmit",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a  \u003ccode\u003e\u003cbutton type=\"submit\"\u003e\u003c/button\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e children-\u003e Form m input error Html () (Maybe Text)",
        "fct-type": "function",
        "title": "buttonSubmit"
      },
      "index": {
        "description": "create button type submit button element",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "buttonSubmit",
        "normalized": "Text-\u003ea-\u003eForm b c d Html()(Maybe Text)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "Text-\u003echildren-\u003eForm m input error Html()(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:childErrorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIncludes errors from child forms.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#childErrorList",
        "fct-type": "function",
        "title": "childErrorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form Includes errors from child forms The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "childErrorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "Error List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:errorList",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003cul\u003e\u003c/code\u003e which contains all the errors related to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\ul\\\u003c/a\u003e\u003c/code\u003e will have the attribute \u003ccode\u003eclass=\"reform-error-list\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#errorList",
        "fct-type": "function",
        "title": "errorList"
      },
      "index": {
        "description": "create ul which contains all the errors related to the Form The ul will have the attribute class reform-error-list",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "errorList",
        "normalized": "Form a b c Html()()",
        "package": "reform-blaze",
        "partial": "List",
        "signature": "Form m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:fieldset",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cfieldset class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#fieldset",
        "fct-type": "function",
        "title": "fieldset"
      },
      "index": {
        "description": "wrap fieldset class reform around Form",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "fieldset",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:form",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cform action=action method=\"POST\" enctype=\"multipart/form-data\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "action-\u003e [(Text, Text)]-\u003e Html-\u003e Html",
        "fct-type": "function",
        "title": "form"
      },
      "index": {
        "description": "create form action action method POST enctype multipart form-data",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "form",
        "normalized": "a-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml",
        "package": "reform-blaze",
        "partial": "",
        "signature": "action-\u003e[(Text,Text)]-\u003eHtml-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputButton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"button\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThe element is a push button with a text label. The button does nothing by default, but actions can be added using javascript. This element does not add any data to the form data set.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ebutton\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e Form m input error Html () ()",
        "fct-type": "function",
        "title": "inputButton"
      },
      "index": {
        "description": "Create an input type button element The element is push button with text label The button does nothing by default but actions can be added using javascript This element does not add any data to the form data set see also button",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputButton",
        "normalized": "Text-\u003eForm a b c Html()()",
        "package": "reform-blaze",
        "partial": "Button",
        "signature": "Text-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputCheckbox",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a single \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating if it was checked or not.\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003einputCheckboxes\u003c/a\u003e\u003c/code\u003e\n FIXME: Should this built on something in Generalized?\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Bool-\u003e Form m input error Html () Bool",
        "fct-type": "function",
        "title": "inputCheckbox"
      },
      "index": {
        "description": "Create single input type checkbox element returns Bool indicating if it was checked or not see also inputCheckboxes FIXME Should this built on something in Generalized",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputCheckbox",
        "normalized": "Bool-\u003eForm a b c Html()Bool",
        "package": "reform-blaze",
        "partial": "Checkbox",
        "signature": "Bool-\u003eForm m input error Html()Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputCheckboxes",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"checkbox\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "inputCheckboxes"
      },
      "index": {
        "description": "Create group of input type checkbox elements",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputCheckboxes",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Checkboxes",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis control may succeed even if the user does not actually select a file to upload. In that case the uploaded name will likely be \"\" and the file contents will be empty as well.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () (FileType input)",
        "fct-source": "src/Text-Reform-Blaze-Common.html#inputFile",
        "fct-type": "function",
        "title": "inputFile"
      },
      "index": {
        "description": "Create an input type file element This control may succeed even if the user does not actually select file to upload In that case the uploaded name will likely be and the file contents will be empty as well",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputFile",
        "normalized": "Form a b c Html()(FileType b)",
        "package": "reform-blaze",
        "partial": "File",
        "signature": "Form m input error Html()(FileType input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputHidden",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"hidden\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e Form m input error Html () Text",
        "fct-type": "function",
        "title": "inputHidden"
      },
      "index": {
        "description": "Create an input type hidden element",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputHidden",
        "normalized": "Text-\u003eForm a b c Html()Text",
        "package": "reform-blaze",
        "partial": "Hidden",
        "signature": "Text-\u003eForm m input error Html()Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputPassword",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"password\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html () Text",
        "fct-source": "src/Text-Reform-Blaze-Text.html#inputPassword",
        "fct-type": "function",
        "title": "inputPassword"
      },
      "index": {
        "description": "Create an input type password element",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputPassword",
        "normalized": "Form a b c Html()Text",
        "package": "reform-blaze",
        "partial": "Password",
        "signature": "Form m input error Html()Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputRadio",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group of \u003ccode\u003e\u003cinput type=\"radio\"\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "inputRadio"
      },
      "index": {
        "description": "Create group of input type radio elements",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputRadio",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "Radio",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputReset",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eThis element does not add any data to the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e Form m input error Html () ()",
        "fct-type": "function",
        "title": "inputReset"
      },
      "index": {
        "description": "Create an input type reset element This element does not add any data to the form data set",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputReset",
        "normalized": "Text-\u003eForm a b c Html()()",
        "package": "reform-blaze",
        "partial": "Reset",
        "signature": "Text-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003ereturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eJust\u003c/code\u003e \u003cem\u003evalue\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e if this button was used to submit the form.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNothing\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    if this button was not used to submit the form.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e Form m input error Html () (Maybe Text)",
        "fct-type": "function",
        "title": "inputSubmit"
      },
      "index": {
        "description": "Create an input type submit element returns Just value if this button was used to submit the form Nothing if this button was not used to submit the form",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputSubmit",
        "normalized": "Text-\u003eForm a b c Html()(Maybe Text)",
        "package": "reform-blaze",
        "partial": "Submit",
        "signature": "Text-\u003eForm m input error Html()(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:inputText",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Text-\u003e Form m input error Html () Text",
        "fct-type": "function",
        "title": "inputText"
      },
      "index": {
        "description": "Create an input type text element",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "inputText",
        "normalized": "Text-\u003eForm a b c Html()Text",
        "package": "reform-blaze",
        "partial": "Text",
        "signature": "Text-\u003eForm m input error Html()Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e element.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ca\u003eor ++\u003c/a\u003e to ensure that the \u003ccode\u003efor\u003c/code\u003e attribute references the correct \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e label \"some input field: \" ++\u003e inputText \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "children -\u003e Form m input error Html () ()",
        "fct-source": "src/Text-Reform-Blaze-Common.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "create label element Use this with or to ensure that the for attribute references the correct id label some input field inputText",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "label",
        "normalized": "a-\u003eForm b c d Html()()",
        "package": "reform-blaze",
        "partial": "",
        "signature": "children-\u003eForm m input error Html()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:li",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cli class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#li",
        "fct-type": "function",
        "title": "li"
      },
      "index": {
        "description": "wrap li class reform around Form",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "li",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:ol",
      "description": {
        "fct-descr": "\u003cp\u003ewrap an \u003ccode\u003e\u003col class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ol",
        "fct-type": "function",
        "title": "ol"
      },
      "index": {
        "description": "wrap an ol class reform around Form",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "ol",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eselectMultiple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () a",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "create select select element plus its option option children see also selectMultiple",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "select",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()a",
        "package": "reform-blaze",
        "partial": "",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:selectMultiple",
      "description": {
        "fct-descr": "\u003cp\u003ecreate \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/select\u003e\u003c/code\u003e element plus its \u003ccode\u003e\u003coption\u003e\u003c/option\u003e\u003c/code\u003e children.\n\u003c/p\u003e\u003cp\u003eThis creates a \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e element which allows more than one item to be selected.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "[(a, lbl)]-\u003e (a -\u003e Bool)-\u003e Form m input error Html () [a]",
        "fct-type": "function",
        "title": "selectMultiple"
      },
      "index": {
        "description": "create select multiple multiple select element plus its option option children This creates select element which allows more than one item to be selected",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "selectMultiple",
        "normalized": "[(a,b)]-\u003e(a-\u003eBool)-\u003eForm c d e Html()[a]",
        "package": "reform-blaze",
        "partial": "Multiple",
        "signature": "[(a,lbl)]-\u003e(a-\u003eBool)-\u003eForm m input error Html()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:textarea",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ctextarea\u003e\u003c/textarea\u003e element\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Int-\u003e Int-\u003e Text-\u003e Form m input error Html () Text",
        "fct-type": "function",
        "title": "textarea"
      },
      "index": {
        "description": "Create textarea textarea element",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "textarea",
        "normalized": "Int-\u003eInt-\u003eText-\u003eForm a b c Html()Text",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eText-\u003eForm m input error Html()Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform-blaze/docs/Text-Reform-Blaze-Text.html#v:ul",
      "description": {
        "fct-descr": "\u003cp\u003ewrap a \u003ccode\u003e\u003cul class=\"reform\"\u003e\u003c/code\u003e around a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Blaze.Text",
        "fct-package": "reform-blaze",
        "fct-signature": "Form m input error Html proof a -\u003e Form m input error Html proof a",
        "fct-source": "src/Text-Reform-Blaze-Common.html#ul",
        "fct-type": "function",
        "title": "ul"
      },
      "index": {
        "description": "wrap ul class reform around Form",
        "hierarchy": "Text Reform Blaze Text",
        "module": "Text.Reform.Blaze.Text",
        "name": "ul",
        "normalized": "Form a b c Html d e-\u003eForm a b c Html d e",
        "package": "reform-blaze",
        "partial": "",
        "signature": "Form m input error Html proof a-\u003eForm m input error Html proof a"
      }
    }
  }
]