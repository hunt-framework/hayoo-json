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
        "word": "hdph-closure"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExplicit Closures, inspired by [1] and refined by [2].\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Epstein, Black, Peyton-Jones. \u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e.\n     Haskell Symposium 2011.\n\u003c/li\u003e\u003cli\u003e Maier, Trinder. \u003cem\u003eImplementing a High-level Distributed-Memory\u003c/em\u003e\n     \u003cem\u003eParallel Haskell in Haskell\u003c/em\u003e. IFL 2011.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Closure",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure.html",
          "type": "module"
        },
        "index": {
          "description": "Explicit Closures inspired by and refined by References Epstein Black Peyton-Jones Towards Haskell in the Cloud Haskell Symposium Maier Trinder Implementing High-level Distributed-Memory Parallel Haskell in Haskell IFL",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Closure",
          "package": "hdph-closure",
          "partial": "Closure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn explicit Closure, ie. a term of type \u003ccode\u003eClosure a\u003c/code\u003e, maintains a dual\n representation of an actual closure (ie. a thunk) of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e One half of that representation is the actual closure, the \u003cem\u003ethunk\u003c/em\u003e\n     of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The other half is a serialisable representation of the thunk,\n     consisting of a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e environment deserialiser, of type\n     \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e -\u003e a)\u003c/code\u003e, plus a serialised environment of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eRepresentation (1) is used for computing with Closures while\n representation (2) is used for serialising and communicating Closures\n across the network.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Closure",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#Closure",
          "type": "data"
        },
        "index": {
          "description": "An explicit Closure ie term of type Closure maintains dual representation of an actual closure ie thunk of type One half of that representation is the actual closure the thunk of type The other half is serialisable representation of the thunk consisting of Static environment deserialiser of type Static Env plus serialised environment of type Env Representation is used for computing with Closures while representation is used for serialising and communicating Closures across the network",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Closure",
          "package": "hdph-closure",
          "partial": "Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type of serialised environments.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Env",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#Env",
          "type": "data"
        },
        "index": {
          "description": "Abstract type of serialised environments",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Env",
          "package": "hdph-closure",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e'LocT a'\u003c/code\u003e is a representation of a Haskell source location\n (or more precisely, the location of a Template Haskell slice, as produced by\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehere\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e). Additionally, this location is annotated with a phantom type \u003ccode\u003ea\u003c/code\u003e,\n which is used for mapping location indexing to type indexing.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "LocT",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#LocT",
          "type": "data"
        },
        "index": {
          "description": "value of type LocT is representation of Haskell source location or more precisely the location of Template Haskell slice as produced by here Additionally this location is annotated with phantom type which is used for mapping location indexing to type indexing",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "LocT",
          "package": "hdph-closure",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:LocT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term of type \u003ccode\u003eStatic a\u003c/code\u003e is a serialisable reference to a \u003cem\u003estatic\u003c/em\u003e term\n of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Static",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure-Static-Type.html#Static",
          "type": "data"
        },
        "index": {
          "description": "term of type Static is serialisable reference to static term of type",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "Static",
          "package": "hdph-closure",
          "partial": "Static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e declaration is a collection of static terms together with\n their serialisable \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e references.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e declarations form a monoid, and can be combined by methods of\n class \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "StaticDecl",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure-Static-Type.html#StaticDecl",
          "type": "data"
        },
        "index": {
          "description": "Static declaration is collection of static terms together with their serialisable Static references Static declarations form monoid and can be combined by methods of class Monoid",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "StaticDecl",
          "package": "hdph-closure",
          "partial": "Static Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:StaticDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for declaring the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialisers required by\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eToClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instances; see the tutorial below for a more thorough \n explanation.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "StaticToClosure",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure.html#StaticToClosure",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for declaring the Static deserialisers required by ToClosure instances see the tutorial below for more thorough explanation",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "StaticToClosure",
          "package": "hdph-closure",
          "partial": "Static To Closure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:StaticToClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexing class, recording types which support the \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e operation;\n see the tutorial below for a more thorough explanation.\n Note that \u003ccode\u003eToClosure\u003c/code\u003e is a subclass of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "ToClosure",
          "package": "hdph-closure",
          "source": "src/Control-Parallel-HdpH-Closure.html#ToClosure",
          "type": "class"
        },
        "index": {
          "description": "Indexing class recording types which support the toClosure operation see the tutorial below for more thorough explanation Note that ToClosure is subclass of Serialize",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "ToClosure",
          "package": "hdph-closure",
          "partial": "To Closure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#t:ToClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of a function Closure to another Closure.\n Behaves like the \u003ccode\u003eap\u003c/code\u003e operation of an applicative functor.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "apC",
          "package": "hdph-closure",
          "signature": "Closure (a -\u003e b) -\u003e Closure a -\u003e Closure b",
          "source": "src/Control-Parallel-HdpH-Closure.html#apC",
          "type": "function"
        },
        "index": {
          "description": "Application of function Closure to another Closure Behaves like the ap operation of an applicative functor",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "apC",
          "normalized": "Closure(a-\u003eb)-\u003eClosure a-\u003eClosure b",
          "package": "hdph-closure",
          "signature": "Closure(a-\u003eb)-\u003eClosure a-\u003eClosure b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:apC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of function Closures.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "compC",
          "package": "hdph-closure",
          "signature": "Closure (b -\u003e c) -\u003e Closure (a -\u003e b) -\u003e Closure (a -\u003e c)",
          "source": "src/Control-Parallel-HdpH-Closure.html#compC",
          "type": "function"
        },
        "index": {
          "description": "Composition of function Closures",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "compC",
          "normalized": "Closure(a-\u003eb)-\u003eClosure(c-\u003ea)-\u003eClosure(c-\u003eb)",
          "package": "hdph-closure",
          "signature": "Closure(b-\u003ec)-\u003eClosure(a-\u003eb)-\u003eClosure(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:compC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromotes a given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e reference to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e declaration\n consisting exactly of the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e reference (and the static term\n it refers to).\n See the tutorial below for how to declare \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e references.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "declare",
          "package": "hdph-closure",
          "signature": "Static a -\u003e StaticDecl",
          "source": "src/Control-Parallel-HdpH-Closure-Static.html#declare",
          "type": "function"
        },
        "index": {
          "description": "Promotes given Static reference to Static declaration consisting exactly of the given Static reference and the static term it refers to See the tutorial below for how to declare Static references",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "declare",
          "normalized": "Static a-\u003eStaticDecl",
          "package": "hdph-closure",
          "signature": "Static a-\u003eStaticDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:declare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH.Closure",
          "name": "declareStatic",
          "package": "hdph-closure",
          "signature": "StaticDecl",
          "source": "src/Control-Parallel-HdpH-Closure.html#declareStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "declareStatic",
          "package": "hdph-closure",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:declareStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialises a serialised environment producing a value of type \u003ccode\u003ea\u003c/code\u003e.\n Note that the programmer asserts that the environment can be deserialised\n at type \u003ccode\u003ea\u003c/code\u003e, a type mismatch may abort or crash the program.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "decodeEnv",
          "package": "hdph-closure",
          "signature": "Env -\u003e a",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#decodeEnv",
          "type": "function"
        },
        "index": {
          "description": "Deserialises serialised environment producing value of type Note that the programmer asserts that the environment can be deserialised at type type mismatch may abort or crash the program",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "decodeEnv",
          "normalized": "Env-\u003ea",
          "package": "hdph-closure",
          "partial": "Env",
          "signature": "Env-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:decodeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a serialised environment from a given value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "encodeEnv",
          "package": "hdph-closure",
          "signature": "a -\u003e Env",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#encodeEnv",
          "type": "function"
        },
        "index": {
          "description": "Creates serialised environment from given value of type",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "encodeEnv",
          "normalized": "a-\u003eEnv",
          "package": "hdph-closure",
          "partial": "Env",
          "signature": "a-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:encodeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eforceClosure\u003c/code\u003e fully forces its argument, ie. fully normalises the thunk.\n Importantly, \u003ccode\u003eforceClosure\u003c/code\u003e also updates the serialisable closure\n represention in order to keep it in sync with the normalised thunk.\n Note that only the thunk of the resulting Closure is in normal form;\n for the serialisable representation to also be in normal form, the resulting\n Closure must be forced by \u003ccode\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eforceClosure clo\u003c/code\u003e does not have the same effect as\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e clo\u003c/code\u003e (because \u003ccode\u003eforceClosure\u003c/code\u003e updates the closure\n   representation), or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e $ toClosure $ unClosure clo\u003c/code\u003e (because\n   \u003ccode\u003eforceClosure\u003c/code\u003e does not force the resulting Closure's serialisable\n   representation).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "forceClosure",
          "package": "hdph-closure",
          "signature": "Closure a -\u003e Closure a",
          "source": "src/Control-Parallel-HdpH-Closure.html#forceClosure",
          "type": "function"
        },
        "index": {
          "description": "forceClosure fully forces its argument ie fully normalises the thunk Importantly forceClosure also updates the serialisable closure represention in order to keep it in sync with the normalised thunk Note that only the thunk of the resulting Closure is in normal form for the serialisable representation to also be in normal form the resulting Closure must be forced by deepseq Note that forceClosure clo does not have the same effect as force clo because forceClosure updates the closure representation or force toClosure unClosure clo because forceClosure does not force the resulting Closure serialisable representation",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "forceClosure",
          "normalized": "Closure a-\u003eClosure a",
          "package": "hdph-closure",
          "partial": "Closure",
          "signature": "Closure a-\u003eClosure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:forceClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell construct returning its own location when spliced.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "here",
          "package": "hdph-closure",
          "signature": "ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#here",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell construct returning its own location when spliced",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "here",
          "package": "hdph-closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity arrow wrapped in a Closure.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "idC",
          "package": "hdph-closure",
          "signature": "Closure (a -\u003e a)",
          "source": "src/Control-Parallel-HdpH-Closure.html#idC",
          "type": "function"
        },
        "index": {
          "description": "Identity arrow wrapped in Closure",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "idC",
          "normalized": "Closure(a-\u003ea)",
          "package": "hdph-closure",
          "signature": "Closure(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:idC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly method of class \u003ccode\u003eToClosure\u003c/code\u003e, recording the source location\n where an instance of \u003ccode\u003eToClosure\u003c/code\u003e is declared.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "locToClosure",
          "package": "hdph-closure",
          "signature": "LocT a",
          "source": "src/Control-Parallel-HdpH-Closure.html#locToClosure",
          "type": "method"
        },
        "index": {
          "description": "Only method of class ToClosure recording the source location where an instance of ToClosure is declared",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "locToClosure",
          "package": "hdph-closure",
          "partial": "To Closure",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:locToClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation constructing a Closure from a given thunk.\n The thunk must either be a single toplevel closure (in which case the result\n is a \u003cem\u003estatic\u003c/em\u003e Closure), or an application of a toplevel closure\n abstraction to a tuple of local variables.\n See the tutorial below for how to use \u003ccode\u003emkClosure\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "mkClosure",
          "package": "hdph-closure",
          "signature": "ExpQ -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#mkClosure",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation constructing Closure from given thunk The thunk must either be single toplevel closure in which case the result is static Closure or an application of toplevel closure abstraction to tuple of local variables See the tutorial below for how to use mkClosure",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "mkClosure",
          "normalized": "ExpQ-\u003eExpQ",
          "package": "hdph-closure",
          "partial": "Closure",
          "signature": "ExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:mkClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation constructing a family of Closures from a\n given thunk. The family is indexed by location (that's what the suffix \u003ccode\u003eLoc\u003c/code\u003e\n stands for).\n The thunk must either be a single toplevel closure (in which case the result\n is a family of \u003cem\u003estatic\u003c/em\u003e Closures), or an application of a toplevel closure\n abstraction to a tuple of local variables.\n See the tutorial below for how to use \u003ccode\u003emkClosureLoc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "mkClosureLoc",
          "package": "hdph-closure",
          "signature": "ExpQ -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#mkClosureLoc",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation constructing family of Closures from given thunk The family is indexed by location that what the suffix Loc stands for The thunk must either be single toplevel closure in which case the result is family of static Closures or an application of toplevel closure abstraction to tuple of local variables See the tutorial below for how to use mkClosureLoc",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "mkClosureLoc",
          "normalized": "ExpQ-\u003eExpQ",
          "package": "hdph-closure",
          "partial": "Closure Loc",
          "signature": "ExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:mkClosureLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegisters the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e declaration; that is, stores the\n declaration in the global \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003etable\u003c/em\u003e. Must be called exactly once,\n before any operations involving \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e references (or explicit Closures).\n See the tutorial below for how to register a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e declaration.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "register",
          "package": "hdph-closure",
          "signature": "StaticDecl -\u003e IO ()",
          "source": "src/Control-Parallel-HdpH-Closure-Static.html#register",
          "type": "function"
        },
        "index": {
          "description": "Registers the given Static declaration that is stores the declaration in the global Static table Must be called exactly once before any operations involving Static references or explicit Closures See the tutorial below for how to register Static declaration",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "register",
          "normalized": "StaticDecl-\u003eIO()",
          "package": "hdph-closure",
          "signature": "StaticDecl-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmits the contents of the global \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e table as a list of Strings,\n one per entry. Useful for debugging; not to be called prior to registration.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "showStaticTable",
          "package": "hdph-closure",
          "signature": "[String]",
          "source": "src/Control-Parallel-HdpH-Closure-Static.html#showStaticTable",
          "type": "function"
        },
        "index": {
          "description": "Emits the contents of the global Static table as list of Strings one per entry Useful for debugging not to be called prior to registration",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "showStaticTable",
          "normalized": "[String]",
          "package": "hdph-closure",
          "partial": "Static Table",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:showStaticTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation converting a toplevel closure abstraction\n (given by its name) into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialiser.\n See the tutorial below for how to use \u003ccode\u003estatic\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "static",
          "package": "hdph-closure",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#static",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation converting toplevel closure abstraction given by its name into Static deserialiser See the tutorial below for how to use static",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "static",
          "normalized": "Name-\u003eExpQ",
          "package": "hdph-closure",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation converting a toplevel closure abstraction\n (given by its name) into a family of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialisers indexed by\n location (that's what the suffix \u003ccode\u003eLoc\u003c/code\u003e stands for).\n See the tutorial below for how to use \u003ccode\u003estaticLoc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticLoc",
          "package": "hdph-closure",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#staticLoc",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation converting toplevel closure abstraction given by its name into family of Static deserialisers indexed by location that what the suffix Loc stands for See the tutorial below for how to use staticLoc",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticLoc",
          "normalized": "Name-\u003eExpQ",
          "package": "hdph-closure",
          "partial": "Loc",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:staticLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation converting a static toplevel closure\n (given by its name) into a family of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialisers indexed by\n location (that's what the suffix \u003ccode\u003eLoc\u003c/code\u003e stands for).\n Note that a static closure ignores its empty environment (which is\n what the suffix \u003ccode\u003e_\u003c/code\u003e is meant to signify).\n See the tutorial below for how to use \u003ccode\u003estaticLoc_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticLoc_",
          "package": "hdph-closure",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#staticLoc_",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation converting static toplevel closure given by its name into family of Static deserialisers indexed by location that what the suffix Loc stands for Note that static closure ignores its empty environment which is what the suffix is meant to signify See the tutorial below for how to use staticLoc",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticLoc_",
          "normalized": "Name-\u003eExpQ",
          "package": "hdph-closure",
          "partial": "Loc",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:staticLoc_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialiser required by a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eToClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance;\n see the tutorial below for a more thorough explanation.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticToClosure",
          "package": "hdph-closure",
          "signature": "StaticToClosure a",
          "source": "src/Control-Parallel-HdpH-Closure.html#staticToClosure",
          "type": "function"
        },
        "index": {
          "description": "Static deserialiser required by ToClosure instance see the tutorial below for more thorough explanation",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "staticToClosure",
          "package": "hdph-closure",
          "partial": "To Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:staticToClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell transformation converting a static toplevel closure\n (given by its name) into a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialiser.\n Note that a static closure ignores its empty environment (which is\n what the suffix \u003ccode\u003e_\u003c/code\u003e is meant to signify).\n See the tutorial below for how to use \u003ccode\u003estatic_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "static_",
          "package": "hdph-closure",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#static_",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell transformation converting static toplevel closure given by its name into Static deserialiser Note that static closure ignores its empty environment which is what the suffix is meant to signify See the tutorial below for how to use static",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "static_",
          "normalized": "Name-\u003eExpQ",
          "package": "hdph-closure",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:static_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal arrow wrapped in a Closure.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "termC",
          "package": "hdph-closure",
          "signature": "Closure (a -\u003e ())",
          "source": "src/Control-Parallel-HdpH-Closure.html#termC",
          "type": "function"
        },
        "index": {
          "description": "Terminal arrow wrapped in Closure",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "termC",
          "normalized": "Closure(a-\u003e())",
          "package": "hdph-closure",
          "signature": "Closure(a-\u003e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:termC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoClosure x\u003c/code\u003e constructs a value Closure wrapping \u003ccode\u003ex\u003c/code\u003e, provided the\n type of \u003ccode\u003ex\u003c/code\u003e is an instance of class \u003ccode\u003e\u003ccode\u003e\u003ca\u003eToClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n Note that the serialised representation of the resulting Closure stores a\n serialised representation (as per class \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) of\n \u003ccode\u003ex\u003c/code\u003e, so serialising the resulting Closure will force \u003ccode\u003ex\u003c/code\u003e (hence could be\n costly). However, Closure construction itself is cheap.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "toClosure",
          "package": "hdph-closure",
          "signature": "a -\u003e Closure a",
          "source": "src/Control-Parallel-HdpH-Closure.html#toClosure",
          "type": "function"
        },
        "index": {
          "description": "toClosure constructs value Closure wrapping provided the type of is an instance of class ToClosure Note that the serialised representation of the resulting Closure stores serialised representation as per class Serialize of so serialising the resulting Closure will force hence could be costly However Closure construction itself is cheap",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "toClosure",
          "normalized": "a-\u003eClosure a",
          "package": "hdph-closure",
          "partial": "Closure",
          "signature": "a-\u003eClosure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:toClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminates a Closure by returning its thunk.\n This operation is cheap.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "unClosure",
          "package": "hdph-closure",
          "signature": "Closure a -\u003e a",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#unClosure",
          "type": "function"
        },
        "index": {
          "description": "Eliminates Closure by returning its thunk This operation is cheap",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "unClosure",
          "normalized": "Closure a-\u003ea",
          "package": "hdph-closure",
          "partial": "Closure",
          "signature": "Closure a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:unClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunsafeMkClosure thk fun env\u003c/code\u003e constructs a Closure that\n\u003c/p\u003e\u003col\u003e\u003cli\u003e wraps the thunk \u003ccode\u003ethk\u003c/code\u003e and\n\u003c/li\u003e\u003cli\u003e whose serialised representation consists of the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialiser\n    \u003ccode\u003efun\u003c/code\u003e and the serialised environment \u003ccode\u003eenv\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis operation is cheap and does not require Template Haskell support,\n but it is \u003cem\u003eunsafe\u003c/em\u003e because it relies on the programmer to ensure that\n both closure representations evaluate to the same term.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "unsafeMkClosure",
          "package": "hdph-closure",
          "signature": "a -\u003e Static (Env -\u003e a) -\u003e Env -\u003e Closure a",
          "source": "src/Control-Parallel-HdpH-Closure-Internal.html#unsafeMkClosure",
          "type": "function"
        },
        "index": {
          "description": "unsafeMkClosure thk fun env constructs Closure that wraps the thunk thk and whose serialised representation consists of the Static deserialiser fun and the serialised environment env This operation is cheap and does not require Template Haskell support but it is unsafe because it relies on the programmer to ensure that both closure representations evaluate to the same term",
          "hierarchy": "Control Parallel HdpH Closure",
          "module": "Control.Parallel.HdpH.Closure",
          "name": "unsafeMkClosure",
          "normalized": "a-\u003eStatic(Env-\u003ea)-\u003eEnv-\u003eClosure a",
          "package": "hdph-closure",
          "partial": "Mk Closure",
          "signature": "a-\u003eStatic(Env-\u003ea)-\u003eEnv-\u003eClosure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph-closure/docs/Control-Parallel-HdpH-Closure.html#v:unsafeMkClosure"
      }
    }
  ]
]