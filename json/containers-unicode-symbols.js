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
        "word": "containers-unicode-symbols"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-IntMap-Lazy-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap α -\u003e IntMap α",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∆) ∆",
          "normalized": "IntMap a-\u003eIntMap a-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap α-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntMap α -\u003e Bool",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∈) ∈",
          "normalized": "Int-\u003eIntMap a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntMap α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntMap α -\u003e Bool",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∉) ∉",
          "normalized": "Int-\u003eIntMap a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntMap α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e Int -\u003e Bool",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∋) ∋",
          "normalized": "IntMap a-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e Int -\u003e Bool",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∌) ∌",
          "normalized": "IntMap a-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap β -\u003e IntMap α",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∖) ∖",
          "normalized": "IntMap a-\u003eIntMap b-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap β-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap β -\u003e IntMap α",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∩) ∩",
          "normalized": "IntMap a-\u003eIntMap b-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap β-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap α -\u003e IntMap α",
          "source": "src/Data-IntMap-Lazy-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data IntMap Lazy Unicode",
          "module": "Data.IntMap.Lazy.Unicode",
          "name": "(∪) ∪",
          "normalized": "IntMap a-\u003eIntMap a-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap α-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Lazy-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntMap.Strict.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-IntMap-Strict-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap α -\u003e IntMap α",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∆) ∆",
          "normalized": "IntMap a-\u003eIntMap a-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap α-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntMap α -\u003e Bool",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∈) ∈",
          "normalized": "Int-\u003eIntMap a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntMap α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntMap α -\u003e Bool",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∉) ∉",
          "normalized": "Int-\u003eIntMap a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntMap α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e Int -\u003e Bool",
          "source": "src/Data-IntMap-Strict-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∋) ∋",
          "normalized": "IntMap a-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e Int -\u003e Bool",
          "source": "src/Data-IntMap-Strict-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∌) ∌",
          "normalized": "IntMap a-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap β -\u003e IntMap α",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∖) ∖",
          "normalized": "IntMap a-\u003eIntMap b-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap β-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap β -\u003e IntMap α",
          "source": "src/Data-IntMap-Strict-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∩) ∩",
          "normalized": "IntMap a-\u003eIntMap b-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap β-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α -\u003e IntMap α -\u003e IntMap α",
          "source": "src/Data-IntMap-Strict-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data IntMap Strict Unicode",
          "module": "Data.IntMap.Strict.Unicode",
          "name": "(∪) ∪",
          "normalized": "IntMap a-\u003eIntMap a-\u003eIntMap a",
          "package": "containers-unicode-symbols",
          "signature": "IntMap α-\u003eIntMap α-\u003eIntMap α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Strict-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntMap.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-IntMap-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IntMap Unicode",
          "module": "Data.IntMap.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntMap-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntSet.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-IntSet-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet",
          "source": "src/Data-IntSet-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-IntSet-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∆) ∆",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∈) ∈",
          "normalized": "Int-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "Int -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∉) ∉",
          "normalized": "Int-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Int-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e Int -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∋) ∋",
          "normalized": "IntSet-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e Int -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∌) ∌",
          "normalized": "IntSet-\u003eInt-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-IntSet-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∖) ∖",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-IntSet-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∩) ∩",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e IntSet",
          "source": "src/Data-IntSet-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(∪) ∪",
          "normalized": "IntSet-\u003eIntSet-\u003eIntSet",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8834;) = \u003ccode\u003e\u003ca\u003eisProperSubsetOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2282, SUBSET OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊂)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2282",
          "type": "function"
        },
        "index": {
          "description": "isProperSubsetOf SUBSET OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊂) ⊂",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8834-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8835;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8834;)\n\u003c/p\u003e\u003cp\u003eU+2283, SUPERSET OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊃)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2283",
          "type": "function"
        },
        "index": {
          "description": "flip SUPERSET OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊃) ⊃",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8835-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8836; b = \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (a &#8834; b)\n\u003c/p\u003e\u003cp\u003eU+2284, NOT A SUBSET OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊄)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2284",
          "type": "function"
        },
        "index": {
          "description": "not NOT SUBSET OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊄) ⊄",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8836-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8837; b = \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (a &#8835; b)\n\u003c/p\u003e\u003cp\u003eU+2285, NOT A SUPERSET OF\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊅)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2285",
          "type": "function"
        },
        "index": {
          "description": "not NOT SUPERSET OF",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊅) ⊅",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8837-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8838;) = \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2286, SUBSET OF OR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊆)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2286",
          "type": "function"
        },
        "index": {
          "description": "isSubsetOf SUBSET OF OR EQUAL TO",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊆) ⊆",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8838-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8839;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8838;)\n\u003c/p\u003e\u003cp\u003eU+2287, SUPERSET OF OR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊇)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2287",
          "type": "function"
        },
        "index": {
          "description": "flip SUPERSET OF OR EQUAL TO",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊇) ⊇",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8839-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8840; b = (a &#8802; b) &#8743; (a &#8836; b)\n\u003c/p\u003e\u003cp\u003eU+2288, NEITHER A SUBSET OF NOR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊈)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2288",
          "type": "function"
        },
        "index": {
          "description": "NEITHER SUBSET OF NOR EQUAL TO",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊈) ⊈",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8840-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8841; b = (a &#8802; b) &#8743; (a &#8837; b)\n\u003c/p\u003e\u003cp\u003eU+2289, NEITHER A SUPERSET OF NOR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.IntSet.Unicode",
          "name": "(⊉)",
          "package": "containers-unicode-symbols",
          "signature": "IntSet -\u003e IntSet -\u003e Bool",
          "source": "src/Data-IntSet-Unicode.html#%2289",
          "type": "function"
        },
        "index": {
          "description": "NEITHER SUPERSET OF NOR EQUAL TO",
          "hierarchy": "Data IntSet Unicode",
          "module": "Data.IntSet.Unicode",
          "name": "(⊉) ⊉",
          "normalized": "IntSet-\u003eIntSet-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "IntSet-\u003eIntSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-IntSet-Unicode.html#v:-8841-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.Lazy.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-Map-Lazy-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α",
          "source": "src/Data-Map-Lazy-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k α -\u003e Map k α",
          "source": "src/Data-Map-Lazy-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∆) ∆",
          "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k α-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "k -\u003e Map k α -\u003e Bool",
          "source": "src/Data-Map-Lazy-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∈) ∈",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "k-\u003eMap k α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "k -\u003e Map k α -\u003e Bool",
          "source": "src/Data-Map-Lazy-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∉) ∉",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "k-\u003eMap k α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e k -\u003e Bool",
          "source": "src/Data-Map-Lazy-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∋) ∋",
          "normalized": "Map a b-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e k -\u003e Bool",
          "source": "src/Data-Map-Lazy-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∌) ∌",
          "normalized": "Map a b-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k β -\u003e Map k α",
          "source": "src/Data-Map-Lazy-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∖) ∖",
          "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k β-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k β -\u003e Map k α",
          "source": "src/Data-Map-Lazy-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∩) ∩",
          "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k β-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k α -\u003e Map k α",
          "source": "src/Data-Map-Lazy-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data Map Lazy Unicode",
          "module": "Data.Map.Lazy.Unicode",
          "name": "(∪) ∪",
          "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k α-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Lazy-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.Strict.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-Map-Strict-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α",
          "source": "src/Data-Map-Strict-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k α -\u003e Map k α",
          "source": "src/Data-Map-Strict-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∆) ∆",
          "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k α-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "k -\u003e Map k α -\u003e Bool",
          "source": "src/Data-Map-Strict-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∈) ∈",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "k-\u003eMap k α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "k -\u003e Map k α -\u003e Bool",
          "source": "src/Data-Map-Strict-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∉) ∉",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "k-\u003eMap k α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e k -\u003e Bool",
          "source": "src/Data-Map-Strict-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∋) ∋",
          "normalized": "Map a b-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e k -\u003e Bool",
          "source": "src/Data-Map-Strict-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∌) ∌",
          "normalized": "Map a b-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003ek-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k β -\u003e Map k α",
          "source": "src/Data-Map-Strict-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∖) ∖",
          "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k β-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k β -\u003e Map k α",
          "source": "src/Data-Map-Strict-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∩) ∩",
          "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k β-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "Map k α -\u003e Map k α -\u003e Map k α",
          "source": "src/Data-Map-Strict-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data Map Strict Unicode",
          "module": "Data.Map.Strict.Unicode",
          "name": "(∪) ∪",
          "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
          "package": "containers-unicode-symbols",
          "signature": "Map k α-\u003eMap k α-\u003eMap k α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Strict-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-Map-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map Unicode",
          "module": "Data.Map.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Map-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequence.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-Sequence-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Sequence Unicode",
          "module": "Data.Sequence.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Sequence-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.Sequence.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "Seq α",
          "source": "src/Data-Sequence-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data Sequence Unicode",
          "module": "Data.Sequence.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Sequence-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8882;) = (\u003ccode\u003e\u003ca\u003e\u003c|\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eU+22B2, NORMAL SUBGROUP OF\n\u003c/p\u003e",
          "module": "Data.Sequence.Unicode",
          "name": "(⊲)",
          "package": "containers-unicode-symbols",
          "signature": "α -\u003e Seq α -\u003e Seq α",
          "source": "src/Data-Sequence-Unicode.html#%22B2",
          "type": "function"
        },
        "index": {
          "description": "B2 NORMAL SUBGROUP OF",
          "hierarchy": "Data Sequence Unicode",
          "module": "Data.Sequence.Unicode",
          "name": "(⊲) ⊲",
          "normalized": "a-\u003eSeq a-\u003eSeq a",
          "package": "containers-unicode-symbols",
          "signature": "α-\u003eSeq α-\u003eSeq α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Sequence-Unicode.html#v:-8882-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8883;) = (\u003ccode\u003e\u003ca\u003e|\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eU+22B3, CONTAINS AS NORMAL SUBGROUP\n\u003c/p\u003e",
          "module": "Data.Sequence.Unicode",
          "name": "(⊳)",
          "package": "containers-unicode-symbols",
          "signature": "Seq α -\u003e α -\u003e Seq α",
          "source": "src/Data-Sequence-Unicode.html#%22B3",
          "type": "function"
        },
        "index": {
          "description": "B3 CONTAINS AS NORMAL SUBGROUP",
          "hierarchy": "Data Sequence Unicode",
          "module": "Data.Sequence.Unicode",
          "name": "(⊳) ⊳",
          "normalized": "Seq a-\u003ea-\u003eSeq a",
          "package": "containers-unicode-symbols",
          "signature": "Seq α-\u003eα-\u003eSeq α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Sequence-Unicode.html#v:-8883-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8904;) = (\u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eU+22C8, BOWTIE\n\u003c/p\u003e",
          "module": "Data.Sequence.Unicode",
          "name": "(⋈)",
          "package": "containers-unicode-symbols",
          "signature": "Seq α -\u003e Seq α -\u003e Seq α",
          "source": "src/Data-Sequence-Unicode.html#%22C8",
          "type": "function"
        },
        "index": {
          "description": "C8 BOWTIE",
          "hierarchy": "Data Sequence Unicode",
          "module": "Data.Sequence.Unicode",
          "name": "(⋈) ⋈",
          "normalized": "Seq a-\u003eSeq a-\u003eSeq a",
          "package": "containers-unicode-symbols",
          "signature": "Seq α-\u003eSeq α-\u003eSeq α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Sequence-Unicode.html#v:-8904-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "source": "src/Data-Set-Unicode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "Unicode",
          "package": "containers-unicode-symbols",
          "partial": "Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8709;) = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2205, EMPTY SET\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∅)",
          "package": "containers-unicode-symbols",
          "signature": "Set α",
          "source": "src/Data-Set-Unicode.html#%2205",
          "type": "function"
        },
        "index": {
          "description": "empty EMPTY SET",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∅) ∅",
          "package": "containers-unicode-symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8709-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric difference\n\u003c/p\u003e\u003cp\u003ea &#8710; b = (a &#8726; b) &#8746; (b &#8726; a)\n\u003c/p\u003e\u003cp\u003eU+2206, INCREMENT\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∆)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Set α",
          "source": "src/Data-Set-Unicode.html#%2206",
          "type": "function"
        },
        "index": {
          "description": "Symmetric difference INCREMENT",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∆) ∆",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eSet α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8710-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8712;) = \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2208, ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∈)",
          "package": "containers-unicode-symbols",
          "signature": "α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2208",
          "type": "function"
        },
        "index": {
          "description": "member ELEMENT OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∈) ∈",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8712-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8713;) = \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2209, NOT AN ELEMENT OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∉)",
          "package": "containers-unicode-symbols",
          "signature": "α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2209",
          "type": "function"
        },
        "index": {
          "description": "notMember NOT AN ELEMENT OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∉) ∉",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8713-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8715;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8712;)\n\u003c/p\u003e\u003cp\u003eU+220B, CONTAINS AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∋)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%220B",
          "type": "function"
        },
        "index": {
          "description": "flip CONTAINS AS MEMBER",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∋) ∋",
          "normalized": "Set a-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8715-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8716;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8713;)\n\u003c/p\u003e\u003cp\u003eU+220C, DOES NOT CONTAIN AS MEMBER\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∌)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%220C",
          "type": "function"
        },
        "index": {
          "description": "flip DOES NOT CONTAIN AS MEMBER",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∌) ∌",
          "normalized": "Set a-\u003ea-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eα-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8716-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8726;) = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2216, SET MINUS\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∖)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Set α",
          "source": "src/Data-Set-Unicode.html#%2216",
          "type": "function"
        },
        "index": {
          "description": "difference SET MINUS",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∖) ∖",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eSet α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8726-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8745;) = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2229, INTERSECTION\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∩)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Set α",
          "source": "src/Data-Set-Unicode.html#%2229",
          "type": "function"
        },
        "index": {
          "description": "intersection INTERSECTION",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∩) ∩",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eSet α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8745-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8746;) = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+222A, UNION\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(∪)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Set α",
          "source": "src/Data-Set-Unicode.html#%222A",
          "type": "function"
        },
        "index": {
          "description": "union UNION",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(∪) ∪",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eSet α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8746-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8834;) = \u003ccode\u003e\u003ca\u003eisProperSubsetOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2282, SUBSET OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊂)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2282",
          "type": "function"
        },
        "index": {
          "description": "isProperSubsetOf SUBSET OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊂) ⊂",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8834-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8835;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8834;)\n\u003c/p\u003e\u003cp\u003eU+2283, SUPERSET OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊃)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2283",
          "type": "function"
        },
        "index": {
          "description": "flip SUPERSET OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊃) ⊃",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8835-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8836; b = \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (a &#8834; b)\n\u003c/p\u003e\u003cp\u003eU+2284, NOT A SUBSET OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊄)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2284",
          "type": "function"
        },
        "index": {
          "description": "not NOT SUBSET OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊄) ⊄",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8836-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8837; b = \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e (a &#8835; b)\n\u003c/p\u003e\u003cp\u003eU+2285, NOT A SUPERSET OF\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊅)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2285",
          "type": "function"
        },
        "index": {
          "description": "not NOT SUPERSET OF",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊅) ⊅",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8837-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8838;) = \u003ccode\u003e\u003ca\u003eisSubsetOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eU+2286, SUBSET OF OR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊆)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2286",
          "type": "function"
        },
        "index": {
          "description": "isSubsetOf SUBSET OF OR EQUAL TO",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊆) ⊆",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8838-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(&#8839;) = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (&#8838;)\n\u003c/p\u003e\u003cp\u003eU+2287, SUPERSET OF OR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊇)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2287",
          "type": "function"
        },
        "index": {
          "description": "flip SUPERSET OF OR EQUAL TO",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊇) ⊇",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8839-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8840; b = (a &#8802; b) &#8743; (a &#8836; b)\n\u003c/p\u003e\u003cp\u003eU+2288, NEITHER A SUBSET OF NOR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊈)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2288",
          "type": "function"
        },
        "index": {
          "description": "NEITHER SUBSET OF NOR EQUAL TO",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊈) ⊈",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8840-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea &#8841; b = (a &#8802; b) &#8743; (a &#8837; b)\n\u003c/p\u003e\u003cp\u003eU+2289, NEITHER A SUPERSET OF NOR EQUAL TO\n\u003c/p\u003e",
          "module": "Data.Set.Unicode",
          "name": "(⊉)",
          "package": "containers-unicode-symbols",
          "signature": "Set α -\u003e Set α -\u003e Bool",
          "source": "src/Data-Set-Unicode.html#%2289",
          "type": "function"
        },
        "index": {
          "description": "NEITHER SUPERSET OF NOR EQUAL TO",
          "hierarchy": "Data Set Unicode",
          "module": "Data.Set.Unicode",
          "name": "(⊉) ⊉",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "containers-unicode-symbols",
          "signature": "Set α-\u003eSet α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/containers-unicode-symbols/docs/Data-Set-Unicode.html#v:-8841-"
      }
    }
  ]
]