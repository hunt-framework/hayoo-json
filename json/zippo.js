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
        "word": "zippo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "source": "src/Data-Lens-Zipper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": ":\u003e",
          "package": "zippo",
          "source": "src/Data-Lens-Zipper.html#%3A%3E",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": ":\u003e",
          "package": "zippo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#t::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Hist",
          "package": "zippo",
          "source": "src/Data-Lens-Zipper.html#Hist",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Hist",
          "package": "zippo",
          "partial": "Hist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#t:Hist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Top",
          "package": "zippo",
          "source": "src/Data-Lens-Zipper.html#Top",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Top",
          "package": "zippo",
          "partial": "Top",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#t:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur zipper type, parameterized by a \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e and \"history stack\",\n supporting completely type-checked zipper operations.\n\u003c/p\u003e",
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "source": "src/Data-Lens-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "Our zipper type parameterized by focus and history stack supporting completely type-checked zipper operations",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Snoc",
          "package": "zippo",
          "signature": "Snoc (st b) (c -\u003e b)",
          "source": "src/Data-Lens-Zipper.html#%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Snoc",
          "normalized": "Snoc(a b)(c-\u003eb)",
          "package": "zippo",
          "partial": "Snoc",
          "signature": "Snoc(st b)(c-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:Snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Top",
          "package": "zippo",
          "signature": "Top",
          "source": "src/Data-Lens-Zipper.html#Top",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Top",
          "package": "zippo",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "signature": "Zipper",
          "source": "src/Data-Lens-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "Zipper",
          "package": "zippo",
          "partial": "Zipper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexit the zipper, rebuilding the structure \u003ccode\u003ea\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e close (Zipper st b) = runHist st b\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "close",
          "package": "zippo",
          "signature": "Zipper st b -\u003e a",
          "source": "src/Data-Lens-Zipper.html#close",
          "type": "function"
        },
        "index": {
          "description": "exit the zipper rebuilding the structure close Zipper st runHist st",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "close",
          "normalized": "Zipper a b-\u003ec",
          "package": "zippo",
          "signature": "Zipper st b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on the focus of the zipper.\n\u003c/p\u003e",
          "module": "Data.Lens.Zipper",
          "name": "focus",
          "package": "zippo",
          "signature": "Zipper st b :-\u003e b",
          "source": "src/Data-Lens-Zipper.html#focus",
          "type": "function"
        },
        "index": {
          "description": "lens on the focus of the zipper",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "focus",
          "normalized": "Zipper a b-\u003eb",
          "package": "zippo",
          "signature": "Zipper st b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "hist",
          "package": "zippo",
          "signature": "st b",
          "source": "src/Data-Lens-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "hist",
          "package": "zippo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:hist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the zipper focus\n\u003c/p\u003e\u003cpre\u003e modf = modify focus\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "modf",
          "package": "zippo",
          "signature": "(b -\u003e b) -\u003e Zipper st b -\u003e Zipper st b",
          "source": "src/Data-Lens-Zipper.html#modf",
          "type": "function"
        },
        "index": {
          "description": "Modify the zipper focus modf modify focus",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "modf",
          "normalized": "(a-\u003ea)-\u003eZipper b a-\u003eZipper b a",
          "package": "zippo",
          "signature": "(b-\u003eb)-\u003eZipper st b-\u003eZipper st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:modf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enavigate to a child element indicated by the passed lens, returning the\n new Zipper in the monad \u003ccode\u003em\u003c/code\u003e. This will be \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e when the standard (\u003ccode\u003e\u003ca\u003e:~\u003e\u003c/a\u003e\u003c/code\u003e)\n Lens is used. For pure lenses, use \u003ccode\u003e\u003ca\u003emoveP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Lens.Zipper",
          "name": "move",
          "package": "zippo",
          "signature": "LensM m b c -\u003e Zipper st b -\u003e m (Zipper (st :\u003e b) c)",
          "source": "src/Data-Lens-Zipper.html#move",
          "type": "function"
        },
        "index": {
          "description": "navigate to child element indicated by the passed lens returning the new Zipper in the monad This will be Maybe when the standard Lens is used For pure lenses use moveP",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "move",
          "normalized": "LensM a b c-\u003eZipper d b-\u003ea(Zipper(d b)c)",
          "package": "zippo",
          "signature": "LensM m b c-\u003eZipper st b-\u003em(Zipper(st b)c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enavigate to a child element indicated by the passed pure lens\n\u003c/p\u003e\u003cpre\u003e moveP l = runIdentity . move l\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "moveP",
          "package": "zippo",
          "signature": "(b :-\u003e c) -\u003e Zipper st b -\u003e Zipper (st :\u003e b) c",
          "source": "src/Data-Lens-Zipper.html#moveP",
          "type": "function"
        },
        "index": {
          "description": "navigate to child element indicated by the passed pure lens moveP runIdentity move",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "moveP",
          "normalized": "(a-\u003eb)-\u003eZipper c a-\u003eZipper(c a)b",
          "package": "zippo",
          "signature": "(b-\u003ec)-\u003eZipper st b-\u003eZipper(st b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:moveP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enavigate up a level in a zipper not already at \u003ccode\u003e\u003ca\u003eTop\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e moveUp (Zipper (Snoc st cont) c) = Zipper st $ cont c\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "moveUp",
          "package": "zippo",
          "signature": "Zipper (st :\u003e b) c -\u003e Zipper st b",
          "source": "src/Data-Lens-Zipper.html#moveUp",
          "type": "function"
        },
        "index": {
          "description": "navigate up level in zipper not already at Top moveUp Zipper Snoc st cont Zipper st cont",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "moveUp",
          "normalized": "Zipper(a b)c-\u003eZipper a b",
          "package": "zippo",
          "partial": "Up",
          "signature": "Zipper(st b)c-\u003eZipper st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:moveUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "runHist",
          "package": "zippo",
          "signature": "st c -\u003e c -\u003e a",
          "source": "src/Data-Lens-Zipper.html#runHist",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "runHist",
          "normalized": "a b-\u003eb-\u003ec",
          "package": "zippo",
          "partial": "Hist",
          "signature": "st c-\u003ec-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:runHist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the zipper focus\n\u003c/p\u003e\u003cpre\u003e setf = set focus\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "setf",
          "package": "zippo",
          "signature": "Zipper st b -\u003e b -\u003e Zipper st b",
          "source": "src/Data-Lens-Zipper.html#setf",
          "type": "function"
        },
        "index": {
          "description": "Set the zipper focus setf set focus",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "setf",
          "normalized": "Zipper a b-\u003eb-\u003eZipper a b",
          "package": "zippo",
          "signature": "Zipper st b-\u003eb-\u003eZipper st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:setf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lens.Zipper",
          "name": "viewf",
          "package": "zippo",
          "signature": "b",
          "source": "src/Data-Lens-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "viewf",
          "package": "zippo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:viewf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"enter\" a data type. Move the \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003emove\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emoveUp\u003c/a\u003e\u003c/code\u003e. Exit\n the zipper with \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zipper = Zipper Top\n\u003c/pre\u003e",
          "module": "Data.Lens.Zipper",
          "name": "zipper",
          "package": "zippo",
          "signature": "a -\u003e Zipper Top a",
          "source": "src/Data-Lens-Zipper.html#zipper",
          "type": "function"
        },
        "index": {
          "description": "enter data type Move the focus with move and moveUp Exit the zipper with close zipper Zipper Top",
          "hierarchy": "Data Lens Zipper",
          "module": "Data.Lens.Zipper",
          "name": "zipper",
          "normalized": "a-\u003eZipper Top a",
          "package": "zippo",
          "signature": "a-\u003eZipper Top a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zippo/docs/Data-Lens-Zipper.html#v:zipper"
      }
    }
  ]
]