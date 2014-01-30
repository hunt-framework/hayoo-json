[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-jmacro/docs/Happstack-Server-JMacro.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides support for using JMacro with Happstack.\n\u003c/p\u003e\u003cp\u003eIt provides the instance,\n\u003c/p\u003e\u003cpre\u003e instance ToMessage JStat\n\u003c/pre\u003e\u003cp\u003eWhich will serve a \u003ccode\u003e\u003ca\u003eJStat\u003c/a\u003e\u003c/code\u003e value as \u003ccode\u003etext/javascript; charset=UTF-8\u003c/code\u003e.\n The rendered JavaScript will be wrapped in an anonymous function that is\n then called, so as to ensure the statements execute in a local scope.\n An implication of this is that top-level unhygienic variables in JMacro\n will \u003cem\u003enot\u003c/em\u003e be globally available; instead, you should set properties on\n the global \u003ccode\u003ewindow\u003c/code\u003e object.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Happstack.Server.JMacro",
        "fct-package": "happstack-jmacro",
        "fct-signature": "module",
        "fct-source": "src/Happstack-Server-JMacro.html",
        "fct-type": "module",
        "title": "JMacro"
      },
      "index": {
        "description": "This modules provides support for using JMacro with Happstack It provides the instance instance ToMessage JStat Which will serve JStat value as text javascript charset UTF-8 The rendered JavaScript will be wrapped in an anonymous function that is then called so as to ensure the statements execute in local scope An implication of this is that top-level unhygienic variables in JMacro will not be globally available instead you should set properties on the global window object",
        "hierarchy": "Happstack Server JMacro",
        "module": "Happstack.Server.JMacro",
        "name": "JMacro",
        "normalized": "",
        "package": "happstack-jmacro",
        "partial": "JMacro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-jmacro/docs/Happstack-Server-JMacro.html#v:jmResponse",
      "description": {
        "fct-descr": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eJStat\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, saturating the variable names with\n a hash computed from the \u003ccode\u003e\u003ca\u003erqUri\u003c/a\u003e\u003c/code\u003e.  Unlike the \u003ccode\u003e\u003ca\u003eToMessage\u003c/a\u003e\u003c/code\u003e instance for\n \u003ccode\u003eJStat\u003c/code\u003e, this doesn't wrap the statements in a function and so the\n workaround for global unhygienic names isn't necessary.  On the other\n hand, generated variable names are a bit longer.\n\u003c/p\u003e",
        "fct-module": "Happstack.Server.JMacro",
        "fct-package": "happstack-jmacro",
        "fct-signature": "JStat -\u003e m Response",
        "fct-source": "src/Happstack-Server-JMacro.html#jmResponse",
        "fct-type": "function",
        "title": "jmResponse"
      },
      "index": {
        "description": "Render JStat into Response saturating the variable names with hash computed from the rqUri Unlike the ToMessage instance for JStat this doesn wrap the statements in function and so the workaround for global unhygienic names isn necessary On the other hand generated variable names are bit longer",
        "hierarchy": "Happstack Server JMacro",
        "module": "Happstack.Server.JMacro",
        "name": "jmResponse",
        "normalized": "JStat-\u003ea Response",
        "package": "happstack-jmacro",
        "partial": "Response",
        "signature": "JStat-\u003em Response"
      }
    }
  }
]