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
        "word": "bitstream"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome functions currently missing from\n \u003ca\u003eData.Vector.Fusion.Stream.Monadic\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "Monadic",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Fusion-Monadic.html",
          "type": "module"
        },
        "index": {
          "description": "Some functions currently missing from Data.Vector.Fusion.Stream.Monadic",
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "Monadic",
          "package": "bitstream",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericDrop",
          "package": "bitstream",
          "signature": "n -\u003e Stream m α -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericDrop",
          "normalized": "a-\u003eStream b c-\u003eStream b c",
          "package": "bitstream",
          "partial": "Drop",
          "signature": "n-\u003eStream m α-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericFindIndex",
          "package": "bitstream",
          "signature": "(α -\u003e Bool) -\u003e Stream m α -\u003e m (Maybe n)",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericFindIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericFindIndex",
          "normalized": "(a-\u003eBool)-\u003eStream b a-\u003eb(Maybe c)",
          "package": "bitstream",
          "partial": "Find Index",
          "signature": "(α-\u003eBool)-\u003eStream m α-\u003em(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericFindIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericFindIndexM",
          "package": "bitstream",
          "signature": "(α -\u003e m Bool) -\u003e Stream m α -\u003e m (Maybe n)",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericFindIndexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericFindIndexM",
          "normalized": "(a-\u003eb Bool)-\u003eStream b a-\u003eb(Maybe c)",
          "package": "bitstream",
          "partial": "Find Index",
          "signature": "(α-\u003em Bool)-\u003eStream m α-\u003em(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericFindIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericIndex",
          "package": "bitstream",
          "signature": "Stream m α -\u003e n -\u003e m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericIndex",
          "normalized": "Stream a b-\u003ec-\u003ea b",
          "package": "bitstream",
          "partial": "Index",
          "signature": "Stream m α-\u003en-\u003em α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericIndexed",
          "package": "bitstream",
          "signature": "Stream m α -\u003e Stream m (n, α)",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericIndexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericIndexed",
          "normalized": "Stream a b-\u003eStream a(c,b)",
          "package": "bitstream",
          "partial": "Indexed",
          "signature": "Stream m α-\u003eStream m(n,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericLength",
          "package": "bitstream",
          "signature": "Stream m α -\u003e m n",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericLength",
          "normalized": "Stream a b-\u003ea c",
          "package": "bitstream",
          "partial": "Length",
          "signature": "Stream m α-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericReplicate",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericReplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003eStream c b",
          "package": "bitstream",
          "partial": "Replicate",
          "signature": "n-\u003eα-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericReplicateM",
          "package": "bitstream",
          "signature": "n -\u003e m α -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericReplicateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericReplicateM",
          "normalized": "a-\u003eb c-\u003eStream b c",
          "package": "bitstream",
          "partial": "Replicate",
          "signature": "n-\u003em α-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericReplicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericTake",
          "package": "bitstream",
          "signature": "n -\u003e Stream m α -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericTake",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericTake",
          "normalized": "a-\u003eStream b c-\u003eStream b c",
          "package": "bitstream",
          "partial": "Take",
          "signature": "n-\u003eStream m α-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericUnfoldrN",
          "package": "bitstream",
          "signature": "n -\u003e (β -\u003e Maybe (α, β)) -\u003e β -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericUnfoldrN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericUnfoldrN",
          "normalized": "a-\u003e(b-\u003eMaybe(c,b))-\u003eb-\u003eStream d c",
          "package": "bitstream",
          "partial": "Unfoldr",
          "signature": "n-\u003e(β-\u003eMaybe(α,β))-\u003eβ-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericUnfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericUnfoldrNM",
          "package": "bitstream",
          "signature": "n -\u003e (β -\u003e m (Maybe (α, β))) -\u003e β -\u003e Stream m α",
          "source": "src/Data-Bitstream-Fusion-Monadic.html#genericUnfoldrNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion Monadic",
          "module": "Data.Bitstream.Fusion.Monadic",
          "name": "genericUnfoldrNM",
          "normalized": "a-\u003e(b-\u003ec(Maybe(d,b)))-\u003eb-\u003eStream c d",
          "package": "bitstream",
          "partial": "Unfoldr NM",
          "signature": "n-\u003e(β-\u003em(Maybe(α,β)))-\u003eβ-\u003eStream m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion-Monadic.html#v:genericUnfoldrNM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome functions currently missing from\n \u003ca\u003eData.Vector.Fusion.Stream\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream.Fusion",
          "name": "Fusion",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Fusion.html",
          "type": "module"
        },
        "index": {
          "description": "Some functions currently missing from Data.Vector.Fusion.Stream",
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "Fusion",
          "package": "bitstream",
          "partial": "Fusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericDrop",
          "package": "bitstream",
          "signature": "n -\u003e Stream α -\u003e Stream α",
          "source": "src/Data-Bitstream-Fusion.html#genericDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericDrop",
          "normalized": "a-\u003eStream b-\u003eStream b",
          "package": "bitstream",
          "partial": "Drop",
          "signature": "n-\u003eStream α-\u003eStream α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericFindIndex",
          "package": "bitstream",
          "signature": "(α -\u003e Bool) -\u003e Stream α -\u003e Maybe n",
          "source": "src/Data-Bitstream-Fusion.html#genericFindIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericFindIndex",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eMaybe b",
          "package": "bitstream",
          "partial": "Find Index",
          "signature": "(α-\u003eBool)-\u003eStream α-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericFindIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericIndex",
          "package": "bitstream",
          "signature": "Stream α -\u003e n -\u003e α",
          "source": "src/Data-Bitstream-Fusion.html#genericIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericIndex",
          "normalized": "Stream a-\u003eb-\u003ea",
          "package": "bitstream",
          "partial": "Index",
          "signature": "Stream α-\u003en-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericIndexed",
          "package": "bitstream",
          "signature": "Stream α -\u003e Stream (n, α)",
          "source": "src/Data-Bitstream-Fusion.html#genericIndexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericIndexed",
          "normalized": "Stream a-\u003eStream(b,a)",
          "package": "bitstream",
          "partial": "Indexed",
          "signature": "Stream α-\u003eStream(n,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericLength",
          "package": "bitstream",
          "signature": "Stream α -\u003e n",
          "source": "src/Data-Bitstream-Fusion.html#genericLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericLength",
          "normalized": "Stream a-\u003eb",
          "package": "bitstream",
          "partial": "Length",
          "signature": "Stream α-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericReplicate",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e Stream α",
          "source": "src/Data-Bitstream-Fusion.html#genericReplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003eStream b",
          "package": "bitstream",
          "partial": "Replicate",
          "signature": "n-\u003eα-\u003eStream α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericTake",
          "package": "bitstream",
          "signature": "n -\u003e Stream α -\u003e Stream α",
          "source": "src/Data-Bitstream-Fusion.html#genericTake",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericTake",
          "normalized": "a-\u003eStream b-\u003eStream b",
          "package": "bitstream",
          "partial": "Take",
          "signature": "n-\u003eStream α-\u003eStream α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Fusion",
          "name": "genericUnfoldrN",
          "package": "bitstream",
          "signature": "n -\u003e (β -\u003e Maybe (α, β)) -\u003e β -\u003e Stream α",
          "source": "src/Data-Bitstream-Fusion.html#genericUnfoldrN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitstream Fusion",
          "module": "Data.Bitstream.Fusion",
          "name": "genericUnfoldrN",
          "normalized": "a-\u003e(b-\u003eMaybe(c,b))-\u003eb-\u003eStream c",
          "package": "bitstream",
          "partial": "Unfoldr",
          "signature": "n-\u003e(β-\u003eMaybe(α,β))-\u003eβ-\u003eStream α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Fusion.html#v:genericUnfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric interface to diverse types of \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream.Generic",
          "name": "Generic",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generic interface to diverse types of Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "Generic",
          "package": "bitstream",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of diverse types of \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMethods of this class are functions of \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es that are either\n basic functions to implement other ones, or have to preserve their\n packet/chunk structure for efficiency and strictness behaviour.\n\u003c/p\u003e\u003cp\u003eMinimum complete implementation: \u003cem\u003eAll but\u003c/em\u003e \u003ccode\u003e\u003ca\u003ebasicCons'\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ebasicConcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ebasicReplicate\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebasicPartition\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003ebasicFromBits\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Generic",
          "name": "Bitstream",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Generic.html#Bitstream",
          "type": "class"
        },
        "index": {
          "description": "Class of diverse types of Bitstream Methods of this class are functions of Bitstream that are either basic functions to implement other ones or have to preserve their packet chunk structure for efficiency and strictness behaviour Minimum complete implementation All but basicCons basicConcat basicReplicate basicPartition and basicFromBits",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "Bitstream",
          "package": "bitstream",
          "partial": "Bitstream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#t:Bitstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#10746;) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+29FA, DOUBLE PLUS\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(⧺)",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#%29FA",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-10746-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-10746-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-10746-\"]"
        },
        "index": {
          "description": "append FA DOUBLE PLUS",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(⧺) ⧺",
          "normalized": "a-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-10746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(!!)",
          "package": "bitstream",
          "signature": "α -\u003e n -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#%21%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-33--33-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-33--33-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-33--33-\"]"
        },
        "index": {
          "description": "Bitstream index subscript operator starting from",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(!!) !!",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003en-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(∅)",
          "package": "bitstream",
          "signature": "α",
          "source": "src/Data-Bitstream-Generic.html#%2205",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8709-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-8709-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-8709-\"]"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(∅) ∅",
          "package": "bitstream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(∈)",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#%2208",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8712-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-8712-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-8712-\"]"
        },
        "index": {
          "description": "elem ELEMENT OF",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(∈) ∈",
          "normalized": "Bool-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "Bool-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(∉)",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#%2209",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8713-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-8713-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-8713-\"]"
        },
        "index": {
          "description": "notElem NOT AN ELEMENT OF",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(∉) ∉",
          "normalized": "Bool-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "Bool-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(∋)",
          "package": "bitstream",
          "signature": "α -\u003e Bool -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#%220B",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8715-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-8715-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-8715-\"]"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(∋) ∋",
          "normalized": "a-\u003eBool-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "(∌)",
          "package": "bitstream",
          "signature": "α -\u003e Bool -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#%220C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8716-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:-8716-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:-8716-\"]"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "(∌) ∌",
          "normalized": "a-\u003eBool-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all bits of the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e satisfy the predicate. For the\n result to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e,\n however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value for the predicate applied to\n a bit at a finite index of a finite or infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "all",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#all",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:all\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:all\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:all\"]"
        },
        "index": {
          "description": "Applied to predicate and Bitstream all determines if all bits of the Bitstream satisfy the predicate For the result to be True the Bitstream must be finite False however results from False value for the predicate applied to bit at finite index of finite or infinite Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "all",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e list. For the\n result to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e,\n however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value at a finite index of a finite\n or infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. Note that strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es are always\n finite.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "and",
          "package": "bitstream",
          "signature": "α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#and",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:and\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:and\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:and\"]"
        },
        "index": {
          "description": "and returns the conjunction of Bool list For the result to be True the Bitstream must be finite False however results from False value at finite index of finite or infinite Bitstream Note that strict Bitstream are always finite",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "and",
          "normalized": "a-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines\n if any bit of the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e satisfies the predicate. For the\n result to be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value for the predicate applied to a\n bit at a finite index of a finite or infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "any",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#any",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:any\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:any\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:any\"]"
        },
        "index": {
          "description": "Applied to predicate and Bitstream any determines if any bit of the Bitstream satisfies the predicate For the result to be False the Bitstream must be finite True however results from True value for the predicate applied to bit at finite index of finite or infinite Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "any",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "append",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:append\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:append\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:append\"]"
        },
        "index": {
          "description": "Append two Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicAppend",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicAppend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicAppend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Append",
          "signature": "α-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicConcat",
          "package": "bitstream",
          "signature": "[α] -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicConcat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicConcat",
          "normalized": "[a]-\u003ea",
          "package": "bitstream",
          "partial": "Concat",
          "signature": "[α]-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicCons",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicCons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicCons",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Cons",
          "signature": "Bool-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicCons'",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicCons%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicCons'",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Cons'",
          "signature": "Bool-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicCons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicDrop",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicDrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicDrop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "bitstream",
          "partial": "Drop",
          "signature": "n-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicDropWhile",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicDropWhile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicDropWhile",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Drop While",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicDropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicFilter",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicFilter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicFilter",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Filter",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicFromNBits",
          "package": "bitstream",
          "signature": "n -\u003e β -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicFromNBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicFromNBits",
          "normalized": "a-\u003eb-\u003ec",
          "package": "bitstream",
          "partial": "From NBits",
          "signature": "n-\u003eβ-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicFromNBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicInit",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicInit",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "partial": "Init",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicMap",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicMap",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Map",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicPartition",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e (α, α)",
          "source": "src/Data-Bitstream-Generic.html#basicPartition",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicPartition",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "bitstream",
          "partial": "Partition",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003e(α,α)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicReverse",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicReverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicReverse",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "partial": "Reverse",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicScanl",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicScanl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicScanl",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Scanl",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicScanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicSnoc",
          "package": "bitstream",
          "signature": "α -\u003e Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicSnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicSnoc",
          "normalized": "a-\u003eBool-\u003ea",
          "package": "bitstream",
          "partial": "Snoc",
          "signature": "α-\u003eBool-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicSnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicStream",
          "package": "bitstream",
          "signature": "α -\u003e Stream Bool",
          "source": "src/Data-Bitstream-Generic.html#basicStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicStream",
          "normalized": "a-\u003eStream Bool",
          "package": "bitstream",
          "partial": "Stream",
          "signature": "α-\u003eStream Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicTail",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicTail",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "partial": "Tail",
          "signature": "α-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicTake",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicTake",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicTake",
          "normalized": "a-\u003eb-\u003eb",
          "package": "bitstream",
          "partial": "Take",
          "signature": "n-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicTakeWhile",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicTakeWhile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicTakeWhile",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Take While",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicTakeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicToBits",
          "package": "bitstream",
          "signature": "α -\u003e β",
          "source": "src/Data-Bitstream-Generic.html#basicToBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicToBits",
          "normalized": "a-\u003eb",
          "package": "bitstream",
          "partial": "To Bits",
          "signature": "α-\u003eβ",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicToBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitstream.Generic",
          "name": "basicUnstream",
          "package": "bitstream",
          "signature": "Stream Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#basicUnstream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "basicUnstream",
          "normalized": "Stream Bool-\u003ea",
          "package": "bitstream",
          "partial": "Unstream",
          "signature": "Stream Bool-\u003eα",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:basicUnstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003exs\u003c/code\u003e, returns a tuple where first element is longest prefix\n (possibly \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e) of \u003ccode\u003exs\u003c/code\u003e of bits that \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and\n second element is the remainder of the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003enot\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "break",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e (α, α)",
          "source": "src/Data-Bitstream-Generic.html#break",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:break\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:break\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:break\"]"
        },
        "index": {
          "description": "break applied to predicate and Bitstream xs returns tuple where first element is longest prefix possibly empty of xs of bits that do not satisfy and second element is the remainder of the Bitstream break is equivalent to span not",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "break",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003e(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate all \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es in the list.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "concat",
          "package": "bitstream",
          "signature": "[α] -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:concat\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:concat\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate all Bitstream in the list",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "concat",
          "normalized": "[a]-\u003ea",
          "package": "bitstream",
          "signature": "[α]-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e and concatenate the results.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "concatMap",
          "package": "bitstream",
          "signature": "(Bool -\u003e α) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#concatMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:concatMap\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:concatMap\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:concatMap\"]"
        },
        "index": {
          "description": "Map function over Bitstream and concatenate the results",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "concatMap",
          "normalized": "(Bool-\u003ea)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "Map",
          "signature": "(Bool-\u003eα)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003estrict: O(n), lazy: O(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is an analogous to (\u003ccode\u003e:\u003c/code\u003e) for\n lists.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "cons",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#cons",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:cons\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:cons\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:cons\"]"
        },
        "index": {
          "description": "strict lazy cons is an analogous to for lists",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "cons",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "Bool-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e For strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003econs'\u003c/a\u003e\u003c/code\u003e is exactly the same as\n \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor lazy ones, \u003ccode\u003e\u003ca\u003econs'\u003c/a\u003e\u003c/code\u003e is strict in the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e we are consing\n onto. More precisely, it forces the first chunk to be evaluated. It\n does this because, for space efficiency, it may coalesce the new\n bit onto the first chunk rather than starting a new chunk.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\"]",
          "name": "cons'",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#cons%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:cons-39-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:cons-39-\"]"
        },
        "index": {
          "description": "For strict Bitstream cons is exactly the same as cons For lazy ones cons is strict in the Bitstream we are consing onto More precisely it forces the first chunk to be evaluated It does this because for space efficiency it may coalesce the new bit onto the first chunk rather than starting new chunk",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "cons'",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "Bool-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:cons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first\n \u003ccode\u003en\u003c/code\u003e bits, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "drop",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#drop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:drop\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:drop\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first bits or empty if length xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "drop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "bitstream",
          "signature": "n-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "dropWhile",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#dropWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:dropWhile\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:dropWhile\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:dropWhile\"]"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "dropWhile",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "While",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e membership predicate, usually\n written in infix form, e.g., \u003ccode\u003ex `elem` xs\u003c/code\u003e.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results\n from an bit equal to \u003ccode\u003ex\u003c/code\u003e found at a finite index of a finite or\n infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "elem",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#elem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elem\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:elem\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:elem\"]"
        },
        "index": {
          "description": "elem is the Bitstream membership predicate usually written in infix form e.g elem xs For the result to be False the Bitstream must be finite True however results from an bit equal to found at finite index of finite or infinite Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "elem",
          "normalized": "Bool-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "Bool-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n bit in the given \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e which is equal to the query bit, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such bit.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "elemIndex",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e Maybe n",
          "source": "src/Data-Bitstream-Generic.html#elemIndex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elemIndex\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:elemIndex\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:elemIndex\"]"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first bit in the given Bitstream which is equal to the query bit or Nothing if there is no such bit",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "elemIndex",
          "normalized": "Bool-\u003ea-\u003eMaybe b",
          "package": "bitstream",
          "partial": "Index",
          "signature": "Bool-\u003eα-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by\n returning the indices of all bits equal to the query bit, in\n ascending order.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "elemIndices",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e [n]",
          "source": "src/Data-Bitstream-Generic.html#elemIndices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elemIndices\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:elemIndices\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:elemIndices\"]"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all bits equal to the query bit in ascending order",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "elemIndices",
          "normalized": "Bool-\u003ea-\u003e[b]",
          "package": "bitstream",
          "partial": "Indices",
          "signature": "Bool-\u003eα-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "empty",
          "package": "bitstream",
          "signature": "α",
          "source": "src/Data-Bitstream-Generic.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:empty\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:empty\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:empty\"]"
        },
        "index": {
          "description": "The empty Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "empty",
          "package": "bitstream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e,\n returns the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e of those bits that satisfy the predicate.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "filter",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:filter\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:filter\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:filter\"]"
        },
        "index": {
          "description": "filter applied to predicate and Bitstream returns the Bitstream of those bits that satisfy the predicate",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "filter",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n and returns the bit in the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e matching the predicate, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such bit.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "find",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e Maybe Bool",
          "source": "src/Data-Bitstream-Generic.html#find",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:find\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:find\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:find\"]"
        },
        "index": {
          "description": "The find function takes predicate and Bitstream and returns the bit in the Bitstream matching the predicate or Nothing if there is no such bit",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "find",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eMaybe Bool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e and returns the index of the first bit in the\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e satisfying the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no\n such bit.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "findIndex",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e Maybe n",
          "source": "src/Data-Bitstream-Generic.html#findIndex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:findIndex\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:findIndex\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:findIndex\"]"
        },
        "index": {
          "description": "The findIndex function takes predicate and Bitstream and returns the index of the first bit in the Bitstream satisfying the predicate or Nothing if there is no such bit",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "findIndex",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003eMaybe b",
          "package": "bitstream",
          "partial": "Index",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by\n returning the indices of all bits satisfying the predicate, in\n ascending order.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "findIndices",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e [n]",
          "source": "src/Data-Bitstream-Generic.html#findIndices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:findIndices\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:findIndices\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:findIndices\"]"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all bits satisfying the predicate in ascending order",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "findIndices",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003e[b]",
          "package": "bitstream",
          "partial": "Indices",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the left-identity of the operator), and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e using the binary operator, from left to\n right:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z [x1, x2, ..., xn] == (...((z \u003ccode\u003ef\u003c/code\u003e x1) \u003ccode\u003ef\u003c/code\u003e x2) \u003ccode\u003ef\u003c/code\u003e...) \u003ccode\u003ef\u003c/code\u003e xn\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldl",
          "package": "bitstream",
          "signature": "(β -\u003e Bool -\u003e β) -\u003e β -\u003e α -\u003e β",
          "source": "src/Data-Bitstream-Generic.html#foldl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldl\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldl\"]"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and Bitstream reduces the Bitstream using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The Bitstream must be finite",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldl",
          "normalized": "(a-\u003eBool-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "bitstream",
          "signature": "(β-\u003eBool-\u003eβ)-\u003eβ-\u003eα-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that is strict on the\n accumulator.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldl'",
          "package": "bitstream",
          "signature": "(β -\u003e Bool -\u003e β) -\u003e β -\u003e α -\u003e β",
          "source": "src/Data-Bitstream-Generic.html#foldl%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl-39-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldl-39-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldl-39-\"]"
        },
        "index": {
          "description": "foldl is variant of foldl that is strict on the accumulator",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldl'",
          "normalized": "(a-\u003eBool-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "bitstream",
          "signature": "(β-\u003eBool-\u003eβ)-\u003eβ-\u003eα-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldl1",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#foldl1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldl1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldl1\"]"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldl1",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldl1'",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#foldl1%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl1-39-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldl1-39-\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldl1-39-\"]"
        },
        "index": {
          "description": "strict version of foldl1",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldl1'",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e using the binary operator, from right to\n left:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z [x1, x2, ..., xn] == x1 \u003ccode\u003ef\u003c/code\u003e (x2 \u003ccode\u003ef\u003c/code\u003e ... (xn \u003ccode\u003ef\u003c/code\u003e z)...)\n\u003c/pre\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldr",
          "package": "bitstream",
          "signature": "(Bool -\u003e β -\u003e β) -\u003e β -\u003e α -\u003e β",
          "source": "src/Data-Bitstream-Generic.html#foldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldr\"]"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and Bitstream reduces the Bitstream using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldr",
          "normalized": "(Bool-\u003ea-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eβ-\u003eβ)-\u003eβ-\u003eα-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "foldr1",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#foldr1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldr1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:foldr1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:foldr1\"]"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "foldr1",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003eBool",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. Note that this\n function is undefined for instances of \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e which have no fixed\n \u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e (like \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "fromBits",
          "package": "bitstream",
          "signature": "β -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#fromBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:fromBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:fromBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:fromBits\"]"
        },
        "index": {
          "description": "Convert Bits into Bitstream Note that this function is undefined for instances of Bits which have no fixed bitSize like Integer",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "fromBits",
          "normalized": "a-\u003eb",
          "package": "bitstream",
          "partial": "Bits",
          "signature": "β-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:fromBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert the lower \u003ccode\u003en\u003c/code\u003e bits of the given \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e. In the\n case that more bits are requested than the \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e provides, this\n acts as if the \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e has an infinite number of leading 0 bits.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "fromNBits",
          "package": "bitstream",
          "signature": "n -\u003e β -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#fromNBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:fromNBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:fromNBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:fromNBits\"]"
        },
        "index": {
          "description": "Convert the lower bits of the given Bits In the case that more bits are requested than the Bits provides this acts as if the Bits has an infinite number of leading bits",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "fromNBits",
          "normalized": "a-\u003eb-\u003ec",
          "package": "bitstream",
          "partial": "NBits",
          "signature": "n-\u003eβ-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:fromNBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first bit of a non-empty \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. An\n exception will be thrown if empty.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "head",
          "package": "bitstream",
          "signature": "α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#head",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:head\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:head\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:head\"]"
        },
        "index": {
          "description": "Extract the first bit of non-empty Bitstream An exception will be thrown if empty",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "head",
          "normalized": "a-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all the bits of a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e except the last\n one. An exception will be thrown if empty.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "init",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#init",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:init\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:init\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:init\"]"
        },
        "index": {
          "description": "Return all the bits of Bitstream except the last one An exception will be thrown if empty",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "init",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003estrict: O(1), lazy: O(n)\u003c/em\u003e Extract the last bit of a finite\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. An exception will be thrown if empty.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "last",
          "package": "bitstream",
          "signature": "α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#last",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:last\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:last\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:last\"]"
        },
        "index": {
          "description": "strict lazy Extract the last bit of finite Bitstream An exception will be thrown if empty",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "last",
          "normalized": "a-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003estrict: O(1), lazy: O(n)\u003c/em\u003e Return the length of a finite\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "length",
          "package": "bitstream",
          "signature": "α -\u003e n",
          "source": "src/Data-Bitstream-Generic.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:length\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:length\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:length\"]"
        },
        "index": {
          "description": "strict lazy Return the length of finite Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "length",
          "normalized": "a-\u003eb",
          "package": "bitstream",
          "signature": "α-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "map",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:map\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:map\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:map\"]"
        },
        "index": {
          "description": "Map function over Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "map",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "notElem",
          "package": "bitstream",
          "signature": "Bool -\u003e α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#notElem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:notElem\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:notElem\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:notElem\"]"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "notElem",
          "normalized": "Bool-\u003ea-\u003eBool",
          "package": "bitstream",
          "partial": "Elem",
          "signature": "Bool-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "null",
          "package": "bitstream",
          "signature": "α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:null\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:null\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:null\"]"
        },
        "index": {
          "description": "Test whether Bitstream is empty",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e list. For the\n result to be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value at a finite index of a finite\n or infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. Note that strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es are always\n finite.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "or",
          "package": "bitstream",
          "signature": "α -\u003e Bool",
          "source": "src/Data-Bitstream-Generic.html#or",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:or\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:or\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:or\"]"
        },
        "index": {
          "description": "or returns the disjunction of Bool list For the result to be False the Bitstream must be finite True however results from True value at finite index of finite or infinite Bitstream Note that strict Bitstream are always finite",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "or",
          "normalized": "a-\u003eBool",
          "package": "bitstream",
          "signature": "α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a [\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e] into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "pack",
          "package": "bitstream",
          "signature": "[Bool] -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#pack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:pack\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:pack\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:pack\"]"
        },
        "index": {
          "description": "Convert Bool into Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "pack",
          "normalized": "[Bool]-\u003ea",
          "package": "bitstream",
          "signature": "[Bool]-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate and a\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e and returns the pair of \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es of bits which do\n and do not satisfy the predicate, respectively.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "partition",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e (α, α)",
          "source": "src/Data-Bitstream-Generic.html#partition",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:partition\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:partition\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:partition\"]"
        },
        "index": {
          "description": "The partition function takes predicate and Bitstream and returns the pair of Bitstream of bits which do and do not satisfy the predicate respectively",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "partition",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003e(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every bit.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "replicate",
          "package": "bitstream",
          "signature": "n -\u003e Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#replicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:replicate\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:replicate\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:replicate\"]"
        },
        "index": {
          "description": "replicate is Bitstream of length with the value of every bit",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "replicate",
          "normalized": "a-\u003eBool-\u003eb",
          "package": "bitstream",
          "signature": "n-\u003eBool-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reverse a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "reverse",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:reverse\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:reverse\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:reverse\"]"
        },
        "index": {
          "description": "Reverse Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "reverse",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n of successive reduced bits from the left:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e f z [x1, x2, ...] == [z, z \u003ccode\u003ef\u003c/code\u003e x1, (z \u003ccode\u003ef\u003c/code\u003e x1) \u003ccode\u003ef\u003c/code\u003e x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e f z xs) == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z xs\n\u003c/pre\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "scanl",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#scanl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanl\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:scanl\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:scanl\"]"
        },
        "index": {
          "description": "scanl is similar to foldl but returns Bitstream of successive reduced bits from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "scanl",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e f [x1, x2, ...] == [x1, x1 \u003ccode\u003ef\u003c/code\u003e x2, ...]\n\u003c/pre\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "scanl1",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#scanl1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanl1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:scanl1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:scanl1\"]"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "scanl1",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.  Note that\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e f z xs) == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z xs\n\u003c/pre\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "scanr",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e Bool -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#scanr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:scanr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:scanr\"]"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "scanr",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eBool-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "scanr1",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#scanr1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanr1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:scanr1\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:scanr1\"]"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "scanr1",
          "normalized": "(Bool-\u003eBool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "singleton",
          "package": "bitstream",
          "signature": "Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:singleton\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:singleton\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:singleton\"]"
        },
        "index": {
          "description": "Convert Bool into Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "singleton",
          "normalized": "Bool-\u003ea",
          "package": "bitstream",
          "signature": "Bool-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a bit to the end of a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "snoc",
          "package": "bitstream",
          "signature": "α -\u003e Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#snoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:snoc\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:snoc\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:snoc\"]"
        },
        "index": {
          "description": "Append bit to the end of Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "snoc",
          "normalized": "a-\u003eBool-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eBool-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e,\n returns a tuple where first element is longest prefix (possibly\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e) of \u003ccode\u003exs\u003c/code\u003e of bits that satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the\n remainder of the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\n xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "span",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e (α, α)",
          "source": "src/Data-Bitstream-Generic.html#span",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:span\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:span\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:span\"]"
        },
        "index": {
          "description": "span applied to predicate and Bitstream xs returns tuple where first element is longest prefix possibly empty of xs of bits that satisfy and second element is the remainder of the Bitstream span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "span",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003e(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Explicitly convert a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e operations are automatically fused whenever it's\n possible, safe, and effective to do so, but sometimes you may find\n the rules are too conservative. These two functions \u003ccode\u003e\u003ca\u003estream\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eunstream\u003c/a\u003e\u003c/code\u003e provide a means for coercive stream fusion.\n\u003c/p\u003e\u003cp\u003eYou should be careful when you use \u003ccode\u003e\u003ca\u003estream\u003c/a\u003e\u003c/code\u003e. Most functions in this\n package are optimised to minimise frequency of memory allocations\n and copyings, but getting \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es back from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n requires the whole \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to be constructed from\n scratch. Moreover, for lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es this leads to be an\n incorrect strictness behaviour because lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es are\n represented as lists of strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e chunks but \u003ccode\u003e\u003ca\u003estream\u003c/a\u003e\u003c/code\u003e\n can't preserve the original chunk structure. Let's say you have a\n lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e with the following chunks:\n\u003c/p\u003e\u003cpre\u003e\n bs = [chunk1, chunk2, chunk3, ...]\n\u003c/pre\u003e\u003cp\u003eand you want to drop the first bit of such stream. Our \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e is\n only strict on the \u003ccode\u003echunk1\u003c/code\u003e and will produce the following chunks:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e bs = [chunk0, chunk1', chunk2, chunk3, ...]\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003echunk0\u003c/code\u003e is a singleton vector of the first packet of\n \u003ccode\u003echunk1\u003c/code\u003e whose first bit is dropped, and \u003ccode\u003echunk1'\u003c/code\u003e is a vector of\n remaining packets of the \u003ccode\u003echunk1\u003c/code\u003e. Neither \u003ccode\u003echunk2\u003c/code\u003e nor \u003ccode\u003echunk3\u003c/code\u003e\n have to be evaluated here as you might expect.\n\u003c/p\u003e\u003cp\u003eBut think about the following expression:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Vector.Fusion.Stream as Stream\n \u003ccode\u003e\u003ca\u003eunstream\u003c/a\u003e\u003c/code\u003e $ Stream.tail $ \u003ccode\u003e\u003ca\u003estream\u003c/a\u003e\u003c/code\u003e bs\n\u003c/pre\u003e\u003cp\u003ethe resulting chunk structure will be:\n\u003c/p\u003e\u003cpre\u003e\n [chunk1', chunk2', chunk3', ...]\n\u003c/pre\u003e\u003cp\u003ewhere each and every chunks are slightly different from the\n original chunks, and this time \u003ccode\u003echunk1'\u003c/code\u003e has the same length as\n \u003ccode\u003echunk1\u003c/code\u003e but the last bit of \u003ccode\u003echunk1'\u003c/code\u003e is from the first bit of\n \u003ccode\u003echunk2\u003c/code\u003e. This means when you next time apply some functions strict\n on the first chunk, you end up fully evaluating \u003ccode\u003echunk2\u003c/code\u003e as well as\n \u003ccode\u003echunk1\u003c/code\u003e and this can be a serious misbehaviour for lazy\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe automatic fusion rules are carefully designed to fire only when\n there aren't any reason to preserve the original packet / chunk\n structure.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "stream",
          "package": "bitstream",
          "signature": "α -\u003e Stream Bool",
          "source": "src/Data-Bitstream-Generic.html#stream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:stream\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:stream\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:stream\"]"
        },
        "index": {
          "description": "Explicitly convert Bitstream into Stream of Bool Bitstream operations are automatically fused whenever it possible safe and effective to do so but sometimes you may find the rules are too conservative These two functions stream and unstream provide means for coercive stream fusion You should be careful when you use stream Most functions in this package are optimised to minimise frequency of memory allocations and copyings but getting Bitstream back from Stream Bool requires the whole Bitstream to be constructed from scratch Moreover for lazy Bitstream this leads to be an incorrect strictness behaviour because lazy Bitstream are represented as lists of strict Bitstream chunks but stream can preserve the original chunk structure Let say you have lazy Bitstream with the following chunks bs chunk1 chunk2 chunk3 and you want to drop the first bit of such stream Our tail is only strict on the chunk1 and will produce the following chunks tail bs chunk0 chunk1 chunk2 chunk3 where chunk0 is singleton vector of the first packet of chunk1 whose first bit is dropped and chunk1 is vector of remaining packets of the chunk1 Neither chunk2 nor chunk3 have to be evaluated here as you might expect But think about the following expression import qualified Data.Vector.Fusion.Stream as Stream unstream Stream.tail stream bs the resulting chunk structure will be chunk1 chunk2 chunk3 where each and every chunks are slightly different from the original chunks and this time chunk1 has the same length as chunk1 but the last bit of chunk1 is from the first bit of chunk2 This means when you next time apply some functions strict on the first chunk you end up fully evaluating chunk2 as well as chunk1 and this can be serious misbehaviour for lazy Bitstream The automatic fusion rules are carefully designed to fire only when there aren any reason to preserve the original packet chunk structure",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "stream",
          "normalized": "a-\u003eStream Bool",
          "package": "bitstream",
          "signature": "α-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the bits after the \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e of a non-empty\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. An exception will be thrown if empty.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "tail",
          "package": "bitstream",
          "signature": "α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:tail\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:tail\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the bits after the head of non-empty Bitstream An exception will be thrown if empty",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "tail",
          "normalized": "a-\u003ea",
          "package": "bitstream",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, returns the\n prefix of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "take",
          "package": "bitstream",
          "signature": "n -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:take\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:take\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:take\"]"
        },
        "index": {
          "description": "take applied to Bitstream xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "take",
          "normalized": "a-\u003eb-\u003eb",
          "package": "bitstream",
          "signature": "n-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003exs\u003c/code\u003e, returns the longest prefix (possibly \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e) of \u003ccode\u003exs\u003c/code\u003e of bits\n that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "takeWhile",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e α -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#takeWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:takeWhile\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:takeWhile\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:takeWhile\"]"
        },
        "index": {
          "description": "takeWhile applied to predicate and Bitstream xs returns the longest prefix possibly empty of xs of bits that satisfy",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "takeWhile",
          "normalized": "(Bool-\u003eBool)-\u003ea-\u003ea",
          "package": "bitstream",
          "partial": "While",
          "signature": "(Bool-\u003eBool)-\u003eα-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "toBits",
          "package": "bitstream",
          "signature": "α -\u003e β",
          "source": "src/Data-Bitstream-Generic.html#toBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:toBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:toBits\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:toBits\"]"
        },
        "index": {
          "description": "Convert Bitstream into Bits",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "toBits",
          "normalized": "a-\u003eb",
          "package": "bitstream",
          "partial": "Bits",
          "signature": "α-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:toBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e reduces a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds\n a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e from a seed value. The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e or\n returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a, b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e is used as the next element in a recursive\n call.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unfoldr",
          "package": "bitstream",
          "signature": "(β -\u003e Maybe (Bool, β)) -\u003e β -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#unfoldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unfoldr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unfoldr\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unfoldr\"]"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces Bitstream to summary value unfoldr builds Bitstream from seed value The function takes the element and returns Nothing if it is done producing the Bitstream or returns Just in which case is prepended to the Bitstream and is used as the next element in recursive call",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Bool,a))-\u003ea-\u003eb",
          "package": "bitstream",
          "signature": "(β-\u003eMaybe(Bool,β))-\u003eβ-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e but constructs a\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e with at most \u003ccode\u003en\u003c/code\u003e bits.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unfoldrN",
          "package": "bitstream",
          "signature": "n -\u003e (β -\u003e Maybe (Bool, β)) -\u003e β -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#unfoldrN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unfoldrN\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unfoldrN\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unfoldrN\"]"
        },
        "index": {
          "description": "unfoldrN is variant of unfoldr but constructs Bitstream with at most bits",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unfoldrN",
          "normalized": "a-\u003e(b-\u003eMaybe(Bool,b))-\u003eb-\u003ec",
          "package": "bitstream",
          "signature": "n-\u003e(β-\u003eMaybe(Bool,β))-\u003eβ-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a [\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unpack",
          "package": "bitstream",
          "signature": "α -\u003e [Bool]",
          "source": "src/Data-Bitstream-Generic.html#unpack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unpack\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unpack\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unpack\"]"
        },
        "index": {
          "description": "Convert Bitstream into Bool",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unpack",
          "normalized": "a-\u003e[Bool]",
          "package": "bitstream",
          "signature": "α-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unstream",
          "package": "bitstream",
          "signature": "Stream Bool -\u003e α",
          "source": "src/Data-Bitstream-Generic.html#unstream",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unstream\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unstream\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unstream\"]"
        },
        "index": {
          "description": "Convert Stream of Bool into Bitstream",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unstream",
          "normalized": "Stream Bool-\u003ea",
          "package": "bitstream",
          "signature": "Stream Bool-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(m, n))\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of bit pairs into a\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e of first components and a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e of second\n components.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unzip",
          "package": "bitstream",
          "signature": "[(Bool, Bool)] -\u003e (α, α)",
          "source": "src/Data-Bitstream-Generic.html#unzip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unzip\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unzip\"]"
        },
        "index": {
          "description": "min unzip transforms list of bit pairs into Bitstream of first components and Bitstream of second components",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unzip",
          "normalized": "[(Bool,Bool)]-\u003e(a,a)",
          "package": "bitstream",
          "signature": "[(Bool,Bool)]-\u003e(α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unzip3",
          "package": "bitstream",
          "signature": "[(Bool, Bool, Bool)] -\u003e (α, α, α)",
          "source": "src/Data-Bitstream-Generic.html#unzip3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unzip3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unzip3\"]"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three Bitstream analogous to unzip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unzip3",
          "normalized": "[(Bool,Bool,Bool)]-\u003e(a,a,a)",
          "package": "bitstream",
          "signature": "[(Bool,Bool,Bool)]-\u003e(α,α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns\n four \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unzip4",
          "package": "bitstream",
          "signature": "[(Bool, Bool, Bool, Bool)] -\u003e (α, α, α, α)",
          "source": "src/Data-Bitstream-Generic.html#unzip4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unzip4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unzip4\"]"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four Bitstream analogous to unzip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unzip4",
          "normalized": "[(Bool,Bool,Bool,Bool)]-\u003e(a,a,a,a)",
          "package": "bitstream",
          "signature": "[(Bool,Bool,Bool,Bool)]-\u003e(α,α,α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns\n five \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unzip5",
          "package": "bitstream",
          "signature": "[(Bool, Bool, Bool, Bool, Bool)] -\u003e (α, α, α, α, α)",
          "source": "src/Data-Bitstream-Generic.html#unzip5",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unzip5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unzip5\"]"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five Bitstream analogous to unzip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unzip5",
          "normalized": "[(Bool,Bool,Bool,Bool,Bool)]-\u003e(a,a,a,a,a)",
          "package": "bitstream",
          "signature": "[(Bool,Bool,Bool,Bool,Bool)]-\u003e(α,α,α,α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "unzip6",
          "package": "bitstream",
          "signature": "[(Bool, Bool, Bool, Bool, Bool, Bool)] -\u003e (α, α, α, α, α, α)",
          "source": "src/Data-Bitstream-Generic.html#unzip6",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:unzip6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unzip6\"]"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six Bitstream analogous to unzip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "unzip6",
          "normalized": "[(Bool,Bool,Bool,Bool,Bool,Bool)]-\u003e(a,a,a,a,a,a)",
          "package": "bitstream",
          "signature": "[(Bool,Bool,Bool,Bool,Bool,Bool)]-\u003e(α,α,α,α,α,α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(m, n))\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of\n corresponding bit pairs. If one input \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e is short, excess\n bits of the longer \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e are discarded.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zip",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e [(Bool, Bool)]",
          "source": "src/Data-Bitstream-Generic.html#zip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zip\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zip\"]"
        },
        "index": {
          "description": "min zip takes two Bitstream and returns list of corresponding bit pairs If one input Bitstream is short excess bits of the longer Bitstream are discarded",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zip",
          "normalized": "a-\u003ea-\u003e[(Bool,Bool)]",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003e[(Bool,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e function takes three \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list\n of triples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zip3",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α -\u003e [(Bool, Bool, Bool)]",
          "source": "src/Data-Bitstream-Generic.html#zip3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zip3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zip3\"]"
        },
        "index": {
          "description": "The zip3 function takes three Bitstream and returns list of triples analogous to zip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zip3",
          "normalized": "a-\u003ea-\u003ea-\u003e[(Bool,Bool,Bool)]",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα-\u003e[(Bool,Bool,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zip4",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α -\u003e α -\u003e [(Bool, Bool, Bool, Bool)]",
          "source": "src/Data-Bitstream-Generic.html#zip4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zip4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zip4\"]"
        },
        "index": {
          "description": "The zip4 function takes four lists and returns list of quadruples analogous to zip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zip4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003e[(Bool,Bool,Bool,Bool)]",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα-\u003eα-\u003e[(Bool,Bool,Bool,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zip5",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e [(Bool, Bool, Bool, Bool, Bool)]",
          "source": "src/Data-Bitstream-Generic.html#zip5",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zip5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zip5\"]"
        },
        "index": {
          "description": "The zip5 function takes five Bitstream and returns list of five-tuples analogous to zip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zip5",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[(Bool,Bool,Bool,Bool,Bool)]",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα-\u003eα-\u003eα-\u003e[(Bool,Bool,Bool,Bool,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of\n six-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zip6",
          "package": "bitstream",
          "signature": "α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e [(Bool, Bool, Bool, Bool, Bool, Bool)]",
          "source": "src/Data-Bitstream-Generic.html#zip6",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zip6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zip6\"]"
        },
        "index": {
          "description": "The zip6 function takes six Bitstream and returns list of six-tuples analogous to zip",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zip6",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[(Bool,Bool,Bool,Bool,Bool,Bool)]",
          "package": "bitstream",
          "signature": "α-\u003eα-\u003eα-\u003eα-\u003eα-\u003eα-\u003e[(Bool,Bool,Bool,Bool,Bool,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(m, n))\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the\n function given as the first argument, instead of a tupling\n function.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zipWith",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e β) -\u003e α -\u003e α -\u003e [β]",
          "source": "src/Data-Bitstream-Generic.html#zipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zipWith\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zipWith\"]"
        },
        "index": {
          "description": "min zipWith generalises zip by zipping with the function given as the first argument instead of tupling function",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zipWith",
          "normalized": "(Bool-\u003eBool-\u003ea)-\u003eb-\u003eb-\u003e[a]",
          "package": "bitstream",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eβ)-\u003eα-\u003eα-\u003e[β]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n bits, as well as three \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of their\n point-wise combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zipWith3",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool -\u003e β) -\u003e α -\u003e α -\u003e α -\u003e [β]",
          "source": "src/Data-Bitstream-Generic.html#zipWith3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zipWith3\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zipWith3\"]"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three bits as well as three Bitstream and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zipWith3",
          "normalized": "(Bool-\u003eBool-\u003eBool-\u003ea)-\u003eb-\u003eb-\u003eb-\u003e[a]",
          "package": "bitstream",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool-\u003eβ)-\u003eα-\u003eα-\u003eα-\u003e[β]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n bits, as well as four \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of their\n point-wise combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zipWith4",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e β) -\u003e α -\u003e α -\u003e α -\u003e α -\u003e [β]",
          "source": "src/Data-Bitstream-Generic.html#zipWith4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zipWith4\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zipWith4\"]"
        },
        "index": {
          "description": "The zipWith4 function takes function which combines four bits as well as four Bitstream and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zipWith4",
          "normalized": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003ea)-\u003eb-\u003eb-\u003eb-\u003eb-\u003e[a]",
          "package": "bitstream",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003eβ)-\u003eα-\u003eα-\u003eα-\u003eα-\u003e[β]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n bits, as well as five \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of their\n point-wise combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zipWith5",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e β) -\u003e α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e [β]",
          "source": "src/Data-Bitstream-Generic.html#zipWith5",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zipWith5\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zipWith5\"]"
        },
        "index": {
          "description": "The zipWith5 function takes function which combines five bits as well as five Bitstream and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zipWith5",
          "normalized": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003ea)-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003e[a]",
          "package": "bitstream",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eβ)-\u003eα-\u003eα-\u003eα-\u003eα-\u003eα-\u003e[β]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six bits,\n as well as six \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Bitstream.Generic\",\"Data.Bitstream.Lazy\",\"Data.Bitstream\"]",
          "name": "zipWith6",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e β) -\u003e α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e α -\u003e [β]",
          "source": "src/Data-Bitstream-Generic.html#zipWith6",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:zipWith6\",\"http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:zipWith6\"]"
        },
        "index": {
          "description": "The zipWith6 function takes function which combines six bits as well as six Bitstream and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data Bitstream Generic",
          "module": "Data.Bitstream.Generic",
          "name": "zipWith6",
          "normalized": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003ea)-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003e[a]",
          "package": "bitstream",
          "partial": "With",
          "signature": "(Bool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eβ)-\u003eα-\u003eα-\u003eα-\u003eα-\u003eα-\u003eα-\u003e[β]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Generic.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, packed, lazy bit streams (i.e. list of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es) with\n semi-automatic stream fusion.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions. e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.BitStream.Lazy as LS\n\u003c/pre\u003e\u003cp\u003eLazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es are made of possibly infinite list of strict\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es as chunks, and each chunks have at least 1 bit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "Lazy",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Fast packed lazy bit streams i.e list of Bool with semi-automatic stream fusion This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.BitStream.Lazy as LS Lazy Bitstream are made of possibly infinite list of strict Bitstream as chunks and each chunks have at least bit",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "Lazy",
          "package": "bitstream",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e vector, supporting\n many efficient operations. \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es have an idea of\n \u003cem\u003edirections\u003c/em\u003e controlling how octets are interpreted as bits. There\n are two types of concrete \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "Bitstream",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Lazy.html#Bitstream",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Bool vector supporting many efficient operations Bitstream have an idea of directions controlling how octets are interpreted as bits There are two types of concrete Bitstream Bitstream Left and Bitstream Right",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "Bitstream",
          "package": "bitstream",
          "partial": "Bitstream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#t:Bitstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n LSB comes first and MSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [False, False, False, False, True, True , True , True]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [False, False, True , False, True, False, False, True]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstream as a\n little-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "Left",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Left",
          "type": "data"
        },
        "index": {
          "description": "Left bitstreams interpret an octet as vector of bits whose LSB comes first and MSB comes last e.g False False False False True True True True False False True False True False False True Bits operations like toBits treat Left bitstream as little-endian integer",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "Left",
          "package": "bitstream",
          "partial": "Left",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#t:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n MSB comes first and LSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [True, True , True , True, False, False, False, False]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [True, False, False, True, False, True , False, False]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstream as a\n big-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "Right",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Right",
          "type": "data"
        },
        "index": {
          "description": "Right bitstreams interpret an octet as vector of bits whose MSB comes first and LSB comes last e.g True True True True False False False False True False False True False True False False Bits operations like toBits treat Right bitstream as big-endian integer",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "Right",
          "package": "bitstream",
          "partial": "Right",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#t:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "appendFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream-Lazy.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append Bitstream to file",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "appendFile",
          "normalized": "FilePath-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a circular one, or\n equivalently, the infinite repetition of the original \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n It is the identity on infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "cycle",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e Bitstream d",
          "source": "src/Data-Bitstream-Lazy.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "cycle ties finite Bitstream into circular one or equivalently the infinite repetition of the original Bitstream It is the identity on infinite Bitstream",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "cycle",
          "normalized": "Bitstream a-\u003eBitstream a",
          "package": "bitstream",
          "signature": "Bitstream d-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "directionLToR",
          "package": "bitstream",
          "signature": "Bitstream Left -\u003e Bitstream Right",
          "source": "src/Data-Bitstream-Lazy.html#directionLToR",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream Left into Bitstream Right Bit directions only affect octet-based operations such as toByteString",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "directionLToR",
          "normalized": "Bitstream Left-\u003eBitstream Right",
          "package": "bitstream",
          "partial": "LTo",
          "signature": "Bitstream Left-\u003eBitstream Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:directionLToR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "directionRToL",
          "package": "bitstream",
          "signature": "Bitstream Right -\u003e Bitstream Left",
          "source": "src/Data-Bitstream-Lazy.html#directionRToL",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream Right into Bitstream Left Bit directions only affect octet-based operations such as toByteString",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "directionRToL",
          "normalized": "Bitstream Right-\u003eBitstream Left",
          "package": "bitstream",
          "partial": "RTo",
          "signature": "Bitstream Right-\u003eBitstream Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:directionRToL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "fromByteString",
          "package": "bitstream",
          "signature": "ByteString -\u003e Bitstream d",
          "source": "src/Data-Bitstream-Lazy.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert lazy ByteString into lazy Bitstream",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "fromByteString",
          "normalized": "ByteString-\u003eBitstream a",
          "package": "bitstream",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a list of chunks, strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es, into a\n lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "fromChunks",
          "package": "bitstream",
          "signature": "[Bitstream d] -\u003e Bitstream d",
          "source": "src/Data-Bitstream-Lazy.html#fromChunks",
          "type": "function"
        },
        "index": {
          "description": "Convert list of chunks strict Bitstream into lazy Bitstream",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "fromChunks",
          "normalized": "[Bitstream a]-\u003eBitstream a",
          "package": "bitstream",
          "partial": "Chunks",
          "signature": "[Bitstream d]-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:fromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003estdin\u003c/code\u003e. Will read \u003cem\u003elazily\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "getContents",
          "package": "bitstream",
          "signature": "IO (Bitstream d)",
          "source": "src/Data-Bitstream-Lazy.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "getContents is equivalent to hGetContents stdin Will read lazily",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "getContents",
          "package": "bitstream",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e h n\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e directly from the specified\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e. First argument \u003ccode\u003eh\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to read from, and\n the second \u003ccode\u003en\u003c/code\u003e is the number of \u003cem\u003eoctets\u003c/em\u003e to read, not \u003cem\u003ebits\u003c/em\u003e. It\n returns the octets read, up to \u003ccode\u003en\u003c/code\u003e, or null if EOF has been\n reached.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end is closed,\n \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "hGet",
          "package": "bitstream",
          "signature": "Handle -\u003e Int -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream-Lazy.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "hGet reads Bitstream directly from the specified Handle First argument is the Handle to read from and the second is the number of octets to read not bits It returns the octets read up to or null if EOF has been reached If the handle is pipe or socket and the writing end is closed hGet will behave as if EOF was reached",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Read entire handle contents \u003cem\u003elazily\u003c/em\u003e into a\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e. Chunks are read on demand, using the default chunk\n size.\n\u003c/p\u003e\u003cp\u003eOnce EOF is encountered, the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "hGetContents",
          "package": "bitstream",
          "signature": "Handle -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream-Lazy.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents lazily into Bitstream Chunks are read on demand using the default chunk size Once EOF is encountered the Handle is closed",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it\n will never block waiting for data to become available, instead it\n returns only whatever data is available.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "hGetNonBlocking",
          "package": "bitstream",
          "signature": "Handle -\u003e Int -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream-Lazy.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is similar to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "hPut",
          "package": "bitstream",
          "signature": "Handle -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream-Lazy.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to the given Handle",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "hPut",
          "normalized": "Handle-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "Put",
          "signature": "Handle-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e d\n -\u003e \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e as its argument. The entire input from the stdin\n is lazily passed to this function as its argument, and the\n resulting \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e is output on the stdout.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "interact",
          "package": "bitstream",
          "signature": "(Bitstream d -\u003e Bitstream d) -\u003e IO ()",
          "source": "src/Data-Bitstream-Lazy.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type Bitstream Bitstream as its argument The entire input from the stdin is lazily passed to this function as its argument and the resulting Bitstream is output on the stdout",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "interact",
          "normalized": "(Bitstream a-\u003eBitstream a)-\u003eIO()",
          "package": "bitstream",
          "signature": "(Bitstream d-\u003eBitstream d)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e of\n repeated applications of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "iterate",
          "package": "bitstream",
          "signature": "(Bool -\u003e Bool) -\u003e Bool -\u003e Bitstream d",
          "source": "src/Data-Bitstream-Lazy.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite Bitstream of repeated applications of to iterate",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "iterate",
          "normalized": "(Bool-\u003eBool)-\u003eBool-\u003eBitstream a",
          "package": "bitstream",
          "signature": "(Bool-\u003eBool)-\u003eBool-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003estdout\u003c/code\u003e, equivalent to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "putBits",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream-Lazy.html#putBits",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to stdout equivalent to hPut stdout",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "putBits",
          "normalized": "Bitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "Bits",
          "signature": "Bitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:putBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Read an entire file lazily into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "readFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream-Lazy.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into Bitstream",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e, with \u003ccode\u003ex\u003c/code\u003e the\n value of every bits.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "repeat",
          "package": "bitstream",
          "signature": "Bool -\u003e Bitstream d",
          "source": "src/Data-Bitstream-Lazy.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite Bitstream with the value of every bits",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "repeat",
          "normalized": "Bool-\u003eBitstream a",
          "package": "bitstream",
          "signature": "Bool-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e bits\u003c/code\u003e converts a lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ebits\u003c/code\u003e\n into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The resulting octets will be padded\n with zeroes if \u003ccode\u003ebs\u003c/code\u003e is finite and its \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e is not multiple of\n 8.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "toByteString",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e ByteString",
          "source": "src/Data-Bitstream-Lazy.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "toByteString bits converts lazy Bitstream bits into lazy ByteString The resulting octets will be padded with zeroes if bs is finite and its length is not multiple of",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "toByteString",
          "normalized": "Bitstream a-\u003eByteString",
          "package": "bitstream",
          "partial": "Byte String",
          "signature": "Bitstream d-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a list of chunks, strict\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "toChunks",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e [Bitstream d]",
          "source": "src/Data-Bitstream-Lazy.html#toChunks",
          "type": "function"
        },
        "index": {
          "description": "Convert lazy Bitstream into list of chunks strict Bitstream",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "toChunks",
          "normalized": "Bitstream a-\u003e[Bitstream a]",
          "package": "bitstream",
          "partial": "Chunks",
          "signature": "Bitstream d-\u003e[Bitstream d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:toChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Lazy",
          "name": "writeFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream-Lazy.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to file",
          "hierarchy": "Data Bitstream Lazy",
          "module": "Data.Bitstream.Lazy",
          "name": "writeFile",
          "normalized": "FilePath-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Lazy.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor internal use only.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "Packet",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html",
          "type": "module"
        },
        "index": {
          "description": "For internal use only",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "Packet",
          "package": "bitstream",
          "partial": "Packet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n LSB comes first and MSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [False, False, False, False, True, True , True , True]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [False, False, True , False, True, False, False, True]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstream as a\n little-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "Left",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Left",
          "type": "data"
        },
        "index": {
          "description": "Left bitstreams interpret an octet as vector of bits whose LSB comes first and MSB comes last e.g False False False False True True True True False False True False True False False True Bits operations like toBits treat Left bitstream as little-endian integer",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "Left",
          "package": "bitstream",
          "partial": "Left",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#t:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es are strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es having at most 8 bits.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "Packet",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "Packet are strict Bitstream having at most bits",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "Packet",
          "package": "bitstream",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n MSB comes first and LSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [True, True , True , True, False, False, False, False]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [True, False, False, True, False, True , False, False]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstream as a\n big-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "Right",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Right",
          "type": "data"
        },
        "index": {
          "description": "Right bitstreams interpret an octet as vector of bits whose MSB comes first and LSB comes last e.g True True True True False False False False True False False True False True False False Bits operations like toBits treat Right bitstream as big-endian integer",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "Right",
          "package": "bitstream",
          "partial": "Right",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#t:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert an octet to \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "fromOctet",
          "package": "bitstream",
          "signature": "Word8 -\u003e Packet d",
          "source": "src/Data-Bitstream-Packet.html#fromOctet",
          "type": "function"
        },
        "index": {
          "description": "Convert an octet to Packet",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "fromOctet",
          "normalized": "Word-\u003ePacket a",
          "package": "bitstream",
          "partial": "Octet",
          "signature": "Word-\u003ePacket d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#v:fromOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003efull\u003c/a\u003e\u003c/code\u003e p == \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e iff \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e p == 8\u003c/code\u003e, otherwise it\n returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "full",
          "package": "bitstream",
          "signature": "Packet d -\u003e Bool",
          "source": "src/Data-Bitstream-Packet.html#full",
          "type": "function"
        },
        "index": {
          "description": "full True iff length otherwise it returns False",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "full",
          "normalized": "Packet a-\u003eBool",
          "package": "bitstream",
          "signature": "Packet d-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#v:full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Change the direction of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoOctet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "packetLToR",
          "package": "bitstream",
          "signature": "Packet Left -\u003e Packet Right",
          "source": "src/Data-Bitstream-Packet.html#packetLToR",
          "type": "function"
        },
        "index": {
          "description": "Change the direction of Packet from Left to Right Bit directions only affect octet-based operations such as toOctet",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "packetLToR",
          "normalized": "Packet Left-\u003ePacket Right",
          "package": "bitstream",
          "partial": "LTo",
          "signature": "Packet Left-\u003ePacket Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#v:packetLToR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Change the direction of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoOctet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "packetRToL",
          "package": "bitstream",
          "signature": "Packet Right -\u003e Packet Left",
          "source": "src/Data-Bitstream-Packet.html#packetRToL",
          "type": "function"
        },
        "index": {
          "description": "Change the direction of Packet from Right to Left Bit directions only affect octet-based operations such as toOctet",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "packetRToL",
          "normalized": "Packet Right-\u003ePacket Left",
          "package": "bitstream",
          "partial": "RTo",
          "signature": "Packet Right-\u003ePacket Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#v:packetRToL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etoOctet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e converts a \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e to an octet, padding\n with zeroes if \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e p \u003c 8\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream.Packet",
          "name": "toOctet",
          "package": "bitstream",
          "signature": "Packet d -\u003e Word8",
          "source": "src/Data-Bitstream-Packet.html#toOctet",
          "type": "function"
        },
        "index": {
          "description": "toOctet converts Packet to an octet padding with zeroes if length",
          "hierarchy": "Data Bitstream Packet",
          "module": "Data.Bitstream.Packet",
          "name": "toOctet",
          "normalized": "Packet a-\u003eWord",
          "package": "bitstream",
          "partial": "Octet",
          "signature": "Packet d-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream-Packet.html#v:toOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, packed, strict bit streams (i.e. list of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es) with\n semi-automatic stream fusion.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions. e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.BitStream as BS\n\u003c/pre\u003e\u003cp\u003eStrict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es are made of strict \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es,\n and each \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es have at least 1 bit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bitstream",
          "name": "Bitstream",
          "package": "bitstream",
          "source": "src/Data-Bitstream.html",
          "type": "module"
        },
        "index": {
          "description": "Fast packed strict bit streams i.e list of Bool with semi-automatic stream fusion This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.BitStream as BS Strict Bitstream are made of strict Vector of Packet and each Packet have at least bit",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "Bitstream",
          "package": "bitstream",
          "partial": "Bitstream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e vector, supporting\n many efficient operations. \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es have an idea of\n \u003cem\u003edirections\u003c/em\u003e controlling how octets are interpreted as bits. There\n are two types of concrete \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003es: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "Bitstream",
          "package": "bitstream",
          "source": "src/Data-Bitstream.html#Bitstream",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Bool vector supporting many efficient operations Bitstream have an idea of directions controlling how octets are interpreted as bits There are two types of concrete Bitstream Bitstream Left and Bitstream Right",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "Bitstream",
          "package": "bitstream",
          "partial": "Bitstream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#t:Bitstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n LSB comes first and MSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [False, False, False, False, True, True , True , True]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [False, False, True , False, True, False, False, True]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e bitstream as a\n little-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "Left",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Left",
          "type": "data"
        },
        "index": {
          "description": "Left bitstreams interpret an octet as vector of bits whose LSB comes first and MSB comes last e.g False False False False True True True True False False True False True False False True Bits operations like toBits treat Left bitstream as little-endian integer",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "Left",
          "package": "bitstream",
          "partial": "Left",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#t:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstreams interpret an octet as a vector of bits whose\n MSB comes first and LSB comes last e.g.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 11110000 =\u003e [True, True , True , True, False, False, False, False]\n\u003c/li\u003e\u003cli\u003e 10010100 =\u003e [True, False, False, True, False, True , False, False]\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e operations (like \u003ccode\u003e\u003ca\u003etoBits\u003c/a\u003e\u003c/code\u003e) treat a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e bitstream as a\n big-endian integer.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "Right",
          "package": "bitstream",
          "source": "src/Data-Bitstream-Packet.html#Right",
          "type": "data"
        },
        "index": {
          "description": "Right bitstreams interpret an octet as vector of bits whose MSB comes first and LSB comes last e.g True True True True False False False False True False False True False True False False Bits operations like toBits treat Right bitstream as big-endian integer",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "Right",
          "package": "bitstream",
          "partial": "Right",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#t:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "appendFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append Bitstream to file",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "appendFile",
          "normalized": "FilePath-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "directionLToR",
          "package": "bitstream",
          "signature": "Bitstream Left -\u003e Bitstream Right",
          "source": "src/Data-Bitstream.html#directionLToR",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream Left into Bitstream Right Bit directions only affect octet-based operations such as toByteString",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "directionLToR",
          "normalized": "Bitstream Left-\u003eBitstream Right",
          "package": "bitstream",
          "partial": "LTo",
          "signature": "Bitstream Left-\u003eBitstream Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:directionLToR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Bit directions only affect octet-based operations such as\n \u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "directionRToL",
          "package": "bitstream",
          "signature": "Bitstream Right -\u003e Bitstream Left",
          "source": "src/Data-Bitstream.html#directionRToL",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream Right into Bitstream Left Bit directions only affect octet-based operations such as toByteString",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "directionRToL",
          "normalized": "Bitstream Right-\u003eBitstream Left",
          "package": "bitstream",
          "partial": "RTo",
          "signature": "Bitstream Right-\u003eBitstream Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:directionRToL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a strict\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "fromByteString",
          "package": "bitstream",
          "signature": "ByteString -\u003e Bitstream d",
          "source": "src/Data-Bitstream.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert strict ByteString into strict Bitstream",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "fromByteString",
          "normalized": "ByteString-\u003eBitstream a",
          "package": "bitstream",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "fromPackets",
          "package": "bitstream",
          "signature": "Vector (Packet d) -\u003e Bitstream d",
          "source": "src/Data-Bitstream.html#fromPackets",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector of Packet into Bitstream",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "fromPackets",
          "normalized": "Vector(Packet a)-\u003eBitstream a",
          "package": "bitstream",
          "partial": "Packets",
          "signature": "Vector(Packet d)-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:fromPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Read a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e from the stdin strictly, equivalent to\n \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003estdin\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed after the contents\n have been read.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "getContents",
          "package": "bitstream",
          "signature": "IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "Read Bitstream from the stdin strictly equivalent to hGetContents stdin The Handle is closed after the contents have been read",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "getContents",
          "package": "bitstream",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e h n\u003c/code\u003e reads a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e directly from the\n specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e. First argument \u003ccode\u003eh\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to read\n from, and the second \u003ccode\u003en\u003c/code\u003e is the number of \u003cem\u003eoctets\u003c/em\u003e to read, not\n \u003cem\u003ebits\u003c/em\u003e. It returns the octets read, up to \u003ccode\u003en\u003c/code\u003e, or null if EOF has\n been reached.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end is closed,\n \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "hGet",
          "package": "bitstream",
          "signature": "Handle -\u003e Int -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "hGet reads Bitstream directly from the specified Handle First argument is the Handle to read from and the second is the number of octets to read not bits It returns the octets read up to or null if EOF has been reached If the handle is pipe or socket and the writing end is closed hGet will behave as if EOF was reached",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Read entire handle contents strictly into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function reads chunks at a time, doubling the chunksize on each\n read. The final buffer is then realloced to the appropriate size. For\n files \u003e half of available memory, this may lead to memory exhaustion.\n Consider using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e in this case.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed once the contents have been read, or if an\n exception is thrown.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "hGetContents",
          "package": "bitstream",
          "signature": "Handle -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents strictly into Bitstream This function reads chunks at time doubling the chunksize on each read The final buffer is then realloced to the appropriate size For files half of available memory this may lead to memory exhaustion Consider using readFile in this case The Handle is closed once the contents have been read or if an exception is thrown",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it\n will never block waiting for data to become available. If there is\n no data available to be read, \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "hGetNonBlocking",
          "package": "bitstream",
          "signature": "Handle -\u003e Int -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is similar to hGet except that it will never block waiting for data to become available If there is no data available to be read hGetNonBlocking returns empty",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that a shorter \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e may be\n returned if there are not enough octets immediately available to\n satisfy the whole request. \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e only blocks if there is no\n data available, and EOF has not yet been reached.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "hGetSome",
          "package": "bitstream",
          "signature": "Handle -\u003e Int -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#hGetSome",
          "type": "function"
        },
        "index": {
          "description": "Like hGet except that shorter Bitstream may be returned if there are not enough octets immediately available to satisfy the whole request hGetSome only blocks if there is no data available and EOF has not yet been reached",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "hGetSome",
          "normalized": "Handle-\u003eInt-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "Get Some",
          "signature": "Handle-\u003eInt-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "hPut",
          "package": "bitstream",
          "signature": "Handle -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to the given Handle",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "hPut",
          "normalized": "Handle-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "Put",
          "signature": "Handle-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e d\n -\u003e \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e as its argument. The entire input from the stdin\n is passed to this function as its argument, and the resulting\n \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e is output on the stdout.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "interact",
          "package": "bitstream",
          "signature": "(Bitstream d -\u003e Bitstream d) -\u003e IO ()",
          "source": "src/Data-Bitstream.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type Bitstream Bitstream as its argument The entire input from the stdin is passed to this function as its argument and the resulting Bitstream is output on the stdout",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "interact",
          "normalized": "(Bitstream a-\u003eBitstream a)-\u003eIO()",
          "package": "bitstream",
          "signature": "(Bitstream d-\u003eBitstream d)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to the stdout, equivalent to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "putBits",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream.html#putBits",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to the stdout equivalent to hPut stdout",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "putBits",
          "normalized": "Bitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "Bits",
          "signature": "Bitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:putBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Read an entire file strictly into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "readFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e IO (Bitstream d)",
          "source": "src/Data-Bitstream.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into Bitstream",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO(Bitstream a)",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Bitstream d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "streamPackets",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e Stream (Packet d)",
          "source": "src/Data-Bitstream.html#streamPackets",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream into Stream of Packet",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "streamPackets",
          "normalized": "Bitstream a-\u003eStream(Packet a)",
          "package": "bitstream",
          "partial": "Packets",
          "signature": "Bitstream d-\u003eStream(Packet d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:streamPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e bits\u003c/code\u003e converts a strict \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ebits\u003c/code\u003e\n into a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The resulting octets will be padded\n with zeroes if the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003ebs\u003c/code\u003e is not multiple of 8.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "toByteString",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e ByteString",
          "source": "src/Data-Bitstream.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "toByteString bits converts strict Bitstream bits into strict ByteString The resulting octets will be padded with zeroes if the length of bs is not multiple of",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "toByteString",
          "normalized": "Bitstream a-\u003eByteString",
          "package": "bitstream",
          "partial": "Byte String",
          "signature": "Bitstream d-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "toPackets",
          "package": "bitstream",
          "signature": "Bitstream d -\u003e Vector (Packet d)",
          "source": "src/Data-Bitstream.html#toPackets",
          "type": "function"
        },
        "index": {
          "description": "Convert Bitstream into Vector of Packet",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "toPackets",
          "normalized": "Bitstream a-\u003eVector(Packet a)",
          "package": "bitstream",
          "partial": "Packets",
          "signature": "Bitstream d-\u003eVector(Packet d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:toPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e,\n with provided overall bit length. The correctness of the bit length\n isn't checked, so you MUST be sure your bit length is absolutely\n correct.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "unsafeFromPackets",
          "package": "bitstream",
          "signature": "Int -\u003e Vector (Packet d) -\u003e Bitstream d",
          "source": "src/Data-Bitstream.html#unsafeFromPackets",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector of Packet into Bitstream with provided overall bit length The correctness of the bit length isn checked so you MUST be sure your bit length is absolutely correct",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "unsafeFromPackets",
          "normalized": "Int-\u003eVector(Packet a)-\u003eBitstream a",
          "package": "bitstream",
          "partial": "From Packets",
          "signature": "Int-\u003eVector(Packet d)-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unsafeFromPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "unstreamPackets",
          "package": "bitstream",
          "signature": "Stream (Packet d) -\u003e Bitstream d",
          "source": "src/Data-Bitstream.html#unstreamPackets",
          "type": "function"
        },
        "index": {
          "description": "Convert Stream of Packet into Bitstream",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "unstreamPackets",
          "normalized": "Stream(Packet a)-\u003eBitstream a",
          "package": "bitstream",
          "partial": "Packets",
          "signature": "Stream(Packet d)-\u003eBitstream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:unstreamPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Write a \u003ccode\u003e\u003ca\u003eBitstream\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Bitstream",
          "name": "writeFile",
          "package": "bitstream",
          "signature": "FilePath -\u003e Bitstream d -\u003e IO ()",
          "source": "src/Data-Bitstream.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write Bitstream to file",
          "hierarchy": "Data Bitstream",
          "module": "Data.Bitstream",
          "name": "writeFile",
          "normalized": "FilePath-\u003eBitstream a-\u003eIO()",
          "package": "bitstream",
          "partial": "File",
          "signature": "FilePath-\u003eBitstream d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstream/docs/Data-Bitstream.html#v:writeFile"
      }
    }
  ]
]