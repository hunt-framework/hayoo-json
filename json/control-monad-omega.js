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
        "word": "control-monad-omega"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for enumerating sets: like the list monad, but\n impervious to infinite descent.\n\u003c/p\u003e\u003cp\u003eA depth-first search of a data structure can fail to give a full traversal\n if it has an infinitely deep path.  Likewise, a breadth-first search of a\n data structure can fall short if it has an infinitely branching node.\n Omega addresses this problem by using a \"diagonal\" traversal\n that gracefully dissolves such data.\n\u003c/p\u003e\u003cp\u003eSo while \u003ccode\u003eliftM2 (,) [0..] [0..]\u003c/code\u003e gets \"stuck\" generating tuples whose\n first element is zero, \u003ccode\u003e\u003ca\u003erunOmega\u003c/a\u003e $ liftM2 (,) (\u003ca\u003eeach\u003c/a\u003e [0..]) (\u003ca\u003eeach\u003c/a\u003e\n [0..])\u003c/code\u003e generates all pairs of naturals.\n\u003c/p\u003e\u003cp\u003eMore precisely, if \u003ccode\u003ex\u003c/code\u003e appears at a finite index in\n \u003ccode\u003exs\u003c/code\u003e, and \u003ccode\u003ey\u003c/code\u003e appears at a finite index in \u003ccode\u003ef x\u003c/code\u003e,\n then \u003ccode\u003ey\u003c/code\u003e will appear at a finite index in \u003ccode\u003eeach xs \u003e\u003e= f\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThis monad gets its name because it is a monad over sets of order type\n omega.\n\u003c/p\u003e\u003cp\u003eWarning: Omega is only a monad when the results of \u003ccode\u003erunOmega\u003c/code\u003e are\n interpreted as a set; that is, a valid transformation according to the\n monad laws may change the order of the results.  However, the same\n set of results will always be reachable.  If you are using this as a monad, \n I recommendIded that you use the newer weighted-search package instead \n (it's also faster).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Omega",
          "name": "Omega",
          "package": "control-monad-omega",
          "source": "src/Control-Monad-Omega.html",
          "type": "module"
        },
        "index": {
          "description": "monad for enumerating sets like the list monad but impervious to infinite descent depth-first search of data structure can fail to give full traversal if it has an infinitely deep path Likewise breadth-first search of data structure can fall short if it has an infinitely branching node Omega addresses this problem by using diagonal traversal that gracefully dissolves such data So while liftM2 gets stuck generating tuples whose first element is zero runOmega liftM2 each each generates all pairs of naturals More precisely if appears at finite index in xs and appears at finite index in then will appear at finite index in each xs This monad gets its name because it is monad over sets of order type omega Warning Omega is only monad when the results of runOmega are interpreted as set that is valid transformation according to the monad laws may change the order of the results However the same set of results will always be reachable If you are using this as monad recommendIded that you use the newer weighted-search package instead it also faster",
          "hierarchy": "Control Monad Omega",
          "module": "Control.Monad.Omega",
          "name": "Omega",
          "package": "control-monad-omega",
          "partial": "Omega",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-omega/docs/Control-Monad-Omega.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Omega",
          "name": "Omega",
          "package": "control-monad-omega",
          "source": "src/Control-Monad-Omega.html#Omega",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Omega",
          "module": "Control.Monad.Omega",
          "name": "Omega",
          "package": "control-monad-omega",
          "partial": "Omega",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-omega/docs/Control-Monad-Omega.html#t:Omega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the hinge algorithm of the Omega monad,\n exposed because it can be useful on its own.  Joins \n a list of lists with the property that for every i j \n there is an n such that \u003ccode\u003exs !! i !! j == diagonal xs !! n\u003c/code\u003e.\n In particular, \u003ccode\u003en \u003c= (i+j)*(i+j+1)/2 + j\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Omega",
          "name": "diagonal",
          "package": "control-monad-omega",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Control-Monad-Omega.html#diagonal",
          "type": "function"
        },
        "index": {
          "description": "This is the hinge algorithm of the Omega monad exposed because it can be useful on its own Joins list of lists with the property that for every there is an such that xs diagonal xs In particular",
          "hierarchy": "Control Monad Omega",
          "module": "Control.Monad.Omega",
          "name": "diagonal",
          "normalized": "[[a]]-\u003e[a]",
          "package": "control-monad-omega",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-omega/docs/Control-Monad-Omega.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Omega",
          "name": "each",
          "package": "control-monad-omega",
          "signature": "[a] -\u003e Omega a",
          "source": "src/Control-Monad-Omega.html#each",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Omega",
          "module": "Control.Monad.Omega",
          "name": "each",
          "normalized": "[a]-\u003eOmega a",
          "package": "control-monad-omega",
          "signature": "[a]-\u003eOmega a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-omega/docs/Control-Monad-Omega.html#v:each"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Omega",
          "name": "runOmega",
          "package": "control-monad-omega",
          "signature": "Omega a -\u003e [a]",
          "source": "src/Control-Monad-Omega.html#runOmega",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Omega",
          "module": "Control.Monad.Omega",
          "name": "runOmega",
          "normalized": "Omega a-\u003e[a]",
          "package": "control-monad-omega",
          "partial": "Omega",
          "signature": "Omega a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-omega/docs/Control-Monad-Omega.html#v:runOmega"
      }
    }
  ]
]