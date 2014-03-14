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
        "word": "linear"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on affine spaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Affine",
          "name": "Affine",
          "package": "linear",
          "source": "src/Linear-Affine.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on affine spaces",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "Affine",
          "package": "linear",
          "partial": "Affine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn affine space is roughly a vector space in which we have\n forgotten or at least pretend to have forgotten the origin.\n\u003c/p\u003e\u003cpre\u003e a .+^ (b .-. a)  =  b@\n (a .+^ u) .+^ v  =  a .+^ (u ^+^ v)@\n (a .-. b) ^+^ v  =  (a .+^ v) .-. q@\n\u003c/pre\u003e",
          "module": "Linear.Affine",
          "name": "Affine",
          "package": "linear",
          "source": "src/Linear-Affine.html#Affine",
          "type": "class"
        },
        "index": {
          "description": "An affine space is roughly vector space in which we have forgotten or at least pretend to have forgotten the origin",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "Affine",
          "package": "linear",
          "partial": "Affine",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#t:Affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy wrapper to help distinguish points from vectors at the\n type level\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "Point",
          "package": "linear",
          "source": "src/Linear-Affine.html#Point",
          "type": "newtype"
        },
        "index": {
          "description": "handy wrapper to help distinguish points from vectors at the type level",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "Point",
          "package": "linear",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a vector offset to a point.\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "(.+^)",
          "package": "linear",
          "signature": "p a -\u003e Diff p a -\u003e p a",
          "source": "src/Linear-Affine.html#.%2B%5E",
          "type": "method"
        },
        "index": {
          "description": "Add vector offset to point",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "(.+^) .+^",
          "normalized": "a b-\u003eDiff a b-\u003ea b",
          "package": "linear",
          "signature": "p a-\u003eDiff p a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:.-43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract a vector offset from a point.\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "(.-^)",
          "package": "linear",
          "signature": "p a -\u003e Diff p a -\u003e p a",
          "source": "src/Linear-Affine.html#.-%5E",
          "type": "method"
        },
        "index": {
          "description": "Subtract vector offset from point",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "(.-^) .-^",
          "normalized": "a b-\u003eDiff a b-\u003ea b",
          "package": "linear",
          "signature": "p a-\u003eDiff p a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:.-45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the difference between two points as a vector offset.\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "(.-.)",
          "package": "linear",
          "signature": "p a -\u003e p a -\u003e Diff p a",
          "source": "src/Linear-Affine.html#.-.",
          "type": "method"
        },
        "index": {
          "description": "Get the difference between two points as vector offset",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "(.-.) .-.",
          "normalized": "a b-\u003ea b-\u003eDiff a b",
          "package": "linear",
          "signature": "p a-\u003ep a-\u003eDiff p a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Affine",
          "name": "P",
          "package": "linear",
          "signature": "P (f a)",
          "source": "src/Linear-Affine.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "P",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between two points in an affine space\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "distanceA",
          "package": "linear",
          "signature": "p a -\u003e p a -\u003e a",
          "source": "src/Linear-Affine.html#distanceA",
          "type": "function"
        },
        "index": {
          "description": "Distance between two points in an affine space",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "distanceA",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "linear",
          "signature": "p a-\u003ep a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:distanceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Affine",
          "name": "lensP",
          "package": "linear",
          "signature": "Lens' (Point g a) (g a)",
          "source": "src/Linear-Affine.html#lensP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "lensP",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:lensP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector spaces have origins.\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "origin",
          "package": "linear",
          "signature": "Point f a",
          "source": "src/Linear-Affine.html#origin",
          "type": "function"
        },
        "index": {
          "description": "Vector spaces have origins",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "origin",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the quadrance of the difference (the square of the distance)\n\u003c/p\u003e",
          "module": "Linear.Affine",
          "name": "qdA",
          "package": "linear",
          "signature": "p a -\u003e p a -\u003e a",
          "source": "src/Linear-Affine.html#qdA",
          "type": "function"
        },
        "index": {
          "description": "Compute the quadrance of the difference the square of the distance",
          "hierarchy": "Linear Affine",
          "module": "Linear.Affine",
          "name": "qdA",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "linear",
          "signature": "p a-\u003ep a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Affine.html#v:qdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "Algebra",
          "package": "linear",
          "source": "src/Linear-Algebra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "Algebra",
          "package": "linear",
          "partial": "Algebra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative unital algebra over a ring\n\u003c/p\u003e",
          "module": "Linear.Algebra",
          "name": "Algebra",
          "package": "linear",
          "source": "src/Linear-Algebra.html#Algebra",
          "type": "class"
        },
        "index": {
          "description": "An associative unital algebra over ring",
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "Algebra",
          "package": "linear",
          "partial": "Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA coassociative counital coalgebra over a ring\n\u003c/p\u003e",
          "module": "Linear.Algebra",
          "name": "Coalgebra",
          "package": "linear",
          "source": "src/Linear-Algebra.html#Coalgebra",
          "type": "class"
        },
        "index": {
          "description": "coassociative counital coalgebra over ring",
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "Coalgebra",
          "package": "linear",
          "partial": "Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#t:Coalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "comult",
          "package": "linear",
          "signature": "(m -\u003e r) -\u003e m -\u003e m -\u003e r",
          "source": "src/Linear-Algebra.html#comult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "comult",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "linear",
          "signature": "(m-\u003er)-\u003em-\u003em-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:comult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "comultRep",
          "package": "linear",
          "signature": "f r -\u003e f (f r)",
          "source": "src/Linear-Algebra.html#comultRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "comultRep",
          "normalized": "a b-\u003ea(a b)",
          "package": "linear",
          "partial": "Rep",
          "signature": "f r-\u003ef(f r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:comultRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "counital",
          "package": "linear",
          "signature": "(m -\u003e r) -\u003e r",
          "source": "src/Linear-Algebra.html#counital",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "counital",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "linear",
          "signature": "(m-\u003er)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:counital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "counitalRep",
          "package": "linear",
          "signature": "f r -\u003e r",
          "source": "src/Linear-Algebra.html#counitalRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "counitalRep",
          "normalized": "a b-\u003eb",
          "package": "linear",
          "partial": "Rep",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:counitalRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "mult",
          "package": "linear",
          "signature": "(m -\u003e m -\u003e r) -\u003e m -\u003e r",
          "source": "src/Linear-Algebra.html#mult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "mult",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "linear",
          "signature": "(m-\u003em-\u003er)-\u003em-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "multRep",
          "package": "linear",
          "signature": "f (f r) -\u003e f r",
          "source": "src/Linear-Algebra.html#multRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "multRep",
          "normalized": "a(a b)-\u003ea b",
          "package": "linear",
          "partial": "Rep",
          "signature": "f(f r)-\u003ef r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:multRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "unital",
          "package": "linear",
          "signature": "r -\u003e m -\u003e r",
          "source": "src/Linear-Algebra.html#unital",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "unital",
          "normalized": "a-\u003eb-\u003ea",
          "package": "linear",
          "signature": "r-\u003em-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:unital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Algebra",
          "name": "unitalRep",
          "package": "linear",
          "signature": "r -\u003e f r",
          "source": "src/Linear-Algebra.html#unitalRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Algebra",
          "module": "Linear.Algebra",
          "name": "unitalRep",
          "normalized": "a-\u003eb a",
          "package": "linear",
          "partial": "Rep",
          "signature": "r-\u003ef r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Algebra.html#v:unitalRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialization of statically-sized types with the \u003ca\u003eData.Binary\u003c/a\u003e\n library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Binary",
          "name": "Binary",
          "package": "linear",
          "source": "src/Linear-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Serialization of statically-sized types with the Data.Binary library",
          "hierarchy": "Linear Binary",
          "module": "Linear.Binary",
          "name": "Binary",
          "package": "linear",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize a linear type.\n\u003c/p\u003e",
          "module": "Linear.Binary",
          "name": "getLinear",
          "package": "linear",
          "signature": "Get (t a)",
          "source": "src/Linear-Binary.html#getLinear",
          "type": "function"
        },
        "index": {
          "description": "Deserialize linear type",
          "hierarchy": "Linear Binary",
          "module": "Linear.Binary",
          "name": "getLinear",
          "package": "linear",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Binary.html#v:getLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a linear type.\n\u003c/p\u003e",
          "module": "Linear.Binary",
          "name": "putLinear",
          "package": "linear",
          "signature": "t a -\u003e Put",
          "source": "src/Linear-Binary.html#putLinear",
          "type": "function"
        },
        "index": {
          "description": "Serialize linear type",
          "hierarchy": "Linear Binary",
          "module": "Linear.Binary",
          "name": "putLinear",
          "normalized": "a b-\u003ePut",
          "package": "linear",
          "partial": "Linear",
          "signature": "t a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Binary.html#v:putLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInvolutive rings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Conjugate",
          "name": "Conjugate",
          "package": "linear",
          "source": "src/Linear-Conjugate.html",
          "type": "module"
        },
        "index": {
          "description": "Involutive rings",
          "hierarchy": "Linear Conjugate",
          "module": "Linear.Conjugate",
          "name": "Conjugate",
          "package": "linear",
          "partial": "Conjugate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Conjugate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn involutive ring\n\u003c/p\u003e",
          "module": "Linear.Conjugate",
          "name": "Conjugate",
          "package": "linear",
          "source": "src/Linear-Conjugate.html#Conjugate",
          "type": "class"
        },
        "index": {
          "description": "An involutive ring",
          "hierarchy": "Linear Conjugate",
          "module": "Linear.Conjugate",
          "name": "Conjugate",
          "package": "linear",
          "partial": "Conjugate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Conjugate.html#t:Conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires and provides a default definition such that\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econjugate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Linear.Conjugate",
          "name": "TrivialConjugate",
          "package": "linear",
          "source": "src/Linear-Conjugate.html#TrivialConjugate",
          "type": "class"
        },
        "index": {
          "description": "Requires and provides default definition such that conjugate id",
          "hierarchy": "Linear Conjugate",
          "module": "Linear.Conjugate",
          "name": "TrivialConjugate",
          "package": "linear",
          "partial": "Trivial Conjugate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Conjugate.html#t:TrivialConjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjugate a value. This defaults to the trivial involution.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econjugate (1 :+ 2)\n\u003c/code\u003e\u003c/strong\u003e1.0 :+ (-2.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econjugate 1\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Linear.Conjugate",
          "name": "conjugate",
          "package": "linear",
          "signature": "a -\u003e a",
          "source": "src/Linear-Conjugate.html#conjugate",
          "type": "method"
        },
        "index": {
          "description": "Conjugate value This defaults to the trivial involution conjugate conjugate",
          "hierarchy": "Linear Conjugate",
          "module": "Linear.Conjugate",
          "name": "conjugate",
          "normalized": "a-\u003ea",
          "package": "linear",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Conjugate.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "source": "src/Linear-Covector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Linear Covector",
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "partial": "Covector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Covector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear functionals from elements of an (infinite) free module to a scalar\n\u003c/p\u003e",
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "source": "src/Linear-Covector.html#Covector",
          "type": "newtype"
        },
        "index": {
          "description": "Linear functionals from elements of an infinite free module to scalar",
          "hierarchy": "Linear Covector",
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "partial": "Covector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Covector.html#t:Covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Covector",
          "name": "($*)",
          "package": "linear",
          "signature": "Covector r (Rep f) -\u003e f r -\u003e r",
          "source": "src/Linear-Covector.html#%24%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Covector",
          "module": "Linear.Covector",
          "name": "($*) $*",
          "normalized": "Covector a(Rep b)-\u003eb a-\u003ea",
          "package": "linear",
          "signature": "Covector r(Rep f)-\u003ef r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Covector.html#v:-36--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "signature": "Covector",
          "source": "src/Linear-Covector.html#Covector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Covector",
          "module": "Linear.Covector",
          "name": "Covector",
          "package": "linear",
          "partial": "Covector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Covector.html#v:Covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Covector",
          "name": "runCovector",
          "package": "linear",
          "signature": "(a -\u003e r) -\u003e r",
          "source": "src/Linear-Covector.html#Covector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Covector",
          "module": "Linear.Covector",
          "name": "runCovector",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "linear",
          "partial": "Covector",
          "signature": "(a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Covector.html#v:runCovector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTesting for values \u003ca\u003enear\u003c/a\u003e zero\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Epsilon",
          "name": "Epsilon",
          "package": "linear",
          "source": "src/Linear-Epsilon.html",
          "type": "module"
        },
        "index": {
          "description": "Testing for values near zero",
          "hierarchy": "Linear Epsilon",
          "module": "Linear.Epsilon",
          "name": "Epsilon",
          "package": "linear",
          "partial": "Epsilon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Epsilon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a fairly subjective test to see if a quantity is near zero.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enearZero (1e-11 :: Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enearZero (1e-17 :: Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enearZero (1e-5 :: Float)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enearZero (1e-7 :: Float)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Linear.Epsilon",
          "name": "Epsilon",
          "package": "linear",
          "source": "src/Linear-Epsilon.html#Epsilon",
          "type": "class"
        },
        "index": {
          "description": "Provides fairly subjective test to see if quantity is near zero nearZero e-11 Double False nearZero e-17 Double True nearZero e-5 Float False nearZero e-7 Float True",
          "hierarchy": "Linear Epsilon",
          "module": "Linear.Epsilon",
          "name": "Epsilon",
          "package": "linear",
          "partial": "Epsilon",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Epsilon.html#t:Epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a quantity is near zero.\n\u003c/p\u003e",
          "module": "Linear.Epsilon",
          "name": "nearZero",
          "package": "linear",
          "signature": "a -\u003e Bool",
          "source": "src/Linear-Epsilon.html#nearZero",
          "type": "method"
        },
        "index": {
          "description": "Determine if quantity is near zero",
          "hierarchy": "Linear Epsilon",
          "module": "Linear.Epsilon",
          "name": "nearZero",
          "normalized": "a-\u003eBool",
          "package": "linear",
          "partial": "Zero",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Epsilon.html#v:nearZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrphans\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Instances",
          "name": "Instances",
          "package": "linear",
          "source": "src/Linear-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Orphans",
          "hierarchy": "Linear Instances",
          "module": "Linear.Instances",
          "name": "Instances",
          "package": "linear",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple matrix operation for low-dimensional primitives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Matrix",
          "name": "Matrix",
          "package": "linear",
          "source": "src/Linear-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Simple matrix operation for low-dimensional primitives",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "Matrix",
          "package": "linear",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2x2 matrix with row-major representation\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "M22",
          "package": "linear",
          "source": "src/Linear-Matrix.html#M22",
          "type": "type"
        },
        "index": {
          "description": "x2 matrix with row-major representation",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "M22",
          "package": "linear",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#t:M22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3x3 matrix with row-major representation\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "M33",
          "package": "linear",
          "source": "src/Linear-Matrix.html#M33",
          "type": "type"
        },
        "index": {
          "description": "x3 matrix with row-major representation",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "M33",
          "package": "linear",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#t:M33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x3 matrix with row-major representation\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "M43",
          "package": "linear",
          "source": "src/Linear-Matrix.html#M43",
          "type": "type"
        },
        "index": {
          "description": "x3 matrix with row-major representation",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "M43",
          "package": "linear",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#t:M43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 matrix with row-major representation\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "M44",
          "package": "linear",
          "source": "src/Linear-Matrix.html#M44",
          "type": "type"
        },
        "index": {
          "description": "x4 matrix with row-major representation",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "M44",
          "package": "linear",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#t:M44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Matrix",
          "name": "Trace",
          "package": "linear",
          "source": "src/Linear-Trace.html#Trace",
          "type": "class"
        },
        "index": {
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "Trace",
          "package": "linear",
          "partial": "Trace",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix-scalar product\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V2 1 2) (V2 3 4) !!* 5\n\u003c/code\u003e\u003c/strong\u003eV2 (V2 5 10) (V2 15 20)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(!!*)",
          "package": "linear",
          "signature": "m (r a) -\u003e a -\u003e m (r a)",
          "source": "src/Linear-Matrix.html#%21%21%2A",
          "type": "function"
        },
        "index": {
          "description": "Matrix-scalar product V2 V2 V2 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(!!*) !!*",
          "normalized": "a(b c)-\u003ec-\u003ea(b c)",
          "package": "linear",
          "signature": "m(r a)-\u003ea-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-33--33--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix * column vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) !* V3 7 8 9\n\u003c/code\u003e\u003c/strong\u003eV2 50 122\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(!*)",
          "package": "linear",
          "signature": "m (r a) -\u003e r a -\u003e m a",
          "source": "src/Linear-Matrix.html#%21%2A",
          "type": "function"
        },
        "index": {
          "description": "Matrix column vector V2 V3 V3 V3 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(!*) !*",
          "normalized": "a(b c)-\u003eb c-\u003ea c",
          "package": "linear",
          "signature": "m(r a)-\u003er a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-33--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix product. This can compute any combination of sparse and dense multiplication.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) !*! V3 (V2 1 2) (V2 3 4) (V2 4 5)\n\u003c/code\u003e\u003c/strong\u003eV2 (V2 19 25) (V2 43 58)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (fromList [(1,2)]) (fromList [(2,3)]) !*! fromList [(1,V3 0 0 1), (2, V3 0 0 5)]\n\u003c/code\u003e\u003c/strong\u003eV2 (V3 0 0 2) (V3 0 0 15)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(!*!)",
          "package": "linear",
          "signature": "m (t a) -\u003e t (n a) -\u003e m (n a)",
          "source": "src/Linear-Matrix.html#%21%2A%21",
          "type": "function"
        },
        "index": {
          "description": "Matrix product This can compute any combination of sparse and dense multiplication V2 V3 V3 V3 V2 V2 V2 V2 V2 V2 V2 fromList fromList fromList V3 V3 V2 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(!*!) !*!",
          "normalized": "a(b c)-\u003eb(d c)-\u003ea(d c)",
          "package": "linear",
          "signature": "m(t a)-\u003et(n a)-\u003em(n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-33--42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry-wise matrix addition.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) !+! V2 (V3 7 8 9) (V3 1 2 3)\n\u003c/code\u003e\u003c/strong\u003eV2 (V3 8 10 12) (V3 5 7 9)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(!+!)",
          "package": "linear",
          "signature": "m (n a) -\u003e m (n a) -\u003e m (n a)",
          "source": "src/Linear-Matrix.html#%21%2B%21",
          "type": "function"
        },
        "index": {
          "description": "Entry-wise matrix addition V2 V3 V3 V2 V3 V3 V2 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(!+!) !+!",
          "normalized": "a(b c)-\u003ea(b c)-\u003ea(b c)",
          "package": "linear",
          "signature": "m(n a)-\u003em(n a)-\u003em(n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-33--43--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry-wise matrix subtraction.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) !-! V2 (V3 7 8 9) (V3 1 2 3)\n\u003c/code\u003e\u003c/strong\u003eV2 (V3 (-6) (-6) (-6)) (V3 3 3 3)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(!-!)",
          "package": "linear",
          "signature": "m (n a) -\u003e m (n a) -\u003e m (n a)",
          "source": "src/Linear-Matrix.html#%21-%21",
          "type": "function"
        },
        "index": {
          "description": "Entry-wise matrix subtraction V2 V3 V3 V2 V3 V3 V2 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(!-!) !-!",
          "normalized": "a(b c)-\u003ea(b c)-\u003ea(b c)",
          "package": "linear",
          "signature": "m(n a)-\u003em(n a)-\u003em(n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-33--45--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRow vector * matrix\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 *! V2 (V3 3 4 5) (V3 6 7 8)\n\u003c/code\u003e\u003c/strong\u003eV3 15 18 21\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(*!)",
          "package": "linear",
          "signature": "t a -\u003e t (f a) -\u003e f a",
          "source": "src/Linear-Matrix.html#%2A%21",
          "type": "function"
        },
        "index": {
          "description": "Row vector matrix V2 V2 V3 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(*!) *!",
          "normalized": "a b-\u003ea(c b)-\u003ec b",
          "package": "linear",
          "signature": "t a-\u003et(f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar-matrix product\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e5 *!! V2 (V2 1 2) (V2 3 4)\n\u003c/code\u003e\u003c/strong\u003eV2 (V2 5 10) (V2 15 20)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "(*!!)",
          "package": "linear",
          "signature": "a -\u003e m (r a) -\u003e m (r a)",
          "source": "src/Linear-Matrix.html#%2A%21%21",
          "type": "function"
        },
        "index": {
          "description": "Scalar-matrix product V2 V2 V2 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "(*!!) *!!",
          "normalized": "a-\u003eb(c a)-\u003eb(c a)",
          "package": "linear",
          "signature": "a-\u003em(r a)-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:-42--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHermitian conjugate or conjugate transpose\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eadjoint (V2 (V2 (1 :+ 2) (3 :+ 4)) (V2 (5 :+ 6) (7 :+ 8)))\n\u003c/code\u003e\u003c/strong\u003eV2 (V2 (1.0 :+ (-2.0)) (5.0 :+ (-6.0))) (V2 (3.0 :+ (-4.0)) (7.0 :+ (-8.0)))\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "adjoint",
          "package": "linear",
          "signature": "m (n a) -\u003e n (m a)",
          "source": "src/Linear-Matrix.html#adjoint",
          "type": "function"
        },
        "index": {
          "description": "Hermitian conjugate or conjugate transpose adjoint V2 V2 V2 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "adjoint",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "linear",
          "signature": "m(n a)-\u003en(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a generalization of \u003ccode\u003e\u003ca\u003einside\u003c/a\u003e\u003c/code\u003e to work over any corepresentable \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ecolumn\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e f =\u003e \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e s t a b -\u003e \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e (f s) (f t) (f a) (f b)\n\u003c/pre\u003e\u003cp\u003eIn practice it is used to access a column of a matrix.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) ^._x\n\u003c/code\u003e\u003c/strong\u003eV3 1 2 3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 (V3 1 2 3) (V3 4 5 6) ^.column _x\n\u003c/code\u003e\u003c/strong\u003eV2 1 4\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "column",
          "package": "linear",
          "signature": "LensLike (Context a b) s t a b -\u003e Lens (f s) (f t) (f a) (f b)",
          "source": "src/Linear-Matrix.html#column",
          "type": "function"
        },
        "index": {
          "description": "This is generalization of inside to work over any corepresentable Functor column Representable Lens Lens In practice it is used to access column of matrix V2 V3 V3 V3 V2 V3 V3 column V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "column",
          "normalized": "LensLike(Context a b)c d a b-\u003eLens(e c)(e d)(e a)(e b)",
          "package": "linear",
          "signature": "LensLike(Context a b)s t a b-\u003eLens(f s)(f t)(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2x2 matrix determinant.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edet22 (V2 (V2 a b) (V2 c d))\n\u003c/code\u003e\u003c/strong\u003ea * d - b * c\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "det22",
          "package": "linear",
          "signature": "M22 a -\u003e a",
          "source": "src/Linear-Matrix.html#det22",
          "type": "function"
        },
        "index": {
          "description": "x2 matrix determinant det22 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "det22",
          "normalized": "M a-\u003ea",
          "package": "linear",
          "signature": "M a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:det22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3x3 matrix determinant.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edet33 (V3 (V3 a b c) (V3 d e f) (V3 g h i))\n\u003c/code\u003e\u003c/strong\u003ea * (e * i - f * h) - d * (b * i - c * h) + g * (b * f - c * e)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "det33",
          "package": "linear",
          "signature": "M33 a -\u003e a",
          "source": "src/Linear-Matrix.html#det33",
          "type": "function"
        },
        "index": {
          "description": "x3 matrix determinant det33 V3 V3 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "det33",
          "normalized": "M a-\u003ea",
          "package": "linear",
          "signature": "M a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:det33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the diagonal of a matrix\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediagonal (V2 (V2 a b) (V2 c d))\n\u003c/code\u003e\u003c/strong\u003eV2 a d\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "diagonal",
          "package": "linear",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Linear-Trace.html#diagonal",
          "type": "method"
        },
        "index": {
          "description": "Compute the diagonal of matrix diagonal V2 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "diagonal",
          "normalized": "a(a b)-\u003ea b",
          "package": "linear",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2x2 identity matrix.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeye2\n\u003c/code\u003e\u003c/strong\u003eV2 (V2 1 0) (V2 0 1)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "eye2",
          "package": "linear",
          "signature": "M22 a",
          "source": "src/Linear-Matrix.html#eye2",
          "type": "function"
        },
        "index": {
          "description": "x2 identity matrix eye2 V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "eye2",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:eye2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3x3 identity matrix.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeye3\n\u003c/code\u003e\u003c/strong\u003eV3 (V3 1 0 0) (V3 0 1 0) (V3 0 0 1)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "eye3",
          "package": "linear",
          "signature": "M33 a",
          "source": "src/Linear-Matrix.html#eye3",
          "type": "function"
        },
        "index": {
          "description": "x3 identity matrix eye3 V3 V3 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "eye3",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:eye3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e4x4 identity matrix.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeye4\n\u003c/code\u003e\u003c/strong\u003eV4 (V4 1 0 0 0) (V4 0 1 0 0) (V4 0 0 1 0) (V4 0 0 0 1)\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "eye4",
          "package": "linear",
          "signature": "M44 a",
          "source": "src/Linear-Matrix.html#eye4",
          "type": "function"
        },
        "index": {
          "description": "x4 identity matrix eye4 V4 V4 V4 V4 V4",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "eye4",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:eye4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a rotation matrix from a unit \u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "fromQuaternion",
          "package": "linear",
          "signature": "Quaternion a -\u003e M33 a",
          "source": "src/Linear-Matrix.html#fromQuaternion",
          "type": "function"
        },
        "index": {
          "description": "Build rotation matrix from unit Quaternion",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "fromQuaternion",
          "normalized": "Quaternion a-\u003eM a",
          "package": "linear",
          "partial": "Quaternion",
          "signature": "Quaternion a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:fromQuaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2x2 matrix inverse.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einv22 $ V2 (V2 1 2) (V2 3 4)\n\u003c/code\u003e\u003c/strong\u003eJust (V2 (V2 (-2.0) 1.0) (V2 1.5 (-0.5)))\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "inv22",
          "package": "linear",
          "signature": "M22 a -\u003e Maybe (M22 a)",
          "source": "src/Linear-Matrix.html#inv22",
          "type": "function"
        },
        "index": {
          "description": "x2 matrix inverse inv22 V2 V2 V2 Just V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "inv22",
          "normalized": "M a-\u003eMaybe(M a)",
          "package": "linear",
          "signature": "M a-\u003eMaybe(M a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:inv22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3x3 matrix inverse.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einv33 $ V3 (V3 1 2 4) (V3 4 2 2) (V3 1 1 1)\n\u003c/code\u003e\u003c/strong\u003eJust (V3 (V3 0.0 0.5 (-1.0)) (V3 (-0.5) (-0.75) 3.5) (V3 0.5 0.25 (-1.5)))\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "inv33",
          "package": "linear",
          "signature": "M33 a -\u003e Maybe (M33 a)",
          "source": "src/Linear-Matrix.html#inv33",
          "type": "function"
        },
        "index": {
          "description": "x3 matrix inverse inv33 V3 V3 V3 V3 Just V3 V3 V3 V3",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "inv33",
          "normalized": "M a-\u003eMaybe(M a)",
          "package": "linear",
          "signature": "M a-\u003eMaybe(M a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:inv33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a 3x3 matrix to a 4x4 matrix extending it with 0's in the new row and column.\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "m33_to_m44",
          "package": "linear",
          "signature": "M33 a -\u003e M44 a",
          "source": "src/Linear-Matrix.html#m33_to_m44",
          "type": "function"
        },
        "index": {
          "description": "Convert x3 matrix to x4 matrix extending it with in the new row and column",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "m33_to_m44",
          "normalized": "M a-\u003eM a",
          "package": "linear",
          "signature": "M a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:m33_to_m44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a 4x3 matrix to a 4x4 matrix, extending it with the \u003ccode\u003e[ 0 0 0 1 ]\u003c/code\u003e column vector\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "m43_to_m44",
          "package": "linear",
          "signature": "M43 a -\u003e M44 a",
          "source": "src/Linear-Matrix.html#m43_to_m44",
          "type": "function"
        },
        "index": {
          "description": "Convert from x3 matrix to x4 matrix extending it with the column vector",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "m43_to_m44",
          "normalized": "M a-\u003eM a",
          "package": "linear",
          "signature": "M a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:m43_to_m44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a transformation matrix from a rotation expressed as a\n \u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e and a translation vector.\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "mkTransformation",
          "package": "linear",
          "signature": "Quaternion a -\u003e V3 a -\u003e M44 a",
          "source": "src/Linear-Matrix.html#mkTransformation",
          "type": "function"
        },
        "index": {
          "description": "Build transformation matrix from rotation expressed as Quaternion and translation vector",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "mkTransformation",
          "normalized": "Quaternion a-\u003eV a-\u003eM a",
          "package": "linear",
          "partial": "Transformation",
          "signature": "Quaternion a-\u003eV a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:mkTransformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a transformation matrix from a rotation matrix and a\n translation vector.\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "mkTransformationMat",
          "package": "linear",
          "signature": "M33 a -\u003e V3 a -\u003e M44 a",
          "source": "src/Linear-Matrix.html#mkTransformationMat",
          "type": "function"
        },
        "index": {
          "description": "Build transformation matrix from rotation matrix and translation vector",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "mkTransformationMat",
          "normalized": "M a-\u003eV a-\u003eM a",
          "package": "linear",
          "partial": "Transformation Mat",
          "signature": "M a-\u003eV a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:mkTransformationMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the trace of a matrix\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etrace (V2 (V2 a b) (V2 c d))\n\u003c/code\u003e\u003c/strong\u003ea + d\n\u003c/pre\u003e",
          "module": "Linear.Matrix",
          "name": "trace",
          "package": "linear",
          "signature": "m (m a) -\u003e a",
          "source": "src/Linear-Trace.html#trace",
          "type": "method"
        },
        "index": {
          "description": "Compute the trace of matrix trace V2 V2 V2",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "trace",
          "normalized": "a(a b)-\u003eb",
          "package": "linear",
          "signature": "m(m a)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the translation vector (first three entries of the last\n column) from a 3x4 or 4x4 matrix.\n\u003c/p\u003e",
          "module": "Linear.Matrix",
          "name": "translation",
          "package": "linear",
          "signature": "Lens' (t (v a)) (V3 a)",
          "source": "src/Linear-Matrix.html#translation",
          "type": "function"
        },
        "index": {
          "description": "Extract the translation vector first three entries of the last column from x4 or x4 matrix",
          "hierarchy": "Linear Matrix",
          "module": "Linear.Matrix",
          "name": "translation",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Matrix.html#v:translation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFree metric spaces\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Metric",
          "name": "Metric",
          "package": "linear",
          "source": "src/Linear-Metric.html",
          "type": "module"
        },
        "index": {
          "description": "Free metric spaces",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "Metric",
          "package": "linear",
          "partial": "Metric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree and sparse inner product/metric spaces.\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "Metric",
          "package": "linear",
          "source": "src/Linear-Metric.html#Metric",
          "type": "class"
        },
        "index": {
          "description": "Free and sparse inner product metric spaces",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "Metric",
          "package": "linear",
          "partial": "Metric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#t:Metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the distance between two vectors in a metric space\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "distance",
          "package": "linear",
          "signature": "f a -\u003e f a -\u003e a",
          "source": "src/Linear-Metric.html#distance",
          "type": "method"
        },
        "index": {
          "description": "Compute the distance between two vectors in metric space",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "distance",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "linear",
          "signature": "f a-\u003ef a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the inner product of two vectors or (equivalently)\n convert a vector \u003ccode\u003ef a\u003c/code\u003e into a covector \u003ccode\u003ef a -\u003e a\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 `dot` V2 3 4\n\u003c/code\u003e\u003c/strong\u003e11\n\u003c/pre\u003e",
          "module": "Linear.Metric",
          "name": "dot",
          "package": "linear",
          "signature": "f a -\u003e f a -\u003e a",
          "source": "src/Linear-Metric.html#dot",
          "type": "method"
        },
        "index": {
          "description": "Compute the inner product of two vectors or equivalently convert vector into covector V2 dot V2",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "dot",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "linear",
          "signature": "f a-\u003ef a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the norm of a vector in a metric space\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "norm",
          "package": "linear",
          "signature": "f a -\u003e a",
          "source": "src/Linear-Metric.html#norm",
          "type": "method"
        },
        "index": {
          "description": "Compute the norm of vector in metric space",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "norm",
          "normalized": "a b-\u003eb",
          "package": "linear",
          "signature": "f a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a \u003ccode\u003e\u003ca\u003eMetric\u003c/a\u003e\u003c/code\u003e functor to have unit \u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e. This function\n does not change the functor if its \u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e is 0 or 1.\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "normalize",
          "package": "linear",
          "signature": "f a -\u003e f a",
          "source": "src/Linear-Metric.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Normalize Metric functor to have unit norm This function does not change the functor if its norm is or",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "normalize",
          "normalized": "a b-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the quadrance of the difference\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "qd",
          "package": "linear",
          "signature": "f a -\u003e f a -\u003e a",
          "source": "src/Linear-Metric.html#qd",
          "type": "method"
        },
        "index": {
          "description": "Compute the quadrance of the difference",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "qd",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "linear",
          "signature": "f a-\u003ef a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:qd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the squared norm. The name quadrance arises from\n Norman J. Wildberger's rational trigonometry.\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "quadrance",
          "package": "linear",
          "signature": "f a -\u003e a",
          "source": "src/Linear-Metric.html#quadrance",
          "type": "method"
        },
        "index": {
          "description": "Compute the squared norm The name quadrance arises from Norman Wildberger rational trigonometry",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "quadrance",
          "normalized": "a b-\u003eb",
          "package": "linear",
          "signature": "f a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:quadrance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a non-zero vector to unit vector.\n\u003c/p\u003e",
          "module": "Linear.Metric",
          "name": "signorm",
          "package": "linear",
          "signature": "f a -\u003e f a",
          "source": "src/Linear-Metric.html#signorm",
          "type": "method"
        },
        "index": {
          "description": "Convert non-zero vector to unit vector",
          "hierarchy": "Linear Metric",
          "module": "Linear.Metric",
          "name": "signorm",
          "normalized": "a b-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Metric.html#v:signorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePl&#252;cker coordinates for lines in 3d homogeneous space.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "source": "src/Linear-Plucker.html",
          "type": "module"
        },
        "index": {
          "description": "Pl cker coordinates for lines in homogeneous space",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "partial": "Plucker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen lines are represented as Pl&#252;cker coordinates, we have the\n ability to check for both directed and undirected\n equality. Undirected equality between \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003es (or a \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eRay\u003c/a\u003e\u003c/code\u003e) checks that the two lines coincide in 3D space. Directed\n equality, between two \u003ccode\u003e\u003ca\u003eRay\u003c/a\u003e\u003c/code\u003es, checks that two lines coincide in 3D,\n and have the same direction. To accomodate these two notions of\n equality, we use an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance on the \u003ccode\u003e\u003ca\u003eCoincides\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e\u003cp\u003eFor example, to check the \u003cem\u003edirected\u003c/em\u003e equality between two lines,\n \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e, we write, \u003ccode\u003eRay p1 == Ray p2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "Coincides",
          "package": "linear",
          "source": "src/Linear-Plucker.html#Coincides",
          "type": "data"
        },
        "index": {
          "description": "When lines are represented as Pl cker coordinates we have the ability to check for both directed and undirected equality Undirected equality between Line or Line and Ray checks that the two lines coincide in space Directed equality between two Ray checks that two lines coincide in and have the same direction To accomodate these two notions of equality we use an Eq instance on the Coincides data type For example to check the directed equality between two lines p1 and p2 we write Ray p1 Ray p2",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Coincides",
          "package": "linear",
          "partial": "Coincides",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#t:Coincides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe how two lines pass each other.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "LinePass",
          "package": "linear",
          "source": "src/Linear-Plucker.html#LinePass",
          "type": "data"
        },
        "index": {
          "description": "Describe how two lines pass each other",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "LinePass",
          "package": "linear",
          "partial": "Line Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#t:LinePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePl&#252;cker coordinates for lines in a 3-dimensional space.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "source": "src/Linear-Plucker.html#Plucker",
          "type": "data"
        },
        "index": {
          "description": "Pl cker coordinates for lines in dimensional space",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "partial": "Plucker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#t:Plucker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis isn't th actual metric because this bilinear form gives rise to an isotropic quadratic space\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "(\u003e\u003c)",
          "package": "linear",
          "signature": "Plucker a -\u003e Plucker a -\u003e a",
          "source": "src/Linear-Plucker.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "This isn th actual metric because this bilinear form gives rise to an isotropic quadratic space",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "Plucker a-\u003ePlucker a-\u003ea",
          "package": "linear",
          "signature": "Plucker a-\u003ePlucker a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lines pass each other clockwise (right-handed\n screw)\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "Clockwise",
          "package": "linear",
          "signature": "Clockwise",
          "source": "src/Linear-Plucker.html#LinePass",
          "type": "function"
        },
        "index": {
          "description": "The lines pass each other clockwise right-handed screw",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Clockwise",
          "package": "linear",
          "partial": "Clockwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Clockwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lines are coplanar (parallel or intersecting).\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "Coplanar",
          "package": "linear",
          "signature": "Coplanar",
          "source": "src/Linear-Plucker.html#LinePass",
          "type": "function"
        },
        "index": {
          "description": "The lines are coplanar parallel or intersecting",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Coplanar",
          "package": "linear",
          "partial": "Coplanar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Coplanar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lines pass each other counterclockwise\n (left-handed screw).\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "Counterclockwise",
          "package": "linear",
          "signature": "Counterclockwise",
          "source": "src/Linear-Plucker.html#LinePass",
          "type": "function"
        },
        "index": {
          "description": "The lines pass each other counterclockwise left-handed screw",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Counterclockwise",
          "package": "linear",
          "partial": "Counterclockwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Counterclockwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "Line",
          "package": "linear",
          "signature": "Plucker a -\u003e Coincides a",
          "source": "src/Linear-Plucker.html#Coincides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Line",
          "normalized": "Plucker a-\u003eCoincides a",
          "package": "linear",
          "partial": "Line",
          "signature": "Plucker a-\u003eCoincides a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "signature": "Plucker !a !a !a !a !a !a",
          "source": "src/Linear-Plucker.html#Plucker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Plucker",
          "package": "linear",
          "partial": "Plucker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Plucker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "Ray",
          "package": "linear",
          "signature": "Plucker a -\u003e Coincides a",
          "source": "src/Linear-Plucker.html#Coincides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "Ray",
          "normalized": "Plucker a-\u003eCoincides a",
          "package": "linear",
          "partial": "Ray",
          "signature": "Plucker a-\u003eCoincides a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:Ray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe point where a line is closest to the origin.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "closestToOrigin",
          "package": "linear",
          "signature": "Plucker a -\u003e V3 a",
          "source": "src/Linear-Plucker.html#closestToOrigin",
          "type": "function"
        },
        "index": {
          "description": "The point where line is closest to the origin",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "closestToOrigin",
          "normalized": "Plucker a-\u003eV a",
          "package": "linear",
          "partial": "To Origin",
          "signature": "Plucker a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:closestToOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e01",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e01",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e02",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e02",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e02",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e03",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e03",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e03",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e12",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e12",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e23",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e23",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Plucker",
          "name": "e31",
          "package": "linear",
          "signature": "E Plucker",
          "source": "src/Linear-Plucker.html#e31",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "e31",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:e31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if two lines intersect (or nearly intersect).\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "intersects",
          "package": "linear",
          "signature": "Plucker a -\u003e Plucker a -\u003e Bool",
          "source": "src/Linear-Plucker.html#intersects",
          "type": "function"
        },
        "index": {
          "description": "Checks if two lines intersect or nearly intersect",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "intersects",
          "normalized": "Plucker a-\u003ePlucker a-\u003eBool",
          "package": "linear",
          "signature": "Plucker a-\u003ePlucker a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:intersects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot all 6-dimensional points correspond to a line in 3D. This\n predicate tests that a Pl&#252;cker coordinate lies on the Grassmann\n manifold, and does indeed represent a 3D line.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "isLine",
          "package": "linear",
          "signature": "Plucker a -\u003e Bool",
          "source": "src/Linear-Plucker.html#isLine",
          "type": "function"
        },
        "index": {
          "description": "Not all dimensional points correspond to line in This predicate tests that Pl cker coordinate lies on the Grassmann manifold and does indeed represent line",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "isLine",
          "normalized": "Plucker a-\u003eBool",
          "package": "linear",
          "partial": "Line",
          "signature": "Plucker a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:isLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the line is near-isotropic (isotropic vectors in this\n quadratic space represent lines in real 3d space).\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "isotropic",
          "package": "linear",
          "signature": "Plucker a -\u003e Bool",
          "source": "src/Linear-Plucker.html#isotropic",
          "type": "function"
        },
        "index": {
          "description": "Checks if the line is near-isotropic isotropic vectors in this quadratic space represent lines in real space",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "isotropic",
          "normalized": "Plucker a-\u003eBool",
          "package": "linear",
          "signature": "Plucker a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:isotropic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p01",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p01",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p01",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p02",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p02",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p02",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p03",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p03",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p03",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p10",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p10",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p10",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p12",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p12",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p12",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p13",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p13",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p13",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p20",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p20",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p20",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p21",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p21",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p21",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p23",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p23",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p23",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p30",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p30",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p30",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form a basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep01\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep02\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep03\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep23\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep31\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep12\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p31",
          "package": "linear",
          "signature": "Lens' (Plucker a) a",
          "source": "src/Linear-Plucker.html#p31",
          "type": "function"
        },
        "index": {
          "description": "These elements form basis for the Pl cker space or the Grassmanian manifold Gr V4 p01 Lens Plucker p02 Lens Plucker p03 Lens Plucker p23 Lens Plucker p31 Lens Plucker p12 Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p31",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese elements form an alternate basis for the Pl&#252;cker space, or the Grassmanian manifold \u003ccode\u003eGr(2,V4)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ep10\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep20\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep30\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep32\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep13\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n \u003ccode\u003e\u003ca\u003ep21\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a =\u003e Lens' (\u003ccode\u003e\u003ca\u003ePlucker\u003c/a\u003e\u003c/code\u003e a) a\n\u003c/pre\u003e",
          "module": "Linear.Plucker",
          "name": "p32",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e Plucker a -\u003e f (Plucker a)",
          "source": "src/Linear-Plucker.html#p32",
          "type": "function"
        },
        "index": {
          "description": "These elements form an alternate basis for the Pl cker space or the Grassmanian manifold Gr V4 p10 Num Lens Plucker p20 Num Lens Plucker p30 Num Lens Plucker p32 Num Lens Plucker p13 Num Lens Plucker p21 Num Lens Plucker",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "p32",
          "normalized": "(a-\u003eb a)-\u003ePlucker a-\u003eb(Plucker a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003ePlucker a-\u003ef(Plucker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:p32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if two lines are parallel.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "parallel",
          "package": "linear",
          "signature": "Plucker a -\u003e Plucker a -\u003e Bool",
          "source": "src/Linear-Plucker.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Checks if two lines are parallel",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "parallel",
          "normalized": "Plucker a-\u003ePlucker a-\u003eBool",
          "package": "linear",
          "signature": "Plucker a-\u003ePlucker a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck how two lines pass each other. \u003ccode\u003epasses l1 l2\u003c/code\u003e describes\n \u003ccode\u003el2\u003c/code\u003e when looking down \u003ccode\u003el1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "passes",
          "package": "linear",
          "signature": "Plucker a -\u003e Plucker a -\u003e LinePass",
          "source": "src/Linear-Plucker.html#passes",
          "type": "function"
        },
        "index": {
          "description": "Check how two lines pass each other passes l1 l2 describes l2 when looking down l1",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "passes",
          "normalized": "Plucker a-\u003ePlucker a-\u003eLinePass",
          "package": "linear",
          "signature": "Plucker a-\u003ePlucker a-\u003eLinePass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:passes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of points represented by homogeneous coordinates\n generate Pl&#252;cker coordinates for the line through them, directed\n from the second towards the first.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "plucker",
          "package": "linear",
          "signature": "V4 a -\u003e V4 a -\u003e Plucker a",
          "source": "src/Linear-Plucker.html#plucker",
          "type": "function"
        },
        "index": {
          "description": "Given pair of points represented by homogeneous coordinates generate Pl cker coordinates for the line through them directed from the second towards the first",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "plucker",
          "normalized": "V a-\u003eV a-\u003ePlucker a",
          "package": "linear",
          "signature": "V a-\u003eV a-\u003ePlucker a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:plucker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of 3D points, generate Pl&#252;cker coordinates for the\n line through them, directed from the second towards the first.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "plucker3D",
          "package": "linear",
          "signature": "V3 a -\u003e V3 a -\u003e Plucker a",
          "source": "src/Linear-Plucker.html#plucker3D",
          "type": "function"
        },
        "index": {
          "description": "Given pair of points generate Pl cker coordinates for the line through them directed from the second towards the first",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "plucker3D",
          "normalized": "V a-\u003eV a-\u003ePlucker a",
          "package": "linear",
          "signature": "V a-\u003eV a-\u003ePlucker a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:plucker3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum squared distance of a line from the origin.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "quadranceToOrigin",
          "package": "linear",
          "signature": "Plucker a -\u003e a",
          "source": "src/Linear-Plucker.html#quadranceToOrigin",
          "type": "function"
        },
        "index": {
          "description": "The minimum squared distance of line from the origin",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "quadranceToOrigin",
          "normalized": "Plucker a-\u003ea",
          "package": "linear",
          "partial": "To Origin",
          "signature": "Plucker a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:quadranceToOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid Pl&#252;cker coordinates \u003ccode\u003ep\u003c/code\u003e will have \u003ccode\u003e\u003ccode\u003e\u003ca\u003esquaredError\u003c/a\u003e\u003c/code\u003e p \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e 0\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThat said, floating point makes a mockery of this claim, so you may want to use \u003ccode\u003e\u003ca\u003enearZero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Plucker",
          "name": "squaredError",
          "package": "linear",
          "signature": "Plucker a -\u003e a",
          "source": "src/Linear-Plucker.html#squaredError",
          "type": "function"
        },
        "index": {
          "description": "Valid Pl cker coordinates will have squaredError That said floating point makes mockery of this claim so you may want to use nearZero",
          "hierarchy": "Linear Plucker",
          "module": "Linear.Plucker",
          "name": "squaredError",
          "normalized": "Plucker a-\u003ea",
          "package": "linear",
          "partial": "Error",
          "signature": "Plucker a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Plucker.html#v:squaredError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuaternions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "source": "src/Linear-Quaternion.html",
          "type": "module"
        },
        "index": {
          "description": "Quaternions",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "partial": "Quaternion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector space that includes the basis elements \u003ccode\u003e\u003ca\u003e_e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_i\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "Complicated",
          "package": "linear",
          "source": "src/Linear-Quaternion.html#Complicated",
          "type": "class"
        },
        "index": {
          "description": "vector space that includes the basis elements and",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "Complicated",
          "package": "linear",
          "partial": "Complicated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#t:Complicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector space that includes the basis elements \u003ccode\u003e\u003ca\u003e_e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_i\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_j\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_k\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "Hamiltonian",
          "package": "linear",
          "source": "src/Linear-Quaternion.html#Hamiltonian",
          "type": "class"
        },
        "index": {
          "description": "vector space that includes the basis elements and",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "Hamiltonian",
          "package": "linear",
          "partial": "Hamiltonian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#t:Hamiltonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuaternions\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "source": "src/Linear-Quaternion.html#Quaternion",
          "type": "data"
        },
        "index": {
          "description": "Quaternions",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "partial": "Quaternion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#t:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "signature": "Quaternion !a !(V3 a)",
          "source": "src/Linear-Quaternion.html#Quaternion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "Quaternion",
          "package": "linear",
          "partial": "Quaternion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "_e",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-Quaternion.html#_e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "_e",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "_ijk",
          "package": "linear",
          "signature": "Lens' (t a) (V3 a)",
          "source": "src/Linear-Quaternion.html#_ijk",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "_ijk",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:_ijk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "_j",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-Quaternion.html#_j",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "_j",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:_j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enorm of the imaginary component\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "absi",
          "package": "linear",
          "signature": "Quaternion a -\u003e a",
          "source": "src/Linear-Quaternion.html#absi",
          "type": "function"
        },
        "index": {
          "description": "norm of the imaginary component",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "absi",
          "normalized": "Quaternion a-\u003ea",
          "package": "linear",
          "signature": "Quaternion a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:absi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "acoshq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#acoshq",
          "type": "function"
        },
        "index": {
          "description": "acosh with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "acoshq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:acoshq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "acosq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#acosq",
          "type": "function"
        },
        "index": {
          "description": "acos with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "acosq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:acosq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "asinhq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#asinhq",
          "type": "function"
        },
        "index": {
          "description": "asinh with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "asinhq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:asinhq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "asinq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#asinq",
          "type": "function"
        },
        "index": {
          "description": "asin with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "asinq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:asinq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "atanhq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#atanhq",
          "type": "function"
        },
        "index": {
          "description": "atanh with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "atanhq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:atanhq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e with a specified branch cut.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "atanq",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#atanq",
          "type": "function"
        },
        "index": {
          "description": "atan with specified branch cut",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "atanq",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:atanq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaxisAngle\u003c/a\u003e\u003c/code\u003e axis theta\u003c/code\u003e builds a \u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e representing a\n rotation of \u003ccode\u003etheta\u003c/code\u003e radians about \u003ccode\u003eaxis\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "axisAngle",
          "package": "linear",
          "signature": "V3 a -\u003e a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#axisAngle",
          "type": "function"
        },
        "index": {
          "description": "axisAngle axis theta builds Quaternion representing rotation of theta radians about axis",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "axisAngle",
          "normalized": "V a-\u003ea-\u003eQuaternion a",
          "package": "linear",
          "partial": "Angle",
          "signature": "V a-\u003ea-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:axisAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "ee",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-Quaternion.html#ee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "ee",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:ee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "ei",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-Quaternion.html#ei",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "ei",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:ei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "ej",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-Quaternion.html#ej",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "ej",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:ej"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Quaternion",
          "name": "ek",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-Quaternion.html#ek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "ek",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:ek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a \u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e to a scalar power\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "pow",
          "package": "linear",
          "signature": "Quaternion a -\u003e a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#pow",
          "type": "function"
        },
        "index": {
          "description": "raise Quaternion to scalar power",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "pow",
          "normalized": "Quaternion a-\u003ea-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003ea-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a rotation to a vector.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "rotate",
          "package": "linear",
          "signature": "Quaternion a -\u003e V3 a -\u003e V3 a",
          "source": "src/Linear-Quaternion.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Apply rotation to vector",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "rotate",
          "normalized": "Quaternion a-\u003eV a-\u003eV a",
          "package": "linear",
          "signature": "Quaternion a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpherical linear interpolation between two quaternions.\n\u003c/p\u003e",
          "module": "Linear.Quaternion",
          "name": "slerp",
          "package": "linear",
          "signature": "Quaternion a -\u003e Quaternion a -\u003e a -\u003e Quaternion a",
          "source": "src/Linear-Quaternion.html#slerp",
          "type": "function"
        },
        "index": {
          "description": "Spherical linear interpolation between two quaternions",
          "hierarchy": "Linear Quaternion",
          "module": "Linear.Quaternion",
          "name": "slerp",
          "normalized": "Quaternion a-\u003eQuaternion a-\u003ea-\u003eQuaternion a",
          "package": "linear",
          "signature": "Quaternion a-\u003eQuaternion a-\u003ea-\u003eQuaternion a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Quaternion.html#v:slerp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple matrix operation for low-dimensional primitives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Trace",
          "name": "Trace",
          "package": "linear",
          "source": "src/Linear-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "Simple matrix operation for low-dimensional primitives",
          "hierarchy": "Linear Trace",
          "module": "Linear.Trace",
          "name": "Trace",
          "package": "linear",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Trace",
          "name": "Trace",
          "package": "linear",
          "source": "src/Linear-Trace.html#Trace",
          "type": "class"
        },
        "index": {
          "hierarchy": "Linear Trace",
          "module": "Linear.Trace",
          "name": "Trace",
          "package": "linear",
          "partial": "Trace",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the diagonal of a matrix\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediagonal (V2 (V2 a b) (V2 c d))\n\u003c/code\u003e\u003c/strong\u003eV2 a d\n\u003c/pre\u003e",
          "module": "Linear.Trace",
          "name": "diagonal",
          "package": "linear",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Linear-Trace.html#diagonal",
          "type": "method"
        },
        "index": {
          "description": "Compute the diagonal of matrix diagonal V2 V2 V2 V2",
          "hierarchy": "Linear Trace",
          "module": "Linear.Trace",
          "name": "diagonal",
          "normalized": "a(a b)-\u003ea b",
          "package": "linear",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Trace.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the trace of a matrix\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etrace (V2 (V2 a b) (V2 c d))\n\u003c/code\u003e\u003c/strong\u003ea + d\n\u003c/pre\u003e",
          "module": "Linear.Trace",
          "name": "trace",
          "package": "linear",
          "signature": "m (m a) -\u003e a",
          "source": "src/Linear-Trace.html#trace",
          "type": "method"
        },
        "index": {
          "description": "Compute the trace of matrix trace V2 V2 V2",
          "hierarchy": "Linear Trace",
          "module": "Linear.Trace",
          "name": "trace",
          "normalized": "a(a b)-\u003eb",
          "package": "linear",
          "signature": "m(m a)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003en-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V",
          "name": "V",
          "package": "linear",
          "source": "src/Linear-V.html",
          "type": "module"
        },
        "index": {
          "description": "n-D Vectors",
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "V",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "Dim",
          "package": "linear",
          "source": "src/Linear-V.html#Dim",
          "type": "class"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "Dim",
          "package": "linear",
          "partial": "Dim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#t:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "V",
          "package": "linear",
          "source": "src/Linear-V.html#V",
          "type": "data"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "V",
          "package": "linear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "dim",
          "package": "linear",
          "signature": "V n a -\u003e Int",
          "source": "src/Linear-V.html#dim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "dim",
          "normalized": "V a b-\u003eInt",
          "package": "linear",
          "signature": "V n a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "fromVector",
          "package": "linear",
          "signature": "Vector a -\u003e Maybe (V n a)",
          "source": "src/Linear-V.html#fromVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "fromVector",
          "normalized": "Vector a-\u003eMaybe(V b a)",
          "package": "linear",
          "partial": "Vector",
          "signature": "Vector a-\u003eMaybe(V n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis can be used to generate a template haskell splice for a type level version of a given \u003ccode\u003e\u003ca\u003eint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis does not use GHC TypeLits, instead it generates a numeric type by hand similar to the ones used\n in the \"Functional Pearl: Implicit Configurations\" paper by Oleg Kiselyov and Chung-Chieh Shan.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003einstance Num (Q Exp)\u003c/code\u003e provided in this package allows writing \u003ccode\u003e$(3)\u003c/code\u003e\n instead of \u003ccode\u003e$(int 3)\u003c/code\u003e. Sometimes the two will produce the same\n representation (if compiled without the \u003ccode\u003e-DUSE_TYPE_LITS\u003c/code\u003e preprocessor\n directive).\n\u003c/p\u003e",
          "module": "Linear.V",
          "name": "int",
          "package": "linear",
          "signature": "Int -\u003e TypeQ",
          "type": "function"
        },
        "index": {
          "description": "This can be used to generate template haskell splice for type level version of given int This does not use GHC TypeLits instead it generates numeric type by hand similar to the ones used in the Functional Pearl Implicit Configurations paper by Oleg Kiselyov and Chung-Chieh Shan instance Num Exp provided in this package allows writing instead of int Sometimes the two will produce the same representation if compiled without the DUSE TYPE LITS preprocessor directive",
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "int",
          "normalized": "Int-\u003eTypeQ",
          "package": "linear",
          "signature": "Int-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "reflectDim",
          "package": "linear",
          "signature": "p n -\u003e Int",
          "source": "src/Linear-V.html#reflectDim",
          "type": "method"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "reflectDim",
          "normalized": "a b-\u003eInt",
          "package": "linear",
          "partial": "Dim",
          "signature": "p n-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:reflectDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "reifyDim",
          "package": "linear",
          "signature": "Proxy n -\u003e r) -\u003e r",
          "source": "src/Linear-V.html#reifyDim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "reifyDim",
          "normalized": "Proxy a-\u003eb)-\u003eb",
          "package": "linear",
          "partial": "Dim",
          "signature": "Proxy n-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:reifyDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V",
          "name": "reifyVector",
          "package": "linear",
          "signature": "V n a -\u003e r) -\u003e r",
          "source": "src/Linear-V.html#reifyVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V",
          "module": "Linear.V",
          "name": "reifyVector",
          "normalized": "V a b-\u003ec)-\u003ec",
          "package": "linear",
          "partial": "Vector",
          "signature": "V n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V.html#v:reifyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e0-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "source": "src/Linear-V0.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Linear V0",
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V0.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 0-dimensional vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epure 1 :: V0 Int\n\u003c/code\u003e\u003c/strong\u003eV0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV0 + V0\n\u003c/code\u003e\u003c/strong\u003eV0\n\u003c/pre\u003e",
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "source": "src/Linear-V0.html#V0",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector pure V0 Int V0 V0 V0 V0",
          "hierarchy": "Linear V0",
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V0.html#t:V0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "signature": "V0",
          "source": "src/Linear-V0.html#V0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V0",
          "module": "Linear.V0",
          "name": "V0",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V0.html#v:V0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e1-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "source": "src/Linear-V1.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that has at least 1 basis vector \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.V1",
          "name": "R1",
          "package": "linear",
          "source": "src/Linear-V1.html#R1",
          "type": "class"
        },
        "index": {
          "description": "space that has at least basis vector",
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "R1",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 1-dimensional vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epure 1 :: V1 Int\n\u003c/code\u003e\u003c/strong\u003eV1 1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 + V1 3\n\u003c/code\u003e\u003c/strong\u003eV1 5\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 * V1 3\n\u003c/code\u003e\u003c/strong\u003eV1 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esum (V1 2)\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "source": "src/Linear-V1.html#V1",
          "type": "newtype"
        },
        "index": {
          "description": "dimensional vector pure V1 Int V1 V1 V1 V1 V1 V1 V1 sum V1",
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#t:V1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "signature": "V1 a",
          "source": "src/Linear-V1.html#V1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "V1",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#v:V1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 ^._x\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 & _x .~ 3\n\u003c/code\u003e\u003c/strong\u003eV1 3\n\u003c/pre\u003e",
          "module": "Linear.V1",
          "name": "_x",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-V1.html#_x",
          "type": "method"
        },
        "index": {
          "description": "V1 V1 V1",
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "_x",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#v:_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Linear.V1\",\"Linear.V2\",\"Linear.V3\",\"Linear.V4\"]",
          "name": "ex",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-V1.html#ex",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/linear/docs/Linear-V1.html#v:ex\",\"http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:ex\",\"http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:ex\",\"http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:ex\"]"
        },
        "index": {
          "hierarchy": "Linear V1",
          "module": "Linear.V1",
          "name": "ex",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V1.html#v:ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "source": "src/Linear-V2.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that has at least 1 basis vector \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.V2",
          "name": "R1",
          "package": "linear",
          "source": "src/Linear-V1.html#R1",
          "type": "class"
        },
        "index": {
          "description": "space that has at least basis vector",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "R1",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes 2 orthogonal basis vectors \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, but may have more.\n\u003c/p\u003e",
          "module": "Linear.V2",
          "name": "R2",
          "package": "linear",
          "source": "src/Linear-V2.html#R2",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors and but may have more",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "R2",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2-dimensional vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epure 1 :: V2 Int\n\u003c/code\u003e\u003c/strong\u003eV2 1 1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 + V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 4 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 * V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 3 8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esum (V2 1 2)\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e",
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "source": "src/Linear-V2.html#V2",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector pure V2 Int V2 V2 V2 V2 V2 V2 V2 sum V2",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#t:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "signature": "V2 !a !a",
          "source": "src/Linear-V2.html#V2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "V2",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 ^._x\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 & _x .~ 3\n\u003c/code\u003e\u003c/strong\u003eV1 3\n\u003c/pre\u003e",
          "module": "Linear.V2",
          "name": "_x",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-V1.html#_x",
          "type": "method"
        },
        "index": {
          "description": "V1 V1 V1",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "_x",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xy\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV2\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V2",
          "name": "_xy",
          "package": "linear",
          "signature": "(V2 a -\u003e f (V2 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_xy",
          "type": "method"
        },
        "index": {
          "description": "xy Lens V2",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "_xy",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:_xy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 ^._y\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 & _y .~ 3\n\u003c/code\u003e\u003c/strong\u003eV2 1 3\n\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V2",
          "name": "_y",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_y",
          "type": "method"
        },
        "index": {
          "description": "V2 V2 V2 Lens",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "_y",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:_y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Linear.V2\",\"Linear.V3\",\"Linear.V4\"]",
          "name": "ey",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-V2.html#ey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:ey\",\"http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:ey\",\"http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:ey\"]"
        },
        "index": {
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "ey",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:ey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe counter-clockwise perpendicular vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eperp $ V2 10 20\n\u003c/code\u003e\u003c/strong\u003eV2 (-20) 10\n\u003c/pre\u003e",
          "module": "Linear.V2",
          "name": "perp",
          "package": "linear",
          "signature": "V2 a -\u003e V2 a",
          "source": "src/Linear-V2.html#perp",
          "type": "function"
        },
        "index": {
          "description": "the counter-clockwise perpendicular vector perp V2 V2",
          "hierarchy": "Linear V2",
          "module": "Linear.V2",
          "name": "perp",
          "normalized": "V a-\u003eV a",
          "package": "linear",
          "signature": "V a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V2.html#v:perp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e3-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "source": "src/Linear-V3.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that has at least 1 basis vector \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "R1",
          "package": "linear",
          "source": "src/Linear-V1.html#R1",
          "type": "class"
        },
        "index": {
          "description": "space that has at least basis vector",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "R1",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes 2 orthogonal basis vectors \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, but may have more.\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "R2",
          "package": "linear",
          "source": "src/Linear-V2.html#R2",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors and but may have more",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "R2",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes 3 orthogonal basis vectors: \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003e_z\u003c/a\u003e\u003c/code\u003e. (It may have more)\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "R3",
          "package": "linear",
          "source": "src/Linear-V3.html#R3",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors and It may have more",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "R3",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#t:R3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3-dimensional vector\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "source": "src/Linear-V3.html#V3",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#t:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "signature": "V3 !a !a !a",
          "source": "src/Linear-V3.html#V3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "V3",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 ^._x\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 & _x .~ 3\n\u003c/code\u003e\u003c/strong\u003eV1 3\n\u003c/pre\u003e",
          "module": "Linear.V3",
          "name": "_x",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-V1.html#_x",
          "type": "method"
        },
        "index": {
          "description": "V1 V1 V1",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "_x",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xy\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV2\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V3",
          "name": "_xy",
          "package": "linear",
          "signature": "(V2 a -\u003e f (V2 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_xy",
          "type": "method"
        },
        "index": {
          "description": "xy Lens V2",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "_xy",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:_xy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xyz\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV3\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V3",
          "name": "_xyz",
          "package": "linear",
          "signature": "(V3 a -\u003e f (V3 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V3.html#_xyz",
          "type": "method"
        },
        "index": {
          "description": "xyz Lens V3",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "_xyz",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:_xyz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 ^._y\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 & _y .~ 3\n\u003c/code\u003e\u003c/strong\u003eV2 1 3\n\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V3",
          "name": "_y",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_y",
          "type": "method"
        },
        "index": {
          "description": "V2 V2 V2 Lens",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "_y",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:_y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_z\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V3",
          "name": "_z",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V3.html#_z",
          "type": "method"
        },
        "index": {
          "description": "Lens",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "_z",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:_z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecross product\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "cross",
          "package": "linear",
          "signature": "V3 a -\u003e V3 a -\u003e V3 a",
          "source": "src/Linear-V3.html#cross",
          "type": "function"
        },
        "index": {
          "description": "cross product",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "cross",
          "normalized": "V a-\u003eV a-\u003eV a",
          "package": "linear",
          "signature": "V a-\u003eV a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Linear.V3\",\"Linear.V4\"]",
          "name": "ez",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-V3.html#ez",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:ez\",\"http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:ez\"]"
        },
        "index": {
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "ez",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:ez"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escalar triple product\n\u003c/p\u003e",
          "module": "Linear.V3",
          "name": "triple",
          "package": "linear",
          "signature": "V3 a -\u003e V3 a -\u003e V3 a -\u003e a",
          "source": "src/Linear-V3.html#triple",
          "type": "function"
        },
        "index": {
          "description": "scalar triple product",
          "hierarchy": "Linear V3",
          "module": "Linear.V3",
          "name": "triple",
          "normalized": "V a-\u003eV a-\u003eV a-\u003ea",
          "package": "linear",
          "signature": "V a-\u003eV a-\u003eV a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V3.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e4-D Vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "source": "src/Linear-V4.html",
          "type": "module"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that has at least 1 basis vector \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "R1",
          "package": "linear",
          "source": "src/Linear-V1.html#R1",
          "type": "class"
        },
        "index": {
          "description": "space that has at least basis vector",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "R1",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes 2 orthogonal basis vectors \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, but may have more.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "R2",
          "package": "linear",
          "source": "src/Linear-V2.html#R2",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors and but may have more",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "R2",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes 3 orthogonal basis vectors: \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003e_z\u003c/a\u003e\u003c/code\u003e. (It may have more)\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "R3",
          "package": "linear",
          "source": "src/Linear-V3.html#R3",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors and It may have more",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "R3",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#t:R3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space that distinguishes orthogonal basis vectors \u003ccode\u003e\u003ca\u003e_x\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_z\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e_w\u003c/a\u003e\u003c/code\u003e. (It may have more.)\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "R4",
          "package": "linear",
          "source": "src/Linear-V4.html#R4",
          "type": "class"
        },
        "index": {
          "description": "space that distinguishes orthogonal basis vectors It may have more",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "R4",
          "package": "linear",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#t:R4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4-dimensional vector.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "source": "src/Linear-V4.html#V4",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#t:V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "signature": "V4 !a !a !a !a",
          "source": "src/Linear-V4.html#V4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "V4",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_w\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_w",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V4.html#_w",
          "type": "method"
        },
        "index": {
          "description": "Lens",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_w",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 ^._x\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV1 2 & _x .~ 3\n\u003c/code\u003e\u003c/strong\u003eV1 3\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_x",
          "package": "linear",
          "signature": "Lens' (t a) a",
          "source": "src/Linear-V1.html#_x",
          "type": "method"
        },
        "index": {
          "description": "V1 V1 V1",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_x",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xy\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV2\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_xy",
          "package": "linear",
          "signature": "(V2 a -\u003e f (V2 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_xy",
          "type": "method"
        },
        "index": {
          "description": "xy Lens V2",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_xy",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_xy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xyz\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV3\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_xyz",
          "package": "linear",
          "signature": "(V3 a -\u003e f (V3 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V3.html#_xyz",
          "type": "method"
        },
        "index": {
          "description": "xyz Lens V3",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_xyz",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_xyz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_xyzw\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) (\u003ccode\u003e\u003ca\u003eV4\u003c/a\u003e\u003c/code\u003e a)\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_xyzw",
          "package": "linear",
          "signature": "(V4 a -\u003e f (V4 a)) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V4.html#_xyzw",
          "type": "method"
        },
        "index": {
          "description": "xyzw Lens V4",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_xyzw",
          "normalized": "(V a-\u003eb(V a))-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(V a-\u003ef(V a))-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_xyzw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 ^._y\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 & _y .~ 3\n\u003c/code\u003e\u003c/strong\u003eV2 1 3\n\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_y\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_y",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V2.html#_y",
          "type": "method"
        },
        "index": {
          "description": "V2 V2 V2 Lens",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_y",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003e_z\u003c/a\u003e\u003c/code\u003e :: Lens' (t a) a\n\u003c/pre\u003e",
          "module": "Linear.V4",
          "name": "_z",
          "package": "linear",
          "signature": "(a -\u003e f a) -\u003e t a -\u003e f (t a)",
          "source": "src/Linear-V3.html#_z",
          "type": "method"
        },
        "index": {
          "description": "Lens",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "_z",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "linear",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:_z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.V4",
          "name": "ew",
          "package": "linear",
          "signature": "E t",
          "source": "src/Linear-V4.html#ew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "ew",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:ew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert 4-dimensional projective coordinates to a 3-dimensional\n point. This operation may be denoted, \u003ccode\u003eeuclidean [x:y:z:w] = (x/w,\n y/w, z/w)\u003c/code\u003e where the projective, homogenous, coordinate\n \u003ccode\u003e[x:y:z:w]\u003c/code\u003e is one of many associated with a single point \u003ccode\u003e(x/w,\n y/w, z/w)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "normalizePoint",
          "package": "linear",
          "signature": "V4 a -\u003e V3 a",
          "source": "src/Linear-V4.html#normalizePoint",
          "type": "function"
        },
        "index": {
          "description": "Convert dimensional projective coordinates to dimensional point This operation may be denoted euclidean where the projective homogenous coordinate is one of many associated with single point",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "normalizePoint",
          "normalized": "V a-\u003eV a",
          "package": "linear",
          "partial": "Point",
          "signature": "V a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:normalizePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a 3-dimensional affine point into a 4-dimensional homogeneous vector.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "point",
          "package": "linear",
          "signature": "V3 a -\u003e V4 a",
          "source": "src/Linear-V4.html#point",
          "type": "function"
        },
        "index": {
          "description": "Convert dimensional affine point into dimensional homogeneous vector",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "point",
          "normalized": "V a-\u003eV a",
          "package": "linear",
          "signature": "V a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a 3-dimensional affine vector into a 4-dimensional homogeneous vector.\n\u003c/p\u003e",
          "module": "Linear.V4",
          "name": "vector",
          "package": "linear",
          "signature": "V3 a -\u003e V4 a",
          "source": "src/Linear-V4.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Convert dimensional affine vector into dimensional homogeneous vector",
          "hierarchy": "Linear V4",
          "module": "Linear.V4",
          "name": "vector",
          "normalized": "V a-\u003eV a",
          "package": "linear",
          "signature": "V a-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-V4.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on free vector spaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear.Vector",
          "name": "Vector",
          "package": "linear",
          "source": "src/Linear-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on free vector spaces",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "Vector",
          "package": "linear",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector is an additive group with additional structure.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "Additive",
          "package": "linear",
          "source": "src/Linear-Vector.html#Additive",
          "type": "class"
        },
        "index": {
          "description": "vector is an additive group with additional structure",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "Additive",
          "package": "linear",
          "partial": "Additive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#t:Additive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasis element\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "E",
          "package": "linear",
          "source": "src/Linear-Vector.html#E",
          "type": "newtype"
        },
        "index": {
          "description": "Basis element",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "E",
          "package": "linear",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the left scalar product\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e2 *^ V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 6 8\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "(*^)",
          "package": "linear",
          "signature": "a -\u003e f a -\u003e f a",
          "source": "src/Linear-Vector.html#%2A%5E",
          "type": "function"
        },
        "index": {
          "description": "Compute the left scalar product V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "(*^) *^",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "linear",
          "signature": "a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the right scalar product\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 3 4 ^* 2\n\u003c/code\u003e\u003c/strong\u003eV2 6 8\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "(^*)",
          "package": "linear",
          "signature": "f a -\u003e a -\u003e f a",
          "source": "src/Linear-Vector.html#%5E%2A",
          "type": "function"
        },
        "index": {
          "description": "Compute the right scalar product V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "(^*) ^*",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:-94--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum of two vectors\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 ^+^ V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 4 6\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "(^+^)",
          "package": "linear",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Linear-Vector.html#%5E%2B%5E",
          "type": "method"
        },
        "index": {
          "description": "Compute the sum of two vectors V2 V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "(^+^) ^+^",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:-94--43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the difference between two vectors\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 4 5 - V2 3 1\n\u003c/code\u003e\u003c/strong\u003eV2 1 4\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "(^-^)",
          "package": "linear",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Linear-Vector.html#%5E-%5E",
          "type": "method"
        },
        "index": {
          "description": "Compute the difference between two vectors V2 V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "(^-^) ^-^",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:-94--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute division by a scalar on the right.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "(^/)",
          "package": "linear",
          "signature": "f a -\u003e a -\u003e f a",
          "source": "src/Linear-Vector.html#%5E%2F",
          "type": "function"
        },
        "index": {
          "description": "Compute division by scalar on the right",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "(^/) ^/",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:-94--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Vector",
          "name": "E",
          "package": "linear",
          "signature": "E",
          "source": "src/Linear-Vector.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "E",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a default basis for a vector space. If the dimensionality\n of the vector space is not statically known, see \u003ccode\u003e\u003ca\u003ebasisFor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "basis",
          "package": "linear",
          "signature": "[t a]",
          "source": "src/Linear-Vector.html#basis",
          "type": "function"
        },
        "index": {
          "description": "Produce default basis for vector space If the dimensionality of the vector space is not statically known see basisFor",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "basis",
          "normalized": "[a b]",
          "package": "linear",
          "signature": "[t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:basis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a default basis for a vector space from which the\n argument is drawn.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "basisFor",
          "package": "linear",
          "signature": "t b -\u003e [t a]",
          "source": "src/Linear-Vector.html#basisFor",
          "type": "function"
        },
        "index": {
          "description": "Produce default basis for vector space from which the argument is drawn",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "basisFor",
          "normalized": "a b-\u003e[a c]",
          "package": "linear",
          "partial": "For",
          "signature": "t b-\u003e[t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:basisFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Linear.Vector",
          "name": "el",
          "package": "linear",
          "signature": "forall x.  Lens' (t x) x",
          "source": "src/Linear-Vector.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "el",
          "package": "linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:el"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a diagonal matrix from a vector.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "kronecker",
          "package": "linear",
          "signature": "t a -\u003e t (t a)",
          "source": "src/Linear-Vector.html#kronecker",
          "type": "function"
        },
        "index": {
          "description": "Produce diagonal matrix from vector",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "kronecker",
          "normalized": "a b-\u003ea(a b)",
          "package": "linear",
          "signature": "t a-\u003et(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:kronecker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinearly interpolate between two vectors.\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "lerp",
          "package": "linear",
          "signature": "a -\u003e f a -\u003e f a -\u003e f a",
          "source": "src/Linear-Vector.html#lerp",
          "type": "method"
        },
        "index": {
          "description": "Linearly interpolate between two vectors",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "lerp",
          "normalized": "a-\u003eb a-\u003eb a-\u003eb a",
          "package": "linear",
          "signature": "a-\u003ef a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:lerp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the components of two vectors.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For a dense vector this is equivalent to \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For a sparse vector this is equivalent to \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Linear.Vector",
          "name": "liftI2",
          "package": "linear",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Linear-Vector.html#liftI2",
          "type": "method"
        },
        "index": {
          "description": "Apply function to the components of two vectors For dense vector this is equivalent to liftA2 For sparse vector this is equivalent to intersectionWith",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "liftI2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "linear",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:liftI2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to merge the 'non-zero' components of two vectors, unioning the rest of the values.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For a dense vector this is equivalent to \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For a sparse vector this is equivalent to \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Linear.Vector",
          "name": "liftU2",
          "package": "linear",
          "signature": "(a -\u003e a -\u003e a) -\u003e f a -\u003e f a -\u003e f a",
          "source": "src/Linear-Vector.html#liftU2",
          "type": "method"
        },
        "index": {
          "description": "Apply function to merge the non-zero components of two vectors unioning the rest of the values For dense vector this is equivalent to liftA2 For sparse vector this is equivalent to unionWith",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "liftU2",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "linear",
          "signature": "(a-\u003ea-\u003ea)-\u003ef a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:liftU2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the negation of a vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enegated (V2 2 4)\n\u003c/code\u003e\u003c/strong\u003eV2 (-2) (-4)\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "negated",
          "package": "linear",
          "signature": "f a -\u003e f a",
          "source": "src/Linear-Vector.html#negated",
          "type": "function"
        },
        "index": {
          "description": "Compute the negation of vector negated V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "negated",
          "normalized": "a b-\u003ea b",
          "package": "linear",
          "signature": "f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:negated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOuter (tensor) product of two vectors\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "outer",
          "package": "linear",
          "signature": "f a -\u003e g a -\u003e f (g a)",
          "source": "src/Linear-Vector.html#outer",
          "type": "function"
        },
        "index": {
          "description": "Outer tensor product of two vectors",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "outer",
          "normalized": "a b-\u003ec b-\u003ea(c b)",
          "package": "linear",
          "signature": "f a-\u003eg a-\u003ef(g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:outer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum over multiple vectors\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esumV [V2 1 1, V2 3 4]\n\u003c/code\u003e\u003c/strong\u003eV2 4 5\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "sumV",
          "package": "linear",
          "signature": "f (v a) -\u003e v a",
          "source": "src/Linear-Vector.html#sumV",
          "type": "function"
        },
        "index": {
          "description": "Sum over multiple vectors sumV V2 V2 V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "sumV",
          "normalized": "a(b c)-\u003eb c",
          "package": "linear",
          "signature": "f(v a)-\u003ev a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:sumV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a unit vector.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunit _x :: V2 Int\n\u003c/code\u003e\u003c/strong\u003eV2 1 0\n\u003c/pre\u003e",
          "module": "Linear.Vector",
          "name": "unit",
          "package": "linear",
          "signature": "Lens' (t a) a -\u003e t a",
          "source": "src/Linear-Vector.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Create unit vector unit V2 Int V2",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "unit",
          "normalized": "Lens'(a b)b-\u003ea b",
          "package": "linear",
          "signature": "Lens'(t a)a-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zero vector\n\u003c/p\u003e",
          "module": "Linear.Vector",
          "name": "zero",
          "package": "linear",
          "signature": "f a",
          "source": "src/Linear-Vector.html#zero",
          "type": "method"
        },
        "index": {
          "description": "The zero vector",
          "hierarchy": "Linear Vector",
          "module": "Linear.Vector",
          "name": "zero",
          "package": "linear",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear-Vector.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module simply re-exports everything from the various modules\n that make up the linear package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Linear",
          "name": "Linear",
          "package": "linear",
          "source": "src/Linear.html",
          "type": "module"
        },
        "index": {
          "description": "This module simply re-exports everything from the various modules that make up the linear package",
          "hierarchy": "Linear",
          "module": "Linear",
          "name": "Linear",
          "package": "linear",
          "partial": "Linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linear/docs/Linear.html#"
      }
    }
  ]
]