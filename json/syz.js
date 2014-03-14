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
        "word": "syz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e``Scrap Your Zippers: A Generic Zipper for Heterogeneous Types.\n Michael D. Adams.  WGP '10: Proceedings of the 2010 ACM SIGPLAN\n workshop on Generic programming, 2010.''\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.cs.indiana.edu/~adamsmd/papers/scrap_your_zippers/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Zipper",
          "name": "Zipper",
          "package": "syz",
          "source": "src/Data-Generics-Zipper.html",
          "type": "module"
        },
        "index": {
          "description": "Scrap Your Zippers Generic Zipper for Heterogeneous Types Michael Adams WGP Proceedings of the ACM SIGPLAN workshop on Generic programming See http www.cs.indiana.edu adamsmd papers scrap your zippers",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "Zipper",
          "package": "syz",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic zipper with a root object of type \u003ccode\u003eroot\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "Zipper",
          "package": "syz",
          "source": "src/Data-Generics-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "generic zipper with root object of type root",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "Zipper",
          "package": "syz",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down.  Moves to rightmost immediate child.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff at a leaf and thus no children exist.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "down",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#down",
          "type": "function"
        },
        "index": {
          "description": "Move down Moves to rightmost immediate child Returns Nothing iff at leaf and thus no children exist",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "down",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "syz",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down. Move to the leftmost immediate child.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff at a leaf and thus no children exist.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "down'",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#down%27",
          "type": "function"
        },
        "index": {
          "description": "Move down Move to the leftmost immediate child Returns Nothing iff at leaf and thus no children exist",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "down'",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "syz",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:down-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformer to the rightmost child if one exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "downM",
          "package": "syz",
          "signature": "m (Zipper a)-\u003e (Zipper a -\u003e m (Zipper a))-\u003e Zipper a-\u003e m (Zipper a)",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformer to the rightmost child if one exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "downM",
          "normalized": "a(Zipper b)-\u003e(Zipper b-\u003ea(Zipper b))-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "m(Zipper a)-\u003e(Zipper a-\u003em(Zipper a))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:downM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the parent if it exists. \n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "downQ",
          "package": "syz",
          "signature": "b-\u003e (Zipper a -\u003e b)-\u003e Zipper a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the parent if it exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "downQ",
          "normalized": "a-\u003e(Zipper b-\u003ea)-\u003eZipper b-\u003ea",
          "package": "syz",
          "signature": "b-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:downQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformer to the rightmost child if one exists.  Otherwise, leaves the zipper unchanged.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "downT",
          "package": "syz",
          "signature": "(Zipper a -\u003e Zipper a) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#downT",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformer to the rightmost child if one exists Otherwise leaves the zipper unchanged",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "downT",
          "normalized": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:downT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove up a zipper to the root and return the root object.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "fromZipper",
          "package": "syz",
          "signature": "Zipper a -\u003e a",
          "source": "src/Data-Generics-Zipper.html#fromZipper",
          "type": "function"
        },
        "index": {
          "description": "Move up zipper to the root and return the root object",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "fromZipper",
          "normalized": "Zipper a-\u003ea",
          "package": "syz",
          "partial": "Zipper",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:fromZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value in the hole.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff \u003ccode\u003ea\u003c/code\u003e is not the type of the value in the hole.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "getHole",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe b",
          "source": "src/Data-Generics-Zipper.html#getHole",
          "type": "function"
        },
        "index": {
          "description": "Get the value in the hole Returns Nothing iff is not the type of the value in the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "getHole",
          "normalized": "Zipper a-\u003eMaybe b",
          "package": "syz",
          "partial": "Hole",
          "signature": "Zipper a-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:getHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove left.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff already at leftmost sibling.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "left",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#left",
          "type": "function"
        },
        "index": {
          "description": "Move left Returns Nothing iff already at leftmost sibling",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "left",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "syz",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the left sibling if one exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "leftQ",
          "package": "syz",
          "signature": "b-\u003e (Zipper a -\u003e b)-\u003e Zipper a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the left sibling if one exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "leftQ",
          "normalized": "a-\u003e(Zipper b-\u003ea)-\u003eZipper b-\u003ea",
          "package": "syz",
          "signature": "b-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:leftQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformer to the left sibling if one exists.  Otherwise, leaves the zipper unchanged.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "leftT",
          "package": "syz",
          "signature": "(Zipper a -\u003e Zipper a) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#leftT",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformer to the left sibling if one exists Otherwise leaves the zipper unchanged",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "leftT",
          "normalized": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:leftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the leftmost sibling.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "leftmost",
          "package": "syz",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#leftmost",
          "type": "function"
        },
        "index": {
          "description": "Move to the leftmost sibling",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "leftmost",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "syz",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:leftmost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformer using the specified movement operations.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "moveM",
          "package": "syz",
          "signature": "Move a-\u003e Move a-\u003e m (Zipper a)-\u003e (Zipper a -\u003e m (Zipper a))-\u003e Zipper a-\u003e m (Zipper a)",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformer using the specified movement operations",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "moveM",
          "normalized": "Move a-\u003eMove a-\u003eb(Zipper a)-\u003e(Zipper a-\u003eb(Zipper a))-\u003eZipper a-\u003eb(Zipper a)",
          "package": "syz",
          "signature": "Move a-\u003eMove a-\u003em(Zipper a)-\u003e(Zipper a-\u003em(Zipper a))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:moveM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query using the specified movement operation.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "moveQ",
          "package": "syz",
          "signature": "Move a-\u003e b-\u003e (Zipper a -\u003e b)-\u003e Zipper a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query using the specified movement operation",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "moveQ",
          "normalized": "Move a-\u003eb-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "package": "syz",
          "signature": "Move a-\u003eb-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:moveQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformer using the specified movement operations.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "moveT",
          "package": "syz",
          "signature": "Move a-\u003e Move a-\u003e Zipper a-\u003e (Zipper a -\u003e Zipper a)-\u003e Zipper a-\u003e Zipper a",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformer using the specified movement operations",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "moveT",
          "normalized": "Move a-\u003eMove a-\u003eZipper a-\u003e(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "Move a-\u003eMove a-\u003eZipper a-\u003e(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:moveT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the hole.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "query",
          "package": "syz",
          "signature": "GenericQ b -\u003e Zipper a -\u003e b",
          "source": "src/Data-Generics-Zipper.html#query",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "query",
          "normalized": "GenericQ a-\u003eZipper b-\u003ea",
          "package": "syz",
          "signature": "GenericQ b-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove right.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff already at rightmost sibling.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "right",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#right",
          "type": "function"
        },
        "index": {
          "description": "Move right Returns Nothing iff already at rightmost sibling",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "right",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "syz",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformer to the right sibling if one exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "rightM",
          "package": "syz",
          "signature": "m (Zipper a)-\u003e (Zipper a -\u003e m (Zipper a))-\u003e Zipper a-\u003e m (Zipper a)",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformer to the right sibling if one exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "rightM",
          "normalized": "a(Zipper b)-\u003e(Zipper b-\u003ea(Zipper b))-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "m(Zipper a)-\u003e(Zipper a-\u003em(Zipper a))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:rightM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the right sibling if one exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "rightQ",
          "package": "syz",
          "signature": "b-\u003e (Zipper a -\u003e b)-\u003e Zipper a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the right sibling if one exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "rightQ",
          "normalized": "a-\u003e(Zipper b-\u003ea)-\u003eZipper b-\u003ea",
          "package": "syz",
          "signature": "b-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:rightQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformer to the right sibling if one exists.  Otherwise, leaves the zipper unchanged.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "rightT",
          "package": "syz",
          "signature": "(Zipper a -\u003e Zipper a) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#rightT",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformer to the right sibling if one exists Otherwise leaves the zipper unchanged",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "rightT",
          "normalized": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:rightT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the rightmost sibling.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "rightmost",
          "package": "syz",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#rightmost",
          "type": "function"
        },
        "index": {
          "description": "Move to the rightmost sibling",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "rightmost",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "syz",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:rightmost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value in the hole.  Does nothing iff \u003ccode\u003ea\u003c/code\u003e is not the type of the value in the hole.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "setHole",
          "package": "syz",
          "signature": "a -\u003e Zipper b -\u003e Zipper b",
          "source": "src/Data-Generics-Zipper.html#setHole",
          "type": "function"
        },
        "index": {
          "description": "Set the value in the hole Does nothing iff is not the type of the value in the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "setHole",
          "normalized": "a-\u003eZipper b-\u003eZipper b",
          "package": "syz",
          "partial": "Hole",
          "signature": "a-\u003eZipper b-\u003eZipper b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:setHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value in the hole.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff \u003ccode\u003ea\u003c/code\u003e is not the type of the value in the hole.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "setHole'",
          "package": "syz",
          "signature": "a -\u003e Zipper b -\u003e Maybe (Zipper b)",
          "source": "src/Data-Generics-Zipper.html#setHole%27",
          "type": "function"
        },
        "index": {
          "description": "Set the value in the hole Returns Nothing iff is not the type of the value in the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "setHole'",
          "normalized": "a-\u003eZipper b-\u003eMaybe(Zipper b)",
          "package": "syz",
          "partial": "Hole'",
          "signature": "a-\u003eZipper b-\u003eMaybe(Zipper b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:setHole-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zipper.  The focus starts at the root of the object.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "toZipper",
          "package": "syz",
          "signature": "a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#toZipper",
          "type": "function"
        },
        "index": {
          "description": "Create zipper The focus starts at the root of the object",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "toZipper",
          "normalized": "a-\u003eZipper a",
          "package": "syz",
          "partial": "Zipper",
          "signature": "a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:toZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformation to the hole.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "trans",
          "package": "syz",
          "signature": "GenericT -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformation to the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "trans",
          "normalized": "GenericT-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "GenericT-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformation to the hole\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "transM",
          "package": "syz",
          "signature": "GenericM m -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#transM",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformation to the hole",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "transM",
          "normalized": "GenericM a-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "GenericM m-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:transM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove up.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e iff already at root and thus no parent exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "up",
          "package": "syz",
          "signature": "Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#up",
          "type": "function"
        },
        "index": {
          "description": "Move up Returns Nothing iff already at root and thus no parent exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "up",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "syz",
          "signature": "Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformer to the parent if it exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "upM",
          "package": "syz",
          "signature": "m (Zipper a)-\u003e (Zipper a -\u003e m (Zipper a))-\u003e Zipper a-\u003e m (Zipper a)",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformer to the parent if it exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "upM",
          "normalized": "a(Zipper b)-\u003e(Zipper b-\u003ea(Zipper b))-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "m(Zipper a)-\u003e(Zipper a-\u003em(Zipper a))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:upM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the rightmost child if one exists.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "upQ",
          "package": "syz",
          "signature": "b-\u003e (Zipper a -\u003e b)-\u003e Zipper a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the rightmost child if one exists",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "upQ",
          "normalized": "a-\u003e(Zipper b-\u003ea)-\u003eZipper b-\u003ea",
          "package": "syz",
          "signature": "b-\u003e(Zipper a-\u003eb)-\u003eZipper a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:upQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformer to the parent if it exists.  Otherwise, leaves the zipper unchanged.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "upT",
          "package": "syz",
          "signature": "(Zipper a -\u003e Zipper a) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#upT",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformer to the parent if it exists Otherwise leaves the zipper unchanged",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "upT",
          "normalized": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "(Zipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:upT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformation everywhere in a bottom-up manner.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zeverywhere",
          "package": "syz",
          "signature": "GenericT -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#zeverywhere",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformation everywhere in bottom-up manner",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zeverywhere",
          "normalized": "GenericT-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "GenericT-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zeverywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformation everywhere in a top-down manner.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zeverywhere'",
          "package": "syz",
          "signature": "GenericT -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#zeverywhere%27",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformation everywhere in top-down manner",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zeverywhere'",
          "normalized": "GenericT-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "GenericT-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zeverywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformation to the immediate children.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zmapM",
          "package": "syz",
          "signature": "GenericM m -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#zmapM",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformation to the immediate children",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zmapM",
          "normalized": "GenericM a-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "GenericM m-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformation to at least one child that does not fail.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zmapMp",
          "package": "syz",
          "signature": "GenericM m -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#zmapMp",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformation to at least one child that does not fail",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zmapMp",
          "normalized": "GenericM a-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "partial": "Mp",
          "signature": "GenericM m-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zmapMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic query to the immediate children.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zmapQ",
          "package": "syz",
          "signature": "GenericQ b -\u003e Zipper a -\u003e [b]",
          "source": "src/Data-Generics-Zipper.html#zmapQ",
          "type": "function"
        },
        "index": {
          "description": "Apply generic query to the immediate children",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zmapQ",
          "normalized": "GenericQ a-\u003eZipper b-\u003e[a]",
          "package": "syz",
          "signature": "GenericQ b-\u003eZipper a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zmapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformation to the immediate children.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zmapT",
          "package": "syz",
          "signature": "GenericT -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#zmapT",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformation to the immediate children",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zmapT",
          "normalized": "GenericT-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "GenericT-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zmapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly apply a monadic \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e generic transformation at the\n top-most, left-most position that the transformation returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.  Behaves like iteratively applying \u003ccode\u003e\u003ca\u003ezsomewhere\u003c/a\u003e\u003c/code\u003e but is\n more efficient because it re-evaluates the transformation\n at only the parents of the last successful application.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zreduce",
          "package": "syz",
          "signature": "GenericM Maybe -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Generics-Zipper.html#zreduce",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly apply monadic Maybe generic transformation at the top-most left-most position that the transformation returns Just Behaves like iteratively applying zsomewhere but is more efficient because it re-evaluates the transformation at only the parents of the last successful application",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zreduce",
          "normalized": "GenericM Maybe-\u003eZipper a-\u003eZipper a",
          "package": "syz",
          "signature": "GenericM Maybe-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zreduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformation once at the topmost leftmost successful location.\n\u003c/p\u003e",
          "module": "Data.Generics.Zipper",
          "name": "zsomewhere",
          "package": "syz",
          "signature": "GenericM m -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Data-Generics-Zipper.html#zsomewhere",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformation once at the topmost leftmost successful location",
          "hierarchy": "Data Generics Zipper",
          "module": "Data.Generics.Zipper",
          "name": "zsomewhere",
          "normalized": "GenericM a-\u003eZipper b-\u003ea(Zipper b)",
          "package": "syz",
          "signature": "GenericM m-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/syz/docs/Data-Generics-Zipper.html#v:zsomewhere"
      }
    }
  ]
]