[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "module",
        "fct-source": "src/Web-Zwaluw.html",
        "fct-type": "module",
        "title": "Zwaluw"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "Zwaluw",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "Zwaluw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#t::-45-",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "data",
        "fct-source": "src/Web-Zwaluw.html#%3A-",
        "fct-type": "data",
        "title": ":-"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": ":-",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#t:Router",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "data",
        "fct-source": "src/Web-Zwaluw.html#Router",
        "fct-type": "data",
        "title": "Router"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "Router",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix operator for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Web-Zwaluw.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Infix operator for mappend",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Zwaluw",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v::-45-",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "a :- b",
        "fct-source": "src/Web-Zwaluw.html#%3A-",
        "fct-type": "function",
        "title": ":-"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": ":-",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr0",
      "description": {
        "fct-descr": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nil :: Router r ([a] :- r)\n nil = constr0 [] $ \\x -\u003e do [] \u003c- x; Just ()\n\u003c/pre\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "o -\u003e (Maybe o -\u003e Maybe ()) -\u003e Router r (o :- r)",
        "fct-source": "src/Web-Zwaluw.html#constr0",
        "fct-type": "function",
        "title": "constr0"
      },
      "index": {
        "description": "For example nil Router nil constr0 do Just",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "constr0",
        "normalized": "a-\u003e(Maybe a-\u003eMaybe())-\u003eRouter b(a b)",
        "package": "Zwaluw",
        "partial": "",
        "signature": "o-\u003e(Maybe o-\u003eMaybe())-\u003eRouter r(o r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr1",
      "description": {
        "fct-descr": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e left :: Router (a :- r) (Either a b :- r)\n left = constr1 Left $ \\x -\u003e do Left a \u003c- x; return a\n\u003c/pre\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "(a -\u003e o) -\u003e (Maybe o -\u003e Maybe a) -\u003e Router (a :- r) (o :- r)",
        "fct-source": "src/Web-Zwaluw.html#constr1",
        "fct-type": "function",
        "title": "constr1"
      },
      "index": {
        "description": "For example left Router Either left constr1 Left do Left return",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "constr1",
        "normalized": "(a-\u003eb)-\u003e(Maybe b-\u003eMaybe a)-\u003eRouter(a c)(b c)",
        "package": "Zwaluw",
        "partial": "",
        "signature": "(a-\u003eo)-\u003e(Maybe o-\u003eMaybe a)-\u003eRouter(a r)(o r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr2",
      "description": {
        "fct-descr": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e cons :: Router (a :- [a] :- r) ([a] :- r)\n cons = constr2 (:) $ \\x -\u003e do a:as \u003c- x; return (a, as)\n\u003c/pre\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "(a -\u003e b -\u003e o) -\u003e (Maybe o -\u003e Maybe (a, b)) -\u003e Router (a :- (b :- r)) (o :- r)",
        "fct-source": "src/Web-Zwaluw.html#constr2",
        "fct-type": "function",
        "title": "constr2"
      },
      "index": {
        "description": "For example cons Router cons constr2 do as return as",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "constr2",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(Maybe c-\u003eMaybe(a,b))-\u003eRouter(a(b d))(c d)",
        "package": "Zwaluw",
        "partial": "",
        "signature": "(a-\u003eb-\u003eo)-\u003e(Maybe o-\u003eMaybe(a,b))-\u003eRouter(a(b r))(o r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes any integer.\n\u003c/p\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router r (Int :- r)",
        "fct-source": "src/Web-Zwaluw.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "Routes any integer",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "int",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:lit",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes a constant string.\n\u003c/p\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "String -\u003e Router r r",
        "fct-source": "src/Web-Zwaluw.html#lit",
        "fct-type": "function",
        "title": "lit"
      },
      "index": {
        "description": "Routes constant string",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "lit",
        "normalized": "String-\u003eRouter a a",
        "package": "Zwaluw",
        "partial": "",
        "signature": "String-\u003eRouter r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:parse",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router () a -\u003e String -\u003e [a]",
        "fct-source": "src/Web-Zwaluw.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "parse",
        "normalized": "Router()a-\u003eString-\u003e[a]",
        "package": "Zwaluw",
        "partial": "",
        "signature": "Router()a-\u003eString-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:parse1",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router () (a :- ()) -\u003e String -\u003e [a]",
        "fct-source": "src/Web-Zwaluw.html#parse1",
        "fct-type": "function",
        "title": "parse1"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "parse1",
        "normalized": "Router()(a())-\u003eString-\u003e[a]",
        "package": "Zwaluw",
        "partial": "",
        "signature": "Router()(a())-\u003eString-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:slash",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes a slash.\n\u003c/p\u003e",
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router r r",
        "fct-source": "src/Web-Zwaluw.html#slash",
        "fct-type": "function",
        "title": "slash"
      },
      "index": {
        "description": "Routes slash",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "slash",
        "normalized": "",
        "package": "Zwaluw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:unparse",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router () a -\u003e a -\u003e [String]",
        "fct-source": "src/Web-Zwaluw.html#unparse",
        "fct-type": "function",
        "title": "unparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "unparse",
        "normalized": "Router()a-\u003ea-\u003e[String]",
        "package": "Zwaluw",
        "partial": "",
        "signature": "Router()a-\u003ea-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:unparse1",
      "description": {
        "fct-module": "Web.Zwaluw",
        "fct-package": "Zwaluw",
        "fct-signature": "Router () (a :- ()) -\u003e a -\u003e [String]",
        "fct-source": "src/Web-Zwaluw.html#unparse1",
        "fct-type": "function",
        "title": "unparse1"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Zwaluw",
        "module": "Web.Zwaluw",
        "name": "unparse1",
        "normalized": "Router()(a())-\u003ea-\u003e[String]",
        "package": "Zwaluw",
        "partial": "",
        "signature": "Router()(a())-\u003ea-\u003e[String]"
      }
    }
  }
]