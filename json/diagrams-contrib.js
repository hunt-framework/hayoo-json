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
        "word": "diagrams-contrib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with color in HSV space.\n\u003c/p\u003e\u003cp\u003eRight now, the only utility is a function for blending colors in\n HSV space.  This has the effect of \"travelling around the color\n wheel\", which can be especially nice when one wants to blend\n smoothly from one color to another (blending in RGB space can tend\n to travel across some icky brown/grey colors).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Color.HSV",
          "name": "HSV",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-Color-HSV.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with color in HSV space Right now the only utility is function for blending colors in HSV space This has the effect of travelling around the color wheel which can be especially nice when one wants to blend smoothly from one color to another blending in RGB space can tend to travel across some icky brown grey colors",
          "hierarchy": "Diagrams Color HSV",
          "module": "Diagrams.Color.HSV",
          "name": "HSV",
          "package": "diagrams-contrib",
          "partial": "HSV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Color-HSV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlend two colors in HSV space---that is, linearly interpolate\n   between their hues, saturations, and values independently\n   (wrapping around appropriately in the case of hue).  In\n   particular, \u003ccode\u003ehsvBlend a c1 c2\u003c/code\u003e is like doing \u003ccode\u003e(a-1)*c1 + a*c2\u003c/code\u003e in\n   HSV space.  That is, a parameter of \u003ccode\u003e0\u003c/code\u003e results in only the first\n   color; \u003ccode\u003e1\u003c/code\u003e results in only the second color; and anything in\n   between results in a blend.\n\u003c/p\u003e",
          "module": "Diagrams.Color.HSV",
          "name": "hsvBlend",
          "package": "diagrams-contrib",
          "signature": "Scalar a -\u003e Colour a -\u003e Colour a -\u003e Colour a",
          "source": "src/Diagrams-Color-HSV.html#hsvBlend",
          "type": "function"
        },
        "index": {
          "description": "Blend two colors in HSV space---that is linearly interpolate between their hues saturations and values independently wrapping around appropriately in the case of hue In particular hsvBlend c1 c2 is like doing a-1 c1 c2 in HSV space That is parameter of results in only the first color results in only the second color and anything in between results in blend",
          "hierarchy": "Diagrams Color HSV",
          "module": "Diagrams.Color.HSV",
          "name": "hsvBlend",
          "normalized": "Scalar a-\u003eColour a-\u003eColour a-\u003eColour a",
          "package": "diagrams-contrib",
          "partial": "Blend",
          "signature": "Scalar a-\u003eColour a-\u003eColour a-\u003eColour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Color-HSV.html#v:hsvBlend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSource code for creating the diagrams logo.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_Example_Logo_diaLogo.svg#diagram=diaLogo&height=100\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Example.Logo",
          "name": "Logo",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-Example-Logo.html",
          "type": "module"
        },
        "index": {
          "description": "Source code for creating the diagrams logo",
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "Logo",
          "package": "diagrams-contrib",
          "partial": "Logo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "a1",
          "package": "diagrams-contrib",
          "signature": "b",
          "source": "src/Diagrams-Example-Logo.html#a1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "a1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:a1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "a2",
          "package": "diagrams-contrib",
          "signature": "QDiagram b R2 m",
          "source": "src/Diagrams-Example-Logo.html#a2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "a2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:a2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "aTree",
          "package": "diagrams-contrib",
          "signature": "BTree ()",
          "source": "src/Diagrams-Example-Logo.html#aTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "aTree",
          "normalized": "BTree()",
          "package": "diagrams-contrib",
          "partial": "Tree",
          "signature": "BTree()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:aTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "d",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-Example-Logo.html#d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "d",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "dot",
          "package": "diagrams-contrib",
          "signature": "Colour Double -\u003e b",
          "source": "src/Diagrams-Example-Logo.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "dot",
          "normalized": "Colour Double-\u003ea",
          "package": "diagrams-contrib",
          "signature": "Colour Double-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "g",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-Example-Logo.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "g",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "gbkg",
          "package": "diagrams-contrib",
          "signature": "QDiagram b R2 m",
          "source": "src/Diagrams-Example-Logo.html#gbkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "gbkg",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:gbkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "grid",
          "package": "diagrams-contrib",
          "signature": "a",
          "source": "src/Diagrams-Example-Logo.html#grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "grid",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "i",
          "package": "diagrams-contrib",
          "signature": "QDiagram b R2 m",
          "source": "src/Diagrams-Example-Logo.html#i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "i",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "ico_d",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-Example-Logo.html#ico_d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "ico_d",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:ico_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "logo",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-Example-Logo.html#logo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "logo",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:logo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "m",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-Example-Logo.html#m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "m",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "ps",
          "package": "diagrams-contrib",
          "signature": "[P2]",
          "source": "src/Diagrams-Example-Logo.html#ps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "ps",
          "normalized": "[P]",
          "package": "diagrams-contrib",
          "signature": "[P]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "r",
          "package": "diagrams-contrib",
          "signature": "QDiagram b R2 Any",
          "source": "src/Diagrams-Example-Logo.html#r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "r",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "s",
          "package": "diagrams-contrib",
          "signature": "b",
          "source": "src/Diagrams-Example-Logo.html#s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "s",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Example.Logo",
          "name": "sierpinski",
          "package": "diagrams-contrib",
          "signature": "a -\u003e a1",
          "source": "src/Diagrams-Example-Logo.html#sierpinski",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Example Logo",
          "module": "Diagrams.Example.Logo",
          "name": "sierpinski",
          "normalized": "a-\u003ea",
          "package": "diagrams-contrib",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:sierpinski"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn algorithm for filling space in a fashion akin to word-wrapping.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Layout.Wrap",
          "name": "Wrap",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-Layout-Wrap.html",
          "type": "module"
        },
        "index": {
          "description": "An algorithm for filling space in fashion akin to word-wrapping",
          "hierarchy": "Diagrams Layout Wrap",
          "module": "Diagrams.Layout.Wrap",
          "name": "Wrap",
          "package": "diagrams-contrib",
          "partial": "Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewrapDiagram\u003c/code\u003e post-processes the results of \u003ccode\u003ewrapOutside\u003c/code\u003e /\n   \u003ccode\u003ewrapInside\u003c/code\u003e into a Diagram of the result.  This only works when\n   applying them to a list of diagrams.\n\u003c/p\u003e",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapDiagram",
          "package": "diagrams-contrib",
          "signature": "([(v, Diagram b v)], [Diagram b v]) -\u003e Diagram b v",
          "source": "src/Diagrams-Layout-Wrap.html#wrapDiagram",
          "type": "function"
        },
        "index": {
          "description": "wrapDiagram post-processes the results of wrapOutside wrapInside into Diagram of the result This only works when applying them to list of diagrams",
          "hierarchy": "Diagrams Layout Wrap",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapDiagram",
          "normalized": "([(a,Diagram b a)],[Diagram b a])-\u003eDiagram b a",
          "package": "diagrams-contrib",
          "partial": "Diagram",
          "signature": "([(v,Diagram b v)],[Diagram b v])-\u003eDiagram b v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efillInside greedily wraps content to fill a space defined by a\n   predicate.  It is passed a list of vectors which express the\n   order of dimensions to be filled.  In other words, wrapping RTL\n   text is done by passing in [unitX, unitY], to first exhaust\n   space horizontally, and then vertically.\n\u003c/p\u003e\u003cp\u003eNote that this function does not guarantee that there are not\n   points inside each positioned item for which the predicate is\n   False.  Instead, only the corners of the bounds, along each axii,\n   are used.\n\u003c/p\u003e",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapInside",
          "package": "diagrams-contrib",
          "signature": "(Point v -\u003e Bool) -\u003e [v] -\u003e Point v -\u003e [a] -\u003e ([(v, a)], [a])",
          "source": "src/Diagrams-Layout-Wrap.html#wrapInside",
          "type": "function"
        },
        "index": {
          "description": "fillInside greedily wraps content to fill space defined by predicate It is passed list of vectors which express the order of dimensions to be filled In other words wrapping RTL text is done by passing in unitX unitY to first exhaust space horizontally and then vertically Note that this function does not guarantee that there are not points inside each positioned item for which the predicate is False Instead only the corners of the bounds along each axii are used",
          "hierarchy": "Diagrams Layout Wrap",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapInside",
          "normalized": "(Point a-\u003eBool)-\u003e[a]-\u003ePoint a-\u003e[b]-\u003e([(a,b)],[b])",
          "package": "diagrams-contrib",
          "partial": "Inside",
          "signature": "(Point v-\u003eBool)-\u003e[v]-\u003ePoint v-\u003e[a]-\u003e([(v,a)],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewrapOutside\u003c/code\u003e is the same as \u003ccode\u003ewrapInside\u003c/code\u003e, but with an inverted\n   predicate.\n\u003c/p\u003e",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapOutside",
          "package": "diagrams-contrib",
          "signature": "(Point v -\u003e Bool) -\u003e [v] -\u003e Point v -\u003e [a] -\u003e ([(v, a)], [a])",
          "source": "src/Diagrams-Layout-Wrap.html#wrapOutside",
          "type": "function"
        },
        "index": {
          "description": "wrapOutside is the same as wrapInside but with an inverted predicate",
          "hierarchy": "Diagrams Layout Wrap",
          "module": "Diagrams.Layout.Wrap",
          "name": "wrapOutside",
          "normalized": "(Point a-\u003eBool)-\u003e[a]-\u003ePoint a-\u003e[b]-\u003e([(a,b)],[b])",
          "package": "diagrams-contrib",
          "partial": "Outside",
          "signature": "(Point v-\u003eBool)-\u003e[v]-\u003ePoint v-\u003e[a]-\u003e([(v,a)],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utilities for using \u003ca\u003eControl.Lens\u003c/a\u003e with diagrams,\n including orphan instances for the \u003ccode\u003e\u003ca\u003eWrapped\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Lens",
          "name": "Lens",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utilities for using Control.Lens with diagrams including orphan instances for the Wrapped class",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "Lens",
          "package": "diagrams-contrib",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "Wrapped'",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-Lens.html#Wrapped%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "Wrapped'",
          "package": "diagrams-contrib",
          "partial": "Wrapped'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#t:Wrapped-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_Loc",
          "package": "diagrams-contrib",
          "signature": "Iso (Located a) (Located a') (Point (V a), a) (Point (V a'), a')",
          "source": "src/Diagrams-Lens.html#_Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_Loc",
          "normalized": "Iso(Located a)(Located b)(Point(V a),a)(Point(V b),b)",
          "package": "diagrams-contrib",
          "partial": "Loc",
          "signature": "Iso(Located a)(Located a')(Point(V a),a)(Point(V a'),a')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_P",
          "package": "diagrams-contrib",
          "signature": "Iso s t (Point s) (Point t)",
          "source": "src/Diagrams-Lens.html#_P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_P",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e for an alignment vector, where modification of the\n   vector moves the origin appropriately.  No vector is traversed when the\n   envelope is empty.\n\u003c/p\u003e\u003cp\u003eThe interface mimics \u003ca\u003eDiagrams.Align.alignBy\u003c/a\u003e in that the \u003ccode\u003ed\u003c/code\u003e parameter\n   specifies an interpolation between two extremes of the envelope. \u003ccode\u003ed = 1\u003c/code\u003e\n   is on the envelope along the vector, whereas \u003ccode\u003ed = -1\u003c/code\u003e is on the envelope,\n   away from the vector.\n\u003c/p\u003e\u003cp\u003eIf you need a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e instead of a vector, then compose with \u003ccode\u003e\u003ca\u003e_P\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_alignedVMove",
          "package": "diagrams-contrib",
          "signature": "V a -\u003e Scalar (V a) -\u003e Traversal' a (V a)",
          "source": "src/Diagrams-Lens.html#_alignedVMove",
          "type": "function"
        },
        "index": {
          "description": "singleton Traversal for an alignment vector where modification of the vector moves the origin appropriately No vector is traversed when the envelope is empty The interface mimics Diagrams.Align.alignBy in that the parameter specifies an interpolation between two extremes of the envelope is on the envelope along the vector whereas is on the envelope away from the vector If you need Point instead of vector then compose with",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_alignedVMove",
          "normalized": "V a-\u003eScalar(V a)-\u003eTraversal' a(V a)",
          "package": "diagrams-contrib",
          "partial": "VMove",
          "signature": "V a-\u003eScalar(V a)-\u003eTraversal' a(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_alignedVMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_attr",
          "package": "diagrams-contrib",
          "signature": "Lens' (Style v) (Maybe a)",
          "source": "src/Diagrams-Lens.html#_attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_attr",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrism that constructs cubic bezier segments.  Can also destruct them, if\n   segment is a \u003ccode\u003e\u003ca\u003eCubic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_bezier3",
          "package": "diagrams-contrib",
          "signature": "Prism' (Segment Closed v) (v, v, v)",
          "source": "src/Diagrams-Lens.html#_bezier3",
          "type": "function"
        },
        "index": {
          "description": "Prism that constructs cubic bezier segments Can also destruct them if segment is Cubic",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_bezier3",
          "normalized": "Prism'(Segment Closed a)(a,a,a)",
          "package": "diagrams-contrib",
          "signature": "Prism'(Segment Closed v)(v,v,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_bezier3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens that gets the extents of the box.  In order to change the extents,\n   this modifies the upper corner.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_boxExtents",
          "package": "diagrams-contrib",
          "signature": "Lens' (BoundingBox v) v",
          "source": "src/Diagrams-Lens.html#_boxExtents",
          "type": "function"
        },
        "index": {
          "description": "lens that gets the extents of the box In order to change the extents this modifies the upper corner",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_boxExtents",
          "package": "diagrams-contrib",
          "partial": "Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_boxExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA traversal that either has 0 (empty box) or 2 points.  These points are\n   the lower and upper corners, respectively.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_corners",
          "package": "diagrams-contrib",
          "signature": "Traversal (BoundingBox v) (BoundingBox v') (Point v) (Point v')",
          "source": "src/Diagrams-Lens.html#_corners",
          "type": "function"
        },
        "index": {
          "description": "traversal that either has empty box or points These points are the lower and upper corners respectively",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_corners",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e for an envelope vector, where modification of the\n   vector moves the origin appropriately.  No vector is traversed when the\n   envelope is empty.\n\u003c/p\u003e\u003cp\u003eThis is the same as \u003ccode\u003e\u003ca\u003e_alignedVMove\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e1\u003c/code\u003e as the interpolation\n   parameter.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_envelopeVMove",
          "package": "diagrams-contrib",
          "signature": "V a -\u003e Traversal' a (V a)",
          "source": "src/Diagrams-Lens.html#_envelopeVMove",
          "type": "function"
        },
        "index": {
          "description": "singleton Traversal for an envelope vector where modification of the vector moves the origin appropriately No vector is traversed when the envelope is empty This is the same as alignedVMove with as the interpolation parameter",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_envelopeVMove",
          "normalized": "V a-\u003eTraversal' a(V a)",
          "package": "diagrams-contrib",
          "partial": "VMove",
          "signature": "V a-\u003eTraversal' a(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_envelopeVMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_lineOffsets",
          "package": "diagrams-contrib",
          "signature": "Iso (Trail' Line v) (Trail' Line v') [v] [v']",
          "source": "src/Diagrams-Lens.html#_lineOffsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_lineOffsets",
          "normalized": "Iso(Trail' Line a)(Trail' Line b)[a][b]",
          "package": "diagrams-contrib",
          "partial": "Offsets",
          "signature": "Iso(Trail' Line v)(Trail' Line v')[v][v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineOffsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_lineSegments",
          "package": "diagrams-contrib",
          "signature": "Iso (Trail' Line v) (Trail' Line v') [Segment Closed v] [Segment Closed v']",
          "source": "src/Diagrams-Lens.html#_lineSegments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_lineSegments",
          "normalized": "Iso(Trail' Line a)(Trail' Line b)[Segment Closed a][Segment Closed b]",
          "package": "diagrams-contrib",
          "partial": "Segments",
          "signature": "Iso(Trail' Line v)(Trail' Line v')[Segment Closed v][Segment Closed v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_lineVertices",
          "package": "diagrams-contrib",
          "signature": "Iso (Located (Trail' Line v)) (Located (Trail' Line v')) [Point v] [Point v']",
          "source": "src/Diagrams-Lens.html#_lineVertices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_lineVertices",
          "normalized": "Iso(Located(Trail' Line a))(Located(Trail' Line b))[Point a][Point b]",
          "package": "diagrams-contrib",
          "partial": "Vertices",
          "signature": "Iso(Located(Trail' Line v))(Located(Trail' Line v'))[Point v][Point v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets or set the \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eSubdiagram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_location",
          "package": "diagrams-contrib",
          "signature": "Lens' (Subdiagram b v m) (Point v)",
          "source": "src/Diagrams-Lens.html#_location",
          "type": "function"
        },
        "index": {
          "description": "Gets or set the location of Subdiagram",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_location",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_mkAttr",
          "package": "diagrams-contrib",
          "signature": "Prism' (Attribute v) a",
          "source": "src/Diagrams-Lens.html#_mkAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_mkAttr",
          "package": "diagrams-contrib",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_mkFixedSeg",
          "package": "diagrams-contrib",
          "signature": "Iso (Located (Segment Closed v)) (Located (Segment Closed v')) (FixedSegment v) (FixedSegment v')",
          "source": "src/Diagrams-Lens.html#_mkFixedSeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_mkFixedSeg",
          "package": "diagrams-contrib",
          "partial": "Fixed Seg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkFixedSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_mkSubdiagram",
          "package": "diagrams-contrib",
          "signature": "Iso' (QDiagram b v m) (Subdiagram b v m)",
          "source": "src/Diagrams-Lens.html#_mkSubdiagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_mkSubdiagram",
          "package": "diagrams-contrib",
          "partial": "Subdiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkSubdiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Lens",
          "name": "_mkTAttr",
          "package": "diagrams-contrib",
          "signature": "Prism' (Attribute v) a",
          "source": "src/Diagrams-Lens.html#_mkTAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_mkTAttr",
          "package": "diagrams-contrib",
          "partial": "TAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkTAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrism that constructs linear segments.  Can also destruct them, if the\n   segment is Linear.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_straight",
          "package": "diagrams-contrib",
          "signature": "Prism' (Segment Closed v) v",
          "source": "src/Diagrams-Lens.html#_straight",
          "type": "function"
        },
        "index": {
          "description": "Prism that constructs linear segments Can also destruct them if the segment is Linear",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_straight",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_straight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoTurn\u003c/a\u003e\u003c/code\u003e is an isomorphism from angles to \u003ccode\u003e\u003ca\u003eTurn\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Diagrams.Lens",
          "name": "_toTurn",
          "package": "diagrams-contrib",
          "signature": "Iso a a' Turn Turn",
          "source": "src/Diagrams-Lens.html#_toTurn",
          "type": "function"
        },
        "index": {
          "description": "toTurn is an isomorphism from angles to Turn",
          "hierarchy": "Diagrams Lens",
          "module": "Diagrams.Lens",
          "name": "_toTurn",
          "package": "diagrams-contrib",
          "partial": "Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_toTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of Apollonian gaskets.  Any three mutually tangent\n circles uniquely determine exactly two others which are mutually\n tangent to all three.  This process can be repeated, generating a\n fractal circle packing.\n\u003c/p\u003e\u003cp\u003eSee J. Lagarias, C. Mallows, and A. Wilks, \"Beyond the Descartes\n circle theorem\", \u003cem\u003eAmer. Math. Monthly\u003c/em\u003e 109 (2002), 338--361.\n \u003ca\u003ehttp://arxiv.org/abs/math/0101066\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA few examples:\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian1 = apollonianGasket 0.01 2 2 2\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian1.svg#diagram=apollonian1&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian2 = apollonianGasket 0.01 2 3 3\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian2.svg#diagram=apollonian2&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian3 = apollonianGasket 0.01 2 4 7\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian3.svg#diagram=apollonian3&width=400\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Apollonian",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Apollonian.html",
          "type": "module"
        },
        "index": {
          "description": "Generation of Apollonian gaskets Any three mutually tangent circles uniquely determine exactly two others which are mutually tangent to all three This process can be repeated generating fractal circle packing See Lagarias Mallows and Wilks Beyond the Descartes circle theorem Amer Math Monthly http arxiv.org abs math few examples import Diagrams.TwoD.Apollonian apollonian1 apollonianGasket import Diagrams.TwoD.Apollonian apollonian2 apollonianGasket import Diagrams.TwoD.Apollonian apollonian3 apollonianGasket",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Apollonian",
          "package": "diagrams-contrib",
          "partial": "Apollonian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation for circles that lets us quickly compute an\n   Apollonian gasket.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Circle",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Apollonian.html#Circle",
          "type": "data"
        },
        "index": {
          "description": "Representation for circles that lets us quickly compute an Apollonian gasket",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Circle",
          "package": "diagrams-contrib",
          "partial": "Circle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#t:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Circle",
          "package": "diagrams-contrib",
          "signature": "Circle",
          "source": "src/Diagrams-TwoD-Apollonian.html#Circle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "Circle",
          "package": "diagrams-contrib",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a threshold radius and a list of \u003cem\u003efour\u003c/em\u003e mutually tangent\n   circles, generate the Apollonian gasket containing those circles.\n   Stop the recursion when encountering a circle with an (unsigned)\n   radius smaller than the threshold.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "apollonian",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e [Circle] -\u003e [Circle]",
          "source": "src/Diagrams-TwoD-Apollonian.html#apollonian",
          "type": "function"
        },
        "index": {
          "description": "Given threshold radius and list of four mutually tangent circles generate the Apollonian gasket containing those circles Stop the recursion when encountering circle with an unsigned radius smaller than the threshold",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "apollonian",
          "normalized": "Double-\u003e[Circle]-\u003e[Circle]",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e[Circle]-\u003e[Circle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:apollonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an Apollonian gasket: the first argument is the threshold;\n   the recursion will stop upon reaching circles with radii less than\n   it. The next three arguments are bends of three circles.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "apollonianGasket",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Apollonian.html#apollonianGasket",
          "type": "function"
        },
        "index": {
          "description": "Draw an Apollonian gasket the first argument is the threshold the recursion will stop upon reaching circles with radii less than it The next three arguments are bends of three circles",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "apollonianGasket",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Gasket",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:apollonianGasket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bend is the reciprocal of signed\n   radius: a negative radius means the\n   outside and inside of the circle are\n   switched.  The bends of any four mutually\n   tangent circles satisfy Descartes'\n   Theorem.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "bend",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Apollonian.html#Circle",
          "type": "function"
        },
        "index": {
          "description": "The bend is the reciprocal of signed radius negative radius means the outside and inside of the circle are switched The bends of any four mutually tangent circles satisfy Descartes Theorem",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "bend",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:bend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eProduct\u003c/em\u003e of bend and center represented\n   as a complex number.  Amazingly, these\n   products also satisfy the equation of\n   Descartes' Theorem.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "cb",
          "package": "diagrams-contrib",
          "signature": "Complex Double",
          "source": "src/Diagrams-TwoD-Apollonian.html#Circle",
          "type": "function"
        },
        "index": {
          "description": "Product of bend and center represented as complex number Amazingly these products also satisfy the equation of Descartes Theorem",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "cb",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:cb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the center of a circle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "center",
          "package": "diagrams-contrib",
          "signature": "Circle -\u003e P2",
          "source": "src/Diagrams-TwoD-Apollonian.html#center",
          "type": "function"
        },
        "index": {
          "description": "Get the center of circle",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "center",
          "normalized": "Circle-\u003eP",
          "package": "diagrams-contrib",
          "signature": "Circle-\u003eP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescartes' Theorem states that if \u003ccode\u003eb1\u003c/code\u003e, \u003ccode\u003eb2\u003c/code\u003e, \u003ccode\u003eb3\u003c/code\u003e and \u003ccode\u003eb4\u003c/code\u003e are\n   the bends of four mutually tangent circles, then\n\u003c/p\u003e\u003cpre\u003e\n     b1^2 + b2^2 + b3^2 + b4^2 = 1/2 * (b1 + b2 + b3 + b4)^2.\n\u003c/pre\u003e\u003cp\u003eSurprisingly, if we replace each of the \u003ccode\u003ebi\u003c/code\u003e with the \u003cem\u003eproduct\u003c/em\u003e\n   of \u003ccode\u003ebi\u003c/code\u003e and the center of the corresponding circle (represented\n   as a complex number), the equation continues to hold! (See the\n   paper referenced at the top of the module.)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edescartes [b1,b2,b3]\u003c/code\u003e solves for \u003ccode\u003eb4\u003c/code\u003e, returning both solutions.\n   Notably, \u003ccode\u003edescartes\u003c/code\u003e works for any instance of \u003ccode\u003eFloating\u003c/code\u003e, which\n   includes both \u003ccode\u003eDouble\u003c/code\u003e (for bends), \u003ccode\u003eComplex Double\u003c/code\u003e (for\n   bend/center product), and \u003ccode\u003eCircle\u003c/code\u003e (for both at once).\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "descartes",
          "package": "diagrams-contrib",
          "signature": "[a] -\u003e [a]",
          "source": "src/Diagrams-TwoD-Apollonian.html#descartes",
          "type": "function"
        },
        "index": {
          "description": "Descartes Theorem states that if b1 b2 b3 and b4 are the bends of four mutually tangent circles then b1 b2 b3 b4 b1 b2 b3 b4 Surprisingly if we replace each of the bi with the product of bi and the center of the corresponding circle represented as complex number the equation continues to hold See the paper referenced at the top of the module descartes b1 b2 b3 solves for b4 returning both solutions Notably descartes works for any instance of Floating which includes both Double for bends Complex Double for bend center product and Circle for both at once",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "descartes",
          "normalized": "[a]-\u003e[a]",
          "package": "diagrams-contrib",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:descartes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a circle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "drawCircle",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Circle -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Apollonian.html#drawCircle",
          "type": "function"
        },
        "index": {
          "description": "Draw circle",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "drawCircle",
          "normalized": "Double-\u003eCircle-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Circle",
          "signature": "Double-\u003eCircle-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:drawCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a generated gasket, using a line width 0.003 times the\n   radius of the largest circle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "drawGasket",
          "package": "diagrams-contrib",
          "signature": "[Circle] -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Apollonian.html#drawGasket",
          "type": "function"
        },
        "index": {
          "description": "Draw generated gasket using line width times the radius of the largest circle",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "drawGasket",
          "normalized": "[Circle]-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Gasket",
          "signature": "[Circle]-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:drawGasket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an initial configuration of four mutually tangent\n   circles, given just the signed bends of three of them.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "initialConfig",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Double -\u003e Double -\u003e [Circle]",
          "source": "src/Diagrams-TwoD-Apollonian.html#initialConfig",
          "type": "function"
        },
        "index": {
          "description": "Generate an initial configuration of four mutually tangent circles given just the signed bends of three of them",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "initialConfig",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003e[Circle]",
          "package": "diagrams-contrib",
          "partial": "Config",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003e[Circle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:initialConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003eCircle\u003c/code\u003e given a signed radius and a location for its center.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "mkCircle",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e P2-\u003e Circle",
          "type": "function"
        },
        "index": {
          "description": "Create Circle given signed radius and location for its center",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "mkCircle",
          "normalized": "Double-\u003eP-\u003eCircle",
          "package": "diagrams-contrib",
          "partial": "Circle",
          "signature": "Double-\u003eP-\u003eCircle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:mkCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we have \u003cem\u003efour\u003c/em\u003e mutually tangent circles we can choose one of\n   them to replace; the remaining three determine exactly one other\n   circle which is mutually tangent.  However, in this situation\n   there is no need to apply \u003ccode\u003e\u003ca\u003edescartes\u003c/a\u003e\u003c/code\u003e again, since the two\n   solutions \u003ccode\u003eb4\u003c/code\u003e and \u003ccode\u003eb4'\u003c/code\u003e satisfy\n\u003c/p\u003e\u003cpre\u003e\n     b4 + b4' = 2 * (b1 + b2 + b3)\n\u003c/pre\u003e\u003cp\u003eHence, to replace \u003ccode\u003eb4\u003c/code\u003e with its dual, we need only sum the other\n   three, multiply by two, and subtract \u003ccode\u003eb4\u003c/code\u003e.  Again, this works for\n   bends as well as bend/center products.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "other",
          "package": "diagrams-contrib",
          "signature": "[a] -\u003e a -\u003e a",
          "source": "src/Diagrams-TwoD-Apollonian.html#other",
          "type": "function"
        },
        "index": {
          "description": "If we have four mutually tangent circles we can choose one of them to replace the remaining three determine exactly one other circle which is mutually tangent However in this situation there is no need to apply descartes again since the two solutions b4 and b4 satisfy b4 b4 b1 b2 b3 Hence to replace b4 with its dual we need only sum the other three multiply by two and subtract b4 Again this works for bends as well as bend center products",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "other",
          "normalized": "[a]-\u003ea-\u003ea",
          "package": "diagrams-contrib",
          "signature": "[a]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (unsigned) radius of a circle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "radius",
          "package": "diagrams-contrib",
          "signature": "Circle -\u003e Double",
          "source": "src/Diagrams-TwoD-Apollonian.html#radius",
          "type": "function"
        },
        "index": {
          "description": "Get the unsigned radius of circle",
          "hierarchy": "Diagrams TwoD Apollonian",
          "module": "Diagrams.TwoD.Apollonian",
          "name": "radius",
          "normalized": "Circle-\u003eDouble",
          "package": "diagrams-contrib",
          "signature": "Circle-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFactorization diagrams, as seen at\n \u003ca\u003ehttp://mathlesstraveled.com/2012/10/05/factorization-diagrams/\u003c/a\u003e\n and\n \u003ca\u003ehttp://mathlesstraveled.com/2012/11/05/more-factorization-diagrams/\u003c/a\u003e\n and on the cover of Hacker Monthly\n (\u003ca\u003ehttp://hackermonthly.com/issue-31.html\u003c/a\u003e): visually represent the\n prime factorization of n by drawing n dots recursively grouped\n according to the factors.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_grid100Big.svg#diagram=grid100Big&width=600\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "Factorization",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Factorization.html",
          "type": "module"
        },
        "index": {
          "description": "Factorization diagrams as seen at http mathlesstraveled.com factorization-diagrams and http mathlesstraveled.com more-factorization-diagrams and on the cover of Hacker Monthly http hackermonthly.com issue-31.html visually represent the prime factorization of by drawing dots recursively grouped according to the factors",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "Factorization",
          "package": "diagrams-contrib",
          "partial": "Factorization",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw vertical bars of color inside a polygon which represent the\n   decimal expansion of \u003ccode\u003ep\u003c/code\u003e, using the provided list of colors to\n   represent the digits 0-9.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n colorBarsEx = colorBars defaultColors 3526 (square 1)\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_colorBarsEx.svg#diagram=colorBarsEx&width=200\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "colorBars",
          "package": "diagrams-contrib",
          "signature": "[Colour Double] -\u003e Integer -\u003e Path R2 -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#colorBars",
          "type": "function"
        },
        "index": {
          "description": "Draw vertical bars of color inside polygon which represent the decimal expansion of using the provided list of colors to represent the digits import Diagrams.TwoD.Factorization colorBarsEx colorBars defaultColors square",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "colorBars",
          "normalized": "[Colour Double]-\u003eInteger-\u003ePath R-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Bars",
          "signature": "[Colour Double]-\u003eInteger-\u003ePath R-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:colorBars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default set of digit colors, based very loosely on the color\n   code for resistors (\u003ca\u003ehttp://en.wikipedia.org/wiki/Electronic_color_code\u003c/a\u003e),\n   lightened up a bit by blending with white.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_showDefaultColors.svg#diagram=showDefaultColors&height=50\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "defaultColors",
          "package": "diagrams-contrib",
          "signature": "[Colour Double]",
          "source": "src/Diagrams-TwoD-Factorization.html#defaultColors",
          "type": "function"
        },
        "index": {
          "description": "default set of digit colors based very loosely on the color code for resistors http en.wikipedia.org wiki Electronic color code lightened up bit by blending with white",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "defaultColors",
          "normalized": "[Colour Double]",
          "package": "diagrams-contrib",
          "partial": "Colors",
          "signature": "[Colour Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:defaultColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a diagram inside a square with the given side length,\n   centering and scaling it to fit with a bit of padding.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n ensquareEx = ensquare 1 (circle 25) ||| ensquare 1 (factorDiagram 30)\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_ensquareEx.svg#diagram=ensquareEx&width=200\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "ensquare",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Diagram b R2 -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#ensquare",
          "type": "function"
        },
        "index": {
          "description": "Place diagram inside square with the given side length centering and scaling it to fit with bit of padding import Diagrams.TwoD.Factorization ensquareEx ensquare circle ensquare factorDiagram",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "ensquare",
          "normalized": "Double-\u003eDiagram a R-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eDiagram b R-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:ensquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a default factorization diagram for the given integer, by\n   factoring it and calling \u003ccode\u003e\u003ca\u003efactorDiagram'\u003c/a\u003e\u003c/code\u003e on its prime\n   factorization (with the factors ordered from smallest to\n   biggest).\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n factorDiagramEx = factorDiagram 700\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_factorDiagramEx.svg#diagram=factorDiagramEx&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "factorDiagram",
          "package": "diagrams-contrib",
          "signature": "Integer -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#factorDiagram",
          "type": "function"
        },
        "index": {
          "description": "Create default factorization diagram for the given integer by factoring it and calling factorDiagram on its prime factorization with the factors ordered from smallest to biggest import Diagrams.TwoD.Factorization factorDiagramEx factorDiagram",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "factorDiagram",
          "normalized": "Integer-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Diagram",
          "signature": "Integer-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:factorDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a centered factorization diagram from the given list of\n   factors (intended to be primes, but again, any positive integers\n   will do; note how the below example uses 6), by recursively\n   folding according to \u003ccode\u003e\u003ca\u003eprimeLayout\u003c/a\u003e\u003c/code\u003e, with the \u003ccode\u003e\u003ca\u003edefaultColors\u003c/a\u003e\u003c/code\u003e and\n   a base case of a black circle.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n factorDiagram'Ex = factorDiagram' [2,5,6]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_factorDiagram'Ex.svg#diagram=factorDiagram'Ex&height=200\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "factorDiagram'",
          "package": "diagrams-contrib",
          "signature": "[Integer] -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#factorDiagram%27",
          "type": "function"
        },
        "index": {
          "description": "Create centered factorization diagram from the given list of factors intended to be primes but again any positive integers will do note how the below example uses by recursively folding according to primeLayout with the defaultColors and base case of black circle import Diagrams.TwoD.Factorization factorDiagram Ex factorDiagram",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "factorDiagram'",
          "normalized": "[Integer]-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Diagram'",
          "signature": "[Integer]-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:factorDiagram-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efdGrid n\u003c/code\u003e creates a grid of factorization diagrams, given a list\n   of lists of integers: the inner lists represent L-R rows, which\n   are laid out from top to bottom.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n fdGridEx = fdGrid [[7,6,5],[4,19,200],[1,10,50]]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_fdGridEx.svg#diagram=fdGridEx&width=200\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdGrid",
          "package": "diagrams-contrib",
          "signature": "[[Integer]] -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#fdGrid",
          "type": "function"
        },
        "index": {
          "description": "fdGrid creates grid of factorization diagrams given list of lists of integers the inner lists represent L-R rows which are laid out from top to bottom import Diagrams.TwoD.Factorization fdGridEx fdGrid",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdGrid",
          "normalized": "[[Integer]]-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Grid",
          "signature": "[[Integer]]-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efdGridList n\u003c/code\u003e creates a grid containing the factorization\n   diagrams of all the numbers from \u003ccode\u003e1\u003c/code\u003e to \u003ccode\u003en^2\u003c/code\u003e, ordered left to\n   right, top to bottom (like the grid seen on the cover of Hacker\n   Monthly, \u003ca\u003ehttp://hackermonthly.com/issue-31.html\u003c/a\u003e).\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n grid100 = fdGridList 10\n grid100Big = grid100\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_grid100.svg#diagram=grid100&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdGridList",
          "package": "diagrams-contrib",
          "signature": "Integer -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#fdGridList",
          "type": "function"
        },
        "index": {
          "description": "fdGridList creates grid containing the factorization diagrams of all the numbers from to ordered left to right top to bottom like the grid seen on the cover of Hacker Monthly http hackermonthly.com issue-31.html import Diagrams.TwoD.Factorization grid100 fdGridList grid100Big grid100",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdGridList",
          "normalized": "Integer-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Grid List",
          "signature": "Integer-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdGridList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efdTable n\u003c/code\u003e creates a \"multiplication table\" of factorization\n   diagrams, with the diagrams for \u003ccode\u003e1\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e along both the top row\n   and left column, and the diagram for \u003ccode\u003em*n\u003c/code\u003e in row \u003ccode\u003em\u003c/code\u003e and column\n   \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n fdMultTableEx = fdMultTable 13\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_fdMultTableEx.svg#diagram=fdMultTableEx&width=600\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdMultTable",
          "package": "diagrams-contrib",
          "signature": "Integer -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#fdMultTable",
          "type": "function"
        },
        "index": {
          "description": "fdTable creates multiplication table of factorization diagrams with the diagrams for to along both the top row and left column and the diagram for in row and column import Diagrams.TwoD.Factorization fdMultTableEx fdMultTable",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "fdMultTable",
          "normalized": "Integer-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Mult Table",
          "signature": "Integer-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdMultTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprimeLayout\u003c/code\u003e takes a positive integer p (the idea is for it to\n   be prime, though it doesn't really matter) and a diagram, and lays\n   out p rotated copies of the diagram in a circular pattern.\n\u003c/p\u003e\u003cp\u003eThere is a special case for \u003ccode\u003ep = 2\u003c/code\u003e: if the given diagram is taller\n   than it is wide, then the two copies will be placed beside each\n   other; if wider then tall, they will be placed one above the\n   other.\n\u003c/p\u003e\u003cp\u003eThe regular \u003ccode\u003ep\u003c/code\u003e-gon connecting the centers of the laid-out\n   diagrams is also filled in with vertical bars of color\n   representing the number \u003ccode\u003ep\u003c/code\u003e.  In particular, there is one color\n   for each decimal digit (the provided list should have length 10\n   and represents the digits 0-9), and the colors, read left to\n   right, give the decimal expansion of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n plExample\n   = pad 1.1 . centerXY\n   . hcat' (with & sep .~ 0.5)\n   . map (sized (Width 1))\n   $ [ primeLayout defaultColors 5 (circle 1 # fc black)\n     , primeLayout defaultColors 103 (square 1 # fc green # lw 0)\n     , primeLayout (repeat white) 13 (circle 1 # lc orange)\n     ]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_plExample.svg#diagram=plExample&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Factorization",
          "name": "primeLayout",
          "package": "diagrams-contrib",
          "signature": "[Colour Double] -\u003e Integer -\u003e Diagram b R2 -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Factorization.html#primeLayout",
          "type": "function"
        },
        "index": {
          "description": "primeLayout takes positive integer the idea is for it to be prime though it doesn really matter and diagram and lays out rotated copies of the diagram in circular pattern There is special case for if the given diagram is taller than it is wide then the two copies will be placed beside each other if wider then tall they will be placed one above the other The regular gon connecting the centers of the laid-out diagrams is also filled in with vertical bars of color representing the number In particular there is one color for each decimal digit the provided list should have length and represents the digits and the colors read left to right give the decimal expansion of import Diagrams.TwoD.Factorization plExample pad centerXY hcat with sep map sized Width primeLayout defaultColors circle fc black primeLayout defaultColors square fc green lw primeLayout repeat white circle lc orange",
          "hierarchy": "Diagrams TwoD Factorization",
          "module": "Diagrams.TwoD.Factorization",
          "name": "primeLayout",
          "normalized": "[Colour Double]-\u003eInteger-\u003eDiagram a R-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Layout",
          "signature": "[Colour Double]-\u003eInteger-\u003eDiagram b R-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:primeLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA method for laying out diagrams using a circle packing algorithm. For\n details on the algorithm, see \u003ca\u003eOptimisation.CirclePacking\u003c/a\u003e in the module\n circle-packing.\n\u003c/p\u003e\u003cp\u003eHere is an example:\n\u003c/p\u003e\u003cpre\u003e import Optimisation.CirclePacking\n import Diagrams.TwoD.Vector       (e)\n\n colorize = zipWith fc $\n     cycle [red,blue,yellow,magenta,cyan,bisque,firebrick,indigo]\n\n objects = colorize $\n     [ circle r  | r \u003c- [0.1,0.2..1.6] ] ++\n     [ hexagon r | r \u003c- [0.1,0.2..0.7] ] ++\n     [ decagon r | r \u003c- [0.1,0.2..0.7] ]\n\n -- Just a approximation, diagram objects do not have an exact radius\n radiusApproximation o = maximum [ radius (e (alpha :: Turn)) o | alpha \u003c- [0,0.1..1.0]]\n\n circlePackingExample =\n     position $ map (\\(o,(x,y)) -\u003e (p2 (x,y),o)) $\n     packCircles radiusApproximation objects\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_CirclePacking_circlePackingExample.svg#diagram=circlePackingExample&width=400\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "CirclePacking",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html",
          "type": "module"
        },
        "index": {
          "description": "method for laying out diagrams using circle packing algorithm For details on the algorithm see Optimisation.CirclePacking in the module circle-packing Here is an example import Optimisation.CirclePacking import Diagrams.TwoD.Vector colorize zipWith fc cycle red blue yellow magenta cyan bisque firebrick indigo objects colorize circle hexagon decagon Just approximation diagram objects do not have an exact radius radiusApproximation maximum radius alpha Turn alpha circlePackingExample position map p2 packCircles radiusApproximation objects",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "CirclePacking",
          "package": "diagrams-contrib",
          "partial": "Circle Packing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of radius-estimating functions for Diagrams such as\n \u003ccode\u003e\u003ca\u003eapproxRadius\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecircleRadius\u003c/a\u003e\u003c/code\u003e. When you can calculate the radius better,\n but not any more once you converted your data to a diagram, use \u003ccode\u003e\u003ca\u003ecreateCirclePacking\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "RadiusFunction",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html#RadiusFunction",
          "type": "type"
        },
        "index": {
          "description": "The type of radius-estimating functions for Diagrams such as approxRadius and circleRadius When you can calculate the radius better but not any more once you converted your data to diagram use createCirclePacking",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "RadiusFunction",
          "package": "diagrams-contrib",
          "partial": "Radius Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#t:RadiusFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe approximation. Calculates the outer radius of the smallest\n axis-aligned polygon with the given number of edges that contains the\n object. A parameter of 4 up to 8 should be sufficient for most applications.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "approxRadius",
          "package": "diagrams-contrib",
          "signature": "Int -\u003e RadiusFunction b m",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html#approxRadius",
          "type": "function"
        },
        "index": {
          "description": "safe approximation Calculates the outer radius of the smallest axis-aligned polygon with the given number of edges that contains the object parameter of up to should be sufficient for most applications",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "approxRadius",
          "normalized": "Int-\u003eRadiusFunction a b",
          "package": "diagrams-contrib",
          "partial": "Radius",
          "signature": "Int-\u003eRadiusFunction b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:approxRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsafe approximation. This is the radius of the largest circle that\n fits in the rectangular bounding box of the object, so it may be too small.\n It is, however, exact for circles, and there is no function that is safe for\n all diagrams and exact for circles.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "circleRadius",
          "package": "diagrams-contrib",
          "signature": "RadiusFunction b m",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html#circleRadius",
          "type": "function"
        },
        "index": {
          "description": "An unsafe approximation This is the radius of the largest circle that fits in the rectangular bounding box of the object so it may be too small It is however exact for circles and there is no function that is safe for all diagrams and exact for circles",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "circleRadius",
          "package": "diagrams-contrib",
          "partial": "Radius",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:circleRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore general version of \u003ccode\u003e\u003ca\u003erenderCirclePacking\u003c/a\u003e\u003c/code\u003e. You can use this if you\n have more information available in the values of type \u003ccode\u003ea\u003c/code\u003e that allows you to\n calculate the radius better (or even exactly).\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "createCirclePacking",
          "package": "diagrams-contrib",
          "signature": "(a -\u003e Double) -\u003e (a -\u003e QDiagram b R2 m) -\u003e [a] -\u003e QDiagram b R2 m",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html#createCirclePacking",
          "type": "function"
        },
        "index": {
          "description": "More general version of renderCirclePacking You can use this if you have more information available in the values of type that allows you to calculate the radius better or even exactly",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "createCirclePacking",
          "normalized": "(a-\u003eDouble)-\u003e(a-\u003eQDiagram b R c)-\u003e[a]-\u003eQDiagram b R c",
          "package": "diagrams-contrib",
          "partial": "Circle Packing",
          "signature": "(a-\u003eDouble)-\u003e(a-\u003eQDiagram b R m)-\u003e[a]-\u003eQDiagram b R m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:createCirclePacking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the passed objects, whose radius is estimated using the given\n \u003ccode\u003e\u003ca\u003eRadiusFunction\u003c/a\u003e\u003c/code\u003e, so that they do not overlap (according to the radius\n function) and otherwise form, as far as possible, a tight circle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "renderCirclePacking",
          "package": "diagrams-contrib",
          "signature": "RadiusFunction b m -\u003e [QDiagram b R2 m] -\u003e QDiagram b R2 m",
          "source": "src/Diagrams-TwoD-Layout-CirclePacking.html#renderCirclePacking",
          "type": "function"
        },
        "index": {
          "description": "Combines the passed objects whose radius is estimated using the given RadiusFunction so that they do not overlap according to the radius function and otherwise form as far as possible tight circle",
          "hierarchy": "Diagrams TwoD Layout CirclePacking",
          "module": "Diagrams.TwoD.Layout.CirclePacking",
          "name": "renderCirclePacking",
          "normalized": "RadiusFunction a b-\u003e[QDiagram a R b]-\u003eQDiagram a R b",
          "package": "diagrams-contrib",
          "partial": "Circle Packing",
          "signature": "RadiusFunction b m-\u003e[QDiagram b R m]-\u003eQDiagram b R m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:renderCirclePacking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of methods for laying out various kinds of trees.\n This module is still experimental, and more layout methods will\n probably be added over time.\n\u003c/p\u003e\u003cp\u003eLaying out a rose tree using a symmetric layout:\n\u003c/p\u003e\u003cpre\u003e import Data.Tree\n import Diagrams.TwoD.Layout.Tree\n\n t1 = Node 'A' [Node 'B' (map lf \"CDE\"), Node 'F' [Node 'G' (map lf \"HIJ\")]]\n   where lf x = Node x []\n\n exampleSymmTree =\n   renderTree ((\u003c\u003e circle 1 # fc white) . text . (:[]))\n              (~~)\n              (symmLayout' (with & slHSep .~ 4 & slVSep .~ 4) t1)\n   # lw 0.03\n   # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_exampleSymmTree.svg#diagram=exampleSymmTree&width=300\"/\u003e\n\u003c/p\u003e\u003cp\u003eLaying out a rose tree of diagrams, with spacing automatically\n adjusted for the size of the diagrams:\n\u003c/p\u003e\u003cpre\u003e import Data.Tree\n import Data.Maybe (fromMaybe)\n import Diagrams.TwoD.Layout.Tree\n\n tD = Node (rect 1 3)\n        [ Node (circle 0.2) []\n        , Node (hcat . replicate 3 $ circle 1) []\n        , Node (eqTriangle 5) []\n        ]\n\n exampleSymmTreeWithDs =\n   renderTree id (~~)\n   (symmLayout' (with & slWidth  .~ fromMaybe (0,0) . extentX\n                      & slHeight .~ fromMaybe (0,0) . extentY)\n      tD)\n   # lw 0.03\n   # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_exampleSymmTreeWithDs.svg#diagram=exampleSymmTreeWithDs&width=300\"/\u003e\n\u003c/p\u003e\u003cp\u003eUsing a variant symmetric layout algorithm specifically for binary trees:\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Layout.Tree\n\n drawT = maybe mempty (renderTree (const (circle 0.05 # fc black)) (~~))\n       . symmLayoutBin' (with & slVSep .~ 0.5)\n\n tree500 = drawT t # centerXY # pad 1.1 # sized (Width 4)\n   where t = genTree 500 0.05\n         -- genTree 500 0.05 randomly generates trees of size 500 +/- 5%,\n         -- definition not shown\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_tree500.svg#diagram=tree500&width=400\"/\u003e\n\u003c/p\u003e\u003cp\u003eUsing force-based layout on a binary tree:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE NoMonomorphismRestriction #-}\n import Diagrams.Prelude\n import Diagrams.TwoD.Layout.Tree\n\n t 0 = Empty\n t n = BNode n (t (n-1)) (t (n-1))\n\n Just t' = uniqueXLayout 1 1 (t 4)\n\n fblEx = renderTree (\\n -\u003e (text (show n) # fontSize 0.5\n                             \u003c\u003e circle 0.3 # fc white))\n             (~~)\n             (forceLayoutTree t')\n         # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_fblEx.svg#diagram=fblEx&width=300\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "Tree",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "collection of methods for laying out various kinds of trees This module is still experimental and more layout methods will probably be added over time Laying out rose tree using symmetric layout import Data.Tree import Diagrams.TwoD.Layout.Tree t1 Node Node map lf CDE Node Node map lf HIJ where lf Node exampleSymmTree renderTree circle fc white text symmLayout with slHSep slVSep t1 lw centerXY pad Laying out rose tree of diagrams with spacing automatically adjusted for the size of the diagrams import Data.Tree import Data.Maybe fromMaybe import Diagrams.TwoD.Layout.Tree tD Node rect Node circle Node hcat replicate circle Node eqTriangle exampleSymmTreeWithDs renderTree id symmLayout with slWidth fromMaybe extentX slHeight fromMaybe extentY tD lw centerXY pad Using variant symmetric layout algorithm specifically for binary trees import Diagrams.TwoD.Layout.Tree drawT maybe mempty renderTree const circle fc black symmLayoutBin with slVSep tree500 drawT centerXY pad sized Width where genTree genTree randomly generates trees of size definition not shown Using force-based layout on binary tree LANGUAGE NoMonomorphismRestriction import Diagrams.Prelude import Diagrams.TwoD.Layout.Tree Empty BNode n-1 n-1 Just uniqueXLayout fblEx renderTree text show fontSize circle fc white forceLayoutTree centerXY pad",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "Tree",
          "package": "diagrams-contrib",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary trees with data at internal nodes.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "BTree",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
          "type": "data"
        },
        "index": {
          "description": "Binary trees with data at internal nodes",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "BTree",
          "package": "diagrams-contrib",
          "partial": "BTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:BTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "ForceLayoutTreeOpts",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "ForceLayoutTreeOpts",
          "package": "diagrams-contrib",
          "partial": "Force Layout Tree Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:ForceLayoutTreeOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for controlling the symmetric tree layout algorithm.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "SymmLayoutOpts",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "data"
        },
        "index": {
          "description": "Options for controlling the symmetric tree layout algorithm",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "SymmLayoutOpts",
          "package": "diagrams-contrib",
          "partial": "Symm Layout Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:SymmLayoutOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "BNode",
          "package": "diagrams-contrib",
          "signature": "BNode a (BTree a) (BTree a)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "BNode",
          "package": "diagrams-contrib",
          "partial": "BNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:BNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "Empty",
          "package": "diagrams-contrib",
          "signature": "Empty",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "Empty",
          "package": "diagrams-contrib",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "FLTOpts",
          "package": "diagrams-contrib",
          "signature": "FLTOpts",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "FLTOpts",
          "package": "diagrams-contrib",
          "partial": "FLTOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:FLTOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "SLOpts",
          "package": "diagrams-contrib",
          "signature": "SLOpts",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "SLOpts",
          "package": "diagrams-contrib",
          "partial": "SLOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:SLOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long edges should be, ideally.\n   This will be the resting length for\n   the springs.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_edgeLen",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "function"
        },
        "index": {
          "description": "How long edges should be ideally This will be the resting length for the springs",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_edgeLen",
          "package": "diagrams-contrib",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_edgeLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to the force layout simulator, including damping.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_forceLayoutOpts",
          "package": "diagrams-contrib",
          "signature": "ForceLayoutOpts R2",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "function"
        },
        "index": {
          "description": "Options to the force layout simulator including damping",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_forceLayoutOpts",
          "package": "diagrams-contrib",
          "partial": "Layout Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_forceLayoutOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum horizontal\n   separation between sibling\n   nodes.  The default is 1.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slHSep",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "function"
        },
        "index": {
          "description": "Minimum horizontal separation between sibling nodes The default is",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slHSep",
          "package": "diagrams-contrib",
          "partial": "HSep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slHSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for measuring the vertical extent of an\n   item in the tree.  The default is \u003ccode\u003econst (0,0)\u003c/code\u003e.  See\n   the documentation for \u003ccode\u003e\u003ca\u003eslWidth\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slHeight",
          "package": "diagrams-contrib",
          "signature": "a -\u003e (Double, Double)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "function"
        },
        "index": {
          "description": "function for measuring the vertical extent of an item in the tree The default is const See the documentation for slWidth for more information",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slHeight",
          "normalized": "a-\u003e(Double,Double)",
          "package": "diagrams-contrib",
          "partial": "Height",
          "signature": "a-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical separation\n   between adjacent levels of\n   the tree.  The default is 1.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slVSep",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "function"
        },
        "index": {
          "description": "Vertical separation between adjacent levels of the tree The default is",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slVSep",
          "package": "diagrams-contrib",
          "partial": "VSep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slVSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for measuring the horizontal extent (a pair\n   of x-coordinates) of an item in the tree.  The default\n   is \u003ccode\u003econst (0,0)\u003c/code\u003e, that is, the nodes are considered as\n   taking up no space, so the centers of the nodes will\n   be separated according to the \u003ccode\u003eslHSep\u003c/code\u003e and \u003ccode\u003eslVSep\u003c/code\u003e.\n   However, this can be useful, \u003cem\u003ee.g.\u003c/em\u003e if you have a tree\n   of diagrams of irregular size and want to make sure no\n   diagrams overlap.  In that case you could use\n   \u003ccode\u003efromMaybe (0,0) . extentX\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slWidth",
          "package": "diagrams-contrib",
          "signature": "a -\u003e (Double, Double)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
          "type": "function"
        },
        "index": {
          "description": "function for measuring the horizontal extent pair of x-coordinates of an item in the tree The default is const that is the nodes are considered as taking up no space so the centers of the nodes will be separated according to the slHSep and slVSep However this can be useful e.g if you have tree of diagrams of irregular size and want to make sure no diagrams overlap In that case you could use fromMaybe extentX",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_slWidth",
          "normalized": "a-\u003e(Double,Double)",
          "package": "diagrams-contrib",
          "partial": "Width",
          "signature": "a-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpring constant.  The\n   bigger the constant,\n   the more the edges\n   push/pull towards their\n   resting length.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_springK",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "function"
        },
        "index": {
          "description": "Spring constant The bigger the constant the more the edges push pull towards their resting length",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_springK",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_springK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoulomb constant.  The\n   bigger the constant, the\n   more sibling nodes repel\n   each other.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_staticK",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
          "type": "function"
        },
        "index": {
          "description": "Coulomb constant The bigger the constant the more sibling nodes repel each other",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "_staticK",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_staticK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "edgeLen",
          "package": "diagrams-contrib",
          "signature": "Lens' ForceLayoutTreeOpts Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#edgeLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "edgeLen",
          "package": "diagrams-contrib",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:edgeLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutOpts",
          "package": "diagrams-contrib",
          "signature": "Lens' ForceLayoutTreeOpts (ForceLayoutOpts R2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutOpts",
          "package": "diagrams-contrib",
          "partial": "Layout Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce-directed layout of rose trees, with default parameters (for\n   more options, see \u003ccode\u003e\u003ca\u003eforceLayoutTree'\u003c/a\u003e\u003c/code\u003e).  In particular,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e edges are modeled as springs\n\u003c/li\u003e\u003cli\u003e nodes are modeled as point charges\n\u003c/li\u003e\u003cli\u003e nodes are constrained to keep the same y-coordinate.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe input could be a tree already laid out by some other method,\n   such as \u003ccode\u003e\u003ca\u003euniqueXLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutTree",
          "package": "diagrams-contrib",
          "signature": "Tree (a, P2) -\u003e Tree (a, P2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutTree",
          "type": "function"
        },
        "index": {
          "description": "Force-directed layout of rose trees with default parameters for more options see forceLayoutTree In particular edges are modeled as springs nodes are modeled as point charges nodes are constrained to keep the same y-coordinate The input could be tree already laid out by some other method such as uniqueXLayout",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutTree",
          "normalized": "Tree(a,P)-\u003eTree(a,P)",
          "package": "diagrams-contrib",
          "partial": "Layout Tree",
          "signature": "Tree(a,P)-\u003eTree(a,P)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce-directed layout of rose trees, with configurable parameters.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutTree'",
          "package": "diagrams-contrib",
          "signature": "ForceLayoutTreeOpts -\u003e Tree (a, P2) -\u003e Tree (a, P2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutTree%27",
          "type": "function"
        },
        "index": {
          "description": "Force-directed layout of rose trees with configurable parameters",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "forceLayoutTree'",
          "normalized": "ForceLayoutTreeOpts-\u003eTree(a,P)-\u003eTree(a,P)",
          "package": "diagrams-contrib",
          "partial": "Layout Tree'",
          "signature": "ForceLayoutTreeOpts-\u003eTree(a,P)-\u003eTree(a,P)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutTree-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign unique IDs to every node in a tree (or other traversable structure).\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "label",
          "package": "diagrams-contrib",
          "signature": "t a -\u003e t (a, PID)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#label",
          "type": "function"
        },
        "index": {
          "description": "Assign unique IDs to every node in tree or other traversable structure",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "label",
          "normalized": "a b-\u003ea(b,PID)",
          "package": "diagrams-contrib",
          "signature": "t a-\u003et(a,PID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient constructor for leaves.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "leaf",
          "package": "diagrams-contrib",
          "signature": "a -\u003e BTree a",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#leaf",
          "type": "function"
        },
        "index": {
          "description": "Convenient constructor for leaves",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "leaf",
          "normalized": "a-\u003eBTree a",
          "package": "diagrams-contrib",
          "signature": "a-\u003eBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReconstruct a tree (or any traversable structure) from an\n   \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e, given unique identifier annotations matching the\n   identifiers used in the \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "reconstruct",
          "package": "diagrams-contrib",
          "signature": "Ensemble R2 -\u003e t (a, PID) -\u003e t (a, P2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#reconstruct",
          "type": "function"
        },
        "index": {
          "description": "Reconstruct tree or any traversable structure from an Ensemble given unique identifier annotations matching the identifiers used in the Ensemble",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "reconstruct",
          "normalized": "Ensemble R-\u003ea(b,PID)-\u003ea(b,P)",
          "package": "diagrams-contrib",
          "signature": "Ensemble R-\u003et(a,PID)-\u003et(a,P)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:reconstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tree annotated with node positions, given functions\n   specifying how to draw nodes and edges.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "renderTree",
          "package": "diagrams-contrib",
          "signature": "(a -\u003e QDiagram b R2 m) -\u003e (P2 -\u003e P2 -\u003e QDiagram b R2 m) -\u003e Tree (a, P2) -\u003e QDiagram b R2 m",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#renderTree",
          "type": "function"
        },
        "index": {
          "description": "Draw tree annotated with node positions given functions specifying how to draw nodes and edges",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "renderTree",
          "normalized": "(a-\u003eQDiagram b R c)-\u003e(P-\u003eP-\u003eQDiagram b R c)-\u003eTree(a,P)-\u003eQDiagram b R c",
          "package": "diagrams-contrib",
          "partial": "Tree",
          "signature": "(a-\u003eQDiagram b R m)-\u003e(P-\u003eP-\u003eQDiagram b R m)-\u003eTree(a,P)-\u003eQDiagram b R m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:renderTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tree annotated with node positions, given functions\n   specifying how to draw nodes and edges.  Unlike \u003ccode\u003e\u003ca\u003erenderTree\u003c/a\u003e\u003c/code\u003e,\n   this version gives the edge-drawing function access to the actual\n   values stored at the nodes rather than just their positions.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "renderTree'",
          "package": "diagrams-contrib",
          "signature": "(a -\u003e QDiagram b R2 m) -\u003e ((a, P2) -\u003e (a, P2) -\u003e QDiagram b R2 m) -\u003e Tree (a, P2) -\u003e QDiagram b R2 m",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#renderTree%27",
          "type": "function"
        },
        "index": {
          "description": "Draw tree annotated with node positions given functions specifying how to draw nodes and edges Unlike renderTree this version gives the edge-drawing function access to the actual values stored at the nodes rather than just their positions",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "renderTree'",
          "normalized": "(a-\u003eQDiagram b R c)-\u003e((a,P)-\u003e(a,P)-\u003eQDiagram b R c)-\u003eTree(a,P)-\u003eQDiagram b R c",
          "package": "diagrams-contrib",
          "partial": "Tree'",
          "signature": "(a-\u003eQDiagram b R m)-\u003e((a,P)-\u003e(a,P)-\u003eQDiagram b R m)-\u003eTree(a,P)-\u003eQDiagram b R m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:renderTree-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slHSep",
          "package": "diagrams-contrib",
          "signature": "forall a.  Lens' (SymmLayoutOpts a) Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#slHSep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slHSep",
          "package": "diagrams-contrib",
          "partial": "HSep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slHSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slHeight",
          "package": "diagrams-contrib",
          "signature": "forall a.  Lens' (SymmLayoutOpts a) (a -\u003e (Double, Double))",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#slHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slHeight",
          "normalized": "a b Lens'(SymmLayoutOpts c)(c-\u003e(Double,Double))",
          "package": "diagrams-contrib",
          "partial": "Height",
          "signature": "forall a. Lens'(SymmLayoutOpts a)(a-\u003e(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slVSep",
          "package": "diagrams-contrib",
          "signature": "forall a.  Lens' (SymmLayoutOpts a) Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#slVSep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slVSep",
          "package": "diagrams-contrib",
          "partial": "VSep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slVSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slWidth",
          "package": "diagrams-contrib",
          "signature": "forall a.  Lens' (SymmLayoutOpts a) (a -\u003e (Double, Double))",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#slWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "slWidth",
          "normalized": "a b Lens'(SymmLayoutOpts c)(c-\u003e(Double,Double))",
          "package": "diagrams-contrib",
          "partial": "Width",
          "signature": "forall a. Lens'(SymmLayoutOpts a)(a-\u003e(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "springK",
          "package": "diagrams-contrib",
          "signature": "Lens' ForceLayoutTreeOpts Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#springK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "springK",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:springK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "staticK",
          "package": "diagrams-contrib",
          "signature": "Lens' ForceLayoutTreeOpts Double",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#staticK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "staticK",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:staticK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the symmetric rose tree layout algorithm on a given tree\n   using default options, resulting in the same tree annotated with\n   node positions.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayout",
          "package": "diagrams-contrib",
          "signature": "Tree a -\u003e Tree (a, P2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayout",
          "type": "function"
        },
        "index": {
          "description": "Run the symmetric rose tree layout algorithm on given tree using default options resulting in the same tree annotated with node positions",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayout",
          "normalized": "Tree a-\u003eTree(a,P)",
          "package": "diagrams-contrib",
          "partial": "Layout",
          "signature": "Tree a-\u003eTree(a,P)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the symmetric rose tree layout algorithm on a given tree,\n   resulting in the same tree annotated with node positions.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayout'",
          "package": "diagrams-contrib",
          "signature": "SymmLayoutOpts a -\u003e Tree a -\u003e Tree (a, P2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayout%27",
          "type": "function"
        },
        "index": {
          "description": "Run the symmetric rose tree layout algorithm on given tree resulting in the same tree annotated with node positions",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayout'",
          "normalized": "SymmLayoutOpts a-\u003eTree a-\u003eTree(a,P)",
          "package": "diagrams-contrib",
          "partial": "Layout'",
          "signature": "SymmLayoutOpts a-\u003eTree a-\u003eTree(a,P)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayout-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLay out a binary tree using a slight variant of the symmetric\n   layout algorithm, using default options.  In particular, if a\n   node has only a left child but no right child (or vice versa),\n   the child will be offset from the parent horizontally by half the\n   horizontal separation parameter. Note that the result will be\n   \u003ccode\u003eNothing\u003c/code\u003e if and only if the input tree is \u003ccode\u003eEmpty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayoutBin",
          "package": "diagrams-contrib",
          "signature": "BTree a -\u003e Maybe (Tree (a, P2))",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayoutBin",
          "type": "function"
        },
        "index": {
          "description": "Lay out binary tree using slight variant of the symmetric layout algorithm using default options In particular if node has only left child but no right child or vice versa the child will be offset from the parent horizontally by half the horizontal separation parameter Note that the result will be Nothing if and only if the input tree is Empty",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayoutBin",
          "normalized": "BTree a-\u003eMaybe(Tree(a,P))",
          "package": "diagrams-contrib",
          "partial": "Layout Bin",
          "signature": "BTree a-\u003eMaybe(Tree(a,P))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayoutBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLay out a binary tree using a slight variant of the symmetric\n   layout algorithm.  In particular, if a node has only a left child\n   but no right child (or vice versa), the child will be offset from\n   the parent horizontally by half the horizontal separation\n   parameter. Note that the result will be \u003ccode\u003eNothing\u003c/code\u003e if and only if\n   the input tree is \u003ccode\u003eEmpty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayoutBin'",
          "package": "diagrams-contrib",
          "signature": "SymmLayoutOpts a -\u003e BTree a -\u003e Maybe (Tree (a, P2))",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayoutBin%27",
          "type": "function"
        },
        "index": {
          "description": "Lay out binary tree using slight variant of the symmetric layout algorithm In particular if node has only left child but no right child or vice versa the child will be offset from the parent horizontally by half the horizontal separation parameter Note that the result will be Nothing if and only if the input tree is Empty",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "symmLayoutBin'",
          "normalized": "SymmLayoutOpts a-\u003eBTree a-\u003eMaybe(Tree(a,P))",
          "package": "diagrams-contrib",
          "partial": "Layout Bin'",
          "signature": "SymmLayoutOpts a-\u003eBTree a-\u003eMaybe(Tree(a,P))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayoutBin-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign unique ID numbers to the nodes of a tree, and generate an\n   \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e suitable for simulating in order to do force-directed\n   layout of the tree.  In particular,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e edges are modeled as springs\n\u003c/li\u003e\u003cli\u003e nodes are modeled as point charges\n\u003c/li\u003e\u003cli\u003e nodes are constrained to keep the same y-coordinate.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe input to \u003ccode\u003etreeToEnsemble\u003c/code\u003e could be a tree already laid out by\n   some other method, such as \u003ccode\u003e\u003ca\u003euniqueXLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "treeToEnsemble",
          "package": "diagrams-contrib",
          "signature": "forall a.  ForceLayoutTreeOpts -\u003e Tree (a, P2) -\u003e (Tree (a, PID), Ensemble R2)",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#treeToEnsemble",
          "type": "function"
        },
        "index": {
          "description": "Assign unique ID numbers to the nodes of tree and generate an Ensemble suitable for simulating in order to do force-directed layout of the tree In particular edges are modeled as springs nodes are modeled as point charges nodes are constrained to keep the same y-coordinate The input to treeToEnsemble could be tree already laid out by some other method such as uniqueXLayout",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "treeToEnsemble",
          "normalized": "a b ForceLayoutTreeOpts-\u003eTree(c,P)-\u003e(Tree(c,PID),Ensemble R)",
          "package": "diagrams-contrib",
          "partial": "To Ensemble",
          "signature": "forall a. ForceLayoutTreeOpts-\u003eTree(a,P)-\u003e(Tree(a,PID),Ensemble R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:treeToEnsemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euniqueXLayout xSep ySep t\u003c/code\u003e lays out the binary tree \u003ccode\u003et\u003c/code\u003e using a\n   simple recursive algorithm with the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every left subtree is completely to the left of its parent, and\n     similarly for right subtrees.\n\u003c/li\u003e\u003cli\u003e All the nodes at a given depth in the tree have the same\n     y-coordinate. The separation distance between levels is given by\n     \u003ccode\u003eySep\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Every node has a unique x-coordinate. The separation between\n     successive nodes from left to right is given by \u003ccode\u003exSep\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "uniqueXLayout",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Double -\u003e BTree a -\u003e Maybe (Tree (a, P2))",
          "source": "src/Diagrams-TwoD-Layout-Tree.html#uniqueXLayout",
          "type": "function"
        },
        "index": {
          "description": "uniqueXLayout xSep ySep lays out the binary tree using simple recursive algorithm with the following properties Every left subtree is completely to the left of its parent and similarly for right subtrees All the nodes at given depth in the tree have the same y-coordinate The separation distance between levels is given by ySep Every node has unique x-coordinate The separation between successive nodes from left to right is given by xSep",
          "hierarchy": "Diagrams TwoD Layout Tree",
          "module": "Diagrams.TwoD.Layout.Tree",
          "name": "uniqueXLayout",
          "normalized": "Double-\u003eDouble-\u003eBTree a-\u003eMaybe(Tree(a,P))",
          "package": "diagrams-contrib",
          "partial": "XLayout",
          "signature": "Double-\u003eDouble-\u003eBTree a-\u003eMaybe(Tree(a,P))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:uniqueXLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate \"calligraphic\" strokes by filling between two offset\n copies of a curve.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Calligraphic",
          "name": "Calligraphic",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Calligraphic.html",
          "type": "module"
        },
        "index": {
          "description": "Create calligraphic strokes by filling between two offset copies of curve",
          "hierarchy": "Diagrams TwoD Path Calligraphic",
          "module": "Diagrams.TwoD.Path.Calligraphic",
          "name": "Calligraphic",
          "package": "diagrams-contrib",
          "partial": "Calligraphic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Calligraphic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecalligraphic pen t\u003c/code\u003e creates a \"calligraphic\" variant of \u003ccode\u003et\u003c/code\u003e by\n   filling between two copies of \u003ccode\u003et\u003c/code\u003e offset by the \u003ccode\u003epen\u003c/code\u003e vector.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_Calligraphic_calligraphicEx.svg#diagram=calligraphicEx&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Coordinates\n import Diagrams.TwoD.Path.Calligraphic\n\n curve = cubicSpline False [1 ^& 1, 2 ^& 5, 5 ^& 6, 8 ^& 12]\n       # scale 3\n\n calligraphicEx =\n   [ circle 15 # calligraphic (2 ^& 1)\n   , curve     # calligraphic (2 ^& 2)\n   ]\n   # map (centerXY . strokeLoop)\n   # fc black\n   # hcat' (with & sep .~ 10)\n\u003c/pre\u003e",
          "module": "Diagrams.TwoD.Path.Calligraphic",
          "name": "calligraphic",
          "package": "diagrams-contrib",
          "signature": "R2 -\u003e Trail' Line R2 -\u003e Trail' Loop R2",
          "source": "src/Diagrams-TwoD-Path-Calligraphic.html#calligraphic",
          "type": "function"
        },
        "index": {
          "description": "calligraphic pen creates calligraphic variant of by filling between two copies of offset by the pen vector import Diagrams.Coordinates import Diagrams.TwoD.Path.Calligraphic curve cubicSpline False scale calligraphicEx circle calligraphic curve calligraphic map centerXY strokeLoop fc black hcat with sep",
          "hierarchy": "Diagrams TwoD Path Calligraphic",
          "module": "Diagrams.TwoD.Path.Calligraphic",
          "name": "calligraphic",
          "normalized": "R-\u003eTrail' Line R-\u003eTrail' Loop R",
          "package": "diagrams-contrib",
          "signature": "R-\u003eTrail' Line R-\u003eTrail' Loop R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Calligraphic.html#v:calligraphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate fractal trails by the \"iterated subset\" construction,\n iteratively replacing each segment with a given pattern.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "IteratedSubset",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html",
          "type": "module"
        },
        "index": {
          "description": "Generate fractal trails by the iterated subset construction iteratively replacing each segment with given pattern",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "IteratedSubset",
          "package": "diagrams-contrib",
          "partial": "Iterated Subset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters to generate an iterated subset fractal.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "IterTrailConfig",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
          "type": "data"
        },
        "index": {
          "description": "Parameters to generate an iterated subset fractal",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "IterTrailConfig",
          "package": "diagrams-contrib",
          "partial": "Iter Trail Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#t:IterTrailConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "ITC",
          "package": "diagrams-contrib",
          "signature": "ITC",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "ITC",
          "package": "diagrams-contrib",
          "partial": "ITC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:ITC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line color to use\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "color",
          "package": "diagrams-contrib",
          "signature": "Colour Double",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
          "type": "function"
        },
        "index": {
          "description": "The line color to use",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "color",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an iterated subset fractal based on the given parameters.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "drawITC",
          "package": "diagrams-contrib",
          "signature": "IterTrailConfig -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#drawITC",
          "type": "function"
        },
        "index": {
          "description": "Generate an iterated subset fractal based on the given parameters",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "drawITC",
          "normalized": "IterTrailConfig-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "ITC",
          "signature": "IterTrailConfig-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:drawITC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edrawITC\u003c/a\u003e\u003c/code\u003e, but also scales, centers, and pads the result so\n that it fits nicely inside a 4x4 box.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "drawITCScaled",
          "package": "diagrams-contrib",
          "signature": "IterTrailConfig -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#drawITCScaled",
          "type": "function"
        },
        "index": {
          "description": "Like drawITC but also scales centers and pads the result so that it fits nicely inside x4 box",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "drawITCScaled",
          "normalized": "IterTrailConfig-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "ITCScaled",
          "signature": "IterTrailConfig-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:drawITCScaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \"seed pattern\", produce a list of successive\n   refinements, where the nth trail in the list has iteratively had\n   all segments replaced by the seed pattern n times, starting from\n   a horizontal line.  In other words, the zeroth trail in the\n   output list is a horizontal unit segment, and each subsequent\n   trail is equal to the previous with all segments replaced by the\n   seed pattern.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Path.IteratedSubset\n iterTrailEx = vcat' (with & sep .~ 0.3) . map strokeLine . take 5\n             $ iterTrail koch\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_iterTrailEx.svg#diagram=iterTrailEx&width=200\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "iterTrail",
          "package": "diagrams-contrib",
          "signature": "Trail' Line R2 -\u003e [Trail' Line R2]",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#iterTrail",
          "type": "function"
        },
        "index": {
          "description": "Given seed pattern produce list of successive refinements where the nth trail in the list has iteratively had all segments replaced by the seed pattern times starting from horizontal line In other words the zeroth trail in the output list is horizontal unit segment and each subsequent trail is equal to the previous with all segments replaced by the seed pattern import Diagrams.TwoD.Path.IteratedSubset iterTrailEx vcat with sep map strokeLine take iterTrail koch",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "iterTrail",
          "normalized": "Trail' Line R-\u003e[Trail' Line R]",
          "package": "diagrams-contrib",
          "partial": "Trail",
          "signature": "Trail' Line R-\u003e[Trail' Line R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:iterTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of iterations\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "iters",
          "package": "diagrams-contrib",
          "signature": "Int",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
          "type": "function"
        },
        "index": {
          "description": "Number of iterations",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "iters",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:iters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed for the Koch curve (side of the famous Koch \u003ccode\u003e\u003ca\u003esnowflake\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_kochD.svg#diagram=kochD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "koch",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#koch",
          "type": "function"
        },
        "index": {
          "description": "Seed for the Koch curve side of the famous Koch snowflake",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "koch",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:koch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed for the L&#233;vy dragon curve.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_levyD.svg#diagram=levyD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "levy",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#levy",
          "type": "function"
        },
        "index": {
          "description": "Seed for the vy dragon curve",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "levy",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:levy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random \u003ccode\u003e\u003ca\u003eIterTrailConfig\u003c/a\u003e\u003c/code\u003e.  This features many\n   hard-coded values.  If you want to play with it just copy the\n   code and modify it to suit.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "randITC",
          "package": "diagrams-contrib",
          "signature": "m IterTrailConfig",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#randITC",
          "type": "function"
        },
        "index": {
          "description": "Generate random IterTrailConfig This features many hard-coded values If you want to play with it just copy the code and modify it to suit",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "randITC",
          "package": "diagrams-contrib",
          "partial": "ITC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:randITC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a grid of 100 random iterated subset fractals.  Impress\n   your friends!\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "randIterGrid",
          "package": "diagrams-contrib",
          "signature": "IO (Diagram b R2)",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#randIterGrid",
          "type": "function"
        },
        "index": {
          "description": "Create grid of random iterated subset fractals Impress your friends",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "randIterGrid",
          "package": "diagrams-contrib",
          "partial": "Iter Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:randIterGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a trail to \"refine\" a segment, returning a scaled and/or\n   rotated copy of the trail with the same endpoint as the segment.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "refineSegment",
          "package": "diagrams-contrib",
          "signature": "Trail' Line R2 -\u003e Segment Closed R2 -\u003e Maybe (Trail' Line R2)",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#refineSegment",
          "type": "function"
        },
        "index": {
          "description": "Use trail to refine segment returning scaled and or rotated copy of the trail with the same endpoint as the segment",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "refineSegment",
          "normalized": "Trail' Line R-\u003eSegment Closed R-\u003eMaybe(Trail' Line R)",
          "package": "diagrams-contrib",
          "partial": "Segment",
          "signature": "Trail' Line R-\u003eSegment Closed R-\u003eMaybe(Trail' Line R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:refineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe seed trail\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "seed",
          "package": "diagrams-contrib",
          "signature": "Trail' Line R2",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
          "type": "function"
        },
        "index": {
          "description": "The seed trail",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "seed",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe famous Koch snowflake, made by putting three Koch curves\n   together. \u003ccode\u003esnowflake n\u003c/code\u003e yields an order-\u003ccode\u003en\u003c/code\u003e snowflake.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_snowflake4.svg#diagram=snowflake4&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "snowflake",
          "package": "diagrams-contrib",
          "signature": "Int -\u003e Trail R2",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#snowflake",
          "type": "function"
        },
        "index": {
          "description": "The famous Koch snowflake made by putting three Koch curves together snowflake yields an order snowflake",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "snowflake",
          "normalized": "Int-\u003eTrail R",
          "package": "diagrams-contrib",
          "signature": "Int-\u003eTrail R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:snowflake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"square impulse\" seed which produces a quadratic von Koch\n   curve.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpD.svg#diagram=sqUpD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUp",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUp",
          "type": "function"
        },
        "index": {
          "description": "square impulse seed which produces quadratic von Koch curve",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUp",
          "package": "diagrams-contrib",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"double square impulse\" seed which produces fantastic\n   rectilinear spiral patterns.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownD.svg#diagram=sqUpDownD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDown",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDown",
          "type": "function"
        },
        "index": {
          "description": "double square impulse seed which produces fantastic rectilinear spiral patterns",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDown",
          "package": "diagrams-contrib",
          "partial": "Up Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esqUpDown\u003c/a\u003e\u003c/code\u003e but with \u003ccode\u003e\u003ca\u003ecubicSpline\u003c/a\u003e\u003c/code\u003e applied to produce a curvy\n   version.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownD2.svg#diagram=sqUpDownD2&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDown'",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDown%27",
          "type": "function"
        },
        "index": {
          "description": "Like sqUpDown but with cubicSpline applied to produce curvy version",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDown'",
          "package": "diagrams-contrib",
          "partial": "Up Down'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDown-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cool diagram featuring successive iterations of \u003ccode\u003esqUpDown'\u003c/code\u003e\n   superimposed atop one another.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownOverlayD.svg#diagram=sqUpDownOverlayD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDownOverlay",
          "package": "diagrams-contrib",
          "signature": "Diagram b R2",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDownOverlay",
          "type": "function"
        },
        "index": {
          "description": "cool diagram featuring successive iterations of sqUpDown superimposed atop one another",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "sqUpDownOverlay",
          "package": "diagrams-contrib",
          "partial": "Up Down Overlay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDownOverlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrange zig-zag seed that produces a dense fractal path with lots\n   of triangles.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_zagD.svg#diagram=zagD&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "zag",
          "package": "diagrams-contrib",
          "signature": "t",
          "source": "src/Diagrams-TwoD-Path-IteratedSubset.html#zag",
          "type": "function"
        },
        "index": {
          "description": "Strange zig-zag seed that produces dense fractal path with lots of triangles",
          "hierarchy": "Diagrams TwoD Path IteratedSubset",
          "module": "Diagrams.TwoD.Path.IteratedSubset",
          "name": "zag",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:zag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators to allow writing Metafont-style paths embedded in\n Haskell, with the usual Diagrams types for points and directions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "Combinators",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators to allow writing Metafont-style paths embedded in Haskell with the usual Diagrams types for points and directions",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "Combinators",
          "package": "diagrams-contrib",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.-\u003c/code\u003e above.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(-.)",
          "package": "diagrams-contrib",
          "signature": "Join -\u003e MFPathData P -\u003e MFPathData J",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#-.",
          "type": "function"
        },
        "index": {
          "description": "See above",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(-.) -.",
          "normalized": "Join-\u003eMFPathData P-\u003eMFPathData J",
          "package": "diagrams-contrib",
          "signature": "Join-\u003eMFPathData P-\u003eMFPathData J",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003epoint\u003c/em\u003e \u003ccode\u003e.-\u003c/code\u003e \u003cem\u003ejoin\u003c/em\u003e \u003ccode\u003e-.\u003c/code\u003e \u003cem\u003epath\u003c/em\u003e adds \u003cem\u003epoint\u003c/em\u003e to the\n left end of the metafont \u003cem\u003epath\u003c/em\u003e, connected by \u003cem\u003ejoin\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(.-)",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e MFPathData J -\u003e MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#.-",
          "type": "function"
        },
        "index": {
          "description": "point join path adds point to the left end of the metafont path connected by join",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(.-) .-",
          "normalized": "P-\u003eMFPathData J-\u003eMFPathData P",
          "package": "diagrams-contrib",
          "signature": "P-\u003eMFPathData J-\u003eMFPathData P",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:.-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a point to the left of a Metafont path using a simple join.\n That is, neither direction is specified, and both tensions are 1.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(.--.)",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e MFPathData P -\u003e MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#.--.",
          "type": "function"
        },
        "index": {
          "description": "Add point to the left of Metafont path using simple join That is neither direction is specified and both tensions are",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "(.--.) .--.",
          "normalized": "P-\u003eMFPathData P-\u003eMFPathData P",
          "package": "diagrams-contrib",
          "signature": "P-\u003eMFPathData P-\u003eMFPathData P",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:.-45--45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join with the right-end direction specified.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "arriving",
          "package": "diagrams-contrib",
          "signature": "R2 -\u003e Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#arriving",
          "type": "function"
        },
        "index": {
          "description": "join with the right-end direction specified",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "arriving",
          "normalized": "R-\u003eJoin",
          "package": "diagrams-contrib",
          "signature": "R-\u003eJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:arriving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join with explicit control points.  Note that these are in the\n same coordinate system as the endpoints, not relative to the latter.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "controls",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e P2 -\u003e Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#controls",
          "type": "function"
        },
        "index": {
          "description": "join with explicit control points Note that these are in the same coordinate system as the endpoints not relative to the latter",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "controls",
          "normalized": "P-\u003eP-\u003eJoin",
          "package": "diagrams-contrib",
          "signature": "P-\u003eP-\u003eJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:controls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the right-end of the Metafont path back to the left-end.\n When converted to a Diagrams \u003ccode\u003e\u003ca\u003eTrail'\u003c/a\u003e\u003c/code\u003e, this will be a Loop.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "cyclePath",
          "package": "diagrams-contrib",
          "signature": "MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#cyclePath",
          "type": "function"
        },
        "index": {
          "description": "Wrap the right-end of the Metafont path back to the left-end When converted to Diagrams Trail this will be Loop",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "cyclePath",
          "package": "diagrams-contrib",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:cyclePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate the right-end of a Metafont path at the given point.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "endpt",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#endpt",
          "type": "function"
        },
        "index": {
          "description": "Terminate the right-end of Metafont path at the given point",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "endpt",
          "normalized": "P-\u003eMFPathData P",
          "package": "diagrams-contrib",
          "signature": "P-\u003eMFPathData P",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:endpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join with the left-end direction specified.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "leaving",
          "package": "diagrams-contrib",
          "signature": "R2 -\u003e Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#leaving",
          "type": "function"
        },
        "index": {
          "description": "join with the left-end direction specified",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "leaving",
          "normalized": "R-\u003eJoin",
          "package": "diagrams-contrib",
          "signature": "R-\u003eJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:leaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimpleJoin is the same as mempty, with a more specific type.  It\n is provided for convenience in situations where explicit type\n signatures would otherwise be needed, such as when building up a\n join using lenses.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "simpleJoin",
          "package": "diagrams-contrib",
          "signature": "Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#simpleJoin",
          "type": "function"
        },
        "index": {
          "description": "simpleJoin is the same as mempty with more specific type It is provided for convenience in situations where explicit type signatures would otherwise be needed such as when building up join using lenses",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "simpleJoin",
          "package": "diagrams-contrib",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:simpleJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join with both tensions the same.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "tension",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#tension",
          "type": "function"
        },
        "index": {
          "description": "join with both tensions the same",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "tension",
          "normalized": "Double-\u003eJoin",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:tension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA join with two tension values.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "tensions",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Double -\u003e Join",
          "source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#tensions",
          "type": "function"
        },
        "index": {
          "description": "join with two tension values",
          "hierarchy": "Diagrams TwoD Path Metafont Combinators",
          "module": "Diagrams.TwoD.Path.Metafont.Combinators",
          "name": "tensions",
          "normalized": "Double-\u003eDouble-\u003eJoin",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eDouble-\u003eJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:tensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolve equations due to John Hobby, as implemented in Donald Knuth's\n \u003cem\u003eMetafont\u003c/em\u003e, to create (usually) smooth paths from specified points\n and directions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "Internal",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Solve equations due to John Hobby as implemented in Donald Knuth Metafont to create usually smooth paths from specified points and directions",
          "hierarchy": "Diagrams TwoD Path Metafont Internal",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "Internal",
          "package": "diagrams-contrib",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a segment whose endpoint directions have been fully\n   determined, and compute the control points to realize it as a\n   cubic B&#233;zier segment.  If the segment already has control points\n   specified, the directions are ignored (they are assumed to\n   match).  If the segment tensions are specified as TensionAtLeast,\n   check whether the minimum tension will lead to an inflection\n   point.  If so, pick the maximum velocity (equivalent to minimum\n   tension) that avoids the inflection point.  Otherwise, calculate\n   the velocity from the tension using \u003ccode\u003ehobbyF\u003c/code\u003e.  Then calculate the\n   control point positions from the direction and the velocity.\n   Afterwards we can forget the direction information (since the\n   control points are what we really want, and the directions can be\n   recovered by subtracting the control points from the endpoints\n   anyway).\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "computeControls",
          "package": "diagrams-contrib",
          "signature": "MetafontSegment Dir (Either TensionJoin ControlJoin) -\u003e MetafontSegment () ControlJoin",
          "source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#computeControls",
          "type": "function"
        },
        "index": {
          "description": "Take segment whose endpoint directions have been fully determined and compute the control points to realize it as cubic zier segment If the segment already has control points specified the directions are ignored they are assumed to match If the segment tensions are specified as TensionAtLeast check whether the minimum tension will lead to an inflection point If so pick the maximum velocity equivalent to minimum tension that avoids the inflection point Otherwise calculate the velocity from the tension using hobbyF Then calculate the control point positions from the direction and the velocity Afterwards we can forget the direction information since the control points are what we really want and the directions can be recovered by subtracting the control points from the endpoints anyway",
          "hierarchy": "Diagrams TwoD Path Metafont Internal",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "computeControls",
          "normalized": "MetafontSegment Dir(Either TensionJoin ControlJoin)-\u003eMetafontSegment()ControlJoin",
          "package": "diagrams-contrib",
          "partial": "Controls",
          "signature": "MetafontSegment Dir(Either TensionJoin ControlJoin)-\u003eMetafontSegment()ControlJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:computeControls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a MetaFont path to a Diagrams Trail, using a Loop or Line as needed\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "locatedTrail",
          "package": "diagrams-contrib",
          "signature": "MFPath () ControlJoin -\u003e Located (Trail R2)",
          "source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#locatedTrail",
          "type": "function"
        },
        "index": {
          "description": "Convert MetaFont path to Diagrams Trail using Loop or Line as needed",
          "hierarchy": "Diagrams TwoD Path Metafont Internal",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "locatedTrail",
          "normalized": "MFPath()ControlJoin-\u003eLocated(Trail R)",
          "package": "diagrams-contrib",
          "partial": "Trail",
          "signature": "MFPath()ControlJoin-\u003eLocated(Trail R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:locatedTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a path in combinator syntax to the internal\n representation used for solving.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "mfPathToSegments",
          "package": "diagrams-contrib",
          "signature": "MFPathData P -\u003e MFP",
          "source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#mfPathToSegments",
          "type": "function"
        },
        "index": {
          "description": "Convert path in combinator syntax to the internal representation used for solving",
          "hierarchy": "Diagrams TwoD Path Metafont Internal",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "mfPathToSegments",
          "normalized": "MFPathData P-\u003eMFP",
          "package": "diagrams-contrib",
          "partial": "Path To Segments",
          "signature": "MFPathData P-\u003eMFP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:mfPathToSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun all the rules required to fully specify all segment directions,\n but do not replace the Joins with ControlJoin.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "solve",
          "package": "diagrams-contrib",
          "signature": "MFP -\u003e MFPath Dir BasicJoin",
          "source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#solve",
          "type": "function"
        },
        "index": {
          "description": "Run all the rules required to fully specify all segment directions but do not replace the Joins with ControlJoin",
          "hierarchy": "Diagrams TwoD Path Metafont Internal",
          "module": "Diagrams.TwoD.Path.Metafont.Internal",
          "name": "solve",
          "normalized": "MFP-\u003eMFPath Dir BasicJoin",
          "package": "diagrams-contrib",
          "signature": "MFP-\u003eMFPath Dir BasicJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Parser",
          "name": "Parser",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Parser",
          "module": "Diagrams.TwoD.Path.Metafont.Parser",
          "name": "Parser",
          "package": "diagrams-contrib",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003eText\u003c/code\u003e value in Metafont syntax, as destribed in /The\n METAFONTbook/.\n\u003c/p\u003e",
          "module": "[\"Diagrams.TwoD.Path.Metafont.Parser\",\"Diagrams.TwoD.Path.Metafont\"]",
          "name": "metafontParser",
          "package": "diagrams-contrib",
          "signature": "Parser (MFPath (Maybe PathDir) BasicJoin)",
          "source": "src/Diagrams-TwoD-Path-Metafont-Parser.html#metafontParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Parser.html#v:metafontParser\",\"http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:metafontParser\"]"
        },
        "index": {
          "description": "Parse Text value in Metafont syntax as destribed in The METAFONTbook",
          "hierarchy": "Diagrams TwoD Path Metafont Parser",
          "module": "Diagrams.TwoD.Path.Metafont.Parser",
          "name": "metafontParser",
          "package": "diagrams-contrib",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Parser.html#v:metafontParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Types",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Types",
          "package": "diagrams-contrib",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "BasicJoin",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#BasicJoin",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "BasicJoin",
          "package": "diagrams-contrib",
          "partial": "Basic Join",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:BasicJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe two intermediate control points of a segment, specified directly.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "ControlJoin",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
          "type": "data"
        },
        "index": {
          "description": "The two intermediate control points of segment specified directly",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "ControlJoin",
          "package": "diagrams-contrib",
          "partial": "Control Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:ControlJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Curl",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Curl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Curl",
          "package": "diagrams-contrib",
          "partial": "Curl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Curl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Dir",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Dir",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Dir",
          "package": "diagrams-contrib",
          "partial": "Dir",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "J",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#J",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "J",
          "package": "diagrams-contrib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:J"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMFP is a type synonym to clarify signatures in Metafont.Internal.\n Note that the type permits segments which are \"overspecified\",\n having one or both directions specified, and also a \u003ccode\u003e\u003ca\u003eControlJoin\u003c/a\u003e\u003c/code\u003e.\n In this case, \u003ca\u003eMetafont.Internal\u003c/a\u003e ignores the directions.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFP",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFP",
          "type": "type"
        },
        "index": {
          "description": "MFP is type synonym to clarify signatures in Metafont.Internal Note that the type permits segments which are overspecified having one or both directions specified and also ControlJoin In this case Metafont.Internal ignores the directions",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFP",
          "package": "diagrams-contrib",
          "partial": "MFP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMFPath\u003c/code\u003e is the type used internally in solving the metafont\n equations.  The direction and join types are progressively refined\n until all control points are known.  The \u003ccode\u003eloop\u003c/code\u003e flag affects both\n the equations to be solved and the type of \u003ccode\u003eTrail\u003c/code\u003e in the result.\n If constructing an \u003ccode\u003eMFPath\u003c/code\u003e in new code, the responsibility rests\n on the user to ensure that successive \u003ccode\u003eMetafontSegment\u003c/code\u003es share an\n endpoint.  If this is not true, the result is undefined.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPath",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
          "type": "data"
        },
        "index": {
          "description": "MFPath is the type used internally in solving the metafont equations The direction and join types are progressively refined until all control points are known The loop flag affects both the equations to be solved and the type of Trail in the result If constructing an MFPath in new code the responsibility rests on the user to ensure that successive MetafontSegment share an endpoint If this is not true the result is undefined",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPath",
          "package": "diagrams-contrib",
          "partial": "MFPath",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMFPathData\u003c/code\u003e is the type manipulated by the metafont combinators.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathData",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
          "type": "data"
        },
        "index": {
          "description": "MFPathData is the type manipulated by the metafont combinators",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathData",
          "package": "diagrams-contrib",
          "partial": "MFPath Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFPathData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMFS is a type synonym to clarify signatures in \u003ca\u003eMetafont.Internal\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFS",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFS",
          "type": "type"
        },
        "index": {
          "description": "MFS is type synonym to clarify signatures in Metafont.Internal",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFS",
          "package": "diagrams-contrib",
          "partial": "MFS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMetafontSegment\u003c/code\u003e is used internally in solving the metafont\n equations.  It represents a segment with two known endpoints, and a\n \u003cem\u003ejoin\u003c/em\u003e, which may be specified in various ways.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MetafontSegment",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
          "type": "data"
        },
        "index": {
          "description": "MetafontSegment is used internally in solving the metafont equations It represents segment with two known endpoints and join which may be specified in various ways",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MetafontSegment",
          "package": "diagrams-contrib",
          "partial": "Metafont Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MetafontSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "P",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#P",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "P",
          "package": "diagrams-contrib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA direction can be specified at any point of a path.  A \u003cem\u003ecurl\u003c/em\u003e\n should only be specified at the endpoints.  The endpoints default\n to curl 1 if not set.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDir",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
          "type": "data"
        },
        "index": {
          "description": "direction can be specified at any point of path curl should only be specified at the endpoints The endpoints default to curl if not set",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDir",
          "package": "diagrams-contrib",
          "partial": "Path Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:PathDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePathJoin\u003c/code\u003e specifies the directions at both ends of a segment,\n and a join which describes the control points explicitly or implicitly.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathJoin",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
          "type": "data"
        },
        "index": {
          "description": "PathJoin specifies the directions at both ends of segment and join which describes the control points explicitly or implicitly",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathJoin",
          "package": "diagrams-contrib",
          "partial": "Path Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:PathJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher \u003cem\u003eTension\u003c/em\u003e brings the path closer to a straight line\n between segments.  Equivalently, it brings the control points\n closer to the endpoints.  \u003ccode\u003eTensionAmt\u003c/code\u003e introduces a fixed tension.\n \u003ccode\u003eTensionAtLeast\u003c/code\u003e introduces a tension which will be increased if by\n so doing, an inflection point can be eliminated.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Tension",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
          "type": "data"
        },
        "index": {
          "description": "Higher Tension brings the path closer to straight line between segments Equivalently it brings the control points closer to the endpoints TensionAmt introduces fixed tension TensionAtLeast introduces tension which will be increased if by so doing an inflection point can be eliminated",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "Tension",
          "package": "diagrams-contrib",
          "partial": "Tension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Tension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo tensions and two directions completely determine the control\n points of a segment.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionJoin",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
          "type": "data"
        },
        "index": {
          "description": "Two tensions and two directions completely determine the control points of segment",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionJoin",
          "package": "diagrams-contrib",
          "partial": "Tension Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:TensionJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "CJ",
          "package": "diagrams-contrib",
          "signature": "CJ",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "CJ",
          "package": "diagrams-contrib",
          "partial": "CJ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:CJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFP",
          "package": "diagrams-contrib",
          "signature": "MFP",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFP",
          "package": "diagrams-contrib",
          "partial": "MFP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathCycle",
          "package": "diagrams-contrib",
          "signature": "MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathCycle",
          "package": "diagrams-contrib",
          "partial": "MFPath Cycle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathEnd",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathEnd",
          "normalized": "P-\u003eMFPathData P",
          "package": "diagrams-contrib",
          "partial": "MFPath End",
          "signature": "P-\u003eMFPathData P",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathJoin",
          "package": "diagrams-contrib",
          "signature": "PathJoin (Maybe PathDir) (Maybe BasicJoin) -\u003e MFPathData P -\u003e MFPathData J",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathJoin",
          "normalized": "PathJoin(Maybe PathDir)(Maybe BasicJoin)-\u003eMFPathData P-\u003eMFPathData J",
          "package": "diagrams-contrib",
          "partial": "MFPath Join",
          "signature": "PathJoin(Maybe PathDir)(Maybe BasicJoin)-\u003eMFPathData P-\u003eMFPathData J",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathPt",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e MFPathData J -\u003e MFPathData P",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFPathPt",
          "normalized": "P-\u003eMFPathData J-\u003eMFPathData P",
          "package": "diagrams-contrib",
          "partial": "MFPath Pt",
          "signature": "P-\u003eMFPathData J-\u003eMFPathData P",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFS",
          "package": "diagrams-contrib",
          "signature": "MFS",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "MFS",
          "package": "diagrams-contrib",
          "partial": "MFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PJ",
          "package": "diagrams-contrib",
          "signature": "PJ",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PJ",
          "package": "diagrams-contrib",
          "partial": "PJ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDirCurl",
          "package": "diagrams-contrib",
          "signature": "PathDirCurl Curl",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDirCurl",
          "package": "diagrams-contrib",
          "partial": "Path Dir Curl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PathDirCurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDirDir",
          "package": "diagrams-contrib",
          "signature": "PathDirDir Dir",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "PathDirDir",
          "package": "diagrams-contrib",
          "partial": "Path Dir Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PathDirDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TJ",
          "package": "diagrams-contrib",
          "signature": "TJ",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TJ",
          "package": "diagrams-contrib",
          "partial": "TJ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionAmt",
          "package": "diagrams-contrib",
          "signature": "TensionAmt Double",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionAmt",
          "package": "diagrams-contrib",
          "partial": "Tension Amt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TensionAmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionAtLeast",
          "package": "diagrams-contrib",
          "signature": "TensionAtLeast Double",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "TensionAtLeast",
          "package": "diagrams-contrib",
          "partial": "Tension At Least",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TensionAtLeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_c1",
          "package": "diagrams-contrib",
          "signature": "P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_c1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_c1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_c2",
          "package": "diagrams-contrib",
          "signature": "P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_c2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_c2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_d1",
          "package": "diagrams-contrib",
          "signature": "d",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_d1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_d2",
          "package": "diagrams-contrib",
          "signature": "d",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_d2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_d2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_j",
          "package": "diagrams-contrib",
          "signature": "j",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_j",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_loop",
          "package": "diagrams-contrib",
          "signature": "Bool",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_loop",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_pj",
          "package": "diagrams-contrib",
          "signature": "PathJoin d j",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_pj",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_pj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_segs",
          "package": "diagrams-contrib",
          "signature": "[MetafontSegment d j]",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_segs",
          "normalized": "[MetafontSegment a b]",
          "package": "diagrams-contrib",
          "signature": "[MetafontSegment d j]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_segs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_t1",
          "package": "diagrams-contrib",
          "signature": "Tension",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_t1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_t1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_t2",
          "package": "diagrams-contrib",
          "signature": "Tension",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_t2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_x1",
          "package": "diagrams-contrib",
          "signature": "P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_x1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_x2",
          "package": "diagrams-contrib",
          "signature": "P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "_x2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_x2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "c1",
          "package": "diagrams-contrib",
          "signature": "Lens' ControlJoin P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#c1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "c1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:c1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "c2",
          "package": "diagrams-contrib",
          "signature": "Lens' ControlJoin P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#c2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "c2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:c2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "d1",
          "package": "diagrams-contrib",
          "signature": "forall d j.  Lens' (PathJoin d j) d",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#d1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "d1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "d2",
          "package": "diagrams-contrib",
          "signature": "forall d j.  Lens' (PathJoin d j) d",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#d2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "d2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:d2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "getTension",
          "package": "diagrams-contrib",
          "signature": "Tension -\u003e Double",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#getTension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "getTension",
          "normalized": "Tension-\u003eDouble",
          "package": "diagrams-contrib",
          "partial": "Tension",
          "signature": "Tension-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:getTension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate to determine the constructor used.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "isCurl",
          "package": "diagrams-contrib",
          "signature": "PathDir -\u003e Bool",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#isCurl",
          "type": "function"
        },
        "index": {
          "description": "predicate to determine the constructor used",
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "isCurl",
          "normalized": "PathDir-\u003eBool",
          "package": "diagrams-contrib",
          "partial": "Curl",
          "signature": "PathDir-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:isCurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "j",
          "package": "diagrams-contrib",
          "signature": "forall d j j.  Lens (PathJoin d j) (PathJoin d j) j j",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#j",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "j",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "loop",
          "package": "diagrams-contrib",
          "signature": "forall d j.  Lens' (MFPath d j) Bool",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "loop",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "pj",
          "package": "diagrams-contrib",
          "signature": "forall d j d j.  Lens (MetafontSegment d j) (MetafontSegment d j) (PathJoin d j) (PathJoin d j)",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#pj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "pj",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:pj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "segs",
          "package": "diagrams-contrib",
          "signature": "forall d j d j.  Lens (MFPath d j) (MFPath d j) [MetafontSegment d j] [MetafontSegment d j]",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#segs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "segs",
          "normalized": "a b c b d Lens(MFPath b c)(MFPath b c)[MetafontSegment b c][MetafontSegment b c]",
          "package": "diagrams-contrib",
          "signature": "forall d j d j. Lens(MFPath d j)(MFPath d j)[MetafontSegment d j][MetafontSegment d j]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:segs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "t1",
          "package": "diagrams-contrib",
          "signature": "Lens' TensionJoin Tension",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#t1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "t1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:t1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "t2",
          "package": "diagrams-contrib",
          "signature": "Lens' TensionJoin Tension",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#t2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "t2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "x1",
          "package": "diagrams-contrib",
          "signature": "forall d j.  Lens' (MetafontSegment d j) P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#x1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "x1",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "x2",
          "package": "diagrams-contrib",
          "signature": "forall d j.  Lens' (MetafontSegment d j) P2",
          "source": "src/Diagrams-TwoD-Path-Metafont-Types.html#x2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Metafont Types",
          "module": "Diagrams.TwoD.Path.Metafont.Types",
          "name": "x2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:x2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine Diagrams Paths by specifying points and\n optionally directions and tension.  Calculate control points to\n maintain smooth curvature at each point, following rules\n implemented in Donald Knuth's \u003cem\u003eMetafont\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "Metafont",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Metafont.html",
          "type": "module"
        },
        "index": {
          "description": "Define Diagrams Paths by specifying points and optionally directions and tension Calculate control points to maintain smooth curvature at each point following rules implemented in Donald Knuth Metafont This module is intended to be imported qualified",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "Metafont",
          "package": "diagrams-contrib",
          "partial": "Metafont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflex ps draws a Trail through the points ps, such that at every\n point p &#8714; ps except the endpoints, the Trail is parallel to the\n line from the first to the last point.  This is the same as the\n flex command defined in plain MetaFont.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "flex",
          "package": "diagrams-contrib",
          "signature": "[P2] -\u003e t",
          "source": "src/Diagrams-TwoD-Path-Metafont.html#flex",
          "type": "function"
        },
        "index": {
          "description": "flex ps draws Trail through the points ps such that at every point ps except the endpoints the Trail is parallel to the line from the first to the last point This is the same as the flex command defined in plain MetaFont",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "flex",
          "normalized": "[P]-\u003ea",
          "package": "diagrams-contrib",
          "signature": "[P]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:flex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould you wish to construct the MFPath in some other fashion,\n   fromPath makes a TrailLike directly from the MFPath\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromPath",
          "package": "diagrams-contrib",
          "signature": "MFP -\u003e t",
          "source": "src/Diagrams-TwoD-Path-Metafont.html#fromPath",
          "type": "function"
        },
        "index": {
          "description": "Should you wish to construct the MFPath in some other fashion fromPath makes TrailLike directly from the MFPath",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromPath",
          "normalized": "MFP-\u003ea",
          "package": "diagrams-contrib",
          "partial": "Path",
          "signature": "MFP-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMF.fromString parses a Text value in MetaFont syntax, and\n attempts to return a TrailLike.  Only a subset of Metafont is\n supported; see the tutorial for details.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromString",
          "package": "diagrams-contrib",
          "signature": "Text -\u003e Either ParseError t",
          "source": "src/Diagrams-TwoD-Path-Metafont.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "MF.fromString parses Text value in MetaFont syntax and attempts to return TrailLike Only subset of Metafont is supported see the tutorial for details",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromString",
          "normalized": "Text-\u003eEither ParseError a",
          "package": "diagrams-contrib",
          "partial": "String",
          "signature": "Text-\u003eEither ParseError t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efromStrings takes a list of MetaFont strings, and returns either\n  all errors, or, if there are no parsing errors, a TrailLike for\n  each string.  fromStrings is provided as a convenience because the\n  MetaFont &-join is not supported.  \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e) on the TrailLike is\n  equivalent, with clearer semantics.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromStrings",
          "package": "diagrams-contrib",
          "signature": "[Text] -\u003e Either [ParseError] [t]",
          "source": "src/Diagrams-TwoD-Path-Metafont.html#fromStrings",
          "type": "function"
        },
        "index": {
          "description": "fromStrings takes list of MetaFont strings and returns either all errors or if there are no parsing errors TrailLike for each string fromStrings is provided as convenience because the MetaFont join is not supported mconcat on the TrailLike is equivalent with clearer semantics",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "fromStrings",
          "normalized": "[Text]-\u003eEither[ParseError][a]",
          "package": "diagrams-contrib",
          "partial": "Strings",
          "signature": "[Text]-\u003eEither[ParseError][t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emetafont converts a path defined in the Metafont combinator synax into a\n native Diagrams TrailLike.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "metafont",
          "package": "diagrams-contrib",
          "signature": "MFPathData P -\u003e t",
          "source": "src/Diagrams-TwoD-Path-Metafont.html#metafont",
          "type": "function"
        },
        "index": {
          "description": "metafont converts path defined in the Metafont combinator synax into native Diagrams TrailLike",
          "hierarchy": "Diagrams TwoD Path Metafont",
          "module": "Diagrams.TwoD.Path.Metafont",
          "name": "metafont",
          "normalized": "MFPathData P-\u003ea",
          "package": "diagrams-contrib",
          "signature": "MFPathData P-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:metafont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdds compact aliases for turtle operations, to write code that looks even\n more Turtle-y.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "Aliases",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html",
          "type": "module"
        },
        "index": {
          "description": "Adds compact aliases for turtle operations to write code that looks even more Turtle-y",
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "Aliases",
          "package": "diagrams-contrib",
          "partial": "Aliases",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "bk",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#bk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "bk",
          "normalized": "Double-\u003eTurtle()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:bk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "fd",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#fd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "fd",
          "normalized": "Double-\u003eTurtle()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:fd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "lt",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#lt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "lt",
          "normalized": "Double-\u003eTurtle()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "pd",
          "package": "diagrams-contrib",
          "signature": "Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#pd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "pd",
          "normalized": "Turtle()",
          "package": "diagrams-contrib",
          "signature": "Turtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:pd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "pu",
          "package": "diagrams-contrib",
          "signature": "Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#pu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "pu",
          "normalized": "Turtle()",
          "package": "diagrams-contrib",
          "signature": "Turtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:pu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "rt",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e Turtle ()",
          "source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#rt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Aliases",
          "module": "Diagrams.TwoD.Path.Turtle.Aliases",
          "name": "rt",
          "normalized": "Double-\u003eTurtle()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtle()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:rt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthors     :  Michael Sloan \u003ca\u003eat gmail\u003c/a\u003e, Deepak Jois \u003ca\u003edeepak.jois@gmail.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eA module consisting of core types and functions to represent and operate on\n a \"turtle\".\n\u003c/p\u003e\u003cp\u003eMore info about turtle graphics:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Turtle_graphics\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "Internal",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Authors Michael Sloan at gmail Deepak Jois deepak.jois@gmail.com module consisting of core types and functions to represent and operate on turtle More info about turtle graphics http en.wikipedia.org wiki Turtle graphics",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "Internal",
          "package": "diagrams-contrib",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle attributes associated with the turtle pen\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "PenStyle",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
          "type": "data"
        },
        "index": {
          "description": "Style attributes associated with the turtle pen",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "PenStyle",
          "package": "diagrams-contrib",
          "partial": "Pen Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:PenStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurtle path type that captures a list of paths and the style attributes\n associated with them\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtlePath",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
          "type": "data"
        },
        "index": {
          "description": "Turtle path type that captures list of paths and the style attributes associated with them",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtlePath",
          "package": "diagrams-contrib",
          "partial": "Turtle Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:TurtlePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore turtle data type. A turtle needs to keep track of its current\n position, like its position, heading etc., and all the paths that it has\n traversed so far.\n\u003c/p\u003e\u003cp\u003eWe need to record a new path, everytime an attribute like style, pen position\n etc changes, so that we can separately track styles for each portion of the\n eventual path that the turtle took.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtleState",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "data"
        },
        "index": {
          "description": "Core turtle data type turtle needs to keep track of its current position like its position heading etc and all the paths that it has traversed so far We need to record new path everytime an attribute like style pen position etc changes so that we can separately track styles for each portion of the eventual path that the turtle took",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtleState",
          "package": "diagrams-contrib",
          "partial": "Turtle State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:TurtleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "PenStyle",
          "package": "diagrams-contrib",
          "signature": "PenStyle",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "PenStyle",
          "package": "diagrams-contrib",
          "partial": "Pen Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:PenStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtlePath",
          "package": "diagrams-contrib",
          "signature": "TurtlePath",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtlePath",
          "package": "diagrams-contrib",
          "partial": "Turtle Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:TurtlePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtleState",
          "package": "diagrams-contrib",
          "signature": "TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "TurtleState",
          "package": "diagrams-contrib",
          "partial": "Turtle State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:TurtleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the turtle backward by \u003ccode\u003ex\u003c/code\u003e units\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "backward",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Move the turtle backward by units",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "backward",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "closeCurrent",
          "package": "diagrams-contrib",
          "signature": "TurtleState -\u003e TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#closeCurrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "closeCurrent",
          "normalized": "TurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Current",
          "signature": "TurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:closeCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent style of the pen\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "currPenStyle",
          "package": "diagrams-contrib",
          "signature": "PenStyle",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Current style of the pen",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "currPenStyle",
          "package": "diagrams-contrib",
          "partial": "Pen Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:currPenStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath traversed by the turtle so far, without any style or pen\n attributes changing\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "currTrail",
          "package": "diagrams-contrib",
          "signature": "Located (Trail' Line R2)",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Path traversed by the turtle so far without any style or pen attributes changing",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "currTrail",
          "package": "diagrams-contrib",
          "partial": "Trail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:currTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the turtle forward by \u003ccode\u003ex\u003c/code\u003e units\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "forward",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Move the turtle forward by units",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "forward",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a diagram from a turtle\n\u003c/p\u003e\u003cp\u003eApplies the styles to each trails in \u003ccode\u003epaths\u003c/code\u003e separately and combines them\n into a single diagram\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "getTurtleDiagram",
          "package": "diagrams-contrib",
          "signature": "TurtleState -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#getTurtleDiagram",
          "type": "function"
        },
        "index": {
          "description": "Creates diagram from turtle Applies the styles to each trails in paths separately and combines them into single diagram",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "getTurtleDiagram",
          "normalized": "TurtleState-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Turtle Diagram",
          "signature": "TurtleState-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:getTurtleDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a path from a turtle, ignoring the styles.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "getTurtlePath",
          "package": "diagrams-contrib",
          "signature": "TurtleState -\u003e Path R2",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#getTurtlePath",
          "type": "function"
        },
        "index": {
          "description": "Creates path from turtle ignoring the styles",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "getTurtlePath",
          "normalized": "TurtleState-\u003ePath R",
          "package": "diagrams-contrib",
          "partial": "Turtle Path",
          "signature": "TurtleState-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:getTurtlePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrientation of the turtle in 2D space, given in degrees\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "heading",
          "package": "diagrams-contrib",
          "signature": "Deg",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Orientation of the turtle in space given in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "heading",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:heading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of the pen. \u003ccode\u003eFalse\u003c/code\u003e means that turtle movements will not draw\n anything\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "isPenDown",
          "package": "diagrams-contrib",
          "signature": "Bool",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "State of the pen False means that turtle movements will not draw anything",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "isPenDown",
          "package": "diagrams-contrib",
          "partial": "Pen Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:isPenDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the turtle anti-clockwise (left)\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "left",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Turn the turtle anti-clockwise left",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "left",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of paths along with style information, traversed by the turtle\n previously\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "paths",
          "package": "diagrams-contrib",
          "signature": "[TurtlePath]",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "List of paths along with style information traversed by the turtle previously",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "paths",
          "normalized": "[TurtlePath]",
          "package": "diagrams-contrib",
          "signature": "[TurtlePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:paths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor of pen. Default is \u003ccode\u003eblack\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penColor",
          "package": "diagrams-contrib",
          "signature": "Colour Double",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
          "type": "function"
        },
        "index": {
          "description": "Color of pen Default is black",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penColor",
          "package": "diagrams-contrib",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts the turtle pen in &#8220;Down&#8221; mode. Turtle movements will cause drawing to\n happen\n\u003c/p\u003e\u003cp\u003eDoes nothing if the pen was already down. Otherwise, starts a new trail\n starting at the current position.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penDown",
          "package": "diagrams-contrib",
          "signature": "TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Puts the turtle pen in Down mode Turtle movements will cause drawing to happen Does nothing if the pen was already down Otherwise starts new trail starting at the current position",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penDown",
          "normalized": "TurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Down",
          "signature": "TurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penHop",
          "package": "diagrams-contrib",
          "signature": "TurtleState -\u003e TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#penHop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penHop",
          "normalized": "TurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Hop",
          "signature": "TurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penHop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent position. This is updated everytime the turtle moves\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penPos",
          "package": "diagrams-contrib",
          "signature": "P2",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Current position This is updated everytime the turtle moves",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penPos",
          "package": "diagrams-contrib",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penStyle",
          "package": "diagrams-contrib",
          "signature": "PenStyle",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
          "type": "function"
        },
        "index": {
          "description": "Style",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penStyle",
          "package": "diagrams-contrib",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts the turtle pen in &#8220;Up&#8221; mode. Turtle movements will not draw anything\n\u003c/p\u003e\u003cp\u003eDoes nothing if the pen was already up. Otherwise, it creates a turtle with\n the current trail added to \u003ccode\u003epaths\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penUp",
          "package": "diagrams-contrib",
          "signature": "TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Puts the turtle pen in Up mode Turtle movements will not draw anything Does nothing if the pen was already up Otherwise it creates turtle with the current trail added to paths",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penUp",
          "normalized": "TurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Up",
          "signature": "TurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of pen. Default is 1.0\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penWidth",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
          "type": "function"
        },
        "index": {
          "description": "Width of pen Default is",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "penWidth",
          "package": "diagrams-contrib",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the turtle clockwise (right)\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "right",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Turn the turtle clockwise right",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "right",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the turtle to the given orientation, in degrees\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setHeading",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Turn the turtle to the given orientation in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setHeading",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Heading",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setHeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealias of \u003ccode\u003esetPenColour\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenColor",
          "package": "diagrams-contrib",
          "signature": "Colour Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "alias of setPenColour",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenColor",
          "normalized": "Colour Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Pen Color",
          "signature": "Colour Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a new pen color for turtle.\n\u003c/p\u003e\u003cp\u003eIf pen is down, this adds the current trail to \u003ccode\u003epaths\u003c/code\u003e and starts a new empty\n trail.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenColour",
          "package": "diagrams-contrib",
          "signature": "Colour Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Set new pen color for turtle If pen is down this adds the current trail to paths and starts new empty trail",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenColour",
          "normalized": "Colour Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Pen Colour",
          "signature": "Colour Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the turtle X/Y position.\n\u003c/p\u003e\u003cp\u003eIf pen is down and the current trail is non-empty, this will also add the\n current trail to the \u003ccode\u003epaths\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenPos",
          "package": "diagrams-contrib",
          "signature": "P2-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Set the turtle position If pen is down and the current trail is non-empty this will also add the current trail to the paths field",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenPos",
          "normalized": "P-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Pen Pos",
          "signature": "P-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a new pen width for turtle.\n\u003c/p\u003e\u003cp\u003eIf pen is down, this adds the current trail to \u003ccode\u003epaths\u003c/code\u003e and starts a new empty\n trail.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenWidth",
          "package": "diagrams-contrib",
          "signature": "Double-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Set new pen width for turtle If pen is down this adds the current trail to paths and starts new empty trail",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "setPenWidth",
          "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Pen Width",
          "signature": "Double-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state of turtle. The turtle is located at the origin, at an\n orientation of 0 degrees with its pen position down. The pen style is\n \u003ccode\u003edefaultPenStyle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "startTurtle",
          "package": "diagrams-contrib",
          "signature": "TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#startTurtle",
          "type": "function"
        },
        "index": {
          "description": "The initial state of turtle The turtle is located at the origin at an orientation of degrees with its pen position down The pen style is defaultPenStyle",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "startTurtle",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:startTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the turtle orientation towards a given location.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "towards",
          "package": "diagrams-contrib",
          "signature": "P2-\u003e TurtleState-\u003e TurtleState",
          "type": "function"
        },
        "index": {
          "description": "Sets the turtle orientation towards given location",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "towards",
          "normalized": "P-\u003eTurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "signature": "P-\u003eTurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:towards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints out turtle representation and returns it. Use for debugging\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "traceTurtle",
          "package": "diagrams-contrib",
          "signature": "TurtleState -\u003e TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#traceTurtle",
          "type": "function"
        },
        "index": {
          "description": "Prints out turtle representation and returns it Use for debugging",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "traceTurtle",
          "normalized": "TurtleState-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "TurtleState-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:traceTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "turtleTrail",
          "package": "diagrams-contrib",
          "signature": "Located (Trail R2)",
          "source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
          "type": "function"
        },
        "index": {
          "description": "Path",
          "hierarchy": "Diagrams TwoD Path Turtle Internal",
          "module": "Diagrams.TwoD.Path.Turtle.Internal",
          "name": "turtleTrail",
          "package": "diagrams-contrib",
          "partial": "Trail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:turtleTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStateful domain specific language for diagram paths, modelled after the\n classic \"turtle\" graphics language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "Turtle",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle.html",
          "type": "module"
        },
        "index": {
          "description": "Stateful domain specific language for diagram paths modelled after the classic turtle graphics language",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "Turtle",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "Turtle",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#Turtle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "Turtle",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#t:Turtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "TurtleT",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#TurtleT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "TurtleT",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#t:TurtleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the turtle backward, directly away from the current heading.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "backward",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#backward",
          "type": "function"
        },
        "index": {
          "description": "Move the turtle backward directly away from the current heading",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "backward",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the current path , to the starting position of the current\n trail. Has no effect when the pen position is up.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "closeCurrent",
          "package": "diagrams-contrib",
          "signature": "TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#closeCurrent",
          "type": "function"
        },
        "index": {
          "description": "Closes the current path to the starting position of the current trail Has no effect when the pen position is up",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "closeCurrent",
          "normalized": "TurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Current",
          "signature": "TurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:closeCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the turtle, yielding a diagram.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "drawTurtle",
          "package": "diagrams-contrib",
          "signature": "Turtle a -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#drawTurtle",
          "type": "function"
        },
        "index": {
          "description": "Run the turtle yielding diagram",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "drawTurtle",
          "normalized": "Turtle a-\u003eDiagram b R",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "Turtle a-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:drawTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general way to run the turtle.  Returns a computation in\n   the underlying monad \u003ccode\u003em\u003c/code\u003e yielding the final diagram.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "drawTurtleT",
          "package": "diagrams-contrib",
          "signature": "TurtleT m a -\u003e m (Diagram b R2)",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#drawTurtleT",
          "type": "function"
        },
        "index": {
          "description": "more general way to run the turtle Returns computation in the underlying monad yielding the final diagram",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "drawTurtleT",
          "normalized": "TurtleT a b-\u003ea(Diagram c R)",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "TurtleT m a-\u003em(Diagram b R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:drawTurtleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the turtle forward, along the current heading.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "forward",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#forward",
          "type": "function"
        },
        "index": {
          "description": "Move the turtle forward along the current heading",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "forward",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current turtle angle, in degrees.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "heading",
          "package": "diagrams-contrib",
          "signature": "TurtleT m Double",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#heading",
          "type": "function"
        },
        "index": {
          "description": "Get the current turtle angle in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "heading",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:heading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries whether the pen is currently drawing a path or not.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "isDown",
          "package": "diagrams-contrib",
          "signature": "TurtleT m Bool",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#isDown",
          "type": "function"
        },
        "index": {
          "description": "Queries whether the pen is currently drawing path or not",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "isDown",
          "package": "diagrams-contrib",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:isDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current heading to the left by the specified angle in degrees.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "left",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#left",
          "type": "function"
        },
        "index": {
          "description": "Modify the current heading to the left by the specified angle in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "left",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds the current path, and enters into \u003ca\u003epenDown\u003c/a\u003e mode\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penDown",
          "package": "diagrams-contrib",
          "signature": "TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#penDown",
          "type": "function"
        },
        "index": {
          "description": "Ends the current path and enters into penDown mode",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penDown",
          "normalized": "TurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Down",
          "signature": "TurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new trail at current position\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penHop",
          "package": "diagrams-contrib",
          "signature": "TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#penHop",
          "type": "function"
        },
        "index": {
          "description": "Start new trail at current position",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penHop",
          "normalized": "TurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Hop",
          "signature": "TurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penHop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds the current path, and enters into \u003ca\u003epenUp\u003c/a\u003e mode\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penUp",
          "package": "diagrams-contrib",
          "signature": "TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#penUp",
          "type": "function"
        },
        "index": {
          "description": "Ends the current path and enters into penUp mode",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "penUp",
          "normalized": "TurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Up",
          "signature": "TurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current turtle X/Y position.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "pos",
          "package": "diagrams-contrib",
          "signature": "TurtleT m P2",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#pos",
          "type": "function"
        },
        "index": {
          "description": "Get the current turtle position",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "pos",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current heading to the right by the specified angle in degrees.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "right",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#right",
          "type": "function"
        },
        "index": {
          "description": "Modify the current heading to the right by the specified angle in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "right",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the turtle, yielding the final turtle state.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "runTurtle",
          "package": "diagrams-contrib",
          "signature": "Turtle a -\u003e TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#runTurtle",
          "type": "function"
        },
        "index": {
          "description": "Run the turtle yielding the final turtle state",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "runTurtle",
          "normalized": "Turtle a-\u003eTurtleState",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "Turtle a-\u003eTurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:runTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general way to run the turtle. Returns a computation in the\n underlying monad \u003ccode\u003em\u003c/code\u003e yielding the final turtle state.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "runTurtleT",
          "package": "diagrams-contrib",
          "signature": "TurtleT m a -\u003e m TurtleState",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#runTurtleT",
          "type": "function"
        },
        "index": {
          "description": "more general way to run the turtle Returns computation in the underlying monad yielding the final turtle state",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "runTurtleT",
          "normalized": "TurtleT a b-\u003ea TurtleState",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "TurtleT m a-\u003em TurtleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:runTurtleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current turtle angle, in degrees.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setHeading",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#setHeading",
          "type": "function"
        },
        "index": {
          "description": "Set the current turtle angle in degrees",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setHeading",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Heading",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setHeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the pen color\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPenColor",
          "package": "diagrams-contrib",
          "signature": "Colour Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#setPenColor",
          "type": "function"
        },
        "index": {
          "description": "Sets the pen color",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPenColor",
          "normalized": "Colour Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Pen Color",
          "signature": "Colour Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPenColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the pen size\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPenWidth",
          "package": "diagrams-contrib",
          "signature": "Double -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#setPenWidth",
          "type": "function"
        },
        "index": {
          "description": "Sets the pen size",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPenWidth",
          "normalized": "Double-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Pen Width",
          "signature": "Double-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPenWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current turtle X/Y position.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPos",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#setPos",
          "type": "function"
        },
        "index": {
          "description": "Set the current turtle position",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "setPos",
          "normalized": "P-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "partial": "Pos",
          "signature": "P-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the turtle, ignoring any pen style commands and yielding a\n   2D path.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "sketchTurtle",
          "package": "diagrams-contrib",
          "signature": "Turtle a -\u003e Path R2",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#sketchTurtle",
          "type": "function"
        },
        "index": {
          "description": "Run the turtle ignoring any pen style commands and yielding path",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "sketchTurtle",
          "normalized": "Turtle a-\u003ePath R",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "Turtle a-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:sketchTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general way to run the turtle. Returns a computation in\n   the underlying monad \u003ccode\u003em\u003c/code\u003e, ignoring any pen style commands and\n   yielding a 2D path.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "sketchTurtleT",
          "package": "diagrams-contrib",
          "signature": "TurtleT m a -\u003e m (Path R2)",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#sketchTurtleT",
          "type": "function"
        },
        "index": {
          "description": "more general way to run the turtle Returns computation in the underlying monad ignoring any pen style commands and yielding path",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "sketchTurtleT",
          "normalized": "TurtleT a b-\u003ea(Path R)",
          "package": "diagrams-contrib",
          "partial": "Turtle",
          "signature": "TurtleT m a-\u003em(Path R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:sketchTurtleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the heading towards a given location.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "towards",
          "package": "diagrams-contrib",
          "signature": "P2 -\u003e TurtleT m ()",
          "source": "src/Diagrams-TwoD-Path-Turtle.html#towards",
          "type": "function"
        },
        "index": {
          "description": "Sets the heading towards given location",
          "hierarchy": "Diagrams TwoD Path Turtle",
          "module": "Diagrams.TwoD.Path.Turtle",
          "name": "towards",
          "normalized": "P-\u003eTurtleT a()",
          "package": "diagrams-contrib",
          "signature": "P-\u003eTurtleT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:towards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of Sunburst Partitions. A radial view of a Treemap.\n\u003c/p\u003e\u003cp\u003eThe partitions are created without examining the contents of the tree nodes\n which allows us to create a sunburst for any \u003ccode\u003eTree a\u003c/code\u003e. As a consequence we cannot\n base the size or color of the sections on the data in the tree, but only\n on depth and number of children. Of course the code could easily be adapted\n to handle more specific tree data.\n\u003c/p\u003e\u003cp\u003eSee John Stasko, Richard Catrambone, \"An evaluation of space-filling\n information visualizations for depicting hierarchical structures\", 2000.\n \u003ca\u003ehttp://www.cc.gatech.edu/~john.stasko/papers/ijhcs00.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "Sunburst",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Sunburst.html",
          "type": "module"
        },
        "index": {
          "description": "Generation of Sunburst Partitions radial view of Treemap The partitions are created without examining the contents of the tree nodes which allows us to create sunburst for any Tree As consequence we cannot base the size or color of the sections on the data in the tree but only on depth and number of children Of course the code could easily be adapted to handle more specific tree data See John Stasko Richard Catrambone An evaluation of space-filling information visualizations for depicting hierarchical structures http www.cc.gatech.edu john.stasko papers ijhcs00.pdf",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "Sunburst",
          "package": "diagrams-contrib",
          "partial": "Sunburst",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Sunburst",
          "name": "SunburstOpts",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "SunburstOpts",
          "package": "diagrams-contrib",
          "partial": "Sunburst Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#t:SunburstOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Sunburst",
          "name": "SunburstOpts",
          "package": "diagrams-contrib",
          "signature": "SunburstOpts",
          "source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "SunburstOpts",
          "package": "diagrams-contrib",
          "partial": "Sunburst Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:SunburstOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor list one for each ring.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_colors",
          "package": "diagrams-contrib",
          "signature": "[Colour Double]",
          "source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
          "type": "function"
        },
        "index": {
          "description": "Color list one for each ring",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_colors",
          "normalized": "[Colour Double]",
          "package": "diagrams-contrib",
          "signature": "[Colour Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_colors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative size of the root circle, usually 1.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_radius",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
          "type": "function"
        },
        "index": {
          "description": "Relative size of the root circle usually",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_radius",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative width of the sections.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_sectionWidth",
          "package": "diagrams-contrib",
          "signature": "Double",
          "source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
          "type": "function"
        },
        "index": {
          "description": "Relative width of the sections",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "_sectionWidth",
          "package": "diagrams-contrib",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_sectionWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Sunburst",
          "name": "colors",
          "package": "diagrams-contrib",
          "signature": "Lens' SunburstOpts [Colour Double]",
          "source": "src/Diagrams-TwoD-Sunburst.html#colors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "colors",
          "normalized": "Lens' SunburstOpts[Colour Double]",
          "package": "diagrams-contrib",
          "signature": "Lens' SunburstOpts[Colour Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:colors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Sunburst",
          "name": "radius",
          "package": "diagrams-contrib",
          "signature": "Lens' SunburstOpts Double",
          "source": "src/Diagrams-TwoD-Sunburst.html#radius",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "radius",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sectionWidth",
          "package": "diagrams-contrib",
          "signature": "Lens' SunburstOpts Double",
          "source": "src/Diagrams-TwoD-Sunburst.html#sectionWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sectionWidth",
          "package": "diagrams-contrib",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sectionWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esunburst\u003c/code\u003e with default opts\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Sunburst\n import Data.Tree (unfoldTree)\n aTree = unfoldTree (\\n -\u003e (0, replicate n (n-1))) 6\n sunburstEx = sunburst aTree # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Sunburst_sunburstEx.svg#diagram=sunburstEx&width=500\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sunburst",
          "package": "diagrams-contrib",
          "signature": "Tree a -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Sunburst.html#sunburst",
          "type": "function"
        },
        "index": {
          "description": "sunburst with default opts import Diagrams.TwoD.Sunburst import Data.Tree unfoldTree aTree unfoldTree replicate n-1 sunburstEx sunburst aTree pad",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sunburst",
          "normalized": "Tree a-\u003eDiagram b R",
          "package": "diagrams-contrib",
          "signature": "Tree a-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sunburst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake any \u003ccode\u003eTree a\u003c/code\u003e and \u003ccode\u003eSunburstOpts\u003c/code\u003e and make a sunburst partition.\n   Basically a treemap with a radial layout.\n   The root is the center of the sunburst and its circumference is divided\n   evenly according to the number of child nodes it has. Then each of those\n   sections is treated the same way.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sunburst'",
          "package": "diagrams-contrib",
          "signature": "SunburstOpts -\u003e Tree a -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Sunburst.html#sunburst%27",
          "type": "function"
        },
        "index": {
          "description": "Take any Tree and SunburstOpts and make sunburst partition Basically treemap with radial layout The root is the center of the sunburst and its circumference is divided evenly according to the number of child nodes it has Then each of those sections is treated the same way",
          "hierarchy": "Diagrams TwoD Sunburst",
          "module": "Diagrams.TwoD.Sunburst",
          "name": "sunburst'",
          "normalized": "SunburstOpts-\u003eTree a-\u003eDiagram b R",
          "package": "diagrams-contrib",
          "signature": "SunburstOpts-\u003eTree a-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sunburst-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for generating and drawing plane tilings made of regular\n polygons.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tilings",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for generating and drawing plane tilings made of regular polygons",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tilings",
          "package": "diagrams-contrib",
          "partial": "Tilings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn edge is represented by a pair of vertices.  Do not use the\n   \u003ccode\u003eEdge\u003c/code\u003e constructor directly; use \u003ccode\u003e\u003ca\u003emkEdge\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Edge",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "An edge is represented by pair of vertices Do not use the Edge constructor directly use mkEdge instead",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Edge",
          "package": "diagrams-contrib",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polygon is represented by a list of its vertices, in\n   counterclockwise order.  However, the \u003ccode\u003eEq\u003c/code\u003e and \u003ccode\u003eOrd\u003c/code\u003e instances\n   for polygons ignore the order.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Polygon",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#Polygon",
          "type": "newtype"
        },
        "index": {
          "description": "polygon is represented by list of its vertices in counterclockwise order However the Eq and Ord instances for polygons ignore the order",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Polygon",
          "package": "diagrams-contrib",
          "partial": "Polygon",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Q2",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#Q2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Q2",
          "package": "diagrams-contrib",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Q2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eQ236 a b c d\u003c/code\u003e represents \u003ccode\u003ea + b sqrt(2) + c sqrt(3) + d\n   sqrt(6)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Q236",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#Q236",
          "type": "data"
        },
        "index": {
          "description": "Q236 represents sqrt sqrt sqrt",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Q236",
          "package": "diagrams-contrib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Q236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tiling, represented as a sort of zipper. \u003ccode\u003ecurConfig\u003c/code\u003e indicates\n   the polygons around the current vertex, in couterclockwise order\n   starting from the edge along which we entered the vertex.\n   \u003ccode\u003efollow\u003c/code\u003e allows one to move along an edge to an adjacent vertex,\n   where the edges are numbered counterclockwise from zero,\n   beginning with the edge along which we entered the current\n   vertex.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tiling",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#Tiling",
          "type": "data"
        },
        "index": {
          "description": "tiling represented as sort of zipper curConfig indicates the polygons around the current vertex in couterclockwise order starting from the edge along which we entered the vertex follow allows one to move along an edge to an adjacent vertex where the edges are numbered counterclockwise from zero beginning with the edge along which we entered the current vertex",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tiling",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Tiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eTilingM\u003c/code\u003e monad tracks a \u003ccode\u003eTilingState\u003c/code\u003e, and can output\n   elements of some monoid \u003ccode\u003ew\u003c/code\u003e along the way.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingM",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingM",
          "type": "type"
        },
        "index": {
          "description": "The TilingM monad tracks TilingState and can output elements of some monoid along the way",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingM",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular polygons which may appear in a tiling of the plane.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingPoly",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "data"
        },
        "index": {
          "description": "Regular polygons which may appear in tiling of the plane",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingPoly",
          "package": "diagrams-contrib",
          "partial": "Tiling Poly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state maintained while generating a tiling, recording which\n   vertices have been visited and which edges and polygons have been\n   drawn.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingState",
          "package": "diagrams-contrib",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingState",
          "type": "data"
        },
        "index": {
          "description": "The state maintained while generating tiling recording which vertices have been visited and which edges and polygons have been drawn",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TilingState",
          "package": "diagrams-contrib",
          "partial": "Tiling State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Dodecagon",
          "package": "diagrams-contrib",
          "signature": "Dodecagon",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Dodecagon",
          "package": "diagrams-contrib",
          "partial": "Dodecagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Dodecagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Hexagon",
          "package": "diagrams-contrib",
          "signature": "Hexagon",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Hexagon",
          "package": "diagrams-contrib",
          "partial": "Hexagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Hexagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Octagon",
          "package": "diagrams-contrib",
          "signature": "Octagon",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Octagon",
          "package": "diagrams-contrib",
          "partial": "Octagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Octagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Polygon",
          "package": "diagrams-contrib",
          "signature": "Polygon",
          "source": "src/Diagrams-TwoD-Tilings.html#Polygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Polygon",
          "package": "diagrams-contrib",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Square",
          "package": "diagrams-contrib",
          "signature": "Square",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Square",
          "package": "diagrams-contrib",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "TP",
          "package": "diagrams-contrib",
          "signature": "TP",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "TP",
          "package": "diagrams-contrib",
          "partial": "TP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:TP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tiling",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#Tiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Tiling",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Tiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "Triangle",
          "package": "diagrams-contrib",
          "signature": "Triangle",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "Triangle",
          "package": "diagrams-contrib",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "curConfig",
          "package": "diagrams-contrib",
          "signature": "[TilingPoly]",
          "source": "src/Diagrams-TwoD-Tilings.html#Tiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "curConfig",
          "normalized": "[TilingPoly]",
          "package": "diagrams-contrib",
          "partial": "Config",
          "signature": "[TilingPoly]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:curConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an edge with the given style.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawEdge",
          "package": "diagrams-contrib",
          "signature": "Style R2 -\u003e Edge -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Tilings.html#drawEdge",
          "type": "function"
        },
        "index": {
          "description": "Draw an edge with the given style",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawEdge",
          "normalized": "Style R-\u003eEdge-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Edge",
          "signature": "Style R-\u003eEdge-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a polygon with the given style.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawPoly",
          "package": "diagrams-contrib",
          "signature": "(Polygon -\u003e Style R2) -\u003e Polygon -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Tilings.html#drawPoly",
          "type": "function"
        },
        "index": {
          "description": "Draw polygon with the given style",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawPoly",
          "normalized": "(Polygon-\u003eStyle R)-\u003ePolygon-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Poly",
          "signature": "(Polygon-\u003eStyle R)-\u003ePolygon-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tiling, with a given width and height and default colors\n   for the polygons.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawTiling",
          "package": "diagrams-contrib",
          "signature": "Tiling -\u003e Double -\u003e Double -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Tilings.html#drawTiling",
          "type": "function"
        },
        "index": {
          "description": "Draw tiling with given width and height and default colors for the polygons",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawTiling",
          "normalized": "Tiling-\u003eDouble-\u003eDouble-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "signature": "Tiling-\u003eDouble-\u003eDouble-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawTiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a tiling with customizable styles for the polygons.  This is\n   just an example, which you can use as the basis of your own\n   tiling-drawing routine.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawTilingStyled",
          "package": "diagrams-contrib",
          "signature": "Style R2 -\u003e (Polygon -\u003e Style R2) -\u003e Tiling -\u003e Double -\u003e Double -\u003e Diagram b R2",
          "source": "src/Diagrams-TwoD-Tilings.html#drawTilingStyled",
          "type": "function"
        },
        "index": {
          "description": "Draw tiling with customizable styles for the polygons This is just an example which you can use as the basis of your own tiling-drawing routine",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "drawTilingStyled",
          "normalized": "Style R-\u003e(Polygon-\u003eStyle R)-\u003eTiling-\u003eDouble-\u003eDouble-\u003eDiagram a R",
          "package": "diagrams-contrib",
          "partial": "Tiling Styled",
          "signature": "Style R-\u003e(Polygon-\u003eStyle R)-\u003eTiling-\u003eDouble-\u003eDouble-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawTilingStyled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "follow",
          "package": "diagrams-contrib",
          "signature": "Int -\u003e Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#Tiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "follow",
          "normalized": "Int-\u003eTiling",
          "package": "diagrams-contrib",
          "signature": "Int-\u003eTiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:follow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "generateTiling",
          "package": "diagrams-contrib",
          "signature": "Tiling-\u003e Q2-\u003e Q2-\u003e (Q2 -\u003e Bool)-\u003e (Edge -\u003e w)-\u003e (Polygon -\u003e w)-\u003e w",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "generateTiling",
          "normalized": "Tiling-\u003eQ-\u003eQ-\u003e(Q-\u003eBool)-\u003e(Edge-\u003ea)-\u003e(Polygon-\u003ea)-\u003ea",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "signature": "Tiling-\u003eQ-\u003eQ-\u003e(Q-\u003eBool)-\u003e(Edge-\u003ew)-\u003e(Polygon-\u003ew)-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:generateTiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "initTilingState",
          "package": "diagrams-contrib",
          "signature": "TilingState",
          "source": "src/Diagrams-TwoD-Tilings.html#initTilingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "initTilingState",
          "package": "diagrams-contrib",
          "partial": "Tiling State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:initTilingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a tiling with the same 3 polygons surrounding each vertex.\n   The argument is the number of sides of the polygons surrounding a vertex.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "mk3Tiling",
          "package": "diagrams-contrib",
          "signature": "[Int] -\u003e Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#mk3Tiling",
          "type": "function"
        },
        "index": {
          "description": "Create tiling with the same polygons surrounding each vertex The argument is the number of sides of the polygons surrounding vertex",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "mk3Tiling",
          "normalized": "[Int]-\u003eTiling",
          "package": "diagrams-contrib",
          "partial": "Tiling",
          "signature": "[Int]-\u003eTiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:mk3Tiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for \u003ccode\u003eEdge\u003c/code\u003e, which puts the vertices in a\n   canonical order.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "mkEdge",
          "package": "diagrams-contrib",
          "signature": "Q2 -\u003e Q2 -\u003e Edge",
          "source": "src/Diagrams-TwoD-Tilings.html#mkEdge",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for Edge which puts the vertices in canonical order",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "mkEdge",
          "normalized": "Q-\u003eQ-\u003eEdge",
          "package": "diagrams-contrib",
          "partial": "Edge",
          "signature": "Q-\u003eQ-\u003eEdge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:mkEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyColor",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e Colour a",
          "source": "src/Diagrams-TwoD-Tilings.html#polyColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyColor",
          "normalized": "TilingPoly-\u003eColour a",
          "package": "diagrams-contrib",
          "partial": "Color",
          "signature": "TilingPoly-\u003eColour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosine of a polygon's internal angle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyCos",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e Q236",
          "source": "src/Diagrams-TwoD-Tilings.html#polyCos",
          "type": "function"
        },
        "index": {
          "description": "Cosine of polygon internal angle",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyCos",
          "normalized": "TilingPoly-\u003eQ",
          "package": "diagrams-contrib",
          "partial": "Cos",
          "signature": "TilingPoly-\u003eQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyCos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate by polygon external angle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyExtRotation",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e Q2 -\u003e Q2",
          "source": "src/Diagrams-TwoD-Tilings.html#polyExtRotation",
          "type": "function"
        },
        "index": {
          "description": "Rotate by polygon external angle",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyExtRotation",
          "normalized": "TilingPoly-\u003eQ-\u003eQ",
          "package": "diagrams-contrib",
          "partial": "Ext Rotation",
          "signature": "TilingPoly-\u003eQ-\u003eQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyExtRotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyFromSides",
          "package": "diagrams-contrib",
          "signature": "a -\u003e TilingPoly",
          "source": "src/Diagrams-TwoD-Tilings.html#polyFromSides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyFromSides",
          "normalized": "a-\u003eTilingPoly",
          "package": "diagrams-contrib",
          "partial": "From Sides",
          "signature": "a-\u003eTilingPoly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyFromSides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate by polygon internal angle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyRotation",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e Q2 -\u003e Q2",
          "source": "src/Diagrams-TwoD-Tilings.html#polyRotation",
          "type": "function"
        },
        "index": {
          "description": "Rotate by polygon internal angle",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polyRotation",
          "normalized": "TilingPoly-\u003eQ-\u003eQ",
          "package": "diagrams-contrib",
          "partial": "Rotation",
          "signature": "TilingPoly-\u003eQ-\u003eQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyRotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "polySides",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e a",
          "source": "src/Diagrams-TwoD-Tilings.html#polySides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polySides",
          "normalized": "TilingPoly-\u003ea",
          "package": "diagrams-contrib",
          "partial": "Sides",
          "signature": "TilingPoly-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polySides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSine of a polygon's internal angle.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polySin",
          "package": "diagrams-contrib",
          "signature": "TilingPoly -\u003e Q236",
          "source": "src/Diagrams-TwoD-Tilings.html#polySin",
          "type": "function"
        },
        "index": {
          "description": "Sine of polygon internal angle",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polySin",
          "normalized": "TilingPoly-\u003eQ",
          "package": "diagrams-contrib",
          "partial": "Sin",
          "signature": "TilingPoly-\u003eQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polySin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "polygonVertices",
          "package": "diagrams-contrib",
          "signature": "[Q2]",
          "source": "src/Diagrams-TwoD-Tilings.html#Polygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "polygonVertices",
          "normalized": "[Q]",
          "package": "diagrams-contrib",
          "partial": "Vertices",
          "signature": "[Q]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polygonVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "rot",
          "package": "diagrams-contrib",
          "signature": "a -\u003e [t] -\u003e [t]",
          "source": "src/Diagrams-TwoD-Tilings.html#rot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "rot",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "diagrams-contrib",
          "signature": "a-\u003e[t]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt2",
          "package": "diagrams-contrib",
          "signature": "Q236",
          "source": "src/Diagrams-TwoD-Tilings.html#rt2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt2",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt3",
          "package": "diagrams-contrib",
          "signature": "Q236",
          "source": "src/Diagrams-TwoD-Tilings.html#rt3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt3",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt6",
          "package": "diagrams-contrib",
          "signature": "Q236",
          "source": "src/Diagrams-TwoD-Tilings.html#rt6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "rt6",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a tiling where every vertex is the same up to rotation and\n   translation (but \u003cem\u003enot\u003c/em\u003e reflection).  Arbitrarily pick one of the\n   edges emanating from a vertex and number the edges\n   counterclockwise starting with 0 for the chosen edge.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "semiregular",
          "package": "diagrams-contrib",
          "signature": "[Int]-\u003e [Int]-\u003e Tiling",
          "type": "function"
        },
        "index": {
          "description": "Create tiling where every vertex is the same up to rotation and translation but not reflection Arbitrarily pick one of the edges emanating from vertex and number the edges counterclockwise starting with for the chosen edge",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "semiregular",
          "normalized": "[Int]-\u003e[Int]-\u003eTiling",
          "package": "diagrams-contrib",
          "signature": "[Int]-\u003e[Int]-\u003eTiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:semiregular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3D.svg#diagram=t3D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t31212D.svg#diagram=t31212D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t31212",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t31212",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t31212",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t31212"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33336LD.svg#diagram=t33336LD&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33336L",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t33336L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33336L",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33336L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33336RD.svg#diagram=t33336RD&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33336R",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t33336R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33336R",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33336R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33344D.svg#diagram=t33344D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33344",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t33344",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33344",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33344"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33434D.svg#diagram=t33434D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33434",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t33434",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t33434",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33434"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3464D.svg#diagram=t3464D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3464",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t3464",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3464",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3464"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3636D.svg#diagram=t3636D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3636",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t3636",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t3636",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3636"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t4D.svg#diagram=t4D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t4",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t4",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t4612D.svg#diagram=t4612D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t4612",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t4612",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t4612",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t4612"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t488D.svg#diagram=t488D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t488",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t488",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t488",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t488"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t6D.svg#diagram=t6D&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t6",
          "package": "diagrams-contrib",
          "signature": "Tiling",
          "source": "src/Diagrams-TwoD-Tilings.html#t6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "t6",
          "package": "diagrams-contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eQ236\u003c/code\u003e value to a \u003ccode\u003eDouble\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.TwoD.Tilings",
          "name": "toDouble",
          "package": "diagrams-contrib",
          "signature": "Q236 -\u003e Double",
          "source": "src/Diagrams-TwoD-Tilings.html#toDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert Q236 value to Double",
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "toDouble",
          "normalized": "Q-\u003eDouble",
          "package": "diagrams-contrib",
          "partial": "Double",
          "signature": "Q-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "toP2",
          "package": "diagrams-contrib",
          "signature": "Q2 -\u003e P2",
          "source": "src/Diagrams-TwoD-Tilings.html#toP2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "toP2",
          "normalized": "Q-\u003eP",
          "package": "diagrams-contrib",
          "signature": "Q-\u003eP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "toR2",
          "package": "diagrams-contrib",
          "signature": "Q2 -\u003e R2",
          "source": "src/Diagrams-TwoD-Tilings.html#toR2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "toR2",
          "normalized": "Q-\u003eR",
          "package": "diagrams-contrib",
          "signature": "Q-\u003eR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedEdges",
          "package": "diagrams-contrib",
          "signature": "Set Edge",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedEdges",
          "package": "diagrams-contrib",
          "partial": "Edges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedPolygons",
          "package": "diagrams-contrib",
          "signature": "Set Polygon",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedPolygons",
          "package": "diagrams-contrib",
          "partial": "Polygons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedPolygons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedVertices",
          "package": "diagrams-contrib",
          "signature": "Set Q2",
          "source": "src/Diagrams-TwoD-Tilings.html#TilingState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams TwoD Tilings",
          "module": "Diagrams.TwoD.Tilings",
          "name": "visitedVertices",
          "package": "diagrams-contrib",
          "partial": "Vertices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedVertices"
      }
    }
  ]
]