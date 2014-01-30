[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for static routing tables in Happstack.  The routing\n tables are order independent as long as:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if any two handlers overlap, one of them handles a more specific\n path than the other.  The more specific handler is then tried\n first.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRouting tables are constructed from \u003ccode\u003e\u003ca\u003edir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eremainingPath\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e, and (for now) \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA routing table is compiled by using \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e.  The result is an\n overlap report, and a prefix tree that is used to efficiently\n dispatch requests by means of \u003ccode\u003edispatch\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the file \u003ccode\u003esrc/Happstack/StaticRouting/Test.hs\u003c/code\u003e in the distribution\n for examples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "module",
        "fct-source": "src/Happstack-StaticRouting.html",
        "fct-type": "module",
        "title": "StaticRouting"
      },
      "index": {
        "description": "Support for static routing tables in Happstack The routing tables are order independent as long as if any two handlers overlap one of them handles more specific path than the other The more specific handler is then tried first Routing tables are constructed from dir path remainingPath choice and for now param routing table is compiled by using compile The result is an overlap report and prefix tree that is used to efficiently dispatch requests by means of dispatch See the file src Happstack StaticRouting Test.hs in the distribution for examples",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "StaticRouting",
        "normalized": "",
        "package": "happstack-static-routing",
        "partial": "Static Routing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eSupport for varying number of arguments to \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e handlers.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "class",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#Path",
        "fct-type": "class",
        "title": "Path"
      },
      "index": {
        "description": "Support for varying number of arguments to path handlers",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "Path",
        "normalized": "",
        "package": "happstack-static-routing",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003eStatic routing tables consisting of handlers of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "data",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#Route",
        "fct-type": "data",
        "title": "Route"
      },
      "index": {
        "description": "Static routing tables consisting of handlers of type",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "Route",
        "normalized": "",
        "package": "happstack-static-routing",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:choice",
      "description": {
        "fct-descr": "\u003cp\u003eCombine several route alternatives into one.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "[Route a] -\u003e Route a",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#choice",
        "fct-type": "function",
        "title": "choice"
      },
      "index": {
        "description": "Combine several route alternatives into one",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "choice",
        "normalized": "[Route a]-\u003eRoute a",
        "package": "happstack-static-routing",
        "partial": "",
        "signature": "[Route a]-\u003eRoute a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eCompile routes, also return possible overlap report.  If the\n overlap report is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the routing table is order\n independent.  If the overlap report is \u003ccode\u003eJust s\u003c/code\u003e, then \u003ccode\u003es\u003c/code\u003e is a\n textual representation of all the paths that are order dependent,\n suitable for a warning message.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "Route (m a) -\u003e (m a, Maybe String)",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Compile routes also return possible overlap report If the overlap report is Nothing the routing table is order independent If the overlap report is Just then is textual representation of all the paths that are order dependent suitable for warning message",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "compile",
        "normalized": "Route(a b)-\u003e(a b,Maybe String)",
        "package": "happstack-static-routing",
        "partial": "",
        "signature": "Route(m a)-\u003e(m a,Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:dir",
      "description": {
        "fct-descr": "\u003cp\u003ePop a path element if it matches the given string.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "String -\u003e Route a -\u003e Route a",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#dir",
        "fct-type": "function",
        "title": "dir"
      },
      "index": {
        "description": "Pop path element if it matches the given string",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "dir",
        "normalized": "String-\u003eRoute a-\u003eRoute a",
        "package": "happstack-static-routing",
        "partial": "",
        "signature": "String-\u003eRoute a-\u003eRoute a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED. Expect a specific parameter to be present.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "String -\u003e Route a -\u003e Route a",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "DEPRECATED Expect specific parameter to be present",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "param",
        "normalized": "String-\u003eRoute a-\u003eRoute a",
        "package": "happstack-static-routing",
        "partial": "",
        "signature": "String-\u003eRoute a-\u003eRoute a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eExpect the given method, and exactly \u003ccode\u003en\u003c/code\u003e more segments, where \u003ccode\u003en\u003c/code\u003e is the arity of the handler.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "Method -\u003e (m a -\u003e hm b) -\u003e h -\u003e Route (hm b)",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Expect the given method and exactly more segments where is the arity of the handler",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "path",
        "normalized": "Method-\u003e(a b-\u003ec d)-\u003ee-\u003eRoute(c d)",
        "package": "happstack-static-routing",
        "partial": "",
        "signature": "Method-\u003e(m a-\u003ehm b)-\u003eh-\u003eRoute(hm b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-static-routing/docs/Happstack-StaticRouting.html#v:remainingPath",
      "description": {
        "fct-descr": "\u003cp\u003eExpect zero or more segments.\n\u003c/p\u003e",
        "fct-module": "Happstack.StaticRouting",
        "fct-package": "happstack-static-routing",
        "fct-signature": "Method -\u003e h -\u003e Route h",
        "fct-source": "src/Happstack-StaticRouting-Internal.html#remainingPath",
        "fct-type": "function",
        "title": "remainingPath"
      },
      "index": {
        "description": "Expect zero or more segments",
        "hierarchy": "Happstack StaticRouting",
        "module": "Happstack.StaticRouting",
        "name": "remainingPath",
        "normalized": "Method-\u003ea-\u003eRoute a",
        "package": "happstack-static-routing",
        "partial": "Path",
        "signature": "Method-\u003eh-\u003eRoute h"
      }
    }
  }
]