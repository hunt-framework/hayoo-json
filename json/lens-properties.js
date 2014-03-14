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
        "word": "lens-properties"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of properties that can be tested with QuickCheck, to guarantee\n that you are working with valid \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003ees, \u003ccode\u003e\u003ca\u003eSetter\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003es and\n \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Lens.Properties",
          "name": "Properties",
          "package": "lens-properties",
          "source": "src/Control-Lens-Properties.html",
          "type": "module"
        },
        "index": {
          "description": "collection of properties that can be tested with QuickCheck to guarantee that you are working with valid Lens es Setter Traversal Iso and Prism",
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "Properties",
          "package": "lens-properties",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens.Properties",
          "name": "isIso",
          "package": "lens-properties",
          "signature": "Simple Iso s a -\u003e Property",
          "source": "src/Control-Lens-Properties.html#isIso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "isIso",
          "normalized": "Simple Iso a b-\u003eProperty",
          "package": "lens-properties",
          "partial": "Iso",
          "signature": "Simple Iso s a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#v:isIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e is only legal if it is a valid \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eisTraversal\u003c/a\u003e\u003c/code\u003e for\n what this means), and if the following laws hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003eview l (set l b a)  &#8801; b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eset l (view l a) a  &#8801; a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eset l c (set l b a) &#8801; set l c a\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Lens.Properties",
          "name": "isLens",
          "package": "lens-properties",
          "signature": "Simple Lens s a -\u003e Property",
          "source": "src/Control-Lens-Properties.html#isLens",
          "type": "function"
        },
        "index": {
          "description": "Lens is only legal if it is valid Traversal see isTraversal for what this means and if the following laws hold view set set view set set set",
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "isLens",
          "normalized": "Simple Lens a b-\u003eProperty",
          "package": "lens-properties",
          "partial": "Lens",
          "signature": "Simple Lens s a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#v:isLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens.Properties",
          "name": "isPrism",
          "package": "lens-properties",
          "signature": "Simple Prism s a -\u003e Property",
          "source": "src/Control-Lens-Properties.html#isPrism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "isPrism",
          "normalized": "Simple Prism a b-\u003eProperty",
          "package": "lens-properties",
          "partial": "Prism",
          "signature": "Simple Prism s a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#v:isPrism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSetter\u003c/a\u003e\u003c/code\u003e is only legal if the following 3 laws hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003eset l y (set l x a) &#8801; set l y a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eover l id &#8801; id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eover l f . over l g &#8801; over l (f . g)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Lens.Properties",
          "name": "isSetter",
          "package": "lens-properties",
          "signature": "Simple Setter s a -\u003e Property",
          "source": "src/Control-Lens-Properties.html#isSetter",
          "type": "function"
        },
        "index": {
          "description": "Setter is only legal if the following laws hold set set set over id id over over over",
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "isSetter",
          "normalized": "Simple Setter a b-\u003eProperty",
          "package": "lens-properties",
          "partial": "Setter",
          "signature": "Simple Setter s a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#v:isSetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e is only legal if it is a valid \u003ccode\u003e\u003ca\u003eSetter\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eisSetter\u003c/a\u003e\u003c/code\u003e for\n what makes a \u003ccode\u003e\u003ca\u003eSetter\u003c/a\u003e\u003c/code\u003e valid), and the following laws hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003et pure &#8801; pure\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efmap (t f) . t g &#8801; getCompose . t (Compose . fmap f . g)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Lens.Properties",
          "name": "isTraversal",
          "package": "lens-properties",
          "signature": "Simple Traversal s a -\u003e Property",
          "source": "src/Control-Lens-Properties.html#isTraversal",
          "type": "function"
        },
        "index": {
          "description": "Traversal is only legal if it is valid Setter see isSetter for what makes Setter valid and the following laws hold pure pure fmap getCompose Compose fmap",
          "hierarchy": "Control Lens Properties",
          "module": "Control.Lens.Properties",
          "name": "isTraversal",
          "normalized": "Simple Traversal a b-\u003eProperty",
          "package": "lens-properties",
          "partial": "Traversal",
          "signature": "Simple Traversal s a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-properties/docs/Control-Lens-Properties.html#v:isTraversal"
      }
    }
  ]
]