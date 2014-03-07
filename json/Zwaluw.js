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
        "word": "Zwaluw"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "Zwaluw",
          "package": "Zwaluw",
          "source": "src/Web-Zwaluw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "Zwaluw",
          "package": "Zwaluw",
          "partial": "Zwaluw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": ":-",
          "package": "Zwaluw",
          "source": "src/Web-Zwaluw.html#%3A-",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": ":-",
          "package": "Zwaluw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#t::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "Router",
          "package": "Zwaluw",
          "source": "src/Web-Zwaluw.html#Router",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "Router",
          "package": "Zwaluw",
          "partial": "Router",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#t:Router"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix operator for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Zwaluw",
          "name": "(\u003c\u003e)",
          "package": "Zwaluw",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Web-Zwaluw.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix operator for mappend",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Zwaluw",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": ":-",
          "package": "Zwaluw",
          "signature": "a :- b",
          "source": "src/Web-Zwaluw.html#%3A-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": ":-",
          "package": "Zwaluw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e nil :: Router r ([a] :- r)\n nil = constr0 [] $ \\x -\u003e do [] \u003c- x; Just ()\n\u003c/pre\u003e",
          "module": "Web.Zwaluw",
          "name": "constr0",
          "package": "Zwaluw",
          "signature": "o -\u003e (Maybe o -\u003e Maybe ()) -\u003e Router r (o :- r)",
          "source": "src/Web-Zwaluw.html#constr0",
          "type": "function"
        },
        "index": {
          "description": "For example nil Router nil constr0 do Just",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "constr0",
          "normalized": "a-\u003e(Maybe a-\u003eMaybe())-\u003eRouter b(a b)",
          "package": "Zwaluw",
          "signature": "o-\u003e(Maybe o-\u003eMaybe())-\u003eRouter r(o r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e left :: Router (a :- r) (Either a b :- r)\n left = constr1 Left $ \\x -\u003e do Left a \u003c- x; return a\n\u003c/pre\u003e",
          "module": "Web.Zwaluw",
          "name": "constr1",
          "package": "Zwaluw",
          "signature": "(a -\u003e o) -\u003e (Maybe o -\u003e Maybe a) -\u003e Router (a :- r) (o :- r)",
          "source": "src/Web-Zwaluw.html#constr1",
          "type": "function"
        },
        "index": {
          "description": "For example left Router Either left constr1 Left do Left return",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "constr1",
          "normalized": "(a-\u003eb)-\u003e(Maybe b-\u003eMaybe a)-\u003eRouter(a c)(b c)",
          "package": "Zwaluw",
          "signature": "(a-\u003eo)-\u003e(Maybe o-\u003eMaybe a)-\u003eRouter(a r)(o r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e cons :: Router (a :- [a] :- r) ([a] :- r)\n cons = constr2 (:) $ \\x -\u003e do a:as \u003c- x; return (a, as)\n\u003c/pre\u003e",
          "module": "Web.Zwaluw",
          "name": "constr2",
          "package": "Zwaluw",
          "signature": "(a -\u003e b -\u003e o) -\u003e (Maybe o -\u003e Maybe (a, b)) -\u003e Router (a :- (b :- r)) (o :- r)",
          "source": "src/Web-Zwaluw.html#constr2",
          "type": "function"
        },
        "index": {
          "description": "For example cons Router cons constr2 do as return as",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "constr2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(Maybe c-\u003eMaybe(a,b))-\u003eRouter(a(b d))(c d)",
          "package": "Zwaluw",
          "signature": "(a-\u003eb-\u003eo)-\u003e(Maybe o-\u003eMaybe(a,b))-\u003eRouter(a(b r))(o r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:constr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes any integer.\n\u003c/p\u003e",
          "module": "Web.Zwaluw",
          "name": "int",
          "package": "Zwaluw",
          "signature": "Router r (Int :- r)",
          "source": "src/Web-Zwaluw.html#int",
          "type": "function"
        },
        "index": {
          "description": "Routes any integer",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "int",
          "package": "Zwaluw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes a constant string.\n\u003c/p\u003e",
          "module": "Web.Zwaluw",
          "name": "lit",
          "package": "Zwaluw",
          "signature": "String -\u003e Router r r",
          "source": "src/Web-Zwaluw.html#lit",
          "type": "function"
        },
        "index": {
          "description": "Routes constant string",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "lit",
          "normalized": "String-\u003eRouter a a",
          "package": "Zwaluw",
          "signature": "String-\u003eRouter r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "parse",
          "package": "Zwaluw",
          "signature": "Router () a -\u003e String -\u003e [a]",
          "source": "src/Web-Zwaluw.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "parse",
          "normalized": "Router()a-\u003eString-\u003e[a]",
          "package": "Zwaluw",
          "signature": "Router()a-\u003eString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "parse1",
          "package": "Zwaluw",
          "signature": "Router () (a :- ()) -\u003e String -\u003e [a]",
          "source": "src/Web-Zwaluw.html#parse1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "parse1",
          "normalized": "Router()(a())-\u003eString-\u003e[a]",
          "package": "Zwaluw",
          "signature": "Router()(a())-\u003eString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:parse1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes a slash.\n\u003c/p\u003e",
          "module": "Web.Zwaluw",
          "name": "slash",
          "package": "Zwaluw",
          "signature": "Router r r",
          "source": "src/Web-Zwaluw.html#slash",
          "type": "function"
        },
        "index": {
          "description": "Routes slash",
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "slash",
          "package": "Zwaluw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "unparse",
          "package": "Zwaluw",
          "signature": "Router () a -\u003e a -\u003e [String]",
          "source": "src/Web-Zwaluw.html#unparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "unparse",
          "normalized": "Router()a-\u003ea-\u003e[String]",
          "package": "Zwaluw",
          "signature": "Router()a-\u003ea-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Zwaluw",
          "name": "unparse1",
          "package": "Zwaluw",
          "signature": "Router () (a :- ()) -\u003e a -\u003e [String]",
          "source": "src/Web-Zwaluw.html#unparse1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Zwaluw",
          "module": "Web.Zwaluw",
          "name": "unparse1",
          "normalized": "Router()(a())-\u003ea-\u003e[String]",
          "package": "Zwaluw",
          "signature": "Router()(a())-\u003ea-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Zwaluw/docs/Web-Zwaluw.html#v:unparse1"
      }
    }
  ]
]