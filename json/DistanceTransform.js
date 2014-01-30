[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eN-dimensional parallel Euclidean distance transform using an\n approach derived from: Meijster et al., \u003cem\u003e\"A general algorithm for\u003c/em\u003e\n \u003cem\u003ecomputing distance transforms in linear time.\"\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DistanceTransform.Euclidean",
        "fct-package": "DistanceTransform",
        "fct-signature": "module",
        "fct-source": "src/DistanceTransform-Euclidean.html",
        "fct-type": "module",
        "title": "Euclidean"
      },
      "index": {
        "description": "N-dimensional parallel Euclidean distance transform using an approach derived from Meijster et al general algorithm for computing distance transforms in linear time",
        "hierarchy": "DistanceTransform Euclidean",
        "module": "DistanceTransform.Euclidean",
        "name": "Euclidean",
        "normalized": "",
        "package": "DistanceTransform",
        "partial": "Euclidean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:edt",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Euclidean distance transform of an N-dimensional\n array. Dimensions given as \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most\n dimension is the inner-most. For an array representing a 2D\n collection in row-major format, we would give \u003ccode\u003e[width,height]\u003c/code\u003e or\n \u003ccode\u003e[columns,rows]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Euclidean",
        "fct-package": "DistanceTransform",
        "fct-signature": "[Int] -\u003e v a -\u003e v b",
        "fct-source": "src/DistanceTransform-Euclidean.html#edt",
        "fct-type": "function",
        "title": "edt"
      },
      "index": {
        "description": "Compute the Euclidean distance transform of an N-dimensional array Dimensions given as width height depth The left-most dimension is the inner-most For an array representing collection in row-major format we would give width height or columns rows",
        "hierarchy": "DistanceTransform Euclidean",
        "module": "DistanceTransform.Euclidean",
        "name": "edt",
        "normalized": "[Int]-\u003ea b-\u003ea c",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "[Int]-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:edtPar",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Euclidean distance transform of an N-dimensional array\n using multiple processor cores. Dimensions given as\n \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most. For an array representing a 2D collection in row-major\n format, we would give \u003ccode\u003e[width,height]\u003c/code\u003e or \u003ccode\u003e[columns,rows]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Euclidean",
        "fct-package": "DistanceTransform",
        "fct-signature": "[Int] -\u003e v a -\u003e v b",
        "fct-source": "src/DistanceTransform-Euclidean.html#edtPar",
        "fct-type": "function",
        "title": "edtPar"
      },
      "index": {
        "description": "Compute the Euclidean distance transform of an N-dimensional array using multiple processor cores Dimensions given as width height depth The left-most dimension is the inner-most For an array representing collection in row-major format we would give width height or columns rows",
        "hierarchy": "DistanceTransform Euclidean",
        "module": "DistanceTransform.Euclidean",
        "name": "edtPar",
        "normalized": "[Int]-\u003ea b-\u003ea c",
        "package": "DistanceTransform",
        "partial": "Par",
        "signature": "[Int]-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:sedt",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the squared Euclidean distance transform of an\n N-dimensional array. Dimensions given as\n \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Euclidean",
        "fct-package": "DistanceTransform",
        "fct-signature": "[Int] -\u003e v a -\u003e v Int",
        "fct-source": "src/DistanceTransform-Euclidean.html#sedt",
        "fct-type": "function",
        "title": "sedt"
      },
      "index": {
        "description": "Compute the squared Euclidean distance transform of an N-dimensional array Dimensions given as width height depth The left-most dimension is the inner-most",
        "hierarchy": "DistanceTransform Euclidean",
        "module": "DistanceTransform.Euclidean",
        "name": "sedt",
        "normalized": "[Int]-\u003ea b-\u003ea Int",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "[Int]-\u003ev a-\u003ev Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:sedtPar",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the squared Euclidean distance transform of an\n N-dimensional array using multiple processor cores. Dimensions\n given as \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Euclidean",
        "fct-package": "DistanceTransform",
        "fct-signature": "[Int] -\u003e v a -\u003e v Int",
        "fct-source": "src/DistanceTransform-Euclidean.html#sedtPar",
        "fct-type": "function",
        "title": "sedtPar"
      },
      "index": {
        "description": "Compute the squared Euclidean distance transform of an N-dimensional array using multiple processor cores Dimensions given as width height depth The left-most dimension is the inner-most",
        "hierarchy": "DistanceTransform Euclidean",
        "module": "DistanceTransform.Euclidean",
        "name": "sedtPar",
        "normalized": "[Int]-\u003ea b-\u003ea Int",
        "package": "DistanceTransform",
        "partial": "Par",
        "signature": "[Int]-\u003ev a-\u003ev Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for performing nested loop iteration. Includes variants\n for parallel computation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "module",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html",
        "fct-type": "module",
        "title": "Indexer"
      },
      "index": {
        "description": "Helpers for performing nested loop iteration Includes variants for parallel computation",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "Indexer",
        "normalized": "",
        "package": "DistanceTransform",
        "partial": "Indexer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#t:Zipper",
      "description": {
        "fct-descr": "\u003cp\u003eWe use a zipper on list to walk over dimensions of an array.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "data",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#Zipper",
        "fct-type": "data",
        "title": "Zipper"
      },
      "index": {
        "description": "We use zipper on list to walk over dimensions of an array",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "Zipper",
        "normalized": "",
        "package": "DistanceTransform",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:Zip",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zip [a] a [a]",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#Zipper",
        "fct-type": "function",
        "title": "Zip"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "Zip",
        "normalized": "Zip[a]a[a]",
        "package": "DistanceTransform",
        "partial": "Zip",
        "signature": "Zip[a]a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eComonadic coreturn: produce the value a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e is currently\n focused upon.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Comonadic coreturn produce the value Zipper is currently focused upon",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "focus",
        "normalized": "Zipper a-\u003ea",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "Zipper a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:fromZipper",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e [a]",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#fromZipper",
        "fct-type": "function",
        "title": "fromZipper"
      },
      "index": {
        "description": "Convert Zipper to list",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "fromZipper",
        "normalized": "Zipper a-\u003e[a]",
        "package": "DistanceTransform",
        "partial": "Zipper",
        "signature": "Zipper a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eMove a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the left.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e Maybe (Zipper a)",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Move Zipper to the left",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "left",
        "normalized": "Zipper a-\u003eMaybe(Zipper a)",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "Zipper a-\u003eMaybe(Zipper a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parChunkMapM_",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "(a -\u003e IO ()) -\u003e [a] -\u003e IO ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#parChunkMapM_",
        "fct-type": "function",
        "title": "parChunkMapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "parChunkMapM_",
        "normalized": "(a-\u003eIO())-\u003e[a]-\u003eIO()",
        "package": "DistanceTransform",
        "partial": "Chunk Map",
        "signature": "(a-\u003eIO())-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parZipFoldM",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper Int -\u003e (a -\u003e Int -\u003e IO a) -\u003e a -\u003e [Int] -\u003e IO ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#parZipFoldM",
        "fct-type": "function",
        "title": "parZipFoldM"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "parZipFoldM",
        "normalized": "Zipper Int-\u003e(a-\u003eInt-\u003eIO a)-\u003ea-\u003e[Int]-\u003eIO()",
        "package": "DistanceTransform",
        "partial": "Zip Fold",
        "signature": "Zipper Int-\u003e(a-\u003eInt-\u003eIO a)-\u003ea-\u003e[Int]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parZipFoldMAsYouDo",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper Int -\u003e (Int -\u003e Int -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#parZipFoldMAsYouDo",
        "fct-type": "function",
        "title": "parZipFoldMAsYouDo"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "parZipFoldMAsYouDo",
        "normalized": "Zipper Int-\u003e(Int-\u003eInt-\u003eIO())-\u003eIO()",
        "package": "DistanceTransform",
        "partial": "Zip Fold MAs You Do",
        "signature": "Zipper Int-\u003e(Int-\u003eInt-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:right",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e Maybe (Zipper a)",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "right",
        "normalized": "Zipper a-\u003eMaybe(Zipper a)",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "Zipper a-\u003eMaybe(Zipper a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:rightmost",
      "description": {
        "fct-descr": "\u003cp\u003eSlide a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e over until focused on its rightmost element.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#rightmost",
        "fct-type": "function",
        "title": "rightmost"
      },
      "index": {
        "description": "Slide Zipper over until focused on its rightmost element",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "rightmost",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "DistanceTransform",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:toZipper",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e from a non-empty list, with the cursor on the\n leftmost element.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "a -\u003e [a] -\u003e Zipper a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#toZipper",
        "fct-type": "function",
        "title": "toZipper"
      },
      "index": {
        "description": "Create Zipper from non-empty list with the cursor on the leftmost element",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "toZipper",
        "normalized": "a-\u003e[a]-\u003eZipper a",
        "package": "DistanceTransform",
        "partial": "Zipper",
        "signature": "a-\u003e[a]-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:unsafeLeft",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#unsafeLeft",
        "fct-type": "function",
        "title": "unsafeLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "unsafeLeft",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "DistanceTransform",
        "partial": "Left",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:unsafeToZipper",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e from a non-empty list, with the cursor on the\n leftmost element. An exception is thrown if the given list is\n empty.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "[a] -\u003e Zipper a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#unsafeToZipper",
        "fct-type": "function",
        "title": "unsafeToZipper"
      },
      "index": {
        "description": "Create Zipper from non-empty list with the cursor on the leftmost element An exception is thrown if the given list is empty",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "unsafeToZipper",
        "normalized": "[a]-\u003eZipper a",
        "package": "DistanceTransform",
        "partial": "To Zipper",
        "signature": "[a]-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipFoldM",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper Int -\u003e (a -\u003e Int -\u003e m a) -\u003e a -\u003e [Int] -\u003e m ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipFoldM",
        "fct-type": "function",
        "title": "zipFoldM"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipFoldM",
        "normalized": "Zipper Int-\u003e(a-\u003eInt-\u003eb a)-\u003ea-\u003e[Int]-\u003eb()",
        "package": "DistanceTransform",
        "partial": "Fold",
        "signature": "Zipper Int-\u003e(a-\u003eInt-\u003em a)-\u003ea-\u003e[Int]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipFoldMAsYouDo",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper Int -\u003e (Int -\u003e Int -\u003e m ()) -\u003e m ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipFoldMAsYouDo",
        "fct-type": "function",
        "title": "zipFoldMAsYouDo"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipFoldMAsYouDo",
        "normalized": "Zipper Int-\u003e(Int-\u003eInt-\u003ea())-\u003ea()",
        "package": "DistanceTransform",
        "partial": "Fold MAs You Do",
        "signature": "Zipper Int-\u003e(Int-\u003eInt-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipMapM_",
      "description": {
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper Int -\u003e (Int -\u003e m ()) -\u003e [Int] -\u003e m ()",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipMapM_",
        "fct-type": "function",
        "title": "zipMapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipMapM_",
        "normalized": "Zipper Int-\u003e(Int-\u003ea())-\u003e[Int]-\u003ea()",
        "package": "DistanceTransform",
        "partial": "Map",
        "signature": "Zipper Int-\u003e(Int-\u003em())-\u003e[Int]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipStep",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the step between consective elements at the currently\n focused dimension. This involves stepping over all nested\n dimensions.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipStep",
        "fct-type": "function",
        "title": "zipStep"
      },
      "index": {
        "description": "Computes the step between consective elements at the currently focused dimension This involves stepping over all nested dimensions",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipStep",
        "normalized": "Zipper a-\u003ea",
        "package": "DistanceTransform",
        "partial": "Step",
        "signature": "Zipper a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipStride",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the stride between rows at the currently focused\n dimension. This involves stepping over the rest of the current row\n along all nested dimensions.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipStride",
        "fct-type": "function",
        "title": "zipStride"
      },
      "index": {
        "description": "Computes the stride between rows at the currently focused dimension This involves stepping over the rest of the current row along all nested dimensions",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipStride",
        "normalized": "Zipper a-\u003ea",
        "package": "DistanceTransform",
        "partial": "Stride",
        "signature": "Zipper a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipSum",
      "description": {
        "fct-descr": "\u003cp\u003eSince we are using \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003es to track the size of\n multidemensional arrays, the sum of all zipper elements gives the\n size of the entire array.\n\u003c/p\u003e",
        "fct-module": "DistanceTransform.Internal.Indexer",
        "fct-package": "DistanceTransform",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/DistanceTransform-Internal-Indexer.html#zipSum",
        "fct-type": "function",
        "title": "zipSum"
      },
      "index": {
        "description": "Since we are using Zipper to track the size of multidemensional arrays the sum of all zipper elements gives the size of the entire array",
        "hierarchy": "DistanceTransform Internal Indexer",
        "module": "DistanceTransform.Internal.Indexer",
        "name": "zipSum",
        "normalized": "Zipper a-\u003ea",
        "package": "DistanceTransform",
        "partial": "Sum",
        "signature": "Zipper a-\u003ea"
      }
    }
  }
]