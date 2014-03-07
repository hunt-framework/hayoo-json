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
        "word": "reform-happstack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for using Reform with the Haskell Web Framework Happstack. \u003ca\u003ehttp://happstack.com/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Happstack",
          "name": "Happstack",
          "package": "reform-happstack",
          "source": "src/Text-Reform-Happstack.html",
          "type": "module"
        },
        "index": {
          "description": "Support for using Reform with the Haskell Web Framework Happstack http happstack.com",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "Happstack",
          "package": "reform-happstack",
          "partial": "Happstack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: add a cookie for CSRF protection\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "addCSRFCookie",
          "package": "reform-happstack",
          "signature": "Text-\u003e m Text",
          "type": "function"
        },
        "index": {
          "description": "Utility Function add cookie for CSRF protection",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "addCSRFCookie",
          "normalized": "Text-\u003ea Text",
          "package": "reform-happstack",
          "partial": "CSRFCookie",
          "signature": "Text-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:addCSRFCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: check that the CSRF cookie and hidden field exist and are equal\n\u003c/p\u003e\u003cp\u003eIf the check fails, this function will call:\n\u003c/p\u003e\u003cpre\u003e escape $ forbidden (toResponse \"CSRF check failed.\")\n\u003c/pre\u003e",
          "module": "Text.Reform.Happstack",
          "name": "checkCSRF",
          "package": "reform-happstack",
          "signature": "Text -\u003e m ()",
          "source": "src/Text-Reform-Happstack.html#checkCSRF",
          "type": "function"
        },
        "index": {
          "description": "Utility Function check that the CSRF cookie and hidden field exist and are equal If the check fails this function will call escape forbidden toResponse CSRF check failed",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "checkCSRF",
          "normalized": "Text-\u003ea()",
          "package": "reform-happstack",
          "partial": "CSRF",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:checkCSRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate the name to use for the csrf cookie\n\u003c/p\u003e\u003cp\u003eCurrently this returns the static cookie \u003ca\u003ereform-csrf\u003c/a\u003e. Using the prefix would allow\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "csrfName",
          "package": "reform-happstack",
          "signature": "Text",
          "source": "src/Text-Reform-Happstack.html#csrfName",
          "type": "function"
        },
        "index": {
          "description": "generate the name to use for the csrf cookie Currently this returns the static cookie reform-csrf Using the prefix would allow",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "csrfName",
          "package": "reform-happstack",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:csrfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate an \u003ccode\u003e\u003ca\u003eEnvironment\u003c/a\u003e\u003c/code\u003e to be used with \u003ccode\u003e\u003ca\u003erunForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "environment",
          "package": "reform-happstack",
          "signature": "Environment m [Input]",
          "source": "src/Text-Reform-Happstack.html#environment",
          "type": "function"
        },
        "index": {
          "description": "create an Environment to be used with runForm",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "environment",
          "normalized": "Environment a[Input]",
          "package": "reform-happstack",
          "signature": "Environment m[Input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: get CSRF protection cookie\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "getCSRFCookie",
          "package": "reform-happstack",
          "signature": "Text -\u003e m Text",
          "source": "src/Text-Reform-Happstack.html#getCSRFCookie",
          "type": "function"
        },
        "index": {
          "description": "Utility Function get CSRF protection cookie",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "getCSRFCookie",
          "normalized": "Text-\u003ea Text",
          "package": "reform-happstack",
          "partial": "CSRFCookie",
          "signature": "Text-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:getCSRFCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to 'eitherForm environment' but includes double-submit\n (Cross Site Request Forgery) CSRF protection.\n\u003c/p\u003e\u003cp\u003eThe form must have been created using \u003ccode\u003e\u003ca\u003ehappstackViewForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehappstackViewForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "happstackEitherForm",
          "package": "reform-happstack",
          "signature": "([(Text, Text)] -\u003e view -\u003e view)-\u003e Text-\u003e Form m [Input] error view proof a-\u003e m (Either view a)",
          "type": "function"
        },
        "index": {
          "description": "similar to eitherForm environment but includes double-submit Cross Site Request Forgery CSRF protection The form must have been created using happstackViewForm see also happstackViewForm",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "happstackEitherForm",
          "normalized": "([(Text,Text)]-\u003ea-\u003ea)-\u003eText-\u003eForm b[Input]c a d e-\u003eb(Either a e)",
          "package": "reform-happstack",
          "partial": "Either Form",
          "signature": "([(Text,Text)]-\u003eview-\u003eview)-\u003eText-\u003eForm m[Input]error view proof a-\u003em(Either view a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:happstackEitherForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: wrap the \u003ccode\u003eview\u003c/code\u003e in a \u003ccode\u003e\u003cform\u003e\u003c/code\u003e that includes\n double-submit CSRF protection.\n\u003c/p\u003e\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003eaddCSRFCookie\u003c/a\u003e\u003c/code\u003e to set the cookie and adds the token as a\n hidden field.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehappstackViewForm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehappstackEitherForm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echeckCSRF\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "happstackView",
          "package": "reform-happstack",
          "signature": "([(Text, Text)] -\u003e view -\u003e view)-\u003e Text-\u003e view-\u003e m view",
          "type": "function"
        },
        "index": {
          "description": "Utility Function wrap the view in form that includes double-submit CSRF protection calls addCSRFCookie to set the cookie and adds the token as hidden field see also happstackViewForm happstackEitherForm checkCSRF",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "happstackView",
          "normalized": "([(Text,Text)]-\u003ea-\u003ea)-\u003eText-\u003ea-\u003eb a",
          "package": "reform-happstack",
          "partial": "View",
          "signature": "([(Text,Text)]-\u003eview-\u003eview)-\u003eText-\u003eview-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:happstackView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003eviewForm\u003c/a\u003e\u003c/code\u003e but includes double-submit\n (Cross Site Request Forgery) CSRF protection.\n\u003c/p\u003e\u003cp\u003eMust be used with \u003ccode\u003e\u003ca\u003ehappstackEitherForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ehappstackEitherForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "happstackViewForm",
          "package": "reform-happstack",
          "signature": "([(Text, Text)] -\u003e view -\u003e view)-\u003e Text-\u003e Form m input error view proof a-\u003e m view",
          "type": "function"
        },
        "index": {
          "description": "similar to viewForm but includes double-submit Cross Site Request Forgery CSRF protection Must be used with happstackEitherForm see also happstackEitherForm",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "happstackViewForm",
          "normalized": "([(Text,Text)]-\u003ea-\u003ea)-\u003eText-\u003eForm b c d a e f-\u003eb a",
          "package": "reform-happstack",
          "partial": "View Form",
          "signature": "([(Text,Text)]-\u003eview-\u003eview)-\u003eText-\u003eForm m input error view proof a-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:happstackViewForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis function embeds a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e in an HTML page.\n\u003c/p\u003e\u003cp\u003eWhen the page is requested with a \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e request, the form view will\n be rendered.\n\u003c/p\u003e\u003cp\u003eWhen the page is requested with a \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e request, the form data\n will be extracted and validated.\n\u003c/p\u003e\u003cp\u003eIf a value is successfully produced the success handler will be\n called with the value.\n\u003c/p\u003e\u003cp\u003eOn failure the failure handler will be called. If no failure\n handler is provided, then the page will simply be redisplayed. The\n form will be rendered with the errors and previous submit data shown.\n\u003c/p\u003e\u003cp\u003eThe first argument to \u003ccode\u003e\u003ca\u003ereform\u003c/a\u003e\u003c/code\u003e is a function which generates the\n \u003ccode\u003e\u003cform\u003e\u003c/code\u003e tag. It should generally come from the template library\n you are using, such as the \u003ccode\u003eform\u003c/code\u003e function from \u003ccode\u003ereform-hsp\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e[(String, String)]\u003c/code\u003e argument is a list of '(name, value)'\n pairs for extra hidden fields that should be added to the\n \u003ccode\u003e\u003cform\u003e\u003c/code\u003e tag. These hidden fields are used to provide cross-site\n request forgery (CSRF) protection, and to support multiple forms on\n the same page.\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "reform",
          "package": "reform-happstack",
          "signature": "([(Text, Text)] -\u003e view -\u003e view)-\u003e Text-\u003e (a -\u003e m b)-\u003e Maybe ([(FormRange, error)] -\u003e view -\u003e m b)-\u003e Form m [Input] error view proof a-\u003e m view",
          "type": "function"
        },
        "index": {
          "description": "this function embeds Form in an HTML page When the page is requested with GET request the form view will be rendered When the page is requested with POST request the form data will be extracted and validated If value is successfully produced the success handler will be called with the value On failure the failure handler will be called If no failure handler is provided then the page will simply be redisplayed The form will be rendered with the errors and previous submit data shown The first argument to reform is function which generates the form tag It should generally come from the template library you are using such as the form function from reform-hsp The String String argument is list of name value pairs for extra hidden fields that should be added to the form tag These hidden fields are used to provide cross-site request forgery CSRF protection and to support multiple forms on the same page",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "reform",
          "normalized": "([(Text,Text)]-\u003ea-\u003ea)-\u003eText-\u003e(b-\u003ec d)-\u003eMaybe([(FormRange,e)]-\u003ea-\u003ec d)-\u003eForm c[Input]e a f b-\u003ec a",
          "package": "reform-happstack",
          "signature": "([(Text,Text)]-\u003eview-\u003eview)-\u003eText-\u003e(a-\u003em b)-\u003eMaybe([(FormRange,error)]-\u003eview-\u003em b)-\u003eForm m[Input]error view proof a-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:reform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function allows you to embed a a single \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e into a HTML page.\n\u003c/p\u003e\u003cp\u003eIn general, you will want to use the \u003ccode\u003e\u003ca\u003ereform\u003c/a\u003e\u003c/code\u003e function instead,\n which allows more than one \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e to be used on the same page.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ereform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Happstack",
          "name": "reformSingle",
          "package": "reform-happstack",
          "signature": "([(Text, Text)] -\u003e view -\u003e view)-\u003e Text-\u003e (a -\u003e m b)-\u003e Maybe ([(FormRange, error)] -\u003e view -\u003e m b)-\u003e Form m [Input] error view proof a-\u003e m view",
          "type": "function"
        },
        "index": {
          "description": "This function allows you to embed single Form into HTML page In general you will want to use the reform function instead which allows more than one Form to be used on the same page see also reform",
          "hierarchy": "Text Reform Happstack",
          "module": "Text.Reform.Happstack",
          "name": "reformSingle",
          "normalized": "([(Text,Text)]-\u003ea-\u003ea)-\u003eText-\u003e(b-\u003ec d)-\u003eMaybe([(FormRange,e)]-\u003ea-\u003ec d)-\u003eForm c[Input]e a f b-\u003ec a",
          "package": "reform-happstack",
          "partial": "Single",
          "signature": "([(Text,Text)]-\u003eview-\u003eview)-\u003eText-\u003e(a-\u003em b)-\u003eMaybe([(FormRange,error)]-\u003eview-\u003em b)-\u003eForm m[Input]error view proof a-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform-happstack/docs/Text-Reform-Happstack.html#v:reformSingle"
      }
    }
  ]
]