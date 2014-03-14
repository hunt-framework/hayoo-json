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
        "word": "comonad-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe array-backed store (state-in-context/costate) comonad transformer is\n subject to the laws:\n\u003c/p\u003e\u003cpre\u003e x = seek (pos x) x\n y = pos (seek y x)\n seek y x = seek y (seek z x)\n\u003c/pre\u003e\u003cp\u003eThanks go to Russell O'Connor and Daniel Peebles for their help\n formulating and proving the laws for this comonad transformer.\n\u003c/p\u003e\u003cp\u003eThis basic version of this transformer first appeared on Dan Piponi's blog\n at \u003ca\u003ehttp://blog.sigfpe.com/2008/03/comonadic-arrays.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince this module relies on the non-Haskell 98 \u003ccode\u003earrays\u003c/code\u003e package, it is\n located here instead of in comonad-transformers.\n\u003c/p\u003e\u003cp\u003eNB: attempting to seek or peek out of bounds will yield an error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Store.Pointer",
          "name": "Pointer",
          "package": "comonad-extras",
          "source": "src/Control-Comonad-Store-Pointer.html",
          "type": "module"
        },
        "index": {
          "description": "The array-backed store state-in-context costate comonad transformer is subject to the laws seek pos pos seek seek seek seek Thanks go to Russell Connor and Daniel Peebles for their help formulating and proving the laws for this comonad transformer This basic version of this transformer first appeared on Dan Piponi blog at http blog.sigfpe.com comonadic-arrays.html Since this module relies on the non-Haskell arrays package it is located here instead of in comonad-transformers NB attempting to seek or peek out of bounds will yield an error",
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "Pointer",
          "package": "comonad-extras",
          "partial": "Pointer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "Pointer",
          "package": "comonad-extras",
          "source": "src/Control-Comonad-Store-Pointer.html#Pointer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "Pointer",
          "package": "comonad-extras",
          "partial": "Pointer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#t:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "PointerT",
          "package": "comonad-extras",
          "source": "src/Control-Comonad-Store-Pointer.html#PointerT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "PointerT",
          "package": "comonad-extras",
          "partial": "Pointer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#t:PointerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "PointerT",
          "package": "comonad-extras",
          "signature": "PointerT (w (Array i a)) i",
          "source": "src/Control-Comonad-Store-Pointer.html#PointerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "PointerT",
          "package": "comonad-extras",
          "partial": "Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:PointerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "pointer",
          "package": "comonad-extras",
          "signature": "Array i a -\u003e i -\u003e Pointer i a",
          "source": "src/Control-Comonad-Store-Pointer.html#pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "pointer",
          "normalized": "Array a b-\u003ea-\u003ePointer a b",
          "package": "comonad-extras",
          "signature": "Array i a-\u003ei-\u003ePointer i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the bounds of the currently focused array\n\u003c/p\u003e",
          "module": "Control.Comonad.Store.Pointer",
          "name": "pointerBounds",
          "package": "comonad-extras",
          "signature": "PointerT i w a -\u003e (i, i)",
          "source": "src/Control-Comonad-Store-Pointer.html#pointerBounds",
          "type": "function"
        },
        "index": {
          "description": "Extract the bounds of the currently focused array",
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "pointerBounds",
          "normalized": "PointerT a b c-\u003e(a,a)",
          "package": "comonad-extras",
          "partial": "Bounds",
          "signature": "PointerT i w a-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:pointerBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "runPointer",
          "package": "comonad-extras",
          "signature": "Pointer i a -\u003e (Array i a, i)",
          "source": "src/Control-Comonad-Store-Pointer.html#runPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "runPointer",
          "normalized": "Pointer a b-\u003e(Array a b,a)",
          "package": "comonad-extras",
          "partial": "Pointer",
          "signature": "Pointer i a-\u003e(Array i a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:runPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Pointer",
          "name": "runPointerT",
          "package": "comonad-extras",
          "signature": "PointerT i w a -\u003e (w (Array i a), i)",
          "source": "src/Control-Comonad-Store-Pointer.html#runPointerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Pointer",
          "module": "Control.Comonad.Store.Pointer",
          "name": "runPointerT",
          "normalized": "PointerT a b c-\u003e(b(Array a c),a)",
          "package": "comonad-extras",
          "partial": "Pointer",
          "signature": "PointerT i w a-\u003e(w(Array i a),i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:runPointerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "Zipper",
          "package": "comonad-extras",
          "source": "src/Control-Comonad-Store-Zipper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "Zipper",
          "package": "comonad-extras",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "Zipper",
          "package": "comonad-extras",
          "source": "src/Control-Comonad-Store-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "Zipper",
          "package": "comonad-extras",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "size",
          "package": "comonad-extras",
          "signature": "Zipper t a -\u003e Int",
          "source": "src/Control-Comonad-Store-Zipper.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "size",
          "normalized": "Zipper a b-\u003eInt",
          "package": "comonad-extras",
          "signature": "Zipper t a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "unzipper",
          "package": "comonad-extras",
          "signature": "Zipper t a -\u003e t a",
          "source": "src/Control-Comonad-Store-Zipper.html#unzipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "unzipper",
          "normalized": "Zipper a b-\u003ea b",
          "package": "comonad-extras",
          "signature": "Zipper t a-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:unzipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "zipper",
          "package": "comonad-extras",
          "signature": "t a -\u003e Maybe (Zipper t a)",
          "source": "src/Control-Comonad-Store-Zipper.html#zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "zipper",
          "normalized": "a b-\u003eMaybe(Zipper a b)",
          "package": "comonad-extras",
          "signature": "t a-\u003eMaybe(Zipper t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Store.Zipper",
          "name": "zipper1",
          "package": "comonad-extras",
          "signature": "t a -\u003e Zipper t a",
          "source": "src/Control-Comonad-Store-Zipper.html#zipper1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Store Zipper",
          "module": "Control.Comonad.Store.Zipper",
          "name": "zipper1",
          "normalized": "a b-\u003eZipper a b",
          "package": "comonad-extras",
          "signature": "t a-\u003eZipper t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:zipper1"
      }
    }
  ]
]