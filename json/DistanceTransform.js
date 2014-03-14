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
        "word": "DistanceTransform"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eN-dimensional parallel Euclidean distance transform using an\n approach derived from: Meijster et al., \u003cem\u003e\"A general algorithm for\u003c/em\u003e\n \u003cem\u003ecomputing distance transforms in linear time.\"\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DistanceTransform.Euclidean",
          "name": "Euclidean",
          "package": "DistanceTransform",
          "source": "src/DistanceTransform-Euclidean.html",
          "type": "module"
        },
        "index": {
          "description": "N-dimensional parallel Euclidean distance transform using an approach derived from Meijster et al general algorithm for computing distance transforms in linear time",
          "hierarchy": "DistanceTransform Euclidean",
          "module": "DistanceTransform.Euclidean",
          "name": "Euclidean",
          "package": "DistanceTransform",
          "partial": "Euclidean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Euclidean distance transform of an N-dimensional\n array. Dimensions given as \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most\n dimension is the inner-most. For an array representing a 2D\n collection in row-major format, we would give \u003ccode\u003e[width,height]\u003c/code\u003e or\n \u003ccode\u003e[columns,rows]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DistanceTransform.Euclidean",
          "name": "edt",
          "package": "DistanceTransform",
          "signature": "[Int] -\u003e v a -\u003e v b",
          "source": "src/DistanceTransform-Euclidean.html#edt",
          "type": "function"
        },
        "index": {
          "description": "Compute the Euclidean distance transform of an N-dimensional array Dimensions given as width height depth The left-most dimension is the inner-most For an array representing collection in row-major format we would give width height or columns rows",
          "hierarchy": "DistanceTransform Euclidean",
          "module": "DistanceTransform.Euclidean",
          "name": "edt",
          "normalized": "[Int]-\u003ea b-\u003ea c",
          "package": "DistanceTransform",
          "signature": "[Int]-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:edt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Euclidean distance transform of an N-dimensional array\n using multiple processor cores. Dimensions given as\n \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most. For an array representing a 2D collection in row-major\n format, we would give \u003ccode\u003e[width,height]\u003c/code\u003e or \u003ccode\u003e[columns,rows]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DistanceTransform.Euclidean",
          "name": "edtPar",
          "package": "DistanceTransform",
          "signature": "[Int] -\u003e v a -\u003e v b",
          "source": "src/DistanceTransform-Euclidean.html#edtPar",
          "type": "function"
        },
        "index": {
          "description": "Compute the Euclidean distance transform of an N-dimensional array using multiple processor cores Dimensions given as width height depth The left-most dimension is the inner-most For an array representing collection in row-major format we would give width height or columns rows",
          "hierarchy": "DistanceTransform Euclidean",
          "module": "DistanceTransform.Euclidean",
          "name": "edtPar",
          "normalized": "[Int]-\u003ea b-\u003ea c",
          "package": "DistanceTransform",
          "partial": "Par",
          "signature": "[Int]-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:edtPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the squared Euclidean distance transform of an\n N-dimensional array. Dimensions given as\n \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most.\n\u003c/p\u003e",
          "module": "DistanceTransform.Euclidean",
          "name": "sedt",
          "package": "DistanceTransform",
          "signature": "[Int] -\u003e v a -\u003e v Int",
          "source": "src/DistanceTransform-Euclidean.html#sedt",
          "type": "function"
        },
        "index": {
          "description": "Compute the squared Euclidean distance transform of an N-dimensional array Dimensions given as width height depth The left-most dimension is the inner-most",
          "hierarchy": "DistanceTransform Euclidean",
          "module": "DistanceTransform.Euclidean",
          "name": "sedt",
          "normalized": "[Int]-\u003ea b-\u003ea Int",
          "package": "DistanceTransform",
          "signature": "[Int]-\u003ev a-\u003ev Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:sedt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the squared Euclidean distance transform of an\n N-dimensional array using multiple processor cores. Dimensions\n given as \u003ccode\u003e[width,height,depth...]\u003c/code\u003e. The left-most dimension is the\n inner-most.\n\u003c/p\u003e",
          "module": "DistanceTransform.Euclidean",
          "name": "sedtPar",
          "package": "DistanceTransform",
          "signature": "[Int] -\u003e v a -\u003e v Int",
          "source": "src/DistanceTransform-Euclidean.html#sedtPar",
          "type": "function"
        },
        "index": {
          "description": "Compute the squared Euclidean distance transform of an N-dimensional array using multiple processor cores Dimensions given as width height depth The left-most dimension is the inner-most",
          "hierarchy": "DistanceTransform Euclidean",
          "module": "DistanceTransform.Euclidean",
          "name": "sedtPar",
          "normalized": "[Int]-\u003ea b-\u003ea Int",
          "package": "DistanceTransform",
          "partial": "Par",
          "signature": "[Int]-\u003ev a-\u003ev Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Euclidean.html#v:sedtPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for performing nested loop iteration. Includes variants\n for parallel computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Indexer",
          "package": "DistanceTransform",
          "source": "src/DistanceTransform-Internal-Indexer.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers for performing nested loop iteration Includes variants for parallel computation",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Indexer",
          "package": "DistanceTransform",
          "partial": "Indexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe use a zipper on list to walk over dimensions of an array.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Zipper",
          "package": "DistanceTransform",
          "source": "src/DistanceTransform-Internal-Indexer.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "We use zipper on list to walk over dimensions of an array",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Zipper",
          "package": "DistanceTransform",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Zip",
          "package": "DistanceTransform",
          "signature": "Zip [a] a [a]",
          "source": "src/DistanceTransform-Internal-Indexer.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "Zip",
          "normalized": "Zip[a]a[a]",
          "package": "DistanceTransform",
          "partial": "Zip",
          "signature": "Zip[a]a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:Zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComonadic coreturn: produce the value a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e is currently\n focused upon.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "focus",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e a",
          "source": "src/DistanceTransform-Internal-Indexer.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Comonadic coreturn produce the value Zipper is currently focused upon",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "focus",
          "normalized": "Zipper a-\u003ea",
          "package": "DistanceTransform",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "fromZipper",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e [a]",
          "source": "src/DistanceTransform-Internal-Indexer.html#fromZipper",
          "type": "function"
        },
        "index": {
          "description": "Convert Zipper to list",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "fromZipper",
          "normalized": "Zipper a-\u003e[a]",
          "package": "DistanceTransform",
          "partial": "Zipper",
          "signature": "Zipper a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:fromZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e to the left.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "left",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/DistanceTransform-Internal-Indexer.html#left",
          "type": "function"
        },
        "index": {
          "description": "Move Zipper to the left",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "left",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "DistanceTransform",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parChunkMapM_",
          "package": "DistanceTransform",
          "signature": "(a -\u003e IO ()) -\u003e [a] -\u003e IO ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#parChunkMapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parChunkMapM_",
          "normalized": "(a-\u003eIO())-\u003e[a]-\u003eIO()",
          "package": "DistanceTransform",
          "partial": "Chunk Map",
          "signature": "(a-\u003eIO())-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parChunkMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parZipFoldM",
          "package": "DistanceTransform",
          "signature": "Zipper Int -\u003e (a -\u003e Int -\u003e IO a) -\u003e a -\u003e [Int] -\u003e IO ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#parZipFoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parZipFoldM",
          "normalized": "Zipper Int-\u003e(a-\u003eInt-\u003eIO a)-\u003ea-\u003e[Int]-\u003eIO()",
          "package": "DistanceTransform",
          "partial": "Zip Fold",
          "signature": "Zipper Int-\u003e(a-\u003eInt-\u003eIO a)-\u003ea-\u003e[Int]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parZipFoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parZipFoldMAsYouDo",
          "package": "DistanceTransform",
          "signature": "Zipper Int -\u003e (Int -\u003e Int -\u003e IO ()) -\u003e IO ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#parZipFoldMAsYouDo",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "parZipFoldMAsYouDo",
          "normalized": "Zipper Int-\u003e(Int-\u003eInt-\u003eIO())-\u003eIO()",
          "package": "DistanceTransform",
          "partial": "Zip Fold MAs You Do",
          "signature": "Zipper Int-\u003e(Int-\u003eInt-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:parZipFoldMAsYouDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "right",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/DistanceTransform-Internal-Indexer.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "right",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "DistanceTransform",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlide a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e over until focused on its rightmost element.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "rightmost",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/DistanceTransform-Internal-Indexer.html#rightmost",
          "type": "function"
        },
        "index": {
          "description": "Slide Zipper over until focused on its rightmost element",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "rightmost",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "DistanceTransform",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:rightmost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e from a non-empty list, with the cursor on the\n leftmost element.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "toZipper",
          "package": "DistanceTransform",
          "signature": "a -\u003e [a] -\u003e Zipper a",
          "source": "src/DistanceTransform-Internal-Indexer.html#toZipper",
          "type": "function"
        },
        "index": {
          "description": "Create Zipper from non-empty list with the cursor on the leftmost element",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "toZipper",
          "normalized": "a-\u003e[a]-\u003eZipper a",
          "package": "DistanceTransform",
          "partial": "Zipper",
          "signature": "a-\u003e[a]-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:toZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "unsafeLeft",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/DistanceTransform-Internal-Indexer.html#unsafeLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "unsafeLeft",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "DistanceTransform",
          "partial": "Left",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:unsafeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e from a non-empty list, with the cursor on the\n leftmost element. An exception is thrown if the given list is\n empty.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "unsafeToZipper",
          "package": "DistanceTransform",
          "signature": "[a] -\u003e Zipper a",
          "source": "src/DistanceTransform-Internal-Indexer.html#unsafeToZipper",
          "type": "function"
        },
        "index": {
          "description": "Create Zipper from non-empty list with the cursor on the leftmost element An exception is thrown if the given list is empty",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "unsafeToZipper",
          "normalized": "[a]-\u003eZipper a",
          "package": "DistanceTransform",
          "partial": "To Zipper",
          "signature": "[a]-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:unsafeToZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipFoldM",
          "package": "DistanceTransform",
          "signature": "Zipper Int -\u003e (a -\u003e Int -\u003e m a) -\u003e a -\u003e [Int] -\u003e m ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipFoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipFoldM",
          "normalized": "Zipper Int-\u003e(a-\u003eInt-\u003eb a)-\u003ea-\u003e[Int]-\u003eb()",
          "package": "DistanceTransform",
          "partial": "Fold",
          "signature": "Zipper Int-\u003e(a-\u003eInt-\u003em a)-\u003ea-\u003e[Int]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipFoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipFoldMAsYouDo",
          "package": "DistanceTransform",
          "signature": "Zipper Int -\u003e (Int -\u003e Int -\u003e m ()) -\u003e m ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipFoldMAsYouDo",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipFoldMAsYouDo",
          "normalized": "Zipper Int-\u003e(Int-\u003eInt-\u003ea())-\u003ea()",
          "package": "DistanceTransform",
          "partial": "Fold MAs You Do",
          "signature": "Zipper Int-\u003e(Int-\u003eInt-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipFoldMAsYouDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipMapM_",
          "package": "DistanceTransform",
          "signature": "Zipper Int -\u003e (Int -\u003e m ()) -\u003e [Int] -\u003e m ()",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipMapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipMapM_",
          "normalized": "Zipper Int-\u003e(Int-\u003ea())-\u003e[Int]-\u003ea()",
          "package": "DistanceTransform",
          "partial": "Map",
          "signature": "Zipper Int-\u003e(Int-\u003em())-\u003e[Int]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the step between consective elements at the currently\n focused dimension. This involves stepping over all nested\n dimensions.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipStep",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e a",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipStep",
          "type": "function"
        },
        "index": {
          "description": "Computes the step between consective elements at the currently focused dimension This involves stepping over all nested dimensions",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipStep",
          "normalized": "Zipper a-\u003ea",
          "package": "DistanceTransform",
          "partial": "Step",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the stride between rows at the currently focused\n dimension. This involves stepping over the rest of the current row\n along all nested dimensions.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipStride",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e a",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipStride",
          "type": "function"
        },
        "index": {
          "description": "Computes the stride between rows at the currently focused dimension This involves stepping over the rest of the current row along all nested dimensions",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipStride",
          "normalized": "Zipper a-\u003ea",
          "package": "DistanceTransform",
          "partial": "Stride",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince we are using \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003es to track the size of\n multidemensional arrays, the sum of all zipper elements gives the\n size of the entire array.\n\u003c/p\u003e",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipSum",
          "package": "DistanceTransform",
          "signature": "Zipper a -\u003e a",
          "source": "src/DistanceTransform-Internal-Indexer.html#zipSum",
          "type": "function"
        },
        "index": {
          "description": "Since we are using Zipper to track the size of multidemensional arrays the sum of all zipper elements gives the size of the entire array",
          "hierarchy": "DistanceTransform Internal Indexer",
          "module": "DistanceTransform.Internal.Indexer",
          "name": "zipSum",
          "normalized": "Zipper a-\u003ea",
          "package": "DistanceTransform",
          "partial": "Sum",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DistanceTransform/docs/DistanceTransform-Internal-Indexer.html#v:zipSum"
      }
    }
  ]
]