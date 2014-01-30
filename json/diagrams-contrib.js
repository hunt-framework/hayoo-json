[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Color-HSV.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with color in HSV space.\n\u003c/p\u003e\u003cp\u003eRight now, the only utility is a function for blending colors in\n HSV space.  This has the effect of \"travelling around the color\n wheel\", which can be especially nice when one wants to blend\n smoothly from one color to another (blending in RGB space can tend\n to travel across some icky brown/grey colors).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Color.HSV",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Color-HSV.html",
        "fct-type": "module",
        "title": "HSV"
      },
      "index": {
        "description": "Utilities for working with color in HSV space Right now the only utility is function for blending colors in HSV space This has the effect of travelling around the color wheel which can be especially nice when one wants to blend smoothly from one color to another blending in RGB space can tend to travel across some icky brown grey colors",
        "hierarchy": "Diagrams Color HSV",
        "module": "Diagrams.Color.HSV",
        "name": "HSV",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "HSV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Color-HSV.html#v:hsvBlend",
      "description": {
        "fct-descr": "\u003cp\u003eBlend two colors in HSV space---that is, linearly interpolate\n   between their hues, saturations, and values independently\n   (wrapping around appropriately in the case of hue).  In\n   particular, \u003ccode\u003ehsvBlend a c1 c2\u003c/code\u003e is like doing \u003ccode\u003e(a-1)*c1 + a*c2\u003c/code\u003e in\n   HSV space.  That is, a parameter of \u003ccode\u003e0\u003c/code\u003e results in only the first\n   color; \u003ccode\u003e1\u003c/code\u003e results in only the second color; and anything in\n   between results in a blend.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Color.HSV",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Scalar a -\u003e Colour a -\u003e Colour a -\u003e Colour a",
        "fct-source": "src/Diagrams-Color-HSV.html#hsvBlend",
        "fct-type": "function",
        "title": "hsvBlend"
      },
      "index": {
        "description": "Blend two colors in HSV space---that is linearly interpolate between their hues saturations and values independently wrapping around appropriately in the case of hue In particular hsvBlend c1 c2 is like doing a-1 c1 c2 in HSV space That is parameter of results in only the first color results in only the second color and anything in between results in blend",
        "hierarchy": "Diagrams Color HSV",
        "module": "Diagrams.Color.HSV",
        "name": "hsvBlend",
        "normalized": "Scalar a-\u003eColour a-\u003eColour a-\u003eColour a",
        "package": "diagrams-contrib",
        "partial": "Blend",
        "signature": "Scalar a-\u003eColour a-\u003eColour a-\u003eColour a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSource code for creating the diagrams logo.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_Example_Logo_diaLogo.svg#diagram=diaLogo&height=100\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Example-Logo.html",
        "fct-type": "module",
        "title": "Logo"
      },
      "index": {
        "description": "Source code for creating the diagrams logo",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "Logo",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Logo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:a1",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "b",
        "fct-source": "src/Diagrams-Example-Logo.html#a1",
        "fct-type": "function",
        "title": "a1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "a1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:a2",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "QDiagram b R2 m",
        "fct-source": "src/Diagrams-Example-Logo.html#a2",
        "fct-type": "function",
        "title": "a2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "a2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:aTree",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "BTree ()",
        "fct-source": "src/Diagrams-Example-Logo.html#aTree",
        "fct-type": "function",
        "title": "aTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "aTree",
        "normalized": "BTree()",
        "package": "diagrams-contrib",
        "partial": "Tree",
        "signature": "BTree()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:d",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-Example-Logo.html#d",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "d",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:dot",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double -\u003e b",
        "fct-source": "src/Diagrams-Example-Logo.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "dot",
        "normalized": "Colour Double-\u003ea",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Colour Double-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:g",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-Example-Logo.html#g",
        "fct-type": "function",
        "title": "g"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "g",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:gbkg",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "QDiagram b R2 m",
        "fct-source": "src/Diagrams-Example-Logo.html#gbkg",
        "fct-type": "function",
        "title": "gbkg"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "gbkg",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:grid",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a",
        "fct-source": "src/Diagrams-Example-Logo.html#grid",
        "fct-type": "function",
        "title": "grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "grid",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:i",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "QDiagram b R2 m",
        "fct-source": "src/Diagrams-Example-Logo.html#i",
        "fct-type": "function",
        "title": "i"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "i",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:ico_d",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-Example-Logo.html#ico_d",
        "fct-type": "function",
        "title": "ico_d"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "ico_d",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:logo",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-Example-Logo.html#logo",
        "fct-type": "function",
        "title": "logo"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "logo",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:m",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-Example-Logo.html#m",
        "fct-type": "function",
        "title": "m"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "m",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:ps",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[P2]",
        "fct-source": "src/Diagrams-Example-Logo.html#ps",
        "fct-type": "function",
        "title": "ps"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "ps",
        "normalized": "[P]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[P]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:r",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "QDiagram b R2 Any",
        "fct-source": "src/Diagrams-Example-Logo.html#r",
        "fct-type": "function",
        "title": "r"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "r",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:s",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "b",
        "fct-source": "src/Diagrams-Example-Logo.html#s",
        "fct-type": "function",
        "title": "s"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "s",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Example-Logo.html#v:sierpinski",
      "description": {
        "fct-module": "Diagrams.Example.Logo",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e a1",
        "fct-source": "src/Diagrams-Example-Logo.html#sierpinski",
        "fct-type": "function",
        "title": "sierpinski"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Example Logo",
        "module": "Diagrams.Example.Logo",
        "name": "sierpinski",
        "normalized": "a-\u003ea",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn algorithm for filling space in a fashion akin to word-wrapping.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Layout.Wrap",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Layout-Wrap.html",
        "fct-type": "module",
        "title": "Wrap"
      },
      "index": {
        "description": "An algorithm for filling space in fashion akin to word-wrapping",
        "hierarchy": "Diagrams Layout Wrap",
        "module": "Diagrams.Layout.Wrap",
        "name": "Wrap",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapDiagram",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewrapDiagram\u003c/code\u003e post-processes the results of \u003ccode\u003ewrapOutside\u003c/code\u003e /\n   \u003ccode\u003ewrapInside\u003c/code\u003e into a Diagram of the result.  This only works when\n   applying them to a list of diagrams.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Layout.Wrap",
        "fct-package": "diagrams-contrib",
        "fct-signature": "([(v, Diagram b v)], [Diagram b v]) -\u003e Diagram b v",
        "fct-source": "src/Diagrams-Layout-Wrap.html#wrapDiagram",
        "fct-type": "function",
        "title": "wrapDiagram"
      },
      "index": {
        "description": "wrapDiagram post-processes the results of wrapOutside wrapInside into Diagram of the result This only works when applying them to list of diagrams",
        "hierarchy": "Diagrams Layout Wrap",
        "module": "Diagrams.Layout.Wrap",
        "name": "wrapDiagram",
        "normalized": "([(a,Diagram b a)],[Diagram b a])-\u003eDiagram b a",
        "package": "diagrams-contrib",
        "partial": "Diagram",
        "signature": "([(v,Diagram b v)],[Diagram b v])-\u003eDiagram b v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapInside",
      "description": {
        "fct-descr": "\u003cp\u003efillInside greedily wraps content to fill a space defined by a\n   predicate.  It is passed a list of vectors which express the\n   order of dimensions to be filled.  In other words, wrapping RTL\n   text is done by passing in [unitX, unitY], to first exhaust\n   space horizontally, and then vertically.\n\u003c/p\u003e\u003cp\u003eNote that this function does not guarantee that there are not\n   points inside each positioned item for which the predicate is\n   False.  Instead, only the corners of the bounds, along each axii,\n   are used.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Layout.Wrap",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(Point v -\u003e Bool) -\u003e [v] -\u003e Point v -\u003e [a] -\u003e ([(v, a)], [a])",
        "fct-source": "src/Diagrams-Layout-Wrap.html#wrapInside",
        "fct-type": "function",
        "title": "wrapInside"
      },
      "index": {
        "description": "fillInside greedily wraps content to fill space defined by predicate It is passed list of vectors which express the order of dimensions to be filled In other words wrapping RTL text is done by passing in unitX unitY to first exhaust space horizontally and then vertically Note that this function does not guarantee that there are not points inside each positioned item for which the predicate is False Instead only the corners of the bounds along each axii are used",
        "hierarchy": "Diagrams Layout Wrap",
        "module": "Diagrams.Layout.Wrap",
        "name": "wrapInside",
        "normalized": "(Point a-\u003eBool)-\u003e[a]-\u003ePoint a-\u003e[b]-\u003e([(a,b)],[b])",
        "package": "diagrams-contrib",
        "partial": "Inside",
        "signature": "(Point v-\u003eBool)-\u003e[v]-\u003ePoint v-\u003e[a]-\u003e([(v,a)],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Layout-Wrap.html#v:wrapOutside",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewrapOutside\u003c/code\u003e is the same as \u003ccode\u003ewrapInside\u003c/code\u003e, but with an inverted\n   predicate.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Layout.Wrap",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(Point v -\u003e Bool) -\u003e [v] -\u003e Point v -\u003e [a] -\u003e ([(v, a)], [a])",
        "fct-source": "src/Diagrams-Layout-Wrap.html#wrapOutside",
        "fct-type": "function",
        "title": "wrapOutside"
      },
      "index": {
        "description": "wrapOutside is the same as wrapInside but with an inverted predicate",
        "hierarchy": "Diagrams Layout Wrap",
        "module": "Diagrams.Layout.Wrap",
        "name": "wrapOutside",
        "normalized": "(Point a-\u003eBool)-\u003e[a]-\u003ePoint a-\u003e[b]-\u003e([(a,b)],[b])",
        "package": "diagrams-contrib",
        "partial": "Outside",
        "signature": "(Point v-\u003eBool)-\u003e[v]-\u003ePoint v-\u003e[a]-\u003e([(v,a)],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utilities for using \u003ca\u003eControl.Lens\u003c/a\u003e with diagrams,\n including orphan instances for the \u003ccode\u003e\u003ca\u003eWrapped\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "This module provides utilities for using Control.Lens with diagrams including orphan instances for the Wrapped class",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#t:Wrapped-39-",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-Lens.html#Wrapped%27",
        "fct-type": "type",
        "title": "Wrapped'"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "Wrapped'",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Wrapped'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_Loc",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso (Located a) (Located a') (Point (V a), a) (Point (V a'), a')",
        "fct-source": "src/Diagrams-Lens.html#_Loc",
        "fct-type": "function",
        "title": "_Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_Loc",
        "normalized": "Iso(Located a)(Located b)(Point(V a),a)(Point(V b),b)",
        "package": "diagrams-contrib",
        "partial": "Loc",
        "signature": "Iso(Located a)(Located a')(Point(V a),a)(Point(V a'),a')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_P",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso s t (Point s) (Point t)",
        "fct-source": "src/Diagrams-Lens.html#_P",
        "fct-type": "function",
        "title": "_P"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_P",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_alignedVMove",
      "description": {
        "fct-descr": "\u003cp\u003eA singleton \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e for an alignment vector, where modification of the\n   vector moves the origin appropriately.  No vector is traversed when the\n   envelope is empty.\n\u003c/p\u003e\u003cp\u003eThe interface mimics \u003ca\u003eDiagrams.Align.alignBy\u003c/a\u003e in that the \u003ccode\u003ed\u003c/code\u003e parameter\n   specifies an interpolation between two extremes of the envelope. \u003ccode\u003ed = 1\u003c/code\u003e\n   is on the envelope along the vector, whereas \u003ccode\u003ed = -1\u003c/code\u003e is on the envelope,\n   away from the vector.\n\u003c/p\u003e\u003cp\u003eIf you need a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e instead of a vector, then compose with \u003ccode\u003e\u003ca\u003e_P\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "V a -\u003e Scalar (V a) -\u003e Traversal' a (V a)",
        "fct-source": "src/Diagrams-Lens.html#_alignedVMove",
        "fct-type": "function",
        "title": "_alignedVMove"
      },
      "index": {
        "description": "singleton Traversal for an alignment vector where modification of the vector moves the origin appropriately No vector is traversed when the envelope is empty The interface mimics Diagrams.Align.alignBy in that the parameter specifies an interpolation between two extremes of the envelope is on the envelope along the vector whereas is on the envelope away from the vector If you need Point instead of vector then compose with",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_alignedVMove",
        "normalized": "V a-\u003eScalar(V a)-\u003eTraversal' a(V a)",
        "package": "diagrams-contrib",
        "partial": "VMove",
        "signature": "V a-\u003eScalar(V a)-\u003eTraversal' a(V a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_attr",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' (Style v) (Maybe a)",
        "fct-source": "src/Diagrams-Lens.html#_attr",
        "fct-type": "function",
        "title": "_attr"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_attr",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_bezier3",
      "description": {
        "fct-descr": "\u003cp\u003ePrism that constructs cubic bezier segments.  Can also destruct them, if\n   segment is a \u003ccode\u003e\u003ca\u003eCubic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Prism' (Segment Closed v) (v, v, v)",
        "fct-source": "src/Diagrams-Lens.html#_bezier3",
        "fct-type": "function",
        "title": "_bezier3"
      },
      "index": {
        "description": "Prism that constructs cubic bezier segments Can also destruct them if segment is Cubic",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_bezier3",
        "normalized": "Prism'(Segment Closed a)(a,a,a)",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Prism'(Segment Closed v)(v,v,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_boxExtents",
      "description": {
        "fct-descr": "\u003cp\u003eA lens that gets the extents of the box.  In order to change the extents,\n   this modifies the upper corner.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' (BoundingBox v) v",
        "fct-source": "src/Diagrams-Lens.html#_boxExtents",
        "fct-type": "function",
        "title": "_boxExtents"
      },
      "index": {
        "description": "lens that gets the extents of the box In order to change the extents this modifies the upper corner",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_boxExtents",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Extents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_corners",
      "description": {
        "fct-descr": "\u003cp\u003eA traversal that either has 0 (empty box) or 2 points.  These points are\n   the lower and upper corners, respectively.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Traversal (BoundingBox v) (BoundingBox v') (Point v) (Point v')",
        "fct-source": "src/Diagrams-Lens.html#_corners",
        "fct-type": "function",
        "title": "_corners"
      },
      "index": {
        "description": "traversal that either has empty box or points These points are the lower and upper corners respectively",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_corners",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_envelopeVMove",
      "description": {
        "fct-descr": "\u003cp\u003eA singleton \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e for an envelope vector, where modification of the\n   vector moves the origin appropriately.  No vector is traversed when the\n   envelope is empty.\n\u003c/p\u003e\u003cp\u003eThis is the same as \u003ccode\u003e\u003ca\u003e_alignedVMove\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e1\u003c/code\u003e as the interpolation\n   parameter.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "V a -\u003e Traversal' a (V a)",
        "fct-source": "src/Diagrams-Lens.html#_envelopeVMove",
        "fct-type": "function",
        "title": "_envelopeVMove"
      },
      "index": {
        "description": "singleton Traversal for an envelope vector where modification of the vector moves the origin appropriately No vector is traversed when the envelope is empty This is the same as alignedVMove with as the interpolation parameter",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_envelopeVMove",
        "normalized": "V a-\u003eTraversal' a(V a)",
        "package": "diagrams-contrib",
        "partial": "VMove",
        "signature": "V a-\u003eTraversal' a(V a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineOffsets",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso (Trail' Line v) (Trail' Line v') [v] [v']",
        "fct-source": "src/Diagrams-Lens.html#_lineOffsets",
        "fct-type": "function",
        "title": "_lineOffsets"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_lineOffsets",
        "normalized": "Iso(Trail' Line a)(Trail' Line b)[a][b]",
        "package": "diagrams-contrib",
        "partial": "Offsets",
        "signature": "Iso(Trail' Line v)(Trail' Line v')[v][v']"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineSegments",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso (Trail' Line v) (Trail' Line v') [Segment Closed v] [Segment Closed v']",
        "fct-source": "src/Diagrams-Lens.html#_lineSegments",
        "fct-type": "function",
        "title": "_lineSegments"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_lineSegments",
        "normalized": "Iso(Trail' Line a)(Trail' Line b)[Segment Closed a][Segment Closed b]",
        "package": "diagrams-contrib",
        "partial": "Segments",
        "signature": "Iso(Trail' Line v)(Trail' Line v')[Segment Closed v][Segment Closed v']"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_lineVertices",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso (Located (Trail' Line v)) (Located (Trail' Line v')) [Point v] [Point v']",
        "fct-source": "src/Diagrams-Lens.html#_lineVertices",
        "fct-type": "function",
        "title": "_lineVertices"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_lineVertices",
        "normalized": "Iso(Located(Trail' Line a))(Located(Trail' Line b))[Point a][Point b]",
        "package": "diagrams-contrib",
        "partial": "Vertices",
        "signature": "Iso(Located(Trail' Line v))(Located(Trail' Line v'))[Point v][Point v']"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_location",
      "description": {
        "fct-descr": "\u003cp\u003eGets or set the \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eSubdiagram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' (Subdiagram b v m) (Point v)",
        "fct-source": "src/Diagrams-Lens.html#_location",
        "fct-type": "function",
        "title": "_location"
      },
      "index": {
        "description": "Gets or set the location of Subdiagram",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_location",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkAttr",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Prism' (Attribute v) a",
        "fct-source": "src/Diagrams-Lens.html#_mkAttr",
        "fct-type": "function",
        "title": "_mkAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_mkAttr",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkFixedSeg",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso (Located (Segment Closed v)) (Located (Segment Closed v')) (FixedSegment v) (FixedSegment v')",
        "fct-source": "src/Diagrams-Lens.html#_mkFixedSeg",
        "fct-type": "function",
        "title": "_mkFixedSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_mkFixedSeg",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Fixed Seg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkSubdiagram",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso' (QDiagram b v m) (Subdiagram b v m)",
        "fct-source": "src/Diagrams-Lens.html#_mkSubdiagram",
        "fct-type": "function",
        "title": "_mkSubdiagram"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_mkSubdiagram",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Subdiagram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_mkTAttr",
      "description": {
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Prism' (Attribute v) a",
        "fct-source": "src/Diagrams-Lens.html#_mkTAttr",
        "fct-type": "function",
        "title": "_mkTAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_mkTAttr",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "TAttr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_straight",
      "description": {
        "fct-descr": "\u003cp\u003ePrism that constructs linear segments.  Can also destruct them, if the\n   segment is Linear.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Prism' (Segment Closed v) v",
        "fct-source": "src/Diagrams-Lens.html#_straight",
        "fct-type": "function",
        "title": "_straight"
      },
      "index": {
        "description": "Prism that constructs linear segments Can also destruct them if the segment is Linear",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_straight",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-Lens.html#v:_toTurn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoTurn\u003c/a\u003e\u003c/code\u003e is an isomorphism from angles to \u003ccode\u003e\u003ca\u003eTurn\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Lens",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Iso a a' Turn Turn",
        "fct-source": "src/Diagrams-Lens.html#_toTurn",
        "fct-type": "function",
        "title": "_toTurn"
      },
      "index": {
        "description": "toTurn is an isomorphism from angles to Turn",
        "hierarchy": "Diagrams Lens",
        "module": "Diagrams.Lens",
        "name": "_toTurn",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of Apollonian gaskets.  Any three mutually tangent\n circles uniquely determine exactly two others which are mutually\n tangent to all three.  This process can be repeated, generating a\n fractal circle packing.\n\u003c/p\u003e\u003cp\u003eSee J. Lagarias, C. Mallows, and A. Wilks, \"Beyond the Descartes\n circle theorem\", \u003cem\u003eAmer. Math. Monthly\u003c/em\u003e 109 (2002), 338--361.\n \u003ca\u003ehttp://arxiv.org/abs/math/0101066\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA few examples:\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian1 = apollonianGasket 0.01 2 2 2\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian1.svg#diagram=apollonian1&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian2 = apollonianGasket 0.01 2 3 3\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian2.svg#diagram=apollonian2&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Apollonian\n apollonian3 = apollonianGasket 0.01 2 4 7\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Apollonian_apollonian3.svg#diagram=apollonian3&width=400\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html",
        "fct-type": "module",
        "title": "Apollonian"
      },
      "index": {
        "description": "Generation of Apollonian gaskets Any three mutually tangent circles uniquely determine exactly two others which are mutually tangent to all three This process can be repeated generating fractal circle packing See Lagarias Mallows and Wilks Beyond the Descartes circle theorem Amer Math Monthly http arxiv.org abs math few examples import Diagrams.TwoD.Apollonian apollonian1 apollonianGasket import Diagrams.TwoD.Apollonian apollonian2 apollonianGasket import Diagrams.TwoD.Apollonian apollonian3 apollonianGasket",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "Apollonian",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Apollonian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#t:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation for circles that lets us quickly compute an\n   Apollonian gasket.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#Circle",
        "fct-type": "data",
        "title": "Circle"
      },
      "index": {
        "description": "Representation for circles that lets us quickly compute an Apollonian gasket",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "Circle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:Circle",
      "description": {
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Circle",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#Circle",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "Circle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:apollonian",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a threshold radius and a list of \u003cem\u003efour\u003c/em\u003e mutually tangent\n   circles, generate the Apollonian gasket containing those circles.\n   Stop the recursion when encountering a circle with an (unsigned)\n   radius smaller than the threshold.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e [Circle] -\u003e [Circle]",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#apollonian",
        "fct-type": "function",
        "title": "apollonian"
      },
      "index": {
        "description": "Given threshold radius and list of four mutually tangent circles generate the Apollonian gasket containing those circles Stop the recursion when encountering circle with an unsigned radius smaller than the threshold",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "apollonian",
        "normalized": "Double-\u003e[Circle]-\u003e[Circle]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003e[Circle]-\u003e[Circle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:apollonianGasket",
      "description": {
        "fct-descr": "\u003cp\u003eDraw an Apollonian gasket: the first argument is the threshold;\n   the recursion will stop upon reaching circles with radii less than\n   it. The next three arguments are bends of three circles.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#apollonianGasket",
        "fct-type": "function",
        "title": "apollonianGasket"
      },
      "index": {
        "description": "Draw an Apollonian gasket the first argument is the threshold the recursion will stop upon reaching circles with radii less than it The next three arguments are bends of three circles",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "apollonianGasket",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Gasket",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:bend",
      "description": {
        "fct-descr": "\u003cp\u003eThe bend is the reciprocal of signed\n   radius: a negative radius means the\n   outside and inside of the circle are\n   switched.  The bends of any four mutually\n   tangent circles satisfy Descartes'\n   Theorem.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#Circle",
        "fct-type": "function",
        "title": "bend"
      },
      "index": {
        "description": "The bend is the reciprocal of signed radius negative radius means the outside and inside of the circle are switched The bends of any four mutually tangent circles satisfy Descartes Theorem",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "bend",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:cb",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eProduct\u003c/em\u003e of bend and center represented\n   as a complex number.  Amazingly, these\n   products also satisfy the equation of\n   Descartes' Theorem.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Complex Double",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#Circle",
        "fct-type": "function",
        "title": "cb"
      },
      "index": {
        "description": "Product of bend and center represented as complex number Amazingly these products also satisfy the equation of Descartes Theorem",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "cb",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:center",
      "description": {
        "fct-descr": "\u003cp\u003eGet the center of a circle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Circle -\u003e P2",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#center",
        "fct-type": "function",
        "title": "center"
      },
      "index": {
        "description": "Get the center of circle",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "center",
        "normalized": "Circle-\u003eP",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Circle-\u003eP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:descartes",
      "description": {
        "fct-descr": "\u003cp\u003eDescartes' Theorem states that if \u003ccode\u003eb1\u003c/code\u003e, \u003ccode\u003eb2\u003c/code\u003e, \u003ccode\u003eb3\u003c/code\u003e and \u003ccode\u003eb4\u003c/code\u003e are\n   the bends of four mutually tangent circles, then\n\u003c/p\u003e\u003cpre\u003e\n     b1^2 + b2^2 + b3^2 + b4^2 = 1/2 * (b1 + b2 + b3 + b4)^2.\n\u003c/pre\u003e\u003cp\u003eSurprisingly, if we replace each of the \u003ccode\u003ebi\u003c/code\u003e with the \u003cem\u003eproduct\u003c/em\u003e\n   of \u003ccode\u003ebi\u003c/code\u003e and the center of the corresponding circle (represented\n   as a complex number), the equation continues to hold! (See the\n   paper referenced at the top of the module.)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edescartes [b1,b2,b3]\u003c/code\u003e solves for \u003ccode\u003eb4\u003c/code\u003e, returning both solutions.\n   Notably, \u003ccode\u003edescartes\u003c/code\u003e works for any instance of \u003ccode\u003eFloating\u003c/code\u003e, which\n   includes both \u003ccode\u003eDouble\u003c/code\u003e (for bends), \u003ccode\u003eComplex Double\u003c/code\u003e (for\n   bend/center product), and \u003ccode\u003eCircle\u003c/code\u003e (for both at once).\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#descartes",
        "fct-type": "function",
        "title": "descartes"
      },
      "index": {
        "description": "Descartes Theorem states that if b1 b2 b3 and b4 are the bends of four mutually tangent circles then b1 b2 b3 b4 b1 b2 b3 b4 Surprisingly if we replace each of the bi with the product of bi and the center of the corresponding circle represented as complex number the equation continues to hold See the paper referenced at the top of the module descartes b1 b2 b3 solves for b4 returning both solutions Notably descartes works for any instance of Floating which includes both Double for bends Complex Double for bend center product and Circle for both at once",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "descartes",
        "normalized": "[a]-\u003e[a]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:drawCircle",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a circle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Circle -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#drawCircle",
        "fct-type": "function",
        "title": "drawCircle"
      },
      "index": {
        "description": "Draw circle",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "drawCircle",
        "normalized": "Double-\u003eCircle-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Circle",
        "signature": "Double-\u003eCircle-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:drawGasket",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a generated gasket, using a line width 0.003 times the\n   radius of the largest circle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Circle] -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#drawGasket",
        "fct-type": "function",
        "title": "drawGasket"
      },
      "index": {
        "description": "Draw generated gasket using line width times the radius of the largest circle",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "drawGasket",
        "normalized": "[Circle]-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Gasket",
        "signature": "[Circle]-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:initialConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an initial configuration of four mutually tangent\n   circles, given just the signed bends of three of them.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e [Circle]",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#initialConfig",
        "fct-type": "function",
        "title": "initialConfig"
      },
      "index": {
        "description": "Generate an initial configuration of four mutually tangent circles given just the signed bends of three of them",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "initialConfig",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003e[Circle]",
        "package": "diagrams-contrib",
        "partial": "Config",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003e[Circle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:mkCircle",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003eCircle\u003c/code\u003e given a signed radius and a location for its center.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e P2-\u003e Circle",
        "fct-type": "function",
        "title": "mkCircle"
      },
      "index": {
        "description": "Create Circle given signed radius and location for its center",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "mkCircle",
        "normalized": "Double-\u003eP-\u003eCircle",
        "package": "diagrams-contrib",
        "partial": "Circle",
        "signature": "Double-\u003eP-\u003eCircle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:other",
      "description": {
        "fct-descr": "\u003cp\u003eIf we have \u003cem\u003efour\u003c/em\u003e mutually tangent circles we can choose one of\n   them to replace; the remaining three determine exactly one other\n   circle which is mutually tangent.  However, in this situation\n   there is no need to apply \u003ccode\u003e\u003ca\u003edescartes\u003c/a\u003e\u003c/code\u003e again, since the two\n   solutions \u003ccode\u003eb4\u003c/code\u003e and \u003ccode\u003eb4'\u003c/code\u003e satisfy\n\u003c/p\u003e\u003cpre\u003e\n     b4 + b4' = 2 * (b1 + b2 + b3)\n\u003c/pre\u003e\u003cp\u003eHence, to replace \u003ccode\u003eb4\u003c/code\u003e with its dual, we need only sum the other\n   three, multiply by two, and subtract \u003ccode\u003eb4\u003c/code\u003e.  Again, this works for\n   bends as well as bend/center products.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[a] -\u003e a -\u003e a",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#other",
        "fct-type": "function",
        "title": "other"
      },
      "index": {
        "description": "If we have four mutually tangent circles we can choose one of them to replace the remaining three determine exactly one other circle which is mutually tangent However in this situation there is no need to apply descartes again since the two solutions b4 and b4 satisfy b4 b4 b1 b2 b3 Hence to replace b4 with its dual we need only sum the other three multiply by two and subtract b4 Again this works for bends as well as bend center products",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "other",
        "normalized": "[a]-\u003ea-\u003ea",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[a]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Apollonian.html#v:radius",
      "description": {
        "fct-descr": "\u003cp\u003eGet the (unsigned) radius of a circle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Apollonian",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Circle -\u003e Double",
        "fct-source": "src/Diagrams-TwoD-Apollonian.html#radius",
        "fct-type": "function",
        "title": "radius"
      },
      "index": {
        "description": "Get the unsigned radius of circle",
        "hierarchy": "Diagrams TwoD Apollonian",
        "module": "Diagrams.TwoD.Apollonian",
        "name": "radius",
        "normalized": "Circle-\u003eDouble",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Circle-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFactorization diagrams, as seen at\n \u003ca\u003ehttp://mathlesstraveled.com/2012/10/05/factorization-diagrams/\u003c/a\u003e\n and\n \u003ca\u003ehttp://mathlesstraveled.com/2012/11/05/more-factorization-diagrams/\u003c/a\u003e\n and on the cover of Hacker Monthly\n (\u003ca\u003ehttp://hackermonthly.com/issue-31.html\u003c/a\u003e): visually represent the\n prime factorization of n by drawing n dots recursively grouped\n according to the factors.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_grid100Big.svg#diagram=grid100Big&width=600\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Factorization.html",
        "fct-type": "module",
        "title": "Factorization"
      },
      "index": {
        "description": "Factorization diagrams as seen at http mathlesstraveled.com factorization-diagrams and http mathlesstraveled.com more-factorization-diagrams and on the cover of Hacker Monthly http hackermonthly.com issue-31.html visually represent the prime factorization of by drawing dots recursively grouped according to the factors",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "Factorization",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Factorization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:colorBars",
      "description": {
        "fct-descr": "\u003cp\u003eDraw vertical bars of color inside a polygon which represent the\n   decimal expansion of \u003ccode\u003ep\u003c/code\u003e, using the provided list of colors to\n   represent the digits 0-9.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n colorBarsEx = colorBars defaultColors 3526 (square 1)\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_colorBarsEx.svg#diagram=colorBarsEx&width=200\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Colour Double] -\u003e Integer -\u003e Path R2 -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#colorBars",
        "fct-type": "function",
        "title": "colorBars"
      },
      "index": {
        "description": "Draw vertical bars of color inside polygon which represent the decimal expansion of using the provided list of colors to represent the digits import Diagrams.TwoD.Factorization colorBarsEx colorBars defaultColors square",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "colorBars",
        "normalized": "[Colour Double]-\u003eInteger-\u003ePath R-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Bars",
        "signature": "[Colour Double]-\u003eInteger-\u003ePath R-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:defaultColors",
      "description": {
        "fct-descr": "\u003cp\u003eA default set of digit colors, based very loosely on the color\n   code for resistors (\u003ca\u003ehttp://en.wikipedia.org/wiki/Electronic_color_code\u003c/a\u003e),\n   lightened up a bit by blending with white.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_showDefaultColors.svg#diagram=showDefaultColors&height=50\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Colour Double]",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#defaultColors",
        "fct-type": "function",
        "title": "defaultColors"
      },
      "index": {
        "description": "default set of digit colors based very loosely on the color code for resistors http en.wikipedia.org wiki Electronic color code lightened up bit by blending with white",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "defaultColors",
        "normalized": "[Colour Double]",
        "package": "diagrams-contrib",
        "partial": "Colors",
        "signature": "[Colour Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:ensquare",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a diagram inside a square with the given side length,\n   centering and scaling it to fit with a bit of padding.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n ensquareEx = ensquare 1 (circle 25) ||| ensquare 1 (factorDiagram 30)\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_ensquareEx.svg#diagram=ensquareEx&width=200\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Diagram b R2 -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#ensquare",
        "fct-type": "function",
        "title": "ensquare"
      },
      "index": {
        "description": "Place diagram inside square with the given side length centering and scaling it to fit with bit of padding import Diagrams.TwoD.Factorization ensquareEx ensquare circle ensquare factorDiagram",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "ensquare",
        "normalized": "Double-\u003eDiagram a R-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eDiagram b R-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:factorDiagram",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a default factorization diagram for the given integer, by\n   factoring it and calling \u003ccode\u003e\u003ca\u003efactorDiagram'\u003c/a\u003e\u003c/code\u003e on its prime\n   factorization (with the factors ordered from smallest to\n   biggest).\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n factorDiagramEx = factorDiagram 700\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_factorDiagramEx.svg#diagram=factorDiagramEx&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Integer -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#factorDiagram",
        "fct-type": "function",
        "title": "factorDiagram"
      },
      "index": {
        "description": "Create default factorization diagram for the given integer by factoring it and calling factorDiagram on its prime factorization with the factors ordered from smallest to biggest import Diagrams.TwoD.Factorization factorDiagramEx factorDiagram",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "factorDiagram",
        "normalized": "Integer-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Diagram",
        "signature": "Integer-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:factorDiagram-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a centered factorization diagram from the given list of\n   factors (intended to be primes, but again, any positive integers\n   will do; note how the below example uses 6), by recursively\n   folding according to \u003ccode\u003e\u003ca\u003eprimeLayout\u003c/a\u003e\u003c/code\u003e, with the \u003ccode\u003e\u003ca\u003edefaultColors\u003c/a\u003e\u003c/code\u003e and\n   a base case of a black circle.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n factorDiagram'Ex = factorDiagram' [2,5,6]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_factorDiagram'Ex.svg#diagram=factorDiagram'Ex&height=200\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Integer] -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#factorDiagram%27",
        "fct-type": "function",
        "title": "factorDiagram'"
      },
      "index": {
        "description": "Create centered factorization diagram from the given list of factors intended to be primes but again any positive integers will do note how the below example uses by recursively folding according to primeLayout with the defaultColors and base case of black circle import Diagrams.TwoD.Factorization factorDiagram Ex factorDiagram",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "factorDiagram'",
        "normalized": "[Integer]-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Diagram'",
        "signature": "[Integer]-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efdGrid n\u003c/code\u003e creates a grid of factorization diagrams, given a list\n   of lists of integers: the inner lists represent L-R rows, which\n   are laid out from top to bottom.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n fdGridEx = fdGrid [[7,6,5],[4,19,200],[1,10,50]]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_fdGridEx.svg#diagram=fdGridEx&width=200\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[[Integer]] -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#fdGrid",
        "fct-type": "function",
        "title": "fdGrid"
      },
      "index": {
        "description": "fdGrid creates grid of factorization diagrams given list of lists of integers the inner lists represent L-R rows which are laid out from top to bottom import Diagrams.TwoD.Factorization fdGridEx fdGrid",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "fdGrid",
        "normalized": "[[Integer]]-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Grid",
        "signature": "[[Integer]]-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdGridList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efdGridList n\u003c/code\u003e creates a grid containing the factorization\n   diagrams of all the numbers from \u003ccode\u003e1\u003c/code\u003e to \u003ccode\u003en^2\u003c/code\u003e, ordered left to\n   right, top to bottom (like the grid seen on the cover of Hacker\n   Monthly, \u003ca\u003ehttp://hackermonthly.com/issue-31.html\u003c/a\u003e).\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n grid100 = fdGridList 10\n grid100Big = grid100\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_grid100.svg#diagram=grid100&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Integer -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#fdGridList",
        "fct-type": "function",
        "title": "fdGridList"
      },
      "index": {
        "description": "fdGridList creates grid containing the factorization diagrams of all the numbers from to ordered left to right top to bottom like the grid seen on the cover of Hacker Monthly http hackermonthly.com issue-31.html import Diagrams.TwoD.Factorization grid100 fdGridList grid100Big grid100",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "fdGridList",
        "normalized": "Integer-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Grid List",
        "signature": "Integer-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:fdMultTable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efdTable n\u003c/code\u003e creates a \"multiplication table\" of factorization\n   diagrams, with the diagrams for \u003ccode\u003e1\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e along both the top row\n   and left column, and the diagram for \u003ccode\u003em*n\u003c/code\u003e in row \u003ccode\u003em\u003c/code\u003e and column\n   \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n fdMultTableEx = fdMultTable 13\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_fdMultTableEx.svg#diagram=fdMultTableEx&width=600\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Integer -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#fdMultTable",
        "fct-type": "function",
        "title": "fdMultTable"
      },
      "index": {
        "description": "fdTable creates multiplication table of factorization diagrams with the diagrams for to along both the top row and left column and the diagram for in row and column import Diagrams.TwoD.Factorization fdMultTableEx fdMultTable",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "fdMultTable",
        "normalized": "Integer-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Mult Table",
        "signature": "Integer-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Factorization.html#v:primeLayout",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eprimeLayout\u003c/code\u003e takes a positive integer p (the idea is for it to\n   be prime, though it doesn't really matter) and a diagram, and lays\n   out p rotated copies of the diagram in a circular pattern.\n\u003c/p\u003e\u003cp\u003eThere is a special case for \u003ccode\u003ep = 2\u003c/code\u003e: if the given diagram is taller\n   than it is wide, then the two copies will be placed beside each\n   other; if wider then tall, they will be placed one above the\n   other.\n\u003c/p\u003e\u003cp\u003eThe regular \u003ccode\u003ep\u003c/code\u003e-gon connecting the centers of the laid-out\n   diagrams is also filled in with vertical bars of color\n   representing the number \u003ccode\u003ep\u003c/code\u003e.  In particular, there is one color\n   for each decimal digit (the provided list should have length 10\n   and represents the digits 0-9), and the colors, read left to\n   right, give the decimal expansion of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Factorization\n plExample\n   = pad 1.1 . centerXY\n   . hcat' (with & sep .~ 0.5)\n   . map (sized (Width 1))\n   $ [ primeLayout defaultColors 5 (circle 1 # fc black)\n     , primeLayout defaultColors 103 (square 1 # fc green # lw 0)\n     , primeLayout (repeat white) 13 (circle 1 # lc orange)\n     ]\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Factorization_plExample.svg#diagram=plExample&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Factorization",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Colour Double] -\u003e Integer -\u003e Diagram b R2 -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Factorization.html#primeLayout",
        "fct-type": "function",
        "title": "primeLayout"
      },
      "index": {
        "description": "primeLayout takes positive integer the idea is for it to be prime though it doesn really matter and diagram and lays out rotated copies of the diagram in circular pattern There is special case for if the given diagram is taller than it is wide then the two copies will be placed beside each other if wider then tall they will be placed one above the other The regular gon connecting the centers of the laid-out diagrams is also filled in with vertical bars of color representing the number In particular there is one color for each decimal digit the provided list should have length and represents the digits and the colors read left to right give the decimal expansion of import Diagrams.TwoD.Factorization plExample pad centerXY hcat with sep map sized Width primeLayout defaultColors circle fc black primeLayout defaultColors square fc green lw primeLayout repeat white circle lc orange",
        "hierarchy": "Diagrams TwoD Factorization",
        "module": "Diagrams.TwoD.Factorization",
        "name": "primeLayout",
        "normalized": "[Colour Double]-\u003eInteger-\u003eDiagram a R-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Layout",
        "signature": "[Colour Double]-\u003eInteger-\u003eDiagram b R-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA method for laying out diagrams using a circle packing algorithm. For\n details on the algorithm, see \u003ca\u003eOptimisation.CirclePacking\u003c/a\u003e in the module\n circle-packing.\n\u003c/p\u003e\u003cp\u003eHere is an example:\n\u003c/p\u003e\u003cpre\u003e import Optimisation.CirclePacking\n import Diagrams.TwoD.Vector       (e)\n\n colorize = zipWith fc $\n     cycle [red,blue,yellow,magenta,cyan,bisque,firebrick,indigo]\n\n objects = colorize $\n     [ circle r  | r \u003c- [0.1,0.2..1.6] ] ++\n     [ hexagon r | r \u003c- [0.1,0.2..0.7] ] ++\n     [ decagon r | r \u003c- [0.1,0.2..0.7] ]\n\n -- Just a approximation, diagram objects do not have an exact radius\n radiusApproximation o = maximum [ radius (e (alpha :: Turn)) o | alpha \u003c- [0,0.1..1.0]]\n\n circlePackingExample =\n     position $ map (\\(o,(x,y)) -\u003e (p2 (x,y),o)) $\n     packCircles radiusApproximation objects\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_CirclePacking_circlePackingExample.svg#diagram=circlePackingExample&width=400\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html",
        "fct-type": "module",
        "title": "CirclePacking"
      },
      "index": {
        "description": "method for laying out diagrams using circle packing algorithm For details on the algorithm see Optimisation.CirclePacking in the module circle-packing Here is an example import Optimisation.CirclePacking import Diagrams.TwoD.Vector colorize zipWith fc cycle red blue yellow magenta cyan bisque firebrick indigo objects colorize circle hexagon decagon Just approximation diagram objects do not have an exact radius radiusApproximation maximum radius alpha Turn alpha circlePackingExample position map p2 packCircles radiusApproximation objects",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "CirclePacking",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Circle Packing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#t:RadiusFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of radius-estimating functions for Diagrams such as\n \u003ccode\u003e\u003ca\u003eapproxRadius\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecircleRadius\u003c/a\u003e\u003c/code\u003e. When you can calculate the radius better,\n but not any more once you converted your data to a diagram, use \u003ccode\u003e\u003ca\u003ecreateCirclePacking\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html#RadiusFunction",
        "fct-type": "type",
        "title": "RadiusFunction"
      },
      "index": {
        "description": "The type of radius-estimating functions for Diagrams such as approxRadius and circleRadius When you can calculate the radius better but not any more once you converted your data to diagram use createCirclePacking",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "RadiusFunction",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Radius Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:approxRadius",
      "description": {
        "fct-descr": "\u003cp\u003eA safe approximation. Calculates the outer radius of the smallest\n axis-aligned polygon with the given number of edges that contains the\n object. A parameter of 4 up to 8 should be sufficient for most applications.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Int -\u003e RadiusFunction b m",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html#approxRadius",
        "fct-type": "function",
        "title": "approxRadius"
      },
      "index": {
        "description": "safe approximation Calculates the outer radius of the smallest axis-aligned polygon with the given number of edges that contains the object parameter of up to should be sufficient for most applications",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "approxRadius",
        "normalized": "Int-\u003eRadiusFunction a b",
        "package": "diagrams-contrib",
        "partial": "Radius",
        "signature": "Int-\u003eRadiusFunction b m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:circleRadius",
      "description": {
        "fct-descr": "\u003cp\u003eAn unsafe approximation. This is the radius of the largest circle that\n fits in the rectangular bounding box of the object, so it may be too small.\n It is, however, exact for circles, and there is no function that is safe for\n all diagrams and exact for circles.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "RadiusFunction b m",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html#circleRadius",
        "fct-type": "function",
        "title": "circleRadius"
      },
      "index": {
        "description": "An unsafe approximation This is the radius of the largest circle that fits in the rectangular bounding box of the object so it may be too small It is however exact for circles and there is no function that is safe for all diagrams and exact for circles",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "circleRadius",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Radius",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:createCirclePacking",
      "description": {
        "fct-descr": "\u003cp\u003eMore general version of \u003ccode\u003e\u003ca\u003erenderCirclePacking\u003c/a\u003e\u003c/code\u003e. You can use this if you\n have more information available in the values of type \u003ccode\u003ea\u003c/code\u003e that allows you to\n calculate the radius better (or even exactly).\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(a -\u003e Double) -\u003e (a -\u003e QDiagram b R2 m) -\u003e [a] -\u003e QDiagram b R2 m",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html#createCirclePacking",
        "fct-type": "function",
        "title": "createCirclePacking"
      },
      "index": {
        "description": "More general version of renderCirclePacking You can use this if you have more information available in the values of type that allows you to calculate the radius better or even exactly",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "createCirclePacking",
        "normalized": "(a-\u003eDouble)-\u003e(a-\u003eQDiagram b R c)-\u003e[a]-\u003eQDiagram b R c",
        "package": "diagrams-contrib",
        "partial": "Circle Packing",
        "signature": "(a-\u003eDouble)-\u003e(a-\u003eQDiagram b R m)-\u003e[a]-\u003eQDiagram b R m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-CirclePacking.html#v:renderCirclePacking",
      "description": {
        "fct-descr": "\u003cp\u003eCombines the passed objects, whose radius is estimated using the given\n \u003ccode\u003e\u003ca\u003eRadiusFunction\u003c/a\u003e\u003c/code\u003e, so that they do not overlap (according to the radius\n function) and otherwise form, as far as possible, a tight circle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.CirclePacking",
        "fct-package": "diagrams-contrib",
        "fct-signature": "RadiusFunction b m -\u003e [QDiagram b R2 m] -\u003e QDiagram b R2 m",
        "fct-source": "src/Diagrams-TwoD-Layout-CirclePacking.html#renderCirclePacking",
        "fct-type": "function",
        "title": "renderCirclePacking"
      },
      "index": {
        "description": "Combines the passed objects whose radius is estimated using the given RadiusFunction so that they do not overlap according to the radius function and otherwise form as far as possible tight circle",
        "hierarchy": "Diagrams TwoD Layout CirclePacking",
        "module": "Diagrams.TwoD.Layout.CirclePacking",
        "name": "renderCirclePacking",
        "normalized": "RadiusFunction a b-\u003e[QDiagram a R b]-\u003eQDiagram a R b",
        "package": "diagrams-contrib",
        "partial": "Circle Packing",
        "signature": "RadiusFunction b m-\u003e[QDiagram b R m]-\u003eQDiagram b R m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of methods for laying out various kinds of trees.\n This module is still experimental, and more layout methods will\n probably be added over time.\n\u003c/p\u003e\u003cp\u003eLaying out a rose tree using a symmetric layout:\n\u003c/p\u003e\u003cpre\u003e import Data.Tree\n import Diagrams.TwoD.Layout.Tree\n\n t1 = Node 'A' [Node 'B' (map lf \"CDE\"), Node 'F' [Node 'G' (map lf \"HIJ\")]]\n   where lf x = Node x []\n\n exampleSymmTree =\n   renderTree ((\u003c\u003e circle 1 # fc white) . text . (:[]))\n              (~~)\n              (symmLayout' (with & slHSep .~ 4 & slVSep .~ 4) t1)\n   # lw 0.03\n   # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_exampleSymmTree.svg#diagram=exampleSymmTree&width=300\"/\u003e\n\u003c/p\u003e\u003cp\u003eLaying out a rose tree of diagrams, with spacing automatically\n adjusted for the size of the diagrams:\n\u003c/p\u003e\u003cpre\u003e import Data.Tree\n import Data.Maybe (fromMaybe)\n import Diagrams.TwoD.Layout.Tree\n\n tD = Node (rect 1 3)\n        [ Node (circle 0.2) []\n        , Node (hcat . replicate 3 $ circle 1) []\n        , Node (eqTriangle 5) []\n        ]\n\n exampleSymmTreeWithDs =\n   renderTree id (~~)\n   (symmLayout' (with & slWidth  .~ fromMaybe (0,0) . extentX\n                      & slHeight .~ fromMaybe (0,0) . extentY)\n      tD)\n   # lw 0.03\n   # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_exampleSymmTreeWithDs.svg#diagram=exampleSymmTreeWithDs&width=300\"/\u003e\n\u003c/p\u003e\u003cp\u003eUsing a variant symmetric layout algorithm specifically for binary trees:\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Layout.Tree\n\n drawT = maybe mempty (renderTree (const (circle 0.05 # fc black)) (~~))\n       . symmLayoutBin' (with & slVSep .~ 0.5)\n\n tree500 = drawT t # centerXY # pad 1.1 # sized (Width 4)\n   where t = genTree 500 0.05\n         -- genTree 500 0.05 randomly generates trees of size 500 +/- 5%,\n         -- definition not shown\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_tree500.svg#diagram=tree500&width=400\"/\u003e\n\u003c/p\u003e\u003cp\u003eUsing force-based layout on a binary tree:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE NoMonomorphismRestriction #-}\n import Diagrams.Prelude\n import Diagrams.TwoD.Layout.Tree\n\n t 0 = Empty\n t n = BNode n (t (n-1)) (t (n-1))\n\n Just t' = uniqueXLayout 1 1 (t 4)\n\n fblEx = renderTree (\\n -\u003e (text (show n) # fontSize 0.5\n                             \u003c\u003e circle 0.3 # fc white))\n             (~~)\n             (forceLayoutTree t')\n         # centerXY # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Layout_Tree_fblEx.svg#diagram=fblEx&width=300\"/\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "collection of methods for laying out various kinds of trees This module is still experimental and more layout methods will probably be added over time Laying out rose tree using symmetric layout import Data.Tree import Diagrams.TwoD.Layout.Tree t1 Node Node map lf CDE Node Node map lf HIJ where lf Node exampleSymmTree renderTree circle fc white text symmLayout with slHSep slVSep t1 lw centerXY pad Laying out rose tree of diagrams with spacing automatically adjusted for the size of the diagrams import Data.Tree import Data.Maybe fromMaybe import Diagrams.TwoD.Layout.Tree tD Node rect Node circle Node hcat replicate circle Node eqTriangle exampleSymmTreeWithDs renderTree id symmLayout with slWidth fromMaybe extentX slHeight fromMaybe extentY tD lw centerXY pad Using variant symmetric layout algorithm specifically for binary trees import Diagrams.TwoD.Layout.Tree drawT maybe mempty renderTree const circle fc black symmLayoutBin with slVSep tree500 drawT centerXY pad sized Width where genTree genTree randomly generates trees of size definition not shown Using force-based layout on binary tree LANGUAGE NoMonomorphismRestriction import Diagrams.Prelude import Diagrams.TwoD.Layout.Tree Empty BNode n-1 n-1 Just uniqueXLayout fblEx renderTree text show fontSize circle fc white forceLayoutTree centerXY pad",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:BTree",
      "description": {
        "fct-descr": "\u003cp\u003eBinary trees with data at internal nodes.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
        "fct-type": "data",
        "title": "BTree"
      },
      "index": {
        "description": "Binary trees with data at internal nodes",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "BTree",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:ForceLayoutTreeOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "data",
        "title": "ForceLayoutTreeOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "ForceLayoutTreeOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Force Layout Tree Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#t:SymmLayoutOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for controlling the symmetric tree layout algorithm.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "data",
        "title": "SymmLayoutOpts"
      },
      "index": {
        "description": "Options for controlling the symmetric tree layout algorithm",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "SymmLayoutOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Symm Layout Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:BNode",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "BNode a (BTree a) (BTree a)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
        "fct-type": "function",
        "title": "BNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "BNode",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "BNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:Empty",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Empty",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#BTree",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "Empty",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:FLTOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "FLTOpts",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "function",
        "title": "FLTOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "FLTOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "FLTOpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:SLOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "SLOpts",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "function",
        "title": "SLOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "SLOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "SLOpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_edgeLen",
      "description": {
        "fct-descr": "\u003cp\u003eHow long edges should be, ideally.\n   This will be the resting length for\n   the springs.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "function",
        "title": "_edgeLen"
      },
      "index": {
        "description": "How long edges should be ideally This will be the resting length for the springs",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_edgeLen",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_forceLayoutOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions to the force layout simulator, including damping.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "ForceLayoutOpts R2",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "function",
        "title": "_forceLayoutOpts"
      },
      "index": {
        "description": "Options to the force layout simulator including damping",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_forceLayoutOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Layout Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slHSep",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum horizontal\n   separation between sibling\n   nodes.  The default is 1.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "function",
        "title": "_slHSep"
      },
      "index": {
        "description": "Minimum horizontal separation between sibling nodes The default is",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_slHSep",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "HSep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slHeight",
      "description": {
        "fct-descr": "\u003cp\u003eA function for measuring the vertical extent of an\n   item in the tree.  The default is \u003ccode\u003econst (0,0)\u003c/code\u003e.  See\n   the documentation for \u003ccode\u003e\u003ca\u003eslWidth\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e (Double, Double)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "function",
        "title": "_slHeight"
      },
      "index": {
        "description": "function for measuring the vertical extent of an item in the tree The default is const See the documentation for slWidth for more information",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_slHeight",
        "normalized": "a-\u003e(Double,Double)",
        "package": "diagrams-contrib",
        "partial": "Height",
        "signature": "a-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slVSep",
      "description": {
        "fct-descr": "\u003cp\u003eVertical separation\n   between adjacent levels of\n   the tree.  The default is 1.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "function",
        "title": "_slVSep"
      },
      "index": {
        "description": "Vertical separation between adjacent levels of the tree The default is",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_slVSep",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "VSep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_slWidth",
      "description": {
        "fct-descr": "\u003cp\u003eA function for measuring the horizontal extent (a pair\n   of x-coordinates) of an item in the tree.  The default\n   is \u003ccode\u003econst (0,0)\u003c/code\u003e, that is, the nodes are considered as\n   taking up no space, so the centers of the nodes will\n   be separated according to the \u003ccode\u003eslHSep\u003c/code\u003e and \u003ccode\u003eslVSep\u003c/code\u003e.\n   However, this can be useful, \u003cem\u003ee.g.\u003c/em\u003e if you have a tree\n   of diagrams of irregular size and want to make sure no\n   diagrams overlap.  In that case you could use\n   \u003ccode\u003efromMaybe (0,0) . extentX\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e (Double, Double)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#SymmLayoutOpts",
        "fct-type": "function",
        "title": "_slWidth"
      },
      "index": {
        "description": "function for measuring the horizontal extent pair of x-coordinates of an item in the tree The default is const that is the nodes are considered as taking up no space so the centers of the nodes will be separated according to the slHSep and slVSep However this can be useful e.g if you have tree of diagrams of irregular size and want to make sure no diagrams overlap In that case you could use fromMaybe extentX",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_slWidth",
        "normalized": "a-\u003e(Double,Double)",
        "package": "diagrams-contrib",
        "partial": "Width",
        "signature": "a-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_springK",
      "description": {
        "fct-descr": "\u003cp\u003eSpring constant.  The\n   bigger the constant,\n   the more the edges\n   push/pull towards their\n   resting length.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "function",
        "title": "_springK"
      },
      "index": {
        "description": "Spring constant The bigger the constant the more the edges push pull towards their resting length",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_springK",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:_staticK",
      "description": {
        "fct-descr": "\u003cp\u003eCoulomb constant.  The\n   bigger the constant, the\n   more sibling nodes repel\n   each other.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#ForceLayoutTreeOpts",
        "fct-type": "function",
        "title": "_staticK"
      },
      "index": {
        "description": "Coulomb constant The bigger the constant the more sibling nodes repel each other",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "_staticK",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:edgeLen",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ForceLayoutTreeOpts Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#edgeLen",
        "fct-type": "function",
        "title": "edgeLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "edgeLen",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ForceLayoutTreeOpts (ForceLayoutOpts R2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutOpts",
        "fct-type": "function",
        "title": "forceLayoutOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "forceLayoutOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Layout Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutTree",
      "description": {
        "fct-descr": "\u003cp\u003eForce-directed layout of rose trees, with default parameters (for\n   more options, see \u003ccode\u003e\u003ca\u003eforceLayoutTree'\u003c/a\u003e\u003c/code\u003e).  In particular,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e edges are modeled as springs\n\u003c/li\u003e\u003cli\u003e nodes are modeled as point charges\n\u003c/li\u003e\u003cli\u003e nodes are constrained to keep the same y-coordinate.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe input could be a tree already laid out by some other method,\n   such as \u003ccode\u003e\u003ca\u003euniqueXLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tree (a, P2) -\u003e Tree (a, P2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutTree",
        "fct-type": "function",
        "title": "forceLayoutTree"
      },
      "index": {
        "description": "Force-directed layout of rose trees with default parameters for more options see forceLayoutTree In particular edges are modeled as springs nodes are modeled as point charges nodes are constrained to keep the same y-coordinate The input could be tree already laid out by some other method such as uniqueXLayout",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "forceLayoutTree",
        "normalized": "Tree(a,P)-\u003eTree(a,P)",
        "package": "diagrams-contrib",
        "partial": "Layout Tree",
        "signature": "Tree(a,P)-\u003eTree(a,P)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:forceLayoutTree-39-",
      "description": {
        "fct-descr": "\u003cp\u003eForce-directed layout of rose trees, with configurable parameters.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "ForceLayoutTreeOpts -\u003e Tree (a, P2) -\u003e Tree (a, P2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#forceLayoutTree%27",
        "fct-type": "function",
        "title": "forceLayoutTree'"
      },
      "index": {
        "description": "Force-directed layout of rose trees with configurable parameters",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "forceLayoutTree'",
        "normalized": "ForceLayoutTreeOpts-\u003eTree(a,P)-\u003eTree(a,P)",
        "package": "diagrams-contrib",
        "partial": "Layout Tree'",
        "signature": "ForceLayoutTreeOpts-\u003eTree(a,P)-\u003eTree(a,P)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eAssign unique IDs to every node in a tree (or other traversable structure).\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t a -\u003e t (a, PID)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Assign unique IDs to every node in tree or other traversable structure",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "label",
        "normalized": "a b-\u003ea(b,PID)",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "t a-\u003et(a,PID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:leaf",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient constructor for leaves.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e BTree a",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#leaf",
        "fct-type": "function",
        "title": "leaf"
      },
      "index": {
        "description": "Convenient constructor for leaves",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "leaf",
        "normalized": "a-\u003eBTree a",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "a-\u003eBTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:reconstruct",
      "description": {
        "fct-descr": "\u003cp\u003eReconstruct a tree (or any traversable structure) from an\n   \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e, given unique identifier annotations matching the\n   identifiers used in the \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Ensemble R2 -\u003e t (a, PID) -\u003e t (a, P2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#reconstruct",
        "fct-type": "function",
        "title": "reconstruct"
      },
      "index": {
        "description": "Reconstruct tree or any traversable structure from an Ensemble given unique identifier annotations matching the identifiers used in the Ensemble",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "reconstruct",
        "normalized": "Ensemble R-\u003ea(b,PID)-\u003ea(b,P)",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Ensemble R-\u003et(a,PID)-\u003et(a,P)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:renderTree",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tree annotated with node positions, given functions\n   specifying how to draw nodes and edges.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(a -\u003e QDiagram b R2 m) -\u003e (P2 -\u003e P2 -\u003e QDiagram b R2 m) -\u003e Tree (a, P2) -\u003e QDiagram b R2 m",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#renderTree",
        "fct-type": "function",
        "title": "renderTree"
      },
      "index": {
        "description": "Draw tree annotated with node positions given functions specifying how to draw nodes and edges",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "renderTree",
        "normalized": "(a-\u003eQDiagram b R c)-\u003e(P-\u003eP-\u003eQDiagram b R c)-\u003eTree(a,P)-\u003eQDiagram b R c",
        "package": "diagrams-contrib",
        "partial": "Tree",
        "signature": "(a-\u003eQDiagram b R m)-\u003e(P-\u003eP-\u003eQDiagram b R m)-\u003eTree(a,P)-\u003eQDiagram b R m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:renderTree-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tree annotated with node positions, given functions\n   specifying how to draw nodes and edges.  Unlike \u003ccode\u003e\u003ca\u003erenderTree\u003c/a\u003e\u003c/code\u003e,\n   this version gives the edge-drawing function access to the actual\n   values stored at the nodes rather than just their positions.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(a -\u003e QDiagram b R2 m) -\u003e ((a, P2) -\u003e (a, P2) -\u003e QDiagram b R2 m) -\u003e Tree (a, P2) -\u003e QDiagram b R2 m",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#renderTree%27",
        "fct-type": "function",
        "title": "renderTree'"
      },
      "index": {
        "description": "Draw tree annotated with node positions given functions specifying how to draw nodes and edges Unlike renderTree this version gives the edge-drawing function access to the actual values stored at the nodes rather than just their positions",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "renderTree'",
        "normalized": "(a-\u003eQDiagram b R c)-\u003e((a,P)-\u003e(a,P)-\u003eQDiagram b R c)-\u003eTree(a,P)-\u003eQDiagram b R c",
        "package": "diagrams-contrib",
        "partial": "Tree'",
        "signature": "(a-\u003eQDiagram b R m)-\u003e((a,P)-\u003e(a,P)-\u003eQDiagram b R m)-\u003eTree(a,P)-\u003eQDiagram b R m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slHSep",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall a.  Lens' (SymmLayoutOpts a) Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#slHSep",
        "fct-type": "function",
        "title": "slHSep"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "slHSep",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "HSep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slHeight",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall a.  Lens' (SymmLayoutOpts a) (a -\u003e (Double, Double))",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#slHeight",
        "fct-type": "function",
        "title": "slHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "slHeight",
        "normalized": "a b Lens'(SymmLayoutOpts c)(c-\u003e(Double,Double))",
        "package": "diagrams-contrib",
        "partial": "Height",
        "signature": "forall a. Lens'(SymmLayoutOpts a)(a-\u003e(Double,Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slVSep",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall a.  Lens' (SymmLayoutOpts a) Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#slVSep",
        "fct-type": "function",
        "title": "slVSep"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "slVSep",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "VSep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:slWidth",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall a.  Lens' (SymmLayoutOpts a) (a -\u003e (Double, Double))",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#slWidth",
        "fct-type": "function",
        "title": "slWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "slWidth",
        "normalized": "a b Lens'(SymmLayoutOpts c)(c-\u003e(Double,Double))",
        "package": "diagrams-contrib",
        "partial": "Width",
        "signature": "forall a. Lens'(SymmLayoutOpts a)(a-\u003e(Double,Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:springK",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ForceLayoutTreeOpts Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#springK",
        "fct-type": "function",
        "title": "springK"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "springK",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:staticK",
      "description": {
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ForceLayoutTreeOpts Double",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#staticK",
        "fct-type": "function",
        "title": "staticK"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "staticK",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayout",
      "description": {
        "fct-descr": "\u003cp\u003eRun the symmetric rose tree layout algorithm on a given tree\n   using default options, resulting in the same tree annotated with\n   node positions.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tree a -\u003e Tree (a, P2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayout",
        "fct-type": "function",
        "title": "symmLayout"
      },
      "index": {
        "description": "Run the symmetric rose tree layout algorithm on given tree using default options resulting in the same tree annotated with node positions",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "symmLayout",
        "normalized": "Tree a-\u003eTree(a,P)",
        "package": "diagrams-contrib",
        "partial": "Layout",
        "signature": "Tree a-\u003eTree(a,P)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayout-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun the symmetric rose tree layout algorithm on a given tree,\n   resulting in the same tree annotated with node positions.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "SymmLayoutOpts a -\u003e Tree a -\u003e Tree (a, P2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayout%27",
        "fct-type": "function",
        "title": "symmLayout'"
      },
      "index": {
        "description": "Run the symmetric rose tree layout algorithm on given tree resulting in the same tree annotated with node positions",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "symmLayout'",
        "normalized": "SymmLayoutOpts a-\u003eTree a-\u003eTree(a,P)",
        "package": "diagrams-contrib",
        "partial": "Layout'",
        "signature": "SymmLayoutOpts a-\u003eTree a-\u003eTree(a,P)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayoutBin",
      "description": {
        "fct-descr": "\u003cp\u003eLay out a binary tree using a slight variant of the symmetric\n   layout algorithm, using default options.  In particular, if a\n   node has only a left child but no right child (or vice versa),\n   the child will be offset from the parent horizontally by half the\n   horizontal separation parameter. Note that the result will be\n   \u003ccode\u003eNothing\u003c/code\u003e if and only if the input tree is \u003ccode\u003eEmpty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "BTree a -\u003e Maybe (Tree (a, P2))",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayoutBin",
        "fct-type": "function",
        "title": "symmLayoutBin"
      },
      "index": {
        "description": "Lay out binary tree using slight variant of the symmetric layout algorithm using default options In particular if node has only left child but no right child or vice versa the child will be offset from the parent horizontally by half the horizontal separation parameter Note that the result will be Nothing if and only if the input tree is Empty",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "symmLayoutBin",
        "normalized": "BTree a-\u003eMaybe(Tree(a,P))",
        "package": "diagrams-contrib",
        "partial": "Layout Bin",
        "signature": "BTree a-\u003eMaybe(Tree(a,P))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:symmLayoutBin-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLay out a binary tree using a slight variant of the symmetric\n   layout algorithm.  In particular, if a node has only a left child\n   but no right child (or vice versa), the child will be offset from\n   the parent horizontally by half the horizontal separation\n   parameter. Note that the result will be \u003ccode\u003eNothing\u003c/code\u003e if and only if\n   the input tree is \u003ccode\u003eEmpty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "SymmLayoutOpts a -\u003e BTree a -\u003e Maybe (Tree (a, P2))",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#symmLayoutBin%27",
        "fct-type": "function",
        "title": "symmLayoutBin'"
      },
      "index": {
        "description": "Lay out binary tree using slight variant of the symmetric layout algorithm In particular if node has only left child but no right child or vice versa the child will be offset from the parent horizontally by half the horizontal separation parameter Note that the result will be Nothing if and only if the input tree is Empty",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "symmLayoutBin'",
        "normalized": "SymmLayoutOpts a-\u003eBTree a-\u003eMaybe(Tree(a,P))",
        "package": "diagrams-contrib",
        "partial": "Layout Bin'",
        "signature": "SymmLayoutOpts a-\u003eBTree a-\u003eMaybe(Tree(a,P))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:treeToEnsemble",
      "description": {
        "fct-descr": "\u003cp\u003eAssign unique ID numbers to the nodes of a tree, and generate an\n   \u003ccode\u003e\u003ca\u003eEnsemble\u003c/a\u003e\u003c/code\u003e suitable for simulating in order to do force-directed\n   layout of the tree.  In particular,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e edges are modeled as springs\n\u003c/li\u003e\u003cli\u003e nodes are modeled as point charges\n\u003c/li\u003e\u003cli\u003e nodes are constrained to keep the same y-coordinate.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe input to \u003ccode\u003etreeToEnsemble\u003c/code\u003e could be a tree already laid out by\n   some other method, such as \u003ccode\u003e\u003ca\u003euniqueXLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall a.  ForceLayoutTreeOpts -\u003e Tree (a, P2) -\u003e (Tree (a, PID), Ensemble R2)",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#treeToEnsemble",
        "fct-type": "function",
        "title": "treeToEnsemble"
      },
      "index": {
        "description": "Assign unique ID numbers to the nodes of tree and generate an Ensemble suitable for simulating in order to do force-directed layout of the tree In particular edges are modeled as springs nodes are modeled as point charges nodes are constrained to keep the same y-coordinate The input to treeToEnsemble could be tree already laid out by some other method such as uniqueXLayout",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "treeToEnsemble",
        "normalized": "a b ForceLayoutTreeOpts-\u003eTree(c,P)-\u003e(Tree(c,PID),Ensemble R)",
        "package": "diagrams-contrib",
        "partial": "To Ensemble",
        "signature": "forall a. ForceLayoutTreeOpts-\u003eTree(a,P)-\u003e(Tree(a,PID),Ensemble R)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Layout-Tree.html#v:uniqueXLayout",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euniqueXLayout xSep ySep t\u003c/code\u003e lays out the binary tree \u003ccode\u003et\u003c/code\u003e using a\n   simple recursive algorithm with the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every left subtree is completely to the left of its parent, and\n     similarly for right subtrees.\n\u003c/li\u003e\u003cli\u003e All the nodes at a given depth in the tree have the same\n     y-coordinate. The separation distance between levels is given by\n     \u003ccode\u003eySep\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Every node has a unique x-coordinate. The separation between\n     successive nodes from left to right is given by \u003ccode\u003exSep\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Diagrams.TwoD.Layout.Tree",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Double -\u003e BTree a -\u003e Maybe (Tree (a, P2))",
        "fct-source": "src/Diagrams-TwoD-Layout-Tree.html#uniqueXLayout",
        "fct-type": "function",
        "title": "uniqueXLayout"
      },
      "index": {
        "description": "uniqueXLayout xSep ySep lays out the binary tree using simple recursive algorithm with the following properties Every left subtree is completely to the left of its parent and similarly for right subtrees All the nodes at given depth in the tree have the same y-coordinate The separation distance between levels is given by ySep Every node has unique x-coordinate The separation between successive nodes from left to right is given by xSep",
        "hierarchy": "Diagrams TwoD Layout Tree",
        "module": "Diagrams.TwoD.Layout.Tree",
        "name": "uniqueXLayout",
        "normalized": "Double-\u003eDouble-\u003eBTree a-\u003eMaybe(Tree(a,P))",
        "package": "diagrams-contrib",
        "partial": "XLayout",
        "signature": "Double-\u003eDouble-\u003eBTree a-\u003eMaybe(Tree(a,P))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Calligraphic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate \"calligraphic\" strokes by filling between two offset\n copies of a curve.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Calligraphic",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Calligraphic.html",
        "fct-type": "module",
        "title": "Calligraphic"
      },
      "index": {
        "description": "Create calligraphic strokes by filling between two offset copies of curve",
        "hierarchy": "Diagrams TwoD Path Calligraphic",
        "module": "Diagrams.TwoD.Path.Calligraphic",
        "name": "Calligraphic",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Calligraphic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Calligraphic.html#v:calligraphic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecalligraphic pen t\u003c/code\u003e creates a \"calligraphic\" variant of \u003ccode\u003et\u003c/code\u003e by\n   filling between two copies of \u003ccode\u003et\u003c/code\u003e offset by the \u003ccode\u003epen\u003c/code\u003e vector.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_Calligraphic_calligraphicEx.svg#diagram=calligraphicEx&width=400\"/\u003e\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Coordinates\n import Diagrams.TwoD.Path.Calligraphic\n\n curve = cubicSpline False [1 ^& 1, 2 ^& 5, 5 ^& 6, 8 ^& 12]\n       # scale 3\n\n calligraphicEx =\n   [ circle 15 # calligraphic (2 ^& 1)\n   , curve     # calligraphic (2 ^& 2)\n   ]\n   # map (centerXY . strokeLoop)\n   # fc black\n   # hcat' (with & sep .~ 10)\n\u003c/pre\u003e",
        "fct-module": "Diagrams.TwoD.Path.Calligraphic",
        "fct-package": "diagrams-contrib",
        "fct-signature": "R2 -\u003e Trail' Line R2 -\u003e Trail' Loop R2",
        "fct-source": "src/Diagrams-TwoD-Path-Calligraphic.html#calligraphic",
        "fct-type": "function",
        "title": "calligraphic"
      },
      "index": {
        "description": "calligraphic pen creates calligraphic variant of by filling between two copies of offset by the pen vector import Diagrams.Coordinates import Diagrams.TwoD.Path.Calligraphic curve cubicSpline False scale calligraphicEx circle calligraphic curve calligraphic map centerXY strokeLoop fc black hcat with sep",
        "hierarchy": "Diagrams TwoD Path Calligraphic",
        "module": "Diagrams.TwoD.Path.Calligraphic",
        "name": "calligraphic",
        "normalized": "R-\u003eTrail' Line R-\u003eTrail' Loop R",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "R-\u003eTrail' Line R-\u003eTrail' Loop R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate fractal trails by the \"iterated subset\" construction,\n iteratively replacing each segment with a given pattern.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html",
        "fct-type": "module",
        "title": "IteratedSubset"
      },
      "index": {
        "description": "Generate fractal trails by the iterated subset construction iteratively replacing each segment with given pattern",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "IteratedSubset",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Iterated Subset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#t:IterTrailConfig",
      "description": {
        "fct-descr": "\u003cp\u003eParameters to generate an iterated subset fractal.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
        "fct-type": "data",
        "title": "IterTrailConfig"
      },
      "index": {
        "description": "Parameters to generate an iterated subset fractal",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "IterTrailConfig",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Iter Trail Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:ITC",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "ITC",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
        "fct-type": "function",
        "title": "ITC"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "ITC",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "ITC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:color",
      "description": {
        "fct-descr": "\u003cp\u003eThe line color to use\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "The line color to use",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "color",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:drawITC",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an iterated subset fractal based on the given parameters.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "IterTrailConfig -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#drawITC",
        "fct-type": "function",
        "title": "drawITC"
      },
      "index": {
        "description": "Generate an iterated subset fractal based on the given parameters",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "drawITC",
        "normalized": "IterTrailConfig-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "ITC",
        "signature": "IterTrailConfig-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:drawITCScaled",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edrawITC\u003c/a\u003e\u003c/code\u003e, but also scales, centers, and pads the result so\n that it fits nicely inside a 4x4 box.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "IterTrailConfig -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#drawITCScaled",
        "fct-type": "function",
        "title": "drawITCScaled"
      },
      "index": {
        "description": "Like drawITC but also scales centers and pads the result so that it fits nicely inside x4 box",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "drawITCScaled",
        "normalized": "IterTrailConfig-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "ITCScaled",
        "signature": "IterTrailConfig-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:iterTrail",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \"seed pattern\", produce a list of successive\n   refinements, where the nth trail in the list has iteratively had\n   all segments replaced by the seed pattern n times, starting from\n   a horizontal line.  In other words, the zeroth trail in the\n   output list is a horizontal unit segment, and each subsequent\n   trail is equal to the previous with all segments replaced by the\n   seed pattern.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Path.IteratedSubset\n iterTrailEx = vcat' (with & sep .~ 0.3) . map strokeLine . take 5\n             $ iterTrail koch\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_iterTrailEx.svg#diagram=iterTrailEx&width=200\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Trail' Line R2 -\u003e [Trail' Line R2]",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#iterTrail",
        "fct-type": "function",
        "title": "iterTrail"
      },
      "index": {
        "description": "Given seed pattern produce list of successive refinements where the nth trail in the list has iteratively had all segments replaced by the seed pattern times starting from horizontal line In other words the zeroth trail in the output list is horizontal unit segment and each subsequent trail is equal to the previous with all segments replaced by the seed pattern import Diagrams.TwoD.Path.IteratedSubset iterTrailEx vcat with sep map strokeLine take iterTrail koch",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "iterTrail",
        "normalized": "Trail' Line R-\u003e[Trail' Line R]",
        "package": "diagrams-contrib",
        "partial": "Trail",
        "signature": "Trail' Line R-\u003e[Trail' Line R]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:iters",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of iterations\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Int",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
        "fct-type": "function",
        "title": "iters"
      },
      "index": {
        "description": "Number of iterations",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "iters",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:koch",
      "description": {
        "fct-descr": "\u003cp\u003eSeed for the Koch curve (side of the famous Koch \u003ccode\u003e\u003ca\u003esnowflake\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_kochD.svg#diagram=kochD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#koch",
        "fct-type": "function",
        "title": "koch"
      },
      "index": {
        "description": "Seed for the Koch curve side of the famous Koch snowflake",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "koch",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:levy",
      "description": {
        "fct-descr": "\u003cp\u003eSeed for the L&#233;vy dragon curve.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_levyD.svg#diagram=levyD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#levy",
        "fct-type": "function",
        "title": "levy"
      },
      "index": {
        "description": "Seed for the vy dragon curve",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "levy",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:randITC",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a random \u003ccode\u003e\u003ca\u003eIterTrailConfig\u003c/a\u003e\u003c/code\u003e.  This features many\n   hard-coded values.  If you want to play with it just copy the\n   code and modify it to suit.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "m IterTrailConfig",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#randITC",
        "fct-type": "function",
        "title": "randITC"
      },
      "index": {
        "description": "Generate random IterTrailConfig This features many hard-coded values If you want to play with it just copy the code and modify it to suit",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "randITC",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "ITC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:randIterGrid",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a grid of 100 random iterated subset fractals.  Impress\n   your friends!\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "IO (Diagram b R2)",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#randIterGrid",
        "fct-type": "function",
        "title": "randIterGrid"
      },
      "index": {
        "description": "Create grid of random iterated subset fractals Impress your friends",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "randIterGrid",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Iter Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:refineSegment",
      "description": {
        "fct-descr": "\u003cp\u003eUse a trail to \"refine\" a segment, returning a scaled and/or\n   rotated copy of the trail with the same endpoint as the segment.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Trail' Line R2 -\u003e Segment Closed R2 -\u003e Maybe (Trail' Line R2)",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#refineSegment",
        "fct-type": "function",
        "title": "refineSegment"
      },
      "index": {
        "description": "Use trail to refine segment returning scaled and or rotated copy of the trail with the same endpoint as the segment",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "refineSegment",
        "normalized": "Trail' Line R-\u003eSegment Closed R-\u003eMaybe(Trail' Line R)",
        "package": "diagrams-contrib",
        "partial": "Segment",
        "signature": "Trail' Line R-\u003eSegment Closed R-\u003eMaybe(Trail' Line R)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:seed",
      "description": {
        "fct-descr": "\u003cp\u003eThe seed trail\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Trail' Line R2",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#IterTrailConfig",
        "fct-type": "function",
        "title": "seed"
      },
      "index": {
        "description": "The seed trail",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "seed",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:snowflake",
      "description": {
        "fct-descr": "\u003cp\u003eThe famous Koch snowflake, made by putting three Koch curves\n   together. \u003ccode\u003esnowflake n\u003c/code\u003e yields an order-\u003ccode\u003en\u003c/code\u003e snowflake.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_snowflake4.svg#diagram=snowflake4&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Int -\u003e Trail R2",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#snowflake",
        "fct-type": "function",
        "title": "snowflake"
      },
      "index": {
        "description": "The famous Koch snowflake made by putting three Koch curves together snowflake yields an order snowflake",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "snowflake",
        "normalized": "Int-\u003eTrail R",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Int-\u003eTrail R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUp",
      "description": {
        "fct-descr": "\u003cp\u003eA \"square impulse\" seed which produces a quadratic von Koch\n   curve.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpD.svg#diagram=sqUpD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUp",
        "fct-type": "function",
        "title": "sqUp"
      },
      "index": {
        "description": "square impulse seed which produces quadratic von Koch curve",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "sqUp",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDown",
      "description": {
        "fct-descr": "\u003cp\u003eA \"double square impulse\" seed which produces fantastic\n   rectilinear spiral patterns.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownD.svg#diagram=sqUpDownD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDown",
        "fct-type": "function",
        "title": "sqUpDown"
      },
      "index": {
        "description": "double square impulse seed which produces fantastic rectilinear spiral patterns",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "sqUpDown",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Up Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDown-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esqUpDown\u003c/a\u003e\u003c/code\u003e but with \u003ccode\u003e\u003ca\u003ecubicSpline\u003c/a\u003e\u003c/code\u003e applied to produce a curvy\n   version.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownD2.svg#diagram=sqUpDownD2&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDown%27",
        "fct-type": "function",
        "title": "sqUpDown'"
      },
      "index": {
        "description": "Like sqUpDown but with cubicSpline applied to produce curvy version",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "sqUpDown'",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Up Down'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:sqUpDownOverlay",
      "description": {
        "fct-descr": "\u003cp\u003eA cool diagram featuring successive iterations of \u003ccode\u003esqUpDown'\u003c/code\u003e\n   superimposed atop one another.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_sqUpDownOverlayD.svg#diagram=sqUpDownOverlayD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#sqUpDownOverlay",
        "fct-type": "function",
        "title": "sqUpDownOverlay"
      },
      "index": {
        "description": "cool diagram featuring successive iterations of sqUpDown superimposed atop one another",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "sqUpDownOverlay",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Up Down Overlay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-IteratedSubset.html#v:zag",
      "description": {
        "fct-descr": "\u003cp\u003eStrange zig-zag seed that produces a dense fractal path with lots\n   of triangles.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Path_IteratedSubset_zagD.svg#diagram=zagD&width=400\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.IteratedSubset",
        "fct-package": "diagrams-contrib",
        "fct-signature": "t",
        "fct-source": "src/Diagrams-TwoD-Path-IteratedSubset.html#zag",
        "fct-type": "function",
        "title": "zag"
      },
      "index": {
        "description": "Strange zig-zag seed that produces dense fractal path with lots of triangles",
        "hierarchy": "Diagrams TwoD Path IteratedSubset",
        "module": "Diagrams.TwoD.Path.IteratedSubset",
        "name": "zag",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators to allow writing Metafont-style paths embedded in\n Haskell, with the usual Diagrams types for points and directions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Combinators to allow writing Metafont-style paths embedded in Haskell with the usual Diagrams types for points and directions",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e.-\u003c/code\u003e above.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Join -\u003e MFPathData P -\u003e MFPathData J",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#-.",
        "fct-type": "function",
        "title": "(-.)"
      },
      "index": {
        "description": "See above",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "(-.) -.",
        "normalized": "Join-\u003eMFPathData P-\u003eMFPathData J",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Join-\u003eMFPathData P-\u003eMFPathData J"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:.-45-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003epoint\u003c/em\u003e \u003ccode\u003e.-\u003c/code\u003e \u003cem\u003ejoin\u003c/em\u003e \u003ccode\u003e-.\u003c/code\u003e \u003cem\u003epath\u003c/em\u003e adds \u003cem\u003epoint\u003c/em\u003e to the\n left end of the metafont \u003cem\u003epath\u003c/em\u003e, connected by \u003cem\u003ejoin\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e MFPathData J -\u003e MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#.-",
        "fct-type": "function",
        "title": "(.-)"
      },
      "index": {
        "description": "point join path adds point to the left end of the metafont path connected by join",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "(.-) .-",
        "normalized": "P-\u003eMFPathData J-\u003eMFPathData P",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eMFPathData J-\u003eMFPathData P"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:.-45--45-.",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a point to the left of a Metafont path using a simple join.\n That is, neither direction is specified, and both tensions are 1.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e MFPathData P -\u003e MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#.--.",
        "fct-type": "function",
        "title": "(.--.)"
      },
      "index": {
        "description": "Add point to the left of Metafont path using simple join That is neither direction is specified and both tensions are",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "(.--.) .--.",
        "normalized": "P-\u003eMFPathData P-\u003eMFPathData P",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eMFPathData P-\u003eMFPathData P"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:arriving",
      "description": {
        "fct-descr": "\u003cp\u003eA join with the right-end direction specified.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "R2 -\u003e Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#arriving",
        "fct-type": "function",
        "title": "arriving"
      },
      "index": {
        "description": "join with the right-end direction specified",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "arriving",
        "normalized": "R-\u003eJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "R-\u003eJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:controls",
      "description": {
        "fct-descr": "\u003cp\u003eA join with explicit control points.  Note that these are in the\n same coordinate system as the endpoints, not relative to the latter.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e P2 -\u003e Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#controls",
        "fct-type": "function",
        "title": "controls"
      },
      "index": {
        "description": "join with explicit control points Note that these are in the same coordinate system as the endpoints not relative to the latter",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "controls",
        "normalized": "P-\u003eP-\u003eJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eP-\u003eJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:cyclePath",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the right-end of the Metafont path back to the left-end.\n When converted to a Diagrams \u003ccode\u003e\u003ca\u003eTrail'\u003c/a\u003e\u003c/code\u003e, this will be a Loop.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#cyclePath",
        "fct-type": "function",
        "title": "cyclePath"
      },
      "index": {
        "description": "Wrap the right-end of the Metafont path back to the left-end When converted to Diagrams Trail this will be Loop",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "cyclePath",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:endpt",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate the right-end of a Metafont path at the given point.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#endpt",
        "fct-type": "function",
        "title": "endpt"
      },
      "index": {
        "description": "Terminate the right-end of Metafont path at the given point",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "endpt",
        "normalized": "P-\u003eMFPathData P",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eMFPathData P"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:leaving",
      "description": {
        "fct-descr": "\u003cp\u003eA join with the left-end direction specified.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "R2 -\u003e Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#leaving",
        "fct-type": "function",
        "title": "leaving"
      },
      "index": {
        "description": "join with the left-end direction specified",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "leaving",
        "normalized": "R-\u003eJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "R-\u003eJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:simpleJoin",
      "description": {
        "fct-descr": "\u003cp\u003esimpleJoin is the same as mempty, with a more specific type.  It\n is provided for convenience in situations where explicit type\n signatures would otherwise be needed, such as when building up a\n join using lenses.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#simpleJoin",
        "fct-type": "function",
        "title": "simpleJoin"
      },
      "index": {
        "description": "simpleJoin is the same as mempty with more specific type It is provided for convenience in situations where explicit type signatures would otherwise be needed such as when building up join using lenses",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "simpleJoin",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:tension",
      "description": {
        "fct-descr": "\u003cp\u003eA join with both tensions the same.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#tension",
        "fct-type": "function",
        "title": "tension"
      },
      "index": {
        "description": "join with both tensions the same",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "tension",
        "normalized": "Double-\u003eJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Combinators.html#v:tensions",
      "description": {
        "fct-descr": "\u003cp\u003eA join with two tension values.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Double -\u003e Join",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Combinators.html#tensions",
        "fct-type": "function",
        "title": "tensions"
      },
      "index": {
        "description": "join with two tension values",
        "hierarchy": "Diagrams TwoD Path Metafont Combinators",
        "module": "Diagrams.TwoD.Path.Metafont.Combinators",
        "name": "tensions",
        "normalized": "Double-\u003eDouble-\u003eJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolve equations due to John Hobby, as implemented in Donald Knuth's\n \u003cem\u003eMetafont\u003c/em\u003e, to create (usually) smooth paths from specified points\n and directions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Solve equations due to John Hobby as implemented in Donald Knuth Metafont to create usually smooth paths from specified points and directions",
        "hierarchy": "Diagrams TwoD Path Metafont Internal",
        "module": "Diagrams.TwoD.Path.Metafont.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:computeControls",
      "description": {
        "fct-descr": "\u003cp\u003eTake a segment whose endpoint directions have been fully\n   determined, and compute the control points to realize it as a\n   cubic B&#233;zier segment.  If the segment already has control points\n   specified, the directions are ignored (they are assumed to\n   match).  If the segment tensions are specified as TensionAtLeast,\n   check whether the minimum tension will lead to an inflection\n   point.  If so, pick the maximum velocity (equivalent to minimum\n   tension) that avoids the inflection point.  Otherwise, calculate\n   the velocity from the tension using \u003ccode\u003ehobbyF\u003c/code\u003e.  Then calculate the\n   control point positions from the direction and the velocity.\n   Afterwards we can forget the direction information (since the\n   control points are what we really want, and the directions can be\n   recovered by subtracting the control points from the endpoints\n   anyway).\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MetafontSegment Dir (Either TensionJoin ControlJoin) -\u003e MetafontSegment () ControlJoin",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#computeControls",
        "fct-type": "function",
        "title": "computeControls"
      },
      "index": {
        "description": "Take segment whose endpoint directions have been fully determined and compute the control points to realize it as cubic zier segment If the segment already has control points specified the directions are ignored they are assumed to match If the segment tensions are specified as TensionAtLeast check whether the minimum tension will lead to an inflection point If so pick the maximum velocity equivalent to minimum tension that avoids the inflection point Otherwise calculate the velocity from the tension using hobbyF Then calculate the control point positions from the direction and the velocity Afterwards we can forget the direction information since the control points are what we really want and the directions can be recovered by subtracting the control points from the endpoints anyway",
        "hierarchy": "Diagrams TwoD Path Metafont Internal",
        "module": "Diagrams.TwoD.Path.Metafont.Internal",
        "name": "computeControls",
        "normalized": "MetafontSegment Dir(Either TensionJoin ControlJoin)-\u003eMetafontSegment()ControlJoin",
        "package": "diagrams-contrib",
        "partial": "Controls",
        "signature": "MetafontSegment Dir(Either TensionJoin ControlJoin)-\u003eMetafontSegment()ControlJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:locatedTrail",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a MetaFont path to a Diagrams Trail, using a Loop or Line as needed\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFPath () ControlJoin -\u003e Located (Trail R2)",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#locatedTrail",
        "fct-type": "function",
        "title": "locatedTrail"
      },
      "index": {
        "description": "Convert MetaFont path to Diagrams Trail using Loop or Line as needed",
        "hierarchy": "Diagrams TwoD Path Metafont Internal",
        "module": "Diagrams.TwoD.Path.Metafont.Internal",
        "name": "locatedTrail",
        "normalized": "MFPath()ControlJoin-\u003eLocated(Trail R)",
        "package": "diagrams-contrib",
        "partial": "Trail",
        "signature": "MFPath()ControlJoin-\u003eLocated(Trail R)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:mfPathToSegments",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a path in combinator syntax to the internal\n representation used for solving.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFPathData P -\u003e MFP",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#mfPathToSegments",
        "fct-type": "function",
        "title": "mfPathToSegments"
      },
      "index": {
        "description": "Convert path in combinator syntax to the internal representation used for solving",
        "hierarchy": "Diagrams TwoD Path Metafont Internal",
        "module": "Diagrams.TwoD.Path.Metafont.Internal",
        "name": "mfPathToSegments",
        "normalized": "MFPathData P-\u003eMFP",
        "package": "diagrams-contrib",
        "partial": "Path To Segments",
        "signature": "MFPathData P-\u003eMFP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Internal.html#v:solve",
      "description": {
        "fct-descr": "\u003cp\u003eRun all the rules required to fully specify all segment directions,\n but do not replace the Joins with ControlJoin.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFP -\u003e MFPath Dir BasicJoin",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Internal.html#solve",
        "fct-type": "function",
        "title": "solve"
      },
      "index": {
        "description": "Run all the rules required to fully specify all segment directions but do not replace the Joins with ControlJoin",
        "hierarchy": "Diagrams TwoD Path Metafont Internal",
        "module": "Diagrams.TwoD.Path.Metafont.Internal",
        "name": "solve",
        "normalized": "MFP-\u003eMFPath Dir BasicJoin",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "MFP-\u003eMFPath Dir BasicJoin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Parser.html#",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Parser",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Parser",
        "module": "Diagrams.TwoD.Path.Metafont.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Parser.html#v:metafontParser",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003eText\u003c/code\u003e value in Metafont syntax, as destribed in /The\n METAFONTbook/.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Parser",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Parser (MFPath (Maybe PathDir) BasicJoin)",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Parser.html#metafontParser",
        "fct-type": "function",
        "title": "metafontParser"
      },
      "index": {
        "description": "Parse Text value in Metafont syntax as destribed in The METAFONTbook",
        "hierarchy": "Diagrams TwoD Path Metafont Parser",
        "module": "Diagrams.TwoD.Path.Metafont.Parser",
        "name": "metafontParser",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "Types",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:BasicJoin",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#BasicJoin",
        "fct-type": "type",
        "title": "BasicJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "BasicJoin",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Basic Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:ControlJoin",
      "description": {
        "fct-descr": "\u003cp\u003eThe two intermediate control points of a segment, specified directly.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
        "fct-type": "data",
        "title": "ControlJoin"
      },
      "index": {
        "description": "The two intermediate control points of segment specified directly",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "ControlJoin",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Control Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Curl",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Curl",
        "fct-type": "type",
        "title": "Curl"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "Curl",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Curl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Dir",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Dir",
        "fct-type": "type",
        "title": "Dir"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "Dir",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:J",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#J",
        "fct-type": "data",
        "title": "J"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "J",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFP",
      "description": {
        "fct-descr": "\u003cp\u003eMFP is a type synonym to clarify signatures in Metafont.Internal.\n Note that the type permits segments which are \"overspecified\",\n having one or both directions specified, and also a \u003ccode\u003e\u003ca\u003eControlJoin\u003c/a\u003e\u003c/code\u003e.\n In this case, \u003ca\u003eMetafont.Internal\u003c/a\u003e ignores the directions.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFP",
        "fct-type": "type",
        "title": "MFP"
      },
      "index": {
        "description": "MFP is type synonym to clarify signatures in Metafont.Internal Note that the type permits segments which are overspecified having one or both directions specified and also ControlJoin In this case Metafont.Internal ignores the directions",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFP",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMFPath\u003c/code\u003e is the type used internally in solving the metafont\n equations.  The direction and join types are progressively refined\n until all control points are known.  The \u003ccode\u003eloop\u003c/code\u003e flag affects both\n the equations to be solved and the type of \u003ccode\u003eTrail\u003c/code\u003e in the result.\n If constructing an \u003ccode\u003eMFPath\u003c/code\u003e in new code, the responsibility rests\n on the user to ensure that successive \u003ccode\u003eMetafontSegment\u003c/code\u003es share an\n endpoint.  If this is not true, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
        "fct-type": "data",
        "title": "MFPath"
      },
      "index": {
        "description": "MFPath is the type used internally in solving the metafont equations The direction and join types are progressively refined until all control points are known The loop flag affects both the equations to be solved and the type of Trail in the result If constructing an MFPath in new code the responsibility rests on the user to ensure that successive MetafontSegment share an endpoint If this is not true the result is undefined",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPath",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFPathData",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMFPathData\u003c/code\u003e is the type manipulated by the metafont combinators.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
        "fct-type": "data",
        "title": "MFPathData"
      },
      "index": {
        "description": "MFPathData is the type manipulated by the metafont combinators",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPathData",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFPath Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MFS",
      "description": {
        "fct-descr": "\u003cp\u003eMFS is a type synonym to clarify signatures in \u003ca\u003eMetafont.Internal\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFS",
        "fct-type": "type",
        "title": "MFS"
      },
      "index": {
        "description": "MFS is type synonym to clarify signatures in Metafont.Internal",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFS",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:MetafontSegment",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMetafontSegment\u003c/code\u003e is used internally in solving the metafont\n equations.  It represents a segment with two known endpoints, and a\n \u003cem\u003ejoin\u003c/em\u003e, which may be specified in various ways.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
        "fct-type": "data",
        "title": "MetafontSegment"
      },
      "index": {
        "description": "MetafontSegment is used internally in solving the metafont equations It represents segment with two known endpoints and join which may be specified in various ways",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MetafontSegment",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Metafont Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:P",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#P",
        "fct-type": "data",
        "title": "P"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "P",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:PathDir",
      "description": {
        "fct-descr": "\u003cp\u003eA direction can be specified at any point of a path.  A \u003cem\u003ecurl\u003c/em\u003e\n should only be specified at the endpoints.  The endpoints default\n to curl 1 if not set.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
        "fct-type": "data",
        "title": "PathDir"
      },
      "index": {
        "description": "direction can be specified at any point of path curl should only be specified at the endpoints The endpoints default to curl if not set",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "PathDir",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Path Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:PathJoin",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePathJoin\u003c/code\u003e specifies the directions at both ends of a segment,\n and a join which describes the control points explicitly or implicitly.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
        "fct-type": "data",
        "title": "PathJoin"
      },
      "index": {
        "description": "PathJoin specifies the directions at both ends of segment and join which describes the control points explicitly or implicitly",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "PathJoin",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Path Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:Tension",
      "description": {
        "fct-descr": "\u003cp\u003eHigher \u003cem\u003eTension\u003c/em\u003e brings the path closer to a straight line\n between segments.  Equivalently, it brings the control points\n closer to the endpoints.  \u003ccode\u003eTensionAmt\u003c/code\u003e introduces a fixed tension.\n \u003ccode\u003eTensionAtLeast\u003c/code\u003e introduces a tension which will be increased if by\n so doing, an inflection point can be eliminated.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
        "fct-type": "data",
        "title": "Tension"
      },
      "index": {
        "description": "Higher Tension brings the path closer to straight line between segments Equivalently it brings the control points closer to the endpoints TensionAmt introduces fixed tension TensionAtLeast introduces tension which will be increased if by so doing an inflection point can be eliminated",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "Tension",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#t:TensionJoin",
      "description": {
        "fct-descr": "\u003cp\u003eTwo tensions and two directions completely determine the control\n points of a segment.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
        "fct-type": "data",
        "title": "TensionJoin"
      },
      "index": {
        "description": "Two tensions and two directions completely determine the control points of segment",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "TensionJoin",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tension Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:CJ",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "CJ",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
        "fct-type": "function",
        "title": "CJ"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "CJ",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "CJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFP",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFP",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
        "fct-type": "function",
        "title": "MFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFP",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathCycle",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
        "fct-type": "function",
        "title": "MFPathCycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPathCycle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFPath Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathEnd",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
        "fct-type": "function",
        "title": "MFPathEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPathEnd",
        "normalized": "P-\u003eMFPathData P",
        "package": "diagrams-contrib",
        "partial": "MFPath End",
        "signature": "P-\u003eMFPathData P"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathJoin",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PathJoin (Maybe PathDir) (Maybe BasicJoin) -\u003e MFPathData P -\u003e MFPathData J",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
        "fct-type": "function",
        "title": "MFPathJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPathJoin",
        "normalized": "PathJoin(Maybe PathDir)(Maybe BasicJoin)-\u003eMFPathData P-\u003eMFPathData J",
        "package": "diagrams-contrib",
        "partial": "MFPath Join",
        "signature": "PathJoin(Maybe PathDir)(Maybe BasicJoin)-\u003eMFPathData P-\u003eMFPathData J"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFPathPt",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e MFPathData J -\u003e MFPathData P",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPathData",
        "fct-type": "function",
        "title": "MFPathPt"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFPathPt",
        "normalized": "P-\u003eMFPathData J-\u003eMFPathData P",
        "package": "diagrams-contrib",
        "partial": "MFPath Pt",
        "signature": "P-\u003eMFPathData J-\u003eMFPathData P"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:MFS",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFS",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
        "fct-type": "function",
        "title": "MFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "MFS",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "MFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PJ",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PJ",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
        "fct-type": "function",
        "title": "PJ"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "PJ",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "PJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PathDirCurl",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PathDirCurl Curl",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
        "fct-type": "function",
        "title": "PathDirCurl"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "PathDirCurl",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Path Dir Curl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:PathDirDir",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PathDirDir Dir",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathDir",
        "fct-type": "function",
        "title": "PathDirDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "PathDirDir",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Path Dir Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TJ",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TJ",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
        "fct-type": "function",
        "title": "TJ"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "TJ",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "TJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TensionAmt",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TensionAmt Double",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
        "fct-type": "function",
        "title": "TensionAmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "TensionAmt",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tension Amt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:TensionAtLeast",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TensionAtLeast Double",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#Tension",
        "fct-type": "function",
        "title": "TensionAtLeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "TensionAtLeast",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tension At Least",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_c1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
        "fct-type": "function",
        "title": "_c1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_c1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_c2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#ControlJoin",
        "fct-type": "function",
        "title": "_c2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_c2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_d1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "d",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
        "fct-type": "function",
        "title": "_d1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_d1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_d2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "d",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
        "fct-type": "function",
        "title": "_d2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_d2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_j",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "j",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#PathJoin",
        "fct-type": "function",
        "title": "_j"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_j",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_loop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Bool",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
        "fct-type": "function",
        "title": "_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_loop",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_pj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PathJoin d j",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
        "fct-type": "function",
        "title": "_pj"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_pj",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_segs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[MetafontSegment d j]",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MFPath",
        "fct-type": "function",
        "title": "_segs"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_segs",
        "normalized": "[MetafontSegment a b]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[MetafontSegment d j]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_t1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tension",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
        "fct-type": "function",
        "title": "_t1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_t1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_t2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tension",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#TensionJoin",
        "fct-type": "function",
        "title": "_t2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_t2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_x1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
        "fct-type": "function",
        "title": "_x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_x1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:_x2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#MetafontSegment",
        "fct-type": "function",
        "title": "_x2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "_x2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:c1",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ControlJoin P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#c1",
        "fct-type": "function",
        "title": "c1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "c1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:c2",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' ControlJoin P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#c2",
        "fct-type": "function",
        "title": "c2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "c2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:d1",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j.  Lens' (PathJoin d j) d",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#d1",
        "fct-type": "function",
        "title": "d1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "d1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:d2",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j.  Lens' (PathJoin d j) d",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#d2",
        "fct-type": "function",
        "title": "d2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "d2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:getTension",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tension -\u003e Double",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#getTension",
        "fct-type": "function",
        "title": "getTension"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "getTension",
        "normalized": "Tension-\u003eDouble",
        "package": "diagrams-contrib",
        "partial": "Tension",
        "signature": "Tension-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:isCurl",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate to determine the constructor used.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PathDir -\u003e Bool",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#isCurl",
        "fct-type": "function",
        "title": "isCurl"
      },
      "index": {
        "description": "predicate to determine the constructor used",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "isCurl",
        "normalized": "PathDir-\u003eBool",
        "package": "diagrams-contrib",
        "partial": "Curl",
        "signature": "PathDir-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:j",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j j.  Lens (PathJoin d j) (PathJoin d j) j j",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#j",
        "fct-type": "function",
        "title": "j"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "j",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:loop",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j.  Lens' (MFPath d j) Bool",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "loop",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:pj",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j d j.  Lens (MetafontSegment d j) (MetafontSegment d j) (PathJoin d j) (PathJoin d j)",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#pj",
        "fct-type": "function",
        "title": "pj"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "pj",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:segs",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j d j.  Lens (MFPath d j) (MFPath d j) [MetafontSegment d j] [MetafontSegment d j]",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#segs",
        "fct-type": "function",
        "title": "segs"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "segs",
        "normalized": "a b c b d Lens(MFPath b c)(MFPath b c)[MetafontSegment b c][MetafontSegment b c]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "forall d j d j. Lens(MFPath d j)(MFPath d j)[MetafontSegment d j][MetafontSegment d j]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:t1",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' TensionJoin Tension",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#t1",
        "fct-type": "function",
        "title": "t1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "t1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:t2",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' TensionJoin Tension",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#t2",
        "fct-type": "function",
        "title": "t2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "t2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:x1",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j.  Lens' (MetafontSegment d j) P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#x1",
        "fct-type": "function",
        "title": "x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "x1",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont-Types.html#v:x2",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Metafont.Types",
        "fct-package": "diagrams-contrib",
        "fct-signature": "forall d j.  Lens' (MetafontSegment d j) P2",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Types.html#x2",
        "fct-type": "function",
        "title": "x2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Metafont Types",
        "module": "Diagrams.TwoD.Path.Metafont.Types",
        "name": "x2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine Diagrams Paths by specifying points and\n optionally directions and tension.  Calculate control points to\n maintain smooth curvature at each point, following rules\n implemented in Donald Knuth's \u003cem\u003eMetafont\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html",
        "fct-type": "module",
        "title": "Metafont"
      },
      "index": {
        "description": "Define Diagrams Paths by specifying points and optionally directions and tension Calculate control points to maintain smooth curvature at each point following rules implemented in Donald Knuth Metafont This module is intended to be imported qualified",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "Metafont",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Metafont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:flex",
      "description": {
        "fct-descr": "\u003cp\u003eflex ps draws a Trail through the points ps, such that at every\n point p &#8714; ps except the endpoints, the Trail is parallel to the\n line from the first to the last point.  This is the same as the\n flex command defined in plain MetaFont.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[P2] -\u003e t",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html#flex",
        "fct-type": "function",
        "title": "flex"
      },
      "index": {
        "description": "flex ps draws Trail through the points ps such that at every point ps except the endpoints the Trail is parallel to the line from the first to the last point This is the same as the flex command defined in plain MetaFont",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "flex",
        "normalized": "[P]-\u003ea",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[P]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromPath",
      "description": {
        "fct-descr": "\u003cp\u003eShould you wish to construct the MFPath in some other fashion,\n   fromPath makes a TrailLike directly from the MFPath\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFP -\u003e t",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html#fromPath",
        "fct-type": "function",
        "title": "fromPath"
      },
      "index": {
        "description": "Should you wish to construct the MFPath in some other fashion fromPath makes TrailLike directly from the MFPath",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "fromPath",
        "normalized": "MFP-\u003ea",
        "package": "diagrams-contrib",
        "partial": "Path",
        "signature": "MFP-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eMF.fromString parses a Text value in MetaFont syntax, and\n attempts to return a TrailLike.  Only a subset of Metafont is\n supported; see the tutorial for details.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Text -\u003e Either ParseError t",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "MF.fromString parses Text value in MetaFont syntax and attempts to return TrailLike Only subset of Metafont is supported see the tutorial for details",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "fromString",
        "normalized": "Text-\u003eEither ParseError a",
        "package": "diagrams-contrib",
        "partial": "String",
        "signature": "Text-\u003eEither ParseError t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:fromStrings",
      "description": {
        "fct-descr": "\u003cp\u003efromStrings takes a list of MetaFont strings, and returns either\n  all errors, or, if there are no parsing errors, a TrailLike for\n  each string.  fromStrings is provided as a convenience because the\n  MetaFont &-join is not supported.  \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e) on the TrailLike is\n  equivalent, with clearer semantics.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Text] -\u003e Either [ParseError] [t]",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html#fromStrings",
        "fct-type": "function",
        "title": "fromStrings"
      },
      "index": {
        "description": "fromStrings takes list of MetaFont strings and returns either all errors or if there are no parsing errors TrailLike for each string fromStrings is provided as convenience because the MetaFont join is not supported mconcat on the TrailLike is equivalent with clearer semantics",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "fromStrings",
        "normalized": "[Text]-\u003eEither[ParseError][a]",
        "package": "diagrams-contrib",
        "partial": "Strings",
        "signature": "[Text]-\u003eEither[ParseError][t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:metafont",
      "description": {
        "fct-descr": "\u003cp\u003emetafont converts a path defined in the Metafont combinator synax into a\n native Diagrams TrailLike.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "MFPathData P -\u003e t",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont.html#metafont",
        "fct-type": "function",
        "title": "metafont"
      },
      "index": {
        "description": "metafont converts path defined in the Metafont combinator synax into native Diagrams TrailLike",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "metafont",
        "normalized": "MFPathData P-\u003ea",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "MFPathData P-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Metafont.html#v:metafontParser",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003eText\u003c/code\u003e value in Metafont syntax, as destribed in /The\n METAFONTbook/.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Metafont",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Parser (MFPath (Maybe PathDir) BasicJoin)",
        "fct-source": "src/Diagrams-TwoD-Path-Metafont-Parser.html#metafontParser",
        "fct-type": "function",
        "title": "metafontParser"
      },
      "index": {
        "description": "Parse Text value in Metafont syntax as destribed in The METAFONTbook",
        "hierarchy": "Diagrams TwoD Path Metafont",
        "module": "Diagrams.TwoD.Path.Metafont",
        "name": "metafontParser",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdds compact aliases for turtle operations, to write code that looks even\n more Turtle-y.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html",
        "fct-type": "module",
        "title": "Aliases"
      },
      "index": {
        "description": "Adds compact aliases for turtle operations to write code that looks even more Turtle-y",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "Aliases",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Aliases",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:bk",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#bk",
        "fct-type": "function",
        "title": "bk"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "bk",
        "normalized": "Double-\u003eTurtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:fd",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#fd",
        "fct-type": "function",
        "title": "fd"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "fd",
        "normalized": "Double-\u003eTurtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:lt",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#lt",
        "fct-type": "function",
        "title": "lt"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "lt",
        "normalized": "Double-\u003eTurtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:pd",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#pd",
        "fct-type": "function",
        "title": "pd"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "pd",
        "normalized": "Turtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Turtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:pu",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#pu",
        "fct-type": "function",
        "title": "pu"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "pu",
        "normalized": "Turtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Turtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Aliases.html#v:rt",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e Turtle ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Aliases.html#rt",
        "fct-type": "function",
        "title": "rt"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Aliases",
        "module": "Diagrams.TwoD.Path.Turtle.Aliases",
        "name": "rt",
        "normalized": "Double-\u003eTurtle()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtle()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthors     :  Michael Sloan \u003ca\u003eat gmail\u003c/a\u003e, Deepak Jois \u003ca\u003edeepak.jois@gmail.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eA module consisting of core types and functions to represent and operate on\n a \"turtle\".\n\u003c/p\u003e\u003cp\u003eMore info about turtle graphics:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Turtle_graphics\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Authors Michael Sloan at gmail Deepak Jois deepak.jois@gmail.com module consisting of core types and functions to represent and operate on turtle More info about turtle graphics http en.wikipedia.org wiki Turtle graphics",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:PenStyle",
      "description": {
        "fct-descr": "\u003cp\u003eStyle attributes associated with the turtle pen\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
        "fct-type": "data",
        "title": "PenStyle"
      },
      "index": {
        "description": "Style attributes associated with the turtle pen",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "PenStyle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Pen Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:TurtlePath",
      "description": {
        "fct-descr": "\u003cp\u003eTurtle path type that captures a list of paths and the style attributes\n associated with them\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
        "fct-type": "data",
        "title": "TurtlePath"
      },
      "index": {
        "description": "Turtle path type that captures list of paths and the style attributes associated with them",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "TurtlePath",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#t:TurtleState",
      "description": {
        "fct-descr": "\u003cp\u003eCore turtle data type. A turtle needs to keep track of its current\n position, like its position, heading etc., and all the paths that it has\n traversed so far.\n\u003c/p\u003e\u003cp\u003eWe need to record a new path, everytime an attribute like style, pen position\n etc changes, so that we can separately track styles for each portion of the\n eventual path that the turtle took.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "data",
        "title": "TurtleState"
      },
      "index": {
        "description": "Core turtle data type turtle needs to keep track of its current position like its position heading etc and all the paths that it has traversed so far We need to record new path everytime an attribute like style pen position etc changes so that we can separately track styles for each portion of the eventual path that the turtle took",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "TurtleState",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:PenStyle",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PenStyle",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
        "fct-type": "function",
        "title": "PenStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "PenStyle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Pen Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:TurtlePath",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtlePath",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
        "fct-type": "function",
        "title": "TurtlePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "TurtlePath",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:TurtleState",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "TurtleState"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "TurtleState",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:backward",
      "description": {
        "fct-descr": "\u003cp\u003eMove the turtle backward by \u003ccode\u003ex\u003c/code\u003e units\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "backward"
      },
      "index": {
        "description": "Move the turtle backward by units",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "backward",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:closeCurrent",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState -\u003e TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#closeCurrent",
        "fct-type": "function",
        "title": "closeCurrent"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "closeCurrent",
        "normalized": "TurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Current",
        "signature": "TurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:currPenStyle",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent style of the pen\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PenStyle",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "currPenStyle"
      },
      "index": {
        "description": "Current style of the pen",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "currPenStyle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Pen Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:currTrail",
      "description": {
        "fct-descr": "\u003cp\u003ePath traversed by the turtle so far, without any style or pen\n attributes changing\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Located (Trail' Line R2)",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "currTrail"
      },
      "index": {
        "description": "Path traversed by the turtle so far without any style or pen attributes changing",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "currTrail",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Trail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eMove the turtle forward by \u003ccode\u003ex\u003c/code\u003e units\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "Move the turtle forward by units",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "forward",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:getTurtleDiagram",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a diagram from a turtle\n\u003c/p\u003e\u003cp\u003eApplies the styles to each trails in \u003ccode\u003epaths\u003c/code\u003e separately and combines them\n into a single diagram\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#getTurtleDiagram",
        "fct-type": "function",
        "title": "getTurtleDiagram"
      },
      "index": {
        "description": "Creates diagram from turtle Applies the styles to each trails in paths separately and combines them into single diagram",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "getTurtleDiagram",
        "normalized": "TurtleState-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Turtle Diagram",
        "signature": "TurtleState-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:getTurtlePath",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a path from a turtle, ignoring the styles.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState -\u003e Path R2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#getTurtlePath",
        "fct-type": "function",
        "title": "getTurtlePath"
      },
      "index": {
        "description": "Creates path from turtle ignoring the styles",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "getTurtlePath",
        "normalized": "TurtleState-\u003ePath R",
        "package": "diagrams-contrib",
        "partial": "Turtle Path",
        "signature": "TurtleState-\u003ePath R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:heading",
      "description": {
        "fct-descr": "\u003cp\u003eOrientation of the turtle in 2D space, given in degrees\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Deg",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "heading"
      },
      "index": {
        "description": "Orientation of the turtle in space given in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "heading",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:isPenDown",
      "description": {
        "fct-descr": "\u003cp\u003eState of the pen. \u003ccode\u003eFalse\u003c/code\u003e means that turtle movements will not draw\n anything\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Bool",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "isPenDown"
      },
      "index": {
        "description": "State of the pen False means that turtle movements will not draw anything",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "isPenDown",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Pen Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the turtle anti-clockwise (left)\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Turn the turtle anti-clockwise left",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "left",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:paths",
      "description": {
        "fct-descr": "\u003cp\u003eList of paths along with style information, traversed by the turtle\n previously\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[TurtlePath]",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "paths"
      },
      "index": {
        "description": "List of paths along with style information traversed by the turtle previously",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "paths",
        "normalized": "[TurtlePath]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[TurtlePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penColor",
      "description": {
        "fct-descr": "\u003cp\u003eColor of pen. Default is \u003ccode\u003eblack\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
        "fct-type": "function",
        "title": "penColor"
      },
      "index": {
        "description": "Color of pen Default is black",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penColor",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penDown",
      "description": {
        "fct-descr": "\u003cp\u003ePuts the turtle pen in &#8220;Down&#8221; mode. Turtle movements will cause drawing to\n happen\n\u003c/p\u003e\u003cp\u003eDoes nothing if the pen was already down. Otherwise, starts a new trail\n starting at the current position.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "penDown"
      },
      "index": {
        "description": "Puts the turtle pen in Down mode Turtle movements will cause drawing to happen Does nothing if the pen was already down Otherwise starts new trail starting at the current position",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penDown",
        "normalized": "TurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Down",
        "signature": "TurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penHop",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState -\u003e TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#penHop",
        "fct-type": "function",
        "title": "penHop"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penHop",
        "normalized": "TurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Hop",
        "signature": "TurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penPos",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent position. This is updated everytime the turtle moves\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtleState",
        "fct-type": "function",
        "title": "penPos"
      },
      "index": {
        "description": "Current position This is updated everytime the turtle moves",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penPos",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penStyle",
      "description": {
        "fct-descr": "\u003cp\u003eStyle\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "PenStyle",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
        "fct-type": "function",
        "title": "penStyle"
      },
      "index": {
        "description": "Style",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penStyle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penUp",
      "description": {
        "fct-descr": "\u003cp\u003ePuts the turtle pen in &#8220;Up&#8221; mode. Turtle movements will not draw anything\n\u003c/p\u003e\u003cp\u003eDoes nothing if the pen was already up. Otherwise, it creates a turtle with\n the current trail added to \u003ccode\u003epaths\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "penUp"
      },
      "index": {
        "description": "Puts the turtle pen in Up mode Turtle movements will not draw anything Does nothing if the pen was already up Otherwise it creates turtle with the current trail added to paths",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penUp",
        "normalized": "TurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Up",
        "signature": "TurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:penWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of pen. Default is 1.0\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#PenStyle",
        "fct-type": "function",
        "title": "penWidth"
      },
      "index": {
        "description": "Width of pen Default is",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "penWidth",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the turtle clockwise (right)\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Turn the turtle clockwise right",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "right",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setHeading",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the turtle to the given orientation, in degrees\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "setHeading"
      },
      "index": {
        "description": "Turn the turtle to the given orientation in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "setHeading",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Heading",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenColor",
      "description": {
        "fct-descr": "\u003cp\u003ealias of \u003ccode\u003esetPenColour\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "setPenColor"
      },
      "index": {
        "description": "alias of setPenColour",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "setPenColor",
        "normalized": "Colour Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Pen Color",
        "signature": "Colour Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenColour",
      "description": {
        "fct-descr": "\u003cp\u003eSet a new pen color for turtle.\n\u003c/p\u003e\u003cp\u003eIf pen is down, this adds the current trail to \u003ccode\u003epaths\u003c/code\u003e and starts a new empty\n trail.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "setPenColour"
      },
      "index": {
        "description": "Set new pen color for turtle If pen is down this adds the current trail to paths and starts new empty trail",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "setPenColour",
        "normalized": "Colour Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Pen Colour",
        "signature": "Colour Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenPos",
      "description": {
        "fct-descr": "\u003cp\u003eSet the turtle X/Y position.\n\u003c/p\u003e\u003cp\u003eIf pen is down and the current trail is non-empty, this will also add the\n current trail to the \u003ccode\u003epaths\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "setPenPos"
      },
      "index": {
        "description": "Set the turtle position If pen is down and the current trail is non-empty this will also add the current trail to the paths field",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "setPenPos",
        "normalized": "P-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Pen Pos",
        "signature": "P-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:setPenWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet a new pen width for turtle.\n\u003c/p\u003e\u003cp\u003eIf pen is down, this adds the current trail to \u003ccode\u003epaths\u003c/code\u003e and starts a new empty\n trail.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "setPenWidth"
      },
      "index": {
        "description": "Set new pen width for turtle If pen is down this adds the current trail to paths and starts new empty trail",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "setPenWidth",
        "normalized": "Double-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Pen Width",
        "signature": "Double-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:startTurtle",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial state of turtle. The turtle is located at the origin, at an\n orientation of 0 degrees with its pen position down. The pen style is\n \u003ccode\u003edefaultPenStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#startTurtle",
        "fct-type": "function",
        "title": "startTurtle"
      },
      "index": {
        "description": "The initial state of turtle The turtle is located at the origin at an orientation of degrees with its pen position down The pen style is defaultPenStyle",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "startTurtle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:towards",
      "description": {
        "fct-descr": "\u003cp\u003eSets the turtle orientation towards a given location.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2-\u003e TurtleState-\u003e TurtleState",
        "fct-type": "function",
        "title": "towards"
      },
      "index": {
        "description": "Sets the turtle orientation towards given location",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "towards",
        "normalized": "P-\u003eTurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eTurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:traceTurtle",
      "description": {
        "fct-descr": "\u003cp\u003ePrints out turtle representation and returns it. Use for debugging\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleState -\u003e TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#traceTurtle",
        "fct-type": "function",
        "title": "traceTurtle"
      },
      "index": {
        "description": "Prints out turtle representation and returns it Use for debugging",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "traceTurtle",
        "normalized": "TurtleState-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "TurtleState-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle-Internal.html#v:turtleTrail",
      "description": {
        "fct-descr": "\u003cp\u003ePath\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle.Internal",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Located (Trail R2)",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle-Internal.html#TurtlePath",
        "fct-type": "function",
        "title": "turtleTrail"
      },
      "index": {
        "description": "Path",
        "hierarchy": "Diagrams TwoD Path Turtle Internal",
        "module": "Diagrams.TwoD.Path.Turtle.Internal",
        "name": "turtleTrail",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Trail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStateful domain specific language for diagram paths, modelled after the\n classic \"turtle\" graphics language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html",
        "fct-type": "module",
        "title": "Turtle"
      },
      "index": {
        "description": "Stateful domain specific language for diagram paths modelled after the classic turtle graphics language",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "Turtle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#t:Turtle",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#Turtle",
        "fct-type": "type",
        "title": "Turtle"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "Turtle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#t:TurtleT",
      "description": {
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#TurtleT",
        "fct-type": "type",
        "title": "TurtleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "TurtleT",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:backward",
      "description": {
        "fct-descr": "\u003cp\u003eMove the turtle backward, directly away from the current heading.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#backward",
        "fct-type": "function",
        "title": "backward"
      },
      "index": {
        "description": "Move the turtle backward directly away from the current heading",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "backward",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:closeCurrent",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the current path , to the starting position of the current\n trail. Has no effect when the pen position is up.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#closeCurrent",
        "fct-type": "function",
        "title": "closeCurrent"
      },
      "index": {
        "description": "Closes the current path to the starting position of the current trail Has no effect when the pen position is up",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "closeCurrent",
        "normalized": "TurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Current",
        "signature": "TurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:drawTurtle",
      "description": {
        "fct-descr": "\u003cp\u003eRun the turtle, yielding a diagram.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Turtle a -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#drawTurtle",
        "fct-type": "function",
        "title": "drawTurtle"
      },
      "index": {
        "description": "Run the turtle yielding diagram",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "drawTurtle",
        "normalized": "Turtle a-\u003eDiagram b R",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "Turtle a-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:drawTurtleT",
      "description": {
        "fct-descr": "\u003cp\u003eA more general way to run the turtle.  Returns a computation in\n   the underlying monad \u003ccode\u003em\u003c/code\u003e yielding the final diagram.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m a -\u003e m (Diagram b R2)",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#drawTurtleT",
        "fct-type": "function",
        "title": "drawTurtleT"
      },
      "index": {
        "description": "more general way to run the turtle Returns computation in the underlying monad yielding the final diagram",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "drawTurtleT",
        "normalized": "TurtleT a b-\u003ea(Diagram c R)",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "TurtleT m a-\u003em(Diagram b R)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eMove the turtle forward, along the current heading.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "Move the turtle forward along the current heading",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "forward",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:heading",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current turtle angle, in degrees.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m Double",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#heading",
        "fct-type": "function",
        "title": "heading"
      },
      "index": {
        "description": "Get the current turtle angle in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "heading",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:isDown",
      "description": {
        "fct-descr": "\u003cp\u003eQueries whether the pen is currently drawing a path or not.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m Bool",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#isDown",
        "fct-type": "function",
        "title": "isDown"
      },
      "index": {
        "description": "Queries whether the pen is currently drawing path or not",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "isDown",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eModify the current heading to the left by the specified angle in degrees.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Modify the current heading to the left by the specified angle in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "left",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penDown",
      "description": {
        "fct-descr": "\u003cp\u003eEnds the current path, and enters into \u003ca\u003epenDown\u003c/a\u003e mode\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#penDown",
        "fct-type": "function",
        "title": "penDown"
      },
      "index": {
        "description": "Ends the current path and enters into penDown mode",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "penDown",
        "normalized": "TurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Down",
        "signature": "TurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penHop",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new trail at current position\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#penHop",
        "fct-type": "function",
        "title": "penHop"
      },
      "index": {
        "description": "Start new trail at current position",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "penHop",
        "normalized": "TurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Hop",
        "signature": "TurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:penUp",
      "description": {
        "fct-descr": "\u003cp\u003eEnds the current path, and enters into \u003ca\u003epenUp\u003c/a\u003e mode\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#penUp",
        "fct-type": "function",
        "title": "penUp"
      },
      "index": {
        "description": "Ends the current path and enters into penUp mode",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "penUp",
        "normalized": "TurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Up",
        "signature": "TurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:pos",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current turtle X/Y position.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m P2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#pos",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "Get the current turtle position",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "pos",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eModify the current heading to the right by the specified angle in degrees.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Modify the current heading to the right by the specified angle in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "right",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:runTurtle",
      "description": {
        "fct-descr": "\u003cp\u003eRun the turtle, yielding the final turtle state.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Turtle a -\u003e TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#runTurtle",
        "fct-type": "function",
        "title": "runTurtle"
      },
      "index": {
        "description": "Run the turtle yielding the final turtle state",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "runTurtle",
        "normalized": "Turtle a-\u003eTurtleState",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "Turtle a-\u003eTurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:runTurtleT",
      "description": {
        "fct-descr": "\u003cp\u003eA more general way to run the turtle. Returns a computation in the\n underlying monad \u003ccode\u003em\u003c/code\u003e yielding the final turtle state.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m a -\u003e m TurtleState",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#runTurtleT",
        "fct-type": "function",
        "title": "runTurtleT"
      },
      "index": {
        "description": "more general way to run the turtle Returns computation in the underlying monad yielding the final turtle state",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "runTurtleT",
        "normalized": "TurtleT a b-\u003ea TurtleState",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "TurtleT m a-\u003em TurtleState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setHeading",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current turtle angle, in degrees.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#setHeading",
        "fct-type": "function",
        "title": "setHeading"
      },
      "index": {
        "description": "Set the current turtle angle in degrees",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "setHeading",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Heading",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPenColor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the pen color\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Colour Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#setPenColor",
        "fct-type": "function",
        "title": "setPenColor"
      },
      "index": {
        "description": "Sets the pen color",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "setPenColor",
        "normalized": "Colour Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Pen Color",
        "signature": "Colour Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPenWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSets the pen size\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#setPenWidth",
        "fct-type": "function",
        "title": "setPenWidth"
      },
      "index": {
        "description": "Sets the pen size",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "setPenWidth",
        "normalized": "Double-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Pen Width",
        "signature": "Double-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:setPos",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current turtle X/Y position.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#setPos",
        "fct-type": "function",
        "title": "setPos"
      },
      "index": {
        "description": "Set the current turtle position",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "setPos",
        "normalized": "P-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "Pos",
        "signature": "P-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:sketchTurtle",
      "description": {
        "fct-descr": "\u003cp\u003eRun the turtle, ignoring any pen style commands and yielding a\n   2D path.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Turtle a -\u003e Path R2",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#sketchTurtle",
        "fct-type": "function",
        "title": "sketchTurtle"
      },
      "index": {
        "description": "Run the turtle ignoring any pen style commands and yielding path",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "sketchTurtle",
        "normalized": "Turtle a-\u003ePath R",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "Turtle a-\u003ePath R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:sketchTurtleT",
      "description": {
        "fct-descr": "\u003cp\u003eA more general way to run the turtle. Returns a computation in\n   the underlying monad \u003ccode\u003em\u003c/code\u003e, ignoring any pen style commands and\n   yielding a 2D path.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TurtleT m a -\u003e m (Path R2)",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#sketchTurtleT",
        "fct-type": "function",
        "title": "sketchTurtleT"
      },
      "index": {
        "description": "more general way to run the turtle Returns computation in the underlying monad ignoring any pen style commands and yielding path",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "sketchTurtleT",
        "normalized": "TurtleT a b-\u003ea(Path R)",
        "package": "diagrams-contrib",
        "partial": "Turtle",
        "signature": "TurtleT m a-\u003em(Path R)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Path-Turtle.html#v:towards",
      "description": {
        "fct-descr": "\u003cp\u003eSets the heading towards a given location.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Path.Turtle",
        "fct-package": "diagrams-contrib",
        "fct-signature": "P2 -\u003e TurtleT m ()",
        "fct-source": "src/Diagrams-TwoD-Path-Turtle.html#towards",
        "fct-type": "function",
        "title": "towards"
      },
      "index": {
        "description": "Sets the heading towards given location",
        "hierarchy": "Diagrams TwoD Path Turtle",
        "module": "Diagrams.TwoD.Path.Turtle",
        "name": "towards",
        "normalized": "P-\u003eTurtleT a()",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "P-\u003eTurtleT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of Sunburst Partitions. A radial view of a Treemap.\n\u003c/p\u003e\u003cp\u003eThe partitions are created without examining the contents of the tree nodes\n which allows us to create a sunburst for any \u003ccode\u003eTree a\u003c/code\u003e. As a consequence we cannot\n base the size or color of the sections on the data in the tree, but only\n on depth and number of children. Of course the code could easily be adapted\n to handle more specific tree data.\n\u003c/p\u003e\u003cp\u003eSee John Stasko, Richard Catrambone, \"An evaluation of space-filling\n information visualizations for depicting hierarchical structures\", 2000.\n \u003ca\u003ehttp://www.cc.gatech.edu/~john.stasko/papers/ijhcs00.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html",
        "fct-type": "module",
        "title": "Sunburst"
      },
      "index": {
        "description": "Generation of Sunburst Partitions radial view of Treemap The partitions are created without examining the contents of the tree nodes which allows us to create sunburst for any Tree As consequence we cannot base the size or color of the sections on the data in the tree but only on depth and number of children Of course the code could easily be adapted to handle more specific tree data See John Stasko Richard Catrambone An evaluation of space-filling information visualizations for depicting hierarchical structures http www.cc.gatech.edu john.stasko papers ijhcs00.pdf",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "Sunburst",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Sunburst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#t:SunburstOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
        "fct-type": "data",
        "title": "SunburstOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "SunburstOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Sunburst Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:SunburstOpts",
      "description": {
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "SunburstOpts",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
        "fct-type": "function",
        "title": "SunburstOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "SunburstOpts",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Sunburst Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_colors",
      "description": {
        "fct-descr": "\u003cp\u003eColor list one for each ring.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Colour Double]",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
        "fct-type": "function",
        "title": "_colors"
      },
      "index": {
        "description": "Color list one for each ring",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "_colors",
        "normalized": "[Colour Double]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[Colour Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_radius",
      "description": {
        "fct-descr": "\u003cp\u003eRelative size of the root circle, usually 1.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
        "fct-type": "function",
        "title": "_radius"
      },
      "index": {
        "description": "Relative size of the root circle usually",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "_radius",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:_sectionWidth",
      "description": {
        "fct-descr": "\u003cp\u003eRelative width of the sections.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Double",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#SunburstOpts",
        "fct-type": "function",
        "title": "_sectionWidth"
      },
      "index": {
        "description": "Relative width of the sections",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "_sectionWidth",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:colors",
      "description": {
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' SunburstOpts [Colour Double]",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#colors",
        "fct-type": "function",
        "title": "colors"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "colors",
        "normalized": "Lens' SunburstOpts[Colour Double]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Lens' SunburstOpts[Colour Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:radius",
      "description": {
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' SunburstOpts Double",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#radius",
        "fct-type": "function",
        "title": "radius"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "radius",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sectionWidth",
      "description": {
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Lens' SunburstOpts Double",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#sectionWidth",
        "fct-type": "function",
        "title": "sectionWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "sectionWidth",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sunburst",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esunburst\u003c/code\u003e with default opts\n\u003c/p\u003e\u003cpre\u003e import Diagrams.TwoD.Sunburst\n import Data.Tree (unfoldTree)\n aTree = unfoldTree (\\n -\u003e (0, replicate n (n-1))) 6\n sunburstEx = sunburst aTree # pad 1.1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Sunburst_sunburstEx.svg#diagram=sunburstEx&width=500\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tree a -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#sunburst",
        "fct-type": "function",
        "title": "sunburst"
      },
      "index": {
        "description": "sunburst with default opts import Diagrams.TwoD.Sunburst import Data.Tree unfoldTree aTree unfoldTree replicate n-1 sunburstEx sunburst aTree pad",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "sunburst",
        "normalized": "Tree a-\u003eDiagram b R",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Tree a-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Sunburst.html#v:sunburst-39-",
      "description": {
        "fct-descr": "\u003cp\u003eTake any \u003ccode\u003eTree a\u003c/code\u003e and \u003ccode\u003eSunburstOpts\u003c/code\u003e and make a sunburst partition.\n   Basically a treemap with a radial layout.\n   The root is the center of the sunburst and its circumference is divided\n   evenly according to the number of child nodes it has. Then each of those\n   sections is treated the same way.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Sunburst",
        "fct-package": "diagrams-contrib",
        "fct-signature": "SunburstOpts -\u003e Tree a -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Sunburst.html#sunburst%27",
        "fct-type": "function",
        "title": "sunburst'"
      },
      "index": {
        "description": "Take any Tree and SunburstOpts and make sunburst partition Basically treemap with radial layout The root is the center of the sunburst and its circumference is divided evenly according to the number of child nodes it has Then each of those sections is treated the same way",
        "hierarchy": "Diagrams TwoD Sunburst",
        "module": "Diagrams.TwoD.Sunburst",
        "name": "sunburst'",
        "normalized": "SunburstOpts-\u003eTree a-\u003eDiagram b R",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "SunburstOpts-\u003eTree a-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for generating and drawing plane tilings made of regular\n polygons.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-TwoD-Tilings.html",
        "fct-type": "module",
        "title": "Tilings"
      },
      "index": {
        "description": "Tools for generating and drawing plane tilings made of regular polygons",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Tilings",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tilings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eAn edge is represented by a pair of vertices.  Do not use the\n   \u003ccode\u003eEdge\u003c/code\u003e constructor directly; use \u003ccode\u003e\u003ca\u003emkEdge\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Edge",
        "fct-type": "data",
        "title": "Edge"
      },
      "index": {
        "description": "An edge is represented by pair of vertices Do not use the Edge constructor directly use mkEdge instead",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Edge",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003eA polygon is represented by a list of its vertices, in\n   counterclockwise order.  However, the \u003ccode\u003eEq\u003c/code\u003e and \u003ccode\u003eOrd\u003c/code\u003e instances\n   for polygons ignore the order.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "newtype",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Polygon",
        "fct-type": "newtype",
        "title": "Polygon"
      },
      "index": {
        "description": "polygon is represented by list of its vertices in counterclockwise order However the Eq and Ord instances for polygons ignore the order",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Polygon",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Q2",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Q2",
        "fct-type": "type",
        "title": "Q2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Q2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Q236",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eQ236 a b c d\u003c/code\u003e represents \u003ccode\u003ea + b sqrt(2) + c sqrt(3) + d\n   sqrt(6)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Q236",
        "fct-type": "data",
        "title": "Q236"
      },
      "index": {
        "description": "Q236 represents sqrt sqrt sqrt",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Q236",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:Tiling",
      "description": {
        "fct-descr": "\u003cp\u003eA tiling, represented as a sort of zipper. \u003ccode\u003ecurConfig\u003c/code\u003e indicates\n   the polygons around the current vertex, in couterclockwise order\n   starting from the edge along which we entered the vertex.\n   \u003ccode\u003efollow\u003c/code\u003e allows one to move along an edge to an adjacent vertex,\n   where the edges are numbered counterclockwise from zero,\n   beginning with the edge along which we entered the current\n   vertex.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Tiling",
        "fct-type": "data",
        "title": "Tiling"
      },
      "index": {
        "description": "tiling represented as sort of zipper curConfig indicates the polygons around the current vertex in couterclockwise order starting from the edge along which we entered the vertex follow allows one to move along an edge to an adjacent vertex where the edges are numbered counterclockwise from zero beginning with the edge along which we entered the current vertex",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Tiling",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eTilingM\u003c/code\u003e monad tracks a \u003ccode\u003eTilingState\u003c/code\u003e, and can output\n   elements of some monoid \u003ccode\u003ew\u003c/code\u003e along the way.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingM",
        "fct-type": "type",
        "title": "TilingM"
      },
      "index": {
        "description": "The TilingM monad tracks TilingState and can output elements of some monoid along the way",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "TilingM",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingPoly",
      "description": {
        "fct-descr": "\u003cp\u003eRegular polygons which may appear in a tiling of the plane.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "data",
        "title": "TilingPoly"
      },
      "index": {
        "description": "Regular polygons which may appear in tiling of the plane",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "TilingPoly",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#t:TilingState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state maintained while generating a tiling, recording which\n   vertices have been visited and which edges and polygons have been\n   drawn.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingState",
        "fct-type": "data",
        "title": "TilingState"
      },
      "index": {
        "description": "The state maintained while generating tiling recording which vertices have been visited and which edges and polygons have been drawn",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "TilingState",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Dodecagon",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Dodecagon",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "function",
        "title": "Dodecagon"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Dodecagon",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Dodecagon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Hexagon",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Hexagon",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "function",
        "title": "Hexagon"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Hexagon",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Hexagon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Octagon",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Octagon",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "function",
        "title": "Octagon"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Octagon",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Octagon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Polygon",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Polygon",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Polygon",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Polygon",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Square",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Square",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "function",
        "title": "Square"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Square",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:TP",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TP",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingState",
        "fct-type": "function",
        "title": "TP"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "TP",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "TP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Tiling",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Tiling",
        "fct-type": "function",
        "title": "Tiling"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Tiling",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:Triangle",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Triangle",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingPoly",
        "fct-type": "function",
        "title": "Triangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "Triangle",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:curConfig",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[TilingPoly]",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Tiling",
        "fct-type": "function",
        "title": "curConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "curConfig",
        "normalized": "[TilingPoly]",
        "package": "diagrams-contrib",
        "partial": "Config",
        "signature": "[TilingPoly]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawEdge",
      "description": {
        "fct-descr": "\u003cp\u003eDraw an edge with the given style.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Style R2 -\u003e Edge -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#drawEdge",
        "fct-type": "function",
        "title": "drawEdge"
      },
      "index": {
        "description": "Draw an edge with the given style",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "drawEdge",
        "normalized": "Style R-\u003eEdge-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Edge",
        "signature": "Style R-\u003eEdge-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawPoly",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a polygon with the given style.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "(Polygon -\u003e Style R2) -\u003e Polygon -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#drawPoly",
        "fct-type": "function",
        "title": "drawPoly"
      },
      "index": {
        "description": "Draw polygon with the given style",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "drawPoly",
        "normalized": "(Polygon-\u003eStyle R)-\u003ePolygon-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Poly",
        "signature": "(Polygon-\u003eStyle R)-\u003ePolygon-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawTiling",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tiling, with a given width and height and default colors\n   for the polygons.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling -\u003e Double -\u003e Double -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#drawTiling",
        "fct-type": "function",
        "title": "drawTiling"
      },
      "index": {
        "description": "Draw tiling with given width and height and default colors for the polygons",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "drawTiling",
        "normalized": "Tiling-\u003eDouble-\u003eDouble-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": "Tiling-\u003eDouble-\u003eDouble-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:drawTilingStyled",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a tiling with customizable styles for the polygons.  This is\n   just an example, which you can use as the basis of your own\n   tiling-drawing routine.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Style R2 -\u003e (Polygon -\u003e Style R2) -\u003e Tiling -\u003e Double -\u003e Double -\u003e Diagram b R2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#drawTilingStyled",
        "fct-type": "function",
        "title": "drawTilingStyled"
      },
      "index": {
        "description": "Draw tiling with customizable styles for the polygons This is just an example which you can use as the basis of your own tiling-drawing routine",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "drawTilingStyled",
        "normalized": "Style R-\u003e(Polygon-\u003eStyle R)-\u003eTiling-\u003eDouble-\u003eDouble-\u003eDiagram a R",
        "package": "diagrams-contrib",
        "partial": "Tiling Styled",
        "signature": "Style R-\u003e(Polygon-\u003eStyle R)-\u003eTiling-\u003eDouble-\u003eDouble-\u003eDiagram b R"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:follow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Int -\u003e Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Tiling",
        "fct-type": "function",
        "title": "follow"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "follow",
        "normalized": "Int-\u003eTiling",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Int-\u003eTiling"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:generateTiling",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling-\u003e Q2-\u003e Q2-\u003e (Q2 -\u003e Bool)-\u003e (Edge -\u003e w)-\u003e (Polygon -\u003e w)-\u003e w",
        "fct-type": "function",
        "title": "generateTiling"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "generateTiling",
        "normalized": "Tiling-\u003eQ-\u003eQ-\u003e(Q-\u003eBool)-\u003e(Edge-\u003ea)-\u003e(Polygon-\u003ea)-\u003ea",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": "Tiling-\u003eQ-\u003eQ-\u003e(Q-\u003eBool)-\u003e(Edge-\u003ew)-\u003e(Polygon-\u003ew)-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:initTilingState",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingState",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#initTilingState",
        "fct-type": "function",
        "title": "initTilingState"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "initTilingState",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Tiling State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:mk3Tiling",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a tiling with the same 3 polygons surrounding each vertex.\n   The argument is the number of sides of the polygons surrounding a vertex.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Int] -\u003e Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#mk3Tiling",
        "fct-type": "function",
        "title": "mk3Tiling"
      },
      "index": {
        "description": "Create tiling with the same polygons surrounding each vertex The argument is the number of sides of the polygons surrounding vertex",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "mk3Tiling",
        "normalized": "[Int]-\u003eTiling",
        "package": "diagrams-contrib",
        "partial": "Tiling",
        "signature": "[Int]-\u003eTiling"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:mkEdge",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for \u003ccode\u003eEdge\u003c/code\u003e, which puts the vertices in a\n   canonical order.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q2 -\u003e Q2 -\u003e Edge",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#mkEdge",
        "fct-type": "function",
        "title": "mkEdge"
      },
      "index": {
        "description": "Smart constructor for Edge which puts the vertices in canonical order",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "mkEdge",
        "normalized": "Q-\u003eQ-\u003eEdge",
        "package": "diagrams-contrib",
        "partial": "Edge",
        "signature": "Q-\u003eQ-\u003eEdge"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyColor",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e Colour a",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polyColor",
        "fct-type": "function",
        "title": "polyColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polyColor",
        "normalized": "TilingPoly-\u003eColour a",
        "package": "diagrams-contrib",
        "partial": "Color",
        "signature": "TilingPoly-\u003eColour a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyCos",
      "description": {
        "fct-descr": "\u003cp\u003eCosine of a polygon's internal angle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e Q236",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polyCos",
        "fct-type": "function",
        "title": "polyCos"
      },
      "index": {
        "description": "Cosine of polygon internal angle",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polyCos",
        "normalized": "TilingPoly-\u003eQ",
        "package": "diagrams-contrib",
        "partial": "Cos",
        "signature": "TilingPoly-\u003eQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyExtRotation",
      "description": {
        "fct-descr": "\u003cp\u003eRotate by polygon external angle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e Q2 -\u003e Q2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polyExtRotation",
        "fct-type": "function",
        "title": "polyExtRotation"
      },
      "index": {
        "description": "Rotate by polygon external angle",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polyExtRotation",
        "normalized": "TilingPoly-\u003eQ-\u003eQ",
        "package": "diagrams-contrib",
        "partial": "Ext Rotation",
        "signature": "TilingPoly-\u003eQ-\u003eQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyFromSides",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e TilingPoly",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polyFromSides",
        "fct-type": "function",
        "title": "polyFromSides"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polyFromSides",
        "normalized": "a-\u003eTilingPoly",
        "package": "diagrams-contrib",
        "partial": "From Sides",
        "signature": "a-\u003eTilingPoly"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polyRotation",
      "description": {
        "fct-descr": "\u003cp\u003eRotate by polygon internal angle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e Q2 -\u003e Q2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polyRotation",
        "fct-type": "function",
        "title": "polyRotation"
      },
      "index": {
        "description": "Rotate by polygon internal angle",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polyRotation",
        "normalized": "TilingPoly-\u003eQ-\u003eQ",
        "package": "diagrams-contrib",
        "partial": "Rotation",
        "signature": "TilingPoly-\u003eQ-\u003eQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polySides",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e a",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polySides",
        "fct-type": "function",
        "title": "polySides"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polySides",
        "normalized": "TilingPoly-\u003ea",
        "package": "diagrams-contrib",
        "partial": "Sides",
        "signature": "TilingPoly-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polySin",
      "description": {
        "fct-descr": "\u003cp\u003eSine of a polygon's internal angle.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "TilingPoly -\u003e Q236",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#polySin",
        "fct-type": "function",
        "title": "polySin"
      },
      "index": {
        "description": "Sine of polygon internal angle",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polySin",
        "normalized": "TilingPoly-\u003eQ",
        "package": "diagrams-contrib",
        "partial": "Sin",
        "signature": "TilingPoly-\u003eQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:polygonVertices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Q2]",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#Polygon",
        "fct-type": "function",
        "title": "polygonVertices"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "polygonVertices",
        "normalized": "[Q]",
        "package": "diagrams-contrib",
        "partial": "Vertices",
        "signature": "[Q]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rot",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "a -\u003e [t] -\u003e [t]",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#rot",
        "fct-type": "function",
        "title": "rot"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "rot",
        "normalized": "a-\u003e[b]-\u003e[b]",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "a-\u003e[t]-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt2",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q236",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#rt2",
        "fct-type": "function",
        "title": "rt2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "rt2",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt3",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q236",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#rt3",
        "fct-type": "function",
        "title": "rt3"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "rt3",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:rt6",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q236",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#rt6",
        "fct-type": "function",
        "title": "rt6"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "rt6",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:semiregular",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a tiling where every vertex is the same up to rotation and\n   translation (but \u003cem\u003enot\u003c/em\u003e reflection).  Arbitrarily pick one of the\n   edges emanating from a vertex and number the edges\n   counterclockwise starting with 0 for the chosen edge.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "[Int]-\u003e [Int]-\u003e Tiling",
        "fct-type": "function",
        "title": "semiregular"
      },
      "index": {
        "description": "Create tiling where every vertex is the same up to rotation and translation but not reflection Arbitrarily pick one of the edges emanating from vertex and number the edges counterclockwise starting with for the chosen edge",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "semiregular",
        "normalized": "[Int]-\u003e[Int]-\u003eTiling",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "[Int]-\u003e[Int]-\u003eTiling"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3D.svg#diagram=t3D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t3",
        "fct-type": "function",
        "title": "t3"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t3",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t31212",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t31212D.svg#diagram=t31212D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t31212",
        "fct-type": "function",
        "title": "t31212"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t31212",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33336L",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33336LD.svg#diagram=t33336LD&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t33336L",
        "fct-type": "function",
        "title": "t33336L"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t33336L",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33336R",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33336RD.svg#diagram=t33336RD&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t33336R",
        "fct-type": "function",
        "title": "t33336R"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t33336R",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33344",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33344D.svg#diagram=t33344D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t33344",
        "fct-type": "function",
        "title": "t33344"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t33344",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t33434",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t33434D.svg#diagram=t33434D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t33434",
        "fct-type": "function",
        "title": "t33434"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t33434",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3464",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3464D.svg#diagram=t3464D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t3464",
        "fct-type": "function",
        "title": "t3464"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t3464",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t3636",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t3636D.svg#diagram=t3636D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t3636",
        "fct-type": "function",
        "title": "t3636"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t3636",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t4",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t4D.svg#diagram=t4D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t4",
        "fct-type": "function",
        "title": "t4"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t4",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t4612",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t4612D.svg#diagram=t4612D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t4612",
        "fct-type": "function",
        "title": "t4612"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t4612",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t488",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t488D.svg#diagram=t488D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t488",
        "fct-type": "function",
        "title": "t488"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t488",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:t6",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cimg src=\"diagrams/src_Diagrams_TwoD_Tilings_t6D.svg#diagram=t6D&width=300\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Tiling",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#t6",
        "fct-type": "function",
        "title": "t6"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "t6",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toDouble",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003eQ236\u003c/code\u003e value to a \u003ccode\u003eDouble\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q236 -\u003e Double",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#toDouble",
        "fct-type": "function",
        "title": "toDouble"
      },
      "index": {
        "description": "Convert Q236 value to Double",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "toDouble",
        "normalized": "Q-\u003eDouble",
        "package": "diagrams-contrib",
        "partial": "Double",
        "signature": "Q-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toP2",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q2 -\u003e P2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#toP2",
        "fct-type": "function",
        "title": "toP2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "toP2",
        "normalized": "Q-\u003eP",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Q-\u003eP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:toR2",
      "description": {
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Q2 -\u003e R2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#toR2",
        "fct-type": "function",
        "title": "toR2"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "toR2",
        "normalized": "Q-\u003eR",
        "package": "diagrams-contrib",
        "partial": "",
        "signature": "Q-\u003eR"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedEdges",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Set Edge",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingState",
        "fct-type": "function",
        "title": "visitedEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "visitedEdges",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Edges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedPolygons",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Set Polygon",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingState",
        "fct-type": "function",
        "title": "visitedPolygons"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "visitedPolygons",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Polygons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-contrib/docs/Diagrams-TwoD-Tilings.html#v:visitedVertices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Diagrams.TwoD.Tilings",
        "fct-package": "diagrams-contrib",
        "fct-signature": "Set Q2",
        "fct-source": "src/Diagrams-TwoD-Tilings.html#TilingState",
        "fct-type": "function",
        "title": "visitedVertices"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams TwoD Tilings",
        "module": "Diagrams.TwoD.Tilings",
        "name": "visitedVertices",
        "normalized": "",
        "package": "diagrams-contrib",
        "partial": "Vertices",
        "signature": ""
      }
    }
  }
]