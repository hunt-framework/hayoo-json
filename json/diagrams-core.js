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
        "word": "diagrams-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides tools for compiling \u003ccode\u003eQDiagrams\u003c/code\u003e into a more\n convenient and optimized tree form, suitable for use by backends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Compile",
          "name": "Compile",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Compile.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides tools for compiling QDiagrams into more convenient and optimized tree form suitable for use by backends",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "Compile",
          "package": "diagrams-core",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Compile",
          "name": "RNode",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RNode",
          "package": "diagrams-core",
          "partial": "RNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#t:RNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRTree\u003c/a\u003e\u003c/code\u003e is a compiled and optimized representation of a\n   \u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e, which can be used by backends.  They have several\n   invariants which backends may rely upon:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All non-frozen transformations have been pushed all the way to\n     the leaves.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eRPrim\u003c/code\u003e nodes never have any children.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Diagrams.Core.Compile",
          "name": "RTree",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#RTree",
          "type": "type"
        },
        "index": {
          "description": "An RTree is compiled and optimized representation of QDiagram which can be used by backends They have several invariants which backends may rely upon All non-frozen transformations have been pushed all the way to the leaves RPrim nodes never have any children",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RTree",
          "package": "diagrams-core",
          "partial": "RTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#t:RTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Compile\",\"Diagrams.Core.Types\"]",
          "name": "RAnnot",
          "package": "diagrams-core",
          "signature": "RAnnot a",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RAnnot\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:RAnnot\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RAnnot",
          "package": "diagrams-core",
          "partial": "RAnnot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RAnnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Compile\",\"Diagrams.Core.Types\"]",
          "name": "REmpty",
          "package": "diagrams-core",
          "signature": "REmpty",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:REmpty\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:REmpty\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "REmpty",
          "package": "diagrams-core",
          "partial": "REmpty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:REmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"frozen\" transformation, \u003cem\u003ei.e.\u003c/em\u003e one which\n   was applied after a call to \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e.  It\n   applies to everything below it in the tree.\n   Note that line width and other similar\n   \"scale invariant\" attributes should be\n   affected by this transformation.  In the case\n   of 2D, some backends may not support stroking\n   in the context of an arbitrary\n   transformation; such backends can instead use\n   the \u003ccode\u003eavgScale\u003c/code\u003e function from\n   \u003ca\u003eDiagrams.TwoD.Transform\u003c/a\u003e (from the\n   \u003ccode\u003ediagrams-lib\u003c/code\u003e package).\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Compile\",\"Diagrams.Core.Types\"]",
          "name": "RFrozenTr",
          "package": "diagrams-core",
          "signature": "RFrozenTr (Transformation v)",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RFrozenTr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:RFrozenTr\"]"
        },
        "index": {
          "description": "frozen transformation i.e one which was applied after call to freeze It applies to everything below it in the tree Note that line width and other similar scale invariant attributes should be affected by this transformation In the case of some backends may not support stroking in the context of an arbitrary transformation such backends can instead use the avgScale function from Diagrams.TwoD.Transform from the diagrams-lib package",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RFrozenTr",
          "package": "diagrams-core",
          "partial": "RFrozen Tr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RFrozenTr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive, along with the (non-frozen)\n   transformation which applies to it.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Compile\",\"Diagrams.Core.Types\"]",
          "name": "RPrim",
          "package": "diagrams-core",
          "signature": "RPrim (Transformation v) (Prim b v)",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RPrim\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:RPrim\"]"
        },
        "index": {
          "description": "primitive along with the non-frozen transformation which applies to it",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RPrim",
          "package": "diagrams-core",
          "partial": "RPrim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA style node.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Compile\",\"Diagrams.Core.Types\"]",
          "name": "RStyle",
          "package": "diagrams-core",
          "signature": "RStyle (Style v)",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RStyle\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:RStyle\"]"
        },
        "index": {
          "description": "style node",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "RStyle",
          "package": "diagrams-core",
          "partial": "RStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:RStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eDTree\u003c/code\u003e to an \u003ccode\u003eRTree\u003c/code\u003e which can be used dirctly by backends.\n   A \u003ccode\u003eDTree\u003c/code\u003e includes nodes of type \u003ccode\u003eDTransform (Split (Transformation v))\u003c/code\u003e;\n   in the \u003ccode\u003eRTree\u003c/code\u003e the frozen part of the transform is put in a node of type\n   \u003ccode\u003eRFrozenTr (Transformation v)\u003c/code\u003e and the unfrozen part is pushed down until\n   it is either frozen or reaches a primitive node.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Compile",
          "name": "fromDTree",
          "package": "diagrams-core",
          "signature": "DTree b v () -\u003e RTree b v ()",
          "source": "src/Diagrams-Core-Compile.html#fromDTree",
          "type": "function"
        },
        "index": {
          "description": "Convert DTree to an RTree which can be used dirctly by backends DTree includes nodes of type DTransform Split Transformation in the RTree the frozen part of the transform is put in node of type RFrozenTr Transformation and the unfrozen part is pushed down until it is either frozen or reaches primitive node",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "fromDTree",
          "normalized": "DTree a b()-\u003eRTree a b()",
          "package": "diagrams-core",
          "partial": "DTree",
          "signature": "DTree b v()-\u003eRTree b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:fromDTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eQDiagram\u003c/code\u003e into a raw tree.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Compile",
          "name": "toDTree",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e Maybe (DTree b v ())",
          "source": "src/Diagrams-Core-Compile.html#toDTree",
          "type": "function"
        },
        "index": {
          "description": "Convert QDiagram into raw tree",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "toDTree",
          "normalized": "QDiagram a b c-\u003eMaybe(DTree a b())",
          "package": "diagrams-core",
          "partial": "DTree",
          "signature": "QDiagram b v m-\u003eMaybe(DTree b v())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:toDTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a \u003ccode\u003eQDiagram\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eRTree\u003c/a\u003e\u003c/code\u003e.  Suitable for use by\n   backends when implementing \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Compile",
          "name": "toRTree",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e RTree b v ()",
          "source": "src/Diagrams-Core-Compile.html#toRTree",
          "type": "function"
        },
        "index": {
          "description": "Compile QDiagram into an RTree Suitable for use by backends when implementing renderData",
          "hierarchy": "Diagrams Core Compile",
          "module": "Diagrams.Core.Compile",
          "name": "toRTree",
          "normalized": "QDiagram a b c-\u003eRTree a b()",
          "package": "diagrams-core",
          "partial": "RTree",
          "signature": "QDiagram b v m-\u003eRTree b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Compile.html#v:toRTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eGraphics.Rendering.Diagrams\u003c/a\u003e defines the core library of primitives\n forming the basis of an embedded domain-specific language for\n describing and rendering diagrams.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eEnvelope\u003c/code\u003e module defines a data type and type class for\n \"envelopes\", aka functional bounding regions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "Envelope",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html",
          "type": "module"
        },
        "index": {
          "description": "Graphics.Rendering.Diagrams defines the core library of primitives forming the basis of an embedded domain-specific language for describing and rendering diagrams The Envelope module defines data type and type class for envelopes aka functional bounding regions",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "Envelope",
          "package": "diagrams-core",
          "partial": "Envelope",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery diagram comes equipped with an \u003cem\u003eenvelope\u003c/em\u003e.  What is an envelope?\n\u003c/p\u003e\u003cp\u003eConsider first the idea of a \u003cem\u003ebounding box\u003c/em\u003e. A bounding box\n   expresses the distance to a bounding plane in every direction\n   parallel to an axis.  That is, a bounding box can be thought of\n   as the intersection of a collection of half-planes, two\n   perpendicular to each axis.\n\u003c/p\u003e\u003cp\u003eMore generally, the intersection of half-planes in \u003cem\u003eevery\u003c/em\u003e\n   direction would give a tight \"bounding region\", or convex hull.\n   However, representing such a thing intensionally would be\n   impossible; hence bounding boxes are often used as an\n   approximation.\n\u003c/p\u003e\u003cp\u003eAn envelope is an \u003cem\u003eextensional\u003c/em\u003e representation of such a\n   \"bounding region\".  Instead of storing some sort of direct\n   representation, we store a \u003cem\u003efunction\u003c/em\u003e which takes a direction as\n   input and gives a distance to a bounding half-plane as output.\n   The important point is that envelopes can be composed, and\n   transformed by any affine transformation.\n\u003c/p\u003e\u003cp\u003eFormally, given a vector \u003ccode\u003ev\u003c/code\u003e, the envelope computes a scalar \u003ccode\u003es\u003c/code\u003e such\n   that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e for every point \u003ccode\u003eu\u003c/code\u003e inside the diagram,\n       if the projection of \u003ccode\u003e(u - origin)\u003c/code\u003e onto \u003ccode\u003ev\u003c/code\u003e is \u003ccode\u003es' *^ v\u003c/code\u003e, then \u003ccode\u003es' \u003c= s\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e is the smallest such scalar.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere is also a special \"empty envelope\".\n\u003c/p\u003e\u003cp\u003eThe idea for envelopes came from\n   Sebastian Setzer; see\n   \u003ca\u003ehttp://byorgey.wordpress.com/2009/10/28/collecting-attributes/#comment-2030\u003c/a\u003e.  See also Brent Yorgey, \u003cem\u003eMonoids: Theme and Variations\u003c/em\u003e, published in the 2012 Haskell Symposium: \u003ca\u003ehttp://www.cis.upenn.edu/~byorgey/pub/monoid-pearl.pdf\u003c/a\u003e; video: \u003ca\u003ehttp://www.youtube.com/watch?v=X-8NCkD2vOw\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "Envelope",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#Envelope",
          "type": "newtype"
        },
        "index": {
          "description": "Every diagram comes equipped with an envelope What is an envelope Consider first the idea of bounding box bounding box expresses the distance to bounding plane in every direction parallel to an axis That is bounding box can be thought of as the intersection of collection of half-planes two perpendicular to each axis More generally the intersection of half-planes in every direction would give tight bounding region or convex hull However representing such thing intensionally would be impossible hence bounding boxes are often used as an approximation An envelope is an extensional representation of such bounding region Instead of storing some sort of direct representation we store function which takes direction as input and gives distance to bounding half-plane as output The important point is that envelopes can be composed and transformed by any affine transformation Formally given vector the envelope computes scalar such that for every point inside the diagram if the projection of origin onto is then is the smallest such scalar There is also special empty envelope The idea for envelopes came from Sebastian Setzer see http byorgey.wordpress.com collecting-attributes comment-2030 See also Brent Yorgey Monoids Theme and Variations published in the Haskell Symposium http www.cis.upenn.edu byorgey pub monoid-pearl.pdf video http www.youtube.com watch X-8NCkD2vOw",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "Envelope",
          "package": "diagrams-core",
          "partial": "Envelope",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#t:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eEnveloped\u003c/code\u003e abstracts over things which have an envelope.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "Enveloped",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#Enveloped",
          "type": "class"
        },
        "index": {
          "description": "Enveloped abstracts over things which have an envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "Enveloped",
          "package": "diagrams-core",
          "partial": "Enveloped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#t:Enveloped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen dealing with envelopes we often want scalars to be an\n   ordered field (i.e. support all four arithmetic operations and be\n   totally ordered) so we introduce this class as a convenient\n   shorthand.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "OrderedField",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#OrderedField",
          "type": "class"
        },
        "index": {
          "description": "When dealing with envelopes we often want scalars to be an ordered field i.e support all four arithmetic operations and be totally ordered so we introduce this class as convenient shorthand",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "OrderedField",
          "package": "diagrams-core",
          "partial": "Ordered Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#t:OrderedField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "Envelope",
          "package": "diagrams-core",
          "signature": "Envelope (Option (v -\u003e Max (Scalar v)))",
          "source": "src/Diagrams-Core-Envelope.html#Envelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:Envelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:Envelope\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "Envelope",
          "normalized": "Envelope(Option(a-\u003eMax(Scalar a)))",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "Envelope(Option(v-\u003eMax(Scalar v)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "appEnvelope",
          "package": "diagrams-core",
          "signature": "Envelope v -\u003e Maybe (v -\u003e Scalar v)",
          "source": "src/Diagrams-Core-Envelope.html#appEnvelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:appEnvelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:appEnvelope\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "appEnvelope",
          "normalized": "Envelope a-\u003eMaybe(a-\u003eScalar a)",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "Envelope v-\u003eMaybe(v-\u003eScalar v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:appEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the diameter of a enveloped object along a particular\n   vector.  Returns zero for the empty envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "diameter",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Scalar (V a)",
          "source": "src/Diagrams-Core-Envelope.html#diameter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:diameter\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:diameter\"]"
        },
        "index": {
          "description": "Compute the diameter of enveloped object along particular vector Returns zero for the empty envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "diameter",
          "normalized": "V a-\u003ea-\u003eScalar(V a)",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003eScalar(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:diameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the point on a separating hyperplane in the given\n   direction.  Returns the origin for the empty envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "envelopeP",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Point (V a)",
          "source": "src/Diagrams-Core-Envelope.html#envelopeP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeP\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:envelopeP\"]"
        },
        "index": {
          "description": "Compute the point on separating hyperplane in the given direction Returns the origin for the empty envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeP",
          "normalized": "V a-\u003ea-\u003ePoint(V a)",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003ePoint(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the point on a separating hyperplane in the given\n   direction, or \u003ccode\u003eNothing\u003c/code\u003e for the empty envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "envelopePMay",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Maybe (Point (V a))",
          "source": "src/Diagrams-Core-Envelope.html#envelopePMay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopePMay\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:envelopePMay\"]"
        },
        "index": {
          "description": "Compute the point on separating hyperplane in the given direction or Nothing for the empty envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopePMay",
          "normalized": "V a-\u003ea-\u003eMaybe(Point(V a))",
          "package": "diagrams-core",
          "partial": "PMay",
          "signature": "V a-\u003ea-\u003eMaybe(Point(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopePMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to the magnitude of \u003ccode\u003e\u003ca\u003eenvelopeV\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e envelopeS v x == magnitude (envelopeV v x)\u003c/pre\u003e\u003cp\u003e(other than differences in rounding error)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eenvelopeV\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eenvelopeP\u003c/a\u003e\u003c/code\u003e functions above should be\n   preferred, as this requires a call to magnitude. However, it is more\n   efficient than calling magnitude on the results of those functions.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeS",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Scalar (V a)",
          "source": "src/Diagrams-Core-Envelope.html#envelopeS",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to the magnitude of envelopeV envelopeS magnitude envelopeV other than differences in rounding error Note that the envelopeV envelopeP functions above should be preferred as this requires call to magnitude However it is more efficient than calling magnitude on the results of those functions",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeS",
          "normalized": "V a-\u003ea-\u003eScalar(V a)",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003eScalar(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to the magnitude of \u003ccode\u003e\u003ca\u003eenvelopeVMay\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e envelopeSMay v x == fmap magnitude (envelopeVMay v x)\u003c/pre\u003e\u003cp\u003e(other than differences in rounding error)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eenvelopeVMay\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eenvelopePMay\u003c/a\u003e\u003c/code\u003e functions above should be\n   preferred, as this requires a call to magnitude.  However, it is more\n   efficient than calling magnitude on the results of those functions.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeSMay",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Maybe (Scalar (V a))",
          "source": "src/Diagrams-Core-Envelope.html#envelopeSMay",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to the magnitude of envelopeVMay envelopeSMay fmap magnitude envelopeVMay other than differences in rounding error Note that the envelopeVMay envelopePMay functions above should be preferred as this requires call to magnitude However it is more efficient than calling magnitude on the results of those functions",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeSMay",
          "normalized": "V a-\u003ea-\u003eMaybe(Scalar(V a))",
          "package": "diagrams-core",
          "partial": "SMay",
          "signature": "V a-\u003ea-\u003eMaybe(Scalar(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeSMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the vector from the local origin to a separating\n   hyperplane in the given direction.  Returns the zero vector for\n   the empty envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "envelopeV",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e V a",
          "source": "src/Diagrams-Core-Envelope.html#envelopeV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeV\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:envelopeV\"]"
        },
        "index": {
          "description": "Compute the vector from the local origin to separating hyperplane in the given direction Returns the zero vector for the empty envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeV",
          "normalized": "V a-\u003ea-\u003eV a",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the vector from the local origin to a separating\n   hyperplane in the given direction, or \u003ccode\u003eNothing\u003c/code\u003e for the empty\n   envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "envelopeVMay",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Maybe (V a)",
          "source": "src/Diagrams-Core-Envelope.html#envelopeVMay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeVMay\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:envelopeVMay\"]"
        },
        "index": {
          "description": "Compute the vector from the local origin to separating hyperplane in the given direction or Nothing for the empty envelope",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "envelopeVMay",
          "normalized": "V a-\u003ea-\u003eMaybe(V a)",
          "package": "diagrams-core",
          "partial": "VMay",
          "signature": "V a-\u003ea-\u003eMaybe(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:envelopeVMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the envelope of an object.  For types with an intrinsic\n   notion of \"local origin\", the envelope will be based there.\n   Other types (e.g. \u003ccode\u003eTrail\u003c/code\u003e) may have some other default\n   reference point at which the envelope will be based; their\n   instances should document what it is.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "getEnvelope",
          "package": "diagrams-core",
          "signature": "a -\u003e Envelope (V a)",
          "source": "src/Diagrams-Core-Envelope.html#getEnvelope",
          "type": "method"
        },
        "index": {
          "description": "Compute the envelope of an object For types with an intrinsic notion of local origin the envelope will be based there Other types e.g Trail may have some other default reference point at which the envelope will be based their instances should document what it is",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "getEnvelope",
          "normalized": "a-\u003eEnvelope(V a)",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "a-\u003eEnvelope(V a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:getEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "mkEnvelope",
          "package": "diagrams-core",
          "signature": "(v -\u003e Scalar v) -\u003e Envelope v",
          "source": "src/Diagrams-Core-Envelope.html#mkEnvelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:mkEnvelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkEnvelope\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "mkEnvelope",
          "normalized": "(a-\u003eScalar a)-\u003eEnvelope a",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "(v-\u003eScalar v)-\u003eEnvelope v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:mkEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "onEnvelope",
          "package": "diagrams-core",
          "signature": "((v -\u003e Scalar v) -\u003e v -\u003e Scalar v) -\u003e Envelope v -\u003e Envelope v",
          "source": "src/Diagrams-Core-Envelope.html#onEnvelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:onEnvelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:onEnvelope\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "onEnvelope",
          "normalized": "((a-\u003eScalar a)-\u003ea-\u003eScalar a)-\u003eEnvelope a-\u003eEnvelope a",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "((v-\u003eScalar v)-\u003ev-\u003eScalar v)-\u003eEnvelope v-\u003eEnvelope v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:onEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an envelope for the given point.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Envelope",
          "name": "pointEnvelope",
          "package": "diagrams-core",
          "signature": "Point v -\u003e Envelope v",
          "source": "src/Diagrams-Core-Envelope.html#pointEnvelope",
          "type": "function"
        },
        "index": {
          "description": "Create an envelope for the given point",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "pointEnvelope",
          "normalized": "Point a-\u003eEnvelope a",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "Point v-\u003eEnvelope v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:pointEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \"radius\" (1/2 the diameter) of an enveloped object\n   along a particular vector.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Envelope\",\"Diagrams.Core\"]",
          "name": "radius",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e Scalar (V a)",
          "source": "src/Diagrams-Core-Envelope.html#radius",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:radius\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:radius\"]"
        },
        "index": {
          "description": "Compute the radius the diameter of an enveloped object along particular vector",
          "hierarchy": "Diagrams Core Envelope",
          "module": "Diagrams.Core.Envelope",
          "name": "radius",
          "normalized": "V a-\u003ea-\u003eScalar(V a)",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003eScalar(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Envelope.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes which have an intrinsic notion of a \"local origin\",\n \u003cem\u003ei.e.\u003c/em\u003e things which are \u003cem\u003enot\u003c/em\u003e invariant under translation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.HasOrigin",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-HasOrigin.html",
          "type": "module"
        },
        "index": {
          "description": "Types which have an intrinsic notion of local origin i.e things which are not invariant under translation",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "partial": "Has Origin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types which have an intrinsic notion of a \"local\n   origin\", i.e. things which are not invariant under translation,\n   and which allow the origin to be moved.\n\u003c/p\u003e\u003cp\u003eOne might wonder why not just use \u003ccode\u003eTransformable\u003c/code\u003e instead of\n   having a separate class for \u003ccode\u003e\u003ca\u003eHasOrigin\u003c/a\u003e\u003c/code\u003e; indeed, for types which\n   are instances of both we should have the identity\n\u003c/p\u003e\u003cpre\u003e moveOriginTo (origin .^+ v) === translate (negateV v)\n\u003c/pre\u003e\u003cp\u003eThe reason is that some things (e.g. vectors, \u003ccode\u003eTrail\u003c/code\u003es) are\n   transformable but are translationally invariant, i.e. have no\n   origin.\n\u003c/p\u003e",
          "module": "Diagrams.Core.HasOrigin",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-HasOrigin.html#HasOrigin",
          "type": "class"
        },
        "index": {
          "description": "Class of types which have an intrinsic notion of local origin i.e things which are not invariant under translation and which allow the origin to be moved One might wonder why not just use Transformable instead of having separate class for HasOrigin indeed for types which are instances of both we should have the identity moveOriginTo origin translate negateV The reason is that some things e.g vectors Trail are transformable but are translationally invariant i.e have no origin",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "partial": "Has Origin",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#t:HasOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the local origin by a relative vector.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.HasOrigin\",\"Diagrams.Core\"]",
          "name": "moveOriginBy",
          "package": "diagrams-core",
          "signature": "V t -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-HasOrigin.html#moveOriginBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:moveOriginBy\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:moveOriginBy\"]"
        },
        "index": {
          "description": "Move the local origin by relative vector",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "moveOriginBy",
          "normalized": "V a-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Origin By",
          "signature": "V t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:moveOriginBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the local origin to another point.\n\u003c/p\u003e\u003cp\u003eNote that this function is in some sense dual to \u003ccode\u003etranslate\u003c/code\u003e\n   (for types which are also \u003ccode\u003eTransformable\u003c/code\u003e); moving the origin\n   itself while leaving the object \"fixed\" is dual to fixing the\n   origin and translating the diagram.\n\u003c/p\u003e",
          "module": "Diagrams.Core.HasOrigin",
          "name": "moveOriginTo",
          "package": "diagrams-core",
          "signature": "Point (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-HasOrigin.html#moveOriginTo",
          "type": "method"
        },
        "index": {
          "description": "Move the local origin to another point Note that this function is in some sense dual to translate for types which are also Transformable moving the origin itself while leaving the object fixed is dual to fixing the origin and translating the diagram",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "moveOriginTo",
          "normalized": "Point(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Origin To",
          "signature": "Point(V t)-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:moveOriginTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the object by the translation that sends the origin to\n   the given point. Note that this is dual to \u003ccode\u003e\u003ca\u003emoveOriginTo\u003c/a\u003e\u003c/code\u003e, i.e. we\n   should have\n\u003c/p\u003e\u003cpre\u003e moveTo (origin .^+ v) === moveOriginTo (origin .^- v)\n\u003c/pre\u003e\u003cp\u003eFor types which are also \u003ccode\u003eTransformable\u003c/code\u003e, this is essentially the\n   same as \u003ccode\u003etranslate\u003c/code\u003e, i.e.\n\u003c/p\u003e\u003cpre\u003e moveTo (origin .^+ v) === translate v\n\u003c/pre\u003e",
          "module": "[\"Diagrams.Core.HasOrigin\",\"Diagrams.Core\"]",
          "name": "moveTo",
          "package": "diagrams-core",
          "signature": "Point (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-HasOrigin.html#moveTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:moveTo\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:moveTo\"]"
        },
        "index": {
          "description": "Translate the object by the translation that sends the origin to the given point Note that this is dual to moveOriginTo i.e we should have moveTo origin moveOriginTo origin For types which are also Transformable this is essentially the same as translate i.e moveTo origin translate",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "moveTo",
          "normalized": "Point(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "To",
          "signature": "Point(V t)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flipped variant of \u003ccode\u003e\u003ca\u003emoveTo\u003c/a\u003e\u003c/code\u003e, provided for convenience.  Useful\n   when writing a function which takes a point as an argument, such\n   as when using \u003ccode\u003ewithName\u003c/code\u003e and friends.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.HasOrigin\",\"Diagrams.Core\"]",
          "name": "place",
          "package": "diagrams-core",
          "signature": "t -\u003e Point (V t) -\u003e t",
          "source": "src/Diagrams-Core-HasOrigin.html#place",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:place\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:place\"]"
        },
        "index": {
          "description": "flipped variant of moveTo provided for convenience Useful when writing function which takes point as an argument such as when using withName and friends",
          "hierarchy": "Diagrams Core HasOrigin",
          "module": "Diagrams.Core.HasOrigin",
          "name": "place",
          "normalized": "a-\u003ePoint(V a)-\u003ea",
          "package": "diagrams-core",
          "signature": "t-\u003ePoint(V t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-HasOrigin.html#v:place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThings which can be placed \"next to\" other things, for some\n appropriate notion of \"next to\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Juxtapose",
          "name": "Juxtapose",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Juxtapose.html",
          "type": "module"
        },
        "index": {
          "description": "Things which can be placed next to other things for some appropriate notion of next to",
          "hierarchy": "Diagrams Core Juxtapose",
          "module": "Diagrams.Core.Juxtapose",
          "name": "Juxtapose",
          "package": "diagrams-core",
          "partial": "Juxtapose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Juxtapose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things which can be placed \"next to\" other things, for some\n   appropriate notion of \"next to\".\n\u003c/p\u003e",
          "module": "Diagrams.Core.Juxtapose",
          "name": "Juxtaposable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Juxtapose.html#Juxtaposable",
          "type": "class"
        },
        "index": {
          "description": "Class of things which can be placed next to other things for some appropriate notion of next to",
          "hierarchy": "Diagrams Core Juxtapose",
          "module": "Diagrams.Core.Juxtapose",
          "name": "Juxtaposable",
          "package": "diagrams-core",
          "partial": "Juxtaposable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Juxtapose.html#t:Juxtaposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejuxtapose v a1 a2\u003c/code\u003e positions \u003ccode\u003ea2\u003c/code\u003e next to \u003ccode\u003ea1\u003c/code\u003e in the\n   direction of \u003ccode\u003ev\u003c/code\u003e.  In particular, place \u003ccode\u003ea2\u003c/code\u003e so that \u003ccode\u003ev\u003c/code\u003e points\n   from the local origin of \u003ccode\u003ea1\u003c/code\u003e towards the old local origin of\n   \u003ccode\u003ea2\u003c/code\u003e; \u003ccode\u003ea1\u003c/code\u003e's local origin becomes \u003ccode\u003ea2\u003c/code\u003e's new local origin.  The\n   result is just a translated version of \u003ccode\u003ea2\u003c/code\u003e.  (In particular,\n   this operation does not \u003cem\u003ecombine\u003c/em\u003e \u003ccode\u003ea1\u003c/code\u003e and \u003ccode\u003ea2\u003c/code\u003e in any way.)\n\u003c/p\u003e",
          "module": "Diagrams.Core.Juxtapose",
          "name": "juxtapose",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e a -\u003e a",
          "source": "src/Diagrams-Core-Juxtapose.html#juxtapose",
          "type": "method"
        },
        "index": {
          "description": "juxtapose a1 a2 positions a2 next to a1 in the direction of In particular place a2 so that points from the local origin of a1 towards the old local origin of a2 a1 local origin becomes a2 new local origin The result is just translated version of a2 In particular this operation does not combine a1 and a2 in any way",
          "hierarchy": "Diagrams Core Juxtapose",
          "module": "Diagrams.Core.Juxtapose",
          "name": "juxtapose",
          "normalized": "V a-\u003ea-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Juxtapose.html#v:juxtapose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003ejuxtapose\u003c/a\u003e\u003c/code\u003e for things which are\n   instances of \u003ccode\u003e\u003ca\u003eEnveloped\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHasOrigin\u003c/a\u003e\u003c/code\u003e.  If either envelope is\n   empty, the second object is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Juxtapose\",\"Diagrams.Core\"]",
          "name": "juxtaposeDefault",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e a -\u003e a",
          "source": "src/Diagrams-Core-Juxtapose.html#juxtaposeDefault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Juxtapose.html#v:juxtaposeDefault\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:juxtaposeDefault\"]"
        },
        "index": {
          "description": "Default implementation of juxtapose for things which are instances of Enveloped and HasOrigin If either envelope is empty the second object is returned unchanged",
          "hierarchy": "Diagrams Core Juxtapose",
          "module": "Diagrams.Core.Juxtapose",
          "name": "juxtaposeDefault",
          "normalized": "V a-\u003ea-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Default",
          "signature": "V a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Juxtapose.html#v:juxtaposeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type of names which can be used for referring\n to subdiagrams, and related types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Names",
          "name": "Names",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type of names which can be used for referring to subdiagrams and related types",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "Names",
          "package": "diagrams-core",
          "partial": "Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic names.  \u003ccode\u003eAName\u003c/code\u003e is just an existential wrapper around\n   things which are \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Names",
          "name": "AName",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#AName",
          "type": "data"
        },
        "index": {
          "description": "Atomic names AName is just an existential wrapper around things which are Typeable Ord and Show",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "AName",
          "package": "diagrams-core",
          "partial": "AName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#t:AName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for those types which can be used as names.  They must\n   support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e (to facilitate extracting them from\n   existential wrappers), \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e (for comparison and efficient\n   storage) and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Names",
          "name": "IsName",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#IsName",
          "type": "class"
        },
        "index": {
          "description": "Class for those types which can be used as names They must support Typeable to facilitate extracting them from existential wrappers Ord for comparison and efficient storage and Show",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "IsName",
          "package": "diagrams-core",
          "partial": "Is Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#t:IsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (qualified) name is a (possibly empty) sequence of atomic names.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Names",
          "name": "Name",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#Name",
          "type": "newtype"
        },
        "index": {
          "description": "qualified name is possibly empty sequence of atomic names",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "Name",
          "package": "diagrams-core",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eQualifiable\u003c/a\u003e\u003c/code\u003e are things which can be qualified by\n   prefixing them with a name.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Names",
          "name": "Qualifiable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#Qualifiable",
          "type": "class"
        },
        "index": {
          "description": "Instances of Qualifiable are things which can be qualified by prefixing them with name",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "Qualifiable",
          "package": "diagrams-core",
          "partial": "Qualifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#t:Qualifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualify with the given name.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Names",
          "name": "(|\u003e)",
          "package": "diagrams-core",
          "signature": "a -\u003e q -\u003e q",
          "source": "src/Diagrams-Core-Names.html#%7C%3E",
          "type": "method"
        },
        "index": {
          "description": "Qualify with the given name",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "(|\u003e) |\u003e",
          "normalized": "a-\u003eb-\u003eb",
          "package": "diagrams-core",
          "signature": "a-\u003eq-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient operator for writing qualified names with atomic\n   components of different types.  Instead of writing \u003ccode\u003etoName a1 \u003c\u003e\n   toName a2 \u003c\u003e toName a3\u003c/code\u003e you can just write \u003ccode\u003ea1 .\u003e a2 .\u003e a3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Names\",\"Diagrams.Core\"]",
          "name": "(.\u003e)",
          "package": "diagrams-core",
          "signature": "a1 -\u003e a2 -\u003e Name",
          "source": "src/Diagrams-Core-Names.html#.%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:.-62-\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:.-62-\"]"
        },
        "index": {
          "description": "Convenient operator for writing qualified names with atomic components of different types Instead of writing toName a1 toName a2 toName a3 you can just write a1 a2 a3",
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "(.\u003e) .\u003e",
          "normalized": "a-\u003ea-\u003eName",
          "package": "diagrams-core",
          "signature": "a-\u003ea-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Names",
          "name": "AName",
          "package": "diagrams-core",
          "signature": "a -\u003e AName",
          "source": "src/Diagrams-Core-Names.html#AName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "AName",
          "normalized": "a-\u003eAName",
          "package": "diagrams-core",
          "partial": "AName",
          "signature": "a-\u003eAName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:AName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Names",
          "name": "Name",
          "package": "diagrams-core",
          "signature": "Name [AName]",
          "source": "src/Diagrams-Core-Names.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "Name",
          "normalized": "Name[AName]",
          "package": "diagrams-core",
          "partial": "Name",
          "signature": "Name[AName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Names",
          "name": "toName",
          "package": "diagrams-core",
          "signature": "a -\u003e Name",
          "source": "src/Diagrams-Core-Names.html#toName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core Names",
          "module": "Diagrams.Core.Names",
          "name": "toName",
          "normalized": "a-\u003eName",
          "package": "diagrams-core",
          "partial": "Name",
          "signature": "a-\u003eName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Names.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type for \u003cem\u003epoints\u003c/em\u003e (as distinct from vectors).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Points",
          "name": "Points",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Points.html",
          "type": "module"
        },
        "index": {
          "description": "type for points as distinct from vectors",
          "hierarchy": "Diagrams Core Points",
          "module": "Diagrams.Core.Points",
          "name": "Points",
          "package": "diagrams-core",
          "partial": "Points",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePoint\u003c/code\u003e is a newtype wrapper around vectors used to represent\n   points, so we don't get them mixed up. The distinction between\n   vectors and points is important: translations affect points, but\n   leave vectors unchanged.  Points are instances of the\n   \u003ccode\u003e\u003ca\u003eAffineSpace\u003c/a\u003e\u003c/code\u003e class from \u003ca\u003eData.AffineSpace\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Points",
          "name": "Point",
          "package": "diagrams-core",
          "type": "newtype"
        },
        "index": {
          "description": "Point is newtype wrapper around vectors used to represent points so we don get them mixed up The distinction between vectors and points is important translations affect points but leave vectors unchanged Points are instances of the AffineSpace class from Data.AffineSpace",
          "hierarchy": "Diagrams Core Points",
          "module": "Diagrams.Core.Points",
          "name": "Point",
          "package": "diagrams-core",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a point by a scalar.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Points\",\"Diagrams.Core\"]",
          "name": "(*.)",
          "package": "diagrams-core",
          "signature": "Scalar v -\u003e Point v -\u003e Point v",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#v:-42-.\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:-42-.\"]"
        },
        "index": {
          "description": "Scale point by scalar",
          "hierarchy": "Diagrams Core Points",
          "module": "Diagrams.Core.Points",
          "name": "(*.) *.",
          "normalized": "Scalar a-\u003ePoint a-\u003ePoint a",
          "package": "diagrams-core",
          "signature": "Scalar v-\u003ePoint v-\u003ePoint v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Points",
          "name": "P",
          "package": "diagrams-core",
          "signature": "P v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Points",
          "module": "Diagrams.Core.Points",
          "name": "P",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin of the vector space \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Points\",\"Diagrams.Core\"]",
          "name": "origin",
          "package": "diagrams-core",
          "signature": "Point v",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#v:origin\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:origin\"]"
        },
        "index": {
          "description": "The origin of the vector space",
          "hierarchy": "Diagrams Core Points",
          "module": "Diagrams.Core.Points",
          "name": "origin",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Points.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eQuery\u003c/code\u003e module defines a type for \"queries\" on diagrams, which\n are functions from points in a vector space to some monoid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Query",
          "name": "Query",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Query.html",
          "type": "module"
        },
        "index": {
          "description": "The Query module defines type for queries on diagrams which are functions from points in vector space to some monoid",
          "hierarchy": "Diagrams Core Query",
          "module": "Diagrams.Core.Query",
          "name": "Query",
          "package": "diagrams-core",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query is a function that maps points in a vector space to\n   values in some monoid. Queries naturally form a monoid, with\n   two queries being combined pointwise.\n\u003c/p\u003e\u003cp\u003eThe idea for annotating diagrams with monoidal queries came from\n   the graphics-drawingcombinators package, \u003ca\u003ehttp://hackage.haskell.org/package/graphics-drawingcombinators\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Query",
          "name": "Query",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Query.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "query is function that maps points in vector space to values in some monoid Queries naturally form monoid with two queries being combined pointwise The idea for annotating diagrams with monoidal queries came from the graphics-drawingcombinators package http hackage.haskell.org package graphics-drawingcombinators",
          "hierarchy": "Diagrams Core Query",
          "module": "Diagrams.Core.Query",
          "name": "Query",
          "package": "diagrams-core",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Query\",\"Diagrams.Core\"]",
          "name": "Query",
          "package": "diagrams-core",
          "signature": "Query",
          "source": "src/Diagrams-Core-Query.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#v:Query\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:Query\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Query",
          "module": "Diagrams.Core.Query",
          "name": "Query",
          "package": "diagrams-core",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Query\",\"Diagrams.Core\"]",
          "name": "runQuery",
          "package": "diagrams-core",
          "signature": "Point v -\u003e m",
          "source": "src/Diagrams-Core-Query.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#v:runQuery\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:runQuery\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Query",
          "module": "Diagrams.Core.Query",
          "name": "runQuery",
          "normalized": "Point a-\u003eb",
          "package": "diagrams-core",
          "partial": "Query",
          "signature": "Point v-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Query.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA definition of \u003cem\u003estyles\u003c/em\u003e for diagrams as extensible, heterogeneous\n collections of attributes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html",
          "type": "module"
        },
        "index": {
          "description": "definition of styles for diagrams as extensible heterogeneous collections of attributes",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper type to hold attributes.  Some attributes\n   are affected by transformations and some are not.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "Attribute",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#Attribute",
          "type": "data"
        },
        "index": {
          "description": "An existential wrapper type to hold attributes Some attributes are affected by transformations and some are not",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "Attribute",
          "package": "diagrams-core",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery attribute must be an instance of \u003ccode\u003eAttributeClass\u003c/code\u003e, which\n   simply guarantees \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e constraints.  The\n   \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e instance for an attribute determines how it will combine\n   with other attributes of the same type.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "AttributeClass",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#AttributeClass",
          "type": "class"
        },
        "index": {
          "description": "Every attribute must be an instance of AttributeClass which simply guarantees Typeable and Semigroup constraints The Semigroup instance for an attribute determines how it will combine with other attributes of the same type",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "AttributeClass",
          "package": "diagrams-core",
          "partial": "Attribute Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#t:AttributeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for things which have a style.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "HasStyle",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#HasStyle",
          "type": "class"
        },
        "index": {
          "description": "Type class for things which have style",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "HasStyle",
          "package": "diagrams-core",
          "partial": "Has Style",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#t:HasStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eStyle\u003c/code\u003e is a heterogeneous collection of attributes, containing\n   at most one attribute of any given type.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#Style",
          "type": "newtype"
        },
        "index": {
          "description": "Style is heterogeneous collection of attributes containing at most one attribute of any given type",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Style",
          "name": "Attribute",
          "package": "diagrams-core",
          "signature": "a -\u003e Attribute v",
          "source": "src/Diagrams-Core-Style.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "Attribute",
          "normalized": "a-\u003eAttribute b",
          "package": "diagrams-core",
          "partial": "Attribute",
          "signature": "a-\u003eAttribute v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "signature": "Style (Map String (Attribute v))",
          "source": "src/Diagrams-Core-Style.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "Style",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Style",
          "name": "TAttribute",
          "package": "diagrams-core",
          "signature": "a -\u003e Attribute v",
          "source": "src/Diagrams-Core-Style.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "TAttribute",
          "normalized": "a-\u003eAttribute b",
          "package": "diagrams-core",
          "partial": "TAttribute",
          "signature": "a-\u003eAttribute v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:TAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to add a new attribute to a style, but if an attribute of\n   the same type already exists, do not replace it.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "addAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e Style v -\u003e Style v",
          "source": "src/Diagrams-Core-Style.html#addAttr",
          "type": "function"
        },
        "index": {
          "description": "Attempt to add new attribute to style but if an attribute of the same type already exists do not replace it",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "addAttr",
          "normalized": "a-\u003eStyle b-\u003eStyle b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "a-\u003eStyle v-\u003eStyle v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:addAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an attribute to an instance of \u003ccode\u003e\u003ca\u003eHasStyle\u003c/a\u003e\u003c/code\u003e (such as a\n   diagram or a style).  If the object already has an attribute of\n   the same type, the new attribute is combined on the left with the\n   existing attribute, according to their semigroup structure.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "applyAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e d -\u003e d",
          "source": "src/Diagrams-Core-Style.html#applyAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:applyAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:applyAttr\"]"
        },
        "index": {
          "description": "Apply an attribute to an instance of HasStyle such as diagram or style If the object already has an attribute of the same type the new attribute is combined on the left with the existing attribute according to their semigroup structure",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "applyAttr",
          "normalized": "a-\u003eb-\u003eb",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "a-\u003ed-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:applyAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eApply\u003c/em\u003e a style by combining it (on the left) with the\n   existing style.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "applyStyle",
          "package": "diagrams-core",
          "signature": "Style (V a) -\u003e a -\u003e a",
          "source": "src/Diagrams-Core-Style.html#applyStyle",
          "type": "method"
        },
        "index": {
          "description": "Apply style by combining it on the left with the existing style",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "applyStyle",
          "normalized": "Style(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Style",
          "signature": "Style(V a)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:applyStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformable attribute to an instance of \u003ccode\u003e\u003ca\u003eHasStyle\u003c/a\u003e\u003c/code\u003e\n   (such as a diagram or a style).  If the object already has an\n   attribute of the same type, the new attribute is combined on the\n   left with the existing attribute, according to their semigroup\n   structure.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "applyTAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e d -\u003e d",
          "source": "src/Diagrams-Core-Style.html#applyTAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:applyTAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:applyTAttr\"]"
        },
        "index": {
          "description": "Apply transformable attribute to an instance of HasStyle such as diagram or style If the object already has an attribute of the same type the new attribute is combined on the left with the existing attribute according to their semigroup structure",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "applyTAttr",
          "normalized": "a-\u003eb-\u003eb",
          "package": "diagrams-core",
          "partial": "TAttr",
          "signature": "a-\u003ed-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:applyTAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a style from a single attribute.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "attrToStyle",
          "package": "diagrams-core",
          "signature": "a -\u003e Style v",
          "source": "src/Diagrams-Core-Style.html#attrToStyle",
          "type": "function"
        },
        "index": {
          "description": "Create style from single attribute",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "attrToStyle",
          "normalized": "a-\u003eStyle b",
          "package": "diagrams-core",
          "partial": "To Style",
          "signature": "a-\u003eStyle v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:attrToStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new attribute to a style that does not already contain an\n   attribute of this type, or combine it on the left with an existing\n   attribute.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "combineAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e Style v -\u003e Style v",
          "source": "src/Diagrams-Core-Style.html#combineAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:combineAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:combineAttr\"]"
        },
        "index": {
          "description": "Add new attribute to style that does not already contain an attribute of this type or combine it on the left with an existing attribute",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "combineAttr",
          "normalized": "a-\u003eStyle b-\u003eStyle b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "a-\u003eStyle v-\u003eStyle v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:combineAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an attribute from a style of a particular type.  If the\n   style contains an attribute of the requested type, it will be\n   returned wrapped in \u003ccode\u003eJust\u003c/code\u003e; otherwise, \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "getAttr",
          "package": "diagrams-core",
          "signature": "Style v -\u003e Maybe a",
          "source": "src/Diagrams-Core-Style.html#getAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:getAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:getAttr\"]"
        },
        "index": {
          "description": "Extract an attribute from style of particular type If the style contains an attribute of the requested type it will be returned wrapped in Just otherwise Nothing is returned",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "getAttr",
          "normalized": "Style a-\u003eMaybe b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "Style v-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:getAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up an attribute.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "mkAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e Attribute v",
          "source": "src/Diagrams-Core-Style.html#mkAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:mkAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkAttr\"]"
        },
        "index": {
          "description": "Wrap up an attribute",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "mkAttr",
          "normalized": "a-\u003eAttribute b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "a-\u003eAttribute v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:mkAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a transformable attribute.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "mkTAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e Attribute v",
          "source": "src/Diagrams-Core-Style.html#mkTAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:mkTAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkTAttr\"]"
        },
        "index": {
          "description": "Wrap up transformable attribute",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "mkTAttr",
          "normalized": "a-\u003eAttribute b",
          "package": "diagrams-core",
          "partial": "TAttr",
          "signature": "a-\u003eAttribute v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:mkTAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new attribute to a style, or replace the old attribute of\n   the same type if one exists.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "setAttr",
          "package": "diagrams-core",
          "signature": "a -\u003e Style v -\u003e Style v",
          "source": "src/Diagrams-Core-Style.html#setAttr",
          "type": "function"
        },
        "index": {
          "description": "Add new attribute to style or replace the old attribute of the same type if one exists",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "setAttr",
          "normalized": "a-\u003eStyle b-\u003eStyle b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "a-\u003eStyle v-\u003eStyle v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:setAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a style from a single transformable attribute.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Style",
          "name": "tAttrToStyle",
          "package": "diagrams-core",
          "signature": "a -\u003e Style v",
          "source": "src/Diagrams-Core-Style.html#tAttrToStyle",
          "type": "function"
        },
        "index": {
          "description": "Create style from single transformable attribute",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "tAttrToStyle",
          "normalized": "a-\u003eStyle b",
          "package": "diagrams-core",
          "partial": "Attr To Style",
          "signature": "a-\u003eStyle v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:tAttrToStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an unknown \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003e type, performing a dynamic (but\n   safe) check on the type of the result.  If the required type\n   matches the type of the attribute, the attribute value is\n   returned wrapped in \u003ccode\u003eJust\u003c/code\u003e; if the types do not match, \u003ccode\u003eNothing\u003c/code\u003e\n   is returned.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Style\",\"Diagrams.Core\"]",
          "name": "unwrapAttr",
          "package": "diagrams-core",
          "signature": "Attribute v -\u003e Maybe a",
          "source": "src/Diagrams-Core-Style.html#unwrapAttr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:unwrapAttr\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:unwrapAttr\"]"
        },
        "index": {
          "description": "Unwrap an unknown Attribute type performing dynamic but safe check on the type of the result If the required type matches the type of the attribute the attribute value is returned wrapped in Just if the types do not match Nothing is returned",
          "hierarchy": "Diagrams Core Style",
          "module": "Diagrams.Core.Style",
          "name": "unwrapAttr",
          "normalized": "Attribute a-\u003eMaybe b",
          "package": "diagrams-core",
          "partial": "Attr",
          "signature": "Attribute v-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Style.html#v:unwrapAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ediagrams-core\u003c/code\u003e defines the core library of primitives\n forming the basis of an embedded domain-specific language for\n describing and rendering diagrams.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eTrace\u003c/code\u003e module defines a data type and type class for\n \"traces\", aka functional boundaries, essentially corresponding to\n embedding a raytracer with each diagram.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Trace",
          "name": "Trace",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "diagrams-core defines the core library of primitives forming the basis of an embedded domain-specific language for describing and rendering diagrams The Trace module defines data type and type class for traces aka functional boundaries essentially corresponding to embedding raytracer with each diagram",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "Trace",
          "package": "diagrams-core",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery diagram comes equipped with a \u003cem\u003etrace\u003c/em\u003e.  Intuitively, the\n   trace for a diagram is like a raytracer: given a line\n   (represented as a base point and a direction), the trace computes\n   the distance from the base point along the line to the first\n   intersection with the diagram.  The distance can be negative if\n   the intersection is in the opposite direction from the base\n   point, or infinite if the ray never intersects the diagram.\n   Note: to obtain the distance to the \u003cem\u003efurthest\u003c/em\u003e intersection\n   instead of the \u003cem\u003eclosest\u003c/em\u003e, just negate the direction vector and\n   then negate the result.\n\u003c/p\u003e\u003cp\u003eNote that the output should actually be interpreted not as an\n   absolute distance, but as a multiplier relative to the input\n   vector.  That is, if the input vector is \u003ccode\u003ev\u003c/code\u003e and the returned\n   scalar is \u003ccode\u003es\u003c/code\u003e, the distance from the base point to the\n   intersection is given by \u003ccode\u003es * magnitude v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Trace",
          "name": "Trace",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Trace.html#Trace",
          "type": "newtype"
        },
        "index": {
          "description": "Every diagram comes equipped with trace Intuitively the trace for diagram is like raytracer given line represented as base point and direction the trace computes the distance from the base point along the line to the first intersection with the diagram The distance can be negative if the intersection is in the opposite direction from the base point or infinite if the ray never intersects the diagram Note to obtain the distance to the furthest intersection instead of the closest just negate the direction vector and then negate the result Note that the output should actually be interpreted not as an absolute distance but as multiplier relative to the input vector That is if the input vector is and the returned scalar is the distance from the base point to the intersection is given by magnitude",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "Trace",
          "package": "diagrams-core",
          "partial": "Trace",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTraced\u003c/code\u003e abstracts over things which have a trace.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Trace",
          "name": "Traced",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Trace.html#Traced",
          "type": "class"
        },
        "index": {
          "description": "Traced abstracts over things which have trace",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "Traced",
          "package": "diagrams-core",
          "partial": "Traced",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#t:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "Trace",
          "package": "diagrams-core",
          "signature": "Trace",
          "source": "src/Diagrams-Core-Trace.html#Trace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:Trace\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:Trace\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "Trace",
          "package": "diagrams-core",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "appTrace",
          "package": "diagrams-core",
          "signature": "Point v -\u003e v -\u003e PosInf (Scalar v)",
          "source": "src/Diagrams-Core-Trace.html#Trace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:appTrace\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:appTrace\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "appTrace",
          "normalized": "Point a-\u003ea-\u003ePosInf(Scalar a)",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "Point v-\u003ev-\u003ePosInf(Scalar v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:appTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the trace of an object.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Trace",
          "name": "getTrace",
          "package": "diagrams-core",
          "signature": "a -\u003e Trace (V a)",
          "source": "src/Diagrams-Core-Trace.html#getTrace",
          "type": "method"
        },
        "index": {
          "description": "Compute the trace of an object",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "getTrace",
          "normalized": "a-\u003eTrace(V a)",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "a-\u003eTrace(V a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:getTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etraceP\u003c/a\u003e\u003c/code\u003e, but computes the *furthest* point on the boundary\n   instead of the closest.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "maxTraceP",
          "package": "diagrams-core",
          "signature": "Point (V a) -\u003e V a -\u003e a -\u003e Maybe (Point (V a))",
          "source": "src/Diagrams-Core-Trace.html#maxTraceP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:maxTraceP\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:maxTraceP\"]"
        },
        "index": {
          "description": "Like traceP but computes the furthest point on the boundary instead of the closest",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "maxTraceP",
          "normalized": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(Point(V a))",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(Point(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:maxTraceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etraceV\u003c/a\u003e\u003c/code\u003e, but computes a vector to the *furthest* point on\n   the boundary instead of the closest.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "maxTraceV",
          "package": "diagrams-core",
          "signature": "Point (V a) -\u003e V a -\u003e a -\u003e Maybe (V a)",
          "source": "src/Diagrams-Core-Trace.html#maxTraceV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:maxTraceV\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:maxTraceV\"]"
        },
        "index": {
          "description": "Like traceV but computes vector to the furthest point on the boundary instead of the closest",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "maxTraceV",
          "normalized": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(V a)",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:maxTraceV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "mkTrace",
          "package": "diagrams-core",
          "signature": "(Point v -\u003e v -\u003e PosInf (Scalar v)) -\u003e Trace v",
          "source": "src/Diagrams-Core-Trace.html#mkTrace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:mkTrace\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkTrace\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "mkTrace",
          "normalized": "(Point a-\u003ea-\u003ePosInf(Scalar a))-\u003eTrace a",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "(Point v-\u003ev-\u003ePosInf(Scalar v))-\u003eTrace v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:mkTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a base point and direction, compute the closest point on\n   the boundary of the given object, or \u003ccode\u003eNothing\u003c/code\u003e if there is no\n   intersection in the given direction.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "traceP",
          "package": "diagrams-core",
          "signature": "Point (V a) -\u003e V a -\u003e a -\u003e Maybe (Point (V a))",
          "source": "src/Diagrams-Core-Trace.html#traceP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:traceP\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:traceP\"]"
        },
        "index": {
          "description": "Given base point and direction compute the closest point on the boundary of the given object or Nothing if there is no intersection in the given direction",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "traceP",
          "normalized": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(Point(V a))",
          "package": "diagrams-core",
          "signature": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(Point(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:traceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the vector from the given point to the boundary of the\n   given object in the given direction, or \u003ccode\u003eNothing\u003c/code\u003e if there is no\n   intersection.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Trace\",\"Diagrams.Core\"]",
          "name": "traceV",
          "package": "diagrams-core",
          "signature": "Point (V a) -\u003e V a -\u003e a -\u003e Maybe (V a)",
          "source": "src/Diagrams-Core-Trace.html#traceV",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:traceV\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:traceV\"]"
        },
        "index": {
          "description": "Compute the vector from the given point to the boundary of the given object in the given direction or Nothing if there is no intersection",
          "hierarchy": "Diagrams Core Trace",
          "module": "Diagrams.Core.Trace",
          "name": "traceV",
          "normalized": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(V a)",
          "package": "diagrams-core",
          "signature": "Point(V a)-\u003eV a-\u003ea-\u003eMaybe(V a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Trace.html#v:traceV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eDiagrams\u003c/a\u003e defines the core library of primitives\n forming the basis of an embedded domain-specific language for\n describing and rendering diagrams.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eTransform\u003c/code\u003e module defines generic transformations\n parameterized by any vector space.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "Transform",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Diagrams defines the core library of primitives forming the basis of an embedded domain-specific language for describing and rendering diagrams The Transform module defines generic transformations parameterized by any vector space",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "Transform",
          "package": "diagrams-core",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(v1 :-: v2)\u003c/code\u003e is a linear map paired with its inverse.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": ":-:",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#%3A-%3A",
          "type": "data"
        },
        "index": {
          "description": "v1 v2 is linear map paired with its inverse",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": ":-:",
          "package": "diagrams-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#t::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHasLinearMap\u003c/a\u003e\u003c/code\u003e is a poor man's class constraint synonym, just to\n   help shorten some of the ridiculously long constraint sets.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "HasLinearMap",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#HasLinearMap",
          "type": "class"
        },
        "index": {
          "description": "HasLinearMap is poor man class constraint synonym just to help shorten some of the ridiculously long constraint sets",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "HasLinearMap",
          "package": "diagrams-core",
          "partial": "Has Linear Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#t:HasLinearMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTransInv\u003c/code\u003e is a wrapper which makes a transformable type\n   translationally invariant; the translational component of\n   transformations will no longer affect things wrapped in\n   \u003ccode\u003eTransInv\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "TransInv",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#TransInv",
          "type": "newtype"
        },
        "index": {
          "description": "TransInv is wrapper which makes transformable type translationally invariant the translational component of transformations will no longer affect things wrapped in TransInv",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "TransInv",
          "package": "diagrams-core",
          "partial": "Trans Inv",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#t:TransInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for things \u003ccode\u003et\u003c/code\u003e which can be transformed.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "Transformable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#Transformable",
          "type": "class"
        },
        "index": {
          "description": "Type class for things which can be transformed",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "Transformable",
          "package": "diagrams-core",
          "partial": "Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#t:Transformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral (affine) transformations, represented by an invertible\n   linear map, its \u003cem\u003etranspose\u003c/em\u003e, and a vector representing a\n   translation component.\n\u003c/p\u003e\u003cp\u003eBy the \u003cem\u003etranspose\u003c/em\u003e of a linear map we mean simply the linear map\n   corresponding to the transpose of the map's matrix\n   representation.  For example, any scale is its own transpose,\n   since scales are represented by matrices with zeros everywhere\n   except the diagonal.  The transpose of a rotation is the same as\n   its inverse.\n\u003c/p\u003e\u003cp\u003eThe reason we need to keep track of transposes is because it\n   turns out that when transforming a shape according to some linear\n   map L, the shape's \u003cem\u003enormal vectors\u003c/em\u003e transform according to L's\n   inverse transpose.  This is exactly what we need when\n   transforming bounding functions, which are defined in terms of\n   \u003cem\u003eperpendicular\u003c/em\u003e (i.e. normal) hyperplanes.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "Transformation",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#Transformation",
          "type": "data"
        },
        "index": {
          "description": "General affine transformations represented by an invertible linear map its transpose and vector representing translation component By the transpose of linear map we mean simply the linear map corresponding to the transpose of the map matrix representation For example any scale is its own transpose since scales are represented by matrices with zeros everywhere except the diagonal The transpose of rotation is the same as its inverse The reason we need to keep track of transposes is because it turns out that when transforming shape according to some linear map the shape normal vectors transform according to inverse transpose This is exactly what we need when transforming bounding functions which are defined in terms of perpendicular i.e normal hyperplanes",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "Transformation",
          "package": "diagrams-core",
          "partial": "Transformation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#t:Transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an invertible linear map from two functions which are\n   assumed to be linear inverses.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "(\u003c-\u003e)",
          "package": "diagrams-core",
          "signature": "(u -\u003e v) -\u003e (v -\u003e u) -\u003e u :-: v",
          "source": "src/Diagrams-Core-Transform.html#%3C-%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:-60--45--62-\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:-60--45--62-\"]"
        },
        "index": {
          "description": "Create an invertible linear map from two functions which are assumed to be linear inverses",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ea b",
          "package": "diagrams-core",
          "signature": "(u-\u003ev)-\u003e(v-\u003eu)-\u003eu v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Transform",
          "name": ":-:",
          "package": "diagrams-core",
          "signature": "(u :-* v) :-: (v :-* u)",
          "source": "src/Diagrams-Core-Transform.html#%3A-%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": ":-:",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "TransInv",
          "package": "diagrams-core",
          "signature": "TransInv t",
          "source": "src/Diagrams-Core-Transform.html#TransInv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:TransInv\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:TransInv\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "TransInv",
          "package": "diagrams-core",
          "partial": "Trans Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:TransInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Transform",
          "name": "Transformation",
          "package": "diagrams-core",
          "signature": "Transformation (v :-: v) (v :-: v) v",
          "source": "src/Diagrams-Core-Transform.html#Transformation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "Transformation",
          "package": "diagrams-core",
          "partial": "Transformation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:Transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to a vector.  Note that any translational\n   component of the transformation will not affect the vector, since\n   vectors are invariant under translation.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "apply",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e v -\u003e v",
          "source": "src/Diagrams-Core-Transform.html#apply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:apply\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:apply\"]"
        },
        "index": {
          "description": "Apply transformation to vector Note that any translational component of the transformation will not affect the vector since vectors are invariant under translation",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "apply",
          "normalized": "Transformation a-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "Transformation v-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a general affine transformation from an invertible linear\n   transformation and its transpose.  The translational component is\n   assumed to be zero.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "fromLinear",
          "package": "diagrams-core",
          "signature": "(v :-: v) -\u003e (v :-: v) -\u003e Transformation v",
          "source": "src/Diagrams-Core-Transform.html#fromLinear",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:fromLinear\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:fromLinear\"]"
        },
        "index": {
          "description": "Create general affine transformation from an invertible linear transformation and its transpose The translational component is assumed to be zero",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "fromLinear",
          "normalized": "(a a)-\u003e(a a)-\u003eTransformation a",
          "package": "diagrams-core",
          "partial": "Linear",
          "signature": "(v v)-\u003e(v v)-\u003eTransformation v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:fromLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert a transformation.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "inv",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e Transformation v",
          "source": "src/Diagrams-Core-Transform.html#inv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:inv\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:inv\"]"
        },
        "index": {
          "description": "Invert transformation",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "inv",
          "normalized": "Transformation a-\u003eTransformation a",
          "package": "diagrams-core",
          "signature": "Transformation v-\u003eTransformation v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a linear map to a vector.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "lapp",
          "package": "diagrams-core",
          "signature": "(u :-: v) -\u003e u -\u003e v",
          "source": "src/Diagrams-Core-Transform.html#lapp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:lapp\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:lapp\"]"
        },
        "index": {
          "description": "Apply linear map to vector",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "lapp",
          "normalized": "(a b)-\u003ea-\u003eb",
          "package": "diagrams-core",
          "signature": "(u v)-\u003eu-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:lapp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert a linear map.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "linv",
          "package": "diagrams-core",
          "signature": "(u :-: v) -\u003e v :-: u",
          "source": "src/Diagrams-Core-Transform.html#linv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:linv\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:linv\"]"
        },
        "index": {
          "description": "Invert linear map",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "linv",
          "normalized": "(a b)-\u003eb a",
          "package": "diagrams-core",
          "signature": "(u v)-\u003ev u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:linv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the matrix equivalent of the linear transform,\n   (as a list of columns) and the translation vector.  This\n   is mostly useful for implementing backends.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "onBasis",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e ([v], v)",
          "source": "src/Diagrams-Core-Transform.html#onBasis",
          "type": "function"
        },
        "index": {
          "description": "Get the matrix equivalent of the linear transform as list of columns and the translation vector This is mostly useful for implementing backends",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "onBasis",
          "normalized": "Transformation a-\u003e([a],a)",
          "package": "diagrams-core",
          "partial": "Basis",
          "signature": "Transformation v-\u003e([v],v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:onBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to a point.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "papply",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e Point v -\u003e Point v",
          "source": "src/Diagrams-Core-Transform.html#papply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:papply\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:papply\"]"
        },
        "index": {
          "description": "Apply transformation to point",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "papply",
          "normalized": "Transformation a-\u003ePoint a-\u003ePoint a",
          "package": "diagrams-core",
          "signature": "Transformation v-\u003ePoint v-\u003ePoint v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:papply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale uniformly in every dimension by the given scalar.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "scale",
          "package": "diagrams-core",
          "signature": "Scalar (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-Transform.html#scale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:scale\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:scale\"]"
        },
        "index": {
          "description": "Scale uniformly in every dimension by the given scalar",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "scale",
          "normalized": "Scalar(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "Scalar(V t)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a uniform scaling transformation.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "scaling",
          "package": "diagrams-core",
          "signature": "Scalar v -\u003e Transformation v",
          "source": "src/Diagrams-Core-Transform.html#scaling",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:scaling\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:scaling\"]"
        },
        "index": {
          "description": "Create uniform scaling transformation",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "scaling",
          "normalized": "Scalar a-\u003eTransformation a",
          "package": "diagrams-core",
          "signature": "Scalar v-\u003eTransformation v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:scaling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to an object.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Transform",
          "name": "transform",
          "package": "diagrams-core",
          "signature": "Transformation (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-Transform.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Apply transformation to an object",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "transform",
          "normalized": "Transformation(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "Transformation(V t)-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the translational component of a transformation.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "transl",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e v",
          "source": "src/Diagrams-Core-Transform.html#transl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:transl\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:transl\"]"
        },
        "index": {
          "description": "Get the translational component of transformation",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "transl",
          "normalized": "Transformation a-\u003ea",
          "package": "diagrams-core",
          "signature": "Transformation v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:transl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate by a vector.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "translate",
          "package": "diagrams-core",
          "signature": "V t -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-Transform.html#translate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:translate\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:translate\"]"
        },
        "index": {
          "description": "Translate by vector",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "translate",
          "normalized": "V a-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "V t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a translation.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "translation",
          "package": "diagrams-core",
          "signature": "v -\u003e Transformation v",
          "source": "src/Diagrams-Core-Transform.html#translation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:translation\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:translation\"]"
        },
        "index": {
          "description": "Create translation",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "translation",
          "normalized": "a-\u003eTransformation a",
          "package": "diagrams-core",
          "signature": "v-\u003eTransformation v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:translation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the transpose of a transformation (ignoring the translation\n   component).\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Transform\",\"Diagrams.Core\"]",
          "name": "transp",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e v :-: v",
          "source": "src/Diagrams-Core-Transform.html#transp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:transp\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:transp\"]"
        },
        "index": {
          "description": "Get the transpose of transformation ignoring the translation component",
          "hierarchy": "Diagrams Core Transform",
          "module": "Diagrams.Core.Transform",
          "name": "transp",
          "normalized": "Transformation a-\u003ea a",
          "package": "diagrams-core",
          "signature": "Transformation v-\u003ev v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Transform.html#v:transp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core library of primitives forming the basis of an embedded\n domain-specific language for describing and rendering diagrams.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eDiagrams.Core.Types\u003c/a\u003e defines types and classes for\n primitives, diagrams, and backends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Types",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html",
          "type": "module"
        },
        "index": {
          "description": "The core library of primitives forming the basis of an embedded domain-specific language for describing and rendering diagrams Diagrams.Core.Types defines types and classes for primitives diagrams and backends",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Types",
          "package": "diagrams-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract diagrams are rendered to particular formats by\n   \u003cem\u003ebackends\u003c/em\u003e.  Each backend/vector space combination must be an\n   instance of the \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e class. A minimal complete definition\n   consists of the three associated types, an implementation for\n   \u003ccode\u003e\u003ca\u003edoRender\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003eone of\u003c/em\u003e either \u003ccode\u003e\u003ca\u003ewithStyle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Backend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Backend",
          "type": "class"
        },
        "index": {
          "description": "Abstract diagrams are rendered to particular formats by backends Each backend vector space combination must be an instance of the Backend class minimal complete definition consists of the three associated types an implementation for doRender and one of either withStyle or renderData",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Backend",
          "package": "diagrams-core",
          "partial": "Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eD\u003c/code\u003e type is provided for convenience in situations where you\n   must give a diagram a concrete, monomorphic type, but don't care\n   which one.  Such situations arise when you pass a diagram to a\n   function which is polymorphic in its input but monomorphic in its\n   output, such as \u003ccode\u003ewidth\u003c/code\u003e, \u003ccode\u003eheight\u003c/code\u003e, \u003ccode\u003ephantom\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003enames\u003c/a\u003e\u003c/code\u003e.  Such\n   functions compute some property of the diagram, or use it to\n   accomplish some other purpose, but do not result in the diagram\n   being rendered.  If the diagram does not have a monomorphic type,\n   GHC complains that it cannot determine the diagram's type.\n\u003c/p\u003e\u003cp\u003eFor example, here is the error we get if we try to compute the\n   width of an image (this example requires \u003ccode\u003ediagrams-lib\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (image \"foo.png\" 200 200)\n\n \u003cinteractive\u003e:8:8:\n     No instance for (Renderable Diagrams.TwoD.Image.Image b0)\n       arising from a use of `image'\n     Possible fix:\n       add an instance declaration for\n       (Renderable Diagrams.TwoD.Image.Image b0)\n     In the first argument of `width', namely\n       `(image \"foo.png\" 200 200)'\n     In the expression: width (image \"foo.png\" 200 200)\n     In an equation for `it': it = width (image \"foo.png\" 200 200)\n\u003c/pre\u003e\u003cp\u003eGHC complains that there is no instance for \u003ccode\u003eRenderable Image\n   b0\u003c/code\u003e; what is really going on is that it does not have enough\n   information to decide what backend to use (hence the\n   uninstantiated \u003ccode\u003eb0\u003c/code\u003e). This is annoying because \u003cem\u003ewe\u003c/em\u003e know that the\n   choice of backend cannot possibly affect the width of the image\n   (it's 200! it's right there in the code!); \u003cem\u003ebut\u003c/em\u003e there is no way\n   for GHC to know that.\n\u003c/p\u003e\u003cp\u003eThe solution is to annotate the call to \u003ccode\u003eimage\u003c/code\u003e with the type\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eR2\u003c/code\u003e\u003c/code\u003e, like so:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (image \"foo.png\" 200 200 :: D R2)\n 200.00000000000006\n\u003c/pre\u003e\u003cp\u003e(It turns out the width wasn't 200 after all...)\n\u003c/p\u003e\u003cp\u003eAs another example, here is the error we get if we try to compute\n   the width of a radius-1 circle:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (circle 1)\n\n \u003cinteractive\u003e:4:1:\n     Couldn't match type `V a0' with `R2'\n     In the expression: width (circle 1)\n     In an equation for `it': it = width (circle 1)\n\u003c/pre\u003e\u003cp\u003eThere's even more ambiguity here.  Whereas \u003ccode\u003eimage\u003c/code\u003e always returns\n   a \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003ecircle\u003c/code\u003e function can produce any \u003ccode\u003ePathLike\u003c/code\u003e\n   type, and the \u003ccode\u003ewidth\u003c/code\u003e function can consume any \u003ccode\u003e\u003ca\u003eEnveloped\u003c/a\u003e\u003c/code\u003e type,\n   so GHC has no idea what type to pick to go in the middle.\n   However, the solution is the same:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (circle 1 :: D R2)\n 1.9999999999999998\n\u003c/pre\u003e",
          "module": "Diagrams.Core.Types",
          "name": "D",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#D",
          "type": "type"
        },
        "index": {
          "description": "The type is provided for convenience in situations where you must give diagram concrete monomorphic type but don care which one Such situations arise when you pass diagram to function which is polymorphic in its input but monomorphic in its output such as width height phantom or names Such functions compute some property of the diagram or use it to accomplish some other purpose but do not result in the diagram being rendered If the diagram does not have monomorphic type GHC complains that it cannot determine the diagram type For example here is the error we get if we try to compute the width of an image this example requires diagrams-lib ghci width image foo.png interactive No instance for Renderable Diagrams.TwoD.Image.Image b0 arising from use of image Possible fix add an instance declaration for Renderable Diagrams.TwoD.Image.Image b0 In the first argument of width namely image foo.png In the expression width image foo.png In an equation for it it width image foo.png GHC complains that there is no instance for Renderable Image b0 what is really going on is that it does not have enough information to decide what backend to use hence the uninstantiated b0 This is annoying because we know that the choice of backend cannot possibly affect the width of the image it it right there in the code but there is no way for GHC to know that The solution is to annotate the call to image with the type R2 like so ghci width image foo.png R2 It turns out the width wasn after all As another example here is the error we get if we try to compute the width of radius-1 circle ghci width circle interactive Couldn match type a0 with R2 In the expression width circle In an equation for it it width circle There even more ambiguity here Whereas image always returns Diagram the circle function can produce any PathLike type and the width function can consume any Enveloped type so GHC has no idea what type to pick to go in the middle However the solution is the same ghci width circle R2",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "D",
          "package": "diagrams-core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DNode",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DNode",
          "package": "diagrams-core",
          "partial": "DNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:DNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDTree\u003c/a\u003e\u003c/code\u003e is a raw tree representation of a \u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e, with all\n   the \u003ccode\u003eu\u003c/code\u003e-annotations removed.  It is used as an intermediate type\n   by diagrams-core; backends should not need to make use of it.\n   Instead, backends can make use of \u003ccode\u003e\u003ca\u003eRTree\u003c/a\u003e\u003c/code\u003e, which \u003ccode\u003e\u003ca\u003eDTree\u003c/a\u003e\u003c/code\u003e gets\n   compiled and optimized to.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "DTree",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#DTree",
          "type": "type"
        },
        "index": {
          "description": "DTree is raw tree representation of QDiagram with all the annotations removed It is used as an intermediate type by diagrams-core backends should not need to make use of it Instead backends can make use of RTree which DTree gets compiled and optimized to",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DTree",
          "package": "diagrams-core",
          "partial": "DTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:DTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default sort of diagram is one where querying at a point\n   simply tells you whether the diagram contains that point or not.\n   Transforming a default diagram into one with a more interesting\n   query can be done via the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e or\n   the \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Diagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Diagram",
          "type": "type"
        },
        "index": {
          "description": "The default sort of diagram is one where querying at point simply tells you whether the diagram contains that point or not Transforming default diagram into one with more interesting query can be done via the Functor instance of QDiagram or the value function",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Diagram",
          "package": "diagrams-core",
          "partial": "Diagram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:Diagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidal annotations which travel down the diagram tree,\n   \u003cem\u003ei.e.\u003c/em\u003e which accumulate along each path to a leaf (and which can\n   act on the upwards-travelling annotations):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e transformations (split at the innermost freeze): see\n     \u003ca\u003eDiagrams.Core.Transform\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e styles (see \u003ca\u003eDiagrams.Core.Style\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e names (see \u003ca\u003eDiagrams.Core.Names\u003c/a\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Diagrams.Core.Types",
          "name": "DownAnnots",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#DownAnnots",
          "type": "type"
        },
        "index": {
          "description": "Monoidal annotations which travel down the diagram tree i.e which accumulate along each path to leaf and which can act on the upwards-travelling annotations transformations split at the innermost freeze see Diagrams.Core.Transform styles see Diagrams.Core.Style names see Diagrams.Core.Names",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DownAnnots",
          "package": "diagrams-core",
          "partial": "Down Annots",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:DownAnnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for primitive things which know how to handle being\n   transformed by both a normal transformation and a \"frozen\"\n   transformation.  The default implementation simply applies both.\n   At the moment, \u003ccode\u003eScaleInv\u003c/code\u003e is the only type with a non-default\n   instance of \u003ccode\u003e\u003ca\u003eIsPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "IsPrim",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#IsPrim",
          "type": "class"
        },
        "index": {
          "description": "type class for primitive things which know how to handle being transformed by both normal transformation and frozen transformation The default implementation simply applies both At the moment ScaleInv is the only type with non-default instance of IsPrim",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "IsPrim",
          "package": "diagrams-core",
          "partial": "Is Prim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:IsPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for backends which support rendering multiple diagrams,\n   e.g. to a multi-page pdf or something similar.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "MultiBackend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#MultiBackend",
          "type": "class"
        },
        "index": {
          "description": "class for backends which support rendering multiple diagrams e.g to multi-page pdf or something similar",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "MultiBackend",
          "package": "diagrams-core",
          "partial": "Multi Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:MultiBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA null backend which does no actual rendering.  It is provided\n   mainly for convenience in situations where you must give a\n   diagram a concrete, monomorphic type, but don't actually care\n   which one.  See \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e for more explanation and examples.\n\u003c/p\u003e\u003cp\u003eIt is courteous, when defining a new primitive \u003ccode\u003eP\u003c/code\u003e, to make an instance\n\u003c/p\u003e\u003cpre\u003e instance Renderable P NullBackend where\n   render _ _ = mempty\n\u003c/pre\u003e\u003cp\u003eThis ensures that the trick with \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e annotations can be used for\n   diagrams containing your primitive.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "NullBackend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#NullBackend",
          "type": "data"
        },
        "index": {
          "description": "null backend which does no actual rendering It is provided mainly for convenience in situations where you must give diagram concrete monomorphic type but don actually care which one See for more explanation and examples It is courteous when defining new primitive to make an instance instance Renderable NullBackend where render mempty This ensures that the trick with annotations can be used for diagrams containing your primitive",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "NullBackend",
          "package": "diagrams-core",
          "partial": "Null Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:NullBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003ePrim b v\u003c/code\u003e is an opaque (existentially quantified)\n   primitive which backend \u003ccode\u003eb\u003c/code\u003e knows how to render in vector space \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Prim",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Prim",
          "type": "data"
        },
        "index": {
          "description": "value of type Prim is an opaque existentially quantified primitive which backend knows how to render in vector space",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Prim",
          "package": "diagrams-core",
          "partial": "Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA leaf in a \u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e tree is either a \u003ccode\u003e\u003ca\u003ePrim\u003c/a\u003e\u003c/code\u003e, or a \"delayed\"\n   \u003ccode\u003eQDiagram\u003c/code\u003e which expands to a real \u003ccode\u003eQDiagram\u003c/code\u003e once it learns the\n   \"final context\" in which it will be rendered.  For example, in\n   order to decide how to draw an arrow, we must know the precise\n   transformation applied to it (since the arrow head and tail are\n   scale-invariant).\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "QDiaLeaf",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#QDiaLeaf",
          "type": "data"
        },
        "index": {
          "description": "leaf in QDiagram tree is either Prim or delayed QDiagram which expands to real QDiagram once it learns the final context in which it will be rendered For example in order to decide how to draw an arrow we must know the precise transformation applied to it since the arrow head and tail are scale-invariant",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "QDiaLeaf",
          "package": "diagrams-core",
          "partial": "QDia Leaf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:QDiaLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fundamental diagram type is represented by trees of\n   primitives with various monoidal annotations.  The \u003ccode\u003eQ\u003c/code\u003e in\n   \u003ccode\u003eQDiagram\u003c/code\u003e stands for \"Queriable\", as distinguished from\n   \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e, a synonym for \u003ccode\u003eQDiagram\u003c/code\u003e with the query type\n   specialized to \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "QDiagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#QDiagram",
          "type": "newtype"
        },
        "index": {
          "description": "The fundamental diagram type is represented by trees of primitives with various monoidal annotations The in QDiagram stands for Queriable as distinguished from Diagram synonym for QDiagram with the query type specialized to Any",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "QDiagram",
          "package": "diagrams-core",
          "partial": "QDiagram",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:QDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "RNode",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#RNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "RNode",
          "package": "diagrams-core",
          "partial": "RNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:RNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eRTree\u003c/a\u003e\u003c/code\u003e is a compiled and optimized representation of a\n   \u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e, which can be used by backends.  They have several\n   invariants which backends may rely upon:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All non-frozen transformations have been pushed all the way to\n     the leaves.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eRPrim\u003c/code\u003e nodes never have any children.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Diagrams.Core.Types",
          "name": "RTree",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#RTree",
          "type": "type"
        },
        "index": {
          "description": "An RTree is compiled and optimized representation of QDiagram which can be used by backends They have several invariants which backends may rely upon All non-frozen transformations have been pushed all the way to the leaves RPrim nodes never have any children",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "RTree",
          "package": "diagrams-core",
          "partial": "RTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:RTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Renderable type class connects backends to primitives which\n   they know how to render.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Renderable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Renderable",
          "type": "class"
        },
        "index": {
          "description": "The Renderable type class connects backends to primitives which they know how to render",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Renderable",
          "package": "diagrams-core",
          "partial": "Renderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:Renderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSubMap\u003c/a\u003e\u003c/code\u003e is a map associating names to subdiagrams. There can\n   be multiple associations for any given name.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "SubMap",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#SubMap",
          "type": "newtype"
        },
        "index": {
          "description": "SubMap is map associating names to subdiagrams There can be multiple associations for any given name",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "SubMap",
          "package": "diagrams-core",
          "partial": "Sub Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:SubMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eSubdiagram\u003c/code\u003e represents a diagram embedded within the context\n   of a larger diagram.  Essentially, it consists of a diagram\n   paired with any accumulated information from the larger context\n   (transformations, attributes, etc.).\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Subdiagram",
          "type": "data"
        },
        "index": {
          "description": "Subdiagram represents diagram embedded within the context of larger diagram Essentially it consists of diagram paired with any accumulated information from the larger context transformations attributes etc",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "partial": "Subdiagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:Subdiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidal annotations which travel up the diagram tree, \u003cem\u003ei.e.\u003c/em\u003e which\n   are aggregated from component diagrams to the whole:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e envelopes (see \u003ca\u003eDiagrams.Core.Envelope\u003c/a\u003e).\n     The envelopes are \"deletable\" meaning that at any point we can\n     throw away the existing envelope and replace it with a new one;\n     sometimes we want to consider a diagram as having a different\n     envelope unrelated to its \"natural\" envelope.\n\u003c/li\u003e\u003cli\u003e traces (see \u003ca\u003eDiagrams.Core.Trace\u003c/a\u003e), also\n     deletable.\n\u003c/li\u003e\u003cli\u003e name/subdiagram associations (see \u003ca\u003eDiagrams.Core.Names\u003c/a\u003e)\n\u003c/li\u003e\u003cli\u003e query functions (see \u003ca\u003eDiagrams.Core.Query\u003c/a\u003e)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Diagrams.Core.Types",
          "name": "UpAnnots",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#UpAnnots",
          "type": "type"
        },
        "index": {
          "description": "Monoidal annotations which travel up the diagram tree i.e which are aggregated from component diagrams to the whole envelopes see Diagrams.Core.Envelope The envelopes are deletable meaning that at any point we can throw away the existing envelope and replace it with new one sometimes we want to consider diagram as having different envelope unrelated to its natural envelope traces see Diagrams.Core.Trace also deletable name subdiagram associations see Diagrams.Core.Names query functions see Diagrams.Core.Query",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "UpAnnots",
          "package": "diagrams-core",
          "partial": "Up Annots",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#t:UpAnnots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DAnnot",
          "package": "diagrams-core",
          "signature": "DAnnot a",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DAnnot",
          "package": "diagrams-core",
          "partial": "DAnnot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DAnnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDDelay\u003c/code\u003e marks a point where a delayed subtree\n   was expanded.  Such subtrees already take all\n   non-frozen transforms above them into account,\n   so when later processing the tree, upon\n   encountering a \u003ccode\u003eDDelay\u003c/code\u003e node we must drop any\n   accumulated non-frozen transformation.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "DDelay",
          "package": "diagrams-core",
          "signature": "DDelay",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "description": "DDelay marks point where delayed subtree was expanded Such subtrees already take all non-frozen transforms above them into account so when later processing the tree upon encountering DDelay node we must drop any accumulated non-frozen transformation",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DDelay",
          "package": "diagrams-core",
          "partial": "DDelay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DEmpty",
          "package": "diagrams-core",
          "signature": "DEmpty",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DEmpty",
          "package": "diagrams-core",
          "partial": "DEmpty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DPrim",
          "package": "diagrams-core",
          "signature": "DPrim (Prim b v)",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DPrim",
          "package": "diagrams-core",
          "partial": "DPrim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DStyle",
          "package": "diagrams-core",
          "signature": "DStyle (Style v)",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DStyle",
          "package": "diagrams-core",
          "partial": "DStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "DTransform",
          "package": "diagrams-core",
          "signature": "DTransform (Split (Transformation v))",
          "source": "src/Diagrams-Core-Types.html#DNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DTransform",
          "package": "diagrams-core",
          "partial": "DTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eQDiagram\u003c/code\u003e produced by a \u003ccode\u003eDelayedLeaf\u003c/code\u003e function \u003cem\u003emust\u003c/em\u003e\n   already apply any non-frozen transformation in the given\n   \u003ccode\u003eDownAnnots\u003c/code\u003e (that is, the non-frozen transformation will not\n   be applied by the context). On the other hand, it must assume\n   that any frozen transformation or attributes will be applied\n   by the context.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "DelayedLeaf",
          "package": "diagrams-core",
          "signature": "DelayedLeaf (DownAnnots v -\u003e QDiagram b v m)",
          "source": "src/Diagrams-Core-Types.html#QDiaLeaf",
          "type": "function"
        },
        "index": {
          "description": "The QDiagram produced by DelayedLeaf function must already apply any non-frozen transformation in the given DownAnnots that is the non-frozen transformation will not be applied by the context On the other hand it must assume that any frozen transformation or attributes will be applied by the context",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "DelayedLeaf",
          "normalized": "DelayedLeaf(DownAnnots a-\u003eQDiagram b a c)",
          "package": "diagrams-core",
          "partial": "Delayed Leaf",
          "signature": "DelayedLeaf(DownAnnots v-\u003eQDiagram b v m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:DelayedLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "Prim",
          "package": "diagrams-core",
          "signature": "p -\u003e Prim b (V p)",
          "source": "src/Diagrams-Core-Types.html#Prim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:Prim\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:Prim\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Prim",
          "normalized": "a-\u003ePrim b(V a)",
          "package": "diagrams-core",
          "partial": "Prim",
          "signature": "p-\u003ePrim b(V p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "PrimLeaf",
          "package": "diagrams-core",
          "signature": "PrimLeaf (Prim b v)",
          "source": "src/Diagrams-Core-Types.html#QDiaLeaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "PrimLeaf",
          "package": "diagrams-core",
          "partial": "Prim Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:PrimLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "QD",
          "package": "diagrams-core",
          "signature": "QD (DUALTree (DownAnnots v) (UpAnnots b v m) () (QDiaLeaf b v m))",
          "source": "src/Diagrams-Core-Types.html#QDiagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "QD",
          "normalized": "QD(DUALTree(DownAnnots a)(UpAnnots b a c)()(QDiaLeaf b a c))",
          "package": "diagrams-core",
          "partial": "QD",
          "signature": "QD(DUALTree(DownAnnots v)(UpAnnots b v m)()(QDiaLeaf b v m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:QD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "SubMap",
          "package": "diagrams-core",
          "signature": "SubMap (Map Name [Subdiagram b v m])",
          "source": "src/Diagrams-Core-Types.html#SubMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:SubMap\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:SubMap\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "SubMap",
          "normalized": "SubMap(Map Name[Subdiagram a b c])",
          "package": "diagrams-core",
          "partial": "Sub Map",
          "signature": "SubMap(Map Name[Subdiagram b v m])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:SubMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "signature": "Subdiagram (QDiagram b v m) (DownAnnots v)",
          "source": "src/Diagrams-Core-Types.html#Subdiagram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:Subdiagram\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:Subdiagram\"]"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "partial": "Subdiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:Subdiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eadjustDia\u003c/a\u003e\u003c/code\u003e allows the backend to make adjustments to the final\n   diagram (e.g. to adjust the size based on the options) before\n   rendering it.  It can also make adjustments to the options\n   record, usually to fill in incompletely specified size\n   information.  A default implementation is provided which makes\n   no adjustments.  See the diagrams-lib package for other useful\n   implementations.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "adjustDia",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e QDiagram b v m -\u003e (Options b v, QDiagram b v m)",
          "source": "src/Diagrams-Core-Types.html#adjustDia",
          "type": "method"
        },
        "index": {
          "description": "adjustDia allows the backend to make adjustments to the final diagram e.g to adjust the size based on the options before rendering it It can also make adjustments to the options record usually to fill in incompletely specified size information default implementation is provided which makes no adjustments See the diagrams-lib package for other useful implementations",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "adjustDia",
          "normalized": "a-\u003eOptions a b-\u003eQDiagram a b c-\u003e(Options a b,QDiagram a b c)",
          "package": "diagrams-core",
          "partial": "Dia",
          "signature": "b-\u003eOptions b v-\u003eQDiagram b v m-\u003e(Options b v,QDiagram b v m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:adjustDia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e on diagrams, designed to be\n   used infix (to help remember which diagram goes on top of which\n   when combining them, namely, the first on top of the second).\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "atop",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#atop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:atop\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:atop\"]"
        },
        "index": {
          "description": "convenient synonym for mappend on diagrams designed to be used infix to help remember which diagram goes on top of which when combining them namely the first on top of the second",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "atop",
          "normalized": "QDiagram a b c-\u003eQDiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:atop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all the query values of a diagram to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "clearValue",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e QDiagram b v Any",
          "source": "src/Diagrams-Core-Types.html#clearValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:clearValue\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:clearValue\"]"
        },
        "index": {
          "description": "Set all the query values of diagram to False",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "clearValue",
          "normalized": "QDiagram a b c-\u003eQDiagram a b Any",
          "package": "diagrams-core",
          "partial": "Value",
          "signature": "QDiagram b v m-\u003eQDiagram b v Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:clearValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edoRender\u003c/a\u003e\u003c/code\u003e is used to interpret rendering operations.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "doRender",
          "package": "diagrams-core",
          "signature": "doRender",
          "source": "src/Diagrams-Core-Types.html#doRender",
          "type": "method"
        },
        "index": {
          "description": "doRender is used to interpret rendering operations",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "doRender",
          "package": "diagrams-core",
          "partial": "Render",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:doRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the envelope of a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "envelope",
          "package": "diagrams-core",
          "signature": "Lens' (QDiagram b v m) (Envelope v)",
          "source": "src/Diagrams-Core-Types.html#envelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:envelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:envelope\"]"
        },
        "index": {
          "description": "Get the envelope of diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "envelope",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, diagram attributes are not affected by\n   transformations.  This means, for example, that \u003ccode\u003elw 0.01 circle\u003c/code\u003e\n   and \u003ccode\u003escale 2 (lw 0.01 circle)\u003c/code\u003e will be drawn with lines of the\n   \u003cem\u003esame\u003c/em\u003e width, and \u003ccode\u003escaleY 3 circle\u003c/code\u003e will be an ellipse drawn with\n   a uniform line.  Once a diagram is frozen, however,\n   transformations do affect attributes, so, for example, \u003ccode\u003escale 2\n   (freeze (lw 0.01 circle))\u003c/code\u003e will be drawn with a line twice as\n   thick as \u003ccode\u003elw 0.01 circle\u003c/code\u003e, and \u003ccode\u003escaleY 3 (freeze circle)\u003c/code\u003e will be\n   drawn with a \"stretched\", variable-width line.\n\u003c/p\u003e\u003cp\u003eAnother way of thinking about it is that pre-\u003ccode\u003efreeze\u003c/code\u003e, we are\n   transforming the \"abstract idea\" of a diagram, and the\n   transformed version is then drawn; when doing a \u003ccode\u003efreeze\u003c/code\u003e, we\n   produce a concrete drawing of the diagram, and it is this visual\n   representation itself which is acted upon by subsequent\n   transformations.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "freeze",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#freeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:freeze\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:freeze\"]"
        },
        "index": {
          "description": "By default diagram attributes are not affected by transformations This means for example that lw circle and scale lw circle will be drawn with lines of the same width and scaleY circle will be an ellipse drawn with uniform line Once diagram is frozen however transformations do affect attributes so for example scale freeze lw circle will be drawn with line twice as thick as lw circle and scaleY freeze circle will be drawn with stretched variable-width line Another way of thinking about it is that pre freeze we are transforming the abstract idea of diagram and the transformed version is then drawn when doing freeze we produce concrete drawing of the diagram and it is this visual representation itself which is acted upon by subsequent transformations",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "freeze",
          "normalized": "QDiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eSubMap\u003c/a\u003e\u003c/code\u003e from a list of associations between names\n   and subdiagrams.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "fromNames",
          "package": "diagrams-core",
          "signature": "[(a, Subdiagram b v m)] -\u003e SubMap b v m",
          "source": "src/Diagrams-Core-Types.html#fromNames",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:fromNames\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:fromNames\"]"
        },
        "index": {
          "description": "Construct SubMap from list of associations between names and subdiagrams",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "fromNames",
          "normalized": "[(a,Subdiagram b c d)]-\u003eSubMap b c d",
          "package": "diagrams-core",
          "partial": "Names",
          "signature": "[(a,Subdiagram b v m)]-\u003eSubMap b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:fromNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a subdiagram into a normal diagram, including the enclosing\n   context.  Concretely, a subdiagram is a pair of (1) a diagram and\n   (2) a \"context\" consisting of an extra transformation and\n   attributes.  \u003ccode\u003egetSub\u003c/code\u003e simply applies the transformation and\n   attributes to the diagram to get the corresponding \"top-level\"\n   diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "getSub",
          "package": "diagrams-core",
          "signature": "Subdiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#getSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:getSub\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:getSub\"]"
        },
        "index": {
          "description": "Turn subdiagram into normal diagram including the enclosing context Concretely subdiagram is pair of diagram and context consisting of an extra transformation and attributes getSub simply applies the transformation and attributes to the diagram to get the corresponding top-level diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "getSub",
          "normalized": "Subdiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "partial": "Sub",
          "signature": "Subdiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:getSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Localize\" a diagram by hiding all the names, so they are no\n   longer visible to the outside.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "localize",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#localize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:localize\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:localize\"]"
        },
        "index": {
          "description": "Localize diagram by hiding all the names so they are no longer visible to the outside",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "localize",
          "normalized": "QDiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:localize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the location of a subdiagram; that is, the location of its\n   local origin \u003cem\u003ewith respect to\u003c/em\u003e the vector space of its parent\n   diagram.  In other words, the point where its local origin\n   \"ended up\".\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "location",
          "package": "diagrams-core",
          "signature": "Subdiagram b v m -\u003e Point v",
          "source": "src/Diagrams-Core-Types.html#location",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:location\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:location\"]"
        },
        "index": {
          "description": "Get the location of subdiagram that is the location of its local origin with respect to the vector space of its parent diagram In other words the point where its local origin ended up",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "location",
          "normalized": "Subdiagram a b c-\u003ePoint b",
          "package": "diagrams-core",
          "signature": "Subdiagram b v m-\u003ePoint v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the most recent diagram associated with (some\n   qualification of) the given name.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "lookupName",
          "package": "diagrams-core",
          "signature": "n -\u003e QDiagram b v m -\u003e Maybe (Subdiagram b v m)",
          "source": "src/Diagrams-Core-Types.html#lookupName",
          "type": "function"
        },
        "index": {
          "description": "Lookup the most recent diagram associated with some qualification of the given name",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "lookupName",
          "normalized": "a-\u003eQDiagram b c d-\u003eMaybe(Subdiagram b c d)",
          "package": "diagrams-core",
          "partial": "Name",
          "signature": "n-\u003eQDiagram b v m-\u003eMaybe(Subdiagram b v m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:lookupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook for the given name in a name map, returning a list of\n   subdiagrams associated with that name.  If no names match the\n   given name exactly, return all the subdiagrams associated with\n   names of which the given name is a suffix.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "lookupSub",
          "package": "diagrams-core",
          "signature": "n -\u003e SubMap b v m -\u003e Maybe [Subdiagram b v m]",
          "source": "src/Diagrams-Core-Types.html#lookupSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:lookupSub\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:lookupSub\"]"
        },
        "index": {
          "description": "Look for the given name in name map returning list of subdiagrams associated with that name If no names match the given name exactly return all the subdiagrams associated with names of which the given name is suffix",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "lookupSub",
          "normalized": "a-\u003eSubMap b c d-\u003eMaybe[Subdiagram b c d]",
          "package": "diagrams-core",
          "partial": "Sub",
          "signature": "n-\u003eSubMap b v m-\u003eMaybe[Subdiagram b v m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:lookupSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a diagram from a single primitive, along with an envelope,\n   trace, subdiagram map, and query function.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "mkQD",
          "package": "diagrams-core",
          "signature": "Prim b v -\u003e Envelope v -\u003e Trace v -\u003e SubMap b v m -\u003e Query v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#mkQD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:mkQD\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkQD\"]"
        },
        "index": {
          "description": "Create diagram from single primitive along with an envelope trace subdiagram map and query function",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "mkQD",
          "normalized": "Prim a b-\u003eEnvelope b-\u003eTrace b-\u003eSubMap a b c-\u003eQuery b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "partial": "QD",
          "signature": "Prim b v-\u003eEnvelope v-\u003eTrace v-\u003eSubMap b v m-\u003eQuery v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:mkQD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a diagram from a generic QDiaLeaf, along with an envelope,\n   trace, subdiagram map, and query function.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "mkQD'",
          "package": "diagrams-core",
          "signature": "QDiaLeaf b v m -\u003e Envelope v -\u003e Trace v -\u003e SubMap b v m -\u003e Query v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#mkQD%27",
          "type": "function"
        },
        "index": {
          "description": "Create diagram from generic QDiaLeaf along with an envelope trace subdiagram map and query function",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "mkQD'",
          "normalized": "QDiaLeaf a b c-\u003eEnvelope b-\u003eTrace b-\u003eSubMap a b c-\u003eQuery b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "partial": "QD'",
          "signature": "QDiaLeaf b v m-\u003eEnvelope v-\u003eTrace v-\u003eSubMap b v m-\u003eQuery v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:mkQD-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a diagram into a subdiagram with no accumulated context.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "mkSubdiagram",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e Subdiagram b v m",
          "source": "src/Diagrams-Core-Types.html#mkSubdiagram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:mkSubdiagram\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:mkSubdiagram\"]"
        },
        "index": {
          "description": "Turn diagram into subdiagram with no accumulated context",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "mkSubdiagram",
          "normalized": "QDiagram a b c-\u003eSubdiagram a b c",
          "package": "diagrams-core",
          "partial": "Subdiagram",
          "signature": "QDiagram b v m-\u003eSubdiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:mkSubdiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach an atomic name to a certain subdiagram, computed from the\n   given diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "nameSub",
          "package": "diagrams-core",
          "signature": "(QDiagram b v m -\u003e Subdiagram b v m) -\u003e n -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#nameSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:nameSub\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:nameSub\"]"
        },
        "index": {
          "description": "Attach an atomic name to certain subdiagram computed from the given diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "nameSub",
          "normalized": "(QDiagram a b c-\u003eSubdiagram a b c)-\u003ed-\u003eQDiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "partial": "Sub",
          "signature": "(QDiagram b v m-\u003eSubdiagram b v m)-\u003en-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:nameSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of names of subdiagrams and their locations.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "names",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e [(Name, [Point v])]",
          "source": "src/Diagrams-Core-Types.html#names",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:names\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:names\"]"
        },
        "index": {
          "description": "Get list of names of subdiagrams and their locations",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "names",
          "normalized": "QDiagram a b c-\u003e[(Name,[Point b])]",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003e[(Name,[Point v])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null primitive, which every backend can render by doing\n   nothing.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "nullPrim",
          "package": "diagrams-core",
          "signature": "Prim b v",
          "source": "src/Diagrams-Core-Types.html#nullPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:nullPrim\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:nullPrim\"]"
        },
        "index": {
          "description": "The null primitive which every backend can render by doing nothing",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "nullPrim",
          "package": "diagrams-core",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:nullPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \"point diagram\", which has no content, no trace, an\n   empty query, and a point envelope.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "pointDiagram",
          "package": "diagrams-core",
          "signature": "Point v -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#pointDiagram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:pointDiagram\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:pointDiagram\"]"
        },
        "index": {
          "description": "Create point diagram which has no content no trace an empty query and point envelope",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "pointDiagram",
          "normalized": "Point a-\u003eQDiagram b a c",
          "package": "diagrams-core",
          "partial": "Diagram",
          "signature": "Point v-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:pointDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a list of primitives from a diagram, together with their\n   associated transformations and styles.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "prims",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e [(Prim b v, (Split (Transformation v), Style v))]",
          "source": "src/Diagrams-Core-Types.html#prims",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:prims\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:prims\"]"
        },
        "index": {
          "description": "Extract list of primitives from diagram together with their associated transformations and styles",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "prims",
          "normalized": "QDiagram a b c-\u003e[(Prim a b,(Split(Transformation b),Style b))]",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003e[(Prim b v,(Split(Transformation v),Style v))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:prims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the query function associated with a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "query",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e Query v m",
          "source": "src/Diagrams-Core-Types.html#query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:query\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:query\"]"
        },
        "index": {
          "description": "Get the query function associated with diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "query",
          "normalized": "QDiagram a b c-\u003eQuery b c",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003eQuery v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \"raw\" content of a subdiagram, by throwing away the\n   context.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "rawSub",
          "package": "diagrams-core",
          "signature": "Subdiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#rawSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:rawSub\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:rawSub\"]"
        },
        "index": {
          "description": "Extract the raw content of subdiagram by throwing away the context",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "rawSub",
          "normalized": "Subdiagram a b c-\u003eQDiagram a b c",
          "package": "diagrams-core",
          "partial": "Sub",
          "signature": "Subdiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:rawSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a name/diagram association to a submap.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "rememberAs",
          "package": "diagrams-core",
          "signature": "a -\u003e QDiagram b v m -\u003e SubMap b v m -\u003e SubMap b v m",
          "source": "src/Diagrams-Core-Types.html#rememberAs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:rememberAs\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:rememberAs\"]"
        },
        "index": {
          "description": "Add name diagram association to submap",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "rememberAs",
          "normalized": "a-\u003eQDiagram b c d-\u003eSubMap b c d-\u003eSubMap b c d",
          "package": "diagrams-core",
          "partial": "As",
          "signature": "a-\u003eQDiagram b v m-\u003eSubMap b v m-\u003eSubMap b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:rememberAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a token representing the backend and a\n   transformable object, render it in the appropriate rendering\n   context.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "render",
          "package": "diagrams-core",
          "signature": "b -\u003e t -\u003e Render b (V t)",
          "source": "src/Diagrams-Core-Types.html#render",
          "type": "method"
        },
        "index": {
          "description": "Given token representing the backend and transformable object render it in the appropriate rendering context",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "render",
          "normalized": "a-\u003eb-\u003eRender a(V b)",
          "package": "diagrams-core",
          "signature": "b-\u003et-\u003eRender b(V t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackends may override \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e to gain more control over\n   the way that rendering happens.  A typical implementation might be something like\n\u003c/p\u003e\u003cpre\u003e renderData = renderRTree . toRTree\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003erenderRTree :: RTree b v () -\u003e Render b v\u003c/code\u003e is\n   implemented by the backend (with appropriate types filled in\n   for \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ev\u003c/code\u003e), and \u003ccode\u003etoRTree\u003c/code\u003e is from \u003ca\u003eDiagrams.Core.Compile\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "renderData",
          "package": "diagrams-core",
          "signature": "b -\u003e QDiagram b v m -\u003e Render b v",
          "source": "src/Diagrams-Core-Types.html#renderData",
          "type": "method"
        },
        "index": {
          "description": "Backends may override renderData to gain more control over the way that rendering happens typical implementation might be something like renderData renderRTree toRTree where renderRTree RTree Render is implemented by the backend with appropriate types filled in for and and toRTree is from Diagrams.Core.Compile",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "renderData",
          "normalized": "a-\u003eQDiagram a b c-\u003eRender a b",
          "package": "diagrams-core",
          "partial": "Data",
          "signature": "b-\u003eQDiagram b v m-\u003eRender b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:renderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "renderDia",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e QDiagram b v m -\u003e Result b v",
          "source": "src/Diagrams-Core-Types.html#renderDia",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "renderDia",
          "normalized": "a-\u003eOptions a b-\u003eQDiagram a b c-\u003eResult a b",
          "package": "diagrams-core",
          "partial": "Dia",
          "signature": "b-\u003eOptions b v-\u003eQDiagram b v m-\u003eResult b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:renderDia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender multiple diagrams at once.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "renderDias",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e [QDiagram b v m] -\u003e Result b v",
          "source": "src/Diagrams-Core-Types.html#renderDias",
          "type": "method"
        },
        "index": {
          "description": "Render multiple diagrams at once",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "renderDias",
          "normalized": "a-\u003eOptions a b-\u003e[QDiagram a b c]-\u003eResult a b",
          "package": "diagrams-core",
          "partial": "Dias",
          "signature": "b-\u003eOptions b v-\u003e[QDiagram b v m]-\u003eResult b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:renderDias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the query values of a diagram to \u003ccode\u003eTrue\u003c/code\u003e/\u003ccode\u003eFalse\u003c/code\u003e: any values\n   equal to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e are set to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e; any other values are set to\n   \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "resetValue",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e QDiagram b v Any",
          "source": "src/Diagrams-Core-Types.html#resetValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:resetValue\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:resetValue\"]"
        },
        "index": {
          "description": "Reset the query values of diagram to True False any values equal to mempty are set to False any other values are set to True",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "resetValue",
          "normalized": "QDiagram a b c-\u003eQDiagram a b Any",
          "package": "diagrams-core",
          "partial": "Value",
          "signature": "QDiagram b v m-\u003eQDiagram b v Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:resetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a diagram's query function at a given point.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "sample",
          "package": "diagrams-core",
          "signature": "QDiagram b v m -\u003e Point v -\u003e m",
          "source": "src/Diagrams-Core-Types.html#sample",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:sample\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:sample\"]"
        },
        "index": {
          "description": "Sample diagram query function at given point",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "sample",
          "normalized": "QDiagram a b c-\u003ePoint b-\u003ec",
          "package": "diagrams-core",
          "signature": "QDiagram b v m-\u003ePoint v-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the envelope of a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "setEnvelope",
          "package": "diagrams-core",
          "signature": "Envelope v -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#setEnvelope",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:setEnvelope\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:setEnvelope\"]"
        },
        "index": {
          "description": "Replace the envelope of diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "setEnvelope",
          "normalized": "Envelope a-\u003eQDiagram b a c-\u003eQDiagram b a c",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "Envelope v-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:setEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the trace of a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "setTrace",
          "package": "diagrams-core",
          "signature": "Trace v -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#setTrace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:setTrace\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:setTrace\"]"
        },
        "index": {
          "description": "Replace the trace of diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "setTrace",
          "normalized": "Trace a-\u003eQDiagram b a c-\u003eQDiagram b a c",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "Trace v-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:setTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the subdiagram map (\u003cem\u003ei.e.\u003c/em\u003e an association from names to\n   subdiagrams) of a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "subMap",
          "package": "diagrams-core",
          "signature": "Lens' (QDiagram b v m) (SubMap b v m)",
          "source": "src/Diagrams-Core-Types.html#subMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:subMap\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:subMap\"]"
        },
        "index": {
          "description": "Get the subdiagram map i.e an association from names to subdiagrams of diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "subMap",
          "package": "diagrams-core",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:subMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \"point subdiagram\", that is, a \u003ccode\u003e\u003ca\u003epointDiagram\u003c/a\u003e\u003c/code\u003e (with no\n   content and a point envelope) treated as a subdiagram with local\n   origin at the given point.  Note this is not the same as\n   \u003ccode\u003emkSubdiagram . pointDiagram\u003c/code\u003e, which would result in a subdiagram\n   with local origin at the parent origin, rather than at the given\n   point.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "subPoint",
          "package": "diagrams-core",
          "signature": "Point v -\u003e Subdiagram b v m",
          "source": "src/Diagrams-Core-Types.html#subPoint",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:subPoint\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:subPoint\"]"
        },
        "index": {
          "description": "Create point subdiagram that is pointDiagram with no content and point envelope treated as subdiagram with local origin at the given point Note this is not the same as mkSubdiagram pointDiagram which would result in subdiagram with local origin at the parent origin rather than at the given point",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "subPoint",
          "normalized": "Point a-\u003eSubdiagram b a c",
          "package": "diagrams-core",
          "partial": "Point",
          "signature": "Point v-\u003eSubdiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:subPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the trace of a diagram.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "trace",
          "package": "diagrams-core",
          "signature": "Lens' (QDiagram b v m) (Trace v)",
          "source": "src/Diagrams-Core-Types.html#trace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:trace\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:trace\"]"
        },
        "index": {
          "description": "Get the trace of diagram",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "trace",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the (total) transformation from a downwards annotation\n   value.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "transfFromAnnot",
          "package": "diagrams-core",
          "signature": "DownAnnots v -\u003e Transformation v",
          "source": "src/Diagrams-Core-Types.html#transfFromAnnot",
          "type": "function"
        },
        "index": {
          "description": "Extract the total transformation from downwards annotation value",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "transfFromAnnot",
          "normalized": "DownAnnots a-\u003eTransformation a",
          "package": "diagrams-core",
          "partial": "From Annot",
          "signature": "DownAnnots v-\u003eTransformation v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:transfFromAnnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a transformation into a default downwards annotation\n   value.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "transfToAnnot",
          "package": "diagrams-core",
          "signature": "Transformation v -\u003e DownAnnots v",
          "source": "src/Diagrams-Core-Types.html#transfToAnnot",
          "type": "function"
        },
        "index": {
          "description": "Inject transformation into default downwards annotation value",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "transfToAnnot",
          "normalized": "Transformation a-\u003eDownAnnots a",
          "package": "diagrams-core",
          "partial": "To Annot",
          "signature": "Transformation v-\u003eDownAnnots v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:transfToAnnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "transformWithFreeze",
          "package": "diagrams-core",
          "signature": "Transformation (V p) -\u003e Transformation (V p) -\u003e p -\u003e p",
          "source": "src/Diagrams-Core-Types.html#transformWithFreeze",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "transformWithFreeze",
          "normalized": "Transformation(V a)-\u003eTransformation(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "With Freeze",
          "signature": "Transformation(V p)-\u003eTransformation(V p)-\u003ep-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:transformWithFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the query value for \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e points in a diagram (\u003cem\u003ei.e.\u003c/em\u003e points\n   \"inside\" the diagram); \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e points will be set to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "value",
          "package": "diagrams-core",
          "signature": "m -\u003e QDiagram b v Any -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:value\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:value\"]"
        },
        "index": {
          "description": "Set the query value for True points in diagram i.e points inside the diagram False points will be set to mempty",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "value",
          "normalized": "a-\u003eQDiagram b c Any-\u003eQDiagram b c a",
          "package": "diagrams-core",
          "signature": "m-\u003eQDiagram b v Any-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name and a diagram transformation indexed by a\n   subdiagram, perform the transformation using the most recent\n   subdiagram associated with (some qualification of) the name,\n   or perform the identity transformation if the name does not exist.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "withName",
          "package": "diagrams-core",
          "signature": "n -\u003e (Subdiagram b v m -\u003e QDiagram b v m -\u003e QDiagram b v m) -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#withName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withName\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:withName\"]"
        },
        "index": {
          "description": "Given name and diagram transformation indexed by subdiagram perform the transformation using the most recent subdiagram associated with some qualification of the name or perform the identity transformation if the name does not exist",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "withName",
          "normalized": "a-\u003e(Subdiagram b c d-\u003eQDiagram b c d-\u003eQDiagram b c d)-\u003eQDiagram b c d-\u003eQDiagram b c d",
          "package": "diagrams-core",
          "partial": "Name",
          "signature": "n-\u003e(Subdiagram b v m-\u003eQDiagram b v m-\u003eQDiagram b v m)-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name and a diagram transformation indexed by a list of\n   subdiagrams, perform the transformation using the\n   collection of all such subdiagrams associated with (some\n   qualification of) the given name.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "withNameAll",
          "package": "diagrams-core",
          "signature": "n -\u003e ([Subdiagram b v m] -\u003e QDiagram b v m -\u003e QDiagram b v m) -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#withNameAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withNameAll\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:withNameAll\"]"
        },
        "index": {
          "description": "Given name and diagram transformation indexed by list of subdiagrams perform the transformation using the collection of all such subdiagrams associated with some qualification of the given name",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "withNameAll",
          "normalized": "a-\u003e([Subdiagram b c d]-\u003eQDiagram b c d-\u003eQDiagram b c d)-\u003eQDiagram b c d-\u003eQDiagram b c d",
          "package": "diagrams-core",
          "partial": "Name All",
          "signature": "n-\u003e([Subdiagram b v m]-\u003eQDiagram b v m-\u003eQDiagram b v m)-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withNameAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of names and a diagram transformation indexed by a\n   list of subdiagrams, perform the transformation using the\n   list of most recent subdiagrams associated with (some qualification\n   of) each name.  Do nothing (the identity transformation) if any\n   of the names do not exist.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.Types\",\"Diagrams.Core\"]",
          "name": "withNames",
          "package": "diagrams-core",
          "signature": "[n] -\u003e ([Subdiagram b v m] -\u003e QDiagram b v m -\u003e QDiagram b v m) -\u003e QDiagram b v m -\u003e QDiagram b v m",
          "source": "src/Diagrams-Core-Types.html#withNames",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withNames\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:withNames\"]"
        },
        "index": {
          "description": "Given list of names and diagram transformation indexed by list of subdiagrams perform the transformation using the list of most recent subdiagrams associated with some qualification of each name Do nothing the identity transformation if any of the names do not exist",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "withNames",
          "normalized": "[a]-\u003e([Subdiagram b c d]-\u003eQDiagram b c d-\u003eQDiagram b c d)-\u003eQDiagram b c d-\u003eQDiagram b c d",
          "package": "diagrams-core",
          "partial": "Names",
          "signature": "[n]-\u003e([Subdiagram b v m]-\u003eQDiagram b v m-\u003eQDiagram b v m)-\u003eQDiagram b v m-\u003eQDiagram b v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core.Types",
          "name": "withQDiaLeaf",
          "package": "diagrams-core",
          "signature": "(Prim b v -\u003e r) -\u003e ((DownAnnots v -\u003e QDiagram b v m) -\u003e r) -\u003e QDiaLeaf b v m -\u003e r",
          "source": "src/Diagrams-Core-Types.html#withQDiaLeaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "withQDiaLeaf",
          "normalized": "(Prim a b-\u003ec)-\u003e((DownAnnots b-\u003eQDiagram a b d)-\u003ec)-\u003eQDiaLeaf a b d-\u003ec",
          "package": "diagrams-core",
          "partial": "QDia Leaf",
          "signature": "(Prim b v-\u003er)-\u003e((DownAnnots v-\u003eQDiagram b v m)-\u003er)-\u003eQDiaLeaf b v m-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withQDiaLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a rendering operation with a local style. The default\n   implementation does nothing, and must be overridden by backends\n   that do not override \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core.Types",
          "name": "withStyle",
          "package": "diagrams-core",
          "signature": "withStyle",
          "source": "src/Diagrams-Core-Types.html#withStyle",
          "type": "method"
        },
        "index": {
          "description": "Perform rendering operation with local style The default implementation does nothing and must be overridden by backends that do not override renderData",
          "hierarchy": "Diagrams Core Types",
          "module": "Diagrams.Core.Types",
          "name": "withStyle",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-Types.html#v:withStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType family for identifying associated vector spaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core.V",
          "name": "V",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-V.html",
          "type": "module"
        },
        "index": {
          "description": "Type family for identifying associated vector spaces",
          "hierarchy": "Diagrams Core V",
          "module": "Diagrams.Core.V",
          "name": "V",
          "package": "diagrams-core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-V.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany sorts of objects have an associated vector space in which\n   they \"live\".  The type function \u003ccode\u003eV\u003c/code\u003e maps from object types to\n   the associated vector space.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Core.V\",\"Diagrams.Core\"]",
          "name": "V",
          "package": "diagrams-core",
          "signature": "V",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-V.html#t:V\",\"http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:V\"]"
        },
        "index": {
          "description": "Many sorts of objects have an associated vector space in which they live The type function maps from object types to the associated vector space",
          "hierarchy": "Diagrams Core V",
          "module": "Diagrams.Core.V",
          "name": "V",
          "package": "diagrams-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core-V.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core library of primitives forming the basis of an embedded\n domain-specific language for describing and rendering diagrams.\n Normal users of the diagrams library should almost never need to\n import anything from this package directly; instead, import modules\n (especially \u003ca\u003eDiagrams.Prelude\u003c/a\u003e) from the diagrams-lib package,\n which re-exports most things of value to users.\n\u003c/p\u003e\u003cp\u003eFor most library code needing access to core internals, it should\n be sufficient to import this module, which simply re-exports useful\n functionality from other modules in the core library.  Library\n writers needing finer-grained access or functionality may\n occasionally find it useful to directly import one of the\n constituent core modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Core",
          "name": "Core",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The core library of primitives forming the basis of an embedded domain-specific language for describing and rendering diagrams Normal users of the diagrams library should almost never need to import anything from this package directly instead import modules especially Diagrams.Prelude from the diagrams-lib package which re-exports most things of value to users For most library code needing access to core internals it should be sufficient to import this module which simply re-exports useful functionality from other modules in the core library Library writers needing finer-grained access or functionality may occasionally find it useful to directly import one of the constituent core modules",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Core",
          "package": "diagrams-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(v1 :-: v2)\u003c/code\u003e is a linear map paired with its inverse.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": ":-:",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#%3A-%3A",
          "type": "data"
        },
        "index": {
          "description": "v1 v2 is linear map paired with its inverse",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": ":-:",
          "package": "diagrams-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic names.  \u003ccode\u003eAName\u003c/code\u003e is just an existential wrapper around\n   things which are \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "AName",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#AName",
          "type": "data"
        },
        "index": {
          "description": "Atomic names AName is just an existential wrapper around things which are Typeable Ord and Show",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "AName",
          "package": "diagrams-core",
          "partial": "AName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:AName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper type to hold attributes.  Some attributes\n   are affected by transformations and some are not.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Attribute",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#Attribute",
          "type": "data"
        },
        "index": {
          "description": "An existential wrapper type to hold attributes Some attributes are affected by transformations and some are not",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Attribute",
          "package": "diagrams-core",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery attribute must be an instance of \u003ccode\u003eAttributeClass\u003c/code\u003e, which\n   simply guarantees \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e constraints.  The\n   \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e instance for an attribute determines how it will combine\n   with other attributes of the same type.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "AttributeClass",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#AttributeClass",
          "type": "class"
        },
        "index": {
          "description": "Every attribute must be an instance of AttributeClass which simply guarantees Typeable and Semigroup constraints The Semigroup instance for an attribute determines how it will combine with other attributes of the same type",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "AttributeClass",
          "package": "diagrams-core",
          "partial": "Attribute Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:AttributeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract diagrams are rendered to particular formats by\n   \u003cem\u003ebackends\u003c/em\u003e.  Each backend/vector space combination must be an\n   instance of the \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e class. A minimal complete definition\n   consists of the three associated types, an implementation for\n   \u003ccode\u003e\u003ca\u003edoRender\u003c/a\u003e\u003c/code\u003e, and \u003cem\u003eone of\u003c/em\u003e either \u003ccode\u003e\u003ca\u003ewithStyle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Backend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Backend",
          "type": "class"
        },
        "index": {
          "description": "Abstract diagrams are rendered to particular formats by backends Each backend vector space combination must be an instance of the Backend class minimal complete definition consists of the three associated types an implementation for doRender and one of either withStyle or renderData",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Backend",
          "package": "diagrams-core",
          "partial": "Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eD\u003c/code\u003e type is provided for convenience in situations where you\n   must give a diagram a concrete, monomorphic type, but don't care\n   which one.  Such situations arise when you pass a diagram to a\n   function which is polymorphic in its input but monomorphic in its\n   output, such as \u003ccode\u003ewidth\u003c/code\u003e, \u003ccode\u003eheight\u003c/code\u003e, \u003ccode\u003ephantom\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003enames\u003c/a\u003e\u003c/code\u003e.  Such\n   functions compute some property of the diagram, or use it to\n   accomplish some other purpose, but do not result in the diagram\n   being rendered.  If the diagram does not have a monomorphic type,\n   GHC complains that it cannot determine the diagram's type.\n\u003c/p\u003e\u003cp\u003eFor example, here is the error we get if we try to compute the\n   width of an image (this example requires \u003ccode\u003ediagrams-lib\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (image \"foo.png\" 200 200)\n\n \u003cinteractive\u003e:8:8:\n     No instance for (Renderable Diagrams.TwoD.Image.Image b0)\n       arising from a use of `image'\n     Possible fix:\n       add an instance declaration for\n       (Renderable Diagrams.TwoD.Image.Image b0)\n     In the first argument of `width', namely\n       `(image \"foo.png\" 200 200)'\n     In the expression: width (image \"foo.png\" 200 200)\n     In an equation for `it': it = width (image \"foo.png\" 200 200)\n\u003c/pre\u003e\u003cp\u003eGHC complains that there is no instance for \u003ccode\u003eRenderable Image\n   b0\u003c/code\u003e; what is really going on is that it does not have enough\n   information to decide what backend to use (hence the\n   uninstantiated \u003ccode\u003eb0\u003c/code\u003e). This is annoying because \u003cem\u003ewe\u003c/em\u003e know that the\n   choice of backend cannot possibly affect the width of the image\n   (it's 200! it's right there in the code!); \u003cem\u003ebut\u003c/em\u003e there is no way\n   for GHC to know that.\n\u003c/p\u003e\u003cp\u003eThe solution is to annotate the call to \u003ccode\u003eimage\u003c/code\u003e with the type\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eR2\u003c/code\u003e\u003c/code\u003e, like so:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (image \"foo.png\" 200 200 :: D R2)\n 200.00000000000006\n\u003c/pre\u003e\u003cp\u003e(It turns out the width wasn't 200 after all...)\n\u003c/p\u003e\u003cp\u003eAs another example, here is the error we get if we try to compute\n   the width of a radius-1 circle:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (circle 1)\n\n \u003cinteractive\u003e:4:1:\n     Couldn't match type `V a0' with `R2'\n     In the expression: width (circle 1)\n     In an equation for `it': it = width (circle 1)\n\u003c/pre\u003e\u003cp\u003eThere's even more ambiguity here.  Whereas \u003ccode\u003eimage\u003c/code\u003e always returns\n   a \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003ecircle\u003c/code\u003e function can produce any \u003ccode\u003ePathLike\u003c/code\u003e\n   type, and the \u003ccode\u003ewidth\u003c/code\u003e function can consume any \u003ccode\u003e\u003ca\u003eEnveloped\u003c/a\u003e\u003c/code\u003e type,\n   so GHC has no idea what type to pick to go in the middle.\n   However, the solution is the same:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e width (circle 1 :: D R2)\n 1.9999999999999998\n\u003c/pre\u003e",
          "module": "Diagrams.Core",
          "name": "D",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#D",
          "type": "type"
        },
        "index": {
          "description": "The type is provided for convenience in situations where you must give diagram concrete monomorphic type but don care which one Such situations arise when you pass diagram to function which is polymorphic in its input but monomorphic in its output such as width height phantom or names Such functions compute some property of the diagram or use it to accomplish some other purpose but do not result in the diagram being rendered If the diagram does not have monomorphic type GHC complains that it cannot determine the diagram type For example here is the error we get if we try to compute the width of an image this example requires diagrams-lib ghci width image foo.png interactive No instance for Renderable Diagrams.TwoD.Image.Image b0 arising from use of image Possible fix add an instance declaration for Renderable Diagrams.TwoD.Image.Image b0 In the first argument of width namely image foo.png In the expression width image foo.png In an equation for it it width image foo.png GHC complains that there is no instance for Renderable Image b0 what is really going on is that it does not have enough information to decide what backend to use hence the uninstantiated b0 This is annoying because we know that the choice of backend cannot possibly affect the width of the image it it right there in the code but there is no way for GHC to know that The solution is to annotate the call to image with the type R2 like so ghci width image foo.png R2 It turns out the width wasn after all As another example here is the error we get if we try to compute the width of radius-1 circle ghci width circle interactive Couldn match type a0 with R2 In the expression width circle In an equation for it it width circle There even more ambiguity here Whereas image always returns Diagram the circle function can produce any PathLike type and the width function can consume any Enveloped type so GHC has no idea what type to pick to go in the middle However the solution is the same ghci width circle R2",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "D",
          "package": "diagrams-core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default sort of diagram is one where querying at a point\n   simply tells you whether the diagram contains that point or not.\n   Transforming a default diagram into one with a more interesting\n   query can be done via the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eQDiagram\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e or\n   the \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Diagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Diagram",
          "type": "type"
        },
        "index": {
          "description": "The default sort of diagram is one where querying at point simply tells you whether the diagram contains that point or not Transforming default diagram into one with more interesting query can be done via the Functor instance of QDiagram or the value function",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Diagram",
          "package": "diagrams-core",
          "partial": "Diagram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Diagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery diagram comes equipped with an \u003cem\u003eenvelope\u003c/em\u003e.  What is an envelope?\n\u003c/p\u003e\u003cp\u003eConsider first the idea of a \u003cem\u003ebounding box\u003c/em\u003e. A bounding box\n   expresses the distance to a bounding plane in every direction\n   parallel to an axis.  That is, a bounding box can be thought of\n   as the intersection of a collection of half-planes, two\n   perpendicular to each axis.\n\u003c/p\u003e\u003cp\u003eMore generally, the intersection of half-planes in \u003cem\u003eevery\u003c/em\u003e\n   direction would give a tight \"bounding region\", or convex hull.\n   However, representing such a thing intensionally would be\n   impossible; hence bounding boxes are often used as an\n   approximation.\n\u003c/p\u003e\u003cp\u003eAn envelope is an \u003cem\u003eextensional\u003c/em\u003e representation of such a\n   \"bounding region\".  Instead of storing some sort of direct\n   representation, we store a \u003cem\u003efunction\u003c/em\u003e which takes a direction as\n   input and gives a distance to a bounding half-plane as output.\n   The important point is that envelopes can be composed, and\n   transformed by any affine transformation.\n\u003c/p\u003e\u003cp\u003eFormally, given a vector \u003ccode\u003ev\u003c/code\u003e, the envelope computes a scalar \u003ccode\u003es\u003c/code\u003e such\n   that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e for every point \u003ccode\u003eu\u003c/code\u003e inside the diagram,\n       if the projection of \u003ccode\u003e(u - origin)\u003c/code\u003e onto \u003ccode\u003ev\u003c/code\u003e is \u003ccode\u003es' *^ v\u003c/code\u003e, then \u003ccode\u003es' \u003c= s\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e is the smallest such scalar.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere is also a special \"empty envelope\".\n\u003c/p\u003e\u003cp\u003eThe idea for envelopes came from\n   Sebastian Setzer; see\n   \u003ca\u003ehttp://byorgey.wordpress.com/2009/10/28/collecting-attributes/#comment-2030\u003c/a\u003e.  See also Brent Yorgey, \u003cem\u003eMonoids: Theme and Variations\u003c/em\u003e, published in the 2012 Haskell Symposium: \u003ca\u003ehttp://www.cis.upenn.edu/~byorgey/pub/monoid-pearl.pdf\u003c/a\u003e; video: \u003ca\u003ehttp://www.youtube.com/watch?v=X-8NCkD2vOw\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Envelope",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#Envelope",
          "type": "newtype"
        },
        "index": {
          "description": "Every diagram comes equipped with an envelope What is an envelope Consider first the idea of bounding box bounding box expresses the distance to bounding plane in every direction parallel to an axis That is bounding box can be thought of as the intersection of collection of half-planes two perpendicular to each axis More generally the intersection of half-planes in every direction would give tight bounding region or convex hull However representing such thing intensionally would be impossible hence bounding boxes are often used as an approximation An envelope is an extensional representation of such bounding region Instead of storing some sort of direct representation we store function which takes direction as input and gives distance to bounding half-plane as output The important point is that envelopes can be composed and transformed by any affine transformation Formally given vector the envelope computes scalar such that for every point inside the diagram if the projection of origin onto is then is the smallest such scalar There is also special empty envelope The idea for envelopes came from Sebastian Setzer see http byorgey.wordpress.com collecting-attributes comment-2030 See also Brent Yorgey Monoids Theme and Variations published in the Haskell Symposium http www.cis.upenn.edu byorgey pub monoid-pearl.pdf video http www.youtube.com watch X-8NCkD2vOw",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Envelope",
          "package": "diagrams-core",
          "partial": "Envelope",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eEnveloped\u003c/code\u003e abstracts over things which have an envelope.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Enveloped",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#Enveloped",
          "type": "class"
        },
        "index": {
          "description": "Enveloped abstracts over things which have an envelope",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Enveloped",
          "package": "diagrams-core",
          "partial": "Enveloped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Enveloped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHasLinearMap\u003c/a\u003e\u003c/code\u003e is a poor man's class constraint synonym, just to\n   help shorten some of the ridiculously long constraint sets.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "HasLinearMap",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#HasLinearMap",
          "type": "class"
        },
        "index": {
          "description": "HasLinearMap is poor man class constraint synonym just to help shorten some of the ridiculously long constraint sets",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "HasLinearMap",
          "package": "diagrams-core",
          "partial": "Has Linear Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:HasLinearMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types which have an intrinsic notion of a \"local\n   origin\", i.e. things which are not invariant under translation,\n   and which allow the origin to be moved.\n\u003c/p\u003e\u003cp\u003eOne might wonder why not just use \u003ccode\u003eTransformable\u003c/code\u003e instead of\n   having a separate class for \u003ccode\u003e\u003ca\u003eHasOrigin\u003c/a\u003e\u003c/code\u003e; indeed, for types which\n   are instances of both we should have the identity\n\u003c/p\u003e\u003cpre\u003e moveOriginTo (origin .^+ v) === translate (negateV v)\n\u003c/pre\u003e\u003cp\u003eThe reason is that some things (e.g. vectors, \u003ccode\u003eTrail\u003c/code\u003es) are\n   transformable but are translationally invariant, i.e. have no\n   origin.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-HasOrigin.html#HasOrigin",
          "type": "class"
        },
        "index": {
          "description": "Class of types which have an intrinsic notion of local origin i.e things which are not invariant under translation and which allow the origin to be moved One might wonder why not just use Transformable instead of having separate class for HasOrigin indeed for types which are instances of both we should have the identity moveOriginTo origin translate negateV The reason is that some things e.g vectors Trail are transformable but are translationally invariant i.e have no origin",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "HasOrigin",
          "package": "diagrams-core",
          "partial": "Has Origin",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:HasOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for things which have a style.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "HasStyle",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#HasStyle",
          "type": "class"
        },
        "index": {
          "description": "Type class for things which have style",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "HasStyle",
          "package": "diagrams-core",
          "partial": "Has Style",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:HasStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for those types which can be used as names.  They must\n   support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e (to facilitate extracting them from\n   existential wrappers), \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e (for comparison and efficient\n   storage) and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "IsName",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#IsName",
          "type": "class"
        },
        "index": {
          "description": "Class for those types which can be used as names They must support Typeable to facilitate extracting them from existential wrappers Ord for comparison and efficient storage and Show",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "IsName",
          "package": "diagrams-core",
          "partial": "Is Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:IsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for primitive things which know how to handle being\n   transformed by both a normal transformation and a \"frozen\"\n   transformation.  The default implementation simply applies both.\n   At the moment, \u003ccode\u003eScaleInv\u003c/code\u003e is the only type with a non-default\n   instance of \u003ccode\u003e\u003ca\u003eIsPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "IsPrim",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#IsPrim",
          "type": "class"
        },
        "index": {
          "description": "type class for primitive things which know how to handle being transformed by both normal transformation and frozen transformation The default implementation simply applies both At the moment ScaleInv is the only type with non-default instance of IsPrim",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "IsPrim",
          "package": "diagrams-core",
          "partial": "Is Prim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:IsPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things which can be placed \"next to\" other things, for some\n   appropriate notion of \"next to\".\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Juxtaposable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Juxtapose.html#Juxtaposable",
          "type": "class"
        },
        "index": {
          "description": "Class of things which can be placed next to other things for some appropriate notion of next to",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Juxtaposable",
          "package": "diagrams-core",
          "partial": "Juxtaposable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Juxtaposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eMonoid'\u003c/code\u003e class is a synonym for things which are instances\n   of both \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.  Ideally, the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e class\n   itself will eventually include a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e superclass and we\n   can get rid of this.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Monoid'",
          "package": "diagrams-core",
          "type": "class"
        },
        "index": {
          "description": "The Monoid class is synonym for things which are instances of both Semigroup and Monoid Ideally the Monoid class itself will eventually include Semigroup superclass and we can get rid of this",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Monoid'",
          "package": "diagrams-core",
          "partial": "Monoid'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Monoid-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for backends which support rendering multiple diagrams,\n   e.g. to a multi-page pdf or something similar.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "MultiBackend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#MultiBackend",
          "type": "class"
        },
        "index": {
          "description": "class for backends which support rendering multiple diagrams e.g to multi-page pdf or something similar",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "MultiBackend",
          "package": "diagrams-core",
          "partial": "Multi Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:MultiBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (qualified) name is a (possibly empty) sequence of atomic names.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Name",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#Name",
          "type": "data"
        },
        "index": {
          "description": "qualified name is possibly empty sequence of atomic names",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Name",
          "package": "diagrams-core",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA null backend which does no actual rendering.  It is provided\n   mainly for convenience in situations where you must give a\n   diagram a concrete, monomorphic type, but don't actually care\n   which one.  See \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e for more explanation and examples.\n\u003c/p\u003e\u003cp\u003eIt is courteous, when defining a new primitive \u003ccode\u003eP\u003c/code\u003e, to make an instance\n\u003c/p\u003e\u003cpre\u003e instance Renderable P NullBackend where\n   render _ _ = mempty\n\u003c/pre\u003e\u003cp\u003eThis ensures that the trick with \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e annotations can be used for\n   diagrams containing your primitive.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "NullBackend",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#NullBackend",
          "type": "data"
        },
        "index": {
          "description": "null backend which does no actual rendering It is provided mainly for convenience in situations where you must give diagram concrete monomorphic type but don actually care which one See for more explanation and examples It is courteous when defining new primitive to make an instance instance Renderable NullBackend where render mempty This ensures that the trick with annotations can be used for diagrams containing your primitive",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "NullBackend",
          "package": "diagrams-core",
          "partial": "Null Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:NullBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen dealing with envelopes we often want scalars to be an\n   ordered field (i.e. support all four arithmetic operations and be\n   totally ordered) so we introduce this class as a convenient\n   shorthand.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "OrderedField",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Envelope.html#OrderedField",
          "type": "class"
        },
        "index": {
          "description": "When dealing with envelopes we often want scalars to be an ordered field i.e support all four arithmetic operations and be totally ordered so we introduce this class as convenient shorthand",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "OrderedField",
          "package": "diagrams-core",
          "partial": "Ordered Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:OrderedField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePoint\u003c/code\u003e is a newtype wrapper around vectors used to represent\n   points, so we don't get them mixed up. The distinction between\n   vectors and points is important: translations affect points, but\n   leave vectors unchanged.  Points are instances of the\n   \u003ccode\u003e\u003ca\u003eAffineSpace\u003c/a\u003e\u003c/code\u003e class from \u003ca\u003eData.AffineSpace\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Point",
          "package": "diagrams-core",
          "type": "data"
        },
        "index": {
          "description": "Point is newtype wrapper around vectors used to represent points so we don get them mixed up The distinction between vectors and points is important translations affect points but leave vectors unchanged Points are instances of the AffineSpace class from Data.AffineSpace",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Point",
          "package": "diagrams-core",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003ePrim b v\u003c/code\u003e is an opaque (existentially quantified)\n   primitive which backend \u003ccode\u003eb\u003c/code\u003e knows how to render in vector space \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Prim",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Prim",
          "type": "data"
        },
        "index": {
          "description": "value of type Prim is an opaque existentially quantified primitive which backend knows how to render in vector space",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Prim",
          "package": "diagrams-core",
          "partial": "Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fundamental diagram type is represented by trees of\n   primitives with various monoidal annotations.  The \u003ccode\u003eQ\u003c/code\u003e in\n   \u003ccode\u003eQDiagram\u003c/code\u003e stands for \"Queriable\", as distinguished from\n   \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e, a synonym for \u003ccode\u003eQDiagram\u003c/code\u003e with the query type\n   specialized to \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "QDiagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#QDiagram",
          "type": "data"
        },
        "index": {
          "description": "The fundamental diagram type is represented by trees of primitives with various monoidal annotations The in QDiagram stands for Queriable as distinguished from Diagram synonym for QDiagram with the query type specialized to Any",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "QDiagram",
          "package": "diagrams-core",
          "partial": "QDiagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:QDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eQualifiable\u003c/a\u003e\u003c/code\u003e are things which can be qualified by\n   prefixing them with a name.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Qualifiable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Names.html#Qualifiable",
          "type": "class"
        },
        "index": {
          "description": "Instances of Qualifiable are things which can be qualified by prefixing them with name",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Qualifiable",
          "package": "diagrams-core",
          "partial": "Qualifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Qualifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query is a function that maps points in a vector space to\n   values in some monoid. Queries naturally form a monoid, with\n   two queries being combined pointwise.\n\u003c/p\u003e\u003cp\u003eThe idea for annotating diagrams with monoidal queries came from\n   the graphics-drawingcombinators package, \u003ca\u003ehttp://hackage.haskell.org/package/graphics-drawingcombinators\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Query",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Query.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "query is function that maps points in vector space to values in some monoid Queries naturally form monoid with two queries being combined pointwise The idea for annotating diagrams with monoidal queries came from the graphics-drawingcombinators package http hackage.haskell.org package graphics-drawingcombinators",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Query",
          "package": "diagrams-core",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Renderable type class connects backends to primitives which\n   they know how to render.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Renderable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Renderable",
          "type": "class"
        },
        "index": {
          "description": "The Renderable type class connects backends to primitives which they know how to render",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Renderable",
          "package": "diagrams-core",
          "partial": "Renderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Renderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eStyle\u003c/code\u003e is a heterogeneous collection of attributes, containing\n   at most one attribute of any given type.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Style",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Style.html#Style",
          "type": "data"
        },
        "index": {
          "description": "Style is heterogeneous collection of attributes containing at most one attribute of any given type",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Style",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSubMap\u003c/a\u003e\u003c/code\u003e is a map associating names to subdiagrams. There can\n   be multiple associations for any given name.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "SubMap",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#SubMap",
          "type": "newtype"
        },
        "index": {
          "description": "SubMap is map associating names to subdiagrams There can be multiple associations for any given name",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "SubMap",
          "package": "diagrams-core",
          "partial": "Sub Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:SubMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eSubdiagram\u003c/code\u003e represents a diagram embedded within the context\n   of a larger diagram.  Essentially, it consists of a diagram\n   paired with any accumulated information from the larger context\n   (transformations, attributes, etc.).\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Types.html#Subdiagram",
          "type": "data"
        },
        "index": {
          "description": "Subdiagram represents diagram embedded within the context of larger diagram Essentially it consists of diagram paired with any accumulated information from the larger context transformations attributes etc",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Subdiagram",
          "package": "diagrams-core",
          "partial": "Subdiagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Subdiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery diagram comes equipped with a \u003cem\u003etrace\u003c/em\u003e.  Intuitively, the\n   trace for a diagram is like a raytracer: given a line\n   (represented as a base point and a direction), the trace computes\n   the distance from the base point along the line to the first\n   intersection with the diagram.  The distance can be negative if\n   the intersection is in the opposite direction from the base\n   point, or infinite if the ray never intersects the diagram.\n   Note: to obtain the distance to the \u003cem\u003efurthest\u003c/em\u003e intersection\n   instead of the \u003cem\u003eclosest\u003c/em\u003e, just negate the direction vector and\n   then negate the result.\n\u003c/p\u003e\u003cp\u003eNote that the output should actually be interpreted not as an\n   absolute distance, but as a multiplier relative to the input\n   vector.  That is, if the input vector is \u003ccode\u003ev\u003c/code\u003e and the returned\n   scalar is \u003ccode\u003es\u003c/code\u003e, the distance from the base point to the\n   intersection is given by \u003ccode\u003es * magnitude v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Trace",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Trace.html#Trace",
          "type": "newtype"
        },
        "index": {
          "description": "Every diagram comes equipped with trace Intuitively the trace for diagram is like raytracer given line represented as base point and direction the trace computes the distance from the base point along the line to the first intersection with the diagram The distance can be negative if the intersection is in the opposite direction from the base point or infinite if the ray never intersects the diagram Note to obtain the distance to the furthest intersection instead of the closest just negate the direction vector and then negate the result Note that the output should actually be interpreted not as an absolute distance but as multiplier relative to the input vector That is if the input vector is and the returned scalar is the distance from the base point to the intersection is given by magnitude",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Trace",
          "package": "diagrams-core",
          "partial": "Trace",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTraced\u003c/code\u003e abstracts over things which have a trace.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Traced",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Trace.html#Traced",
          "type": "class"
        },
        "index": {
          "description": "Traced abstracts over things which have trace",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Traced",
          "package": "diagrams-core",
          "partial": "Traced",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTransInv\u003c/code\u003e is a wrapper which makes a transformable type\n   translationally invariant; the translational component of\n   transformations will no longer affect things wrapped in\n   \u003ccode\u003eTransInv\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "TransInv",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#TransInv",
          "type": "newtype"
        },
        "index": {
          "description": "TransInv is wrapper which makes transformable type translationally invariant the translational component of transformations will no longer affect things wrapped in TransInv",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "TransInv",
          "package": "diagrams-core",
          "partial": "Trans Inv",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:TransInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for things \u003ccode\u003et\u003c/code\u003e which can be transformed.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Transformable",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#Transformable",
          "type": "class"
        },
        "index": {
          "description": "Type class for things which can be transformed",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Transformable",
          "package": "diagrams-core",
          "partial": "Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Transformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral (affine) transformations, represented by an invertible\n   linear map, its \u003cem\u003etranspose\u003c/em\u003e, and a vector representing a\n   translation component.\n\u003c/p\u003e\u003cp\u003eBy the \u003cem\u003etranspose\u003c/em\u003e of a linear map we mean simply the linear map\n   corresponding to the transpose of the map's matrix\n   representation.  For example, any scale is its own transpose,\n   since scales are represented by matrices with zeros everywhere\n   except the diagonal.  The transpose of a rotation is the same as\n   its inverse.\n\u003c/p\u003e\u003cp\u003eThe reason we need to keep track of transposes is because it\n   turns out that when transforming a shape according to some linear\n   map L, the shape's \u003cem\u003enormal vectors\u003c/em\u003e transform according to L's\n   inverse transpose.  This is exactly what we need when\n   transforming bounding functions, which are defined in terms of\n   \u003cem\u003eperpendicular\u003c/em\u003e (i.e. normal) hyperplanes.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "Transformation",
          "package": "diagrams-core",
          "source": "src/Diagrams-Core-Transform.html#Transformation",
          "type": "data"
        },
        "index": {
          "description": "General affine transformations represented by an invertible linear map its transpose and vector representing translation component By the transpose of linear map we mean simply the linear map corresponding to the transpose of the map matrix representation For example any scale is its own transpose since scales are represented by matrices with zeros everywhere except the diagonal The transpose of rotation is the same as its inverse The reason we need to keep track of transposes is because it turns out that when transforming shape according to some linear map the shape normal vectors transform according to inverse transpose This is exactly what we need when transforming bounding functions which are defined in terms of perpendicular i.e normal hyperplanes",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "Transformation",
          "package": "diagrams-core",
          "partial": "Transformation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#t:Transformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualify with the given name.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "(|\u003e)",
          "package": "diagrams-core",
          "signature": "a -\u003e q -\u003e q",
          "source": "src/Diagrams-Core-Names.html#%7C%3E",
          "type": "method"
        },
        "index": {
          "description": "Qualify with the given name",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "(|\u003e) |\u003e",
          "normalized": "a-\u003eb-\u003eb",
          "package": "diagrams-core",
          "signature": "a-\u003eq-\u003eq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eadjustDia\u003c/a\u003e\u003c/code\u003e allows the backend to make adjustments to the final\n   diagram (e.g. to adjust the size based on the options) before\n   rendering it.  It can also make adjustments to the options\n   record, usually to fill in incompletely specified size\n   information.  A default implementation is provided which makes\n   no adjustments.  See the diagrams-lib package for other useful\n   implementations.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "adjustDia",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e QDiagram b v m -\u003e (Options b v, QDiagram b v m)",
          "source": "src/Diagrams-Core-Types.html#adjustDia",
          "type": "method"
        },
        "index": {
          "description": "adjustDia allows the backend to make adjustments to the final diagram e.g to adjust the size based on the options before rendering it It can also make adjustments to the options record usually to fill in incompletely specified size information default implementation is provided which makes no adjustments See the diagrams-lib package for other useful implementations",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "adjustDia",
          "normalized": "a-\u003eOptions a b-\u003eQDiagram a b c-\u003e(Options a b,QDiagram a b c)",
          "package": "diagrams-core",
          "partial": "Dia",
          "signature": "b-\u003eOptions b v-\u003eQDiagram b v m-\u003e(Options b v,QDiagram b v m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:adjustDia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eApply\u003c/em\u003e a style by combining it (on the left) with the\n   existing style.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "applyStyle",
          "package": "diagrams-core",
          "signature": "Style (V a) -\u003e a -\u003e a",
          "source": "src/Diagrams-Core-Style.html#applyStyle",
          "type": "method"
        },
        "index": {
          "description": "Apply style by combining it on the left with the existing style",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "applyStyle",
          "normalized": "Style(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Style",
          "signature": "Style(V a)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:applyStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edoRender\u003c/a\u003e\u003c/code\u003e is used to interpret rendering operations.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "doRender",
          "package": "diagrams-core",
          "signature": "doRender",
          "source": "src/Diagrams-Core-Types.html#doRender",
          "type": "method"
        },
        "index": {
          "description": "doRender is used to interpret rendering operations",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "doRender",
          "package": "diagrams-core",
          "partial": "Render",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:doRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the envelope of an object.  For types with an intrinsic\n   notion of \"local origin\", the envelope will be based there.\n   Other types (e.g. \u003ccode\u003eTrail\u003c/code\u003e) may have some other default\n   reference point at which the envelope will be based; their\n   instances should document what it is.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "getEnvelope",
          "package": "diagrams-core",
          "signature": "a -\u003e Envelope (V a)",
          "source": "src/Diagrams-Core-Envelope.html#getEnvelope",
          "type": "method"
        },
        "index": {
          "description": "Compute the envelope of an object For types with an intrinsic notion of local origin the envelope will be based there Other types e.g Trail may have some other default reference point at which the envelope will be based their instances should document what it is",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "getEnvelope",
          "normalized": "a-\u003eEnvelope(V a)",
          "package": "diagrams-core",
          "partial": "Envelope",
          "signature": "a-\u003eEnvelope(V a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:getEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the trace of an object.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "getTrace",
          "package": "diagrams-core",
          "signature": "a -\u003e Trace (V a)",
          "source": "src/Diagrams-Core-Trace.html#getTrace",
          "type": "method"
        },
        "index": {
          "description": "Compute the trace of an object",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "getTrace",
          "normalized": "a-\u003eTrace(V a)",
          "package": "diagrams-core",
          "partial": "Trace",
          "signature": "a-\u003eTrace(V a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:getTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejuxtapose v a1 a2\u003c/code\u003e positions \u003ccode\u003ea2\u003c/code\u003e next to \u003ccode\u003ea1\u003c/code\u003e in the\n   direction of \u003ccode\u003ev\u003c/code\u003e.  In particular, place \u003ccode\u003ea2\u003c/code\u003e so that \u003ccode\u003ev\u003c/code\u003e points\n   from the local origin of \u003ccode\u003ea1\u003c/code\u003e towards the old local origin of\n   \u003ccode\u003ea2\u003c/code\u003e; \u003ccode\u003ea1\u003c/code\u003e's local origin becomes \u003ccode\u003ea2\u003c/code\u003e's new local origin.  The\n   result is just a translated version of \u003ccode\u003ea2\u003c/code\u003e.  (In particular,\n   this operation does not \u003cem\u003ecombine\u003c/em\u003e \u003ccode\u003ea1\u003c/code\u003e and \u003ccode\u003ea2\u003c/code\u003e in any way.)\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "juxtapose",
          "package": "diagrams-core",
          "signature": "V a -\u003e a -\u003e a -\u003e a",
          "source": "src/Diagrams-Core-Juxtapose.html#juxtapose",
          "type": "method"
        },
        "index": {
          "description": "juxtapose a1 a2 positions a2 next to a1 in the direction of In particular place a2 so that points from the local origin of a1 towards the old local origin of a2 a1 local origin becomes a2 new local origin The result is just translated version of a2 In particular this operation does not combine a1 and a2 in any way",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "juxtapose",
          "normalized": "V a-\u003ea-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "V a-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:juxtapose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the local origin to another point.\n\u003c/p\u003e\u003cp\u003eNote that this function is in some sense dual to \u003ccode\u003etranslate\u003c/code\u003e\n   (for types which are also \u003ccode\u003eTransformable\u003c/code\u003e); moving the origin\n   itself while leaving the object \"fixed\" is dual to fixing the\n   origin and translating the diagram.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "moveOriginTo",
          "package": "diagrams-core",
          "signature": "Point (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-HasOrigin.html#moveOriginTo",
          "type": "method"
        },
        "index": {
          "description": "Move the local origin to another point Note that this function is in some sense dual to translate for types which are also Transformable moving the origin itself while leaving the object fixed is dual to fixing the origin and translating the diagram",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "moveOriginTo",
          "normalized": "Point(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "Origin To",
          "signature": "Point(V t)-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:moveOriginTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a token representing the backend and a\n   transformable object, render it in the appropriate rendering\n   context.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "render",
          "package": "diagrams-core",
          "signature": "b -\u003e t -\u003e Render b (V t)",
          "source": "src/Diagrams-Core-Types.html#render",
          "type": "method"
        },
        "index": {
          "description": "Given token representing the backend and transformable object render it in the appropriate rendering context",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "render",
          "normalized": "a-\u003eb-\u003eRender a(V b)",
          "package": "diagrams-core",
          "signature": "b-\u003et-\u003eRender b(V t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackends may override \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e to gain more control over\n   the way that rendering happens.  A typical implementation might be something like\n\u003c/p\u003e\u003cpre\u003e renderData = renderRTree . toRTree\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003erenderRTree :: RTree b v () -\u003e Render b v\u003c/code\u003e is\n   implemented by the backend (with appropriate types filled in\n   for \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ev\u003c/code\u003e), and \u003ccode\u003etoRTree\u003c/code\u003e is from \u003ca\u003eDiagrams.Core.Compile\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "renderData",
          "package": "diagrams-core",
          "signature": "b -\u003e QDiagram b v m -\u003e Render b v",
          "source": "src/Diagrams-Core-Types.html#renderData",
          "type": "method"
        },
        "index": {
          "description": "Backends may override renderData to gain more control over the way that rendering happens typical implementation might be something like renderData renderRTree toRTree where renderRTree RTree Render is implemented by the backend with appropriate types filled in for and and toRTree is from Diagrams.Core.Compile",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "renderData",
          "normalized": "a-\u003eQDiagram a b c-\u003eRender a b",
          "package": "diagrams-core",
          "partial": "Data",
          "signature": "b-\u003eQDiagram b v m-\u003eRender b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:renderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core",
          "name": "renderDia",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e QDiagram b v m -\u003e Result b v",
          "source": "src/Diagrams-Core-Types.html#renderDia",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "renderDia",
          "normalized": "a-\u003eOptions a b-\u003eQDiagram a b c-\u003eResult a b",
          "package": "diagrams-core",
          "partial": "Dia",
          "signature": "b-\u003eOptions b v-\u003eQDiagram b v m-\u003eResult b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:renderDia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender multiple diagrams at once.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "renderDias",
          "package": "diagrams-core",
          "signature": "b -\u003e Options b v -\u003e [QDiagram b v m] -\u003e Result b v",
          "source": "src/Diagrams-Core-Types.html#renderDias",
          "type": "method"
        },
        "index": {
          "description": "Render multiple diagrams at once",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "renderDias",
          "normalized": "a-\u003eOptions a b-\u003e[QDiagram a b c]-\u003eResult a b",
          "package": "diagrams-core",
          "partial": "Dias",
          "signature": "b-\u003eOptions b v-\u003e[QDiagram b v m]-\u003eResult b v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:renderDias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core",
          "name": "toName",
          "package": "diagrams-core",
          "signature": "a -\u003e Name",
          "source": "src/Diagrams-Core-Names.html#toName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "toName",
          "normalized": "a-\u003eName",
          "package": "diagrams-core",
          "partial": "Name",
          "signature": "a-\u003eName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to an object.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "transform",
          "package": "diagrams-core",
          "signature": "Transformation (V t) -\u003e t -\u003e t",
          "source": "src/Diagrams-Core-Transform.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Apply transformation to an object",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "transform",
          "normalized": "Transformation(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "signature": "Transformation(V t)-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Core",
          "name": "transformWithFreeze",
          "package": "diagrams-core",
          "signature": "Transformation (V p) -\u003e Transformation (V p) -\u003e p -\u003e p",
          "source": "src/Diagrams-Core-Types.html#transformWithFreeze",
          "type": "method"
        },
        "index": {
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "transformWithFreeze",
          "normalized": "Transformation(V a)-\u003eTransformation(V a)-\u003ea-\u003ea",
          "package": "diagrams-core",
          "partial": "With Freeze",
          "signature": "Transformation(V p)-\u003eTransformation(V p)-\u003ep-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:transformWithFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a rendering operation with a local style. The default\n   implementation does nothing, and must be overridden by backends\n   that do not override \u003ccode\u003e\u003ca\u003erenderData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Core",
          "name": "withStyle",
          "package": "diagrams-core",
          "signature": "withStyle",
          "source": "src/Diagrams-Core-Types.html#withStyle",
          "type": "method"
        },
        "index": {
          "description": "Perform rendering operation with local style The default implementation does nothing and must be overridden by backends that do not override renderData",
          "hierarchy": "Diagrams Core",
          "module": "Diagrams.Core",
          "name": "withStyle",
          "package": "diagrams-core",
          "partial": "Style",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-core/docs/Diagrams-Core.html#v:withStyle"
      }
    }
  ]
]