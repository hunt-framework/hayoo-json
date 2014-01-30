[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe array-backed store (state-in-context/costate) comonad transformer is\n subject to the laws:\n\u003c/p\u003e\u003cpre\u003e x = seek (pos x) x\n y = pos (seek y x)\n seek y x = seek y (seek z x)\n\u003c/pre\u003e\u003cp\u003eThanks go to Russell O'Connor and Daniel Peebles for their help\n formulating and proving the laws for this comonad transformer.\n\u003c/p\u003e\u003cp\u003eThis basic version of this transformer first appeared on Dan Piponi's blog\n at \u003ca\u003ehttp://blog.sigfpe.com/2008/03/comonadic-arrays.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince this module relies on the non-Haskell 98 \u003ccode\u003earrays\u003c/code\u003e package, it is\n located here instead of in comonad-transformers.\n\u003c/p\u003e\u003cp\u003eNB: attempting to seek or peek out of bounds will yield an error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Store-Pointer.html",
        "fct-type": "module",
        "title": "Pointer"
      },
      "index": {
        "description": "The array-backed store state-in-context costate comonad transformer is subject to the laws seek pos pos seek seek seek seek Thanks go to Russell Connor and Daniel Peebles for their help formulating and proving the laws for this comonad transformer This basic version of this transformer first appeared on Dan Piponi blog at http blog.sigfpe.com comonadic-arrays.html Since this module relies on the non-Haskell arrays package it is located here instead of in comonad-transformers NB attempting to seek or peek out of bounds will yield an error",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "Pointer",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#t:Pointer",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "type",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#Pointer",
        "fct-type": "type",
        "title": "Pointer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "Pointer",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#t:PointerT",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#PointerT",
        "fct-type": "data",
        "title": "PointerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "PointerT",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:PointerT",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "PointerT (w (Array i a)) i",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#PointerT",
        "fct-type": "function",
        "title": "PointerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "PointerT",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:pointer",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "Array i a -\u003e i -\u003e Pointer i a",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#pointer",
        "fct-type": "function",
        "title": "pointer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "pointer",
        "normalized": "Array a b-\u003ea-\u003ePointer a b",
        "package": "comonad-extras",
        "partial": "",
        "signature": "Array i a-\u003ei-\u003ePointer i a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:pointerBounds",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the bounds of the currently focused array\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "PointerT i w a -\u003e (i, i)",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#pointerBounds",
        "fct-type": "function",
        "title": "pointerBounds"
      },
      "index": {
        "description": "Extract the bounds of the currently focused array",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "pointerBounds",
        "normalized": "PointerT a b c-\u003e(a,a)",
        "package": "comonad-extras",
        "partial": "Bounds",
        "signature": "PointerT i w a-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:runPointer",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "Pointer i a -\u003e (Array i a, i)",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#runPointer",
        "fct-type": "function",
        "title": "runPointer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "runPointer",
        "normalized": "Pointer a b-\u003e(Array a b,a)",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": "Pointer i a-\u003e(Array i a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Pointer.html#v:runPointerT",
      "description": {
        "fct-module": "Control.Comonad.Store.Pointer",
        "fct-package": "comonad-extras",
        "fct-signature": "PointerT i w a -\u003e (w (Array i a), i)",
        "fct-source": "src/Control-Comonad-Store-Pointer.html#runPointerT",
        "fct-type": "function",
        "title": "runPointerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Pointer",
        "module": "Control.Comonad.Store.Pointer",
        "name": "runPointerT",
        "normalized": "PointerT a b c-\u003e(b(Array a c),a)",
        "package": "comonad-extras",
        "partial": "Pointer",
        "signature": "PointerT i w a-\u003e(w(Array i a),i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Store-Zipper.html",
        "fct-type": "module",
        "title": "Zipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#t:Zipper",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Store-Zipper.html#Zipper",
        "fct-type": "data",
        "title": "Zipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "comonad-extras",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:size",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "Zipper t a -\u003e Int",
        "fct-source": "src/Control-Comonad-Store-Zipper.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "size",
        "normalized": "Zipper a b-\u003eInt",
        "package": "comonad-extras",
        "partial": "",
        "signature": "Zipper t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:unzipper",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "Zipper t a -\u003e t a",
        "fct-source": "src/Control-Comonad-Store-Zipper.html#unzipper",
        "fct-type": "function",
        "title": "unzipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "unzipper",
        "normalized": "Zipper a b-\u003ea b",
        "package": "comonad-extras",
        "partial": "",
        "signature": "Zipper t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:zipper",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "t a -\u003e Maybe (Zipper t a)",
        "fct-source": "src/Control-Comonad-Store-Zipper.html#zipper",
        "fct-type": "function",
        "title": "zipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "zipper",
        "normalized": "a b-\u003eMaybe(Zipper a b)",
        "package": "comonad-extras",
        "partial": "",
        "signature": "t a-\u003eMaybe(Zipper t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-extras/docs/Control-Comonad-Store-Zipper.html#v:zipper1",
      "description": {
        "fct-module": "Control.Comonad.Store.Zipper",
        "fct-package": "comonad-extras",
        "fct-signature": "t a -\u003e Zipper t a",
        "fct-source": "src/Control-Comonad-Store-Zipper.html#zipper1",
        "fct-type": "function",
        "title": "zipper1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Store Zipper",
        "module": "Control.Comonad.Store.Zipper",
        "name": "zipper1",
        "normalized": "a b-\u003eZipper a b",
        "package": "comonad-extras",
        "partial": "",
        "signature": "t a-\u003eZipper t a"
      }
    }
  }
]